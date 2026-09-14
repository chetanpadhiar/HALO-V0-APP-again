import { createServer, type IncomingMessage, type ServerResponse } from "node:http";
import { createOrGetUser, createSession, destroySession, getSessionUser, audit } from "./auth.ts";
import { getDb, nowIso, initDatabase } from "./db.ts";
import { parseJsonField } from "./db-interface.ts";
import { recomputeCampaignsForInstitution, listCampaignsForInstitution, getCampaignForInstitution, setCampaignStatus } from "./campaigns.ts";
import { googleProvider } from "./providers/google.ts";
import { microsoftProvider } from "./providers/microsoft.ts";
import { detectProvider } from "./providers/detect.ts";
import type { MailboxProvider } from "./providers/provider.ts";
import { encryptToken, decryptToken } from "./crypto.ts";

const PROVIDERS: Record<string, MailboxProvider> = { google: googleProvider, microsoft: microsoftProvider };

const PORT = Number(process.env.PORT) || 8788;
const ML_SERVICE_URL = process.env.ML_SERVICE_URL || "http://127.0.0.1:8787";
const COOKIE_NAME = "halo_session";
const IS_PRODUCTION = process.env.NODE_ENV === "production";

if (IS_PRODUCTION && !process.env.ALLOWED_ORIGIN) {
  console.error(
    "WARNING: NODE_ENV=production but ALLOWED_ORIGIN is not set. " +
    "Cross-origin browser requests will be refused (no permissive CORS fallback in production) " +
    "until ALLOWED_ORIGIN is configured to your real frontend origin."
  );
}

function sessionCookieHeader(token: string): string {
  // SameSite=Lax cookies are NOT sent on cross-site fetch()/XHR calls --
  // only on top-level navigations. The real target architecture (Vercel
  // frontend, separately-hosted API) is genuinely cross-origin, so
  // production needs SameSite=None (paired mandatorily with Secure --
  // browsers reject None without Secure). Local dev stays Lax/no-Secure
  // since it's typically same-origin-ish and often plain HTTP, where a
  // Secure cookie would simply never be sent at all.
  return IS_PRODUCTION
    ? `${COOKIE_NAME}=${token}; HttpOnly; Path=/; SameSite=None; Secure; Max-Age=43200`
    : `${COOKIE_NAME}=${token}; HttpOnly; Path=/; SameSite=Lax; Max-Age=43200`;
}

function clearCookieHeader(name: string): string {
  return IS_PRODUCTION
    ? `${name}=; HttpOnly; Path=/; SameSite=None; Secure; Max-Age=0`
    : `${name}=; HttpOnly; Path=/; Max-Age=0`;
}

function nonceCookieHeader(nonce: string): string {
  return IS_PRODUCTION
    ? `halo_oauth_nonce=${nonce}; HttpOnly; Path=/; SameSite=None; Secure; Max-Age=600`
    : `halo_oauth_nonce=${nonce}; HttpOnly; Path=/; SameSite=Lax; Max-Age=600`;
}

function parseCookies(req: IncomingMessage): Record<string, string> {
  const header = req.headers.cookie || "";
  const out: Record<string, string> = {};
  header.split(";").forEach((part) => {
    const [k, ...v] = part.trim().split("=");
    if (k) out[k] = decodeURIComponent(v.join("="));
  });
  return out;
}

const MAX_BODY_BYTES = 10 * 1024 * 1024; // 10MB -- generous for a batch of demo emails, bounded against abuse

function readJsonBody(req: IncomingMessage): Promise<any> {
  return new Promise((resolve) => {
    let data = "";
    let bytes = 0;
    let tooLarge = false;
    req.on("data", (chunk) => {
      bytes += chunk.length;
      if (bytes > MAX_BODY_BYTES) {
        tooLarge = true;
        req.destroy();
        return;
      }
      data += chunk;
    });
    req.on("end", () => {
      if (tooLarge) {
        resolve({ __tooLarge: true });
        return;
      }
      try {
        resolve(data ? JSON.parse(data) : {});
      } catch {
        resolve({});
      }
    });
  });
}

function sendJson(req: IncomingMessage, res: ServerResponse, status: number, body: unknown): void {
  const origin = req.headers.origin;
  const payload = JSON.stringify(body);
  const allowedOrigin = process.env.ALLOWED_ORIGIN;
  let originToSend: string | null;
  if (allowedOrigin) {
    originToSend = origin === allowedOrigin ? origin : null;
  } else if (IS_PRODUCTION) {
    originToSend = null;
  } else {
    originToSend = origin || "*";
  }
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "Cache-Control": "private, no-store, max-age=0",
    "Pragma": "no-cache",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  };
  if (originToSend) headers["Access-Control-Allow-Origin"] = originToSend;
  res.writeHead(status, headers);
  res.end(payload);
}

async function currentUser(req: IncomingMessage) {
  const cookies = parseCookies(req);
  return getSessionUser(cookies[COOKIE_NAME]);
}

/** Every route that needs a role goes through this -- the role always
 * comes from the session-derived user, never from req body/headers/query.
 * This is the concrete, testable answer to "role must not be trusted
 * from the frontend." */
async function requireRole(req: IncomingMessage, res: ServerResponse, role: "student" | "institution") {
  const user = await currentUser(req);
  if (!user) {
    sendJson(req, res, 401, { error: { code: "UNAUTHENTICATED", message: "No valid session." } });
    return null;
  }
  if (user.role !== role) {
    await audit(user.id, `access:${role}-route`, "denied", `session role is '${user.role}'`);
    sendJson(req, res, 403, { error: { code: "FORBIDDEN", message: `This route requires the '${role}' role. Your authenticated role is '${user.role}'.` } });
    return null;
  }
  await audit(user.id, `access:${role}-route`, "allowed");
  return user;
}

const server = createServer(async (req, res) => {
  if (req.method === "OPTIONS") {
    sendJson(req, res, 204, {});
    return;
  }
  const url = new URL(req.url || "/", `http://${req.headers.host}`);

  // ---- DEV-ONLY MOCK AUTH ------------------------------------------------
  if (url.pathname === "/auth/detect-provider" && req.method === "POST") {
    const body = await readJsonBody(req);
    if (body.__tooLarge) { sendJson(req, res, 413, { error: { code: "PAYLOAD_TOO_LARGE", message: "Request body exceeds the size limit." } }); return; }
    const email = String(body.email || "").trim().toLowerCase();
    const domain = email.split("@")[1];
    if (!domain) {
      sendJson(req, res, 400, { error: { code: "INVALID_EMAIL", message: "A valid email is required." } });
      return;
    }
    const provider = await detectProvider(domain);
    sendJson(req, res, 200, { domain, provider });
    return;
  }

  const authorizeMatch = url.pathname.match(/^\/auth\/(google|microsoft)\/authorize$/);
  if (authorizeMatch && req.method === "GET") {
    const provider = PROVIDERS[authorizeMatch[1]];
    const email = url.searchParams.get("email") || "";
    const role = url.searchParams.get("role") === "institution" ? "institution" : "student";
    const redirectBase = process.env.OAUTH_REDIRECT_BASE_URL || url.origin;
    const redirectUri = `${redirectBase}/auth/${provider.name}/callback`;
    if (!provider.isConfigured()) {
      sendJson(req, res, 501, {
        error: {
          code: "PROVIDER_NOT_CONFIGURED",
          message: `${provider.name === "google" ? "Google" : "Microsoft"} connection isn't configured on this deployment yet.`,
        },
      });
      return;
    }
    const nonce = crypto.randomUUID();
    const state = Buffer.from(JSON.stringify({ email, role, nonce })).toString("base64url");
    const authUrl = provider.getAuthorizationUrl(state, redirectUri)!;
    res.setHeader("Set-Cookie", nonceCookieHeader(nonce));
    res.writeHead(302, { Location: authUrl, "Cache-Control": "no-store" });
    res.end();
    return;
  }

  const callbackMatch = url.pathname.match(/^\/auth\/(google|microsoft)\/callback$/);
  if (callbackMatch && req.method === "GET") {
    const provider = PROVIDERS[callbackMatch[1]];
    const code = url.searchParams.get("code");
    const oauthError = url.searchParams.get("error");
    const redirectBase = process.env.OAUTH_REDIRECT_BASE_URL || url.origin;
    const redirectUri = `${redirectBase}/auth/${provider.name}/callback`;
    if (oauthError || !code) {
      sendJson(req, res, 400, { error: { code: "OAUTH_CANCELLED_OR_FAILED", message: oauthError || "No authorization code returned." } });
      return;
    }
    let state: { email: string; role: "student" | "institution"; nonce: string };
    try {
      state = JSON.parse(Buffer.from(url.searchParams.get("state") || "", "base64url").toString());
    } catch {
      sendJson(req, res, 400, { error: { code: "INVALID_STATE", message: "OAuth state was missing or corrupted." } });
      return;
    }
    const cookieNonce = parseCookies(req)["halo_oauth_nonce"];
    if (!cookieNonce || cookieNonce !== state.nonce) {
      await audit(null, "oauth:callback", "denied", `provider=${provider.name} nonce mismatch (possible CSRF)`);
      sendJson(req, res, 400, { error: { code: "CSRF_CHECK_FAILED", message: "This sign-in link is invalid or expired. Please try connecting again." } });
      return;
    }
    try {
      const tokens = await provider.handleCallback(code, redirectUri);
      const profile = await provider.getUserProfile(tokens.accessToken);
      const user = await createOrGetUser(profile.email.toLowerCase(), state.role, provider.name);
      const session = await createSession(user.id);
      const accountId = crypto.randomUUID();
      await getDb().run(
        "INSERT INTO email_accounts (id, user_id, provider, connected_at, is_demo_data, access_token, refresh_token, token_expires_at) VALUES (?, ?, ?, ?, 0, ?, ?, ?)",
        [accountId, user.id, provider.name, nowIso(), encryptToken(tokens.accessToken), tokens.refreshToken ? encryptToken(tokens.refreshToken) : null, tokens.expiresAt]
      );
      await audit(user.id, "login", "allowed", `provider=${provider.name} role=${user.role}`);
      res.setHeader("Set-Cookie", [sessionCookieHeader(session.token), clearCookieHeader("halo_oauth_nonce")]);
      // Redirect back to the FRONTEND, not this API's own origin --
      // this server has no UI to show at "/". FRONTEND_URL must be set
      // in any deployment where the frontend and API are on different
      // domains (the real target architecture); falls back to relative
      // "/" only for same-origin local dev convenience.
      const frontendUrl = process.env.FRONTEND_URL || "";
      res.writeHead(302, { Location: `${frontendUrl}/?connected=1`, "Cache-Control": "no-store" });
      res.end();
    } catch (e: any) {
      console.error("OAuth callback failed:", e);
      sendJson(req, res, 502, {
        error: { code: "OAUTH_TOKEN_EXCHANGE_FAILED", message: IS_PRODUCTION ? "Sign-in could not be completed. Please try again." : e.message },
      });
    }
    return;
  }

  if (url.pathname === "/system/integrations" && req.method === "GET") {
    let mlStatus = "NOT CONNECTED";
    try {
      const resp = await fetch(`${ML_SERVICE_URL}/health`, { signal: AbortSignal.timeout(3000) });
      mlStatus = resp.ok ? "CONNECTED" : "NOT CONNECTED";
    } catch {
      mlStatus = "NOT CONNECTED";
    }
    const dbOk = await getDb().ping();
    sendJson(req, res, 200, {
      google: googleProvider.isConfigured() ? "CONFIGURED" : "NOT CONFIGURED",
      microsoft: microsoftProvider.isConfigured() ? "CONFIGURED" : "NOT CONFIGURED",
      ml: mlStatus,
      database: dbOk ? "CONNECTED" : "DISCONNECTED",
      database_backend: process.env.DATABASE_URL ? "postgresql" : "sqlite",
    });
    return;
  }

  if (url.pathname === "/auth/mock-login" && req.method === "POST") {
    const body = await readJsonBody(req);
    if (body.__tooLarge) { sendJson(req, res, 413, { error: { code: "PAYLOAD_TOO_LARGE", message: "Request body exceeds the size limit." } }); return; }
    const email = String(body.email || "").trim().toLowerCase();
    const requestedRole = body.role === "institution" ? "institution" : "student";
    if (!email || !email.includes("@")) {
      sendJson(req, res, 400, { error: { code: "INVALID_EMAIL", message: "A valid email is required." } });
      return;
    }
    const user = await createOrGetUser(email, requestedRole, "mock");
    const session = await createSession(user.id);
    await audit(user.id, "login", "allowed", `provider=mock role=${user.role}`);
    res.setHeader("Set-Cookie", sessionCookieHeader(session.token));
    sendJson(req, res, 200, {
      user: { email: user.email, role: user.role, institution_id: user.institution_id },
      note: "DEMO DATA - MOCK AUTH (no real account connected)",
    });
    return;
  }

  if (url.pathname === "/auth/logout" && req.method === "POST") {
    const cookies = parseCookies(req);
    const user = await currentUser(req);
    if (user) {
      const accounts = await getDb().all<{ provider: string; access_token: string }>(
        "SELECT provider, access_token FROM email_accounts WHERE user_id = ? AND is_demo_data = 0 AND access_token IS NOT NULL",
        [user.id]
      );
      for (const acc of accounts) {
        const providerImpl = PROVIDERS[acc.provider];
        if (!providerImpl) continue;
        try {
          await providerImpl.revokeAccess(decryptToken(acc.access_token));
        } catch (e) {
          console.error(`Token revocation failed for provider=${acc.provider}:`, e);
        }
      }
      await audit(user.id, "logout", "allowed");
    }
    if (cookies[COOKIE_NAME]) await destroySession(cookies[COOKIE_NAME]);
    res.setHeader("Set-Cookie", clearCookieHeader(COOKIE_NAME));
    sendJson(req, res, 200, { status: "logged_out" });
    return;
  }

  if (url.pathname === "/me" && req.method === "GET") {
    const user = await currentUser(req);
    if (!user) {
      sendJson(req, res, 401, { error: { code: "UNAUTHENTICATED", message: "No valid session." } });
      return;
    }
    sendJson(req, res, 200, { email: user.email, role: user.role, institution_id: user.institution_id, auth_provider: user.auth_provider });
    return;
  }

  // ---- ROLE-LOCKED DASHBOARDS --------------------------------------------
  if (url.pathname === "/dashboard/student" && req.method === "GET") {
    const user = await requireRole(req, res, "student");
    if (!user) return;
    const analyses = await getDb().all<{ bucket: string; n: number }>(
      `SELECT ea.bucket, COUNT(*) as n FROM email_analyses ea
       JOIN emails e ON e.id = ea.email_id
       JOIN email_accounts acc ON acc.id = e.email_account_id
       WHERE acc.user_id = ? GROUP BY ea.bucket`,
      [user.id]
    );
    const counts = { safe: 0, attention: 0, "high-risk": 0 } as Record<string, number>;
    analyses.forEach((r) => (counts[r.bucket] = Number(r.n)));
    sendJson(req, res, 200, { role: "student", counts, note: counts.safe + counts.attention + counts["high-risk"] === 0 ? "No emails analyzed yet for this account." : undefined });
    return;
  }

  if (url.pathname === "/dashboard/institution" && req.method === "GET") {
    const user = await requireRole(req, res, "institution");
    if (!user) return;
    const campaigns = await getDb().get<{ n: number }>("SELECT COUNT(*) as n FROM campaigns WHERE institution_id = ?", [user.institution_id]);
    sendJson(req, res, 200, { role: "institution", institution_id: user.institution_id, active_campaigns: Number(campaigns?.n ?? 0) });
    return;
  }

  // ---- INSTITUTION-ONLY INTELLIGENCE (real data, no fabrication) ---------
  // All three below derive strictly from what's already been persisted --
  // real ML analyses this institution's students actually ran. No new
  // subsystem, no external API call, no invented numbers. requireRole
  // enforces the same institution-only 403 as every other institution
  // route (tested explicitly -- see tests/db.test.ts).
  async function institutionAnalysisRows(institutionId: string) {
    return getDb().all<{ email_id: string; bucket: string; raw_result_json: unknown; received_at: string; subject: string }>(`
      SELECT e.id as email_id, ea.bucket, ea.raw_result_json, e.received_at, e.subject
      FROM email_analyses ea
      JOIN emails e ON e.id = ea.email_id
      JOIN email_accounts acc ON acc.id = e.email_account_id
      JOIN users u ON u.id = acc.user_id
      WHERE u.institution_id = ?
    `, [institutionId]);
  }

  if (url.pathname === "/institution/threat-radar" && req.method === "GET") {
    const user = await requireRole(req, res, "institution");
    if (!user) return;
    const db = getDb();
    const campaigns = await db.get<{ n: number }>("SELECT COUNT(*) as n FROM campaigns WHERE institution_id = ?", [user.institution_id]);
    const rows = await institutionAnalysisRows(user.institution_id!);
    const suspicious = rows.filter((r) => r.bucket !== "safe").length;
    const infraSet = new Set<string>(), countrySet = new Set<string>();
    const ipCounts = new Map<string, number>();
    for (const r of rows) {
      const infra = parseJsonField<any>(r.raw_result_json)?.signals?.infrastructure;
      if (infra?.ip) {
        infraSet.add(infra.ip);
        ipCounts.set(infra.ip, (ipCounts.get(infra.ip) || 0) + 1);
        if (infra.country) countrySet.add(infra.country);
      }
    }
    let reused = 0;
    for (const [, count] of ipCounts) if (count > 1) reused++;
    sendJson(req, res, 200, {
      active_campaigns: Number(campaigns?.n ?? 0),
      emails_analyzed: rows.length,
      suspicious_emails: suspicious,
      infrastructure_nodes: infraSet.size,
      countries_observed: countrySet.size,
      infrastructure_reused: reused,
    });
    return;
  }

  if (url.pathname === "/institution/geo/infrastructure" && req.method === "GET") {
    const user = await requireRole(req, res, "institution");
    if (!user) return;
    const rows = await institutionAnalysisRows(user.institution_id!);
    const nodes = new Map<string, any>();
    for (const r of rows) {
      const infra = parseJsonField<any>(r.raw_result_json)?.signals?.infrastructure;
      if (!infra?.ip) continue;
      if (!nodes.has(infra.ip)) {
        nodes.set(infra.ip, {
          ip: infra.ip, org: infra.org || "unknown", asn: infra.asn || "unknown",
          country: infra.country || null, region: infra.region || null, category: infra.category || "unknown",
          risk_score: infra.score || 0, suspicious_emails: 0, first_observed: r.received_at, last_observed: r.received_at,
        });
      }
      const node = nodes.get(infra.ip);
      node.suspicious_emails++;
      if (!node.first_observed || r.received_at < node.first_observed) node.first_observed = r.received_at;
      if (!node.last_observed || r.received_at > node.last_observed) node.last_observed = r.received_at;
    }
    sendJson(req, res, 200, {
      // Honest about the data source: the SAME static reference table the
      // ML engine already uses for its infrastructure signal, not a live
      // GeoIP provider (none is configured -- see GEOIP_PROVIDER in
      // .env.example). Coordinates/city-level location are NOT included
      // because this source doesn't have them; only country/region/org/ASN.
      geo_source: "Derived from HALO's existing infrastructure reference table (used for scoring). No live GeoIP provider is configured.",
      nodes: Array.from(nodes.values()).map((n) => ({ ...n, reused: n.suspicious_emails > 1 })),
    });
    return;
  }

  if (url.pathname === "/institution/trends" && req.method === "GET") {
    const user = await requireRole(req, res, "institution");
    if (!user) return;
    const rows = await institutionAnalysisRows(user.institution_id!);
    const suspicious = rows.filter((r) => r.bucket !== "safe" && r.received_at);
    // Real comparison over actually-received timestamps -- last 24h vs
    // the 24h before that. Never asserts a trend without enough data to
    // support one (matches "do not call a random fluctuation a trend").
    const now = Date.now();
    const last24h = suspicious.filter((r) => now - new Date(r.received_at).getTime() < 24 * 3600 * 1000).length;
    const prev24h = suspicious.filter((r) => {
      const age = now - new Date(r.received_at).getTime();
      return age >= 24 * 3600 * 1000 && age < 48 * 3600 * 1000;
    }).length;
    let trend: string | null = null;
    if (suspicious.length >= 4) { // enough data to say anything meaningful
      if (last24h > prev24h && prev24h > 0) trend = `Suspicious messages increased over the last 24 hours (${prev24h} to ${last24h}).`;
      else if (last24h > 0 && prev24h === 0 && last24h >= 2) trend = `New suspicious activity appeared in the last 24 hours (${last24h} message(s)) after a quiet period.`;
    }
    sendJson(req, res, 200, {
      total_suspicious: suspicious.length,
      last_24h: last24h,
      previous_24h: prev24h,
      trend_statement: trend, // null means genuinely not enough data -- the frontend must not invent one
    });
    return;
  }

  if (url.pathname === "/institution/timeline" && req.method === "GET") {
    const user = await requireRole(req, res, "institution");
    if (!user) return;
    const rows = await institutionAnalysisRows(user.institution_id!);
    const db = getDb();
    const campaignRows = await db.all<{ name: string; first_seen_at: string }>(
      "SELECT name, first_seen_at FROM campaigns WHERE institution_id = ?", [user.institution_id]
    );
    const events = [
      ...rows.filter((r) => r.bucket !== "safe").map((r) => ({
        timestamp: r.received_at, type: "email",
        label: `Suspicious email detected: "${r.subject || "(no subject)"}"`,
      })),
      ...campaignRows.map((c) => ({ timestamp: c.first_seen_at, type: "campaign", label: `Campaign identified: ${c.name}` })),
    ].filter((e) => e.timestamp).sort((a, b) => String(a.timestamp).localeCompare(String(b.timestamp)));
    sendJson(req, res, 200, { events });
    return;
  }

  // ---- REAL ANALYSIS PROXY (student-owned mailbox only) ------------------
  // This is the "one authoritative scoring path": this API does not
  // itself score anything. It forwards to the real Flask ML service
  // (trained model + contextual trust engine) and persists the real
  // result against the AUTHENTICATED user's own email_account -- never
  // against a client-supplied user/student id.
  //
  // Two request shapes hit this same endpoint:
  //   { emails: [...] }  -- DEMO mode: client supplies synthetic emails
  //                         (the existing "Run Demo Scan" button).
  //   {}  (no emails field) -- REAL mode: fetch the authenticated
  //                         user's own connected mailbox via the OAuth
  //                         provider and analyze THOSE messages. This
  //                         was previously unwired -- fetchMessages()
  //                         existed on both providers but nothing ever
  //                         called it.
  if (url.pathname === "/emails/scan" && req.method === "POST") {
    const user = await requireRole(req, res, "student");
    if (!user) return;
    const body = await readJsonBody(req);
    if (body.__tooLarge) { sendJson(req, res, 413, { error: { code: "PAYLOAD_TOO_LARGE", message: "Request body exceeds the size limit." } }); return; }

    let scanBody: { emails: any[] };
    let realAccountId: string | null = null;

    if (Array.isArray(body.emails)) {
      // DEMO path -- unchanged behavior.
      scanBody = { emails: body.emails };
    } else {
      // REAL path -- fetch from the user's connected mailbox.
      const db = getDb();
      const account = await db.get<{ id: string; provider: string; access_token: string; refresh_token: string | null; token_expires_at: string }>(
        "SELECT id, provider, access_token, refresh_token, token_expires_at FROM email_accounts WHERE user_id = ? AND is_demo_data = 0 ORDER BY connected_at DESC LIMIT 1",
        [user.id]
      );
      if (!account) {
        sendJson(req, res, 400, { error: { code: "NO_CONNECTED_MAILBOX", message: "HALO isn't connected to a mailbox yet. Connect Google or Microsoft to scan your real inbox, or use demo data." } });
        return;
      }
      const providerImpl = PROVIDERS[account.provider];
      if (!providerImpl) {
        sendJson(req, res, 400, { error: { code: "UNKNOWN_PROVIDER", message: "This connected account's provider is not recognized." } });
        return;
      }

      let accessToken: string;
      try {
        accessToken = decryptToken(account.access_token);
        // Refresh proactively if the stored token has expired (or is
        // about to, within 60s) rather than waiting for the mailbox API
        // to reject it -- fewer round trips, same end result.
        const expiresAt = new Date(account.token_expires_at).getTime();
        if (Number.isFinite(expiresAt) && expiresAt < Date.now() + 60000) {
          if (!account.refresh_token) throw new Error("no_refresh_token");
          const refreshed = await providerImpl.refreshToken(decryptToken(account.refresh_token));
          accessToken = refreshed.accessToken;
          // Persist the (possibly rotated) refresh token too -- this was
          // previously dropped entirely, silently discarding it even
          // when a provider legitimately issued a new one (Microsoft
          // does this sometimes; both providers' refreshToken() already
          // fall back to the original token when the provider omits a
          // new one, so refreshed.refreshToken is always the correct
          // value to persist here, never null/undefined).
          await db.run("UPDATE email_accounts SET access_token = ?, refresh_token = ?, token_expires_at = ? WHERE id = ?", [
            encryptToken(refreshed.accessToken), encryptToken(refreshed.refreshToken), refreshed.expiresAt, account.id,
          ]);
          await audit(user.id, "oauth:token-refresh", "allowed", `provider=${account.provider}`);
        }
      } catch (e: any) {
        console.error(`Token refresh failed for user=${user.id} provider=${account.provider}:`, e);
        await audit(user.id, "oauth:token-refresh", "denied", `provider=${account.provider}: ${e.message}`);
        sendJson(req, res, 401, {
          error: { code: "MAILBOX_RECONNECT_REQUIRED", message: "HALO's connection to your mailbox has expired or was revoked. Please reconnect your account." },
        });
        return;
      }

      let normalized: Awaited<ReturnType<MailboxProvider["fetchMessages"]>>;
      try {
        normalized = await providerImpl.fetchMessages(accessToken, account.id, 7); // last 7 days -- avoid pulling a whole lifetime mailbox
      } catch (e: any) {
        console.error(`Mailbox fetch failed for user=${user.id} provider=${account.provider}:`, e);
        sendJson(req, res, 502, {
          error: { code: "MAILBOX_FETCH_FAILED", message: IS_PRODUCTION ? "HALO couldn't reach your mailbox provider. Please try again." : `Mailbox fetch failed: ${e.message}` },
        });
        return;
      }

      if (normalized.length === 0) {
        sendJson(req, res, 200, { checked: 0, counts: { safe: 0, attention: 0, "high-risk": 0 }, results: [], campaigns_detected: 0, note: "No recent messages found in the connected mailbox." });
        return;
      }

      // Adapter: NormalizedEmail -> the structured-field shape the Flask
      // engine already accepts (see _analyze_payload in app.py) --
      // Gmail and Microsoft messages both funnel through this one
      // mapping into the SAME existing ML pipeline, no duplication.
      scanBody = {
        emails: normalized.map((m) => ({
          id: m.providerMessageId,
          from_address: m.sender,
          reply_to: m.headers["reply-to"] || "",
          subject: m.subject,
          body_text: m.bodyText,
        })),
      };
      realAccountId = account.id;
    }

    let mlResult: any;
    try {
      const resp = await fetch(`${ML_SERVICE_URL}/scan`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(scanBody),
        // A hung ML engine must not hang this request forever. 30s is
        // generous headroom over the ~5s a 250-email batch took in
        // testing, while still failing eventually instead of never.
        signal: AbortSignal.timeout(30000),
      });
      mlResult = await resp.json();
      if (!resp.ok) {
        sendJson(req, res, 502, { error: { code: "ANALYSIS_UPSTREAM_ERROR", message: "The analysis engine returned an error.", upstream: mlResult } });
        return;
      }
    } catch (e: any) {
      console.error(`Analysis engine unreachable at ${ML_SERVICE_URL}:`, e);
      sendJson(req, res, 502, {
        error: { code: "ANALYSIS_UNAVAILABLE", message: IS_PRODUCTION ? "The analysis service is temporarily unavailable. Please try again." : `Could not reach the analysis engine at ${ML_SERVICE_URL}: ${e.message}` },
      });
      return;
    }

    const db = getDb();
    let account: { id: string };
    if (realAccountId) {
      account = { id: realAccountId };
    } else {
      let demoAccount = await db.get<{ id: string }>("SELECT id FROM email_accounts WHERE user_id = ? AND is_demo_data = 1", [user.id]);
      if (!demoAccount) {
        const id = crypto.randomUUID();
        await db.run("INSERT INTO email_accounts (id, user_id, provider, connected_at, is_demo_data) VALUES (?, ?, 'mock', ?, 1)", [id, user.id, nowIso()]);
        demoAccount = { id };
      }
      account = demoAccount;
    }
    for (const r of mlResult.results || []) {
      if (r.error) continue;
      // Real-mode emails carry the provider's own message ID as r.id
      // (see the adapter above); demo/manual-payload emails may not.
      // Dedup only applies when we actually have that real identifier --
      // re-scanning the same real mailbox must update the existing
      // analysis rather than accumulate duplicate rows.
      const providerMessageId = realAccountId ? r.id || null : null;
      let emailId: string;
      if (providerMessageId) {
        const existing = await db.get<{ id: string }>(
          "SELECT id FROM emails WHERE email_account_id = ? AND provider_message_id = ?",
          [account.id, providerMessageId]
        );
        if (existing) {
          emailId = existing.id;
          await db.run("DELETE FROM email_analyses WHERE email_id = ?", [emailId]); // replace with the fresh analysis below
        } else {
          emailId = crypto.randomUUID();
          await db.run("INSERT INTO emails (id, email_account_id, provider_message_id, subject, received_at, is_demo_data) VALUES (?, ?, ?, ?, ?, 0)", [emailId, account.id, providerMessageId, r.parsed?.subject || null, nowIso()]);
        }
      } else {
        emailId = crypto.randomUUID();
        await db.run("INSERT INTO emails (id, email_account_id, subject, received_at, is_demo_data) VALUES (?, ?, ?, ?, ?)", [emailId, account.id, r.parsed?.subject || null, nowIso(), realAccountId ? 0 : 1]);
      }
      await db.run(
        `INSERT INTO email_analyses (id, email_id, bucket, trust_score, model_name, model_probability_malicious, raw_result_json, analyzed_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        [crypto.randomUUID(), emailId, r.bucket, r.trust_score, r.signals?.content_intent?.model_name || "unknown", r.signals?.content_intent?.probability_malicious ?? null, JSON.stringify(r), nowIso()]
      );
    }
    await audit(user.id, "emails:scan", "allowed", `${(mlResult.results || []).length} emails`);
    if (user.institution_id) {
      try {
        await recomputeCampaignsForInstitution(user.institution_id);
      } catch (e) {
        console.error("campaign recompute failed:", e);
      }
    }
    sendJson(req, res, 200, mlResult);
    return;
  }

  // ---- OWN-EMAILS-ONLY, IDOR-SAFE -----------------------------------------
  if (url.pathname === "/emails" && req.method === "GET") {
    const user = await requireRole(req, res, "student");
    if (!user) return;
    const rows = await getDb().all(`
      SELECT e.id, e.from_address, e.subject, e.received_at, ea.bucket, ea.trust_score
      FROM emails e
      JOIN email_analyses ea ON ea.email_id = e.id
      JOIN email_accounts acc ON acc.id = e.email_account_id
      WHERE acc.user_id = ?
      ORDER BY e.received_at DESC
    `, [user.id]);
    sendJson(req, res, 200, { emails: rows });
    return;
  }

  const emailDetailMatch = url.pathname.match(/^\/emails\/([a-zA-Z0-9-]+)$/);
  if (emailDetailMatch && req.method === "GET") {
    const user = await requireRole(req, res, "student");
    if (!user) return;
    const emailId = emailDetailMatch[1];
    const row = await getDb().get(`
      SELECT e.*, ea.bucket, ea.trust_score, ea.raw_result_json
      FROM emails e
      JOIN email_analyses ea ON ea.email_id = e.id
      JOIN email_accounts acc ON acc.id = e.email_account_id
      WHERE e.id = ? AND acc.user_id = ?
    `, [emailId, user.id]);
    if (!row) {
      await audit(user.id, "emails:read", "denied", `id=${emailId} not owned or missing`);
      sendJson(req, res, 404, { error: { code: "NOT_FOUND", message: "No such email." } });
      return;
    }
    await audit(user.id, "emails:read", "allowed", `id=${emailId}`);
    sendJson(req, res, 200, row);
    return;
  }

  // ---- INSTITUTION-SCOPED CAMPAIGNS ---------------------------------------
  if (url.pathname === "/campaigns" && req.method === "GET") {
    const user = await requireRole(req, res, "institution");
    if (!user) return;
    sendJson(req, res, 200, { campaigns: await listCampaignsForInstitution(user.institution_id!) });
    return;
  }

  const campaignDetailMatch = url.pathname.match(/^\/campaigns\/([a-zA-Z0-9-]+)$/);
  if (campaignDetailMatch && req.method === "GET") {
    const user = await requireRole(req, res, "institution");
    if (!user) return;
    const campaign = await getCampaignForInstitution(campaignDetailMatch[1], user.institution_id!);
    if (!campaign) {
      await audit(user.id, "campaigns:read", "denied", `id=${campaignDetailMatch[1]} not in institution or missing`);
      sendJson(req, res, 404, { error: { code: "NOT_FOUND", message: "No such campaign." } });
      return;
    }
    await audit(user.id, "campaigns:read", "allowed", `id=${campaignDetailMatch[1]}`);
    sendJson(req, res, 200, campaign);
    return;
  }

  const campaignStatusMatch = url.pathname.match(/^\/campaigns\/([a-zA-Z0-9-]+)\/status$/);
  if (campaignStatusMatch && req.method === "POST") {
    const user = await requireRole(req, res, "institution");
    if (!user) return;
    const body = await readJsonBody(req);
    if (body.__tooLarge) { sendJson(req, res, 413, { error: { code: "PAYLOAD_TOO_LARGE", message: "Request body exceeds the size limit." } }); return; }
    const status = ["open", "investigating", "resolved"].includes(body.status) ? body.status : null;
    if (!status) {
      sendJson(req, res, 400, { error: { code: "INVALID_STATUS", message: "status must be open|investigating|resolved" } });
      return;
    }
    const ok = await setCampaignStatus(campaignStatusMatch[1], user.institution_id!, status);
    await audit(user.id, "campaigns:set-status", ok ? "allowed" : "denied", `id=${campaignStatusMatch[1]} -> ${status}`);
    if (!ok) {
      sendJson(req, res, 404, { error: { code: "NOT_FOUND", message: "No such campaign." } });
      return;
    }
    sendJson(req, res, 200, { status: "updated" });
    return;
  }

  if (url.pathname === "/health" && req.method === "GET") {
    sendJson(req, res, 200, { status: "ok", service: "halo-api", ml_service_url: ML_SERVICE_URL });
    return;
  }

  sendJson(req, res, 404, { error: { code: "NOT_FOUND", message: `No route for ${req.method} ${url.pathname}` } });
});

await initDatabase();
server.listen(PORT, "0.0.0.0", () => {
  console.log(`HALO API (session/role layer) listening on 0.0.0.0:${PORT}, ML_SERVICE_URL=${ML_SERVICE_URL}, DB=${process.env.DATABASE_URL ? "postgresql" : "sqlite"}`);
});

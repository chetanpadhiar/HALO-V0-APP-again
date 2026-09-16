import type { MailboxProvider, NormalizedEmail, TokenSet, UserProfile } from "./provider.ts";

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID || "";
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET || "";
// Least-privilege: read-only mail access + identity, nothing else.
const SCOPES = "openid email https://www.googleapis.com/auth/gmail.readonly";

export const googleProvider: MailboxProvider = {
  name: "google",

  isConfigured() {
    return Boolean(CLIENT_ID && CLIENT_SECRET);
  },

  getAuthorizationUrl(state, redirectUri) {
    if (!this.isConfigured()) return null; // caller must show an honest "not configured" state
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: redirectUri,
      response_type: "code",
      scope: SCOPES,
      access_type: "offline",
      prompt: "consent",
      state,
    });
    return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
  },

  async handleCallback(code, redirectUri) {
    if (!this.isConfigured()) throw new Error("Google OAuth is not configured (missing client credentials).");
    // Real token endpoint, real request shape -- untested end-to-end here
    // because doing so requires a real `code` from Google's actual
    // consent screen, which requires real credentials.
    const resp = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        redirect_uri: redirectUri,
        grant_type: "authorization_code",
      }),
    });
    if (!resp.ok) throw new Error(`Google token exchange failed: ${resp.status} ${await resp.text()}`);
    const data = await resp.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token || null,
      expiresAt: new Date(Date.now() + data.expires_in * 1000).toISOString(),
    };
  },

  async refreshToken(refreshToken) {
    const resp = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        refresh_token: refreshToken,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });
    if (!resp.ok) throw new Error(`Google token refresh failed: ${resp.status}`);
    const data = await resp.json();
    return { accessToken: data.access_token, refreshToken: refreshToken, expiresAt: new Date(Date.now() + data.expires_in * 1000).toISOString() };
  },

  async getUserProfile(accessToken) {
    const resp = await fetch("https://www.googleapis.com/oauth2/v2/userinfo", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!resp.ok) throw new Error(`Google profile fetch failed: ${resp.status}`);
    const data = await resp.json();
    return { email: data.email, displayName: data.name || null };
  },

  async fetchMessages(accessToken, accountId, windowDays) {
    // Real Gmail API v1 calls (users.messages.list + users.messages.get).
    // Untested end-to-end without a real access token, but this is the
    // actual production request shape, not a stub.
    const afterEpoch = Math.floor((Date.now() - windowDays * 86400 * 1000) / 1000);
    const listResp = await fetch(
      `https://gmail.googleapis.com/gmail/v1/users/me/messages?q=after:${afterEpoch}&maxResults=50`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (!listResp.ok) throw new Error(`Gmail message list failed: ${listResp.status}`);
    const { messages = [] } = await listResp.json();

    const results: NormalizedEmail[] = [];
    for (const m of messages) {
      const msgResp = await fetch(`https://gmail.googleapis.com/gmail/v1/users/me/messages/${m.id}?format=full`, {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      if (!msgResp.ok) continue;
      const msg = await msgResp.json();
      results.push(normalizeGmailMessage(msg, accountId));
    }
    return results;
  },

  async revokeAccess(accessToken) {
    await fetch(`https://oauth2.googleapis.com/revoke?token=${accessToken}`, { method: "POST" });
  },
};

function normalizeGmailMessage(msg: any, accountId: string): NormalizedEmail {
  const headers: Record<string, string> = {};
  for (const h of msg.payload?.headers || []) headers[h.name.toLowerCase()] = h.value;
  const bodyText = extractGmailBody(msg.payload, "text/plain") || "";
  const bodyHtml = extractGmailBody(msg.payload, "text/html");
  const urls = Array.from(bodyText.matchAll(/https?:\/\/[^\s"'<>]+/g)).map((m) => m[0]);
  return {
    providerMessageId: msg.id,
    accountId,
    sender: headers["from"] || "",
    recipients: (headers["to"] || "").split(",").map((s) => s.trim()).filter(Boolean),
    subject: headers["subject"] || "",
    receivedAt: headers["date"] ? new Date(headers["date"]).toISOString() : new Date().toISOString(),
    bodyText,
    bodyHtml,
    headers,
    urls,
    attachmentMetadata: (msg.payload?.parts || [])
      .filter((p: any) => p.filename)
      .map((p: any) => ({ filename: p.filename, contentType: p.mimeType, sizeBytes: p.body?.size || 0 })),
  };
}

function extractGmailBody(payload: any, mimeType: string): string | null {
  if (!payload) return null;
  if (payload.mimeType === mimeType && payload.body?.data) {
    return Buffer.from(payload.body.data, "base64url").toString("utf-8");
  }
  for (const part of payload.parts || []) {
    const found = extractGmailBody(part, mimeType);
    if (found) return found;
  }
  return null;
}

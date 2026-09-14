import type { MailboxProvider, NormalizedEmail, TokenSet, UserProfile } from "./provider.ts";

const CLIENT_ID = process.env.MICROSOFT_CLIENT_ID || "";
const CLIENT_SECRET = process.env.MICROSOFT_CLIENT_SECRET || "";
const TENANT = process.env.MICROSOFT_TENANT || "common";
const SCOPES = "openid email offline_access Mail.Read";

export const microsoftProvider: MailboxProvider = {
  name: "microsoft",

  isConfigured() {
    return Boolean(CLIENT_ID && CLIENT_SECRET);
  },

  getAuthorizationUrl(state, redirectUri) {
    if (!this.isConfigured()) return null;
    const params = new URLSearchParams({
      client_id: CLIENT_ID,
      redirect_uri: redirectUri,
      response_type: "code",
      scope: SCOPES,
      response_mode: "query",
      state,
    });
    return `https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/authorize?${params.toString()}`;
  },

  async handleCallback(code, redirectUri) {
    if (!this.isConfigured()) throw new Error("Microsoft OAuth is not configured (missing client credentials).");
    const resp = await fetch(`https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/token`, {
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
    if (!resp.ok) throw new Error(`Microsoft token exchange failed: ${resp.status} ${await resp.text()}`);
    const data = await resp.json();
    return {
      accessToken: data.access_token,
      refreshToken: data.refresh_token || null,
      expiresAt: new Date(Date.now() + data.expires_in * 1000).toISOString(),
    };
  },

  async refreshToken(refreshToken) {
    const resp = await fetch(`https://login.microsoftonline.com/${TENANT}/oauth2/v2.0/token`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        refresh_token: refreshToken,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        grant_type: "refresh_token",
      }),
    });
    if (!resp.ok) throw new Error(`Microsoft token refresh failed: ${resp.status}`);
    const data = await resp.json();
    return { accessToken: data.access_token, refreshToken: data.refresh_token || refreshToken, expiresAt: new Date(Date.now() + data.expires_in * 1000).toISOString() };
  },

  async getUserProfile(accessToken) {
    const resp = await fetch("https://graph.microsoft.com/v1.0/me", {
      headers: { Authorization: `Bearer ${accessToken}` },
    });
    if (!resp.ok) throw new Error(`Microsoft profile fetch failed: ${resp.status}`);
    const data = await resp.json();
    return { email: data.mail || data.userPrincipalName, displayName: data.displayName || null };
  },

  async fetchMessages(accessToken, accountId, windowDays) {
    const since = new Date(Date.now() - windowDays * 86400 * 1000).toISOString();
    const resp = await fetch(
      `https://graph.microsoft.com/v1.0/me/messages?$filter=receivedDateTime ge ${since}&$top=50`,
      { headers: { Authorization: `Bearer ${accessToken}` } }
    );
    if (!resp.ok) throw new Error(`Graph message list failed: ${resp.status}`);
    const { value = [] } = await resp.json();
    return value.map((m: any) => normalizeGraphMessage(m, accountId));
  },

  async revokeAccess() {
    // Microsoft Graph has no direct per-token revoke endpoint for this
    // flow; revocation is done via the tenant's account/session
    // management. Documented as a known limitation rather than faked.
  },
};

function normalizeGraphMessage(m: any, accountId: string): NormalizedEmail {
  const bodyHtml = m.body?.contentType === "html" ? m.body.content : null;
  const bodyText = m.body?.contentType === "text" ? m.body.content : stripHtml(bodyHtml || "");
  const urls = Array.from(bodyText.matchAll(/https?:\/\/[^\s"'<>]+/g)).map((x) => x[0]);
  return {
    providerMessageId: m.id,
    accountId,
    sender: m.from?.emailAddress?.address || "",
    recipients: (m.toRecipients || []).map((r: any) => r.emailAddress?.address).filter(Boolean),
    subject: m.subject || "",
    receivedAt: m.receivedDateTime || new Date().toISOString(),
    bodyText,
    bodyHtml,
    headers: { "reply-to": m.replyTo?.[0]?.emailAddress?.address || "" },
    urls,
    attachmentMetadata: [], // requires a separate $expand=attachments call; not fetched by default
  };
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

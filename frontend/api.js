// Single source of truth for talking to the backend. Nothing else in
// the frontend should call fetch() directly against these routes.
//
// PRODUCTION CONFIG: set window.HALO_API_BASE (see index.html) before
// this script loads. There is deliberately no guessed real-looking
// production URL here -- an unconfigured deployment should fail
// loudly and obviously, not silently point at a domain that may not
// exist or may not be yours.
const API_BASE = window.HALO_API_BASE || (
  (location.hostname === "" || location.hostname === "localhost" || location.hostname === "127.0.0.1")
    ? "http://127.0.0.1:8788"
    : (() => {
        console.error("HALO_API_BASE is not configured. Set window.HALO_API_BASE before api.js loads (see index.html).");
        return "HALO_API_BASE_NOT_CONFIGURED";
      })()
);

async function request(path, opts = {}) {
  const resp = await fetch(API_BASE + path, {
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    ...opts,
  });
  let body = null;
  try { body = await resp.json(); } catch { /* no body */ }
  if (!resp.ok) {
    const err = new Error(body?.error?.message || `Request failed (${resp.status})`);
    err.status = resp.status;
    err.code = body?.error?.code;
    throw err;
  }
  return body;
}

const api = {
  detectProvider: (email) => request("/auth/detect-provider", { method: "POST", body: JSON.stringify({ email }) }),
  authorizeUrl: (provider, email, role) => `${API_BASE}/auth/${provider}/authorize?email=${encodeURIComponent(email)}&role=${role}`,
  mockLogin: (email, role) => request("/auth/mock-login", { method: "POST", body: JSON.stringify({ email, role }) }),
  logout: () => request("/auth/logout", { method: "POST" }),
  me: () => request("/me"),
  integrations: () => request("/system/integrations"),

  studentDashboard: () => request("/dashboard/student"),
  listEmails: () => request("/emails"),
  getEmail: (id) => request(`/emails/${id}`),
  scanDemoInbox: (emails) => request("/emails/scan", { method: "POST", body: JSON.stringify({ emails }) }),
  scanRealInbox: () => request("/emails/scan", { method: "POST", body: JSON.stringify({}) }),

  institutionDashboard: () => request("/dashboard/institution"),
  threatRadar: () => request("/institution/threat-radar"),
  geoInfrastructure: () => request("/institution/geo/infrastructure"),
  timeline: () => request("/institution/timeline"),
  trends: () => request("/institution/trends"),
  listCampaigns: () => request("/campaigns"),
  getCampaign: (id) => request(`/campaigns/${id}`),
  setCampaignStatus: (id, status) => request(`/campaigns/${id}/status`, { method: "POST", body: JSON.stringify({ status }) }),
};

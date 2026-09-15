const APP = { screen: "role-select", role: null, email: null, detectedProvider: null, user: null, currentEmailId: null, currentCampaignId: null, error: null, demoMode: false };
const root = document.getElementById("app");

function esc(s) { return String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }

// ---------------------------------------------------------------- boot animation
async function runBootAnimation() {
  // Phase 1 -- system wake: dark screen, small indicators powering up.
  root.innerHTML = `<div class="center-wrap halo-boot">
    <div class="halo-boot-dots">
      ${Array.from({ length: 8 }).map((_, i) => `<span class="halo-boot-dot" style="animation-delay:${i * 55}ms"></span>`).join("")}
    </div>
  </div>`;
  await sleep(380);

  // Phase 2 -- HALO assembles via a scan-line wipe, not a plain fade.
  root.innerHTML = `<div class="center-wrap halo-boot">
    <div class="halo-logo-assemble"><h1>HALO</h1><div class="halo-scan-bar"></div></div>
  </div>`;
  await sleep(480);

  // Phase 3 -- security core ring + module activation checklist.
  const modules = ["IDENTITY", "MAIL", "ML", "BEHAVIOR", "INFRASTRUCTURE", "CAMPAIGNS"];
  let revealed = [];
  for (const m of modules) {
    revealed.push(m);
    root.innerHTML = `<div class="center-wrap halo-boot">
      <h1>HALO</h1>
      <div class="halo-core-wrap">
        <svg class="halo-core-ring" viewBox="0 0 120 120"><circle cx="60" cy="60" r="50" class="hcr-track"/><circle cx="60" cy="60" r="50" class="hcr-sweep"/></svg>
        <div class="panel" style="text-align:left;min-width:220px;">
          <h2>INITIALIZING HALO...</h2>
          <pre style="background:none;border:none;font-size:16px;">${esc(revealed.map((r) => r.padEnd(15, ".") + " OK").join("\n"))}</pre>
        </div>
      </div>
    </div>`;
    await sleep(190);
  }

  // Phase 4 -- network wake: nodes light up and connect.
  root.innerHTML = `<div class="center-wrap halo-boot">
    <h1>HALO</h1>
    <svg class="halo-boot-network" viewBox="0 0 400 160">
      <line x1="60" y1="40" x2="160" y2="80" class="hbn-line"/>
      <line x1="160" y1="80" x2="120" y2="130" class="hbn-line" style="animation-delay:.12s"/>
      <line x1="240" y1="35" x2="300" y2="90" class="hbn-line" style="animation-delay:.2s"/>
      <line x1="160" y1="80" x2="240" y2="35" class="hbn-line" style="animation-delay:.28s"/>
      <line x1="300" y1="90" x2="340" y2="130" class="hbn-line" style="animation-delay:.36s"/>
      <circle cx="60" cy="40" r="4" class="hbn-dot"/>
      <circle cx="160" cy="80" r="5" class="hbn-dot" style="animation-delay:.12s"/>
      <circle cx="120" cy="130" r="4" class="hbn-dot" style="animation-delay:.2s"/>
      <circle cx="240" cy="35" r="4" class="hbn-dot" style="animation-delay:.28s"/>
      <circle cx="300" cy="90" r="4" class="hbn-dot" style="animation-delay:.36s"/>
      <circle cx="340" cy="130" r="4" class="hbn-dot" style="animation-delay:.44s"/>
    </svg>
  </div>`;
  await sleep(420);

  // Phase 5 -- final status.
  root.innerHTML = `<div class="center-wrap halo-boot"><h1>HALO</h1><div class="tagline halo-boot-online">HALO SYSTEM<br>ONLINE</div></div>`;
  await sleep(420);
}

async function boot() {
  if (!sessionStorage.getItem("halo_booted")) {
    await runBootAnimation();
    sessionStorage.setItem("halo_booted", "1");
  }
  try {
    APP.user = await api.me();
    APP.screen = APP.user.role === "institution" ? "institution-dashboard" : "student-dashboard";
  } catch {
    APP.user = null;
  }
  render();
  if (APP.screen === "student-dashboard") loadStudentDashboard();
  if (APP.screen === "institution-dashboard") loadInstitutionDashboard();
}

function render() {
  root.innerHTML = topbar() + body();
  wire();
}

function topbar() {
  if (!APP.user) return "";
  const connected = !APP.demoMode && APP.user.auth_provider && APP.user.auth_provider !== "mock";
  const providerLabel = connected ? "Google" : null;
  return `<div class="topbar">
    <div class="pill${connected ? "" : " bad"}">${esc(APP.user.email)} &middot; ${APP.user.role.toUpperCase()}${providerLabel ? ` &middot; ${providerLabel} account connected` : " &middot; DEMO MODE -- SYNTHETIC DATA"}</div>
    <button class="btn link" data-action="logout" style="width:auto;">LOGOUT</button>
  </div>`;
}

function body() {
  switch (APP.screen) {
    case "role-select": return screenRoleSelect();
    case "email-entry": return screenEmailEntry();
    case "connect": return screenConnect();
    case "student-dashboard": return screenStudentDashboard();
    case "email-detail": return screenEmailDetail();
    case "institution-dashboard": return screenInstitutionDashboard();
    case "geo-infrastructure": return screenGeoInfrastructure();
    case "timeline": return screenTimeline();
    case "trends": return screenTrends();
    case "campaign-detail": return screenCampaignDetail();
    default: return `<div class="panel"><p>Unknown screen.</p></div>`;
  }
}

// ---------------------------------------------------------------- landing
function screenRoleSelect() {
  return `<div class="center-wrap">
    <h1>HALO</h1>
    <div class="tagline">How are you logging in?</div>
    <div class="role-cards">
      <div class="role-card" data-action="pick-role" data-role="student">
        <h3>STUDENT</h3>
        <p>Protect my inbox and stay safe.</p>
      </div>
      <div class="role-card" data-action="pick-role" data-role="institution">
        <h3>INSTITUTION</h3>
        <p>Protect students from email threats.</p>
      </div>
    </div>
  </div>`;
}

function screenEmailEntry() {
  return `<div class="center-wrap">
    <h1>HALO</h1>
    <div class="tagline">Continuing as ${APP.role}</div>
    <div class="panel">
      <h2>ENTER YOUR INSTITUTIONAL EMAIL</h2>
      <input type="email" id="emailInput" placeholder="student@university.edu" value="${esc(APP.email || "")}"/>
      ${APP.error ? `<div class="note">${esc(APP.error)}</div>` : ""}
      <button class="btn primary" data-action="submit-email">CONTINUE</button>
      <button class="btn link" data-action="back-role">&lt; back</button>
    </div>
  </div>`;
}

function screenConnect() {
  return `<div class="center-wrap">
    <h1>HALO</h1>
    <div class="tagline">Connect your email</div>
    <div class="panel">
      <h2>CONNECT YOUR EMAIL</h2>
      <p>HALO needs permission to securely read the emails you want it to protect.</p>
      <button class="btn" data-action="connect" data-provider="google">SIGN IN WITH GOOGLE</button>
      ${APP.error ? `<div class="note">${esc(APP.error)}</div>` : ""}
      <button class="btn primary" data-action="demo-login">CONTINUE WITH DEMO DATA</button>
      <div class="note info">Demo Mode uses a synthetic inbox and runs entirely on this device -- no account, backend, or internet connection required.</div>
      <button class="btn link" data-action="back-role">&lt; back</button>
    </div>
  </div>`;
}

// ---------------------------------------------------------------- student
let studentDashboardData = null;
function screenStudentDashboard() {
  if (!studentDashboardData) return `<div class="panel"><p>Loading...</p></div>`;
  const c = studentDashboardData.counts;
  const total = c.safe + c.attention + c["high-risk"];
  const trustLabel = c["high-risk"] > 0 ? "NEEDS ATTENTION" : c.attention > 0 ? "MOSTLY GOOD" : total > 0 ? "GOOD" : "NOT SCANNED YET";
  const trustTone = c["high-risk"] > 0 ? "high-risk" : c.attention > 0 ? "attention" : "safe";
  return `<div class="panel halo-trust-center">
      <h2>YOUR INBOX</h2>
      <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
        <span class="badge ${trustTone}" style="font-size:16px;padding:8px 16px;">TRUST STATUS: ${trustLabel}</span>
        <span class="note info" style="border:none;padding:0;margin:0;">${total === 0 ? "Run a scan to see your status." : `Based on ${total} checked message${total === 1 ? "" : "s"}.`}</span>
      </div>
      <div class="metric-grid" style="margin-top:14px;">
        <div class="metric-card"><div class="m-label">Emails checked</div><div class="m-value">${total}</div></div>
        <div class="metric-card"><div class="m-label">High risk</div><div class="m-value" style="color:var(--accent)">${c["high-risk"]}</div></div>
        <div class="metric-card"><div class="m-label">Needs attention</div><div class="m-value" style="color:var(--warn)">${c.attention}</div></div>
        <div class="metric-card"><div class="m-label">Safe</div><div class="m-value" style="color:var(--safe)">${c.safe}</div></div>
      </div>
      ${total === 0 ? (
        !APP.demoMode && APP.user.auth_provider && APP.user.auth_provider !== "mock"
          ? `<button class="btn primary" data-action="run-real-scan">SCAN MY INBOX</button>`
          : `<button class="btn primary" data-action="run-demo-scan">RUN DEMO SCAN</button>`
      ) : ""}
    </div>
    <div class="halo-dash-row">
      <div class="panel" style="flex:2;min-width:260px;">
        <h2>RECENT EMAILS</h2>
        <div id="emailListMount">Loading...</div>
      </div>
      <div class="panel" style="flex:1;min-width:220px;">
        <h2>THREAT RADAR</h2>
        ${total === 0 ? `<p class="note info">Nothing scanned yet.</p>` : `
        <div class="row-list">
          <div class="row-item"><div>Suspicious emails</div><span class="badge attention">${c.attention}</span></div>
          <div class="row-item"><div>High-risk emails</div><span class="badge high-risk">${c["high-risk"]}</span></div>
          <div class="row-item"><div>Looked safe</div><span class="badge safe">${c.safe}</span></div>
        </div>`}
      </div>
    </div>
    <div class="panel">
      <h2>RECENT SECURITY ACTIVITY</h2>
      <div id="activityListMount">Loading...</div>
    </div>`;
}

async function loadStudentDashboard() {
  studentDashboardData = await api.studentDashboard();
  render();
  const emails = await api.listEmails();
  const mount = document.getElementById("emailListMount");
  if (!mount) return;
  if (emails.emails.length === 0) {
    mount.innerHTML = `<p>No emails yet.</p>`;
    return;
  }
  mount.innerHTML = `<div class="row-list">` + emails.emails.map((e) => `
    <div class="row-item" data-action="open-email" data-id="${e.id}">
      <div>
        <div>${esc(e.subject || "(no subject)")}</div>
        <div class="note info" style="border:none;padding:0;margin:0;">${esc(e.from_address || "")} &middot; ${new Date(e.received_at).toLocaleString()}</div>
      </div>
      <span class="badge ${e.bucket}">${simpleVerdict(e.bucket).badge}</span>
    </div>`).join("") + `</div>`;
  renderActivityFeed(emails.emails.map((e) => ({ label: e.bucket === "safe" ? `Sender verified: "${e.subject || "(no subject)"}"` : `${e.bucket === "high-risk" ? "High-risk" : "Suspicious"} email detected: "${e.subject || "(no subject)"}"`, timestamp: e.received_at })));
}

function renderActivityFeed(events) {
  const mount = document.getElementById("activityListMount");
  if (!mount) return;
  if (events.length === 0) {
    mount.innerHTML = `<p>No activity yet.</p>`;
    return;
  }
  const sorted = [...events].sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp)).slice(0, 6);
  mount.innerHTML = `<div class="row-list">` + sorted.map((e) => `
    <div class="row-item">
      <div>
        <div class="note info" style="border:none;padding:0;margin:0;">${new Date(e.timestamp).toLocaleString()}</div>
        <div>${esc(e.label)}</div>
      </div>
    </div>`).join("") + `</div>`;
}

let emailDetailData = null;
function screenEmailDetail() {
  if (!emailDetailData) return `<div class="panel"><p>Loading...</p></div>`;
  const raw = JSON.parse(emailDetailData.raw_result_json);
  const v = simpleVerdict(emailDetailData.bucket);
  const plainReasons = (raw.reasons || []).map(simpleReason);
  const actions = recommendedActions(emailDetailData.bucket);
  const sections = technicalSections(raw);
  const st = senderTrustProfile(raw);
  return `<button class="btn link" data-action="back-dashboard" style="width:auto;">&lt; BACK TO INBOX</button>
    <div class="panel">
      <span class="badge ${emailDetailData.bucket}">${v.badge}</span>
      <h2 style="margin-top:10px;">${esc(v.headline)}</h2>
      <p class="note info" style="border:none;padding:0;margin:4px 0 12px;">Trust score: ${raw.trust_score ?? "n/a"}/100 -- ${esc(trustScoreInterpretation(raw.trust_score ?? 50))}</p>
      ${plainReasons.length ? `<p><strong>WHY HALO IS CONCERNED</strong></p>
      <ul class="reasons">${plainReasons.map((r) => `<li>${esc(r)}</li>`).join("")}</ul>` : ""}
      <p><strong>WHAT SHOULD YOU DO?</strong></p>
      <ul class="reasons">${actions.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
      ${raw.signals?.url_domain?.flagged ? `<p class="note info" style="border-color:var(--warn);">CHECK THIS LINK -- ${esc(simpleReason(raw.signals.url_domain.evidence?.[0] || ""))} HALO recommends not opening it. See Technical Details below for what was checked.</p>` : ""}
      <p class="note info" style="margin-top:10px;">${esc(confidenceExplanation(raw.confidence))}</p>
      <button class="btn" data-action="report-suspicious" data-id="${esc(emailDetailData.id)}" style="width:auto;">REPORT SUSPICIOUS</button>
      <span id="report-feedback-${esc(emailDetailData.id)}"></span>
    </div>
    <div class="panel">
      <h2>SENDER TRUST</h2>
      <span class="badge ${st.label === "SUSPICIOUS" ? "high-risk" : st.label === "KNOWN" ? "safe" : "attention"}">${st.label}</span>
      <p style="margin-top:8px;">${esc(st.headline)}</p>
      <table style="width:100%;font-size:14px;margin-top:8px;">
        ${st.facts.map(([k, v2]) => `<tr><td style="padding:3px 8px 3px 0;color:var(--ink-soft);white-space:nowrap;">${esc(k)}</td><td>${esc(v2)}</td></tr>`).join("")}
      </table>
    </div>
    <div class="panel">
      <details>
        <summary>TECHNICAL DETAILS &#9660;</summary>
        ${sections.map((sec) => `
          <p style="margin-top:14px;"><strong>${esc(sec.title)}</strong></p>
          <table style="width:100%;font-size:14px;">
            ${sec.rows.map(([k, v2]) => `<tr><td style="padding:3px 8px 3px 0;color:var(--ink-soft);">${esc(k)}</td><td>${esc(String(v2))}</td></tr>`).join("")}
          </table>`).join("")}
        <p style="margin-top:14px;"><strong>RAW REASONS (technical wording)</strong></p>
        <ul class="reasons">${(raw.reasons || []).map((r) => `<li>${esc(technicalReason(r))}</li>`).join("")}</ul>
      </details>
    </div>`;
}

// ------------------------------------------------------------- institution
let institutionDashboardData = null;
let threatRadarData = null;
let geoInfraData = null;
let timelineData = null;
let trendsData = null;
function screenInstitutionDashboard() {
  if (!institutionDashboardData) return `<div class="panel"><p>Loading...</p></div>`;
  const r = threatRadarData;
  return `<div class="panel">
      <h2>INSTITUTION SECURITY OVERVIEW</h2>
      <div class="metric-grid">
        <div class="metric-card"><div class="m-label">Active campaigns</div><div class="m-value">${institutionDashboardData.active_campaigns}</div></div>
        ${r ? `
        <div class="metric-card"><div class="m-label">Emails analyzed</div><div class="m-value">${r.emails_analyzed}</div></div>
        <div class="metric-card"><div class="m-label">Suspicious emails</div><div class="m-value" style="color:var(--accent)">${r.suspicious_emails}</div></div>
        <div class="metric-card"><div class="m-label">Infrastructure nodes seen</div><div class="m-value">${r.infrastructure_nodes}</div></div>
        <div class="metric-card"><div class="m-label">Infrastructure reused</div><div class="m-value" style="color:var(--warn)">${r.infrastructure_reused}</div></div>
        <div class="metric-card"><div class="m-label">Countries observed</div><div class="m-value">${r.countries_observed}</div></div>
        ` : ""}
      </div>
      <button class="btn" data-action="view-geo" style="width:auto;margin-top:10px;">GEO-INFRASTRUCTURE</button>
      <button class="btn" data-action="view-timeline" style="width:auto;margin-top:10px;">TIMELINE</button>
      <button class="btn" data-action="view-trends" style="width:auto;margin-top:10px;">TRENDS</button>
    </div>
    <div class="panel">
      <h2>ACTIVE CAMPAIGNS</h2>
      <div id="campaignListMount">Loading...</div>
    </div>`;
}

function screenGeoInfrastructure() {
  if (!geoInfraData) return `<div class="panel"><p>Loading...</p></div>`;
  return `<button class="btn link" data-action="back-institution" style="width:auto;">&lt; BACK TO OVERVIEW</button>
    <div class="panel">
      <h2>GEO-INFRASTRUCTURE</h2>
      <p class="note info">${esc(geoInfraData.geo_source)} Approximate network location only -- this is NOT the attacker's physical location.</p>
      ${renderWorldMapSVG(geoInfraData.nodes)}
      ${geoInfraData.nodes.length === 0 ? `<p style="margin-top:12px;">No infrastructure observed yet from analyzed messages.</p>` : `
      <div class="row-list" style="margin-top:12px;">${geoInfraData.nodes.map((n) => `
        <div class="row-item" id="infra-row-${esc(n.ip)}">
          <div>
            <div><strong>${esc(n.org)}</strong> (${esc(n.asn)})</div>
            <div class="note info" style="border:none;padding:0;margin:0;">
              ${n.region ? esc(n.region) + ", " : ""}${n.country ? esc(n.country) : "Location unknown"} &middot; ${esc(n.category)}
              ${n.reused ? ' &middot; <span style="color:var(--accent);">REUSED ACROSS MULTIPLE STUDENTS</span>' : ""}
            </div>
          </div>
          <span class="badge ${n.risk_score >= 40 ? "high-risk" : "safe"}">${n.suspicious_emails} EMAIL${n.suspicious_emails === 1 ? "" : "S"}</span>
        </div>`).join("")}</div>`}
    </div>`;
}

function screenTimeline() {
  if (!timelineData) return `<div class="panel"><p>Loading...</p></div>`;
  return `<button class="btn link" data-action="back-institution" style="width:auto;">&lt; BACK TO OVERVIEW</button>
    <div class="panel">
      <h2>ATTACK TIMELINE</h2>
      ${timelineData.events.length === 0 ? `<p>No security events recorded yet.</p>` : `
      <div class="row-list">${timelineData.events.map((e) => `
        <div class="row-item">
          <div>
            <div class="note info" style="border:none;padding:0;margin:0;">${new Date(e.timestamp).toLocaleString()}</div>
            <div>${esc(e.label)}</div>
          </div>
          <span class="badge ${e.type === "campaign" ? "high-risk" : "attention"}">${e.type.toUpperCase()}</span>
        </div>`).join("")}</div>`}
    </div>`;
}

function screenTrends() {
  if (!trendsData) return `<div class="panel"><p>Loading...</p></div>`;
  const t = trendsData;
  return `<button class="btn link" data-action="back-institution" style="width:auto;">&lt; BACK TO OVERVIEW</button>
    <div class="panel">
      <h2>ATTACK TRENDS</h2>
      <div class="metric-grid">
        <div class="metric-card"><div class="m-label">Suspicious, last 24h</div><div class="m-value">${t.last_24h}</div></div>
        <div class="metric-card"><div class="m-label">Suspicious, previous 24h</div><div class="m-value">${t.previous_24h}</div></div>
        <div class="metric-card"><div class="m-label">Total suspicious</div><div class="m-value">${t.total_suspicious}</div></div>
      </div>
      ${t.trend_statement
        ? `<p class="note info" style="border-color:var(--warn);">${esc(t.trend_statement)}</p>`
        : `<p class="note info">Not enough data yet for a meaningful trend -- HALO won't call a small fluctuation a trend.</p>`}
    </div>`;
}

async function loadInstitutionDashboard() {
  institutionDashboardData = await api.institutionDashboard();
  threatRadarData = await api.threatRadar();
  render();
  const { campaigns } = await api.listCampaigns();
  const mount = document.getElementById("campaignListMount");
  if (!mount) return;
  if (campaigns.length === 0) {
    mount.innerHTML = `<p>No campaigns detected yet. Run a scan from a student account to generate real correlated data.</p>`;
    return;
  }
  mount.innerHTML = `<div class="row-list">` + campaigns.map((c) => `
    <div class="row-item" data-action="open-campaign" data-id="${c.id}">
      <div>
        <div>${esc(c.name)}</div>
        <div class="note info" style="border:none;padding:0;margin:0;">First seen ${new Date(c.first_seen_at).toLocaleDateString()} &middot; Last activity ${new Date(c.last_seen_at).toLocaleDateString()}</div>
      </div>
      <span class="badge high-risk">${c.affected_students} STUDENTS &middot; ${c.status.toUpperCase()}</span>
    </div>`).join("") + `</div>`;
}

let campaignDetailData = null;
function screenCampaignDetail() {
  if (!campaignDetailData) return `<div class="panel"><p>Loading...</p></div>`;
  const c = campaignDetailData;
  const g = c.graph || { domains: [], infrastructure: [], student_count: c.affected_students || 0 };
  return `<button class="btn link" data-action="back-institution" style="width:auto;">&lt; BACK TO CAMPAIGNS</button>
    <div class="panel">
      <h2>${esc(c.name)}</h2>
      <p>Status: <strong>${c.status.toUpperCase()}</strong> &middot; First seen ${new Date(c.first_seen_at).toLocaleString()} &middot; Last activity ${new Date(c.last_seen_at).toLocaleString()}</p>
      <p class="note info">These messages use different sender addresses, but HALO found the same underlying domain and/or sending infrastructure across them -- that's why they're grouped as one campaign, not just similar wording.</p>

      <p style="margin-top:14px;"><strong>RELATIONSHIP GRAPH</strong></p>
      <div class="row-list">
        ${g.domains.map((d) => `
          <div class="row-item"><div>Domain: <strong>${esc(d.domain)}</strong></div><span class="badge attention">${d.email_ids.length} MESSAGE${d.email_ids.length === 1 ? "" : "S"}</span></div>
        `).join("")}
        ${g.infrastructure.map((i) => `
          <div class="row-item"><div>Infrastructure: <strong>${esc(i.org)}</strong> (${esc(i.asn)}, ${esc(i.ip)})</div><span class="badge high-risk">${i.email_ids.length} MESSAGE${i.email_ids.length === 1 ? "" : "S"}</span></div>
        `).join("")}
        <div class="row-item"><div>Affected students</div><span class="badge attention">${g.student_count}</span></div>
      </div>

      <p style="margin-top:14px;"><strong>RELATED EMAILS (${c.related_emails.length})</strong></p>
      <div class="row-list">${c.related_emails.map((e) => `<div class="row-item"><div>${esc(e.subject || "(no subject)")} <span class="note info" style="border:none;padding:0;margin:0;">${esc(e.student_label || "")}</span></div><span class="badge ${e.bucket}">${e.bucket.toUpperCase()}</span></div>`).join("")}</div>

      <p style="margin-top:14px;"><strong>UPDATE STATUS</strong></p>
      <button class="btn" data-action="set-status" data-status="investigating">MARK INVESTIGATING</button>
      <button class="btn" data-action="set-status" data-status="resolved">MARK RESOLVED</button>
      <button class="btn" data-action="download-report" style="margin-top:10px;">DOWNLOAD INCIDENT REPORT</button>
    </div>`;
}

function buildIncidentReportText(c) {
  const g = c.graph || { domains: [], infrastructure: [], student_count: c.affected_students || 0 };
  return `HALO INCIDENT REPORT
=====================
Campaign: ${c.name}
Severity: ${c.related_emails.some((e) => e.bucket === "high-risk") ? "High risk" : "Needs attention"}
Status: ${c.status}
First observed: ${new Date(c.first_seen_at).toLocaleString()}
Last activity: ${new Date(c.last_seen_at).toLocaleString()}
Affected students: ${g.student_count}
Related messages: ${c.related_emails.length}

DOMAINS INVOLVED
${g.domains.map((d) => `- ${d.domain} (${d.email_ids.length} message(s))`).join("\n") || "- none observed"}

INFRASTRUCTURE INVOLVED
${g.infrastructure.map((i) => `- ${i.org} (${i.asn}, ${i.ip}) -- ${i.email_ids.length} message(s)`).join("\n") || "- none observed"}

RECOMMENDED ACTIONS
- Notify affected students not to click links, pay fees, or share credentials related to this campaign.
- Consider blocking the domains/infrastructure listed above at the institution's mail gateway.
- Advise affected students to report the message through official channels if they engaged with it.

Generated by HALO from analyzed message data. Approximate infrastructure location only -- not the attacker's physical location.`;
}

// ---------------------------------------------------------------- world map
// Simple equirectangular projection (lon/lat -> x/y). No map library,
// no CDN -- a plain SVG path per country, built from GEO_COUNTRIES.
function renderWorldMapSVG(nodes) {
  const W = 700, H = 360;
  const project = ([lon, lat]) => [((lon + 180) / 360) * W, ((90 - lat) / 180) * H];
  const countryPaths = Object.values(GEO_COUNTRIES).map((ring) => {
    const d = ring.map((pt, i) => `${i === 0 ? "M" : "L"}${project(pt).join(",")}`).join(" ") + "Z";
    return `<path d="${d}" fill="#0d1f38" stroke="var(--cyan)" stroke-width="0.5" opacity="0.55"/>`;
  }).join("");
  const markers = nodes.map((n, idx) => {
    const coords = GEO_CITY_COORDS[n.region];
    if (!coords) return "";
    const [x, y] = project(coords);
    const tone = n.risk_score >= 70 ? "high" : n.risk_score >= 40 ? "mid" : "low";
    const color = tone === "high" ? "var(--accent)" : tone === "mid" ? "var(--warn)" : "var(--safe)";
    return `<g class="halo-map-node" data-action="focus-infra-node" data-ip="${esc(n.ip)}" style="cursor:pointer;">
      <circle cx="${x}" cy="${y}" r="10" fill="${color}" opacity="0.18" class="halo-node-halo"/>
      <circle cx="${x}" cy="${y}" r="5" fill="${color}" stroke="#04060a" stroke-width="1.2" filter="url(#halo-node-glow)"/>
      <title>${esc(n.org)} -- ${esc(n.region || "")}, ${esc(n.country || "")} (${tone === "high" ? "high-risk" : tone === "mid" ? "suspicious" : "low concern"})</title>
    </g>`;
  }).join("");
  return `<svg viewBox="0 0 ${W} ${H}" style="width:100%;height:auto;background:radial-gradient(ellipse at 50% 40%, #0a1a30 0%, #050b16 80%);border:2px solid var(--cyan);">
    <defs>
      <filter id="halo-node-glow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur stdDeviation="2.2" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
      <pattern id="halo-map-grid" width="24" height="24" patternUnits="userSpaceOnUse">
        <path d="M24 0H0V24" fill="none" stroke="var(--cyan)" stroke-width="0.3" opacity="0.15"/>
      </pattern>
    </defs>
    <rect x="0" y="0" width="${W}" height="${H}" fill="url(#halo-map-grid)"/>
    ${countryPaths}${markers}
  </svg>
  <div style="display:flex;gap:18px;flex-wrap:wrap;margin-top:8px;font-size:14px;color:var(--ink-soft);">
    <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--accent);margin-right:5px;"></span>High-risk</span>
    <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--warn);margin-right:5px;"></span>Suspicious</span>
    <span><span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:var(--safe);margin-right:5px;"></span>Low concern</span>
    <span style="margin-left:auto;letter-spacing:0.03em;">OBSERVED INFRASTRUCTURE -- LOCATION APPROXIMATE</span>
  </div>`;
}


function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

function screenLocalScanning(stageText) {
  return `<div class="center-wrap"><h1>HALO</h1>
    <div class="panel"><h2>${esc(stageText)}</h2><p class="note info">Running entirely on this device -- no network request is made.</p></div>
  </div>`;
}

/** Demo Mode, start to finish, with ZERO network requests. This is the
 * fix for "Continue with Demo Data" showing "Failed to fetch": that
 * button used to call the real /auth/mock-login endpoint (and the old
 * "Run Demo Scan" button called the real /emails/scan endpoint) -- if
 * the backend was unreachable, both threw. DEMO_EMAILS below holds
 * genuine HALO-Trust-RF-v3 output captured once from the real backend
 * (see demo-data.js's header comment) and is simply replayed locally,
 * so demo mode works identically with the backend fully offline. */
// ---------------------------------------------------------------- demo mode
function renderDemoCampaignList() {
  const mount = document.getElementById("campaignListMount");
  if (!mount) return;
  mount.innerHTML = `<div class="row-list">
    <div class="row-item" data-action="open-campaign" data-id="${DEMO_CAMPAIGN.id}">
      <div>
        <div>${esc(DEMO_CAMPAIGN.name)}</div>
        <div class="note info" style="border:none;padding:0;margin:0;">First seen ${new Date(DEMO_CAMPAIGN.first_seen_at).toLocaleDateString()} &middot; Last activity ${new Date(DEMO_CAMPAIGN.last_seen_at).toLocaleDateString()}</div>
      </div>
      <span class="badge high-risk">${DEMO_CAMPAIGN.affected_students} STUDENTS &middot; ${DEMO_CAMPAIGN.status.toUpperCase()}</span>
    </div>
  </div>`;
}

async function enterDemoMode() {
  APP.demoMode = true;
  APP.error = null;
  const role = APP.role || "student";
  APP.user = { email: role === "institution" ? "demo-admin@halo.local" : "demo-student@halo.local", role, auth_provider: "demo" };

  const stages = role === "institution"
    ? ["LOADING DEMO DATA...", "CHECKING CAMPUS ACTIVITY...", "CORRELATING CAMPAIGNS...", "READY"]
    : ["LOADING DEMO DATA...", "CHECKING YOUR INBOX...", "ANALYSING MESSAGES...", "SCAN COMPLETE"];
  for (const stage of stages) {
    APP.screen = "local-scanning";
    root.innerHTML = screenLocalScanning(stage);
    await sleep(350);
  }

  if (role === "institution") {
    institutionDashboardData = { role: "institution", institution_id: "demo", active_campaigns: 1 };
    APP.screen = "institution-dashboard";
    render();
    renderDemoCampaignList();
  } else {
    const counts = { safe: 0, attention: 0, "high-risk": 0 };
    DEMO_EMAILS.forEach((e) => counts[e.bucket]++);
    studentDashboardData = { role: "student", counts };
    APP.screen = "student-dashboard";
    render();
    renderDemoStudentLists();
  }
}

function renderDemoStudentLists() {
  const mount = document.getElementById("emailListMount");
  if (mount) {
    mount.innerHTML = `<div class="row-list">` + DEMO_EMAILS.map((e) => `
      <div class="row-item" data-action="open-email" data-id="${e.id}">
        <div>
          <div>${esc(e.subject)}</div>
          <div class="note info" style="border:none;padding:0;margin:0;">${esc(e.sender_name)} &lt;${esc(e.from_address)}&gt;</div>
        </div>
        <span class="badge ${e.bucket}">${simpleVerdict(e.bucket).badge}</span>
      </div>`).join("") + `</div>`;
  }
  renderActivityFeed(DEMO_EMAILS.map((e, i) => ({
    label: (e.bucket === "safe" ? `Sender verified: "${e.subject}"` : `${e.bucket === "high-risk" ? "High-risk" : "Suspicious"} email detected: "${e.subject}"`) + " (DEMO SCENARIO)",
    timestamp: new Date(Date.now() - i * 40 * 60000).toISOString(),
  })));
}


// Event delegation on the root container: this correctly handles
// dynamically-injected content (e.g. the email/campaign lists, which
// are added to the DOM by loadStudentDashboard/loadInstitutionDashboard
// AFTER render() already ran) without needing to re-attach listeners.
root.addEventListener("click", (ev) => {
  const el = ev.target.closest("[data-action]");
  if (el) handleAction(el.dataset.action, el.dataset);
});
function wire() { /* no-op: delegation above covers all current and future elements */ }

async function handleAction(action, data) {
  APP.error = null;
  try {
    if (action === "pick-role") { APP.role = data.role; APP.error = null; APP.screen = "connect"; render(); }
    else if (action === "back-role") { APP.screen = "role-select"; render(); }
    else if (action === "submit-email") {
      const email = document.getElementById("emailInput").value.trim();
      if (!email.includes("@")) { APP.error = "Please enter a valid email address."; render(); return; }
      APP.email = email;
      try {
        const { provider } = await api.detectProvider(email);
        APP.detectedProvider = provider === "unknown" ? null : provider;
      } catch {
        // Detection is a convenience, not a hard requirement -- a
        // transient DNS/network hiccup here must not block the user
        // from reaching the connect screen at all.
        APP.detectedProvider = null;
      }
      APP.screen = "connect"; render();
    }
    else if (action === "connect") {
      // No email is collected upfront -- the provider's own OAuth
      // response determines the account, never a client-typed address.
      window.location.href = api.authorizeUrl(data.provider, "", APP.role);
      // If the provider isn't configured, the backend responds with JSON
      // (not a redirect); the browser will show that response directly
      // rather than navigating to a provider's consent screen. That is
      // the honest "not configured" state, not a bug.
    }
    else if (action === "demo-login") {
      await enterDemoMode();
    }
    else if (action === "logout") {
      if (!APP.demoMode) await api.logout();
      APP.user = null; APP.role = null; APP.email = null; APP.demoMode = false;
      studentDashboardData = null; institutionDashboardData = null;
      APP.screen = "role-select"; render();
    }
    else if (action === "run-demo-scan") {
      await enterDemoMode();
    }
    else if (action === "run-real-scan") {
      await api.scanRealInbox();
      await loadStudentDashboard();
    }
    else if (action === "download-report") {
      const text = buildIncidentReportText(campaignDetailData);
      const blob = new Blob([text], { type: "text/plain" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url; a.download = `HALO-incident-report-${campaignDetailData.id}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    }
    else if (action === "view-trends") {
      trendsData = APP.demoMode ? DEMO_TRENDS : await api.trends();
      APP.screen = "trends"; render();
    }
    else if (action === "report-suspicious") {
      // No backend endpoint exists yet for institution-side reporting,
      // so this is honestly local-only feedback, not a real submission --
      // matching "otherwise say Marked for review" rather than claiming
      // a report was sent somewhere it wasn't.
      const el = document.getElementById(`report-feedback-${data.id}`);
      if (el) el.innerHTML = ` <span class="note info" style="border:none;padding:0;margin:0;display:inline;">Marked for review.</span>`;
    }
    else if (action === "focus-infra-node") {
      const row = document.getElementById(`infra-row-${data.ip}`);
      if (row) {
        row.scrollIntoView({ behavior: "smooth", block: "center" });
        row.classList.add("halo-row-flash");
        setTimeout(() => row.classList.remove("halo-row-flash"), 1200);
      }
    }
    else if (action === "view-geo") {
      geoInfraData = APP.demoMode ? DEMO_GEO : await api.geoInfrastructure();
      APP.screen = "geo-infrastructure"; render();
    }
    else if (action === "view-timeline") {
      timelineData = APP.demoMode ? DEMO_TIMELINE : await api.timeline();
      APP.screen = "timeline"; render();
    }
    else if (action === "open-email") {
      APP.currentEmailId = data.id;
      if (APP.demoMode) {
        const rec = DEMO_EMAILS.find((e) => e.id === data.id);
        emailDetailData = { ...rec, raw_result_json: JSON.stringify(rec.raw_result) };
      } else {
        emailDetailData = await api.getEmail(data.id);
      }
      APP.screen = "email-detail"; render();
    }
    else if (action === "back-dashboard") {
      APP.screen = "student-dashboard"; render();
      if (!APP.demoMode) await loadStudentDashboard();
      else renderDemoStudentLists();
    }
    else if (action === "open-campaign") {
      APP.currentCampaignId = data.id;
      campaignDetailData = APP.demoMode ? DEMO_CAMPAIGN : await api.getCampaign(data.id);
      APP.screen = "campaign-detail"; render();
    }
    else if (action === "back-institution") {
      APP.screen = "institution-dashboard"; render();
      if (!APP.demoMode) await loadInstitutionDashboard();
      else renderDemoCampaignList();
    }
    else if (action === "set-status") {
      if (!APP.demoMode) {
        await api.setCampaignStatus(APP.currentCampaignId, data.status);
        campaignDetailData = await api.getCampaign(APP.currentCampaignId);
      } else {
        DEMO_CAMPAIGN.status = data.status; // keep demo state consistent across navigation
        campaignDetailData = DEMO_CAMPAIGN;
      }
      render();
    }
  } catch (e) {
    if (e.status === 401) { APP.user = null; APP.screen = "role-select"; render(); return; }
    if (e.status === 403) { APP.error = "You don't have permission to view this page."; render(); return; }
    if (e.status === 404) { APP.error = "Not found."; render(); return; }
    // A raw "Failed to fetch" (network error / backend unreachable) must
    // never reach the user verbatim -- translate it to a plain HALO
    // message. Anything else from the API layer is already a message
    // written for end users (see api.js's request()), so it passes
    // through unchanged.
    const isNetworkError = /Failed to fetch|NetworkError|ERR_CONNECTION/i.test(e.message || "");
    APP.error = isNetworkError ? "HALO couldn't connect right now. Please try again." : (e.message || "Something went wrong.");
    render();
  }
}

// After the initial render lands on a dashboard (e.g. session already
// existed on page load), boot() above triggers the data load.
boot();

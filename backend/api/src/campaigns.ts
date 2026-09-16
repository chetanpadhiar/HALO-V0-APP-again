import { getDb, nowIso } from "./db.ts";
import { parseJsonField } from "./db-interface.ts";

/**
 * Real correlation over PERSISTED data (not a demo/decorative pass):
 * groups this institution's recently-analyzed high-risk/attention emails
 * that share a sender domain into a campaign row. Re-running is
 * idempotent -- it extends an existing open campaign for a domain
 * rather than duplicating it.
 *
 * This is intentionally simple (domain-sharing is one real signal among
 * the several the spec lists -- URL/IP/subject-similarity are natural
 * extensions, not implemented here to avoid overbuilding an unverified
 * heuristic). It is correlating REAL analysis rows, not fabricating a
 * campaign to look populated.
 */
export async function recomputeCampaignsForInstitution(institutionId: string): Promise<{ campaignsTouched: number }> {
  const db = getDb();
  const rows = await db.all<{ email_id: string; from_address: string | null; bucket: string; raw_result_json: unknown }>(`
    SELECT e.id as email_id, e.from_address, ea.bucket, ea.raw_result_json
    FROM emails e
    JOIN email_analyses ea ON ea.email_id = e.id
    JOIN email_accounts acc ON acc.id = e.email_account_id
    JOIN users u ON u.id = acc.user_id
    WHERE u.institution_id = ? AND ea.bucket IN ('attention','high-risk')
  `, [institutionId]);

  const byDomain = new Map<string, string[]>();
  for (const r of rows) {
    let domain: string | null = null;
    try {
      domain = parseJsonField<any>(r.raw_result_json)?.parsed?.from_domain || null;
    } catch {
      /* ignore malformed stored result */
    }
    if (!domain) continue;
    if (!byDomain.has(domain)) byDomain.set(domain, []);
    byDomain.get(domain)!.push(r.email_id);
  }

  let touched = 0;
  for (const [domain, emailIds] of byDomain) {
    if (emailIds.length < 2) continue; // "campaign" implies more than one message
    let campaign = await db.get<{ id: string }>(
      "SELECT id FROM campaigns WHERE institution_id = ? AND name = ? AND status != 'resolved'",
      [institutionId, `Suspicious activity from ${domain}`]
    );

    if (!campaign) {
      const id = crypto.randomUUID();
      await db.run(
        `INSERT INTO campaigns (id, institution_id, name, status, is_demo_data, first_seen_at, last_seen_at)
         VALUES (?, ?, ?, 'open', 0, ?, ?)`,
        [id, institutionId, `Suspicious activity from ${domain}`, nowIso(), nowIso()]
      );
      campaign = { id };
    } else {
      await db.run("UPDATE campaigns SET last_seen_at = ? WHERE id = ?", [nowIso(), campaign.id]);
    }

    for (const emailId of emailIds) {
      // Portable across both backends (modern SQLite and Postgres both
      // support ON CONFLICT), unlike SQLite-specific `INSERT OR IGNORE`.
      await db.run("INSERT INTO campaign_membership (campaign_id, email_id) VALUES (?, ?) ON CONFLICT DO NOTHING", [campaign.id, emailId]);
    }
    touched++;
  }
  return { campaignsTouched: touched };
}

export async function listCampaignsForInstitution(institutionId: string) {
  const db = getDb();
  const campaigns = await db.all<any>("SELECT * FROM campaigns WHERE institution_id = ? ORDER BY last_seen_at DESC", [institutionId]);
  const out = [];
  for (const c of campaigns) {
    const affected = await db.get<{ n: number }>(`
      SELECT COUNT(DISTINCT acc.user_id) as n
      FROM campaign_membership cm
      JOIN emails e ON e.id = cm.email_id
      JOIN email_accounts acc ON acc.id = e.email_account_id
      WHERE cm.campaign_id = ?
    `, [c.id]);
    out.push({ ...c, affected_students: affected?.n ?? 0 });
  }
  return out;
}

/** Institution-scoped lookup -- returns undefined (not an error) if the
 * campaign exists but belongs to a DIFFERENT institution, so callers can
 * return a plain 404 rather than leaking that the ID exists elsewhere. */
export async function getCampaignForInstitution(campaignId: string, institutionId: string) {
  const db = getDb();
  const campaign = await db.get<any>("SELECT * FROM campaigns WHERE id = ? AND institution_id = ?", [campaignId, institutionId]);
  if (!campaign) return undefined;
  const emails = await db.all<any>(`
    SELECT e.id, e.from_address, e.subject, e.received_at, ea.bucket, ea.trust_score, ea.raw_result_json,
           acc.user_id as student_user_id
    FROM campaign_membership cm
    JOIN emails e ON e.id = cm.email_id
    JOIN email_analyses ea ON ea.email_id = e.id
    JOIN email_accounts acc ON acc.id = e.email_account_id
    WHERE cm.campaign_id = ?
  `, [campaignId]);

  // Real relationship graph -- domains and infrastructure actually
  // observed on THESE emails, not invented. Built the same way the
  // institution geo-infrastructure endpoint reads infra signals: from
  // the already-persisted raw_result_json, never a new lookup.
  // Students are represented by an anonymous per-campaign index, never
  // their real email address or identity -- institution views get
  // aggregate/pseudonymous student information, consistent with the
  // rest of this app's privacy boundary (see README).
  const domains = new Map<string, Set<string>>(); // domain -> set of email ids
  const infra = new Map<string, { org: string; asn: string; emailIds: Set<string> }>(); // ip -> info
  const studentIndex = new Map<string, number>(); // user_id -> anonymous "Student N" number
  const relatedEmails = emails.map((e) => {
    const parsed = parseJsonField<any>(e.raw_result_json);
    const domain = parsed?.parsed?.from_domain || null;
    const ip = parsed?.signals?.infrastructure?.ip || null;
    if (domain) {
      if (!domains.has(domain)) domains.set(domain, new Set());
      domains.get(domain)!.add(e.id);
    }
    if (ip) {
      if (!infra.has(ip)) infra.set(ip, { org: parsed.signals.infrastructure.org || "unknown", asn: parsed.signals.infrastructure.asn || "unknown", emailIds: new Set() });
      infra.get(ip)!.emailIds.add(e.id);
    }
    if (!studentIndex.has(e.student_user_id)) studentIndex.set(e.student_user_id, studentIndex.size + 1);
    return { id: e.id, from_address: e.from_address, subject: e.subject, bucket: e.bucket, trust_score: e.trust_score, domain, infra_ip: ip, student_label: `Student ${studentIndex.get(e.student_user_id)}` };
  });

  const graph = {
    domains: Array.from(domains.entries()).map(([domain, emailIds]) => ({ domain, email_ids: Array.from(emailIds) })),
    infrastructure: Array.from(infra.entries()).map(([ip, info]) => ({ ip, org: info.org, asn: info.asn, email_ids: Array.from(info.emailIds) })),
    student_count: studentIndex.size,
  };

  return { ...campaign, related_emails: relatedEmails, graph };
}

export async function setCampaignStatus(campaignId: string, institutionId: string, status: "open" | "investigating" | "resolved"): Promise<boolean> {
  const result = await getDb().run(
    "UPDATE campaigns SET status = ? WHERE id = ? AND institution_id = ?",
    [status, campaignId, institutionId]
  );
  return result.changes > 0;
}

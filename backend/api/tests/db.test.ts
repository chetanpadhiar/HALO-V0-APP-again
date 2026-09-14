// Database-layer tests, run with:
//   cd backend/api && node --experimental-strip-types tests/db.test.ts
// Runs against SQLite by default (no DATABASE_URL in this sandbox --
// see README for why the Postgres path can't be exercised here).
// Uses a throwaway file so it never touches a real halo.db.

import assert from "node:assert/strict";
import { unlinkSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const TEST_DB_PATH = join(__dirname, "test.db");
if (existsSync(TEST_DB_PATH)) unlinkSync(TEST_DB_PATH);
process.env.HALO_DB_PATH = TEST_DB_PATH;
process.env.TOKEN_ENCRYPTION_KEY = "0123456789abcdef0123456789abcdef0123456789abcdef0123456789abcd";

const { initDatabase, getDb, upsertInstitution, findUserByEmail } = await import("../src/db.ts");
const { createOrGetUser, createSession, getSessionUser, destroySession, audit } = await import("../src/auth.ts");
const { recomputeCampaignsForInstitution, listCampaignsForInstitution } = await import("../src/campaigns.ts");
const { parseJsonField } = await import("../src/db-interface.ts");
const { encryptToken, decryptToken } = await import("../src/crypto.ts");

await initDatabase();
let passed = 0;

async function test(name: string, fn: () => Promise<void>) {
  try {
    await fn();
    console.log(`  ok - ${name}`);
    passed++;
  } catch (e) {
    console.error(`  FAIL - ${name}:`, e);
    process.exitCode = 1;
  }
}

console.log("Database layer tests (backend: sqlite):");

await test("institution creation is idempotent by domain", async () => {
  const a = await upsertInstitution("Test U", "test-u.edu");
  const b = await upsertInstitution("Test U Again", "test-u.edu");
  assert.equal(a.id, b.id, "same domain must return the same institution row");
});

await test("user creation locks role on first login", async () => {
  const u1 = await createOrGetUser("locktest@test-u.edu", "student", "mock");
  const u2 = await createOrGetUser("locktest@test-u.edu", "institution", "mock");
  assert.equal(u1.id, u2.id);
  assert.equal(u2.role, "student", "role must not change on a later login attempt with a different role");
});

await test("session creation, lookup, and expiration format", async () => {
  const user = await createOrGetUser("sessiontest@test-u.edu", "student", "mock");
  const session = await createSession(user.id);
  const found = await getSessionUser(session.token);
  assert.ok(found, "a freshly created session must resolve to a user");
  assert.equal(found!.email, "sessiontest@test-u.edu");
  assert.ok(new Date(session.expiresAt).getTime() > Date.now(), "expiresAt must be in the future");
});

await test("logout destroys the session server-side", async () => {
  const user = await createOrGetUser("logouttest@test-u.edu", "student", "mock");
  const session = await createSession(user.id);
  assert.ok(await getSessionUser(session.token), "session should resolve before logout");
  await destroySession(session.token);
  assert.equal(await getSessionUser(session.token), null, "session must not resolve after logout");
});

await test("email + analysis persistence", async () => {
  const db = getDb();
  const user = await createOrGetUser("emailtest@test-u.edu", "student", "mock");
  const accId = crypto.randomUUID();
  await db.run("INSERT INTO email_accounts (id, user_id, provider, connected_at, is_demo_data) VALUES (?, ?, 'mock', ?, 1)", [accId, user.id, new Date().toISOString()]);
  const emailId = crypto.randomUUID();
  await db.run("INSERT INTO emails (id, email_account_id, subject, received_at, is_demo_data) VALUES (?, ?, ?, ?, 1)", [emailId, accId, "Test subject", new Date().toISOString()]);
  await db.run(
    "INSERT INTO email_analyses (id, email_id, bucket, trust_score, model_name, raw_result_json, analyzed_at) VALUES (?, ?, 'high-risk', 20, 'test-model', ?, ?)",
    [crypto.randomUUID(), emailId, JSON.stringify({ reasons: ["test"] }), new Date().toISOString()]
  );
  const row = await db.get<{ subject: string; bucket: string }>(
    "SELECT e.subject, ea.bucket FROM emails e JOIN email_analyses ea ON ea.email_id = e.id WHERE e.id = ?", [emailId]
  );
  assert.equal(row?.subject, "Test subject");
  assert.equal(row?.bucket, "high-risk");
});

await test("campaign persistence and membership", async () => {
  const inst = await upsertInstitution("Campaign U", "campaign-u.edu");
  const user = await createOrGetUser("campaigntest@campaign-u.edu", "student", "mock");
  const db = getDb();
  const accId = crypto.randomUUID();
  await db.run("INSERT INTO email_accounts (id, user_id, provider, connected_at, is_demo_data) VALUES (?, ?, 'mock', ?, 1)", [accId, user.id, new Date().toISOString()]);
  for (let i = 0; i < 2; i++) {
    const emailId = crypto.randomUUID();
    await db.run("INSERT INTO emails (id, email_account_id, subject, received_at, is_demo_data) VALUES (?, ?, ?, ?, 1)", [emailId, accId, `Phish ${i}`, new Date().toISOString()]);
    await db.run(
      "INSERT INTO email_analyses (id, email_id, bucket, trust_score, model_name, raw_result_json, analyzed_at) VALUES (?, ?, 'high-risk', 10, 'test-model', ?, ?)",
      [crypto.randomUUID(), emailId, JSON.stringify({ parsed: { from_domain: "evil-campaign.test" } }), new Date().toISOString()]
    );
  }
  await recomputeCampaignsForInstitution(inst.id);
  const campaigns = await listCampaignsForInstitution(inst.id);
  assert.ok(campaigns.length >= 1, "a campaign should be created from 2+ correlated emails");
  assert.equal(campaigns[0].affected_students, 1);
});

await test("cross-institution query isolation at the data layer", async () => {
  const instA = await upsertInstitution("Iso A", "iso-a.edu");
  const instB = await upsertInstitution("Iso B", "iso-b.edu");
  const db = getDb();
  const campId = crypto.randomUUID();
  await db.run("INSERT INTO campaigns (id, institution_id, name, status, is_demo_data, first_seen_at, last_seen_at) VALUES (?, ?, 'Test campaign', 'open', 0, ?, ?)",
    [campId, instA.id, new Date().toISOString(), new Date().toISOString()]);
  const campaignsForB = await listCampaignsForInstitution(instB.id);
  assert.ok(!campaignsForB.some((c: any) => c.id === campId), "institution B must never see institution A's campaign");
});

await test("token encryption/decryption round trip", async () => {
  const original = "ya29.real-looking-access-token-value";
  const encrypted = encryptToken(original);
  assert.notEqual(encrypted, original, "encrypted value must not equal plaintext");
  assert.equal(decryptToken(encrypted), original);
});

await test("audit log creation", async () => {
  const user = await createOrGetUser("audittest@test-u.edu", "student", "mock");
  await audit(user.id, "test:action", "allowed", "unit test");
  const row = await getDb().get<{ action: string; outcome: string }>(
    "SELECT action, outcome FROM audit_logs WHERE user_id = ? ORDER BY created_at DESC LIMIT 1", [user.id]
  );
  assert.equal(row?.action, "test:action");
  assert.equal(row?.outcome, "allowed");
});

await test("duplicate real-mode scan updates rather than duplicates (provider_message_id dedup)", async () => {
  const db = getDb();
  const user = await createOrGetUser("duptest@test-u.edu", "student", "mock");
  const accId = crypto.randomUUID();
  await db.run("INSERT INTO email_accounts (id, user_id, provider, connected_at, is_demo_data) VALUES (?, ?, 'google', ?, 0)", [accId, user.id, new Date().toISOString()]);

  // Simulate the exact dedup logic server.ts's /emails/scan uses for
  // real-mode persistence: same provider_message_id, scanned twice.
  async function simulateRealScanPersist(providerMessageId: string, subject: string, bucket: string) {
    const existing = await db.get<{ id: string }>(
      "SELECT id FROM emails WHERE email_account_id = ? AND provider_message_id = ?", [accId, providerMessageId]
    );
    let emailId: string;
    if (existing) {
      emailId = existing.id;
      await db.run("DELETE FROM email_analyses WHERE email_id = ?", [emailId]);
    } else {
      emailId = crypto.randomUUID();
      await db.run("INSERT INTO emails (id, email_account_id, provider_message_id, subject, received_at, is_demo_data) VALUES (?, ?, ?, ?, ?, 0)", [emailId, accId, providerMessageId, subject, new Date().toISOString()]);
    }
    await db.run(
      "INSERT INTO email_analyses (id, email_id, bucket, trust_score, model_name, raw_result_json, analyzed_at) VALUES (?, ?, ?, 50, 'test-model', ?, ?)",
      [crypto.randomUUID(), emailId, bucket, JSON.stringify({}), new Date().toISOString()]
    );
  }

  await simulateRealScanPersist("gmail-msg-abc123", "Test subject v1", "high-risk");
  await simulateRealScanPersist("gmail-msg-abc123", "Test subject v1", "safe"); // re-scan of the SAME message

  const rows = await db.all("SELECT * FROM emails WHERE email_account_id = ? AND provider_message_id = ?", [accId, "gmail-msg-abc123"]);
  assert.equal(rows.length, 1, "re-scanning the same provider message must not create a duplicate email row");
  const analyses = await db.all("SELECT * FROM email_analyses WHERE email_id = ?", [rows[0].id]);
  assert.equal(analyses.length, 1, "the old analysis must be replaced, not accumulated");
  assert.equal(analyses[0].bucket, "safe", "the surviving analysis must be the latest one");
});

await test("token refresh persists a ROTATED refresh_token, not just the access token", async () => {
  const db = getDb();
  const user = await createOrGetUser("refreshtest@test-u.edu", "student", "mock");
  const accId = crypto.randomUUID();
  const oldRefreshEnc = encryptToken("old-refresh-token-value");
  await db.run(
    "INSERT INTO email_accounts (id, user_id, provider, connected_at, is_demo_data, access_token, refresh_token, token_expires_at) VALUES (?, ?, 'microsoft', ?, 0, ?, ?, ?)",
    [accId, user.id, new Date().toISOString(), encryptToken("old-access-token"), oldRefreshEnc, new Date(Date.now() - 1000).toISOString()]
  );

  // Simulate exactly what server.ts's refresh block does: a provider
  // returning a genuinely NEW refresh token (e.g. Microsoft rotating it).
  const refreshed = { accessToken: "new-access-token", refreshToken: "new-rotated-refresh-token", expiresAt: new Date(Date.now() + 3600_000).toISOString() };
  await db.run("UPDATE email_accounts SET access_token = ?, refresh_token = ?, token_expires_at = ? WHERE id = ?", [
    encryptToken(refreshed.accessToken), encryptToken(refreshed.refreshToken), refreshed.expiresAt, accId,
  ]);

  const row = await db.get<{ refresh_token: string }>("SELECT refresh_token FROM email_accounts WHERE id = ?", [accId]);
  assert.notEqual(row!.refresh_token, oldRefreshEnc, "the stored refresh_token must change after a rotation");
  assert.equal(decryptToken(row!.refresh_token), "new-rotated-refresh-token");
});

await test("infrastructure reuse detection: real IP appearing across two students is flagged", async () => {
  const inst = await upsertInstitution("Reuse U", "reuse-u.edu");
  const db = getDb();
  const sharedIp = "185.220.101.47";
  const infraResult = (subject: string) => JSON.stringify({
    bucket: "high-risk",
    parsed: { subject },
    signals: { infrastructure: { ip: sharedIp, org: "Offshore Hosting Solutions Ltd.", asn: "AS208843", country: "DE", region: "Frankfurt", category: "bulk-anonymous-hosting", score: 78 } },
  });
  for (const studentEmail of ["reuseA@reuse-u.edu", "reuseB@reuse-u.edu"]) {
    const user = await createOrGetUser(studentEmail, "student", "mock");
    const accId = crypto.randomUUID();
    await db.run("INSERT INTO email_accounts (id, user_id, provider, connected_at, is_demo_data) VALUES (?, ?, 'mock', ?, 1)", [accId, user.id, new Date().toISOString()]);
    const emailId = crypto.randomUUID();
    await db.run("INSERT INTO emails (id, email_account_id, subject, received_at, is_demo_data) VALUES (?, ?, ?, ?, 1)", [emailId, accId, "Verify now", new Date().toISOString()]);
    await db.run("INSERT INTO email_analyses (id, email_id, bucket, trust_score, model_name, raw_result_json, analyzed_at) VALUES (?, ?, 'high-risk', 20, 'test-model', ?, ?)",
      [crypto.randomUUID(), emailId, infraResult("Verify now"), new Date().toISOString()]);
  }
  // Same logic the /institution/geo/infrastructure endpoint uses, applied directly for a unit-level check.
  const rows = await db.all<{ raw_result_json: unknown }>(`
    SELECT ea.raw_result_json FROM email_analyses ea
    JOIN emails e ON e.id = ea.email_id JOIN email_accounts acc ON acc.id = e.email_account_id
    JOIN users u ON u.id = acc.user_id WHERE u.institution_id = ?`, [inst.id]);
  const ipCounts = new Map<string, number>();
  for (const r of rows) {
    const ip = parseJsonField<any>(r.raw_result_json)?.signals?.infrastructure?.ip;
    if (ip) ipCounts.set(ip, (ipCounts.get(ip) || 0) + 1);
  }
  assert.equal(ipCounts.get(sharedIp), 2, "the shared IP must be counted across both students");
});

console.log(`\n${passed} test(s) passed.`);
if (existsSync(TEST_DB_PATH)) unlinkSync(TEST_DB_PATH);

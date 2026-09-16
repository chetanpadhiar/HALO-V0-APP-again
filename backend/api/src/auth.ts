import { getDb, nowIso, findUserByEmail, findUserById, upsertInstitution, type User } from "./db.ts";

const SESSION_TTL_MS = 12 * 60 * 60 * 1000; // 12h

/**
 * Creates the user on first login (role + institution derived from the
 * TRUSTED identity/email domain at that moment) or returns the existing
 * user unchanged on every subsequent login. This is the actual
 * enforcement point for "role is locked after authentication": there is
 * no code path, anywhere, that updates an existing user's role. A
 * returning user who "requests" a different role via `requestedRole`
 * simply gets their original role back -- the parameter is accepted
 * only so the first-ever login can seed it, exactly once.
 */
export async function createOrGetUser(email: string, requestedRole: "student" | "institution", provider: string): Promise<User> {
  const existing = await findUserByEmail(email);
  if (existing) return existing; // role/provider from first login stand, regardless of what's requested now

  const domain = email.split("@")[1] || "unknown";
  // Every user's institution is derived from their email domain, not
  // from anything the client asserts about itself.
  const institutionId = (await upsertInstitution(domain, domain)).id;

  const id = crypto.randomUUID();
  await getDb().run(
    `INSERT INTO users (id, email, role, institution_id, auth_provider, created_at, last_login_at)
     VALUES (?, ?, ?, ?, ?, ?, ?)`,
    [id, email, requestedRole, institutionId, provider, nowIso(), nowIso()]
  );
  return (await findUserById(id))!;
}

export async function createSession(userId: string): Promise<{ token: string; expiresAt: string }> {
  const token = crypto.randomUUID() + crypto.randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();
  await getDb().run("INSERT INTO sessions (token, user_id, created_at, expires_at) VALUES (?, ?, ?, ?)", [token, userId, nowIso(), expiresAt]);
  return { token, expiresAt };
}

export async function destroySession(token: string): Promise<void> {
  await getDb().run("DELETE FROM sessions WHERE token = ?", [token]);
}

/** The ONLY function in this codebase that turns a request into an
 * identity. Everything else must call this rather than trusting any
 * header/body/query field the client sends. */
export async function getSessionUser(token: string | undefined): Promise<User | null> {
  if (!token) return null;
  const row = await getDb().get<User>(
    "SELECT u.* FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token = ? AND s.expires_at > ?",
    [token, nowIso()]
  );
  return row || null;
}

export async function audit(userId: string | null, action: string, outcome: "allowed" | "denied", detail?: string): Promise<void> {
  await getDb().run(
    "INSERT INTO audit_logs (id, user_id, action, outcome, detail, created_at) VALUES (?, ?, ?, ?, ?, ?)",
    [crypto.randomUUID(), userId, action, outcome, detail || null, nowIso()]
  );
}

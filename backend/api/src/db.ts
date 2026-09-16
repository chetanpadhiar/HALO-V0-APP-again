import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import type { Database } from "./db-interface.ts";

const __dirname = dirname(fileURLToPath(import.meta.url));

let _db: Database | null = null;

/**
 * The ONE place database selection happens -- not scattered
 * `if (NODE_ENV === ...)` checks through the app. Presence of
 * DATABASE_URL, not NODE_ENV, decides the backend: this matches how
 * every real hosting platform actually provisions a database (an env
 * var pointing at it), and means a production deploy that forgets to
 * set DATABASE_URL fails loudly (schema won't match expectations)
 * rather than silently running on SQLite.
 *
 * Must be called once, before the server starts handling requests --
 * see server.ts's top-level `await initDatabase()`.
 */
export async function initDatabase(): Promise<void> {
  const url = process.env.DATABASE_URL;
  if (url) {
    const { PostgresDatabase } = await import("./db-postgres.ts");
    _db = new PostgresDatabase(url);
    await _db.exec(readFileSync(join(__dirname, "schema.postgres.sql"), "utf-8"));
  } else {
    const { SqliteDatabase } = await import("./db-sqlite.ts");
    _db = new SqliteDatabase(process.env.HALO_DB_PATH || join(__dirname, "..", "halo.db"));
    await _db.exec(readFileSync(join(__dirname, "schema.sqlite.sql"), "utf-8"));
  }
}

export function getDb(): Database {
  if (!_db) throw new Error("Database not initialized -- call initDatabase() before handling requests.");
  return _db;
}

export function nowIso(): string {
  return new Date().toISOString();
}

export interface Institution {
  id: string;
  name: string;
  email_domain: string;
}

export interface User {
  id: string;
  email: string;
  role: "student" | "institution";
  institution_id: string | null;
  auth_provider: string;
}

export async function findInstitutionByDomain(domain: string): Promise<Institution | undefined> {
  return getDb().get<Institution>("SELECT * FROM institutions WHERE email_domain = ?", [domain]);
}

export async function upsertInstitution(name: string, domain: string): Promise<Institution> {
  const existing = await findInstitutionByDomain(domain);
  if (existing) return existing;
  const id = crypto.randomUUID();
  await getDb().run("INSERT INTO institutions (id, name, email_domain, created_at) VALUES (?, ?, ?, ?)", [id, name, domain, nowIso()]);
  return { id, name, email_domain: domain };
}

export async function findUserByEmail(email: string): Promise<User | undefined> {
  return getDb().get<User>("SELECT * FROM users WHERE email = ?", [email]);
}

export async function findUserById(id: string): Promise<User | undefined> {
  return getDb().get<User>("SELECT * FROM users WHERE id = ?", [id]);
}

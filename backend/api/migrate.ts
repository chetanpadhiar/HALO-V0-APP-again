// One-command schema setup for a fresh database -- local SQLite or a
// fresh Supabase/Postgres instance, whichever DATABASE_URL selects.
//
// Usage:
//   cd backend/api
//   node --experimental-strip-types migrate.ts
//
// This applies schema.sqlite.sql or schema.postgres.sql (CREATE TABLE
// IF NOT EXISTS throughout) -- safe to run repeatedly, including
// against a database that already has the tables.
import { initDatabase, getDb } from "./src/db.ts";

console.log(`Running HALO schema migration against: ${process.env.DATABASE_URL ? "PostgreSQL (DATABASE_URL)" : "SQLite (local dev)"}`);
await initDatabase();
const ok = await getDb().ping();
if (!ok) {
  console.error("Migration ran, but the database does not respond to a basic query. Something is wrong.");
  process.exit(1);
}
console.log("Schema applied successfully. Database is reachable.");
process.exit(0);

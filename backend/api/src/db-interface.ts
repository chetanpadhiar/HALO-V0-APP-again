/**
 * The only contract application code (auth.ts, campaigns.ts, server.ts)
 * depends on. Two implementations exist: db-sqlite.ts (development,
 * fully tested) and db-postgres.ts (production, see that file's header
 * for its honest testing status). Selection happens in ONE place --
 * db.ts's factory function -- based on whether DATABASE_URL is set,
 * not scattered NODE_ENV checks through the app.
 *
 * All methods are async even though SQLite is natively synchronous,
 * so the same call sites work unchanged against either backend.
 *
 * SQL text uses `?` placeholders uniformly (SQLite's native style);
 * the Postgres implementation translates them to `$1, $2, ...`
 * internally. Application code never needs to know this.
 */
export interface Database {
  get<T = any>(sql: string, params?: any[]): Promise<T | undefined>;
  all<T = any>(sql: string, params?: any[]): Promise<T[]>;
  run(sql: string, params?: any[]): Promise<{ changes: number }>;
  /** Runs a full schema file (multiple statements) -- used only by migrate.ts. */
  exec(sql: string): Promise<void>;
  /** True if the database is actually reachable right now -- used by
   * /system/integrations, not just "did the process start". */
  ping(): Promise<boolean>;
  close(): Promise<void>;
}

/**
 * Postgres's JSONB columns come back from the driver already parsed as
 * a JS object; SQLite's TEXT columns come back as a JSON string. Call
 * sites that read a JSON-shaped column (raw_result_json) must use this
 * instead of a bare JSON.parse(), or they break on whichever backend
 * they weren't written against.
 */
export function parseJsonField<T = any>(value: unknown): T {
  return typeof value === "string" ? JSON.parse(value) : (value as T);
}

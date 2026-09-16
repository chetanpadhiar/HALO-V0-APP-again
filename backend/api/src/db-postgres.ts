import { Pool } from "pg";
import type { Database } from "./db-interface.ts";

/**
 * PostgreSQL implementation used when DATABASE_URL is present.
 * Render Postgres is the intended production database; SQLite remains the
 * local/demo fallback when DATABASE_URL is absent.
 */
export class PostgresDatabase implements Database {
  private pool: Pool;

  constructor(connectionString: string) {
    this.pool = new Pool({
      connectionString,
      // Render-managed Postgres and other managed providers expose TLS.
      // The connection string remains server-side only.
      ssl: { rejectUnauthorized: false },
      max: 10,
    });
  }

  private translate(sql: string): string {
    let i = 0;
    return sql.replace(/\?/g, () => `$${++i}`);
  }

  async get<T = any>(sql: string, params: any[] = []): Promise<T | undefined> {
    const result = await this.pool.query(this.translate(sql), params);
    return result.rows[0] as T | undefined;
  }

  async all<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    const result = await this.pool.query(this.translate(sql), params);
    return result.rows as T[];
  }

  async run(sql: string, params: any[] = []): Promise<{ changes: number }> {
    const result = await this.pool.query(this.translate(sql), params);
    return { changes: result.rowCount ?? 0 };
  }

  async exec(sql: string): Promise<void> {
    await this.pool.query(sql);
  }

  async ping(): Promise<boolean> {
    try {
      await this.pool.query("SELECT 1");
      return true;
    } catch {
      return false;
    }
  }

  async close(): Promise<void> {
    await this.pool.end();
  }
}

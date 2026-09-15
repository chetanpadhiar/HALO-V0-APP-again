import { DatabaseSync } from "node:sqlite";
import type { Database } from "./db-interface.ts";

/**
 * The development database. Fully tested (this is what every regression
 * test in this repo actually runs against). node:sqlite is synchronous;
 * methods below just wrap its return values in Promise.resolve() to
 * satisfy the shared async interface.
 */
export class SqliteDatabase implements Database {
  private raw: DatabaseSync;

  constructor(path: string) {
    this.raw = new DatabaseSync(path);
  }

  async get<T = any>(sql: string, params: any[] = []): Promise<T | undefined> {
    return this.raw.prepare(sql).get(...params) as T | undefined;
  }

  async all<T = any>(sql: string, params: any[] = []): Promise<T[]> {
    return this.raw.prepare(sql).all(...params) as T[];
  }

  async run(sql: string, params: any[] = []): Promise<{ changes: number }> {
    const result = this.raw.prepare(sql).run(...params);
    return { changes: Number(result.changes) };
  }

  async exec(sql: string): Promise<void> {
    this.raw.exec(sql);
  }

  async ping(): Promise<boolean> {
    try {
      this.raw.prepare("SELECT 1").get();
      return true;
    } catch {
      return false;
    }
  }

  async close(): Promise<void> {
    this.raw.close();
  }
}

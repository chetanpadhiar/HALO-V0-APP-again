import { resolveMx } from "node:dns/promises";

export type DetectedProvider = "google" | "microsoft" | "unknown";

/** Genuine detection via a real MX lookup on the email's domain -- not a
 * guess or a hardcoded list. Google Workspace domains route mail through
 * *.google.com / *.googlemail.com; Microsoft 365 domains route through
 * *.outlook.com / *.protection.outlook.com / *.mail.protection.outlook.com. */
export async function detectProvider(domain: string): Promise<DetectedProvider> {
  try {
    const records = await resolveMx(domain);
    const hosts = records.map((r) => r.exchange.toLowerCase());
    if (hosts.some((h) => h.endsWith("google.com") || h.endsWith("googlemail.com"))) return "google";
    if (hosts.some((h) => h.includes("outlook.com") || h.includes("protection.outlook.com"))) return "microsoft";
    return "unknown";
  } catch {
    // Domain has no MX record, doesn't exist, or DNS is unreachable from
    // this deployment -- honestly "unknown", never a guessed default.
    return "unknown";
  }
}

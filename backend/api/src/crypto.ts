import { createCipheriv, createDecipheriv, randomBytes, createHash } from "node:crypto";

/**
 * Token-at-rest encryption. TOKEN_ENCRYPTION_KEY must be set for any
 * deployment that will store real OAuth tokens -- there is no
 * plaintext fallback for token columns (see encryptToken below, which
 * throws rather than silently storing plaintext when the key is
 * missing). Demo mode never reaches this code path at all (mock-login
 * never writes access_token/refresh_token), so local development with
 * no key configured is unaffected.
 */
function getKey(): Buffer {
  const raw = process.env.TOKEN_ENCRYPTION_KEY;
  if (!raw) {
    throw new Error(
      "TOKEN_ENCRYPTION_KEY is not set. A real OAuth token cannot be stored without it. " +
      "Generate one with: node -e \"console.log(require('crypto').randomBytes(32).toString('hex'))\""
    );
  }
  // Accept either a 64-char hex string (32 bytes) or an arbitrary
  // passphrase (hashed down to 32 bytes) -- either way callers just set
  // one environment variable.
  return /^[0-9a-fA-F]{64}$/.test(raw) ? Buffer.from(raw, "hex") : createHash("sha256").update(raw).digest();
}

export function encryptToken(plaintext: string): string {
  const key = getKey();
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", key, iv);
  const ciphertext = Buffer.concat([cipher.update(plaintext, "utf-8"), cipher.final()]);
  const tag = cipher.getAuthTag();
  // iv.ciphertext.tag, all base64 -- self-contained so no separate IV
  // storage/column is needed.
  return `${iv.toString("base64")}.${ciphertext.toString("base64")}.${tag.toString("base64")}`;
}

export function decryptToken(stored: string): string {
  const key = getKey();
  const [ivB64, ctB64, tagB64] = stored.split(".");
  if (!ivB64 || !ctB64 || !tagB64) throw new Error("Malformed encrypted token value.");
  const decipher = createDecipheriv("aes-256-gcm", key, Buffer.from(ivB64, "base64"));
  decipher.setAuthTag(Buffer.from(tagB64, "base64"));
  const plaintext = Buffer.concat([decipher.update(Buffer.from(ctB64, "base64")), decipher.final()]);
  return plaintext.toString("utf-8");
}

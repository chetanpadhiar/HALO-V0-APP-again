-- HALO persistence schema (SQLite for dev; column types are
-- deliberately vanilla so this ports to Postgres with minimal changes).

CREATE TABLE IF NOT EXISTS institutions (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email_domain TEXT UNIQUE NOT NULL,       -- e.g. "amityonline.edu" -- used to route an email address to an institution
  created_at TEXT NOT NULL
);

-- A user's role is set ONCE, on first successful authentication, and is
-- never updated by any client-supplied value afterward (see auth.ts:
-- createOrGetUser). This is the server-side enforcement of role locking.
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,              -- the TRUSTED identity from the auth provider, never client-supplied
  role TEXT NOT NULL CHECK(role IN ('student','institution')),
  institution_id TEXT REFERENCES institutions(id),
  auth_provider TEXT NOT NULL,             -- 'google' | 'mock' (dev only)
  created_at TEXT NOT NULL,
  last_login_at TEXT NOT NULL
);

-- Sessions are the ONLY source of truth for "who is this request from
-- and what role do they have" -- never a client-supplied field.
CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,                  -- opaque random token, sent as an httpOnly cookie
  user_id TEXT NOT NULL REFERENCES users(id),
  created_at TEXT NOT NULL,
  expires_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS email_accounts (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL REFERENCES users(id),
  provider TEXT NOT NULL,                  -- 'google' | 'mock'
  connected_at TEXT NOT NULL,
  is_demo_data INTEGER NOT NULL DEFAULT 0, -- 1 = seeded/demo mailbox, never conflated with a real one
  -- access_token/refresh_token are encrypted (AES-256-GCM, see
  -- crypto.ts) before they ever reach this table -- TOKEN_ENCRYPTION_KEY
  -- must be set for a real OAuth login to complete at all.
  access_token TEXT,
  refresh_token TEXT,
  token_expires_at TEXT
);

CREATE TABLE IF NOT EXISTS emails (
  id TEXT PRIMARY KEY,
  email_account_id TEXT NOT NULL REFERENCES email_accounts(id),
  provider_message_id TEXT,                -- provider message id; NULL for demo rows. Used to avoid
                                            -- re-inserting the same real message on every re-scan.
  from_address TEXT,
  reply_to_address TEXT,
  subject TEXT,
  received_at TEXT,
  raw_source TEXT,                         -- retained only as long as needed for analysis; see data-minimization note in README
  is_demo_data INTEGER NOT NULL DEFAULT 0
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_emails_account_provider_msg ON emails(email_account_id, provider_message_id)
  WHERE provider_message_id IS NOT NULL;

CREATE TABLE IF NOT EXISTS email_analyses (
  id TEXT PRIMARY KEY,
  email_id TEXT NOT NULL REFERENCES emails(id),
  bucket TEXT NOT NULL,                    -- 'safe' | 'attention' | 'high-risk'
  trust_score INTEGER NOT NULL,
  model_name TEXT NOT NULL,
  model_probability_malicious REAL,
  raw_result_json TEXT NOT NULL,           -- full contextual-trust-engine verdict, for the technical-details view
  analyzed_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS domains (
  id TEXT PRIMARY KEY,
  domain TEXT UNIQUE NOT NULL,
  first_seen_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS campaigns (
  id TEXT PRIMARY KEY,
  institution_id TEXT REFERENCES institutions(id),
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',     -- 'open' | 'investigating' | 'resolved'
  is_demo_data INTEGER NOT NULL DEFAULT 0,
  first_seen_at TEXT NOT NULL,
  last_seen_at TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS campaign_membership (
  campaign_id TEXT NOT NULL REFERENCES campaigns(id),
  email_id TEXT NOT NULL REFERENCES emails(id),
  PRIMARY KEY (campaign_id, email_id)
);

CREATE TABLE IF NOT EXISTS alerts (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES users(id),
  institution_id TEXT REFERENCES institutions(id),
  email_id TEXT REFERENCES emails(id),
  severity TEXT NOT NULL,
  message TEXT NOT NULL,
  resolved INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);

-- Every authorization-relevant decision is logged here, specifically so
-- "attempted role manipulation" and "unauthorized access attempt" are
-- provable, not just asserted.
CREATE TABLE IF NOT EXISTS audit_logs (
  id TEXT PRIMARY KEY,
  user_id TEXT,
  action TEXT NOT NULL,
  outcome TEXT NOT NULL,                   -- 'allowed' | 'denied'
  detail TEXT,
  created_at TEXT NOT NULL
);

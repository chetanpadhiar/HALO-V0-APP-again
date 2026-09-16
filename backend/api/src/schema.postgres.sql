-- HALO persistence schema (PostgreSQL / Supabase, production).
-- Same entities and relationships as schema.sqlite.sql -- this file
-- uses proper Postgres types where SQLite has no native equivalent
-- (UUID, TIMESTAMPTZ, JSONB). Boolean-flag columns (is_demo_data,
-- resolved) are kept as INTEGER 0/1 rather than native BOOLEAN,
-- deliberately: the application writes literal 0/1 today, and native
-- BOOLEAN would reject that without an application-side change I have
-- no way to verify against a real Postgres instance in this sandbox.
-- Safe-but-not-maximally-idiomatic was the chosen tradeoff -- see
-- README's database section.

CREATE TABLE IF NOT EXISTS institutions (
  id UUID PRIMARY KEY,
  name TEXT NOT NULL,
  email_domain TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  role TEXT NOT NULL CHECK(role IN ('student','institution')),
  institution_id UUID REFERENCES institutions(id),
  auth_provider TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL,
  last_login_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS sessions (
  token TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  created_at TIMESTAMPTZ NOT NULL,
  expires_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS email_accounts (
  id UUID PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id),
  provider TEXT NOT NULL,
  connected_at TIMESTAMPTZ NOT NULL,
  is_demo_data INTEGER NOT NULL DEFAULT 0,
  -- Encrypted (AES-256-GCM, see crypto.ts) before they ever reach this
  -- table, same as the SQLite path. Never stored, logged, or returned
  -- to the frontend in plaintext.
  access_token TEXT,
  refresh_token TEXT,
  token_expires_at TIMESTAMPTZ
);

CREATE TABLE IF NOT EXISTS emails (
  id UUID PRIMARY KEY,
  email_account_id UUID NOT NULL REFERENCES email_accounts(id),
  provider_message_id TEXT,
  from_address TEXT,
  reply_to_address TEXT,
  subject TEXT,
  received_at TIMESTAMPTZ,
  raw_source TEXT,
  is_demo_data INTEGER NOT NULL DEFAULT 0
);
CREATE UNIQUE INDEX IF NOT EXISTS idx_emails_account_provider_msg ON emails(email_account_id, provider_message_id)
  WHERE provider_message_id IS NOT NULL;

CREATE TABLE IF NOT EXISTS email_analyses (
  id UUID PRIMARY KEY,
  email_id UUID NOT NULL REFERENCES emails(id),
  bucket TEXT NOT NULL,
  trust_score INTEGER NOT NULL,
  model_name TEXT NOT NULL,
  model_probability_malicious DOUBLE PRECISION,
  raw_result_json JSONB NOT NULL,
  analyzed_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS domains (
  id UUID PRIMARY KEY,
  domain TEXT UNIQUE NOT NULL,
  first_seen_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS campaigns (
  id UUID PRIMARY KEY,
  institution_id UUID REFERENCES institutions(id),
  name TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  is_demo_data INTEGER NOT NULL DEFAULT 0,
  first_seen_at TIMESTAMPTZ NOT NULL,
  last_seen_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS campaign_membership (
  campaign_id UUID NOT NULL REFERENCES campaigns(id),
  email_id UUID NOT NULL REFERENCES emails(id),
  PRIMARY KEY (campaign_id, email_id)
);

CREATE TABLE IF NOT EXISTS alerts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  institution_id UUID REFERENCES institutions(id),
  email_id UUID REFERENCES emails(id),
  severity TEXT NOT NULL,
  message TEXT NOT NULL,
  resolved INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id UUID PRIMARY KEY,
  user_id UUID,
  action TEXT NOT NULL,
  outcome TEXT NOT NULL,
  detail TEXT,
  created_at TIMESTAMPTZ NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_emails_account ON emails(email_account_id);
CREATE INDEX IF NOT EXISTS idx_analyses_email ON email_analyses(email_id);
CREATE INDEX IF NOT EXISTS idx_campaigns_institution ON campaigns(institution_id);
CREATE INDEX IF NOT EXISTS idx_accounts_user ON email_accounts(user_id);
CREATE INDEX IF NOT EXISTS idx_sessions_user ON sessions(user_id);

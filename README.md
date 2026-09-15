# HALO V0 — Render API + Vercel + Google OAuth

This package is the deployment-ready integration layer for HALO V0.

## Services

- `frontend/` — current HALO V0 visual frontend, served by Vercel
- `frontend/vercel.json` — same-origin `/api/*` reverse proxy to the Render API
- `backend/api/` — Node API with real Google Gmail OAuth, sessions, encrypted token storage, real mailbox fetch, ML proxy, and institution intelligence
- `render.yaml` — Render API + Render Postgres Blueprint
- `DEPLOYMENT.md` — exact deployment and OAuth setup sequence

The existing Python ML service remains `https://halo-v0.onrender.com` and is not replaced by this package.

## Important

OAuth provider secrets and database credentials must be configured on Render. Never put them in the Vercel frontend.

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

## SIH Nationals build

This package includes the student action workflow and institution Incident Center used for the Nationals demonstration. Demo Mode contains exactly 247 synthetic messages (10 High Risk, 10 Needs Attention, 227 Looks Safe) and remains fully offline.

See `NATIONALS_VALIDATION.md` for the validation snapshot and the honest held-out model metrics. HALO does not claim 97% accuracy because the shipped model metadata reports 88.21% accuracy on its held-out test split.

Real Gmail access is read-only in the current deployment. Demo-only destructive actions are explicitly labeled rather than being presented as real mailbox changes.

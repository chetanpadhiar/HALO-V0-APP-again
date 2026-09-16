# HALO V0 — Nationals Validation Snapshot

Generated for the SIH Nationals build.

## Demo Mode

- Total synthetic messages: **247**
- High Risk: **10**
- Needs Attention: **10**
- Looks Safe: **227**
- IDs are unique.
- Every demo message contains a captured `raw_result` using HALO's structured analysis schema.
- Demo Mode is client-side and does not make API/network requests.
- Student messages are clickable and expandable into verdict, trust score, reasons, sender trust and Technical Details.

## Action / Incident Workflow

The student path is designed as:

**DETECTION → ACTION → INCIDENT → CAMPAIGN → INVESTIGATION → RESPONSE → RESOLUTION**

Implemented demo workflows include:

- High Risk: Report Threat, Remove from Inbox, Block Sender, Check the Link, Check for Other Messages, Protect Account.
- Needs Attention: Review Safely, Verify Sender, Inspect Link, Report for Review.
- Looks Safe: Open Email, View Analysis, Check Sender, Mark as Trusted.
- Institution Incident Center with incident status and campaign investigation.
- Campaign response controls for containment and resolution.
- Destructive mailbox actions are explicitly simulated in Demo Mode. Real Gmail access remains read-only.

## Google / Microsoft Scope

- Google OAuth/Gmail read-only integration remains present.
- No Microsoft/Outlook OAuth, provider, Graph integration, or Microsoft deployment variables remain in the application/API/docs.
- The protected `backend/ml-engine/` tree was not modified. It may contain historical/parser references that are intentionally preserved because the existing ML service is a protected dependency.

## Model Metrics

The shipped `HALO-Trust-RF-v3` metadata reports the following held-out test results (n=4,689):

- Accuracy: **88.21%**
- Balanced accuracy: **90.20%**
- ROC AUC: **95.51%**
- PR AUC: **99.52%**
- Macro F1: **73.56%**
- Malicious precision: **99.32%**
- Malicious recall: **87.86%**

The requested 97% accuracy target is **not claimed** because the available held-out evaluation does not demonstrate it. No classification logic was hard-coded to manufacture that target.

A fresh ML evaluation was not run during this packaging pass because the Python ML dependencies/dataset required for the training/evaluation suite were not installed/available in the packaging environment. The metrics above are the measured values recorded in the model's existing metadata artifact.

## Syntax Checks

Validated successfully:

- All `frontend/*.js` files with Node syntax checking.
- All backend API TypeScript source/test/migration files with Node's type-stripping syntax checker.
- The complete JavaScript bundle embedded in `frontend/index.html`.

## Protected ML Integrity

The current `backend/ml-engine/` directory is byte-for-byte identical to the ML tree extracted from the source Nationals archive used for this build. The model and metadata SHA-256 values are unchanged.

## Deployment Routing

`frontend/vercel.json` points `/api/*` to the currently specified Render API:

`https://halo-api-sxns.onrender.com`

The ML service remains:

`https://halo-v0.onrender.com`

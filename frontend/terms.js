// HALO terminology system: every technical finding has a plain-language
// form for the primary UI, with the technical wording preserved for the
// "Technical details" panel. This is the ONE place that mapping lives --
// screens should call these helpers rather than hard-coding wording.

const REASON_MAP = [
  // Identity/authentication
  [/^SPF check: FAIL/i, "HALO could not confirm this message really came from where it claims to."],
  [/^DKIM check: FAIL/i, "HALO could not confirm this message really came from where it claims to."],
  [/^DMARC check: FAIL/i, "HALO could not confirm this message really came from where it claims to."],
  [/check: NOT PRESENT/i, "HALO couldn't fully verify who sent this message."],
  [/resembles protected brand/i, "This sender's address looks like it's imitating a well-known organisation."],
  [/Reply-To domain .* does not match/i, "The address you'd actually reply to is different from the one that sent this message."],

  // Links
  [/point directly to a numeric IP address/i, "Be careful with the website this message wants you to visit."],
  [/lookalike \(punycode\) domain/i, "Be careful with the website this message wants you to visit -- its address may be disguised."],
  [/point to a different domain than the sender/i, "The link in this message doesn't go where the sender's address suggests."],
  [/unusually long chain of subdomains/i, "Be careful with the website this message wants you to visit."],

  // Content intent (already fairly plain -- lightly normalized)
  [/asks for a password, login, or verification code/i, "This message asks for your password or a security code."],
  [/asks for a payment or financial details/i, "This message asks you to send money or share financial details."],
  [/creates urgency or a tight deadline/i, "This message is pressuring you to act quickly."],
  [/Wording matches common credential-request phrases/i, "This message asks for your password or a security code."],
  [/Wording matches common payment-request phrases/i, "This message asks you to send money."],
  [/trained model's overall assessment flags this message/i, "HALO's overall analysis found this message concerning."],

  // Behaviour
  [/never previously requested credentials.*this message does/i, "This is different from how this sender normally communicates -- they've never asked for a password before."],
  [/never previously requested payment.*this message does/i, "This is different from how this sender normally communicates -- they've never asked for payment before."],
  [/Sender has \d+ prior message/i, "HALO has seen this sender before."],
  [/Request type is consistent with this sender's prior messages/i, "This matches how this sender normally communicates."],

  // Infrastructure (keep the plain framing already used elsewhere in the app)
  [/^Observed infrastructure:/i, "This message was sent through hosting that HALO has flagged as higher-risk."],
];

/** Turns one raw backend "reasons" string into a plain-language sentence
 * for the primary UI. Falls back to the original text (cleaned up) if no
 * mapping matches, rather than hiding a real finding. */
function simpleReason(raw) {
  for (const [pattern, plain] of REASON_MAP) {
    if (pattern.test(raw)) return plain;
  }
  return raw;
}

/** The exact raw evidence string, for the technical panel -- always
 * available even when simpleReason() had a mapping, so nothing is lost. */
function technicalReason(raw) {
  return raw;
}

const VERDICT_COPY = {
  safe: { badge: "LOOKS SAFE", headline: "HALO found no major warning signs.", tone: "safe" },
  attention: { badge: "NEEDS ATTENTION", headline: "Something about this message is unusual -- it deserves a second look.", tone: "attention" },
  "high-risk": { badge: "HIGH RISK", headline: "This message may not be safe.", tone: "high-risk" },
};

function simpleVerdict(bucket) {
  return VERDICT_COPY[bucket] || VERDICT_COPY.attention;
}

function recommendedActions(bucket) {
  if (bucket === "safe") return ["This message looks fine to act on normally."];
  if (bucket === "high-risk") {
    return [
      "Don't click links or share information.",
      "Don't send your password or a security code.",
      "Verify the request another way before acting.",
      "Report this message if you're unsure.",
    ];
  }
  return [
    "Double-check before you act on this.",
    "Verify the sender through another channel if it asks for anything sensitive.",
  ];
}

function confidenceExplanation(confidence) {
  const label = (confidence?.label || "medium").toLowerCase();
  if (label === "high") return "HALO is fairly confident in this assessment.";
  if (label === "low") return "HALO has limited information here, so treat this assessment as a starting point, not the final word.";
  return "HALO has a reasonable amount of information to base this on.";
}

function trustScoreInterpretation(score) {
  if (score >= 75) return "HALO found no major warning signs.";
  if (score >= 45) return "HALO is not fully confident that this message is safe.";
  return "HALO found several warning signs and is not confident this message is safe.";
}

/** Sender Trust Profile -- built entirely from signals the engine
 * already computes (behavior.seen_before/status, identity flags,
 * infrastructure category). Never invents a baseline: when there's
 * insufficient history, it says so plainly rather than guessing. */
function senderTrustProfile(raw) {
  const behavior = raw.signals?.behavior;
  const identity = raw.signals?.identity;
  const infra = raw.signals?.infrastructure;
  const domain = raw.parsed?.from_domain || "unknown domain";

  let label, headline;
  if (infra?.flagged) {
    label = "SUSPICIOUS";
    headline = "This sender is associated with suspicious infrastructure.";
  } else if (identity?.flagged) {
    label = "SUSPICIOUS";
    headline = "HALO could not confirm this sender's identity.";
  } else if (behavior?.seen_before) {
    label = "KNOWN";
    headline = "HALO has seen this sender before.";
  } else {
    label = "NEW";
    headline = behavior?.status === "insufficient_history" ? "Not enough history yet." : "HALO hasn't seen this sender before.";
  }

  const facts = [];
  facts.push(["Domain", domain]);
  facts.push(["Previously seen by HALO", behavior?.seen_before ? "Yes" : "Not enough history yet"]);
  if (behavior?.evidence?.[0]) facts.push(["Recent behavior", simpleReason(behavior.evidence[0])]);
  if (identity?.homograph_of) facts.push(["Identity note", `This address resembles ${identity.homograph_of}, a well-known organisation, but is not the same domain.`]);
  if (infra?.org) facts.push(["Sending infrastructure", `${infra.org}${infra.category ? ` (${infra.category})` : ""}`]);

  return { label, headline, facts };
}

/** Structures raw `signals` into the human-organized technical sections
 * from the spec (IDENTITY / DOMAIN / MESSAGE SIGNALS / BEHAVIOUR /
 * INFRASTRUCTURE / MODEL) instead of a raw JSON dump. */
function technicalSections(raw) {
  const s = raw.signals || {};
  const p = raw.parsed || {};
  const sections = [];

  if (s.identity) {
    sections.push({
      title: "IDENTITY CHECK",
      rows: [
        ["SPF", p.auth?.spf || "UNKNOWN"],
        ["DKIM", p.auth?.dkim || "UNKNOWN"],
        ["DMARC", p.auth?.dmarc || "UNKNOWN"],
        ["Reply-To mismatch", s.identity.reply_to_mismatch ? "YES" : "NO"],
        ["Lookalike domain", s.identity.homograph_of || "None detected"],
      ],
    });
  }
  sections.push({
    title: "DOMAIN",
    rows: [
      ["Sending domain", p.from_domain || "unknown"],
      ["Reply-To domain", p.reply_to_domain || "(same as sender)"],
    ],
  });
  if (s.content_intent) {
    sections.push({
      title: "MESSAGE SIGNALS",
      rows: [
        ["Credential request", s.content_intent.has_credential_request ? "DETECTED" : "not detected"],
        ["Payment request", s.content_intent.has_payment_request ? "DETECTED" : "not detected"],
        ["Urgency language", s.content_intent.has_urgency ? "DETECTED" : "not detected"],
      ],
    });
  }
  if (s.url_domain) {
    sections.push({
      title: "LINK SAFETY",
      rows: [
        ["Suspicious link structure", s.url_domain.flagged ? "DETECTED" : "not detected"],
        ["Finding", s.url_domain.evidence?.[0] || "n/a"],
        ["Live reputation check", "Additional reputation data unavailable -- no live reputation provider is configured (see GEOIP_PROVIDER-style config in .env.example for how one would be added)."],
      ],
    });
  }
  if (s.behavior) {
    sections.push({
      title: "BEHAVIOUR",
      rows: [
        ["Previously seen sender", s.behavior.seen_before ? "YES" : "NO / insufficient history"],
        ["Status", s.behavior.status || "unknown"],
      ],
    });
  }
  if (s.infrastructure) {
    sections.push({
      title: "INFRASTRUCTURE",
      rows: [
        ["Origin IP", s.infrastructure.ip || "not available"],
        ["Confidence", s.infrastructure.confidence || "none"],
      ],
    });
  }
  sections.push({
    title: "MODEL",
    rows: [
      ["Model", s.content_intent?.model_name || "unknown"],
      ["Model probability (malicious)", s.content_intent?.probability_malicious != null ? s.content_intent.probability_malicious.toFixed(4) : "n/a"],
      ["Trust score", String(raw.trust_score ?? "n/a")],
      ["Confidence", raw.confidence?.label || "unknown"],
    ],
  });
  return sections;
}

// Genuine HALO-Trust-RF-v3 analysis results for a small fixed set of
// synthetic emails, captured once from the real backend and embedded
// here so Demo Mode never needs a network request. These are real
// model outputs (see HALO_ml README for the live methodology),
// replayed for guaranteed-offline demo purposes -- not fabricated,
// not a live re-run.
const DEMO_CAMPAIGN = {
  id: "demo-campaign-1",
  name: "Fake Internship & Scholarship Fee Scam (DEMO SCENARIO)",
  status: "open",
  first_seen_at: "2026-09-09T06:15:00.000Z",
  last_seen_at: "2026-09-13T21:14:00.000Z",
  affected_students: 5,
  related_emails: [
    { id: "d1", subject: "Urgent - Final Internship Selection", bucket: "attention", trust_score: 55, domain: "talent-acquisition-portal.example", infra_ip: null, student_label: "Student 1" },
    { id: "d6", subject: "Scholarship Disbursement - Action Required", bucket: "attention", trust_score: 55, domain: "scholarship-disbursement-cell.net", infra_ip: "103.87.44.212", student_label: "Student 2" },
  ],
  graph: {
    domains: [
      { domain: "talent-acquisition-portal.example", email_ids: ["d1"] },
      { domain: "scholarship-disbursement-cell.net", email_ids: ["d6"] },
    ],
    infrastructure: [
      { ip: "103.87.44.212", org: "QuickServe Cloud Hosting Pvt Ltd", asn: "AS142804", email_ids: ["d6"] },
    ],
    student_count: 5,
  },
};
const DEMO_EMAILS = [
  {
    "id": "d1",
    "sender_name": "Talent Acquisition Team",
    "from_address": "recruiter@talent-acquisition-portal.example",
    "subject": "Urgent - Final Internship Selection",
    "bucket": "attention",
    "trust_score": 55,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "no behavioural history for this sender",
          "infrastructure signal has low confidence"
        ],
        "score": 75
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 55
      },
      "flagged_signal_count": 1,
      "id": "d1",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Congratulations! You have been shortlisted. Please verify your college password and pay a small processing fee of Rs 499 within 24 hours to confirm your interview slot.",
        "date": null,
        "from": "recruiter@talent-acquisition-portal.example",
        "from_domain": "talent-acquisition-portal.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "recruiter@talent-acquisition-portal.example",
        "subject": "Urgent - Final Internship Selection"
      },
      "reasons": [
        "The message asks for a password, login, or verification code"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has no prior communication history in this baseline"
          ],
          "flagged": false,
          "score": 20,
          "seen_before": false,
          "status": "insufficient_history"
        },
        "content_intent": {
          "evidence": [
            "The message asks for a password, login, or verification code",
            "The message asks for a payment or financial details",
            "The message creates urgency or a tight deadline",
            "Wording matches common credential-request phrases",
            "Wording matches common payment-request phrases"
          ],
          "flagged": true,
          "has_credential_request": true,
          "has_payment_request": true,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 1.0,
          "score": 0
        },
        "identity": {
          "evidence": [
            "SPF check: NOT PRESENT",
            "DKIM check: NOT PRESENT",
            "DMARC check: NOT PRESENT"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 100
        },
        "infrastructure": {
          "confidence": "none",
          "evidence": [
            "No routable origin IP found in the message"
          ],
          "flagged": false,
          "ip": null,
          "score": 0
        },
        "url_domain": {
          "evidence": [
            "No links found in the message"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "HIGH",
        "score": 100
      },
      "trust_score": 55,
      "verdict": "Needs attention -- one signal flagged"
    }
  },
  {
    "id": "d2",
    "sender_name": "Campus Library",
    "from_address": "newsletter@campus-library.edu",
    "subject": "Your Monthly Newsletter",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "medium",
        "notes": [
          "no behavioural history for this sender",
          "infrastructure signal has low confidence"
        ],
        "score": 75
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d2",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Check out this week's new arrivals at the campus library. Happy reading!",
        "date": null,
        "from": "newsletter@campus-library.edu",
        "from_domain": "campus-library.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "newsletter@campus-library.edu",
        "subject": "Your Monthly Newsletter"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has no prior communication history in this baseline"
          ],
          "flagged": false,
          "score": 20,
          "seen_before": false,
          "status": "insufficient_history"
        },
        "content_intent": {
          "evidence": [
            "No urgency, credential, or payment-request language detected"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.2168,
          "score": 78
        },
        "identity": {
          "evidence": [
            "SPF check: NOT PRESENT",
            "DKIM check: NOT PRESENT",
            "DMARC check: NOT PRESENT"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 100
        },
        "infrastructure": {
          "confidence": "none",
          "evidence": [
            "No routable origin IP found in the message"
          ],
          "flagged": false,
          "ip": null,
          "score": 0
        },
        "url_domain": {
          "evidence": [
            "No links found in the message"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "HIGH",
        "score": 100
      },
      "trust_score": 86,
      "verdict": "Looks safe"
    }
  },
  {
    "id": "d3",
    "sender_name": "Account Security",
    "from_address": "security-alert@paypal-secure-verify.com",
    "subject": "Account Security Alert",
    "bucket": "high-risk",
    "trust_score": 55,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "medium",
        "notes": [
          "no behavioural history for this sender",
          "infrastructure signal has low confidence"
        ],
        "score": 75
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 55
      },
      "flagged_signal_count": 2,
      "id": "d3",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account will be suspended. Verify your password immediately by clicking the link below.",
        "date": null,
        "from": "security-alert@paypal-secure-verify.com",
        "from_domain": "paypal-secure-verify.com",
        "header_lines": [],
        "homograph_of": "paypal.com",
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "security-alert@paypal-secure-verify.com",
        "subject": "Account Security Alert"
      },
      "reasons": [
        "SPF check: NOT PRESENT",
        "The message asks for a password, login, or verification code"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has no prior communication history in this baseline"
          ],
          "flagged": false,
          "score": 20,
          "seen_before": false,
          "status": "insufficient_history"
        },
        "content_intent": {
          "evidence": [
            "The message asks for a password, login, or verification code",
            "The message creates urgency or a tight deadline",
            "Wording matches common credential-request phrases"
          ],
          "flagged": true,
          "has_credential_request": true,
          "has_payment_request": false,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.9923,
          "score": 1
        },
        "identity": {
          "evidence": [
            "SPF check: NOT PRESENT",
            "DKIM check: NOT PRESENT",
            "DMARC check: NOT PRESENT",
            "Sending domain \"paypal-secure-verify.com\" resembles protected brand \"paypal.com\" (possible homograph/lookalike)"
          ],
          "flagged": true,
          "homograph_of": "paypal.com",
          "reply_to_mismatch": false,
          "score": 75
        },
        "infrastructure": {
          "confidence": "none",
          "evidence": [
            "No routable origin IP found in the message"
          ],
          "flagged": false,
          "ip": null,
          "score": 0
        },
        "url_domain": {
          "evidence": [
            "No links found in the message"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "HIGH",
        "score": 75
      },
      "trust_score": 55,
      "verdict": "High risk -- likely malicious"
    }
  },
  {
    "id": "d4",
    "sender_name": "IT Helpdesk",
    "from_address": "it-helpdesk@amityonline.edu",
    "subject": "IT Helpdesk: Unusual Request",
    "bucket": "high-risk",
    "trust_score": 49,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "infrastructure signal has low confidence"
        ],
        "score": 90
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 49
      },
      "flagged_signal_count": 2,
      "id": "d4",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Send your password and OTP immediately to verify your account or it will be locked.",
        "date": null,
        "from": "it-helpdesk@amityonline.edu",
        "from_domain": "amityonline.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "recovery@external-mail.ru",
        "reply_to_domain": "external-mail.ru",
        "sender_addr": "it-helpdesk@amityonline.edu",
        "subject": "IT Helpdesk: Unusual Request"
      },
      "reasons": [
        "The message asks for a password, login, or verification code",
        "Sender has 2 prior message(s) in this baseline (demo seed data)"
      ],
      "signals": {
        "behavior": {
          "current_requests_credential": true,
          "current_requests_payment": false,
          "deviation": "HIGH",
          "evidence": [
            "Sender has 2 prior message(s) in this baseline (demo seed data)",
            "This sender has never previously requested credentials -- this message does"
          ],
          "flagged": true,
          "prior_credential_requests": 0,
          "prior_message_count": 2,
          "prior_payment_requests": 0,
          "score": 45,
          "seen_before": true,
          "status": "ok"
        },
        "content_intent": {
          "evidence": [
            "The message asks for a password, login, or verification code",
            "The message creates urgency or a tight deadline",
            "Wording matches common credential-request phrases"
          ],
          "flagged": true,
          "has_credential_request": true,
          "has_payment_request": false,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 1.0,
          "score": 0
        },
        "identity": {
          "evidence": [
            "SPF check: NOT PRESENT",
            "DKIM check: NOT PRESENT",
            "DMARC check: NOT PRESENT",
            "Reply-To domain (external-mail.ru) does not match From domain (amityonline.edu)"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": true,
          "score": 90
        },
        "infrastructure": {
          "confidence": "none",
          "evidence": [
            "No routable origin IP found in the message"
          ],
          "flagged": false,
          "ip": null,
          "score": 0
        },
        "url_domain": {
          "evidence": [
            "No links found in the message"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "trust_score": 49,
      "verdict": "Possible account takeover or social engineering"
    }
  },
  {
    "id": "d5",
    "sender_name": "Placements Office",
    "from_address": "placements@amityonline.edu",
    "subject": "Interview Rescheduled",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "infrastructure signal has low confidence"
        ],
        "score": 90
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d5",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your interview has been moved to Friday 3pm. Please confirm your availability.",
        "date": null,
        "from": "placements@amityonline.edu",
        "from_domain": "amityonline.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@amityonline.edu",
        "subject": "Interview Rescheduled"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "current_requests_credential": false,
          "current_requests_payment": false,
          "deviation": "NONE",
          "evidence": [
            "Sender has 3 prior message(s) in this baseline (demo seed data)",
            "Request type is consistent with this sender's prior messages"
          ],
          "flagged": false,
          "prior_credential_requests": 0,
          "prior_message_count": 3,
          "prior_payment_requests": 0,
          "score": 0,
          "seen_before": true,
          "status": "ok"
        },
        "content_intent": {
          "evidence": [
            "No urgency, credential, or payment-request language detected"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.2168,
          "score": 78
        },
        "identity": {
          "evidence": [
            "SPF check: NOT PRESENT",
            "DKIM check: NOT PRESENT",
            "DMARC check: NOT PRESENT"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 100
        },
        "infrastructure": {
          "confidence": "none",
          "evidence": [
            "No routable origin IP found in the message"
          ],
          "flagged": false,
          "ip": null,
          "score": 0
        },
        "url_domain": {
          "evidence": [
            "No links found in the message"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "HIGH",
        "score": 100
      },
      "trust_score": 91,
      "verdict": "Looks safe"
    }
  },
  {
    "id": "d6",
    "sender_name": "Scholarship Board",
    "from_address": "awards@scholarship-disbursement-cell.net",
    "subject": "Scholarship Disbursement - Action Required",
    "bucket": "attention",
    "trust_score": 55,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "no behavioural history for this sender",
          "infrastructure signal has low confidence"
        ],
        "score": 75
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 55
      },
      "flagged_signal_count": 1,
      "id": "d6",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your scholarship award is expiring. Verify your bank details and pay a small verification fee immediately.",
        "date": null,
        "from": "awards@scholarship-disbursement-cell.net",
        "from_domain": "scholarship-disbursement-cell.net",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "awards@scholarship-disbursement-cell.net",
        "subject": "Scholarship Disbursement - Action Required"
      },
      "reasons": [
        "The message asks for a payment or financial details"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has no prior communication history in this baseline"
          ],
          "flagged": false,
          "score": 20,
          "seen_before": false,
          "status": "insufficient_history"
        },
        "content_intent": {
          "evidence": [
            "The message asks for a payment or financial details",
            "The message creates urgency or a tight deadline",
            "Wording matches common payment-request phrases"
          ],
          "flagged": true,
          "has_credential_request": false,
          "has_payment_request": true,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 1.0,
          "score": 0
        },
        "identity": {
          "evidence": [
            "SPF check: NOT PRESENT",
            "DKIM check: NOT PRESENT",
            "DMARC check: NOT PRESENT"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 100
        },
        "infrastructure": {
          "confidence": "none",
          "evidence": [
            "No routable origin IP found in the message"
          ],
          "flagged": false,
          "ip": null,
          "score": 0
        },
        "url_domain": {
          "evidence": [
            "No links found in the message"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "HIGH",
        "score": 100
      },
      "trust_score": 55,
      "verdict": "Needs attention -- one signal flagged"
    }
  }
];

const DEMO_GEO = {
  geo_source: "DEMO SCENARIO -- illustrative example, not derived from any real analysis.",
  nodes: [
    { ip: "185.220.101.47", org: "Offshore Hosting Solutions Ltd.", asn: "AS208843", country: "DE", region: "Frankfurt", category: "bulk-anonymous-hosting", risk_score: 78, suspicious_emails: 5, reused: true },
    { ip: "103.87.44.212", org: "QuickServe Cloud Hosting Pvt Ltd", asn: "AS142804", country: "IN", region: "Mumbai", category: "shared-vps", risk_score: 66, suspicious_emails: 2, reused: false },
  ],
};
const DEMO_TIMELINE = {
  events: [
    { timestamp: DEMO_CAMPAIGN.first_seen_at, type: "email", label: "Suspicious email detected: \"Urgent - Final Internship Selection\" (DEMO SCENARIO)" },
    { timestamp: "2026-09-11T09:00:00.000Z", type: "email", label: "Suspicious email detected: \"Scholarship Disbursement - Action Required\" (DEMO SCENARIO)" },
    { timestamp: DEMO_CAMPAIGN.last_seen_at, type: "campaign", label: "Campaign identified: " + DEMO_CAMPAIGN.name },
  ],
};

const DEMO_TRENDS = {
  total_suspicious: 7,
  last_24h: 5,
  previous_24h: 2,
  trend_statement: "Suspicious messages increased over the last 24 hours (2 to 5). (DEMO SCENARIO)",
};

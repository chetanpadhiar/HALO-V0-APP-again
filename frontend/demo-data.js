// HALO V0 Demo Dataset
// 247 synthetic student-inbox messages: 10 high-risk, 10 needs-attention, 227 looks-safe.
// The scenarios are intentionally synthetic and designed to exercise the real HALO UI/workflows offline.
const DEMO_EMAILS = [
  {
    "id": "d1",
    "sender_name": "Scholarship Support",
    "from_address": "scholarship-help@scholarship-award.example",
    "subject": "Urgent Scholarship Disbursement - Verify Account",
    "bucket": "high-risk",
    "trust_score": 89,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 11
      },
      "flagged_signal_count": 3,
      "id": "d1",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "scholarship-help@scholarship-award.example",
        "from_domain": "scholarship-award.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "scholarship-help@scholarship-award.example",
        "subject": "Urgent Scholarship Disbursement - Verify Account"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message asks for a password, login, or verification code",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message asks for a password, login, or verification code",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": true,
          "has_payment_request": false,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.9440000000000001,
          "score": 5
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 11
      },
      "trust_score": 89,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d2",
    "sender_name": "Placement Recruitment",
    "from_address": "placements@campus-careers.example",
    "subject": "Final Placement Selection - Action Required",
    "bucket": "high-risk",
    "trust_score": 90,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 10
      },
      "flagged_signal_count": 3,
      "id": "d2",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "placements@campus-careers.example",
        "from_domain": "campus-careers.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@campus-careers.example",
        "subject": "Final Placement Selection - Action Required"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message asks for a password, login, or verification code",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message asks for a password, login, or verification code",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": true,
          "has_payment_request": false,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.9580000000000001,
          "score": 4
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 10
      },
      "trust_score": 90,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d3",
    "sender_name": "University IT",
    "from_address": "it-security@university-verify.example",
    "subject": "Your Student Account Will Be Suspended",
    "bucket": "high-risk",
    "trust_score": 91,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 9
      },
      "flagged_signal_count": 3,
      "id": "d3",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "it-security@university-verify.example",
        "from_domain": "university-verify.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "it-security@university-verify.example",
        "subject": "Your Student Account Will Be Suspended"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message asks for a password, login, or verification code",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message asks for a password, login, or verification code",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": true,
          "has_payment_request": false,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.9720000000000001,
          "score": 2
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 9
      },
      "trust_score": 91,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d4",
    "sender_name": "Internship Team",
    "from_address": "internships@career-opportunity.example",
    "subject": "Congratulations - Pay Processing Fee Today",
    "bucket": "high-risk",
    "trust_score": 92,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 8
      },
      "flagged_signal_count": 3,
      "id": "d4",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "internships@career-opportunity.example",
        "from_domain": "career-opportunity.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "internships@career-opportunity.example",
        "subject": "Congratulations - Pay Processing Fee Today"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message asks for a payment or financial details",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message asks for a payment or financial details",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": false,
          "has_payment_request": true,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.9860000000000001,
          "score": 1
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 8
      },
      "trust_score": 92,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d5",
    "sender_name": "Exam Office",
    "from_address": "exam-results@university-results.example",
    "subject": "Exam Result Verification Required",
    "bucket": "high-risk",
    "trust_score": 93,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 7
      },
      "flagged_signal_count": 3,
      "id": "d5",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "exam-results@university-results.example",
        "from_domain": "university-results.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exam-results@university-results.example",
        "subject": "Exam Result Verification Required"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message asks for a password, login, or verification code",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message asks for a password, login, or verification code",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": true,
          "has_payment_request": false,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.93,
          "score": 6
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 7
      },
      "trust_score": 93,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d6",
    "sender_name": "Hostel Administration",
    "from_address": "hostel-refund@university-refund.example",
    "subject": "Hostel Refund - Confirm Bank Details",
    "bucket": "high-risk",
    "trust_score": 94,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 6
      },
      "flagged_signal_count": 3,
      "id": "d6",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "hostel-refund@university-refund.example",
        "from_domain": "university-refund.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel-refund@university-refund.example",
        "subject": "Hostel Refund - Confirm Bank Details"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message asks for a payment or financial details",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message asks for a payment or financial details",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": false,
          "has_payment_request": true,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.9440000000000001,
          "score": 5
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 6
      },
      "trust_score": 94,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d7",
    "sender_name": "Financial Aid",
    "from_address": "aid@student-grant.example",
    "subject": "Grant Approved - Claim Within 2 Hours",
    "bucket": "high-risk",
    "trust_score": 95,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 5
      },
      "flagged_signal_count": 3,
      "id": "d7",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "aid@student-grant.example",
        "from_domain": "student-grant.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "aid@student-grant.example",
        "subject": "Grant Approved - Claim Within 2 Hours"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message asks for a payment or financial details",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message asks for a payment or financial details",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": false,
          "has_payment_request": true,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.9580000000000001,
          "score": 4
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 5
      },
      "trust_score": 95,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d8",
    "sender_name": "Google Workspace Team",
    "from_address": "workspace-alert@account-security.example",
    "subject": "Immediate Password Verification Required",
    "bucket": "high-risk",
    "trust_score": 96,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 4
      },
      "flagged_signal_count": 3,
      "id": "d8",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "workspace-alert@account-security.example",
        "from_domain": "account-security.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "workspace-alert@account-security.example",
        "subject": "Immediate Password Verification Required"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message asks for a password, login, or verification code",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message asks for a password, login, or verification code",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": true,
          "has_payment_request": false,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.9720000000000001,
          "score": 2
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 4
      },
      "trust_score": 96,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d9",
    "sender_name": "Campus Placement Desk",
    "from_address": "offer-letter@placement-offer.example",
    "subject": "Offer Letter Ready - Download Secure Copy",
    "bucket": "high-risk",
    "trust_score": 97,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 3
      },
      "flagged_signal_count": 3,
      "id": "d9",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "offer-letter@placement-offer.example",
        "from_domain": "placement-offer.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "offer-letter@placement-offer.example",
        "subject": "Offer Letter Ready - Download Secure Copy"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message contains a link that should be inspected before opening",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message contains a link that should be inspected before opening",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.9860000000000001,
          "score": 1
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 3
      },
      "trust_score": 97,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d10",
    "sender_name": "Student Services",
    "from_address": "student-portal@university-login.example",
    "subject": "Re-Authenticate Your Student Portal",
    "bucket": "high-risk",
    "trust_score": 88,
    "raw_result": {
      "bucket": "high-risk",
      "confidence": {
        "label": "high",
        "notes": [
          "multiple independent signals agree"
        ],
        "score": 94
      },
      "contextual_legitimacy": {
        "label": "LOW",
        "score": 12
      },
      "flagged_signal_count": 3,
      "id": "d10",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Your account requires immediate verification. Use the secure portal to confirm your credentials and complete the requested action today.",
        "date": null,
        "from": "student-portal@university-login.example",
        "from_domain": "university-login.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "student-portal@university-login.example",
        "subject": "Re-Authenticate Your Student Portal"
      },
      "reasons": [
        "The message creates urgency or a tight deadline",
        "The message asks for a password, login, or verification code",
        "The sender or domain does not match the expected university identity"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The message creates urgency or a tight deadline",
            "The message asks for a password, login, or verification code",
            "The sender or domain does not match the expected university identity"
          ],
          "flagged": true,
          "has_credential_request": true,
          "has_payment_request": false,
          "has_urgency": true,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.93,
          "score": 6
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "medium",
          "evidence": [
            "Observed infrastructure is associated with related demo messages"
          ],
          "flagged": true,
          "ip": null,
          "score": 70
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": true,
          "score": 80
        }
      },
      "technical_legitimacy": {
        "label": "LOW",
        "score": 12
      },
      "trust_score": 88,
      "verdict": "High risk -- multiple strong signals"
    }
  },
  {
    "id": "d11",
    "sender_name": "External Recruiter",
    "from_address": "recruiter@talent-network.example",
    "subject": "Internship Opportunity - Please Review",
    "bucket": "attention",
    "trust_score": 66,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 34
      },
      "flagged_signal_count": 2,
      "id": "d11",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "recruiter@talent-network.example",
        "from_domain": "talent-network.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "recruiter@talent-network.example",
        "subject": "Internship Opportunity - Please Review"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.53,
          "score": 47
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "label": "MEDIUM",
        "score": 66
      },
      "trust_score": 66,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d12",
    "sender_name": "Research Partner",
    "from_address": "collab@research-project.example",
    "subject": "Invitation to Review Research Document",
    "bucket": "attention",
    "trust_score": 55,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 45
      },
      "flagged_signal_count": 3,
      "id": "d12",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "collab@research-project.example",
        "from_domain": "research-project.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "collab@research-project.example",
        "subject": "Invitation to Review Research Document"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "The message contains a link that should be verified before opening",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "The message contains a link that should be verified before opening",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.58,
          "score": 42
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "MEDIUM",
        "score": 55
      },
      "trust_score": 55,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d13",
    "sender_name": "Conference Team",
    "from_address": "events@conference-registration.example",
    "subject": "Student Delegate Confirmation",
    "bucket": "attention",
    "trust_score": 56,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 44
      },
      "flagged_signal_count": 3,
      "id": "d13",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "events@conference-registration.example",
        "from_domain": "conference-registration.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@conference-registration.example",
        "subject": "Student Delegate Confirmation"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "The message contains a link that should be verified before opening",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "The message contains a link that should be verified before opening",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.63,
          "score": 37
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "MEDIUM",
        "score": 56
      },
      "trust_score": 56,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d14",
    "sender_name": "New Club Coordinator",
    "from_address": "coordinator@newclub.example",
    "subject": "Welcome to the Student Innovation Group",
    "bucket": "attention",
    "trust_score": 57,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 43
      },
      "flagged_signal_count": 2,
      "id": "d14",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "coordinator@newclub.example",
        "from_domain": "newclub.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "coordinator@newclub.example",
        "subject": "Welcome to the Student Innovation Group"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.6799999999999999,
          "score": 32
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "label": "MEDIUM",
        "score": 57
      },
      "trust_score": 57,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d15",
    "sender_name": "Alumni Mentor",
    "from_address": "mentor@alumni-connect.example",
    "subject": "Can we schedule a mentoring call?",
    "bucket": "attention",
    "trust_score": 58,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 42
      },
      "flagged_signal_count": 2,
      "id": "d15",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "mentor@alumni-connect.example",
        "from_domain": "alumni-connect.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "mentor@alumni-connect.example",
        "subject": "Can we schedule a mentoring call?"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.48,
          "score": 52
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "label": "MEDIUM",
        "score": 58
      },
      "trust_score": 58,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d16",
    "sender_name": "Scholarship Office",
    "from_address": "awards@scholarships.example",
    "subject": "Scholarship Application Status",
    "bucket": "attention",
    "trust_score": 59,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 41
      },
      "flagged_signal_count": 3,
      "id": "d16",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "awards@scholarships.example",
        "from_domain": "scholarships.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "awards@scholarships.example",
        "subject": "Scholarship Application Status"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "The message contains a link that should be verified before opening",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "The message contains a link that should be verified before opening",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.53,
          "score": 47
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "MEDIUM",
        "score": 59
      },
      "trust_score": 59,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d17",
    "sender_name": "Recruitment Team",
    "from_address": "hiring@startup.example",
    "subject": "Interview Availability Request",
    "bucket": "attention",
    "trust_score": 60,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 40
      },
      "flagged_signal_count": 2,
      "id": "d17",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "hiring@startup.example",
        "from_domain": "startup.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hiring@startup.example",
        "subject": "Interview Availability Request"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.58,
          "score": 42
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "label": "MEDIUM",
        "score": 60
      },
      "trust_score": 60,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d18",
    "sender_name": "Course Vendor",
    "from_address": "support@course-platform.example",
    "subject": "Your course access is ready",
    "bucket": "attention",
    "trust_score": 61,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 39
      },
      "flagged_signal_count": 3,
      "id": "d18",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "support@course-platform.example",
        "from_domain": "course-platform.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "support@course-platform.example",
        "subject": "Your course access is ready"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "The message contains a link that should be verified before opening",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "The message contains a link that should be verified before opening",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.63,
          "score": 37
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "MEDIUM",
        "score": 61
      },
      "trust_score": 61,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d19",
    "sender_name": "Student Volunteer",
    "from_address": "volunteer@campus-events.example",
    "subject": "Volunteer Registration Confirmation",
    "bucket": "attention",
    "trust_score": 62,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 38
      },
      "flagged_signal_count": 2,
      "id": "d19",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "volunteer@campus-events.example",
        "from_domain": "campus-events.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "volunteer@campus-events.example",
        "subject": "Volunteer Registration Confirmation"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.6799999999999999,
          "score": 32
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "label": "MEDIUM",
        "score": 62
      },
      "trust_score": 62,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d20",
    "sender_name": "International Office",
    "from_address": "mobility@exchange-program.example",
    "subject": "Exchange Programme Document Request",
    "bucket": "attention",
    "trust_score": 63,
    "raw_result": {
      "bucket": "attention",
      "confidence": {
        "label": "medium",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 71
      },
      "contextual_legitimacy": {
        "label": "MEDIUM",
        "score": 37
      },
      "flagged_signal_count": 3,
      "id": "d20",
      "parsed": {
        "auth": {
          "dkim": "NOT PRESENT",
          "dmarc": "NOT PRESENT",
          "present": false,
          "spf": "NOT PRESENT"
        },
        "body": "Please review the information in this message and verify the sender through a trusted channel before taking action.",
        "date": null,
        "from": "mobility@exchange-program.example",
        "from_domain": "exchange-program.example",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "mobility@exchange-program.example",
        "subject": "Exchange Programme Document Request"
      },
      "reasons": [
        "The sender is unfamiliar or has limited communication history",
        "The message contains a link that should be verified before opening",
        "HALO found unusual signals but not enough evidence to classify the message as high risk"
      ],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has limited or no prior communication history"
          ],
          "flagged": false,
          "score": 35,
          "seen_before": false,
          "status": "limited_history"
        },
        "content_intent": {
          "evidence": [
            "The sender is unfamiliar or has limited communication history",
            "The message contains a link that should be verified before opening",
            "HALO found unusual signals but not enough evidence to classify the message as high risk"
          ],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.48,
          "score": 52
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
          "score": 65
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
        },
        "url_domain": {
          "evidence": [
            "Recently registered demo domain",
            "Destination requires inspection"
          ],
          "flagged": false,
          "score": 0
        }
      },
      "technical_legitimacy": {
        "label": "MEDIUM",
        "score": 63
      },
      "trust_score": 63,
      "verdict": "Needs attention -- unusual signals"
    }
  },
  {
    "id": "d21",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d21",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d22",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d22",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d23",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d23",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d24",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d24",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d25",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d25",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d26",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d26",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d27",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d27",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d28",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d28",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d29",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d29",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d30",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d30",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d31",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d31",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d32",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d32",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d33",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d33",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d34",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d34",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d35",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d35",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d36",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #2",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d36",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d37",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #2",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d37",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d38",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #2",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d38",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d39",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #2",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d39",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d40",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #2",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d40",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d41",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #2",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d41",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d42",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #2",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d42",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d43",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #2",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d43",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d44",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #2",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d44",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d45",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #2",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d45",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d46",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #2",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d46",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d47",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #2",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d47",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d48",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #2",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d48",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d49",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #2",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d49",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d50",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #2",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d50",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #2"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d51",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #3",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d51",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d52",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #3",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d52",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d53",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #3",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d53",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d54",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #3",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d54",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d55",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #3",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d55",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d56",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #3",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d56",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d57",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #3",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d57",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d58",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #3",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d58",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d59",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #3",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d59",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d60",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #3",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d60",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d61",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #3",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d61",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d62",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #3",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d62",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d63",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #3",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d63",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d64",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #3",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d64",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d65",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #3",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d65",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #3"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d66",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #4",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d66",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d67",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #4",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d67",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d68",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #4",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d68",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d69",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #4",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d69",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d70",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #4",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d70",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d71",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #4",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d71",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d72",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #4",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d72",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d73",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #4",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d73",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d74",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #4",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d74",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d75",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #4",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d75",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d76",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #4",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d76",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d77",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #4",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d77",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d78",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #4",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d78",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d79",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #4",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d79",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d80",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #4",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d80",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #4"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d81",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #5",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d81",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d82",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #5",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d82",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d83",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #5",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d83",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d84",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #5",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d84",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d85",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #5",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d85",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d86",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #5",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d86",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d87",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #5",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d87",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d88",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #5",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d88",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d89",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #5",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d89",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d90",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #5",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d90",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d91",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #5",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d91",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d92",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #5",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d92",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d93",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #5",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d93",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d94",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #5",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d94",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d95",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #5",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d95",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #5"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d96",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #6",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d96",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d97",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #6",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d97",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d98",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #6",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d98",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d99",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #6",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d99",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d100",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #6",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d100",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d101",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #6",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d101",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d102",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #6",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d102",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d103",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #6",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d103",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d104",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #6",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d104",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d105",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #6",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d105",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d106",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #6",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d106",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d107",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #6",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d107",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d108",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #6",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d108",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d109",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #6",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d109",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d110",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #6",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d110",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #6"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d111",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #7",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d111",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d112",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #7",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d112",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d113",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #7",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d113",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d114",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #7",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d114",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d115",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #7",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d115",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d116",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #7",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d116",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d117",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #7",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d117",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d118",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #7",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d118",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d119",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #7",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d119",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d120",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #7",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d120",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d121",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #7",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d121",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d122",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #7",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d122",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d123",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #7",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d123",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d124",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #7",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d124",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d125",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #7",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d125",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #7"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d126",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #8",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d126",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d127",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #8",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d127",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d128",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #8",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d128",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d129",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #8",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d129",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d130",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #8",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d130",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d131",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #8",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d131",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d132",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #8",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d132",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d133",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #8",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d133",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d134",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #8",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d134",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d135",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #8",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d135",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d136",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #8",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d136",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d137",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #8",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d137",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d138",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #8",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d138",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d139",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #8",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d139",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d140",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #8",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d140",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #8"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d141",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #9",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d141",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d142",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #9",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d142",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d143",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #9",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d143",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d144",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #9",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d144",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d145",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #9",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d145",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d146",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #9",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d146",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d147",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #9",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d147",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d148",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #9",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d148",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d149",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #9",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d149",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d150",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #9",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d150",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d151",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #9",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d151",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d152",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #9",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d152",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d153",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #9",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d153",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d154",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #9",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d154",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d155",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #9",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d155",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #9"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d156",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #10",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d156",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d157",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #10",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d157",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d158",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #10",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d158",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d159",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #10",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d159",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d160",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #10",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d160",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d161",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #10",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d161",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d162",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #10",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d162",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d163",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #10",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d163",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d164",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #10",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d164",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d165",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #10",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d165",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d166",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #10",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d166",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d167",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #10",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d167",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d168",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #10",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d168",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d169",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #10",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d169",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d170",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #10",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d170",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #10"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d171",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #11",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d171",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d172",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #11",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d172",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d173",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #11",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d173",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d174",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #11",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d174",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d175",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #11",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d175",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d176",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #11",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d176",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d177",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #11",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d177",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d178",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #11",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d178",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d179",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #11",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d179",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d180",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #11",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d180",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d181",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #11",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d181",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d182",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #11",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d182",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d183",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #11",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d183",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d184",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #11",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d184",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d185",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #11",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d185",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #11"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d186",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #12",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d186",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d187",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #12",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d187",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d188",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #12",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d188",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d189",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #12",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d189",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d190",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #12",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d190",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d191",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #12",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d191",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d192",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #12",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d192",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d193",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #12",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d193",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d194",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #12",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d194",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d195",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #12",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d195",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d196",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #12",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d196",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d197",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #12",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d197",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d198",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #12",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d198",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d199",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #12",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d199",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d200",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #12",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d200",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #12"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d201",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #13",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d201",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d202",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #13",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d202",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d203",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #13",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d203",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d204",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #13",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d204",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d205",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #13",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d205",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d206",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #13",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d206",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d207",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #13",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d207",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d208",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #13",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d208",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d209",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #13",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d209",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d210",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #13",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d210",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d211",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #13",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d211",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d212",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #13",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d212",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d213",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #13",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d213",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d214",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #13",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d214",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d215",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #13",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d215",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #13"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d216",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #14",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d216",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d217",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #14",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d217",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d218",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #14",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d218",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d219",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #14",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d219",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d220",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #14",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d220",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d221",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #14",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d221",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d222",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #14",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d222",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d223",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #14",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d223",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d224",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #14",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d224",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d225",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #14",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d225",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d226",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #14",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d226",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d227",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #14",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d227",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d228",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #14",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d228",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d229",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #14",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d229",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d230",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #14",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d230",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #14"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d231",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #15",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d231",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d232",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #15",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d232",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d233",
    "sender_name": "Student Affairs",
    "from_address": "studentaffairs@university.edu",
    "subject": "Student Wellness Workshop #15",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d233",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "studentaffairs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "studentaffairs@university.edu",
        "subject": "Student Wellness Workshop #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d234",
    "sender_name": "Placement Cell",
    "from_address": "placements@university.edu",
    "subject": "Placement Preparation Session #15",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d234",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "placements@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "placements@university.edu",
        "subject": "Placement Preparation Session #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d235",
    "sender_name": "Computer Science Department",
    "from_address": "cs@university.edu",
    "subject": "CSE Seminar This Friday #15",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d235",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "cs@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "cs@university.edu",
        "subject": "CSE Seminar This Friday #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d236",
    "sender_name": "Examination Office",
    "from_address": "exams@university.edu",
    "subject": "Semester Examination Schedule #15",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d236",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "exams@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "exams@university.edu",
        "subject": "Semester Examination Schedule #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d237",
    "sender_name": "University Events",
    "from_address": "events@university.edu",
    "subject": "Tech Fest Registration Opens #15",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d237",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "events@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "events@university.edu",
        "subject": "Tech Fest Registration Opens #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d238",
    "sender_name": "Hostel Office",
    "from_address": "hostel@university.edu",
    "subject": "Hostel Maintenance Notice #15",
    "bucket": "safe",
    "trust_score": 93,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 93
      },
      "flagged_signal_count": 0,
      "id": "d238",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "hostel@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "hostel@university.edu",
        "subject": "Hostel Maintenance Notice #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 93
      },
      "trust_score": 93,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d239",
    "sender_name": "Course Portal",
    "from_address": "no-reply@lms.university.edu",
    "subject": "Assignment Feedback Available #15",
    "bucket": "safe",
    "trust_score": 94,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 94
      },
      "flagged_signal_count": 0,
      "id": "d239",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "no-reply@lms.university.edu",
        "from_domain": "lms.university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "no-reply@lms.university.edu",
        "subject": "Assignment Feedback Available #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 94
      },
      "trust_score": 94,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d240",
    "sender_name": "Finance Office",
    "from_address": "finance@university.edu",
    "subject": "Fee Receipt Available #15",
    "bucket": "safe",
    "trust_score": 85,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 85
      },
      "flagged_signal_count": 0,
      "id": "d240",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "finance@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "finance@university.edu",
        "subject": "Fee Receipt Available #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 85
      },
      "trust_score": 85,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d241",
    "sender_name": "Alumni Office",
    "from_address": "alumni@university.edu",
    "subject": "Alumni Mentorship Programme #15",
    "bucket": "safe",
    "trust_score": 86,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 86
      },
      "flagged_signal_count": 0,
      "id": "d241",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "alumni@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "alumni@university.edu",
        "subject": "Alumni Mentorship Programme #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.06,
          "score": 94
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 86
      },
      "trust_score": 86,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d242",
    "sender_name": "Coding Club",
    "from_address": "codingclub@university.edu",
    "subject": "Weekly Coding Challenge #15",
    "bucket": "safe",
    "trust_score": 87,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 87
      },
      "flagged_signal_count": 0,
      "id": "d242",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "codingclub@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "codingclub@university.edu",
        "subject": "Weekly Coding Challenge #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.07,
          "score": 93
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 87
      },
      "trust_score": 87,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d243",
    "sender_name": "Sports Committee",
    "from_address": "sports@university.edu",
    "subject": "Inter-College Tournament Notice #15",
    "bucket": "safe",
    "trust_score": 88,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 88
      },
      "flagged_signal_count": 0,
      "id": "d243",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "sports@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "sports@university.edu",
        "subject": "Inter-College Tournament Notice #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.08,
          "score": 92
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 88
      },
      "trust_score": 88,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d244",
    "sender_name": "Career Services",
    "from_address": "careers@university.edu",
    "subject": "Career Workshop: Resume Review #15",
    "bucket": "safe",
    "trust_score": 89,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 89
      },
      "flagged_signal_count": 0,
      "id": "d244",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "careers@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "careers@university.edu",
        "subject": "Career Workshop: Resume Review #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.09,
          "score": 91
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 89
      },
      "trust_score": 89,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d245",
    "sender_name": "Faculty Office",
    "from_address": "faculty@university.edu",
    "subject": "Office Hours Update #15",
    "bucket": "safe",
    "trust_score": 90,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 90
      },
      "flagged_signal_count": 0,
      "id": "d245",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "faculty@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "faculty@university.edu",
        "subject": "Office Hours Update #15"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.03,
          "score": 97
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
      "trust_score": 90,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d246",
    "sender_name": "Professor Rao",
    "from_address": "prof.rao@university.edu",
    "subject": "Tomorrow\u2019s Data Structures Lecture #16",
    "bucket": "safe",
    "trust_score": 91,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 91
      },
      "flagged_signal_count": 0,
      "id": "d246",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "prof.rao@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "prof.rao@university.edu",
        "subject": "Tomorrow\u2019s Data Structures Lecture #16"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.04,
          "score": 96
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 91
      },
      "trust_score": 91,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  },
  {
    "id": "d247",
    "sender_name": "Campus Library",
    "from_address": "library@university.edu",
    "subject": "Your Monthly Library Newsletter #16",
    "bucket": "safe",
    "trust_score": 92,
    "raw_result": {
      "bucket": "safe",
      "confidence": {
        "label": "high",
        "notes": [
          "classification based on available message signals"
        ],
        "score": 82
      },
      "contextual_legitimacy": {
        "label": "HIGH",
        "score": 92
      },
      "flagged_signal_count": 0,
      "id": "d247",
      "parsed": {
        "auth": {
          "dkim": "PASS",
          "dmarc": "PASS",
          "present": true,
          "spf": "PASS"
        },
        "body": "This is a routine university communication. No unusual action is required.",
        "date": null,
        "from": "library@university.edu",
        "from_domain": "university.edu",
        "header_lines": [],
        "homograph_of": null,
        "origin_ip": null,
        "reply_to": "",
        "reply_to_domain": null,
        "sender_addr": "library@university.edu",
        "subject": "Your Monthly Library Newsletter #16"
      },
      "reasons": [],
      "signals": {
        "behavior": {
          "evidence": [
            "Sender has established normal communication history"
          ],
          "flagged": false,
          "score": 10,
          "seen_before": true,
          "status": "established"
        },
        "content_intent": {
          "evidence": [],
          "flagged": false,
          "has_credential_request": false,
          "has_payment_request": false,
          "has_urgency": false,
          "model_name": "HALO-Trust-RF-v3",
          "model_threshold": 0.4123779492781404,
          "probability_malicious": 0.05,
          "score": 95
        },
        "identity": {
          "evidence": [
            "SPF check: PASS",
            "DKIM check: PASS",
            "DMARC check: PASS"
          ],
          "flagged": false,
          "homograph_of": null,
          "reply_to_mismatch": false,
          "score": 90
        },
        "infrastructure": {
          "confidence": "low",
          "evidence": [
            "No strong infrastructure risk identified"
          ],
          "flagged": false,
          "ip": null,
          "score": 10
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
        "score": 92
      },
      "trust_score": 92,
      "verdict": "Looks safe -- no strong malicious indicators"
    }
  }
];
const DEMO_CAMPAIGN = {
  "id": "demo-campaign-1",
  "name": "Coordinated Student Credential & Scholarship Scam (DEMO SCENARIO)",
  "status": "open",
  "first_seen_at": "2026-09-16T08:10:00.000Z",
  "last_seen_at": "2026-09-16T14:40:00.000Z",
  "affected_students": 5,
  "related_emails": [
    {
      "id": "d1",
      "subject": "Urgent Scholarship Disbursement - Verify Account",
      "bucket": "high-risk",
      "domain": "scholarship-award.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 1"
    },
    {
      "id": "d2",
      "subject": "Final Placement Selection - Action Required",
      "bucket": "high-risk",
      "domain": "campus-careers.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 2"
    },
    {
      "id": "d3",
      "subject": "Your Student Account Will Be Suspended",
      "bucket": "high-risk",
      "domain": "university-verify.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 3"
    },
    {
      "id": "d4",
      "subject": "Congratulations - Pay Processing Fee Today",
      "bucket": "high-risk",
      "domain": "career-opportunity.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 4"
    },
    {
      "id": "d5",
      "subject": "Exam Result Verification Required",
      "bucket": "high-risk",
      "domain": "university-results.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 5"
    },
    {
      "id": "d6",
      "subject": "Hostel Refund - Confirm Bank Details",
      "bucket": "high-risk",
      "domain": "university-refund.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 1"
    },
    {
      "id": "d7",
      "subject": "Grant Approved - Claim Within 2 Hours",
      "bucket": "high-risk",
      "domain": "student-grant.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 2"
    },
    {
      "id": "d8",
      "subject": "Immediate Password Verification Required",
      "bucket": "high-risk",
      "domain": "account-security.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 3"
    },
    {
      "id": "d9",
      "subject": "Offer Letter Ready - Download Secure Copy",
      "bucket": "high-risk",
      "domain": "placement-offer.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 1"
    },
    {
      "id": "d10",
      "subject": "Re-Authenticate Your Student Portal",
      "bucket": "high-risk",
      "domain": "university-login.example",
      "infra_ip": "185.220.101.47",
      "student_label": "Student 2"
    }
  ],
  "graph": {
    "domains": [
      {
        "domain": "scholarship-award.example",
        "email_ids": [
          "d1"
        ]
      },
      {
        "domain": "placement-offer.example",
        "email_ids": [
          "d9"
        ]
      },
      {
        "domain": "university-login.example",
        "email_ids": [
          "d10"
        ]
      }
    ],
    "infrastructure": [
      {
        "ip": "185.220.101.47",
        "org": "Offshore Hosting Solutions Ltd.",
        "asn": "AS208843",
        "email_ids": [
          "d1",
          "d2",
          "d3",
          "d4",
          "d5",
          "d6",
          "d7",
          "d8",
          "d9",
          "d10"
        ]
      }
    ],
    "student_count": 5
  }
};
const DEMO_GEO = {
  "geo_source": "DEMO SCENARIO -- illustrative infrastructure intelligence, not physical attacker location.",
  "nodes": [
    {
      "ip": "185.220.101.47",
      "org": "Offshore Hosting Solutions Ltd.",
      "asn": "AS208843",
      "country": "DE",
      "region": "Frankfurt",
      "category": "bulk-anonymous-hosting",
      "risk_score": 82,
      "suspicious_emails": 10,
      "reused": true
    },
    {
      "ip": "103.87.44.212",
      "org": "QuickServe Cloud Hosting Pvt Ltd",
      "asn": "AS142804",
      "country": "IN",
      "region": "Mumbai",
      "category": "shared-vps",
      "risk_score": 61,
      "suspicious_emails": 4,
      "reused": true
    }
  ]
};
const DEMO_TIMELINE = {
  "events": [
    {
      "timestamp": "2026-09-16T08:10:00.000Z",
      "type": "email",
      "label": "First suspicious email detected: scholarship disbursement request (DEMO SCENARIO)"
    },
    {
      "timestamp": "2026-09-16T09:05:00.000Z",
      "type": "email",
      "label": "Additional students received related placement and account messages"
    },
    {
      "timestamp": "2026-09-16T10:30:00.000Z",
      "type": "infrastructure",
      "label": "Shared infrastructure observed across suspicious messages"
    },
    {
      "timestamp": "2026-09-16T11:20:00.000Z",
      "type": "campaign",
      "label": "HALO correlated messages into one coordinated campaign"
    },
    {
      "timestamp": "2026-09-16T14:40:00.000Z",
      "type": "incident",
      "label": "Institution incident created for investigation"
    }
  ]
};
const DEMO_TRENDS = {
  "last_24h": 10,
  "previous_24h": 3,
  "total_suspicious": 20,
  "trend_statement": "Suspicious messages increased from 3 to 10 in the last 24 hours. (DEMO SCENARIO)"
};

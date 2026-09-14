import contextual_trust_engine as cte

def show(name, **kwargs):
    r = cte.analyze(**kwargs)
    print(f"--- {name} ---")
    print(f"  verdict={r['verdict']!r}  bucket={r['bucket']}  trust_score={r['trust_score']}")
    print(f"  technical={r['technical_legitimacy']}  contextual={r['contextual_legitimacy']}")
    print(f"  confidence={r['confidence']['label']}  reasons={r['reasons']}")
    return r

show("1. Obvious malicious (phishing, fails auth)",
     raw_source="""From: "PayPal Security" <alerts@paypal-secure-verify.com>
Reply-To: recovery-support@paypal-secure-verify.com
Subject: Action Required: unusual sign-in detected
Received: from mx by y; Mon, 07 Sep 2026 11:42:09 +0000
Received: from mail-relay.net (185.220.101.47) by mx; Mon, 07 Sep 2026 11:42:07 +0000
Authentication-Results: mx; spf=fail; dkim=fail; dmarc=fail (p=reject)

Dear valued customer, please verify now by confirming your account password within 24 hours.""")

show("2. Legitimate (routine, passes auth)",
     raw_source="""From: "Tech Insider Daily" <newsletter@tech-insider-daily.com>
Subject: Your Monday briefing
Received: from mx by y; Mon, 07 Sep 2026 07:00:05 +0000
Received: from relay (142.250.80.46) by mx; Mon, 07 Sep 2026 07:00:03 +0000
Authentication-Results: mx; spf=pass; dkim=pass; dmarc=pass

Hi there, here are five stories in AI infrastructure this week.""")

show("3. Credential phishing",
     from_address="security@accounts-google.co.in", reply_to="security@accounts-google.co.in",
     subject="Your account was accessed from a new device",
     body_text="Verify now by entering your login credentials and security code to confirm your account.")

show("4. Payment phishing",
     from_address="ceo.office@corp-mail-secure.net", reply_to="ceo.office@corp-mail-secure.net",
     subject="Confidential wire transfer needed today",
     body_text="I need this handled today, urgent wire transfer, send the bank details and account number right away.")

show("5. Suspicious URL (IP-based link)",
     from_address="support@some-shop.com", reply_to="support@some-shop.com",
     subject="Confirm your order",
     body_text="Please confirm your order by visiting http://192.168.44.2/confirm now.")

show("6. Reply-To mismatch",
     from_address="billing@legit-bank.com", reply_to="reply@totally-different-domain.ru",
     subject="Update your billing info",
     body_text="Please update your billing information at your convenience.")

show("7. Behavioural anomaly (known sender, first-time payment ask)",
     from_address="it-helpdesk@amityonline.edu", reply_to="it-helpdesk@amityonline.edu",
     subject="Immediate payment required to keep your account active",
     body_text="Please send payment immediately or your account access will be revoked today.")

show("8. Malformed input (no @ in address, empty body)",
     from_address="not-an-email", reply_to="also not an email", subject="", body_text="")

print("\n--- 9. Related campaign: see campaign_correlation test below ---")

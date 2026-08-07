"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Consent = { necessary: true; analytics: boolean; marketing: boolean };

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(!localStorage.getItem("astravox-cookie-consent"));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  const save = (consent: Consent) => {
    localStorage.setItem("astravox-cookie-consent", JSON.stringify(consent));
    setVisible(false);
    window.dispatchEvent(new Event("storage"));
  };

  if (!visible) return null;

  return (
    <section className="cookie" aria-label="Cookie consent">
      <div className="cookie-row">
        <div>
          <strong>Cookie choices</strong>
          <p className="muted" style={{ margin: "0.35rem 0 0" }}>
            Necessary cookies keep the site working. Analytics and marketing
            tools only load after you choose them. Read our{" "}
            <Link href="/cookies">Cookie Policy</Link> and{" "}
            <Link href="/privacy">Privacy Policy</Link>.
          </p>
          <label className="check">
            <input checked readOnly type="checkbox" /> Necessary
          </label>
          <label className="check">
            <input checked={analytics} onChange={(e) => setAnalytics(e.target.checked)} type="checkbox" /> Analytics
          </label>
          <label className="check">
            <input checked={marketing} onChange={(e) => setMarketing(e.target.checked)} type="checkbox" /> Marketing
          </label>
        </div>
        <div className="cookie-actions">
          <button className="button button-ghost" type="button" onClick={() => save({ necessary: true, analytics: false, marketing: false })}>
            Reject optional
          </button>
          <button className="button button-secondary" type="button" onClick={() => save({ necessary: true, analytics, marketing })}>
            Save choices
          </button>
          <button className="button button-primary" type="button" onClick={() => save({ necessary: true, analytics: true, marketing: true })}>
            Accept all
          </button>
        </div>
      </div>
    </section>
  );
}

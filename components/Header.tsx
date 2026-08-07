"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { navigation } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  const trackConsultation = () => {
    window.dispatchEvent(new CustomEvent("astravox:event", { detail: "consultation_button_clicked" }));
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav" aria-label="Main navigation">
          <Link className="logo" href="/" aria-label="Astravox home">
            <BrandMark />
          </Link>
          <div className="desktop-links">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <Link className="button button-primary" href="/contact" onClick={trackConsultation}>
            Book a Consultation
          </Link>
          <button
            className="menu-button"
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </nav>
        <div id="mobile-menu" className={`mobile-panel ${open ? "open" : ""}`}>
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </Link>
          ))}
          <Link className="button button-primary" href="/contact" onClick={trackConsultation}>
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}

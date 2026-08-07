"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/site";

export function AnalyticsLoader() {
  useEffect(() => {
    const consent = localStorage.getItem("astravox-cookie-consent");
    if (!consent) return;
    const parsed = JSON.parse(consent) as { analytics?: boolean; marketing?: boolean };

    const track = (event: Event) => {
      const detail = (event as CustomEvent<string>).detail;
      if (parsed.analytics) {
        console.info("Astravox analytics event:", detail);
      }
    };
    window.addEventListener("astravox:event", track);

    if (parsed.analytics && siteConfig.gaId && !document.querySelector("[data-astravox-ga]")) {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaId}`;
      script.dataset.astravoxGa = "true";
      document.head.appendChild(script);
      window.dataLayer = window.dataLayer || [];
      window.gtag = (...args: unknown[]) => {
        window.dataLayer.push(args);
      };
      window.gtag("js", new Date());
      window.gtag("config", siteConfig.gaId, { anonymize_ip: true });
    }

    if (parsed.marketing && siteConfig.clarityId && !document.querySelector("[data-astravox-clarity]")) {
      const script = document.createElement("script");
      script.dataset.astravoxClarity = "true";
      script.text = `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${siteConfig.clarityId}");`;
      document.head.appendChild(script);
    }

    return () => window.removeEventListener("astravox:event", track);
  }, []);

  return null;
}

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

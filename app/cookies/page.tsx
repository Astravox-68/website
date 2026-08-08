import type { Metadata } from "next";
import { PageBanner } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "Astravox cookie policy covering necessary, analytics and marketing cookies.",
  alternates: { canonical: "/cookies" },
};

export default function CookiesPage() {
  return (
    <>
      <PageBanner eyebrow="Cookies" title="Cookie Policy" text="Astravox uses necessary cookies by default and loads optional analytics or marketing tools only after consent." crumbs={[["Cookie Policy"]]} />
      <section className="section">
        <div className="container legal">
          <p>Astravox uses necessary cookies for site operation and only loads optional analytics or marketing tools after consent.</p>
          <h2>Necessary cookies</h2>
          <p>Necessary cookies support basic site operation and remember cookie choices.</p>
          <h2>Analytics cookies</h2>
          <p>Google Analytics 4 can be enabled with consent using the configured measurement ID. Analytics should be privacy-conscious and should not receive personal form data.</p>
          <h2>Marketing cookies</h2>
          <p>Microsoft Clarity and other marketing tools should only load when the visitor selects the relevant consent option.</p>
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageBanner, SectionHeading } from "@/components/Sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Astravox to discuss software solutions, student consultancy or digital marketing support.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageBanner
        eyebrow="Contact"
        title="Start a focused conversation"
        text="Tell Astravox what you need help with. The form avoids sensitive document uploads and is ready for email or CRM integration."
        crumbs={[["Contact"]]}
      />
      <section className="section">
        <div className="container grid-2">
          <div>
            <SectionHeading eyebrow="Enquiry" title="Choose the right starting point" text="Use the message box to explain your goal, timeline and what you have already tried. Astravox will respond once contact delivery is configured." />
            <div className="card" style={{ padding: "1.4rem" }}>
              <h2 className="h3">Business information still needed</h2>
              <ul className="list">
                <li>Business email address</li>
                <li>Phone or WhatsApp number</li>
                <li>Registered company details if applicable</li>
                <li>Public office address only if approved for publication</li>
              </ul>
              <p className="muted">Current service area: {siteConfig.serviceArea}.</p>
            </div>
          </div>
          <ContactForm />
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Astravox",
            url: `${siteConfig.siteUrl}/contact`,
          }),
        }}
      />
    </>
  );
}

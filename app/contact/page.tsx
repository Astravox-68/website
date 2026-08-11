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
        text={`Tell Astravox what you need help with. Use the form or email ${siteConfig.email} and we will respond with the right next step.`}
        crumbs={[["Contact"]]}
      />
      <section className="section">
        <div className="container grid-2">
          <div>
            <SectionHeading eyebrow="Enquiry" title="Choose the right starting point" text="Use the message box to explain your goal, timeline and what you have already tried. You can also email the team directly." />
            <div className="card" style={{ padding: "1.4rem" }}>
              <h2 className="h3">Contact details</h2>
              <ul className="list">
                <li>
                  General enquiries:{" "}
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </li>
                <li>
                  Careers:{" "}
                  <a href={`mailto:${siteConfig.careersEmail}`}>{siteConfig.careersEmail}</a>
                </li>
                <li>Service area: {siteConfig.serviceArea}</li>
                <li>Technology, education and digital growth enquiries welcome</li>
                <li>Please do not send sensitive documents until requested</li>
              </ul>
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

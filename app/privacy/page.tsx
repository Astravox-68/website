import type { Metadata } from "next";
import { PageBanner } from "@/components/Sections";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Astravox privacy policy for website enquiries, analytics and contact details.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageBanner eyebrow="Privacy" title="Privacy Policy" text="How Astravox handles website enquiries, analytics preferences and contact details." crumbs={[["Privacy Policy"]]} />
      <section className="section">
        <div className="container legal">
          <p>This page explains the intended handling of enquiries, analytics preferences and contact details submitted through the Astravox website.</p>
          <h2>Information we may collect</h2>
          <p>We may collect contact details, enquiry messages and service preferences submitted through website forms. Education forms should not request passport numbers, bank statements, health information or detailed immigration records.</p>
          <h2>How information is used</h2>
          <p>Information is used to respond to enquiries, plan consultations, improve website performance and maintain appropriate records. Personal data should not be sent to analytics tools.</p>
          <h2>Education disclaimer</h2>
          <p>Astravox provides general educational information and application support. We do not provide regulated immigration advice unless appropriately authorised.</p>
          <h2>Your rights</h2>
          <p>Users may request access, correction or deletion where applicable under UK data protection rules by emailing <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.</p>
        </div>
      </section>
    </>
  );
}

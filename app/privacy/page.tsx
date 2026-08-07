import type { Metadata } from "next";
import { PageBanner } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Draft Astravox privacy policy requiring legal review before production use.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <PageBanner eyebrow="Privacy" title="Privacy Policy" text="Draft privacy wording for Astravox. This page must be reviewed by a qualified professional before final publication." crumbs={[["Privacy Policy"]]} />
      <section className="section">
        <div className="container legal">
          <p><strong>Legal review required:</strong> This draft explains the intended handling of enquiries, analytics and contact details. Replace with final legal wording before launch.</p>
          <h2>Information we may collect</h2>
          <p>We may collect contact details, enquiry messages and service preferences submitted through website forms. Education forms should not request passport numbers, bank statements, health information or detailed immigration records.</p>
          <h2>How information is used</h2>
          <p>Information is used to respond to enquiries, plan consultations, improve website performance and maintain appropriate records. Personal data should not be sent to analytics tools.</p>
          <h2>Education disclaimer</h2>
          <p>Astravox provides general educational information and application support. We do not provide regulated immigration advice unless appropriately authorised.</p>
          <h2>Your rights</h2>
          <p>Users may request access, correction or deletion where applicable under UK data protection rules. Add the confirmed contact email before launch.</p>
        </div>
      </section>
    </>
  );
}

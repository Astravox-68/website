import type { Metadata } from "next";
import { PageBanner } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Draft Astravox website terms requiring legal review before production use.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageBanner eyebrow="Terms" title="Terms and Conditions" text="Draft terms for Astravox website use and service enquiries. Final wording requires legal review." crumbs={[["Terms and Conditions"]]} />
      <section className="section">
        <div className="container legal">
          <p><strong>Legal review required:</strong> These draft terms are not a substitute for professional legal advice.</p>
          <h2>Website information</h2>
          <p>Website content is provided for general information and does not create a client relationship until services are agreed in writing.</p>
          <h2>Technology services</h2>
          <p>Project scope, pricing, timelines, ownership, support and responsibilities should be defined in a separate proposal or agreement.</p>
          <h2>Education services</h2>
          <p>Admission, scholarship and visa decisions are made by institutions, funding bodies and relevant authorities. Astravox does not guarantee outcomes.</p>
          <h2>Digital marketing services</h2>
          <p>Astravox does not guarantee rankings, leads, revenue or advertising results. Campaign performance depends on many external factors.</p>
        </div>
      </section>
    </>
  );
}

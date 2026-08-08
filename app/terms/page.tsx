import type { Metadata } from "next";
import { PageBanner } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Astravox website terms for information, enquiries and services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <PageBanner eyebrow="Terms" title="Terms and Conditions" text="Terms for using the Astravox website and submitting service enquiries." crumbs={[["Terms and Conditions"]]} />
      <section className="section">
        <div className="container legal">
          <p>These terms explain the general basis for website information and enquiries. Any paid service should be agreed separately in writing.</p>
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

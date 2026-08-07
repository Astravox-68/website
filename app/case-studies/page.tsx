import type { Metadata } from "next";
import { CaseStudyGrid, FinalCTA, PageBanner, SectionHeading } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Case Studies",
  description: "Reusable Astravox case study examples for technology, education and digital growth work, without invented client claims.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageBanner
        eyebrow="Case studies"
        title="A responsible structure for future proof-backed work"
        text="These demonstration case studies show the format Astravox can use once real client work, outcomes and testimonials are verified."
        crumbs={[["Case Studies"]]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Examples" title="Demonstration case-study cards" text="Replace these with real projects only when client approval and verified outcomes are available." />
          <CaseStudyGrid />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

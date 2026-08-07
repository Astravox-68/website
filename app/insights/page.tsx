import type { Metadata } from "next";
import { InsightGrid, PageBanner, SectionHeading } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Insights",
  description: "Astravox insights on software, student consultancy and digital marketing for UK and international audiences.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return (
    <>
      <PageBanner
        eyebrow="Insights"
        title="Useful thinking across Astravox services"
        text="Starter insight topics prepared for technology, education and digital growth. Each can be expanded into a full article when ready."
        crumbs={[["Insights"]]}
      />
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow="Articles" title="Browse by category" />
          <InsightGrid />
        </div>
      </section>
    </>
  );
}

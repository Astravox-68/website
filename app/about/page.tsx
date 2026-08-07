import type { Metadata } from "next";
import { FinalCTA, PageBanner, SectionHeading, TrustGrid } from "@/components/Sections";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Astravox, a UK-based brand connecting software solutions, student consultancy and digital growth.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageBanner
        eyebrow="About Astravox"
        title="One brand for practical digital, education and growth support"
        text="Astravox brings together three connected areas of modern progress: technology for organisations, education guidance for students and digital marketing for brands."
        crumbs={[["About"]]}
      />
      <section className="section">
        <div className="container grid-2">
          <div>
            <SectionHeading eyebrow="Our approach" title="Clear, responsible and tailored" />
            <p className="muted">
              Astravox is designed for clients who want professional support
              without inflated promises. Every enquiry starts by understanding
              the context, then shaping practical options that match the
              client&apos;s goals, responsibilities and constraints.
            </p>
            <p className="muted">
              The company details, verified testimonials, accreditations and
              partner information should be added once confirmed. Until then,
              the site avoids claims that need proof.
            </p>
          </div>
          <TrustGrid />
        </div>
      </section>
      <FinalCTA />
    </>
  );
}

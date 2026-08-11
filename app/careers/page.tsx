import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageBanner, SectionHeading } from "@/components/Sections";
import { siteConfig } from "@/lib/site";

const vacancy = {
  title: "Mobile Software Engineer",
  location: "Remote – United Kingdom",
  employmentType: "Part-time",
  hours: "20 hours per week",
  salary: "£18.50–£22.00 per hour",
  responsibilities: [
    "Design and develop Android applications using Kotlin and modern Android technologies.",
    "Maintain and improve existing mobile applications.",
    "Build and integrate RESTful APIs.",
    "Collaborate with designers and other developers.",
    "Write clean, maintainable and well-tested code.",
    "Participate in code reviews and technical discussions.",
    "Troubleshoot and optimise application performance.",
    "Follow modern software engineering and Agile practices.",
  ],
  requiredSkills: [
    "Strong Android development experience using Kotlin.",
    "Experience with Jetpack Compose or modern Android UI frameworks.",
    "Understanding of MVVM, Clean Architecture or similar patterns.",
    "Experience integrating REST APIs.",
    "Git/version-control experience.",
    "Strong problem-solving and communication skills.",
  ],
  desirableSkills: [
    "iOS or cross-platform mobile development.",
    "Cloud platforms such as AWS, GCP or Azure.",
    "Firebase.",
    "AI/LLM integration.",
    "SQL, data processing or analytics.",
    "CI/CD pipelines.",
  ],
  offer: [
    "Fully remote working.",
    "Flexible working arrangements.",
    "Opportunity to work on modern software projects.",
    "Exposure to mobile, cloud, AI and data technologies.",
    "Professional development opportunities.",
    "Potential progression to a full-time position as the business grows.",
  ],
};

export const metadata: Metadata = {
  title: "Careers | Astravox Tech",
  description:
    "Explore career opportunities at Astravox Tech. Join our remote software engineering team and work on modern mobile, cloud and AI-enabled solutions.",
  alternates: { canonical: "/careers" },
};

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section className="career-list">
      <h3 className="h3">{title}</h3>
      <ul className="list">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

export default function CareersPage() {
  const jobDescription =
    "Astravox Tech is looking for a Mobile Software Engineer to join our growing engineering team. You will be responsible for designing, developing, testing and maintaining high-quality mobile applications, working primarily with modern Android technologies while contributing to cross-platform solutions where appropriate.";

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: vacancy.title,
    description: [
      jobDescription,
      "Key Responsibilities:",
      ...vacancy.responsibilities,
      "Required Skills:",
      ...vacancy.requiredSkills,
      "Desirable Skills:",
      ...vacancy.desirableSkills,
      "What We Offer:",
      ...vacancy.offer,
    ].join("\n"),
    datePosted: "2026-08-11",
    employmentType: "PART_TIME",
    hiringOrganization: {
      "@type": "Organization",
      name: "Astravox Tech",
      sameAs: siteConfig.siteUrl,
    },
    jobLocationType: "TELECOMMUTE",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "United Kingdom",
    },
    baseSalary: {
      "@type": "MonetaryAmount",
      currency: "GBP",
      value: {
        "@type": "QuantitativeValue",
        minValue: 18.5,
        maxValue: 22,
        unitText: "HOUR",
      },
    },
    workHours: vacancy.hours,
    directApply: true,
  };

  return (
    <>
      <PageBanner
        eyebrow="Careers"
        title="Join Astravox Tech"
        text="Explore current opportunities to work with Astravox on modern mobile, cloud and AI-enabled software projects."
        crumbs={[["Careers"]]}
        tone="technology"
      />

      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Open vacancy"
            title={vacancy.title}
            text="A remote part-time engineering role focused on Android, mobile product quality and practical software delivery."
          />
          <article className="card career-card">
            <div className="career-meta" aria-label="Job details">
              <span>{vacancy.location}</span>
              <span>{vacancy.employmentType}</span>
              <span>{vacancy.hours}</span>
              <span>{vacancy.salary}</span>
            </div>
            <p className="muted">{jobDescription}</p>
            <div className="career-actions">
              <a className="button button-primary" href="#apply-mobile-software-engineer">
                Apply Now
              </a>
              <a className="button button-secondary outline" href={`mailto:${siteConfig.careersEmail}`}>
                Email Careers
              </a>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container career-detail-grid">
          <ListSection title="Key Responsibilities" items={vacancy.responsibilities} />
          <ListSection title="Required Skills" items={vacancy.requiredSkills} />
          <ListSection title="Desirable Skills" items={vacancy.desirableSkills} />
          <ListSection title="What We Offer" items={vacancy.offer} />
        </div>
      </section>

      <section className="section" id="apply-mobile-software-engineer">
        <div className="container grid-2">
          <div>
            <SectionHeading
              eyebrow="Apply"
              title="Apply for Mobile Software Engineer"
              text="Complete the form to send your application details to info@astravoxtech.uk. Please email your CV separately."
            />
            <div className="card" style={{ padding: "1.4rem" }}>
              <h2 className="h3">CV and recruitment email</h2>
              <p className="muted">
                The form sends your application details to{" "}
                <a href={`mailto:${siteConfig.careersEmail}`}>{siteConfig.careersEmail}</a>.{" "}
                Please email your CV separately with the subject line "Mobile Software Engineer application".
              </p>
            </div>
          </div>
          <ContactForm
            kind="careers"
            messageLabel="Short message / cover note"
            submitLabel="Submit Application"
          />
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPosting) }}
      />
    </>
  );
}

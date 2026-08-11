import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageBanner, SectionHeading } from "@/components/Sections";
import { siteConfig } from "@/lib/site";

const vacancy = {
  title: "Mobile Software Engineer",
  location: "Remote (United Kingdom)",
  employmentType: "Part-time",
  hours: "20 hours per week",
  salary: "£18.50–£22.00 per hour",
  responsibilities: [
    "Develop Android applications using Kotlin.",
    "Build modern UI using Jetpack Compose.",
    "Maintain existing applications.",
    "Integrate REST APIs.",
    "Participate in architecture discussions.",
    "Write clean, maintainable code.",
    "Work with Git and Agile methodologies.",
    "Collaborate with designers and backend developers.",
  ],
  requiredSkills: [
    "Kotlin",
    "Android SDK",
    "Jetpack Compose",
    "MVVM",
    "REST APIs",
    "Git",
    "Problem solving",
    "Communication skills",
  ],
  desirableSkills: [
    "Flutter",
    "iOS",
    "Firebase",
    "AWS",
    "Google Cloud",
    "Docker",
    "CI/CD",
    "AI integrations",
    "Python",
    "React",
    "Node.js",
  ],
};

export const metadata: Metadata = {
  title: "Careers | Astravox Tech",
  description:
    "Join Astravox Tech and build innovative software across Android, cloud, AI and modern web technologies.",
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
    "Join Astravox Tech and help build modern software solutions across mobile, cloud, AI and digital platforms. We are looking for passionate engineers who enjoy solving real-world problems.";

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
        title="Careers at Astravox Tech"
        text="Join Astravox Tech and help build modern software solutions across mobile, cloud, AI and digital platforms. We are looking for passionate engineers who enjoy solving real-world problems."
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
          <ListSection title="Responsibilities" items={vacancy.responsibilities} />
          <ListSection title="Required Skills" items={vacancy.requiredSkills} />
          <ListSection title="Desirable Skills" items={vacancy.desirableSkills} />
        </div>
      </section>

      <section className="section" id="apply-mobile-software-engineer">
        <div className="container grid-2">
          <div>
            <SectionHeading
              eyebrow="Apply"
              title="Apply for Mobile Software Engineer"
              text="Complete the form to send your application details to careers@astravoxtech.uk. Please email your CV separately."
            />
            <div className="card" style={{ padding: "1.4rem" }}>
              <h2 className="h3">CV and recruitment email</h2>
              <p className="muted">
                The form sends your application details to{" "}
                <a href={`mailto:${siteConfig.careersEmail}`}>{siteConfig.careersEmail}</a>.{" "}
                Please email your CV to careers@astravoxtech.uk with the subject line "Mobile Software Engineer application".
              </p>
            </div>
          </div>
          <ContactForm
            kind="careers"
            messageLabel="Cover Letter"
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

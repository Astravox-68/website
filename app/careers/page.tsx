import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { EmailLink } from "@/components/EmailLink";
import { PageBanner, SectionHeading } from "@/components/Sections";
import { siteConfig } from "@/lib/site";

const vacancy = {
  title: "Mobile Software Engineer",
  location: "Remote (United Kingdom)",
  employmentType: "Part-time",
  hours: "20 hours per week",
  salary: "£18.50–£22.00 per hour",
  responsibilities: [
    "Develop Android mobile applications using Kotlin.",
    "Build modern mobile user interfaces using Jetpack Compose or similar tools.",
    "Maintain, update and improve existing mobile applications.",
    "Integrate mobile apps with REST APIs and backend services.",
    "Support technical planning and application architecture decisions.",
    "Write clean, readable and maintainable code.",
    "Test, debug and optimise application performance.",
    "Use Git for version control and team collaboration.",
    "Work with designers, backend developers and other stakeholders.",
    "Follow Agile software development processes.",
  ],
  requiredSkills: [
    "Experience developing Android applications with Kotlin.",
    "Good knowledge of the Android SDK.",
    "Understanding of Jetpack Compose or modern Android UI development.",
    "Familiarity with MVVM, Clean Architecture or similar software patterns.",
    "Experience connecting applications to REST APIs.",
    "Ability to use Git in a collaborative development environment.",
    "Strong problem-solving skills.",
    "Clear written and verbal communication.",
  ],
  desirableSkills: [
    "Flutter or cross-platform mobile development.",
    "iOS development.",
    "Firebase.",
    "AWS, Google Cloud or Microsoft Azure.",
    "Docker.",
    "CI/CD pipelines.",
    "AI or LLM-based integrations.",
    "SQL, data processing or analytics.",
    "Python.",
    "React.",
    "Node.js.",
  ],
  offer: [
    "Remote working.",
    "Flexible part-time arrangement.",
    "20 hours per week.",
    "Hourly pay between £18.50 and £22.00.",
    "Opportunity to work on mobile, cloud, AI and web-related projects.",
    "Exposure to modern development tools and practices.",
    "Professional growth as the company expands.",
    "Possible progression into a full-time role in the future.",
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
    "Astravox Tech is hiring a Mobile Software Engineer to help design, build and improve mobile applications for client and internal software projects. The role is mainly focused on Android development using Kotlin, with opportunities to contribute to wider mobile, cloud and cross-platform work where needed.";
  const roleSummary =
    "This is a remote, part-time position suitable for someone who enjoys building practical software, solving technical problems and working with modern mobile technologies. As Astravox Tech grows, there may be scope for the role to develop into a full-time position.";
  const roleOverview =
    "You will work on mobile application development from planning through to delivery, including UI development, API integration, testing, debugging and ongoing improvement of existing applications. You will collaborate with other developers and designers to produce reliable, maintainable and user-friendly mobile products.";
  const howToApply =
    "Please apply through the form and include details of your relevant Android or mobile development experience. If possible, include links to a GitHub profile, portfolio, published app or examples of previous work.";

  const jobPosting = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: vacancy.title,
    description: [
      jobDescription,
      "Key Responsibilities:",
      ...vacancy.responsibilities,
      "Essential Skills and Experience:",
      ...vacancy.requiredSkills,
      "Additional Skills That Would Be Helpful:",
      ...vacancy.desirableSkills,
      "What Astravox Tech Offers:",
      ...vacancy.offer,
      "How to Apply:",
      howToApply,
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
            text="A remote, part-time engineering role focused on Android development, API integration and practical mobile product delivery."
          />
          <article className="card career-card">
            <div className="career-meta" aria-label="Job details">
              <span>{vacancy.location}</span>
              <span>{vacancy.employmentType}</span>
              <span>{vacancy.hours}</span>
              <span>{vacancy.salary}</span>
            </div>
            <p className="muted">{jobDescription}</p>
            <p className="muted">{roleSummary}</p>
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
          <section className="career-list">
            <h3 className="h3">Role Overview</h3>
            <p className="muted">{roleOverview}</p>
          </section>
          <ListSection title="Key Duties" items={vacancy.responsibilities} />
          <ListSection title="Essential Skills and Experience" items={vacancy.requiredSkills} />
          <ListSection title="Additional Skills That Would Be Helpful" items={vacancy.desirableSkills} />
          <ListSection title="What Astravox Tech Offers" items={vacancy.offer} />
        </div>
      </section>

      <section className="section" id="apply-mobile-software-engineer">
        <div className="container grid-2">
          <div>
            <SectionHeading
              eyebrow="Apply"
              title="Apply for Mobile Software Engineer"
              text={howToApply}
            />
            <div className="card" style={{ padding: "1.4rem" }}>
              <h2 className="h3">CV and recruitment email</h2>
              <p className="muted">
                The form sends your application details to{" "}
                <EmailLink email={siteConfig.careersEmail} />. Please email your CV to{" "}
                <EmailLink email={siteConfig.careersEmail} /> with the subject line "Mobile Software Engineer application".
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

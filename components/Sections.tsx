import Link from "next/link";
import {
  caseStudies,
  divisions,
  faqs,
  getAllServices,
  insightPosts,
  processSteps,
  trustItems,
  type DivisionKey,
} from "@/lib/site";

export function Breadcrumbs({ items }: { items: Array<[string, string?]> }) {
  return (
    <nav className="breadcrumb" aria-label="Breadcrumb">
      <Link href="/">Home</Link>
      {items.map(([label, href]) => (
        <span key={label}>
          <span aria-hidden="true">/</span>{" "}
          {href ? <Link href={href}>{label}</Link> : <span>{label}</span>}
        </span>
      ))}
    </nav>
  );
}

export function PageBanner({
  eyebrow,
  title,
  text,
  image,
  alt,
  crumbs,
  tone = "default",
}: {
  eyebrow: string;
  title: string;
  text: string;
  image?: string;
  alt?: string;
  crumbs?: Array<[string, string?]>;
  tone?: "default" | "technology" | "education" | "digital-growth";
}) {
  return (
    <section className={`banner page-banner banner-${tone}`}>
      <div className="container banner-grid">
        <div>
          {crumbs && <Breadcrumbs items={crumbs} />}
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="h1">{title}</h1>
          <p className="banner-text">{text}</p>
        </div>
        {image && (
          <div className="banner-image-card">
            <img alt={alt || ""} src={image} style={{ aspectRatio: "16/10", borderRadius: "18px", objectFit: "cover", width: "100%" }} />
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-head">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h2">{title}</h2>
      {text && <p className="muted">{text}</p>}
    </div>
  );
}

export function DivisionCards() {
  return (
    <div className="grid-3">
      {Object.values(divisions).map((division) => (
        <article className="division-card card" key={division.key}>
          <img alt={division.alt} src={division.image} loading="lazy" />
          <span className="pill" style={{ color: division.accent }}>{division.label}</span>
          <h3 className="h3">{division.headline}</h3>
          <p className="muted">{division.description}</p>
          <Link className="button button-primary" href={division.href} style={{ background: division.gradient }}>
            Explore {division.shortLabel}
          </Link>
        </article>
      ))}
    </div>
  );
}

export function FeaturedServices({ limit = 6 }: { limit?: number }) {
  return (
    <div className="grid-3">
      {getAllServices().slice(0, limit).map((service) => (
        <article className="service-card card" key={service.href}>
          <span className="icon-dot" style={{ background: `${service.accent}20`, color: service.accent }}>✦</span>
          <p className="eyebrow" style={{ color: service.accent }}>{service.divisionLabel}</p>
          <h3 className="h3">{service.title}</h3>
          <p className="muted">{service.text}</p>
          <Link href={service.href} className="pill">View service</Link>
        </article>
      ))}
    </div>
  );
}

export function ProcessSection() {
  const palettes = [
    "process-cyan",
    "process-indigo",
    "process-violet",
    "process-slate",
  ];

  return (
    <div className="grid-4 process" style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
      {processSteps.map(([title, text], index) => (
        <article className={`process-card ${palettes[index % palettes.length]}`} key={title}>
          <span className="process-number">{String(index + 1).padStart(2, "0")}</span>
          <h3 className="h3">{title}</h3>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}

export function TrustGrid() {
  return (
    <div className="grid-3">
      {trustItems.map((item) => (
        <div className="card" key={item} style={{ padding: "1.25rem" }}>
          <span className="icon-dot" style={{ background: "rgba(6,182,212,.13)", color: "#06B6D4" }}>✓</span>
          <p style={{ fontWeight: 800 }}>{item}</p>
        </div>
      ))}
    </div>
  );
}

export function InsightGrid({ limit = insightPosts.length }: { limit?: number }) {
  return (
    <div className="grid-3">
      {insightPosts.slice(0, limit).map((post) => (
        <article className="article-card card" key={post.slug}>
          <img alt="" src={post.image} loading="lazy" />
          <span className="pill">{post.category}</span>
          <h3 className="h3">{post.title}</h3>
          <p className="muted">{post.excerpt}</p>
          <Link className="pill" href={`/insights/${post.slug}`}>Read insight</Link>
        </article>
      ))}
    </div>
  );
}

export function CaseStudyGrid() {
  return (
    <div className="grid-3">
      {caseStudies.map((study) => (
        <article className="case-card card" key={study.title}>
          <img alt="" src={study.image} loading="lazy" />
          <span className="pill">{study.type}</span>
          <h3 className="h3">{study.title}</h3>
          <p className="muted"><strong>Challenge:</strong> {study.challenge}</p>
          <p className="muted"><strong>Solution:</strong> {study.solution}</p>
          <p className="muted"><strong>Outcome:</strong> {study.outcome}</p>
        </article>
      ))}
    </div>
  );
}

export function FAQSection({ division }: { division: DivisionKey }) {
  return (
    <div className="grid-3">
      {faqs[division].map(([question, answer]) => (
        <details className="card" key={question} style={{ padding: "1.2rem" }}>
          <summary style={{ cursor: "pointer", fontWeight: 900 }}>{question}</summary>
          <p className="muted">{answer}</p>
        </details>
      ))}
    </div>
  );
}

export function DivisionPage({ division }: { division: DivisionKey }) {
  const data = divisions[division];
  const intro =
    division === "technology"
      ? "For businesses that need a reliable digital product, a better website, or a clearer system behind the scenes."
      : division === "education"
        ? "For students and families who want calm, ethical guidance before making important study decisions."
        : "For businesses that need sharper visibility, stronger content, and campaigns that are easier to measure.";
  const process =
    division === "technology"
      ? [
          ["Scope", "Clarify the product, users, risks and practical first release."],
          ["Design", "Shape the journey, interface and technical approach before build."],
          ["Build", "Deliver in focused stages with review points and support options."],
        ]
      : division === "education"
        ? [
            ["Review", "Understand the student profile, goals and realistic study options."],
            ["Prepare", "Organise courses, documents, statements and interview readiness."],
            ["Guide", "Support next steps while keeping official decisions clearly separate."],
          ]
        : [
            ["Audit", "Review the website, visibility, audience and current marketing gaps."],
            ["Plan", "Prioritise channels, messages, content and tracking foundations."],
            ["Improve", "Launch focused activity and review performance without false promises."],
          ];
  const rowStyles = ["row-cyan", "row-indigo", "row-violet", "row-green"];

  return (
    <>
      <PageBanner
        eyebrow={data.label}
        title={data.headline}
        text={data.description}
        image={data.image}
        alt={data.alt}
        crumbs={[[data.shortLabel]]}
        tone={division}
      />
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="Overview"
            title={intro}
            text="Start with the area that matches your need. Deeper detail is available only when it helps you decide."
          />
          <div className="capability-panel">
            <div className="capability-panel-head">
              <span className="icon-dot" style={{ background: `${data.accent}20`, color: data.accent }}>✦</span>
              <div>
                <h2>{data.shortLabel} capabilities</h2>
                <p>Focused services without the noise.</p>
              </div>
            </div>
            <div className="capability-rows">
              {data.services.slice(0, 4).map((service, index) => (
                <Link className={`capability-row ${rowStyles[index % rowStyles.length]}`} href={`${data.href}/${service.slug}`} key={service.slug}>
                  <span className="row-icon" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{service.title}</strong>
                    <em>{service.text}</em>
                  </span>
                  <b>View</b>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className={`section-tight start-band start-band-${division}`}>
        <div className="container">
          <SectionHeading eyebrow="How it starts" title="A shorter route from enquiry to next step" />
          <div className="start-steps">
            {process.map(([title, text], index) => (
              <article key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container compact-cta">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="h2">Talk through the right fit first.</h2>
            <p className="muted">
              No guarantees, no pressure, and no long form before the basics are clear.
            </p>
          </div>
          <Link className="button button-primary" href="/contact">Book a Consultation</Link>
        </div>
      </section>
    </>
  );
}

export function ServicePage({ division, slug }: { division: DivisionKey; slug: string }) {
  const data = divisions[division];
  const service = data.services.find((item) => item.slug === slug);
  const rowStyles = ["row-cyan", "row-indigo", "row-violet", "row-green"];
  if (!service) return null;

  return (
    <>
      <PageBanner
        eyebrow={data.label}
        title={service.title}
        text={service.text}
        image={data.image}
        alt={data.alt}
        crumbs={[[data.shortLabel, data.href], [service.title]]}
        tone={division}
      />
      <section className="section">
        <div className="container service-detail-layout">
          <div className="service-detail-panel">
            <div className="capability-panel-head">
              <span className="icon-dot" style={{ background: `${data.accent}20`, color: data.accent }}>✦</span>
              <div>
                <p className="eyebrow">Service detail</p>
                <h2>What this can include</h2>
                <p>The exact scope is confirmed after understanding your goals, budget, timeline and responsibilities.</p>
              </div>
            </div>
            <div className="capability-rows">
              {service.items.map((item, index) => (
                <div className={`capability-row detail-row ${rowStyles[index % rowStyles.length]}`} key={item}>
                  <span className="row-icon" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>
                    <strong>{item}</strong>
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="next-step-card">
            <h2 className="h3">Best next step</h2>
            <p className="muted">
              Start with a focused conversation. We will clarify whether this
              service fits your situation, what information is needed and what
              a responsible next step looks like.
            </p>
            <Link className="button button-primary" href="/contact">Request a Call</Link>
          </div>
        </div>
      </section>
      <section className={`section-tight related-band start-band-${division}`}>
        <div className="container">
          <SectionHeading eyebrow="Related services" title={`More from ${data.label}`} />
          <div className="related-service-grid">
            {data.services.filter((item) => item.slug !== slug).slice(0, 3).map((item) => (
              <article className="related-service-card" key={item.slug}>
                <h3 className="h3">{item.title}</h3>
                <p className="muted">{item.text}</p>
                <Link className="pill" href={`${data.href}/${item.slug}`}>View service</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section-tight">
        <div className="container compact-cta">
          <div>
            <p className="eyebrow">Next step</p>
            <h2 className="h2">Start with a simple conversation.</h2>
            <p className="muted">
              We will confirm whether this service is the right fit before any detailed work begins.
            </p>
          </div>
          <Link className="button button-primary" href="/contact">Request a Call</Link>
        </div>
      </section>
    </>
  );
}

export function FinalCTA() {
  return (
    <section className="section final-band">
      <div className="container final-cta">
        <div>
          <p className="eyebrow">Start now</p>
          <h2 className="h2">Let&apos;s Build Your Next Step</h2>
          <p className="muted">
            Tell Astravox what you want to improve. We will help you choose a
            responsible first move.
          </p>
        </div>
        <div className="hero-actions">
          <Link className="button button-primary" href="/contact">Start a Conversation</Link>
          <Link className="button button-secondary outline" href="/">Explore Divisions</Link>
        </div>
      </div>
    </section>
  );
}

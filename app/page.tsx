import type { Metadata } from "next";
import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { divisions, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Technology, Education and Digital Growth",
  description:
    "Astravox helps businesses build digital products, supports students through international education, and enables brands to grow through digital marketing.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <section className="hero home-hero">
        <div className="container simple-home">
          <div className="hero-copy home-intro">
            <BrandMark />
            <p className="eyebrow">One Astravox brand</p>
            <h1 className="display">Technology, education and growth under one clear vision</h1>
            <p className="lead">
              Astravox helps organisations build better digital systems,
              supports students planning international study, and helps brands
              grow with practical marketing.
            </p>
            <div className="home-trust-strip" aria-label="Astravox service signals">
              <span>Glasgow-based</span>
              <span>UK and international clients</span>
              <span>Technology, education and digital growth</span>
            </div>
          </div>
          <div className="pathway-grid" aria-label="Astravox divisions">
            <Link className="pathway-card pathway-tech" href="/technology">
              <span className="pathway-kicker">Build with us</span>
              <strong>Astravox Technology</strong>
              <span>Software, websites, apps, cloud systems and automation.</span>
            </Link>
            <Link className="pathway-card pathway-education" href="/education">
              <span className="pathway-kicker">Plan your study</span>
              <strong>Astravox Education</strong>
              <span>University applications, statements, interviews and study planning.</span>
            </Link>
            <Link className="pathway-card pathway-growth" href="/digital-growth">
              <span className="pathway-kicker">Grow your brand</span>
              <strong>Astravox Digital Growth</strong>
              <span>SEO, campaigns, content, branding and marketing support.</span>
            </Link>
          </div>
          <div className="hero-actions">
            <Link className="button button-secondary" href="/about">About Astravox</Link>
            <Link className="button button-ghost" href="/contact">Book a Consultation</Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Astravox",
            url: siteConfig.siteUrl,
            areaServed: siteConfig.serviceArea,
            sameAs: [siteConfig.linkedin, siteConfig.instagram].filter(Boolean),
            department: Object.values(divisions).map((division) => ({
              "@type": "Organization",
              name: division.label,
              url: `${siteConfig.siteUrl}${division.href}`,
            })),
          }),
        }}
      />
    </>
  );
}

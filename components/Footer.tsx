import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { divisions, siteConfig } from "@/lib/site";

const companyLinks = [
  ["About", "/about"],
  ["Case Studies", "/case-studies"],
  ["Insights", "/insights"],
  ["Careers", "/careers"],
  ["Contact", "/contact"],
  ["Privacy Policy", "/privacy"],
  ["Cookie Policy", "/cookies"],
  ["Terms", "/terms"],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="logo" href="/">
            <BrandMark />
          </Link>
          <p className="muted">
            Astravox connects technology, education guidance and digital growth
            through one clear UK-based brand.
          </p>
          <p className="muted">Service area: {siteConfig.serviceArea}.</p>
          <p className="muted">
            General enquiries: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          </p>
          <p className="muted">
            Recruitment: <a href={`mailto:${siteConfig.careersEmail}`}>{siteConfig.careersEmail}</a>
          </p>
        </div>
        {Object.values(divisions).map((division) => (
          <div key={division.key}>
            <h3>{division.shortLabel}</h3>
            <div className="list">
              <Link href={division.href}>{division.label}</Link>
              {division.services.slice(0, 4).map((service) => (
                <Link key={service.slug} href={`${division.href}/${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div>
          <h3>Company</h3>
          <div className="list">
            {companyLinks.map(([label, href]) => (
              <Link key={href} href={href}>{label}</Link>
            ))}
          </div>
        </div>
      </div>
      <div className="container" style={{ marginTop: "2.4rem" }}>
        <p className="muted">
          © {siteConfig.copyrightYear} Astravox. Glasgow-based support for
          technology, education and digital growth enquiries. For contact, email{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
      </div>
    </footer>
  );
}

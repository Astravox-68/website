import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FinalCTA, PageBanner } from "@/components/Sections";
import { insightPosts, siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return insightPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = insightPosts.find((item) => item.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/insights/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function InsightArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = insightPosts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageBanner
        eyebrow={post.category}
        title={post.title}
        text={post.excerpt}
        image={post.image}
        crumbs={[["Insights", "/insights"], [post.title]]}
      />
      <article className="section">
        <div className="container">
          <div className="legal">
            <p>
              This starter article is intentionally concise. It gives Astravox a
              useful publishing structure without pretending to have detailed
              proprietary research or verified client data that has not yet been
              supplied.
            </p>
            <h2>What to consider first</h2>
            <p>
              Start with the goal, the audience and the decision that needs to
              be made. A good Astravox article should help readers understand
              trade-offs, avoid unrealistic promises and decide whether a
              consultation would be useful.
            </p>
            <h2>How Astravox can help</h2>
            <p>
              Astravox can support this topic through a clear discovery process,
              practical planning and transparent next steps. Specific costs,
              timelines, eligibility or campaign outcomes should be confirmed
              only after reviewing the real situation.
            </p>
          </div>
        </div>
      </article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.excerpt,
            image: post.image,
            author: { "@type": "Organization", name: "Astravox" },
            publisher: { "@type": "Organization", name: "Astravox" },
            mainEntityOfPage: `${siteConfig.siteUrl}/insights/${post.slug}`,
          }),
        }}
      />
      <FinalCTA />
    </>
  );
}

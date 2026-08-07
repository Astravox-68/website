import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/Sections";
import { divisions } from "@/lib/site";

export function generateStaticParams() {
  return divisions["digital-growth"].services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = divisions["digital-growth"].services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.text,
    alternates: { canonical: `/digital-growth/${service.slug}` },
  };
}

export default async function DigitalServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!divisions["digital-growth"].services.some((item) => item.slug === slug)) notFound();
  return <ServicePage division="digital-growth" slug={slug} />;
}

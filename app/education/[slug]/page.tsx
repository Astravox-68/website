import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicePage } from "@/components/Sections";
import { divisions } from "@/lib/site";

export function generateStaticParams() {
  return divisions.education.services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = divisions.education.services.find((item) => item.slug === slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.text,
    alternates: { canonical: `/education/${service.slug}` },
  };
}

export default async function EducationServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!divisions.education.services.some((item) => item.slug === slug)) notFound();
  return <ServicePage division="education" slug={slug} />;
}

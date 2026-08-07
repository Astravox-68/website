import type { Metadata } from "next";
import { DivisionPage } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Digital Marketing and Growth",
  description: "Astravox Digital Growth helps businesses improve visibility, strengthen their brand and plan practical marketing campaigns.",
  alternates: { canonical: "/digital-growth" },
};

export default function DigitalGrowthPage() {
  return <DivisionPage division="digital-growth" />;
}

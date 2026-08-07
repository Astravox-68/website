import type { Metadata } from "next";
import { DivisionPage } from "@/components/Sections";

export const metadata: Metadata = {
  title: "IT and Software Solutions",
  description: "Astravox Technology builds websites, mobile applications, cloud solutions, custom software and practical automation for growing organisations.",
  alternates: { canonical: "/technology" },
};

export default function TechnologyPage() {
  return <DivisionPage division="technology" />;
}

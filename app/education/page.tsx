import type { Metadata } from "next";
import { DivisionPage } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Student Consultancy",
  description: "Astravox Education supports students with university selection, applications, personal statements, interviews and international study planning.",
  alternates: { canonical: "/education" },
};

export default function EducationPage() {
  return <DivisionPage division="education" />;
}

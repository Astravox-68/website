import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { AnalyticsLoader } from "@/components/AnalyticsLoader";
import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Astravox | Technology, Education and Digital Growth",
    template: "%s | Astravox",
  },
  description:
    "Astravox supports businesses with software, students with international education guidance, and brands with practical digital marketing.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Astravox | Technology, Education and Digital Growth",
    description:
      "One UK-based brand for software solutions, student consultancy and digital growth.",
    url: siteConfig.siteUrl,
    siteName: "Astravox",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Astravox Technology, Education and Digital Growth",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Astravox",
    description: "Technology, education and digital growth connected by one vision.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  verification: siteConfig.searchConsoleVerification
    ? { google: siteConfig.searchConsoleVerification }
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <div className="brand-topbar" aria-hidden="true" />
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <AnalyticsLoader />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}

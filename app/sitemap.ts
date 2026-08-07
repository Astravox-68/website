import type { MetadataRoute } from "next";
import { divisions, insightPosts, siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/about", "/technology", "/education", "/digital-growth", "/case-studies", "/insights", "/contact", "/privacy", "/cookies", "/terms"];
  const serviceRoutes = Object.values(divisions).flatMap((division) =>
    division.services.map((service) => `${division.href}/${service.slug}`),
  );
  const insightRoutes = insightPosts.map((post) => `/insights/${post.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...insightRoutes].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}

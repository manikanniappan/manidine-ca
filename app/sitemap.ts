// FILE: app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://manidine.ca";

  const routes = [
    "",
    "/restaurants",
    "/drivers",
    "/pricing",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}

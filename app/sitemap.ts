// ManiDine.ca /app/sitemap.ts — Updated: 2026-05-07 16:18 (America/Edmonton)
// FILE: app/sitemap.ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://manidine.ca";

  const routes = [
    { path: "", priority: 1.0 },
    { path: "/restaurants", priority: 0.9 },
    { path: "/drivers", priority: 0.9 },
    { path: "/pricing", priority: 0.9 },
    { path: "/contact", priority: 0.8 },
    { path: "/faq", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/founder", priority: 0.6 },
    { path: "/privacy", priority: 0.5 },
    { path: "/terms", priority: 0.5 },
    { path: "/refund", priority: 0.5 },
    { path: "/data-deletion", priority: 0.5 },
  ];

  const now = new Date();

  return routes.map(({ path, priority }) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "daily" : "weekly",
    priority,
  }));
}

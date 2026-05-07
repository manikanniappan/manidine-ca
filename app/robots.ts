// ManiDine.ca /app/robots.ts — Updated: 2026-05-07 16:18 (America/Edmonton)
// FILE: app/robots.ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: "https://manidine.ca/sitemap.xml",
    host: "https://manidine.ca",
  };
}

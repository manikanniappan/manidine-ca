// FILE: app/manifest.ts
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ManiDine",
    short_name: "ManiDine",
    description:
      "Transparent food delivery for customers, restaurants, and drivers. Edmonton-first.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1220",
    theme_color: "#0f1b2e",
    icons: [
      { src: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
      { src: "/icons/icon-512-maskable.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}

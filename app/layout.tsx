// ManiDine.ca /app/layout.tsx — Updated: 2026-01-12 12:55 (America/Edmonton)
// FILE: app/layout.tsx

import type { Metadata, Viewport } from "next";
import "./globals.css";

import SiteHeader from "@/components/SiteHeader";
import Analytics from "../components/Analytics";
import Footer from "../components/Footer";

import { Poppins, Caveat } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-poppins",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://manidine.ca"),
  title: {
    default: "ManiDine — Fair food delivery for customers, restaurants, and drivers",
    template: "%s | ManiDine",
  },
  description:
    "ManiDine is Edmonton-first, transparent food delivery with fair pricing: in-store menu pricing, flat service fees, no hidden fees, and drivers keep 100% tips.",
  applicationName: "ManiDine",
  keywords: [
    "ManiDine",
    "food delivery Edmonton",
    "commission free food delivery",
    "restaurant delivery platform",
    "delivery drivers",
    "transparent pricing",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://manidine.ca",
    siteName: "ManiDine",
    title: "ManiDine — Fair food delivery for customers, restaurants, and drivers",
    description:
      "Edmonton-first, transparent food delivery with fair pricing and no hidden fees.",
    images: [
      {
        url: "/og/og.png",
        width: 1200,
        height: 630,
        alt: "ManiDine — Transparent food delivery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ManiDine — Fair food delivery",
    description:
      "Edmonton-first, transparent food delivery with fair pricing and no hidden fees.",
    images: ["/og/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0f1b2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${caveat.variable}`}>
      {/* Keep Poppins as the global default font */}
      <body className="font-[var(--font-poppins),Poppins,Arial,sans-serif]">
        <SiteHeader />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}

// ManiDine.ca /app/layout.tsx — Updated: 2026-05-07 16:18 (America/Edmonton)
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
    default: "ManiDine | Edmonton Food Delivery with Honest Pricing",
    template: "%s | ManiDine",
  },
  description:
    "ManiDine is an Edmonton-first food delivery platform with in-store menu pricing, a flat $1.99 service fee, clear delivery fees, and drivers keeping 100% of delivery fees and tips.",
  applicationName: "ManiDine",
  keywords: [
    "ManiDine",
    "food delivery Edmonton",
    "Edmonton food delivery",
    "restaurant delivery platform",
    "delivery drivers Edmonton",
    "transparent food delivery pricing",
    "commission free restaurant delivery",
  ],
  openGraph: {
    type: "website",
    url: "https://manidine.ca",
    siteName: "ManiDine",
    title: "ManiDine | Edmonton Food Delivery with Honest Pricing",
    description:
      "Edmonton-first food delivery with in-store menu pricing, clear fees, and drivers keeping 100% of delivery fees and tips.",
    images: [
      {
        url: "/og/og.png",
        width: 1200,
        height: 630,
        alt: "ManiDine — Edmonton food delivery with honest pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ManiDine | Edmonton Food Delivery",
    description:
      "In-store menu pricing, clear fees, and drivers keeping 100% of delivery fees and tips.",
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

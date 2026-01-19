// ManiDine.ca /app/pricing/page.tsx — Updated: 2026-01-12 20:20 (America/Edmonton)
// FILE: app/pricing/page.tsx

import Link from "next/link";

export default function PricingPage() {
  return (
    <main style={pageWrap}>
      {/* SiteHeader + Footer are global in app/layout.tsx */}

      {/* Hero (NO box, moved slightly up) */}
      <section style={heroPlain}>
        <h1 style={heroTitle}>
          Radically <span style={transparentWord}>Transparent</span> Pricing
        </h1>

        <p style={heroSub}>
          Clear numbers. No hidden fees. No inflated menus. Built for long-term fairness across
          customers, drivers, and restaurants.
        </p>
      </section>

      {/* Main cards */}
      <section style={grid}>
        <PricingCard
          title="Customers"
          titleTone="customers"
          subtitle="Pay exactly what the restaurant charges."
          bullets={[
            { text: "Same as in-store menu prices (no inflation)", highlight: true },
            { text: "GST (5%) as per government tax rate", highlight: false },
            { text: "Delivery fee: $2.50 + $0.57/km (Min $3.99 • Max $14.99)", highlight: false },
            { text: "100% of delivery fee goes to the driver", highlight: true },
            { text: "100% of tips go to the driver", highlight: true },
            { text: "Service fee: $1.99 (the only ManiDine fee)", highlight: true },
            { text: "No hidden charges", highlight: true },
          ]}
          ctaText="Download the app (Coming Soon)"
          ctaHref="/contact"
        />

        <PricingCard
          title="Drivers"
          titleTone="drivers"
          subtitle="Keep what you earn."
          bullets={[
            { text: "100% delivery fees + 100% tips", highlight: true },
            { text: "No commission taken from delivery or tips", highlight: true },
            { text: "Platform contribution: 10% of monthly earnings", highlight: false },
            { text: "Capped at $20/month", highlight: true },
            { text: "Pay only if you earn", highlight: true },
          ]}
          ctaText="Apply as a driver"
          ctaHref="/drivers"
        />

        <PricingCard
          title="Restaurants"
          titleTone="restaurants"
          subtitle="Zero commission, period."
          bullets={[
            { text: "$200/month membership", highlight: false },
            { text: "$0.99 service fee per order", highlight: false },
            { text: "Stripe processing fee (actual cost only) — pass-through, no markup", highlight: true },
            { text: "0% commission", highlight: true },
            { text: "Menu prices must match in-store pricing (no inflation)", highlight: true },
          ]}
          ctaText="Partner with us"
          ctaHref="/restaurants"
        />
      </section>

      {/* Pricing Promise (CENTER aligned, NO box) */}
      <section style={promisePlain}>
        <h2 style={promiseTitle}>Our pricing promise</h2>

        <ul style={promiseListCentered}>
          <li>Fees should be easy to understand at checkout.</li>
          <li>Restaurants should keep more of their earnings.</li>
          <li>Drivers should see clear payouts.</li>
          <li>No hidden “gotcha” charges.</li>
        </ul>

        <div style={promiseButtons}>
          <Link href="/contact" style={btnPrimary}>
            Contact ManiDine
          </Link>
          <Link href="/faq" style={btnSecondary}>
            Read FAQ
          </Link>
        </div>
      </section>
    </main>
  );
}

function PricingCard({
  title,
  titleTone,
  subtitle,
  bullets,
  ctaText,
  ctaHref,
}: {
  title: string;
  titleTone: "customers" | "drivers" | "restaurants";
  subtitle: string;
  bullets: { text: string; highlight: boolean }[];
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <div style={card}>
      <div style={cardTop}>
        {/* Center-aligned heading + subtext */}
        <div style={cardHeader}>
          <div style={{ ...cardTitle, ...toneTitle(titleTone) }}>{title}</div>
          <div style={cardSub}>{subtitle}</div>
        </div>

        <div style={cardBody}>
          <ul style={bulletList}>
            {bullets.map((b, i) => (
              <li key={`${i}-${b.text}`} style={bulletItem}>
                <span style={iconSlot}>{b.highlight ? "✅" : "•"}</span>
                <span style={bulletText}>{b.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Button baseline aligned across all cards */}
      <div style={cardCtaRow}>
        <Link href={ctaHref} style={btnPrimary}>
          {ctaText}
        </Link>
      </div>
    </div>
  );
}

function toneTitle(tone: "customers" | "drivers" | "restaurants"): React.CSSProperties {
  if (tone === "customers") {
    return { color: "#8cc7ff", textShadow: "0 0 18px rgba(15,113,212,0.35)" };
  }
  if (tone === "drivers") {
    return { color: "#d7b7ff", textShadow: "0 0 18px rgba(204,71,206,0.35)" };
  }
  return { color: "#ffd2a6", textShadow: "0 0 18px rgba(192,67,9,0.28)" };
}

/* ---------------- Styles ---------------- */

const pageWrap: React.CSSProperties = {
  minHeight: "100vh",
  background: "#0b0f1a",
  color: "#eaf2ff",
  padding: "18px 20px 60px",
};

const heroPlain: React.CSSProperties = {
  maxWidth: 1100,
  margin: "18px auto 0",
  padding: "6px 0 6px",
  textAlign: "center",
};

const heroTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 40,
  fontWeight: 950,
  letterSpacing: -0.4,
  lineHeight: 1.15,
};

const transparentWord: React.CSSProperties = {
  backgroundImage: "linear-gradient(135deg, #0f71d4, #cc47ce)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

const heroSub: React.CSSProperties = {
  margin: "10px auto 0",
  maxWidth: 820,
  opacity: 0.9,
  lineHeight: 1.65,
  fontSize: 15.5,
};

const grid: React.CSSProperties = {
  maxWidth: 1100,
  margin: "18px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: 16,
};

const card: React.CSSProperties = {
  padding: 18,
  borderRadius: 16,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.14)",
  boxShadow: "0 0 0 1px rgba(15,113,212,0.10), 0 12px 30px rgba(0,0,0,0.25)",
  display: "flex",
  flexDirection: "column",
  minHeight: 320,
};

const cardTop: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
};

const cardHeader: React.CSSProperties = {
  textAlign: "center",
  paddingBottom: 6,
};

const cardTitle: React.CSSProperties = {
  fontWeight: 950,
  fontSize: 18,
  letterSpacing: 0.2,
};

const cardSub: React.CSSProperties = {
  marginTop: 6,
  opacity: 0.95,
  fontWeight: 900,
  fontSize: 14,
  color: "rgba(234,242,255,0.92)",
};

const cardBody: React.CSSProperties = {
  flexGrow: 1,
  marginTop: 6,
};

const bulletList: React.CSSProperties = {
  margin: 0,
  paddingLeft: 0,
  listStyle: "none",
  lineHeight: 1.8,
  opacity: 0.92,
};

const bulletItem: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  padding: "6px 0",
};

const iconSlot: React.CSSProperties = {
  width: 18,
  flexShrink: 0,
  marginTop: 1,
  opacity: 0.95,
};

const bulletText: React.CSSProperties = {
  flex: 1,
};

const cardCtaRow: React.CSSProperties = {
  marginTop: 14,
};

/* NEW: pricing promise plain section */
const promisePlain: React.CSSProperties = {
  maxWidth: 1100,
  margin: "34px auto 0",
  padding: "6px 0 0",
  textAlign: "center",
};

const promiseTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 22,
  fontWeight: 950,
};

const promiseListCentered: React.CSSProperties = {
  margin: "14px auto 0",
  paddingLeft: 0,
  listStyle: "none",
  lineHeight: 2.0,
  opacity: 0.88,
  maxWidth: 760,
};

const promiseButtons: React.CSSProperties = {
  marginTop: 18,
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  justifyContent: "center",
};

const btnPrimary: React.CSSProperties = {
  background: "linear-gradient(135deg, #0f71d4, #cc47ce)",
  color: "#0b0f1a",
  fontWeight: 950,
  padding: "12px 16px",
  borderRadius: 12,
  textDecoration: "none",
  display: "inline-block",
};

const btnSecondary: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.3)",
  padding: "12px 16px",
  borderRadius: 12,
  textDecoration: "none",
  color: "#eaf2ff",
  fontWeight: 900,
  display: "inline-block",
};

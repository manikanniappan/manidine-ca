// ManiDine.ca /app/pricing/page.tsx — Updated: 2026-05-07 15:40 (America/Edmonton)
// FILE: app/pricing/page.tsx

import Link from "next/link";

export default function PricingPage() {
  return (
    <main style={pageWrap}>
      {/* SiteHeader + Footer are global in app/layout.tsx */}

      <section style={heroPlain}>
        <h1 style={heroTitle}>
          Radically <span style={transparentWord}>Transparent</span> Pricing
        </h1>

        <p style={heroSub}>
          Clear numbers. No hidden fees. No inflated menus. Built for long-term fairness across
          customers, drivers, and restaurants.
        </p>
      </section>

      <section style={grid}>
        <PricingCard
          title="Customers"
          titleTone="customers"
          subtitle="Pay exactly what the restaurant charges."
          bullets={[
            "Same as in-store menu prices — no menu inflation",
            "GST (5%) as per government tax rate",
            "Delivery fee: $1.99 base + $0.65/km, customer-friendly rounded",
            "Delivery fee minimum $2.99 and capped at $9.99",
            "100% of the delivery fee goes to the driver",
            "100% of tips go to the driver",
            "Service fee: $1.99 flat ManiDine fee",
            "No hidden ManiDine charges",
          ]}
          ctaLinks={[
            {
              label: " App Store",
              href: "https://apps.apple.com/us/app/manidine/id6758255262",
              external: true,
            },
            {
              label: "▶ Google Play",
              href: "https://play.google.com/store/apps/details?id=com.manidine.customer",
              external: true,
            },
          ]}
        />

        <PricingCard
          title="Drivers"
          titleTone="drivers"
          subtitle="Keep what you earn."
          bullets={[
            "Keep 100% of delivery fees and 100% of tips",
            "ManiDine takes no commission from delivery fees or tips",
            "Platform fee is 10% of monthly ManiDine delivery-fee earnings",
            "Drivers never pay more than $20/month in platform fees",
            "Tips are never included in the platform fee calculation",
            "Delivery fee and tip amounts are shown transparently",
            "Pay only when you earn through ManiDine",
          ]}
          ctaLinks={[
            {
              label: " Driver App Store",
              href: "https://apps.apple.com/us/app/manidinedriver/id6763635631",
              external: true,
            },
            {
              label: "▶ Driver Google Play",
              href: "https://play.google.com/store/apps/details?id=com.manidine.ManiDineDriver",
              external: true,
            },
          ]}
        />

        <PricingCard
          title="Restaurants"
          titleTone="restaurants"
          subtitle="No percentage commission."
          bullets={[
            "$1.99 flat ManiDine service fee per order",
            "0% commission on restaurant menu sales",
            "$200/month membership only when you receive ManiDine sales",
            "Membership is 10% of monthly ManiDine sales, capped at $200/month",
            "If ManiDine sales are $1,000/month, membership is $100 that month",
            "If ManiDine sales are $5,000/month, membership is capped at $200 that month",
            "Restaurants are responsible only for standard external payment processing fees charged by Stripe. ManiDine does not add markup or take any percentage from these fees",
            "Menu prices must match in-store pricing — no inflation",
          ]}
          ctaLinks={[
            {
              label: "Partner with us",
              href: "https://portal.manidine.ca/signup",
              external: true,
            },
          ]}
        />
      </section>

      <section style={foundingGrid}>
        <div style={foundingBox}>
          <div style={foundingKicker}>Founding Driver Program</div>
          <p style={foundingText}>
            The first 50 drivers who complete 50 deliveries become ManiDine
            Founding Drivers and never pay monthly platform fees after ManiDine
            reaches 1,000 Edmonton restaurant partners.
          </p>
        </div>

        <div style={foundingBox}>
          <div style={foundingKicker}>Restaurant Founding Members</div>
          <p style={foundingText}>
            The first 100 approved restaurant partners who complete 50 orders
            become ManiDine Founding Members and receive a lifetime waiver of the
            monthly membership fee once ManiDine reaches 1,000 Edmonton
            restaurant partners.
          </p>
        </div>
      </section>

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

type CtaLink = {
  label: string;
  href: string;
  external?: boolean;
};

function PricingCard({
  title,
  titleTone,
  subtitle,
  bullets,
  ctaLinks,
}: {
  title: string;
  titleTone: "customers" | "drivers" | "restaurants";
  subtitle: string;
  bullets: string[];
  ctaLinks: CtaLink[];
}) {
  return (
    <div style={card}>
      <div style={cardTop}>
        <div style={cardHeader}>
          <div style={{ ...cardTitle, ...toneTitle(titleTone) }}>{title}</div>
          <div style={cardSub}>{subtitle}</div>
        </div>

        <div style={cardBody}>
          <ul style={bulletList}>
            {bullets.map((text, i) => (
              <li key={`${i}-${text}`} style={bulletItem}>
                <span style={iconSlot}>✅</span>
                <span style={bulletText}>{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={cardCtaRow}>
        {ctaLinks.map((cta) =>
          cta.external ? (
            <a
              key={cta.href}
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              style={btnPrimary}
            >
              {cta.label}
            </a>
          ) : (
            <Link key={cta.href} href={cta.href} style={btnPrimary}>
              {cta.label}
            </Link>
          )
        )}
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
  lineHeight: 1.75,
  opacity: 0.92,
};

const bulletItem: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  padding: "5px 0",
};

const iconSlot: React.CSSProperties = {
  width: 20,
  flexShrink: 0,
  marginTop: 1,
  opacity: 0.95,
};

const bulletText: React.CSSProperties = {
  flex: 1,
};

const cardCtaRow: React.CSSProperties = {
  marginTop: 14,
  display: "flex",
  flexWrap: "wrap",
  gap: 10,
};


const foundingGrid: React.CSSProperties = {
  maxWidth: 1100,
  margin: "18px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 16,
};

const foundingBox: React.CSSProperties = {
  borderRadius: 18,
  padding: 18,
  background:
    "linear-gradient(135deg, rgba(15,113,212,0.16), rgba(204,71,206,0.14))",
  border: "1px solid rgba(255,255,255,0.16)",
  boxShadow: "0 14px 34px rgba(0,0,0,0.28)",
};

const foundingKicker: React.CSSProperties = {
  fontSize: 14,
  fontWeight: 950,
  letterSpacing: 0.3,
  backgroundImage: "linear-gradient(135deg, #6fb0ff, #bc5bca, #ff7adf)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

const foundingText: React.CSSProperties = {
  margin: "8px 0 0",
  lineHeight: 1.6,
  fontSize: 14,
  fontWeight: 700,
  color: "rgba(234,242,255,0.9)",
};

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
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 148,
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

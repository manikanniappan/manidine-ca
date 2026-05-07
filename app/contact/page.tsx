// ManiDine.ca (Next.js) /app/contact/page.tsx — Updated 2026-05-07 12:25 (America/Edmonton)
// FILE: app/contact/page.tsx

import Link from "next/link";

const CUSTOMER_IOS_LINK = "https://apps.apple.com/us/app/manidine/id6758255262";
const CUSTOMER_ANDROID_LINK =
  "https://play.google.com/store/apps/details?id=com.manidine.customer";
const DRIVER_IOS_LINK =
  "https://apps.apple.com/us/app/manidinedriver/id6763635631";
const DRIVER_ANDROID_LINK =
  "https://play.google.com/store/apps/details?id=com.manidine.ManiDineDriver";
const RESTAURANT_SIGNUP_LINK = "https://portal.manidine.ca/signup";
const MANIDINE_PHONE_DISPLAY = "587-570-8552";
const MANIDINE_PHONE_LINK = "tel:+15875708552";
const MANIDINE_EMAIL = "contact@manidine.ca";

export default function ContactPage() {
  return (
    <main style={wrap}>
      <section style={hero}>
        <div style={eyebrow}>Edmonton-owned • Local support</div>
        <h1 style={title}>Contact ManiDine</h1>
        <p style={sub}>
          Have a question about joining ManiDine as a restaurant, driver,
          customer, or partner? Reach us directly using the options below.
        </p>
      </section>

      <section style={box}>
        <div style={featuredCard}>
          <div>
            <div style={sectionLabel}>Fastest way to reach us</div>
            <h2 style={h2}>Talk to ManiDine directly</h2>
            <p style={bodyText}>
              For restaurant onboarding, driver questions, customer support, or
              partnership inquiries, please call or email us.
            </p>
          </div>

          <div style={contactGrid}>
            <a href={MANIDINE_PHONE_LINK} style={contactTile}>
              <span style={tileIcon}>☎</span>
              <span>
                <span style={tileTitle}>Call ManiDine</span>
                <span style={tileText}>{MANIDINE_PHONE_DISPLAY}</span>
              </span>
            </a>

            <a href={`mailto:${MANIDINE_EMAIL}`} style={contactTile}>
              <span style={tileIcon}>✉</span>
              <span>
                <span style={tileTitle}>Email ManiDine</span>
                <span style={tileText}>{MANIDINE_EMAIL}</span>
              </span>
            </a>
          </div>
        </div>

        <div style={twoColumnGrid}>
          <div style={card}>
            <div style={cardIcon}>🍽️</div>
            <h2 style={cardTitle}>Restaurants</h2>
            <p style={cardText}>
              Join ManiDine with in-store menu pricing, no 25–30% commission,
              and transparent fees built for local restaurants.
            </p>
            <a
              href={RESTAURANT_SIGNUP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={primaryButton}
            >
              Apply as a restaurant
            </a>
            <p style={smallNote}>
              Approved restaurants receive portal access during onboarding.
            </p>
          </div>

          <div style={card}>
            <div style={cardIcon}>🚗</div>
            <h2 style={cardTitle}>Drivers</h2>
            <p style={cardText}>
              Drivers keep 100% of delivery fees and tips. Download the
              ManiDine Driver app to get ready for Edmonton launch.
            </p>
            <div style={buttonRow}>
              <a
                href={DRIVER_IOS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={primaryButton}
              >
                 App Store
              </a>
              <a
                href={DRIVER_ANDROID_LINK}
                target="_blank"
                rel="noopener noreferrer"
                style={primaryButton}
              >
                ▶ Google Play
              </a>
            </div>
          </div>
        </div>

        <div style={customerCard}>
          <div>
            <h2 style={cardTitle}>Customers</h2>
            <p style={cardText}>
              Download the ManiDine customer app today. We’ll notify you when
              ordering goes live in your Edmonton area.
            </p>
          </div>
          <div style={customerButtons}>
            <a
              href={CUSTOMER_IOS_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={primaryButton}
            >
               App Store
            </a>
            <a
              href={CUSTOMER_ANDROID_LINK}
              target="_blank"
              rel="noopener noreferrer"
              style={primaryButton}
            >
              ▶ Google Play
            </a>
          </div>
        </div>

        <div style={bottomLinks}>
          <Link href="/restaurants" style={textLink}>
            Learn more for restaurants
          </Link>
          <Link href="/drivers" style={textLink}>
            Learn more for drivers
          </Link>
        </div>
      </section>
    </main>
  );
}

const gradientText: React.CSSProperties = {
  background: "linear-gradient(90deg, #0f71d4 0%, #8A31FF 45%, #FF4FDA 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  color: "transparent",
};

const wrap: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(900px 420px at 18% 0%, rgba(15,113,212,0.22), transparent 60%), radial-gradient(900px 420px at 82% 0%, rgba(255,79,218,0.18), transparent 60%), #070b16",
  color: "white",
  paddingBottom: 80,
};

const hero: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "78px 24px 26px",
  textAlign: "center",
};

const eyebrow: React.CSSProperties = {
  ...gradientText,
  display: "inline-block",
  fontSize: 13,
  fontWeight: 900,
  letterSpacing: 0.5,
  textTransform: "uppercase",
};

const title: React.CSSProperties = {
  margin: "12px 0 0",
  fontSize: "clamp(38px, 6vw, 64px)",
  lineHeight: 1.02,
  fontWeight: 950,
  letterSpacing: -1.2,
};

const sub: React.CSSProperties = {
  margin: "18px auto 0",
  maxWidth: 760,
  opacity: 0.86,
  lineHeight: 1.65,
  fontSize: 16,
};

const box: React.CSSProperties = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "0 24px",
};

const featuredCard: React.CSSProperties = {
  borderRadius: 28,
  background:
    "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.055))",
  border: "1px solid rgba(255,255,255,0.12)",
  padding: 26,
  boxShadow: "0 24px 80px rgba(0,0,0,0.34)",
  backdropFilter: "blur(14px)",
};

const sectionLabel: React.CSSProperties = {
  ...gradientText,
  display: "inline-block",
  fontSize: 12,
  fontWeight: 900,
  textTransform: "uppercase",
  letterSpacing: 0.5,
  marginBottom: 8,
};

const h2: React.CSSProperties = {
  margin: 0,
  fontSize: 26,
  fontWeight: 950,
};

const bodyText: React.CSSProperties = {
  marginTop: 10,
  maxWidth: 760,
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.65,
};

const contactGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 14,
  marginTop: 22,
};

const contactTile: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: 18,
  borderRadius: 20,
  background: "rgba(255,255,255,0.075)",
  border: "1px solid rgba(255,255,255,0.11)",
  color: "white",
  textDecoration: "none",
};

const tileIcon: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 42,
  height: 42,
  borderRadius: 999,
  background: "linear-gradient(135deg, #0f71d4, #FF4FDA)",
  fontSize: 18,
  flexShrink: 0,
};

const tileTitle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 900,
  color: "rgba(255,255,255,0.78)",
};

const tileText: React.CSSProperties = {
  display: "block",
  marginTop: 3,
  fontSize: 17,
  fontWeight: 950,
};

const twoColumnGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 18,
  marginTop: 18,
};

const card: React.CSSProperties = {
  borderRadius: 24,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.11)",
  padding: 24,
};

const customerCard: React.CSSProperties = {
  ...card,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  gap: 18,
  flexWrap: "wrap",
  marginTop: 18,
};

const cardIcon: React.CSSProperties = {
  width: 44,
  height: 44,
  borderRadius: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.1)",
  marginBottom: 14,
  fontSize: 21,
};

const cardTitle: React.CSSProperties = {
  margin: 0,
  fontSize: 21,
  fontWeight: 950,
};

const cardText: React.CSSProperties = {
  marginTop: 10,
  color: "rgba(255,255,255,0.78)",
  lineHeight: 1.6,
};

const primaryButton: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: 18,
  borderRadius: 999,
  padding: "12px 18px",
  background: "linear-gradient(90deg, #8A31FF 0%, #B23BFF 45%, #FF4FDA 100%)",
  color: "white",
  fontWeight: 900,
  textDecoration: "none",
  boxShadow: "0 12px 30px rgba(0,0,0,0.28)",
};

const buttonRow: React.CSSProperties = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
};

const customerButtons: React.CSSProperties = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
};

const smallNote: React.CSSProperties = {
  margin: "12px 0 0",
  color: "rgba(255,255,255,0.58)",
  fontSize: 12,
  lineHeight: 1.5,
};

const bottomLinks: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: 18,
  flexWrap: "wrap",
  marginTop: 28,
};

const textLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.82)",
  textDecoration: "underline",
  textUnderlineOffset: 5,
  fontWeight: 800,
};

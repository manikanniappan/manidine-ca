// ManiDine.ca — app/drivers/page.tsx — Updated: 2026-01-18 16:50 (America/Edmonton)
import Link from "next/link";

export default function DriversPage() {
  return (
    <main style={pageWrap}>
      {/* Global SiteHeader + Footer are rendered in app/layout.tsx */}
      <section style={hero}>
        <h1 style={h1}>For Drivers</h1>
        <p style={sub}>
          ManiDine is building a fair platform for delivery drivers — clear payouts,
          simple delivery flow, and respectful operations. Launching in Edmonton.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
          <Link href="/contact" style={btnPrimary}>
            Apply / Join waitlist
          </Link>
          <Link href="/faq" style={btnSecondary}>
            Read FAQ
          </Link>
        </div>
      </section>

      <section style={grid}>
        <Card
          title="Clear payouts"
          desc="No confusing calculations. You’ll know what you earn per delivery."
        />
        <Card
          title="Simple workflow"
          desc="Accept → pick up → drop off. Designed to be fast and frustration-free."
        />
        <Card
          title="Respect for your time"
          desc="Fair policies and a platform that values consistency and transparency."
        />
      </section>

      <section style={box}>
        <h2 style={h2}>Driver requirements (initial)</h2>
        <ul style={list}>
          <li>Valid driver’s license</li>
          <li>Vehicle (car) or bike (depending on area)</li>
          <li>Phone with data plan</li>
          <li>Ability to pass basic verification</li>
        </ul>

        <p style={{ marginTop: 12, opacity: 0.85, lineHeight: 1.6 }}>
          We’ll publish full onboarding steps and required documents closer to launch.
        </p>

        <div style={{ marginTop: 18 }}>
          <Link href="/contact" style={btnPrimary}>
            Contact ManiDine
          </Link>
        </div>
      </section>
    </main>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div style={card}>
      <div style={{ fontWeight: 900, marginBottom: 8 }}>{title}</div>
      <div style={{ opacity: 0.82, lineHeight: 1.5 }}>{desc}</div>
    </div>
  );
}

const pageWrap: React.CSSProperties = {
  minHeight: "100vh",
  background: "#0b0f1a",
  color: "#eaf2ff",
  padding: "28px 20px 60px",
};

const hero: React.CSSProperties = {
  maxWidth: 1100,
  margin: "34px auto 0",
  padding: "22px",
  borderRadius: 18,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const h1: React.CSSProperties = {
  margin: 0,
  fontSize: 38,
  fontWeight: 900,
};

const sub: React.CSSProperties = {
  marginTop: 10,
  maxWidth: 760,
  opacity: 0.85,
  lineHeight: 1.6,
};

const grid: React.CSSProperties = {
  maxWidth: 1100,
  margin: "18px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: 16,
};

const card: React.CSSProperties = {
  padding: 18,
  borderRadius: 16,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const box: React.CSSProperties = {
  maxWidth: 1100,
  margin: "18px auto 0",
  padding: 22,
  borderRadius: 18,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const h2: React.CSSProperties = {
  margin: 0,
  fontSize: 20,
  fontWeight: 900,
};

const list: React.CSSProperties = {
  marginTop: 12,
  paddingLeft: 18,
  lineHeight: 1.8,
  opacity: 0.85,
};

const btnPrimary: React.CSSProperties = {
  background: "linear-gradient(135deg, #0f71d4, #cc47ce)",
  color: "#0b0f1a",
  fontWeight: 900,
  padding: "12px 16px",
  borderRadius: 12,
  textDecoration: "none",
};

const btnSecondary: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.3)",
  padding: "12px 16px",
  borderRadius: 12,
  textDecoration: "none",
  color: "#eaf2ff",
  fontWeight: 900,
};

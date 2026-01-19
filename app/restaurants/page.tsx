// ManiDine.ca — app/restaurants/page.tsx — Updated: 2026-01-18 16:50 (America/Edmonton)
import Link from "next/link";

export default function RestaurantsPage() {
  return (
    <main style={pageWrap}>
      {/* Global SiteHeader + Footer are rendered in app/layout.tsx */}
      <section style={hero}>
        <h1 style={h1}>For Restaurants</h1>
        <p style={sub}>
          ManiDine is building a fair, commission-free model so restaurants keep more
          of what they earn. Simple onboarding, transparent pricing, and tools that
          help you grow.
        </p>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 18 }}>
          <Link href="/contact" style={btnPrimary}>
            Join the waitlist
          </Link>
          <Link href="/pricing" style={btnSecondary}>
            See pricing
          </Link>
        </div>
      </section>

      <section style={grid}>
        <Card
          title="Commission-free approach"
          desc="No heavy commissions like other platforms. Keep more revenue to reinvest in your business."
        />
        <Card
          title="Simple menu & order flow"
          desc="Update menu items easily and manage incoming orders with a clean workflow."
        />
        <Card
          title="Transparent customer fees"
          desc="Customers see clear fees at checkout, which builds trust and repeat ordering."
        />
      </section>

      <section style={box}>
        <h2 style={h2}>What restaurants get</h2>
        <ul style={list}>
          <li>Restaurant profile + hours</li>
          <li>Menu management</li>
          <li>Order notifications + status updates</li>
          <li>Support for promos (optional)</li>
          <li>Fast onboarding (Edmonton launch)</li>
        </ul>

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

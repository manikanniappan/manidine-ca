// ManiDine.ca / (project root) / app/restaurants/page.tsx — Updated: 2026-05-11 10:25 (America/Edmonton)
import Link from "next/link";

export default function RestaurantsPage() {
  return (
    <main style={pageWrap}>
      {/* Global SiteHeader + Footer are rendered in app/layout.tsx */}
      <section style={hero}>
        <div style={eyebrow}>Edmonton restaurants deserve a fairer delivery option</div>
        <h1 style={h1}>Grow delivery sales without giving away 25–30% commission.</h1>
        <p style={sub}>
          ManiDine is built for local restaurants: same in-store menu prices for
          customers, a flat $1.99 ManiDine service fee per order, transparent
          Stripe processing fees, and a monthly membership that is only charged
          when ManiDine actually brings you sales.
        </p>

        <div style={foundingBanner}>
          <strong>First 100 approved Edmonton restaurant partners who complete 50 ManiDine orders become Founding Members.</strong>{" "}
          <span>
            Founding Members receive special launch benefits, including a lifetime
            waiver of the monthly membership fee once ManiDine reaches 1,000
            Edmonton restaurant partners.
          </span>
        </div>

        <div style={ctaRow}>
          <a href="https://portal.manidine.ca/signup" style={btnPrimary}>
            Apply to join ManiDine
          </a>
          <Link href="/pricing" style={btnSecondary}>
            See pricing
          </Link>
        </div>
      </section>

      <section style={grid}>
        <Card
          title="No large commissions"
          desc="ManiDine does not take 25–30% commission from restaurant orders. ManiDine takes only a flat $1.99 service fee per order."
        />
        <Card
          title="Same in-store prices"
          desc="Restaurants are required to keep the same menu prices on ManiDine as they charge in store, helping customers trust the platform."
        />
        <Card
          title="Maximum $200 monthly membership"
          desc="Restaurants never pay more than $200/month in membership fees, no matter how much ManiDine sales grow that month."
        />
      </section>

      <section style={boxHighlight}>
        <h2 style={h2}>Simple restaurant pricing</h2>
        <div style={pricingGrid}>
          <div style={priceCard}>
            <div style={priceLabel}>ManiDine service fee</div>
            <div style={priceValue}>$1.99</div>
            <p style={priceText}>Flat per order. No percentage commission.</p>
          </div>

          <div style={priceCard}>
            <div style={priceLabel}>Maximum monthly membership</div>
            <div style={priceValue}>$200</div>
            <p style={priceText}>
              If monthly ManiDine sales are under $2,000, you pay only 10% of
              those sales for that month. Once sales pass $2,000/month, your
              membership stays at $200 maximum.
            </p>
          </div>

          <div style={priceCard}>
            <div style={priceLabel}>Stripe processing</div>
            <div style={priceValue}>Actual cost</div>
            <p style={priceText}>
              Restaurants are responsible for standard external payment
              processing fees. ManiDine does not add markup or take any
              percentage from these fees.
            </p>
          </div>
        </div>

        <div style={exampleBox}>
          <strong>Membership examples:</strong> If ManiDine brings your restaurant
          $1,000 in monthly sales, the membership fee is $100 for that month. If
          ManiDine brings $5,000 in monthly sales, the membership fee is still
          only $200 for that month. If ManiDine brings no sales, there is no
          monthly membership fee.
        </div>
      </section>

      <section style={box}>
        <h2 style={h2}>Restaurant benefits</h2>
        <ul style={list}>
          <li>No 25–30% commission structure like many major delivery platforms</li>
          <li>Flat $1.99 ManiDine service fee per order</li>
          <li>Restaurants keep more of every order</li>
          <li>Monthly membership never goes above $200, no matter how much ManiDine sales grow that month</li>
          <li>Better local customer support from an Edmonton-first platform</li>
          <li>Restaurant profile, hours, menu management, and order flow tools</li>
          <li>Transparent reporting and payout clarity</li>
          <li>Optional promotions, discounts, and in-app advertising opportunities as available</li>
        </ul>
      </section>

      <section style={boxWarning}>
        <h2 style={h2}>Rules for all restaurants</h2>
        <ul style={listStrong}>
          <li>
            <strong>Same in-store menu pricing is required.</strong> Restaurants
            must not increase menu prices on ManiDine compared with their regular
            in-store menu prices.
          </li>
          <li>
            Restaurants are responsible for standard external payment processing fees
            charged by Stripe. ManiDine does not add markup or take any
            percentage from these fees.
          </li>
          <li>
            Menu details, pricing, hours, preparation times, and availability must
            be kept accurate.
          </li>
          <li>
            Restaurants should accept, prepare, and update order statuses on time
            so customers and drivers receive a reliable experience.
          </li>
        </ul>
      </section>

      <section style={box}>
        <h2 style={h2}>How to join ManiDine</h2>
        <ol style={list}>
          <li>Submit your restaurant signup form.</li>
          <li>ManiDine reviews your restaurant details and service area.</li>
          <li>We help set up your profile, menu, hours, and ordering workflow.</li>
          <li>Your restaurant goes live when onboarding is complete.</li>
        </ol>

        <div style={{ marginTop: 18 }}>
          <a href="https://portal.manidine.ca/signup" style={btnPrimary}>
            Start restaurant signup
          </a>
        </div>
      </section>

      <section style={marketBox}>
        <h2 style={h2}>Why join early?</h2>
        <p style={paragraph}>
          Edmonton already has a large delivery marketplace. SkipTheDishes says
          around 2,612 Edmonton restaurants offer delivery on Skip, and Uber Eats
          also lists a wide variety of restaurants and shops in Edmonton. Joining
          ManiDine early helps your restaurant stand out as the platform grows.
        </p>
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
  padding: "26px",
  borderRadius: 22,
  background: "linear-gradient(135deg, rgba(15,113,212,0.18), rgba(204,71,206,0.14))",
  border: "1px solid rgba(255,255,255,0.14)",
};

const eyebrow: React.CSSProperties = {
  marginBottom: 10,
  color: "#9fc6ff",
  fontSize: 13,
  fontWeight: 900,
  letterSpacing: 0.4,
  textTransform: "uppercase",
};

const h1: React.CSSProperties = {
  margin: 0,
  maxWidth: 880,
  fontSize: 40,
  lineHeight: 1.08,
  fontWeight: 900,
};

const sub: React.CSSProperties = {
  marginTop: 14,
  maxWidth: 850,
  opacity: 0.88,
  lineHeight: 1.65,
};

const foundingBanner: React.CSSProperties = {
  marginTop: 18,
  padding: 16,
  borderRadius: 16,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.14)",
  lineHeight: 1.55,
};

const ctaRow: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 18,
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

const boxHighlight: React.CSSProperties = {
  ...box,
  background: "rgba(15,113,212,0.1)",
};

const boxWarning: React.CSSProperties = {
  ...box,
  background: "rgba(204,71,206,0.1)",
};

const marketBox: React.CSSProperties = {
  ...box,
  background: "rgba(255,255,255,0.03)",
};

const h2: React.CSSProperties = {
  margin: 0,
  fontSize: 22,
  fontWeight: 900,
};

const pricingGrid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
  gap: 14,
  marginTop: 16,
};

const priceCard: React.CSSProperties = {
  padding: 16,
  borderRadius: 16,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const priceLabel: React.CSSProperties = {
  opacity: 0.76,
  fontSize: 13,
  fontWeight: 800,
};

const priceValue: React.CSSProperties = {
  marginTop: 5,
  fontSize: 28,
  fontWeight: 900,
};

const priceText: React.CSSProperties = {
  margin: "8px 0 0",
  opacity: 0.82,
  lineHeight: 1.5,
};

const exampleBox: React.CSSProperties = {
  marginTop: 16,
  padding: 16,
  borderRadius: 16,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  lineHeight: 1.65,
};

const list: React.CSSProperties = {
  marginTop: 12,
  paddingLeft: 18,
  lineHeight: 1.8,
  opacity: 0.87,
};

const listStrong: React.CSSProperties = {
  ...list,
  opacity: 0.92,
};

const paragraph: React.CSSProperties = {
  marginTop: 12,
  maxWidth: 900,
  lineHeight: 1.65,
  opacity: 0.84,
};

const btnPrimary: React.CSSProperties = {
  background: "linear-gradient(135deg, #0f71d4, #cc47ce)",
  color: "#ffffff",
  fontWeight: 900,
  padding: "12px 16px",
  borderRadius: 12,
  textDecoration: "none",
  display: "inline-flex",
};

const btnSecondary: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.3)",
  padding: "12px 16px",
  borderRadius: 12,
  textDecoration: "none",
  color: "#eaf2ff",
  fontWeight: 900,
  display: "inline-flex",
};

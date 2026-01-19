// ManiDine.ca — app/faq/page.tsx — Updated: 2026-01-18 16:50 (America/Edmonton)
import Link from "next/link";

export default function FAQPage() {
  return (
    <main style={pageWrap}>
      {/* Global SiteHeader + Footer are rendered in app/layout.tsx */}
      <section style={hero}>
        <h1 style={h1}>FAQ</h1>
        <p style={sub}>
          Quick answers about ManiDine. We’re launching in Edmonton first and will keep
          improving the platform based on real feedback.
        </p>
      </section>

      <section style={stack}>
        <Block title="General">
          <QA
            q="What is ManiDine?"
            a="ManiDine is a fair, transparent food delivery platform focused on lower fees and better economics for restaurants and drivers."
          />
          <QA
            q="Where is ManiDine launching first?"
            a="Edmonton (Alberta) is the first launch market."
          />
          <QA
            q="When will the app be available?"
            a="We’re preparing for launch. You can join the waitlist and we’ll notify you when downloads open."
          />
        </Block>

        <Block title="Customers">
          <QA
            q="Will ManiDine be cheaper than other apps?"
            a="That’s the goal. ManiDine is designed for transparent fees and a model that avoids heavy commissions."
          />
          <QA
            q="How do refunds work?"
            a="Refund rules will be published clearly. Typical cases include missing items, wrong items, or order issues confirmed with the restaurant."
          />
        </Block>

        <Block title="Restaurants">
          <QA
            q="Do you charge restaurants commission?"
            a="ManiDine is built around a commission-free approach. Final terms can vary by market, but fairness and transparency are core."
          />
          <QA
            q="How do restaurants join?"
            a="Use the contact page to join the restaurant waitlist. We’ll follow up with onboarding steps."
          />
        </Block>

        <Block title="Drivers">
          <QA
            q="How do drivers get paid?"
            a="Drivers receive clear delivery earnings and keep tips. More details will be shared during onboarding."
          />
          <QA
            q="How can I apply?"
            a="Use the contact page to join the driver waitlist. We’ll notify you when onboarding opens."
          />
        </Block>
      </section>

      <section style={box}>
        <h2 style={h2}>Still have questions?</h2>
        <p style={{ marginTop: 10, opacity: 0.85, lineHeight: 1.6 }}>
          Send us a message and we’ll respond as quickly as possible.
        </p>
        <div style={{ marginTop: 16 }}>
          <Link href="/contact" style={btnPrimary}>
            Contact ManiDine
          </Link>
        </div>
      </section>
    </main>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={block}>
      <div style={{ fontWeight: 900, fontSize: 16, marginBottom: 10 }}>{title}</div>
      <div style={{ display: "grid", gap: 10 }}>{children}</div>
    </div>
  );
}

function QA({ q, a }: { q: string; a: string }) {
  return (
    <div style={qa}>
      <div style={{ fontWeight: 900, marginBottom: 6 }}>{q}</div>
      <div style={{ opacity: 0.84, lineHeight: 1.6 }}>{a}</div>
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
  maxWidth: 820,
  opacity: 0.85,
  lineHeight: 1.6,
};

const stack: React.CSSProperties = {
  maxWidth: 1100,
  margin: "18px auto 0",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: 16,
};

const block: React.CSSProperties = {
  padding: 18,
  borderRadius: 16,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const qa: React.CSSProperties = {
  padding: 14,
  borderRadius: 14,
  background: "rgba(255,255,255,0.03)",
  border: "1px solid rgba(255,255,255,0.10)",
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

const btnPrimary: React.CSSProperties = {
  background: "linear-gradient(135deg, #0f71d4, #cc47ce)",
  color: "#0b0f1a",
  fontWeight: 900,
  padding: "12px 16px",
  borderRadius: 12,
  textDecoration: "none",
  display: "inline-block",
};

// ManiDine.ca — app/drivers/page.tsx — Updated: 2026-05-11 10:25 (America/Edmonton)
// FILE: app/drivers/page.tsx

const DRIVER_IOS_LINK = "https://apps.apple.com/us/app/manidinedriver/id6763635631";
const DRIVER_ANDROID_LINK =
  "https://play.google.com/store/apps/details?id=com.manidine.ManiDineDriver";

const DRIVER_REQUIREMENTS = [
  "Valid driver’s license",
  "Vehicle, bike, or approved delivery method depending on area",
  "Phone with data plan",
  "Insurance that allows food delivery work",
  "Recent background check accepted during review",
  "Existing background checks from other delivery apps may be accepted during review",
  "Ability to complete identity and basic verification",
];

export default function DriversPage() {
  return (
    <main style={pageWrap}>
      {/* Global SiteHeader + Footer are rendered in app/layout.tsx */}
      <section style={hero}>
        <div style={eyebrow}>ManiDine Driver</div>
        <h1 style={h1}>Keep 100% of delivery fees and tips.</h1>
        <p style={sub}>
          ManiDine is built for Edmonton drivers who want clear pay, honest
          delivery information, and a platform that lets drivers keep every
          dollar of delivery fees and customer tips.
        </p>

        <div style={heroHighlight}>
          <strong>100% DELIVERY FEES AND TIPS PAID TO DRIVERS.</strong>
          <br />
          ManiDine does not take commission from your delivery fees or tips.
        </div>

        <div style={ctaRow}>
          <a href={DRIVER_IOS_LINK} style={btnPrimary} target="_blank" rel="noopener noreferrer">
            App Store
          </a>
          <a href={DRIVER_ANDROID_LINK} style={btnSecondary} target="_blank" rel="noopener noreferrer">
            Google Play
          </a>
        </div>
      </section>

      <section style={simpleBox}>
        <h2 style={h2}>How driver pay works</h2>
        <p style={bodyText}>
          Every delivery shows the delivery fee and customer tip clearly, so
          drivers can understand what they are earning before they accept work.
          ManiDine keeps the pay model simple: drivers keep the full delivery
          fee and the full customer tip.
        </p>

        <ul style={list}>
          <li>
            <strong>Drivers keep 100% of delivery fees.</strong>
          </li>
          <li>
            <strong>Drivers keep 100% of customer tips.</strong>
          </li>
          <li>ManiDine does not take commission from driver delivery earnings.</li>
          <li>Delivery fees and tips are shown transparently.</li>
        </ul>
      </section>

      <section style={simpleBox}>
        <h2 style={h2}>Monthly platform fee</h2>
        <p style={bodyText}>
          ManiDine drivers pay a <strong>maximum of $20/month</strong> to use
          the platform/app. If a driver earns less than $200 in a month through
          ManiDine delivery fees, the platform fee is only 10% of those delivery
          fees.
        </p>

        <div style={exampleWrap}>
          <div style={exampleItem}>
            <strong>$100 in delivery fees that month</strong>
            <span>Only $10 platform fee for that month</span>
          </div>
          <div style={exampleItem}>
            <strong>$500 in delivery fees that month</strong>
            <span>Only $20 platform fee for that month</span>
          </div>
        </div>
      </section>

      <section style={foundingBox}>
        <h2 style={h2}>Founding Driver Members</h2>
        <p style={bodyText}>
          The first <strong>50 drivers</strong> who complete
          <strong> 50 deliveries</strong> become ManiDine Founding Drivers and
          never pay monthly platform fees after ManiDine reaches 1,000 Edmonton
          restaurant partners.
        </p>
        <p style={foundingText}>
          Founding Drivers keep the same 100% delivery-fee and tip model, with
          the monthly platform fee waived when the program milestone is reached.
        </p>
      </section>

      <section style={requirementsBox}>
        <div style={requirementsGrid}>
          <div style={requirementsContent}>
            <h2 style={h2}>Basic driver requirements</h2>
            <ul style={checkList}>
              {DRIVER_REQUIREMENTS.map((item) => (
                <li key={item} style={checkItem}>
                  <span style={checkIcon}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside style={readyCard}>
            <div style={readyTitle}>Ready to drive with ManiDine?</div>
            <p style={readyText}>
              Download the Driver app, complete your profile, and have your
              documents ready for review.
            </p>
            <div style={downloadStack}>
              <a href={DRIVER_IOS_LINK} style={btnPrimary} target="_blank" rel="noopener noreferrer">
                App Store
              </a>
              <a href={DRIVER_ANDROID_LINK} style={btnSecondary} target="_blank" rel="noopener noreferrer">
                Google Play
              </a>
            </div>
            <div style={supportText}>
              Questions? Call <a href="tel:+15875708552" style={supportLink}>587-570-8552</a>
              <br />
              or email <a href="mailto:contact@manidine.ca" style={supportLink}>contact@manidine.ca</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
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
  padding: "28px",
  borderRadius: 22,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const eyebrow: React.CSSProperties = {
  display: "inline-block",
  marginBottom: 10,
  padding: "7px 12px",
  borderRadius: 999,
  background: "rgba(255,255,255,0.08)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#9fc7ff",
  fontSize: 13,
  fontWeight: 900,
};

const h1: React.CSSProperties = {
  margin: 0,
  maxWidth: 850,
  fontSize: 42,
  lineHeight: 1.1,
  fontWeight: 900,
};

const sub: React.CSSProperties = {
  marginTop: 14,
  maxWidth: 820,
  opacity: 0.86,
  lineHeight: 1.65,
};

const heroHighlight: React.CSSProperties = {
  marginTop: 20,
  padding: 18,
  borderRadius: 18,
  background: "linear-gradient(135deg, rgba(15,113,212,0.22), rgba(204,71,206,0.22))",
  border: "1px solid rgba(255,255,255,0.14)",
  lineHeight: 1.6,
};

const ctaRow: React.CSSProperties = {
  display: "flex",
  gap: 12,
  flexWrap: "wrap",
  marginTop: 20,
};

const simpleBox: React.CSSProperties = {
  maxWidth: 1100,
  margin: "18px auto 0",
  padding: 24,
  borderRadius: 18,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const requirementsBox: React.CSSProperties = {
  ...simpleBox,
  padding: 30,
};

const requirementsGrid: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: 24,
  alignItems: "flex-start",
};

const requirementsContent: React.CSSProperties = {
  flex: "1 1 420px",
  minWidth: 0,
};

const foundingBox: React.CSSProperties = {
  maxWidth: 1100,
  margin: "18px auto 0",
  padding: 24,
  borderRadius: 18,
  background: "linear-gradient(135deg, rgba(15,113,212,0.18), rgba(204,71,206,0.18))",
  border: "1px solid rgba(255,255,255,0.16)",
};

const h2: React.CSSProperties = {
  margin: 0,
  fontSize: 22,
  fontWeight: 900,
};

const bodyText: React.CSSProperties = {
  marginTop: 12,
  maxWidth: 880,
  opacity: 0.86,
  lineHeight: 1.7,
};

const foundingText: React.CSSProperties = {
  marginTop: 10,
  fontSize: 18,
  fontWeight: 900,
  color: "#ffffff",
};

const list: React.CSSProperties = {
  marginTop: 12,
  paddingLeft: 18,
  lineHeight: 1.9,
  opacity: 0.88,
};

const checkList: React.CSSProperties = {
  marginTop: 16,
  paddingLeft: 0,
  listStyle: "none",
  display: "grid",
  gap: 10,
  opacity: 0.9,
};

const checkItem: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: 10,
  lineHeight: 1.55,
};

const checkIcon: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  width: 20,
  height: 20,
  borderRadius: 999,
  background: "linear-gradient(135deg, #0f71d4, #cc47ce)",
  color: "#ffffff",
  fontSize: 13,
  fontWeight: 950,
  flexShrink: 0,
  marginTop: 1,
};

const exampleWrap: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: 12,
  marginTop: 16,
};

const exampleItem: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 6,
  padding: 16,
  borderRadius: 16,
  background: "rgba(255,255,255,0.05)",
  border: "1px solid rgba(255,255,255,0.1)",
};

const readyCard: React.CSSProperties = {
  flex: "1 1 280px",
  minWidth: 0,
  borderRadius: 18,
  padding: 18,
  background: "linear-gradient(135deg, rgba(15,113,212,0.16), rgba(204,71,206,0.14))",
  border: "1px solid rgba(255,255,255,0.14)",
};

const readyTitle: React.CSSProperties = {
  fontSize: 17,
  fontWeight: 950,
};

const readyText: React.CSSProperties = {
  margin: "8px 0 0",
  lineHeight: 1.6,
  color: "rgba(234,242,255,0.78)",
  fontSize: 14,
};

const downloadStack: React.CSSProperties = {
  display: "flex",
  gap: 10,
  flexWrap: "wrap",
  marginTop: 16,
};

const supportText: React.CSSProperties = {
  marginTop: 14,
  lineHeight: 1.7,
  color: "rgba(234,242,255,0.66)",
  fontSize: 13,
};

const supportLink: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "underline",
  textUnderlineOffset: 4,
};

const btnPrimary: React.CSSProperties = {
  background: "linear-gradient(135deg, #0f71d4, #cc47ce)",
  color: "#ffffff",
  fontWeight: 900,
  padding: "12px 16px",
  borderRadius: 12,
  textDecoration: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

const btnSecondary: React.CSSProperties = {
  border: "1px solid rgba(255,255,255,0.3)",
  padding: "12px 16px",
  borderRadius: 12,
  textDecoration: "none",
  color: "#eaf2ff",
  fontWeight: 900,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
};

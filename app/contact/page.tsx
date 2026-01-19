// ManiDine.ca — app/contact/page.tsx — Updated: 2026-01-18 16:50 (America/Edmonton)
import Link from "next/link";

export default function ContactPage() {
  return (
    <main style={pageWrap}>
      {/* Global SiteHeader + Footer are rendered in app/layout.tsx */}
      <section style={hero}>
        <h1 style={h1}>Contact ManiDine</h1>
        <p style={sub}>
          Interested in joining ManiDine as a restaurant, driver, or partner? Send
          us a message and we’ll get back to you.
        </p>
      </section>

      <section style={box}>
        <form style={form} action="https://formspree.io/f/xwvkrwvp" method="POST">
          <label style={label}>
            Your Name
            <input name="name" type="text" placeholder="Full name" style={input} required />
          </label>

          <label style={label}>
            Email Address
            <input
              name="email"
              type="email"
              placeholder="you@email.com"
              style={input}
              required
            />
          </label>

          <label style={label}>
            I am a:
            <select name="role" style={input} defaultValue="Customer">
              <option>Customer</option>
              <option>Restaurant owner</option>
              <option>Driver</option>
              <option>Partner / Other</option>
            </select>
          </label>

          <label style={label}>
            Message
            <textarea
              name="message"
              placeholder="Tell us a bit more…"
              rows={5}
              style={textarea}
              required
            />
          </label>

          <input type="hidden" name="source" value="manidine.ca contact form" />

          <button type="submit" style={btnPrimary}>
            Send message
          </button>
        </form>

        <p style={note}>
          If you don’t receive submissions, check Formspree → Inbox and confirm your
          email is verified.
        </p>

        <div style={miniLinks}>
          <Link href="/privacy" style={miniLink}>
            Privacy
          </Link>
          <Link href="/terms" style={miniLink}>
            Terms
          </Link>
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

const box: React.CSSProperties = {
  maxWidth: 600,
  margin: "24px auto 0",
  padding: 22,
  borderRadius: 18,
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
};

const form: React.CSSProperties = {
  display: "grid",
  gap: 14,
};

const label: React.CSSProperties = {
  display: "grid",
  gap: 6,
  fontWeight: 800,
  fontSize: 13,
};

const input: React.CSSProperties = {
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid rgba(255,255,255,0.2)",
  background: "rgba(255,255,255,0.05)",
  color: "#eaf2ff",
};

const textarea: React.CSSProperties = {
  ...input,
  resize: "vertical",
};

const btnPrimary: React.CSSProperties = {
  marginTop: 6,
  background: "linear-gradient(135deg, #0f71d4, #cc47ce)",
  color: "#0b0f1a",
  fontWeight: 900,
  padding: "12px 16px",
  borderRadius: 12,
  border: "none",
  cursor: "pointer",
};

const note: React.CSSProperties = {
  marginTop: 12,
  fontSize: 13,
  opacity: 0.7,
};

const miniLinks: React.CSSProperties = {
  marginTop: 18,
  display: "flex",
  gap: 16,
  flexWrap: "wrap",
  opacity: 0.75,
  fontSize: 14,
};

const miniLink: React.CSSProperties = {
  color: "rgba(234,242,255,0.8)",
  textDecoration: "none",
};

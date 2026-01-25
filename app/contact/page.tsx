// ManiDine.ca (Next.js) /app/contact/page.tsx — Updated 2026-01-24 18:54
"use client";

import React, { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <main style={wrap}>
      <section style={hero}>
        <h1 style={title}>Contact</h1>
        <p style={sub}>
          Interested in joining ManiDine as a restaurant, driver, or partner?
          Send us a message and we’ll get back to you.
        </p>
        <p style={subEmail}>
          Or email us at{" "}
          <a href="mailto:contact@manidine.ca" style={emailLink}>
            contact@manidine.ca
          </a>
          .
        </p>
      </section>

      <section style={box}>
        <div style={card}>
          <h2 style={h2}>Send us a message</h2>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              // This is a static marketing site form placeholder.
              // If you later wire it up, you can connect to a backend (e.g., Google Form / SendGrid / API route).
              alert("Thanks! Your message was noted. We’ll reply soon.");
              setName("");
              setEmail("");
              setMessage("");
            }}
            style={form}
          >
            <label style={label}>
              Name
              <input
                style={input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
              />
            </label>

            <label style={label}>
              Email
              <input
                style={input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
              />
            </label>

            <label style={label}>
              Message
              <textarea
                style={textarea}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us what you need…"
                rows={6}
              />
            </label>

            <button type="submit" style={button}>
              Submit
            </button>

            <p style={note}>
              Note: This form is currently for pre-launch contact only. If you
              don’t hear back, please email{" "}
              <a href="mailto:contact@manidine.ca" style={emailLink}>
                contact@manidine.ca
              </a>
              .
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

/* Styles */
const wrap: React.CSSProperties = {
  minHeight: "100vh",
  background:
    "radial-gradient(1200px 600px at 20% 0%, rgba(255,79,218,0.18), transparent 60%), radial-gradient(1200px 600px at 80% 0%, rgba(138,49,255,0.18), transparent 60%), #07060b",
  color: "white",
  paddingBottom: 80,
};

const hero: React.CSSProperties = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "80px 24px 20px",
};

const title: React.CSSProperties = {
  fontSize: 44,
  fontWeight: 800,
  letterSpacing: 0.2,
  margin: 0,
};

const sub: React.CSSProperties = {
  marginTop: 14,
  maxWidth: 820,
  opacity: 0.85,
  lineHeight: 1.6,
};

const subEmail: React.CSSProperties = {
  marginTop: 10,
  maxWidth: 820,
  opacity: 0.85,
  lineHeight: 1.6,
};

const emailLink: React.CSSProperties = {
  color: "rgba(255,255,255,0.95)",
  textDecoration: "underline",
  textUnderlineOffset: 4,
};

const box: React.CSSProperties = {
  maxWidth: 980,
  margin: "0 auto",
  padding: "0 24px",
};

const card: React.CSSProperties = {
  marginTop: 18,
  borderRadius: 18,
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.10)",
  padding: 22,
  backdropFilter: "blur(10px)",
};

const h2: React.CSSProperties = {
  margin: 0,
  fontSize: 18,
  fontWeight: 700,
  opacity: 0.95,
};

const form: React.CSSProperties = {
  marginTop: 16,
  display: "grid",
  gap: 14,
};

const label: React.CSSProperties = {
  display: "grid",
  gap: 8,
  fontSize: 13,
  opacity: 0.9,
};

const input: React.CSSProperties = {
  width: "100%",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.25)",
  padding: "12px 12px",
  color: "white",
  outline: "none",
};

const textarea: React.CSSProperties = {
  width: "100%",
  borderRadius: 12,
  border: "1px solid rgba(255,255,255,0.12)",
  background: "rgba(0,0,0,0.25)",
  padding: "12px 12px",
  color: "white",
  outline: "none",
  resize: "vertical",
};

const button: React.CSSProperties = {
  marginTop: 4,
  width: "fit-content",
  borderRadius: 999,
  padding: "12px 18px",
  border: "1px solid rgba(255,255,255,0.14)",
  background:
    "linear-gradient(90deg, rgba(138,49,255,1) 0%, rgba(255,79,218,1) 100%)",
  color: "white",
  fontWeight: 800,
  cursor: "pointer",
};

const note: React.CSSProperties = {
  marginTop: 6,
  fontSize: 12,
  opacity: 0.75,
  lineHeight: 1.6,
};

// ManiDine.ca (Next.js) /components/Footer.tsx — Updated 2026-01-24 18:54
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-white/70">
          <a href="/restaurants" className="hover:text-white">
            Restaurants
          </a>
          <a href="/drivers" className="hover:text-white">
            Drivers
          </a>
          <a href="/contact" className="hover:text-white">
            Contact
          </a>
          <span className="text-white/20">|</span>
          <a href="/privacy" className="hover:text-white">
            Privacy
          </a>
          <a href="/terms" className="hover:text-white">
            Terms
          </a>
          <a href="/refund" className="hover:text-white">
            Refund
          </a>
          <a href="/data-deletion" className="hover:text-white">
            Data Deletion
          </a>
        </div>

        {/* Social */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <div className="text-sm text-white/70">Follow us on</div>

          <div className="flex items-center gap-3">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=61583352970772"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 transition"
              title="Facebook"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M13.5 21v-7h2.4l.4-3H13.5V9.2c0-.9.2-1.5 1.5-1.5h1.4V5.1c-.7-.1-1.6-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V11H7.2v3h2.3v7h4z"
                  fill="#1877F2"
                />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/manidine.ca"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 transition"
              title="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient
                    id="igGrad"
                    x1="2"
                    y1="22"
                    x2="22"
                    y2="2"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#F58529" />
                    <stop offset="0.5" stopColor="#DD2A7B" />
                    <stop offset="1" stopColor="#8134AF" />
                  </linearGradient>
                </defs>
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z"
                  fill="url(#igGrad)"
                />
                <path
                  d="M12 16.2a4.2 4.2 0 1 0 0-8.4 4.2 4.2 0 0 0 0 8.4z"
                  fill="white"
                  opacity="0.95"
                />
                <circle
                  cx="17.6"
                  cy="6.4"
                  r="1.1"
                  fill="white"
                  opacity="0.95"
                />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@manidine.ca"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 transition"
              title="TikTok"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M15.5 4c.8 2.7 2.6 4.3 5 4.6v3.1c-2.1-.1-3.9-.8-5-1.9V16c0 3-2.5 5.5-5.5 5.5S4.5 19 4.5 16s2.5-5.5 5.5-5.5c.3 0 .6 0 .9.1v3.2c-.3-.2-.6-.3-.9-.3-1.3 0-2.3 1-2.3 2.5s1 2.5 2.3 2.5 2.3-1 2.3-2.5V4h3.3z"
                  fill="#FFFFFF"
                />
                <path
                  d="M15.5 4c.6 2.2 2 3.6 4.3 4.2v1.2c-2-.3-3.4-1.2-4.3-2.4V16c0 3-2.5 5.5-5.5 5.5-1.6 0-3-.6-4-1.6 1 .7 2.2 1.1 3.5 1.1 3 0 5.5-2.5 5.5-5.5V4h.5z"
                  fill="#FF004F"
                  opacity="0.95"
                />
                <path
                  d="M10.9 10.6v1.3c-.3-.1-.6-.1-.9-.1-3 0-5.5 2.5-5.5 5.5 0 1.4.5 2.7 1.4 3.6A5.46 5.46 0 0 1 3 16c0-3 2.5-5.5 5.5-5.5.5 0 1 0 1.4.1z"
                  fill="#00F2EA"
                  opacity="0.95"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@manidine_ca"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 transition"
              title="YouTube"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5A3 3 0 0 0 2.4 7.2 31.8 31.8 0 0 0 2 12a31.8 31.8 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.8 31.8 0 0 0 22 12a31.8 31.8 0 0 0-.4-4.8z"
                  fill="#FF0000"
                />
                <path
                  d="M10 15.3V8.7L15.8 12 10 15.3z"
                  fill="white"
                  opacity="0.95"
                />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="https://x.com/manidine_ca"
              target="_blank"
              rel="noreferrer"
              aria-label="X"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 hover:bg-white/15 transition"
              title="X (Twitter)"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M18.9 3H21l-7.6 8.7L22 21h-6.7l-5.2-6-5.2 6H3l8.1-9.3L2 3h6.8l4.7 5.4L18.9 3zm-2.3 16h1.2L7.4 4.9H6.2L16.6 19z"
                  fill="#FFFFFF"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Contact Email */}
        <div className="mt-5 text-center text-sm text-white/60">
          Email{" "}
          <a
            href="mailto:contact@manidine.ca"
            className="underline underline-offset-4 hover:text-white"
          >
            contact@manidine.ca
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-xs text-white/40">
          © {new Date().getFullYear()} ManiDine. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

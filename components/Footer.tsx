// ManiDine.ca /components/Footer.tsx — Updated: 2026-01-22 16:05 (America/Edmonton)
// FILE: components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#060d1f]">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[14px] text-white/70">
          <Link href="/about" className="hover:text-white">
            About Us
          </Link>

          <Link href="/founder" className="hover:text-white">
            Founder Note
          </Link>

          <Link href="/faq" className="hover:text-white">
            FAQ
          </Link>

          <Link href="/privacy" className="hover:text-white">
            Privacy Policy
          </Link>

          <Link href="/terms" className="hover:text-white">
            Terms & Conditions
          </Link>

          <Link href="/refund" className="hover:text-white">
            Refund Policy
          </Link>

          <Link href="/data-deletion" className="hover:text-white">
            Data Deletion
          </Link>

          <Link href="/contact" className="hover:text-white">
            Contact
          </Link>
        </div>

        {/* Social icons */}
        <div className="mt-6 flex items-center justify-center gap-3">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/manidine.ca/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            title="Instagram: manidine.ca"
          >
            {/* Instagram Icon (SVG) */}
            <svg
              className="h-5 w-5 text-white/80 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M16 11.37a4 4 0 1 1-7.74 1.26 4 4 0 0 1 7.74-1.26Z"
                stroke="currentColor"
                strokeWidth="2"
              />
              <path
                d="M17.5 6.5h.01"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@manidine.ca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            title="TikTok: manidine.ca"
          >
            {/* TikTok Icon (SVG simplified) */}
            <svg
              className="h-5 w-5 text-white/80 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M14 3v10.3a3.7 3.7 0 1 1-3-3.6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M14 3c1.2 2.5 3.3 4 6 4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://www.youtube.com/@manidine_ca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            title="YouTube: manidine_ca"
          >
            {/* YouTube Icon */}
            <svg
              className="h-5 w-5 text-white/80 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M21.5 7.5s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.8 4.3 12 4.3 12 4.3h0s-3.8 0-6.6.3c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.1 2 10.7v1.5c0 1.6.5 3.2.5 3.2s.2 1.4.8 2c.8.8 1.9.8 2.3.9 1.7.2 6.4.3 6.4.3s3.8 0 6.6-.3c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.5-1.6.5-3.2v-1.5c0-1.6-.5-3.2-.5-3.2Z"
                stroke="currentColor"
                strokeWidth="1.6"
              />
              <path
                d="M10 9.5v5l5-2.5-5-2.5Z"
                fill="currentColor"
              />
            </svg>
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/manidine_ca"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
            className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            title="X: manidine_ca"
          >
            {/* X icon */}
            <svg
              className="h-5 w-5 text-white/80 group-hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M5 19L19 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M7 5h5l5 14h-5L7 5Z"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-[12px] text-white/40">
          © {new Date().getFullYear()} ManiDine
        </div>
      </div>
    </footer>
  );
}

// ManiDine.ca /components/Footer.tsx — Updated: 2026-01-22 16:35 (America/Edmonton)
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

        {/* Follow us row */}
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <div className="text-[13px] font-semibold text-white/60">
            Follow us on
          </div>

          <div className="flex items-center justify-center gap-3">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/manidine.ca/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              title="Instagram: manidine.ca"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <defs>
                  <linearGradient id="igGrad" x1="0" y1="24" x2="24" y2="0">
                    <stop offset="0" stopColor="#FEDA75" />
                    <stop offset="0.25" stopColor="#FA7E1E" />
                    <stop offset="0.5" stopColor="#D62976" />
                    <stop offset="0.75" stopColor="#962FBF" />
                    <stop offset="1" stopColor="#4F5BD5" />
                  </linearGradient>
                </defs>
                <path
                  d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Z"
                  fill="url(#igGrad)"
                />
                <path
                  d="M12 7.25A4.75 4.75 0 1 0 16.75 12 4.76 4.76 0 0 0 12 7.25Zm0 7.7A2.95 2.95 0 1 1 14.95 12 2.95 2.95 0 0 1 12 14.95Z"
                  fill="white"
                />
                <circle cx="17.5" cy="6.5" r="1.2" fill="white" />
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@manidine.ca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              title="TikTok: manidine.ca"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  d="M14 3v10.2a3.9 3.9 0 1 1-3.2-3.85"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 3c1.2 2.6 3.4 4.2 6.1 4.2"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                />
                <path
                  d="M14 3v10.2a3.9 3.9 0 1 1-3.2-3.85"
                  fill="none"
                  stroke="#25F4EE"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.9"
                />
                <path
                  d="M14 3v10.2a3.9 3.9 0 1 1-3.2-3.85"
                  fill="none"
                  stroke="#FE2C55"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                  opacity="0.9"
                  transform="translate(0.3,0.2)"
                />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@manidine_ca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              title="YouTube: manidine_ca"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  d="M21.5 7.5s-.2-1.4-.8-2c-.8-.8-1.7-.8-2.1-.9C15.8 4.3 12 4.3 12 4.3s-3.8 0-6.6.3c-.4.1-1.3.1-2.1.9-.6.6-.8 2-.8 2S2 9.1 2 10.7v1.5c0 1.6.5 3.2.5 3.2s.2 1.4.8 2c.8.8 1.9.8 2.3.9 1.7.2 6.4.3 6.4.3s3.8 0 6.6-.3c.4-.1 1.3-.1 2.1-.9.6-.6.8-2 .8-2s.5-1.6.5-3.2v-1.5c0-1.6-.5-3.2-.5-3.2Z"
                  fill="#FF0000"
                />
                <path d="M10 9.5v5l5-2.5-5-2.5Z" fill="white" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://x.com/manidine_ca"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              title="X: manidine_ca"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  d="M18.8 3H21l-7.2 8.2L22 21h-6.6l-5.2-6.1L4.8 21H2.6l7.7-8.8L2 3h6.7l4.7 5.5L18.8 3Zm-1.2 16h1.2L7.1 4.9H5.8L17.6 19Z"
                  fill="white"
                />
              </svg>
            </a>

            {/* Facebook (correct link) */}
            <a
              href="https://www.facebook.com/profile.php?id=61583352970772"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              title="Facebook: ManiDine"
              className="group inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.84 3.44 8.87 8 9.8v-6.9H7.9V12H10V9.8c0-2.07 1.23-3.22 3.12-3.22.9 0 1.84.16 1.84.16v2.03h-1.04c-1.02 0-1.34.64-1.34 1.29V12h2.28l-.36 2.9h-1.92v6.9c4.56-.93 8-4.96 8-9.8 0-5.52-4.48-10-10-10Z"
                  fill="#1877F2"
                />
                <path
                  d="M14.92 14.9 15.28 12H13v-1.68c0-.65.32-1.29 1.34-1.29h1.04V6.74s-.94-.16-1.84-.16C11.23 6.58 10 7.73 10 9.8V12H7.9v2.9H10v6.9c.65.13 1.32.2 2 .2s1.35-.07 2-.2v-6.9h1.92Z"
                  fill="white"
                  opacity="0.95"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-[12px] text-white/40">
          © {new Date().getFullYear()} ManiDine
        </div>
      </div>
    </footer>
  );
}

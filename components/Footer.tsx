// ManiDine.ca /components/Footer.tsx — Updated: 2026-01-22 15:40 (America/Edmonton)
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

        {/* Social handles (bottom bar) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-[13px] text-white/55">
          <div>
            Instagram: <span className="text-white/75">manidine.ca</span>
          </div>
          <div>
            TikTok: <span className="text-white/75">manidine.ca</span>
          </div>
          <div>
            YouTube: <span className="text-white/75">manidine_ca</span>
          </div>
          <div>
            Twitter/X: <span className="text-white/75">manidine_ca</span>
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

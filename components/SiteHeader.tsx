// FILE: components/SiteHeader.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Close on ESC
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060d1f]/55 backdrop-blur-md">
      <div className="mx-auto flex h-[58px] max-w-6xl items-center justify-between px-4">
        {/* Brand */}
        <Link
          href="/"
          className="text-[22px] font-extrabold tracking-tight select-none"
        >
          <span className="text-[#0f71d4]">Mani</span>
          <span className="text-[#c04309]">Dine</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 text-[14px] font-semibold text-white/85 md:flex">
          <Link className="hover:text-white" href="/restaurants">
            Restaurants
          </Link>
          <Link className="hover:text-white" href="/drivers">
            Drivers
          </Link>
          <Link className="hover:text-white" href="/pricing">
            Pricing
          </Link>
          <Link className="hover:text-white" href="/faq">
            FAQ
          </Link>
          <Link className="hover:text-white" href="/contact">
            Contact
          </Link>
        </nav>

        {/* Mobile: Hamburger */}
        <div className="md:hidden">
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/90 hover:bg-white/10"
          >
            {/* Icon */}
            <span className="text-[18px] leading-none">
              {open ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <>
          {/* Click-outside overlay */}
          <button
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 cursor-default bg-black/35"
          />

          <div className="relative z-50 border-t border-white/10 bg-[#060d1f]/75 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 py-4">
              <div className="grid gap-2 text-[15px] font-semibold">
                <Link
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10"
                  href="/restaurants"
                >
                  Restaurants
                </Link>
                <Link
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10"
                  href="/drivers"
                >
                  Drivers
                </Link>
                <Link
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10"
                  href="/pricing"
                >
                  Pricing
                </Link>
                <Link
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10"
                  href="/faq"
                >
                  FAQ
                </Link>
                <Link
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10"
                  href="/contact"
                >
                  Contact
                </Link>

                <div className="mt-2 text-center text-[12px] text-white/55">
                  Tap anywhere outside to close
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

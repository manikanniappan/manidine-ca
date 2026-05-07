// ManiDine.ca /components/SiteHeader.tsx — Updated: 2026-05-07 12:58 (America/Edmonton)
// FILE: components/SiteHeader.tsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
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

        {/* Desktop launch message */}
        <div className="hidden flex-1 justify-center px-8 md:flex">
          <div className="select-none whitespace-nowrap text-center text-[16px] font-black tracking-wide lg:text-[18px]">
            <span className="bg-gradient-to-r from-[#0f71d4] via-[#8A31FF] via-[#B23BFF] to-[#FF4FDA] bg-clip-text text-transparent drop-shadow-[0_0_18px_rgba(188,91,202,0.35)]">
              Now onboarding in Edmonton
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden shrink-0 items-center gap-8 text-[14px] font-semibold text-white/85 md:flex">
          <Link className="hover:text-white" href="/restaurants">
            Restaurants
          </Link>
          <Link className="hover:text-white" href="/drivers">
            Drivers
          </Link>
          <Link className="hover:text-white" href="/pricing">
            Pricing
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
            <span className="text-[18px] leading-none">{open ? "✕" : "☰"}</span>
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
                  onClick={() => setOpen(false)}
                >
                  Restaurants
                </Link>
                <Link
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10"
                  href="/drivers"
                  onClick={() => setOpen(false)}
                >
                  Drivers
                </Link>
                <Link
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10"
                  href="/pricing"
                  onClick={() => setOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white/90 hover:bg-white/10"
                  href="/contact"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

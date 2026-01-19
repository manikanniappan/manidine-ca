// ManiDine.ca / (project root) / app/page.tsx — Updated: 2026-01-19 16:45 (America/Edmonton)
// FILE: app/page.tsx – ManiDine.ca (Homepage with HeroCarousel integrated)

import React from "react";
import CheckoutComparisonTable from "../components/CheckoutComparisonTable";
import HeroCarousel from "../components/HeroCarousel"; // ✅ use relative import to avoid alias issues

// ✅ ManiDine app gradient (ONLY for download pills)
const APP_GRADIENT_BTN =
  "bg-gradient-to-r from-[#8A31FF] via-[#B23BFF] to-[#FF4FDA]";

export default function HomePage() {
  return (
    <main className="min-h-screen font-[Poppins,Arial,sans-serif] text-white">
      {/* ✅ HERO CAROUSEL (Header stays global in layout.tsx) */}
      <HeroCarousel />

      {/* ✅ Everything below remains your existing homepage content */}
      <section className="relative overflow-hidden bg-[#060d1f]">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-10">
          {/* MAIN GRID */}
          <div className="grid grid-cols-12 items-start gap-6">
            {/* LEFT */}
            <div className="col-span-12 md:col-span-7">
              {/* Value rows */}
              <div className="max-w-[720px] md:mx-auto">
                <div className="grid gap-3">
                  {[
                    ["💲", "Flat $1.99 Fee", "No percentage traps."],
                    [
                      "🏷️",
                      "In-Store Pricing",
                      "Exact same menu prices — no mark-ups.",
                    ],
                    ["📍", "100% Local", "Edmonton-owned and operated."],
                    [
                      "🚗",
                      "Driver-First Model",
                      "Drivers keep 100% of delivery fees and tips.",
                    ],
                    [
                      "🍽️",
                      "Zero Commissions",
                      "Restaurants keep 100% (only a flat $1.99 service fee).",
                    ],
                  ].map(([icon, title, desc], i) => (
                    <div
                      key={i}
                      className="grid grid-cols-[30px_170px_1fr] items-start gap-3"
                    >
                      <div className="mt-[2px] flex h-7 w-7 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/10">
                        <span className="text-[14px]">{icon}</span>
                      </div>
                      <div className="text-[15px] font-semibold text-white">
                        {title}
                      </div>
                      <div className="text-[15px] text-white/85">{desc}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CUSTOMER APP DOWNLOAD */}
              <div className="mt-6 inline-block w-full max-w-[520px] rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md md:mt-7">
                <div className="text-[16px] font-semibold">
                  Download the ManiDine app
                </div>
                <div className="mt-1 text-[13px] text-white/70">
                  Available on iOS &amp; Android
                </div>

                {/* ✅ COMING SOON (Customer) */}
                <div className="mt-4 flex flex-col items-center gap-2">
                  <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-wide text-white/75">
                    COMING SOON
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <button
                    className={`w-full rounded-full ${APP_GRADIENT_BTN} px-5 py-3 text-[14px] font-semibold text-white shadow-lg shadow-black/30 hover:brightness-110`}
                  >
                     App Store
                  </button>
                  <button
                    className={`w-full rounded-full ${APP_GRADIENT_BTN} px-5 py-3 text-[14px] font-semibold text-white shadow-lg shadow-black/30 hover:brightness-110`}
                  >
                    ▶ Google Play
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-span-12 md:col-span-5">
              <div className="md:ml-auto md:pr-2 lg:pr-0">
                <div className="w-full max-w-[520px] rounded-[28px] border border-white/10 bg-gradient-to-br from-white/12 via-white/8 to-white/5 p-5 shadow-2xl shadow-black/40 backdrop-blur-md">
                  <CheckoutComparisonTable />
                </div>
              </div>
            </div>
          </div>

          {/* WHY MANIDINE EXISTS — CUSTOMER-FIRST */}
          <div className="relative z-10 mt-8 md:mt-10">
            <div className="rounded-[28px] border border-white/10 bg-white/10 p-7 backdrop-blur-md">
              <div className="text-[20px] font-extrabold md:text-[22px]">
                Why ManiDine Exists
              </div>

              <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-white/85 md:text-[16px]">
                ManiDine exists to give customers a fairer way to order food —
                with real menu prices, a simple flat fee, and no checkout
                surprises.
              </p>

              <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-white/85 md:text-[16px]">
                Too many delivery apps inflate menu prices, add confusing fees,
                and change totals at checkout. Customers often end up paying more
                than they expect, even when ordering from their favorite local
                restaurants.
              </p>

              <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-white/85 md:text-[16px]">
                ManiDine was created in Edmonton to offer a simpler, more
                transparent alternative — one that puts fairness and clarity
                first. That same transparency also means fair pay for drivers
                and better outcomes for local restaurants.
              </p>

              <p className="mt-3 max-w-4xl text-[15px] leading-relaxed text-white/80 md:text-[16px]">
                By choosing ManiDine, you’re supporting honest pricing, fair
                work, and a platform designed to keep more value where it
                belongs — right here at home.
              </p>
            </div>
          </div>

          {/* RESTAURANTS + DRIVERS (WITH DOWNLOAD PILLS) */}
          <div className="relative z-10 pb-10 pt-8 md:pb-12 md:pt-10">
            <div className="mx-auto flex max-w-6xl flex-col items-stretch justify-center gap-5 md:flex-row">
              {/* Restaurants */}
              <div className="w-full rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/6 to-white/5 p-6 backdrop-blur-md md:w-[42%]">
                <div className="mb-2 text-[18px] font-bold">Restaurants</div>
                <ul className="list-disc space-y-2 pl-5 text-white/85">
                  <li>Simple, predictable fees</li>
                  <li>$200/month membership (planned)</li>
                  <li>$1.99 flat per order (planned)</li>
                  <li>Transparent reporting &amp; payout clarity</li>
                  <li>Local support &amp; accountability</li>
                </ul>

                {/* ✅ Restaurant portal CTA (Option B: portal not ready) */}
                <div className="mt-6 w-full rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <div className="text-[15px] font-semibold">
                    Restaurant Portal (Web)
                  </div>
                  <div className="mt-1 text-[13px] text-white/70">
                    No app required — access will be provided after approval.
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3">
                    <a
                      href="/contact"
                      className={`w-full rounded-full ${APP_GRADIENT_BTN} px-5 py-3 text-center text-[13px] font-semibold text-white shadow-lg shadow-black/30 hover:brightness-110`}
                    >
                      Apply to join ManiDine
                    </a>

                    <div className="w-full cursor-not-allowed rounded-full border border-white/15 bg-white/5 px-5 py-3 text-center text-[13px] font-semibold text-white/45">
                      Portal access provided after approval
                    </div>
                  </div>
                </div>
              </div>

              {/* Drivers */}
              <div className="w-full rounded-[28px] border border-white/10 bg-gradient-to-br from-white/10 via-white/6 to-white/5 p-6 backdrop-blur-md md:w-[42%]">
                <div className="mb-2 text-[18px] font-bold">Drivers</div>
                <ul className="list-disc space-y-2 pl-5 text-white/85">
                  <li>Keep delivery fees + tips (planned)</li>
                  <li>Clear payout breakdown</li>
                  <li>Fair delivery flow</li>
                  <li>Edmonton-first driver community</li>
                  <li>Responsive local support</li>
                </ul>

                {/* ✅ Driver app download pills (kept) */}
                <div className="mt-6 w-full rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-md">
                  <div className="text-[15px] font-semibold">
                    Download the ManiDine Driver app
                  </div>
                  <div className="mt-1 text-[13px] text-white/70">
                    Available on iOS &amp; Android
                  </div>

                  {/* ✅ COMING SOON (Driver) */}
                  <div className="mt-4 flex flex-col items-center gap-2">
                    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-bold tracking-wide text-white/75">
                      COMING SOON
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <button
                      className={`w-full rounded-full ${APP_GRADIENT_BTN} px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-black/30 hover:brightness-110`}
                    >
                       App Store
                    </button>
                    <button
                      className={`w-full rounded-full ${APP_GRADIENT_BTN} px-5 py-3 text-[13px] font-semibold text-white shadow-lg shadow-black/30 hover:brightness-110`}
                    >
                      ▶ Google Play
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost promise (closing statement) */}
      <div className="bg-[#060d1f] py-10 text-center">
        <div className="mx-auto max-w-3xl px-4 text-[15px] font-semibold tracking-wide text-[#8fb8ff]">
          Designed to cost you less than major food delivery apps.
        </div>
      </div>
    </main>
  );
}

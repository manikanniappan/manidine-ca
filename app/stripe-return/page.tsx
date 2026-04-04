// ManiDine.ca — FILE: /app/stripe-return/page.tsx — Updated: 2026-04-04 09:00 AM (America/Edmonton)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stripe Onboarding Return",
  description:
    "ManiDine Stripe onboarding return page for  account setup.",
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: "Stripe Onboarding Return | ManiDine",
    description:
      "You have returned from Stripe onboarding for your ManiDine  account.",
    url: "/stripe-return",
    type: "website",
  },
  alternates: { canonical: "/stripe-return" },
};

export default function StripeReturnPage() {
  return (
    <main className="relative overflow-hidden font-[var(--font-poppins),Poppins,Arial,sans-serif] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#061225] via-[#081b33] to-[#050c18]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
      </div>

      <div className="mx-auto flex min-h-[72vh] w-full max-w-[980px] items-center px-4 py-12">
        <div className="w-full rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md md:p-10">
          <div className="mx-auto max-w-[760px] text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/15">
              <span className="text-[34px]">✅</span>
            </div>

            <h1 className="mt-6 text-[34px] font-extrabold leading-tight tracking-tight md:text-[44px]">
              Stripe setup return
            </h1>

            <div className="mx-auto mt-6 h-px w-full max-w-[620px] bg-white/15" />

            <p className="mx-auto mt-5 max-w-[700px] text-[15.5px] leading-relaxed text-white/80 md:text-[16.5px]">
              You have returned from Stripe onboarding for your ManiDine 
              account. If your setup was completed successfully, your 
              app should update once Stripe finishes sending the latest account
              status back to ManiDine.
            </p>

            <div className="mt-8 rounded-2xl bg-white/6 p-5 text-left ring-1 ring-white/10">
              <p className="text-[15px] font-semibold text-white md:text-[16px]">
                What to do next
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-[14.5px] leading-relaxed text-white/78 md:text-[15.5px]">
                <li>Return to your ManiDine Restaurant Portal.</li>
                <li>Refresh the Payments page if the Stripe status has not updated yet.</li>
                <li>If it still does not update after a short moment, contact ManiDine support.</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/restaurants"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full bg-white px-6 py-3 text-[15px] font-extrabold text-[#0b1324] transition hover:opacity-95"
              >
                Back to ManiDine
              </a>
              <a
                href="/contact"
                className="inline-flex min-w-[220px] items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-[15px] font-bold text-white transition hover:bg-white/10"
              >
                Contact support
              </a>
            </div>

            <p className="mt-6 text-[13.5px] text-white/55">
              This utility page is used only for Stripe onboarding return flow.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

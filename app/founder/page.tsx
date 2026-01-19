// ManiDine.ca /app/founder/page.tsx — Updated: 2026-01-12 13:25 (America/Edmonton)
// FILE: app/founder/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder’s Promise | ManiDine",
  description:
    "A personal note from the founder of ManiDine about fairness, transparency, and building a sustainable food delivery platform in Edmonton.",
  openGraph: {
    title: "Founder’s Promise | ManiDine",
    description:
      "A personal note from the founder of ManiDine about fairness, transparency, and building a sustainable food delivery platform in Edmonton.",
    url: "/founder",
    type: "website",
  },
  alternates: { canonical: "/founder" },
};

export default function FounderPage() {
  return (
    <main className="relative overflow-hidden font-[var(--font-poppins),Poppins,Arial,sans-serif] text-white">
      {/* Soft Aurora background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#061225] via-[#081b33] to-[#050c18]" />

      {/* Aurora glows */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-48 h-[520px] w-[520px] rounded-full bg-[#8A31FF]/25 blur-[140px]" />
        <div className="absolute -top-44 -right-56 h-[560px] w-[560px] rounded-full bg-[#FF4FDA]/18 blur-[150px]" />
        <div className="absolute top-[25%] left-1/2 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-[#6595d5]/14 blur-[170px]" />
        <div className="absolute -bottom-56 left-10 h-[520px] w-[520px] rounded-full bg-[#B23BFF]/14 blur-[170px]" />
      </div>

      {/* Soft grain overlay (very subtle) */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
      </div>

      {/* Content wrapper */}
      <div className="mx-auto w-full max-w-[920px] px-4 py-12">
        {/* Page header */}
        <header className="mb-10 md:mb-12">
          <h1
            className="text-center text-[44px] leading-[1.05] tracking-tight md:text-[60px]"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
          >
            A Note From the Founder
          </h1>

          {/* Restored divider line (you wanted it back) */}
          <div className="mx-auto mt-6 h-px w-full max-w-[720px] bg-white/15" />
        </header>

        {/* Glass panel container */}
        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md md:p-10">
          <div className="space-y-12">
            {/* Intro */}
            <section aria-labelledby="founder-intro">
              <h2
                id="founder-intro"
                className="text-[22px] font-bold tracking-tight md:text-[24px]"
              >
                Why I Built ManiDine
              </h2>
              <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-white/85 md:text-[16.5px]">
                <p>
                  ManiDine started with a simple question: why did ordering food
                  become so difficult to trust?
                </p>
                <p>
                  As a customer, I noticed how often totals changed, fees piled
                  up, and menu prices no longer matched what restaurants actually
                  charged. It became hard to feel confident about what you were
                  paying — even when supporting local businesses.
                </p>
                <p>
                  ManiDine was created in Edmonton to offer a more honest
                  alternative — one built around clarity, fairness, and long-term
                  sustainability instead of short-term wins.
                </p>
              </div>
            </section>

            {/* Promise */}
            <section aria-labelledby="founder-promise">
              <h2
                id="founder-promise"
                className="text-[22px] font-bold tracking-tight md:text-[24px]"
              >
                The Founder’s Promise
              </h2>

              <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-white/85 md:text-[16.5px]">
                <p>
                  ManiDine was designed to reduce what customers pay, while
                  ensuring drivers keep 100% of delivery fees and tips, and
                  restaurants retain nearly the full value of every order.
                </p>

                <p>
                  This model works only when all sides of the platform are
                  treated fairly. Customers get transparent pricing, drivers are
                  paid honestly for their work, and restaurants aren’t burdened
                  by heavy commissions.
                </p>

                <p>
                  ManiDine exists to prove that food delivery can succeed
                  long-term when everyone involved supports one another — not by
                  shifting costs, but by sharing responsibility.
                </p>
              </div>
            </section>

            {/* Industry context */}
            <section aria-labelledby="industry-context">
              <h2
                id="industry-context"
                className="text-[22px] font-bold tracking-tight md:text-[24px]"
              >
                Why Transparency Matters
              </h2>

              <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-white/85 md:text-[16.5px]">
                <p>
                  Over the years, food delivery across the industry has become
                  more complex — not because customers asked for complexity, but
                  because pricing structures have grown harder to understand.
                </p>

                <p>
                  Many people now feel uncertain about what they’re really paying
                  for: menu pricing that looks different than expected, fees
                  that change between screens, and tipping that can start to feel
                  like a replacement for fair pay.
                </p>

                <p>
                  ManiDine was built to move in the opposite direction. We
                  believe a delivery platform earns trust by being clear and
                  consistent — showing real prices, explaining fees simply, and
                  treating drivers and restaurants fairly without hidden
                  tradeoffs.
                </p>
              </div>
            </section>

            {/* Accountability */}
            <section aria-labelledby="accountability">
              <h2
                id="accountability"
                className="text-[22px] font-bold tracking-tight md:text-[24px]"
              >
                Accountability Comes First
              </h2>

              <div className="mt-4 space-y-4 text-[15.5px] leading-relaxed text-white/85 md:text-[16.5px]">
                <p>This promise isn’t marketing — it’s a commitment.</p>
                <p>
                  If ManiDine ever changes how it operates, those changes should
                  be explained openly and clearly. Trust is earned through
                  consistency, not fine print.
                </p>
                <p>
                  As ManiDine grows, these principles will continue to guide
                  every decision, feature, and policy.
                </p>
              </div>
            </section>

            {/* Signature */}
            <section aria-labelledby="signature">
              <div className="pt-2">
                {/* Caveat name ABOVE Founder line (as requested) */}
                <p
                  className="text-[36px] leading-none text-white/90 md:text-[42px]"
                  style={{ fontFamily: "var(--font-caveat), cursive" }}
                >
                  Mani Kanniappan
                </p>

                {/* Keep only ONE “Founder, ManiDine” line underneath */}
                <p className="mt-2 text-white/80">Founder, ManiDine</p>

                <p className="mt-2 text-white/60">Edmonton, Alberta</p>
              </div>
            </section>
          </div>
        </div>

        <div className="h-8" />
      </div>
    </main>
  );
}

// ManiDine.ca /app/refund/page.tsx — Updated: 2026-01-12 17:55 (America/Edmonton)
// FILE: app/refund/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy",
  description:
    "ManiDine Refund & Cancellation Policy. Learn when cancellations, refunds, and ManiDine Credits may apply.",
  openGraph: {
    title: "Refund & Cancellation Policy | ManiDine",
    description:
      "Learn when cancellations, refunds, and ManiDine Credits may apply.",
    url: "/refund",
    type: "website",
  },
  alternates: { canonical: "/refund" },
};

export default function RefundPolicyPage() {
  return (
    <main className="relative overflow-hidden font-[var(--font-poppins),Poppins,Arial,sans-serif] text-white">
      {/* Background consistent with Privacy/Terms */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#061225] via-[#081b33] to-[#050c18]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
      </div>

      <div className="mx-auto w-full max-w-[980px] px-4 py-12">
        {/* Header */}
        <header className="mb-10 md:mb-12">
          <h1 className="text-center text-[32px] font-extrabold leading-tight tracking-tight md:text-[44px]">
            Refund &amp; Cancellation Policy
          </h1>

          <div className="mx-auto mt-6 h-px w-full max-w-[760px] bg-white/15" />

          <p className="mx-auto mt-5 max-w-[880px] text-center text-[15.5px] leading-relaxed text-white/80 md:text-[16.5px]">
            ManiDine is built to be fair and transparent. This policy explains
            when cancellations, refunds, or ManiDine Credits may apply.
          </p>

          <p className="mt-3 text-center text-[13.5px] text-white/55">
            Effective date: January 12, 2026
          </p>
        </header>

        {/* Glass panel */}
        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md md:p-10">
          <div className="space-y-10 text-[15.5px] leading-relaxed text-white/85 md:text-[16.5px]">
            {/* Intro */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                1. Important Summary
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <span className="font-semibold text-white">
                    No-cancellation after preparation starts:
                  </span>{" "}
                  once a restaurant begins preparing your order, it cannot be
                  cancelled or refunded (except where required by law).
                </li>
                <li>
                  <span className="font-semibold text-white">
                    2-hour reporting window:
                  </span>{" "}
                  issues must be reported in the ManiDine app within{" "}
                  <span className="font-semibold text-white">two (2) hours</span>{" "}
                  of the delivery time.
                </li>
                <li>
                  <span className="font-semibold text-white">
                    Cash vs. Credits transparency:
                  </span>{" "}
                  for major failures (order not delivered or entirely incorrect),
                  refunds are processed to the original payment method by
                  default unless you choose ManiDine Credits.
                </li>
              </ul>
            </section>

            {/* Cancellations */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                2. Cancellations
              </h2>

              <p className="mt-3">
                When you place an order through ManiDine, restaurants often begin
                preparing it immediately. Because food is perishable, orders
                cannot always be cancelled.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">
                  No-cancellation window:
                </span>{" "}
                once a Restaurant begins preparing an order, the order cannot be
                cancelled and is not eligible for a refund, except where required
                by law.
              </p>
            </section>

            {/* Reporting issues */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                3. Reporting an Issue (2-hour rule)
              </h2>

              <p className="mt-3">
                To request a refund or ManiDine Credits, the issue must be
                reported through the ManiDine app within{" "}
                <span className="font-semibold text-white">two (2) hours</span>{" "}
                of the delivery time.
              </p>

              <p className="mt-3">
                Reports made after this window may be denied because ManiDine may
                no longer be able to reasonably verify the issue.
              </p>
            </section>

            {/* What may qualify */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                4. What May Qualify for a Refund or Credits
              </h2>

              <p className="mt-3">
                Eligible resolutions may include a partial refund, full refund,
                or ManiDine Credits depending on the situation and review.
                Examples:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Order never delivered (verified)</li>
                <li>Missing items (verified)</li>
                <li>Incorrect items delivered (verified)</li>
                <li>
                  Order delivered to wrong address due to ManiDine/Driver error
                </li>
                <li>Severely damaged order due to delivery handling issues</li>

                {/* NEW: quality/safety review bullet */}
                <li>
                  <span className="font-semibold text-white">
                    Quality/Safety issues:
                  </span>{" "}
                  concerns such as food being undercooked or containing reported
                  allergens (where the restaurant was notified in the order notes)
                  will be reviewed with the restaurant for a potential refund or
                  credit.
                </li>
              </ul>
            </section>

            {/* What does NOT qualify */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                5. What Usually Does NOT Qualify
              </h2>

              <p className="mt-3">
                Some situations typically do not qualify for refunds or credits,
                except where required by law:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Change of mind after ordering</li>
                <li>Delays caused by traffic, weather, or high demand</li>
                <li>Restaurant preparation delays</li>
                <li>Items disliked (taste preference)</li>
                <li>Issues reported after the 2-hour window</li>
                <li>
                  Delivery issues caused by incorrect delivery address provided
                  by the Customer
                </li>
              </ul>

              {/* NEW: alcohol refusal refund specifics */}
              <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-semibold text-white">
                  Alcohol / age-restricted orders refused at delivery
                </p>
                <p className="mt-2 text-white/85">
                  If an alcohol or other age-restricted delivery is refused due
                  to failed ID verification or intoxication, the cost of the
                  alcohol/age-restricted items will be refunded where applicable,
                  but delivery and service fees are non-refundable to cover the
                  cost of the attempted delivery and return transit, except where
                  prohibited by law.
                </p>
              </div>
            </section>

            {/* Food safety & tamper evident */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                6. Food Safety & Tamper-Evident Packaging
              </h2>

              <p className="mt-3">
                Restaurants are encouraged to package orders using tamper-evident
                seals.
              </p>

              <p className="mt-3">
                ManiDine is not responsible for the integrity of food once it has
                left the Restaurant, provided the Driver followed standard
                transit protocols, except where required by law.
              </p>
            </section>

            {/* Refund method */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                7. How Refunds Are Issued
              </h2>

              <p className="mt-3">
                Approved resolutions may be returned to the original payment
                method or issued as ManiDine Credits, depending on the type of
                issue and review.
              </p>

              {/* NEW: default method for total failures */}
              <div className="mt-5 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-semibold text-white">
                  Default method for “total failures”
                </p>
                <p className="mt-2 text-white/85">
                  For orders that are not delivered or are entirely incorrect,
                  refunds will be processed to the original payment method by
                  default. Customers may choose ManiDine Credits instead for a
                  faster resolution (where available).
                </p>
              </div>

              <p className="mt-5">
                Refund timing depends on payment provider processing times. Some
                refunds may take several business days to appear on your
                statement.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">ManiDine Credits</span>{" "}
                are non-transferable, may have expiry rules as described in the
                app (if applicable), and may only be used within ManiDine.
              </p>
            </section>

            {/* Fraud / abuse */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                8. Fraud Prevention & Abuse
              </h2>

              <p className="mt-3">
                ManiDine reserves the right to deny refunds or credits when we
                reasonably believe claims are frequent, abusive, or fraudulent.
              </p>

              <p className="mt-3">
                We may suspend or terminate accounts that attempt to misuse the
                refund system.
              </p>
            </section>

            {/* Chargebacks */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                9. Chargebacks
              </h2>

              <p className="mt-3">
                If you initiate an unauthorized or abusive chargeback, ManiDine
                may suspend your account and pursue collection of the disputed
                amount plus any payment processor fees incurred, to the extent
                permitted by law.
              </p>

              <p className="mt-3">
                If you believe a charge is incorrect, we strongly recommend
                contacting ManiDine support first so we can resolve it fairly and
                quickly.
              </p>
            </section>

            {/* Consumer law */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                10. Consumer Protection Rights
              </h2>
              <p className="mt-3">
                This policy operates alongside applicable consumer protection
                laws in Alberta and Canada. Nothing in this policy limits any
                non-waivable consumer rights (including statutory cancellation
                rights where applicable), and “except where required by law” is
                intended to preserve those rights.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                11. Contact Support
              </h2>
              <p className="mt-3">
                For refund and order issue support, contact us:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Email: <span className="text-white">support@manidine.ca</span>
                </li>
                <li>Location: Edmonton, Alberta, Canada</li>
              </ul>
            </section>
          </div>
        </div>

        <div className="h-8" />
      </div>
    </main>
  );
}

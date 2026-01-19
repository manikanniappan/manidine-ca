// ManiDine.ca /app/terms/page.tsx — Updated: 2026-01-12 16:35 (America/Edmonton)
// FILE: app/terms/page.tsx

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "ManiDine Terms & Conditions. Rules for using ManiDine services for Customers, Drivers, and Restaurants.",
  openGraph: {
    title: "Terms & Conditions | ManiDine",
    description:
      "Rules for using ManiDine services for Customers, Drivers, and Restaurants.",
    url: "/terms",
    type: "website",
  },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="relative overflow-hidden font-[var(--font-poppins),Poppins,Arial,sans-serif] text-white">
      {/* Background consistent with Privacy/Founder */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#061225] via-[#081b33] to-[#050c18]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
      </div>

      <div className="mx-auto w-full max-w-[980px] px-4 py-12">
        {/* Header */}
        <header className="mb-10 md:mb-12">
          <h1 className="text-center text-[34px] font-extrabold leading-tight tracking-tight md:text-[44px]">
            ManiDine Terms &amp; Conditions
          </h1>

          <div className="mx-auto mt-6 h-px w-full max-w-[760px] bg-white/15" />

          <p className="mt-3 text-center text-[13.5px] text-white/55">
            Effective date: January 12, 2026
          </p>
        </header>

        {/* Glass panel */}
        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md md:p-10">
          <div className="space-y-10 text-[15.5px] leading-relaxed text-white/85 md:text-[16.5px]">
            {/* 0 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                0. Legal Agreement
              </h2>
              <p className="mt-3">
                These Terms &amp; Conditions (the “Terms”) form a legally binding
                agreement between you and ManiDine regarding your use of
                ManiDine’s website, mobile applications, and services
                (collectively, the “Services”).
              </p>
              <p className="mt-3">
                By accessing or using ManiDine, you agree to these Terms. If you
                do not agree, do not use the Services.
              </p>
            </section>

            {/* 1 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                1. Who We Are
              </h2>
              <p className="mt-3">
                ManiDine provides a technology platform that connects Customers,
                Restaurants, and Drivers for food ordering and delivery services
                in Edmonton, Alberta, and surrounding areas.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                2. Definitions
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <span className="font-semibold text-white">“Customer”</span>:
                  A user who places an order.
                </li>
                <li>
                  <span className="font-semibold text-white">“Restaurant”</span>:
                  A merchant selling food and related goods.
                </li>
                <li>
                  <span className="font-semibold text-white">“Driver”</span>: An
                  independent delivery partner.
                </li>
                <li>
                  <span className="font-semibold text-white">“Order”</span>: A
                  request placed for goods through ManiDine.
                </li>
              </ul>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                3. Eligibility &amp; Minor Policy
              </h2>
              <p className="mt-3">
                You must be at least 18 years of age to create an account.
                Users between 13 and 17 may use the service only under the
                direct supervision of a parent or guardian who owns the account.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                4. Account Security
              </h2>
              <p className="mt-3">
                You are responsible for all activities under your account. You
                agree to provide accurate information and notify us immediately
                of any unauthorized access.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                5. Ordering &amp; Delivery
              </h2>

              <p className="mt-3">
                <span className="font-semibold text-white">
                  Restaurant Responsibility:
                </span>{" "}
                Restaurants are responsible for food preparation and safety.
              </p>

              {/* Added tamper-evident clause */}
              <p className="mt-3">
                Restaurants are encouraged to provide orders in tamper-evident
                packaging. ManiDine is not responsible for the integrity of food
                once it has left the Restaurant, provided the Driver has
                followed standard transit protocols, except where required by
                law.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">
                  Driver Responsibility:
                </span>{" "}
                Drivers are responsible for safe transit and following delivery
                instructions.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">
                  Delivery Estimates:
                </span>{" "}
                Times provided are estimates only. Traffic, weather, and
                restaurant delays do not entitle the Customer to a refund (except
                where required by law).
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                6. Prices, Fees, and Payments
              </h2>
              <p className="mt-3">
                You authorize ManiDine (via Stripe) to charge your provided
                payment method for the total Order cost, including service fees,
                delivery fees, taxes, and tips.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                7. Cancellations, Refunds, and Disputes
              </h2>

              {/* Added Alberta consumer protection acknowledgement */}
              <p className="mt-3">
                Refund and cancellation practices may be subject to applicable
                consumer protection laws (including Alberta and Canadian laws),
                and nothing in these Terms limits any non-waivable consumer
                rights.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">
                  No-Cancellation Window:
                </span>{" "}
                Once a Restaurant begins preparing an Order, it cannot be
                cancelled or refunded (except where required by law).
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">Reporting Issues:</span>{" "}
                Any issues (missing items, incorrect orders) must be reported via
                the ManiDine app within two (2) hours of the delivery time.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">Refund Discretion:</span>{" "}
                Refunds or “ManiDine Credits” may be issued at our discretion,
                subject to applicable law. We reserve the right to deny refunds
                for frequent, abusive, or fraudulent claims.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">Chargebacks:</span>{" "}
                Unauthorized credit card chargebacks are considered a breach of
                these Terms. We reserve the right to suspend your account and
                pursue collection of the disputed amount plus any bank fees
                incurred, to the extent permitted by law.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                8. Driver Relationship (Insurance &amp; Equipment)
              </h2>
              <p className="mt-3">
                Drivers are independent contractors, not employees.
              </p>
              <p className="mt-3">
                Drivers provide their own vehicles and equipment.
              </p>
              <p className="mt-3">
                <span className="font-semibold text-white">Insurance:</span>{" "}
                Drivers represent and warrant that they maintain valid vehicle
                insurance with appropriate endorsements for commercial
                delivery/courier use as required by Alberta law, specifically
                including coverage that applies while the Driver is logged into
                the ManiDine platform and performing delivery services. ManiDine
                is not liable for accidents or traffic violations occurring
                during a delivery.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                9. Restaurant Relationship &amp; Allergy Disclaimer
              </h2>
              <p className="mt-3">Restaurants are independent businesses.</p>

              <p className="mt-3">
                <span className="font-semibold text-white">ALLERGY WARNING:</span>{" "}
                ManiDine does not prepare food and cannot guarantee that any
                items are free of allergens (including nuts, dairy, or gluten).
                Customers with severe or life-threatening allergies must contact
                the Restaurant directly before ordering.
              </p>

              <p className="mt-3">
                ManiDine is not responsible for any illness or injury resulting
                from food preparation, ingredients, or misleading menu
                descriptions, except where prohibited by law.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                10. User Conduct
              </h2>
              <p className="mt-3">
                You agree not to harass Drivers or Restaurant staff, use the
                platform for fraud, or attempt to bypass our security features.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                11. Age-Restricted Items (Alcohol &amp; Tobacco)
              </h2>
              <p className="mt-3">
                If an Order contains alcohol or other age-restricted items:
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">ID Verification:</span>{" "}
                The Customer must present a valid, government-issued photo ID to
                the Driver upon delivery.
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">Refusal of Delivery:</span>{" "}
                The Driver must refuse delivery if the Customer is under 18, the
                Customer appears intoxicated, or the Customer cannot provide a
                valid ID (and as otherwise required by law).
              </p>

              <p className="mt-3">
                <span className="font-semibold text-white">Restocking Fee:</span>{" "}
                If a delivery is refused for the reasons above, the Customer may
                be charged a non-refundable restocking/delivery fee to compensate
                the Driver and ManiDine for the attempted service, except where
                prohibited by law.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                12. Intellectual Property
              </h2>
              <p className="mt-3">
                The ManiDine name, logos, and software are the exclusive property
                of ManiDine.
              </p>
            </section>

            {/* 13 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                13. Disclaimer of Warranties
              </h2>
              <p className="mt-3">
                ManiDine is provided “as is.” We do not guarantee that the
                platform will be 100% error-free or that every Order will be
                fulfilled by a Driver.
              </p>
            </section>

            {/* 14 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                14. Limitation of Liability
              </h2>
              <p className="mt-3">
                To the maximum extent permitted by law, ManiDine’s total
                liability for any claim is limited to the amount paid by you to
                ManiDine in the thirty (30) days prior to the event. We are not
                liable for indirect or consequential damages.
              </p>
            </section>

            {/* 15 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                15. Indemnification
              </h2>
              <p className="mt-3">
                You agree to hold ManiDine harmless from any claims or losses
                arising from your misuse of the platform or violation of these
                Terms.
              </p>
            </section>

            {/* 16 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                16. Termination
              </h2>
              <p className="mt-3">
                We reserve the right to suspend or terminate any account that
                violates these Terms or engages in behavior that creates a risk
                for our community.
              </p>
            </section>

            {/* 17 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                17. Governing Law
              </h2>
              <p className="mt-3">
                These Terms are governed by the laws of the Province of Alberta,
                Canada. Any disputes shall be settled in the courts of Edmonton,
                Alberta, unless prohibited by applicable law.
              </p>
            </section>

            {/* 18 */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                18. Contact
              </h2>
              <p className="mt-3">
                Email: <span className="text-white">support@manidine.ca</span>
              </p>
              <p className="mt-2 text-white/80">
                Location: Edmonton, Alberta, Canada.
              </p>
            </section>

            {/* Extra legal boilerplate */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                Additional Legal Terms
              </h2>
              <p className="mt-3">
                <span className="font-semibold text-white">Severability:</span>{" "}
                If any part of these Terms is found unenforceable, the remaining
                sections remain in effect.
              </p>
              <p className="mt-3">
                <span className="font-semibold text-white">No Waiver:</span> If
                ManiDine does not enforce a provision of these Terms, it does not
                waive the right to enforce it later.
              </p>
              <p className="mt-3">
                <span className="font-semibold text-white">Updates:</span> We may
                update these Terms from time to time by posting an updated
                version on this page and changing the effective date.
              </p>
            </section>
          </div>
        </div>

        <div className="h-8" />
      </div>
    </main>
  );
}

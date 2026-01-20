// ManiDine.ca — FILE: /app/privacy/page.tsx — Updated: 2026-01-20 03:40 PM (America/Edmonton)

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ManiDine Privacy Policy. Learn what information we collect, how we use it, and your choices and rights.",
  openGraph: {
    title: "Privacy Policy | ManiDine",
    description:
      "Learn what information ManiDine collects, how it is used, and your choices and rights.",
    url: "/privacy",
    type: "website",
  },
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden font-[var(--font-poppins),Poppins,Arial,sans-serif] text-white">
      {/* Background (consistent with Founder page vibe) */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#061225] via-[#081b33] to-[#050c18]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
      </div>

      <div className="mx-auto w-full max-w-[980px] px-4 py-12">
        {/* Header */}
        <header className="mb-10 md:mb-12">
          <h1 className="text-center text-[34px] font-extrabold leading-tight tracking-tight md:text-[44px]">
            Privacy Policy
          </h1>

          <div className="mx-auto mt-6 h-px w-full max-w-[760px] bg-white/15" />

          <p className="mx-auto mt-5 max-w-[880px] text-center text-[15.5px] leading-relaxed text-white/80 md:text-[16.5px]">
            ManiDine is built on transparency — and that includes how we handle
            personal information. This Privacy Policy explains what we collect,
            how we use it, and the choices available to you.
          </p>

          <p className="mt-3 text-center text-[13.5px] text-white/55">
            Effective date: January 12, 2026
          </p>
        </header>

        {/* Glass panel */}
        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md md:p-10">
          <div className="space-y-10 text-[15.5px] leading-relaxed text-white/85 md:text-[16.5px]">
            {/* Definitions */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                0. Definitions
              </h2>
              <p className="mt-3">In this Privacy Policy:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <span className="font-semibold text-white">
                    “Personal Information”
                  </span>{" "}
                  means information that identifies you or can reasonably be used
                  to identify you.
                </li>
                <li>
                  <span className="font-semibold text-white">“Services”</span>{" "}
                  means ManiDine’s website, mobile apps, portals, and related
                  services.
                </li>
                <li>
                  <span className="font-semibold text-white">“You”</span> refers
                  to Customers, Drivers, Restaurants, and visitors depending on
                  usage.
                </li>
              </ul>
            </section>

            {/* Applies */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                1. Who This Policy Applies To
              </h2>
              <p className="mt-3">
                This Privacy Policy applies to ManiDine’s website, mobile apps,
                and services (collectively, the “Services”), including Customers,
                Drivers, and Restaurants.
              </p>
            </section>

            {/* Collection */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                2. Information We Collect
              </h2>
              <p className="mt-3">
                We collect information needed to operate ManiDine reliably,
                securely, and fairly.
              </p>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                A) Information you provide
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Name, email address, phone number</li>
                <li>Delivery addresses and delivery instructions</li>
                <li>Order details and preferences</li>
                <li>Support messages and communications</li>
                <li>
                  Restaurant details (business name, address, menu, staff contact
                  details)
                </li>
              </ul>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                B) Information collected automatically
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Device type, operating system, app version</li>
                <li>Diagnostic and log data (crashes, errors, timestamps)</li>
                <li>App usage and interaction events (for improvement)</li>
              </ul>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                C) Location information (Drivers)
              </h3>
              <p className="mt-3">
                If you are a Driver, we may collect real-time GPS location to
                route deliveries, provide ETA updates, and support safety and
                fraud prevention. This may be collected in the background while
                you are on shift (depending on device permissions).
              </p>
              <p className="mt-3">
                You may change permissions through device settings; however,
                disabling location may prevent certain delivery features from
                working correctly.
              </p>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                D) Payments
              </h3>
              <p className="mt-3">
                ManiDine uses Stripe to process payments.{" "}
                <span className="font-semibold text-white">
                  ManiDine does not store full card numbers or CVVs.
                </span>{" "}
                Payment processing information is handled by Stripe under their
                own security and compliance requirements.
              </p>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                E) App permissions
              </h3>
              <p className="mt-3">
                Depending on the Services you use, ManiDine may request device
                permissions such as location and notifications. If permission is
                denied, some features may not function properly.
              </p>
            </section>

            {/* Use */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                3. How We Use Information
              </h2>
              <p className="mt-3">
                We use information to operate ManiDine and provide a safe,
                reliable experience. This includes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Create and manage accounts</li>
                <li>Process, route, and deliver orders</li>
                <li>Provide receipts, order updates, and support</li>
                <li>Prevent fraud, misuse, and unauthorized access</li>
                <li>Improve performance, safety, and usability</li>
                <li>Comply with legal requirements</li>
              </ul>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                Automated decision-making
              </h3>
              <p className="mt-3">
                We may use algorithms to support operational decisions such as
                batching orders or assigning Drivers. These processes are
                monitored to support fairness, safety, and efficiency.
              </p>
            </section>

            {/* Sharing */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                4. How We Share & Transfer Information
              </h2>
              <p className="mt-3">
                ManiDine does not sell personal information. We share information
                only as needed to operate the platform.
              </p>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                A) Sharing for delivery and order completion
              </h3>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Restaurants receive order details needed to prepare food.</li>
                <li>
                  Drivers receive delivery details needed to complete delivery,
                  including address and instructions.
                </li>
              </ul>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                B) Sharing with service providers
              </h3>
              <p className="mt-3">
                We use service providers to operate ManiDine, such as:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Stripe (payments)</li>
                <li>Firebase / Google Cloud (authentication, database, storage)</li>
                <li>Google Analytics (website analytics)</li>
                <li>
                  Apple and Google systems (push notifications and device
                  delivery services)
                </li>
              </ul>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                C) International data transfers
              </h3>
              <p className="mt-3">
                Data may be processed in the United States or other jurisdictions
                by our service providers (such as Google Cloud/Firebase and
                Stripe). By using ManiDine, you acknowledge that your personal
                information may be subject to the laws of those regions.
              </p>

              <h3 className="mt-6 text-[17px] font-semibold text-white">
                D) Legal and safety disclosures
              </h3>
              <p className="mt-3">
                We may disclose information if required to comply with law,
                regulation, lawful requests, or to protect users, restaurants,
                drivers, and ManiDine.
              </p>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                5. Website Cookies & Analytics
              </h2>
              <p className="mt-3">
                ManiDine.ca may use cookies and similar technologies to support
                site functionality and analytics. We use Google Analytics (GA4)
                to understand traffic and improve content.
              </p>
              <p className="mt-3">
                You can control cookies through your browser settings. Disabling
                cookies may affect certain site functionality.
              </p>
            </section>

            {/* Retention */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                6. Data Retention & Deletion
              </h2>
              <p className="mt-3">
                We retain personal information only as long as necessary for
                operations, security, fraud prevention, dispute resolution,
                chargebacks/refunds, and legal compliance.
              </p>
              <p className="mt-3">
                You may delete your account directly in the app under Profile →
                Delete Account, or by contacting support. Some information may
                be retained where required for legal, accounting, or security
                reasons.
              </p>
            </section>

            {/* Security */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                7. Security & Breach Notification
              </h2>
              <p className="mt-3">
                We use reasonable administrative, technical, and physical
                safeguards designed to protect information from unauthorized
                access, loss, misuse, or alteration. However, no system can be
                guaranteed 100% secure.
              </p>
              <p className="mt-3">
                In the event of a security breach posing a “real risk of
                significant harm,” we will notify affected individuals and the
                relevant Privacy Commissioner(s) as required by Alberta’s PIPA
                and Canada’s PIPEDA (where applicable).
              </p>
            </section>

            {/* Rights */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                8. Your Rights (Alberta & Canada)
              </h2>
              <p className="mt-3">
                You have the right to access or correct your personal
                information, withdraw consent for certain processing (subject to
                legal limits), and request deletion where applicable.
              </p>
              <p className="mt-3">
                You may contact ManiDine to request access, corrections, or
                deletion.
              </p>
            </section>

            {/* Communications */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                9. Notifications & Communications
              </h2>
              <p className="mt-3">
                ManiDine may send service-related communications such as order
                confirmations, receipts, delivery updates, security notices, and
                support responses. If marketing messages are offered in the
                future, you will have the ability to opt out.
              </p>
            </section>

            {/* Minors */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                10. Minors Policy & Parental Consent
              </h2>
              <p className="mt-3">
                ManiDine is intended for use by individuals who are at least 18
                years of age (the age of majority in Alberta).
              </p>
              <p className="mt-3">
                <span className="font-semibold text-white">Minors Under 13:</span>{" "}
                We do not knowingly collect personal information from children
                under 13. If we learn we have collected such data, it will be
                deleted immediately.
              </p>
              <p className="mt-3">
                <span className="font-semibold text-white">Users Aged 13–17:</span>{" "}
                Individuals under 18 but at least 13 years of age may only use
                ManiDine under the supervision of a parent or legal guardian who
                agrees to be bound by our Terms of Service.
              </p>
              <p className="mt-3">
                <span className="font-semibold text-white">Age-Restricted Items:</span>{" "}
                Under no circumstances may a minor purchase alcohol, tobacco, or
                other age-restricted products through ManiDine. Drivers are
                required to verify physical government-issued ID for these items
                at time of delivery.
              </p>
            </section>

            {/* Changes */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                11. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. If changes
                are made, we will update the “Effective date” shown at the top
                of this page. For significant changes, we may provide additional
                notice within the Services.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                12. Contact Us
              </h2>
              <p className="mt-3">
                If you have questions, requests, or complaints related to
                privacy, contact our Privacy Officer:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Email: <span className="text-white">support@manidine.ca</span>
                </li>
                <li>Attn: Privacy Officer</li>
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

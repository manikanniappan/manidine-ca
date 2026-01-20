// ManiDine.ca — FILE: /app/data-deletion/page.tsx — Updated: 2026-01-20 03:45 PM (America/Edmonton)
// FILE: app/data-deletion/page.tsx

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Data Deletion Instructions",
  description:
    "How to request deletion of your ManiDine account and personal data, including what is deleted and what may be retained for legal and security reasons.",
  openGraph: {
    title: "Data Deletion Instructions | ManiDine",
    description:
      "How to request deletion of your ManiDine account and personal data, including what is deleted and what may be retained for legal and security reasons.",
    url: "/data-deletion",
    type: "website",
  },
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <main className="relative overflow-hidden font-[var(--font-poppins),Poppins,Arial,sans-serif] text-white">
      {/* Background consistent with Privacy/Terms/Refund */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#061225] via-[#081b33] to-[#050c18]" />
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] mix-blend-overlay">
        <div className="h-full w-full bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.35)_1px,transparent_0)] [background-size:16px_16px]" />
      </div>

      <div className="mx-auto w-full max-w-[980px] px-4 py-12">
        {/* Header */}
        <header className="mb-10 md:mb-12">
          <h1 className="text-center text-[32px] font-extrabold leading-tight tracking-tight md:text-[44px]">
            Data Deletion Instructions
          </h1>

          <div className="mx-auto mt-6 h-px w-full max-w-[760px] bg-white/15" />

          <p className="mx-auto mt-5 max-w-[880px] text-center text-[15.5px] leading-relaxed text-white/80 md:text-[16.5px]">
            ManiDine respects your privacy. This page explains how to request
            deletion of your ManiDine account and personal data, what happens
            when you do, and what information may be retained for legal and
            security reasons.
          </p>

          <p className="mt-3 text-center text-[13.5px] text-white/55">
            Effective date: January 12, 2026
          </p>
        </header>

        {/* Glass panel */}
        <div className="rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-md md:p-10">
          <div className="space-y-10 text-[15.5px] leading-relaxed text-white/85 md:text-[16.5px]">
            {/* Overview */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                1. Overview
              </h2>
              <p className="mt-3">
                You can request deletion of your ManiDine account and associated
                personal information at any time. We may need to verify your
                identity before completing deletion to protect your account.
              </p>
              <p className="mt-3">
                This page applies to ManiDine Customers, Drivers, and Restaurant
                users (staff accounts).
              </p>
            </section>

            {/* Option A: In-app */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                2. Delete Your Account In the App
              </h2>
              <p className="mt-3">
                You can delete your ManiDine account directly in the app by
                going to:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  <span className="font-semibold text-white">Profile</span> →{" "}
                  <span className="font-semibold text-white">
                    Delete Account
                  </span>
                </li>
              </ul>
              <p className="mt-3">
                After submitting, your request will be processed according to
                the timelines described below.
              </p>
            </section>

            {/* Option B: Email */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                3. Delete Your Account by Email (Always Available)
              </h2>
              <p className="mt-3">
                You can also request deletion at any time by emailing our
                Privacy Officer:
              </p>

              <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <p className="font-semibold text-white">Email</p>
                <p className="mt-1 text-white/90">support@manidine.ca</p>
                <p className="mt-3 font-semibold text-white">Subject line</p>
                <p className="mt-1 text-white/90">
                  Data Deletion Request — ManiDine
                </p>
              </div>

              <p className="mt-4">
                Please include the following in your request:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  The email address and/or phone number used for your account
                </li>
                <li>Your role: Customer, Driver, or Restaurant staff</li>
                <li>
                  A short message confirming you want your account and personal
                  data deleted
                </li>
              </ul>
            </section>

            {/* Verification */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                4. Verification (Protecting Your Account)
              </h2>
              <p className="mt-3">
                To prevent unauthorized deletion, we may ask you to verify your
                request. Verification may include confirming access to the email
                address or phone number associated with your ManiDine account.
              </p>
            </section>

            {/* Timeline */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                5. Processing Time
              </h2>
              <p className="mt-3">
                We aim to process deletion requests promptly. In most cases,
                deletion is completed within{" "}
                <span className="font-semibold text-white">30 days</span> of
                verification, unless a longer period is required due to legal,
                security, or dispute-related reasons.
              </p>
            </section>

            {/* What gets deleted */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                6. What We Delete
              </h2>
              <p className="mt-3">
                Depending on your role and how you used ManiDine, deletion may
                include:
              </p>

              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Account profile details (name, email, phone)</li>
                <li>Saved delivery addresses (where applicable)</li>
                <li>App preferences and communication settings</li>
                <li>Support conversation history (where feasible)</li>
              </ul>

              <p className="mt-4">
                If you are a Driver or Restaurant user, deletion may also
                include certain profile information tied to that account.
              </p>
            </section>

            {/* What may be retained */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                7. What We May Retain (Legal, Security, and Accounting)
              </h2>
              <p className="mt-3">
                Even after account deletion, ManiDine may retain certain limited
                information where necessary for:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>Legal compliance and regulatory obligations</li>
                <li>Tax and accounting requirements</li>
                <li>Fraud prevention, misuse detection, and platform security</li>
                <li>Resolving disputes, chargebacks, and refunds</li>
              </ul>

              <p className="mt-3">
                Where retained, we minimize the data and restrict access. In
                many cases, retained records may be de-identified or separated
                from your active profile.
              </p>
            </section>

            {/* Payments note */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                8. Payments (Stripe)
              </h2>
              <p className="mt-3">
                Payments are processed by Stripe. ManiDine does not store full
                card numbers or CVV codes. If you request deletion, Stripe may
                retain certain transaction records as required for legal,
                financial, and compliance reasons.
              </p>
            </section>

            {/* Effects */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                9. What Happens After Deletion
              </h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  You will no longer be able to sign in to the deleted account
                </li>
                <li>Past order history may no longer appear in the app</li>
                <li>
                  Saved addresses and preferences are removed (where applicable)
                </li>
                <li>
                  If you want to use ManiDine again, you may need to create a
                  new account
                </li>
              </ul>
            </section>

            {/* Contact & privacy */}
            <section>
              <h2 className="text-[20px] font-bold text-white md:text-[22px]">
                10. Contact
              </h2>
              <p className="mt-3">
                For data deletion requests or privacy questions, contact:
              </p>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                <li>
                  Email: <span className="text-white">support@manidine.ca</span>
                </li>
                <li>Attn: Privacy Officer</li>
                <li>Location: Edmonton, Alberta, Canada</li>
              </ul>

              <p className="mt-4 text-white/80">
                You may also review our{" "}
                <Link
                  href="/privacy"
                  className="text-white underline underline-offset-4 hover:text-white/90"
                >
                  Privacy Policy
                </Link>{" "}
                for additional information.
              </p>
            </section>
          </div>
        </div>

        <div className="h-8" />
      </div>
    </main>
  );
}

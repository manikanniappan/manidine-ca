// ManiDine.ca /app/about/page.tsx — Updated: 2026-01-14 14:35 America/Edmonton
// FILE: app/about/page.tsx – ManiDine.ca (About Us page)

import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "../../components/RevealOnScroll"; // ✅ FIXED: relative import

export const metadata = {
  title: "About Us | ManiDine",
  description:
    "Built in Edmonton to make food delivery fair, simple, and transparent — with real menu prices, clear fees, and predictable totals.",
};

export default function AboutPage() {
  return (
    <main className="w-full bg-[#050a14] text-white">
      {/* HERO */}
      <section className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero/edmonton.jpg"
            alt="Edmonton skyline"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/90 via-[#050a14]/85 to-[#050a14]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20">
          <div className="max-w-3xl">
            <p className="text-sm tracking-wide text-white/70">
              Edmonton-owned • Built for trust
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              About{" "}
              <span className="bg-gradient-to-r from-[#8A31FF] via-[#B23BFF] to-[#FF4FDA] bg-clip-text text-transparent">
                ManiDine
              </span>
            </h1>

            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              Built in Edmonton to make food delivery{" "}
              <span className="font-semibold text-white">fair</span>,{" "}
              <span className="font-semibold text-white">simple</span>, and{" "}
              <span className="font-semibold text-white">transparent</span>.
            </p>

            {/* Feature Grid (bigger icons + subtext) */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <FeatureMini
                icon={<IconReceipt />}
                title="Real menu prices"
                body="Designed to reflect restaurant pricing clearly."
              />
              <FeatureMini
                icon={<IconFlatFee />}
                title="Clear fees"
                body="A straightforward structure you can understand."
              />
              <FeatureMini
                icon={<IconShield />}
                title="Predictable totals"
                body="No late “mystery fees” that change the math."
              />
              <FeatureMini
                icon={<IconPin />}
                title="Local accountability"
                body="Built and improved here in Edmonton."
              />
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-6 pb-20 pt-12">
        {/* SECTION 1: Problem (zigzag) */}
        <RevealOnScroll>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeader
                eyebrow="The problem we set out to solve"
                title="Why food delivery stopped feeling fair"
              />

              {/* Narrow text width */}
              <div className="mt-6 max-w-2xl space-y-4 text-white/80 leading-7">
                <p>
                  Ordering food should be simple. You choose a restaurant, place
                  your order, and know what you’re paying.
                </p>
                <p>
                  But over time, food delivery became more complicated than it
                  needed to be.
                </p>
                <p>
                  Customers started seeing menu prices that didn’t match the
                  restaurant, multiple layered fees, and totals that changed
                  between screens. Even when ordering from a favorite local
                  place, the final cost often felt unclear — or higher than
                  expected.
                </p>
                <p>
                  This experience made food delivery feel unpredictable. Not
                  because customers were ordering more, but because the system
                  itself became harder to understand.
                </p>
                <p className="text-white">
                  ManiDine was created to challenge that complexity —{" "}
                  <span className="font-semibold">
                    not with gimmicks or promotions, but with clarity
                  </span>
                  .
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <GlassCard>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <IconClarity />
                  </div>
                  <div>
                    <div className="text-lg font-semibold">What “clarity” means</div>
                    <div className="text-sm text-white/65">
                      Simple, explained pricing — before you pay.
                    </div>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 text-sm text-white/80">
                  <li className="flex gap-3">
                    <BulletCheck />
                    Pricing that’s easy to understand before checkout
                  </li>
                  <li className="flex gap-3">
                    <BulletCheck />
                    No layered “mystery fees” that appear late
                  </li>
                  <li className="flex gap-3">
                    <BulletCheck />
                    Totals designed to stay consistent through checkout
                  </li>
                  <li className="flex gap-3">
                    <BulletCheck />
                    A platform built to earn trust over time
                  </li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </RevealOnScroll>

        {/* SECTION 2: Solution + Receipt Comparison (zigzag flip) */}
        <RevealOnScroll>
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5 lg:order-1">
              <ReceiptComparison />
            </div>

            <div className="lg:col-span-7 lg:order-2">
              <SectionHeader
                eyebrow="How ManiDine is different"
                title="A simpler way to order"
              />

              <div className="mt-6 max-w-2xl space-y-4 text-white/80 leading-7">
                <p>
                  ManiDine is built around a simple principle: customers deserve
                  to know exactly what they’re paying, and why.
                </p>

                <p className="text-white/85">That means:</p>

                <ul className="mt-2 space-y-3 text-sm text-white/80">
                  <li className="flex gap-3">
                    <BulletCheck />
                    Real menu prices — the same prices you’d see in the restaurant
                  </li>
                  <li className="flex gap-3">
                    <BulletCheck />
                    A clear, flat service fee instead of percentage-based markups
                  </li>
                  <li className="flex gap-3">
                    <BulletCheck />
                    No hidden adjustments at checkout
                  </li>
                  <li className="flex gap-3">
                    <BulletCheck />
                    No last-minute surprises after you’ve already decided to order
                  </li>
                </ul>

                <p>
                  The goal isn’t to push customers to spend more — it’s to let
                  them order with confidence.
                </p>

                <p className="text-white font-semibold">
                  When pricing is straightforward, trust follows.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* SECTION 3: Edmonton (zigzag) + Local photo card */}
        <RevealOnScroll>
          <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <SectionHeader eyebrow="Local by design" title="Why start in Edmonton" />

              <div className="mt-6 max-w-2xl space-y-4 text-white/80 leading-7">
                <p>ManiDine was built in Edmonton — intentionally.</p>

                <p>
                  Edmonton is home to an incredibly diverse food scene,
                  independent restaurant owners, and a strong sense of local
                  community. It’s a city where people care about value, fairness,
                  and supporting businesses that give back to the place they
                  operate in.
                </p>

                <p>
                  Starting locally allows ManiDine to stay accountable. Decisions
                  aren’t abstract. Feedback is real. The impact is visible.
                </p>

                <p>
                  Before thinking about scale, ManiDine focuses on getting the
                  fundamentals right — here at home.
                </p>
              </div>

              <GlassCard className="mt-8">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                    <IconPeople />
                  </div>
                  <p className="text-sm leading-6 text-white/85">
                    ManiDine was founded in Edmonton by locals who wanted food
                    delivery to feel fair and easy again. For a more personal
                    note, read{" "}
                    <Link
                      href="/founder"
                      className="font-semibold text-white underline decoration-white/30 underline-offset-4 hover:decoration-white/60"
                    >
                      the Founder Note
                    </Link>
                    .
                  </p>
                </div>
              </GlassCard>
            </div>

            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm">
                <div className="relative h-64 w-full">
                  <Image
                    src="/hero/edmonton.jpg"
                    alt="Edmonton local view"
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14]/80 via-[#050a14]/30 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="rounded-xl border border-white/10 bg-white/5 p-2">
                      <IconPin />
                    </div>
                    <div>
                      <div className="text-lg font-semibold">Accountability matters</div>
                      <div className="text-sm text-white/65">
                        Build locally. Listen locally. Improve locally.
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-white/80">
                    Building locally keeps the product grounded. We can iterate
                    based on real feedback — not assumptions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* SECTION 4: Three Pillars Cards (interactive) */}
        <RevealOnScroll>
          <div className="mt-16">
            <SectionHeader
              eyebrow="Designed for a marketplace"
              title="Who benefits from ManiDine"
            />

            <p className="mt-6 max-w-2xl text-white/80 leading-7">
              ManiDine is designed to work best when everyone involved is treated
              fairly — but it starts with the customer.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <PillarCard
                icon={<IconCustomer />}
                title="Customers"
                body="Clear pricing, real menu costs, and predictable totals make ordering feel simple again."
                highlight="Order with confidence"
              />
              <PillarCard
                icon={<IconDriver />}
                title="Drivers"
                body="Drivers keep 100% of delivery fees and tips, creating a fairer and more transparent earning structure."
                highlight="Keep delivery fees + tips"
              />
              <PillarCard
                icon={<IconRestaurant />}
                title="Restaurants"
                body="Restaurants keep their revenue, without losing large percentages of every order, allowing them to grow sustainably."
                highlight="A restaurant-friendly model"
              />
            </div>

            <GlassCard className="mt-8">
              <div className="text-sm text-white/80">
                This balance isn’t accidental — it’s intentional.
              </div>
            </GlassCard>
          </div>
        </RevealOnScroll>

        {/* FINAL: Built on clarity + CTA */}
        <RevealOnScroll>
          <div className="mt-16">
            <GlassCard className="p-8">
              <SectionHeader eyebrow="The commitment" title="Built on clarity" compact />

              <div className="mt-4 max-w-2xl space-y-4 text-white/80 leading-7">
                <p>ManiDine exists to bring clarity back to food delivery.</p>

                <p>
                  It’s a platform built on straightforward pricing, local
                  accountability, and respect for the people who use it every day —
                  customers, drivers, and restaurants alike.
                </p>

                <p className="text-white">
                  As ManiDine grows, that commitment stays the same:{" "}
                  <span className="font-semibold">
                    no confusion, no shortcuts, and no surprises
                  </span>{" "}
                  — just an honest way to order food.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="/pricing" variant="primary">
                  See Pricing
                </CTAButton>
                <CTAButton href="/contact" variant="ghost">
                  Contact Us
                </CTAButton>
                <CTAButton href="/founder" variant="ghost">
                  Read Founder Note
                </CTAButton>
              </div>

              <p className="mt-5 text-xs text-white/55">
                App download links remain on the homepage.
              </p>
            </GlassCard>
          </div>
        </RevealOnScroll>
      </section>
    </main>
  );
}

/* ----------------------------- UI Helpers ----------------------------- */

function SectionHeader({
  eyebrow,
  title,
  compact,
}: {
  eyebrow: string;
  title: string;
  compact?: boolean;
}) {
  return (
    <div>
      <p className="text-xs tracking-wide text-white/60">{eyebrow}</p>
      <h2 className={`mt-2 font-bold ${compact ? "text-2xl" : "text-2xl sm:text-3xl"}`}>
        {title}
      </h2>
    </div>
  );
}

function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-sm",
        "p-6",
        className || "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function FeatureMini({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2">
          {icon}
        </div>
        <div>
          <div className="text-base font-semibold">{title}</div>
          <div className="mt-1 text-sm leading-6 text-white/70">{body}</div>
        </div>
      </div>
    </div>
  );
}

function PillarCard({
  icon,
  title,
  body,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
  highlight: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/7">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2">
          {icon}
        </div>
        <div className="text-lg font-semibold">{title}</div>
      </div>

      <div className="mt-3 text-sm font-semibold text-white/85">{highlight}</div>

      <p className="mt-3 text-sm leading-6 text-white/80">{body}</p>
    </div>
  );
}

function BulletCheck() {
  return (
    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xs text-white/85">
      ✓
    </span>
  );
}

function CTAButton({
  href,
  children,
  variant,
}: {
  href: string;
  children: React.ReactNode;
  variant: "primary" | "ghost";
}) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className="inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold text-white shadow-sm bg-[#8A31FF] hover:bg-[#7A2AEB] transition"
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
    >
      {children}
    </Link>
  );
}

/* ------------------------- Receipt Comparison ------------------------- */

function ReceiptComparison() {
  return (
    <GlassCard className="p-6">
      <div className="flex items-center gap-3">
        <div className="rounded-xl border border-white/10 bg-white/5 p-2">
          <IconReceipt />
        </div>
        <div>
          <div className="text-lg font-semibold">Receipt comparison</div>
          <div className="text-sm text-white/65">
            A visual example of “clarity” in practice.
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-semibold tracking-wide text-white/70">
            Typical experience
          </div>
          <div className="mt-3 space-y-2 text-sm text-white/80">
            <ReceiptLine label="Menu subtotal" value="$20.00" />
            <ReceiptLine label="Delivery fee" value="$4.99" />
            <ReceiptLine label="Service fee" value="$3.49" />
            <ReceiptLine label="Other fees" value="$1.99" />
            <div className="mt-3 border-t border-white/10 pt-3">
              <ReceiptLine label="Total" value="$30.47" strong />
              <div className="mt-2 text-xs text-white/55">
                Multiple layers can make totals feel hard to predict.
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-4">
          <div className="text-xs font-semibold tracking-wide text-white/70">
            ManiDine approach
          </div>
          <div className="mt-3 space-y-2 text-sm text-white/80">
            <ReceiptLine label="Menu subtotal" value="$20.00" />
            <ReceiptLine label="Delivery fee" value="Distance-based" />
            <ReceiptLine label="Flat service fee" value="$1.99" />
            <div className="mt-3 border-t border-white/10 pt-3">
              <ReceiptLine label="Total" value="Predictable + explained" strong />
              <div className="mt-2 text-xs text-white/55">
                Clear components designed to stay consistent through checkout.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
        <p className="text-xs leading-5 text-white/65">
          Illustrative example (not a guarantee of “always cheaper”). ManiDine is
          built for clarity: fees you can understand and totals that make sense.
        </p>
      </div>
    </GlassCard>
  );
}

function ReceiptLine({
  label,
  value,
  strong,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className={`text-xs ${strong ? "text-white/90 font-semibold" : "text-white/70"}`}>
        {label}
      </span>
      <span className={`text-xs ${strong ? "text-white font-semibold" : "text-white/80"}`}>
        {value}
      </span>
    </div>
  );
}

/* ----------------------------- Inline Icons ---------------------------- */

function IconShield() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/80">
      <path d="M12 2l8 4v6c0 5-3.5 9.5-8 10-4.5-.5-8-5-8-10V6l8-4z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPin() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/80">
      <path d="M12 22s7-4.5 7-12a7 7 0 10-14 0c0 7.5 7 12 7 12z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 10.5a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconReceipt() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/80">
      <path d="M7 2h10v20l-2-1-2 1-2-1-2 1-2-1-2 1V2z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 7h6M9 11h6M9 15h6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconFlatFee() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/80">
      <path d="M4 7h16M6 11h12M8 15h8M10 19h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M7 4h10v3H7V4z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function IconClarity() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/80">
      <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconPeople() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/80">
      <path d="M16 11a4 4 0 10-8 0 4 4 0 008 0z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 22a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconCustomer() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/80">
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" stroke="currentColor" strokeWidth="1.7" />
      <path d="M4 22a8 8 0 0116 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

function IconDriver() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/80">
      <path d="M5 16h6l2-6h6l-1 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 20a2 2 0 100-4 2 2 0 000 4zM17 20a2 2 0 100-4 2 2 0 000 4z" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function IconRestaurant() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="text-white/80">
      <path d="M4 10l8-6 8 6v10H4V10z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

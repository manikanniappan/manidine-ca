// ManiDine.ca / (project root) / components/HeroCarousel.tsx — Updated: 2026-01-16 16:05 (America/Edmonton)
// FILE: components/HeroCarousel.tsx – ManiDine.ca (Option B exact look + wider image + corrected CTAs + new slide images)

"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type Slide = {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;

  imageSrc: string;
  imageAlt: string;

  bg: {
    type: "solid" | "gradient";
    solidColor?: string;
    gradientCss?: string;
  };
};

export default function HeroCarousel() {
  const slides: Slide[] = useMemo(
    () => [
      {
        id: "mission",
        eyebrow: "Edmonton-owned • Built for trust",
        title: "Edmonton’s Honest Food Delivery",
        subtitle: "No markups. No commissions. No games",
        ctaText: "Read about ManiDine",
        ctaHref: "/about",
        imageSrc: "/hero/edmonton.jpg",
        imageAlt: "Edmonton skyline",
        bg: {
          type: "gradient",
          gradientCss:
            "bg-gradient-to-r from-[#8A31FF] via-[#B23BFF] to-[#FF4FDA]",
        },
      },
      {
        id: "fees",
        eyebrow: "Simple fees",
        title: "Flat $1.99 Service Fee",
        subtitle: "No percentage traps. Clear fees you can understand",
        ctaText: "How it works",
        ctaHref: "/pricing",
        // ✅ NEW IMAGE (Slide 2)
        imageSrc: "/hero/slide-2-delivery-bag.jpg",
        imageAlt: "Delivery bag with ManiDine logo",
        bg: { type: "solid", solidColor: "#0f71d4" },
      },
      {
        id: "pricing",
        eyebrow: "Transparency",
        title: "In-Store Pricing",
        subtitle: "Exact same menu prices — designed to avoid markups",
        ctaText: "See Pricing",
        ctaHref: "/pricing",
        // ✅ NEW IMAGE (Slide 3)
        imageSrc: "/hero/slide-3-local-restaurant-van.jpg",
        imageAlt: "Local Edmonton restaurant with ManiDine van outside",
        bg: { type: "solid", solidColor: "#c04309" },
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = slides.length;
  const current = slides[index];

  function goNext() {
    setIndex((i) => (i + 1) % total);
  }
  function goPrev() {
    setIndex((i) => (i - 1 + total) % total);
  }

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % total), 6500);
    return () => clearInterval(t);
  }, [paused, total]);

  return (
    <section
      className="relative w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[46vh] sm:min-h-[48vh]">
        {/* Background outside image */}
        <div className="absolute inset-0">
          {current.bg.type === "solid" && (
            <div
              className="absolute inset-0"
              style={{ backgroundColor: current.bg.solidColor || "#111" }}
            />
          )}

          {current.bg.type === "gradient" && (
            <div className={`absolute inset-0 ${current.bg.gradientCss || ""}`} />
          )}

          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/10" />
        </div>

        {/* Content wrapper (wide) */}
        <div className="relative mx-auto w-full max-w-none px-4 py-6 sm:px-6 sm:py-8">
          <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-3xl border border-white/20 bg-white/10">
            <div className="relative h-[34vh] sm:h-[36vh] md:h-[38vh]">
              <Image
                src={current.imageSrc}
                alt={current.imageAlt}
                fill
                priority
                className="object-cover"
              />

              {/* Option B overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/22 to-black/45" />

              {/* Option B spotlight */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-[260px] w-[88%] max-w-4xl rounded-full bg-black/35 blur-2xl" />
              </div>

              {/* Text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
                {current.eyebrow && (
                  <div className="text-[13px] font-extrabold tracking-wide text-white/95 sm:text-[14px]">
                    {current.eyebrow}
                  </div>
                )}

                <h1 className="mt-3 text-[30px] font-extrabold leading-[1.05] tracking-tight text-white sm:text-[38px] md:text-[48px]">
                  {renderTitleWithOptionalGradient(current.title)}
                </h1>

                <div className="mt-3 text-[14px] font-extrabold tracking-wide text-white/95 sm:text-[15px] md:text-[16px]">
                  {current.subtitle}
                </div>

                <div className="mt-6 flex justify-center">
                  <a
                    href={current.ctaHref}
                    className="inline-flex items-center justify-center rounded-full px-7 py-3 text-[14px] font-semibold text-white shadow-lg shadow-black/35
                    bg-[#050a14]/85 hover:bg-[#050a14] border border-white/20 transition"
                  >
                    {current.ctaText}
                  </a>
                </div>
              </div>

              {/* arrows */}
              <button
                type="button"
                aria-label="Previous slide"
                onClick={goPrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center
                rounded-full border border-white/25 bg-black/20 text-white/90 backdrop-blur-md hover:bg-black/30 transition"
              >
                <ArrowLeft />
              </button>

              <button
                type="button"
                aria-label="Next slide"
                onClick={goNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center
                rounded-full border border-white/25 bg-black/20 text-white/90 backdrop-blur-md hover:bg-black/30 transition"
              >
                <ArrowRight />
              </button>
            </div>
          </div>

          {/* dots */}
          <div className="mt-4 flex items-center justify-center gap-2">
            {slides.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.id}
                  type="button"
                  aria-label={`Go to slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={[
                    "h-2.5 w-2.5 rounded-full transition",
                    active ? "bg-white" : "bg-white/40 hover:bg-white/65",
                  ].join(" ")}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function renderTitleWithOptionalGradient(title: string) {
  const needle = "Honest Food Delivery";
  if (!title.includes(needle)) return title;

  const parts = title.split(needle);
  return (
    <>
      {parts[0]}
      <span className="bg-gradient-to-r from-[#6fb0ff] via-[#0f71d4] to-[#bc5bcaff] bg-clip-text text-transparent">
        {needle}
      </span>
      {parts[1]}
    </>
  );
}

function ArrowLeft() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M15 18l-6-6 6-6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRight() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
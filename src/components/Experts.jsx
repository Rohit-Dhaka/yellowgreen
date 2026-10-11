
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Check,
  Glasses,
  CalendarCheck,
  Sparkles,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

import Specs1 from "../assets/specs1.jfif";
import Specs2 from "../assets/specs2.jfif";
import Specs3 from "../assets/specs3.jfif";
import Specs4 from "../assets/specs4.jfif";
import Specs5 from "../assets/specs5.jfif";
import Specs6 from "../assets/specs6.jfif";

const photos = [
  {
    src: Specs1,
    alt: "Premium optical frame collection",
    title: "Everyday Classics",
    number: "01",
  },
  {
    src: Specs2,
    alt: "Modern eyeglasses designs",
    title: "Modern Essentials",
    number: "02",
  },
  {
    src: Specs3,
    alt: "Stylish eyewear collection",
    title: "Signature Style",
    number: "03",
  },
  {
    src: Specs4,
    alt: "Contemporary optical frames",
    title: "Timeless Frames",
    number: "04",
  },
  {
    src: Specs5,
    alt: "Fashion eyewear collection",
    title: "Urban Collection",
    number: "05",
  },
  {
    src: Specs6,
    alt: "Comfortable prescription glasses",
    title: "Everyday Comfort",
    number: "06",
  },
];

const perks = [
  "Comfort-first fit",
  "Quality frames",
  "Affordable options",
  "Modern designs",
];

function Pic({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-[#dce8ff] text-[#2864f5] ${className}`}
      >
        <Glasses size={40} strokeWidth={1.4} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

export default function Experts() {
  const [activePhoto, setActivePhoto] = useState(0);
  const featured = photos[activePhoto];

  return (
    <section className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -right-32 top-10 -z-10 h-80 w-80 rounded-full bg-[#dce8ff]/70 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-20 -z-10 h-72 w-72 rounded-full bg-[#f0f4ff] blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="grid gap-7 md:grid-cols-2 md:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2864f5]/15 bg-[#f0f4ff] px-4 py-2 text-[11px] font-bold tracking-[0.16em] text-[#2864f5] sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#2864f5]" />
              OUR EYEWEAR COLLECTION
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-[#13284d] sm:text-4xl lg:text-5xl">
              A clearer view.
              <br />
              <span className="text-[#2864f5]">
                A style that's yours.
              </span>
            </h2>
          </div>

          <div className="max-w-lg md:justify-self-end">
            <p className="text-sm leading-7 text-slate-600 sm:text-base">
              Discover eyewear that complements your personality while keeping
              comfort and clear vision at the heart of every choice.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#dce8ff] text-[#2864f5]">
                <Sparkles size={19} />
              </span>
              <div>
                <p className="text-sm font-semibold text-[#13284d]">
                  Find your everyday favourite
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  Comfort, quality and contemporary style
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Main showcase */}
        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-12">
          {/* Featured image */}
          <div className="relative flex min-w-0 flex-col overflow-hidden rounded-[28px] border border-[#dce8ff] bg-[#f0f4ff] lg:col-span-7">
            <Link
              to="/appointment"
              aria-label="Book an appointment to explore our eyewear"
              className="group relative block min-h-[370px] flex-1 overflow-hidden sm:min-h-[490px]"
            >
              <Pic
                src={featured.src}
                alt={featured.alt}
                className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#10264d]/90 via-[#10264d]/15 to-transparent" />

              <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/95 px-3.5 py-2 text-[10px] font-bold tracking-wider text-[#2864f5] shadow-sm sm:left-7 sm:top-7 sm:text-xs">
                <Sparkles size={14} />
                FEATURED COLLECTION
              </span>

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8 lg:p-9">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#dce8ff]">
                  {featured.number} / 06 · {featured.title}
                </p>

                <div className="mt-3 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="max-w-md text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                      See better.
                      <br />
                      Feel confident.
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                      Explore frames selected for your comfort and personal
                      style.
                    </p>
                  </div>

                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2864f5] text-white transition-all duration-300 group-hover:rotate-45 group-hover:bg-white group-hover:text-[#2864f5] sm:h-14 sm:w-14">
                    <ArrowUpRight size={23} />
                  </span>
                </div>
              </div>
            </Link>

            {/* Featured image selector */}
            <div className="flex items-center justify-between gap-3 border-t border-[#dce8ff] bg-white px-4 py-4 sm:px-6">
              <p className="text-xs font-semibold text-[#13284d] sm:text-sm">
                Explore collection
              </p>

              <div className="flex items-center gap-2">
                {photos.map((photo, index) => (
                  <button
                    key={photo.number}
                    type="button"
                    onClick={() => setActivePhoto(index)}
                    aria-label={`Show ${photo.title}`}
                    aria-pressed={activePhoto === index}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activePhoto === index
                        ? "w-8 bg-[#2864f5]"
                        : "w-2.5 bg-[#dce8ff] hover:bg-[#2864f5]/50"
                    }`}
                  />
                ))}
              </div>

              <span className="text-xs font-bold tabular-nums text-[#2864f5]">
                {String(activePhoto + 1).padStart(2, "0")} / 06
              </span>
            </div>
          </div>

          {/* Right-side collection cards */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5">
            {photos
              .filter((_, index) => index !== activePhoto)
              .slice(0, 4)
              .map((photo) => {
                const originalIndex = photos.findIndex(
                  (item) => item.number === photo.number
                );

                return (
                  <button
                    key={photo.number}
                    type="button"
                    onClick={() => setActivePhoto(originalIndex)}
                    aria-label={`Feature ${photo.title}`}
                    className="group relative min-h-[175px] overflow-hidden rounded-2xl border border-[#dce8ff] bg-[#f0f4ff] text-left outline-none transition-all duration-300 hover:-translate-y-1 hover:border-[#2864f5]/50 hover:shadow-lg hover:shadow-[#2864f5]/10 focus-visible:ring-2 focus-visible:ring-[#2864f5] sm:min-h-[220px]"
                  >
                    <Pic
                      src={photo.src}
                      alt={photo.alt}
                      className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#10264d]/85 via-[#10264d]/5 to-transparent" />

                    <span className="absolute left-3 top-3 rounded-lg border border-white/30 bg-[#13284d]/30 px-2.5 py-1 text-[10px] font-semibold text-white backdrop-blur-md sm:left-4 sm:top-4">
                      {photo.number}
                    </span>

                    <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-3 sm:p-4">
                      <span className="text-xs font-semibold leading-5 text-white sm:text-sm">
                        {photo.title}
                      </span>

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition-colors group-hover:bg-[#2864f5]">
                        <ChevronRight size={16} />
                      </span>
                    </span>
                  </button>
                );
              })}

            {/* Collection CTA card */}
            <div className="col-span-2 flex flex-col justify-between gap-4 rounded-2xl border border-[#dce8ff] bg-[#f0f4ff] p-5 sm:flex-row sm:items-center sm:p-6">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#2864f5] shadow-sm">
                  <Glasses size={22} />
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#13284d]">
                    Not sure which frame suits you?
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-slate-600 sm:text-sm">
                    Get guidance during your visit.
                  </p>
                </div>
              </div>

              <Link
                to="/appointment"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#2864f5] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-[#2864f5]/20 sm:text-sm"
              >
                Book a Visit
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom benefits strip */}
        <div className="mt-6 grid gap-6 rounded-[28px] border border-[#dce8ff] bg-white p-5 shadow-[0_12px_40px_-28px_rgba(40,100,245,0.3)] sm:p-7 lg:grid-cols-[0.9fr_1.6fr_auto] lg:items-center lg:gap-8">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#2864f5] sm:text-xs">
              Made for your vision
            </p>
            <h3 className="mt-2 text-xl font-bold tracking-tight text-[#13284d] sm:text-2xl">
              Comfort meets confidence.
            </h3>
          </div>

          <ul className="grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 lg:gap-3">
            {perks.map((perk) => (
              <li
                key={perk}
                className="flex items-center gap-2 text-xs font-medium text-slate-700 sm:text-sm"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#dce8ff] text-[#2864f5]">
                  <Check size={13} strokeWidth={2.8} />
                </span>
                {perk}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3 border-t border-[#dce8ff] pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f0f4ff] text-[#2864f5]">
              <ShieldCheck size={22} />
            </span>

            <div>
              <p className="text-sm font-bold text-[#13284d]">
                Personal guidance
              </p>
              <Link
                to="/appointment"
                className="mt-1 inline-flex items-center gap-1 text-xs font-semibold text-[#2864f5] transition-colors hover:text-[#1d4ed8]"
              >
                Schedule a visit
                <CalendarCheck size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

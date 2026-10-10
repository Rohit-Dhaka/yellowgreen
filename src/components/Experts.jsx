import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, Glasses, CalendarCheck } from "lucide-react";

import Specs1 from "../assets/specs1.jfif";
import Specs2 from "../assets/specs2.jfif";
import Specs3 from "../assets/specs3.jfif";
import Specs4 from "../assets/specs4.jfif";
import Specs5 from "../assets/specs5.jfif";
import Specs6 from "../assets/specs6.jfif";

const photos = [
  { src: Specs1, alt: "Glasses collection one" },
  { src: Specs2, alt: "Glasses collection two" },
  { src: Specs3, alt: "Glasses collection three" },
  { src: Specs4, alt: "Glasses collection four" },
  { src: Specs5, alt: "Glasses collection five" },
  { src: Specs6, alt: "Glasses collection six" },
];

const perks = ["Comfortable", "Affordable", "Quality Frames", "Stylish Designs"];

// Image fallback
function Pic({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-cyan-100 via-[#e6f7f6] to-emerald-100 text-teal-600 ${className}`}
      >
        <Glasses size={44} strokeWidth={1.4} />
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
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-[#f3faf9] px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
            Our Collection
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Best Glasses Frames{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              of the Season!
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
            Discover stylish frames that combine everyday comfort,
            quality and a look that suits you.
          </p>
        </div>

        {/* Main layout */}
        <div className="mt-10 grid items-start gap-6 lg:mt-12 lg:grid-cols-12 lg:gap-8">
          {/* Six images */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:col-span-8">
            {photos.map((photo, index) => (
              <div
                key={photo.src}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f3faf9] shadow-sm ring-1 ring-slate-900/5"
              >
                <Pic
                  src={photo.src}
                  alt={photo.alt}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/35 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <span className="absolute bottom-3 left-3 flex h-7 w-7 items-center justify-center rounded-full border border-white/50 bg-white/90 text-xs font-bold text-teal-800 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {index + 1}
                </span>
              </div>
            ))}
          </div>

          {/* Side card */}
          <aside className="rounded-3xl border border-teal-900/[0.07] bg-[#f3faf9] p-5 shadow-sm sm:p-7 lg:sticky lg:top-24 lg:col-span-4">
            <span className="inline-flex rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-900">
              Featured Collection
            </span>

            <h3 className="mt-5 text-2xl font-extrabold leading-snug text-slate-900">
              Find Your Perfect Look
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Explore frame styles designed to complement your personal
              style and vision needs.
            </p>

            <ul className="mt-5 grid grid-cols-2 gap-x-3 gap-y-3">
              {perks.map((perk) => (
                <li
                  key={perk}
                  className="flex items-center gap-2 text-xs font-medium text-slate-700 sm:text-sm"
                >
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {perk}
                </li>
              ))}
            </ul>

            <div className="mt-7 overflow-hidden rounded-2xl bg-white p-2">
              <Pic
                src={Specs1}
                alt="Featured glasses frame"
                className="h-44 w-full rounded-xl object-cover sm:h-52"
              />
            </div>

            <Link
              to="/appointment"
              className="group mt-6 inline-flex w-full items-center justify-between gap-3 rounded-full bg-slate-900 py-1.5 pl-5 pr-1.5 text-sm font-bold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 hover:text-slate-900"
            >
              Book Appointment

              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900">
                <CalendarCheck size={17} />
              </span>
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
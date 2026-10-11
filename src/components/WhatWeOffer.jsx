
import {
  Microscope,
  Eye,
  Droplets,
  Glasses,
  ClipboardCheck,
  Pill,
  ArrowUpRight,
  ScanEye,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../data/siteData";

const iconMap = {
  "Advanced Machine Testing": Microscope,
  "Eyes Checkup & Screening": Eye,
  "Eye Drop": Droplets,
  "Eye Glasses": Glasses,
  "Doctor Receipt": ClipboardCheck,
  "Pharmacy Store": Pill,
};

const serviceDetails = [
  "Advanced diagnostic technology",
  "Professional eye examinations",
  "Essential eye care solutions",
  "Frames for every lifestyle",
  "Expert consultation support",
  "Convenient pharmacy services",
];

export default function WhatWeOffer({
  title = "Our medical services",
}) {
  return (
    <section className="relative overflow-hidden bg-[#f0f4ff] py-16 sm:py-20 lg:py-24">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-blue-200/30 blur-[100px]" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-cyan-200/30 blur-[110px]" />

      <div className="relative mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">

        {/* Section heading */}
        <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-12 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-slate-600">
              <span className="h-2 w-2 rounded-full bg-sky-500" />
              Complete vision care
            </div>

            <h2 className="max-w-xl text-4xl font-medium leading-[1.08] tracking-[-1.8px] text-[#111827] sm:text-5xl lg:text-[58px]">
              {title}
              <span className="block">
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  designed around you.
                </span>
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 lg:max-w-xs lg:items-end lg:text-right">
            <p className="text-sm leading-6 text-slate-500">
              From routine eye examinations to advanced diagnostic
              support, we make quality vision care accessible,
              comfortable and personal.
            </p>

            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-cyan-600"
            >
              Explore all services
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 bg-white transition-all duration-300 group-hover:border-blue-600 group-hover:bg-blue-600 group-hover:text-white">
                <ArrowUpRight size={15} />
              </span>
            </Link>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = iconMap[service.title] || Eye;
            const isFeatured = index === 1;

            return (
              <article
                key={service.title}
                className={`group relative flex min-h-[250px] flex-col overflow-hidden rounded-[23px] p-5 transition-all duration-300 hover:-translate-y-1 sm:min-h-[265px] sm:p-6 ${
                  isFeatured
                    ? "bg-[#2864f5] text-white shadow-[0_16px_40px_rgba(40,100,245,0.18)]"
                    : "border border-white/80 bg-white/90 text-[#111827] shadow-[0_8px_30px_rgba(40,60,100,0.045)] hover:border-blue-100 hover:shadow-[0_18px_40px_rgba(40,60,100,0.09)]"
                }`}
              >
                {/* Decorative background number */}
                <span
                  aria-hidden="true"
                  className={`pointer-events-none absolute -right-1 -top-3 select-none text-[84px] font-light leading-none tracking-[-7px] transition-transform duration-500 group-hover:-translate-y-1 sm:text-[100px] ${
                    isFeatured
                      ? "text-white/[0.13]"
                      : "text-blue-100/90"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Featured card decoration */}
                {isFeatured && (
                  <>
                    <div className="pointer-events-none absolute -right-10 top-12 h-32 w-32 rounded-full border-[22px] border-blue-500/70" />
                    <div className="pointer-events-none absolute -bottom-12 -left-4 h-28 w-28 rounded-full bg-blue-400/50 blur-sm" />
                    <div className="pointer-events-none absolute bottom-5 right-14 h-8 w-8 rounded-full bg-cyan-300/30 blur-[2px]" />
                  </>
                )}

                {/* Card header */}
                <div className="relative z-10 flex items-start justify-between">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110 ${
                      isFeatured
                        ? "bg-white/15 text-white"
                        : "bg-[#f0f5ff] text-blue-600 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <span
                    className={`mt-1 text-[9px] font-semibold uppercase tracking-[0.16em] ${
                      isFeatured
                        ? "text-blue-100"
                        : "text-slate-400"
                    }`}
                  >
                    Vision care
                  </span>
                </div>

                {/* Card content */}
                <div className="relative z-10 mt-auto pt-8">
                  <h3
                    className={`max-w-[230px] text-lg font-medium leading-snug tracking-tight sm:text-xl ${
                      isFeatured ? "text-white" : "text-[#111827]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p
                    className={`mt-2 line-clamp-3 text-xs leading-[1.7] ${
                      isFeatured
                        ? "text-blue-100"
                        : "text-slate-500"
                    }`}
                  >
                    {service.text ||
                      serviceDetails[index % serviceDetails.length]}
                  </p>
                </div>

                {/* Card footer */}
                <div
                  className={`relative z-10 mt-5 flex items-center justify-between border-t pt-4 ${
                    isFeatured
                      ? "border-white/20"
                      : "border-slate-100"
                  }`}
                >
                  <Link
                    to="/appointment"
                    className={`text-[11px] font-medium underline decoration-current/40 underline-offset-4 transition-colors ${
                      isFeatured
                        ? "text-white hover:text-cyan-200"
                        : "text-blue-700 hover:text-cyan-600"
                    }`}
                  >
                    Book appointment
                  </Link>

                  <Link
                    to="/appointment"
                    aria-label={`Book appointment for ${service.title}`}
                    className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                      isFeatured
                        ? "border-white/30 bg-white text-blue-700 hover:bg-cyan-200"
                        : "border-slate-300 text-slate-700 hover:border-blue-600 hover:bg-blue-600 hover:text-white"
                    }`}
                  >
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </Link>
                </div>
              </article>
            );
          })}

          {/* Wide feature panel */}
          <div className="group relative flex min-h-[250px] flex-col justify-between overflow-hidden rounded-[23px] bg-[#dce8ff] p-6 sm:min-h-[265px] sm:p-8 lg:col-span-3 xl:col-span-2">
            {/* Abstract medical-inspired artwork */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-12 -top-20 h-64 w-64 rounded-full border-[36px] border-white/40 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute -right-3 top-12 h-36 w-36 rounded-full bg-gradient-to-br from-blue-300/70 to-cyan-200/60 blur-[1px]" />
              <div className="absolute right-12 top-24 h-16 w-16 rounded-full bg-white/50 blur-sm" />
              <div className="absolute -bottom-16 right-24 h-40 w-40 rounded-full bg-blue-300/30 blur-xl" />
            </div>

            <div className="relative z-10 flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/60 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-blue-800 backdrop-blur-sm">
                <Sparkles size={13} />
                Personalised care
              </span>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/70 text-blue-700 shadow-sm">
                <Stethoscope size={21} strokeWidth={1.5} />
              </div>
            </div>

            <div className="relative z-10 mt-8 max-w-sm">
              <h3 className="text-2xl font-medium leading-tight tracking-tight text-[#13284d] sm:text-3xl">
                Clear vision.
                <br />
                Better everyday living.
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-slate-600">
                Find the right eye care services for your needs
                with guidance from our care team.
              </p>

              <Link
                to="/appointment"
                className="group/button mt-5 inline-flex items-center gap-3 rounded-full bg-[#2864f5] py-2 pl-5 pr-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#174bd0]"
              >
                Schedule a visit
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-blue-700 transition-transform duration-300 group-hover/button:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom reassurance strip */}
        <div className="mt-8 flex flex-col gap-3 border-t border-blue-900/[0.08] pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-xs text-slate-500">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Thoughtful care for every stage of your vision journey.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700 transition-colors hover:text-blue-700"
          >
            Have questions?
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}

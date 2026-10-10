
import {
  Microscope,
  Eye,
  Droplets,
  Glasses,
  ClipboardCheck,
  Pill,
  ArrowUpRight,
  Sparkles,
  ScanEye,
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
  "Modern diagnostic support",
  "Routine vision assessment",
  "Eye care essentials",
  "Vision and frame solutions",
  "Consultation documentation",
  "Convenient medicine access",
];

export default function WhatWeOffer({
  title = "Your Vision Deserves",
}) {
  return (
    <section className="relative overflow-hidden bg-[#f5faf9] py-20 sm:py-24 lg:py-28">
      {/* Background design */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-emerald-200/25 blur-[100px]" />
        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#123e49 0.8px, transparent 0.8px)",
            backgroundSize: "22px 22px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 grid gap-8 lg:mb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] text-emerald-800 shadow-sm sm:text-xs">
              <ScanEye size={15} />
              Complete Vision Care
            </div>

            <h2 className="mt-6 text-4xl font-black leading-[1.08] tracking-[-1.8px] text-[#102f40] sm:text-5xl lg:text-6xl">
              {title}
              <span className="mt-1 block bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text pb-1 text-transparent">
                Better Care.
              </span>
            </h2>
          </div>

          <div className="lg:justify-self-end lg:pb-2">
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
              From routine eye checkups to modern diagnostic services,
              discover thoughtful care designed to keep your vision clear
              and your experience comfortable.
            </p>

            <div className="mt-5 flex items-center gap-3 text-sm font-semibold text-[#102f40]">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-emerald-600 shadow-sm ring-1 ring-emerald-100">
                <Sparkles size={17} />
              </span>
              Care that puts your vision first
            </div>
          </div>
        </div>

        {/* Asymmetric service layout */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {services.map((service, index) => {
            const Icon = iconMap[service.title] || Eye;
            const detail =
              serviceDetails[index % serviceDetails.length];

            return (
              <article
                key={service.title}
                className={`group relative flex min-h-[270px] flex-col overflow-hidden rounded-[26px] border border-white bg-white p-6 shadow-[0_8px_35px_rgba(16,47,64,0.035)] transition-all duration-500 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-[0_24px_55px_rgba(16,100,87,0.11)] sm:p-7 ${
                  index === 0
                    ? "lg:col-span-2 lg:min-h-[300px] lg:p-9"
                    : ""
                }`}
              >
                {/* Hover wash */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-white to-cyan-50/0 transition-all duration-500 group-hover:from-emerald-50/80 group-hover:to-cyan-50/70" />

                {/* Oversized background number */}
                <span className="pointer-events-none absolute -right-2 -top-7 select-none text-[120px] font-black leading-none tracking-tighter text-slate-100/80 transition-all duration-500 group-hover:-translate-y-2 group-hover:text-emerald-100/80 sm:text-[145px]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-[19px] bg-[#e8f7f2] text-emerald-700 ring-1 ring-emerald-100 transition-all duration-500 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-[#103f49] group-hover:text-white sm:h-16 sm:w-16">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <span className="rounded-full border border-slate-100 bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Service {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="relative z-10 mt-8 flex-1">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-emerald-700 sm:text-[11px]">
                    {detail}
                  </p>

                  <h3
                    className={`max-w-md font-extrabold leading-snug tracking-tight text-[#102f40] transition-colors duration-300 group-hover:text-emerald-800 ${
                      index === 0
                        ? "text-2xl sm:text-3xl"
                        : "text-xl sm:text-[22px]"
                    }`}
                  >
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-[13px] leading-6 text-slate-500 sm:text-sm sm:leading-7">
                    {service.text}
                  </p>
                </div>

              

                {/* Bottom color strip */}
                
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

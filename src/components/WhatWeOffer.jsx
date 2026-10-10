
import {

  Microscope,
  Eye,
  Droplets,
  Glasses,
  ClipboardCheck,
  Pill,
} from "lucide-react";
import { services } from "../data/siteData";

const iconMap = {
  "Advanced Machine Testing": Microscope,
  "Eyes Checkup & Screening": Eye,
  "Eye Drop": Droplets,
  "Eye Glasses": Glasses,
  "Doctor Receipt": ClipboardCheck,
  "Pharmacy Store": Pill,
};

const iconStyles = [
  "bg-sky-100 text-sky-600",
  "bg-purple-100 text-purple-600",
  "bg-orange-100 text-orange-600",
  "bg-emerald-100 text-emerald-600",
  "bg-amber-100 text-amber-600",
  "bg-rose-100 text-rose-600",
];

export default function WhatWeOffer({
  title = "Complete Eye Care Services",
}) {
  return (
<section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
  {/* Background decoration */}
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />
    <div className="absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />
    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#f3faf9] to-transparent" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Section heading */}
    <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div className="max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50/70 px-3.5 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700 sm:text-xs">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
          What We Provide
        </span>

        <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h2>
      </div>

      <p className="max-w-md text-sm leading-7 text-slate-500 sm:text-base md:pb-1">
        Live happily, live healthily. Discover thoughtful eye-care
        services designed around your vision, comfort and well-being.
      </p>
    </div>

    {/* Modern services grid */}
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const Icon = iconMap[service.title] || Eye;

        return (
          <article
            key={service.title}
            className="group relative flex min-h-[245px] flex-col overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-200 hover:shadow-[0_20px_45px_rgba(15,118,110,0.09)] sm:p-7"
          >
            {/* Soft hover background */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-white to-emerald-50/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="relative flex items-start justify-between">
              {/* Icon box */}
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                  iconStyles[index % iconStyles.length]
                } ring-1 ring-black/[0.03] transition-all duration-300 group-hover:scale-105 group-hover:shadow-md`}
              >
                <Icon size={25} strokeWidth={1.8} />
              </div>

              {/* Number */}
              <span className="text-sm font-semibold tracking-widest text-slate-300 transition-colors duration-300 group-hover:text-teal-600/60">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Content */}
            <div className="relative mt-6 flex-1">
              <h3 className="text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-teal-700">
                {service.title}
              </h3>

              <p className="mt-3 text-[13px] leading-6 text-slate-500 sm:text-sm">
                {service.text}
              </p>
            </div>

         

            {/* Hover border accent */}
            
          </article>
        );
      })}
    </div>
  </div>
</section>
  );
}

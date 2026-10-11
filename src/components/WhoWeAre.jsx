
import { Link } from "react-router-dom";
import {
  Check,
  Eye,
  CalendarCheck,
  Stethoscope,
  ArrowUpRight,
  ShieldCheck,
  Clock3,
  Award,
} from "lucide-react";

import doctorImg from "../assets/Experience.jpg";

const points = [
  "60,000+ successful cataract surgeries",
  "Honored thrice by district administration",
  "Latest state-of-the-art equipment",
];

const stats = [
  { value: "60K+", label: "Successful surgeries", icon: Eye },
  { value: "3×", label: "District honors", icon: Award },
  { value: "Modern", label: "Medical equipment", icon: ShieldCheck },
];

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-[#f0f4ff] py-16 sm:py-20 lg:py-28">
      {/* Background accents */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[#dce8ff]/70 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[110px]" />

      <div className="relative mx-auto grid max-w-[1440px] items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-12">

        {/* LEFT: Content */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2864f5] shadow-sm sm:text-xs">
            <span className="h-2 w-2 rounded-full bg-[#2864f5]" />
            About our clinic
          </div>

          <h2 className="mt-6 max-w-2xl text-[36px] font-semibold leading-[1.12] tracking-[-1.8px] text-[#111827] sm:text-5xl lg:text-[58px]">
            Experience you can trust.
            <span className="mt-1 block bg-gradient-to-r from-[#2864f5] via-blue-500 to-cyan-500 bg-clip-text pb-1 text-transparent">
              Vision you can value.
            </span>
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Dr. Sharma's Eye Care &amp; Lasik Centre is a trusted name in
            Fatehabad. We combine years of clinical experience, modern
            technology and compassionate care to help patients make
            informed decisions about their vision.
          </p>

          {/* Achievements */}
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {stats.map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="rounded-2xl border border-white bg-white p-4 shadow-[0_5px_20px_rgba(40,100,245,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#dce8ff] hover:shadow-[0_14px_30px_rgba(40,100,245,0.10)]"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0f4ff] text-[#2864f5]">
                  <Icon size={18} strokeWidth={1.8} />
                </div>

                <p className="mt-4 text-xl font-semibold tracking-tight text-[#13284d]">
                  {value}
                </p>

                <p className="mt-1 text-[11px] leading-5 text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>

          {/* Trust points */}
          <div className="mt-8 space-y-4">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#2864f5] text-white">
                  <Check size={12} strokeWidth={3} />
                </span>

                <p className="text-sm leading-6 text-slate-700">
                  {point}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 rounded-full bg-[#2864f5] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-lg shadow-[#2864f5]/20 transition-all duration-300 hover:bg-[#174bd0] hover:shadow-xl hover:shadow-[#2864f5]/25"
            >
              Get to know us

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2864f5] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <div className="flex items-center gap-2 text-xs text-slate-600">
              <ShieldCheck size={17} className="text-[#2864f5]" />
              Patient-focused care
            </div>
          </div>
        </div>

        {/* RIGHT: Doctor image */}
        <div className="order-1 mx-auto w-full max-w-[530px] lg:order-2">
          <div className="relative px-3 pb-12 sm:px-5 sm:pb-14">

            {/* Decorative frame */}
            <div className="absolute right-0 top-0 h-32 w-32 rounded-tr-[36px] border-r-2 border-t-2 border-[#2864f5]/40 sm:h-44 sm:w-44" />

            <div className="absolute bottom-5 left-0 h-28 w-28 rounded-bl-[32px] border-b-2 border-l-2 border-cyan-400/70 sm:h-36 sm:w-36" />

            {/* Main image */}
            <div className="relative overflow-hidden rounded-[28px] border-[6px] border-white bg-[#dce8ff] shadow-[0_24px_70px_rgba(40,100,245,0.14)] sm:rounded-[36px]">
              <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-[#dce8ff]/20 via-transparent to-cyan-200/20" />

              <img
                src={doctorImg}
                alt="Dr. Vinod Sharma at the eye care clinic"
                loading="lazy"
                className="relative z-0 aspect-[4/4.5] w-full object-cover object-center"
              />

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#13284d]/95 via-[#13284d]/50 to-transparent px-5 pb-5 pt-16 sm:px-7 sm:pb-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#dce8ff]">
                  Trusted eye care
                </p>

                <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                  Dr. Vinod Sharma
                </h3>

                <p className="mt-1 text-xs text-white/80">
                  Eye Care &amp; Lasik Centre
                </p>
              </div>
            </div>

            {/* Floating experience card */}
            <div className="absolute -left-1 top-12 flex items-center gap-3 rounded-2xl border border-[#dce8ff] bg-white p-3 pr-5 shadow-[0_12px_35px_rgba(19,40,77,0.10)] sm:-left-5 sm:top-16 sm:p-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#2864f5] text-white shadow-md shadow-[#2864f5]/20">
                <Stethoscope size={21} />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#13284d]">
                  Expert eye care
                </p>
                <p className="mt-1 text-[10px] text-slate-500">
                  Experience &amp; technology
                </p>
              </div>
            </div>

            {/* Floating appointment card */}
            <div className="absolute -bottom-1 right-0 w-[245px] rounded-2xl border border-[#dce8ff] bg-white p-4 shadow-[0_18px_50px_rgba(40,100,245,0.14)] sm:-right-2 sm:w-[275px] sm:p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f0f4ff] text-[#2864f5]">
                  <CalendarCheck size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#13284d]">
                    Plan your visit
                  </p>
                  <p className="mt-1 text-[11px] text-slate-500">
                    <Clock3 size={12} className="mr-1 inline text-[#2864f5]" />
                    Mon–Sat · 9 AM–2 PM
                  </p>
                </div>
              </div>

              <Link
                to="/appointment"
                className="group mt-4 flex items-center justify-between rounded-full bg-[#2864f5] py-2 pl-4 pr-2 text-xs font-semibold text-white transition-colors duration-300 hover:bg-[#174bd0]"
              >
                Book an appointment

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2864f5] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={16} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

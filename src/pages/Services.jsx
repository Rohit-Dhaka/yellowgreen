
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Eye,
  HeartPulse,
  ShieldCheck,
} from "lucide-react";
import CommonServices from "../components/CommonServices";

export default function Services() {
  return (
    <>
      {/* Services Hero */}
      <section className="relative overflow-hidden bg-[#f0f4ff]">
        {/* Background Effects */}
        <div className="pointer-events-none absolute -left-24 -top-16 h-80 w-80 rounded-full bg-[#2864f5]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#dce8ff]/80 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#2864f5] shadow-sm">
              <HeartPulse size={14} />
              Care for Every Vision
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#13284d] sm:text-5xl lg:text-6xl">
              Complete Eye Care,
              <br />
              <span className="text-[#2864f5]">
                All in One Place.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              From routine eye examinations and advanced diagnostic testing
              to eyewear and pharmacy services, explore the eye-care solutions
              available at Dr. Sharma&apos;s Eye Care &amp; Lasik Centre.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#all-services"
                className="group inline-flex items-center gap-2 rounded-full bg-[#2864f5] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#2864f5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
              >
                Explore Services
                <ArrowDown
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-y-0.5"
                />
              </a>

              <Link
                to="/appointment"
                className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-6 py-3 text-sm font-bold text-[#13284d] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2864f5] hover:text-[#2864f5]"
              >
                Book Appointment
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-t border-[#dce8ff] pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dce8ff] bg-white text-[#2864f5] shadow-sm">
                  <Eye size={16} />
                </span>
                Comprehensive Eye Care
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dce8ff] bg-white text-[#2864f5] shadow-sm">
                  <ShieldCheck size={16} />
                </span>
                Patient-Focused Approach
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Divider */}
        <div className="h-1 w-full bg-gradient-to-r from-[#dce8ff] via-[#2864f5] to-[#dce8ff]" />
      </section>

      {/* Services Grid */}
      <div id="all-services" className="scroll-mt-20">
        <CommonServices />
      </div>
    </>
  );
}

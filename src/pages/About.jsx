
import { Link } from "react-router-dom";
import {
  ArrowDown,
  ArrowUpRight,
  Eye,
  HeartPulse,  
  ShieldCheck,
} from "lucide-react";
import WhoWeAre from "../components/WhoWeAre";
import Experts from "../components/Experts";



export default function About() {
  return (
    <>
      {/* About Hero */}
      <section className="relative overflow-hidden bg-[#f3faf9]">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-24 -top-16 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700 shadow-sm">
              <HeartPulse size={14} />
              Get to Know Our Clinic
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Clear Vision.
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Compassionate Care.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Discover Dr. Sharma's Eye Care & Lasik Centre, where
              experience, modern eye-care technology and a patient-first
              approach come together to support your vision and well-being.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="#our-story"
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500"
              >
                Discover Our Story
                <ArrowDown size={16} />
              </a>

              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:border-teal-200 hover:text-teal-700"
              >
                Contact Us
                <ArrowUpRight size={16} />
              </Link>
            </div>

            {/* Key highlights */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-x-7 gap-y-4 border-t border-teal-900/10 pt-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal-600 shadow-sm">
                  <Eye size={16} />
                </span>
                Dedicated Eye Care
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-slate-600">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-teal-600 shadow-sm">
                  <ShieldCheck size={16} />
                </span>
                Patient-First Approach
              </div>
            </div>
          </div>
        </div>

        {/* Gradient divider */}
        <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />
      </section>

      {/* About clinic */}
      <div id="our-story" className="scroll-mt-20">
        <WhoWeAre />
      </div>

      {/* Medical team */}
      <Experts />
    </>
  );
}


import { ArrowDown, Quote, HeartPulse, Star } from "lucide-react";
import Testimonials from "../components/Testimonials";

export default function TestimonialPage() {
  return (
    <>
      {/* Testimonials Hero */}
      <section className="relative overflow-hidden bg-[#f3faf9]">
        <div className="pointer-events-none absolute -left-20 -top-16 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-teal-700 shadow-sm">
            <HeartPulse size={14} />
            Patient Experiences
          </span>

          <div className="mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900 shadow-lg shadow-teal-900/10">
            <Quote size={24} />
          </div>

          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Stories That Speak
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Of Better Vision.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Every patient has a story. Discover experiences shared by people
            who trusted Dr. Sharma's Eye Care & Lasik Centre with their eye
            health and vision care.
          </p>

          <div className="mt-6 flex items-center justify-center gap-1 text-amber-400">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={17}
                fill="currentColor"
                strokeWidth={1.5}
              />
            ))}
            <span className="ml-2 text-xs font-semibold text-slate-500">
              Patient stories & feedback
            </span>
          </div>

          <a
            href="#patient-stories"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500"
          >
            Read Patient Stories
            <ArrowDown size={16} />
          </a>

          <div className="mx-auto mt-8 h-1 w-14 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
        </div>
      </section>

      {/* Testimonials Section */}
      <div id="patient-stories" className="scroll-mt-20">
        <Testimonials />
      </div>
    </>
  );
}
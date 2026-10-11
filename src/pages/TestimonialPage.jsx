
import {
  ArrowDown,
  Quote,
  HeartPulse,
  Star,
} from "lucide-react";

import Testimonials from "../components/Testimonials";

export default function TestimonialPage() {
  return (
    <>
      {/* Testimonials Hero */}
      <section className="relative overflow-hidden bg-[#f0f4ff]">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-24 -top-20 h-80 w-80 rounded-full bg-[#2864f5]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#dce8ff]/80 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          {/* Eyebrow label */}
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#2864f5] shadow-sm">
            <HeartPulse size={14} />
            Patient Experiences
          </span>

      

          {/* Main heading */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-[#13284d] sm:text-5xl lg:text-6xl">
            Stories That Speak
            <br />
            <span className="text-[#2864f5]">
              Of Better Vision.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Every patient has a story. Discover experiences shared by
            people who trusted Dr. Sharma&apos;s Eye Care &amp; Lasik
            Centre with their eye health and vision care.
          </p>

          {/* Rating / trust indicator */}
          <div className="mx-auto mt-7 inline-flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#dce8ff] bg-white px-5 py-3 shadow-sm">
            <div className="flex items-center gap-1 text-[#2864f5]">
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={16}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              ))}
            </div>

            <span className="h-4 w-px bg-[#dce8ff]" />

            <span className="text-xs font-semibold text-[#13284d]">
              Patient stories &amp; feedback
            </span>
          </div>

          {/* CTA */}
          <div>
            <a
              href="#patient-stories"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[#2864f5] py-1.5 pl-6 pr-1.5 text-sm font-bold text-white shadow-lg shadow-[#2864f5]/20 transition-all duration-300 hover:bg-[#1d4ed8]"
            >
              Read Patient Stories

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2864f5] transition-transform duration-300 group-hover:translate-y-0.5">
                <ArrowDown size={17} />
              </span>
            </a>
          </div>

          {/* Bottom accent */}
          <div className="mx-auto mt-10 h-1 w-16 rounded-full bg-[#2864f5]" />
        </div>
      </section>

      {/* Testimonials Section */}
      <div id="patient-stories" className="scroll-mt-24">
        <Testimonials />
      </div>
    </>
  );
}

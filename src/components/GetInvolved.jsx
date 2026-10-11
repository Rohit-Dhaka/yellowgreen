
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  ScanEye,
  Stethoscope,
  ShieldCheck,
} from "lucide-react";

import Img1 from "../assets/1.jpg";
import Img2 from "../assets/2.jpg";
import Img3 from "../assets/Experience.jpg";

const panels = [
  {
    src: Img1,
    label: "Eye Examination Unit",
    description: "Supporting thorough eye examinations and vision assessments.",
    number: "01",
    tag: "Eye diagnostics",
  },
  {
    src: Img2,
    label: "Consultation Room",
    description: "A comfortable space to discuss your eye-care needs.",
    number: "02",
    tag: "Patient consultation",
  },
  {
    src: Img3,
    label: "Surgery Theatre",
    description: "A clinical environment designed for specialised eye care.",
    number: "03",
    tag: "Clinical facilities",
  },
];

function Photo({ src, alt }) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#dce8ff] text-[#2864f5]">
        <ScanEye size={52} strokeWidth={1.4} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
    />
  );
}

export default function GetInvolved() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative isolate overflow-hidden bg-[#f0f4ff] py-16 sm:py-20 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-[#dce8ff] blur-[100px]" />
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-[110px]" />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
        {/* Section heading */}
        <div className="grid gap-6 lg:grid-cols-[1fr_0.65fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#2864f5] shadow-sm sm:text-xs">
              <span className="h-2 w-2 rounded-full bg-[#2864f5]" />
              Our Expertise
            </div>

            <h2 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-[-1.3px] text-[#111827] sm:text-4xl lg:text-5xl">
              Thoughtfully designed spaces.
              <span className="mt-1 block bg-gradient-to-r from-[#2864f5] to-cyan-500 bg-clip-text pb-1 text-transparent">
                Advanced eye care.
              </span>
            </h2>
          </div>

          <div className="lg:pb-1">
            <p className="max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
              Explore our eye-care facilities, consultation spaces and
              clinical environment. Our focus is on thoughtful care,
              patient comfort and supporting your vision needs.
            </p>

            <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-[#13284d]">
              <ShieldCheck size={17} className="text-[#2864f5]" />
              Patient-focused care
            </div>
          </div>
        </div>

        {/* New asymmetric facility gallery */}
        <div className="mt-10 grid gap-4 sm:mt-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-5">
          {/* Large featured image */}
          <button
            type="button"
            aria-label={`Select ${panels[active].label}`}
            aria-pressed="true"
            onClick={() => setActive((current) => (current + 1) % panels.length)}
            onKeyDown={(event) => {
              if (event.key === "ArrowRight") {
                event.preventDefault();
                setActive((current) => (current + 1) % panels.length);
              }
              if (event.key === "ArrowLeft") {
                event.preventDefault();
                setActive((current) => (current - 1 + panels.length) % panels.length);
              }
            }}
            className="group relative min-h-[360px] overflow-hidden rounded-[28px] border border-white bg-[#dce8ff] text-left shadow-[0_20px_55px_rgba(40,100,245,0.12)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2864f5]/25 sm:min-h-[450px] lg:min-h-[550px]"
          >
            <div className="absolute inset-0">
              <Photo
                src={panels[active].src}
                alt={panels[active].label}
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#13284d]/90 via-[#13284d]/15 to-transparent" />

            {/* Top label */}
            <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-3 sm:left-6 sm:right-6 sm:top-6">
              <span className="rounded-full border border-white/60 bg-white/90 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em] text-[#2864f5] backdrop-blur sm:text-xs">
                Featured facility
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2864f5] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={19} />
              </span>
            </div>

            {/* Image caption */}
            <div className="absolute inset-x-0 bottom-0 p-5 sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#dce8ff]">
                Facility {panels[active].number}
              </p>

              <h3 className="mt-2 max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl lg:text-4xl">
                {panels[active].label}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/85">
                {panels[active].description}
              </p>

              <div className="mt-5 flex items-center gap-2">
                {panels.map((panel, index) => (
                  <span
                    key={panel.number}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      active === index
                        ? "w-9 bg-white"
                        : "w-4 bg-white/45"
                    }`}
                  />
                ))}
              </div>
            </div>
          </button>

          {/* Facility selection cards */}
          <div className="flex flex-col gap-4">
            {panels.map((panel, index) => {
              const isActive = active === index;

              return (
                <button
                  key={panel.number}
                  type="button"
                  aria-label={`View ${panel.label}`}
                  aria-pressed={isActive}
                  onClick={() => setActive(index)}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={`group flex min-h-[125px] items-center gap-4 rounded-[24px] border p-3 text-left transition-all duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2864f5]/25 sm:min-h-[145px] sm:gap-5 sm:p-4 lg:flex-1 ${
                    isActive
                      ? "border-[#2864f5]/35 bg-white shadow-[0_12px_35px_rgba(40,100,245,0.12)]"
                      : "border-white bg-white/65 hover:border-[#dce8ff] hover:bg-white"
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative h-[100px] w-[112px] shrink-0 overflow-hidden rounded-2xl bg-[#dce8ff] sm:h-[116px] sm:w-[140px]">
                    <div className="group relative h-full w-full overflow-hidden">
                      <Photo src={panel.src} alt={panel.label} />
                    </div>

                    <span className="absolute bottom-2 left-2 rounded-lg bg-white/95 px-2 py-1 text-[10px] font-bold text-[#2864f5] shadow-sm">
                      {panel.number}
                    </span>
                  </div>

                  {/* Card content */}
                  <div className="min-w-0 flex-1 py-1">
                    <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#2864f5] sm:text-[10px]">
                      {panel.tag}
                    </p>

                    <h3 className="mt-2 text-sm font-semibold leading-snug text-[#13284d] sm:text-base">
                      {panel.label}
                    </h3>

                    <p className="mt-2 line-clamp-2 text-xs leading-5 text-slate-500">
                      {panel.description}
                    </p>
                  </div>

                  {/* Selection icon */}
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? "bg-[#2864f5] text-white"
                        : "bg-[#f0f4ff] text-[#2864f5] group-hover:bg-[#dce8ff]"
                    }`}
                  >
                    <ArrowUpRight size={15} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex flex-col gap-6 rounded-[28px] border border-[#dce8ff] bg-white p-6 shadow-[0_12px_40px_rgba(40,100,245,0.06)] sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:p-8 lg:p-10">
          <div className="max-w-2xl">
            <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#2864f5] sm:justify-start">
              <Stethoscope size={16} />
              Your vision matters
            </div>

            <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#13284d] sm:text-2xl lg:text-3xl">
              The right care starts with a conversation.
            </h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Contact our team to learn more about the available eye-care
              services and plan your visit.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center justify-between gap-5 rounded-full bg-[#2864f5] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-lg shadow-[#2864f5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#174bd0]"
          >
            Contact Us
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#2864f5] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}

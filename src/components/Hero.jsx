
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  CalendarCheck,
  Clock3,
  ShieldCheck,
  Eye,
  Stethoscope,
  CheckCircle2,
} from "lucide-react";

const doctorImage =
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=900&q=85";

const eyeImage =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=85";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#f0f4ff]">
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#f0f4ff] via-white to-[#dce8ff]" />
      <div className="pointer-events-none absolute -left-28 top-20 h-80 w-80 rounded-full bg-[#dce8ff]/80 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-200/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-[#dce8ff]/70 blur-3xl" />

      <div className="relative mx-auto grid min-h-[650px] max-w-[1440px] items-center gap-8 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[690px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-2 lg:px-14 xl:px-20">

        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-lg border border-[#dce8ff] bg-white/90 px-3.5 py-2 text-xs font-bold text-[#2864f5] shadow-sm backdrop-blur">
            <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#2864f5] text-white">
              <Stethoscope size={14} />
            </span>
            ADVANCED EYE CARE
          </div>

          <h1 className="mt-7 text-[3.25rem] font-black leading-[0.98] tracking-[-0.055em] text-[#13284d] sm:text-6xl lg:text-[4.5rem] xl:text-[5.25rem]">
            SEE LIFE
            <br />
            <span className="text-[#2864f5]">CLEARER.</span>
            <br />
            <span className="text-[#13284d]">LIVE BETTER.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-7 text-slate-600 sm:text-base">
            Expert eye care, advanced technology and personalised treatment
            to help protect your vision at every stage of life.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/appointment"
              className="group inline-flex items-center gap-3 rounded-full bg-[#2864f5] py-2 pl-6 pr-2 text-sm font-bold text-white shadow-lg shadow-[#2864f5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#174bd0] hover:shadow-xl"
            >
              Book Appointment
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2864f5] transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-5 py-3 text-sm font-bold text-[#13284d] transition-all duration-300 hover:border-[#2864f5] hover:text-[#2864f5]"
            >
              Explore Services
              <ArrowUpRight size={15} />
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs font-semibold text-slate-600 sm:text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck size={17} className="text-[#2864f5]" />
              Patient-first care
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-[#2864f5]" />
              Modern technology
            </span>
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="relative mx-auto mt-2 h-[470px] w-full max-w-[650px] sm:h-[560px] lg:mt-0 lg:h-[610px]">

          {/* Circular backdrop */}
          <div className="absolute left-1/2 top-1/2 h-[330px] w-[330px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white bg-white/50 shadow-[0_0_80px_rgba(40,100,245,0.08)] sm:h-[440px] sm:w-[440px] lg:h-[510px] lg:w-[510px]" />

          <div className="absolute left-1/2 top-1/2 h-[275px] w-[275px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-[#dce8ff] to-cyan-100/80 sm:h-[365px] sm:w-[365px] lg:h-[425px] lg:w-[425px]" />

          {/* Decorative rings */}
          <div className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#2864f5]/20 sm:h-[475px] sm:w-[475px] lg:h-[545px] lg:w-[545px]" />

          {/* Doctor image */}
          <div className="absolute bottom-0 left-[4%] z-10 h-[80%] w-[58%] overflow-hidden rounded-t-[48%] bg-[#dce8ff] sm:left-[8%] sm:w-[55%]">
            <img
              src={doctorImage}
              alt="Eye care medical professional"
              className="h-full w-full object-cover object-top"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#13284d]/20 via-transparent to-transparent" />
          </div>

          {/* Eye care image panel */}
          <div className="absolute right-0 top-[19%] z-10 h-[225px] w-[43%] overflow-hidden rounded-[45%_45%_38%_38%] border-4 border-white bg-[#dce8ff] shadow-xl shadow-[#13284d]/10 sm:right-[1%] sm:h-[300px] sm:w-[42%] lg:top-[16%] lg:h-[345px]">
            <img
              src={eyeImage}
              alt="Medical eye examination technology"
              className="h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#13284d]/30 to-transparent" />

            <div className="absolute bottom-3 left-2 right-2 rounded-xl border border-white/70 bg-white/95 p-2 backdrop-blur sm:bottom-4 sm:left-3 sm:right-3 sm:p-3">
              <p className="flex items-center gap-1.5 text-[10px] font-bold text-[#2864f5] sm:text-xs">
                <Eye size={14} />
                Vision Assessment
              </p>
              <p className="mt-1 text-[9px] text-slate-600 sm:text-[11px]">
                Care tailored to your eyes
              </p>
            </div>
          </div>

          {/* Floating experience card */}
          <div className="absolute left-0 top-[12%] z-20 rounded-2xl border border-[#dce8ff] bg-white p-3 shadow-lg shadow-[#13284d]/10 sm:left-[2%] sm:p-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#f0f4ff] text-[#2864f5]">
                <ShieldCheck size={19} />
              </span>
              <div>
                <p className="text-lg font-black leading-tight text-[#13284d] sm:text-xl">
                  24+ Years
                </p>
                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Eye care experience
                </p>
              </div>
            </div>
          </div>

          {/* Floating clinic timings */}
          <div className="absolute bottom-[8%] left-[1%] z-20 max-w-[215px] rounded-2xl border border-[#dce8ff] bg-white p-3 shadow-lg shadow-[#13284d]/10 sm:bottom-[7%] sm:left-[5%] sm:p-4">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#f0f4ff] text-[#2864f5]">
                <Clock3 size={18} />
              </span>
              <div>
                <p className="text-xs font-extrabold text-[#13284d] sm:text-sm">
                  Clinic Timings
                </p>
                <p className="mt-1 text-[10px] text-slate-500 sm:text-xs">
                  Mon–Sat · 9 AM–2 PM
                </p>
              </div>
            </div>
          </div>

          {/* Floating appointment button */}
          <Link
            to="/appointment"
            className="absolute right-0 top-[5%] z-20 flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white py-2 pl-3 pr-2 shadow-lg shadow-[#13284d]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#2864f5] sm:right-[2%] sm:py-2.5 sm:pl-4"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2864f5] text-white">
              <CalendarCheck size={16} />
            </span>
            <span className="pr-1 text-[10px] font-bold text-[#13284d] sm:text-xs">
              Book a Visit
            </span>
          </Link>

          {/* Visual label */}
          <div className="absolute bottom-[19%] right-0 z-20 rounded-xl border border-[#dce8ff] bg-white px-3 py-2 shadow-md sm:right-[1%] sm:px-4 sm:py-3">
            <p className="text-[10px] font-bold text-[#2864f5] sm:text-xs">
              YOUR VISION MATTERS
            </p>
            <p className="mt-1 text-[9px] text-slate-500 sm:text-[11px]">
              Trusted, compassionate care
            </p>
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div className="relative border-t border-[#dce8ff] bg-white/80 backdrop-blur-sm">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-5 sm:px-8 md:grid-cols-4 lg:px-14">
          {[
            ["24+", "Years of Experience"],
            ["60,000+", "Successful Cataract Surgeries"],
            ["Modern", "Diagnostic Equipment"],
            ["Patient-first", "Personalised Care"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="flex flex-col items-center text-center sm:flex-row sm:justify-center sm:gap-3 sm:text-left"
            >
              <p className="text-xl font-black tracking-tight text-[#2864f5] sm:text-2xl">
                {value}
              </p>
              <p className="max-w-[155px] text-[10px] leading-4 text-slate-500 sm:text-xs">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

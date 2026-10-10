import { Link } from 'react-router-dom'
import { Check, Eye, CalendarCheck, Stethoscope } from 'lucide-react'
// import doctorImg from '../assets/doctor.png'
import doctorImg from "../assets/Experience.jpg"

const points = [
  '60,000+ successful cataract surgeries',
  'Honored thrice by district administration',
  'Latest state-of-the-art equipment',
]

export default function WhoWeAre() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Curved line decoration */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -right-10 bottom-0 hidden h-[420px] w-[420px] text-cyan-300/50 lg:block"
        fill="none"
      >
        <path d="M20 380C80 260 140 300 200 200S340 100 400 20" stroke="currentColor" strokeWidth="1.5" />
      </svg>

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT: content */}
        <div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            We are focused on delivering the highest {"  "}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              quality eye care.
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
            Dr. Sharma's Eye Care &amp; Lasik Centre is a trusted name in Fatehabad. We combine
            experience, modern technology and compassionate care to give every patient the best
            possible vision.
          </p>

          <ul className="mt-7 space-y-3.5">
            {points.map((text) => (
              <li key={text} className="flex items-center gap-3 text-sm text-slate-700 sm:text-[15px]">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900">
                  <Check size={12} strokeWidth={3.5} />
                </span>
                {text}
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="mt-9 inline-flex items-center rounded-full bg-slate-900 px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 hover:shadow-cyan-500/25"
          >
            Contact Us
          </Link>
        </div>

        {/* RIGHT: photo panel */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative flex aspect-[4/4.4] items-end justify-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-cyan-100 via-[#e6f7f6] to-emerald-100">
            {doctorImg ? (
              <img src={doctorImg} alt="Dr. Vinod Sharma" className="relative  w-auto object-contain" />
            ) : (
              <>
                <span className="absolute left-1/2 top-[42%] h-[75%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-teal-600/10" />
                <span className="absolute left-1/2 top-[42%] h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-teal-600/20" />
                <span className="absolute left-1/2 top-[42%] flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-teal-600 shadow-xl shadow-teal-900/10">
                  <Eye size={42} strokeWidth={1.6} />
                </span>
              </>
            )}
          </div>

          {/* Floating card: doctor */}
          <div className="absolute -left-4 top-24 flex items-center gap-3 rounded-2xl bg-white p-3 pr-5 shadow-xl shadow-teal-900/10 sm:-left-10">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-cyan-300">
              <Stethoscope size={18} />
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-bold text-slate-900">Dr. Vinod Sharma</span>
              <span className="block text-[11px] font-medium text-slate-500">Chief Eye Surgeon</span>
            </span>
            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900 shadow">
              <Check size={13} strokeWidth={3.5} />
            </span>
          </div>

          {/* Floating card: appointment */}
          <div className="absolute -bottom-6 right-2 w-60 rounded-2xl bg-white p-4 shadow-2xl shadow-teal-900/15 sm:-right-4">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900">
                <CalendarCheck size={15} />
              </span>
              <p className="text-sm font-bold text-slate-900">Appointments</p>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-slate-500">Mon-Sat 9:00 AM - 02:00 PM</p>
            <Link
              to="/appointment"
              className="mt-3 block rounded-full bg-cyan-50 py-2 text-center text-xs font-bold text-teal-700 transition-colors hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:text-slate-900"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
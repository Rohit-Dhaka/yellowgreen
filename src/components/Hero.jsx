
// import { Link } from "react-router-dom";
// import {
//   ArrowUpRight,
//   CalendarClock,
//   CalendarCheck,
//   ClipboardCheck,
//   PhoneCall,
//   ShieldCheck,
//   Clock3,
//   MapPin,
//   CheckCircle2,
//   Activity,
//   Stethoscope,
//   Sparkles,
// } from "lucide-react";
// import { site } from "../data/siteData";

// const info = [
//   {
//     icon: CalendarClock,
//     title: "APPOINTMENTS",
//     lines: [
//       "MON–SAT 9:00 AM–02:00 PM",
//       "THU — Retina Clinic on alternate Thursdays",
//     ],
//     href: "/appointment",
//     action: "Book Appointment",
//     type: "appointment",
//   },
//   {
//     icon: ClipboardCheck,
//     title: "TEST RESULT",
//     lines: ["You can check your test results today online."],
//     href: "/contact",
//     action: "Enquire Now",
//     type: "results",
//   },
//   {
//     icon: PhoneCall,
//     title: "EMERGENCY CASE",
//     lines: [site.phone || "+91 99960-22103"],
//     href: `tel:${site.phone || "+919996022103"}`,
//     action: "Call Now",
//     type: "emergency",
//   },
// ];

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-white pb-16 pt-10 sm:pt-14 lg:pb-24 lg:pt-16">
//       {/* Background accents */}
//       <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl" />
//       <div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-emerald-100/40 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
//           {/* LEFT SIDE — kept the same */}
//           <div>
//             <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-[#f3faf9] px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700 sm:text-[11px]">
//               <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500" />
//               Best Treatment
//             </span>

//             <h1 className="mt-6 text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
//               Eye Care
//               <br />
//               <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
//                 Services.
//               </span>
//             </h1>

//             <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
//               Welcome to Dr. Vinod Sharma Eye Care, where we have
//               provided exceptional eye care for over 24 years. With
//               over 60,000 successful cataract surgeries and countless
//               other eye treatments, our team uses state-of-the-art
//               equipment to ensure the best outcomes for our patients.
//             </p>

//             <Link
//               to="/contact"
//               className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-900 px-9 py-3.5 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:text-slate-950"
//             >
//               Contact Us
//               <ArrowUpRight size={16} />
//             </Link>

//             <p className="mt-8 flex items-center gap-3 text-sm text-slate-600">
//               <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950">
//                 <ShieldCheck size={15} />
//               </span>
//               <span>
//                 Honored thrice by{" "}
//                 <span className="font-semibold text-teal-700">
//                   district administration
//                 </span>
//               </span>
//             </p>
//           </div>

        
// {/* RIGHT SIDE — Compact Clinic Dashboard */}
// <div className="relative mx-auto w-full max-w-md">
//   <div className="absolute -right-5 top-5 h-32 w-32 rounded-full bg-emerald-100/70 blur-3xl" />
//   <div className="absolute -left-5 bottom-5 h-32 w-32 rounded-full bg-cyan-100/70 blur-3xl" />

//   <div className="relative rounded-3xl border border-slate-100 bg-gradient-to-br from-[#f3faf9] via-white to-emerald-50/70 p-4 shadow-xl shadow-teal-900/5 sm:p-5">

//     {/* Header */}
//     <div className="flex items-center justify-between gap-3">
//       <div>
//         <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-teal-700">
//           <span className="h-2 w-2 rounded-full bg-emerald-400" />
//           Patient Care Centre
//         </span>
//         <h2 className="mt-1.5 text-xl font-extrabold text-slate-900 sm:text-2xl">
//           Your Vision, Our Priority.
//         </h2>
//       </div>

//       <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900">
//         <Stethoscope size={22} />
//       </div>
//     </div>

//     {/* Appointment */}
//     <Link
//       to="/appointment"
//       className="mt-4 flex items-center gap-3 rounded-2xl bg-slate-900 p-4 text-white transition hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500"
//     >
//       <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
//         <CalendarCheck size={21} />
//       </span>

//       <span className="min-w-0 flex-1">
//         <span className="block text-sm font-bold">Book Appointment</span>
//         <span className="mt-1 block text-xs text-slate-300">
//           Schedule your eye consultation
//         </span>
//       </span>

//       <ArrowUpRight size={18} className="shrink-0" />
//     </Link>

//     {/* Clinic Timings */}
//     <div className="mt-3 flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-3.5">
//       <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50 text-teal-700">
//         <Clock3 size={20} />
//       </span>

//       <div className="min-w-0 flex-1">
//         <h3 className="text-sm font-bold text-slate-900">
//           Clinic Timings
//         </h3>
//         <p className="mt-1 text-xs text-slate-600">
//           Mon–Sat · 9:00 AM–02:00 PM
//         </p>
//         <p className="mt-1 text-xs leading-5 text-slate-500">
//           Retina Clinic: Alternate Thursdays
//         </p>
//       </div>
//     </div>

//     {/* Test Results + Emergency */}
//     <div className="mt-3 grid grid-cols-2 gap-3">

//       <Link
//         to="/contact"
//         className="rounded-2xl border border-slate-100 bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
//       >
//         <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 to-emerald-100 text-teal-700">
//           <ClipboardCheck size={19} />
//         </span>

//         <h3 className="mt-2.5 text-sm font-bold text-slate-900">
//           Test Results
//         </h3>
//         <p className="mt-1 text-xs leading-5 text-slate-500">
//           Online result enquiries
//         </p>
//         <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-teal-700">
//           Enquire <ArrowUpRight size={12} />
//         </span>
//       </Link>

//       <a
//         href={`tel:${site.phone || "+919996022103"}`}
//         className="rounded-2xl border border-slate-100 bg-white p-3.5 transition hover:-translate-y-0.5 hover:border-teal-200 hover:shadow-md"
//       >
//         <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-100 to-cyan-100 text-teal-700">
//           <PhoneCall size={19} />
//         </span>

//         <h3 className="mt-2.5 text-sm font-bold text-slate-900">
//           Emergency Case
//         </h3>
//         <p className="mt-1 break-words text-sm font-extrabold text-slate-900">
//           {site.phone || "+91 99960-22103"}
//         </p>
//         <span className="mt-2 inline-flex items-center gap-1 text-xs font-bold text-teal-700">
//           Call Now <ArrowUpRight size={12} />
//         </span>
//       </a>
//     </div>

//     {/* Trust Badge */}
//     <div className="mt-3 flex items-center gap-2.5 rounded-xl border border-teal-100 bg-white/80 px-3 py-2.5">
//       <ShieldCheck size={18} className="shrink-0 text-teal-600" />
//       <p className="text-xs text-slate-600">
//         <span className="font-bold text-slate-900">
//           24+ Years of Experience
//         </span>
//         {" "}· Trusted Eye Care
//       </p>
//     </div>

//   </div>
// </div>

//         </div>

      
//       </div>
//     </section>
//   );
// }





import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarClock, ClipboardCheck, PhoneCall } from 'lucide-react'
import { site } from '../data/siteData'

const fibers = Array.from({ length: 48 }, (_, i) => {
  const a = (i / 48) * Math.PI * 2
  return {
    x1: 200 + Math.cos(a) * 62,
    y1: 200 + Math.sin(a) * 62,
    x2: 200 + Math.cos(a) * 136,
    y2: 200 + Math.sin(a) * 136,
  }
})

function IrisGraphic({ pupil }) {
  return (
    <svg viewBox="0 0 400 400" className="h-full w-full" fill="none">
      <defs>
        <radialGradient id="hero-iris" cx="50%" cy="50%" r="50%">
          <stop offset="0.35" stopColor="#10b981" />
          <stop offset="0.75" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#0891b2" />
        </radialGradient>
      </defs>

      {/* Outer rings */}
      <circle cx="200" cy="200" r="196" stroke="#0d9488" strokeOpacity="0.12" />
      <circle cx="200" cy="200" r="176" stroke="#0d9488" strokeOpacity="0.18" strokeDasharray="2 8" />
      <circle cx="200" cy="200" r="156" stroke="#0d9488" strokeOpacity="0.25" />

      {/* Iris */}
      <circle cx="200" cy="200" r="140" fill="url(#hero-iris)" />
      {fibers.map((f, i) => (
        <line
          key={i}
          x1={f.x1}
          y1={f.y1}
          x2={f.x2}
          y2={f.y2}
          stroke="white"
          strokeOpacity={i % 2 ? 0.12 : 0.28}
          strokeWidth="1.2"
        />
      ))}
      <circle cx="200" cy="200" r="140" stroke="#0f766e" strokeOpacity="0.5" strokeWidth="3" />
      <circle cx="200" cy="200" r="64" fill="#064e3b" fillOpacity="0.35" />

      {/* Pupil follows cursor */}
      <g
        style={{ transform: `translate(${pupil.x}px, ${pupil.y}px)` }}
        className="transition-transform duration-200 ease-out"
      >
        <circle cx="200" cy="200" r="48" fill="#04141a" />
        <circle cx="178" cy="178" r="13" fill="white" fillOpacity="0.9" />
        <circle cx="222" cy="220" r="5" fill="white" fillOpacity="0.5" />
      </g>
    </svg>
  )
}

export default function Hero() {
  const box = useRef(null)
  const [pupil, setPupil] = useState({ x: 0, y: 0 })

  const handleMove = (e) => {
    const r = box.current?.getBoundingClientRect()
    if (!r) return
    const dx = e.clientX - (r.left + r.width / 2)
    const dy = e.clientY - (r.top + r.height / 2)
    const dist = Math.hypot(dx, dy) || 1
    const max = Math.min(26, dist / 14)
    setPupil({ x: (dx / dist) * max, y: (dy / dist) * max })
  }

  const info = [
    {
      icon: CalendarClock,
      title: 'Appointments',
      lines: ['Mon-Sat 9:00 AM - 02:00 PM', 'Thu - Retina Clinic On Alternate Thursday'],
    },
    {
      icon: ClipboardCheck,
      title: 'Test Result',
      lines: ['You can check your test results today online.'],
    },
    {
      icon: PhoneCall,
      title: 'Emergency Case',
      lines: [site.phone],
      href: `tel:${site.phone}`,
      strong: true,
    },
  ]

  return (
    <section
      onMouseMove={handleMove}
      className="relative overflow-hidden bg-[#f3faf9] pb-20 lg:pb-28"
    >
      {/* Soft glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 pb-10 pt-14 sm:px-6 lg:grid-cols-2 lg:px-8 lg:pt-20">
        {/* Text */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500" />
            Best Treatment
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Eye Care
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Services.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Welcome to Dr. Vinod Sharma Eye Care, where we have provided exceptional eye care for
            over 24 years. With over 60,000 successful cataract surgeries and countless other eye
            treatments, our team uses state-of-the-art equipment to ensure the best outcomes for our
            patients.
          </p>

          <Link
            to="/contact"
            className="group mt-8 inline-flex items-center gap-3 rounded-full bg-slate-900 py-1.5 pl-6 pr-1.5 text-sm font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Contact Us
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </span>
          </Link>
        </div>

        {/* Iris graphic */}
        <div className="flex justify-center lg:justify-end">
          <div ref={box} className="h-[280px] w-[280px] sm:h-[380px] sm:w-[380px] lg:h-[440px] lg:w-[440px]">
            <IrisGraphic pupil={pupil} />
          </div>
        </div>
      </div>

      {/* Info strip */}
      <div className="relative mx-auto -mb-16 max-w-7xl px-4 sm:px-6 lg:-mb-24 lg:px-8">
        <div className="grid divide-y divide-slate-100 rounded-3xl border border-slate-100 bg-white shadow-xl shadow-teal-900/5 md:grid-cols-3 md:divide-x md:divide-y-0">
          {info.map(({ icon: Icon, title, lines, href, strong }) => {
            const Tag = href ? 'a' : 'div'
            return (
              <Tag
                key={title}
                {...(href ? { href } : {})}
                className="group flex items-start gap-4 p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 text-teal-600 transition-all duration-300 group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:text-slate-900">
                  <Icon size={20} />
                </span>
                <span>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
                    {title}
                  </span>
                  {lines.map((l) => (
                    <span
                      key={l}
                      className={`mt-1 block ${
                        strong ? 'text-xl font-bold text-slate-900' : 'text-sm text-slate-600'
                      }`}
                    >
                      {l}
                    </span>
                  ))}
                </span>
              </Tag>
            )
          })}
        </div>
      </div>
    </section>
  )
}
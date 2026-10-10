import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, ScanEye } from 'lucide-react'

import Img1 from '../assets/1.jpg';
import Img2 from '../assets/2.jpg';
import Img3 from '../assets/Experience.jpg';

// Put your photos in the /public folder with these names
const panels = [
  { src:  Img1 , label: 'Eye Examination Unit' },
  { src: Img2    , label: 'Consultation Room' },
  { src: Img3      , label: 'Surgery Theatre' },
]

function Photo({ src, alt }) {
  const [failed, setFailed] = useState(false)
  if (failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-cyan-100 via-[#e6f7f6] to-emerald-100 text-teal-600/60">
        <ScanEye size={56} strokeWidth={1.2} />
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-cover"
    />
  )
}

export default function GetInvolved() {
  const [active, setActive] = useState(0)

  return (
    <section className="relative isolate overflow-hidden bg-[#f3faf9] py-20 lg:py-28">
      {/* Dotted texture + glows */}
      <div className="pointer-events-none absolute inset-0 -z-10 [background-image:radial-gradient(rgba(13,148,136,0.12)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_75%)]" />
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-80 w-80 rounded-full bg-cyan-300/25 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500" />
            We Expert
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Our Latest{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              technology
            </span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-600">
            Our experienced professionals ensure comprehensive care from routine exams to advanced
            surgical procedures. Your vision health is our top priority, and we strive to deliver
            exceptional service and results.
          </p>
        </div>

        {/* Expanding panels */}
        <div className="mt-14 flex flex-col gap-4 lg:h-[480px] lg:flex-row">
          {panels.map((p, i) => {
            const isActive = active === i
            return (
              <div
                key={p.label}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                style={{ flexGrow: isActive ? 2.4 : 1 }}
                className={`group relative h-72 cursor-pointer overflow-hidden rounded-3xl border-2 bg-white transition-all duration-700 ease-out lg:h-auto lg:flex-1 lg:basis-0 ${
                  isActive
                    ? 'border-cyan-400 shadow-2xl shadow-teal-900/15'
                    : 'border-white shadow-lg shadow-teal-900/5'
                }`}
              >
                <div
                  className={`absolute inset-0 transition-all duration-700 ${
                    isActive ? 'scale-105 brightness-100' : 'scale-100 brightness-[0.8]'
                  }`}
                >
                  <Photo src={p.src} alt={p.label} />
                </div>

                {/* Bottom fade for readable caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />

                {/* Number */}
                <span
                  className={`absolute right-5 top-3 select-none text-7xl font-black leading-none transition-colors duration-500 ${
                    isActive ? 'text-white/70' : 'text-white/35'
                  }`}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Caption */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center gap-3 p-6">
                  <span
                    className={`h-10 w-1 shrink-0 rounded-full bg-gradient-to-b from-cyan-400 to-emerald-400 transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                  <p className="text-lg font-bold text-white">{p.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-slate-900 py-1.5 pl-7 pr-1.5 text-sm font-bold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-cyan-500/25"
          >
            Contact Us
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900 transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={18} strokeWidth={2.5} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, ArrowUp, ArrowUpRight } from 'lucide-react'
import { site } from '../data/siteData'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/services', label: 'Services' },
  { to: '/testimonial', label: 'Testimonial' },
  { to: '/contact', label: 'Contact' },
  { to: '/appointment', label: 'Get Appointment' },
]

function EyeLogo() {
  return (
    <svg viewBox="0 0 48 48" className="h-12 w-12 shrink-0" fill="none">
      <defs>
        <linearGradient id="foot-iris" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#22d3ee" />
          <stop offset="1" stopColor="#10b981" />
        </linearGradient>
      </defs>
      <path
        d="M2 24C8 12 16 8 24 8s16 4 22 16c-6 12-14 16-22 16S8 36 2 24z"
        stroke="#22d3ee"
        strokeOpacity="0.7"
        strokeWidth="2.5"
        strokeLinejoin="round"
        fill="#0b1c26"
      />
      <circle cx="24" cy="24" r="9.5" fill="url(#foot-iris)" />
      <circle cx="24" cy="24" r="4.2" fill="#06121a" />
      <circle cx="21" cy="21" r="1.8" fill="white" />
    </svg>
  )
}

export default function Footer() {
  const contacts = [
    { icon: Phone, label: 'Call', value: site.phone, href: `tel:${site.phone}` },
    { icon: Mail, label: 'Mail', value: site.email, href: `mailto:${site.email}` },
    { icon: MapPin, label: 'Visit', value: site.address },
  ]

  return (
    <footer className="relative overflow-hidden bg-[#06121a]">
      {/* Top gradient line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-400/70 to-transparent" />

      {/* Glows */}
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-28 h-72 w-72 rounded-full bg-emerald-500/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 pt-16 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-12">
          {/* Brand + links */}
          <div className="lg:col-span-7">
            <Link to="/" className="inline-flex items-center gap-4">
              
              <span className="text-2xl font-extrabold leading-tight tracking-tight text-white">
                {site.name}
              </span>
            </Link>

            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-400">
              Making your vision clear for over 24 years.
            </p>

            <p className="mt-10 text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300">
              Quick Links
            </p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-transparent hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:text-slate-900 hover:shadow-lg hover:shadow-cyan-500/20"
                >
                  {l.label}
                  <ArrowUpRight
                    size={14}
                    className="text-cyan-300 transition-colors group-hover:text-slate-900"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Prescription card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl border-2 border-dashed border-white/15 bg-white/[0.04] p-6 shadow-2xl shadow-black/30 backdrop-blur sm:p-8">
              {/* Perforation notches (match footer bg) */}
              <span className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-dashed border-white/15 bg-[#06121a]" />
              <span className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full border-2 border-dashed border-white/15 bg-[#06121a]" />

              <div className="flex items-center justify-between">
                <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-cyan-300">
                  Contact
                </p>
                <span className="rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 px-2.5 py-1 font-serif text-lg font-black italic leading-none text-slate-900">
                  Rx
                </span>
              </div>

              <div className="mt-5 divide-y divide-dashed divide-white/15">
                {contacts.map(({ icon: Icon, label, value, href }) => {
                  const Tag = href ? 'a' : 'div'
                  return (
                    <Tag
                      key={label}
                      {...(href ? { href } : {})}
                      className="group flex items-center gap-4 py-4 first:pt-0 last:pb-0"
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400/10 text-cyan-300 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:text-slate-900">
                        <Icon size={17} />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                          {label}
                        </span>
                        <span className="block text-sm font-semibold text-slate-200 transition-colors group-hover:text-cyan-300">
                          {value}
                        </span>
                      </span>
                    </Tag>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Giant outlined wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none mt-14 select-none overflow-hidden text-center [mask-image:linear-gradient(to_bottom,black_35%,transparent)]"
        >
          <span className="block whitespace-nowrap text-[18vw] font-black leading-[0.9] tracking-tighter text-transparent [-webkit-text-stroke:2px_rgba(34,211,238,0.25)] lg:text-[11rem]">
            Dr. Sharma's
          </span>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/[0.08] bg-black/20">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
            className="group inline-flex items-center gap-2 font-semibold text-slate-300 transition-colors hover:text-cyan-300"
          >
            Back to top
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg group-hover:shadow-cyan-500/30">
              <ArrowUp size={16} strokeWidth={2.5} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
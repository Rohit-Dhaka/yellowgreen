import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, CalendarDays, Clock, Newspaper } from 'lucide-react'
import { blogs } from '../data/siteData'

const readTime = (b) =>
  Math.max(1, Math.round([b.text, ...b.content].join(' ').split(/\s+/).length / 200))

// Image with gradient fallback if link is missing or broken
function Cover({ src, alt, className = '' }) {
  const [failed, setFailed] = useState(false)
  if (!src || failed) {
    return (
      <div className={`flex items-center justify-center bg-gradient-to-br from-cyan-100 via-[#f3faf9] to-emerald-100 text-teal-600 ${className}`}>
        <Newspaper size={40} strokeWidth={1.5} />
      </div>
    )
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  )
}

export default function Blogs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-24 top-10 h-72 w-72 rounded-full bg-cyan-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-[#f3faf9] px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500" />
            Blogs
          </span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Latest From Our{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Blog
            </span>
          </h2>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              to={`/blog/${b.slug}`}
              className="group flex flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-600/15 hover:shadow-2xl hover:shadow-teal-900/10"
            >
              <div className="relative h-56 overflow-hidden">
                <Cover
                  src={b.image}
                  alt={b.title}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold text-slate-800 backdrop-blur">
                  <CalendarDays size={13} className="text-teal-600" />
                  {b.date}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                  <Clock size={13} className="text-teal-600" />
                  {readTime(b)} min read
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-teal-700">
                  {b.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{b.text}</p>

                <span className="mt-5 inline-flex items-center gap-2 border-t border-dashed border-teal-900/15 pt-4 text-sm font-semibold text-teal-700">
                  Read More
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50 transition-all duration-300 group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:text-slate-900">
                    <ArrowUpRight size={14} />
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
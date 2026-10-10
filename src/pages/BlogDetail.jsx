import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CalendarCheck,
  CalendarDays,
  Clock,
  Newspaper,
} from 'lucide-react'
import { blogs } from '../data/siteData'

const readTime = (b) =>
  Math.max(1, Math.round([b.text, ...b.content].join(' ').split(/\s+/).length / 200))

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

export default function BlogDetail() {
  const { slug } = useParams()
  const index = blogs.findIndex((b) => b.slug === slug)
  const blog = blogs[index]
  const [progress, setProgress] = useState(0)

  // Reading progress bar
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setProgress(h > 0 ? Math.min(100, (window.scrollY / h) * 100) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug])

  if (!blog) {
    return (
      <section className="bg-[#f3faf9] py-28 text-center">
        <h1 className="text-3xl font-extrabold text-slate-900">Blog not found</h1>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
      </section>
    )
  }

  const prev = blogs[index - 1]
  const next = blogs[index + 1]
  const related = blogs.filter((b) => b.slug !== slug)

  return (
    <>
      {/* Reading progress */}
      <div className="fixed left-0 top-0 z-[60] h-1 w-full bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-[width] duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Header */}
      <section className="relative overflow-hidden bg-[#f3faf9] pb-40 pt-12 lg:pt-16">
        <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-teal-700"
          >
            <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Home
          </Link>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
              <CalendarDays size={13} />
              {blog.date}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
              <Clock size={13} />
              {readTime(blog)} min read
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {blog.title}
          </h1>
        </div>
      </section>

      {/* Cover image (overlaps header) */}
      <div className="relative z-10 mx-auto -mt-32 max-w-5xl px-4 sm:px-6">
        <Cover
          src={blog.image}
          alt={blog.title}
          className="h-64 w-full rounded-3xl shadow-2xl shadow-teal-900/15 sm:h-96"
        />
      </div>

      {/* Article */}
      <article className="bg-white py-14">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <p className="border-l-4 border-cyan-400 bg-[#f3faf9] py-4 pl-5 pr-4 text-lg font-medium leading-relaxed text-slate-700">
            {blog.text}
          </p>

          <div className="mt-8 space-y-6 text-base leading-8 text-slate-600">
            {blog.content.map((p, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? 'first-letter:float-left first-letter:mr-3 first-letter:bg-gradient-to-br first-letter:from-cyan-500 first-letter:to-emerald-500 first-letter:bg-clip-text first-letter:text-6xl first-letter:font-extrabold first-letter:leading-[0.9] first-letter:text-transparent'
                    : ''
                }
              >
                {p}
              </p>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-3xl bg-slate-900 p-7 sm:flex-row sm:items-center">
            <div>
              <p className="text-lg font-bold text-white">Have an eye problem?</p>
              <p className="mt-1 text-sm text-slate-400">Book a checkup with our doctor.</p>
            </div>
            <Link
              to="/appointment"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 py-1.5 pl-5 pr-1.5 text-xs font-bold uppercase tracking-wider text-slate-900"
            >
              Get Appointment
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-cyan-300 transition-transform duration-300 group-hover:rotate-12">
                <CalendarCheck size={15} />
              </span>
            </Link>
          </div>

          {/* Prev / Next */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {prev ? (
              <Link
                to={`/blog/${prev.slug}`}
                className="group rounded-2xl border border-slate-100 p-5 transition-all duration-300 hover:border-teal-600/20 hover:shadow-lg hover:shadow-teal-900/5"
              >
                <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
                  <ArrowLeft size={13} /> Previous
                </span>
                <span className="mt-2 block font-bold leading-snug text-slate-900 group-hover:text-teal-700">
                  {prev.title}
                </span>
              </Link>
            ) : (
              <span />
            )}
            {next && (
              <Link
                to={`/blog/${next.slug}`}
                className="group rounded-2xl border border-slate-100 p-5 text-right transition-all duration-300 hover:border-teal-600/20 hover:shadow-lg hover:shadow-teal-900/5 sm:col-start-2"
              >
                <span className="flex items-center justify-end gap-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
                  Next <ArrowRight size={13} />
                </span>
                <span className="mt-2 block font-bold leading-snug text-slate-900 group-hover:text-teal-700">
                  {next.title}
                </span>
              </Link>
            )}
          </div>
        </div>
      </article>

      {/* More blogs */}
      <section className="bg-[#f3faf9] py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-extrabold text-slate-900 sm:text-3xl">
            More Blogs
          </h2>
          <div className="mx-auto mt-8 grid max-w-4xl gap-6 sm:grid-cols-2">
            {related.map((b) => (
              <Link
                key={b.slug}
                to={`/blog/${b.slug}`}
                className="group overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-900/10"
              >
                <div className="h-40 overflow-hidden">
                  <Cover
                    src={b.image}
                    alt={b.title}
                    className="h-full w-full transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs font-semibold text-slate-500">{b.date}</p>
                  <h3 className="mt-2 font-bold leading-snug text-slate-900 group-hover:text-teal-700">
                    {b.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                    Read More
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
import { ExternalLink, MapPin, Phone, Mail, Send } from 'lucide-react'
import { site } from '../data/siteData'

const mapQuery = 'Bus Stand Road, Fatehabad, Haryana'

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you soon.')
    e.target.reset()
  }

  const field =
    'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-cyan-400 focus:ring-4 focus:ring-cyan-400/15'
  const label = 'mb-2 block text-sm font-semibold text-slate-700'

  const details = [
    { icon: MapPin, title: 'Address', value: site.address },
    { icon: Phone, title: 'Phone', value: site.phone, href: `tel:${site.phone}` },
    { icon: Mail, title: 'Email', value: site.email, href: `mailto:${site.email}` },
  ]

  return (
    <section className="relative overflow-hidden bg-[#f3faf9] py-20 lg:py-28">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-emerald-300/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {/* LEFT */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-teal-700">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-400 to-emerald-500" />
            Contact Us
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Book An{' '}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Appointment!
            </span>
          </h2>

          <p className="mt-4 max-w-lg text-base leading-relaxed text-slate-600">
            Schedule your visit with our expert eye care professionals easily and conveniently.
            Secure your appointment today for comprehensive eye exams and personalized care.
          </p>

          {/* Details */}
          <div className="mt-8 space-y-5">
            {details.map(({ icon: Icon, title, value, href }) => {
              const Tag = href ? 'a' : 'div'
              return (
                <Tag
                  key={title}
                  {...(href ? { href } : {})}
                  className="group flex items-start gap-4"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400/20 to-emerald-400/10 text-teal-600 transition-all duration-300 group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:text-slate-900">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <span>
                    <span className="block text-base font-bold text-slate-900">{title}</span>
                    <span className="block text-sm text-slate-600 transition-colors group-hover:text-teal-700">
                      {value}
                    </span>
                  </span>
                </Tag>
              )
            })}
          </div>

          {/* Map */}
          <div className="relative mt-9 overflow-hidden rounded-3xl border border-slate-200 shadow-xl shadow-teal-900/5">
            <iframe
              title="Clinic location"
              src={`https://www.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              className="h-72 w-full border-0 sm:h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group absolute left-3 top-3 flex max-w-[78%] items-center gap-3 rounded-xl bg-white p-3 pr-3 shadow-lg"
            >
              <span className="min-w-0 leading-tight">
                <span className="block text-sm font-bold text-slate-900">Bus Stand Road</span>
                <span className="block truncate text-[11px] text-slate-500">{site.address}</span>
              </span>
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-teal-700 transition-colors group-hover:bg-gradient-to-br group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:text-slate-900">
                <ExternalLink size={15} />
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT: form */}
        <form
          onSubmit={handleSubmit}
          className="h-fit rounded-3xl border-2 border-dashed border-teal-900/25 bg-white p-6 shadow-xl shadow-teal-900/5 sm:p-10"
        >
          <div className="space-y-5">
            <div>
              <label className={label}>Your Name</label>
              <input required name="name" className={field} />
            </div>

            <div>
              <label className={label}>Your Email</label>
              <input required type="email" name="email" className={field} />
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className={label}>Phone Number</label>
                <input name="phone" className={field} />
              </div>
              <div>
                <label className={label}>Subject</label>
                <input name="subject" className={field} />
              </div>
            </div>

            <div>
              <label className={label}>Your Message (Optional)</label>
              <textarea name="message" rows="6" className={field} />
            </div>

            <button className="group inline-flex items-center gap-3 rounded-full bg-slate-900 py-1.5 pl-7 pr-1.5 text-sm font-bold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500 hover:shadow-lg hover:shadow-cyan-500/25">
              Send Message
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900 transition-transform duration-300 group-hover:translate-x-0.5">
                <Send size={16} strokeWidth={2.4} />
              </span>
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
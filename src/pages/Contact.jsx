
import {
  ArrowDown,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";
import ContactForm from "../components/ContactForm";
import { site } from "../data/siteData";

const contactItems = [
  {
    title: "Call Our Clinic",
    detail: site.phone,
    icon: Phone,
    href: `tel:${site.phone}`,
    color: "bg-cyan-50 text-cyan-700",
    action: "Call Now",
  },
  {
    title: "Email Us",
    detail: site.email,
    icon: Mail,
    href: `mailto:${site.email}`,
    color: "bg-emerald-50 text-emerald-700",
    action: "Send Email",
  },
  {
    title: "Visit Our Clinic",
    detail: site.address,
    icon: MapPin,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`,
    color: "bg-teal-50 text-teal-700",
    action: "Get Directions",
  },
];

export default function Contact() {
  return (
    <>
      {/* Contact Hero */}
      <section className="relative overflow-hidden bg-[#f3faf9]">
        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-24 -top-20 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-emerald-200/30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
              We’re Here to Help
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Let's Talk About
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Your Eye Health.
              </span>
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
              Have a question about our eye-care services? Get in touch with
              Dr. Sharma's Eye Care & Lasik Centre. We're here to help you
              take the next step towards better vision.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`tel:${site.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-slate-900/10 transition-all hover:bg-gradient-to-r hover:from-cyan-500 hover:to-emerald-500"
              >
                <Phone size={16} />
                Call Our Clinic
                <ArrowUpRight size={15} />
              </a>

              <a
                href="#contact-form"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all hover:border-teal-200 hover:text-teal-700"
              >
                Send an Enquiry
                <ArrowDown size={15} />
              </a>
            </div>
          </div>

          {/* Contact information cards */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {contactItems.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.title === "Visit Our Clinic" ? "_blank" : undefined}
                  rel={item.title === "Visit Our Clinic" ? "noopener noreferrer" : undefined}
                  className="group flex min-w-0 items-start gap-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-100 hover:shadow-xl hover:shadow-teal-900/5 sm:p-6"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.color} transition-transform duration-300 group-hover:scale-105`}
                  >
                    <Icon size={21} strokeWidth={1.8} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-slate-900">
                      {item.title}
                    </span>

                    <span className="mt-2 block break-words text-sm leading-6 text-slate-500">
                      {item.detail}
                    </span>

                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-teal-700">
                      {item.action}
                      <ArrowUpRight
                        size={13}
                        className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </span>
                  </span>
                </a>
              );
            })}
          </div>

          {/* Trust note */}
          <div className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-slate-500">
            <MessageCircle size={15} className="shrink-0 text-teal-600" />
            <p>Contact our team for clinic timings and appointment enquiries.</p>
          </div>
        </div>
      </section>

      {/* Existing contact form */}
      <div id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </div>
    </>
  );
}

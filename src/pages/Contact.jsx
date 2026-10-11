
import {
  ArrowDown,
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Eye,
  Clock,
} from "lucide-react";

import ContactForm from "../components/ContactForm";
import { site } from "../data/siteData";

const contactItems = [
  {
    title: "Call Our Clinic",
    detail: site.phone,
    icon: Phone,
    href: `tel:${site.phone}`,
    action: "Call Now",
  },
  {
    title: "Email Us",
    detail: site.email,
    icon: Mail,
    href: `mailto:${site.email}`,
    action: "Send Email",
  },
  {
    title: "Visit Our Clinic",
    detail: site.address,
    icon: MapPin,
    href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      site.address
    )}`,
    action: "Get Directions",
    external: true,
  },
];

export default function Contact() {
  return (
    <>
      {/* CONTACT HERO */}
      <section className="relative overflow-hidden bg-[#f0f4ff]">

        {/* Background decoration */}
        <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-[#2864f5]/10 blur-[100px]" />
        <div className="pointer-events-none absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-[#dce8ff]/80 blur-[100px]" />

        <div className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          {/* Main hero layout */}
          <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">

            {/* LEFT: Hero content */}
            <div className="max-w-2xl">

              <span className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#2864f5] shadow-sm">
                <span className="h-2 w-2 rounded-full bg-[#2864f5]" />
                Contact Our Clinic
              </span>

              <h1 className="mt-6 text-4xl font-extrabold leading-[1.12] tracking-tight text-[#13284d] sm:text-5xl lg:text-6xl">
                Your Vision.
                <br />
                Your Health.
                <br />
                <span className="text-[#2864f5]">
                  Our Priority.
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                Have questions about our eye-care services? Our team at
                Dr. Sharma&apos;s Eye Care &amp; Lasik Centre is here to
                guide you. Reach out to us for information and appointment
                enquiries.
              </p>

              {/* Hero actions */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${site.phone}`}
                  className="group inline-flex items-center gap-3 rounded-full bg-[#2864f5] py-1.5 pl-5 pr-1.5 text-sm font-bold text-white shadow-lg shadow-[#2864f5]/20 transition-all duration-300 hover:bg-[#1d4ed8]"
                >
                  <Phone size={16} />
                  Call Our Clinic

                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2864f5] transition-transform group-hover:rotate-45">
                    <ArrowUpRight size={17} />
                  </span>
                </a>

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-5 py-3 text-sm font-bold text-[#13284d] transition-all hover:border-[#2864f5] hover:text-[#2864f5]"
                >
                  Send an Enquiry
                  <ArrowDown size={15} />
                </a>
              </div>

              {/* Small trust note */}
              <div className="mt-7 flex items-start gap-3 border-t border-[#dce8ff] pt-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#2864f5]">
                  <MessageCircle size={17} />
                </span>

                <p className="max-w-md text-xs leading-6 text-slate-500">
                  Need help before your visit? Contact our team for clinic
                  timings, directions, and appointment enquiries.
                </p>
              </div>
            </div>

            {/* RIGHT: Clinic information panel */}
            <div className="relative">

              {/* Decorative background shape */}
              <div className="absolute -right-3 -top-3 h-24 w-24 rounded-3xl border border-[#2864f5]/15 sm:-right-4 sm:-top-4" />

              <div className="relative overflow-hidden rounded-[28px] border border-[#dce8ff] bg-white p-5 shadow-[0_24px_70px_rgba(40,100,245,0.10)] sm:p-7 lg:p-8">

                {/* Panel header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#2864f5]">
                      Get in Touch
                    </span>

                    <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#13284d] sm:text-3xl">
                      Let&apos;s Connect
                    </h2>

                    <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                      We&apos;re here to help you take the next step
                      toward better vision.
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#2864f5] text-white shadow-lg shadow-[#2864f5]/20">
                    <Eye size={25} strokeWidth={1.7} />
                  </div>
                </div>

                {/* Accent line */}
                <div className="my-6 h-px bg-[#dce8ff]" />

                {/* Contact details */}
                <div className="space-y-5">
                  {contactItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.title}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group flex min-w-0 items-center gap-4"
                      >
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#dce8ff] bg-[#f0f4ff] text-[#2864f5] transition-all duration-300 group-hover:bg-[#2864f5] group-hover:text-white">
                          <Icon size={19} strokeWidth={1.8} />
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-bold text-[#13284d]">
                            {item.title}
                          </span>

                          <span className="mt-1 block break-words text-xs leading-5 text-slate-500 sm:text-sm">
                            {item.detail}
                          </span>
                        </span>

                        <ArrowUpRight
                          size={16}
                          className="shrink-0 text-slate-400 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#2864f5]"
                        />
                      </a>
                    );
                  })}
                </div>

                {/* Clinic note */}
                <div className="mt-7 rounded-2xl border border-[#dce8ff] bg-[#f0f4ff] p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-[#2864f5]">
                      <Clock size={17} />
                    </span>

                    <div>
                      <h3 className="text-xs font-bold text-[#13284d]">
                        Planning Your Visit?
                      </h3>

                      <p className="mt-1 text-xs leading-5 text-slate-500">
                        Contact our clinic to enquire about available
                        timings and appointments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map directions CTA */}
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    site.address
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#13284d] px-4 py-3.5 text-xs font-bold text-white transition-colors hover:bg-[#2864f5]"
                >
                  <MapPin size={16} />
                  Find Our Location
                  <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          </div>

          {/* CONTACT METHODS */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {contactItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={
                    item.external
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="group flex min-w-0 items-start gap-4 rounded-2xl border border-[#dce8ff] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2864f5]/40 hover:shadow-xl hover:shadow-[#2864f5]/5 sm:p-6"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#f0f4ff] text-[#2864f5] transition-colors group-hover:bg-[#2864f5] group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-bold text-[#13284d]">
                      {item.title}
                    </span>

                    <span className="mt-2 block break-words text-sm leading-6 text-slate-500">
                      {item.detail}
                    </span>

                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-bold text-[#2864f5]">
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
        </div>
      </section>

      {/* EXISTING CONTACT FORM */}
      <div id="contact-form" className="scroll-mt-24">
        <ContactForm />
      </div>
    </>
  );
}

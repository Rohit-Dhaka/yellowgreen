
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Phone,
  Mail,
  ArrowUp,
  MapPin,
  Eye,
  Clock3,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

import { site } from "../data/siteData";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/testimonial", label: "Testimonials" },
  { to: "/contact", label: "Contact Us" },
  { to: "/appointment", label: "Appointment" },
];

const socialLinks = [
  {
    label: "Facebook",
    icon: FaFacebookF,
    href: "https://www.facebook.com/",
  },
  {
    label: "Instagram",
    icon: FaInstagram,
    href: "https://www.instagram.com/",
  },
  {
    label: "YouTube",
    icon: FaYoutube,
    href: "https://www.youtube.com/",
  },
  {
    label: "X",
    icon: FaXTwitter,
    href: "https://x.com/",
  },
];

export default function Footer() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#2864f5] text-white">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-white/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#13284d]/20 blur-[100px]" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">

        {/* Top CTA Panel */}
        <div className="relative -mt-px overflow-hidden rounded-b-3xl border-x border-b border-white/20 bg-white p-6 shadow-xl shadow-[#13284d]/10 sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#dce8ff]/70 blur-2xl" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f0f4ff] text-[#2864f5]">
                <Eye size={25} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#2864f5]">
                  Your Vision Matters
                </p>

                <h2 className="mt-2 text-xl font-extrabold text-[#13284d] sm:text-2xl">
                  Give Your Eyes the Care They Deserve
                </h2>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Connect with our clinic to discuss your eye-care needs
                  and arrange your appointment.
                </p>
              </div>
            </div>

            <Link
              to="/appointment"
              className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#2864f5] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#2864f5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8]"
            >
              Book Appointment
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid gap-12 py-14 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:py-20">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Link
              to="/"
              aria-label="Dr. Sharma's Eye Care home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-white text-lg font-black text-[#2864f5] shadow-lg transition-transform duration-300 group-hover:scale-105">
                DS
              </span>

              <span>
                <span className="block text-lg font-extrabold tracking-tight sm:text-xl">
                  Dr. Sharma&apos;s
                </span>

                <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.19em] text-blue-100">
                  Eye Care &amp; Lasik Centre
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-md text-sm leading-7 text-blue-50/85">
              Dedicated to supporting better vision through attentive
              eye care, personalized service and modern treatment
              solutions. Your eye health deserves thoughtful care.
            </p>

            {/* Social Links */}
            <div className="mt-7">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100">
                Connect With Us
              </p>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ label, icon: Icon, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#2864f5]"
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em]">
              Quick Links
            </h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-white/80" />

            <nav
              aria-label="Footer quick links"
              className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="group inline-flex items-center gap-1.5 text-sm text-blue-50/85 transition-colors duration-200 hover:text-white"
                >
                  <ArrowUpRight
                    size={14}
                    className="shrink-0 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                  />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-extrabold uppercase tracking-[0.16em]">
              Contact Our Clinic
            </h3>

            <div className="mt-3 h-1 w-10 rounded-full bg-white/80" />

            <div className="mt-6 space-y-5">

              {/* Phone */}
              <a
                href={`tel:${site.phone}`}
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-colors group-hover:bg-white group-hover:text-[#2864f5]">
                  <Phone size={17} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-100">
                    Call Us
                  </span>
                  <span className="mt-1 block break-words text-sm font-semibold text-white">
                    {site.phone}
                  </span>
                </span>
              </a>

              {/* Email */}
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-3"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10 transition-colors group-hover:bg-white group-hover:text-[#2864f5]">
                  <Mail size={17} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-100">
                    Email Us
                  </span>
                  <span className="mt-1 block break-all text-sm font-semibold text-white">
                    {site.email}
                  </span>
                </span>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <MapPin size={17} />
                </span>

                <span className="min-w-0 pt-0.5">
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-blue-100">
                    Visit Our Clinic
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-white/95">
                    {site.address}
                  </span>
                </span>
              </div>

              {/* Appointment Reminder */}
              <div className="flex items-center gap-3 border-t border-white/20 pt-5">
                <Clock3 size={17} className="shrink-0 text-blue-100" />
                <p className="text-xs leading-5 text-blue-50/85">
                  Contact our team for appointment and clinic information.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Large Brand Wordmark */}
        <div
          aria-hidden="true"
          className="pointer-events-none relative select-none overflow-hidden border-t border-white/20 pt-8 sm:pt-10"
        >
          <span className="block whitespace-nowrap text-center text-[17vw] font-black leading-[0.9] tracking-[-0.075em] text-white/[0.12] sm:text-[15vw] lg:text-[12rem]">
            Dr. Sharma&apos;s
          </span>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="relative z-10 mt-2 border-t border-white/10 bg-[#13284d]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 px-5 py-5 text-center sm:flex-row sm:px-8 sm:text-left lg:px-12">
          <p className="text-xs leading-5 text-blue-100/75">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={handleBackToTop}
            className="group inline-flex items-center gap-3 text-xs font-bold text-white/80 transition-colors hover:text-white"
          >
            Back to top

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 transition-all duration-300 group-hover:-translate-y-1 group-hover:bg-white group-hover:text-[#2864f5]">
              <ArrowUp size={16} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}

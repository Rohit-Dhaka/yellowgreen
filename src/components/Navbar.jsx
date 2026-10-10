
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  CalendarCheck,
  ArrowUpRight,
  PhoneCall,
  Clock3,
  MapPin,
  Eye,
} from "lucide-react";

import Logo from "../assets/Logo.png";
import { site } from "../data/siteData";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Our Services" },
  { to: "/testimonial", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  const phone = site.phone || "+91 99960-22103";
  const phoneLink = phone.replace(/[^\d+]/g, "");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full">
    

      {/* MAIN FULL-WIDTH NAVBAR */}
      <div
       
      >
      

        <div className="mx-auto flex min-h-[82px] max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:min-h-[100px] lg:px-12">
          {/* LOGO */}
          <Link
            to="/"
            aria-label="Dr. Vinod Sharma Eye Care home"
            className="group flex min-w-0 shrink-0 items-center"
          >
            <img
              src={Logo}
              alt="Dr. Vinod Sharma Eye Care"
              className={`w-auto object-contain transition-all duration-300 ${
                scrolled
                  ? "h-12 sm:h-[54px]"
                  : "h-[54px] sm:h-[62px] lg:h-[68px]"
              }`}
            />
          </Link>

          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-1 lg:flex xl:gap-2"
          >
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `group relative whitespace-nowrap px-3 py-4 text-[11px] font-bold uppercase tracking-[0.11em] transition-colors xl:px-4 xl:text-xs ${
                    isActive
                      ? "text-teal-700"
                      : "text-slate-600 hover:text-teal-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}

                    <span
                      className={`absolute bottom-2 left-3 right-3 h-[2px] origin-left rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform duration-300 xl:left-4 xl:right-4 ${
                        isActive
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden shrink-0 lg:block">
            <Link
              to="/appointment"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 py-2 pl-5 pr-2 text-xs font-extrabold text-[#103749] shadow-md shadow-teal-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-teal-900/15 xl:pl-6 xl:text-[13px]"
            >
              Book Appointment

              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/90 transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={18} />
              </span>
            </Link>
          </div>

          {/* MOBILE ACTIONS */}
          <div className="flex shrink-0 items-center gap-2 lg:hidden">
            <Link
              to="/appointment"
              aria-label="Book an appointment"
              className="flex h-10 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-3.5 font-bold text-slate-900 shadow-sm sm:px-4"
            >
              <CalendarCheck size={17} />
              <span className="hidden text-xs sm:inline">
                Book Visit
              </span>
            </Link>

            <button
              type="button"
              onClick={() => setOpen((previous) => !previous)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#12374a] transition hover:border-teal-300 hover:bg-teal-50"
            >
              {open ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          id="mobile-navigation"
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
            open
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <nav
              aria-label="Mobile navigation"
              aria-hidden={!open}
              inert={!open}
              className="border-t border-slate-100 bg-white px-4 pb-5 pt-4 sm:px-6"
            >
              <div className="mb-4 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[#eff9fb] to-[#effaf5] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-teal-700 shadow-sm">
                  <Eye size={23} />
                </div>

                <div>
                  <p className="text-sm font-extrabold text-[#12374a]">
                    Dr. Vinod Sharma Eye Care
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Your vision, our priority.
                  </p>
                </div>
              </div>

              <div className="grid gap-1">
                {links.map((link, index) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-3 py-3.5 text-sm font-semibold transition ${
                        isActive
                          ? "bg-gradient-to-r from-cyan-50 to-emerald-50 text-teal-800"
                          : "text-slate-600 hover:bg-slate-50 hover:text-teal-700"
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-lg text-[10px] font-bold ${
                            isActive
                              ? "bg-gradient-to-br from-cyan-300 to-emerald-300 text-slate-900"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {link.label}

                        <ArrowUpRight
                          size={16}
                          className={`ml-auto ${
                            isActive ? "text-teal-700" : "text-slate-300"
                          }`}
                        />
                      </>
                    )}
                  </NavLink>
                ))}
              </div>

              <Link
                to="/appointment"
                className="mt-4 flex items-center justify-between rounded-2xl bg-[#12374a] p-2 pl-4 text-sm font-bold text-white transition hover:bg-teal-800"
              >
                <span className="flex items-center gap-2">
                  <CalendarCheck size={17} />
                  Schedule Your Visit
                </span>

                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-900">
                  <ArrowUpRight size={18} />
                </span>
              </Link>

              <a
                href={`tel:${phoneLink}`}
                className="mt-3 flex items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-xs font-semibold text-slate-600"
              >
                <PhoneCall size={15} className="text-teal-700" />
                Call Clinic: {phone}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}

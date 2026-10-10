
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  CalendarCheck,
  ArrowUpRight,
} from "lucide-react";

import Logo from "../assets/Logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/testimonial", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
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

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `group relative flex items-center py-3 text-[12px] font-bold uppercase tracking-[0.13em] transition-colors duration-300 ${
      isActive
        ? "text-teal-700"
        : "text-slate-600 hover:text-teal-700"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-slate-200/80 bg-white/90 shadow-[0_8px_30px_rgba(15,23,42,0.06)] backdrop-blur-xl"
          : "border-slate-100 bg-white"
      }`}
    >
      {/* Cyan to emerald accent */}
      <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          aria-label="Dr. Vinod Sharma Eye Care - Home"
          className="group flex shrink-0 items-center"
        >
          <img
            src={Logo}
            alt="Dr. Vinod Sharma Eye Care"
            className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] sm:h-14 lg:h-16"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 lg:flex xl:gap-8"
        >
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={linkClass}
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>

                  <span
                    className={`absolute bottom-1 left-0 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300 ${
                      isActive
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Appointment CTA */}
        <div className="hidden lg:flex">
          <Link
            to="/appointment"
            className="group inline-flex items-center gap-3 rounded-full bg-slate-900 py-1.5 pl-5 pr-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:text-slate-950 hover:shadow-lg hover:shadow-teal-900/10"
          >
            <span>Book Appointment</span>

            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 transition-transform duration-300 group-hover:rotate-6">
              <CalendarCheck size={16} />
            </span>
          </Link>
        </div>

        {/* Mobile / Tablet Actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/appointment"
            aria-label="Book appointment"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-sm transition-transform duration-200 hover:scale-105 sm:w-auto sm:gap-2 sm:px-4"
          >
            <CalendarCheck size={17} />

            <span className="hidden text-xs font-bold sm:inline">
              Appointment
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-800 transition-all duration-200 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
          open
            ? "grid-rows-[1fr] border-t border-slate-100 opacity-100"
            : "grid-rows-[0fr] border-t border-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Mobile navigation"
          className="overflow-hidden"
          aria-hidden={!open}
          inert={!open}
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `group flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "border-teal-100 bg-gradient-to-r from-cyan-50 to-emerald-50 text-teal-800"
                      : "border-transparent text-slate-600 hover:border-slate-100 hover:bg-slate-50 hover:text-teal-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full transition-colors ${
                        isActive
                          ? "bg-gradient-to-br from-cyan-400 to-emerald-400"
                          : "bg-slate-300 group-hover:bg-teal-400"
                      }`}
                    />

                    <span>{link.label}</span>

                    <ArrowUpRight
                      size={15}
                      className={`ml-auto transition-all duration-200 ${
                        isActive
                          ? "translate-x-0 text-teal-600 opacity-100"
                          : "-translate-x-1 text-slate-400 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            <Link
              to="/appointment"
              className="mt-2 flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:text-slate-950"
            >
              <CalendarCheck size={17} />
              Book Your Appointment
              <ArrowUpRight size={15} />
            </Link>

            <div className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-[#f3faf9] px-4 py-3 text-xs text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Your Vision, Our Priority
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
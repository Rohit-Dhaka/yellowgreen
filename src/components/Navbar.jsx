
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  CalendarCheck,
  ArrowUpRight,
  PhoneCall,
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

  // Scroll shadow
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close sidebar after route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Prevent background scrolling and support Escape key
  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full border-b border-[#dce8ff] bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled
            ? "shadow-[0_8px_30px_rgba(19,40,77,0.08)]"
            : ""
        }`}
      >
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-12">
          <div className="flex min-h-[68px] items-center justify-between gap-4 lg:min-h-[82px]">

            {/* LOGO */}
            <Link
              to="/"
              aria-label="Dr. Vinod Sharma Eye Care home"
              onClick={closeMenu}
              className="flex shrink-0 items-center"
            >
              <img
                src={Logo}
                alt="Dr. Vinod Sharma Eye Care"
                className={`w-auto object-contain transition-all duration-300 ${
                  scrolled
                    ? "h-11 sm:h-12"
                    : "h-12 sm:h-[54px] lg:h-[60px]"
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
                    `relative whitespace-nowrap rounded-full px-3 py-2.5 text-[11px] font-bold tracking-wide transition-all duration-200 xl:px-4 xl:text-xs ${
                      isActive
                        ? "bg-[#2864f5] text-white shadow-sm shadow-[#2864f5]/20"
                        : "text-[#475569] hover:bg-[#f0f4ff] hover:text-[#2864f5]"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* DESKTOP APPOINTMENT */}
            <div className="hidden shrink-0 lg:block">
              <Link
                to="/appointment"
                className="group inline-flex items-center gap-3 rounded-full bg-[#2864f5] py-1.5 pl-5 pr-1.5 text-xs font-bold text-white transition-all duration-300 hover:bg-[#1d4ed8] xl:pl-6 xl:text-[13px]"
              >
                Book Appointment

                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#2864f5] transition-transform duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>

            {/* MOBILE ACTIONS */}
            <div className="flex shrink-0 items-center gap-2 lg:hidden">
              <Link
                to="/appointment"
                onClick={closeMenu}
                aria-label="Book an appointment"
                className="flex h-10 items-center justify-center gap-2 rounded-full bg-[#2864f5] px-3.5 font-bold text-white transition-colors hover:bg-[#1d4ed8] sm:px-4"
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
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce8ff] bg-white text-[#13284d] transition-colors hover:border-[#2864f5] hover:bg-[#f0f4ff] hover:text-[#2864f5]"
              >
                {open ? <X size={21} /> : <Menu size={21} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* FULL-SCREEN MOBILE SIDEBAR */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`fixed inset-0 z-[60] bg-white transition-all duration-300 ease-in-out lg:hidden ${
          open
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto overscroll-contain bg-white">

          {/* Sidebar header */}
          <div className="flex min-h-[72px] shrink-0 items-center justify-between border-b border-[#dce8ff] bg-white px-4 sm:px-6">
            <Link
              to="/"
              onClick={closeMenu}
              aria-label="Go to homepage"
              tabIndex={open ? 0 : -1}
              className="flex items-center"
            >
              <img
                src={Logo}
                alt="Dr. Vinod Sharma Eye Care"
                className="h-11 w-auto object-contain sm:h-12"
              />
            </Link>

            <button
              type="button"
              onClick={closeMenu}
              tabIndex={open ? 0 : -1}
              aria-label="Close navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#dce8ff] bg-[#f0f4ff] text-[#13284d] transition-colors hover:bg-[#2864f5] hover:text-white"
            >
              <X size={21} />
            </button>
          </div>

      
{/* Sidebar content */}
<div className="mx-auto flex w-full max-w-xl flex-1 flex-col px-5 py-6 sm:px-8">

  {/* Navigation links */}
  <nav aria-label="Mobile navigation" className="flex flex-col gap-2">
    {links.map((link) => (
      <NavLink
        key={link.to}
        to={link.to}
        end={link.to === "/"}
        onClick={closeMenu}
        tabIndex={open ? 0 : -1}
        className={({ isActive }) =>
          `group flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition-all duration-200 ${
            isActive
              ? "bg-[#f0f4ff] text-[#2864f5]"
              : "text-slate-600 hover:bg-[#f0f4ff] hover:text-[#2864f5]"
          }`
        }
      >
        {({ isActive }) => (
          <>
            <span>{link.label}</span>

            <ArrowUpRight
              size={17}
              className={`transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                isActive ? "text-[#2864f5]" : "text-slate-400"
              }`}
            />
          </>
        )}
      </NavLink>
    ))}
  </nav>

  {/* Appointment button */}
  <Link
    to="/appointment"
    onClick={closeMenu}
    tabIndex={open ? 0 : -1}
    className="mt-6 flex items-center justify-between rounded-xl bg-[#2864f5] px-4 py-3.5 text-sm font-bold text-white shadow-md shadow-blue-500/15 transition-all duration-200 hover:bg-[#1d4ed8] hover:shadow-lg"
  >
    <span className="flex items-center gap-2">
      <CalendarCheck size={18} />
      Schedule Your Visit
    </span>

    <ArrowUpRight
      size={19}
      className="transition-transform duration-200 group-hover:-translate-y-0.5"
    />
  </Link>

</div>

        </div>
      </div>
    </>
  );
}

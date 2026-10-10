
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { site } from "../data/siteData";

const socialLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
  {
    name: "X",
    href: "https://x.com/",
    icon: FaXTwitter,
  },
];

const divider =
  "hidden h-4 w-px bg-slate-300/70 md:block";

export default function TopBar() {
  return (
    <div className="relative z-50 border-b border-slate-200/80 bg-white text-[12px] text-slate-600">
      {/* Top gradient accent */}
      <div className="h-[2px] w-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400" />

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
        {/* LEFT: Contact information */}
        <div className="flex min-w-0 items-center gap-3 lg:gap-5">
          {/* Phone */}
          <a
            href={`tel:${site.phone}`}
            className="group flex shrink-0 items-center gap-2 font-semibold text-slate-800 transition-colors duration-200 hover:text-teal-700"
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-emerald-100 text-teal-700 transition-transform duration-200 group-hover:scale-110">
              <Phone size={12} />
            </span>

            <span>{site.phone}</span>
          </a>

          <span className={divider} />

          {/* Email */}
          <a
            href={`mailto:${site.email}`}
            className="hidden min-w-0 items-center gap-2 transition-colors duration-200 hover:text-teal-700 md:flex"
          >
            <Mail
              size={14}
              className="shrink-0 text-teal-600"
            />

            <span className="truncate">{site.email}</span>
          </a>

          {/* Address */}
          <span className="hidden h-4 w-px bg-slate-300/70 xl:block" />

          <div className="hidden min-w-0 items-center gap-2 xl:flex">
            <MapPin
              size={14}
              className="shrink-0 text-teal-600"
            />

            <span className="max-w-[240px] truncate">
              {site.address}
            </span>
          </div>
        </div>

        {/* RIGHT: Social links and CTA */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-4">
          {/* Social media */}
          <div className="hidden items-center gap-2 sm:flex">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition-all duration-200 hover:border-teal-200 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-emerald-50 hover:text-teal-700"
              >
                <Icon size={12} />
              </a>
            ))}
          </div>

          <span className="hidden h-4 w-px bg-slate-300/70 sm:block" />

          {/* Contact button */}
          <a
            href={`tel:${site.phone}`}
            className="group inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 font-semibold text-white shadow-sm transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:text-slate-950 hover:shadow-md hover:shadow-teal-900/10"
          >
            <span>Contact Us</span>

            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

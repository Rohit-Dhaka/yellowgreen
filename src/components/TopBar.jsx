
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

const divider = "hidden h-3.5 w-px bg-white/15 sm:block";

export default function TopBar() {
  return (
    <div className="relative z-50 border-b border-white/[0.08] bg-[#102b3b] text-[11px] text-slate-300 sm:text-xs">


      <div className="mx-auto flex min-h-9 max-w-[1440px] items-center justify-between gap-3 px-4 py-1 sm:px-6 lg:px-12">
        {/* Contact information */}
        <div className="flex min-w-0 items-center gap-3 lg:gap-4">
          <a
            href={`tel:${site.phone}`}
            className="group flex shrink-0 items-center gap-1.5 transition-colors hover:text-emerald-300"
          >
            <Phone
              size={12}
              className="text-emerald-300 transition-transform group-hover:rotate-12"
            />
            <span className="font-semibold">{site.phone}</span>
          </a>

          <span className={divider} />

          <a
            href={`mailto:${site.email}`}
            className="hidden min-w-0 items-center gap-1.5 transition-colors hover:text-emerald-300 sm:flex"
          >
            <Mail size={12} className="shrink-0 text-cyan-300" />
            <span className="max-w-[190px] truncate">{site.email}</span>
          </a>

          <span className={divider} />

          <div className="hidden min-w-0 items-center gap-1.5 xl:flex">
            <MapPin size={12} className="shrink-0 text-emerald-300" />
            <span className="max-w-[210px] truncate">{site.address}</span>
          </div>
        </div>

        {/* Social media + Contact */}
        <div className="flex shrink-0 items-center gap-2.5 sm:gap-3">
          <div className="hidden items-center gap-1.5 sm:flex">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-6 w-6 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:border-emerald-300/40 hover:bg-emerald-400 hover:text-[#102b3b]"
              >
                <Icon size={11} />
              </a>
            ))}
          </div>

          <span className={divider} />

          <a
            href={`tel:${site.phone}`}
            className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 font-bold text-white transition-all duration-200 hover:border-emerald-300/40 hover:bg-gradient-to-r hover:from-cyan-400 hover:to-emerald-400 hover:text-[#102b3b]"
          >
            Contact Us
            <ArrowUpRight
              size={12}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

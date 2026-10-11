
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

const divider = "hidden h-3 w-px bg-white/15 sm:block";

export default function TopBar() {
  return (
    <div className="relative z-50 bg-[#2864f5] text-[10px] text-slate-300 sm:text-[11px]">
      <div className="mx-auto flex min-h-7 max-w-[1440px] items-center justify-between gap-2 px-4 py-0.5 sm:px-6 lg:px-12">

        {/* Contact information */}
        <div className="flex min-w-0 items-center gap-2 lg:gap-3">
          <a
            href={`tel:${site.phone}`}
            className="group flex shrink-0 items-center gap-1 transition-colors hover:text-sky-300"
          >
            <Phone
              size={11}
              className="text-white transition-transform group-hover:rotate-12"
            />
            <span className="font-semibold text-white">{site.phone}</span>
          </a>

          <span className={divider} />

          <a
            href={`mailto:${site.email}`}
            className="hidden min-w-0 items-center gap-1 transition-colors hover:text-sky-300 sm:flex"
          >
            <Mail size={11} className="shrink-0 text-sky-400" />
            <span className="max-w-[190px] truncate text-white">
              {site.email}
            </span>
          </a>

          <span className={divider} />

          <div className="hidden min-w-0 items-center gap-1 xl:flex">
            <MapPin size={11} className="shrink-0 text-sky-400" />
            <span className="max-w-[210px] truncate text-white">
              {site.address}
            </span>
          </div>
        </div>

        {/* Social media + Contact */}
        <div className="flex shrink-0 items-center gap-2 sm:gap-2.5">
          <div className="hidden items-center gap-1 sm:flex">
            {socialLinks.map(({ name, href, icon: Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                title={name}
                className="flex h-5 w-5 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white  transition-all duration-200 hover:border-sky-400/50 hover:bg-sky-500 hover:text-white"
              >
                <Icon size={10} />
              </a>
            ))}
          </div>

          <span className={divider} />

          <a
            href={`tel:${site.phone}`}
            className="group inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.06] px-2.5 py-1 font-bold text-white transition-all duration-200 hover:border-sky-400 hover:bg-sky-500 hover:text-white"
          >
            Contact Us
            <ArrowUpRight
              size={11}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

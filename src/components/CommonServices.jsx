
import {
  Pill,
  FlaskConical,
  Stethoscope,
  Eye,
  ClipboardCheck,
  Glasses,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const services = [
  {
    title: "Pharmacy",
    description:
      "Our pharmacy offers a comprehensive range of medications and eye care products to support your vision health.",
    icon: Pill,
    link: "https://yellowgreen-heron-384785.hostingersite.com/2024/07/09/comprehensive-pharmacy-services-at-vinod-sharma-eyes-care-hospital/",
  },
  {
    title: "Chemistry Lab Test",
    description:
      "Our advanced chemistry lab tests provide accurate diagnostics for various eye conditions, ensuring precise and effective treatment.",
    icon: FlaskConical,
    link: "https://yellowgreen-heron-384785.hostingersite.com/2024/07/09/comprehensive-chemistry-lab-test-services-at-vinod-sharma-eyes-care-hospital/",
  },
  {
    title: "Surgical Services",
    description:
      "We offer expert surgical services, including cataract, LASIK, and retinal surgeries, using the latest technology for optimal results.",
    icon: Stethoscope,
    link: "https://yellowgreen-heron-384785.hostingersite.com/2024/07/09/advanced-surgical-services-at-vinod-sharma-eyes-care-hospital/",
  },
  {
    title: "Treatments",
    description:
      "Our comprehensive treatment options address a wide range of eye conditions, ensuring personalized care and effective solutions for your vision health.",
    icon: Eye,
    link: "https://yellowgreen-heron-384785.hostingersite.com/2024/07/09/comprehensive-eye-treatments-at-vinod-sharma-eyes-care-hospital/",
  },
  {
    title: "Routine Eye Checkup",
    description:
      "We provide thorough routine eye checkups to detect and manage vision issues early, ensuring optimal eye health for all ages.",
    icon: ClipboardCheck,
    link: "https://yellowgreen-heron-384785.hostingersite.com/2024/07/09/comprehensive-routine-eye-checkups-at-vinod-sharma-eyes-care-hospital/",
  },
  {
    title: "Optical Services",
    description:
      "Explore our extensive range of stylish eyeglasses, contact lenses, and sunglasses, customized to fit your vision needs and preferences.",
    icon: Glasses,
    link: "https://yellowgreen-heron-384785.hostingersite.com/2024/07/09/optical-services-at-vinod-sharma-eyes-care-hospital/",
  },
];

export default function CommonServices() {
  return (
    <section
      id="common-services"
      className="relative overflow-hidden bg-[#f0f4ff] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#2864f5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#dce8ff]/80 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#dce8ff] bg-white px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#2864f5] shadow-sm sm:text-xs">
            <Sparkles size={15} />
            Our Medical Services
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#13284d] sm:text-4xl lg:text-5xl">
            Expert Care for Every
            <span className="block mt-2 text-[#2864f5]">
              Stage of Your Vision
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
            Discover comprehensive eye-care services designed around your
            needs, from routine vision checkups to diagnostic testing,
            treatment and optical care.
          </p>

          {/* Decorative Divider */}
          <div className="mx-auto mt-7 flex items-center justify-center gap-2">
            <span className="h-1 w-8 rounded-full bg-[#dce8ff]" />
            <span className="h-1.5 w-12 rounded-full bg-[#2864f5]" />
            <span className="h-1 w-8 rounded-full bg-[#dce8ff]" />
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-[#dce8ff] bg-white p-6 shadow-[0_8px_30px_rgba(40,100,245,0.04)] transition-all duration-300 hover:-translate-y-2 hover:border-[#2864f5]/40 hover:shadow-[0_20px_45px_rgba(40,100,245,0.12)] sm:p-7"
              >
                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#2864f5] transition-transform duration-300 group-hover:scale-x-100" />

                {/* Card Header */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#dce8ff] bg-[#f0f4ff] text-[#2864f5] transition-all duration-300 group-hover:border-[#2864f5] group-hover:bg-[#2864f5] group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <span className="rounded-full bg-[#f0f4ff] px-3 py-1.5 text-xs font-bold tracking-wider text-[#2864f5] transition-colors duration-300 group-hover:bg-[#2864f5] group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Card Content */}
                <h3 className="mt-6 text-xl font-bold tracking-tight text-[#13284d] transition-colors duration-300 group-hover:text-[#2864f5] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

             
              </article>
            );
          })}
        </div>

        {/* Bottom Information Panel */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-[#dce8ff] bg-white p-6 shadow-sm sm:mt-14 sm:flex-row sm:p-8">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f0f4ff] text-[#2864f5]">
              <HeartPulseIcon />
            </div>

            <div>
              <h3 className="text-base font-bold text-[#13284d] sm:text-lg">
                Need help choosing a service?
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                Book an appointment to discuss your eye-care needs.
              </p>
            </div>
          </div>

          <a
            href="/appointment"
            className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-full bg-[#2864f5] px-6 py-3 text-sm font-bold text-white shadow-md shadow-[#2864f5]/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1d4ed8] sm:w-auto"
          >
            Book Appointment
            <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}

function HeartPulseIcon() {
  return <Eye size={23} strokeWidth={1.8} />;
}

import {
  Pill,
  FlaskConical,
  Stethoscope,
  Eye,
  ClipboardCheck,
  Glasses,
  ArrowUpRight,
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
    <section className="relative overflow-hidden bg-[#f3faf9] py-16 sm:py-20 lg:py-24">
      {/* Background decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-900/10 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700 shadow-sm">
            <Eye size={15} className="text-emerald-500" />
            Our Medical Services
          </span>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Complete Care for Your{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
              Vision
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
            From routine eye examinations to advanced surgical services,
            explore our eye-care facilities designed around your vision needs.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-teal-900/[0.07] bg-white p-6 shadow-[0_5px_24px_rgba(15,118,110,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-teal-700/20 hover:shadow-[0_16px_35px_rgba(15,118,110,0.10)] sm:p-7"
              >
                {/* Card top accent */}
                <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />

                {/* Icon */}
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-emerald-100 text-teal-700 transition-all duration-300 group-hover:from-cyan-400 group-hover:to-emerald-400 group-hover:text-slate-900">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="text-xs font-semibold tracking-wider text-slate-300">
                    0{index + 1}
                  </span>
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-teal-700">
                  {service.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>

              
              </article>
            );
          })}
        </div>

      
      </div>
    </section>
  );
}
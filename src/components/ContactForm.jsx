
import { ExternalLink, MapPin, Phone, Mail, Send } from "lucide-react";
import { site } from "../data/siteData";

const mapQuery = "Bus Stand Road, Fatehabad, Haryana";

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon.");
    e.target.reset();
  };

  const field =
    "w-full rounded-md border border-[#dce8ff] bg-white px-3 py-2 text-xs text-[#13284d] outline-none transition placeholder:text-slate-400 focus:border-[#2864f5] focus:ring-2 focus:ring-[#2864f5]/10";

  const label =
    "mb-1.5 block text-[11px] font-semibold text-[#13284d]";

  const details = [
    { icon: MapPin, title: "Address", value: site.address },
    {
      icon: Phone,
      title: "Phone",
      value: site.phone,
      href: `tel:${site.phone}`,
    },
    {
      icon: Mail,
      title: "Email",
      value: site.email,
      href: `mailto:${site.email}`,
    },
  ];

  return (
    <section className="bg-white py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_1.05fr] lg:gap-12">

          {/* LEFT: CONTACT INFORMATION */}
          <div className="flex flex-col">
            <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold text-[#2864f5]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2864f5]" />
              Contact Us
            </div>

            <h2 className="max-w-md text-2xl font-semibold leading-tight tracking-tight text-[#13284d] sm:text-3xl">
              No Hassle. Just
              <br />
              Book Your Care and
              <br />
              Get Started
            </h2>

            <p className="mt-3 max-w-md text-xs leading-5 text-slate-600">
              Our dedicated team is here to support you with expert
              eye care guidance. Book your appointment and take the
              first step toward better vision.
            </p>

            {/* CONTACT DETAILS */}
            <div className="mt-5 space-y-3">
              {details.map(({ icon: Icon, title, value, href }) => {
                const Tag = href ? "a" : "div";

                return (
                  <Tag
                    key={title}
                    {...(href ? { href } : {})}
                    className="group flex items-center gap-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#2864f5] text-white transition-colors group-hover:bg-[#1d4ed8]">
                      <Icon size={14} />
                    </span>

                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold text-slate-500">
                        {title}
                      </span>
                      <span className="block break-words text-xs font-medium text-[#13284d] transition-colors group-hover:text-[#2864f5]">
                        {value}
                      </span>
                    </span>
                  </Tag>
                );
              })}
            </div>

            {/* MAP */}
            <div className="mt-6 overflow-hidden rounded-lg border border-[#dce8ff]">
              <div className="flex items-center justify-between gap-2 border-b border-[#dce8ff] bg-[#f0f4ff] px-3 py-2">
                <div className="flex items-center gap-2">
                  <MapPin size={13} className="text-[#2864f5]" />
                  <span className="text-xs font-semibold text-[#13284d]">
                    Find Our Clinic
                  </span>
                </div>

                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                    mapQuery
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open clinic location in Google Maps"
                  className="text-[#2864f5] transition-colors hover:text-[#1d4ed8]"
                >
                  <ExternalLink size={14} />
                </a>
              </div>

              <iframe
                title="Clinic location on Google Maps"
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  mapQuery
                )}&output=embed`}
                className="h-40 w-full border-0 sm:h-44"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* RIGHT: APPOINTMENT FORM */}
          <form
            onSubmit={handleSubmit}
            className="rounded-xl border border-[#dce8ff] bg-[#f0f4ff] p-5 sm:p-7"
          >
            <h3 className="mb-5 text-center text-lg font-semibold tracking-tight text-[#13284d]">
              Book an Appointment
            </h3>

            <div className="space-y-3.5">
              <div className="grid gap-3 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className={label}>
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    required
                    name="name"
                    placeholder="Your name"
                    autoComplete="name"
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className={label}>
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    required
                    type="email"
                    name="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="contact-phone" className={label}>
                    Phone Number
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    placeholder="000-000-0000"
                    autoComplete="tel"
                    className={field}
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" className={label}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    placeholder="Appointment enquiry"
                    className={field}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className={label}>
                  Your Message (Optional)
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  placeholder="Briefly describe how we can help..."
                  className={`${field} resize-y`}
                />
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#2864f5] py-1 pl-4 pr-1 text-[11px] font-semibold text-white transition-colors hover:bg-[#1d4ed8]"
                >
                  Book Appointment
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#2864f5] transition-transform group-hover:translate-x-0.5">
                    <Send size={13} />
                  </span>
                </button>
              </div>
            </div>
          </form>

        </div>
      </div>
    </section>
  );
}

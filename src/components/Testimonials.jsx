import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  ChevronLeft,
  ChevronRight,
  Quote,
  Star,
  Heart,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "../data/siteData";

export default function Testimonials() {
  const swiperRef = useRef(null);

  const arrowClass =
    "flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500";

  return (
    <section className="relative overflow-hidden bg-[#f3faf9] py-16 sm:py-20">
      {/* Soft background decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-10 h-64 w-64 rounded-full bg-cyan-200/20 blur-3xl" />
        <div className="absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading and navigation */}
        <div className="mb-7 flex items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-teal-700">
              <Heart size={14} className="text-emerald-500" />
              Patient Experiences
            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
              Hear From Our{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                Happy Patients
              </span>
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
              Discover the experiences of patients who trust us
              with their eye health and vision.
            </p>
          </div>

          {/* Slider controls */}
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={() => swiperRef.current?.slidePrev()}
              className={`${arrowClass} border border-slate-200 bg-white text-slate-600 hover:border-teal-200 hover:bg-teal-50 hover:text-teal-700`}
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={() => swiperRef.current?.slideNext()}
              className={`${arrowClass} bg-gradient-to-r from-cyan-400 to-emerald-400 text-slate-900 shadow-sm hover:shadow-md hover:shadow-teal-900/10`}
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Testimonial cards */}
        {testimonials?.length > 0 && (
          <Swiper
            modules={[Autoplay, Pagination]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={16}
            loop={testimonials.length > 3}
            grabCursor
            autoplay={
              testimonials.length > 1
                ? {
                    delay: 4500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }
                : false
            }
            pagination={{ clickable: true }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 18,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="testimonial-mint !pb-10 !pt-3"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide
                key={`${t.name || "patient"}-${index}`}
                className="!h-auto"
              >
                <article className="group relative flex h-full min-h-[235px] flex-col overflow-hidden rounded-2xl border border-teal-900/[0.06] bg-white p-5 shadow-[0_4px_20px_rgba(15,118,110,0.04)] transition-all duration-300 hover:-translate-y-1 hover:border-teal-700/15 hover:shadow-[0_12px_28px_rgba(15,118,110,0.09)] sm:p-6">
                  {/* Quote and rating decoration */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-100 to-emerald-100 text-teal-700">
                      <Quote size={19} />
                    </span>

                    <div className="flex items-center gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={12}
                          fill="currentColor"
                          strokeWidth={0}
                          className="text-amber-400"
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review */}
                  <p className="flex-1 text-[13px] leading-[1.8] text-slate-600 sm:text-sm">
                    {t.text}
                  </p>

                  {/* Patient information */}
                  <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-100 to-emerald-100 text-sm font-bold text-teal-800 ring-1 ring-teal-900/5">
                      {t.name?.trim()?.charAt(0)?.toUpperCase() || "P"}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-semibold text-slate-900">
                        {t.name || "Patient"}
                      </h3>

                      <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.12em] text-slate-400">
                        Patient Feedback
                      </p>
                    </div>
                  </div>

                  {/* Bottom hover accent */}
                  <div className="absolute bottom-0 left-5 right-5 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-transform duration-300 group-hover:scale-x-100" />
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        )}

        {/* Bottom note */}
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-teal-900/10 pt-5">
          <p className="text-xs leading-5 text-slate-500">
            Every patient deserves personal attention and thoughtful care.
          </p>

          <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700">
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400" />
            Care you can count on
          </div>
        </div>
      </div>

      {/* Custom pagination */}
      <style>{`
        .testimonial-mint .swiper-pagination {
          bottom: 0;
        }

        .testimonial-mint .swiper-pagination-bullet {
          width: 6px;
          height: 6px;
          margin: 0 4px !important;
          background: #0f766e;
          opacity: 0.25;
          border-radius: 999px;
          transition: all 300ms ease;
        }

        .testimonial-mint .swiper-pagination-bullet-active {
          width: 20px;
          background: linear-gradient(to right, #22d3ee, #34d399);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
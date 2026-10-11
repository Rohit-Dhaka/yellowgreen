
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";

import { testimonials } from "../data/siteData";

export default function Testimonials() {
  const swiperRef = useRef(null);

  const arrowClass =
    "flex h-8 w-8 items-center justify-center rounded-full border border-[#dce8ff] bg-white text-[#13284d] transition-colors hover:border-[#2864f5] hover:bg-[#2864f5] hover:text-white";

  const averageRating = "4.8";

  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.8fr_2.2fr] lg:gap-10">

          {/* LEFT: RATING CARD */}
          <div className="relative flex min-h-[230px] flex-col justify-center overflow-hidden rounded-xl border border-[#dce8ff] bg-gradient-to-br from-white via-[#f0f4ff] to-[#dce8ff] p-6 sm:p-8">
            <p className="text-xs font-medium text-slate-600">
              Customer Reviews
            </p>

            <h3 className="mt-2 text-5xl font-semibold tracking-tight text-[#13284d]">
              {averageRating}
            </h3>

            <div
              className="mt-3 flex items-center gap-1"
              aria-label="Rated 4.8 out of 5"
            >
              {Array.from({ length: 5 }).map((_, index) => (
                <Star
                  key={index}
                  size={17}
                  fill="currentColor"
                  strokeWidth={0}
                  className="text-[#2864f5]"
                />
              ))}
            </div>

            <p className="mt-2 text-xs font-medium text-[#13284d]">
              Trusted Patient Experiences
            </p>

            <div className="mt-5 flex items-center">
              {testimonials.slice(0, 4).map((patient, index) => (
                <div
                  key={`${patient.name || "patient"}-${index}`}
                  title={patient.name || "Patient"}
                  className={`flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#dce8ff] text-xs font-bold text-[#2864f5] ${
                    index ? "-ml-2" : ""
                  }`}
                >
                  {patient.name?.trim()?.charAt(0)?.toUpperCase() || "P"}
                </div>
              ))}

              <span className="ml-2 rounded-full bg-[#2864f5] px-2 py-1 text-[10px] font-bold text-white">
                Patients
              </span>
            </div>
          </div>

          {/* RIGHT: HEADING AND REVIEWS */}
          <div className="min-w-0">
            <div className="mb-6 flex items-end justify-between gap-3">
              <div>
                <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold text-[#2864f5]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2864f5]" />
                  Patient Testimonials
                </div>

                <h2 className="max-w-md text-2xl font-semibold leading-tight tracking-tight text-[#13284d] sm:text-3xl">
                  What Our Patients
                  <br />
                  Say About Us
                </h2>
              </div>

              <div className="mb-1 flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  aria-label="Previous testimonial"
                  onClick={() => swiperRef.current?.slidePrev()}
                  className={arrowClass}
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  type="button"
                  aria-label="Next testimonial"
                  onClick={() => swiperRef.current?.slideNext()}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#2864f5] text-white transition-colors hover:bg-[#1d4ed8]"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            {testimonials?.length > 0 && (
              <Swiper
                modules={[Autoplay, Pagination]}
                onSwiper={(swiper) => {
                  swiperRef.current = swiper;
                }}
                slidesPerView={1}
                spaceBetween={14}
                loop={testimonials.length > 2}
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
                    spaceBetween: 14,
                  },
                }}
                className="testimonial-simple !pb-9"
              >
                {testimonials.map((t, index) => (
                  <SwiperSlide
                    key={`${t.name || "patient"}-${index}`}
                    className="!h-auto"
                  >
                    <article className="flex h-full min-h-[155px] flex-col rounded-lg border border-[#dce8ff] bg-[#f0f4ff] p-4 transition-colors duration-200 hover:border-[#2864f5]/50 sm:p-5">
                      <div className="mb-3 flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            fill="currentColor"
                            strokeWidth={0}
                            className="text-[#2864f5]"
                          />
                        ))}
                      </div>

                      <p className="flex-1 text-[11px] leading-[1.7] text-slate-600 sm:text-xs">
                        {t.text}
                      </p>

                      <div className="mt-4 flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold text-[#2864f5] ring-1 ring-[#dce8ff]">
                          {t.name?.trim()?.charAt(0)?.toUpperCase() || "P"}
                        </div>

                        <div className="min-w-0">
                          <h3 className="truncate text-[11px] font-semibold text-[#13284d]">
                            {t.name || "Patient"}
                          </h3>

                          <p className="mt-0.5 text-[9px] text-slate-500">
                            Patient Review
                          </p>
                        </div>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .testimonial-simple .swiper-pagination {
          bottom: 0;
        }

        .testimonial-simple .swiper-pagination-bullet {
          width: 5px;
          height: 5px;
          margin: 0 3px !important;
          background: #dce8ff;
          opacity: 1;
          transition: all 250ms ease;
        }

        .testimonial-simple .swiper-pagination-bullet-active {
          width: 16px;
          border-radius: 999px;
          background: #2864f5;
          opacity: 1;
        }
      `}</style>
    </section>
  );
}

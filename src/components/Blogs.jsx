
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { blogs } from "../data/siteData";

// Image with fallback
function Cover({ src, alt, className = "" }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-[#f0f4ff] to-[#dce8ff] text-[#2864f5] ${className}`}
      >
        <Newspaper size={36} strokeWidth={1.4} />
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}

export default function Blogs() {
  const visibleBlogs = blogs?.slice(0, 3) || [];

  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-20 lg:py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#dce8ff]/60 blur-3xl" />

      <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 text-xs font-medium text-[#2864f5]">
              <span className="h-2 w-2 rounded-full bg-[#2864f5]" />
              Our Blog
            </div>

            <h2 className="text-3xl font-semibold leading-[1.15] tracking-tight text-[#13284d] sm:text-4xl lg:text-5xl">
              Latest Insights for Better
              <span className="block">
                Health and{" "}
                <span className="bg-gradient-to-r from-[#2864f5] to-[#4f83ff] bg-clip-text text-transparent">
                  Eye Wellness
                </span>
              </span>
            </h2>
          </div>

          <Link
            to="/blog"
            className="group inline-flex shrink-0 items-center gap-4 rounded-full bg-[#2864f5] py-1.5 pl-5 pr-1.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#1d4ed8] hover:shadow-lg hover:shadow-[#2864f5]/20"
          >
            View All Blog
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#13284d] transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight size={19} strokeWidth={1.8} />
            </span>
          </Link>
        </div>

        {/* Blog cards */}
        <div className="mt-12 grid gap-5 sm:mt-14 md:grid-cols-2 xl:grid-cols-3 xl:gap-7">
          {visibleBlogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`/blog/${blog.slug}`}
              className="group flex min-w-0 flex-col rounded-2xl border border-[#dce8ff] bg-[#f0f4ff] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-[#2864f5]/40 hover:shadow-xl hover:shadow-[#2864f5]/10 sm:p-3.5"
            >
              {/* Cover image */}
              <div className="relative h-44 overflow-hidden rounded-xl bg-[#dce8ff] sm:h-48 lg:h-40 xl:h-44">
                <Cover
                  src={blog.image}
                  alt={blog.title}
                  className="h-full w-full transition-transform duration-500 group-hover:scale-105"
                />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#13284d]/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>

              {/* Card content */}
              <div className="flex flex-1 flex-col px-0.5 pb-0.5 pt-4">
                <h3 className="min-h-[3.5rem] text-lg font-semibold leading-snug tracking-tight text-[#13284d] transition-colors duration-300 group-hover:text-[#2864f5] sm:text-xl">
                  {blog.title}
                </h3>

                <h3 className="line-clamp-3 text-sm font-medium tracking-tight text-slate-600 transition-colors duration-300 group-hover:text-[#2864f5]">
                  {blog.content}
                </h3>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <p className="min-w-0 truncate text-xs text-slate-500">
                    {blog.date}
                  </p>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#dce8ff] bg-white text-[#2864f5] transition-all duration-300 group-hover:border-[#2864f5] group-hover:bg-[#2864f5] group-hover:text-white">
                    <ArrowUpRight
                      size={20}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty state */}
        {visibleBlogs.length === 0 && (
          <div className="mt-12 rounded-2xl border border-[#dce8ff] bg-[#f0f4ff] px-6 py-12 text-center">
            <Newspaper
              size={32}
              className="mx-auto text-[#2864f5]"
            />
            <p className="mt-3 text-sm text-slate-600">
              New articles are coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

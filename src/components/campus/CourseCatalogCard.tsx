import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Star, Check } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useCart } from "@/lib/CartContext";
import type { CourseDetails } from "@/lib/courses";
import { CourseHoverThumbnail } from "./CourseHoverThumbnail";

export function CourseCatalogCard({ course }: { course: CourseDetails }) {
  const [hovered, setHovered] = useState(false);
  const { addToCart, isInCart } = useCart();

  return (
    <HoverCard openDelay={300} closeDelay={100}>
      <HoverCardTrigger asChild>
        <Link
          to="/course/$courseId"
          params={{ courseId: course.id }}
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <CourseHoverThumbnail
            image={course.image}
            alt={course.title}
            videoUrl={course.previewVideoUrl}
            badgeLogo={course.badgeLogo}
            hovered={hovered}
          />

          <div className="flex flex-1 flex-col p-5 pt-8">
            <h3 className="line-clamp-2 text-[17px] font-bold leading-tight text-[#1C1D1F]">
              {course.title}
            </h3>
            <p className="mt-1.5 line-clamp-1 text-[13px] text-[#6A6F73]">
              {course.author}
            </p>

            <div className="mt-2.5 flex flex-wrap items-center gap-2">
              {course.bestseller && (
                <span className="rounded-[3px] bg-[#CCF0EB] px-2 py-0.5 text-xs font-bold text-[#115C52]">
                  Bestseller
                </span>
              )}
              <div className="flex items-center gap-1 rounded-[3px] border border-[#D1D7DC] px-1.5 py-0.5">
                <Star className="h-3 w-3 fill-[#E59819] text-[#E59819]" />
                <span className="text-xs font-bold text-[#1C1D1F]">
                  {course.rating}
                </span>
              </div>
              <div className="rounded-[3px] border border-[#D1D7DC] px-1.5 py-0.5">
                <span className="text-xs text-[#6A6F73]">
                  {course.ratingCount} ratings
                </span>
              </div>
            </div>

            <div className="mt-auto flex items-center gap-2 pt-4">
              <span className="text-[17px] font-bold text-[#1C1D1F]">
                {course.price}
              </span>
              <span className="text-[15px] text-[#6A6F73] line-through">
                {course.originalPrice}
              </span>
            </div>
          </div>
        </Link>
      </HoverCardTrigger>

      <HoverCardContent
        side="right"
        align="start"
        sideOffset={14}
        className="group z-[100] w-[320px] animate-in rounded-2xl border border-black/5 bg-white/95 p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] fade-in zoom-in-95 duration-200 backdrop-blur-xl"
      >
        <div className="absolute top-[60px] z-10 h-[14px] w-[14px] rotate-45 bg-white opacity-0 transition-all duration-200 group-data-[state=open]:opacity-100 group-data-[side=right]:-left-[7.5px] group-data-[side=right]:border-b group-data-[side=right]:border-l group-data-[side=right]:border-black/5 group-data-[side=left]:-right-[7.5px] group-data-[side=left]:border-r group-data-[side=left]:border-t group-data-[side=left]:border-black/5 group-data-[side=top]:hidden group-data-[side=bottom]:hidden" />

        <h3 className="text-[17px] font-bold leading-snug text-[#1C1D1F]">
          {course.title}
        </h3>

        <div className="mt-2.5 flex items-center gap-2.5">
          {course.bestseller && (
            <span className="rounded-[3px] bg-[#CCF0EB] px-1.5 py-0.5 text-[11px] font-bold text-[#115C52]">
              Bestseller
            </span>
          )}
          <span className="text-[12px] text-[#6A6F73]">
            Updated{" "}
            <span className="font-bold text-[#115C52]">{course.updatedDate}</span>
          </span>
        </div>

        <div className="mt-1.5 text-[12px] text-[#6A6F73]">
          {course.hours} total hours · {course.levels} ·{" "}
          {course.hasSubtitles && "Subtitles"}
        </div>

        <p className="mt-3 text-[13px] leading-relaxed text-[#1C1D1F]">
          {course.description}
        </p>

        <ul className="mt-3 space-y-2.5">
          {course.bulletPoints.slice(0, 3).map((point) => (
            <li key={point} className="flex items-start gap-2.5">
              <Check
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#1C1D1F]"
                strokeWidth={2}
              />
              <span className="text-[13px] leading-snug text-[#5A607A]">
                {point}
              </span>
            </li>
          ))}
        </ul>

        {isInCart(course.id) ? (
          <Link
            to="/cart"
            className="mt-6 flex w-full items-center justify-center rounded-lg bg-[#F7F8FC] py-2.5 text-[15px] font-bold text-[#5B4CF5] transition-colors hover:bg-[#EEF0F8]"
          >
            Go to cart
          </Link>
        ) : (
          <button
            type="button"
            onClick={(event) => {
              event.preventDefault();
              addToCart(course.id);
            }}
            className="mt-6 w-full rounded-lg bg-[#5B4CF5] py-2.5 text-[15px] font-bold text-white transition-all hover:bg-[#4A3BE8] hover:shadow-[0_8px_20px_-8px_rgba(91,76,245,0.6)]"
          >
            Add to cart
          </button>
        )}
      </HoverCardContent>
    </HoverCard>
  );
}

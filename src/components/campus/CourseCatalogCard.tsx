import { useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { useCart } from "@/lib/CartContext";
import { useCurrency } from "@/lib/CurrencyContext";
import type { CourseDetails } from "@/lib/courses";
import { CourseHoverThumbnail } from "./CourseHoverThumbnail";

function CartAction({
  inCart,
  onAdd,
  className,
}: {
  inCart: boolean;
  onAdd: () => void;
  className?: string;
}) {
  if (inCart) {
    return (
      <Link
        to="/cart"
        onClick={(event) => event.stopPropagation()}
        className={`flex w-full items-center justify-center rounded-lg bg-[#F7F8FC] py-2.5 text-[15px] font-bold text-[#5B4CF5] transition-colors hover:bg-[#EEF0F8] ${className ?? ""}`}
      >
        Go to cart
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={(event) => {
        event.preventDefault();
        event.stopPropagation();
        onAdd();
      }}
      className={`w-full rounded-lg bg-[#5B4CF5] py-2.5 text-[15px] font-bold text-white transition-all hover:bg-[#4A3BE8] hover:shadow-[0_8px_20px_-8px_rgba(91,76,245,0.6)] ${className ?? ""}`}
    >
      Add to cart
    </button>
  );
}

export function CourseCatalogCard({ course }: { course: CourseDetails }) {
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const { formatPrice } = useCurrency();
  const inCart = isInCart(course.id);

  return (
    <HoverCard openDelay={300} closeDelay={100}>
      <HoverCardTrigger asChild>
        <div
          className="group flex h-full flex-col overflow-hidden rounded-xl border border-black/5 bg-white outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Link
            to="/course/$courseId"
            params={{ courseId: course.id }}
            className="flex flex-1 flex-col outline-none"
          >
            <CourseHoverThumbnail
              image={course.image}
              alt={course.title}
              videoUrl={course.previewVideoUrl}
              badgeLogo={course.badgeLogo}
              hovered={hovered}
            />

            <div className="flex flex-1 flex-col p-5 pt-7 pb-0">
              <span className="mb-2 inline-flex min-h-[22px] w-fit items-center rounded-full bg-[#EDE9FF] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#5B4CF5]">
                {course.pathwayLabel}
              </span>
              <h3 className="min-h-[2.6em] line-clamp-2 text-[17px] font-bold leading-tight text-[#1C1D1F]">
                {course.title}
              </h3>
              <p className="mt-1.5 min-h-[1.25em] text-[12px] font-bold uppercase tracking-wider text-[#5B4CF5]">
                {course.certLevel}
              </p>
              <p className="mt-1.5 min-h-[2.5em] line-clamp-2 text-[13px] leading-snug text-[#6A6F73]">
                {course.artifact}
              </p>
              <p className="mt-2 min-h-[1.25em] text-[12px] font-medium text-[#6A6F73]">
                {course.modulesPerOutcome} modules · {course.hours} hours
              </p>
              {course.prerequisiteCourseId ? (
                <button
                  type="button"
                  onClick={(event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    navigate({
                      to: "/course/$courseId",
                      params: { courseId: course.prerequisiteCourseId! },
                    });
                  }}
                  className="mt-1 line-clamp-2 min-h-[2.5em] text-left text-[12px] leading-snug text-[#5B4CF5] hover:underline"
                >
                  {course.prerequisiteLabel}
                </button>
              ) : (
                <p className="mt-1 line-clamp-2 min-h-[2.5em] text-[12px] leading-snug text-[#6A6F73]">
                  {course.prerequisiteLabel}
                </p>
              )}

              <div className="mt-auto flex items-baseline gap-2 pt-4">
                <span className="text-[17px] font-bold text-[#1C1D1F]">
                  {formatPrice(course.price)}
                </span>
                <span className="text-[13px] text-[#6A6F73] line-through">
                  {formatPrice(course.originalPrice)}
                </span>
              </div>
            </div>
          </Link>

          <div className="px-5 pb-5 pt-3">
            <CartAction
              inCart={inCart}
              onAdd={() => addToCart(course.id)}
            />
          </div>
        </div>
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
          {course.certLevel} · {course.modulesPerOutcome} modules · {course.hours} hours
        </div>
        <p className="mt-1 text-[12px] text-[#6A6F73]">{course.prerequisiteLabel}</p>

        <p className="mt-3 text-[13px] leading-relaxed text-[#1C1D1F]">
          {course.description}
        </p>

        <p className="mt-3 text-[11px] font-bold uppercase tracking-wider text-[#6A6F73]">
          Modules inside
        </p>
        <ul className="mt-2 space-y-2.5">
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

        <CartAction
          inCart={inCart}
          onAdd={() => addToCart(course.id)}
          className="mt-6"
        />
      </HoverCardContent>
    </HoverCard>
  );
}

import { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { COURSES_DATA, coursesForBand } from "@/lib/courses";
import { CourseCatalogCard } from "./CourseCatalogCard";
import {
  PATHWAY_LEVELS,
  getPathwayThumbnail,
  type PathwayLevel,
  type PathwayLevelId,
} from "@/lib/pathways";

const TABS = [
  "All Courses",
  "Pre-elementary",
  "Elementary",
  "Middle School",
  "High School",
  "College & Universities",
  "Professional Courses",
] as const;

const LEVEL_TO_TAB: Record<PathwayLevelId, string> = {
  "pre-elementary": "Pre-elementary",
  elementary: "Elementary",
  k5: "Elementary",
  middle: "Middle School",
  high: "High School",
  college: "College & Universities",
  professional: "Professional Courses",
};

export function PathwayBannersSection({
  previewLimit,
  className,
}: {
  previewLimit?: number;
  className?: string;
}) {
  const [activeTab, setActiveTab] = useState<string>("All Courses");
  const [activeLevel, setActiveLevel] = useState<PathwayLevelId | "all">("all");

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);
  const hasDragged = useRef(false);

  const previewStages = PATHWAY_LEVELS.filter((band) => band.id !== "k5");
  // 3 sets for smooth seamless infinite loop sliding
  const duplicatedStages = [
    ...previewStages,
    ...previewStages,
    ...previewStages,
  ];

  // Set initial scroll to middle set once mounted
  useEffect(() => {
    if (!previewLimit) return;
    const el = scrollRef.current;
    if (!el) return;
    const timer = setTimeout(() => {
      if (el && el.scrollWidth > 0) {
        const oneSetWidth = el.scrollWidth / 3;
        el.scrollLeft = oneSetWidth;
      }
    }, 50);
    return () => clearTimeout(timer);
  }, [previewLimit]);

  // Continuous smooth gliding movement
  useEffect(() => {
    if (!previewLimit) return;
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.75; // px per frame (smooth and legible)

    const step = () => {
      if (!isPaused && !isHovered && !isDragging && el) {
        el.scrollLeft += speed;
        const oneSetWidth = el.scrollWidth / 3;
        if (el.scrollLeft >= oneSetWidth * 2) {
          el.scrollLeft -= oneSetWidth;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [previewLimit, isPaused, isHovered, isDragging]);

  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || el.scrollWidth === 0) return;
    const oneSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft < oneSetWidth * 0.5) {
      el.scrollLeft += oneSetWidth;
    } else if (el.scrollLeft >= oneSetWidth * 2) {
      el.scrollLeft -= oneSetWidth;
    }
    const cardWidth = el.scrollWidth / 18;
    const relativeOffset = el.scrollLeft % oneSetWidth;
    const idx =
      Math.floor((relativeOffset + cardWidth * 0.3) / cardWidth) %
      previewStages.length;
    setActiveStageIndex(idx >= 0 ? idx : 0);
  }, [previewStages.length]);

  const slideNext = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft >= oneSetWidth * 2) {
      el.scrollLeft -= oneSetWidth;
    }
    el.scrollBy({ left: 384, behavior: "smooth" });
  }, []);

  const slidePrev = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;
    if (el.scrollLeft <= oneSetWidth) {
      el.scrollLeft += oneSetWidth;
    }
    el.scrollBy({ left: -384, behavior: "smooth" });
  }, []);

  const scrollToStage = useCallback((stageIdx: number) => {
    const el = scrollRef.current;
    if (!el) return;
    const oneSetWidth = el.scrollWidth / 3;
    const cardWidth = el.scrollWidth / 18;
    const targetPos = oneSetWidth + stageIdx * cardWidth;
    el.scrollTo({ left: targetPos, behavior: "smooth" });
    setActiveStageIndex(stageIdx);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!el) return;
    setIsDragging(true);
    hasDragged.current = false;
    dragStartX.current = e.pageX - el.offsetLeft;
    dragStartScrollLeft.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = scrollRef.current;
    if (!isDragging || !el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const distance = x - dragStartX.current;
    if (Math.abs(distance) > 5) {
      hasDragged.current = true;
    }
    el.scrollLeft = dragStartScrollLeft.current - distance * 1.3;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === "All Courses") {
      setActiveLevel("all");
      return;
    }
    const match = (Object.entries(LEVEL_TO_TAB) as [PathwayLevelId, string][]).find(
      ([, label]) => label === tab,
    );
    if (match) setActiveLevel(match[0]);
  };

  const filteredCourses =
    activeLevel === "all" ? COURSES_DATA : coursesForBand(activeLevel);

  const visibleCourses = previewLimit
    ? filteredCourses.slice(0, previewLimit)
    : filteredCourses;

  return (
    <section
      className={cn(
        previewLimit
          ? "border-t border-[#E8E6F5] bg-white py-14 sm:py-18 font-sans overflow-hidden"
          : "bg-white font-sans pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28",
        className,
      )}
    >
      <div className={cn("mx-auto px-4 sm:px-6", previewLimit ? "max-w-7xl" : "max-w-7xl")}>
        {previewLimit ? (
          <div>
            {/* Header row with Title, Catalog Link, and Slider Controls */}
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8 pb-6 border-b border-[#ECEBF6]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#5B4CF5]/10 px-3 py-1 mb-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#5B4CF5] animate-pulse" />
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
                    Learning Pathways
                  </p>
                </div>
                <h2 className="mt-1 font-display text-3xl font-extrabold tracking-tight text-[#0F1533] sm:text-4xl">
                  Structured pathways for every stage of learning
                </h2>
                <p className="mt-2.5 text-sm sm:text-base text-[#5A607A] max-w-2xl leading-relaxed">
                  From foundational coding and computational thinking to university research and workforce AI adoption.
                </p>
              </div>

              <div className="shrink-0">
                <Link
                  to="/learning"
                  className="group inline-flex items-center gap-2 rounded-full border border-[#D8D6EE] bg-[#FAF9FE] px-5 py-2.5 text-sm font-bold text-[#0F1533] transition-all duration-200 hover:border-[#5B4CF5] hover:bg-white hover:text-[#5B4CF5] shadow-xs"
                >
                  <span>View all certifications</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Single Row Sliding Cards with edge gradients and hover pause */}
            <div
              className="group/slider relative -mx-4 px-4 sm:-mx-6 sm:px-6"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => {
                setIsHovered(false);
                setIsDragging(false);
              }}
            >
              {/* Left and Right subtle gradient edge fades */}
              <div className="pointer-events-none absolute left-0 inset-y-0 z-10 w-8 sm:w-16 bg-gradient-to-r from-white via-white/80 to-transparent" />
              <div className="pointer-events-none absolute right-0 inset-y-0 z-10 w-8 sm:w-16 bg-gradient-to-l from-white via-white/80 to-transparent" />

              {/* Floating Prev Button - appears smoothly on hover */}
              <button
                type="button"
                onClick={slidePrev}
                aria-label="Previous pathway"
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-[#E5E3F2] text-[#0F1533] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 hover:scale-110 hover:border-[#5B4CF5] hover:text-[#5B4CF5] hover:bg-white opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              {/* Floating Next Button - appears smoothly on hover */}
              <button
                type="button"
                onClick={slideNext}
                aria-label="Next pathway"
                className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 backdrop-blur-md border border-[#E5E3F2] text-[#0F1533] shadow-[0_4px_16px_rgba(0,0,0,0.12)] transition-all duration-200 hover:scale-110 hover:border-[#5B4CF5] hover:text-[#5B4CF5] hover:bg-white opacity-0 group-hover/slider:opacity-100 focus:opacity-100"
              >
                <ChevronRight className="h-5 w-5" />
              </button>

              {/* One Row Sliding Track */}
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUpOrLeave}
                className="flex gap-6 overflow-x-auto scrollbar-hide py-4 cursor-grab active:cursor-grabbing select-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {duplicatedStages.map((band, i) => {
                  const cover =
                    getPathwayThumbnail(band.id) ||
                    band.thumbnail ||
                    coursesForBand(band.id)[0]?.image;
                  const ageLabel = band.audience.includes("Ages")
                    ? band.audience.match(/Ages [^)]+/)?.[0] || band.subLabel
                    : band.id === "college"
                      ? "Higher Ed"
                      : band.id === "professional"
                        ? "Industry"
                        : band.subLabel;

                  return (
                    <Link
                      key={`${band.id}-${i}`}
                      to="/learning"
                      search={{ stage: band.id }}
                      hash="courses-section"
                      onClick={(e) => {
                        if (hasDragged.current) {
                          e.preventDefault();
                        }
                      }}
                      className="group flex flex-col overflow-hidden rounded-2xl border border-[#E5E3F2] bg-white transition-all duration-300 hover:-translate-y-1.5 hover:border-[#5B4CF5]/60 hover:shadow-[0_20px_40px_-15px_rgba(91,76,245,0.18)] w-[320px] sm:w-[360px] md:w-[380px] shrink-0"
                    >
                      {/* Visual */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#EEEAF8]">
                        <img
                          src={cover}
                          alt={band.label}
                          draggable={false}
                          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white">
                          <span className="rounded-full bg-black/60 px-2.5 py-0.5 text-[11px] font-bold backdrop-blur-md">
                            {ageLabel}
                          </span>
                          <span className="rounded-full bg-white/20 px-2.5 py-0.5 text-[11px] font-semibold backdrop-blur-md">
                            {band.outcomeCount} Certifications
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-1 flex-col justify-between p-5">
                        <div>
                          <div className="flex items-center gap-2">
                            <span
                              className="h-2 w-2 rounded-full"
                              style={{ backgroundColor: band.theme.accent }}
                            />
                            <span className="text-[11px] font-bold uppercase tracking-wider text-[#6B7280]">
                              {band.subLabel}
                            </span>
                          </div>

                          <h3 className="mt-2 font-display text-lg font-bold text-[#0F1533] transition-colors group-hover:text-[#5B4CF5]">
                            {band.shortLabel}
                          </h3>

                          <p className="mt-2 text-[13px] leading-relaxed text-[#5A607A] line-clamp-2">
                            {band.description}
                          </p>

                          <div className="mt-3.5 flex flex-wrap gap-1.5">
                            {band.outcomes.slice(0, 3).map((item) => {
                              const shortItem = item.split("&")[0].trim();
                              return (
                                <span
                                  key={item}
                                  className="rounded-md bg-[#F4F3FA] px-2 py-0.5 text-[11px] font-medium text-[#4B5563]"
                                >
                                  {shortItem}
                                </span>
                              );
                            })}
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between border-t border-[#F0EEF8] pt-3 text-xs font-bold text-[#5B4CF5]">
                          <span>Explore {band.shortLabel} pathway</span>
                          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Minimalist Progress Indicators */}
            <div className="mt-8 flex items-center justify-center gap-2">
              {previewStages.map((band, idx) => (
                <button
                  key={band.id}
                  type="button"
                  onClick={() => scrollToStage(idx)}
                  aria-label={`Jump to ${band.shortLabel}`}
                  title={band.shortLabel}
                  className={cn(
                    "h-1.5 rounded-full transition-all duration-300 ease-out cursor-pointer",
                    activeStageIndex === idx
                      ? "w-8 bg-[#5B4CF5] shadow-[0_0_10px_rgba(91,76,245,0.35)]"
                      : "w-2 bg-[#D8D6EE] hover:w-3 hover:bg-[#A399EB]"
                  )}
                />
              ))}
            </div>
          </div>
        ) : (
          <>
            <Reveal>
              <div className="max-w-3xl">
                <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#0F1533] sm:text-4xl">
                  Every learner has a path — find yours
                </h2>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-6 flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                {TABS.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => handleSelectTab(tab)}
                    className={cn(
                      "whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition",
                      activeTab === tab
                        ? "bg-[#0F1533] text-white"
                        : "bg-[#F4F2FF] text-[#3C415C] hover:bg-[#E7E3FF]",
                    )}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-6 min-h-[400px]">
              {activeLevel === "all" && !previewLimit ? (
                <div className="space-y-12">
                  {PATHWAY_LEVELS.map((band) => {
                    const bandCourses = coursesForBand(band.id);
                    return (
                      <div key={band.id}>
                        <div className="mb-4">
                          <h3 className="font-display text-xl font-bold text-[#0F1533]">
                            {band.shortLabel}
                          </h3>
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                          {bandCourses.map((course, i) => (
                            <Reveal key={course.id} className="h-full" delay={0.03 + Math.min(i, 8) * 0.02}>
                              <CourseCatalogCard course={course} priority={i === 0} />
                            </Reveal>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : visibleCourses.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {visibleCourses.map((course, i) => (
                    <Reveal key={course.id} className="h-full" delay={0.05 + Math.min(i, 8) * 0.03}>
                      <CourseCatalogCard course={course} priority={i === 0 && !previewLimit} />
                    </Reveal>
                  ))}
                </div>
              ) : (
                <div className="col-span-full py-16 text-center">
                  <p className="text-lg font-semibold text-[#1C1D1F]">Coming Soon</p>
                  <p className="mt-2 text-sm text-[#6A6F73]">
                    We are actively building the curriculum for this category.
                  </p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

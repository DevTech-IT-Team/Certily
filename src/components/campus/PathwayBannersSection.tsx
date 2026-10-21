import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
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
        previewLimit ? "bg-[#F3F1FB] font-sans" : "bg-white font-sans",
        previewLimit
          ? "pt-14 pb-12 sm:pt-16 sm:pb-14"
          : "pt-20 pb-8 sm:pt-24 sm:pb-10 lg:pt-28",
        className,
      )}
    >
      <div className={cn("mx-auto px-4 sm:px-6", previewLimit ? "max-w-[90rem]" : "max-w-7xl")}>
        {previewLimit ? (
          <div>
            <h2 className="text-center font-display text-4xl font-bold leading-[1.15] tracking-tight text-[#0F1533] sm:text-5xl">
              Every learner has a path
              <span className="mt-1 block text-[#5B4CF5]">Find yours</span>
            </h2>
            <StagePath stages={PATHWAY_LEVELS.filter((band) => band.id !== "k5")} />
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

function StagePath({ stages }: { stages: PathwayLevel[] }) {
  const stops = [
    { id: "all", label: "All courses", sub: "30 certifications", image: getPathwayThumbnail("all"), accent: "#5B4CF5" },
    ...stages.map((band) => ({
      id: band.id,
      label: band.shortLabel,
      sub: band.subLabel,
      image: getPathwayThumbnail(band.id) || band.thumbnail || coursesForBand(band.id)[0]?.image,
      accent: band.theme.accent,
    })),
  ];

  return (
    <>
    <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:hidden">
      {stops.map((stop) => (
        <Link
          key={stop.id}
          to="/learning"
          search={stop.id !== "all" ? { stage: stop.id } : undefined}
          hash={stop.id !== "all" ? "courses-section" : undefined}
          className="flex flex-col"
        >
          <img src={stop.image} alt="" className="aspect-[4/5] w-full rounded-[1.2rem] object-cover" />
          <span className="mt-2 text-sm font-bold">{stop.label}</span>
        </Link>
      ))}
    </div>
    <div className="mt-8 hidden items-end gap-5 lg:flex">
      {stops.map((stop, index) => (
        <motion.div
          key={stop.id}
          className="min-w-0 flex-1"
          initial={{ opacity: 0, y: 72 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1.15, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
        >
        <Link
          to="/learning"
          search={stop.id !== "all" ? { stage: stop.id } : undefined}
          hash={stop.id !== "all" ? "courses-section" : undefined}
          className="group flex flex-col"
          style={{ marginBottom: `${index * 1.1}rem` }}
        >
          <span className="block overflow-hidden rounded-2xl shadow-[0_16px_30px_-18px_rgba(15,21,51,0.45)] transition duration-300 group-hover:-translate-y-1.5">
            <img src={stop.image} alt="" className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" />
          </span>
          <span className="mt-3 block text-center font-display text-[15px] font-bold leading-tight text-[#0F1533] transition group-hover:text-[#5B4CF5]">
            {stop.label}
          </span>
        </Link>
        </motion.div>
      ))}
    </div>
    </>
  );
}

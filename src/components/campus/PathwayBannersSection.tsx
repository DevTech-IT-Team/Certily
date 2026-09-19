import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { COURSES_DATA, coursesForBand, getTopicSlug } from "@/lib/courses";
import { CourseCatalogCard } from "./CourseCatalogCard";
import {
  LEVEL_CATEGORY,
  PATHWAY_LEVELS,
  type PathwayLevelId,
} from "@/lib/pathways";

const TABS = [
  "All",
  "K–5",
  "Middle School",
  "High School",
  "University / College",
  "Working Professionals",
] as const;

const LEVEL_TO_TAB: Record<PathwayLevelId, string> = LEVEL_CATEGORY;

export function PathwayBannersSection({
  previewLimit,
}: {
  previewLimit?: number;
}) {
  const [activeTab, setActiveTab] = useState<string>("K–5");
  const [activeLevel, setActiveLevel] = useState<PathwayLevelId | "all">("k5");

  const handleSelectTab = (tab: string) => {
    setActiveTab(tab);
    if (tab === "All") {
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
        "bg-white py-8 font-sans sm:py-12 md:py-16",
        !previewLimit && "min-h-screen",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#1C1D1F] sm:text-4xl">
              Every learner has a path — find yours
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex gap-6 overflow-x-auto border-b border-[#D1D7DC] pb-0 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => handleSelectTab(tab)}
                className={cn(
                  "whitespace-nowrap border-b-2 px-1 pb-3 text-sm font-bold transition-colors",
                  activeTab === tab
                    ? "border-black text-black"
                    : "border-transparent text-[#6A6F73] hover:text-black",
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
                          <CourseCatalogCard course={course} />
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
                  <CourseCatalogCard course={course} />
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

          {previewLimit ? (
            <div className="mt-10">
              <Link
                to="/learning"
                className="group inline-flex items-center gap-2 text-[16px] font-bold text-[#5B4CF5] hover:text-[#4A3BE8]"
              >
                View all certifications
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ) : activeTab !== "All" ? (
            <div className="mt-10">
              <Link
                to="/topic/$topicId"
                params={{ topicId: getTopicSlug(activeTab) }}
                className="group inline-flex items-center gap-2 text-[16px] font-bold text-[#5B4CF5] hover:text-[#4A3BE8]"
              >
                {`Show all ${activeTab} certifications`}
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}

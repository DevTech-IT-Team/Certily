import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { COURSES_DATA, getTopicSlug } from "@/lib/courses";
import { CourseCatalogCard } from "./CourseCatalogCard";

const TABS = [
  "All",
  "Elementary",
  "Middle School",
  "High School",
  "College",
  "Professional",
  "Career",
  "Free Courses",
] as const;

export function PathwayBannersSection() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredCourses = COURSES_DATA.filter((p) => {
    if (activeTab === "All") return true;
    if (activeTab === "Free Courses") return p.price === "Free";
    return p.category === activeTab;
  });

  return (
    <section className="min-h-screen bg-white py-8 font-sans sm:py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#1C1D1F] sm:text-4xl">
              Every learner has a path. Find yours.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#6A6F73] sm:text-lg">
              K–12 and college pathways are open now. Professional and career
              tracks coming as the campus grows.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-8 flex gap-6 overflow-x-auto border-b border-[#D1D7DC] pb-0 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
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
          {filteredCourses.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredCourses.slice(0, 4).map((course, i) => (
                <Reveal key={course.id} delay={0.1 + i * 0.05}>
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

          <div className="mt-10">
            <Link
              to="/topic/$topicId"
              params={{ topicId: getTopicSlug(activeTab) }}
              className="group inline-flex items-center gap-2 text-[16px] font-bold text-[#5B4CF5] hover:text-[#4A3BE8]"
            >
              {activeTab === "All"
                ? "Show all courses"
                : `Show all ${activeTab} courses`}
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

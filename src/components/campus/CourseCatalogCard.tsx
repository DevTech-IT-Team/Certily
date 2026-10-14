import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import type { CourseDetails } from "@/lib/courses";
import { CourseHoverThumbnail } from "./CourseHoverThumbnail";

export function CourseCatalogCard({
  course,
  priority = false,
}: {
  course: CourseDetails;
  priority?: boolean;
}) {
  const [previewPlaying, setPreviewPlaying] = useState(false);
  const [hoverOpen, setHoverOpen] = useState(false);

  return (
    <HoverCard
      open={!previewPlaying && hoverOpen}
      onOpenChange={setHoverOpen}
      openDelay={200}
      closeDelay={120}
    >
      <HoverCardTrigger asChild>
        <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white outline-none transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_-12px_rgba(91,76,245,0.12)] hover:border-[#5B4CF5]/40">
          <CourseHoverThumbnail
            image={course.image}
            alt={course.title}
            videoUrl={course.previewVideoUrl}
            badgeLogo={course.badgeLogo}
            onPlayingChange={setPreviewPlaying}
            priority={priority}
          />

          <div className="flex flex-1 flex-col p-5 pt-4 pb-0">
            {/* Top program info pill */}
            <div className="mb-2 flex items-center justify-between gap-2">
              <span className="inline-flex items-center rounded-md bg-[#EDE9FF] px-2 py-0.5 text-[10.5px] font-black uppercase tracking-wider text-[#5B4CF5]">
                {course.code ? `${course.code} · ${course.hours}H` : course.pathwayLabel}
              </span>
              <span className="text-[11px] font-medium text-slate-500">
                {course.packageLength || "6 weeks"}
              </span>
            </div>

            {/* Course Title */}
            <Link
              to="/course/$courseId"
              params={{ courseId: course.id }}
              className="group-hover:text-[#5B4CF5] transition-colors"
            >
              <h3 className="min-h-[2.5em] line-clamp-2 text-[16px] font-extrabold leading-snug text-slate-900 tracking-tight">
                {course.title}
              </h3>
            </Link>

            {/* Target Audience */}
            <p className="mt-1 text-[11.5px] font-bold text-[#5B4CF5]">
              {course.audience}
            </p>

            {/* Purpose / Tagline */}
            <p className="mt-1.5 min-h-[2.6em] line-clamp-2 text-[12.5px] leading-relaxed text-slate-600">
              {course.description}
            </p>

            {/* Metadata strip (replaces price) */}
            <div className="mt-auto pt-3 pb-1 flex items-center justify-between border-t border-slate-100 text-[11px] text-slate-500">
              <span className="font-medium text-slate-700">
                Prereq: <span className="font-normal text-slate-600">{course.prerequisiteLabel}</span>
              </span>
              <span className="font-semibold text-slate-500">
                4 Modules
              </span>
            </div>
          </div>

          {/* Action button */}
          <div className="px-5 pb-5 pt-2.5">
            <Link
              to="/course/$courseId"
              params={{ courseId: course.id }}
              className="group/btn relative flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#5B4CF5] py-2.5 text-[13.5px] font-bold text-white transition-all duration-200 hover:bg-[#4A3BE8]"
            >
              <span>View Course</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </HoverCardTrigger>

      {/* Hover card: Clean, compact, no scrollbar, beautiful typography */}
      <HoverCardContent
        side="right"
        align="start"
        sideOffset={12}
        className="group z-[100] w-[360px] animate-in rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_20px_45px_-12px_rgba(15,23,42,0.18)] fade-in zoom-in-95 duration-150 select-none overflow-hidden"
      >
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <span className="rounded-md bg-[#EDE9FF] px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-[#5B4CF5]">
              {course.code}
            </span>
            <span className="text-[11px] font-semibold text-slate-700">
              {course.category}
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-500">
            {course.hours}h · {course.packageLength || "6 weeks"}
          </span>
        </div>

        {/* Title */}
        <h3 className="mt-2 text-[15px] font-extrabold leading-snug text-slate-900 tracking-tight">
          {course.title}
        </h3>

        {/* Target Audience & Purpose */}
        <div className="mt-1 text-[11.5px] text-slate-600 leading-relaxed">
          <span className="font-bold text-[#5B4CF5]">{course.audience}</span>
          <span className="mx-1 text-slate-300">—</span>
          <span>{course.description}</span>
        </div>

        {/* 4 Modules: Minimalist & Clean with Tabular Numbers */}
        <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
              Curriculum (4 Modules)
            </span>
            <span className="text-[10px] font-semibold text-slate-500">5h each · 20h total</span>
          </div>
          <ol className="space-y-1.5 text-[11.5px]">
            {course.curriculum.slice(0, 4).map((m, idx) => (
              <li key={m.sectionTitle} className="flex items-center gap-2">
                <span className="font-mono text-[10.5px] font-bold text-slate-400 tabular-nums">
                  0{idx + 1}
                </span>
                <span className="font-semibold text-slate-800 line-clamp-1">{m.sectionTitle}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Demonstrated Outcomes */}
        <div className="mt-3 text-[11.5px]">
          <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
            Learners Will Demonstrate
          </span>
          <p className="font-medium text-slate-700 leading-relaxed line-clamp-2">
            {course.whatYouWillLearn.join(" • ")}
          </p>
        </div>

        {/* Evidence & Prerequisite */}
        <div className="mt-2.5 grid grid-cols-2 gap-2 border-t border-slate-100 pt-2.5 text-[11px]">
          <div>
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block">
              Assessment Evidence
            </span>
            <span className="font-semibold text-slate-800 line-clamp-1 block mt-0.5">
              {course.artifact}
            </span>
          </div>
          <div>
            <span className="text-[9.5px] font-bold uppercase tracking-wider text-slate-400 block">
              Prerequisite
            </span>
            <span className="font-medium text-slate-600 line-clamp-1 block mt-0.5">
              {course.prerequisite}
            </span>
          </div>
        </div>

        {/* Action Button */}
        <Link
          to="/course/$courseId"
          params={{ courseId: course.id }}
          className="mt-3.5 flex w-full items-center justify-center gap-1.5 rounded-xl bg-[#5B4CF5] py-2 text-[12.5px] font-bold text-white transition-colors hover:bg-[#4A3BE8]"
        >
          <span>View Course Details</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </HoverCardContent>
    </HoverCard>
  );
}

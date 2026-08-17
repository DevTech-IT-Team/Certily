import React from "react";
import { motion } from "motion/react";
import {
  Award,
  BookOpen,
  Briefcase,
  Gamepad2,
  GraduationCap,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";
import { type PathwayLevelId } from "@/lib/pathways";
import { cn } from "@/lib/utils";

type NavbarTabsProps = {
  activeLevel: PathwayLevelId | "all";
  onSelectLevel: (level: PathwayLevelId | "all") => void;
};

const TAB_CONFIGS = [
  {
    id: "k2" as const,
    title: "K–2",
    sub: "Kindergarten",
    icon: Sparkles,
    gradient: "from-[#6366F1] via-[#7C3AED] to-[#8B5CF6]",
    inactiveIconBg: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100/80",
  },
  {
    id: "elementary" as const,
    title: "Elementary",
    sub: "Grades 3–5",
    icon: BookOpen,
    gradient: "from-[#3B82F6] via-[#4F46E5] to-[#6366F1]",
    inactiveIconBg: "bg-blue-50 text-blue-600 group-hover:bg-blue-100/80",
  },
  {
    id: "middle" as const,
    title: "Middle School",
    sub: "Grades 6–8",
    icon: Gamepad2,
    gradient: "from-[#0284C7] via-[#2563EB] to-[#4F46E5]",
    inactiveIconBg: "bg-cyan-50 text-cyan-600 group-hover:bg-cyan-100/80",
  },
  {
    id: "high" as const,
    title: "High School",
    sub: "Grades 9–12",
    icon: Rocket,
    gradient: "from-[#059669] via-[#10B981] to-[#06B6D4]",
    inactiveIconBg: "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100/80",
  },
  {
    id: "college" as const,
    title: "College",
    sub: "Undergraduate",
    icon: GraduationCap,
    gradient: "from-[#2563EB] via-[#4F46E5] to-[#7C3AED]",
    inactiveIconBg: "bg-indigo-50 text-indigo-600 group-hover:bg-indigo-100/80",
  },
  {
    id: "career" as const,
    title: "Career",
    sub: "Job Ready",
    icon: Briefcase,
    gradient: "from-[#D97706] via-[#EA580C] to-[#E11D48]",
    inactiveIconBg: "bg-amber-50 text-amber-600 group-hover:bg-amber-100/80",
  },
  {
    id: "professional" as const,
    title: "Professional",
    sub: "For Experts",
    icon: Award,
    gradient: "from-[#7C3AED] via-[#C084FC] to-[#DB2777]",
    inactiveIconBg: "bg-purple-50 text-purple-600 group-hover:bg-purple-100/80",
  },
  {
    id: "all" as const,
    title: "All Pathways",
    sub: "Explore All",
    icon: Layers,
    gradient: "from-[#5B4CF5] via-[#8B5CF6] to-[#EC4899]",
    inactiveIconBg: "bg-violet-50 text-violet-600 group-hover:bg-violet-100/80",
  },
];

export function NavbarTabs({ activeLevel, onSelectLevel }: NavbarTabsProps) {
  return (
    <div className="w-full overflow-x-auto pb-2 pt-1 scrollbar-none">
      <div className="mx-auto flex max-w-fit min-w-max items-center justify-center gap-1.5 rounded-full border border-white/90 bg-white/85 p-1.5 shadow-[0_10px_35px_-5px_rgba(91,76,245,0.12),0_2px_10px_rgba(0,0,0,0.03)] backdrop-blur-xl ring-1 ring-purple-100/70">
        {TAB_CONFIGS.map((tab) => {
          const isActive = activeLevel === tab.id;
          const Icon = tab.icon;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onSelectLevel(tab.id)}
              className={cn(
                "group relative flex items-center rounded-full px-3.5 py-2 text-left transition-all duration-200 select-none whitespace-nowrap outline-none focus-visible:ring-2 focus-visible:ring-[#5B4CF5]",
                !isActive && "hover:bg-slate-100/70 active:scale-[0.98]"
              )}
            >
              {/* Active Animated Background Pill */}
              {isActive && (
                <motion.div
                  layoutId="activePathwayNavbarTab"
                  className={cn(
                    "absolute inset-0 rounded-full bg-gradient-to-r shadow-[0_8px_25px_-3px_rgba(91,76,245,0.45)] ring-2 ring-white/80",
                    tab.gradient
                  )}
                  transition={{ type: "spring", stiffness: 450, damping: 32 }}
                />
              )}

              {/* Content */}
              <div className="relative z-10 flex items-center gap-2.5">
                {/* Icon Badge */}
                <span
                  className={cn(
                    "flex h-7 w-7 shrink-0 items-center justify-center rounded-full transition-all duration-300",
                    isActive
                      ? "bg-white/20 text-white shadow-inner backdrop-blur-md"
                      : cn("shadow-xs transition-transform duration-200 group-hover:scale-110", tab.inactiveIconBg)
                  )}
                >
                  <Icon className="h-3.5 w-3.5" />
                </span>

                {/* Text & Subtitle */}
                <div className="flex flex-col justify-center leading-tight">
                  <span
                    className={cn(
                      "font-display text-xs font-extrabold tracking-tight transition-colors",
                      isActive ? "text-white" : "text-[#0F1533] group-hover:text-purple-950"
                    )}
                  >
                    {tab.title}
                  </span>
                  <span
                    className={cn(
                      "text-[10px] font-semibold transition-colors leading-none mt-0.5",
                      isActive ? "text-white/90" : "text-[#64748B] group-hover:text-purple-700"
                    )}
                  >
                    {tab.sub}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}


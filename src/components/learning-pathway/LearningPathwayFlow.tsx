import React from "react";
import { motion } from "motion/react";
import {
  Award,
  BookOpen,
  Briefcase,
  ChevronRight,
  Gamepad2,
  GraduationCap,
  Layers,
  Rocket,
  Sparkles,
} from "lucide-react";
import { type PathwayLevelId } from "@/lib/pathways";
import { cn } from "@/lib/utils";

type LearningPathwayFlowProps = {
  activeLevel: PathwayLevelId | "all";
  onSelectLevel: (level: PathwayLevelId | "all") => void;
};

export const FLOW_STAGES = [
  {
    id: "k2" as const,
    step: 1,
    title: "K–2",
    sub: "Kindergarten",
    icon: Sparkles,
    badgeText: "K2",
    gradient: "from-[#6366F1] via-[#7C3AED] to-[#8B5CF6]",
    activeBg: "bg-gradient-to-tr from-[#6366F1] via-[#7C3AED] to-[#A855F7]",
    inactiveIconColor: "text-indigo-600",
    inactiveChipBg: "bg-indigo-50/80 border-indigo-100",
    glowShadow: "shadow-[0_10px_25px_-2px_rgba(99,102,241,0.45)]",
  },
  {
    id: "elementary" as const,
    step: 2,
    title: "Elementary",
    sub: "Grades 3–5",
    icon: BookOpen,
    badgeText: "G3-5",
    gradient: "from-[#3B82F6] via-[#4F46E5] to-[#6366F1]",
    activeBg: "bg-gradient-to-tr from-[#3B82F6] via-[#2563EB] to-[#6366F1]",
    inactiveIconColor: "text-blue-600",
    inactiveChipBg: "bg-blue-50/80 border-blue-100",
    glowShadow: "shadow-[0_10px_25px_-2px_rgba(59,130,246,0.45)]",
  },
  {
    id: "middle" as const,
    step: 3,
    title: "Middle School",
    sub: "Grades 6–8",
    icon: Gamepad2,
    badgeText: "G6-8",
    gradient: "from-[#0284C7] via-[#06B6D4] to-[#3B82F6]",
    activeBg: "bg-gradient-to-tr from-[#0284C7] via-[#06B6D4] to-[#3B82F6]",
    inactiveIconColor: "text-cyan-600",
    inactiveChipBg: "bg-cyan-50/80 border-cyan-100",
    glowShadow: "shadow-[0_10px_25px_-2px_rgba(2,132,199,0.45)]",
  },
  {
    id: "high" as const,
    step: 4,
    title: "High School",
    sub: "Grades 9–12",
    icon: Rocket,
    badgeText: "G9-12",
    gradient: "from-[#059669] via-[#10B981] to-[#06B6D4]",
    activeBg: "bg-gradient-to-tr from-[#059669] via-[#10B981] to-[#06B6D4]",
    inactiveIconColor: "text-emerald-600",
    inactiveChipBg: "bg-emerald-50/80 border-emerald-100",
    glowShadow: "shadow-[0_10px_25px_-2px_rgba(16,185,129,0.45)]",
  },
  {
    id: "college" as const,
    step: 5,
    title: "College",
    sub: "Undergraduate",
    icon: GraduationCap,
    badgeText: "HEd",
    gradient: "from-[#2563EB] via-[#4F46E5] to-[#7C3AED]",
    activeBg: "bg-gradient-to-tr from-[#2563EB] via-[#4F46E5] to-[#7C3AED]",
    inactiveIconColor: "text-blue-700",
    inactiveChipBg: "bg-indigo-50/80 border-indigo-100",
    glowShadow: "shadow-[0_10px_25px_-2px_rgba(37,99,235,0.45)]",
  },
  {
    id: "career" as const,
    step: 6,
    title: "Career",
    sub: "Job Ready",
    icon: Briefcase,
    badgeText: "Job",
    gradient: "from-[#D97706] via-[#EA580C] to-[#E11D48]",
    activeBg: "bg-gradient-to-tr from-[#D97706] via-[#EA580C] to-[#E11D48]",
    inactiveIconColor: "text-amber-600",
    inactiveChipBg: "bg-amber-50/80 border-amber-100",
    glowShadow: "shadow-[0_10px_25px_-2px_rgba(217,119,6,0.45)]",
  },
  {
    id: "professional" as const,
    step: 7,
    title: "Professional",
    sub: "For Experts",
    icon: Award,
    badgeText: "Exp",
    gradient: "from-[#7C3AED] via-[#C084FC] to-[#DB2777]",
    activeBg: "bg-gradient-to-tr from-[#7C3AED] via-[#C084FC] to-[#DB2777]",
    inactiveIconColor: "text-purple-600",
    inactiveChipBg: "bg-purple-50/80 border-purple-100",
    glowShadow: "shadow-[0_10px_25px_-2px_rgba(124,58,237,0.45)]",
  },
];

export function LearningPathwayFlow({
  activeLevel,
  onSelectLevel,
}: LearningPathwayFlowProps) {
  const handleSelect = (id: PathwayLevelId | "all") => {
    onSelectLevel(id);
    const element = document.getElementById("dedicated-pathway-view");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const activeIndex = FLOW_STAGES.findIndex((s) => s.id === activeLevel);
  const progressPercent =
    activeLevel === "all"
      ? 100
      : (activeIndex / (FLOW_STAGES.length - 1)) * 100;

  return (
    <div className="w-full py-2 select-none">
      {/* ── MINIMAL TOP BAR ── */}
      <div className="flex items-center justify-end mb-1 px-2">
        <button
          type="button"
          onClick={() => handleSelect(activeLevel === "all" ? "k2" : "all")}
          className={cn(
            "group inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-[11px] font-extrabold transition-all duration-300 outline-none border shadow-xs",
            activeLevel === "all"
              ? "bg-[#5B4CF5] text-white border-[#5B4CF5] shadow-purple-500/30 scale-[1.02]"
              : "bg-white text-slate-700 hover:text-purple-700 border-slate-200/90 hover:border-purple-300 hover:shadow-md"
          )}
        >
          <Layers className="h-3.5 w-3.5 text-purple-600 group-hover:rotate-12 transition-transform" />
          <span>{activeLevel === "all" ? "Showing All Pathways" : "Explore All Pathways"}</span>
          <ChevronRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* ── UNCLUTTERED NO-CLIPPING STEPPER TRACK ── */}
      <div className="relative w-full overflow-x-auto py-6 scrollbar-none">
        <div className="relative mx-auto min-w-[760px] max-w-[1300px] px-8">
          
          {/* CONTINUOUS PROGRESS LINE (BEHIND NODES) */}
          <div className="absolute top-[52px] left-12 right-12 h-2 rounded-full bg-slate-200/80 shadow-inner overflow-hidden pointer-events-none z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-[#6366F1] via-[#3B82F6] via-[#0284C7] via-[#059669] via-[#2563EB] via-[#D97706] to-[#7C3AED] shadow-[0_0_15px_rgba(91,76,245,0.7)]"
              initial={{ width: "0%" }}
              animate={{ width: `${progressPercent}%` }}
              transition={{ type: "spring", stiffness: 280, damping: 28 }}
            />
          </div>

          {/* STEP NODES ROW */}
          <div className="relative z-10 flex items-center justify-between">
            {FLOW_STAGES.map((stage, index) => {
              const isActive = activeLevel === stage.id;
              const isPassed = activeIndex >= index && activeLevel !== "all";
              const Icon = stage.icon;

              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => handleSelect(stage.id)}
                  className="group relative flex flex-col items-center text-center outline-none"
                >
                  {/* NODE CONTAINER */}
                  <div className="relative flex items-center justify-center">
                    
                    {/* Seamless Active Glow Halo (No Top Clipping!) */}
                    {isActive && (
                      <motion.div
                        layoutId="activeGlowHalo"
                        className={cn(
                          "absolute inset-0 rounded-2xl bg-gradient-to-r opacity-50 blur-lg scale-125 pointer-events-none",
                          stage.gradient
                        )}
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Node Container Box */}
                    <div
                      className={cn(
                        "relative flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl transition-all duration-300 border backdrop-blur-md shadow-md",
                        isActive
                          ? cn(
                              "text-white ring-4 ring-white scale-110 border-white/80 z-10",
                              stage.activeBg,
                              stage.glowShadow
                            )
                          : isPassed
                          ? "bg-white text-purple-700 border-purple-300 shadow-purple-100/60 hover:scale-105 hover:border-purple-400"
                          : "bg-white/95 text-slate-500 border-slate-200/90 hover:border-purple-300 hover:text-purple-600 hover:scale-105 shadow-slate-200/50"
                      )}
                    >
                      {/* Icon Chip */}
                      <span
                        className={cn(
                          "flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl transition-all duration-300 shadow-2xs",
                          isActive
                            ? "bg-white/20 text-white shadow-inner backdrop-blur-md ring-1 ring-white/50"
                            : cn("border transition-transform duration-200 group-hover:scale-110", stage.inactiveChipBg, stage.inactiveIconColor)
                        )}
                      >
                        <Icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" />
                      </span>

                      {/* Step Number Badge */}
                      <span
                        className={cn(
                          "absolute -bottom-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-black shadow-xs border transition-colors",
                          isActive
                            ? "bg-slate-900 text-white border-white"
                            : "bg-slate-100 text-slate-700 border-slate-200 group-hover:bg-purple-600 group-hover:text-white"
                        )}
                      >
                        {stage.step}
                      </span>
                    </div>
                  </div>

                  {/* LABELS BELOW NODE */}
                  <div className="mt-3 flex flex-col items-center leading-tight">
                    <span
                      className={cn(
                        "font-display text-xs font-black tracking-tight transition-colors",
                        isActive
                          ? "text-[#0F1533] scale-105"
                          : "text-slate-700 group-hover:text-purple-900"
                      )}
                    >
                      {stage.title}
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 text-[10px] font-bold transition-colors px-2.5 py-0.5 rounded-full",
                        isActive
                          ? "bg-purple-100 text-purple-800"
                          : "text-slate-400 group-hover:text-purple-600"
                      )}
                    >
                      {stage.sub}
                    </span>
                  </div>

                  {/* ACTIVE INDICATOR UNDERLINE */}
                  {isActive && (
                    <motion.div
                      layoutId="smoothActiveIndicatorLine"
                      className={cn("mt-2 h-1 w-7 rounded-full bg-gradient-to-r shadow-xs", stage.gradient)}
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Lock,
  Star,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import {
  PATHWAY_LEVELS,
  coursesForLevel,
  countCoursesForLevel,
  type PathwayLevelId,
} from "@/lib/pathways";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "Learning Pathways — Certily AI Campus" },
      {
        name: "description",
        content:
          "Browse K–12, college, professional, and career certification pathways with clear outcomes, previews, and enrollment options.",
      },
    ],
  }),
  component: Courses,
});

type LevelFilter = PathwayLevelId | "all";

// Per-pathway identity — colours, copy, gradients
const IDENTITY = {
  k12: {
    gradientFrom: "#6366F1",
    gradientTo: "#4F46E5",
    glow: "rgba(99,102,241,0.30)",
    accent: "#4F46E5",
    accentLight: "#EEF2FF",
    accentText: "#3730A3",
    darkBg: "#06061A",
    label: "Ages 6–18",
    tagline: "Start your AI journey",
  },
  college: {
    gradientFrom: "#3B82F6",
    gradientTo: "#1D4ED8",
    glow: "rgba(59,130,246,0.30)",
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    accentText: "#1E3A8A",
    darkBg: "#00081A",
    label: "Ages 18–24",
    tagline: "Build your portfolio",
  },
  professional: {
    gradientFrom: "#8B5CF6",
    gradientTo: "#6D28D9",
    glow: "rgba(139,92,246,0.30)",
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    accentText: "#4C1D95",
    darkBg: "#0A0414",
    label: "Career Growth",
    tagline: "Industry-validated skills",
  },
  career: {
    gradientFrom: "#475569",
    gradientTo: "#1E293B",
    glow: "rgba(71,85,105,0.28)",
    accent: "#334155",
    accentLight: "#F1F5F9",
    accentText: "#1E293B",
    darkBg: "#060A12",
    label: "Work & Beyond",
    tagline: "Advance your career",
  },
} as const;

function Courses() {
  const [level, setLevel] = useState<LevelFilter>("k12");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      const queryLevel = searchParams.get("level") as LevelFilter;
      if (
        queryLevel &&
        ["k12", "college", "professional", "career", "all"].includes(queryLevel)
      ) {
        setLevel(queryLevel);
        setTimeout(() => {
          document
            .getElementById("course-catalog")
            ?.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300);
      }
    }
  }, []);

  const filtered = useMemo(() => coursesForLevel(level), [level]);
  const activeLevel = PATHWAY_LEVELS.find((l) => l.id === level);
  const activeId = level !== "all" ? IDENTITY[level] : null;

  const handleSelect = useCallback(
    (id: LevelFilter) => {
      setLevel(id);
      requestAnimationFrame(() => {
        document
          .getElementById("course-catalog")
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    },
    []
  );

  return (
    <div className="min-h-screen bg-[#F7F8FC]">
      {/* ── PAGE HERO ───────────────────────────────────────────── */}
      <div className="relative overflow-hidden pt-20 pb-0">
        {/* Background gradient */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#EDE9FF]/40 via-white to-[#F7F8FC]" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-5%,rgba(91,76,245,0.10),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-10 sm:px-6 sm:pt-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
              Certily Campus
            </span>
            <span>/</span>
            <span className="font-medium text-foreground">Learning Pathways</span>
          </div>

          {/* Heading */}
          <div className="mt-5 max-w-3xl">
            <h1 className="font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-[#0F1533] sm:text-5xl lg:text-[3.5rem]">
              Every learner has{" "}
              <span className="bg-gradient-to-r from-[#5B4CF5] to-[#3B82F6] bg-clip-text text-transparent">
                a pathway.
              </span>
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-[#5A607A] sm:text-lg">
              Browse K–12 and college certification tracks built around real AI outcomes.
              Professional and career pathways coming soon.
            </p>
          </div>

          {/* Pathway selector tabs */}
          <div className="mt-8 flex flex-wrap gap-3">
            {PATHWAY_LEVELS.map((l) => {
              const id = IDENTITY[l.id];
              const Icon = l.icon;
              const active = level === l.id;
              const soon = l.focus === "later";
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => handleSelect(l.id)}
                  className={cn(
                    "group inline-flex items-center gap-2.5 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                    active
                      ? "border-transparent text-white shadow-[0_8px_24px_-8px_var(--pw-glow)]"
                      : "border-[#E8EAF4] bg-white text-[#5A607A] hover:border-transparent hover:shadow-[0_8px_20px_-8px_var(--pw-glow)]"
                  )}
                  style={
                    {
                      "--pw-glow": id.glow,
                      ...(active
                        ? {
                            background: `linear-gradient(135deg, ${id.gradientFrom}, ${id.gradientTo})`,
                          }
                        : {}),
                    } as React.CSSProperties
                  }
                >
                  <span
                    className={cn(
                      "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg transition-all",
                      active ? "bg-white/20" : "group-hover:scale-105"
                    )}
                    style={active ? {} : { background: id.accentLight }}
                  >
                    <Icon
                      className="h-3.5 w-3.5"
                      style={{ color: active ? "white" : id.accentText }}
                      strokeWidth={2}
                    />
                  </span>
                  {l.shortLabel}
                  <span
                    className={cn(
                      "rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
                      active ? "bg-white/20 text-white" : "bg-[#F0F1F8] text-[#8892A4]"
                    )}
                  >
                    {countCoursesForLevel(l.id)}
                  </span>
                  {soon && !active && (
                    <Lock className="h-3 w-3 text-[#8892A4]" />
                  )}
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => handleSelect("all")}
              className={cn(
                "inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                level === "all"
                  ? "border-[#0F1533] bg-[#0F1533] text-white"
                  : "border-[#E8EAF4] bg-white text-[#5A607A] hover:border-[#0F1533]/30"
              )}
            >
              All
              <span
                className={cn(
                  "rounded-full px-1.5 py-0.5 text-[10px] font-bold tabular-nums",
                  level === "all" ? "bg-white/20 text-white" : "bg-[#F0F1F8] text-[#8892A4]"
                )}
              >
                {countCoursesForLevel("all")}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* ── ACTIVE PATHWAY BANNER ────────────────────────────────── */}
      {activeLevel && activeId && level !== "all" && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div
            className="relative overflow-hidden rounded-2xl p-6 sm:p-8"
            style={{
              background: `linear-gradient(145deg, ${activeId.darkBg} 0%, ${activeId.gradientTo}60 55%, ${activeId.gradientFrom}30 100%)`,
              boxShadow: `0 24px 64px -24px ${activeId.glow}`,
            }}
          >
            {/* Blue-indigo overlay on the banner strip */}
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl"
              style={{
                background:
                  "linear-gradient(120deg, rgba(15,12,50,0.55) 0%, rgba(59,76,245,0.18) 55%, transparent 100%)",
              }}
            />
            {/* Glow orb */}
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full opacity-25 blur-3xl"
              style={{ background: activeId.gradientFrom }}
            />
            {/* Mesh */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage:
                  "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='23' cy='3' r='1.5'/%3E%3Ccircle cx='3' cy='23' r='1.5'/%3E%3Ccircle cx='23' cy='23' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")",
              }}
            />

            <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/80 ring-1 ring-white/20">
                    {activeId.label}
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/70 ring-1 ring-white/15">
                    {activeId.tagline}
                  </span>
                  {activeLevel.focus === "later" && (
                    <span className="flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-[11px] font-bold text-amber-300 ring-1 ring-amber-400/25">
                      <Lock className="h-3 w-3" />
                      Coming soon
                    </span>
                  )}
                </div>
                <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                  {activeLevel.label}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/65 sm:text-base">
                  {activeLevel.description}
                </p>

                {/* Outcomes */}
                <ul className="mt-4 grid grid-cols-1 gap-y-1.5 gap-x-6 sm:grid-cols-2">
                  {activeLevel.outcomes.map((o) => (
                    <li key={o} className="flex items-start gap-2 text-sm text-white/75">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0"
                        style={{ color: activeId.gradientFrom }}
                      />
                      {o}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0">
                <a
                  href="https://lmsathena.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full px-7 text-sm font-bold text-white transition-all hover:scale-[1.03] active:scale-[0.98]"
                  style={{
                    background: `linear-gradient(135deg, ${activeId.gradientFrom}, ${activeId.gradientTo})`,
                    boxShadow: `0 12px 32px -8px ${activeId.glow}`,
                  }}
                >
                  {activeLevel.focus === "later" ? "Join waitlist" : "Enroll now"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── COURSE CATALOG ───────────────────────────────────────── */}
      <div id="course-catalog" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-10 sm:px-6 sm:py-12">
        {/* Catalog header */}
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold text-[#0F1533]">
              {level === "all" ? "All courses" : `${activeLevel?.shortLabel} courses`}
            </h3>
            <p className="mt-0.5 text-sm text-[#8892A4]">
              {filtered.length} course{filtered.length === 1 ? "" : "s"} available
            </p>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-white py-16 text-center">
            <Lock className="h-8 w-8 text-muted-foreground/40" />
            <p className="mt-3 text-sm font-semibold text-foreground">Coming soon</p>
            <p className="mt-1 text-xs text-muted-foreground">
              Courses for this pathway are launching soon.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <article
                key={c.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5B4CF5]/20 hover:shadow-[0_20px_48px_-16px_rgba(91,76,245,0.14)]"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/9] overflow-hidden bg-[#F0F1F8]">
                  <img
                    src={c.img}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />

                  {/* Top badges */}
                  <div className="absolute left-3 top-3 flex gap-1.5">
                    {c.featured && (
                      <span className="rounded-full bg-[#5B4CF5] px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white shadow-sm">
                        Featured
                      </span>
                    )}
                    <span className="rounded-full bg-black/35 px-2.5 py-0.5 text-[10px] font-semibold text-white/90 backdrop-blur-sm">
                      {c.category}
                    </span>
                  </div>

                  {/* Price */}
                  <span className="absolute bottom-3 right-3 rounded-lg bg-white px-2.5 py-1 text-sm font-extrabold text-[#0F1533] shadow-md">
                    {c.price}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Level + pathway */}
                  <span className="mb-3 inline-flex w-fit items-center rounded-full border border-[#E8EAF4] bg-[#F7F8FC] px-2.5 py-0.5 text-[11px] font-semibold text-[#5A607A]">
                    {PATHWAY_LEVELS.find((l) => l.id === c.level)?.shortLabel}
                  </span>

                  <h3 className="font-display text-base font-bold leading-snug text-[#0F1533] transition-colors group-hover:text-[#5B4CF5]">
                    {c.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#5A607A]">
                    {c.preview}
                  </p>

                  {/* Outcome */}
                  <div className="mt-4 rounded-xl border border-[#E8EAF4] bg-[#F7F8FC] p-3 text-xs leading-relaxed text-[#5A607A]">
                    <span className="font-semibold text-[#0F1533]">Outcome: </span>
                    {c.outcome}
                  </div>

                  {/* Meta row */}
                  <div className="mt-4 flex items-center justify-between border-t border-[#F0F1F8] pt-4 text-xs text-[#8892A4]">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {c.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" />
                      {c.learners.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1.5 font-semibold text-[#F59E0B]">
                      <Star className="h-3.5 w-3.5 fill-current" />
                      {c.rating}
                    </span>
                  </div>

                  {/* CTA */}
                  <a
                    href="https://lmsathena.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F1533] py-3 text-sm font-bold text-white shadow-sm transition-all hover:bg-[#5B4CF5] hover:shadow-[0_8px_24px_-8px_rgba(91,76,245,0.40)] active:scale-[0.98]"
                  >
                    Preview & enroll
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

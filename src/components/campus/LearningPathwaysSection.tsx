import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Lock } from "lucide-react";
import { countCoursesForLevel, PATHWAY_LEVELS, type PathwayLevelId } from "@/lib/pathways";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

// Per-pathway visual identity
const PATHWAY_IDENTITY = [
  {
    id: "k12",
    gradientFrom: "#F97316",
    gradientTo: "#EA580C",
    glow: "rgba(249,115,22,0.28)",
    accent: "#EA580C",
    accentLight: "#FFF4EE",
    accentText: "#9A3412",
    darkBg: "#1A0A02",
    label: "Ages 6–18",
    audience: "Students & Parents",
    step: "01",
  },
  {
    id: "college",
    gradientFrom: "#3B82F6",
    gradientTo: "#1D4ED8",
    glow: "rgba(59,130,246,0.28)",
    accent: "#2563EB",
    accentLight: "#EFF6FF",
    accentText: "#1E3A8A",
    darkBg: "#020B1A",
    label: "Ages 18–24",
    audience: "College Students",
    step: "02",
  },
  {
    id: "professional",
    gradientFrom: "#8B5CF6",
    gradientTo: "#6D28D9",
    glow: "rgba(139,92,246,0.28)",
    accent: "#7C3AED",
    accentLight: "#F5F3FF",
    accentText: "#4C1D95",
    darkBg: "#0C0714",
    label: "Career Growth",
    audience: "Working Professionals",
    step: "03",
  },
  {
    id: "career",
    gradientFrom: "#10B981",
    gradientTo: "#059669",
    glow: "rgba(16,185,129,0.28)",
    accent: "#059669",
    accentLight: "#ECFDF5",
    accentText: "#064E3B",
    darkBg: "#011209",
    label: "Work & Beyond",
    audience: "Career Advancers",
    step: "04",
  },
] as const;

type LearningPathwaysSectionProps = {
  variant?: "page" | "marketing";
  selectedLevel?: PathwayLevelId | "all";
  onSelectPathway?: (id: PathwayLevelId) => void;
};

// ─── Marketing variant: 4 horizontal rows ──────────────────────────────────

function MarketingCard({
  pathway,
  index,
}: {
  pathway: (typeof PATHWAY_LEVELS)[number];
  index: number;
}) {
  const id = PATHWAY_IDENTITY[index % PATHWAY_IDENTITY.length];
  const Icon = pathway.icon;
  const comingSoon = pathway.focus === "later";
  const courseCount = countCoursesForLevel(pathway.id);

  return (
    <Link to="/courses" className="group block w-full">
      <div
        className={cn(
          "relative flex items-center gap-5 overflow-hidden rounded-2xl border bg-white p-5 transition-all duration-300",
          "hover:-translate-y-0.5 hover:shadow-[0_20px_60px_-20px_var(--pw-glow)]",
          comingSoon ? "border-border/60" : "border-[#E8EAF4] hover:border-transparent"
        )}
        style={{ "--pw-glow": id.glow } as React.CSSProperties}
      >
        {/* Left colour bar */}
        <div
          className="absolute left-0 top-0 h-full w-1 rounded-l-2xl"
          style={{ background: `linear-gradient(180deg, ${id.gradientFrom}, ${id.gradientTo})` }}
        />

        {/* Icon */}
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ml-2"
          style={{ background: `linear-gradient(135deg, ${id.gradientFrom}, ${id.gradientTo})` }}
        >
          <Icon className="h-5 w-5 text-white" strokeWidth={2} />
        </div>

        {/* Copy */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-display text-base font-bold text-[#0F1533]">
              {pathway.shortLabel}
            </h3>
            <span
              className="rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide"
              style={{ background: id.accentLight, color: id.accentText }}
            >
              {id.label}
            </span>
            {comingSoon && (
              <span className="flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-700 ring-1 ring-amber-200">
                <Lock className="h-2.5 w-2.5" />
                Coming soon
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-[#5A607A] line-clamp-1">{pathway.description}</p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {pathway.outcomes.slice(0, 2).map((o) => (
              <span
                key={o}
                className="rounded-full px-2 py-0.5 text-[11px] font-medium"
                style={{ background: id.accentLight, color: id.accentText }}
              >
                {o}
              </span>
            ))}
          </div>
        </div>

        {/* Right: count + arrow */}
        <div className="flex shrink-0 flex-col items-end gap-2">
          {!comingSoon && (
            <span className="text-xs font-semibold text-[#8892A4]">
              {courseCount} courses
            </span>
          )}
          <span
            className="flex h-8 w-8 items-center justify-center rounded-full text-white transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-0.5"
            style={{ background: `linear-gradient(135deg, ${id.gradientFrom}, ${id.gradientTo})` }}
          >
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// ─── Page variant: big feature panel + sidebar selectors ──────────────────

function PageLayout({
  selectedLevel,
  onSelectPathway,
}: {
  selectedLevel?: PathwayLevelId | "all";
  onSelectPathway?: (id: PathwayLevelId) => void;
}) {
  const activeIdx = PATHWAY_LEVELS.findIndex((p) => p.id === selectedLevel);
  const active = activeIdx >= 0 ? PATHWAY_LEVELS[activeIdx] : PATHWAY_LEVELS[0];
  const activeId = activeIdx >= 0 ? PATHWAY_IDENTITY[activeIdx] : PATHWAY_IDENTITY[0];
  const ActiveIcon = active.icon;
  const courseCount = countCoursesForLevel(active.id);
  const comingSoon = active.focus === "later";

  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:gap-6">
      {/* ── Left: feature panel ── */}
      <div
        className="relative overflow-hidden rounded-2xl text-white"
        style={{
          background: `linear-gradient(145deg, ${activeId.darkBg} 0%, ${activeId.gradientTo}55 60%, ${activeId.gradientFrom}33 100%)`,
          boxShadow: `0 32px 80px -24px ${activeId.glow}`,
        }}
      >
        {/* Mesh overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />
        {/* Glow orb */}
        <div
          className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full opacity-30 blur-3xl"
          style={{ background: activeId.gradientFrom }}
        />

        <div className="relative p-7 sm:p-9">
          {/* Top row */}
          <div className="flex items-start justify-between gap-4">
            <div
              className="flex h-14 w-14 items-center justify-center rounded-2xl ring-1 ring-white/20"
              style={{ background: `linear-gradient(135deg, ${activeId.gradientFrom}, ${activeId.gradientTo})` }}
            >
              <ActiveIcon className="h-6 w-6 text-white" strokeWidth={2} />
            </div>
            <div className="flex flex-wrap gap-2 items-center justify-end">
              <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white/80 ring-1 ring-white/15">
                {activeId.label}
              </span>
              {comingSoon ? (
                <span className="flex items-center gap-1 rounded-full bg-amber-400/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
                  <Lock className="h-3 w-3" />
                  Coming soon
                </span>
              ) : (
                <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/80 ring-1 ring-white/15">
                  {courseCount} courses available
                </span>
              )}
            </div>
          </div>

          {/* Heading */}
          <h2 className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {active.label}
          </h2>
          <p className="mt-3 max-w-lg text-base leading-relaxed text-white/70">
            {active.description}
          </p>

          {/* Outcomes */}
          <ul className="mt-6 grid gap-2 sm:grid-cols-2">
            {active.outcomes.map((o) => (
              <li key={o} className="flex items-start gap-2 text-sm text-white/80">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 shrink-0"
                  style={{ color: activeId.gradientFrom }}
                />
                {o}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <a
              href="https://lmsathena.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-12 items-center gap-2.5 rounded-full px-8 text-sm font-bold text-white transition-all hover:scale-[1.03] active:scale-[0.98]"
              style={{
                background: `linear-gradient(135deg, ${activeId.gradientFrom}, ${activeId.gradientTo})`,
                boxShadow: `0 12px 32px -8px ${activeId.glow}`,
              }}
            >
              {comingSoon ? "Join waitlist" : "Enroll now"}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Right: selector stack ── */}
      <div className="flex flex-col gap-3">
        {PATHWAY_LEVELS.map((pathway, i) => {
          const id = PATHWAY_IDENTITY[i % PATHWAY_IDENTITY.length];
          const Icon = pathway.icon;
          const isActive = pathway.id === (selectedLevel || "k12");
          const soon = pathway.focus === "later";

          return (
            <button
              key={pathway.id}
              type="button"
              onClick={() => onSelectPathway?.(pathway.id)}
              className={cn(
                "group relative flex w-full items-center gap-4 overflow-hidden rounded-xl border p-4 text-left transition-all duration-200",
                isActive
                  ? "border-transparent shadow-[0_8px_32px_-12px_var(--pw-glow)]"
                  : "border-[#E8EAF4] bg-white hover:border-transparent hover:shadow-[0_8px_24px_-12px_var(--pw-glow)]"
              )}
              style={
                {
                  "--pw-glow": id.glow,
                  ...(isActive
                    ? {
                        background: `linear-gradient(135deg, ${id.accentLight} 0%, #fff 100%)`,
                        borderColor: id.accent + "40",
                      }
                    : {}),
                } as React.CSSProperties
              }
            >
              {/* Active left bar */}
              {isActive && (
                <div
                  className="absolute left-0 top-0 h-full w-1 rounded-l-xl"
                  style={{ background: `linear-gradient(180deg, ${id.gradientFrom}, ${id.gradientTo})` }}
                />
              )}

              <div
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-105 ml-1"
                style={
                  isActive
                    ? { background: `linear-gradient(135deg, ${id.gradientFrom}, ${id.gradientTo})` }
                    : { background: id.accentLight }
                }
              >
                <Icon
                  className="h-4 w-4"
                  style={{ color: isActive ? "white" : id.accentText }}
                  strokeWidth={2}
                />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <p
                    className="text-sm font-bold leading-tight"
                    style={{ color: isActive ? id.accent : "#0F1533" }}
                  >
                    {pathway.shortLabel}
                  </p>
                  {soon && (
                    <Lock className="h-3 w-3 text-[#8892A4]" />
                  )}
                </div>
                <p className="mt-0.5 text-[11px] text-[#8892A4]">{id.audience}</p>
              </div>

              <div
                className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-all duration-200",
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                )}
                style={{ background: `linear-gradient(135deg, ${id.gradientFrom}, ${id.gradientTo})` }}
              >
                <ArrowRight className="h-3 w-3 text-white" />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────

export function LearningPathwaysSection({
  variant = "marketing",
  selectedLevel,
  onSelectPathway,
}: LearningPathwaysSectionProps) {
  const isPage = variant === "page";

  return (
    <section
      id="pathways"
      data-illy-section="pathways"
      className={cn(
        "relative overflow-hidden",
        isPage
          ? "bg-[#F7F8FC] py-10 sm:py-12"
          : "border-t border-border/30 bg-[#F7F8FC] py-14 sm:py-16 md:py-20"
      )}
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-[#5B4CF5]/[0.06] blur-3xl" />
        <div className="absolute -bottom-10 right-1/3 h-72 w-72 rounded-full bg-[#3B82F6]/[0.06] blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header */}
        <div className={cn("mb-8 sm:mb-10", !isPage && "text-center")}>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-4 py-1.5 text-sm font-semibold text-primary shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Learning Pathways
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2
              className={cn(
                "mt-4 font-display text-3xl font-bold leading-[1.1] tracking-tight text-[#0F1533] sm:text-4xl lg:text-[2.75rem]",
                !isPage && "mx-auto max-w-2xl"
              )}
            >
              Every learner has a pathway.{" "}
              <span className="bg-gradient-to-r from-[#5B4CF5] to-[#3B82F6] bg-clip-text text-transparent">
                Find yours.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className={cn(
                "mt-3 text-base leading-relaxed text-[#5A607A] sm:text-lg",
                !isPage && "mx-auto max-w-xl"
              )}
            >
              K–12 and college pathways are open now. Professional and career tracks are
              coming as the campus grows.
            </p>
          </Reveal>
        </div>

        {/* Content */}
        {isPage ? (
          <PageLayout
            selectedLevel={selectedLevel}
            onSelectPathway={onSelectPathway}
          />
        ) : (
          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {PATHWAY_LEVELS.map((pathway, i) => (
              <Reveal key={pathway.id} delay={0.06 + i * 0.06}>
                <MarketingCard pathway={pathway} index={i} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Clock, Star, Users, ArrowRight, Lock } from "lucide-react";
import { useCallback, useMemo, useState } from "react";
import { CampusBuildingHeader } from "@/components/campus/CampusBuildingHeader";
import { LearningPathwaysSection } from "@/components/campus/LearningPathwaysSection";
import { Section } from "@/components/Section";
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

function Courses() {
  const [level, setLevel] = useState<LevelFilter>("k12");

  const filtered = useMemo(() => coursesForLevel(level), [level]);
  const activeLevel = PATHWAY_LEVELS.find((l) => l.id === level);

  const handleSelectPathway = useCallback((id: PathwayLevelId) => {
    setLevel(id);
    requestAnimationFrame(() => {
      document.getElementById("course-catalog")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, []);

  return (
    <>
      <CampusBuildingHeader route="/courses" />
      <LearningPathwaysSection
        variant="page"
        selectedLevel={level}
        onSelectPathway={handleSelectPathway}
      />
      <Section id="course-catalog" className="!pt-6 !pb-14 md:!pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setLevel("all")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                level === "all"
                  ? "bg-primary text-white"
                  : "border border-border bg-white text-foreground hover:border-primary/30"
              )}
            >
              All pathways ({countCoursesForLevel("all")})
            </button>
            {PATHWAY_LEVELS.map((l) => {
              const Icon = l.icon;
              const active = level === l.id;
              return (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => setLevel(l.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors",
                    active
                      ? "bg-primary text-white"
                      : "border border-border bg-white text-foreground hover:border-primary/30"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {l.shortLabel}
                  <span className="tabular-nums opacity-80">({countCoursesForLevel(l.id)})</span>
                  {l.focus === "later" && !active && (
                    <Lock className="h-3 w-3 opacity-50" aria-hidden />
                  )}
                </button>
              );
            })}
          </div>

          {activeLevel && level !== "all" && (
            <div className="mt-4 rounded-2xl border border-primary/15 bg-white p-4 sm:p-5">
              <p className="text-sm font-bold text-foreground">{activeLevel.label}</p>
              <p className="mt-1 text-sm text-muted-foreground">{activeLevel.description}</p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {activeLevel.outcomes.map((o) => (
                  <li
                    key={o}
                    className="rounded-full border border-border/80 bg-[#FAFBFE] px-3 py-1 text-xs text-foreground/80"
                  >
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6 flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-foreground">Course catalog</h3>
            <span className="text-xs text-muted-foreground">
              {filtered.length} pathway{filtered.length === 1 ? "" : "s"} shown
            </span>
          </div>

          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <article
                key={c.id}
                className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-muted">
                  <img
                    src={c.img}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                  {c.featured && (
                    <span className="absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase text-white">
                      Launch focus
                    </span>
                  )}
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-primary">
                      {c.category}
                      <span className="font-normal text-muted-foreground">
                        {" "}
                        · {PATHWAY_LEVELS.find((l) => l.id === c.level)?.shortLabel}
                      </span>
                    </p>
                    <span className="text-xs font-bold text-foreground">{c.price}</span>
                  </div>
                  <h3 className="mt-1 font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{c.preview}</p>
                  <p className="mt-2 text-xs font-medium text-[#0F1533]/80">
                    Outcome: {c.outcome}
                  </p>
                  <div className="mt-4 flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden />
                      {c.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="h-3.5 w-3.5" aria-hidden />
                      {c.learners.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="h-3.5 w-3.5 fill-current text-primary" aria-hidden />
                      {c.rating}
                    </span>
                  </div>
                  <a
                    href="https://lmsathena.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold tracking-tight text-white shadow-elegant transition-transform hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Preview & enroll
                    <ArrowRight className="h-4 w-4 opacity-90" aria-hidden />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

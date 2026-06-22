import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { countCoursesForLevel, PATHWAY_LEVELS, type PathwayLevelId } from "@/lib/pathways";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const CARD_STYLES = [
  {
    iconBg: "bg-[#5B4CF5]/10 text-[#5B4CF5]",
    ring: "group-hover:ring-[#5B4CF5]/20",
    selected: "border-[#5B4CF5]/35 ring-[#5B4CF5]/20 bg-white",
  },
  {
    iconBg: "bg-[#4CD1B0]/12 text-[#00A88A]",
    ring: "group-hover:ring-[#4CD1B0]/25",
    selected: "border-[#4CD1B0]/35 ring-[#4CD1B0]/20 bg-white",
  },
  {
    iconBg: "bg-[#6366F1]/10 text-[#6366F1]",
    ring: "group-hover:ring-[#6366F1]/20",
    selected: "border-[#6366F1]/35 ring-[#6366F1]/20 bg-white",
  },
  {
    iconBg: "bg-amber-100 text-amber-700",
    ring: "group-hover:ring-amber-200",
    selected: "border-amber-300/50 ring-amber-200/80 bg-white",
  },
] as const;

type LearningPathwaysSectionProps = {
  variant?: "page" | "marketing";
  selectedLevel?: PathwayLevelId | "all";
  onSelectPathway?: (id: PathwayLevelId) => void;
};

function PathwayCard({
  pathway,
  index,
  variant,
  selected,
  onSelect,
}: {
  pathway: (typeof PATHWAY_LEVELS)[number];
  index: number;
  variant: "page" | "marketing";
  selected?: boolean;
  onSelect?: (id: PathwayLevelId) => void;
}) {
  const Icon = pathway.icon;
  const comingSoon = pathway.focus === "later";
  const style = CARD_STYLES[index % CARD_STYLES.length];
  const courseCount = countCoursesForLevel(pathway.id);

  const cardClassName = cn(
    "group flex h-full w-full flex-col rounded-3xl border border-border/60 bg-[#FAFBFE] p-5 text-left shadow-sm ring-1 ring-transparent transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:shadow-[0_20px_50px_-24px_rgba(91,76,245,0.2)] sm:p-6",
    style.ring,
    comingSoon && "opacity-95",
    selected && style.selected
  );

  const cardBody = (
    <>
      <div className="flex items-start justify-between gap-3">
        <div
          className={cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12",
            style.iconBg
          )}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>

        {comingSoon ? (
          <span className="shrink-0 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800 ring-1 ring-amber-200/80">
            Coming Soon
          </span>
        ) : (
          <span className="shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-muted-foreground ring-1 ring-border/60">
            {courseCount} courses
          </span>
        )}
      </div>

      <h3 className="mt-5 font-display text-xl font-bold leading-tight text-foreground sm:text-2xl">
        {pathway.shortLabel}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{pathway.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {pathway.outcomes.slice(0, 2).map((outcome) => (
          <li
            key={outcome}
            className="rounded-full border border-border/70 bg-white px-2.5 py-1 text-[11px] font-medium text-foreground/80"
          >
            {outcome}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-4">
        <span className="text-sm font-semibold text-primary">
          {variant === "page" ? "View courses" : "Explore pathway"}
        </span>
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0F1533] text-white transition-transform duration-300 group-hover:scale-105">
          <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </>
  );

  if (variant === "page" && onSelect) {
    return (
      <button type="button" onClick={() => onSelect(pathway.id)} className={cardClassName}>
        {cardBody}
      </button>
    );
  }

  return (
    <Link to="/courses" className={cardClassName}>
      {cardBody}
    </Link>
  );
}

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
        "relative overflow-hidden bg-white",
        isPage ? "py-8 sm:py-10 md:py-12" : "border-t border-border/30 py-10 sm:py-12 md:py-16"
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(91,76,245,0.06),transparent_55%)]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-[#F7F8FC] px-4 py-1.5 text-sm font-medium text-primary">
            Learning Pathways
          </span>
        </Reveal>

        <Reveal delay={0.06} className="mt-4 max-w-2xl">
          <h2 className="font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Find your learning pathway
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg">
            From K–12 foundations to college credentials and career growth — pick the track that
            fits where you are today.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5">
          {PATHWAY_LEVELS.map((pathway, i) => (
            <Reveal key={pathway.id} delay={0.08 + i * 0.06}>
              <PathwayCard
                pathway={pathway}
                index={i}
                variant={variant}
                selected={selectedLevel === pathway.id}
                onSelect={onSelectPathway}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

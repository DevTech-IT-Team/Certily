import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Clock, Radio } from "lucide-react";
import { CampusBuildingHeader } from "@/components/campus/CampusBuildingHeader";
import { Section } from "@/components/Section";
import heroFeatured from "@/assets/hero.png";
import heroThumb from "@/assets/heroimage.png";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Newsroom — Certily AI Campus" },
      { name: "description", content: "AI news, industry updates, and explainers connecting today's trends to Certily certifications." },
    ],
  }),
  component: News,
});

/** Curated Unsplash-style URLs (stable IDs) + local assets for offline-friendly hero art. */
const ARTICLES = [
  {
    tag: "Research",
    t: "AI Campus Atlas: an adaptive curriculum engine for personalized learning paths",
    d: "Jan 12, 2026",
    x: "How we built a model that re-plans your week based on what you actually learned.",
    img: heroFeatured,
  },
  {
    tag: "Product",
    t: "GPU Lab now supports H100 clusters for capstone projects",
    d: "Feb 04, 2026",
    x: "Bigger experiments, faster iteration, smaller bills.",
    img: heroThumb,
  },
  {
    tag: "Community",
    t: "Cohort 2026 enrollments cross 10,000 learners worldwide",
    d: "Mar 18, 2026",
    x: "From São Paulo to Seoul — the most diverse cohort yet.",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
  },
  {
    tag: "Industry",
    t: "How Fortune 500s are upskilling 50,000 employees on AI Campus",
    d: "Apr 02, 2026",
    x: "Inside the enterprise rollouts powering AI literacy at scale.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop",
  },
  {
    tag: "Research",
    t: "Open-sourcing our autograding LLM evaluator",
    d: "Apr 22, 2026",
    x: "A reproducible benchmark for grading code, math, and writing tasks.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&auto=format&fit=crop",
  },
  {
    tag: "Events",
    t: "Recap: AI Campus Summit 2026 — 14 talks you can't miss",
    d: "May 09, 2026",
    x: "From frontier labs to indie builders — what we learned in San Francisco.",
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop",
  },
] as const;

function NewsTicker() {
  const segmentRow = (suffix: string) =>
    ARTICLES.map((a) => (
      <span key={`${a.t}-${suffix}`} className="shrink-0 text-zinc-200">
        <span className="text-red-400/90">{a.tag}</span>
        <span className="text-zinc-500"> · </span>
        <span className="normal-case tracking-normal text-zinc-100">{a.t}</span>
        <span className="mx-6 text-zinc-600">|</span>
      </span>
    ));
  return (
    <div className="border-y border-red-900/25 bg-zinc-950 py-2.5 text-zinc-100 dark:border-red-500/20">
      <div className="overflow-hidden">
        <div className="flex w-max animate-news-ticker font-mono text-xs font-semibold uppercase tracking-wide">
          <div className="flex shrink-0 items-center pr-8">{segmentRow("a")}</div>
          <div className="flex shrink-0 items-center pr-8" aria-hidden="true">
            {segmentRow("b")}
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}

function News() {
  const [lead, ...rest] = ARTICLES;
  const rail = rest.slice(0, 2);
  const grid = rest.slice(2);

  return (
    <>
      <CampusBuildingHeader route="/news" />

      <NewsTicker />

      <div className="relative border-t border-border/60 bg-muted/35 dark:border-white/10 dark:bg-muted/10">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-[0.4] dark:opacity-15" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-10" />

        <Section spacing="tight" className="relative z-[1] !py-8 md:!py-10">
          <div className="mx-auto mb-6 flex max-w-6xl flex-col gap-3 rounded-xl border border-border/70 bg-background/85 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-card/50 sm:flex-row sm:items-center sm:justify-between md:px-5">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60 opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" />
              </span>
              <Radio className="h-4 w-4 text-red-600 dark:text-red-500" aria-hidden />
              <span className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
                Live desk
              </span>
              <span className="hidden text-muted-foreground sm:inline">·</span>
              <span className="hidden text-xs text-muted-foreground sm:inline">Wire copy filed continuously</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Clock className="h-3.5 w-3.5 shrink-0" aria-hidden />
              <span>Broadcast window · May 12, 2026 · 06:00 UTC</span>
            </div>
          </div>

          <div className="mx-auto grid max-w-6xl gap-5 lg:grid-cols-3 lg:gap-6">
            <a
              href="#"
              className="group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-md dark:border-white/10 lg:col-span-2"
            >
              <div className="relative aspect-[2/1] max-h-[min(22rem,42vw)] w-full overflow-hidden bg-muted sm:aspect-[21/9]">
                <ArticleImage
                  src={lead.img as string}
                  alt={lead.t}
                  className="absolute inset-0 opacity-95 group-hover:opacity-100"
                />
                {/* Dark scrim so copy stays readable on any photo (e.g. Atlas / hero art). */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/35 to-transparent pt-12 md:pt-20" />
                <div className="absolute bottom-0 left-0 right-0 z-20 p-5 md:p-7">
                  <div className="inline-flex rounded-md bg-red-600 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                    Top story
                  </div>
                  <div className="mt-2 text-xs font-medium text-zinc-200">
                    {lead.d} · {lead.tag}
                  </div>
                  <h2 className="font-display mt-1 text-balance text-xl font-bold leading-tight tracking-tight text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.85)] md:text-2xl lg:text-3xl">
                    {lead.t}
                  </h2>
                  <p className="mt-2 line-clamp-2 max-w-3xl text-sm leading-relaxed text-zinc-100/95 md:text-base">
                    {lead.x}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-300 [text-shadow:0_1px_2px_rgb(0_0_0/0.75)] group-hover:text-sky-200">
                    Continue <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </div>
              </div>
            </a>

            <div className="flex flex-col gap-4">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground">
                Wire updates
              </p>
              {rail.map((a) => (
                <a
                  href="#"
                  key={a.t}
                  className="group flex gap-3 overflow-hidden rounded-2xl border border-border/70 bg-background/80 p-3 shadow-sm transition hover:border-primary/30 hover:shadow-md dark:border-white/10 dark:bg-card/60"
                >
                  <div className="relative h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-muted">
                    <ArticleImage src={a.img as string} alt={a.t} />
                  </div>
                  <div className="min-w-0 flex-1 py-0.5">
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {a.tag} · {a.d}
                    </div>
                    <h3 className="mt-1 font-display text-sm font-semibold leading-snug text-foreground group-hover:text-primary">
                      {a.t}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>

        <Section spacing="tight" className="relative z-[1] !pt-0 !pb-10 md:!pb-12">
          <div className="mx-auto max-w-6xl">
            <div className="mb-4 flex items-end justify-between gap-3 border-b border-border/60 pb-3 dark:border-white/10">
              <h2 className="font-display text-lg font-bold tracking-tight md:text-xl">More headlines</h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Field desk</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {grid.map((a) => (
                <a
                  href="#"
                  key={a.t}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md dark:border-white/10 dark:bg-card/55"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                    <ArticleImage src={a.img as string} alt={a.t} />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 transition group-hover:opacity-100 dark:from-zinc-950/70" />
                  </div>
                  <div className="flex flex-1 flex-col p-4">
                    <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                      {a.d} · {a.tag}
                    </div>
                    <h3 className="font-display mt-1.5 flex-1 text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                      {a.t}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{a.x}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                      Read <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

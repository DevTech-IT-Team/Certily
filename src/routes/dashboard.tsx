import { createFileRoute } from "@tanstack/react-router";
import {
  BarChart3,
  Brain,
  Calendar,
  Trophy,
  Flame,
  BookOpen,
  Zap,
  Cpu,
  Code2,
  Activity,
  ArrowUpRight,
} from "lucide-react";
import { EnrollGate } from "@/components/campus/EnrollGate";
import { canAccessBuilding } from "@/lib/enrollment";
import { CampusBuildingHeader } from "@/components/campus/CampusBuildingHeader";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Mission Control — Certily AI Campus" },
      { name: "description", content: "Student and parent dashboard for progress, assignments, certificates, and events." },
    ],
  }),
  component: Dashboard,
});

function panelClass() {
  return "rounded-2xl border border-border/70 bg-background/80 p-5 shadow-sm dark:border-white/10 dark:bg-card/55 md:p-6";
}

function Dashboard() {
  if (!canAccessBuilding("enrolled")) {
    return (
      <EnrollGate
        route="/dashboard"
        buildingName="Mission Control"
        description="Your student and parent dashboard — progress, assignments, certificates, payments, and events."
        illyMessage="Mission Control keeps you and your parents in the loop — I'll send reminders for quizzes and capstones!"
      />
    );
  }

  return (
    <>
      <CampusBuildingHeader route="/dashboard" />

      <div className="relative border-t border-border/60 bg-muted/35 dark:border-white/10 dark:bg-muted/10">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-[0.4] dark:opacity-15" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-10" />

        <Section spacing="tight" className="relative z-[1] !py-8 md:!py-10">
          <div className="mx-auto max-w-6xl space-y-6">
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
              {[
                { i: Flame, k: "27", l: "Day streak", c: "from-orange-400 to-pink-500" },
                { i: Trophy, k: "12", l: "Certificates", c: "from-yellow-400 to-orange-500" },
                { i: BookOpen, k: "48", l: "Courses done", c: "from-cyan-400 to-blue-500" },
                { i: Zap, k: "1,820", l: "XP this month", c: "from-purple-400 to-pink-500" },
              ].map((s) => (
                <div
                  key={s.l}
                  className={`${panelClass()} transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.c} text-white shadow-glow`}
                  >
                    <s.i className="h-5 w-5" aria-hidden />
                  </div>
                  <div className="mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl">{s.k}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </div>

            <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
              <div className={`${panelClass()} lg:col-span-2`}>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="flex items-center gap-2 font-display text-base font-semibold md:text-lg">
                      <Activity className="h-4 w-4 text-primary" aria-hidden />
                      Learning activity
                    </h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      Last 30 days · <span className="font-medium text-foreground">+24%</span> vs prior month
                    </p>
                  </div>
                </div>
                <div className="mt-5 flex h-48 items-end gap-1.5 rounded-xl bg-muted/40 p-3 dark:bg-muted/15 sm:gap-2">
                  {Array.from({ length: 30 }).map((_, i) => {
                    const h = 25 + ((i * 7 + 13) % 70);
                    return (
                      <div
                        key={i}
                        className="flex-1 rounded-t bg-brand-gradient opacity-80 transition hover:opacity-100"
                        style={{ height: `${h}%` }}
                      />
                    );
                  })}
                </div>
              </div>

              <div className={panelClass()}>
                <h3 className="flex items-center gap-2 font-display text-base font-semibold md:text-lg">
                  <Brain className="h-4 w-4 text-primary" aria-hidden />
                  Current path
                </h3>
                <div className="mt-2 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">LLM Engineer</div>
                <div className="mt-5 space-y-3">
                  {(
                    [
                      ["Foundations", 100],
                      ["Transformers", 100],
                      ["RAG Systems", 72],
                      ["Fine-tuning", 38],
                      ["Capstone", 0],
                    ] as const
                  ).map(([n, v]) => (
                    <div key={n}>
                      <div className="mb-1 flex justify-between text-xs">
                        <span className="text-muted-foreground">{n}</span>
                        <span className="font-semibold tabular-nums">{v}%</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted dark:bg-muted/40">
                        <div className="h-full bg-brand-gradient" style={{ width: `${v}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-5 lg:grid-cols-3 lg:gap-6">
              <div className={panelClass()}>
                <h3 className="flex items-center gap-2 font-display text-base font-semibold">
                  <Calendar className="h-4 w-4 text-primary" aria-hidden />
                  Upcoming sessions
                </h3>
                <ul className="mt-4 divide-y divide-border/60 dark:divide-white/10">
                  {(
                    [
                      ["Transformers Deep Dive", "Tue · 6:00 PM"],
                      ["RAG in Production", "Thu · 7:30 PM"],
                      ["MLOps Office Hours", "Fri · 5:00 PM"],
                    ] as const
                  ).map(([t, d]) => (
                    <li key={t}>
                      <button
                        type="button"
                        className="flex w-full items-center justify-between gap-3 py-3 text-left transition hover:bg-muted/50 dark:hover:bg-muted/15"
                      >
                        <div>
                          <div className="text-sm font-medium text-foreground">{t}</div>
                          <div className="text-xs text-muted-foreground">{d}</div>
                        </div>
                        <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground" aria-hidden />
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={panelClass()}>
                <h3 className="flex items-center gap-2 font-display text-base font-semibold">
                  <BarChart3 className="h-4 w-4 text-primary" aria-hidden />
                  Recommended for you
                </h3>
                <ul className="mt-4 space-y-2">
                  {(
                    [
                      [Cpu, "Vision Transformers"],
                      [Code2, "Agentic Workflows"],
                      [Brain, "Reinforcement Learning"],
                    ] as const
                  ).map(([Icon, label]) => (
                    <li key={label}>
                      <button
                        type="button"
                        className="flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-muted/50 dark:hover:bg-muted/15"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted dark:bg-muted/40">
                          <Icon className="h-4 w-4 text-primary" aria-hidden />
                        </div>
                        <span className="text-sm font-medium text-foreground">{label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div className={panelClass()}>
                <h3 className="font-display text-base font-semibold">Community pulse</h3>
                <p className="mt-0.5 text-xs text-muted-foreground">Live feed from your cohort (preview)</p>
                <ul className="mt-4 space-y-3">
                  {[
                    { n: "Aarav", a: "shipped a RAG demo", t: "2m" },
                    { n: "Lina", a: "earned the LLM badge", t: "12m" },
                    { n: "Daniel", a: "started Capstone", t: "1h" },
                    { n: "Mei", a: "answered 4 threads", t: "3h" },
                  ].map((c) => (
                    <li key={c.n} className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-sm">
                        {c.n[0]}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm leading-snug">
                          <span className="font-semibold text-foreground">{c.n}</span>{" "}
                          <span className="text-muted-foreground">{c.a}</span>
                        </p>
                        <p className="mt-0.5 text-[11px] text-muted-foreground">{c.t} ago</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

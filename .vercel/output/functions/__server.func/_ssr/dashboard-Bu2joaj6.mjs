import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EnrollGate } from "./EnrollGate-DSbsVLfK.mjs";
import { c as canAccessBuilding } from "./router-CWfipgwJ.mjs";
import { C as CampusBuildingHeader } from "./CampusBuildingHeader-Ddi2Fln1.mjs";
import { S as Section } from "./Section-mYe9laY8.mjs";
import { F as Flame, l as Trophy, B as BookOpen, Z as Zap, m as Activity, n as Brain, j as Calendar, o as ArrowUpRight, p as ChartColumn, q as Cpu, r as CodeXml } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "./IllyAvatar-DM1qrzDX.mjs";
import "../_libs/gsap.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function panelClass() {
  return "rounded-2xl border border-border/70 bg-background/80 p-5 shadow-sm dark:border-white/10 dark:bg-card/55 md:p-6";
}
function Dashboard() {
  if (!canAccessBuilding("enrolled")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollGate, { route: "/dashboard", buildingName: "Mission Control", description: "Your student and parent dashboard — progress, assignments, certificates, payments, and events.", illyMessage: "Mission Control keeps you and your parents in the loop — I'll send reminders for quizzes and capstones!" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CampusBuildingHeader, { route: "/dashboard" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-t border-border/60 bg-muted/35 dark:border-white/10 dark:bg-muted/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-mesh opacity-[0.4] dark:opacity-15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", className: "relative z-[1] !py-8 md:!py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl space-y-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4", children: [{
          i: Flame,
          k: "27",
          l: "Day streak",
          c: "from-orange-400 to-pink-500"
        }, {
          i: Trophy,
          k: "12",
          l: "Certificates",
          c: "from-yellow-400 to-orange-500"
        }, {
          i: BookOpen,
          k: "48",
          l: "Courses done",
          c: "from-cyan-400 to-blue-500"
        }, {
          i: Zap,
          k: "1,820",
          l: "XP this month",
          c: "from-purple-400 to-pink-500"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${panelClass()} transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.c} text-white shadow-glow`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.i, { className: "h-5 w-5", "aria-hidden": true }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-2xl font-bold tracking-tight sm:text-3xl", children: s.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.l })
        ] }, s.l)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-3 lg:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `${panelClass()} lg:col-span-2`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap items-center justify-between gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 font-display text-base font-semibold md:text-lg", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "h-4 w-4 text-primary", "aria-hidden": true }),
                "Learning activity"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-xs text-muted-foreground", children: [
                "Last 30 days · ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "+24%" }),
                " vs prior month"
              ] })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex h-48 items-end gap-1.5 rounded-xl bg-muted/40 p-3 dark:bg-muted/15 sm:gap-2", children: Array.from({
              length: 30
            }).map((_, i) => {
              const h = 25 + (i * 7 + 13) % 70;
              return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 rounded-t bg-brand-gradient opacity-80 transition hover:opacity-100", style: {
                height: `${h}%`
              } }, i);
            }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 font-display text-base font-semibold md:text-lg", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-4 w-4 text-primary", "aria-hidden": true }),
              "Current path"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl", children: "LLM Engineer" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 space-y-3", children: [["Foundations", 100], ["Transformers", 100], ["RAG Systems", 72], ["Fine-tuning", 38], ["Capstone", 0]].map(([n, v]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-1 flex justify-between text-xs", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: n }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-semibold tabular-nums", children: [
                  v,
                  "%"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 overflow-hidden rounded-full bg-muted dark:bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-brand-gradient", style: {
                width: `${v}%`
              } }) })
            ] }, n)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-3 lg:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 font-display text-base font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-4 w-4 text-primary", "aria-hidden": true }),
              "Upcoming sessions"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 divide-y divide-border/60 dark:divide-white/10", children: [["Transformers Deep Dive", "Tue · 6:00 PM"], ["RAG in Production", "Thu · 7:30 PM"], ["MLOps Office Hours", "Fri · 5:00 PM"]].map(([t, d]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "flex w-full items-center justify-between gap-3 py-3 text-left transition hover:bg-muted/50 dark:hover:bg-muted/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", children: t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: d })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 shrink-0 text-muted-foreground", "aria-hidden": true })
            ] }) }, t)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "flex items-center gap-2 font-display text-base font-semibold", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChartColumn, { className: "h-4 w-4 text-primary", "aria-hidden": true }),
              "Recommended for you"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: [[Cpu, "Vision Transformers"], [CodeXml, "Agentic Workflows"], [Brain, "Reinforcement Learning"]].map(([Icon, label]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "flex w-full items-center gap-3 rounded-xl p-3 text-left transition hover:bg-muted/50 dark:hover:bg-muted/15", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted dark:bg-muted/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4 text-primary", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-medium text-foreground", children: label })
            ] }) }, label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: panelClass(), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold", children: "Community pulse" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-xs text-muted-foreground", children: "Live feed from your cohort (preview)" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3", children: [{
              n: "Aarav",
              a: "shipped a RAG demo",
              t: "2m"
            }, {
              n: "Lina",
              a: "earned the LLM badge",
              t: "12m"
            }, {
              n: "Daniel",
              a: "started Capstone",
              t: "1h"
            }, {
              n: "Mei",
              a: "answered 4 threads",
              t: "3h"
            }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-sm", children: c.n[0] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm leading-snug", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: c.n }),
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: c.a })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-[11px] text-muted-foreground", children: [
                  c.t,
                  " ago"
                ] })
              ] })
            ] }, c.n)) })
          ] })
        ] })
      ] }) })
    ] })
  ] });
}
export {
  Dashboard as component
};

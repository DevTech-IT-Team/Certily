import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-B3puCHxZ.mjs";
import { h as heroImg } from "./hero-BNt7gh-9.mjs";
import { R as Radio, c as Clock, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const heroThumb = "/assets/heroimage-DkrryCVQ.png";
const ARTICLES = [{
  tag: "Research",
  t: "AI Campus Atlas: an adaptive curriculum engine for personalized learning paths",
  d: "Jan 12, 2026",
  x: "How we built a model that re-plans your week based on what you actually learned.",
  img: heroImg
}, {
  tag: "Product",
  t: "GPU Lab now supports H100 clusters for capstone projects",
  d: "Feb 04, 2026",
  x: "Bigger experiments, faster iteration, smaller bills.",
  img: heroThumb
}, {
  tag: "Community",
  t: "Cohort 2026 enrollments cross 10,000 learners worldwide",
  d: "Mar 18, 2026",
  x: "From São Paulo to Seoul — the most diverse cohort yet.",
  img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop"
}, {
  tag: "Industry",
  t: "How Fortune 500s are upskilling 50,000 employees on AI Campus",
  d: "Apr 02, 2026",
  x: "Inside the enterprise rollouts powering AI literacy at scale.",
  img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop"
}, {
  tag: "Research",
  t: "Open-sourcing our autograding LLM evaluator",
  d: "Apr 22, 2026",
  x: "A reproducible benchmark for grading code, math, and writing tasks.",
  img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80&auto=format&fit=crop"
}, {
  tag: "Events",
  t: "Recap: AI Campus Summit 2026 — 14 talks you can't miss",
  d: "May 09, 2026",
  x: "From frontier labs to indie builders — what we learned in San Francisco.",
  img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80&auto=format&fit=crop"
}];
function NewsTicker() {
  const segmentRow = (suffix) => ARTICLES.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "shrink-0 text-zinc-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400/90", children: a.tag }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-zinc-500", children: " · " }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "normal-case tracking-normal text-zinc-100", children: a.t }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-6 text-zinc-600", children: "|" })
  ] }, `${a.t}-${suffix}`));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-y border-red-900/25 bg-zinc-950 py-2.5 text-zinc-100 dark:border-red-500/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-max animate-news-ticker font-mono text-xs font-semibold uppercase tracking-wide", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 items-center pr-8", children: segmentRow("a") }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 items-center pr-8", "aria-hidden": "true", children: segmentRow("b") })
  ] }) }) });
}
function ArticleImage({
  src,
  alt,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt, className: `h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${className}`, loading: "lazy", decoding: "async" });
}
function News() {
  const [lead, ...rest] = ARTICLES;
  const rail = rest.slice(0, 2);
  const grid = rest.slice(2);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { className: "pb-5 md:pb-6", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "AI Campus ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "News Station" })
    ] }), description: "Signal over noise — research, product, and community wires from the desk, refreshed through the day." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(NewsTicker, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-t border-border/60 bg-muted/35 dark:border-white/10 dark:bg-muted/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-mesh opacity-[0.4] dark:opacity-15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { spacing: "tight", className: "relative z-[1] !py-8 md:!py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-6 flex max-w-6xl flex-col gap-3 rounded-xl border border-border/70 bg-background/85 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-card/50 sm:flex-row sm:items-center sm:justify-between md:px-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500/60 opacity-75" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2.5 w-2.5 rounded-full bg-red-600" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-4 w-4 text-red-600 dark:text-red-500", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs font-semibold uppercase tracking-[0.2em] text-foreground", children: "Live desk" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-muted-foreground sm:inline", children: "·" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden text-xs text-muted-foreground sm:inline", children: "Wire copy filed continuously" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 shrink-0", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Broadcast window · May 12, 2026 · 06:00 UTC" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-5 lg:grid-cols-3 lg:gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "group relative overflow-hidden rounded-3xl border border-border/80 bg-card shadow-md dark:border-white/10 lg:col-span-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[2/1] max-h-[min(22rem,42vw)] w-full overflow-hidden bg-muted sm:aspect-[21/9]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleImage, { src: lead.img, alt: lead.t, className: "absolute inset-0 opacity-95 group-hover:opacity-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/35 to-transparent pt-12 md:pt-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 z-20 p-5 md:p-7", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-md bg-red-600 px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider text-white shadow-sm", children: "Top story" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-xs font-medium text-zinc-200", children: [
                lead.d,
                " · ",
                lead.tag
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display mt-1 text-balance text-xl font-bold leading-tight tracking-tight text-white [text-shadow:0_1px_2px_rgb(0_0_0/0.85)] md:text-2xl lg:text-3xl", children: lead.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-2 max-w-3xl text-sm leading-relaxed text-zinc-100/95 md:text-base", children: lead.x }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-300 [text-shadow:0_1px_2px_rgb(0_0_0/0.75)] group-hover:text-sky-200", children: [
                "Continue ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": true })
              ] })
            ] })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-muted-foreground", children: "Wire updates" }),
            rail.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group flex gap-3 overflow-hidden rounded-2xl border border-border/70 bg-background/80 p-3 shadow-sm transition hover:border-primary/30 hover:shadow-md dark:border-white/10 dark:bg-card/60", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-24 w-28 shrink-0 overflow-hidden rounded-xl bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleImage, { src: a.img, alt: a.t }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 py-0.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground", children: [
                  a.tag,
                  " · ",
                  a.d
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-display text-sm font-semibold leading-snug text-foreground group-hover:text-primary", children: a.t })
              ] })
            ] }, a.t))
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", className: "relative z-[1] !pt-0 !pb-10 md:!pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-end justify-between gap-3 border-b border-border/60 pb-3 dark:border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold tracking-tight md:text-xl", children: "More headlines" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Field desk" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5", children: grid.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md dark:border-white/10 dark:bg-card/55", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] overflow-hidden bg-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArticleImage, { src: a.img, alt: a.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-background/50 to-transparent opacity-0 transition group-hover:opacity-100 dark:from-zinc-950/70" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground", children: [
              a.d,
              " · ",
              a.tag
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display mt-1.5 flex-1 text-base font-semibold leading-snug text-foreground group-hover:text-primary", children: a.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 line-clamp-2 text-sm text-muted-foreground", children: a.x }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-3 inline-flex items-center gap-1 text-xs font-semibold text-primary", children: [
              "Read ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ] })
          ] })
        ] }, a.t)) })
      ] }) })
    ] })
  ] });
}
export {
  News as component
};

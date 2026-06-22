import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-mYe9laY8.mjs";
import { i as CalendarDays, j as Calendar, k as MapPin, U as Users, g as ArrowRight } from "../_libs/lucide-react.mjs";
import "./router-CWfipgwJ.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/gsap.mjs";
const EVENTS = [{
  t: "AI Campus Summit 2026",
  date: "Sep 18 – 20",
  loc: "San Francisco · Hybrid",
  tag: "Conference",
  seats: 1200,
  img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&auto=format&fit=crop",
  blurb: "Keynotes, labs, and hallway tracks with builders from frontier labs and indie teams."
}, {
  t: "Hands-on: Fine-tuning Llama 3",
  date: "Jun 04 · 6 PM",
  loc: "Online",
  tag: "Workshop",
  seats: 300,
  img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&auto=format&fit=crop",
  blurb: "Walk through adapters, eval harnesses, and safe defaults in a live notebook."
}, {
  t: "AMA with Dr. Lina Park (DeepMind)",
  date: "Jun 11 · 7 PM",
  loc: "Online",
  tag: "AMA",
  seats: 800,
  img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80&auto=format&fit=crop",
  blurb: "Research directions, hiring, and what actually ships in production RL."
}, {
  t: "Global Hackathon: Build with Agents",
  date: "Jul 02 – 04",
  loc: "Online · Worldwide",
  tag: "Hackathon",
  seats: 5e3,
  img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
  blurb: "48-hour sprint with mentors, GPU credits, and demo day bounties."
}, {
  t: "Enterprise AI Roundtable",
  date: "Jul 22 · 4 PM",
  loc: "London",
  tag: "Roundtable",
  seats: 60,
  img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop",
  blurb: "Closed-door session for leaders rolling out AI literacy at scale."
}, {
  t: "Research Reading Group: Mamba",
  date: "Aug 08 · 5 PM",
  loc: "Online",
  tag: "Study Group",
  seats: 200,
  img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80&auto=format&fit=crop",
  blurb: "Paper walkthrough + office hours with the course staff."
}];
function EventImage({
  src,
  alt,
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt, className: `h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${className}`, loading: "lazy", decoding: "async" });
}
function Events() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { className: "pb-5 md:pb-6", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Where the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "AI community" }),
      " meets"
    ] }), description: "Live cohorts, hackathons, AMAs, and the flagship AI Campus Summit — on campus and around the world." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-t border-border/60 bg-muted/35 dark:border-white/10 dark:bg-muted/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-mesh opacity-[0.4] dark:opacity-15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { spacing: "tight", className: "relative z-[1] !py-8 md:!py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-6 flex max-w-6xl flex-col gap-2 rounded-xl border border-border/70 bg-background/85 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-card/50 sm:flex-row sm:items-center sm:justify-between md:px-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5 text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CalendarDays, { className: "h-5 w-5 shrink-0 text-primary", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground", children: "Events calendar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Summer–Fall 2026 · hybrid & online" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-xs leading-relaxed text-muted-foreground sm:text-right", children: "RSVP from your dashboard. Summit passes include lab credits; workshops are first-come." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-end justify-between gap-3 border-b border-border/60 pb-3 dark:border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold tracking-tight md:text-xl", children: "All sessions" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] uppercase tracking-widest text-muted-foreground", children: "Open RSVP" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 lg:items-stretch", children: EVENTS.map((e) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "flex min-h-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://lmsathena.com/login", target: "_blank", rel: "noopener noreferrer", className: "group flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md dark:border-white/10 dark:bg-card/55", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(EventImage, { src: e.img, alt: e.t, className: "absolute inset-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-3 top-3 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-foreground shadow-sm backdrop-blur-sm dark:bg-zinc-950/85 dark:text-zinc-100", children: e.tag })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-h-0 flex-1 flex-col p-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-base font-semibold leading-snug text-foreground group-hover:text-primary", children: e.t }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 min-h-[4.5rem] flex-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground", children: e.blurb }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 space-y-1.5 text-xs text-muted-foreground", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 shrink-0 text-primary", "aria-hidden": true }),
                  e.date
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 shrink-0 text-primary", "aria-hidden": true }),
                  e.loc
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5 shrink-0 text-primary", "aria-hidden": true }),
                  e.seats.toLocaleString(),
                  " seats"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "mt-auto inline-flex items-center gap-1 border-t border-border/50 pt-4 text-sm font-semibold text-primary dark:border-white/10", children: [
                "Reserve seat",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5", "aria-hidden": true })
              ] })
            ] })
          ] }) }, e.t)) })
        ] })
      ] })
    ] })
  ] });
}
export {
  Events as component
};

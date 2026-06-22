import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-mYe9laY8.mjs";
import { B as BookOpen, S as Search, h as ChevronDown } from "../_libs/lucide-react.mjs";
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
const GROUPS = [{
  g: "Getting Started",
  items: [["Do I need prior coding experience?", "Not at all. Our Foundations track gets you ready in 4 weeks before you join the main cohort."], ["How long does each course take?", "Most courses run 6–14 weeks with about 6–8 hours of work per week."], ["Can I learn at my own pace?", "Yes. Every cohort is also available in self-paced mode, with the same labs and content."]]
}, {
  g: "Certifications",
  items: [["Are certifications industry-recognized?", "Yes. We co-issue certifications with leading AI labs and Fortune 500 partners."], ["How are certifications verified?", "Every cert has a unique blockchain-verifiable URL employers can validate instantly."]]
}, {
  g: "AI Lab",
  items: [["What does the AI Lab include?", "Cloud GPU access (A100/H100), Jupyter, autograded notebooks, and project templates."], ["Do I need a powerful computer?", "No. All compute happens in the cloud — any modern browser works."]]
}, {
  g: "Billing & Enterprise",
  items: [["Can my company sponsor me?", "Absolutely. We provide invoices, ROI reports, and an Enterprise plan with SSO."], ["Do you offer refunds?", "Yes. 14-day money-back guarantee on all individual plans, no questions asked."]]
}];
function FAQs() {
  const [q, setQ] = reactExports.useState("");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { className: "pb-5 md:pb-6", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "How can we ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "help?" })
    ] }), description: "Search the knowledge base or open a topic — answers are short and actionable." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-t border-border/60 bg-muted/35 dark:border-white/10 dark:bg-muted/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-mesh opacity-[0.4] dark:opacity-15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", className: "relative z-[1] !py-8 md:!py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8 rounded-xl border border-border/70 bg-background/85 p-4 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-card/50 md:p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-4 w-4 shrink-0 text-primary", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] font-bold uppercase tracking-[0.2em]", children: "Knowledge search" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: q, onChange: (e) => setQ(e.target.value), placeholder: "Search questions and answers…", className: "w-full rounded-xl border border-border bg-background py-3.5 pl-11 pr-4 text-sm shadow-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-primary/35 dark:border-white/10 dark:bg-card" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-5", children: GROUPS.map((grp) => {
          const items = grp.items.filter(([qq, aa]) => (qq + aa).toLowerCase().includes(q.toLowerCase()));
          if (items.length === 0) return null;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm dark:border-white/10 dark:bg-card/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/60 bg-muted/40 px-5 py-4 dark:border-white/10 dark:bg-muted/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold tracking-tight text-foreground md:text-xl", children: grp.g }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-xs text-muted-foreground", children: [
                items.length,
                " answer",
                items.length === 1 ? "" : "s",
                " in this topic"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60 dark:divide-white/10", children: items.map(([qq, aa]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(FaqItem, { q: qq, a: aa }) }, qq)) })
          ] }, grp.g);
        }) }),
        !GROUPS.some((grp) => grp.items.some(([qq, aa]) => (qq + aa).toLowerCase().includes(q.toLowerCase()))) && q.trim().length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-8 rounded-xl border border-dashed border-border/80 py-10 text-center text-sm text-muted-foreground dark:border-white/15", children: [
          "No matches for “",
          q,
          "”. Try a shorter word like",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "billing" }),
          " or",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "GPU" }),
          "."
        ] })
      ] }) })
    ] })
  ] });
}
function FaqItem({
  q,
  a
}) {
  const [open, setOpen] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-transparent", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setOpen((v) => !v), className: "flex w-full items-start justify-between gap-4 px-5 py-4 text-left transition hover:bg-muted/50 dark:hover:bg-muted/15", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold leading-snug text-foreground", children: q }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: `mt-0.5 h-5 w-5 shrink-0 text-muted-foreground transition-transform ${open ? "rotate-180" : ""}`, "aria-hidden": true })
    ] }),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border/40 px-5 pb-4 pt-3 text-sm leading-relaxed text-muted-foreground animate-fade-up dark:border-white/10", children: a })
  ] });
}
export {
  FAQs as component
};

import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-B3puCHxZ.mjs";
import { c as Clock, U as Users, o as Star, A as ArrowRight } from "../_libs/lucide-react.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const COURSES = [{
  t: "Mastering Large Language Models",
  c: "NLP & LLMs",
  lvl: "Advanced",
  d: "12 weeks",
  s: 4.9,
  n: 2840,
  img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=720&q=72"
}, {
  t: "Generative AI from Scratch",
  c: "Generative AI",
  lvl: "Intermediate",
  d: "10 weeks",
  s: 4.8,
  n: 1920,
  img: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=720&q=72"
}, {
  t: "Production ML Engineering",
  c: "AI Engineering",
  lvl: "Advanced",
  d: "14 weeks",
  s: 4.9,
  n: 1450,
  img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=720&q=72"
}, {
  t: "Deep Learning Foundations",
  c: "Machine Learning",
  lvl: "Beginner",
  d: "8 weeks",
  s: 4.7,
  n: 5210,
  img: "https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&w=720&q=72"
}, {
  t: "Data Science with Python",
  c: "Data Science",
  lvl: "Beginner",
  d: "6 weeks",
  s: 4.8,
  n: 8120,
  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=72"
}, {
  t: "AI Safety & Alignment",
  c: "AI Safety",
  lvl: "Advanced",
  d: "9 weeks",
  s: 4.9,
  n: 760,
  img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=720&q=72"
}, {
  t: "Building RAG Applications",
  c: "NLP & LLMs",
  lvl: "Intermediate",
  d: "7 weeks",
  s: 4.8,
  n: 2040,
  img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=720&q=72"
}, {
  t: "Computer Vision Pro",
  c: "Machine Learning",
  lvl: "Advanced",
  d: "11 weeks",
  s: 4.7,
  n: 1320,
  img: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=720&q=72"
}, {
  t: "MLOps & Cloud Deployment",
  c: "AI Engineering",
  lvl: "Intermediate",
  d: "8 weeks",
  s: 4.8,
  n: 1680,
  img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=720&q=72"
}];
const CATEGORIES = ["All", "Generative AI", "Machine Learning", "Data Science", "AI Engineering", "NLP & LLMs", "AI Safety"];
function countInCategory(id) {
  if (id === "All") return COURSES.length;
  return COURSES.filter((x) => x.c === id).length;
}
function Courses() {
  const [cat, setCat] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => COURSES.filter((c) => cat === "All" || c.c === cat), [cat]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { className: "pb-4 md:pb-5", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Learn from the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "world's best" })
    ] }), description: "100+ premium courses, designed by industry leaders. Live cohorts and self-paced modes." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "!pt-3 !pb-14 md:!pt-4 md:!pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2", children: CATEGORIES.map((id) => {
        const active = cat === id;
        const n = countInCategory(id);
        const label = id === "All" ? "All courses" : id;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setCat(id), className: `shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${active ? "bg-primary text-primary-foreground shadow-sm" : "border border-border bg-muted/50 text-foreground hover:border-primary/30 hover:bg-muted dark:border-white/10 dark:bg-muted/30 dark:hover:bg-muted/50"}`, children: [
          label,
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: `ml-1.5 tabular-nums ${active ? "text-primary-foreground/80" : "text-muted-foreground"}`, children: [
            "(",
            n,
            ")"
          ] })
        ] }, id);
      }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Results" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          filtered.length,
          " of ",
          COURSES.length,
          " shown"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant dark:border-white/10 dark:bg-card/80", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-[5/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: "", className: "absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]", loading: "lazy", decoding: "async", sizes: "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs font-semibold text-primary", children: [
            c.c,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-muted-foreground", children: [
              " · ",
              c.lvl
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-semibold leading-snug text-foreground transition-colors group-hover:text-primary", children: c.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5", "aria-hidden": true }),
              c.d
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5", "aria-hidden": true }),
              c.n.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current text-primary", "aria-hidden": true }),
              c.s
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://lmsathena.com/login", target: "_blank", rel: "noopener noreferrer", className: "font-display mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold tracking-tight text-white shadow-elegant transition-transform hover:scale-[1.02] active:scale-[0.98]", children: [
            "Enrol",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 opacity-90", "aria-hidden": true })
          ] })
        ] })
      ] }, `${c.t}-${i}`)) }),
      filtered.length === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "py-16 text-center text-muted-foreground", children: "No courses in this category. Try another filter." })
    ] }) })
  ] });
}
export {
  Courses as component
};

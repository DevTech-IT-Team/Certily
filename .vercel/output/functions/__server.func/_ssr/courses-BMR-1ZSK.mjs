import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as CampusBuildingHeader } from "./CampusBuildingHeader-Ddi2Fln1.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { R as Reveal } from "./Reveal-CaTkfed9.mjs";
import { a as cn } from "./router-CWfipgwJ.mjs";
import { S as Section } from "./Section-mYe9laY8.mjs";
import { s as School, G as GraduationCap, t as Rocket, e as Briefcase, L as Lock, f as Clock, U as Users, u as Star, g as ArrowRight } from "../_libs/lucide-react.mjs";
import "./IllyAvatar-DM1qrzDX.mjs";
import "../_libs/gsap.mjs";
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
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const PATHWAY_LEVELS = [
  {
    id: "k12",
    label: "K–12 Learning Pathways",
    shortLabel: "K–12",
    description: "Foundational AI literacy, prerequisites, and credible starter certifications for students and parents — including MSA / McKinney Steam Academy programs.",
    focus: "launch",
    icon: School,
    outcomes: [
      "AI fundamentals & digital literacy",
      "Project-based enrichment",
      "Parent-supported learning modules",
      "MSA / Mechanism Academy tracks"
    ]
  },
  {
    id: "college",
    label: "College Learning Pathways",
    shortLabel: "College",
    description: "College-ready certification outcomes with practical projects, knowledge checks, and credentials for admissions and portfolios.",
    focus: "launch",
    icon: GraduationCap,
    outcomes: [
      "Entry-level outcome courses",
      "Capstone-ready skill tracks",
      "College application support value",
      "MSA college bridge programs"
    ]
  },
  {
    id: "professional",
    label: "Advanced Professional Pathways",
    shortLabel: "Professional",
    description: "Premium professional-grade tracks with industry validation — launching in a later phase after K–12 and college trust is established.",
    focus: "later",
    icon: Rocket,
    outcomes: [
      "Industry-validated topics",
      "Guest lectures & SME review",
      "Longer capstone-heavy formats",
      "Institutional partnerships"
    ]
  },
  {
    id: "career",
    label: "Career Growth Pathways",
    shortLabel: "Career",
    description: "Career advancement certifications for working professionals — introduced after the core school and college strategy matures.",
    focus: "later",
    icon: Briefcase,
    outcomes: [
      "Career-readiness outcomes",
      "Shareable LinkedIn credentials",
      "Mentor-supported progression",
      "High-ticket advanced offerings"
    ]
  }
];
const PATHWAY_COURSES = [
  {
    id: "ai-fundamentals-k12",
    title: "AI Fundamentals for Young Learners",
    level: "k12",
    category: "AI Literacy",
    duration: "6 weeks",
    rating: 4.9,
    learners: 2840,
    price: "$149",
    outcome: "Certified AI Explorer — portfolio-ready mini-project",
    preview: "Illy-led nuggets, parent guides, and safe AI tool exploration.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=720&q=72",
    featured: true
  },
  {
    id: "msa-steam-intro",
    title: "MSA Steam Academy — AI Starter Track",
    level: "k12",
    category: "MSA Programs",
    duration: "8 weeks",
    rating: 4.8,
    learners: 920,
    price: "$179",
    outcome: "MSA-aligned starter certification with guided capstone",
    preview: "Mechanism Academy curriculum maturing under K–12 strategy.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=720&q=72",
    featured: true
  },
  {
    id: "genai-teens",
    title: "Generative AI for Teens",
    level: "k12",
    category: "Generative AI",
    duration: "7 weeks",
    rating: 4.8,
    learners: 1920,
    price: "$169",
    outcome: "Responsible GenAI practitioner badge",
    preview: "Short videos, quizzes, and creative AI projects.",
    img: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=720&q=72"
  },
  {
    id: "college-ai-essentials",
    title: "College AI Essentials",
    level: "college",
    category: "College Prep",
    duration: "8 weeks",
    rating: 4.9,
    learners: 3210,
    price: "$199",
    outcome: "College-ready AI certification with shareable credential",
    preview: "Practical modules validated by industry need and student relevance.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=720&q=72",
    featured: true
  },
  {
    id: "data-science-college",
    title: "Data Science Foundations for College",
    level: "college",
    category: "Data Science",
    duration: "10 weeks",
    rating: 4.8,
    learners: 2100,
    price: "$219",
    outcome: "Applied data project for admissions portfolios",
    preview: "Knowledge checks, Illy mentorship, and capstone in AI Lab.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=72"
  },
  {
    id: "msa-college-bridge",
    title: "MSA College Bridge — AI Pathway",
    level: "college",
    category: "MSA Programs",
    duration: "9 weeks",
    rating: 4.7,
    learners: 640,
    price: "$199",
    outcome: "Bridge certification toward advanced college tracks",
    preview: "Connects K–12 MSA learning to college-level outcomes.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=720&q=72"
  },
  {
    id: "llm-professional",
    title: "Large Language Models — Professional Track",
    level: "professional",
    category: "NLP & LLMs",
    duration: "12 weeks",
    rating: 4.9,
    learners: 760,
    price: "$499",
    outcome: "Professional LLM practitioner certification",
    preview: "Coming in a later phase — industry SME validated.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=720&q=72"
  },
  {
    id: "mlops-pro",
    title: "Production ML Engineering",
    level: "professional",
    category: "AI Engineering",
    duration: "14 weeks",
    rating: 4.9,
    learners: 450,
    price: "$549",
    outcome: "Deploy-ready ML engineer credential",
    preview: "Capstone-heavy design with mentor feedback.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=720&q=72"
  },
  {
    id: "career-ai-leadership",
    title: "AI Leadership for Career Growth",
    level: "career",
    category: "Career Growth",
    duration: "10 weeks",
    rating: 4.8,
    learners: 320,
    price: "$399",
    outcome: "Executive AI literacy certificate",
    preview: "Later-phase career advancement pathway.",
    img: "https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=720&q=72"
  }
];
function coursesForLevel(level) {
  if (level === "all") return PATHWAY_COURSES;
  return PATHWAY_COURSES.filter((c) => c.level === level);
}
function countCoursesForLevel(level) {
  return coursesForLevel(level).length;
}
const CARD_STYLES = [
  {
    iconBg: "bg-[#5B4CF5]/10 text-[#5B4CF5]",
    ring: "group-hover:ring-[#5B4CF5]/20",
    selected: "border-[#5B4CF5]/35 ring-[#5B4CF5]/20 bg-white"
  },
  {
    iconBg: "bg-[#4CD1B0]/12 text-[#00A88A]",
    ring: "group-hover:ring-[#4CD1B0]/25",
    selected: "border-[#4CD1B0]/35 ring-[#4CD1B0]/20 bg-white"
  },
  {
    iconBg: "bg-[#6366F1]/10 text-[#6366F1]",
    ring: "group-hover:ring-[#6366F1]/20",
    selected: "border-[#6366F1]/35 ring-[#6366F1]/20 bg-white"
  },
  {
    iconBg: "bg-amber-100 text-amber-700",
    ring: "group-hover:ring-amber-200",
    selected: "border-amber-300/50 ring-amber-200/80 bg-white"
  }
];
function PathwayCard({
  pathway,
  index,
  variant,
  selected,
  onSelect
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
  const cardBody = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: cn(
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl sm:h-12 sm:w-12",
            style.iconBg
          ),
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", strokeWidth: 1.75 })
        }
      ),
      comingSoon ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800 ring-1 ring-amber-200/80", children: "Coming Soon" }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "shrink-0 rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-muted-foreground ring-1 ring-border/60", children: [
        courseCount,
        " courses"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-display text-xl font-bold leading-tight text-foreground sm:text-2xl", children: pathway.shortLabel }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 flex-1 text-sm leading-relaxed text-muted-foreground", children: pathway.description }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 flex flex-wrap gap-2", children: pathway.outcomes.slice(0, 2).map((outcome) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "li",
      {
        className: "rounded-full border border-border/70 bg-white px-2.5 py-1 text-[11px] font-medium text-foreground/80",
        children: outcome
      },
      outcome
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center justify-between border-t border-border/50 pt-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-primary", children: variant === "page" ? "View courses" : "Explore pathway" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 items-center justify-center rounded-full bg-[#0F1533] text-white transition-transform duration-300 group-hover:scale-105", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }) })
    ] })
  ] });
  if (variant === "page" && onSelect) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => onSelect(pathway.id), className: cardClassName, children: cardBody });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/courses", className: cardClassName, children: cardBody });
}
function LearningPathwaysSection({
  variant = "marketing",
  selectedLevel,
  onSelectPathway
}) {
  const isPage = variant === "page";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "pathways",
      "data-illy-section": "pathways",
      className: cn(
        "relative overflow-hidden bg-white",
        isPage ? "py-8 sm:py-10 md:py-12" : "border-t border-border/30 py-10 sm:py-12 md:py-16"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(91,76,245,0.06),transparent_55%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full border border-primary/15 bg-[#F7F8FC] px-4 py-1.5 text-sm font-medium text-primary", children: "Learning Pathways" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.06, className: "mt-4 max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]", children: "Find your learning pathway" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base leading-relaxed text-muted-foreground sm:text-lg", children: "From K–12 foundations to college credentials and career growth — pick the track that fits where you are today." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-4 sm:grid-cols-2 lg:gap-5", children: PATHWAY_LEVELS.map((pathway, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.08 + i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            PathwayCard,
            {
              pathway,
              index: i,
              variant,
              selected: selectedLevel === pathway.id,
              onSelect: onSelectPathway
            }
          ) }, pathway.id)) })
        ] })
      ]
    }
  );
}
function Courses() {
  const [level, setLevel] = reactExports.useState("k12");
  const filtered = reactExports.useMemo(() => coursesForLevel(level), [level]);
  const activeLevel = PATHWAY_LEVELS.find((l) => l.id === level);
  const handleSelectPathway = reactExports.useCallback((id) => {
    setLevel(id);
    requestAnimationFrame(() => {
      document.getElementById("course-catalog")?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CampusBuildingHeader, { route: "/courses" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LearningPathwaysSection, { variant: "page", selectedLevel: level, onSelectPathway: handleSelectPathway }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { id: "course-catalog", className: "!pt-6 !pb-14 md:!pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setLevel("all"), className: cn("rounded-full px-4 py-2 text-sm font-medium transition-colors", level === "all" ? "bg-primary text-white" : "border border-border bg-white text-foreground hover:border-primary/30"), children: [
          "All pathways (",
          countCoursesForLevel("all"),
          ")"
        ] }),
        PATHWAY_LEVELS.map((l) => {
          const Icon = l.icon;
          const active = level === l.id;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setLevel(l.id), className: cn("inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors", active ? "bg-primary text-white" : "border border-border bg-white text-foreground hover:border-primary/30"), children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }),
            l.shortLabel,
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "tabular-nums opacity-80", children: [
              "(",
              countCoursesForLevel(l.id),
              ")"
            ] }),
            l.focus === "later" && !active && /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3 opacity-50", "aria-hidden": true })
          ] }, l.id);
        })
      ] }),
      activeLevel && level !== "all" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-2xl border border-primary/15 bg-white p-4 sm:p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: activeLevel.label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: activeLevel.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 flex flex-wrap gap-2", children: activeLevel.outcomes.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-full border border-border/80 bg-[#FAFBFE] px-3 py-1 text-xs text-foreground/80", children: o }, o)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-between gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Course catalog" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground", children: [
          filtered.length,
          " pathway",
          filtered.length === 1 ? "" : "s",
          " shown"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: filtered.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[5/3] overflow-hidden bg-muted", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: c.img, alt: "", className: "absolute inset-0 h-full w-full object-cover object-center transition duration-500 group-hover:scale-[1.04]", loading: "lazy", decoding: "async" }),
          c.featured && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-3 top-3 rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold uppercase text-white", children: "Launch focus" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs font-semibold text-primary", children: [
              c.category,
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-muted-foreground", children: [
                " ",
                "· ",
                PATHWAY_LEVELS.find((l) => l.id === c.level)?.shortLabel
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-foreground", children: c.price })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1 font-semibold leading-snug text-foreground transition-colors group-hover:text-primary", children: c.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs leading-relaxed text-muted-foreground", children: c.preview }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-xs font-medium text-[#0F1533]/80", children: [
            "Outcome: ",
            c.outcome
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-center justify-between text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5", "aria-hidden": true }),
              c.duration
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-3.5 w-3.5", "aria-hidden": true }),
              c.learners.toLocaleString()
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current text-primary", "aria-hidden": true }),
              c.rating
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://lmsathena.com/login", target: "_blank", rel: "noopener noreferrer", className: "font-display mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gradient px-4 py-2.5 text-sm font-semibold tracking-tight text-white shadow-elegant transition-transform hover:scale-[1.02] active:scale-[0.98]", children: [
            "Preview & enroll",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 opacity-90", "aria-hidden": true })
          ] })
        ] })
      ] }, c.id)) })
    ] }) })
  ] });
}
export {
  Courses as component
};

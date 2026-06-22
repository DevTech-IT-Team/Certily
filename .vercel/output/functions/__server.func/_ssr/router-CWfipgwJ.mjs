import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { L as Lock, S as Search, X, M as Menu, G as GraduationCap, T as Twitter, a as Linkedin, Y as Youtube, B as BookOpen, b as Beaker, N as Newspaper, A as Award, c as LayoutDashboard, C as ChevronRight, d as Sparkles, U as Users, e as Briefcase } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-DOZvv31j.css";
const CAMPUS_BUILDINGS = [
  {
    id: "learning-pathways",
    name: "Learning Pathways",
    tagline: "Certification outcomes",
    description: "Browse K–12, college, and professional pathways with clear outcomes, previews, and enrollment options.",
    route: "/courses",
    access: "public",
    icon: GraduationCap,
    mapPosition: { top: "18%", left: "28%" },
    illyIntro: "Start here! Learning Pathways is where you explore certification courses — from K–12 fundamentals to college-level programs.",
    color: "#7B6CFF"
  },
  {
    id: "my-classroom",
    name: "My Classroom",
    tagline: "Your enrolled courses",
    description: "Video lessons, assignments, quizzes, discussions, and resources — unlocked after enrollment.",
    route: "/classroom",
    access: "enrolled",
    icon: BookOpen,
    mapPosition: { top: "62%", left: "26%" },
    illyIntro: "My Classroom is your guided learning space — lessons, nuggets, and progress tracking. Enroll to unlock it!",
    color: "#5B4FE0"
  },
  {
    id: "ai-lab",
    name: "AI Lab",
    tagline: "Capstone & projects",
    description: "Hands-on capstone projects, practice labs, AI tools workspace, and project submissions for enrolled learners.",
    route: "/ai-lab",
    access: "enrolled",
    icon: Beaker,
    mapPosition: { top: "16%", left: "72%" },
    illyIntro: "The AI Lab is where theory becomes real projects — capstones, templates, and guided builds. Members only!",
    color: "#4CD1B0"
  },
  {
    id: "newsroom",
    name: "Newsroom",
    tagline: "AI relevance & credibility",
    description: "Latest AI news, industry updates, and explainers that connect today's trends to Certily certifications.",
    route: "/news",
    access: "public",
    icon: Newspaper,
    mapPosition: { top: "32%", left: "76%" },
    illyIntro: "The Newsroom shows why our courses matter right now — AI news, trends, and parent-friendly explainers.",
    color: "#6366F1"
  },
  {
    id: "certification-hall",
    name: "AI Certification Hall",
    tagline: "Hall of Fame",
    description: "Certificates, badges, verification links, and achievement showcases after completing pathways.",
    route: "/certification-hall",
    access: "enrolled",
    icon: Award,
    mapPosition: { top: "72%", left: "50%" },
    illyIntro: "The Certification Hall celebrates your wins — verifiable certificates you can share with colleges and employers.",
    color: "#B8ABFF"
  },
  {
    id: "mission-control",
    name: "Mission Control",
    tagline: "Student & parent dashboard",
    description: "Track goals, assignments, capstone status, payments, events, and notifications in one control center.",
    route: "/dashboard",
    access: "enrolled",
    icon: LayoutDashboard,
    mapPosition: { top: "58%", left: "74%" },
    illyIntro: "Mission Control is your command center — progress, quizzes, certificates, and parent views all in one place.",
    color: "#0F1533"
  }
];
CAMPUS_BUILDINGS.filter((b) => b.access === "public");
const ENROLLED_AREAS = CAMPUS_BUILDINGS.filter((b) => b.access === "enrolled");
const CAMPUS_POSITIONING = {
  headline: "Your Campus.",
  subhead: "Your Future.",
  lead: "Self-paced learning, real AI projects, and a personal AI mentor to help you build skills that actually matter."
};
const AI_HALL = {
  id: "ai-hall",
  name: "AI Hall",
  tagline: "Free activities & engagement",
  description: "Mini-projects, demos, quiz challenges, webinars, and low-ticket AI activities — open to everyone.",
  route: "/ai-hall",
  access: "public",
  icon: Sparkles,
  color: "#4CD1B0",
  mapPosition: { top: "20%", left: "58%" },
  illyIntro: "AI Hall is our public playground — free activities, challenges, and events to explore AI before you enroll."
};
const CAMPUS_MAP_AREAS = [...CAMPUS_BUILDINGS, AI_HALL];
const EXPLORE_DESTINATIONS = [
  {
    id: "learning-pathways",
    name: "Learning Pathways",
    subtitle: "Browse certifications",
    route: "/courses",
    accent: "#5B4CF5"
  },
  {
    id: "ai-lab",
    name: "AI Lab",
    subtitle: "Capstone & projects",
    route: "/ai-lab",
    accent: "#4CD1B0"
  },
  {
    id: "newsroom",
    name: "Newsroom",
    subtitle: "AI news & trends",
    route: "/news",
    accent: "#6366F1"
  },
  {
    id: "classroom",
    name: "My Classroom",
    subtitle: "Your enrolled courses",
    route: "/classroom",
    accent: "#5B4FE0"
  }
];
const CAMPUS_PILLARS = [
  {
    title: "Learn",
    description: "Self-paced courses built for real skills.",
    icon: GraduationCap
  },
  {
    title: "Build",
    description: "Hands-on projects that build your portfolio.",
    icon: Beaker
  },
  {
    title: "Grow",
    description: "Track progress and unlock achievements.",
    icon: Award
  },
  {
    title: "Connect",
    description: "Join a community of future builders.",
    icon: Users
  },
  {
    title: "Get Opportunities",
    description: "Internships, research, and career pathways.",
    icon: Briefcase
  }
];
const CAMPUS_STATS = [
  { value: 400, suffix: "+", label: "Learners" },
  { value: 30, suffix: "+", label: "Learning Paths" },
  { value: 120, suffix: "+", label: "Projects Built" },
  { value: 200, suffix: "+", label: "Certificates Earned" }
];
const PARTNER_LOGOS = [
  "Microsoft",
  "Google",
  "NASA",
  "Stanford",
  "FRC",
  "NVIDIA"
];
function getCampusAreaByRoute(path) {
  if (path === AI_HALL.route) return AI_HALL;
  return CAMPUS_BUILDINGS.find((b) => b.route === path);
}
const DEMO_ENROLLED_KEY = "certily-demo-enrolled";
const ENROLLMENT_EVENT = "certily-enrollment-change";
function subscribe(onChange) {
  if (typeof window === "undefined") return () => {
  };
  const handler = () => onChange();
  window.addEventListener("storage", handler);
  window.addEventListener(ENROLLMENT_EVENT, handler);
  return () => {
    window.removeEventListener("storage", handler);
    window.removeEventListener(ENROLLMENT_EVENT, handler);
  };
}
function isEnrolled() {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(DEMO_ENROLLED_KEY) === "1";
}
function setDemoEnrolled(value) {
  if (typeof window === "undefined") return;
  if (value) window.localStorage.setItem(DEMO_ENROLLED_KEY, "1");
  else window.localStorage.removeItem(DEMO_ENROLLED_KEY);
  window.dispatchEvent(new Event(ENROLLMENT_EVENT));
}
function canAccessBuilding(access) {
  return access === "public" || isEnrolled();
}
function useEnrollment() {
  const enrolled = reactExports.useSyncExternalStore(
    subscribe,
    () => isEnrolled(),
    () => false
  );
  const toggleDemoEnrolled = reactExports.useCallback(() => {
    setDemoEnrolled(!isEnrolled());
  }, []);
  return { enrolled, setDemoEnrolled, toggleDemoEnrolled };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const LMS_LOGIN = "https://lmsathena.com/login";
const NAV_LINKS = [
  { to: "/courses", label: "Learning" },
  { to: "/ai-lab", label: "AI Lab", enrolledOnly: true },
  { to: "/news", label: "Newsroom" },
  { to: "/events", label: "Community" },
  { to: "/contact", label: "About" }
];
const MOBILE_GROUPS = [
  {
    label: "Platform",
    items: [
      { to: "/courses", label: "Learning Pathways" },
      { to: "/ai-lab", label: "AI Lab" },
      { to: "/news", label: "Newsroom" },
      { to: "/certification-hall", label: "Certification Hall" }
    ]
  },
  {
    label: "More",
    items: [
      { to: "/events", label: "Community & Events" },
      { to: "/faqs", label: "Help Center" },
      { to: "/contact", label: "Contact" }
    ]
  }
];
function CertilyLogo({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B4CF5] to-[#4A3BE8] shadow-[0_4px_16px_-4px_rgba(91,76,245,0.55)] ring-1 ring-[#5B4CF5]/20",
        className
      ),
      "aria-hidden": true,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-[18px] w-[18px] text-white", strokeWidth: 2.25 })
    }
  );
}
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { enrolled } = useEnrollment();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    setOpen(false);
  }, [path]);
  const isActive = (to) => path === to || path.startsWith(`${to}/`);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: cn("fixed inset-x-0 top-0 z-50 transition-all", scrolled ? "py-1" : "py-2"), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: cn(
          "flex items-center justify-between gap-3 rounded-2xl border border-[#E4E2F0]/90 bg-white/95 px-3 py-2 shadow-[0_8px_32px_-12px_rgba(15,21,51,0.12)] backdrop-blur-md sm:rounded-full sm:px-4 sm:py-2.5",
          scrolled && "shadow-[0_12px_40px_-14px_rgba(15,21,51,0.16)]"
        ),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "group flex shrink-0 items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CertilyLogo, { className: "transition-transform duration-300 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "leading-none", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold tracking-tight text-foreground", children: "Certily" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5A5872]/80", children: "AI Campus" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden items-center gap-0.5 lg:flex", children: NAV_LINKS.map((link) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: link.to,
              className: cn(
                "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.to) ? "text-[#5B4CF5]" : "text-[#5A5872] hover:bg-[#F7F8FC] hover:text-foreground"
              ),
              children: [
                link.label,
                "enrolledOnly" in link && link.enrolledOnly && !enrolled && /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "ml-1 inline h-3 w-3 opacity-45", "aria-label": "Enrolled only" }),
                isActive(link.to) && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#5B4CF5]" })
              ]
            },
            link.to
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden flex-1 justify-center px-2 xl:flex xl:max-w-[15rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "relative w-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "input",
              {
                type: "search",
                placeholder: "Search campus...",
                className: "h-9 w-full rounded-xl border border-[#E4E2F0] bg-[#F7F8FC]/90 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-[#5B4CF5]/40 focus:bg-white focus:ring-2 focus:ring-[#5B4CF5]/15"
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 sm:gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: LMS_LOGIN,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden rounded-lg px-3 py-2 text-sm font-semibold text-[#5A5872] transition-colors hover:bg-[#F7F8FC] hover:text-foreground sm:inline",
                children: "Log in"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: LMS_LOGIN,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hidden h-9 items-center rounded-full bg-[#5B4CF5] px-5 text-sm font-bold text-white shadow-[0_8px_24px_-10px_rgba(91,76,245,0.55)] transition-all hover:bg-[#4A3BE8] hover:scale-[1.02] active:scale-[0.98] sm:inline-flex",
                children: "Sign Up"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "rounded-lg p-2 text-foreground/80 transition-colors hover:bg-[#F7F8FC] lg:hidden",
                onClick: () => setOpen((v) => !v),
                "aria-label": "Toggle menu",
                children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
              }
            )
          ] })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 rounded-2xl border border-[#E4E2F0] bg-white p-3 shadow-[0_16px_48px_-16px_rgba(15,21,51,0.14)] lg:hidden", children: [
      MOBILE_GROUPS.map((group) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 last:mb-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: group.label }),
        group.items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: item.to,
            className: "flex items-center justify-between rounded-lg px-2 py-2.5 text-sm font-medium hover:bg-[#F7F8FC]",
            children: [
              item.label,
              ENROLLED_AREAS.some((b) => b.route === item.to) && !enrolled && /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" })
            ]
          },
          item.to
        ))
      ] }, group.label)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 grid grid-cols-2 gap-2 border-t border-border/60 pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: LMS_LOGIN,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex h-11 items-center justify-center rounded-full border border-[#E4E2F0] text-sm font-semibold text-foreground",
            children: "Log in"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: LMS_LOGIN,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex h-11 items-center justify-center rounded-full bg-[#5B4CF5] text-sm font-bold text-white",
            children: "Sign Up"
          }
        )
      ] })
    ] })
  ] }) });
}
const platform = [
  { label: "Learning Pathways", to: "/courses" },
  { label: "AI Lab", to: "/ai-lab" },
  { label: "Newsroom", to: "/news" },
  { label: "Certification Hall", to: "/certification-hall" }
];
const company = [
  { label: "About", to: "/contact" },
  { label: "Blog", to: "/news" },
  { label: "Careers", to: "/contact" },
  { label: "Partnerships", to: "/contact" }
];
const support = [
  { label: "Help Center", to: "/faqs" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/contact" },
  { label: "Terms", to: "/contact" }
];
function FooterLink({ label, to }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to,
      className: "group flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00C9A7]", "aria-hidden": true }),
        label
      ]
    }
  ) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-0 border-t border-white/10 bg-[#0F0E1A] text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl px-4 py-10 md:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-8 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "inline-flex items-center gap-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: cn(
                "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B4CF5] to-[#4A3BE8] shadow-[0_4px_16px_-4px_rgba(91,76,245,0.45)]"
              ),
              "aria-hidden": true,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-[18px] w-[18px] text-white", strokeWidth: 2.25 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg font-bold", children: "Certily" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-white/65", children: "Your AI-powered learning campus — credible certifications, real projects, and Illy mentorship for students, parents, and professionals." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex items-center gap-2", children: [Twitter, Linkedin, Youtube].map((Icon, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "#",
            className: "flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-[#5B4CF5] hover:text-white",
            "aria-label": "Social",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5" })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Platform", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-white/90", children: "Platform" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: platform.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { ...item }, item.to)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Company", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-white/90", children: "Company" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: company.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { ...item }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Support", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-white/90", children: "Support" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 space-y-2", children: support.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(FooterLink, { ...item }, item.label)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-white/50 sm:flex-row", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Certily AI Campus. All rights reserved."
    ] }) }) })
  ] });
}
function PageEnter({ children }) {
  const ref = reactExports.useRef(null);
  const path = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsapWithCSS.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }, [path]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, children });
}
const DEFAULT_ILLY_MESSAGE = "Hey! I'm ILY — your guide on the Certilly campus. Tap a quick link below and I'll point you in the right direction.";
const ILLY_STARTER_PROMPTS = [
  {
    id: "campus-tour",
    label: "Public vs enrolled areas",
    message: "Public: Learning Pathways, Newsroom, and AI Hall. Enrolled: My Classroom, AI Lab, Certification Hall, and Mission Control — unlock after you enroll.",
    href: "/#explore-campus"
  },
  {
    id: "pick-pathway",
    label: "Help me pick a pathway",
    message: "Learning Pathways has K–12, college, and pro tracks. Tell me your grade or goal and I'll point you to the right certification.",
    href: "/courses"
  },
  {
    id: "enrollment",
    label: "How does enrollment work?",
    message: "Browse pathways for free, enroll when ready, then unlock My Classroom, AI Lab, and Mission Control on the campus map."
  },
  {
    id: "certifications",
    label: "About certifications",
    message: "Every pathway leads to verifiable certificates in the Certification Hall — shareable with colleges and employers.",
    href: "/certification-hall"
  }
];
const ILLY_PAGE_MESSAGES = {
  "/": DEFAULT_ILLY_MESSAGE,
  "/courses": "Learning Pathways is where you browse every certification track — preview courses and enroll when you're ready.",
  "/classroom": "My Classroom is your enrolled learning space — lessons, quizzes, and progress all in one place.",
  "/ai-lab": "The AI Lab is for hands-on capstones and projects. Enroll to unlock labs and submit your work.",
  "/news": "The Newsroom keeps you current on AI trends and shows why Certily certifications matter today.",
  "/ai-hall": "AI Hall is open to everyone — free activities, challenges, and events to explore before you enroll.",
  "/certification-hall": "Earn verifiable certificates here and share them with colleges, parents, and employers.",
  "/dashboard": "Mission Control tracks your goals, assignments, certificates, and parent views in one place.",
  "/events": "Campus events, webinars, and workshops — great ways to learn with the Certily community.",
  "/faqs": "Got questions? I can help you find answers about pathways, enrollment, and certificates.",
  "/contact": "Need to reach our team? Use this page — we're here for students and parents."
};
function getIllyMessageForPath(pathname) {
  return ILLY_PAGE_MESSAGES[pathname] ?? DEFAULT_ILLY_MESSAGE;
}
const IllyContext = reactExports.createContext(null);
function IllyProvider({ children }) {
  const [message, setMessageState] = reactExports.useState(DEFAULT_ILLY_MESSAGE);
  const [floatingOpen, setFloatingOpen] = reactExports.useState(false);
  const pinnedUntil = reactExports.useRef(0);
  const isPinned = reactExports.useCallback(() => Date.now() < pinnedUntil.current, []);
  const setMessage = reactExports.useCallback((next, pin = false) => {
    if (pin) pinnedUntil.current = Date.now() + 8e3;
    setMessageState(next);
  }, []);
  const showTip = setMessage;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    IllyContext.Provider,
    {
      value: {
        message,
        setMessage,
        showTip,
        isPinned,
        floatingOpen,
        setFloatingOpen
      },
      children
    }
  );
}
function useIlly() {
  const ctx = reactExports.useContext(IllyContext);
  if (!ctx) throw new Error("useIlly must be used within IllyProvider");
  return ctx;
}
const illyImg = "/assets/illy-DIlS9t5y.png";
function IllyMark({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0F1533]",
        className
      ),
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: illyImg, alt: "", className: "h-[88%] w-[88%] object-contain object-bottom" })
    }
  );
}
function IllyMascotPanel({
  className,
  onClose
}) {
  const { message, showTip } = useIlly();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: cn(
        "flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_24px_64px_-20px_rgba(15,14,26,0.35)]",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between bg-gradient-to-r from-[#5B4CF5] to-[#7C6FF7] px-4 py-3 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IllyMark, { className: "h-9 w-9" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-sm font-semibold tracking-wide", children: "ILY" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-white/80", children: "Your campus guide" })
            ] })
          ] }),
          onClose && /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              onClick: onClose,
              className: "rounded-lg p-1.5 text-white/80 hover:bg-white/15",
              "aria-label": "Close ILY",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3 px-4 py-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(IllyMark, { className: "mt-0.5 h-8 w-8" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0 rounded-2xl rounded-tl-md bg-[#F7F8FC] px-3.5 py-2.5 text-sm leading-relaxed text-foreground", children: message })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border/60 px-4 py-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground", children: "Quick guides" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-2", children: ILLY_STARTER_PROMPTS.map(
            (prompt) => prompt.href ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: prompt.href,
                onClick: () => showTip(prompt.message, true),
                className: "rounded-xl border border-border/70 bg-[#FAFBFE] px-3 py-2.5 text-left text-xs font-medium text-foreground transition-colors hover:border-[#5B4CF5]/30 hover:bg-[#F7F8FC]",
                children: prompt.label
              },
              prompt.id
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => showTip(prompt.message, true),
                className: "rounded-xl border border-border/70 bg-[#FAFBFE] px-3 py-2.5 text-left text-xs font-medium text-foreground transition-colors hover:border-[#5B4CF5]/30 hover:bg-[#F7F8FC]",
                children: prompt.label
              },
              prompt.id
            )
          ) })
        ] })
      ]
    }
  );
}
function IllyChatFloating() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { floatingOpen, setFloatingOpen, setMessage } = useIlly();
  reactExports.useEffect(() => {
    setMessage(getIllyMessageForPath(pathname), true);
  }, [pathname, setMessage]);
  reactExports.useEffect(() => {
    if (!floatingOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") setFloatingOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [floatingOpen, setFloatingOpen]);
  if (!floatingOpen) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        type: "button",
        onClick: () => setFloatingOpen(true),
        className: "group fixed bottom-6 right-6 z-[90]",
        "aria-label": "Open ILY guide",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute inset-0 rounded-full bg-[#5B4CF5]/30 animate-ping",
              style: { animationDuration: "4s" },
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex items-center gap-2.5 rounded-full border border-[#E4E2F0] bg-white py-1.5 pl-1.5 pr-5 shadow-[0_12px_40px_-12px_rgba(91,76,245,0.35)] transition-transform group-hover:scale-[1.03]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(IllyMark, { className: "h-9 w-9" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-sm font-semibold tracking-wide text-[#5B4CF5]", children: "ILY" })
          ] })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed bottom-6 right-6 z-[90] w-[min(calc(100vw-1.5rem),20rem)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IllyMascotPanel, { className: "w-full", onClose: () => setFloatingOpen(false) }) });
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$b = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Certily AI Campus — Your Campus. Your Future." },
      { name: "description", content: "Outcome-driven AI learning campus with certification pathways, Illy mentorship, and shareable credentials for students and parents." },
      { name: "author", content: "Certily" },
      { property: "og:title", content: "Certily AI Campus — Learn. Build. Certify." },
      { property: "og:description", content: "Explore certification pathways, AI Lab projects, and guided learning with Illy your AI mentor." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap"
      },
      {
        rel: "stylesheet",
        href: appCss
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$b.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsx(IllyProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col overflow-x-clip", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageEnter, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IllyChatFloating, {})
  ] }) }) });
}
const $$splitComponentImporter$a = () => import("./news-BMxqTAR8.mjs");
const Route$a = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "Newsroom — Certily AI Campus"
    }, {
      name: "description",
      content: "AI news, industry updates, and explainers connecting today's trends to Certily certifications."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./faqs-4EWyOpfz.mjs");
const Route$9 = createFileRoute("/faqs")({
  head: () => ({
    meta: [{
      title: "FAQs — AI Campus"
    }, {
      name: "description",
      content: "Answers to common questions about courses, certifications, billing and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./events-Ddwgdij9.mjs");
const Route$8 = createFileRoute("/events")({
  head: () => ({
    meta: [{
      title: "Events — AI Campus"
    }, {
      name: "description",
      content: "Live workshops, AMAs, hackathons, and the AI Campus Summit."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./dashboard-Bu2joaj6.mjs");
const Route$7 = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "Mission Control — Certily AI Campus"
    }, {
      name: "description",
      content: "Student and parent dashboard for progress, assignments, certificates, and events."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./courses-BMR-1ZSK.mjs");
const Route$6 = createFileRoute("/courses")({
  head: () => ({
    meta: [{
      title: "Learning Pathways — Certily AI Campus"
    }, {
      name: "description",
      content: "Browse K–12, college, professional, and career certification pathways with clear outcomes, previews, and enrollment options."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./contact-DsTl4Q8i.mjs");
const Route$5 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — AI Campus"
    }, {
      name: "description",
      content: "Get in touch with the AI Campus team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./classroom-DyIQXjzq.mjs");
const Route$4 = createFileRoute("/classroom")({
  head: () => ({
    meta: [{
      title: "My Classroom — Certily AI Campus"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./certification-hall-CMkhJ_c2.mjs");
const Route$3 = createFileRoute("/certification-hall")({
  head: () => ({
    meta: [{
      title: "AI Certification Hall — Certily AI Campus"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./ai-lab-DRfw03jw.mjs");
const Route$2 = createFileRoute("/ai-lab")({
  head: () => ({
    meta: [{
      title: "AI Lab — Certily AI Campus"
    }, {
      name: "description",
      content: "Capstone projects, practice labs, and AI tools workspace for enrolled Certily learners."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./ai-hall-C8tpg8_K.mjs");
const Route$1 = createFileRoute("/ai-hall")({
  head: () => ({
    meta: [{
      title: "AI Hall — Certily AI Campus"
    }, {
      name: "description",
      content: "Free AI activities, mini-projects, demos, quiz challenges, and community events at Certily AI Campus."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DrATiE5t.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Certilly AI Campus — Your Campus. Your Future."
    }, {
      name: "description",
      content: "Self-paced learning, real AI projects, and a personal AI mentor on the Certilly AI Campus — guided by Illy."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const NewsRoute = Route$a.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$b
});
const FaqsRoute = Route$9.update({
  id: "/faqs",
  path: "/faqs",
  getParentRoute: () => Route$b
});
const EventsRoute = Route$8.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$b
});
const DashboardRoute = Route$7.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$b
});
const CoursesRoute = Route$6.update({
  id: "/courses",
  path: "/courses",
  getParentRoute: () => Route$b
});
const ContactRoute = Route$5.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$b
});
const ClassroomRoute = Route$4.update({
  id: "/classroom",
  path: "/classroom",
  getParentRoute: () => Route$b
});
const CertificationHallRoute = Route$3.update({
  id: "/certification-hall",
  path: "/certification-hall",
  getParentRoute: () => Route$b
});
const AiLabRoute = Route$2.update({
  id: "/ai-lab",
  path: "/ai-lab",
  getParentRoute: () => Route$b
});
const AiHallRoute = Route$1.update({
  id: "/ai-hall",
  path: "/ai-hall",
  getParentRoute: () => Route$b
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$b
});
const rootRouteChildren = {
  IndexRoute,
  AiHallRoute,
  AiLabRoute,
  CertificationHallRoute,
  ClassroomRoute,
  ContactRoute,
  CoursesRoute,
  DashboardRoute,
  EventsRoute,
  FaqsRoute,
  NewsRoute
};
const routeTree = Route$b._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  CAMPUS_MAP_AREAS as C,
  EXPLORE_DESTINATIONS as E,
  PARTNER_LOGOS as P,
  cn as a,
  CAMPUS_PILLARS as b,
  canAccessBuilding as c,
  CAMPUS_POSITIONING as d,
  CAMPUS_STATS as e,
  getCampusAreaByRoute as g,
  illyImg as i,
  router as r,
  useIlly as u
};

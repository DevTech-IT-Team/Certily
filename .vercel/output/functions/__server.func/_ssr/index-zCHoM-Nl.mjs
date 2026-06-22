import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { h as heroImg } from "./hero-BNt7gh-9.mjs";
import { S as Section } from "./Section-B3puCHxZ.mjs";
import { A as ArrowRight, v as Play, j as Brain, w as Target, R as Radio, x as ShieldCheck, Z as Zap, S as Sparkles, y as LayoutDashboard, d as Search, z as Bell, B as BookOpen, m as Cpu, l as ChartColumn, Q as Quote, o as Star, E as FlaskConical, H as Shield, W as Wrench, I as Award, U as Users } from "../_libs/lucide-react.mjs";
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
const features = [
  { icon: ShieldCheck, title: "Outcome Driven", desc: "Real-world skills & certifications" },
  { icon: Radio, title: "Live & Interactive", desc: "Sessions, masterclasses & labs" },
  { icon: Wrench, title: "Practical Learning", desc: "Build & ship real AI projects" },
  { icon: Award, title: "Certified & Credible", desc: "Industry recognized certificates" },
  { icon: Users, title: "Community First", desc: "Connect & grow with peers" }
];
const HeroMetrics = () => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-1 rounded-[2.5rem] bg-brand-gradient opacity-10 blur-xl transition-opacity duration-500 group-hover:opacity-25" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-gradient-to-br from-card/95 to-card/70 p-8 shadow-elegant backdrop-blur-2xl md:p-10 dark:from-card/80 dark:to-card/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,color-mix(in_oklab,var(--brand)_12%,transparent),transparent)] opacity-70"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group/item relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/40 transition-all duration-300 group-hover/item:scale-105 group-hover/item:bg-brand-gradient group-hover/item:shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-7 w-7 text-primary transition-colors group-hover/item:text-white" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-1.5 text-[16px] font-bold tracking-tight text-foreground transition-colors group-hover/item:text-primary", children: f.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-medium leading-relaxed text-muted-foreground", children: f.desc })
          ] })
        ] }),
        i < features.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-6 top-4 bottom-4 hidden w-px bg-gradient-to-b from-transparent via-border/30 to-transparent lg:block" })
      ] }, i)) })
    ] })
  ] }) });
};
const spots = [
  {
    to: "/courses",
    title: "Learning Tower",
    blurb: "Courses & certification paths",
    Icon: BookOpen,
    anchor: "top-[11%] left-0 max-w-[200px]"
  },
  {
    to: "/ai-lab",
    title: "AI Innovation Lab",
    blurb: "Labs, tools & sandbox",
    Icon: FlaskConical,
    anchor: "top-[16%] right-0 max-w-[200px]"
  },
  {
    to: "/dashboard",
    title: "Mission Control",
    blurb: "Classroom, billing & progress",
    Icon: LayoutDashboard,
    anchor: "top-[57%] left-0 max-w-[200px] -translate-x-2"
  },
  {
    to: "/news",
    title: "Insight Studio",
    blurb: "News, webinars & masterclasses",
    Icon: Radio,
    anchor: "top-[58%] right-0 max-w-[200px]"
  },
  {
    to: "/contact",
    title: "Certification Hall",
    blurb: "Verify & share achievements",
    Icon: Shield,
    anchor: "bottom-0 left-1/2 max-w-[220px] -translate-x-1/2 translate-y-2"
  }
];
function CalloutCard({
  to,
  title,
  blurb,
  Icon,
  className
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to,
      className: "group/c flex gap-2.5 rounded-md border border-border/70 bg-card/90 px-2.5 py-2 shadow-md backdrop-blur-md transition-all duration-200 hover:border-primary/30 hover:bg-card hover:shadow-lg dark:border-white/12 dark:bg-card/80 dark:hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background " + (className ?? ""),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/10 transition-colors group-hover/c:bg-primary group-hover/c:text-primary-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", strokeWidth: 2.25, "aria-hidden": true }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[12px] font-semibold leading-snug tracking-tight text-foreground", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[10px] leading-snug text-muted-foreground", children: blurb })
        ] })
      ]
    }
  );
}
function HeroVisual({ src, alt = "AI campus map" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full lg:flex lg:h-full lg:min-h-0 lg:flex-1 lg:flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src,
          alt,
          className: "block h-auto w-full opacity-90 select-none",
          loading: "eager",
          decoding: "async"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2", children: spots.map(({ to, title, blurb, Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutCard, { to, title, blurb, Icon }, to + title)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative hidden min-h-0 flex-1 overflow-hidden rounded-xl bg-muted/20 lg:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src,
          alt,
          className: "absolute inset-0 h-full w-full object-contain object-center opacity-90 select-none",
          loading: "eager",
          decoding: "async"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-10", children: spots.map(({ to, title, blurb, Icon, anchor }) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `pointer-events-auto absolute ${anchor}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CalloutCard, { to, title, blurb, Icon }) }, to + title)) })
    ] })
  ] });
}
const featureCardPhotos = {
  learningTower: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=70",
  outcome: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=70",
  liveLabs: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=70",
  certified: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=70",
  career: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=70",
  elite: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=70"
};
const freshFromPhotos = {
  research: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=640&q=70",
  product: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=640&q=70",
  community: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=720&q=72"
};
function Home() {
  const dashboardRevealRef = reactExports.useRef(null);
  const [dashboardReveal, setDashboardReveal] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = dashboardRevealRef.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setDashboardReveal(true);
      return;
    }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setDashboardReveal(true);
        io.disconnect();
      }
    }, {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.08
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-20 bg-noise opacity-[0.03]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[20%] left-[10%] -z-10 h-64 w-64 animate-orbit rounded-full bg-brand/10 blur-[80px]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[20%] right-[10%] -z-10 h-80 w-80 animate-orbit rounded-full bg-brand-2/10 blur-[100px] [animation-direction:reverse]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative flex min-h-svh flex-col overflow-hidden pt-20 pb-10 md:pt-24 md:pb-12 lg:pt-[6.25rem] lg:pb-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-mesh -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg -z-10 opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-noise -z-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-[-5%] left-[-2%] -z-10 h-[35%] w-[35%] animate-pulse-slow rounded-full bg-brand/5 blur-[120px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[15%] right-[-2%] -z-10 h-[30%] w-[30%] animate-pulse-slow rounded-full bg-brand-2/5 blur-[90px]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex min-h-0 w-full max-w-7xl flex-1 flex-col px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-0 flex-1 gap-8 pt-2 lg:grid-cols-[minmax(0,40%)_minmax(0,60%)] lg:items-stretch lg:gap-12 lg:pt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex min-h-0 w-full min-w-0 max-w-xl animate-fade-up flex-col justify-center gap-7 lg:max-w-[min(100%,28rem)] lg:gap-8 lg:pr-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "flex flex-col gap-0 font-bold tracking-tight text-pretty", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[2.375rem] leading-[1.02] text-foreground sm:text-5xl sm:leading-[1.02] lg:text-[2.55rem] lg:leading-[1.02] xl:text-6xl xl:leading-[1.02] 2xl:text-7xl 2xl:leading-[1.02]", children: "Smarter" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[2.375rem] leading-[1.02] sm:text-5xl sm:leading-[1.02] lg:text-[2.55rem] lg:leading-[1.02] xl:text-6xl xl:leading-[1.02] 2xl:text-7xl 2xl:leading-[1.02]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text animate-shimmer bg-[length:200%_auto] bg-clip-text", children: "AI Education" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[2.375rem] leading-[1.02] text-foreground sm:text-5xl sm:leading-[1.02] lg:text-[2.55rem] lg:leading-[1.02] xl:text-6xl xl:leading-[1.02] 2xl:text-7xl 2xl:leading-[1.02]", children: "Begins with" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-[2.375rem] leading-[1.02] text-foreground sm:text-5xl sm:leading-[1.02] lg:text-[2.55rem] lg:leading-[1.02] xl:text-6xl xl:leading-[1.02] 2xl:text-7xl 2xl:leading-[1.02]", children: "Collaboration" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-base leading-relaxed text-muted-foreground text-pretty sm:text-[1.0625rem] md:text-[1.125rem] md:leading-[1.65]", children: "Master the world’s most transformative technology through live cohorts, specialized labs, and an adaptive curriculum." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 sm:gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://lmsathena.com/login", target: "_blank", rel: "noopener noreferrer", className: "group relative inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-foreground text-background font-bold transition-all hover:bg-brand hover:text-white hover:shadow-glow active:scale-95 overflow-hidden", children: [
              "Get Started",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/courses", className: "inline-flex items-center gap-2 px-8 py-4 rounded-2xl glass font-bold hover:bg-white/80 hover:shadow-elegant active:scale-95 transition-all border-white/30 backdrop-blur-xl", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "w-4 h-4 fill-current text-primary" }),
              " Browse Courses"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex h-full min-h-0 w-full min-w-0 flex-col animate-fade-in", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroVisual, { src: heroImg, alt: "AI campus: learning tower, innovation lab, mission control, insight studio, and certification hall" }) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative overflow-x-clip border-t border-border/50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-4 pb-2 pt-6 md:pt-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroMetrics, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-5 md:grid-cols-12 md:gap-5 lg:gap-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-8 group relative rounded-[2.5rem] overflow-hidden glass-strong border-white/20 shadow-elegant hover:-translate-y-2 transition-all duration-700", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featureCardPhotos.learningTower, alt: "", loading: "lazy", decoding: "async", className: "pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-[0.45] saturate-[1.05] transition duration-700 group-hover:scale-[1.03] group-hover:opacity-[0.52] dark:opacity-[0.38] dark:group-hover:opacity-[0.46]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-background from-0% via-background/85 via-[48%] to-background/25 dark:from-background dark:via-background/80 dark:via-[45%] dark:to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-[2] bg-gradient-to-br from-brand/20 via-transparent to-brand-2/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex h-full flex-col justify-between gap-8 p-8 md:p-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl rounded-2xl border border-border/60 bg-background/90 p-6 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-background/88", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-glow transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Brain, { className: "h-8 w-8" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h3", { className: "mb-4 text-4xl font-black leading-tight tracking-tight text-foreground", children: [
                "Advanced ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Learning Tower"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg leading-relaxed text-muted-foreground", children: "Our vertical learning path methodology ensures you master every layer of AI, from fundamental tensors to complex agentic workflows." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-4 rounded-2xl border border-border/60 bg-background/90 px-5 py-4 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-background/88", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-4", children: [1, 2, 3, 4].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 overflow-hidden rounded-full border-4 border-background bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: `https://i.pravatar.cc/100?img=${i + 10}`, alt: "User" }) }, i)) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm font-bold text-foreground", children: [
                "Joined by ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "2,400+" }),
                " elite engineers this month"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute right-0 bottom-0 z-[3] w-1/2 h-full hidden lg:block opacity-40 group-hover:opacity-80 transition-opacity duration-1000", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--brand),transparent)] opacity-20" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 gap-2 p-10 mt-20", children: Array.from({
              length: 36
            }).map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-square rounded-sm bg-primary/20 animate-pulse", style: {
              animationDelay: `${i * 0.1}s`
            } }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-4 flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 group relative min-h-[200px] overflow-hidden rounded-[2rem] border border-white/15 bg-black/[0.03] shadow-elegant backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 dark:border-white/10 dark:bg-white/[0.04]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featureCardPhotos.outcome, alt: "", loading: "lazy", decoding: "async", className: "pointer-events-none absolute inset-0 h-full w-full object-cover saturate-[1.06] transition duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 from-0% via-black/15 to-transparent dark:from-black/60 dark:via-black/25" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 -top-4 z-[1] h-24 w-24 rounded-full bg-amber-500/15 blur-2xl transition-all group-hover:bg-amber-500/25" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex h-full flex-col p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col rounded-2xl border border-border/60 bg-background/92 p-5 shadow-sm backdrop-blur-md dark:border-white/12 dark:bg-background/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/20 text-amber-700 ring-1 ring-amber-500/30 backdrop-blur-sm transition-transform group-hover:rotate-12 group-hover:scale-110 dark:text-amber-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Target, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-xl font-bold text-foreground", children: "Outcome Centric" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Every module is mapped to Silicon Valley recruitment standards and live project delivery." })
            ] }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 group relative min-h-[200px] overflow-hidden rounded-[2rem] border border-white/15 bg-black/[0.03] shadow-elegant backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 dark:border-white/10 dark:bg-white/[0.04]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featureCardPhotos.liveLabs, alt: "", loading: "lazy", decoding: "async", className: "pointer-events-none absolute inset-0 h-full w-full object-cover saturate-[1.06] transition duration-700 group-hover:scale-105" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 from-0% via-black/15 to-transparent dark:from-black/60 dark:via-black/25" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-4 -top-4 z-[1] h-24 w-24 rounded-full bg-blue-500/15 blur-2xl transition-all group-hover:bg-blue-500/25" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex h-full flex-col p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col rounded-2xl border border-border/60 bg-background/92 p-5 shadow-sm backdrop-blur-md dark:border-white/12 dark:bg-background/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-700 ring-1 ring-blue-500/30 backdrop-blur-sm transition-transform group-hover:rotate-12 group-hover:scale-110 dark:text-blue-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-6 w-6" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-xl font-bold text-foreground", children: "Live Labs" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Deploy to production in our real-time GPU labs with mentor support during every sprint." })
            ] }) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative min-h-[200px] overflow-hidden rounded-[2rem] border border-white/15 bg-black/[0.03] shadow-elegant backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 dark:border-white/10 dark:bg-white/[0.04] md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featureCardPhotos.certified, alt: "", loading: "lazy", decoding: "async", className: "pointer-events-none absolute inset-0 h-full w-full object-cover saturate-[1.06] transition duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 from-0% via-black/15 to-transparent dark:from-black/60 dark:via-black/25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex h-full flex-col p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col rounded-2xl border border-border/60 bg-background/92 p-5 shadow-sm backdrop-blur-md dark:border-white/12 dark:bg-background/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-500/30 backdrop-blur-sm transition-transform group-hover:scale-110 dark:text-emerald-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-xl font-bold text-foreground", children: "Certified Elite" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Industry-recognized credentials co-signed by leading tech giants." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative min-h-[200px] overflow-hidden rounded-[2rem] border border-white/15 bg-black/[0.03] shadow-elegant backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 dark:border-white/10 dark:bg-white/[0.04] md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featureCardPhotos.career, alt: "", loading: "lazy", decoding: "async", className: "pointer-events-none absolute inset-0 h-full w-full object-cover saturate-[1.06] transition duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 from-0% via-black/15 to-transparent dark:from-black/60 dark:via-black/25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex h-full flex-col p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col rounded-2xl border border-border/60 bg-background/92 p-5 shadow-sm backdrop-blur-md dark:border-white/12 dark:bg-background/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-700 ring-1 ring-purple-500/30 backdrop-blur-sm transition-transform group-hover:scale-110 dark:text-purple-400", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-xl font-bold text-foreground", children: "Fast-Track Career" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground", children: "Direct access to Pillar One Recruiters' exclusive talent network." })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group relative min-h-[200px] overflow-hidden rounded-[2rem] border border-white/20 shadow-elegant transition-all duration-500 hover:-translate-y-2 md:col-span-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: featureCardPhotos.elite, alt: "", loading: "lazy", decoding: "async", className: "pointer-events-none absolute inset-0 h-full w-full object-cover opacity-95 saturate-[1.05] transition duration-700 group-hover:scale-105" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/80 via-brand-2/78 to-brand/75" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 flex h-full flex-col justify-center p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-white/20 bg-black/30 p-5 shadow-sm backdrop-blur-md", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/30 text-white ring-1 ring-white/40 backdrop-blur-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-6 w-6" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "mb-2 text-xl font-bold text-white [text-shadow:0_2px_14px_rgba(0,0,0,0.45)]", children: "Join the Elite" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-white/95 [text-shadow:0_1px_10px_rgba(0,0,0,0.4)]", children: "Start your journey towards becoming a Top 1% AI engineer today." })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: dashboardRevealRef, className: `motion-reduce:transform-none motion-reduce:opacity-100 motion-reduce:[clip-path:inset(0)] will-change-[transform,opacity,clip-path] transition-[transform,opacity,clip-path] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${dashboardReveal ? "translate-y-0 opacity-100 [clip-path:inset(0_0_0_0)]" : "translate-y-16 opacity-0 [clip-path:inset(8%_5%_8%_5%)]"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", className: "!pb-10 md:!pb-12", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Your learner ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "dashboard" })
      ] }), description: "Stay on top of progress, deadlines, and live sessions—then open your full dashboard, LMS, or lab when you are ready to dive in.", align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-6xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-xl border border-border bg-background shadow-md ring-1 ring-black/[0.03] dark:border-white/10 dark:bg-card md:rounded-2xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/50 px-4 py-3 dark:border-white/10 dark:bg-muted/25 md:px-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-gradient text-white shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(LayoutDashboard, { className: "h-5 w-5", "aria-hidden": true }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "truncate text-sm font-bold text-foreground", children: "Dashboard" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "AI Campus · Overview" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full flex-wrap items-center justify-end gap-2 sm:w-auto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden min-w-0 flex-1 items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-left text-xs text-muted-foreground sm:flex sm:max-w-[240px] dark:border-white/10 dark:bg-background/90", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "h-3.5 w-3.5 shrink-0 opacity-50", "aria-hidden": true }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: "Search courses, labs…" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-border bg-background text-muted-foreground hover:text-foreground dark:border-white/10 dark:bg-background/90", "aria-label": "Notifications", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bell, { className: "h-4 w-4" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold text-foreground ring-2 ring-background dark:bg-muted/80", children: "SS" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row md:items-stretch", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "flex gap-1 overflow-x-auto border-b border-border bg-muted/30 px-2 py-2 dark:border-white/10 dark:bg-muted/20 md:w-52 md:flex-col md:gap-0.5 md:border-b-0 md:border-r md:px-2 md:py-3", children: [{
            to: "/dashboard",
            label: "Overview",
            icon: LayoutDashboard
          }, {
            to: "/courses",
            label: "Courses",
            icon: BookOpen
          }, {
            to: "/ai-lab",
            label: "AI Lab",
            icon: Cpu
          }, {
            to: "/events",
            label: "Events",
            icon: Radio
          }].map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: item.to, className: `flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors ${item.to === "/dashboard" ? "bg-background text-foreground shadow-sm dark:bg-background/90" : "text-muted-foreground hover:bg-background/70 hover:text-foreground dark:hover:bg-background/50"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-4 w-4 shrink-0 opacity-80", "aria-hidden": true }),
            item.label
          ] }, item.to)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1 bg-muted/15 p-4 dark:bg-muted/10 md:p-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3 sm:grid-cols-3", children: [{
              label: "Modules complete",
              v: "18",
              hint: "This month",
              icon: ChartColumn
            }, {
              label: "Lab hours (GPU)",
              v: "26",
              hint: "Tracked",
              icon: Cpu
            }, {
              label: "Live today",
              v: "2",
              hint: "Sessions",
              icon: Radio
            }].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background p-4 dark:border-white/10 dark:bg-card", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium leading-snug text-muted-foreground", children: k.label }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(k.icon, { className: "h-4 w-4 shrink-0 text-muted-foreground", "aria-hidden": true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-2xl font-bold tabular-nums tracking-tight text-foreground", children: k.v }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: k.hint })
            ] }, k.label)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 grid gap-5 lg:grid-cols-2 lg:items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-lg border border-border bg-background dark:border-white/10 dark:bg-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border bg-muted/40 px-4 py-3 dark:border-white/10 dark:bg-muted/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Assignments" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Rows read like a real task inbox" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full min-w-[280px] text-left text-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border text-[11px] font-semibold uppercase tracking-wide text-muted-foreground dark:border-white/10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-semibold", children: "Name" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-4 py-2.5 font-semibold", children: "Status" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "hidden px-4 py-2.5 font-semibold sm:table-cell", children: "Due" })
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border dark:divide-white/10", children: [{
                    name: "Capstone · RAG pipeline",
                    status: "In review",
                    due: "Feb 14",
                    st: "text-amber-600 dark:text-amber-400"
                  }, {
                    name: "Lab · H100 fine-tune",
                    status: "Running",
                    due: "—",
                    st: "text-emerald-600 dark:text-emerald-400"
                  }, {
                    name: "Cohort · Agents wk 6",
                    status: "Scheduled",
                    due: "Thu",
                    st: "text-primary"
                  }, {
                    name: "Reading · Alignment kit",
                    status: "Due",
                    due: "Mon",
                    st: "text-muted-foreground"
                  }].map((row) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "bg-background hover:bg-muted/40 dark:hover:bg-muted/20", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-4 py-2.5 font-medium text-foreground", children: row.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: `px-4 py-2.5 text-xs font-semibold ${row.st}`, children: row.status }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "hidden px-4 py-2.5 text-xs text-muted-foreground sm:table-cell", children: row.due })
                  ] }, row.name)) })
                ] }) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-lg border border-border bg-background dark:border-white/10 dark:bg-card", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3 dark:border-white/10 dark:bg-muted/30", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-sm font-semibold text-foreground", children: "Live sessions" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "What is on air right now" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/events", className: "text-xs font-semibold text-primary hover:underline", children: "Calendar" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border dark:divide-white/10", children: [{
                  t: "Agentic workflows clinic",
                  sub: "Interactive · 142 watching",
                  dot: "bg-red-500"
                }, {
                  t: "H100 provisioning lab",
                  sub: "Queue · GPU lab",
                  dot: "bg-amber-500"
                }].map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 px-4 py-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-1.5 h-2 w-2 shrink-0 rounded-full ${ev.dot}`, "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-foreground", children: ev.t }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: ev.sub })
                  ] })
                ] }, ev.t)) })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex flex-col gap-2 border-t border-border pt-4 sm:flex-row sm:flex-wrap sm:justify-end dark:border-white/10", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/dashboard", className: "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold transition hover:bg-muted dark:border-white/10 dark:bg-card", children: [
                "Open full dashboard",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4", "aria-hidden": true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://lmsathena.com/login", target: "_blank", rel: "noopener noreferrer", className: "font-display inline-flex items-center justify-center gap-2 rounded-lg bg-brand-gradient px-4 py-2.5 text-sm font-semibold tracking-tight text-white shadow-elegant transition hover:opacity-95", children: [
                "Continue in LMS",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 shrink-0", "aria-hidden": true })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/ai-lab", className: "inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-muted/40 px-4 py-2.5 text-sm font-semibold transition hover:bg-muted dark:border-white/10 dark:bg-muted/30", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-amber-500", "aria-hidden": true }),
                "AI Lab"
              ] })
            ] })
          ] })
        ] })
      ] }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", align: "center", className: "!pt-12 !pb-14 md:!pt-14 md:!pb-16", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Built by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "people" }),
        ", not algorithms"
      ] }), description: "Peer labs, office hours, and hiring intros—so you learn in public and ship with support.", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl mt-4 md:mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-12 lg:grid-cols-12 lg:gap-14 lg:items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-4 lg:border-r lg:border-border/70 lg:pr-10 dark:lg:border-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-5 text-center lg:items-start lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex w-full max-w-sm flex-col gap-4 sm:max-w-none sm:flex-row sm:justify-center lg:flex-col lg:justify-start", children: [{
            v: "4.9",
            l: "Average rating",
            sub: "from course reviews"
          }, {
            v: "10k+",
            l: "Active learners",
            sub: "across live cohorts"
          }, {
            v: "120+",
            l: "Countries",
            sub: "represented this year"
          }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex flex-1 items-baseline justify-between gap-3 rounded-xl bg-muted/30 px-4 py-3 dark:bg-muted/15 sm:flex-col sm:items-center sm:text-center lg:items-start lg:text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-2xl font-bold tabular-nums text-foreground", children: s.v }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 text-left sm:text-center lg:text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs font-semibold uppercase tracking-wide text-foreground", children: s.l }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 block text-[11px] leading-snug text-muted-foreground", children: s.sub })
            ] })
          ] }, s.l)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col items-stretch gap-2 pt-1 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-2 sm:gap-y-2 lg:flex-col lg:items-start lg:justify-start", "aria-label": "Community links", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/events", className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 sm:flex-initial sm:justify-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Radio, { className: "h-3.5 w-3.5 shrink-0", "aria-hidden": true }),
              "Community events"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/news", className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-xs font-semibold transition-colors hover:bg-muted sm:flex-initial sm:justify-center dark:border-white/10 dark:bg-card/60", children: [
              "Stories & updates",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5 shrink-0", "aria-hidden": true })
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-10 md:space-y-12 lg:col-span-8", children: [{
          n: "Aarav S.",
          r: "ML Engineer @ Quantica",
          q: "AI Campus completely changed how I think about model deployment. The labs are unreal."
        }, {
          n: "Lina M.",
          r: "AI Researcher @ NeuroLabs",
          q: "Live cohorts feel like grad school — but ten times more practical and fun."
        }, {
          n: "Daniel K.",
          r: "Founder @ FluxAI",
          q: "Hired three engineers from this community. The bar is exceptional."
        }].map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("figure", { className: "relative pl-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "absolute left-0 top-2 bottom-2 w-1 rounded-full bg-gradient-to-b from-primary to-brand-2" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute left-5 top-0 h-14 w-14 -translate-x-1 text-primary/[0.07]", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex gap-0.5 text-primary", children: Array.from({
            length: 5
          }).map((_, j) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3.5 w-3.5 fill-current", "aria-hidden": true }, j)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("blockquote", { className: "relative mt-3 text-base leading-relaxed text-foreground md:text-[1.0625rem]", children: t.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("figcaption", { className: "mt-5 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white ring-2 ring-background shadow-sm", children: t.n[0] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground", children: t.n }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: t.r })
            ] })
          ] })
        ] }, i)) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Fresh from the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "AI frontier" })
      ] }), children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-3 md:gap-5", children: [{
        tag: "Research",
        t: "Introducing AI Campus Atlas — adaptive curriculum engine",
        d: "Jan 12",
        img: freshFromPhotos.research
      }, {
        tag: "Product",
        t: "GPU Lab now supports H100 clusters for capstone projects",
        d: "Feb 04",
        img: freshFromPhotos.product
      }, {
        tag: "Community",
        t: "Cohort 2026 enrollments cross 10,000 worldwide",
        d: "Mar 18",
        img: freshFromPhotos.community
      }].map((n) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/news", className: "group overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/25 hover:shadow-elegant dark:border-white/10 dark:bg-card/55", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative aspect-video w-full overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: n.img, alt: "", className: "absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]", loading: "lazy", decoding: "async", sizes: "(max-width: 768px) 100vw, 33vw", fetchPriority: "low" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 md:p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-muted-foreground", children: [
            n.d,
            " · ",
            n.tag
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-1.5 font-semibold leading-snug group-hover:text-primary transition-colors", children: n.t })
        ] })
      ] }, n.t)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative w-full border-t border-border/50 pb-0", "aria-labelledby": "cta-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-h-[16rem] w-full overflow-hidden sm:min-h-[18rem] md:min-h-[20rem]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-mesh opacity-70 dark:opacity-40", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg opacity-40 dark:opacity-25", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-gradient-to-r from-primary/92 via-primary/82 to-primary/70 dark:from-foreground/90 dark:via-foreground/85 dark:to-foreground/75" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 mx-auto flex h-full min-h-[inherit] max-w-7xl items-center px-4 py-10 md:px-8 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl text-left text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-[0.25em] text-white/80", children: "Athena LMS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { id: "cta-heading", className: "font-display mt-2 text-pretty text-2xl font-bold leading-[1.2] tracking-tight sm:text-3xl md:text-4xl md:leading-[1.15] lg:text-[2.35rem]", children: "Let's align on your AI learning goals—and get you into the next live cohort." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-pretty text-sm leading-relaxed text-white/90 md:text-[0.9375rem]", children: "Book through Athena LMS: same stack we use for labs, mentor reviews, and certificates—so you skip the sales theatre and start where builders actually work." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://lmsathena.com/login", target: "_blank", rel: "noopener noreferrer", className: "mt-6 inline-flex items-center gap-2 rounded-sm bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-colors hover:bg-amber-600", children: [
            "Get started",
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5", "aria-hidden": true })
          ] })
        ] }) })
      ] }) })
    ] }) })
  ] });
}
export {
  Home as component
};

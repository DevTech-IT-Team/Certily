import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, O as Outlet, H as HeadContent, S as Scripts, b as createFileRoute, l as lazyRouteComponent, d as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Landmark, X, M as Menu, S as Sparkles, a as MapPin, T as Twitter, b as Linkedin, G as Github, Y as Youtube, C as ChevronRight } from "../_libs/lucide-react.mjs";
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
const appCss = "/assets/styles-B0D5jnsE.css";
const links = [
  { to: "/", label: "Home" },
  { to: "/courses", label: "Courses" },
  { to: "/ai-lab", label: "AI Lab" },
  { to: "/news", label: "News Station" },
  { to: "/events", label: "Events" },
  { to: "/faqs", label: "FAQs" },
  { to: "/dashboard", label: "Dashboard" },
  { to: "/contact", label: "Contact" }
];
function Navbar() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => setOpen(false), [path]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "header",
    {
      className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "py-1.5" : "py-3"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `glass-strong rounded-2xl flex items-center justify-between px-4 md:px-6 py-3 transition-all ${scrolled ? "shadow-elegant" : ""}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/", className: "flex items-center gap-3 group", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-glow group-hover:scale-110 group-hover:rotate-3 transition-all duration-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Landmark, { className: "w-6 h-6 text-white drop-shadow-sm" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col leading-tight", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-black text-[13px] tracking-[0.2em] text-foreground/90 uppercase", children: "Pillar One" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display font-bold text-[11px] tracking-[0.1em] text-brand-2/85 uppercase", children: "Recruiters" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-1", children: links.map((l) => {
                const active = path === l.to;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: l.to,
                    className: `font-display relative px-3 py-2 text-sm font-semibold tracking-tight rounded-lg transition-colors ${active ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`,
                    children: [
                      l.label,
                      active && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-brand-gradient" })
                    ]
                  },
                  l.to
                );
              }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "https://lmsathena.com/login",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "font-display hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-gradient text-white text-sm font-semibold tracking-tight shadow-elegant hover:scale-[1.03] active:scale-[0.98] transition-transform",
                    children: [
                      "Enroll Now",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-80", children: "→" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    className: "lg:hidden p-2 rounded-lg hover:bg-muted",
                    onClick: () => setOpen((v) => !v),
                    "aria-label": "Toggle menu",
                    children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-5 h-5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "w-5 h-5" })
                  }
                )
              ] })
            ]
          }
        ),
        open && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-2 glass-strong rounded-2xl p-3 animate-fade-up", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
          links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: l.to,
              className: `font-display px-3 py-2.5 rounded-lg text-sm font-semibold tracking-tight ${path === l.to ? "bg-accent text-foreground" : "text-muted-foreground hover:bg-muted"}`,
              children: l.label
            },
            l.to
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: "https://lmsathena.com/login",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "font-display mt-2 inline-flex justify-center items-center px-5 py-3 rounded-xl bg-brand-gradient text-white text-sm font-semibold tracking-tight",
              children: "Enroll Now →"
            }
          )
        ] }) })
      ] })
    }
  );
}
const quickLinks = [
  { label: "Home", to: "/" },
  { label: "Courses", to: "/courses" },
  { label: "Dashboard", to: "/dashboard" },
  { label: "Events", to: "/events" }
];
const programs = [
  { label: "AI Lab", to: "/ai-lab" },
  { label: "News", to: "/news" },
  { label: "FAQs", to: "/faqs" },
  { label: "Contact", to: "/contact" }
];
const social = [
  { Icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { Icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { Icon: Github, label: "GitHub", href: "https://github.com" },
  { Icon: Youtube, label: "YouTube", href: "https://youtube.com" }
];
function ListLink({ item }) {
  const row = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "mt-0.5 h-3.5 w-3.5 shrink-0 text-primary", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: item.label })
  ] });
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: item.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    Link,
    {
      to: item.to,
      className: "group flex items-start gap-2 text-sm text-background/75 transition-colors hover:text-background dark:text-muted-foreground dark:hover:text-foreground",
      children: row
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
    "a",
    {
      href: item.href,
      className: "flex items-start gap-2 text-sm text-background/75 transition-colors hover:text-background dark:text-muted-foreground dark:hover:text-foreground",
      children: row
    }
  ) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-0 border-t border-primary/25 bg-foreground text-background dark:border-border dark:bg-card dark:text-card-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_80%_0%,color-mix(in_oklab,var(--primary)_28%,transparent),transparent)] opacity-90 dark:opacity-35"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent dark:via-primary/25"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 py-12 md:py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:pr-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/",
            className: "inline-flex items-center gap-2.5 rounded-lg outline-none ring-offset-background focus-visible:ring-2 focus-visible:ring-primary/50 dark:ring-offset-card",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-brand-gradient text-primary-foreground shadow-md", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-bold uppercase tracking-wide text-background dark:text-foreground", children: [
                "AI",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "Campus" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-background/70 dark:text-muted-foreground", children: "Live cohorts, GPU labs, and certifications—built for teams who ship AI, not slide decks." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Quick links", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-background dark:text-foreground", children: "Quick links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: quickLinks.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListLink, { item }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Programs", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-background dark:text-foreground", children: "Programs" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: programs.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(ListLink, { item }, item.label)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-wider text-background dark:text-foreground", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-4 text-sm text-background/75 dark:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-background dark:text-foreground", children: "Head office" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-start gap-2 leading-snug", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary", "aria-hidden": true }),
              "Remote-first · cohort hubs worldwide"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-background dark:text-foreground", children: "Cohort hours" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 leading-snug", children: "Mon–Sat · Live blocks & async lab time" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/contact",
              className: "inline-block font-medium text-primary transition-opacity hover:opacity-90 dark:text-primary",
              children: "Message the team →"
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative border-t border-background/15 dark:border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-5 text-xs text-background/60 dark:text-muted-foreground sm:flex-row sm:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " AI Campus. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-3 w-px bg-background/25 sm:block dark:bg-border", "aria-hidden": true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-center gap-x-4 gap-y-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition-colors hover:text-background dark:hover:text-foreground", children: "Privacy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#", className: "transition-colors hover:text-background dark:hover:text-foreground", children: "Terms" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-3", children: social.map(({ Icon, label, href }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "flex h-9 w-9 items-center justify-center rounded-full border border-background/25 bg-background/10 text-background/80 transition-colors hover:border-primary/50 hover:bg-background/20 hover:text-background dark:border-border dark:bg-muted/40 dark:text-muted-foreground dark:hover:border-primary/40 dark:hover:bg-muted dark:hover:text-foreground",
          "aria-label": label,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", "aria-hidden": true })
        },
        label
      )) })
    ] }) })
  ] });
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
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
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
const Route$8 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "AI Campus — The Next-Generation AI Learning Ecosystem" },
      { name: "description", content: "Premium AI-powered education platform. Live cohorts, AI labs, certifications, and a global community of innovators." },
      { name: "author", content: "AI Campus" },
      { property: "og:title", content: "AI Campus — Learn. Build. Innovate." },
      { property: "og:description", content: "World-class AI learning experience with live mentorship, AI labs, and dashboards." },
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
        href: "https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,300..700;1,300..700&family=Source+Serif+4:ital,opsz,wght@0,8..60,400..700;1,8..60,400..700&display=swap"
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
  const { queryClient } = Route$8.useRouteContext();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen flex flex-col", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Navbar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "flex-1", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
const $$splitComponentImporter$7 = () => import("./news-B6XbYpo7.mjs");
const Route$7 = createFileRoute("/news")({
  head: () => ({
    meta: [{
      title: "News Station — AI Campus"
    }, {
      name: "description",
      content: "Daily AI news, research, and product updates curated by AI Campus."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./faqs-B2LiZ_Gl.mjs");
const Route$6 = createFileRoute("/faqs")({
  head: () => ({
    meta: [{
      title: "FAQs — AI Campus"
    }, {
      name: "description",
      content: "Answers to common questions about courses, certifications, billing and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./events-CgsgeaU6.mjs");
const Route$5 = createFileRoute("/events")({
  head: () => ({
    meta: [{
      title: "Events — AI Campus"
    }, {
      name: "description",
      content: "Live workshops, AMAs, hackathons, and the AI Campus Summit."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./dashboard-BFzqorSo.mjs");
const Route$4 = createFileRoute("/dashboard")({
  head: () => ({
    meta: [{
      title: "Dashboard Preview — AI Campus"
    }, {
      name: "description",
      content: "A glimpse into your personalized AI Campus dashboard."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./courses-Ba0R6ll9.mjs");
const Route$3 = createFileRoute("/courses")({
  head: () => ({
    meta: [{
      title: "Courses — AI Campus"
    }, {
      name: "description",
      content: "Browse 100+ premium AI courses across LLMs, ML, data science, and more."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./contact-BvW2hj1p.mjs");
const Route$2 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact — AI Campus"
    }, {
      name: "description",
      content: "Get in touch with the AI Campus team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./ai-lab-C9K0K145.mjs");
const Route$1 = createFileRoute("/ai-lab")({
  head: () => ({
    meta: [{
      title: "AI Lab — AI Campus"
    }, {
      name: "description",
      content: "GPU-powered cloud labs to build, train and deploy real AI models."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-zCHoM-Nl.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "AI Campus — Smarter AI Education Begins with Collaboration"
    }, {
      name: "description",
      content: "Live cohorts, AI labs, and certifications from a world-class AI learning ecosystem."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const NewsRoute = Route$7.update({
  id: "/news",
  path: "/news",
  getParentRoute: () => Route$8
});
const FaqsRoute = Route$6.update({
  id: "/faqs",
  path: "/faqs",
  getParentRoute: () => Route$8
});
const EventsRoute = Route$5.update({
  id: "/events",
  path: "/events",
  getParentRoute: () => Route$8
});
const DashboardRoute = Route$4.update({
  id: "/dashboard",
  path: "/dashboard",
  getParentRoute: () => Route$8
});
const CoursesRoute = Route$3.update({
  id: "/courses",
  path: "/courses",
  getParentRoute: () => Route$8
});
const ContactRoute = Route$2.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$8
});
const AiLabRoute = Route$1.update({
  id: "/ai-lab",
  path: "/ai-lab",
  getParentRoute: () => Route$8
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$8
});
const rootRouteChildren = {
  IndexRoute,
  AiLabRoute,
  ContactRoute,
  CoursesRoute,
  DashboardRoute,
  EventsRoute,
  FaqsRoute,
  NewsRoute
};
const routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};

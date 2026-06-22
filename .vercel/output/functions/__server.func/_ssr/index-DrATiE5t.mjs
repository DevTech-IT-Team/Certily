import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { d as CAMPUS_POSITIONING, E as EXPLORE_DESTINATIONS, u as useIlly, e as CAMPUS_STATS, a as cn, P as PARTNER_LOGOS, i as illyImg, C as CAMPUS_MAP_AREAS, b as CAMPUS_PILLARS, c as canAccessBuilding } from "./router-CWfipgwJ.mjs";
import { I as IllyAvatar } from "./IllyAvatar-DM1qrzDX.mjs";
import { R as Reveal } from "./Reveal-CaTkfed9.mjs";
import { g as ArrowRight, d as Sparkles, k as MapPin, $ as Compass, U as Users, a0 as MessageCircle, j as Calendar, a1 as Quote, o as ArrowUpRight, a2 as Play, L as Lock } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const campusMapImg = "/assets/certbg-DjH7s63S.png";
const DEFAULT_CAMPUS_MSG = "Tap a building badge to explore — or hover a building for a quick preview.";
const ILLY_HERO_PLAZA = { top: "44%", left: "48%", size: "13.5%" };
const ILLY_CENTER = { top: "46%", left: "50%" };
const HERO_HIDDEN_PIN_IDS = /* @__PURE__ */ new Set(["ai-hall"]);
const MAP_ASPECT = "3 / 2";
const HERO_BUILDING_ZONES = [
  {
    id: "learning-pathways",
    title: "Learning Pathways",
    description: "Explore self-paced courses and structured learning paths.",
    hit: { top: "9%", left: "8%", width: "28%", height: "38%" },
    label: { top: "2%", left: "10%" }
  },
  {
    id: "ai-lab",
    title: "AI Lab",
    description: "Hands-on projects, capstone courses and AI tools to build.",
    hit: { top: "7%", left: "52%", width: "38%", height: "36%" },
    label: { top: "1%", left: "50%" }
  },
  {
    id: "newsroom",
    title: "Newsroom",
    description: "Stay updated with AI news, industry insights and announcements.",
    hit: { top: "20%", left: "56%", width: "34%", height: "28%" },
    label: { top: "15%", left: "64%" }
  },
  {
    id: "my-classroom",
    title: "My Classroom",
    description: "Access your courses, assignments and learning progress.",
    hit: { top: "36%", left: "4%", width: "26%", height: "32%" },
    label: { top: "30%", left: "1%" }
  },
  {
    id: "certification-hall",
    title: "Hall of Fame",
    description: "Celebrate achievements, certifications and learner milestones.",
    hit: { top: "52%", left: "30%", width: "40%", height: "44%" },
    label: { bottom: "3%", left: "50%", centerX: true }
  },
  {
    id: "mission-control",
    title: "Mission Control",
    description: "Track goals, stats, certificates and personal progress.",
    hit: { top: "48%", left: "54%", width: "38%", height: "38%" },
    label: { top: "42%", left: "58%" }
  }
];
const HERO_BADGE_ORDER = HERO_BUILDING_ZONES.map((z) => z.id);
function HeroMockupLabel({
  building,
  title,
  description,
  locked,
  highlighted,
  onActivate,
  className,
  style
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: locked ? "/courses" : building.route,
      "data-campus-badge": true,
      onMouseEnter: onActivate,
      onFocus: onActivate,
      style,
      className: cn(
        "relative block w-[7.75rem] rounded-[11px] border border-[#E8E6F0] bg-white px-2 py-1.5 shadow-[0_8px_24px_-8px_rgba(15,21,51,0.25)] transition-all duration-200",
        "sm:w-[9rem] md:w-[10rem] lg:w-[10.75rem]",
        "hover:scale-[1.02] hover:border-[#5B4CF5]/30 hover:shadow-[0_12px_32px_-10px_rgba(91,76,245,0.22)]",
        highlighted && "scale-[1.02] border-[#5B4CF5]/35 ring-2 ring-[#5B4CF5]/15",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "pr-5 text-[10px] font-extrabold uppercase leading-[1.2] tracking-[0.05em] text-[#0F1533] sm:text-[10.5px]", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 pr-4 text-[9px] leading-[1.4] text-[#5A5872] sm:text-[9.5px]", children: description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "absolute bottom-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full sm:h-5 sm:w-5",
              locked ? "bg-[#F0F1F7] text-[#9896A9]" : "bg-[#5B4CF5] text-white"
            ),
            children: locked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-2 w-2 sm:h-2.5 sm:w-2.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-2 w-2 sm:h-2.5 sm:w-2.5" })
          }
        )
      ]
    }
  );
}
function HeroBuildingBadge({
  building,
  title,
  description,
  locked,
  isActive,
  onActivate
}) {
  const Icon = building.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: locked ? "/courses" : building.route,
      "data-campus-badge": true,
      onMouseEnter: onActivate,
      onFocus: onActivate,
      className: cn(
        "group flex items-start gap-2.5 rounded-xl border bg-white p-2.5 shadow-[0_8px_28px_-10px_rgba(15,14,26,0.12)]",
        "transition-all hover:border-[#5B4CF5]/25 hover:shadow-[0_12px_32px_-8px_rgba(91,76,245,0.2)]",
        isActive ? "border-[#5B4CF5]/30 ring-1 ring-[#5B4CF5]/15" : "border-[#E4E2F0]"
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
            style: { backgroundColor: `${building.color}18`, color: building.color },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5", strokeWidth: 2.25 })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-bold leading-tight text-foreground", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 line-clamp-2 text-[10px] leading-snug text-[#5A5872]", children: description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: cn(
              "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
              locked ? "bg-[#F0F1F7] text-[#9896A9]" : "bg-[#EDE9FF] text-[#5B4CF5]"
            ),
            children: locked ? /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-2.5 w-2.5" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-2.5 w-2.5" })
          }
        )
      ]
    }
  );
}
function HeroCampusFrame({
  visibleAreas,
  activeId,
  onActivate,
  onDeactivate,
  onIllyClick,
  illyRef,
  setReady
}) {
  const byId = (id) => visibleAreas.find((b) => b.id === id);
  const renderBadge = (id) => {
    const building = byId(id);
    const zone = HERO_BUILDING_ZONES.find((z) => z.id === id);
    if (!building || !zone) return null;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroBuildingBadge,
      {
        building,
        title: zone.title,
        description: zone.description,
        locked: !canAccessBuilding(building.access),
        isActive: activeId === building.id,
        onActivate: () => onActivate(building)
      }
    );
  };
  const renderMapBadge = (zone) => {
    const building = byId(zone.id);
    if (!building) return null;
    const highlighted = activeId === zone.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      HeroMockupLabel,
      {
        building,
        title: zone.title,
        description: zone.description,
        locked: !canAccessBuilding(building.access),
        highlighted,
        onActivate: () => onActivate(building),
        className: cn(
          "pointer-events-auto absolute z-40",
          zone.label.centerX && "-translate-x-1/2",
          zone.id === "certification-hall" && "z-50"
        ),
        style: {
          top: zone.label.top,
          left: zone.label.left,
          bottom: zone.label.bottom
        }
      },
      `badge-${zone.id}`
    );
  };
  const renderBuildingHit = (zone) => {
    const building = byId(zone.id);
    if (!building) return null;
    const active = activeId === zone.id;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute z-10",
        style: {
          top: zone.hit.top,
          left: zone.hit.left,
          width: zone.hit.width,
          height: zone.hit.height
        },
        onMouseEnter: () => onActivate(building),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "pointer-events-none absolute inset-0 rounded-2xl transition-all duration-300",
              active ? "bg-[#5B4CF5]/[0.07] ring-2 ring-[#5B4CF5]/20" : "bg-transparent ring-0"
            ),
            "aria-hidden": true
          }
        )
      },
      `hit-${zone.id}`
    );
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "data-campus-scene": true, className: "relative w-full overflow-visible bg-transparent", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full bg-transparent", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: campusMapImg,
          alt: "Certily AI Campus — interactive 3D university with learning buildings",
          className: "relative z-0 block w-full h-auto max-w-none select-none bg-transparent mix-blend-screen",
          width: 1536,
          height: 1024,
          onLoad: () => setReady(true),
          draggable: false,
          decoding: "sync"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "pointer-events-none absolute inset-0 isolate z-10 hidden overflow-visible sm:block [&_[data-campus-badge]]:pointer-events-auto",
          onMouseLeave: onDeactivate,
          children: [
            HERO_BUILDING_ZONES.map((zone) => renderBuildingHit(zone)),
            HERO_BUILDING_ZONES.map((zone) => renderMapBadge(zone))
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          ref: illyRef,
          type: "button",
          className: "absolute z-[15] flex items-end justify-center overflow-visible bg-transparent outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#5B4CF5]/50",
          style: {
            top: ILLY_HERO_PLAZA.top,
            left: ILLY_HERO_PLAZA.left,
            width: ILLY_HERO_PLAZA.size,
            transform: "translate(-54%, -56%)"
          },
          onClick: onIllyClick,
          "aria-label": "Chat with Illy",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: illyImg,
              alt: "Illy on the campus plaza",
              className: "relative h-auto w-full max-w-none object-contain object-bottom mix-blend-screen drop-shadow-[0_8px_20px_rgba(91,76,245,0.2)]",
              draggable: false
            }
          )
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid grid-cols-2 gap-2 sm:hidden lg:grid-cols-3", children: HERO_BADGE_ORDER.map((id) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: renderBadge(id) }, id)) })
  ] });
}
function BuildingPin({
  building,
  isActive,
  onActivate,
  onDeactivate
}) {
  const locked = !canAccessBuilding(building.access);
  const Icon = building.icon;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-campus-pin": true,
      className: cn(
        "group absolute -translate-x-1/2 -translate-y-1/2 hover:z-50",
        isActive && "z-50"
      ),
      style: { top: building.mapPosition.top, left: building.mapPosition.left },
      onMouseEnter: onActivate,
      onMouseLeave: onDeactivate,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onFocus: onActivate,
            onBlur: onDeactivate,
            onClick: (e) => {
              e.stopPropagation();
              onActivate();
            },
            className: "relative flex h-7 w-7 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#4CD1B0] sm:h-9 sm:w-9",
            "aria-label": building.name,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "absolute inset-0 rounded-full opacity-50",
                    isActive ? "animate-ping bg-[#4CD1B0]" : "bg-primary/30"
                  ),
                  "aria-hidden": true
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "span",
                {
                  className: cn(
                    "relative h-3.5 w-3.5 rounded-full border-2 border-white bg-[#4CD1B0] shadow-[0_0_12px_rgba(76,209,176,0.65)] transition-transform",
                    isActive ? "scale-125 ring-2 ring-[#4CD1B0]/40 ring-offset-2" : "group-hover:scale-110"
                  )
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: cn(
              "absolute top-full left-1/2 z-30 mt-1.5 w-[9.5rem] -translate-x-1/2 transition-all duration-300 sm:mt-2 sm:w-[12rem]",
              isActive ? "pointer-events-auto translate-y-0 opacity-100" : "pointer-events-none translate-y-2 opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Link,
              {
                to: locked ? "/courses" : building.route,
                onClick: (e) => e.stopPropagation(),
                className: cn(
                  "pointer-events-auto block rounded-xl border bg-white/98 p-3 shadow-[0_12px_40px_-12px_rgba(15,21,51,0.35)] backdrop-blur-md transition-transform hover:scale-[1.02]",
                  isActive ? "border-primary/50" : "border-border/80"
                ),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg",
                        style: { backgroundColor: `${building.color}18`, color: building.color },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" })
                      }
                    ),
                    locked && /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3.5 w-3.5 text-muted-foreground" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-bold text-[#0F1533]", children: building.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[10px] leading-snug text-muted-foreground", children: building.tagline }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 flex items-center gap-1 text-[10px] font-semibold text-primary", children: [
                    locked ? "Enroll to unlock" : "Enter building",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
                  ] })
                ]
              }
            )
          }
        )
      ]
    }
  );
}
function CampusMap({
  className,
  showGuide = true,
  embedded = false,
  presentation = "default"
}) {
  const isHero = presentation === "hero";
  const { message, setMessage, setFloatingOpen } = useIlly();
  const mapRef = reactExports.useRef(null);
  const illyHeroRef = reactExports.useRef(null);
  const illyDefaultRef = reactExports.useRef(null);
  const [activeId, setActiveId] = reactExports.useState(null);
  const [ready, setReady] = reactExports.useState(false);
  const displayMessage = activeId ? CAMPUS_MAP_AREAS.find((b) => b.id === activeId)?.illyIntro ?? message : message || DEFAULT_CAMPUS_MSG;
  reactExports.useEffect(() => {
    if (!ready) setMessage(DEFAULT_CAMPUS_MSG);
  }, [ready, setMessage]);
  reactExports.useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;
    const ctx = gsapWithCSS.context(() => {
      if (!isHero) {
        gsapWithCSS.from("[data-campus-scene]", {
          opacity: 0,
          y: 16,
          duration: 0.9,
          ease: "power3.out"
        });
      }
      if (!isHero) {
        gsapWithCSS.from("[data-campus-pin]", {
          opacity: 0,
          scale: 0.92,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.35,
          ease: "back.out(1.6)"
        });
        gsapWithCSS.fromTo(
          "[data-campus-badge]",
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            delay: 0.4,
            ease: "power2.out"
          }
        );
      }
      if (illyDefaultRef.current && !isHero) {
        gsapWithCSS.from(illyDefaultRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
          delay: 0.55,
          ease: "back.out(1.5)"
        });
      }
    }, map);
    return () => ctx.revert();
  }, [ready, isHero]);
  const visibleAreas = isHero ? CAMPUS_MAP_AREAS.filter((b) => !HERO_HIDDEN_PIN_IDS.has(b.id)) : CAMPUS_MAP_AREAS;
  const handleActivate = (building) => {
    setActiveId(building.id);
    setMessage(building.illyIntro, true);
  };
  const scene = isHero ? /* @__PURE__ */ jsxRuntimeExports.jsx(
    HeroCampusFrame,
    {
      visibleAreas,
      activeId,
      onActivate: handleActivate,
      onDeactivate: () => {
        setActiveId(null);
        setMessage(DEFAULT_CAMPUS_MSG);
      },
      onIllyClick: () => {
        setActiveId(null);
        setMessage("Tap any building — I'll tell you what's inside!", true);
        window.focusIllyChat?.();
      },
      illyRef: illyHeroRef,
      setReady
    }
  ) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      "data-campus-scene": true,
      className: "relative mx-auto w-full",
      style: { aspectRatio: MAP_ASPECT },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: campusMapImg,
            alt: "Certily AI Campus — interactive 3D university with learning buildings",
            className: "absolute inset-0 h-full w-full select-none object-cover object-center mix-blend-screen",
            width: 1536,
            height: 1024,
            onLoad: () => setReady(true),
            draggable: false,
            decoding: "sync"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: illyDefaultRef,
              className: "absolute z-30 -translate-x-1/2 -translate-y-1/2",
              style: { top: ILLY_CENTER.top, left: ILLY_CENTER.left },
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                IllyAvatar,
                {
                  size: "statue",
                  onLight: true,
                  interactive: true,
                  showHint: true,
                  className: "scale-[0.45] sm:scale-[0.58] md:scale-[0.65] lg:scale-[0.72]",
                  onInteract: () => {
                    setActiveId(null);
                    setMessage("Tap any building pin — I'll tell you what's inside!", true);
                    window.focusIllyChat?.();
                  }
                }
              )
            }
          ),
          visibleAreas.map((building) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            BuildingPin,
            {
              building,
              isActive: activeId === building.id,
              onActivate: () => handleActivate(building),
              onDeactivate: () => {
                setActiveId(null);
                setMessage(DEFAULT_CAMPUS_MSG);
              }
            },
            building.id
          ))
        ] })
      ]
    }
  );
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: mapRef, className: cn("relative overflow-visible bg-transparent", className), children: [
    embedded ? scene : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border/50 bg-white shadow-neutral md:rounded-3xl", children: scene }),
    showGuide && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 rounded-2xl border border-border/70 bg-[#FAFBFE] p-4 sm:p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-1 items-start gap-3 sm:items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IllyAvatar, { size: "md" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-primary", children: "Illy · Campus guide" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-foreground/80", children: displayMessage })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => setFloatingOpen(true),
          className: "inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/80",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-4 w-4 text-primary" }),
            "Ask Illy"
          ]
        }
      )
    ] }) })
  ] });
}
const GREETING = "I'm your campus guide — tap me anytime for directions on pathways, buildings, and enrollment.";
function IllyHeroCard() {
  const { setMessage, setFloatingOpen } = useIlly();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: () => {
        setMessage(GREETING, true);
        setFloatingOpen(true);
      },
      className: "group w-full rounded-2xl border border-[#E4E2F0] bg-white p-4 text-left shadow-[0_8px_32px_-12px_rgba(15,14,26,0.1)] transition-all hover:border-[#5B4CF5]/20 hover:shadow-[0_12px_36px_-10px_rgba(91,76,245,0.18)] sm:p-5",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0F1533]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: illyImg, alt: "", className: "h-[92%] w-[92%] object-contain object-bottom" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-bold text-foreground sm:text-base", children: [
            "Hi, I'm ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display tracking-wide", children: "ILY" }),
            "!",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "👋" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm leading-relaxed text-[#5A5872]", children: GREETING })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDE9FF] text-[#5B4CF5] transition-transform group-hover:translate-x-0.5 sm:flex", children: "→" })
      ] })
    }
  );
}
function HomeFeatureBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "pillars", "data-illy-section": "pillars", className: "bg-[#F7F8FC] px-4 pb-10 pt-2 sm:px-6 sm:pb-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-[88rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border border-border/60 bg-white px-4 py-5 shadow-sm sm:px-6 sm:py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-4", children: CAMPUS_PILLARS.map(({ title, description, icon: Icon }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "li",
    {
      className: `flex flex-1 items-start gap-3 ${i > 0 ? "lg:border-l lg:border-border/50 lg:pl-5" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", strokeWidth: 2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 pt-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold leading-tight text-foreground", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs leading-relaxed text-muted-foreground", children: description })
        ] })
      ]
    },
    title
  )) }) }) }) });
}
function HeroSection() {
  const sectionRef = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsapWithCSS.context(() => {
      gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).from("[data-hero-line]", { opacity: 0, y: 22, duration: 0.55, stagger: 0.07 }).fromTo(
        "[data-hero-visual]",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.65 },
        "-=0.3"
      );
    }, section);
    return () => ctx.revert();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "section",
      {
        ref: sectionRef,
        "data-illy-section": "hero",
        className: "relative overflow-visible bg-[#F7F8FC] pb-2 pt-20 sm:pb-4 sm:pt-24 md:pt-24",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-genz-hero" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.1]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/[0.07] blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full bg-[#4CD1B0]/[0.06] blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-center gap-8 overflow-visible lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-6 xl:gap-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-center text-left lg:py-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "h1",
                {
                  "data-hero-line": true,
                  className: "max-w-[12ch] text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground sm:max-w-none sm:text-[3rem] lg:text-[3.35rem] xl:text-[3.85rem]",
                  children: [
                    CAMPUS_POSITIONING.headline,
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 block text-[#5B4CF5] sm:mt-2", children: CAMPUS_POSITIONING.subhead })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  "data-hero-line": true,
                  className: "mt-4 max-w-[36ch] text-lg leading-[1.65] text-muted-foreground sm:mt-5 sm:text-xl sm:leading-relaxed lg:max-w-[38ch]",
                  children: CAMPUS_POSITIONING.lead
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-hero-line": true, className: "mt-6 sm:mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/courses",
                  className: "group inline-flex h-12 items-center gap-2.5 rounded-full bg-brand-gradient px-8 text-base font-bold text-white shadow-elegant transition-all hover:scale-[1.03] hover:shadow-[0_20px_48px_-12px_rgba(91,76,245,0.55)] active:scale-[0.98]",
                  children: [
                    "Start Learning",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 transition-transform group-hover:translate-x-0.5" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "data-hero-line": true, className: "mt-6 w-full max-w-lg sm:mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IllyHeroCard, {}) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                id: "campus-map",
                "data-hero-visual": true,
                className: "scroll-mt-24 w-full min-w-0 overflow-visible bg-transparent shadow-none lg:justify-self-end",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CampusMap, { embedded: true, presentation: "hero", showGuide: false })
              }
            )
          ] }) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomeFeatureBar, {})
  ] });
}
const buildingSpaceImage = "/assets/building-space-C_h0XPsX.webp";
const classroomImage = "/assets/classroom-DOomlrVx.webp";
const learnImage = "/assets/learn-BhleCSpF.webp";
const newsroomImage = "/assets/newsroom-CxJpznpU.webp";
const CARD_IMAGES = [learnImage, buildingSpaceImage, newsroomImage, classroomImage];
function ExploreCard({
  name,
  subtitle,
  route,
  image,
  accent,
  delay
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: route,
      className: "group relative block aspect-[3/4] min-h-[310px] overflow-hidden rounded-3xl shadow-[0_16px_48px_-20px_rgba(15,21,51,0.22)] transition-shadow duration-300 hover:shadow-[0_24px_56px_-18px_rgba(91,76,245,0.28)] sm:min-h-[340px] lg:min-h-[380px]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: image,
            alt: "",
            className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-0 opacity-40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-50",
            style: { backgroundColor: accent }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0F1533]/85 via-[#0F1533]/25 to-transparent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F1533] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white",
            "aria-hidden": true,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4 stroke-[2.5]" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-x-0 bottom-0 p-4 sm:p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-bold leading-tight text-white sm:text-2xl", children: name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-white/75", children: subtitle })
        ] })
      ]
    }
  ) });
}
function CampusExploreSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "explore-campus",
      "data-illy-section": "explore-campus",
      className: "relative overflow-hidden border-t border-border/30 py-10 sm:py-12 md:py-16",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0",
            style: {
              background: "linear-gradient(180deg, #F7F8FC 0%, #F3F4FF 38%, #F7F8FC 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-genz-hero opacity-70" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.14]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#5B4CF5]/[0.09] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-[#4CD1B0]/[0.1] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-[#B8ABFF]/[0.12] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-full border border-primary/15 bg-white/90 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm", children: "Explore Campus" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.06, className: "mt-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]", children: "Find your perfect learning experience" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4", children: EXPLORE_DESTINATIONS.map((dest, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            ExploreCard,
            {
              name: dest.name,
              subtitle: dest.subtitle,
              route: dest.route,
              image: CARD_IMAGES[i % CARD_IMAGES.length],
              accent: dest.accent,
              delay: 0.1 + i * 0.07
            },
            dest.id
          )) })
        ] })
      ]
    }
  );
}
const illyVideo = "/assets/ilyvideo-DG9c4Moi.mp4";
const DEMO_QUESTION = "Which pathway fits me in K–12, and where do I start?";
function HeyGenCursor() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "svg",
    {
      viewBox: "0 0 28 32",
      className: "h-9 w-8 drop-shadow-[0_6px_16px_rgba(91,76,245,0.45)]",
      "aria-hidden": true,
      fill: "none",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "path",
        {
          d: "M3 2.5v22.5l6.2-5.1 3.4 8.2 3.1-1.3-3.5-8.4h7.2L3 2.5z",
          fill: "#5B4CF5",
          stroke: "white",
          strokeWidth: "1.75",
          strokeLinejoin: "round"
        }
      )
    }
  );
}
function IllyShowcaseScene() {
  const stageRef = reactExports.useRef(null);
  const cursorRef = reactExports.useRef(null);
  const identityRef = reactExports.useRef(null);
  const guidanceRef = reactExports.useRef(null);
  const questionRef = reactExports.useRef(null);
  const videoRef = reactExports.useRef(null);
  const [typed, setTyped] = reactExports.useState("");
  const [activeCard, setActiveCard] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const stage = stageRef.current;
    const cursor = cursorRef.current;
    const identity = identityRef.current;
    const guidance = guidanceRef.current;
    const question = questionRef.current;
    const video = videoRef.current;
    if (!stage || !cursor || !identity || !guidance || !question || !video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setTyped(DEMO_QUESTION);
      return;
    }
    const point = (el, offsetX = 0.78, offsetY = 0.55) => {
      const sr = stage.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      return {
        x: er.left - sr.left + er.width * offsetX,
        y: er.top - sr.top + er.height * offsetY
      };
    };
    let typingTimer;
    let tl = null;
    let ctx = null;
    const buildTimeline = () => {
      ctx?.revert();
      tl?.kill();
      gsapWithCSS.set(cursor, { x: 12, y: 36, opacity: 0, scale: 1, transformOrigin: "0% 0%" });
      ctx = gsapWithCSS.context(() => {
        tl = gsapWithCSS.timeline({ repeat: -1, repeatDelay: 1.2 });
        const moveTo = (el, card, ox = 0.78, oy = 0.55) => {
          tl.to(cursor, {
            x: () => point(el, ox, oy).x,
            y: () => point(el, ox, oy).y,
            duration: 0.95,
            ease: "power3.inOut",
            onStart: () => setActiveCard(card)
          });
        };
        const click = () => {
          tl.to(cursor, { scale: 0.84, duration: 0.1, ease: "power2.in" }).to(cursor, {
            scale: 1,
            duration: 0.18,
            ease: "back.out(2.2)"
          });
        };
        const typeQuestion = () => {
          tl.add(() => {
            setTyped("");
            let i = 0;
            window.clearInterval(typingTimer);
            typingTimer = window.setInterval(() => {
              i += 1;
              setTyped(DEMO_QUESTION.slice(0, i));
              if (i >= DEMO_QUESTION.length) window.clearInterval(typingTimer);
            }, 28);
          });
          tl.to({}, { duration: DEMO_QUESTION.length * 0.028 + 0.55 });
        };
        tl.to(cursor, { opacity: 1, duration: 0.3 });
        moveTo(identity, "identity", 0.88, 0.52);
        click();
        tl.to({}, { duration: 0.25 });
        moveTo(guidance, "guidance", 0.72, 0.42);
        click();
        tl.to({}, { duration: 0.2 });
        moveTo(question, "question", 0.8, 0.68);
        click();
        typeQuestion();
        moveTo(video, "video", 0.86, 0.78);
        click();
        tl.to({}, { duration: 0.35 });
        tl.to(cursor, { opacity: 0, duration: 0.3 });
        tl.add(() => {
          setActiveCard(null);
          setTyped("");
        });
      }, stage);
    };
    const onResize = () => {
      window.clearInterval(typingTimer);
      buildTimeline();
    };
    const startDelay = window.setTimeout(buildTimeline, 700);
    window.addEventListener("resize", onResize);
    return () => {
      window.clearTimeout(startDelay);
      window.clearInterval(typingTimer);
      window.removeEventListener("resize", onResize);
      ctx?.revert();
      tl?.kill();
      gsapWithCSS.set(cursor, { clearProps: "all" });
    };
  }, []);
  const cardBase = "rounded-2xl border bg-[#EDF7FF] shadow-[0_14px_36px_-18px_rgba(15,21,51,0.14)] transition-all duration-300";
  const cardActive = "border-[#5B4CF5]/40 shadow-[0_18px_44px_-16px_rgba(91,76,245,0.28)]";
  const cardIdle = "border-[#B8E4FF]";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-[34rem] sm:max-w-[36rem] lg:max-w-[38rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      ref: stageRef,
      className: "relative min-h-[27rem] sm:min-h-[30rem] lg:min-h-[32rem]",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: videoRef,
            className: cn(
              "absolute right-0 top-6 z-[1] w-[55%] max-w-[16rem] overflow-hidden rounded-[1.5rem] border bg-[#0F1533] shadow-[0_28px_60px_-22px_rgba(15,21,51,0.45)] transition-all duration-300 sm:top-8 sm:max-w-[18rem] lg:max-w-[19.5rem]",
              activeCard === "video" ? "border-[#5B4CF5]/35 shadow-[0_32px_64px_-20px_rgba(91,76,245,0.32)]" : "border-border/50"
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[3/4] w-full", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "video",
                {
                  src: illyVideo,
                  autoPlay: true,
                  loop: true,
                  muted: true,
                  playsInline: true,
                  preload: "auto",
                  poster: illyImg,
                  className: "absolute inset-0 h-full w-full scale-[1.04] object-cover object-[center_74%]",
                  "aria-label": "ILY campus guide preview"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0F1533]/95 to-transparent",
                  "aria-hidden": true
                }
              )
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: identityRef,
            className: cn(
              "absolute left-1 top-1 z-[3] inline-flex items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 sm:left-2",
              cardBase,
              activeCard === "identity" ? cardActive : cardIdle
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 overflow-hidden rounded-full bg-[#0F1533] ring-2 ring-white sm:h-10 sm:w-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: illyImg,
                  alt: "",
                  className: "h-full w-full scale-110 object-contain object-bottom"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[13px] font-semibold text-foreground sm:text-sm", children: "Your guide" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: guidanceRef,
            className: cn(
              "absolute left-1 top-[4.75rem] z-[4] w-[min(100%,16.5rem)] p-3.5 sm:left-3 sm:top-[5.25rem] sm:w-[18rem] sm:p-4",
              cardBase,
              activeCard === "guidance" ? cardActive : cardIdle
            ),
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F1533] text-white sm:h-9 sm:w-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "ml-0.5 h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[13px] font-semibold text-foreground sm:text-sm", children: "Campus guidance" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-0.5 text-[11px] leading-snug text-muted-foreground sm:text-xs", children: "Pathways & buildings" })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            ref: questionRef,
            className: cn(
              "absolute bottom-6 left-1 z-[5] w-[min(100%,17rem)] p-3.5 sm:bottom-8 sm:left-3 sm:w-[19rem] sm:p-4",
              cardBase,
              activeCard === "question" ? cardActive : cardIdle
            ),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-display text-[13px] font-bold text-foreground sm:text-sm", children: "Your question" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 min-h-[2.75rem] text-[11px] leading-snug text-foreground/85 sm:min-h-[3rem] sm:text-xs", children: [
                typed.length > 0 ? typed : activeCard === "question" ? "" : DEMO_QUESTION,
                activeCard === "question" && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-[#5B4CF5]" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: cursorRef,
            className: "pointer-events-none absolute left-0 top-0 z-[100] will-change-transform",
            style: { transform: "translate3d(0,0,0)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeyGenCursor, {})
          }
        )
      ]
    }
  ) });
}
function IllyMentorSection() {
  const { setFloatingOpen, setMessage } = useIlly();
  const openGuide = () => {
    setMessage(
      "Need directions? I can point you to pathways, buildings, and enrollment — just tap a quick link below.",
      true
    );
    setFloatingOpen(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "meet-illy",
      "data-illy-section": "illy-mentor",
      className: "relative overflow-visible border-t border-border/40 bg-white py-14 sm:py-16 md:py-24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(91,76,245,0.05),transparent_55%)]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-sm font-semibold text-[#5B4CF5]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", strokeWidth: 2 }),
              "Meet your campus guide"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]", children: "Never get lost on your learning journey" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg", children: "ILY helps you navigate pathways, find the right buildings, and understand what to do next — whether you're exploring for the first time or working toward your certification." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-6 space-y-2.5 text-sm text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#5B4CF5]/10 text-[#5B4CF5]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5" }) }),
                "Find buildings and pathways in seconds"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-[#4CD1B0]/15 text-[#00A88A]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Compass, { className: "h-3.5 w-3.5" }) }),
                "Clear tips for students and parents"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                onClick: openGuide,
                className: "group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#5B4CF5] px-7 text-sm font-bold text-white shadow-[0_14px_40px_-14px_rgba(91,76,245,0.55)] transition-all hover:scale-[1.02] hover:bg-[#4A3BE8] active:scale-[0.98]",
                children: [
                  "Start exploring",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
                ]
              }
            )
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, className: "relative w-full overflow-visible", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IllyShowcaseScene, {}) })
        ] })
      ]
    }
  );
}
function Counter({ to, suffix = "" }) {
  const [n, setN] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let animated = false;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        const start = performance.now();
        const tick = (t) => {
          const p = Math.min(1, (t - start) / 1400);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n.toLocaleString(),
    suffix
  ] });
}
const MEMBER_AVATARS = [
  { initials: "AK", from: "from-[#5B4CF5] to-[#8B7CF8]" },
  { initials: "SR", from: "from-[#4CD1B0] to-[#00A88A]" },
  { initials: "MJ", from: "from-[#6366F1] to-[#818CF8]" },
  { initials: "LP", from: "from-[#F59E0B] to-[#FBBF24]" },
  { initials: "DC", from: "from-[#EC4899] to-[#F472B6]" }
];
const TESTIMONIALS = [
  {
    quote: "Certilly helped me go from curious to confident. The projects and mentors changed everything.",
    name: "Ayaan M.",
    track: "College AI Essentials",
    initials: "AM",
    accent: "border-[#5B4CF5]/20 bg-[#5B4CF5]/[0.04]"
  },
  {
    quote: "My daughter finally has a clear pathway — and I can actually follow along as a parent.",
    name: "Priya K.",
    track: "Parent & K–12 learner",
    initials: "PK",
    accent: "border-[#4CD1B0]/25 bg-[#4CD1B0]/[0.06]"
  },
  {
    quote: "The campus events and project showcases feel like a real community, not just another LMS.",
    name: "Jordan T.",
    track: "High School AI Builder",
    initials: "JT",
    accent: "border-[#6366F1]/20 bg-[#6366F1]/[0.05]"
  }
];
const ACTIVITY = [
  "12 learners joined today",
  "3 live workshops this week",
  "New capstone showcase Friday"
];
function HomeStatsSection() {
  const [activityIdx, setActivityIdx] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const id = window.setInterval(() => {
      setActivityIdx((i) => (i + 1) % ACTIVITY.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "community",
      "data-illy-section": "community",
      className: "relative overflow-hidden border-t border-border/40 py-14 sm:py-16 md:py-24",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "pointer-events-none absolute inset-0",
            style: {
              background: "linear-gradient(180deg, #FAFBFE 0%, #F3F0FF 45%, #FAFBFE 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#5B4CF5]/[0.07] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#4CD1B0]/[0.08] blur-3xl" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.12]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "inline-flex items-center gap-2 text-sm font-semibold text-[#5B4CF5]", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-4 w-4", strokeWidth: 2 }),
              "Community"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl", children: "You're not learning alone" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg", children: "Students, parents, and educators building real AI skills together — with events, showcases, and peers who actually show up." })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.05, className: "lg:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-3xl bg-[#0F1533] p-6 text-white shadow-[0_28px_64px_-24px_rgba(15,21,51,0.55)] sm:p-8", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "pointer-events-none absolute inset-0 opacity-60",
                  style: {
                    background: "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(91,76,245,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(76,209,176,0.18), transparent 50%)"
                  }
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#5B4CF5]/20 blur-2xl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4CD1B0] opacity-60" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex h-2 w-2 rounded-full bg-[#4CD1B0]" })
                  ] }),
                  ACTIVITY[activityIdx]
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-5 font-display text-2xl font-bold leading-snug sm:text-[1.75rem]", children: [
                  "Join",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-[#B8ABFF] to-[#4CD1B0] bg-clip-text text-transparent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: CAMPUS_STATS[0].value, suffix: CAMPUS_STATS[0].suffix }) }),
                  " ",
                  "learners on campus"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-md text-sm leading-relaxed text-white/65", children: "Workshops, parent sessions, project showcases, and study circles — built for every stage of the journey." })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 flex flex-wrap items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex -space-x-2.5", children: MEMBER_AVATARS.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: cn(
                        "flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0F1533] bg-gradient-to-br text-[11px] font-bold text-white shadow-md",
                        m.from
                      ),
                      style: { zIndex: MEMBER_AVATARS.length - i },
                      children: m.initials
                    },
                    m.initials
                  )) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-white/50", children: "Growing every week" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Link,
                  {
                    to: "/events",
                    className: "group inline-flex h-11 items-center gap-2 rounded-full bg-[#5B4CF5] px-5 text-sm font-bold text-white shadow-[0_12px_32px_-12px_rgba(91,76,245,0.65)] transition-all hover:scale-[1.02] hover:bg-[#4A3BE8] active:scale-[0.98]",
                    children: [
                      "Explore events",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5", children: [
                { icon: MessageCircle, label: "Study circles" },
                { icon: Calendar, label: "Live workshops" },
                { icon: Sparkles, label: "Project showcases" }
              ].map(({ icon: Icon, label }) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/75",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-3.5 w-3.5 text-[#B8ABFF]" }),
                    label
                  ]
                },
                label
              )) })
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5", children: CAMPUS_STATS.map((stat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.08 + i * 0.04, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "group flex h-full min-h-[5.5rem] flex-col justify-center rounded-2xl border border-border/50 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#5B4CF5]/20 hover:shadow-[0_12px_32px_-16px_rgba(91,76,245,0.15)] sm:min-h-[6rem] sm:p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: stat.value, suffix: stat.suffix }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs leading-snug text-muted-foreground sm:text-sm", children: stat.label })
            ] }) }, stat.label)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 grid gap-4 md:grid-cols-3", children: TESTIMONIALS.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.12 + i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              className: cn(
                "relative flex h-full flex-col rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6",
                t.accent
              ),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "h-7 w-7 text-[#5B4CF5]/25", "aria-hidden": true }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("blockquote", { className: "mt-3 flex-1 text-sm leading-relaxed text-foreground/85", children: [
                  "“",
                  t.quote,
                  "”"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex items-center gap-3 border-t border-border/40 pt-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-[#0F1533] text-xs font-bold text-white", children: t.initials }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.track })
                  ] })
                ] })
              ]
            }
          ) }, t.name)) })
        ] })
      ]
    }
  );
}
function TrustLogosMarquee() {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "border-t border-border/60 bg-white py-10 sm:py-12", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground", children: "Trusted by learners and partners worldwide" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee items-center gap-12 px-6", children: logos.map((name, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "span",
        {
          className: "shrink-0 text-lg font-bold tracking-wide text-foreground/25 sm:text-xl",
          children: name
        },
        `${name}-${i}`
      )) })
    ] })
  ] });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-x-visible bg-[#F7F8FC]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CampusExploreSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(IllyMentorSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HomeStatsSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustLogosMarquee, {})
  ] });
}
export {
  Home as component
};

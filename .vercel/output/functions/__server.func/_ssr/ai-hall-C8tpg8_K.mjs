import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as CampusBuildingHeader } from "./CampusBuildingHeader-Ddi2Fln1.mjs";
import { S as Section } from "./Section-mYe9laY8.mjs";
import { Z as Zap, V as Gamepad2, j as Calendar, l as Trophy, W as Wrench, R as Radio, U as Users } from "../_libs/lucide-react.mjs";
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
import "./router-CWfipgwJ.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const ACTIVITIES = [{
  icon: Zap,
  title: "AI mini-projects",
  description: "Short guided builds to explore tools and concepts without full enrollment."
}, {
  icon: Gamepad2,
  title: "Game creation workshops",
  description: "Create simple AI-powered games and share with the community."
}, {
  icon: Calendar,
  title: "Webinars & live events",
  description: "Parent sessions, student showcases, and industry guest talks."
}, {
  icon: Trophy,
  title: "Quiz challenges & hackathons",
  description: "Low-ticket competitions and practice experiences to build confidence."
}, {
  icon: Wrench,
  title: "AI tool exploration",
  description: "Standalone demos and sandbox activities to try new AI tools safely."
}, {
  icon: Radio,
  title: "Student competitions",
  description: "Mini hackathons and showcase events — public engagement before enrollment."
}];
const SUBSCRIPTION_BENEFITS = ["Live events & webinars", "Hackathons & challenges", "AI Hall enrichment activities", "Member discounts on full pathways", "Parent/student community sessions"];
function AIHallPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[50vh] bg-[#F5F6FA]/40", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CampusBuildingHeader, { route: "/ai-hall" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { spacing: "tight", title: "Public AI engagement", align: "center", className: "!pt-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto -mt-4 max-w-2xl text-center text-sm text-muted-foreground", children: "AI Hall is open to everyone — explore activities, demos, and events before you enroll. Capstone projects in AI Lab remain gated for enrolled students." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3", children: ACTIVITIES.map(({
        icon: Icon,
        title,
        description
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 text-base font-bold", children: title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-relaxed text-muted-foreground", children: description })
      ] }, title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 rounded-2xl border border-[#4CD1B0]/25 bg-[#F4FDF9] p-5 sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "h-5 w-5 text-[#4CD1B0]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Membership enrichment (coming)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Future subscription model for engagement benefits — not free access to all full courses." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-3 flex flex-wrap gap-2", children: SUBSCRIPTION_BENEFITS.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "rounded-full border border-border/80 bg-white px-3 py-1 text-xs text-foreground/80", children: b }, b)) })
      ] })
    ] })
  ] });
}
export {
  AIHallPage as component
};

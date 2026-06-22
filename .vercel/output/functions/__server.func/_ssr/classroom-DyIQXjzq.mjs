import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EnrollGate } from "./EnrollGate-DSbsVLfK.mjs";
import { C as CampusBuildingHeader } from "./CampusBuildingHeader-Ddi2Fln1.mjs";
import { S as Section } from "./Section-mYe9laY8.mjs";
import { c as canAccessBuilding } from "./router-CWfipgwJ.mjs";
import { y as CirclePlay, z as FileText, D as CircleCheck, v as MessageSquare, B as BookOpen } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const ENROLLED_COURSES = [{
  title: "AI Fundamentals for Young Learners",
  progress: 68,
  next: "Knowledge check: Prompt safety",
  lessons: 24,
  due: "Quiz due Friday"
}, {
  title: "College AI Essentials",
  progress: 34,
  next: "Video nugget: Building with LLMs",
  lessons: 32,
  due: "Assignment in 3 days"
}];
function ClassroomPage() {
  if (!canAccessBuilding("enrolled")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollGate, { route: "/classroom", buildingName: "My Classroom", description: "Your guided learning environment — lessons, assignments, quizzes, and resources.", illyMessage: "Once you're enrolled, I'll walk you through every lesson and keep you on track with reminders!" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CampusBuildingHeader, { route: "/classroom" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", className: "!pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: [{
        icon: CirclePlay,
        label: "Video lessons",
        value: "56"
      }, {
        icon: FileText,
        label: "Learning nuggets",
        value: "128"
      }, {
        icon: CircleCheck,
        label: "Knowledge checks",
        value: "12 pending"
      }, {
        icon: MessageSquare,
        label: "Discussions",
        value: "3 new"
      }].map(({
        icon: Icon,
        label,
        value
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-white p-4 shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-2xl font-bold text-foreground", children: value }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: label })
      ] }, label)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-lg font-bold text-foreground", children: "Enrolled courses" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Short Illy-led nuggets, resources, assignments, and quizzes — not a generic LMS page." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 grid gap-4 lg:grid-cols-2", children: ENROLLED_COURSES.map((course) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "rounded-2xl border border-border/70 bg-white p-5 shadow-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-semibold text-foreground", children: course.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: course.next })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                course.lessons,
                " lessons"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                course.progress,
                "% complete"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1.5 h-2 overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-brand-gradient", style: {
              width: `${course.progress}%`
            } }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-medium text-primary", children: course.due })
          ] })
        ] }, course.title)) })
      ] })
    ] }) })
  ] });
}
export {
  ClassroomPage as component
};

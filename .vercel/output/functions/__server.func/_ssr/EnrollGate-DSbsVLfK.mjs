import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { C as CampusBuildingHeader } from "./CampusBuildingHeader-Ddi2Fln1.mjs";
import { I as IllyAvatar } from "./IllyAvatar-DM1qrzDX.mjs";
import { L as Lock, g as ArrowRight } from "../_libs/lucide-react.mjs";
function EnrollGate({ route, buildingName, description, illyMessage }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-[50vh] bg-[#F5F6FA]/50", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      CampusBuildingHeader,
      {
        route,
        title: buildingName,
        description,
        illyMessage
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-lg px-4 py-10 md:py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border bg-white shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-gradient-to-r from-[#7B6CFF] to-[#B8ABFF] px-6 py-5 text-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(IllyAvatar, { size: "lg", grounded: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold", children: "This building is locked" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-0.5 text-xs text-white/85", children: [
            "Enroll in a pathway to unlock ",
            buildingName
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-wide", children: "Enrolled students" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground", children: "Pick a certification pathway first — then My Classroom, AI Lab, Certification Hall, and Mission Control open for you and your parents." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/courses",
              className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]",
              children: [
                "Explore pathways",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/",
              hash: "campus-map",
              className: "inline-flex items-center gap-2 rounded-xl border border-border px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-muted",
              children: "View campus map"
            }
          )
        ] })
      ] })
    ] }) })
  ] });
}
export {
  EnrollGate as E
};

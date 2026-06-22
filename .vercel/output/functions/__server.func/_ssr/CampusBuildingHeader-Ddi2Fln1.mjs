import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { I as IllyAvatar } from "./IllyAvatar-DM1qrzDX.mjs";
import { g as getCampusAreaByRoute, c as canAccessBuilding, a as cn } from "./router-CWfipgwJ.mjs";
import { _ as ArrowLeft, k as MapPin, L as Lock } from "../_libs/lucide-react.mjs";
function CampusBuildingHeader({
  route,
  title,
  description,
  illyMessage,
  className
}) {
  const area = getCampusAreaByRoute(route);
  const Icon = area?.icon;
  const locked = area?.access === "enrolled" && !canAccessBuilding("enrolled");
  const displayTitle = title ?? area?.name ?? "Campus";
  const displayDesc = description ?? area?.description;
  const displayIlly = illyMessage ?? area?.illyIntro;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "header",
    {
      className: cn(
        "relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-[#EDE9FF]/55 via-white to-[#F5F6FA]/80 pt-20 pb-6 md:pt-24 md:pb-8",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#7B6CFF12,transparent)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl px-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              hash: "campus-map",
              className: "inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-3.5 w-3.5" }),
                "Back to campus map"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex shrink-0 items-end gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(IllyAvatar, { size: "lg", grounded: true }),
              Icon && /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "mb-1 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-white shadow-sm",
                  style: { color: "color" in (area ?? {}) ? area.color : "#7B6CFF" },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", "aria-hidden": true })
                }
              )
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3 w-3" }),
                  "Certily Campus"
                ] }),
                locked && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "h-3 w-3" }),
                  "Enrolled only"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl", children: displayTitle }),
              displayDesc && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base", children: displayDesc }),
              displayIlly && /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 max-w-2xl rounded-xl border border-primary/10 bg-white/80 px-4 py-3 text-sm leading-relaxed text-foreground/85 shadow-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "Illy says: " }),
                displayIlly
              ] })
            ] })
          ] })
        ] })
      ]
    }
  );
}
export {
  CampusBuildingHeader as C
};

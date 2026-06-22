import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EnrollGate } from "./EnrollGate-DSbsVLfK.mjs";
import { C as CampusBuildingHeader } from "./CampusBuildingHeader-Ddi2Fln1.mjs";
import { S as Section } from "./Section-mYe9laY8.mjs";
import { c as canAccessBuilding } from "./router-CWfipgwJ.mjs";
import { A as Award, E as ShieldCheck, H as Share2, a as Linkedin, I as ExternalLink } from "../_libs/lucide-react.mjs";
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
const CERTIFICATES = [{
  title: "AI Fundamentals for Young Learners",
  issued: "Mar 12, 2026",
  verifyId: "CERT-2026-AI-0142",
  badge: "Certified AI Explorer"
}, {
  title: "College AI Essentials",
  issued: "In progress",
  verifyId: "—",
  badge: "Capstone pending"
}];
function CertificationHallPage() {
  if (!canAccessBuilding("enrolled")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollGate, { route: "/certification-hall", buildingName: "AI Certification Hall", description: "Earn, verify, and share certificates after completing pathways and capstone projects.", illyMessage: "Complete your pathway and I'll help you celebrate — shareable credentials for college and career!" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CampusBuildingHeader, { route: "/certification-hall" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", className: "!pt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/15 bg-[#F8F7FF] p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Your credential repository" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Earn certificates after course completion, assessments, and capstone projects. Verify and share with colleges, parents, and employers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2", children: CERTIFICATES.map((cert) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-to-r from-[#7B6CFF] to-[#B8ABFF] px-5 py-4 text-white", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Award, { className: "h-5 w-5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold uppercase tracking-wider", children: "Certily" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-bold", children: cert.badge }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-white/85", children: cert.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Issued: ",
            cert.issued
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 flex items-center gap-1.5 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-[#4CD1B0]" }),
            "Verify: ",
            cert.verifyId
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex flex-wrap gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Share2, { className: "h-3.5 w-3.5" }),
              "Share"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { className: "h-3.5 w-3.5" }),
              "LinkedIn"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", className: "inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3.5 w-3.5" }),
              "Verify link"
            ] })
          ] })
        ] })
      ] }, cert.title)) })
    ] }) })
  ] });
}
export {
  CertificationHallPage as component
};

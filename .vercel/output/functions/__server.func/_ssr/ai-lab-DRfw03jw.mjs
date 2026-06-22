import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { E as EnrollGate } from "./EnrollGate-DSbsVLfK.mjs";
import { c as canAccessBuilding } from "./router-CWfipgwJ.mjs";
import { C as CampusBuildingHeader } from "./CampusBuildingHeader-Ddi2Fln1.mjs";
import { S as Section } from "./Section-mYe9laY8.mjs";
import { Z as Zap, q as Cpu, J as Cloud, K as Database, O as GitBranch, Q as Terminal, m as Activity } from "../_libs/lucide-react.mjs";
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
function AILab() {
  if (!canAccessBuilding("enrolled")) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(EnrollGate, { route: "/ai-lab", buildingName: "AI Lab", description: "Hands-on capstone projects, practice labs, templates, and AI tool workspaces.", illyMessage: "The AI Lab is where you'll build real projects — enroll in a pathway and I'll guide you through every capstone!" });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CampusBuildingHeader, { route: "/ai-lab" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-t border-border/60 bg-[#F5F6FA]/50", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-mesh opacity-[0.45] dark:opacity-20" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.28] dark:opacity-[0.12]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", className: "relative z-[1] !py-8 md:!py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-6xl rounded-3xl border border-border/70 bg-background/80 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-card/50 md:p-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-start gap-6 lg:grid-cols-2 lg:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-muted/90 to-muted/50 shadow-inner dark:from-zinc-900/90 dark:to-zinc-950/90 dark:border-white/10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 px-4 py-3 dark:border-white/10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-destructive/70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-yellow-400/70" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-green-500/70" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 font-mono text-xs text-muted-foreground", children: "lab.aicampus.io / training" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "max-h-[min(22rem,55vh)] overflow-x-auto overflow-y-auto p-4 text-xs leading-relaxed text-foreground/90 md:text-sm", children: `$ aicampus lab spin --gpu h100 --notebook
✓ Cluster ready in 8.2s
✓ Loaded model: meta-llama/Llama-3-8B
✓ Dataset: customer_support_v3 (124k rows)

> training.start(epochs=3, lr=2e-5)
  epoch 1 ────────────── loss 0.421  acc 0.87
  epoch 2 ─────────────  loss 0.198  acc 0.93
  epoch 3 ──────────── ✓ loss 0.087  acc 0.96

✓ Model exported → registry/llama3-cs-v1` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:pt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl", children: "Build like a research team — solo or with peers." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm leading-relaxed text-muted-foreground md:text-base", children: "Every learner gets autograded notebooks, dataset access, and shareable workspaces. Pair-program in real time, version with Git, and deploy to the cloud with one command." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-2.5 border-t border-border/50 pt-5 dark:border-white/10", children: ["A100 / H100 GPU clusters on demand", "Pre-configured Jupyter, VSCode, & CLI", "Versioned datasets and model registry", "Real-time pair coding with mentors"].map((x) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm text-foreground/90", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "mt-0.5 h-4 w-4 shrink-0 text-primary", "aria-hidden": true }),
            x
          ] }, x)) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", className: "relative z-[1] !pt-2 !pb-8 md:!pb-10", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Everything you need to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "ship AI" })
      ] }), align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3", children: [{
        i: Cpu,
        t: "GPU Compute",
        d: "On-demand A100, H100, and TPU v5 access for training and inference."
      }, {
        i: Cloud,
        t: "Cloud Notebooks",
        d: "Stateful Jupyter & VSCode environments, ready in seconds."
      }, {
        i: Database,
        t: "Curated Datasets",
        d: "Petabytes of curated text, vision, and multimodal datasets."
      }, {
        i: GitBranch,
        t: "Model Registry",
        d: "Version, share, and deploy models with built-in lineage."
      }, {
        i: Terminal,
        t: "CLI & SDK",
        d: "Reproducible workflows with the AICampus CLI and Python SDK."
      }, {
        i: Activity,
        t: "Live Telemetry",
        d: "Stream training metrics, GPU usage, and cost in real time."
      }].map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border/70 bg-background/70 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md dark:border-white/10 dark:bg-card/60 dark:hover:border-primary/30", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.i, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-base font-semibold", children: f.t }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm leading-snug text-muted-foreground", children: f.d })
      ] }, i)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { spacing: "tight", className: "relative z-[1] !pt-0 !pb-10 md:!pb-12", align: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto flex max-w-4xl flex-wrap justify-center gap-3 rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/[0.07] via-brand-2/[0.05] to-primary/[0.07] p-4 dark:border-primary/20 dark:from-primary/10 dark:via-brand-2/10 dark:to-primary/10 md:gap-4 md:p-5", children: [{
        k: "10M+",
        v: "GPU hours run"
      }, {
        k: "120k",
        v: "Models trained"
      }, {
        k: "<5s",
        v: "Avg lab boot"
      }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-[7.5rem] flex-1 rounded-xl border border-border/60 bg-background/70 px-4 py-3 text-center dark:border-white/10 dark:bg-card/50", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-bold gradient-text md:text-3xl", children: s.k }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-xs text-muted-foreground", children: s.v })
      ] }, s.k)) }) })
    ] })
  ] });
}
export {
  AILab as component
};

import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { P as PageHero, S as Section } from "./Section-B3puCHxZ.mjs";
import { p as MessageSquare, q as Mail, P as Phone, a as MapPin, r as Send } from "../_libs/lucide-react.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { className: "pb-5 md:pb-6", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      "Let's ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gradient-text", children: "talk" })
    ] }), description: "Partnerships, enterprise rollouts, press, or learner support — we route every message to the right desk." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative border-t border-border/60 bg-muted/35 dark:border-white/10 dark:bg-muted/10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-mesh opacity-[0.4] dark:opacity-15" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { spacing: "tight", className: "relative z-[1] !py-8 md:!py-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto mb-6 flex max-w-6xl flex-col gap-2 rounded-xl border border-border/70 bg-background/85 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-card/50 sm:flex-row sm:items-center sm:justify-between md:px-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5 shrink-0 text-primary", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground", children: "Contact routing" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Typical reply within one business day" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "max-w-md text-xs leading-relaxed text-muted-foreground sm:text-right", children: "For billing or access issues, include your account email so we can help faster." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-6xl gap-6 lg:grid-cols-12 lg:gap-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "lg:col-span-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm dark:border-white/10 dark:bg-card/55", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/60 bg-muted/40 px-5 py-4 dark:border-white/10 dark:bg-muted/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold tracking-tight", children: "Direct lines" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "Prefer email — we monitor inboxes 7 days a week." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "divide-y divide-border/60 dark:divide-white/10", children: [{
              i: Mail,
              t: "Email",
              v: "hello@aicampus.io",
              hint: "Best for detailed questions"
            }, {
              i: Phone,
              t: "Phone",
              v: "+1 (415) 555-0142",
              hint: "9am–6pm PT"
            }, {
              i: MapPin,
              t: "Office",
              v: "548 Market St, San Francisco",
              hint: "Visits by appointment"
            }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-4 px-5 py-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.i, { className: "h-5 w-5", "aria-hidden": true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-wide text-muted-foreground", children: c.t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 font-semibold text-foreground", children: c.v }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: c.hint })
              ] })
            ] }, c.t)) })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
            e.preventDefault();
            setSent(true);
          }, className: "overflow-hidden rounded-2xl border border-border/70 bg-background/85 shadow-sm dark:border-white/10 dark:bg-card/55", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/60 bg-muted/40 px-5 py-4 md:px-6 md:py-5 dark:border-white/10 dark:bg-muted/20", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-lg font-bold tracking-tight md:text-xl", children: "Write to us" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "All fields are required. We never sell your details — only AI Campus staff see this form." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4 p-5 md:p-6", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", name: "name" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", name: "email", type: "email" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Subject", name: "subject" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground", htmlFor: "message", children: "Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { id: "message", name: "message", rows: 6, required: true, className: "mt-1.5 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-primary/35 dark:border-white/10 dark:bg-card", placeholder: "What would you like to achieve with AI Campus?" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 font-semibold text-white shadow-elegant transition hover:scale-[1.02] active:scale-[0.98]", children: sent ? "Sent ✓" : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                "Send message ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4", "aria-hidden": true })
              ] }) })
            ] })
          ] }) })
        ] })
      ] })
    ] })
  ] });
}
function Field({
  label,
  name,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground", htmlFor: name, children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { id: name, name, type, required: true, className: "mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-primary/35 dark:border-white/10 dark:bg-card" })
  ] });
}
export {
  Contact as component
};

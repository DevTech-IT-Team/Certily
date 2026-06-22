import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as cn } from "./router-CWfipgwJ.mjs";
function Section({
  title,
  description,
  children,
  className = "",
  align = "left",
  spacing = "default",
  id
}) {
  const center = align === "center";
  const pad = spacing === "tight" ? "py-8 md:py-12" : "py-14 md:py-20";
  const bodyTop = spacing === "tight" ? "mt-6 md:mt-8" : "mt-8 md:mt-12";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id, className: `relative mx-auto max-w-6xl px-4 ${pad} ${className}`, children: [
    (title || description) && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `max-w-2xl ${center ? "mx-auto text-center" : ""}`, children: [
      title && /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-0 text-2xl font-bold leading-tight tracking-tight md:text-3xl", children: title }),
      description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 md:mt-3 text-sm md:text-base text-muted-foreground leading-relaxed", children: description })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: title || description ? bodyTop : "", children })
  ] });
}
function PageHero({
  title,
  description,
  children,
  imageSrc,
  imageAlt = "",
  className
}) {
  const split = Boolean(imageSrc);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      className: cn(
        "relative overflow-hidden border-b border-border/50 pt-20 pb-6 md:pt-24 md:pb-8",
        className
      ),
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-mesh -z-10" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-bg -z-10 opacity-50" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "div",
          {
            className: `mx-auto px-4 animate-fade-up ${split ? "max-w-6xl grid gap-6 lg:grid-cols-[minmax(0,1fr)_min(38%,280px)] lg:items-center lg:gap-10" : "max-w-5xl text-center"}`,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: split ? "text-center lg:text-left" : "", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "h1",
                  {
                    className: `mt-0 font-bold leading-tight tracking-tight text-2xl md:text-3xl lg:text-4xl ${split ? "" : "mx-auto max-w-3xl"}`,
                    children: title
                  }
                ),
                description && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "p",
                  {
                    className: `mt-3 md:mt-4 text-base md:text-lg text-muted-foreground max-w-2xl ${split ? "mx-auto lg:mx-0" : "mx-auto"}`,
                    children: description
                  }
                ),
                children && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-5 md:mt-6 ${split ? "flex justify-center lg:justify-start" : ""}`, children })
              ] }),
              split && imageSrc && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto w-full max-w-sm lg:max-w-none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[5/3] overflow-hidden rounded-2xl border border-border/80 bg-muted/30 shadow-elegant lg:aspect-[4/3]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: imageSrc, alt: imageAlt, className: "h-full w-full object-cover", loading: "eager" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 bg-gradient-to-tr from-primary/25 via-transparent to-transparent" })
              ] }) })
            ]
          }
        )
      ]
    }
  );
}
export {
  PageHero as P,
  Section as S
};

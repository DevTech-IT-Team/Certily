import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { g as gsapWithCSS } from "../_libs/gsap.mjs";
import { a as cn, i as illyImg } from "./router-CWfipgwJ.mjs";
const sizes = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-24 w-24",
  xl: "h-32 w-32",
  hero: "h-40 w-32 sm:h-44 sm:w-36",
  statue: "h-52 w-40 sm:h-60 sm:w-44 md:h-72 md:w-52 lg:h-80 lg:w-56"
};
function IllyAvatar({
  size = "md",
  className,
  variant = "plain",
  onLight = true,
  animate = false,
  grounded = false,
  interactive = false,
  onInteract,
  showHint = false
}) {
  const useOrb = variant === "orb";
  const hideMatte = onLight && !useOrb;
  const rootRef = reactExports.useRef(null);
  const [hovered, setHovered] = reactExports.useState(false);
  const [wiggle, setWiggle] = reactExports.useState(false);
  const bounce = reactExports.useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    gsapWithCSS.fromTo(
      el,
      { scale: 1 },
      { scale: 1.06, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out" }
    );
  }, []);
  const handleClick = () => {
    if (!interactive) return;
    setWiggle(true);
    bounce();
    window.setTimeout(() => setWiggle(false), 400);
    onInteract?.();
  };
  const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    grounded && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        className: cn(
          "absolute bottom-0 left-1/2 z-0 h-2 w-[70%] -translate-x-1/2 rounded-full bg-primary/15 blur-md",
          hovered && interactive && "h-2.5 w-[80%] bg-primary/25"
        )
      }
    ),
    interactive && hovered && showHint && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        role: "tooltip",
        className: "absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg",
        children: "Ask me anything"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: cn(
          "relative flex items-end justify-center overflow-visible",
          useOrb && "overflow-hidden rounded-full bg-gradient-to-b from-[#2B2650] to-[#12101F] p-[8%] ring-1 ring-black/5",
          sizes[size],
          interactive && hovered && "ring-2 ring-primary/25 rounded-full",
          wiggle && "scale-105"
        ),
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: illyImg,
            alt: "ILY, your AI campus guide",
            className: cn(
              "relative z-10 h-full w-full object-contain object-bottom transition-transform duration-300",
              hideMatte && "mix-blend-lighten",
              !useOrb && "drop-shadow-[0_8px_24px_rgba(123,108,255,0.22)]",
              interactive && hovered && "scale-105"
            ),
            draggable: false
          }
        )
      }
    )
  ] });
  const shellClass = cn(
    "relative shrink-0",
    animate && "animate-float",
    interactive && "cursor-pointer",
    className
  );
  if (interactive) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        ref: rootRef,
        type: "button",
        className: cn(
          shellClass,
          "border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
          size === "statue" || size === "hero" ? "rounded-2xl" : "rounded-full"
        ),
        onClick: handleClick,
        onMouseEnter: () => setHovered(true),
        onMouseLeave: () => setHovered(false),
        onFocus: () => setHovered(true),
        onBlur: () => setHovered(false),
        "aria-label": "Chat with Illy",
        children: inner
      }
    );
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: rootRef, className: shellClass, children: inner });
}
export {
  IllyAvatar as I
};

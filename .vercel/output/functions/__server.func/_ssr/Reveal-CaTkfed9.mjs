import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as cn } from "./router-CWfipgwJ.mjs";
import { u as useReducedMotion, m as motion } from "../_libs/framer-motion.mjs";
function Reveal({ children, className, delay = 0 }) {
  const reduce = useReducedMotion();
  if (reduce) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className, children });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      className: cn(className),
      initial: { opacity: 0, y: 28 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, margin: "-60px" },
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay },
      children
    }
  );
}
export {
  Reveal as R
};

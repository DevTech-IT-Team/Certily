import { useEffect, useRef } from "react";
import { useRouterState } from "@tanstack/react-router";
import gsap from "gsap";

export function PageEnter({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const path = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 0.35, ease: "power2.out" }
    );
  }, [path]);

  return <div ref={ref}>{children}</div>;
}

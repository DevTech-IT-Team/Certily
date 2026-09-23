import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

export function PageEnter({ children }: { children: ReactNode }) {
  const path = useRouterState({ select: (s) => s.location.pathname });

  return (
    <div key={path} className="animate-fade-in">
      {children}
    </div>
  );
}

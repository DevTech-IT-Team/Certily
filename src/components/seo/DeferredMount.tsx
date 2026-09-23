import { useEffect, useRef, useState, type ReactNode } from "react";

export function DeferredMount({
  children,
  fallback = null,
  rootMargin = "80px",
}: {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  timeout?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setReady(true);
        observer.disconnect();
      },
      { rootMargin },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return <div ref={ref}>{ready ? children : fallback}</div>;
}

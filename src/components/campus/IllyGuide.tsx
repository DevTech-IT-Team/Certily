import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { IllyAvatar } from "./IllyAvatar";
import { cn } from "@/lib/utils";

type IllyGuideProps = {
  message: string;
  title?: string;
  className?: string;
  variant?: "card" | "inline" | "hero";
  /** Glow ring + subtle scale on hero card */
  interactive?: boolean;
};

export function IllyGuide({
  message,
  title = "Hi, I'm Illy!",
  className,
  variant = "card",
  interactive = false,
}: IllyGuideProps) {
  const bubbleRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const prevMessage = useRef(message);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    const el = bubbleRef.current;
    if (!el || prevMessage.current === message) return;
    prevMessage.current = message;
    setTyping(true);
    gsap.fromTo(
      el,
      { opacity: 0, y: 8, filter: "blur(4px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 0.45,
        ease: "power2.out",
        onComplete: () => setTyping(false),
      }
    );
    if (interactive && cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { boxShadow: "0 0 0 0 rgba(123,108,255,0.4)" },
        {
          boxShadow: "0 0 0 8px rgba(123,108,255,0)",
          duration: 0.6,
          ease: "power2.out",
        }
      );
    }
  }, [message, interactive]);

  if (variant === "inline") {
    return (
      <div className={cn("flex items-start gap-3", className)}>
        <IllyAvatar size="md" grounded />
        <div ref={bubbleRef} className="min-w-0 flex-1">
          <p className="text-xs font-semibold text-primary">{title}</p>
          <p className="mt-0.5 text-sm leading-snug text-muted-foreground">{message}</p>
        </div>
      </div>
    );
  }

  if (variant === "hero") {
    return (
      <div
        ref={cardRef}
        className={cn(
          "relative overflow-hidden rounded-2xl border border-primary/15 bg-white/95 shadow-[0_16px_48px_-12px_rgba(123,108,255,0.35)] backdrop-blur-sm transition-shadow",
          interactive && "hover:shadow-glow",
          className
        )}
      >
        <div className="h-1 bg-brand-gradient animate-shimmer bg-[length:200%_100%]" aria-hidden />
        <div className="flex items-stretch gap-0 sm:gap-1">
          <div className="relative flex w-[7.5rem] shrink-0 items-end justify-center overflow-hidden border-r border-border/60 bg-gradient-to-b from-primary/5 to-white px-2 pb-3 pt-4 sm:w-[8.5rem] sm:px-3">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(123,108,255,0.15),transparent_65%)]"
            />
            <IllyAvatar size="hero" grounded animate className="relative z-10" />
          </div>
          <div ref={bubbleRef} className="flex min-w-0 flex-1 flex-col justify-center px-4 py-4 sm:px-5 sm:py-5">
            <p className="text-sm font-bold text-foreground sm:text-[15px]">
              {title} <span aria-hidden>👋</span>
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{message}</p>
            <p className="mt-3 flex items-center gap-1.5 text-[10px] font-medium uppercase tracking-wider text-primary/70">
              {typing ? (
                <>
                  <span className="inline-flex gap-0.5">
                    <span className="h-1 w-1 animate-bounce rounded-full bg-primary [animation-delay:0ms]" />
                    <span className="h-1 w-1 animate-bounce rounded-full bg-primary [animation-delay:150ms]" />
                    <span className="h-1 w-1 animate-bounce rounded-full bg-primary [animation-delay:300ms]" />
                  </span>
                  Illy is typing
                </>
              ) : (
                "Your campus guide"
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-primary/15 bg-white shadow-elegant",
        className
      )}
    >
      <div className="flex items-stretch">
        <div className="flex w-24 shrink-0 items-end justify-center bg-white px-2 pb-3 pt-3">
          <IllyAvatar size="lg" grounded />
        </div>
        <div ref={bubbleRef} className="min-w-0 flex-1 px-4 py-4">
          <p className="text-sm font-bold text-foreground">
            {title} <span aria-hidden>👋</span>
          </p>
          <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{message}</p>
        </div>
      </div>
    </div>
  );
}

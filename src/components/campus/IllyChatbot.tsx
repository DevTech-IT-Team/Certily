import { Link, useRouterState } from "@tanstack/react-router";
import { X } from "lucide-react";
import { useEffect } from "react";
import illyImg from "@/assets/illy.png";
import { useIlly } from "./IllyContext";
import { getIllyMessageForPath, ILLY_STARTER_PROMPTS } from "@/lib/illy-guide";
import { cn } from "@/lib/utils";

function IllyMark({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0F1533]",
        className
      )}
    >
      <img src={illyImg} alt="" className="h-[88%] w-[88%] object-contain object-bottom" />
    </div>
  );
}

function IllyMascotPanel({
  className,
  onClose,
}: {
  className?: string;
  onClose?: () => void;
}) {
  const { message, showTip } = useIlly();

  return (
    <div
      className={cn(
        "flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-white shadow-[0_24px_64px_-20px_rgba(15,14,26,0.35)]",
        className
      )}
    >
      <div className="flex items-center justify-between bg-gradient-to-r from-[#5B4CF5] to-[#7C6FF7] px-4 py-3 text-white">
        <div className="flex items-center gap-2.5">
          <IllyMark className="h-9 w-9" />
          <div>
            <p className="font-display text-sm font-semibold tracking-wide">ILY</p>
            <p className="text-[10px] text-white/80">Your campus guide</p>
          </div>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-white/80 hover:bg-white/15"
            aria-label="Close ILY"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex gap-3 px-4 py-4">
        <IllyMark className="mt-0.5 h-8 w-8" />
        <div className="min-w-0 rounded-2xl rounded-tl-md bg-[#F7F8FC] px-3.5 py-2.5 text-sm leading-relaxed text-foreground">
          {message}
        </div>
      </div>

      <div className="border-t border-border/60 px-4 py-3">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
          Quick guides
        </p>
        <div className="flex flex-col gap-2">
          {ILLY_STARTER_PROMPTS.map((prompt) =>
            prompt.href ? (
              <Link
                key={prompt.id}
                to={prompt.href}
                onClick={() => showTip(prompt.message, true)}
                className="rounded-xl border border-border/70 bg-[#FAFBFE] px-3 py-2.5 text-left text-xs font-medium text-foreground transition-colors hover:border-[#5B4CF5]/30 hover:bg-[#F7F8FC]"
              >
                {prompt.label}
              </Link>
            ) : (
              <button
                key={prompt.id}
                type="button"
                onClick={() => showTip(prompt.message, true)}
                className="rounded-xl border border-border/70 bg-[#FAFBFE] px-3 py-2.5 text-left text-xs font-medium text-foreground transition-colors hover:border-[#5B4CF5]/30 hover:bg-[#F7F8FC]"
              >
                {prompt.label}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export function IllyChatFloating() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const { floatingOpen, setFloatingOpen, setMessage } = useIlly();

  useEffect(() => {
    setMessage(getIllyMessageForPath(pathname), true);
  }, [pathname, setMessage]);

  useEffect(() => {
    if (!floatingOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFloatingOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [floatingOpen, setFloatingOpen]);

  if (!floatingOpen) {
    return (
      <button
        type="button"
        onClick={() => setFloatingOpen(true)}
        className="group fixed bottom-6 right-6 z-[90]"
        aria-label="Open ILY guide"
      >
        <span
          className="absolute inset-0 rounded-full bg-[#5B4CF5]/30 animate-ping"
          style={{ animationDuration: "4s" }}
          aria-hidden
        />
        <span className="relative flex items-center gap-2.5 rounded-full border border-[#E4E2F0] bg-white py-1.5 pl-1.5 pr-5 shadow-[0_12px_40px_-12px_rgba(91,76,245,0.35)] transition-transform group-hover:scale-[1.03]">
          <IllyMark className="h-9 w-9" />
          <span className="font-display text-sm font-semibold tracking-wide text-[#5B4CF5]">
            ILY
          </span>
        </span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-[90] w-[min(calc(100vw-1.5rem),20rem)]">
      <IllyMascotPanel className="w-full" onClose={() => setFloatingOpen(false)} />
    </div>
  );
}

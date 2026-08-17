import { Link } from "@tanstack/react-router";
import { VAvatar } from "./VAvatar";
import { useV } from "./VContext";
import { V_STARTER_PROMPTS } from "@/lib/v-guide";
import { cn } from "@/lib/utils";

type DockProps = { className?: string; embedded?: boolean; compact?: boolean };

/** Mascot tip dock — sits under the campus map */
export function VChatDock({ className, embedded = false, compact = false }: DockProps) {
  const { message, showTip } = useV();

  return (
    <div
      id="v-hero"
      data-v-section="v-panel"
      className={cn(
        embedded
          ? "scroll-mt-24 mt-0 w-full px-0"
          : "border-t border-border/60 bg-gradient-to-b from-white via-white to-[#F8F7FF] px-4 py-5 sm:px-6 sm:py-6",
        className
      )}
    >
      <div
        className={cn(
          "flex w-full items-start gap-3 sm:gap-4",
          compact ? "flex-col" : "flex-row"
        )}
      >
        {!compact && (
          <VAvatar size="md" reaction="stand" className="shrink-0 bg-[#0F1533] p-0.5 rounded-full" />
        )}

        <div className="min-w-0 flex-1 text-left">
          <p className="text-xs font-semibold text-primary">V · Your guide</p>
          <p className="mt-2 max-w-[42ch] text-sm leading-[1.65] text-foreground/90">{message}</p>

          <div className="mt-3 flex flex-wrap gap-1.5 sm:mt-4 sm:gap-2">
            {V_STARTER_PROMPTS.slice(0, compact ? 2 : 4).map((p) => {
              const chip = (
                <button
                  type="button"
                  onClick={() => showTip(p.message, true, "point")}
                  className="rounded-full border border-border/80 bg-white px-3 py-1.5 text-left text-xs font-medium text-foreground/75 shadow-sm transition-all hover:border-primary/30 hover:text-primary"
                >
                  {p.label}
                </button>
              );
              if ("href" in p && typeof p.href === "string") {
                return (
                  <Link key={p.id} to={p.href as any} onClick={() => showTip(p.message, true, "point")}>
                    {chip}
                  </Link>
                );
              }
              return <span key={p.id}>{chip}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/** @deprecated use VChatDock */
export const VSidekickShowcase = VChatDock;

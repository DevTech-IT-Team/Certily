import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { VAvatar } from "./VAvatar";
import { useV } from "./VContext";
import { CAMPUS_MAP_AREAS } from "@/lib/campus";
import { canAccessBuilding } from "@/lib/enrollment";
import { cn } from "@/lib/utils";

const DEFAULT_GREETING =
  "Hover over any building on the campus map to explore what's inside — or tap me anytime to chat!";

export function VHeroCard() {
  const { reaction, activeBuildingId, isInitialWelcome, setFloatingOpen } = useV();
  const activeBuilding = CAMPUS_MAP_AREAS.find((b) => b.id === activeBuildingId);

  return (
    <div
      className={cn(
        "group relative w-full rounded-2xl border bg-white p-4 transition-all duration-300 shadow-[0_8px_32px_-12px_rgba(15,14,26,0.1)] sm:p-5 text-left min-h-[156px] sm:min-h-[168px]",
        activeBuilding
          ? "border-[#5B4CF5]/40 bg-gradient-to-r from-white via-[#F5F3FF]/70 to-white ring-2 ring-[#5B4CF5]/20 shadow-[0_14px_40px_-10px_rgba(91,76,245,0.22)]"
          : "border-[#E4E2F0] hover:border-[#5B4CF5]/25 hover:shadow-[0_12px_36px_-10px_rgba(91,76,245,0.18)]"
      )}
    >
      <div className="flex items-start gap-3.5 sm:gap-4">
        <button
          type="button"
          onClick={() => setFloatingOpen(true)}
          className="relative shrink-0 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#5B4CF5]"
          title="Chat with V"
        >
          <VAvatar
            size="md"
            reaction={activeBuilding ? reaction : isInitialWelcome ? "hi" : reaction}
            className="bg-[#0F1533] p-0.5 rounded-full ring-2 ring-[#5B4CF5]/20 transition-transform group-hover:scale-105"
          />
        </button>

        <div className="min-w-0 flex-1">
          {activeBuilding ? (
            <div className="space-y-1.5 animate-fadeIn">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-extrabold text-white shadow-xs"
                  style={{ backgroundColor: activeBuilding.color }}
                >
                  <activeBuilding.icon className="h-3 w-3" />
                  {activeBuilding.name}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-wider text-[#5B4CF5] uppercase">
                  <Sparkles className="h-3 w-3 text-[#5B4CF5]" />
                  V Explaining
                </span>
              </div>

              <p className="text-xs leading-relaxed text-[#2D2A4A] font-medium sm:text-sm">
                "{activeBuilding.vIntro}"
              </p>

              <div className="pt-1">
                <Link
                  to={canAccessBuilding(activeBuilding.access) ? activeBuilding.route : "/learning"}
                  className="group/link inline-flex items-center gap-1.5 text-xs font-extrabold text-[#5B4CF5] transition-colors hover:text-[#4A3BE0]"
                >
                  <span>Explore {activeBuilding.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </div>
          ) : isInitialWelcome ? (
            <div className="animate-fadeIn">
              <div className="flex items-center gap-1.5 mb-1">
                <span className="inline-flex items-center gap-1 rounded-full bg-[#5B4CF5] px-2.5 py-0.5 text-[11px] font-extrabold text-white shadow-xs">
                  Hi 👋
                </span>
                <span className="text-xs font-extrabold text-[#5B4CF5] uppercase tracking-wider">
                  Welcome to Certcia!
                </span>
              </div>
              <p className="text-xs leading-relaxed text-[#2D2A4A] font-medium sm:text-sm">
                I'm <span className="font-display font-bold text-[#5B4CF5]">V</span> — your campus guide. Hover over any building on the map to explore what's inside!
              </p>
              <button
                type="button"
                onClick={() => setFloatingOpen(true)}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4CF5] hover:underline"
              >
                <span>Ask V a question</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <div>
              <p className="text-sm font-bold text-[#0F1533] sm:text-base">
                Meet <span className="font-display tracking-wide text-[#5B4CF5]">V</span> — your campus guide{" "}
                <span aria-hidden>👋</span>
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#5A607A] sm:text-sm">
                {DEFAULT_GREETING}
              </p>
              <button
                type="button"
                onClick={() => setFloatingOpen(true)}
                className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#5B4CF5] hover:underline"
              >
                <span>Ask V a question</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

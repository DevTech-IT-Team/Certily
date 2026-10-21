import { getPathwayThumbnail } from "@/lib/pathways";
import { cn } from "@/lib/utils";

const MOSAIC_STAGES = [
  "elementary",
  "middle",
  "high",
  "professional",
] as const;

export function PathwayCollageThumbnail({
  className,
  badgeText = "6 Pathways",
}: {
  className?: string;
  badgeText?: string;
}) {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-[#EEEAF8]", className)}>
      {/* 2x2 Clean Crisp Grid */}
      <div className="grid h-full w-full grid-cols-2 grid-rows-2 gap-[1.5px] bg-[#E2DEF4]/60">
        {MOSAIC_STAGES.map((id) => (
          <div key={id} className="relative h-full w-full overflow-hidden bg-[#EEEAF8]">
            <img
              src={getPathwayThumbnail(id)}
              alt=""
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            {/* Subtle atmospheric tint */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
          </div>
        ))}
      </div>

      {/* Elegant Frosted Glass Center Badge */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center p-2">
        <div className="flex items-center gap-1.5 rounded-full border border-white/50 bg-[#0F1533]/85 px-3 py-1 shadow-[0_10px_25px_-5px_rgba(15,21,51,0.55)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/70 group-hover:bg-[#5B4CF5]/90">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4ADE80] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#4ADE80]" />
          </span>
          <span className="font-display text-[11px] font-bold uppercase tracking-wider text-white">
            {badgeText}
          </span>
        </div>
      </div>
    </div>
  );
}

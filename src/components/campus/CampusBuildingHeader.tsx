import { Link } from "@tanstack/react-router";
import { ArrowLeft, Lock, MapPin } from "lucide-react";
import { IllyAvatar } from "./IllyAvatar";
import { getCampusAreaByRoute, type CampusBuilding } from "@/lib/campus";
import { canAccessBuilding } from "@/lib/enrollment";
import { cn } from "@/lib/utils";

type CampusBuildingHeaderProps = {
  route: string;
  title?: string;
  description?: string;
  illyMessage?: string;
  className?: string;
};

export function CampusBuildingHeader({
  route,
  title,
  description,
  illyMessage,
  className,
}: CampusBuildingHeaderProps) {
  const area = getCampusAreaByRoute(route);
  const Icon = area?.icon;
  const locked = area?.access === "enrolled" && !canAccessBuilding("enrolled");
  const displayTitle = title ?? area?.name ?? "Campus";
  const displayDesc = description ?? area?.description;
  const displayIlly = illyMessage ?? area?.illyIntro;

  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-border/50 bg-gradient-to-b from-[#EDE9FF]/55 via-white to-[#F5F6FA]/80 pt-20 pb-6 md:pt-24 md:pb-8",
        className
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#7B6CFF12,transparent)]"
      />
      <div className="relative mx-auto max-w-6xl px-4">
        <Link
          to="/"
          hash="campus-map"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to campus map
        </Link>

        <div className="mt-4 flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex shrink-0 items-end gap-3">
            <IllyAvatar size="lg" grounded />
            {Icon && (
              <div
                className="mb-1 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-white shadow-sm"
                style={{ color: "color" in (area ?? {}) ? (area as CampusBuilding).color : "#7B6CFF" }}
              >
                <Icon className="h-5 w-5" aria-hidden />
              </div>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-primary">
                <MapPin className="h-3 w-3" />
                Certily Campus
              </span>
              {locked && (
                <span className="inline-flex items-center gap-1 rounded-full bg-muted px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  Enrolled only
                </span>
              )}
            </div>
            <h1 className="mt-2 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {displayTitle}
            </h1>
            {displayDesc && (
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {displayDesc}
              </p>
            )}
            {displayIlly && (
              <p className="mt-4 max-w-2xl rounded-xl border border-primary/10 bg-white/80 px-4 py-3 text-sm leading-relaxed text-foreground/85 shadow-sm">
                <span className="font-semibold text-primary">Illy says: </span>
                {displayIlly}
              </p>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

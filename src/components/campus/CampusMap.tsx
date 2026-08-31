import { useEffect, useRef, useState, type CSSProperties } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ArrowRight, Lock, MessageCircle } from "lucide-react";
import campusMapImg from "@/assets/Certcia_Campus_Map.png";
import { CAMPUS_MAP_AREAS, type CampusMapArea } from "@/lib/campus";
import avatarHi from "@/assets/avatars/hi.png";
import { canAccessBuilding } from "@/lib/enrollment";
import { useV } from "./VContext";
import { VAvatar } from "./VAvatar";
import { cn } from "@/lib/utils";

const DEFAULT_CAMPUS_MSG =
  "Tap a building badge to explore — or hover a building for a quick preview.";

/** Hero plaza on certbg.png — centre fountain */
const V_HERO_PLAZA = { top: "44%", left: "48%", size: "13.5%" } as const;
/** Default map anchor — full-page map */
const V_CENTER = { top: "46%", left: "50%" } as const;

/** Hero map: mockup shows AI Lab (top-right), not AI Hall pin */
const HERO_HIDDEN_PIN_IDS = new Set(["ai-hall"]);

/** Hero map aspect — must match certbg.png (1536×1024) */
const MAP_ASPECT = "3 / 2" as const;

type HeroZone = {
  id: string;
  title: string;
  description: string;
  /** Invisible hover target over the 3D building */
  hit: { top: string; left: string; width: string; height: string };
  /** Badge position on map (% of 3:2 frame) */
  label: { top?: string; left?: string; bottom?: string; centerX?: boolean };
};

/** 6 exact badge positions matching reference layout */
/** certbg.png 3:2 (1536×1024) — Badge positions matched directly to building signs */
const HERO_BUILDING_ZONES: HeroZone[] = [
  {
    // Learning Pathways — top-left building with "LEARNING PATHWAYS" sign
    id: "learning-pathways",
    title: "Learning Pathways",
    description: "Explore self-paced courses and structured learning paths.",
    hit: { top: "16%", left: "3%", width: "30%", height: "30%" },
    label: { top: "-2%", left: "-4%" },
  },
  {
    // Hall of Fame — bottom-left building with "HALL OF FAME" sign
    id: "certification-hall",
    title: "Hall of Fame",
    description: "Celebrate achievements, certifications and learner milestones.",
    hit: { top: "48%", left: "3%", width: "30%", height: "34%" },
    label: { top: "40%", left: "-5%" },
  },
  {
    // My Classroom — top-center building with "MY CLASSROOM" sign
    id: "my-classroom",
    title: "My Classroom",
    description: "Access your courses, assignments and learning progress.",
    hit: { top: "10%", left: "35%", width: "30%", height: "30%" },
    label: { top: "-14%", left: "30%" },
  },
  {
    // AI Lab — top-right building with "AI LAB" sign
    id: "ai-lab",
    title: "AI Lab",
    description: "Hands-on projects, capstone courses and AI tools to build.",
    hit: { top: "16%", left: "67%", width: "30%", height: "30%" },
    label: { top: "-2%", left: "66%" },
  },
  {
    // Newsroom — bottom-right building with "NEWSROOM" sign
    id: "newsroom",
    title: "Newsroom",
    description: "Stay updated with AI news, industry insights and announcements.",
    hit: { top: "48%", left: "67%", width: "30%", height: "34%" },
    label: { top: "68%", left: "64%" },
  },
];


const HERO_BADGE_ORDER = HERO_BUILDING_ZONES.map((z) => z.id);

type CampusMapProps = {
  className?: string;
  showGuide?: boolean;
  embedded?: boolean;
  presentation?: "default" | "hero";
};

function HeroMockupLabel({
  building,
  title,
  description,
  locked,
  highlighted,
  onActivate,
  className,
  style,
}: {
  building: CampusMapArea;
  title: string;
  description: string;
  locked: boolean;
  highlighted?: boolean;
  onActivate: () => void;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <Link
      to={locked ? "/learning" : building.route}
      data-campus-badge
      onMouseEnter={onActivate}
      onFocus={onActivate}
      style={style}
      className={cn(
        // White card mockup label matching reference UI
        "relative block rounded-2xl border border-[#E8E6F0] bg-white px-3.5 py-2.5 backdrop-blur-sm",
        "w-[10.5rem] sm:w-[11.5rem] md:w-[12.5rem] lg:w-[13rem]",
        "shadow-[0_8px_30px_-6px_rgba(15,21,51,0.18)] transition-all duration-200",
        "hover:scale-[1.03] hover:border-[#5B4CF5]/40 hover:shadow-[0_14px_36px_-8px_rgba(91,76,245,0.25)]",
        highlighted && "scale-[1.03] border-[#5B4CF5]/40 ring-2 ring-[#5B4CF5]/20",
        className
      )}
    >
      <p className="pr-6 text-[11px] font-extrabold uppercase leading-tight tracking-[0.05em] text-[#0F1533] sm:text-[11.5px]">
        {title}
      </p>
      <p className="mt-1 pr-5 text-[9.5px] leading-[1.45] text-[#5A607A] sm:text-[10px]">
        {description}
      </p>
      <span
        className={cn(
          "absolute right-2.5 top-2.5 flex h-5 w-5 items-center justify-center rounded-full sm:h-5.5 sm:w-5.5",
          locked ? "bg-[#F0F1F7] text-[#9896A9]" : "bg-[#5B4CF5] text-white shadow-sm"
        )}
      >
        {locked ? <Lock className="h-2.5 w-2.5" /> : <ArrowRight className="h-2.5 w-2.5" />}
      </span>
    </Link>
  );
}

function HeroBuildingBadge({
  building,
  title,
  description,
  locked,
  isActive,
  onActivate,
}: {
  building: CampusMapArea;
  title: string;
  description: string;
  locked: boolean;
  isActive: boolean;
  onActivate: () => void;
}) {
  const Icon = building.icon;

  return (
    <Link
      to={locked ? "/learning" : building.route}
      data-campus-badge
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={cn(
        "group flex items-start gap-2.5 rounded-xl border bg-white p-2.5 shadow-[0_8px_28px_-10px_rgba(15,14,26,0.12)]",
        "transition-all hover:border-[#5B4CF5]/25 hover:shadow-[0_12px_32px_-8px_rgba(91,76,245,0.2)]",
        isActive ? "border-[#5B4CF5]/30 ring-1 ring-[#5B4CF5]/15" : "border-[#E4E2F0]"
      )}
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
        style={{ backgroundColor: `${building.color}18`, color: building.color }}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2.25} />
      </span>
      <span className="min-w-0 flex-1">
        <p className="text-[11px] font-bold leading-tight text-foreground">{title}</p>
        <p className="mt-0.5 line-clamp-2 text-[10px] leading-snug text-[#5A5872]">{description}</p>
      </span>
      <span
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
          locked ? "bg-[#F0F1F7] text-[#9896A9]" : "bg-[#EDE9FF] text-[#5B4CF5]"
        )}
      >
        {locked ? <Lock className="h-2.5 w-2.5" /> : <ArrowRight className="h-2.5 w-2.5" />}
      </span>
    </Link>
  );
}

function HeroCampusFrame({
  visibleAreas,
  activeId,
  onActivate,
  onDeactivate,
  onVClick,
  setReady,
}: {
  visibleAreas: CampusMapArea[];
  activeId: string | null;
  onActivate: (b: CampusMapArea) => void;
  onDeactivate: () => void;
  onVClick: () => void;
  setReady: (v: boolean) => void;
}) {
  const byId = (id: string) => visibleAreas.find((b) => b.id === id);
  const activeBuilding = activeId ? byId(activeId) : null;

  // Keep the last active building so the DOM doesn't get destroyed/recreated on hover, which causes layout fluctuation
  const [lastActiveId, setLastActiveId] = useState<string | null>(null);
  const [vHovered, setVHovered] = useState(false);
  useEffect(() => {
    if (activeId) setLastActiveId(activeId);
  }, [activeId]);
  const displayBuilding = activeBuilding || (lastActiveId ? byId(lastActiveId) : visibleAreas[0]);

  const renderBadge = (id: string) => {
    const building = byId(id);
    const zone = HERO_BUILDING_ZONES.find((z) => z.id === id);
    if (!building || !zone) return null;
    return (
      <HeroBuildingBadge
        building={building}
        title={zone.title}
        description={zone.description}
        locked={!canAccessBuilding(building.access)}
        isActive={activeId === building.id}
        onActivate={() => onActivate(building)}
      />
    );
  };

  const renderBuildingHit = (zone: HeroZone) => {
    const building = byId(zone.id);
    if (!building) return null;
    const active = activeId === zone.id;
    const locked = !canAccessBuilding(building.access);

    return (
      <div
        key={`hit-${zone.id}`}
        className="pointer-events-auto absolute z-10 block rounded-2xl outline-none"
        style={{
          top: zone.hit.top,
          left: zone.hit.left,
          width: zone.hit.width,
          height: zone.hit.height,
        }}
        onMouseEnter={() => onActivate(building)}
        onFocus={() => onActivate(building)}
        aria-label={`Explore ${zone.title}`}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl"
          aria-hidden
        />
      </div>
    );
  };

  return (
    <div data-campus-scene className="relative w-full overflow-visible bg-transparent">
      {/* Natural image — no container, no cropping, no border */}
      <div className="relative w-full">
        <img
          src={campusMapImg}
          alt="Certcia AI Campus — interactive 3D university with learning buildings"
          className="relative z-0 block h-auto w-full select-none"
          width={1536}
          height={1024}
          onLoad={() => setReady(true)}
          draggable={false}
          decoding="sync"
          style={{
            maskImage: "radial-gradient(50% 50% at 50% 50%, black 95%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(50% 50% at 50% 50%, black 95%, transparent 100%)"
          }}
        />

        {/* Building hit zones — interactive previews without floating badges */}
        <div
          className="pointer-events-none absolute inset-0 isolate z-20 hidden overflow-visible sm:block"
          onMouseLeave={onDeactivate}
        >
          {HERO_BUILDING_ZONES.map((zone) => renderBuildingHit(zone))}
        </div>

        {/* Hover the V already in the campus image — no extra floating avatar */}
        <button
          type="button"
          className="absolute z-[25] cursor-pointer border-0 bg-transparent p-0"
          style={{
            top: V_HERO_PLAZA.top,
            left: V_HERO_PLAZA.left,
            width: V_HERO_PLAZA.size,
            aspectRatio: "4 / 5",
            transform: "translate(-54%, -72%)",
          }}
          onMouseEnter={() => setVHovered(true)}
          onMouseLeave={() => setVHovered(false)}
          onClick={onVClick}
          aria-label="Hi, I'm V — how can I help you?"
        >
          {vHovered && (
            <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-1 w-max max-w-[13rem] -translate-x-1/2 sm:max-w-[15rem]">
              <div className="rounded-2xl border border-[#5B4CF5]/25 bg-white/95 px-3 py-2 text-center shadow-[0_10px_28px_-12px_rgba(15,21,51,0.35)] backdrop-blur-md">
                <p className="text-[11px] font-bold leading-snug text-[#0F1533] sm:text-xs">
                  Hi, I'm V — how can I help you?
                </p>
              </div>
              <div className="mx-auto h-2 w-2 -translate-y-1 rotate-45 border-b border-r border-[#5B4CF5]/25 bg-white/95" />
            </div>
          )}
        </button>

        {/* Dynamic Speech Bubbles floating over their respective buildings */}
        <div className="pointer-events-none absolute inset-0 z-30 hidden overflow-visible sm:block">
          {HERO_BUILDING_ZONES.map((zone) => {
            const active = activeId === zone.id;
            const building = byId(zone.id);
            if (!building) return null;

            return (
              <div
                key={`bubble-${zone.id}`}
                className={cn(
                  "absolute z-30 w-52 sm:w-60 transition-all duration-300 ease-out",
                  active
                    ? "opacity-100 translate-y-0 scale-100"
                    : "opacity-0 translate-y-4 scale-95"
                )}
                style={{
                  top: zone.label.top,
                  left: zone.label.left,
                  bottom: zone.label.bottom,
                }}
              >
                <div className="relative rounded-2xl border border-[#5B4CF5]/40 bg-white/98 p-3 shadow-[0_20px_40px_-6px_rgba(15,21,51,0.25)] backdrop-blur-md text-left ring-2 ring-[#5B4CF5]/20">
                  {/* Decorative pointer pointing towards the building center */}
                  <div className="absolute top-1/2 -right-1.5 h-3 w-3 -translate-y-1/2 rotate-45 border-t border-r border-[#5B4CF5]/30 bg-white/98 hidden" />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between gap-1 mb-2">
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-extrabold text-white shadow-sm"
                        style={{ backgroundColor: building.color }}
                      >
                        <building.icon className="h-3 w-3" />
                        {building.name}
                      </span>
                      <div className="flex items-center gap-1">
                        <img src={avatarHi} alt="V" className="h-4 w-4 drop-shadow-sm" />
                        <span className="text-[9px] font-bold text-[#5B4CF5] uppercase tracking-wider">
                          V Guide
                        </span>
                      </div>
                    </div>
                    <p className="text-[11px] leading-snug font-medium text-[#2D2A4A]">
                      {building.vIntro}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile — tap cards below map */}
      <div className="mt-4 grid grid-cols-2 gap-2 sm:hidden lg:grid-cols-3">
        {HERO_BADGE_ORDER.map((id) => (
          <div key={id}>{renderBadge(id)}</div>
        ))}
      </div>
    </div>
  );
}

function BuildingPin({
  building,
  isActive,
  onActivate,
  onDeactivate,
}: {
  building: CampusMapArea;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}) {
  const locked = !canAccessBuilding(building.access);
  const Icon = building.icon;

  return (
    <div
      data-campus-pin
      className={cn(
        "group absolute -translate-x-1/2 -translate-y-1/2 hover:z-50",
        isActive && "z-50"
      )}
      style={{ top: building.mapPosition.top, left: building.mapPosition.left }}
      onMouseEnter={onActivate}
      onMouseLeave={onDeactivate}
    >
      <button
        type="button"
        onFocus={onActivate}
        onBlur={onDeactivate}
        onClick={(e) => {
          e.stopPropagation();
          onActivate();
        }}
        className="relative flex h-7 w-7 items-center justify-center rounded-full outline-none focus-visible:ring-2 focus-visible:ring-[#4CD1B0] sm:h-9 sm:w-9"
        aria-label={building.name}
      >
        <span
          className={cn(
            "absolute inset-0 rounded-full opacity-50",
            isActive ? "animate-ping bg-[#4CD1B0]" : "bg-primary/30"
          )}
          aria-hidden
        />
        <span
          className={cn(
            "relative h-3.5 w-3.5 rounded-full border-2 border-white bg-[#4CD1B0] shadow-[0_0_12px_rgba(76,209,176,0.65)] transition-transform",
            isActive ? "scale-125 ring-2 ring-[#4CD1B0]/40 ring-offset-2" : "group-hover:scale-110"
          )}
        />
      </button>

      <div
        className={cn(
          "absolute top-full left-1/2 z-30 mt-1.5 w-[9.5rem] -translate-x-1/2 transition-all duration-300 sm:mt-2 sm:w-[12rem]",
          isActive
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0 md:group-hover:pointer-events-auto md:group-hover:translate-y-0 md:group-hover:opacity-100"
        )}
      >
        <Link
          to={locked ? "/learning" : building.route}
          onClick={(e) => e.stopPropagation()}
          className={cn(
            "pointer-events-auto block rounded-xl border bg-white/98 p-3 shadow-[0_12px_40px_-12px_rgba(15,21,51,0.35)] backdrop-blur-md transition-transform hover:scale-[1.02]",
            isActive ? "border-primary/50" : "border-border/80"
          )}
        >
          <div className="flex items-start justify-between gap-2">
            <div
              className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{ backgroundColor: `${building.color}18`, color: building.color }}
            >
              <Icon className="h-4 w-4" />
            </div>
            {locked && <Lock className="h-3.5 w-3.5 text-muted-foreground" />}
          </div>
          <p className="mt-2 text-xs font-bold text-[#0F1533]">{building.name}</p>
          <p className="mt-0.5 text-[10px] leading-snug text-muted-foreground">{building.tagline}</p>
          <p className="mt-2 flex items-center gap-1 text-[10px] font-semibold text-primary">
            {locked ? "Enroll to unlock" : "Enter building"} <ArrowRight className="h-3 w-3" />
          </p>
        </Link>
      </div>
    </div>
  );
}

export function CampusMap({
  className,
  showGuide = true,
  embedded = false,
  presentation = "default",
}: CampusMapProps) {
  const isHero = presentation === "hero";
  const { message, setMessage, setFloatingOpen } = useV();
  const mapRef = useRef<HTMLDivElement>(null);
  const vDefaultRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [defaultVHovered, setDefaultVHovered] = useState(false);

  const displayMessage = activeId
    ? CAMPUS_MAP_AREAS.find((b) => b.id === activeId)?.vIntro ?? message
    : message || DEFAULT_CAMPUS_MSG;

  useEffect(() => {
    if (!ready) setMessage(DEFAULT_CAMPUS_MSG);
  }, [ready, setMessage]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !ready) return;

    const ctx = gsap.context(() => {
      if (!isHero) {
        gsap.from("[data-campus-scene]", {
          opacity: 0,
          y: 16,
          duration: 0.9,
          ease: "power3.out",
        });
      }

      if (!isHero) {
        gsap.from("[data-campus-pin]", {
          opacity: 0,
          scale: 0.92,
          duration: 0.5,
          stagger: 0.08,
          delay: 0.35,
          ease: "back.out(1.6)",
        });

        gsap.fromTo(
          "[data-campus-badge]",
          { opacity: 0, y: 8 },
          {
            opacity: 1,
            y: 0,
            duration: 0.45,
            stagger: 0.07,
            delay: 0.4,
            ease: "power2.out",
          }
        );
      }

      if (vDefaultRef.current && !isHero) {
        gsap.from(vDefaultRef.current, {
          opacity: 0,
          scale: 0.9,
          duration: 0.7,
          delay: 0.55,
          ease: "back.out(1.5)",
        });
      }
    }, map);

    return () => ctx.revert();
  }, [ready, isHero]);

  const visibleAreas = isHero
    ? CAMPUS_MAP_AREAS.filter((b) => !HERO_HIDDEN_PIN_IDS.has(b.id))
    : CAMPUS_MAP_AREAS;

  const handleActivate = (building: CampusMapArea) => {
    setActiveId(building.id);
    setMessage(building.vIntro, true, "point");
  };

  const scene = isHero ? (
    <HeroCampusFrame
      visibleAreas={visibleAreas}
      activeId={activeId}
      onActivate={handleActivate}
      onDeactivate={() => {
        setActiveId(null);
        setMessage(DEFAULT_CAMPUS_MSG, false, "stand");
      }}
      onVClick={() => {
        setActiveId(null);
        setMessage("Tap any building — I'll tell you what's inside!", true, "hi");
        (window as Window & { focusVChat?: () => void }).focusVChat?.();
      }}
      setReady={setReady}
    />
  ) : (
    <div
      data-campus-scene
      className="relative mx-auto w-full"
      style={{ aspectRatio: MAP_ASPECT }}
    >
      <img
        src={campusMapImg}
        alt="Certcia AI Campus — interactive 3D university with learning buildings"
        className="absolute inset-0 h-full w-full select-none object-cover object-center mix-blend-screen"
        width={1536}
        height={1024}
        onLoad={() => setReady(true)}
        draggable={false}
        decoding="sync"
      />

      <div className="absolute inset-0">
        <div
          ref={vDefaultRef}
          className="absolute z-30 -translate-x-1/2 -translate-y-[80%]"
          style={{ top: V_CENTER.top, left: V_CENTER.left, width: "12%" }}
        >
          <button
            type="button"
            className="relative aspect-[4/5] w-full cursor-pointer border-0 bg-transparent p-0"
            onMouseEnter={() => setDefaultVHovered(true)}
            onMouseLeave={() => setDefaultVHovered(false)}
            onClick={() => {
              setActiveId(null);
              setMessage("Tap any building pin — I'll tell you what's inside!", true, "hi");
              (window as Window & { focusVChat?: () => void }).focusVChat?.();
            }}
            aria-label="Hi, I'm V — how can I help you?"
          >
            {defaultVHovered && (
              <div className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-1 w-max max-w-[13rem] -translate-x-1/2">
                <div className="rounded-2xl border border-[#5B4CF5]/25 bg-white/95 px-3 py-2 text-center shadow-[0_10px_28px_-12px_rgba(15,21,51,0.35)] backdrop-blur-md">
                  <p className="text-[11px] font-bold leading-snug text-[#0F1533] sm:text-xs">
                    Hi, I'm V — how can I help you?
                  </p>
                </div>
                <div className="mx-auto h-2 w-2 -translate-y-1 rotate-45 border-b border-r border-[#5B4CF5]/25 bg-white/95" />
              </div>
            )}
          </button>
        </div>

        {visibleAreas.map((building) => (
          <BuildingPin
            key={building.id}
            building={building}
            isActive={activeId === building.id}
            onActivate={() => handleActivate(building)}
            onDeactivate={() => {
              setActiveId(null);
              setMessage(DEFAULT_CAMPUS_MSG);
            }}
          />
        ))}
      </div>
    </div>
  );

  return (
    <div ref={mapRef} className={cn("relative overflow-visible bg-transparent", className)}>
      {embedded ? scene : (
        <div className="overflow-hidden rounded-2xl border border-border/50 bg-white shadow-neutral md:rounded-3xl">
          {scene}
        </div>
      )}

      {showGuide && (
        <div className="mt-5 rounded-2xl border border-border/70 bg-[#FAFBFE] p-4 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex min-w-0 flex-1 items-start gap-3 sm:items-center">
              <VAvatar size="md" />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-primary">V · Campus guide</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">{displayMessage}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setFloatingOpen(true)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/80"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              Ask V
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

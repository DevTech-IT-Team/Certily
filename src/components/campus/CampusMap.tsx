import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";
import { Link } from "@tanstack/react-router";
import gsap from "gsap";
import { ArrowRight, Lock, MessageCircle } from "lucide-react";
import campusMapImg from "@/assets/certbg.png";
import illyImg from "@/assets/illy.png";
import { CAMPUS_MAP_AREAS, type CampusMapArea } from "@/lib/campus";
import { canAccessBuilding } from "@/lib/enrollment";
import { useIlly } from "./IllyContext";
import { IllyAvatar } from "./IllyAvatar";
import { cn } from "@/lib/utils";

const DEFAULT_CAMPUS_MSG =
  "Tap a building badge to explore — or hover a building for a quick preview.";

/** Hero plaza on certbg.png — centre fountain */
const ILLY_HERO_PLAZA = { top: "44%", left: "48%", size: "13.5%" } as const;
/** Default map anchor — full-page map */
const ILLY_CENTER = { top: "46%", left: "50%" } as const;

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

/** certbg.png 3:2 (1536×1024) — black bg removed via mix-blend-screen on light hero */
const HERO_BUILDING_ZONES: HeroZone[] = [
  {
    id: "learning-pathways",
    title: "Learning Pathways",
    description: "Explore self-paced courses and structured learning paths.",
    hit: { top: "9%", left: "8%", width: "28%", height: "38%" },
    label: { top: "2%", left: "10%" },
  },
  {
    id: "ai-lab",
    title: "AI Lab",
    description: "Hands-on projects, capstone courses and AI tools to build.",
    hit: { top: "7%", left: "52%", width: "38%", height: "36%" },
    label: { top: "1%", left: "50%" },
  },
  {
    id: "newsroom",
    title: "Newsroom",
    description: "Stay updated with AI news, industry insights and announcements.",
    hit: { top: "20%", left: "56%", width: "34%", height: "28%" },
    label: { top: "15%", left: "64%" },
  },
  {
    id: "my-classroom",
    title: "My Classroom",
    description: "Access your courses, assignments and learning progress.",
    hit: { top: "36%", left: "4%", width: "26%", height: "32%" },
    label: { top: "30%", left: "1%" },
  },
  {
    id: "certification-hall",
    title: "Hall of Fame",
    description: "Celebrate achievements, certifications and learner milestones.",
    hit: { top: "52%", left: "30%", width: "40%", height: "44%" },
    label: { bottom: "3%", left: "50%", centerX: true },
  },
  {
    id: "mission-control",
    title: "Mission Control",
    description: "Track goals, stats, certificates and personal progress.",
    hit: { top: "48%", left: "54%", width: "38%", height: "38%" },
    label: { top: "42%", left: "58%" },
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
      to={locked ? "/courses" : building.route}
      data-campus-badge
      onMouseEnter={onActivate}
      onFocus={onActivate}
      style={style}
      className={cn(
        "relative block w-[7.75rem] rounded-[11px] border border-[#E8E6F0] bg-white px-2 py-1.5 shadow-[0_8px_24px_-8px_rgba(15,21,51,0.25)] transition-all duration-200",
        "sm:w-[9rem] md:w-[10rem] lg:w-[10.75rem]",
        "hover:scale-[1.02] hover:border-[#5B4CF5]/30 hover:shadow-[0_12px_32px_-10px_rgba(91,76,245,0.22)]",
        highlighted && "scale-[1.02] border-[#5B4CF5]/35 ring-2 ring-[#5B4CF5]/15",
        className
      )}
    >
      <p className="pr-5 text-[10px] font-extrabold uppercase leading-[1.2] tracking-[0.05em] text-[#0F1533] sm:text-[10.5px]">
        {title}
      </p>
      <p className="mt-0.5 pr-4 text-[9px] leading-[1.4] text-[#5A5872] sm:text-[9.5px]">
        {description}
      </p>
      <span
        className={cn(
          "absolute bottom-1.5 right-1.5 flex h-4 w-4 items-center justify-center rounded-full sm:h-5 sm:w-5",
          locked ? "bg-[#F0F1F7] text-[#9896A9]" : "bg-[#5B4CF5] text-white"
        )}
      >
        {locked ? <Lock className="h-2 w-2 sm:h-2.5 sm:w-2.5" /> : <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5" />}
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
      to={locked ? "/courses" : building.route}
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
  onIllyClick,
  illyRef,
  setReady,
}: {
  visibleAreas: CampusMapArea[];
  activeId: string | null;
  onActivate: (b: CampusMapArea) => void;
  onDeactivate: () => void;
  onIllyClick: () => void;
  illyRef: RefObject<HTMLButtonElement | null>;
  setReady: (v: boolean) => void;
}) {
  const byId = (id: string) => visibleAreas.find((b) => b.id === id);

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

  const renderMapBadge = (zone: HeroZone) => {
    const building = byId(zone.id);
    if (!building) return null;
    const highlighted = activeId === zone.id;

    return (
      <HeroMockupLabel
        key={`badge-${zone.id}`}
        building={building}
        title={zone.title}
        description={zone.description}
        locked={!canAccessBuilding(building.access)}
        highlighted={highlighted}
        onActivate={() => onActivate(building)}
        className={cn(
          "pointer-events-auto absolute z-40",
          zone.label.centerX && "-translate-x-1/2",
          zone.id === "certification-hall" && "z-50"
        )}
        style={{
          top: zone.label.top,
          left: zone.label.left,
          bottom: zone.label.bottom,
        }}
      />
    );
  };

  const renderBuildingHit = (zone: HeroZone) => {
    const building = byId(zone.id);
    if (!building) return null;
    const active = activeId === zone.id;

    return (
      <div
        key={`hit-${zone.id}`}
        className="absolute z-10"
        style={{
          top: zone.hit.top,
          left: zone.hit.left,
          width: zone.hit.width,
          height: zone.hit.height,
        }}
        onMouseEnter={() => onActivate(building)}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 rounded-2xl transition-all duration-300",
            active ? "bg-[#5B4CF5]/[0.07] ring-2 ring-[#5B4CF5]/20" : "bg-transparent ring-0"
          )}
          aria-hidden
        />
      </div>
    );
  };

  return (
    <div data-campus-scene className="relative w-full overflow-visible bg-transparent">
      <div className="relative w-full bg-transparent">
        {/* screen = black pixels invisible on light hero — no dark square */}
        <img
          src={campusMapImg}
          alt="Certily AI Campus — interactive 3D university with learning buildings"
          className="relative z-0 block w-full h-auto max-w-none select-none bg-transparent mix-blend-screen"
          width={1536}
          height={1024}
          onLoad={() => setReady(true)}
          draggable={false}
          decoding="sync"
        />

        {/* Badges — normal blend, on top of campus */}
        <div
          className="pointer-events-none absolute inset-0 isolate z-10 hidden overflow-visible sm:block [&_[data-campus-badge]]:pointer-events-auto"
          onMouseLeave={onDeactivate}
        >
          {HERO_BUILDING_ZONES.map((zone) => renderBuildingHit(zone))}
          {HERO_BUILDING_ZONES.map((zone) => renderMapBadge(zone))}
        </div>

        {/* Illy — centre plaza */}
        <button
          ref={illyRef}
          type="button"
          className="absolute z-[15] flex items-end justify-center overflow-visible bg-transparent outline-none transition-transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-[#5B4CF5]/50"
          style={{
            top: ILLY_HERO_PLAZA.top,
            left: ILLY_HERO_PLAZA.left,
            width: ILLY_HERO_PLAZA.size,
            transform: "translate(-54%, -56%)",
          }}
          onClick={onIllyClick}
          aria-label="Chat with Illy"
        >
          <img
            src={illyImg}
            alt="Illy on the campus plaza"
            className="relative h-auto w-full max-w-none object-contain object-bottom mix-blend-screen drop-shadow-[0_8px_20px_rgba(91,76,245,0.2)]"
            draggable={false}
          />
        </button>
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
          to={locked ? "/courses" : building.route}
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
  const { message, setMessage, setFloatingOpen } = useIlly();
  const mapRef = useRef<HTMLDivElement>(null);
  const illyHeroRef = useRef<HTMLButtonElement>(null);
  const illyDefaultRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  const displayMessage = activeId
    ? CAMPUS_MAP_AREAS.find((b) => b.id === activeId)?.illyIntro ?? message
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

      if (illyDefaultRef.current && !isHero) {
        gsap.from(illyDefaultRef.current, {
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
    setMessage(building.illyIntro, true);
  };

  const scene = isHero ? (
    <HeroCampusFrame
      visibleAreas={visibleAreas}
      activeId={activeId}
      onActivate={handleActivate}
      onDeactivate={() => {
        setActiveId(null);
        setMessage(DEFAULT_CAMPUS_MSG);
      }}
      onIllyClick={() => {
        setActiveId(null);
        setMessage("Tap any building — I'll tell you what's inside!", true);
        (window as Window & { focusIllyChat?: () => void }).focusIllyChat?.();
      }}
      illyRef={illyHeroRef}
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
        alt="Certily AI Campus — interactive 3D university with learning buildings"
        className="absolute inset-0 h-full w-full select-none object-cover object-center mix-blend-screen"
        width={1536}
        height={1024}
        onLoad={() => setReady(true)}
        draggable={false}
        decoding="sync"
      />

      <div className="absolute inset-0">
        <div
          ref={illyDefaultRef}
          className="absolute z-30 -translate-x-1/2 -translate-y-1/2"
          style={{ top: ILLY_CENTER.top, left: ILLY_CENTER.left }}
        >
          <IllyAvatar
            size="statue"
            onLight
            interactive
            showHint
            className="scale-[0.45] sm:scale-[0.58] md:scale-[0.65] lg:scale-[0.72]"
            onInteract={() => {
              setActiveId(null);
              setMessage("Tap any building pin — I'll tell you what's inside!", true);
              (window as Window & { focusIllyChat?: () => void }).focusIllyChat?.();
            }}
          />
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
              <IllyAvatar size="md" />
              <div className="min-w-0">
                <p className="text-xs font-semibold text-primary">Illy · Campus guide</p>
                <p className="mt-1 text-sm leading-relaxed text-foreground/80">{displayMessage}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setFloatingOpen(true)}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border bg-white px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/80"
            >
              <MessageCircle className="h-4 w-4 text-primary" />
              Ask Illy
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

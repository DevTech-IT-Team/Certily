import { useCallback, useContext, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { VContext, type VReaction } from "./VContext";

import avatarHi from "@/assets/avatars/hi.png";
import avatarPoint from "@/assets/avatars/point.png";
import avatarStand from "@/assets/avatars/stand.png";
import avatarStare from "@/assets/avatars/stare.png";
import avatarThink from "@/assets/avatars/think.png";

const ILY_AVATARS = {
  hi: avatarHi,
  point: avatarPoint,
  stand: avatarStand,
  stare: avatarStare,
  think: avatarThink,
};

type VAvatarProps = {
  size?: "sm" | "md" | "lg" | "xl" | "hero" | "statue";
  className?: string;
  variant?: "plain" | "orb";
  /** mix-blend-lighten hides black matte on light surfaces */
  onLight?: boolean;
  animate?: boolean;
  grounded?: boolean;
  interactive?: boolean;
  onInteract?: () => void;
  showHint?: boolean;
  reaction?: VReaction;
  customImageSrc?: string;
  /** Fill the parent box instead of a fixed size */
  fill?: boolean;
};

const sizes = {
  sm: "h-10 w-10",
  md: "h-16 w-16",
  lg: "h-24 w-24",
  xl: "h-32 w-32",
  hero: "h-40 w-32 sm:h-44 sm:w-36",
  statue: "h-52 w-40 sm:h-60 sm:w-44 md:h-72 md:w-52 lg:h-80 lg:w-56",
};

export function VAvatar({
  size = "md",
  className,
  variant = "plain",
  onLight = true,
  animate = false,
  grounded = false,
  interactive = false,
  onInteract,
  showHint = false,
  reaction,
  customImageSrc,
  fill = false,
}: VAvatarProps) {
  const useOrb = variant === "orb";
  const hideMatte = onLight && !useOrb;
  const rootRef = useRef<HTMLElement | null>(null);
  const [hovered, setHovered] = useState(false);
  const [wiggle, setWiggle] = useState(false);

  const vCtx = useContext(VContext);
  const contextReaction: VReaction = vCtx?.reaction ?? "stand";

  const activeReaction = reaction || contextReaction;
  const imageSrc = customImageSrc || ILY_AVATARS[activeReaction] || avatarStand;
  const [shownSrc, setShownSrc] = useState(imageSrc);
  const [outgoingSrc, setOutgoingSrc] = useState<string | null>(null);

  useEffect(() => {
    if (imageSrc === shownSrc) return;
    setOutgoingSrc(shownSrc);
    setShownSrc(imageSrc);
    const timer = window.setTimeout(() => setOutgoingSrc(null), 380);
    return () => window.clearTimeout(timer);
  }, [imageSrc, shownSrc]);

  const bounce = useCallback(() => {
    const el = rootRef.current;
    if (!el) return;
    gsap.fromTo(
      el,
      { scale: 1, rotate: 0 },
      { scale: 1.08, rotate: 2, duration: 0.18, yoyo: true, repeat: 1, ease: "power2.out" },
    );
  }, []);

  const handleClick = () => {
    if (!interactive) return;
    setWiggle(true);
    bounce();
    window.setTimeout(() => setWiggle(false), 400);
    onInteract?.();
  };

  const inner = (
    <>
      {grounded && (
        <div
          aria-hidden
          className={cn(
            "absolute bottom-0 left-1/2 z-0 h-2 w-[70%] -translate-x-1/2 rounded-full bg-primary/15 blur-md",
            hovered && interactive && "h-2.5 w-[80%] bg-primary/25",
          )}
        />
      )}
      {interactive && hovered && showHint && (
        <div
          role="tooltip"
          className="absolute -top-10 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-foreground px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg"
        >
          Ask me anything
        </div>
      )}
      <div
        className={cn(
          "relative flex items-end justify-center overflow-visible",
          useOrb &&
            "overflow-hidden rounded-full bg-gradient-to-b from-[#2B2650] to-[#12101F] p-[8%] ring-1 ring-black/5",
          fill ? "h-full w-full" : sizes[size],
          interactive && hovered && "rounded-full ring-2 ring-primary/25",
          wiggle && "scale-105",
        )}
      >
        {outgoingSrc && (
          <img
            src={outgoingSrc}
            alt=""
            aria-hidden
            className={cn(
              "absolute inset-0 z-10 h-full w-full object-contain object-bottom opacity-0 transition-opacity duration-300",
              hideMatte && "mix-blend-lighten",
            )}
            draggable={false}
          />
        )}
        <img
          src={shownSrc}
          alt="V, your AI campus guide"
          className={cn(
            "relative z-10 h-full w-full object-contain object-bottom transition-transform duration-300",
            hideMatte && "mix-blend-lighten",
            !useOrb && "drop-shadow-[0_8px_24px_rgba(123,108,255,0.22)]",
            interactive && hovered && "scale-105",
          )}
          draggable={false}
        />
      </div>
    </>
  );

  const shellClass = cn(
    "relative shrink-0",
    animate && "animate-float",
    interactive && "cursor-pointer",
    fill && "h-full w-full",
    className,
  );

  if (interactive) {
    return (
      <button
        ref={(el) => {
          (rootRef as React.MutableRefObject<HTMLElement | null>).current = el;
        }}
        type="button"
        className={cn(
          shellClass,
          "border-0 bg-transparent p-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2",
          size === "statue" || size === "hero" || fill ? "rounded-2xl" : "rounded-full",
        )}
        onClick={handleClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        aria-label="Chat with V"
      >
        {inner}
      </button>
    );
  }

  return (
    <div
      ref={(el) => {
        (rootRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
      className={shellClass}
    >
      {inner}
    </div>
  );
}

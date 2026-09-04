import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";

import { cn } from "@/lib/utils";

const THETA = 0.3;
const SCALE = 1;
const MARKER_ELEVATION = 0.05;

const REGIONS = [
  {
    id: "na",
    name: "North America",
    location: [40.7128, -74.006] as [number, number],
    color: "#2F6BFF",
    label: "bottom" as const,
    blink: true,
  },
  {
    id: "eu",
    name: "UK & Europe",
    location: [51.5074, -0.1278] as [number, number],
    color: "#5B4CF5",
    label: "left" as const,
    blink: false,
  },
  {
    id: "me",
    name: "Middle East",
    location: [25.2048, 55.2708] as [number, number],
    color: "#2BB3E0",
    label: "bottom" as const,
    blink: false,
  },
  {
    id: "in",
    name: "India & South Asia",
    location: [28.6139, 77.209] as [number, number],
    color: "#E24A42",
    label: "right" as const,
    blink: false,
  },
  {
    id: "apac",
    name: "Asia-Pacific",
    location: [35.6762, 139.6503] as [number, number],
    color: "#E8B931",
    label: "right" as const,
    blink: false,
  },
] as const;

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: THETA,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 12000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [91 / 255, 76 / 255, 245 / 255],
  glowColor: [1, 1, 1],
  markerElevation: MARKER_ELEVATION,
  markers: [],
};

function latLngToVec([lat, lng]: [number, number]) {
  const latR = (lat * Math.PI) / 180;
  const lngR = (lng * Math.PI) / 180 - Math.PI;
  const cosLat = Math.cos(latR);
  return [-cosLat * Math.cos(lngR), Math.sin(latR), cosLat * Math.sin(lngR)] as const;
}

function project(location: [number, number], phi: number, theta: number) {
  const [x0, y0, z0] = latLngToVec(location);
  const r = 0.8 + MARKER_ELEVATION;
  const x = x0 * r;
  const y = y0 * r;
  const z = z0 * r;
  const ct = Math.cos(theta);
  const cp = Math.cos(phi);
  const st = Math.sin(theta);
  const sp = Math.sin(phi);
  let rx = cp * x + sp * z;
  let ry = sp * st * x + ct * y - cp * st * z;
  const rz = -sp * ct * x + st * y + cp * ct * z;
  if (rz < 0) {
    const len = Math.hypot(rx, ry) || 1;
    const rim = 0.78;
    rx = (rx / len) * rim;
    ry = (ry / len) * rim;
  }
  return {
    x: (rx * SCALE + 1) / 2,
    y: (-ry * SCALE + 1) / 2,
  };
}

function MapPin({ color }: { color: string }) {
  return (
    <svg viewBox="0 0 32 44" className="h-8 w-6 drop-shadow-[0_6px_10px_rgba(15,21,51,0.28)] sm:h-9 sm:w-7" aria-hidden>
      <path
        d="M16 0C7.2 0 0 7.1 0 15.8c0 11.4 16 28.2 16 28.2S32 27.2 32 15.8C32 7.1 24.8 0 16 0z"
        fill={color}
      />
      <circle cx="16" cy="15.5" r="6.2" fill="white" />
    </svg>
  );
}

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const labelsRef = useRef<HTMLDivElement>(null);
  const phiRef = useRef(0);
  const widthRef = useRef(0);
  const pointerInteracting = useRef<number | null>(null);
  const pointerMovement = useRef(0);
  const visibleRef = useRef(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    widthRef.current = canvas.offsetWidth;

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { rootMargin: "80px" },
    );
    observer.observe(canvas);

    const globe = createGlobe(canvas, {
      ...config,
      devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
      width: Math.max(widthRef.current, 1) * 2,
      height: Math.max(widthRef.current, 1) * 2,
    });

    const onResize = () => {
      widthRef.current = canvas.offsetWidth;
      globe.update({
        width: Math.max(widthRef.current, 1) * 2,
        height: Math.max(widthRef.current, 1) * 2,
      });
    };
    window.addEventListener("resize", onResize);
    onResize();

    const pins = labelsRef.current
      ? Array.from(labelsRef.current.querySelectorAll<HTMLElement>("[data-region]"))
      : [];

    let frame = 0;
    const tick = () => {
      if (visibleRef.current) {
        if (pointerInteracting.current === null && !reduceMotion) {
          phiRef.current += 0.002;
        }
        const phi = phiRef.current + pointerMovement.current / 200;
        globe.update({ phi });

        for (const el of pins) {
          const region = REGIONS.find((item) => item.id === el.dataset.region);
          if (!region) continue;
          const point = project(region.location, phi, THETA);
          el.style.left = `${point.x * 100}%`;
          el.style.top = `${point.y * 100}%`;
          el.style.opacity = "1";
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);

    canvas.style.opacity = "1";

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", onResize);
      globe.destroy();
    };
  }, [config]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-square w-full max-w-none",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        aria-label="Rotating globe"
        className="size-full cursor-grab opacity-0 transition-opacity duration-500"
        onPointerDown={(event) => {
          pointerInteracting.current =
            event.clientX - pointerMovement.current;
          event.currentTarget.style.cursor = "grabbing";
        }}
        onPointerUp={(event) => {
          pointerInteracting.current = null;
          event.currentTarget.style.cursor = "grab";
        }}
        onPointerOut={(event) => {
          pointerInteracting.current = null;
          event.currentTarget.style.cursor = "grab";
        }}
        onMouseMove={(event) => {
          if (pointerInteracting.current === null) return;
          pointerMovement.current = event.clientX - pointerInteracting.current;
        }}
        onTouchMove={(event) => {
          if (pointerInteracting.current === null || !event.touches[0]) return;
          pointerMovement.current =
            event.touches[0].clientX - pointerInteracting.current;
        }}
      />
      <div ref={labelsRef} className="pointer-events-none absolute inset-0 z-10">
        {REGIONS.map((region) => (
          <div
            key={region.id}
            data-region={region.id}
            className="absolute transition-opacity duration-200"
            style={{ left: "50%", top: "50%", opacity: 1, transform: "translate(-50%, -100%)" }}
          >
            <div className="relative flex flex-col items-center">
              <span
                className={cn(
                  "absolute bottom-0 left-1/2 h-7 w-7 rounded-full",
                  region.blink ? "animate-map-pin-pulse" : "opacity-40",
                )}
                style={{ backgroundColor: region.color }}
              />
              {region.blink && (
                <span
                  className="absolute bottom-0 left-1/2 h-7 w-7 rounded-full animate-map-pin-pulse"
                  style={{ backgroundColor: region.color, animationDelay: "0.9s" }}
                />
              )}
              <MapPin color={region.color} />
              <span
                className={cn(
                  "absolute whitespace-nowrap rounded-md border border-white/15 bg-[#0F1533] px-2 py-1 text-[10px] font-bold text-white shadow-[0_8px_18px_-10px_rgba(15,21,51,0.45)] sm:text-[11px]",
                  region.label === "bottom" && "top-[calc(100%+6px)] left-1/2 -translate-x-1/2",
                  region.label === "left" && "right-[calc(100%+8px)] top-1",
                  region.label === "right" && "left-[calc(100%+8px)] top-1",
                )}
              >
                {region.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

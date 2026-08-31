import { useEffect, useRef } from "react";
import createGlobe, { type COBEOptions } from "cobe";

import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 12000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.012 },
    { location: [19.076, 72.8777], size: 0.02 },
    { location: [23.8103, 90.4125], size: 0.013 },
    { location: [30.0444, 31.2357], size: 0.014 },
    { location: [39.9042, 116.4074], size: 0.015 },
    { location: [-23.5505, -46.6333], size: 0.016 },
    { location: [19.4326, -99.1332], size: 0.016 },
    { location: [40.7128, -74.006], size: 0.02 },
    { location: [34.6937, 135.5022], size: 0.013 },
    { location: [41.0082, 28.9784], size: 0.013 },
  ],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
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

    let frame = 0;
    const tick = () => {
      if (visibleRef.current) {
        if (pointerInteracting.current === null && !reduceMotion) {
          phiRef.current += 0.005;
        }
        globe.update({
          phi: phiRef.current + pointerMovement.current / 200,
        });
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
    </div>
  );
}

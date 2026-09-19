import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import fallbackPreview from "@/assets/certcia.mp4";

type CourseHoverThumbnailProps = {
  image: string;
  alt: string;
  videoUrl?: string;
  badgeLogo?: string;
  hovered: boolean;
  className?: string;
  children?: ReactNode;
};

export function CourseHoverThumbnail({
  image,
  alt,
  videoUrl,
  badgeLogo,
  hovered,
  className,
  children,
}: CourseHoverThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const src = videoUrl || fallbackPreview;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (hovered) {
      video.currentTime = 0;
      const playPromise = video.play();
      if (playPromise) {
        playPromise
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false));
      }
      return;
    }

    video.pause();
    video.currentTime = 0;
    setPlaying(false);
  }, [hovered]);

  return (
    <div className={cn("relative aspect-[16/9] w-full overflow-hidden bg-gray-100", className)}>
      <img
        src={image}
        alt={alt}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-transform duration-700",
          playing ? "opacity-0" : "opacity-100",
          hovered && !playing ? "scale-105" : "scale-100",
        )}
      />
      <video
        ref={videoRef}
        src={src}
        muted
        loop
        playsInline
        preload="metadata"
        className={cn(
          "pointer-events-none absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
          playing ? "opacity-100" : "opacity-0",
        )}
      />
      {badgeLogo ? (
        <div className="absolute bottom-0 left-1/2 z-10 flex translate-y-1/2 -translate-x-1/2 items-center rounded-[4px] bg-[#0F1533] px-3 py-1 shadow-sm">
          <span className="text-[11px] font-bold tracking-tight text-white">
            {badgeLogo}
          </span>
        </div>
      ) : null}
      {children}
    </div>
  );
}

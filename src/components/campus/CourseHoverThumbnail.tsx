import { useEffect, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const activePreviews = new Set<HTMLVideoElement>();

type CourseHoverThumbnailProps = {
  image: string;
  alt: string;
  videoUrl?: string;
  badgeLogo?: string;
  className?: string;
  children?: ReactNode;
  onPlayingChange?: (playing: boolean) => void;
  priority?: boolean;
};

async function playExclusive(video: HTMLVideoElement, muted: boolean) {
  activePreviews.forEach((other) => {
    if (other !== video) other.pause();
  });
  video.muted = muted;
  video.volume = muted ? 0 : 1;
  try {
    await video.play();
  } catch {
    video.muted = true;
    await video.play();
    video.muted = false;
    video.volume = 1;
  }
}

export function CourseHoverThumbnail({
  image,
  alt,
  videoUrl,
  badgeLogo,
  className,
  children,
  onPlayingChange,
  priority = false,
}: CourseHoverThumbnailProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const [armed, setArmed] = useState(false);
  const [muted, setMuted] = useState(false);
  const [src, setSrc] = useState(videoUrl);

  useEffect(() => {
    if (!armed || src) return;
    let cancelled = false;
    void import("@/lib/preview-video").then((mod) => {
      if (!cancelled) setSrc(mod.PREVIEW_VIDEO);
    });
    return () => {
      cancelled = true;
    };
  }, [armed, src]);

  useEffect(() => {
    onPlayingChange?.(playing);
  }, [playing, onPlayingChange]);

  useEffect(() => {
    return () => {
      const video = videoRef.current;
      if (video) activePreviews.delete(video);
      onPlayingChange?.(false);
    };
  }, [onPlayingChange]);

  useEffect(() => {
    if (!armed || !src) return;
    const video = videoRef.current;
    if (!video) return;
    void playExclusive(video, muted).catch(() => setPlaying(false));
    // Play once when the player mounts after the first tap.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [armed, src]);

  const togglePlayback = async () => {
    if (!armed) {
      setArmed(true);
      return;
    }

    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      video.pause();
      return;
    }
    try {
      await playExclusive(video, muted);
    } catch {
      setPlaying(false);
    }
  };

  const toggleMute = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    const video = videoRef.current;
    const next = !muted;
    if (video) {
      video.muted = next;
      video.volume = next ? 0 : 1;
    }
    setMuted(next);
  };

  return (
    <div className={cn("group/thumb relative aspect-[16/9] w-full overflow-hidden bg-gray-100", className)}>
      <img
        src={image}
        alt={alt}
        width={640}
        height={360}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        fetchPriority={priority ? "high" : "low"}
        className={cn(
          "absolute inset-0 h-full w-full object-cover transition-opacity duration-300",
          armed ? "opacity-0" : "opacity-100",
        )}
      />
      {armed && src ? (
        <video
          ref={videoRef}
          src={src}
          loop
          playsInline
          preload="none"
          onPlay={(event) => {
            activePreviews.add(event.currentTarget);
            setPlaying(true);
          }}
          onPause={(event) => {
            activePreviews.delete(event.currentTarget);
            setPlaying(false);
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}

      <div
        className={cn(
          "pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-black/10 transition-opacity duration-300",
          playing && "opacity-0",
        )}
      />

      <button
        type="button"
        aria-label={playing ? "Pause preview" : "Play preview"}
        onClick={(event) => {
          event.preventDefault();
          event.stopPropagation();
          void togglePlayback();
        }}
        className="absolute inset-0 z-20"
      >
        <span
          className={cn(
            "absolute flex items-center justify-center rounded-full bg-white/95 text-[#0F1533] shadow-[0_8px_24px_-8px_rgba(15,21,51,0.55)] transition-all duration-200",
            playing
              ? "bottom-3 left-3 h-9 w-9"
              : "left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2",
          )}
        >
          {playing ? (
            <Pause className="h-4 w-4 fill-current" />
          ) : (
            <Play className="ml-0.5 h-5 w-5 fill-current" />
          )}
        </span>
      </button>

      {playing ? (
        <button
          type="button"
          aria-label={muted ? "Unmute preview" : "Mute preview"}
          onClick={toggleMute}
          className="absolute bottom-3 left-14 z-30 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 text-[#0F1533] shadow-[0_8px_24px_-8px_rgba(15,21,51,0.55)]"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      ) : null}

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

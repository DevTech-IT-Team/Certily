import { Pause, Play } from "lucide-react";
import { useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { VAvatar } from "./VAvatar";
import campusBg from "@/assets/certbg.png";
import certciaVideo from "@/assets/certcia.mp4";

export function CampusExploreSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      id="explore-campus"
      data-v-section="explore-campus"
      className="relative border-t border-border/30 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* ── Header row ── */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-10">
          <Reveal className="max-w-xl">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#5B4CF5]">
              90 seconds · Meet Certcia
            </p>
            <h2 className="mt-3 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-[#0F1533] sm:text-5xl lg:text-[3.25rem]">
              See how your campus works.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="max-w-sm shrink-0 sm:pb-1">
            <p className="text-sm leading-relaxed text-[#5A607A] sm:text-base">
              From choosing a pathway to shipping your first AI project — see
              how every part of Certcia connects.
            </p>
          </Reveal>
        </div>

        {/* ── Cinematic container ── */}
        <Reveal delay={0.14} className="mt-8">
          <div
            className="relative w-full overflow-hidden rounded-2xl shadow-[0_32px_80px_-24px_rgba(10,12,27,0.45)]"
            style={{ aspectRatio: "16/7", minHeight: 260 }}
          >
            {/* Thumbnail — certbg.png, same as before, used as poster */}
            <img
              src={campusBg}
              alt=""
              aria-hidden
              className={`absolute inset-0 h-full w-full object-cover scale-[1.08] transition-opacity duration-500 ${playing ? "opacity-0" : "opacity-100"}`}
              style={{ objectPosition: "52% 38%" }}
              draggable={false}
            />

            {/* Video — sits on top, hidden until playing */}
            <video
              ref={videoRef}
              src={certciaVideo}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${playing ? "opacity-100" : "opacity-0"}`}
              playsInline
              preload="metadata"
              onEnded={() => setPlaying(false)}
            />

            {/* Dark navy overlay — always present for text legibility */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(8,7,26,0.91) 0%, rgba(10,8,32,0.75) 32%, rgba(10,8,32,0.35) 58%, rgba(10,8,32,0.08) 100%)",
              }}
            />

            {/* Bottom scrim */}
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
              style={{
                background: "linear-gradient(to top, rgba(8,7,26,0.70) 0%, transparent 100%)",
              }}
            />

            {/* ── Top-left: brand bar ── */}
            <div className="absolute left-5 top-5 flex items-center gap-2.5 sm:left-7 sm:top-6">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#5B4CF5] shadow-[0_4px_12px_rgba(91,76,245,0.6)]">
                <span className="font-display text-xs font-black text-white">C</span>
              </span>
              <span className="font-display text-sm font-bold tracking-wide text-white/90">
                certcia
              </span>
              <span className="ml-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">
                · The Campus Tour
              </span>
            </div>

            {/* ── Centre-left: hero copy ── */}
            <div className="absolute left-5 top-1/2 -translate-y-[55%] sm:left-7 lg:left-10">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4CD1B0]">
                Welcome to Certcia
              </p>
              <h3
                className="mt-2.5 font-display font-extrabold leading-[1.06] text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                One campus.<br />Every possibility.
              </h3>
            </div>

            {/* ── Bottom-left: play/pause button ── */}
            <div className="absolute bottom-5 left-5 flex items-center gap-3 sm:bottom-6 sm:left-7 lg:left-10">
              <button
                type="button"
                onClick={togglePlay}
                aria-label={playing ? "Pause the campus story" : "Watch the campus story"}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-transform hover:scale-105 active:scale-95"
              >
                {playing
                  ? <Pause className="h-4 w-4 fill-[#0F1533] text-[#0F1533]" />
                  : <Play className="ml-0.5 h-4 w-4 fill-[#0F1533] text-[#0F1533]" />
                }
              </button>
              <div>
                <p className="text-sm font-bold leading-tight text-white">
                  {playing ? "Now playing" : "Watch the story"}
                </p>
                <p className="text-[11px] text-white/50">1:30 min</p>
              </div>
            </div>

            {/* ── V on the right — visible only when video is playing ── */}
            <div
              className={`absolute transition-opacity duration-500 ${playing ? "opacity-0 pointer-events-none" : "opacity-100"}`}
              style={{ bottom: "0%", right: "6%", transform: "translateX(0)" }}
            >
              <VAvatar
                size="statue"
                reaction="stand"
                grounded
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

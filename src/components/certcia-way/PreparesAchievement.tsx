import { useEffect, useRef, useState } from "react";
import { LayoutGroup, motion } from "motion/react";
import { VAvatar } from "@/components/campus/VAvatar";
import { useV, type VReaction } from "@/components/campus/VContext";
import sceneBg from "@/assets/whycertcia/whycertciabg.png";
import { cn } from "@/lib/utils";

const PREPARES = [
  {
    title: "Dynamic Curriculum",
    kicker: "Built to evolve",
    tone: "bg-[#6D56F5]",
    reaction: "think" as VReaction,
    fan: "lg:z-[1] lg:rotate-[-11deg] lg:translate-y-8",
  },
  {
    title: "Expert-Crafted Assessments",
    kicker: "Measured by experts",
    tone: "bg-[#E24A42]",
    reaction: "stare" as VReaction,
    fan: "lg:z-[3] lg:rotate-[-5deg] lg:translate-y-3",
  },
  {
    title: "Real-World Capstones",
    kicker: "Applied, not abstract",
    tone: "bg-[#2BB3E0]",
    reaction: "point" as VReaction,
    fan: "lg:z-[5] lg:rotate-0 lg:translate-y-0",
  },
  {
    title: "AI-Supported Learning",
    kicker: "Support when it counts",
    tone: "bg-[#1FA88A]",
    reaction: "hi" as VReaction,
    fan: "lg:z-[3] lg:rotate-[5deg] lg:translate-y-3",
  },
  {
    title: "Secure Showcase Certification",
    kicker: "Ready to share",
    tone: "bg-[#1E3A8C]",
    reaction: "stand" as VReaction,
    fan: "lg:z-[1] lg:rotate-[11deg] lg:translate-y-8",
  },
] as const;

function scrollCardIntoScroller(scroller: HTMLElement, index: number) {
  const card = scroller.children[index] as HTMLElement | undefined;
  if (!card) return;
  const left = card.offsetLeft - (scroller.clientWidth - card.offsetWidth) / 2;
  scroller.scrollTo({ left: Math.max(0, left), behavior: "smooth" });
}

export function PreparesAchievement() {
  const { setFloatingOpen } = useV();
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [step, setStep] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const active = isDesktop ? (hovered ?? step) : step;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsDesktop(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (hovered !== null && isDesktop) return;
    const id = window.setInterval(() => {
      setStep((i) => {
        const next = (i + 1) % PREPARES.length;
        if (!isDesktop && scrollerRef.current) {
          scrollCardIntoScroller(scrollerRef.current, next);
        }
        return next;
      });
    }, 2800);
    return () => window.clearInterval(id);
  }, [hovered, isDesktop]);

  useEffect(() => {
    if (isDesktop) return;
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const mid = scroller.scrollLeft + scroller.clientWidth / 2;
        let best = 0;
        let bestDist = Infinity;
        Array.from(scroller.children).forEach((child, i) => {
          const el = child as HTMLElement;
          const center = el.offsetLeft + el.offsetWidth / 2;
          const dist = Math.abs(center - mid);
          if (dist < bestDist) {
            bestDist = dist;
            best = i;
          }
        });
        setStep(best);
        ticking = false;
      });
    };

    scroller.addEventListener("scroll", onScroll, { passive: true });
    return () => scroller.removeEventListener("scroll", onScroll);
  }, [isDesktop]);

  const goTo = (i: number) => {
    setStep(i);
    if (!isDesktop && scrollerRef.current) {
      scrollCardIntoScroller(scrollerRef.current, i);
    }
  };

  return (
    <section id="prepares-achievement" className="relative overflow-x-clip pt-10 pb-8 sm:pt-16 sm:pb-10 lg:pt-20">
      <svg className="pointer-events-none absolute left-0 top-0 h-px w-px overflow-hidden opacity-0" aria-hidden>
        <filter id="illy-black-matte" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  9 9 9 0 -0.14"
          />
        </filter>
      </svg>

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <img
          src={sceneBg}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover select-none"
          draggable={false}
        />
        <div className="absolute inset-0 bg-white/20" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 font-sans sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center font-display text-[1.65rem] font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem]">
          <span className="block">Certcia prepares, validates, and</span>
          <span className="mt-1 block text-[#5B4CF5] sm:mt-1.5">showcases achievement.</span>
        </h2>

        <LayoutGroup>
          <ul
            ref={scrollerRef}
            className={cn(
              "mt-8 flex touch-pan-x overscroll-x-contain",
              "snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
              "px-[12vw] sm:px-[18vw]",
              "lg:mt-16 lg:snap-none lg:overflow-visible lg:overscroll-auto lg:px-0 lg:pb-8",
              "lg:touch-auto lg:items-end lg:justify-center lg:gap-0 lg:pt-8",
            )}
            onPointerLeave={() => setHovered(null)}
          >
            {PREPARES.map((item, i) => {
              const on = active === i;
              const n = String(i + 1).padStart(2, "0");
              return (
                <li
                  key={item.title}
                  onPointerEnter={() => {
                    if (isDesktop) setHovered(i);
                  }}
                  onClick={() => {
                    if (!isDesktop) goTo(i);
                  }}
                  className={cn(
                    "relative shrink-0 origin-bottom snap-center",
                    "w-[72vw] max-w-[17rem] sm:w-[15.5rem]",
                    "transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
                    "lg:-mx-[1.9rem] lg:w-[14.75rem] lg:max-w-none lg:transform-gpu",
                    item.fan,
                    on && "z-30 lg:z-30 lg:rotate-0 lg:-translate-y-3",
                    !isDesktop && on && "scale-[1.02]",
                    !isDesktop && !on && "opacity-80",
                  )}
                >
                  <article
                    className={cn(
                      "relative isolate flex flex-col overflow-hidden rounded-[1.5rem] p-4 text-white shadow-[0_18px_36px_-20px_rgba(15,21,51,0.5)] sm:rounded-[2rem] sm:p-5",
                      "h-[19.5rem] sm:h-[22rem] lg:h-auto lg:aspect-[3/4] lg:pt-7",
                      item.tone,
                    )}
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 opacity-[0.14]"
                      style={{
                        backgroundImage:
                          "repeating-linear-gradient(-32deg, rgba(255,255,255,0.85) 0 1px, transparent 1px 18px)",
                      }}
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/12 via-transparent to-black/15"
                    />

                    <div className="relative z-10 flex items-start justify-between gap-2">
                      <div className="min-w-0 pr-1">
                        <h3 className="font-display text-[1.1rem] font-extrabold leading-[1.18] tracking-[-0.03em] sm:text-[1.28rem]">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-[12px] font-medium leading-snug text-white/80 sm:mt-1.5 sm:text-[13px]">
                          {item.kicker}
                        </p>
                      </div>
                      <span className="mt-0.5 shrink-0 rounded-full bg-[#0F1533]/55 px-2.5 py-1 text-[11px] font-semibold tabular-nums text-white">
                        {n}
                      </span>
                    </div>

                    <div className="relative mt-auto flex h-[48%] items-end justify-center lg:h-[52%]">
                      {on && (
                        <motion.div
                          layoutId="prep-v-walk"
                          className="w-[7rem] sm:w-[8.5rem] lg:w-[9rem]"
                          style={{ filter: "url(#illy-black-matte)" }}
                          transition={{ type: "spring", stiffness: 70, damping: 18 }}
                        >
                          <div className="aspect-[3/4] w-full">
                            <VAvatar
                              fill
                              reaction={item.reaction}
                              onLight={false}
                              grounded={false}
                              interactive
                              hoverEffect={false}
                              onInteract={() => setFloatingOpen(true)}
                              className="h-full w-full [&_img]:drop-shadow-none"
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        </LayoutGroup>

        <div className="mt-4 flex justify-center gap-2 lg:hidden">
          {PREPARES.map((item, i) => (
            <button
              key={item.title}
              type="button"
              aria-label={`Show ${item.title}`}
              onClick={() => goTo(i)}
              className={cn(
                "h-1.5 rounded-full transition-all",
                active === i ? "w-5 bg-[#5B4CF5]" : "w-1.5 bg-[#0F1533]/25",
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

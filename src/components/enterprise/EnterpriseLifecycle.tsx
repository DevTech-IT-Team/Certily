import { useEffect, useState } from "react";
import { AnimatePresence, LayoutGroup, motion } from "motion/react";
import { Reveal } from "@/components/campus/Reveal";
import { cn } from "@/lib/utils";

const DURATION_MS = 5000;

const STEPS = [
  {
    id: "01",
    shortTitle: "Discover",
    title: "Align on goals and scope",
    copy: "Leadership agrees what success looks like, which roles matter, and how the work will be measured",
    points: ["Strategic alignment", "Scope", "Success metrics"],
  },
  {
    id: "02",
    shortTitle: "Audit",
    title: "Map the learning ecosystem",
    copy: "Skills, content, platforms, spend, and friction — one fact base everyone can share",
    points: ["Skills & roles", "Ecosystem", "Future demand"],
  },
  {
    id: "03",
    shortTitle: "Gap map",
    title: "Show where capability breaks",
    copy: "Urgent skill gaps, and where current learning spend is leaking",
    points: ["Heatmap", "Friction", "Spend"],
  },
  {
    id: "04",
    shortTitle: "Blueprint",
    title: "Design the operating system",
    copy: "Architecture, content mix, and the model required to run learning at scale",
    points: ["Architecture", "Content", "Operating model"],
  },
  {
    id: "05",
    shortTitle: "RFP",
    title: "Make procurement ready",
    copy: "Specifications and vendor criteria a buying team can actually run",
    points: ["Requirements", "Evaluation", "Selection"],
  },
  {
    id: "06",
    shortTitle: "Build",
    title: "Launch what the roles need",
    copy: "Platform, journeys, and change — a rollout the workforce will use",
    points: ["Platform", "Journeys", "Adoption"],
  },
  {
    id: "07",
    shortTitle: "Optimize",
    title: "Measure what actually changes",
    copy: "Skill lift, application at work, and the KPIs agreed in Discover",
    points: ["Analytics", "Impact", "Refresh"],
  },
] as const;

export function EnterpriseLifecycle() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const step = STEPS[active];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % STEPS.length);
    }, DURATION_MS);
    return () => window.clearInterval(id);
  }, [paused, active]);

  return (
    <section
      id="model"
      className="relative scroll-mt-24 overflow-hidden bg-[#0F1533] px-4 py-20 text-white sm:px-6 sm:py-28 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -left-24 top-10 h-[28rem] w-[28rem] rounded-full bg-[#5B4CF5]/30 blur-[100px]" />
      <div className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#5B4CF5]/20 blur-[90px]" />

      <div className="relative mx-auto max-w-[94rem]">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C4B8FF]">
                The 7-step model
              </p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/70 sm:text-[15px]">
                Diagnose first. Then turn evidence into a plan you can build and measure
              </p>
            </div>
            <p className="font-mono text-sm font-bold tabular-nums tracking-[0.14em] text-white/80">
              {step.id} <span className="text-white/35">/</span> 07
            </p>
          </div>
        </Reveal>

        <Reveal>
          <LayoutGroup>
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-x-6 lg:gap-x-8">
              {STEPS.map((item, i) => {
                const on = i === active;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative px-[0.18em] py-[0.08em] font-display font-extrabold leading-none tracking-[-0.045em] transition-colors duration-300",
                      "text-[1.85rem] sm:text-5xl lg:text-[4.35rem]",
                      on ? "text-white" : "text-white/45 hover:text-white/75",
                    )}
                  >
                    {on ? (
                      <motion.span
                        layoutId="lifecycle-frame"
                        className="pointer-events-none absolute -inset-x-1.5 -inset-y-1 border-2 border-[#8B7CFF] shadow-[0_0_32px_rgba(91,76,245,0.45)]"
                        transition={{ type: "spring", bounce: 0.12, duration: 0.5 }}
                      />
                    ) : null}
                    <span className={on ? "relative z-10 drop-shadow-[0_0_18px_rgba(91,76,245,0.8)]" : "relative z-10"}>
                      {item.shortTitle}
                    </span>
                  </button>
                );
              })}
            </div>
          </LayoutGroup>
        </Reveal>

        <div className="mt-8 flex items-center gap-3">
          <div className="h-[3px] flex-1 overflow-hidden rounded-full bg-white/15">
            <div
              key={step.id}
              className="h-full origin-left rounded-full bg-[#8B7CFF]"
              style={{
                animation: `lifecycle-fill ${DURATION_MS}ms linear forwards`,
                animationPlayState: paused ? "paused" : "running",
              }}
            />
          </div>
          <div className="flex gap-1.5">
            {STEPS.map((item, i) => (
              <button
                key={item.id}
                type="button"
                aria-label={item.shortTitle}
                onClick={() => setActive(i)}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === active ? "w-6 bg-white" : "w-2 bg-white/30 hover:bg-white/55",
                )}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-10 min-h-[13.5rem] sm:min-h-[14.5rem]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
              className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10"
            >
              <p className="font-display text-6xl font-extrabold leading-none tracking-[-0.06em] text-[#8B7CFF] sm:text-7xl lg:col-span-2 lg:text-[5.5rem]">
                {step.id}
              </p>

              <div className="lg:col-span-6">
                <h3 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-[2.35rem]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                  {step.copy}
                </p>
              </div>

              <ul className="space-y-4 lg:col-span-4 lg:pt-1">
                {step.points.map((point, i) => (
                  <li key={point} className="flex items-baseline gap-3">
                    <span className="w-6 shrink-0 font-mono text-[12px] font-bold text-[#C4B8FF]">
                      0{i + 1}
                    </span>
                    <span className="font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

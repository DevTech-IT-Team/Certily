import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/campus/Reveal";
import { cn } from "@/lib/utils";

const DURATION_MS = 5200;

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
      className="relative scroll-mt-24 overflow-hidden bg-[#0B1024] px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_45%,transparent_80%)]" />
      <div className="pointer-events-none absolute -left-20 top-0 h-[26rem] w-[26rem] rounded-full bg-[#5B4CF5]/25 blur-[110px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-[#5B4CF5]/18 blur-[90px]" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#C4B8FF]">
              The 7-step model
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.75rem]">
              Diagnose first — then build and measure
            </h2>
            <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-white/65">
              Evidence becomes a plan you can run, buy, and track across the full learning system
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative mt-10">
            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-7">
              {STEPS.map((item, i) => {
                const on = i === active;
                const done = i < active;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      aria-current={on ? "step" : undefined}
                      onClick={() => setActive(i)}
                      className={cn(
                        "group relative flex w-full flex-col items-center gap-2.5 rounded-2xl px-2 py-3.5 text-center transition-all duration-300",
                        on && "bg-[#5B4CF5]/20 ring-1 ring-[#8B7CFF]/50",
                        !on && "hover:bg-white/[0.05]",
                      )}
                    >
                      <span
                        className={cn(
                          "relative z-10 flex h-9 w-9 items-center justify-center rounded-full font-mono text-[11px] font-bold transition-all duration-300",
                          on &&
                            "bg-[#5B4CF5] text-white shadow-[0_0_24px_rgba(91,76,245,0.65)] ring-4 ring-[#5B4CF5]/25",
                          done && !on && "bg-white/15 text-white",
                          !on && !done && "bg-white/8 text-white/50 group-hover:bg-white/14 group-hover:text-white/80",
                        )}
                      >
                        {item.id}
                      </span>
                      <span
                        className={cn(
                          "font-display text-[13px] font-bold tracking-tight sm:text-sm",
                          on ? "text-white" : "text-white/50 group-hover:text-white/80",
                        )}
                      >
                        {item.shortTitle}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>
        </Reveal>

        <div className="relative mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-6 shadow-[0_24px_80px_-40px_rgba(0,0,0,0.65)] backdrop-blur-sm sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-[#5B4CF5]/20 blur-[70px]" />
          <AnimatePresence mode="wait">
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
            >
              <div className="lg:col-span-7">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#C4B8FF]">
                  Step {step.id} · {step.shortTitle}
                </p>
                <h3 className="mt-3 font-display text-2xl font-bold leading-[1.15] tracking-tight text-white sm:text-[2.15rem]">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-white/70 sm:text-base sm:leading-8">
                  {step.copy}
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-3 lg:col-span-5 lg:grid-cols-1">
                {step.points.map((point, i) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#5B4CF5]/20 font-mono text-[11px] font-bold text-[#C4B8FF]">
                      0{i + 1}
                    </span>
                    <span className="font-display text-[15px] font-bold tracking-tight text-white">
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

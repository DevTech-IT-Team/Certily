import { useEffect, useRef } from "react";
import gsap from "gsap";

const PILLS = [
  "No catalogue-first selling",
  "Procurement-ready RFPs",
  "Custom content + platform",
  "Managed training operations",
  "Scale workforce up or down",
] as const;

const NODES = [
  { label: "Business goals", angle: -90 },
  { label: "Technology", angle: -28 },
  { label: "Future skills", angle: 32 },
  { label: "Workforce", angle: 90 },
  { label: "Culture", angle: 148 },
  { label: "Current skills", angle: -152 },
] as const;

const MODEL_STEPS = [
  "Audit",
  "Gap map",
  "RFP",
  "Build",
  "Run",
  "Optimize",
] as const;

function nodePosition(angle: number, radius: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.cos(rad)}%`,
    top: `${50 + radius * Math.sin(rad)}%`,
  };
}

export function EnterpriseHero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-line]", {
          opacity: 0,
          y: 16,
          duration: 0.48,
          stagger: 0.06,
        })
        .fromTo(
          "[data-hero-visual]",
          { opacity: 0, y: 22, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7 },
          "-=0.35",
        );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#EEEEF8] pt-[4.5rem]"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-[#5B4CF5]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-[#5B4CF5]/8 blur-3xl" />

      <div className="relative mx-auto max-w-[94rem] px-4 pb-12 pt-5 sm:px-6 sm:pb-16 sm:pt-6 lg:px-8 lg:pb-20 lg:pt-7">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p
              data-hero-line
              className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5B4CF5]"
            >
              Enterprise learning engineering
            </p>
            <h1
              data-hero-line
              className="mt-4 font-display text-[2.45rem] font-extrabold leading-[1.06] tracking-[-0.045em] text-[#0F1533] sm:text-5xl lg:text-[3.4rem]"
            >
              We don’t sell training
              <span className="mt-1.5 block">
                We engineer workforce capability
              </span>
            </h1>
            <p
              data-hero-line
              className="mt-6 max-w-xl text-[15px] leading-relaxed text-[#5A607A] sm:text-base"
            >
              Every engagement starts inside your business: how work gets done
              today, where the organization is going next, and what people must
              be able to do to get there. We audit, map, design, build, operate
              and continuously improve the learning ecosystem around you
            </p>
            <div
              data-hero-line
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#audit"
                className="inline-flex h-11 items-center rounded-full bg-[#5B4CF5] px-6 text-sm font-bold text-white shadow-[0_10px_24px_-12px_rgba(91,76,245,0.7)] transition-colors hover:bg-[#4A3BE0]"
              >
                Start with a Capability Audit
              </a>
              <a
                href="#model"
                className="inline-flex h-11 items-center rounded-full border border-[#D4D2E8] bg-white px-5 text-sm font-semibold text-[#0F1533] transition-colors hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5]"
              >
                See our 7-step model
              </a>
            </div>
            <div data-hero-line className="mt-6 flex max-w-xl flex-wrap gap-2">
              {PILLS.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-[#E0DEEE] bg-white px-3.5 py-1.5 text-[12px] font-medium text-[#5A5872]"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>

          <div data-hero-visual>
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0F1533] px-5 pb-6 pt-7 shadow-[0_28px_70px_-30px_rgba(15,21,51,0.55)] sm:px-8 sm:pb-7 sm:pt-8">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-[#5B4CF5]/25"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-24 -left-10 h-64 w-64 rounded-full border border-white/8"
              />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A8AEC8]">
                The Certcia enterprise model
              </p>
              <h2 className="mt-2 max-w-md font-display text-2xl font-bold leading-snug tracking-[-0.03em] text-white sm:text-[1.7rem]">
                Your business becomes the curriculum blueprint
              </h2>

              <div className="relative mx-auto mt-4 aspect-square w-full max-w-[28rem]">
                <svg
                  viewBox="0 0 400 400"
                  className="absolute inset-0 h-full w-full"
                  aria-hidden
                >
                  <circle
                    cx="200"
                    cy="200"
                    r="118"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeWidth="1.25"
                    strokeDasharray="3 7"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="152"
                    fill="none"
                    stroke="rgba(91,76,245,0.28)"
                    strokeWidth="1"
                  />
                </svg>

                {NODES.map((node) => (
                  <span
                    key={node.label}
                    className="absolute z-10 max-w-[7.2rem] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-white/10 bg-[#1A2144] px-2.5 py-2 text-center text-[11px] font-semibold leading-tight text-white shadow-[0_8px_20px_-12px_rgba(0,0,0,0.6)] sm:max-w-[8rem] sm:px-3 sm:text-xs"
                    style={nodePosition(node.angle, 36)}
                  >
                    {node.label}
                  </span>
                ))}

                <div className="absolute left-1/2 top-1/2 z-20 flex h-[8.4rem] w-[8.4rem] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#5B4CF5] text-center shadow-[0_0_40px_rgba(91,76,245,0.55)] sm:h-[9.25rem] sm:w-[9.25rem]">
                  <p className="px-3 font-display text-[13px] font-extrabold uppercase leading-tight tracking-[0.08em] text-white sm:text-sm">
                    Capability
                    <br />
                    blueprint
                  </p>
                </div>
              </div>

              <div className="mt-1 flex flex-wrap justify-center gap-1.5">
                {MODEL_STEPS.map((step) => (
                  <a
                    key={step}
                    href="#model"
                    className="rounded-full border border-white/15 px-2.5 py-1 text-[10px] font-medium text-[#C5CADB] transition-colors hover:border-[#5B4CF5]/50 hover:text-white"
                  >
                    {step}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

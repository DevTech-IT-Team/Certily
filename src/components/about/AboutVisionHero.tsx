import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const PILLS = [
  "Industry-led",
  "Educator-shaped",
  "Parent-informed",
  "Outcome-verified",
] as const;

const IDEA = [
  { title: "Learn", copy: "Current skills" },
  { title: "Apply", copy: "Real situations" },
  { title: "Prove", copy: "Assessment + standards" },
  { title: "Share", copy: "Verification + credential" },
] as const;

export function AboutVisionHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-line]", { opacity: 0, y: 22, duration: 0.52, stagger: 0.07 })
        .fromTo(
          "[data-hero-visual]",
          { opacity: 0, x: 28 },
          { opacity: 1, x: 0, duration: 0.7 },
          "-=0.4",
        );
    }, section);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((n) => (n + 1) % IDEA.length);
    }, 2800);
    return () => window.clearInterval(id);
  }, [active]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[100svh] overflow-hidden bg-[#EEEEF8] pt-[4.5rem] pb-4 sm:pb-6"
    >
      <div className="grid min-h-[calc(100svh-4.5rem)] lg:grid-cols-12">
        <div className="relative z-10 flex flex-col justify-center px-5 py-10 sm:px-8 lg:col-span-6 lg:px-10 xl:px-16 xl:py-12">
          <p
            aria-hidden
            className="pointer-events-none absolute -left-2 top-1/2 hidden -translate-y-1/2 select-none font-display text-[11rem] font-extrabold leading-none tracking-[-0.08em] text-[#5B4CF5]/[0.06] xl:block"
          >
            01
          </p>

          <p
            data-hero-line
            className="text-[11px] font-bold uppercase tracking-[0.24em] text-[#5B4CF5]"
          >
            About Certcia
          </p>

          <h1
            data-hero-line
            className="mt-5 font-display text-[2.6rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-[#0F1533] sm:text-5xl lg:text-[3.35rem] xl:text-[3.85rem]"
          >
            <span className="block">Born from a vision</span>
            <span className="mt-2 block text-[#5B4CF5]">
              Built for what
              <br className="hidden sm:block" /> comes next
            </span>
          </h1>

          <p
            data-hero-line
            className="mt-6 max-w-md text-[15px] leading-relaxed text-[#5A607A] sm:text-base"
          >
            We did not build Certcia to fill a course catalogue. We built it to
            help the next generation learn, apply and prove the skills a
            changing world will expect.
          </p>

          <div data-hero-line className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/learning"
              className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#5B4CF5] px-7 text-[15px] font-bold text-white shadow-[0_12px_28px_-10px_rgba(91,76,245,0.6)] transition-all hover:scale-[1.03] hover:bg-[#4A3BE0] active:scale-[0.98]"
            >
              Explore Pathways
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/certcia-way"
              className="inline-flex h-12 items-center rounded-full border border-[#D8D6EE] bg-white px-6 text-[15px] font-semibold text-[#5A5872] transition-colors hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5]"
            >
              Why Certcia
            </Link>
          </div>

          <ul data-hero-line className="mt-6 flex flex-wrap gap-2">
            {PILLS.map((pill) => (
              <li
                key={pill}
                className="rounded-full bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold tracking-wide text-[#5A5872] ring-1 ring-[#E4E2F0]"
              >
                {pill}
              </li>
            ))}
          </ul>

          <ol data-hero-line className="mt-9 grid grid-cols-2 gap-x-6 gap-y-1 sm:max-w-lg">
            {IDEA.map((item, i) => {
              const on = i === active;
              return (
                <li key={item.title}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex w-full items-start gap-3 rounded-xl py-2.5 text-left"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full font-mono text-[11px] font-bold transition-all",
                        on
                          ? "bg-[#5B4CF5] text-white shadow-[0_8px_18px_-8px_rgba(91,76,245,0.85)]"
                          : "bg-white text-[#B0B4C8] ring-1 ring-[#E4E2F0] group-hover:text-[#5B4CF5]",
                      )}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span
                        className={cn(
                          "block text-sm font-bold",
                          on ? "text-[#0F1533]" : "text-[#5A5872]",
                        )}
                      >
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-[12px] leading-snug text-[#8A90A5]">
                        {item.copy}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ol>
        </div>

        <div
          data-hero-visual
          className="relative min-h-[52vh] lg:col-span-6 lg:min-h-full"
        >
          <div className="absolute inset-0 lg:left-[-8%] lg:[clip-path:polygon(10%_0,100%_0,100%_100%,0_100%)]">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80"
              alt="Learners working together toward skills they can prove"
              className="h-full w-full object-cover object-[center_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#EEEEF8] via-[#EEEEF8]/20 to-[#0F1533]/55 lg:from-[#EEEEF8]/90 lg:via-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F1533]/70 via-transparent to-transparent" />
          </div>

          <div className="absolute bottom-6 left-5 right-5 sm:bottom-10 sm:left-10 sm:right-10 lg:left-[12%] lg:right-10">
            <div className="max-w-md rounded-[1.4rem] bg-[#0F1533] p-5 text-white shadow-[0_28px_60px_-24px_rgba(15,21,51,0.55)] sm:p-6">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#5B4CF5]" />
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C4BEFF]">
                  The Certcia idea
                </p>
              </div>
              <p className="mt-3 font-display text-xl font-bold leading-snug tracking-tight sm:text-[1.65rem]">
                Future readiness should be something a learner can prove
              </p>
              <p className="mt-4 font-mono text-[11px] font-semibold tracking-wider text-[#8B90A8]">
                {String(active + 1).padStart(2, "0")} / 04 · {IDEA[active].title}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

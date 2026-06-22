import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { CAMPUS_POSITIONING } from "@/lib/campus";
import { CampusMap } from "./CampusMap";
import { IllyHeroCard } from "./IllyHeroCard";
import { HomeFeatureBar } from "./HomeFeatureBar";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-line]", { opacity: 0, y: 22, duration: 0.55, stagger: 0.07 })
        .fromTo(
          "[data-hero-visual]",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.3"
        );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        data-illy-section="hero"
        className="relative overflow-visible bg-[#F7F8FC] pb-2 pt-20 sm:pb-4 sm:pt-24 md:pt-24"
      >
        <div className="pointer-events-none absolute inset-0 bg-genz-hero" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.1]" />
        <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-primary/[0.07] blur-3xl" />
        <div className="pointer-events-none absolute -right-16 top-8 h-72 w-72 rounded-full bg-[#4CD1B0]/[0.06] blur-3xl" />

        <div className="relative mx-auto max-w-[88rem] px-4 sm:px-6 lg:px-8">
          {/* Text left · campus map right (lg+) — mockup layout */}
          <div className="grid items-center gap-8 overflow-visible lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:gap-6 xl:gap-10">
            <div className="flex flex-col items-start justify-center text-left lg:py-2">
              <h1
                data-hero-line
                className="max-w-[12ch] text-[2.5rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-foreground sm:max-w-none sm:text-[3rem] lg:text-[3.35rem] xl:text-[3.85rem]"
              >
                {CAMPUS_POSITIONING.headline}
                <span className="mt-1.5 block text-[#5B4CF5] sm:mt-2">
                  {CAMPUS_POSITIONING.subhead}
                </span>
              </h1>

              <p
                data-hero-line
                className="mt-4 max-w-[36ch] text-lg leading-[1.65] text-muted-foreground sm:mt-5 sm:text-xl sm:leading-relaxed lg:max-w-[38ch]"
              >
                {CAMPUS_POSITIONING.lead}
              </p>

              <div data-hero-line className="mt-6 sm:mt-7">
                <Link
                  to="/courses"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-brand-gradient px-8 text-base font-bold text-white shadow-elegant transition-all hover:scale-[1.03] hover:shadow-[0_20px_48px_-12px_rgba(91,76,245,0.55)] active:scale-[0.98]"
                >
                  Start Learning
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div data-hero-line className="mt-6 w-full max-w-lg sm:mt-7">
                <IllyHeroCard />
              </div>
            </div>

            <div
              id="campus-map"
              data-hero-visual
              className="scroll-mt-24 w-full min-w-0 overflow-visible bg-transparent shadow-none lg:justify-self-end"
            >
              <CampusMap embedded presentation="hero" showGuide={false} />
            </div>
          </div>
        </div>
      </section>

      <HomeFeatureBar />
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowRight, Play } from "lucide-react";
import { lazy, Suspense, useState } from "react";
import { VHeroCard } from "./VHeroCard";
import { HomeFeatureBar } from "./HomeFeatureBar";
import campusMapImg from "@/assets/certcia-campus-map.webp";

const CampusMap = lazy(() =>
  import("./CampusMap").then((m) => ({ default: m.CampusMap })),
);

function HeroMapFallback() {
  return (
    <img
      src={campusMapImg}
      alt="Certcia AI Campus map with learning buildings"
      width={1536}
      height={1024}
      fetchPriority="high"
      decoding="async"
      className="relative z-0 block h-auto w-full select-none"
      style={{
        maskImage: "radial-gradient(50% 50% at 50% 50%, black 95%, transparent 100%)",
        WebkitMaskImage: "radial-gradient(50% 50% at 50% 50%, black 95%, transparent 100%)",
      }}
      draggable={false}
    />
  );
}

export function HeroSection() {
  const [mapReady, setMapReady] = useState(false);

  return (
    <>
      <section
        data-v-section="hero"
        className="relative overflow-visible bg-[#EEEEF8] pb-6 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32"
      >
        <div className="pointer-events-none absolute left-1/4 top-0 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#5B4CF5]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-20 -z-0 h-80 w-80 rounded-full bg-[#4CD1B0]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.07]" />

        <div className="relative mx-auto max-w-[94rem] px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 overflow-visible lg:grid-cols-12 lg:gap-8 xl:gap-10">
            <div className="flex flex-col items-start justify-center pb-6 pt-0 text-left lg:col-span-5 lg:pb-10 xl:col-span-5">
              <h1 className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem] xl:text-[3.35rem]">
                <span className="block">Real skills  Real impact</span>
                <span className="mt-1 block text-[#5B4CF5] sm:mt-1.5">
                  Built for the future
                </span>
              </h1>

              <p className="mt-4 max-w-lg text-base leading-relaxed text-[#5A607A] sm:mt-5 sm:text-lg lg:text-[1.05rem]">
                Certcia is your AI-powered campus for learning, building, and
                growing. Explore pathways, build real projects, and earn
                credentials that matter.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
                <Link
                  to="/learning"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#5B4CF5] px-7 text-base font-bold text-white shadow-[0_8px_28px_-8px_rgba(91,76,245,0.55)] transition-all hover:scale-[1.03] hover:bg-[#4A3BE0] hover:shadow-[0_16px_40px_-8px_rgba(91,76,245,0.60)] active:scale-[0.98]"
                >
                  Explore Pathways
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>

                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("meet-v")?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="inline-flex h-12 items-center gap-2.5 rounded-full border border-[#D8D6EE] bg-white px-6 text-base font-semibold text-[#5A5872] shadow-xs transition-all hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5] active:scale-[0.98]"
                >
                  Meet V
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B4CF5]/10 text-[#5B4CF5]">
                    <Play className="h-3 w-3 fill-[#5B4CF5]" />
                  </span>
                </button>
              </div>

              <div className="mt-6 w-full max-w-lg sm:mt-7">
                <VHeroCard />
              </div>
            </div>

            <div
              id="campus-map"
              className="w-full min-w-0 overflow-visible origin-center transition-transform lg:col-span-7 lg:scale-[1.08] xl:col-span-7 xl:scale-[1.12]"
              onPointerEnter={() => setMapReady(true)}
            >
              {mapReady ? (
                <Suspense fallback={<HeroMapFallback />}>
                  <CampusMap embedded presentation="hero" showGuide={false} />
                </Suspense>
              ) : (
                <HeroMapFallback />
              )}
            </div>
          </div>
        </div>
      </section>

      <HomeFeatureBar />
    </>
  );
}

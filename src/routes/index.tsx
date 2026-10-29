import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";
import { HeroSection } from "@/components/campus/HeroSection";
import { DeferredMount } from "@/components/seo/DeferredMount";
import { pageHead } from "@/lib/seo";

const CampusExploreSection = lazy(() =>
  import("@/components/campus/CampusExploreSection").then((m) => ({
    default: m.CampusExploreSection,
  })),
);
const VMentorSection = lazy(() =>
  import("@/components/campus/VMentorSection").then((m) => ({
    default: m.VMentorSection,
  })),
);
const PathwayBannersSection = lazy(() =>
  import("@/components/campus/PathwayBannersSection").then((m) => ({
    default: m.PathwayBannersSection,
  })),
);
const HomeStatsSection = lazy(() =>
  import("@/components/campus/HomeStatsSection").then((m) => ({
    default: m.HomeStatsSection,
  })),
);
const TrustLogosMarquee = lazy(() =>
  import("@/components/campus/TrustLogosMarquee").then((m) => ({
    default: m.TrustLogosMarquee,
  })),
);

export const Route = createFileRoute("/")({
  head: () =>
    pageHead({
      title: "Learn AI, Build Skills, Earn Outcomes",
      description:
        "Certcia AI Campus is a guided AI learning campus for students and parents — structured pathways, real projects, and shareable certifications powered by Certifier.",
      path: "/",
    }),
  component: Home,
});

const BOARDS = [
  "CSTA and AI4K12",
  "England Computing",
  "CBSE AI",
  "DigComp",
  "IB",
  "Cambridge",
  "Pearson Edexcel",
  "AP College Board",
  "Australia Digital Technologies",
  "UNESCO AI",
];

const HEADING_REPEATS = Array(8).fill(
  "Curriculum Aligned with Leading Global Education Standards"
);
const BOARDS_REPEATS = [...BOARDS, ...BOARDS, ...BOARDS, ...BOARDS];

function BoardStrip() {
  return (
    <div className="border-y border-[#1E2652] bg-[#0F1533] py-4 sm:py-4.5 overflow-hidden">
      {/* Row 1: Continuous Heading Marquee */}
      <div
        className="relative overflow-hidden mb-2 sm:mb-2.5"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div
          className="flex w-max items-center hover:[animation-play-state:paused]"
          style={{ animation: "marquee-reverse 32s linear infinite" }}
        >
          {HEADING_REPEATS.map((text, index) => (
            <div key={`heading-${index}`} className="flex items-center shrink-0">
              <span className="text-[10.5px] sm:text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C9C4FF]/90 whitespace-nowrap">
                {text}
              </span>
              <span className="mx-5 sm:mx-6 select-none font-light text-white/15 text-xs" aria-hidden>
                |
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Continuous Standards Marquee with vertical line dividers */}
      <div
        className="relative overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent)",
        }}
      >
        <div
          className="flex w-max items-center hover:[animation-play-state:paused]"
          style={{ animation: "marquee 26s linear infinite" }}
        >
          {BOARDS_REPEATS.map((name, index) => (
            <div key={`${name}-${index}`} className="flex items-center shrink-0">
              <span className="whitespace-nowrap text-[13.5px] sm:text-[14.5px] font-medium text-white/90 transition-colors hover:text-white">
                {name}
              </span>
              <span className="mx-5 sm:mx-6 select-none font-light text-white/15 text-sm" aria-hidden>
                |
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="overflow-x-hidden bg-[#F7F8FC]">
      <HeroSection />
      <Suspense fallback={null}>
        <BoardStrip />
        <PathwayBannersSection previewLimit={4} />
        <CampusExploreSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-[#EEEEF8]" aria-hidden />}>
        <VMentorSection />
        <HomeStatsSection />
        <TrustLogosMarquee />
      </Suspense>
    </div>
  );
}

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

function BoardStrip() {
  return (
    <div className="bg-[#0F1533] py-6">
      <p className="text-center text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C9C4FF]">
        Aligned with Global Education Standards
      </p>
      <div
        className="mt-4 overflow-hidden"
        style={{
          maskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 10%, #000 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-marquee items-center">
          {[...BOARDS, ...BOARDS].map((name, index) => (
            <span key={`${name}-${index}`} className="flex items-center whitespace-nowrap text-[15px] font-medium text-white/90">
              {name}
              <span className="mx-8 h-1 w-1 shrink-0 rounded-full bg-[#7C6CFF]" />
            </span>
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
        <CampusExploreSection />
      </Suspense>
      <Suspense fallback={<div className="min-h-screen bg-[#EEEEF8]" aria-hidden />}>
        <VMentorSection />
        <BoardStrip />
        <PathwayBannersSection previewLimit={4} />
        <HomeStatsSection />
        <TrustLogosMarquee />
      </Suspense>
    </div>
  );
}

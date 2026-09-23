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

function Home() {
  return (
    <div className="overflow-x-visible bg-[#F7F8FC]">
      <HeroSection />
      <Suspense fallback={null}>
        <CampusExploreSection />
      </Suspense>
      <DeferredMount fallback={<div className="min-h-[28rem] bg-[#EEEEF8]" aria-hidden />}>
        <Suspense fallback={null}>
          <VMentorSection />
          <PathwayBannersSection previewLimit={4} />
          <HomeStatsSection />
          <TrustLogosMarquee />
        </Suspense>
      </DeferredMount>
    </div>
  );
}

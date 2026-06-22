import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/campus/HeroSection";
import { CampusExploreSection } from "@/components/campus/CampusExploreSection";
import { IllyMentorSection } from "@/components/campus/IllyMentorSection";
import { HomeStatsSection } from "@/components/campus/HomeStatsSection";
import { TrustLogosMarquee } from "@/components/campus/TrustLogosMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Certilly AI Campus — Your Campus. Your Future." },
      {
        name: "description",
        content:
          "Self-paced learning, real AI projects, and a personal AI mentor on the Certilly AI Campus — guided by Illy.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="overflow-x-visible bg-[#F7F8FC]">
      <HeroSection />
      <CampusExploreSection />
      <IllyMentorSection />
      <HomeStatsSection />
      <TrustLogosMarquee />
    </div>
  );
}

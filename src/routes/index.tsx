import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/campus/HeroSection";
import { CampusExploreSection } from "@/components/campus/CampusExploreSection";
import { VMentorSection } from "@/components/campus/VMentorSection";
import { PathwayBannersSection } from "@/components/campus/PathwayBannersSection";
import { MasterclassSection } from "@/components/campus/MasterclassSection";
import { HomeStatsSection } from "@/components/campus/HomeStatsSection";
import { TrustLogosMarquee } from "@/components/campus/TrustLogosMarquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Certcia AI Campus — Learn AI. Build Skills. Earn Outcomes." },
      {
        name: "description",
        content:
          "Certcia AI Campus is a guided AI learning campus for students and parents — structured pathways, real projects, and shareable certifications led by V.",
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
      <VMentorSection />
      <PathwayBannersSection />
      {/* <MasterclassSection /> */}
      <HomeStatsSection />
      <TrustLogosMarquee />
    </div>
  );
}

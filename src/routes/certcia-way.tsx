import { createFileRoute } from "@tanstack/react-router";
import { WhyCertciaHero } from "@/components/certcia-way/WhyCertciaHero";
import { CertificationBuildProcess } from "@/components/certcia-way/CertificationBuildProcess";
import { CertciaExperience } from "@/components/certcia-way/CertciaExperience";
import { JourneyTimeline } from "@/components/certcia-way/JourneyTimelineSection";
import { AILabFeatures, AISandbox } from "@/components/certcia-way/AILabSection";
import { WhyWeBuiltCertcia } from "@/components/about/WhyWeBuiltCertcia";
import { PlatformImpactStats } from "@/components/about/PlatformImpactStats";
import { GatewaySection } from "@/components/ui/gateway-section";
import { WhereSkillsGoNext } from "@/components/certcia-way/WhereSkillsGoNext";
import { PreparesAchievement } from "@/components/certcia-way/PreparesAchievement";
import { WhyCertciaCTA } from "@/components/certcia-way/WhyCertciaCTA";
import { Reveal } from "@/components/campus/Reveal";

export const Route = createFileRoute("/certcia-way")({
  head: () => ({
    meta: [
      { title: "Why Certcia — Certcia AI Campus" },
      {
        name: "description",
        content:
          "We don’t train. We certify. See how a Certcia certification is built — from research to the AI Lab to verified proof.",
      },
    ],
  }),
  component: CertciaWay,
});

function CertciaWay() {
  return (
    <div className="bg-background pb-16">
      <WhyCertciaHero />
      <WhyWeBuiltCertcia />
      <CertificationBuildProcess />
      <CertciaExperience />
      <Reveal>
        <GatewaySection />
      </Reveal>
      <WhereSkillsGoNext />
      <PreparesAchievement />
      {/* <AILabFeatures /> */}
      <PlatformImpactStats />
      <JourneyTimeline />
      <Reveal>
        <WhyCertciaCTA />
      </Reveal>
      {/* <AISandbox /> */}
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { JourneyTimelineSection } from "@/components/certcia-way/JourneyTimelineSection";
import { AILabSection } from "@/components/certcia-way/AILabSection";
import { WhyWeBuiltCertcia } from "@/components/about/WhyWeBuiltCertcia";
import { PlatformImpactStats } from "@/components/about/PlatformImpactStats";

export const Route = createFileRoute("/certcia-way")({
  head: () => ({
    meta: [
      { title: "Certcia Way — Certcia AI Campus" },
      { name: "description", content: "Discover how we develop our courses and explore our interactive AI Lab." },
    ],
  }),
  component: CertciaWay,
});

function CertciaWay() {
  return (
    <div className="bg-background pt-24 pb-16 overflow-x-hidden">
      <JourneyTimelineSection />
      <WhyWeBuiltCertcia />
      <PlatformImpactStats />
      <AILabSection />
    </div>
  );
}

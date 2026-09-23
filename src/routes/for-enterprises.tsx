import { createFileRoute } from "@tanstack/react-router";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterprisePartners } from "@/components/enterprise/EnterprisePartners";
import { EnterpriseSolutions } from "@/components/enterprise/EnterpriseSolutions";
import { EnterpriseDiagnostic } from "@/components/enterprise/EnterpriseDiagnostic";
import { EnterpriseLifecycle } from "@/components/enterprise/EnterpriseLifecycle";
import { EnterpriseDecisionPack } from "@/components/enterprise/EnterpriseDecisionPack";
import { EnterpriseWorkstreams } from "@/components/enterprise/EnterpriseWorkstreams";
import { CommercialFlexibility } from "@/components/enterprise/CommercialFlexibility";
import { MeasureWhatChanges } from "@/components/enterprise/MeasureWhatChanges";
import { ImplementationMap } from "@/components/enterprise/ImplementationMap";
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
import { EnterpriseAcademy } from "@/components/enterprise/EnterpriseAcademy";
import { EnterpriseExecutivePrograms } from "@/components/enterprise/EnterpriseExecutivePrograms";
import { EnterpriseCustomPrograms } from "@/components/enterprise/EnterpriseCustomPrograms";
import { EnterpriseSuccessStories } from "@/components/enterprise/EnterpriseSuccessStories";
import { EnterpriseDomains } from "@/components/enterprise/EnterpriseDomains";
import { EnterpriseBusinessBanner } from "@/components/enterprise/EnterpriseBusinessBanner";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/for-enterprises")({
  head: () =>
    pageHead({
      title: "For Enterprises",
      description:
        "Corporate training for your workforce — Certcia for Business, GenAI Academy, and custom learning solutions in AI, Data, and Tech.",
      path: "/for-enterprises",
    }),
  component: Enterprise,
});

function Enterprise() {
  return (
    <div className="overflow-x-clip bg-white">
      <EnterpriseHero />
      <EnterprisePartners />
      <EnterpriseSolutions />
      <EnterpriseDiagnostic />
      <EnterpriseLifecycle />
      <EnterpriseDecisionPack />
      <EnterpriseWorkstreams />
      <CommercialFlexibility />
      <MeasureWhatChanges />
      <ImplementationMap />
      {/* <EnterpriseTestimonials /> */}
      {/* <EnterpriseAcademy />
      <EnterpriseExecutivePrograms /> */}
      {/* <EnterpriseCustomPrograms /> */}
      {/* <EnterpriseSuccessStories /> */}
      {/* <EnterpriseDomains /> */}
      {/* <EnterpriseBusinessBanner /> */}
    </div>
  );
}

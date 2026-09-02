import { createFileRoute } from "@tanstack/react-router";
import { EnterpriseHero } from "@/components/enterprise/EnterpriseHero";
import { EnterprisePartners } from "@/components/enterprise/EnterprisePartners";
import { EnterpriseSolutions } from "@/components/enterprise/EnterpriseSolutions";
import { EnterpriseTestimonials } from "@/components/enterprise/EnterpriseTestimonials";
import { EnterpriseAcademy } from "@/components/enterprise/EnterpriseAcademy";
import { EnterpriseExecutivePrograms } from "@/components/enterprise/EnterpriseExecutivePrograms";
import { EnterpriseCustomPrograms } from "@/components/enterprise/EnterpriseCustomPrograms";
import { EnterpriseSuccessStories } from "@/components/enterprise/EnterpriseSuccessStories";
import { EnterpriseDomains } from "@/components/enterprise/EnterpriseDomains";
import { EnterpriseBusinessBanner } from "@/components/enterprise/EnterpriseBusinessBanner";

export const Route = createFileRoute("/for-enterprises")({
  head: () => ({
    meta: [
      { title: "For Enterprises — Certcia AI Campus" },
      {
        name: "description",
        content:
          "Corporate training for your workforce — Certcia for Business, GenAI Academy, and custom learning solutions in AI, Data, and Tech.",
      },
    ],
  }),
  component: Enterprise,
});

function Enterprise() {
  return (
    <div className="overflow-x-clip bg-white">
      <EnterpriseHero />
      <EnterprisePartners />
      <EnterpriseSolutions />
      <EnterpriseTestimonials />
      <EnterpriseAcademy />
      <EnterpriseExecutivePrograms />
      <EnterpriseCustomPrograms />
      <EnterpriseSuccessStories />
      <EnterpriseDomains />
      <EnterpriseBusinessBanner />
    </div>
  );
}

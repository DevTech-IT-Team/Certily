import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/campus/Reveal";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    id: "01",
    shortTitle: "Discover",
    title: "Align on business goals and define the scope",
    description:
      "We work with your leadership to define what success looks like, align on target capabilities, and map out the critical roles that drive your business strategy forward",
    cards: [
      { title: "Strategic alignment", description: "Map enterprise goals to specific human performance requirements" },
      { title: "Scope definition", description: "Identify critical populations and immediate capability risks" },
      { title: "Success metrics", description: "Define measurable outcomes and operational KPIs for the engagement" },
    ],
    nextAction: "Move into detailed ecosystem and skills discovery",
  },
  {
    id: "02",
    shortTitle: "Audit",
    title: "Audit the complete learning ecosystem",
    description:
      "We assess capability demand, current skills, content quality, systems, delivery operations, vendor landscape, spend, learner experience and governance — a fact base L&D, HR, business and procurement can use together",
    cards: [
      { title: "Skills & role audit", description: "Priority roles, proficiency baseline, critical capability gaps and risk areas" },
      { title: "Learning ecosystem audit", description: "Content, platforms, process, administration, utilization, duplication and learner friction" },
      { title: "Future-state demand", description: "Capabilities required by strategy, technology changes, growth plans and role evolution" },
    ],
    nextAction: "Translate findings into a heatmap, roadmap and procurement-ready specifications",
  },
  {
    id: "03",
    shortTitle: "Gap map",
    title: "Identify critical skill gaps and operational inefficiencies",
    description:
      "Using the audit data, we map where the organization is falling short — urgent capability deficits and where current learning spend is being wasted",
    cards: [
      { title: "Capability heatmap", description: "Visual mapping of skill proficiencies against future-state requirements" },
      { title: "Operational friction", description: "Identify bottlenecks in how learning is delivered and consumed" },
      { title: "Spend analysis", description: "Review current vendor spend and identify consolidation opportunities" },
    ],
    nextAction: "Design a targeted blueprint to close the identified capability gaps",
  },
  {
    id: "04",
    shortTitle: "Blueprint",
    title: "Design the future-state learning architecture",
    description:
      "We build a comprehensive blueprint for the new learning ecosystem — technical architecture, content strategy, and the operating model required to support the workforce",
    cards: [
      { title: "Technical architecture", description: "Map out the required platforms, integrations, and data flows" },
      { title: "Content strategy", description: "Define the mix of custom, curated, and off-the-shelf content" },
      { title: "Operating model", description: "Design the governance and team structure needed for success" },
    ],
    nextAction: "Develop requirements and run vendor selection for required platforms",
  },
  {
    id: "05",
    shortTitle: "RFP",
    title: "Develop requirements and select partners",
    description:
      "We help you navigate the vendor landscape — procurement-ready specifications, the RFP process, and selecting the right platforms and content partners",
    cards: [
      { title: "Requirements gathering", description: "Translate blueprint designs into technical and functional requirements" },
      { title: "Vendor evaluation", description: "Assess potential partners against your specific needs and constraints" },
      { title: "Selection & negotiation", description: "Support the procurement process to ensure optimal pricing and terms" },
    ],
    nextAction: "Begin the implementation and content development phase",
  },
  {
    id: "06",
    shortTitle: "Build",
    title: "Implement platforms and launch to learners",
    description:
      "We manage platform implementation and custom content development, so the launch is something the workforce will actually use",
    cards: [
      { title: "Platform implementation", description: "Configure, integrate, and test the new technical architecture" },
      { title: "Content development", description: "Build bespoke learning experiences tailored to your specific context" },
      { title: "Change management", description: "Drive adoption and engagement through targeted communications" },
    ],
    nextAction: "Transition to ongoing operations and continuous improvement",
  },
  {
    id: "07",
    shortTitle: "Optimize",
    title: "Monitor performance and continuously improve",
    description:
      "We help you establish the processes and analytics required to monitor performance, measure impact, and refine the learning ecosystem over time",
    cards: [
      { title: "Performance analytics", description: "Track learner progress, engagement, and operational metrics" },
      { title: "Impact measurement", description: "Link learning outcomes to the business KPIs defined in Discover" },
      { title: "Continuous optimization", description: "Iterate on content and processes based on data-driven insights" },
    ],
    nextAction: "Plan the next phase of transformation",
  },
] as const;

export function EnterpriseLifecycle() {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEPS[activeStep];
  const nextIndex = activeStep < STEPS.length - 1 ? activeStep + 1 : 0;

  return (
    <section
      id="model"
      className="relative scroll-mt-24 bg-white px-4 py-16 sm:px-6 sm:py-24 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
                The 7-step model
              </p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem]">
                The Certcia enterprise learning lifecycle
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-[#5A607A]">
              Diagnose first, then turn evidence into a buildable and measurable
              capability plan
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="-mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0">
            <ol className="flex min-w-max gap-1 border-b border-[#E8EAF4] sm:min-w-0 sm:flex-wrap">
              {STEPS.map((step, index) => {
                const isActive = index === activeStep;
                return (
                  <li key={step.id} className="sm:flex-1">
                    <button
                      type="button"
                      onClick={() => setActiveStep(index)}
                      className={cn(
                        "flex w-full flex-col items-start gap-1 border-b-2 px-3 py-3 text-left transition-colors sm:px-2",
                        isActive
                          ? "border-[#5B4CF5] text-[#0F1533]"
                          : "border-transparent text-[#8A90A8] hover:text-[#0F1533]",
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[11px] font-bold",
                          isActive ? "text-[#5B4CF5]" : "text-[#C0C4D4]",
                        )}
                      >
                        {step.id}
                      </span>
                      <span className="text-[13px] font-bold">{step.shortTitle}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[#8A90A8]">
                Step {current.id} of 07
              </p>
              <h3 className="mt-3 font-display text-2xl font-bold leading-snug tracking-tight text-[#0F1533] sm:text-[1.85rem]">
                {current.title}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-[#5A607A]">
                {current.description}
              </p>
              <button
                type="button"
                onClick={() => setActiveStep(nextIndex)}
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#5B4CF5] hover:underline"
              >
                Next — {STEPS[nextIndex].shortTitle}
                <ArrowRight className="h-4 w-4" />
              </button>
              <p className="mt-2 max-w-sm text-[13px] leading-relaxed text-[#8A90A8]">
                {current.nextAction}
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-3 lg:col-span-7 lg:grid-cols-1 xl:grid-cols-3">
              {current.cards.map((card) => (
                <li
                  key={card.title}
                  className="rounded-2xl bg-[#F7F8FC] p-5 ring-1 ring-[#EEEAF4]"
                >
                  <p className="text-sm font-bold text-[#0F1533]">{card.title}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-[#5A607A]">
                    {card.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

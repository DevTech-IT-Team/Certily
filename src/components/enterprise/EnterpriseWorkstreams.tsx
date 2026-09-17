import { useState } from "react";
import { Reveal } from "@/components/campus/Reveal";

const WORKSTREAMS = [
  {
    id: "01",
    badge: "CUSTOM",
    title: "Learning Experience Studio",
    description: "Role-based journeys, Rise / Storyline content, scenarios, simulations, labs, assessments, certifications and job-embedded performance support."
  },
  {
    id: "02",
    badge: "PLATFORM",
    title: "LMS & Learning Platform Studio",
    description: "White-label portals, SSO/HR integrations, pathways, reporting, admin experience, data flows and standards-based content integration as required."
  },
  {
    id: "03",
    badge: "OPERATE",
    title: "Managed Learning Operations",
    description: "Enrollment, scheduling, curriculum administration, learner support, compliance tracking, reporting, service levels and operational governance."
  },
  {
    id: "04",
    badge: "DELIVER",
    title: "Trainer & Delivery Network",
    description: "Market sourcing, vetting, train-the-trainer, trainer certification, scheduling, regional delivery, virtual production and delivery quality control."
  },
  {
    id: "05",
    badge: "ADOPT",
    title: "Change & Adoption",
    description: "Leader alignment, champion networks, manager toolkits, communication, office hours, reinforcement and workflow-based adoption support."
  },
  {
    id: "06",
    badge: "EVOLVE",
    title: "Content & Capability Lifecycle",
    description: "Quarterly refresh, emerging-skills radar, version control, localization, accessibility review, content retirement and recurring capability re-audits."
  }
];

export function EnterpriseWorkstreams() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <section className="bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Header */}
          <div className="mb-16">
            <h4 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#5B4CF5]">
              Six Specialist Workstreams
            </h4>
            <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[60px] font-bold leading-[1.1] tracking-tight text-[#0F1533] max-w-4xl">
              One transformation partner <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B4CF5] to-[#8C84F9]">
                Zero fragmented vendors
              </span>
            </h2>
            <p className="mt-6 text-lg text-[#5A607A] max-w-2xl font-light leading-relaxed">
              Certcia can design and run your entire learning system, while giving you the flexibility to procure each component independently.
            </p>
          </div>

          {/* Elegant Minimalist Accordion */}
          <div className="flex flex-col border-t border-gray-200">
            {WORKSTREAMS.map((item, index) => {
              const isActive = activeIndex === index;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden border-b border-gray-200 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] cursor-pointer ${
                    isActive ? "bg-[#F4F6FF] h-[260px] sm:h-[220px]" : "bg-white hover:bg-gray-50 h-[90px] sm:h-[110px]"
                  }`}
                >
                  {/* Left Accent Line */}
                  <div className={`absolute left-0 top-0 h-full w-[3px] bg-[#5B4CF5] transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] origin-top ${isActive ? 'scale-y-100' : 'scale-y-0'}`} />

                  {/* Header Area (Always visible) */}
                  <div className="absolute top-0 left-0 w-full h-[90px] sm:h-[110px] flex items-center justify-between px-6 sm:px-10">
                    <div className="flex items-center gap-6 sm:gap-12 w-full pr-8">
                      <span className={`text-lg sm:text-2xl font-light font-mono transition-colors duration-500 shrink-0 ${isActive ? 'text-[#5B4CF5]' : 'text-gray-300 group-hover:text-gray-400'}`}>
                        {item.id}
                      </span>
                      <h3 className={`font-display text-2xl sm:text-4xl lg:text-[2.75rem] tracking-tight truncate transition-all duration-500 ${isActive ? 'font-semibold text-[#0F1533]' : 'font-light text-[#5A607A] group-hover:text-[#0F1533]'}`}>
                        {item.title}
                      </h3>
                    </div>
                    {/* Minimalist Plus/Minus Icon */}
                    <div className="relative h-6 w-6 shrink-0">
                      <div className={`absolute top-1/2 left-0 w-full h-[1.5px] bg-[#0F1533] transition-transform duration-500 ${isActive ? 'rotate-180 bg-[#5B4CF5]' : 'rotate-0'}`} />
                      <div className={`absolute top-1/2 left-0 w-full h-[1.5px] bg-[#0F1533] transition-transform duration-500 ${isActive ? 'rotate-180 bg-[#5B4CF5]' : 'rotate-90'}`} />
                    </div>
                  </div>

                  {/* Description Area (Slides down) */}
                  <div className={`absolute top-[90px] sm:top-[110px] left-0 w-full px-6 sm:px-10 pl-[70px] sm:pl-[120px] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}>
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 max-w-5xl pt-2">
                      <p className="text-base sm:text-xl leading-relaxed text-[#5A607A] font-light max-w-4xl">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom RFP Banner */}
          <div className="mt-16 relative flex flex-col items-start gap-4 overflow-hidden rounded-[1.5rem] bg-[#F8F9FE] border border-[#5B4CF5]/10 px-8 py-6 sm:flex-row sm:items-center sm:gap-8">
            <div className="relative z-10 inline-flex shrink-0 items-center gap-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#5B4CF5]/10">
                <div className="h-3 w-3 animate-pulse rounded-full bg-[#5B4CF5]" />
              </div>
              <h4 className="font-display text-[13px] font-extrabold uppercase tracking-widest text-[#0F1533]">
                RFP-ready scopes
              </h4>
            </div>
            <div className="relative z-10 hidden h-8 w-px bg-gray-200 sm:block" />
            <p className="relative z-10 text-[13px] leading-relaxed text-[#5A607A]">
              Each workstream can be translated into statement of work, acceptance criteria, service levels, governance, measurement, security/integration requirements and supplier evaluation scorecards.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

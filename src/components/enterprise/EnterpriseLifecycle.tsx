import { useState } from "react";
import { Reveal } from "@/components/campus/Reveal";

const STEPS = [
  {
    id: "01",
    shortTitle: "Discover",
    title: "Align on business goals and define the scope.",
    description: "We work with your leadership to define what success looks like, align on target capabilities, and map out the critical roles that drive your business strategy forward.",
    cards: [
      { title: "Strategic alignment", description: "Map enterprise goals to specific human performance requirements." },
      { title: "Scope definition", description: "Identify critical populations and immediate capability risks." },
      { title: "Success metrics", description: "Define measurable outcomes and operational KPIs for the engagement." }
    ],
    nextAction: "move into detailed ecosystem and skills discovery."
  },
  {
    id: "02",
    shortTitle: "Audit",
    title: "Audit the complete learning ecosystem.",
    description: "We assess capability demand, current skills, content quality, systems, delivery operations, vendor landscape, spend, learner experience and governance. The result is a fact base your L&D, HR, business and procurement teams can use together.",
    cards: [
      { title: "Skills & role audit", description: "Priority roles, proficiency baseline, critical capability gaps and risk areas." },
      { title: "Learning ecosystem audit", description: "Content, platforms, process, administration, utilization, duplication and learner friction." },
      { title: "Future-state demand", description: "Capabilities required by strategy, technology changes, growth plans and role evolution." }
    ],
    nextAction: "translate findings into a capability heatmap, roadmap, investment model and procurement-ready specifications."
  },
  {
    id: "03",
    shortTitle: "Gap Map",
    title: "Identify critical skill gaps and operational inefficiencies.",
    description: "Using the audit data, we map out exactly where your organization is falling short. We highlight urgent capability deficits and identify areas where your current learning spend is being wasted.",
    cards: [
      { title: "Capability heatmap", description: "Visual mapping of skill proficiencies against future-state requirements." },
      { title: "Operational friction", description: "Identify bottlenecks in how learning is delivered and consumed." },
      { title: "Spend analysis", description: "Review current vendor spend and identify consolidation opportunities." }
    ],
    nextAction: "design a targeted blueprint to close the identified capability gaps."
  },
  {
    id: "04",
    shortTitle: "Blueprint",
    title: "Design the future-state learning architecture.",
    description: "We build a comprehensive blueprint for your new learning ecosystem. This includes the technical architecture, content strategy, and operating model required to support your workforce.",
    cards: [
      { title: "Technical architecture", description: "Map out the required platforms, integrations, and data flows." },
      { title: "Content strategy", description: "Define the mix of custom, curated, and off-the-shelf content." },
      { title: "Operating model", description: "Design the governance and team structure needed for success." }
    ],
    nextAction: "develop requirements and run vendor selection for required platforms."
  },
  {
    id: "05",
    shortTitle: "RFP Pack",
    title: "Develop requirements and select partners.",
    description: "We help you navigate the complex vendor landscape. We build procurement-ready specifications, manage the RFP process, and help you select the right platforms and content partners.",
    cards: [
      { title: "Requirements gathering", description: "Translate blueprint designs into technical and functional requirements." },
      { title: "Vendor evaluation", description: "Assess potential partners against your specific needs and constraints." },
      { title: "Selection & negotiation", description: "Support the procurement process to ensure optimal pricing and terms." }
    ],
    nextAction: "begin the implementation and content development phase."
  },
  {
    id: "06",
    shortTitle: "Build & Deploy",
    title: "Implement platforms and launch to learners.",
    description: "We manage the technical implementation of your new learning platforms and oversee the development of custom content, ensuring a smooth and engaging launch for your workforce.",
    cards: [
      { title: "Platform implementation", description: "Configure, integrate, and test the new technical architecture." },
      { title: "Content development", description: "Build bespoke learning experiences tailored to your specific context." },
      { title: "Change management", description: "Drive adoption and engagement through targeted communications." }
    ],
    nextAction: "transition to ongoing operations and continuous improvement."
  },
  {
    id: "07",
    shortTitle: "Operate & Optimize",
    title: "Monitor performance and continuously improve.",
    description: "We don't just build it and leave. We help you establish the processes and analytics required to monitor performance, measure impact, and continuously refine your learning ecosystem.",
    cards: [
      { title: "Performance analytics", description: "Track learner progress, engagement, and operational metrics." },
      { title: "Impact measurement", description: "Link learning outcomes to the business KPIs defined in step 1." },
      { title: "Continuous optimization", description: "Iterate on content and processes based on data-driven insights." }
    ],
    nextAction: "celebrate success and plan for the next phase of transformation."
  }
];

export function EnterpriseLifecycle() {
  const [activeStep, setActiveStep] = useState(0);

  const currentStep = STEPS[activeStep];

  return (
    <section className="relative overflow-hidden bg-[#F8F9FE] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Background blurs to match hero */}
      <div className="pointer-events-none absolute right-1/4 top-0 h-[30rem] w-[30rem] rounded-full bg-[#5B4CF5]/5 blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#5B4CF5]/10 px-3 py-1 mb-6 border border-[#5B4CF5]/20">
                <span className="flex h-2 w-2 rounded-full bg-[#5B4CF5] animate-pulse"></span>
                <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
                  Rise-Style Process Experience
                </h2>
              </div>
              <h2 className="font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0F1533] sm:text-5xl lg:text-[3.25rem]">
                The Certcia Enterprise Learning Lifecycle
              </h2>
            </div>
            <div className="max-w-md">
              <p className="text-[16px] leading-relaxed text-[#5A607A]">
                A guided process block makes the engagement easy to understand:
                diagnose first, then turn evidence into a buildable and measurable capability plan.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Interactive Component - Dark Sleek UI like Hero */}
        <Reveal>
          <div className="flex flex-col overflow-hidden rounded-[2.5rem] bg-[#11142A] border border-white/5 shadow-[0_40px_80px_-20px_rgba(11,14,33,0.5)] lg:flex-row lg:min-h-[500px]">
            
            {/* Left Sidebar - Sleek and compact */}
            <div className="flex flex-col bg-[#1C203B]/50 p-6 lg:w-[280px] lg:shrink-0 lg:p-8 border-b lg:border-b-0 lg:border-r border-white/10">
              <div className="mb-6 inline-block rounded-full bg-[#1C203B] border border-white/10 px-3.5 py-1.5 backdrop-blur-md self-start">
                <h3 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#A5ACCE]">
                  Explore the 7 Steps
                </h3>
              </div>
              
              <div className="flex flex-col gap-2 relative">
                {/* Minimal connecting line */}
                <div className="absolute left-4 top-4 bottom-4 w-px bg-white/10 hidden lg:block" />

                {STEPS.map((step, index) => {
                  const isActive = index === activeStep;
                  return (
                    <button
                      key={step.id}
                      onClick={() => setActiveStep(index)}
                      className={`group relative flex items-center gap-4 rounded-full px-3 py-2.5 text-left transition-all duration-300 ${
                        isActive
                          ? "bg-[#1C203B] border border-white/10 shadow-[0_10px_20px_rgba(0,0,0,0.3)]"
                          : "border border-transparent hover:bg-white/5"
                      }`}
                    >
                      <div
                        className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold transition-all duration-300 ${
                          isActive
                            ? "bg-[#5B4CF5] text-white shadow-[0_0_15px_rgba(91,76,245,0.4)]"
                            : "bg-[#20254A] text-[#A5ACCE] group-hover:bg-[#5B4CF5]/20 group-hover:text-[#E2E8F0]"
                        }`}
                      >
                        {step.id}
                      </div>
                      <span className={`text-[12px] font-bold transition-colors duration-300 ${isActive ? "text-white tracking-wide" : "text-[#A5ACCE] group-hover:text-[#E2E8F0]"}`}>
                        {step.shortTitle}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Content Area - Dark, high contrast */}
            <div className="flex flex-col p-6 lg:flex-grow lg:p-10 relative">
              
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B4CF5]/10 via-transparent to-transparent opacity-50 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/30 bg-[#5B4CF5]/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5] w-fit">
                  Step {currentStep.id} of 07
                </div>
                <h3 className="mb-4 font-display text-[28px] font-bold leading-tight text-white drop-shadow-sm tracking-tight lg:text-[36px] max-w-2xl">
                  {currentStep.title}
                </h3>
                <p className="mb-10 max-w-3xl text-[15px] leading-relaxed text-[#A5ACCE]">
                  {currentStep.description}
                </p>

                {/* Cards Grid */}
                <div className="mb-10 grid gap-4 md:grid-cols-3">
                  {currentStep.cards.map((card, idx) => (
                    <div
                      key={idx}
                      className="group flex flex-col rounded-2xl border border-white/5 bg-[#1C203B] p-5 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:border-[#5B4CF5]/40 hover:bg-[#20254A]"
                    >
                      <h4 className="mb-2 text-[13px] font-bold text-[#E2E8F0]">
                        {card.title}
                      </h4>
                      <p className="text-[12px] leading-relaxed text-[#A5ACCE]">
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Bottom Next Banner (Clickable) */}
                <div 
                  className="mt-auto flex items-center justify-between gap-4 rounded-2xl border border-[#5B4CF5]/20 bg-[#1C203B]/80 p-4 shadow-lg transition-all duration-300 hover:border-[#5B4CF5]/50 hover:bg-[#20254A] cursor-pointer backdrop-blur-sm"
                  onClick={() => setActiveStep(prev => prev < STEPS.length - 1 ? prev + 1 : 0)}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#5B4CF5] text-white shadow-[0_0_15px_rgba(91,76,245,0.4)]">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 16 16 12 12 8"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                    </div>
                    <div className="text-[13px]">
                      <span className="font-bold text-[#E2E8F0] uppercase tracking-wider text-[11px] mr-2">Next Phase:</span>
                      <span className="font-medium text-[#A5ACCE]">{currentStep.nextAction}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
        
        {/* Footer tiny text */}
        <div className="mt-6 text-center lg:text-right text-[10px] uppercase tracking-wider text-[#9AA0B4]">
          Designed to be implementable as a Rise 360 Process block or a web-native equivalent
        </div>
      </div>
    </section>
  );
}

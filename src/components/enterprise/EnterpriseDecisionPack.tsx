import { Reveal } from "@/components/campus/Reveal";

const DECISIONS = [
  {
    id: "01",
    title: "Skill Gap & Priority Heatmap",
    description: "Roles and populations ranked by business criticality, proficiency gap, urgency and risk."
  },
  {
    id: "02",
    title: "Learning Architecture",
    description: "What to build, buy, curate, retire or reinforce - with modality, pathway and assessment design."
  },
  {
    id: "03",
    title: "90 / 180 / 365-Day Roadmap",
    description: "Pilots, waves, dependencies, owners, budget ranges, success measures and governance cadence."
  },
  {
    id: "04",
    title: "Procurement-Ready RFP Library",
    description: "Separate scopes for content development, LMS / white-label build, platform operations, trainer sourcing and managed delivery."
  }
];

export function EnterpriseDecisionPack() {
  return (
    <section className="relative overflow-hidden bg-[#F8F9FE] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#5B4CF5]/10 px-3 py-1 mb-6 border border-[#5B4CF5]/20">
              <span className="flex h-2 w-2 rounded-full bg-[#5B4CF5] animate-pulse"></span>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
                What the client receives
              </h2>
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem]">
              The audit ends with a decision pack — not a sales pitch
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#5A607A]">
              The output should be usable by executives, L&D, technology and procurement even if the client chooses another implementation partner.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-6 lg:grid-cols-12 lg:items-stretch">
            {/* Left Core Deliverable Card */}
            <div className="group relative flex flex-col overflow-hidden rounded-[2.5rem] bg-[#11142A] p-8 sm:p-10 shadow-[0_40px_80px_-20px_rgba(11,14,33,0.5)] border border-white/5 lg:col-span-5">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B4CF5]/10 via-transparent to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
              
              <div className="relative z-10 mb-8 flex-grow"> 
                <div className="mb-6 inline-block rounded-full bg-[#1C203B] border border-white/10 px-3.5 py-1.5 backdrop-blur-md">
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#A5ACCE]">
                    Core Deliverable
                  </h3>
                </div>
                <h3 className="font-display text-[28px] font-bold leading-[1.15] text-white drop-shadow-sm sm:text-[32px]">
                  Enterprise Capability & Learning Transformation Report
                </h3>
                <p className="mt-5 text-[14px] leading-relaxed text-[#A5ACCE]">
                  Current state, future demand, evidence-backed gaps, prioritized interventions, target operating model, investment options, governance and measurable outcomes.
                </p>
              </div>

              {/* Document Illustration (White Page) */}
              <div className="relative z-20 mt-auto -mb-10 -mx-4 rounded-t-[32px] bg-white p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.15)] border border-gray-200">
                <div className="mb-5 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-[#5B4CF5]/10">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#5B4CF5] shadow-[0_0_10px_rgba(91,76,245,0.5)]" />
                    </div>
                    <div className="text-[14px] font-black text-[#0F1533] uppercase tracking-wider">Capability Heatmap</div>
                  </div>
                  <div className="rounded-full bg-[#F8F9FE] px-2.5 py-1 text-[9px] font-bold text-[#5A607A] uppercase tracking-widest border border-gray-100">Live Data</div>
                </div>
                
                <div className="mb-8 flex flex-col gap-2.5">
                  <div className="h-2 w-3/4 rounded-full bg-gradient-to-r from-[#5B4CF5]/40 to-[#5B4CF5]/5" />
                  <div className="h-1.5 w-full rounded-full bg-gray-100" />
                  <div className="h-1.5 w-5/6 rounded-full bg-gray-100" />
                </div>
                
                <div className="flex h-[120px] items-end justify-between gap-4 px-2 relative">
                  {/* Grid lines in background */}
                  <div className="absolute inset-x-0 bottom-0 top-0 flex flex-col justify-between z-0">
                     <div className="w-full border-b border-gray-100 border-dashed h-0" />
                     <div className="w-full border-b border-gray-100 border-dashed h-0" />
                     <div className="w-full border-b border-gray-100 border-dashed h-0" />
                     <div className="w-full border-b border-gray-200 h-0" />
                  </div>

                  {/* Bars */}
                  <div className="relative z-10 w-1/4 rounded-t-lg bg-gray-100 h-[40%]" />
                  <div className="relative z-10 w-1/4 rounded-t-lg bg-gradient-to-t from-[#5B4CF5] to-[#7B6DF7] shadow-[0_0_20px_rgba(91,76,245,0.25)] h-[70%]">
                    <div className="absolute inset-0 rounded-t-lg bg-gradient-to-b from-white/30 to-transparent" />
                  </div>
                  <div className="relative z-10 w-1/4 rounded-t-lg bg-gradient-to-t from-[#0F1533] to-[#2B3566] shadow-[0_0_20px_rgba(15,21,51,0.2)] h-[100%]">
                    <div className="absolute inset-0 rounded-t-lg bg-gradient-to-b from-white/20 to-transparent" />
                  </div>
                  <div className="relative z-10 w-1/4 rounded-t-lg bg-gray-100 h-[30%]" />
                </div>
              </div>
            </div>

            {/* Right Side Cards (White Theme) */}
            <div className="flex flex-col justify-between gap-6 lg:col-span-7">
              <div className="grid gap-6 sm:grid-cols-2">
                {DECISIONS.map((item) => (
                  <div
                    key={item.id}
                    className="group flex flex-col rounded-[24px] border border-gray-100 bg-white p-7 sm:p-8 shadow-[0_4px_20px_rgb(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1 hover:border-[#5B4CF5]/30 hover:shadow-[0_12px_30px_rgb(0,0,0,0.06)]"
                  >
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#5B4CF5]/10 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5] w-fit">
                      Decision {item.id}
                    </div>
                    <h4 className="mb-3 font-display text-[17px] font-extrabold text-[#0F1533] tracking-tight">
                      {item.title}
                    </h4>
                    <p className="text-[13px] leading-relaxed text-[#5A607A]">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Bottom Banner (Light Theme) */}
              <div className="flex flex-col gap-4 rounded-[24px] border border-[#5B4CF5]/10 bg-[#F8F9FE] p-6 shadow-sm transition-all duration-300 hover:border-[#5B4CF5]/30 hover:shadow-md sm:flex-row sm:items-center sm:p-8 mt-auto">
                <div className="shrink-0">
                  <h4 className="font-display text-[15px] font-extrabold text-[#0F1533]">
                    No forced bundle
                  </h4>
                  <h4 className="font-display text-[15px] font-extrabold text-[#5B4CF5]">
                    No vendor lock-in
                  </h4>
                </div>
                <div className="h-px w-full bg-gray-200 sm:h-12 sm:w-px" />
                <p className="text-[13px] leading-relaxed text-[#5A607A]">
                  The organization may award each workstream to Certcia, another provider, multiple providers, or execute internally. The audit architecture and specifications remain with the client.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

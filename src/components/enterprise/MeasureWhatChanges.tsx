import { Reveal } from "@/components/campus/Reveal";

const METRICS = [
  {
    id: "01",
    title: "Skill lift",
    description: "Baseline vs. post-learning proficiency, assessment performance, certification and role readiness."
  },
  {
    id: "02",
    title: "Application at work",
    description: "Evidence of changed behavior, workflow adoption, project quality and manager-confirmed application."
  },
  {
    id: "03",
    title: "Learning adoption",
    description: "Reach, engagement, cohort progression, practice, completion, usage and drop-off patterns."
  },
  {
    id: "04",
    title: "Operational health",
    description: "SLA performance, time-to-schedule, learner support, trainer quality, incident rate and admin efficiency."
  },
  {
    id: "05",
    title: "Business impact",
    description: "Metrics tied to the original need: quality, cycle time, sales, productivity, error, risk, safety or customer outcome."
  },
  {
    id: "06",
    title: "Portfolio economics",
    description: "Utilization, content duplication, vendor spend, platform cost, cost-to-serve and investment prioritization."
  }
];

export function MeasureWhatChanges() {
  return (
    <section className="bg-[#F8F9FE] pb-16 sm:pb-24 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Header */}
          <div className="mb-12 pt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <h4 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#5B4CF5]">
                MEASURE WHAT CHANGES
              </h4>
              <h2 className="font-display text-[32px] sm:text-[40px] font-bold leading-[1.1] tracking-tight text-[#0F1533]">
                Completion is a signal. Capability and business performance are the outcome.
              </h2>
            </div>
            <div className="max-w-xs lg:text-right pb-2">
              <p className="text-sm text-[#5A607A] leading-relaxed">
                Agree measurement during the audit - then carry the same KPIs through design, rollout and managed operations.
              </p>
            </div>
          </div>

          {/* Structural Grid Without Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16 border-t border-l border-[#E2E8F0] bg-white">
            {METRICS.map((metric) => (
              <div
                key={metric.id}
                className="p-8 sm:p-10 border-r border-b border-[#E2E8F0] transition-colors hover:bg-[#F4F6FF]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xl font-light text-[#5B4CF5] font-mono">
                    {metric.id}
                  </span>
                  <div className="h-[1px] w-12 bg-[#5B4CF5]/20" />
                </div>
                <h4 className="font-display text-xl font-bold text-[#0F1533] mb-3">
                  {metric.title}
                </h4>
                <p className="text-[14px] leading-relaxed text-[#5A607A]">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="bg-[#0F1533] rounded-3xl p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
                Don't start with a training catalogue. Start with the business problem.
              </h3>
              <p className="text-[#A5ACCE] text-sm">
                Book a working session to define the scope of your Enterprise Capability Audit.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <button className="bg-[#5B4CF5] text-white font-bold text-sm px-6 py-3.5 rounded-full hover:bg-[#4A3BCC] transition-colors whitespace-nowrap">
                Book an Enterprise Audit
              </button>
              <button className="bg-transparent text-white border border-white/30 font-bold text-sm px-6 py-3.5 rounded-full hover:bg-white/10 transition-colors whitespace-nowrap">
                Download audit scope
              </button>
            </div>
          </div>

          {/* <div className="mt-4 text-right">
             <p className="text-[10px] text-gray-400">Recommended final conversion point for the page</p>
          </div> */}
        </Reveal>
      </div>
    </section>
  );
}

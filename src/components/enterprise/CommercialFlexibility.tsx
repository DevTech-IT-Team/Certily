import { Reveal } from "@/components/campus/Reveal";

const MODELS = [
  {
    id: "MODEL A",
    title: "Capability Audit",
    description: "Frontline diagnostic, audit report, gap map, roadmap, business case and RFP pack.",
    color: "bg-[#0F1533]", // Dark card
    textColor: "text-white"
  },
  {
    id: "MODEL B",
    title: "Transformation Build",
    description: "Project based content, platform, integration and rollout with milestone acceptance.",
    color: "bg-white",
    textColor: "text-[#0F1533]"
  },
  {
    id: "MODEL C",
    title: "Managed Learning Subscription",
    description: "Recurring platform administration, learner support, analytics, governance and content care.",
    color: "bg-white",
    textColor: "text-[#0F1533]"
  },
  {
    id: "MODEL D",
    title: "Training Delivery On Demand",
    description: "Trainer sourcing and delivery priced by session, cohort, day, geography or delivery program.",
    color: "bg-white",
    textColor: "text-[#0F1533]"
  },
  {
    id: "MODEL E",
    title: "Embedded L&D Capacity",
    description: "Specialist designers, admins, coordinators or learning PMs added when internal teams need capacity.",
    color: "bg-white",
    textColor: "text-[#0F1533]"
  },
  {
    id: "MODEL F",
    title: "Content Care Retainer",
    description: "Scheduled refresh, updates, localization, regulatory refresh and retirement of outdated material.",
    color: "bg-white",
    textColor: "text-[#0F1533]"
  }
];

export function CommercialFlexibility() {
  return (
    <section className="bg-[#F8F9FE] py-16 sm:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Header */}
          <div className="mb-12">
            <h4 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#5B4CF5]">
              COMMERCIAL FLEXIBILITY
            </h4>
            <h2 className="font-display text-[32px] sm:text-[40px] font-bold leading-[1.1] tracking-tight text-[#0F1533] max-w-4xl">
              Scale learning capacity with the business - not against it.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5A607A] max-w-3xl leading-relaxed">
              Enterprise demand changes. The operating model should let clients increase or reduce learner volume, services, delivery days and content maintenance without rebuilding the entire contract.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">

            {/* Left Box: Elastic Subscription */}
            <div className="lg:w-[45%] flex flex-col bg-white rounded-3xl p-8 sm:p-12 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100">
              <h3 className="font-display text-2xl font-bold text-[#0F1533] mb-3">
                Elastic managed learning subscription
              </h3>
              <p className="text-[#5A607A] text-[15px] leading-relaxed mb-12">
                A base operating layer plus volume bands tied to active learners, transactions, support load, delivery days or agreed service units.
              </p>

              {/* Graphic */}
              <div className="flex-1 flex flex-col justify-center mb-12">
                <div className="relative flex items-center justify-between w-full max-w-sm mx-auto h-32">
                  {/* Connecting Line */}
                  <div className="absolute top-1/2 left-0 w-full h-[2px] bg-gray-200 -translate-y-1/2 z-0" />

                  {/* Circles */}
                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#0F1533] text-center text-white shadow-lg transition-transform hover:scale-105">
                    <div>
                      <div className="text-sm font-bold">100</div>
                      <div className="text-[10px]">learners</div>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full bg-[#5B4CF5] text-center text-white shadow-lg transition-transform hover:scale-105 shadow-[#5B4CF5]/20 border-4 border-white">
                    <div>
                      <div className="text-lg font-black">1,000</div>
                      <div className="text-xs font-semibold">learners</div>
                    </div>
                  </div>

                  <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-[#0F1533] text-center text-white shadow-lg transition-transform hover:scale-105">
                    <div>
                      <div className="text-sm font-bold">250</div>
                      <div className="text-[10px]">learners</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Note */}
              <div className="border-t border-gray-100 pt-6">
                <p className="text-[11px] leading-relaxed text-[#5A607A]">
                  Scale up for launches, transformation waves or seasonal demand. Scale down when cohorts close - without losing the platform, data or operating discipline.
                </p>
              </div>
            </div>

            {/* Right Grid: Structural Typography */}
            <div className="lg:w-[55%] grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12 lg:pl-6">
              {MODELS.map((model) => (
                <div key={model.id} className="group relative">
                  {/* Elegant line above */}
                  <div className="w-8 h-[2px] bg-[#5B4CF5]/20 mb-4 transition-all duration-500 group-hover:w-full group-hover:bg-[#5B4CF5]" />
                  
                  <div className="text-[10px] font-extrabold uppercase tracking-widest mb-2 text-[#5B4CF5]">
                    {model.id}
                  </div>
                  <h4 className="font-display text-[17px] font-bold mb-3 text-[#0F1533]">
                    {model.title}
                  </h4>
                  <p className="text-[13px] leading-relaxed text-[#5A607A]">
                    {model.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
          {/* <div className="mt-4 text-right">
             <p className="text-[10px] text-gray-400">Variable capacity is now a core expectation in modern managed learning operations.</p>
          </div> */}
        </Reveal>
      </div>
    </section>
  );
}

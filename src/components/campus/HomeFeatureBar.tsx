import { Compass, Code2, CheckCircle2, BadgeCheck } from "lucide-react";

const JOURNEY_PILLARS = [
  {
    icon: Compass,
    title: "Structured Pathways",
    description: "K–12 to Industry Tracks",
  },
  {
    icon: Code2,
    title: "Hands-on AI Labs",
    description: "Real Code with NEO Guidance",
  },
  {
    icon: CheckCircle2,
    title: "Milestone Artifacts",
    description: "Verifiable Project Proof",
  },
  {
    icon: BadgeCheck,
    title: "Global Standards",
    description: "CBSE, IB, Cambridge & CSTA",
  },
] as const;

export function HomeFeatureBar() {
  return (
    <section
      id="pillars"
      data-v-section="pillars"
      className="relative bg-[#EEEEF8] px-4 pb-8 pt-1 sm:px-6 sm:pb-10"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:flex lg:items-center lg:justify-between">
          {JOURNEY_PILLARS.map(({ icon: Icon, title, description }, i) => (
            <div key={title} className="contents">
              <div className="group flex flex-1 items-center justify-center gap-3.5 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-white/40">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#DDD9EC] bg-white text-[#5B4CF5] shadow-2xs transition-all duration-200 group-hover:scale-105 group-hover:border-[#5B4CF5] group-hover:bg-[#5B4CF5] group-hover:text-white">
                  <Icon className="h-4.5 w-4.5" strokeWidth={1.9} />
                </div>
                <div className="min-w-0 text-left">
                  <p className="font-display text-[13.5px] font-bold leading-tight text-[#0F1533] transition-colors group-hover:text-[#5B4CF5] whitespace-nowrap">
                    {title}
                  </p>
                  <p className="mt-0.5 text-[11.5px] font-medium leading-tight text-[#646A85] whitespace-nowrap">
                    {description}
                  </p>
                </div>
              </div>
              {i < JOURNEY_PILLARS.length - 1 && (
                <span
                  className="hidden lg:block h-6 w-px bg-[#D6D2E7] shrink-0"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}



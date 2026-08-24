import { BookOpen, FlaskConical, Trophy, ShieldCheck } from "lucide-react";

const JOURNEY_PILLARS = [
  {
    icon: BookOpen,
    title: "Structured Learning Paths",
    description: "Beginner to Advanced",
    bgClass: "bg-[#EDE9FF]",
    textClass: "text-[#5B4CF5]",
  },
  {
    icon: FlaskConical,
    title: "Hands-on AI Labs",
    description: "Practice. Build. Master.",
    bgClass: "bg-[#E0F2FE]",
    textClass: "text-[#0284C7]",
  },
  {
    icon: Trophy,
    title: "Milestones & Achievements",
    description: "Track. Earn. Celebrate.",
    bgClass: "bg-[#FEF3C7]",
    textClass: "text-[#D97706]",
  },
  {
    icon: ShieldCheck,
    title: "Industry-Recognized Credentials",
    description: "Prove Your Skills.",
    bgClass: "bg-[#D1FAE5]",
    textClass: "text-[#059669]",
  },
] as const;

export function HomeFeatureBar() {
  return (
    <section id="pillars" data-v-section="pillars" className="bg-[#F0F1FA] px-4 pb-8 pt-0 sm:px-6 sm:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-[#E4E2F0] bg-white px-5 py-5 shadow-sm sm:px-8 sm:py-6">
          <ul className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
            {JOURNEY_PILLARS.map(({ title, description, icon: Icon, bgClass, textClass }, i) => (
              <li
                key={title}
                className={`flex flex-1 items-start gap-3.5 ${
                  i > 0 ? "lg:border-l lg:border-[#ECEAF8] lg:pl-6" : ""
                }`}
              >
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${bgClass} ${textClass}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-semibold leading-tight text-[#0F1533]">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

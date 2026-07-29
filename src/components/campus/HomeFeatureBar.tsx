import { GraduationCap, Sparkles, Wrench, BadgeCheck, Newspaper } from "lucide-react";

const JOURNEY_PILLARS = [
  {
    icon: GraduationCap,
    title: "K–12 to College",
    description: "Paths for every learner at every level.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Learning",
    description: "Personalized guidance from Illy, your AI mentor.",
  },
  {
    icon: Wrench,
    title: "Build & Create",
    description: "Hands-on projects and capstone experiences.",
  },
  {
    icon: BadgeCheck,
    title: "Earn Credentials",
    description: "Showcase skills with verifiable certificates.",
  },
  {
    icon: Newspaper,
    title: "Stay Informed",
    description: "AI news, events, and campus updates.",
  },
] as const;

export function HomeFeatureBar() {
  return (
    <section id="pillars" data-illy-section="pillars" className="bg-[#F0F1FA] px-4 pb-8 pt-0 sm:px-6 sm:pb-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-[#E4E2F0] bg-white px-5 py-5 shadow-sm sm:px-8 sm:py-6">
          <ul className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
            {JOURNEY_PILLARS.map(({ title, description, icon: Icon }, i) => (
              <li
                key={title}
                className={`flex flex-1 items-start gap-3 ${
                  i > 0 ? "lg:border-l lg:border-[#ECEAF8] lg:pl-6" : ""
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#5B4CF5]/10 text-[#5B4CF5]">
                  <Icon className="h-4 w-4" strokeWidth={2} />
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

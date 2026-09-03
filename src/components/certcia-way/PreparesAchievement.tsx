import { Bot, ClipboardCheck, GraduationCap, ShieldCheck, Trophy } from "lucide-react";
import sceneBg from "@/assets/whycertcia/whycertciabg.png";
import { cn } from "@/lib/utils";

const PREPARES = [
  {
    title: "Dynamic Curriculum",
    icon: GraduationCap,
    bg: "bg-[#EDE9FF]",
    fg: "text-[#5B4CF5]",
    lift: "lg:translate-y-6",
  },
  {
    title: "Expert-Crafted Assessments",
    icon: ClipboardCheck,
    bg: "bg-[#DBEAFE]",
    fg: "text-[#2563EB]",
    lift: "lg:translate-y-0",
  },
  {
    title: "Real-World Capstones",
    icon: Trophy,
    bg: "bg-[#FEF3C7]",
    fg: "text-[#D97706]",
    lift: "lg:-translate-y-5",
  },
  {
    title: "AI-Supported Learning",
    icon: Bot,
    bg: "bg-[#EDE9FF]",
    fg: "text-[#5B4CF5]",
    lift: "lg:translate-y-2",
  },
  {
    title: "Secure Showcase-Ready Certification",
    icon: ShieldCheck,
    bg: "bg-[#D1FAE5]",
    fg: "text-[#059669]",
    lift: "lg:translate-y-8",
  },
] as const;

export function PreparesAchievement() {
  return (
    <section id="prepares-achievement" className="relative overflow-hidden py-16 sm:py-24">
      <img
        src={sceneBg}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-0 h-full w-full object-cover select-none"
        draggable={false}
      />
      <div className="pointer-events-none absolute inset-0 bg-white/50" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center font-display text-3xl font-extrabold tracking-[-0.04em] text-[#0F1533] sm:text-[2.6rem] sm:leading-[1.12]">
          Certcia prepares, validates, and showcases achievement.
        </h2>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {PREPARES.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.title} className={cn("transition-transform duration-300", item.lift)}>
                <div
                  className={cn(
                    "flex h-full min-h-[11.5rem] flex-col items-center justify-center rounded-[1.75rem] px-4 py-8 text-center",
                    item.bg,
                  )}
                >
                  <span
                    className={cn(
                      "flex h-12 w-12 items-center justify-center rounded-full bg-white/80",
                      item.fg,
                    )}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-4 font-display text-[15px] font-extrabold leading-snug tracking-[-0.02em] text-[#0F1533]">
                    {item.title}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

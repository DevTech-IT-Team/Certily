import {
  BookOpen,
  GraduationCap,
  Headphones,
  LayoutGrid,
  Users,
  Video,
} from "lucide-react";
import { Reveal } from "@/components/campus/Reveal";

const POINTS = [
  {
    n: "01",
    title: "Learning in micro-cohorts",
    copy: "Small cohorts with a dedicated mentor — V, plus live office hours.",
    icon: Users,
  },
  {
    n: "02",
    title: "Structured learning pedagogy",
    copy: "Live sessions, self-learning, and industry cases that ensure learning by doing.",
    icon: Video,
  },
  {
    n: "03",
    title: "Mentors who stay with you",
    copy: "V around the clock, with human mentors for checkpoints and project reviews.",
    icon: Headphones,
  },
  {
    n: "04",
    title: "Robust curriculum",
    copy: "Built around real workplace problems in AI, Data, and Tech.",
    icon: BookOpen,
  },
  {
    n: "05",
    title: "Dedicated coordinators",
    copy: "A learning success manager so batches stay on track.",
    icon: GraduationCap,
  },
  {
    n: "06",
    title: "Campus learning platform",
    copy: "Track progress and give managers a clear view of who is learning what.",
    icon: LayoutGrid,
  },
] as const;

export function EnterpriseSuccessStories() {
  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#5B4CF5]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5B4CF5]">
              Why choose us
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl">
            What sets us apart
          </h2>
        </Reveal>

        <ul className="mt-10 divide-y divide-[#E8EAF4]">
          {POINTS.map((item) => {
            const Icon = item.icon;
            return (
              <li
                key={item.title}
                className="flex flex-col gap-3 py-6 sm:flex-row sm:items-center sm:gap-8"
              >
                <span className="font-display text-sm font-extrabold text-[#5B4CF5] sm:w-10">
                  {item.n}
                </span>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#EDE9FF] text-[#5B4CF5]">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-extrabold text-[#0F1533]">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#5A607A]">
                    {item.copy}
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

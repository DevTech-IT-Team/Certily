import { BarChart3, Calendar, Layers, Users } from "lucide-react";
import { Reveal } from "@/components/campus/Reveal";

const FEATURES = [
  { title: "Cohort-based learning", copy: "Live sessions plus mentorship you can measure.", icon: Users },
  { title: "AI, Data, and Tech in one plan", copy: "A path for every skill level on the team.", icon: Layers },
  { title: "One fee, full catalogue", copy: "Certificates included — no extra cost per course.", icon: BarChart3 },
  { title: "Start in any cohort", copy: "Multiple intakes. Employees begin when ready.", icon: Calendar },
] as const;

export function EnterpriseAcademy() {
  return (
    <section id="subscription" className="scroll-mt-24 bg-[#F7F8FC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="relative pb-8 lg:col-span-6">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
            alt="Professionals in a learning session"
            className="h-[360px] w-full rounded-[2rem] object-cover sm:h-[440px]"
          />
          <div className="absolute -bottom-5 -left-3 rounded-2xl bg-[#4CD1B0] px-5 py-4 text-[#0F1533] shadow-lg sm:left-6">
            <p className="font-display text-2xl font-extrabold">30+</p>
            <p className="text-xs font-semibold">Programs in one plan</p>
          </div>
        </div>
        <Reveal className="lg:col-span-6">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#5B4CF5]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5B4CF5]">
              Subscription
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl">
            Certcia for Business
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5A607A]">
            One flexible subscription so every employee can take certificate
            programs — without buying a seat per course.
          </p>
          <ul className="mt-8 space-y-5">
            {FEATURES.map(({ title, copy, icon: Icon }) => (
              <li key={title} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE9FF] text-[#5B4CF5]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-[#0F1533]">{title}</span>
                  <span className="mt-0.5 block text-sm text-[#5A607A]">{copy}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

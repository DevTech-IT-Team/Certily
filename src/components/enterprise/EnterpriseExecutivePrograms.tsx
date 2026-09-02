import { Sparkles, Workflow, ClipboardCheck } from "lucide-react";
import { Reveal } from "@/components/campus/Reveal";

const STEPS = [
  {
    n: "1",
    title: "Learn",
    copy: "Build GenAI proficiency — practice, assess, and certify.",
    icon: Sparkles,
  },
  {
    n: "2",
    title: "Apply",
    copy: "Train teams to automate the workflows they already run.",
    icon: Workflow,
  },
  {
    n: "3",
    title: "Ship",
    copy: "Map GenAI to real use cases across every function.",
    icon: ClipboardCheck,
  },
] as const;

export function EnterpriseExecutivePrograms() {
  return (
    <section id="genai" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <div className="mb-4 flex items-center justify-center gap-3">
              <span className="h-[2px] w-8 bg-[#5B4CF5]" />
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#5B4CF5]">
                How we do it
              </span>
              <span className="h-[2px] w-8 bg-[#5B4CF5]" />
            </div>
            <h2 className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl">
              GenAI Academy
            </h2>
          </div>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-3 sm:gap-6">
          <div className="pointer-events-none absolute left-[16%] right-[16%] top-8 hidden border-t-2 border-dashed border-[#5B4CF5]/25 sm:block" />
          {STEPS.map((step) => {
            const Icon = step.icon;
            return (
              <li key={step.n} className="relative text-center">
                <span className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[#5B4CF5] text-white shadow-[0_12px_28px_-10px_rgba(91,76,245,0.55)]">
                  <Icon className="h-6 w-6" />
                </span>
                <p className="mt-5 font-display text-sm font-extrabold text-[#5B4CF5]">
                  0{step.n}
                </p>
                <h3 className="mt-1 font-display text-xl font-extrabold text-[#0F1533]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-[#5A607A]">
                  {step.copy}
                </p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

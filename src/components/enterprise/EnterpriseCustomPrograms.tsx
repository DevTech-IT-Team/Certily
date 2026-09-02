import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "@/components/campus/Reveal";

const FEATURES = [
  {
    title: "Business-critical skills",
    copy: "Programs in emerging AI, Data, and Tech — mapped to the work you ship.",
  },
  {
    title: "Tailored transformation",
    copy: "Focused journeys that turn employees into experts in their role.",
  },
  {
    title: "Entire workforce",
    copy: "Role-based certifications for every skill level on the team.",
  },
  {
    title: "Real-world experience",
    copy: "Domain use cases for your industry and functions — not generic slides.",
  },
] as const;

export function EnterpriseCustomPrograms() {
  const [open, setOpen] = useState(0);

  return (
    <section id="custom" className="scroll-mt-24 bg-[#F7F8FC] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#5B4CF5]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5B4CF5]">
              Custom
            </span>
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl">
            Custom Learning Solutions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5A607A] sm:text-lg">
            We design the program around your gap — then run it with a coordinator
            so batches actually finish.
          </p>
        </Reveal>

        <ul className="lg:col-span-7">
          {FEATURES.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.title} className="border-b border-[#E4E2F0]">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span className="font-display text-lg font-extrabold text-[#0F1533]">
                    {item.title}
                  </span>
                  {isOpen ? (
                    <Minus className="h-5 w-5 shrink-0 text-[#5B4CF5]" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-[#5B4CF5]" />
                  )}
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-[#5A607A]">
                    {item.copy}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

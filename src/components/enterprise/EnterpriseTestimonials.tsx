import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "@/components/campus/Reveal";
import { cn } from "@/lib/utils";

const VOICES = [
  {
    quote:
      "I recommend this to IT and business decision-makers who need to understand how AI has transformed industries and day-to-day work.",
    name: "Jim M.",
    role: "AI for Leaders",
  },
  {
    quote:
      "The mentorship and quality of instructors exceeded my expectations. They made sure every learner reached their goal.",
    name: "Andrew B.",
    role: "Cybersecurity",
  },
  {
    quote:
      "The curriculum covered basics through advanced applications. I could finally talk to both developers and business leaders.",
    name: "Craig R.",
    role: "AI for Leaders",
  },
] as const;

export function EnterpriseTestimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const voice = VOICES[i];

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setI((n) => (n + 1) % VOICES.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [paused, i]);

  return (
    <section className="bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-[2px] w-8 bg-[#2F6FED]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2F6FED]">
              Our learners’ experience
            </span>
            <span className="h-[2px] w-8 bg-[#2F6FED]" />
          </div>
        </Reveal>

        <div
          className="mt-8 text-center"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={voice.name}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <blockquote className="font-display text-2xl font-extrabold leading-[1.35] tracking-[-0.02em] text-[#0F1533] sm:text-[1.85rem]">
                “{voice.quote}”
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-[#0F1533]">
                {voice.name}
                <span className="font-normal text-[#5A607A]"> · {voice.role}</span>
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
            {VOICES.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setI(index)}
                aria-pressed={i === index}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-semibold transition-colors",
                  i === index
                    ? "bg-[#2F6FED] text-white"
                    : "bg-[#F7F8FC] text-[#5A607A] hover:text-[#0F1533]",
                )}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

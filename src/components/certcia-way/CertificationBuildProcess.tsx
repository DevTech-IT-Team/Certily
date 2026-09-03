import { useRef, useState } from "react";
import {
  Award,
  ClipboardCheck,
  FlaskConical,
  Search,
  Users,
} from "lucide-react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    n: "01",
    title: "Research the Need",
    copy: "Global trends, school teachers, university professionals, and corporate experts shape what should be taught.",
    icon: Search,
  },
  {
    n: "02",
    title: "Build for the Learner",
    copy: "Age-smart, visual-first learning designed around attention span and learning habits.",
    icon: Users,
  },
  {
    n: "03",
    title: "Check Understanding",
    copy: "Modules, activities, quizzes, and assessments validate learning throughout the journey.",
    icon: ClipboardCheck,
  },
  {
    n: "04",
    title: "Apply in the AI Lab",
    copy: "Mandatory capstone, AI-supported practice, real-world scenarios, game modes, sandbox, and companion support.",
    icon: FlaskConical,
  },
  {
    n: "05",
    title: "Certify & Showcase",
    copy: "Only learners who complete modules, assessments, and capstone earn certification and secure shareable proof.",
    icon: Award,
  },
] as const;

export function CertificationBuildProcess() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 0.85", "end 0.5"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 28 });
  const lineWidth = useTransform(smooth, [0, 1], ["0%", "100%"]);

  return (
    <section id="how-certification-is-built" className="bg-[#F7F8FC] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9B96C8]">
              Certification process
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold tracking-[-0.04em] text-[#0F1533] sm:text-4xl">
              How a Certcia Certification Is Built
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#5A607A] sm:text-base lg:text-right">
            A rigorous, learner-first process that ensures real understanding
            and real-world readiness.
          </p>
        </div>

        <div ref={trackRef} className="relative mt-14 sm:mt-16">
          <span
            aria-hidden
            className="pointer-events-none absolute top-[1.375rem] hidden h-[2px] -translate-y-1/2 lg:block"
            style={{
              left: "1.375rem",
              right: "calc((100% - 8rem) / 5 - 1.375rem)",
            }}
          >
            <span className="absolute inset-0 rounded-full bg-[#E4E2F0]" />
            <motion.span
              className="absolute inset-y-0 left-0 rounded-full bg-[#5B4CF5]"
              style={{ width: reduce ? "100%" : lineWidth }}
            />
          </span>

          <ol className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const on = active === i;
              return (
                <motion.li
                  key={step.n}
                  initial={reduce ? false : { opacity: 0, y: 16 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  onMouseEnter={() => setActive(i)}
                  className="group flex h-full flex-col"
                >
                  <span
                    className={cn(
                      "relative z-[1] flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-[13px] font-bold tabular-nums ring-[6px] ring-[#F7F8FC] transition-all duration-300",
                      on
                        ? "bg-[#5B4CF5] text-white shadow-[0_10px_24px_-8px_rgba(91,76,245,0.7)]"
                        : "border border-[#E8EAF4] bg-white text-[#5B4CF5] group-hover:border-[#5B4CF5]/50",
                    )}
                  >
                    {on ? <Icon className="h-4 w-4" /> : step.n}
                  </span>

                  <p className="mt-5 h-4 text-[11px] font-semibold uppercase leading-4 tracking-[0.16em] text-[#9B96C8]">
                    Step {step.n}
                  </p>
                  <h3
                    className={cn(
                      "mt-1.5 min-h-[2.75rem] font-display text-[17px] font-extrabold leading-[1.35] tracking-[-0.03em] transition-colors",
                      on ? "text-[#5B4CF5]" : "text-[#0F1533]",
                    )}
                  >
                    {step.title}
                  </h3>
                  <span
                    className={cn(
                      "mt-3 block h-[2px] w-8 shrink-0 origin-left rounded-full bg-[#5B4CF5] transition-transform duration-300",
                      on ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                  <p className="mt-3 min-h-[6.5rem] text-[13px] leading-[1.55] text-[#5A607A]">
                    {step.copy}
                  </p>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

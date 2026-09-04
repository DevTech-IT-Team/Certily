import { useLayoutEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { cn } from "@/lib/utils";

const SKILLS = ["AI", "Data", "Cybersecurity", "Cloud", "Business", "Technology"] as const;
const DESTINATIONS = ["Top Companies", "Global Employers", "Universities", "Careers"] as const;
const CREDENTIAL = ["Verified", "Credential", "Proof", "Mastery"] as const;
const COMPANIES = [
  {
    key: "google",
    node: (
      <span className="font-display text-base font-extrabold tracking-tight text-[#4285F4]">
        G<span className="text-[#EA4335]">o</span>
        <span className="text-[#FBBC05]">o</span>g
        <span className="text-[#34A853]">l</span>
        <span className="text-[#EA4335]">e</span>
      </span>
    ),
  },
  {
    key: "ibm",
    node: (
      <span className="font-display text-base font-black tracking-widest text-[#052FAD]">IBM</span>
    ),
  },
  {
    key: "deloitte",
    node: (
      <span className="font-display text-base font-bold tracking-tight text-[#0F1533]">
        deloitte<span className="text-[#86BC25]">.</span>
      </span>
    ),
  },
  {
    key: "oracle",
    node: (
      <span className="font-display text-base font-bold tracking-widest text-[#C74634]">ORACLE</span>
    ),
  },
] as const;

const FUNNEL = [
  { n: "01", kicker: "You earn it", title: "Certification" },
  { n: "02", kicker: "Then you use it", title: "Real-World Skills" },
  { n: "03", kicker: "Then you apply", title: "Application at Top Companies" },
] as const;

const PEEK = 52;

export function WhereSkillsGoNext() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageH, setStageH] = useState(560);
  const [active, setActive] = useState(0);

  useLayoutEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const sync = () => setStageH(el.getBoundingClientRect().height);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const hidden = stageH + 24;
  const y2 = useTransform(scrollYProgress, [0.08, 0.42, 1], [hidden, PEEK, PEEK]);
  const y3 = useTransform(scrollYProgress, [0.48, 0.82, 1], [hidden, PEEK * 2, PEEK * 2]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.28) setActive(0);
    else if (v < 0.62) setActive(1);
    else setActive(2);
  });

  return (
    <section
      ref={sectionRef}
      id="where-skills-go-next"
      className="relative bg-[#1B2559] font-sans md:h-[220svh]"
    >
      <div className="md:sticky md:top-0 md:flex md:h-svh md:items-center md:overflow-hidden">
        <div className="mx-auto grid w-full min-w-0 max-w-7xl grid-cols-1 items-center gap-8 px-4 py-14 sm:px-6 md:grid-cols-2 md:gap-10 md:px-8 md:py-0 md:pt-20 md:pb-8">
          <Header active={active} />

          <div className="relative min-w-0">
            {/* Mobile: simple stack — no sticky scroll trap */}
            <div className="flex flex-col gap-4 md:hidden">
              <CredentialCard />
              <SkillsCard />
              <CompaniesCard />
            </div>

            {/* Desktop: pinned stack */}
            <div
              ref={stageRef}
              className="relative hidden overflow-hidden md:block"
              style={{ paddingBottom: PEEK * 2 }}
            >
              <div className="relative z-[1]">
                <CredentialCard />
              </div>
              <motion.div
                className="absolute inset-x-0 top-0 z-[2] will-change-transform"
                style={{ y: y2 }}
              >
                <SkillsCard />
              </motion.div>
              <motion.div
                className="absolute inset-x-0 top-0 z-[3] will-change-transform"
                style={{ y: y3 }}
              >
                <CompaniesCard />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Header({ active }: { active: number }) {
  return (
    <div className="w-full min-w-0 max-w-md">
      <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A89BFF]">
        After certification
      </p>
      <h2 className="mt-2.5 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.6rem]">
        Where Skills
        <span className="mt-1 block text-[#C4BDF8]">Go Next</span>
      </h2>
      <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70">
        From certification to real-world impact.
      </p>

      <ol className="relative mt-8 flex max-w-xs flex-col">
        <span aria-hidden className="absolute bottom-4 left-[13px] top-4 w-px bg-white/15" />
        {FUNNEL.map((step, i) => {
          const on = active === i;
          return (
            <li key={step.n} className="relative flex items-start gap-3.5 py-2.5">
              <span
                className={cn(
                  "relative z-[1] mt-0.5 flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded-full text-[10px] font-bold tabular-nums ring-[5px] ring-[#1B2559] transition-colors",
                  on
                    ? "bg-[#5B4CF5] text-white"
                    : "border border-white/20 bg-white/10 text-white/70",
                )}
              >
                {i + 1}
              </span>
              <div>
                <p
                  className={cn(
                    "text-[11px] font-bold uppercase tracking-[0.14em]",
                    on ? "text-[#C8F7EC]" : "text-white/40",
                  )}
                >
                  {step.kicker}
                </p>
                <p
                  className={cn(
                    "mt-0.5 text-sm font-semibold",
                    on ? "text-white" : "text-white/50",
                  )}
                >
                  {step.title}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}

function CardFrame({
  kicker,
  n,
  title,
  children,
}: {
  kicker: string;
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article className="overflow-hidden rounded-2xl bg-white shadow-[0_24px_40px_-16px_rgba(0,0,0,0.5)]">
      <div className="flex items-center justify-between px-5 pt-5 sm:px-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#9B96C8]">{kicker}</p>
        <span className="text-[12px] font-bold tabular-nums text-[#5B4CF5]">{n}</span>
      </div>
      <h3 className="px-5 pt-2 font-display text-[1.45rem] font-extrabold leading-snug tracking-[-0.03em] text-[#0F1533] sm:px-6 sm:text-[1.6rem]">
        {title}
      </h3>
      <div className="px-5 pb-5 pt-5 sm:px-6 sm:pb-6">{children}</div>
    </article>
  );
}

function CredentialCard() {
  return (
    <CardFrame kicker="You earn it" n="01" title="Certification">
      <div className="flex items-start justify-between gap-4 rounded-2xl bg-[#F4F1FF] px-4 py-4">
        <div className="min-w-0">
          <p className="font-display text-[15px] font-extrabold tracking-tight text-[#5B4CF5]">
            certcia
          </p>
          <p className="mt-2 text-sm leading-relaxed text-[#0F1533]">
            Earn verified proof of your mastery.
          </p>
        </div>
        <svg viewBox="0 0 72 72" className="h-14 w-14 shrink-0" aria-hidden>
          <circle cx="36" cy="36" r="34" fill="white" />
          <circle cx="36" cy="36" r="26" fill="none" stroke="#5B4CF5" strokeWidth="2" strokeDasharray="4 5" />
          <path
            d="M25 37.2 32 44.2 48 27"
            fill="none"
            stroke="#5B4CF5"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <ul className="mt-3 grid grid-cols-2 gap-2">
        {CREDENTIAL.map((item) => (
          <li
            key={item}
            className="rounded-xl bg-[#F4F1FF] px-3 py-3 text-[13px] font-semibold text-[#0F1533]"
          >
            {item}
          </li>
        ))}
      </ul>
    </CardFrame>
  );
}

function SkillsCard() {
  return (
    <CardFrame kicker="Then you use it" n="02" title="Real-World Skills">
      <ul className="grid grid-cols-2 gap-2">
        {SKILLS.map((skill) => (
          <li
            key={skill}
            className="rounded-xl bg-[#F4F1FF] px-3 py-3 text-[13px] font-semibold text-[#0F1533]"
          >
            {skill}
          </li>
        ))}
      </ul>
    </CardFrame>
  );
}

function CompaniesCard() {
  const loop = [...COMPANIES, ...COMPANIES];

  return (
    <CardFrame kicker="Then you apply" n="03" title="Application at Top Companies">
      <ul className="grid grid-cols-2 gap-2">
        {DESTINATIONS.map((item) => (
          <li
            key={item}
            className="rounded-xl bg-[#F4F1FF] px-3 py-3 text-[13px] font-semibold leading-snug text-[#0F1533]"
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="relative -mx-5 mt-4 overflow-hidden border-t border-[#EEEAF8] pt-4 sm:-mx-6">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-10 px-6">
          {loop.map((company, i) => (
            <div key={`${company.key}-${i}`} className="flex h-8 shrink-0 items-center">
              {company.node}
            </div>
          ))}
        </div>
      </div>
    </CardFrame>
  );
}

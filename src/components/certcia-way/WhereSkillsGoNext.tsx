import { useEffect, useRef, useState } from "react";
import { CardSticky, ContainerScroll } from "@/components/ui/cards-stack";
import { cn } from "@/lib/utils";

const SKILLS = ["AI", "Data", "Cybersecurity", "Cloud", "Business", "Technology"] as const;
const DESTINATIONS = ["Top Companies", "Global Employers", "Universities", "Careers"] as const;
const CREDENTIAL = ["Verified", "Credential", "Proof", "Mastery"] as const;

const FUNNEL = [
  { n: "01", kicker: "You earn it", title: "Certification" },
  { n: "02", kicker: "Then you use it", title: "Real-World Skills" },
  { n: "03", kicker: "Then you apply", title: "Application at Top Companies" },
] as const;

export function WhereSkillsGoNext() {
  const [active, setActive] = useState(0);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const nodes = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length) return;

    const visible = new Map<number, boolean>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const i = Number((e.target as HTMLElement).dataset.index);
          if (Number.isNaN(i)) return;
          if (e.isIntersecting) visible.set(i, true);
          else visible.delete(i);
        });
        if (visible.size) setActive(Math.max(...visible.keys()));
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "-15% 0px -15% 0px" },
    );

    nodes.forEach((node) => io.observe(node));
    return () => io.disconnect();
  }, []);

  return (
    <section id="where-skills-go-next" className="relative bg-[#1B2559] font-sans">
      <div className="relative mx-auto grid w-full min-w-0 max-w-7xl md:grid-cols-2 md:items-start">
        <div className="flex min-w-0 items-center px-4 py-10 sm:px-6 md:sticky md:top-0 md:h-svh md:px-8 md:py-0 md:pt-20">
          <div className="w-full min-w-0 max-w-md">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A89BFF]">
              After certification
            </p>
            <h2 className="mt-3 max-w-md font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl lg:text-[2.6rem]">
              Where Skills
              <span className="mt-1 block text-[#C4BDF8]">Go Next</span>
            </h2>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              From certification to real-world impact.
            </p>

            <ol className="relative mt-8 flex max-w-xs flex-col md:mt-10">
              <span
                aria-hidden
                className="absolute bottom-4 left-[13px] top-4 w-px bg-white/15"
              />
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
        </div>

        <ContainerScroll className="min-w-0 px-4 pb-12 sm:px-6 md:px-8 md:pb-0" style={{ perspective: "none" }}>
          {[CredentialCard, SkillsCard, CompaniesCard].map((Card, index) => (
            <CardSticky
              key={FUNNEL[index].n}
              index={index}
              incrementY={18}
              className="flex w-full min-w-0 items-center py-4 md:h-svh md:py-0 md:pt-20"
            >
              <div
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                data-index={index}
                className="w-full min-w-0"
              >
                <Card />
              </div>
            </CardSticky>
          ))}
        </ContainerScroll>
      </div>
    </section>
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
      <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#EEEAF8] pt-4">
        <span className="font-display text-base font-extrabold tracking-tight text-[#4285F4]">
          G<span className="text-[#EA4335]">o</span>
          <span className="text-[#FBBC05]">o</span>g
          <span className="text-[#34A853]">l</span>
          <span className="text-[#EA4335]">e</span>
        </span>
        <span className="font-display text-base font-black tracking-widest text-[#052FAD]">IBM</span>
        <span className="font-display text-base font-bold tracking-tight text-[#0F1533]">
          deloitte<span className="text-[#86BC25]">.</span>
        </span>
        <span className="font-display text-base font-bold tracking-widest text-[#C74634]">ORACLE</span>
      </div>
    </CardFrame>
  );
}

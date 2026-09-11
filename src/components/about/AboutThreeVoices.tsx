import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const VOICES = [
  {
    id: "industry",
    label: "Industry",
    title: "What the world of work expects",
    copy: "Skills, tools, decisions and role-performance standards",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Professionals in a workplace meeting",
    featured: false,
  },
  {
    id: "education",
    label: "Education",
    title: "How people actually learn",
    copy: "Sequencing, practice, feedback, assessment and confidence",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80",
    imageAlt: "Students learning together around a table",
    featured: true,
  },
  {
    id: "families",
    label: "Families",
    title: "What makes learning worth it",
    copy: "Clarity, relevance, trust and an outcome learners can carry forward",
    image:
      "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "A family together at home",
    featured: false,
  },
] as const;

function ArrowChip({ light = false }: { light?: boolean }) {
  return (
    <span
      className={
        light
          ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-[#5B4CF5]"
          : "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E4E2F0] bg-white text-[#5A5872]"
      }
    >
      <ArrowUpRight className="h-4 w-4" />
    </span>
  );
}

export function AboutThreeVoices() {
  return (
    <section
      id="voices"
      className="relative overflow-x-clip bg-[#EEEEF8] px-4 pt-20 pb-10 sm:px-6 sm:pt-24 sm:pb-12 lg:px-8 lg:pt-28 lg:pb-14"
    >
      <div className="mx-auto w-full max-w-[94rem]">
        <header className="grid gap-5 lg:grid-cols-12 lg:items-end lg:gap-12">
          <div className="min-w-0 lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#5B4CF5]">
              Built from the real world backwards
            </p>
            <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem]">
              One certification
              <span className="mt-1.5 block text-[#5B4CF5]">
                Three voices behind it
              </span>
            </h2>
          </div>
          <p className="min-w-0 text-sm leading-relaxed text-[#5A607A] sm:text-base lg:col-span-5">
            The strongest learning outcome combines what industry expects, what
            educators know about learning, and what families need to trust.
          </p>
        </header>

        <ul className="mt-10 grid items-stretch gap-5 md:grid-cols-3 md:gap-6 lg:mt-12">
          {VOICES.map((voice) => (
            <li key={voice.id} className="min-h-[26rem] md:min-h-[28rem]">
              {voice.featured ? (
                <Link
                  to="/certcia-way"
                  className="flex h-full flex-col overflow-hidden rounded-[1.35rem] bg-[#5B4CF5] p-4"
                >
                  <div className="relative min-h-0 flex-1 overflow-hidden rounded-[1.1rem]">
                    <img
                      src={voice.image}
                      alt={voice.imageAlt}
                      className="h-full w-full object-cover object-[center_22%]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -bottom-8 -left-8 h-20 w-20 rounded-full bg-[#5B4CF5]"
                    />
                    <span
                      aria-hidden
                      className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[#5B4CF5]"
                    />
                  </div>
                  <div className="flex shrink-0 items-end justify-between gap-3 px-1 pb-1 pt-5">
                    <div className="min-w-0">
                      <span className="inline-flex rounded-full border border-white/40 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
                        {voice.label}
                      </span>
                      <h3 className="mt-2.5 max-w-[12.5rem] font-display text-[1.2rem] font-bold leading-snug tracking-tight text-white">
                        {voice.title}
                      </h3>
                    </div>
                    <ArrowChip light />
                  </div>
                </Link>
              ) : (
                <Link
                  to="/certcia-way"
                  className="flex h-full flex-col rounded-[1.35rem] bg-[#F4F5F8] p-5"
                >
                  <div className="flex shrink-0 items-start justify-between gap-2">
                    <div className="min-w-0 pr-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#8A90A5]">
                        {voice.label}
                      </p>
                      <h3 className="mt-2 font-display text-[1.15rem] font-bold leading-snug tracking-tight text-[#0F1533]">
                        {voice.title}
                      </h3>
                    </div>
                    <ArrowChip />
                  </div>
                  <div className="mt-6 min-h-0 flex-1 overflow-hidden rounded-[1.1rem]">
                    <img
                      src={voice.image}
                      alt={voice.imageAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Link>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col items-center border-t border-[#E4E2F0] pt-6 text-center">
          <p className="max-w-2xl font-display text-xl font-bold leading-snug tracking-tight text-[#0F1533] sm:text-2xl">
            We do not start with content — we start with the outcome
          </p>
          <Link
            to="/certcia-way"
            className="group mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B4CF5] transition-colors hover:text-[#4A3BE0]"
          >
            Then we design the journey backwards
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

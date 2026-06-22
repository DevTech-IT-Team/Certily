import { useState } from "react";
import { Play } from "lucide-react";
import illyGif from "@/assets/OG1HSCVsWg.gif";
import { IllyAvatar } from "./IllyAvatar";
import { cn } from "@/lib/utils";

const MASTERCLASS_TOPICS = [
  {
    id: "why",
    title: "Who we are & why Certily exists",
    points: [
      "These are not just trainings — they are need-of-the-hour certification outcomes.",
      "AI learning must be practical, guided, and outcome-based for students and parents.",
      "Every pathway is designed for real skills, not passive video watching.",
    ],
  },
  {
    id: "navigate",
    title: "How to navigate the campus",
    points: [
      "Public: Learning Pathways, Newsroom, and AI Hall.",
      "Enrolled: My Classroom, AI Lab, AI Certification Hall, and Mission Control.",
      "Illy guides you across the map, modules, labs, and your parent dashboard.",
    ],
  },
  {
    id: "validate",
    title: "How we select & validate courses",
    points: [
      "Courses are backed by credible knowledge and market need — not random topics.",
      "Industry professionals and SMEs help validate direction before publishing.",
      "Newsroom insights connect today's AI news to timely certification outcomes.",
    ],
  },
] as const;

export function MasterclassSection() {
  const [active, setActive] = useState<(typeof MASTERCLASS_TOPICS)[number]["id"]>("why");

  const topic = MASTERCLASS_TOPICS.find((t) => t.id === active)!;

  return (
    <section
      id="masterclass"
      data-illy-section="masterclass"
      className="border-t border-border/60 bg-[#FAFBFE] py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-10">
          <div className="relative overflow-hidden rounded-3xl border border-border/60 bg-[#0F1533] shadow-[0_24px_60px_-24px_rgba(15,21,51,0.45)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-[#4CD1B0]/20" />
            <div className="relative flex aspect-video flex-col items-center justify-center p-6 sm:p-8">
              <div className="relative">
                <img
                  src={illyGif}
                  alt="Illy presenting the Certily AI Campus masterclass"
                  className="h-40 w-auto object-contain sm:h-52 md:h-56"
                />
                <div className="absolute -bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-white/95 px-4 py-1.5 text-xs font-semibold text-foreground shadow-lg">
                  <Play className="h-3.5 w-3.5 fill-primary text-primary" />
                  24/7 with Illy
                </div>
              </div>
              <p className="mt-8 text-center text-sm font-medium text-white/85 sm:text-base">
                Masterclass-style intro — always on, always guided by Illy.
              </p>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3">
              <IllyAvatar size="md" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  Illy masterclass
                </p>
                <h2 className="text-xl font-extrabold text-foreground sm:text-2xl md:text-3xl">
                  Your guide to the campus
                </h2>
              </div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Illy walks new visitors through what Certily AI Campus is, how public and enrolled
              areas work, and how every course is validated for real outcomes.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {MASTERCLASS_TOPICS.map((t) => (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setActive(t.id)}
                  className={cn(
                    "rounded-full px-3.5 py-1.5 text-xs font-semibold transition-colors sm:px-4 sm:text-sm",
                    active === t.id
                      ? "bg-primary text-white"
                      : "border border-border bg-white text-foreground/75 hover:border-primary/30"
                  )}
                >
                  {t.title.split(" — ")[0].split(" & ")[0]}
                </button>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-border/60 bg-white p-5 shadow-sm">
              <p className="text-sm font-bold text-foreground">{topic.title}</p>
              <ul className="mt-3 space-y-2.5">
                {topic.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#4CD1B0]" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

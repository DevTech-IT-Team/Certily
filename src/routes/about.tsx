import { createFileRoute, Link } from "@tanstack/react-router";
import { VCampusScrollStory } from "@/components/campus/VCampusScrollStory";
import { Reveal } from "@/components/campus/Reveal";
import { Section } from "@/components/Section";
import { GraduationCap, Lightbulb, Users, Zap, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Certcia AI Campus" },
      {
        name: "description",
        content:
          "Meet V and explore the Certcia AI Campus — a guided learning world with structured pathways, hands-on AI projects, and meaningful certifications.",
      },
    ],
  }),
  component: About,
});

// ---------------------------------------------------------------------------
// Values / mission pillars shown after the scroll story
// ---------------------------------------------------------------------------
const PILLARS = [
  {
    icon: GraduationCap,
    title: "Outcome-driven learning",
    body: "Every pathway on campus is designed around a tangible credential, skill, or portfolio piece — not just course completions.",
  },
  {
    icon: Lightbulb,
    title: "Built for the AI era",
    body: "Courses evolve in real time. Our curriculum is co-designed with practitioners so learners always work with relevant, current knowledge.",
  },
  {
    icon: Users,
    title: "Guided, not solo",
    body: "V and a global peer community keep learners motivated — structured checkpoints replace the guesswork of self-directed study.",
  },
  {
    icon: Zap,
    title: "Celebrate every milestone",
    body: "From your first badge to your capstone certificate, every win is verified, shareable, and permanently on your Certcia record.",
  },
] as const;

const HERO_HIGHLIGHTS = [
  "Structured Pathways",
  "Verifiable Credentials",
  "24/7 AI Mentorship with V",
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
function About() {
  return (
    <div className="overflow-x-clip bg-[#EEEEF8]">
      {/* ------------------------------------------------------------------ */}
      {/* 3D AI CAMPUS HERO & SCROLL STORY                                   */}
      {/* ------------------------------------------------------------------ */}
      <VCampusScrollStory />

      {/* ------------------------------------------------------------------ */}
      {/* Mission + pillars — shown after the scroll story completes          */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative border-t border-border/60 bg-white">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-40" />

        <Section
          spacing="default"
          align="center"
          className="relative z-[1]"
          title={
            <span>
              Why we built{" "}
              <span className="gradient-text">Certcia</span>
            </span>
          }
          description="Learning should feel like progress, not busywork. We built Certcia because most online education lacks structure, feedback, and proof of mastery — and we think learners deserve all three."
        >
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.07}>
                <div className="flex flex-col gap-3 rounded-2xl border border-border/70 bg-white p-5 shadow-sm transition-shadow hover:shadow-elegant">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EDE9FF]">
                    <pillar.icon className="h-5 w-5 text-[#5B4CF5]" aria-hidden />
                  </span>
                  <h3 className="font-display text-base font-bold leading-tight tracking-tight text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{pillar.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Light & Compact Start Your Journey CTA Section                     */}
      {/* ------------------------------------------------------------------ */}
      <Reveal>
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#E2E0F5] bg-gradient-to-br from-white via-[#F7F6FE] to-[#EEECFB] p-8 text-center shadow-[0_12px_36px_-12px_rgba(91,76,245,0.12)] sm:p-12">
            {/* Ambient subtle light glows */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#5B4CF5]/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#4CD1B0]/10 blur-2xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight text-[#0F1533] sm:text-3xl lg:text-4xl">
                Ready to start your journey?
              </h2>
              
              <p className="mt-3 text-sm leading-relaxed text-[#5A607A] sm:text-base">
                Explore structured learning pathways, build real projects, and earn credentials with V by your side.
              </p>

              <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5 sm:mt-7">
                <Link
                  to="/learning"
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#5B4CF5] px-6 text-sm font-bold text-white shadow-[0_6px_20px_-6px_rgba(91,76,245,0.5)] transition-all hover:scale-[1.02] hover:bg-[#4A3BE0] active:scale-[0.98]"
                >
                  Explore Pathways
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              {/* Value checklist badges */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-[#E4E1F8] pt-6 text-xs font-semibold text-[#5A607A] sm:text-sm">
                {HERO_HIGHLIGHTS.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#5B4CF5]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </div>
  );
}



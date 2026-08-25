import { createFileRoute, Link } from "@tanstack/react-router";
import { VCampusScrollStory } from "@/components/campus/VCampusScrollStory";
import { Reveal } from "@/components/campus/Reveal";
import { Section } from "@/components/Section";
import { MeetOurTeam } from "@/components/about/MeetOurTeam";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

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
      {/* Meet Our Team Component                                              */}
      {/* ------------------------------------------------------------------ */}
      <MeetOurTeam />

      {/* ------------------------------------------------------------------ */}
      {/* Light & Compact Start Your Journey CTA Section                     */}
      {/* ------------------------------------------------------------------ */}
      <Reveal>
        <section className="px-4 py-12 sm:px-6 sm:py-16">
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[#D6D8F5] bg-gradient-to-br from-[#EAEBFE] via-[#E4E6FA] to-[#DFDDF3] p-8 text-center shadow-[0_15px_40px_-15px_rgba(91,76,245,0.2)] sm:p-12">
            {/* Ambient subtle light glows */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#5B4CF5]/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#4CD1B0]/20 blur-3xl" />

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



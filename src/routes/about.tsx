import { createFileRoute, Link } from "@tanstack/react-router";
import { VCampusScrollStory } from "@/components/campus/VCampusScrollStory";
import { Reveal } from "@/components/campus/Reveal";
import { Section } from "@/components/Section";
import { MeetOurTeam } from "@/components/about/MeetOurTeam";
import { PlatformImpactStats } from "@/components/about/PlatformImpactStats";
import { GraduationCap, Lightbulb, Users, Zap, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
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
      {/* Mission + pillars — overlapping cards layout                       */}
      {/* ------------------------------------------------------------------ */}
      <div className="relative bg-gradient-to-br from-[#1A103C] to-[#36217A] pt-20 pb-32 sm:pt-24 sm:pb-44 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1920&q=80')" }}
        />
        
        {/* Dot pattern background */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">

              {/* Left Title */}
              <div className="max-w-md">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-[1px] w-8 bg-[#5B4CF5]" />
                  <span className="text-[11px] font-bold uppercase tracking-widest text-white/70">Our Mission</span>
                </div>
                <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.1]">
                  Why we built Certcia
                </h2>
              </div>

              {/* Middle Description */}
              <div className="max-w-lg lg:mt-6">
                <p className="text-base text-white/70 leading-relaxed font-medium">
                  Learning should feel like progress, not busywork. We built Certcia because most online education lacks structure, feedback, and proof of mastery — and we think learners deserve all three.
                </p>
              </div>

              {/* Right CTA */}
              <div className="lg:mt-6 shrink-0">
                <Link
                  to="/learning"
                  className="inline-flex h-14 items-center gap-4 rounded-full bg-white/5 border border-white/10 px-6 py-2 transition-colors hover:bg-white/10"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#5B4CF5] text-white">
                    <ArrowRight className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Start Learning</div>
                    <div className="text-sm font-bold text-white">Explore Pathways</div>
                  </div>
                </Link>
              </div>

            </div>
          </Reveal>
        </div>

        {/* Bottom Curve Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] sm:h-[120px] text-white rotate-180">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
          </svg>
        </div>
      </div>

      {/* Cards Overlapping Section */}
      <div className="bg-white">
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 -mt-24 sm:-mt-36 pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar, i) => {
              const images = [
                "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80"
              ];
              return (
                <Reveal key={pillar.title} delay={i * 0.1}>
                  <div className="flex h-full flex-col rounded-[2rem] bg-white p-3 shadow-xl shadow-black/[0.04] ring-1 ring-[#F0F2F8]">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-[#F3F4F6]">
                      {/* Image Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#5B4CF5]/40 via-[#5B4CF5]/5 to-transparent z-10 mix-blend-multiply" />
                      <img
                        src={images[i]}
                        alt={pillar.title}
                        className="h-full w-full object-cover"
                      />
                      {/* Floating Pillar Icon */}
                      <div className="absolute top-3 left-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 backdrop-blur-md text-[#5B4CF5] shadow-sm">
                        <pillar.icon className="h-4 w-4" strokeWidth={2} />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 px-3 pt-5 pb-3">
                      <h3 className="font-display text-[15px] font-extrabold text-[#0F1533] mb-2 leading-tight">
                        {pillar.title}
                      </h3>
                      <p className="text-[13px] font-medium text-[#5A607A] leading-relaxed">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
          {/*           
          <div className="mt-14 text-center">
            <p className="text-sm font-medium text-[#5A607A]">
              Providing a complete set of features for builders. <Link to="/learning" className="font-bold text-[#5B4CF5] hover:underline">Explore all pathways</Link>
            </p>
          </div> */}
        </div>
      </div>

      {/* ------------------------------------------------------------------ */}
      {/* Platform Impact Stats Component                                      */}
      {/* ------------------------------------------------------------------ */}
      <PlatformImpactStats />

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



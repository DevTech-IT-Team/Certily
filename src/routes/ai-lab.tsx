import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Beaker,
  BookOpen,
  CheckCircle2,
  FlaskConical,
  GraduationCap,
  Rocket,
  Sparkles,
  Zap,
} from "lucide-react";
import { IllyAvatar } from "@/components/campus/IllyAvatar";

export const Route = createFileRoute("/ai-lab")({
  head: () => ({
    meta: [
      { title: "AI Lab — Certily AI Campus" },
      {
        name: "description",
        content:
          "Apply what you learn through guided capstone projects, hands-on AI builds, and portfolio-ready outcomes.",
      },
    ],
  }),
  component: AILabPage,
});

const CAPSTONES = [
  {
    icon: Sparkles,
    level: "K–12",
    title: "Build Your First AI Chatbot",
    desc: "Design and train a conversational AI using a guided template — no experience needed.",
    outcome: "AI Explorer capstone badge",
    duration: "3 sessions",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: FlaskConical,
    level: "K–12",
    title: "Image Recognition Mini-Project",
    desc: "Train a model to recognise objects using a beginner-friendly visual AI tool.",
    outcome: "Visual AI practitioner badge",
    duration: "2 sessions",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Beaker,
    level: "College",
    title: "Data Analysis & Prediction",
    desc: "Use real datasets to build a prediction model and present findings in a portfolio project.",
    outcome: "Data Science capstone credential",
    duration: "4 sessions",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    icon: Rocket,
    level: "College",
    title: "AI Product Prototype",
    desc: "Ideate, prototype, and pitch an AI-powered product concept with Illy's guidance.",
    outcome: "AI Builder portfolio project",
    duration: "5 sessions",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
] as const;

const STEPS = [
  {
    n: "01",
    icon: BookOpen,
    title: "Complete your modules",
    desc: "Finish the lessons in My Classroom to unlock your capstone project in the AI Lab.",
  },
  {
    n: "02",
    icon: Beaker,
    title: "Start your guided build",
    desc: "Illy walks you through every step — templates, checkpoints, and real-time feedback.",
  },
  {
    n: "03",
    icon: GraduationCap,
    title: "Earn your credential",
    desc: "Submit your project and earn a verifiable certificate you can share anywhere.",
  },
] as const;

function AILabPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FC]">

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-32 sm:pb-20">
        {/* Very subtle purple gradient at top */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgba(91,76,245,0.08),transparent_60%)]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#F7F8FC] to-transparent" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">

            {/* ── Left copy ── */}
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/20 bg-[#EEF2FF] px-4 py-1.5 text-sm font-semibold text-[#5B4CF5]">
                <Beaker className="h-3.5 w-3.5" />
                AI Lab · Capstone workspace
              </span>

              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.06] tracking-tight text-[#0F1533] sm:text-5xl lg:text-[3.25rem]">
                Build real AI projects.
                <br />
                <span className="bg-gradient-to-r from-[#5B4CF5] to-[#3B82F6] bg-clip-text text-transparent">
                  Earn real credentials.
                </span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#5A607A] sm:text-lg">
                The AI Lab is your hands-on workspace. Guided capstone projects,
                Illy at every checkpoint, and verifiable certificates you can
                share with colleges and employers.
              </p>

              <ul className="mt-7 space-y-3">
                {[
                  "Guided capstone project per pathway",
                  "Illy mentorship at every step",
                  "Portfolio-ready project output",
                  "Verifiable certificate on completion",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#374151]">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-[#5B4CF5]" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/courses"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#5B4CF5] px-8 text-sm font-bold text-white shadow-[0_8px_28px_-6px_rgba(91,76,245,0.45)] transition-all hover:scale-[1.03] hover:bg-[#4A3BE8] active:scale-[0.98]"
                >
                  Explore pathways to enroll
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/ai-hall"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-[#E8EAF4] bg-white px-6 text-sm font-semibold text-[#5A607A] transition-all hover:border-[#5B4CF5]/30 hover:text-[#5B4CF5]"
                >
                  Try AI Hall free
                </Link>
              </div>
            </div>

            {/* ── Right: app mockup (light) ── */}
            <div className="relative">
              {/* Soft glow behind card */}
              <div className="pointer-events-none absolute -inset-4 rounded-3xl bg-[#5B4CF5]/6 blur-2xl" />
              <div className="relative overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-[0_8px_40px_-8px_rgba(91,76,245,0.12)]">
                {/* Browser chrome */}
                <div className="flex items-center gap-2 border-b border-[#F0F1F8] bg-[#F7F8FC] px-4 py-3">
                  <div className="flex gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]" />
                  </div>
                  <span className="mx-auto font-mono text-[11px] text-[#8892A4]">certily.ai / ai-lab</span>
                </div>

                <div className="p-5">
                  {/* Section header */}
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF2FF]">
                      <Beaker className="h-5 w-5 text-[#5B4CF5]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0F1533]">AI Lab</p>
                      <p className="text-xs text-[#8892A4]">4 capstone projects</p>
                    </div>
                    <span className="ml-auto rounded-full bg-[#ECFDF5] px-2.5 py-1 text-[10px] font-bold text-[#059669]">
                      Enrolled ✓
                    </span>
                  </div>

                  {/* Project list */}
                  <div className="space-y-2">
                    {CAPSTONES.map((cap, i) => {
                      const Icon = cap.icon;
                      return (
                        <div
                          key={cap.title}
                          className="flex items-center gap-3 rounded-xl border border-[#E8EAF4] bg-[#F7F8FC] px-4 py-3"
                        >
                          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEF2FF]">
                            <Icon className="h-4 w-4 text-[#5B4CF5]" strokeWidth={2} />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-semibold text-[#0F1533]">{cap.title}</p>
                            <p className="text-[10px] text-[#8892A4]">{cap.level} · {cap.duration}</p>
                          </div>
                          {i === 0 ? (
                            <span className="shrink-0 rounded-full bg-[#EEF2FF] px-2 py-0.5 text-[10px] font-bold text-[#5B4CF5]">
                              Active
                            </span>
                          ) : (
                            <span className="text-[10px] text-[#C7CAD9]">Upcoming</span>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  {/* Illy tip */}
                  <div className="mt-4 rounded-xl border border-[#EDE9FF] bg-[#F5F3FF] px-4 py-3">
                    <div className="flex items-start gap-2.5">
                      <IllyAvatar size="sm" reaction="hi" className="mt-0.5 shrink-0" />
                      <p className="text-[11px] leading-relaxed text-[#5A607A]">
                        <span className="font-bold text-[#5B4CF5]">Illy says:</span>{" "}
                        You're on step 2 of your chatbot build — keep going!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────── */}
      <section className="bg-[#F7F8FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/15 bg-white px-4 py-1.5 text-sm font-semibold text-[#5B4CF5] shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[#5B4CF5]" />
              How it works
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0F1533] sm:text-4xl">
              Learn. Build. Earn.
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-base text-[#5A607A]">
              Every enrolled learner follows the same clear path — from lesson to project to certificate.
            </p>
          </div>

          {/* Steps */}
          <div className="grid gap-5 sm:grid-cols-3">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.n}
                  className="relative overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white p-7 shadow-sm"
                >
                  {/* Watermark number */}
                  <span className="pointer-events-none absolute right-4 top-2 select-none font-display text-[5.5rem] font-black leading-none text-[#F0F1F8]">
                    {step.n}
                  </span>
                  {/* Step badge */}
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#5B4CF5] px-3 py-1 text-[11px] font-black text-white">
                    {step.n}
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EEF2FF]">
                    <Icon className="h-5 w-5 text-[#5B4CF5]" strokeWidth={2} />
                  </div>
                  <h3 className="mt-4 font-display text-base font-bold text-[#0F1533]">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#5A607A]">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CAPSTONE PROJECTS ──────────────────────────────── */}
      <section className="border-t border-[#E8EAF4] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          {/* Header */}
          <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/15 bg-[#F7F8FC] px-4 py-1.5 text-sm font-semibold text-[#5B4CF5]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5B4CF5]" />
                Capstone projects
              </span>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-[#0F1533] sm:text-4xl">
                What you'll build
              </h2>
              <p className="mt-2 max-w-lg text-[#5A607A]">
                Real AI projects matched to your pathway — beginner builds to college-ready portfolio pieces.
              </p>
            </div>
            <Link
              to="/courses"
              className="group hidden shrink-0 items-center gap-2 rounded-full border border-[#E8EAF4] bg-[#F7F8FC] px-5 py-2.5 text-sm font-semibold text-[#5A607A] transition-all hover:border-[#5B4CF5]/30 hover:text-[#5B4CF5] sm:inline-flex"
            >
              Browse pathways
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Cards grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {CAPSTONES.map((cap) => {
              const Icon = cap.icon;
              return (
                <div
                  key={cap.title}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5B4CF5]/20 hover:shadow-[0_16px_40px_-12px_rgba(91,76,245,0.14)]"
                >
                  {/* Image with blue-indigo overlay */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={cap.img}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(160deg, rgba(15,12,50,0.62) 0%, rgba(59,76,245,0.32) 55%, rgba(15,21,51,0.48) 100%)",
                      }}
                    />
                    {/* Level badge */}
                    <span className="absolute left-3 top-3 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white backdrop-blur-sm ring-1 ring-white/20">
                      {cap.level}
                    </span>
                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 ring-1 ring-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-white" strokeWidth={2} />
                      </div>
                    </div>
                    {/* Duration */}
                    <span className="absolute bottom-3 right-3 rounded-lg bg-[#0F1533]/60 px-2.5 py-1 text-[10px] font-semibold text-white/80 backdrop-blur-sm">
                      {cap.duration}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-sm font-bold leading-snug text-[#0F1533] transition-colors group-hover:text-[#5B4CF5]">
                      {cap.title}
                    </h3>
                    <p className="mt-2 flex-1 text-xs leading-relaxed text-[#5A607A]">{cap.desc}</p>
                    <div className="mt-4 rounded-xl border border-[#EDE9FF] bg-[#F5F3FF] px-3 py-2.5">
                      <p className="text-[11px] text-[#5A607A]">
                        <span className="font-semibold text-[#5B4CF5]">Outcome: </span>
                        {cap.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURE PILLARS ────────────────────────────────── */}
      <section className="border-t border-[#E8EAF4] bg-[#F7F8FC] py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Zap,          title: "Step-by-step guidance", desc: "Clear steps and Illy checkpoints — you're never left guessing." },
              { icon: Award,        title: "Portfolio output",      desc: "Every capstone produces a real shareable project." },
              { icon: CheckCircle2, title: "Verifiable credentials",desc: "Earn a certificate in the Certification Hall on completion." },
              { icon: Sparkles,     title: "Illy mentorship",       desc: "Illy checks in at every stage so you understand what you built." },
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="flex items-start gap-4 rounded-2xl border border-[#E8EAF4] bg-white p-5 shadow-sm">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF]">
                    <Icon className="h-5 w-5 text-[#5B4CF5]" strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-display text-sm font-bold text-[#0F1533]">{f.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#5A607A]">{f.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ──────────────────────────────────────── */}
      <section className="border-t border-[#E8EAF4] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <div className="mb-6 flex justify-center">
            <IllyAvatar size="xl" reaction="hi" animate />
          </div>

          <h2 className="font-display text-3xl font-extrabold tracking-tight text-[#0F1533] sm:text-4xl">
            Ready to build something real?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-base text-[#5A607A]">
            Pick a learning pathway, complete your modules, and Illy guides
            you from first step to shareable credential.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/courses"
              className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#5B4CF5] px-8 text-sm font-bold text-white shadow-[0_8px_28px_-6px_rgba(91,76,245,0.45)] transition-all hover:scale-[1.03] hover:bg-[#4A3BE8] active:scale-[0.98]"
            >
              Explore learning pathways
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              to="/ai-hall"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-[#E8EAF4] bg-white px-6 text-sm font-semibold text-[#5A607A] transition-all hover:border-[#5B4CF5]/30 hover:text-[#5B4CF5]"
            >
              Try AI Hall for free
            </Link>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5 border-t border-[#F0F1F8] pt-7 text-sm text-[#8892A4]">
            <span>120+ projects completed</span>
            <span className="h-1 w-1 rounded-full bg-[#C7CAD9]" />
            <span>200+ certificates earned</span>
            <span className="h-1 w-1 rounded-full bg-[#C7CAD9]" />
            <span>Guided by Illy</span>
          </div>
        </div>
      </section>

    </div>
  );
}

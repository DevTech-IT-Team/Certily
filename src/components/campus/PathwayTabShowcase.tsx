import { useState } from "react";
import {
  Award,
  BookOpen,
  Bot,
  Briefcase,
  CheckCircle2,
  ChevronRight,
  Code2,
  Cpu,
  ExternalLink,
  Gamepad2,
  GraduationCap,
  Heart,
  Landmark,
  Layers,
  Lock,
  Palette,
  Rocket,
  Scroll,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { cn } from "@/lib/utils";

type PathwayTabShowcaseProps = {
  level: "k12" | "college" | "professional" | "career";
};

// ─── 1. K-12 CUTE & PLAYFUL INTERACTIVE SHOWCASE ─────────────────────────────

function K12Playground() {
  const [viewMode, setViewMode] = useState<"kids" | "parents">("kids");
  const [selectedBadge, setSelectedBadge] = useState<number>(0);
  const [activePrompt, setActivePrompt] = useState<string>("Create a Superhero Robot");
  const [aiOutput, setAiOutput] = useState<string>(
    "🤖 Meet Robo-Flash! Speed: 100x | Superpower: Solves math puzzles in 0.1 seconds & spreads kindness!"
  );
  const [unlockedBadges, setUnlockedBadges] = useState<number[]>([0, 1]);

  const badges = [
    { title: "AI Explorer", icon: Bot, color: "from-amber-400 to-orange-500", desc: "Completed first V AI quest!" },
    { title: "Digital Artist", icon: Palette, color: "from-pink-400 to-purple-500", desc: "Generated 5 creative AI artworks." },
    { title: "Logic Master", icon: Gamepad2, color: "from-emerald-400 to-teal-500", desc: "Solved 10 prompt puzzles." },
    { title: "Space Explorer", icon: Rocket, color: "from-blue-400 to-indigo-500", desc: "Built a space AI assistant." },
  ];

  const funPrompts = [
    { label: "⚡ Superhero Robot", prompt: "Create a Superhero Robot", response: "🤖 Meet Robo-Flash! Speed: 100x | Superpower: Solves math puzzles in 0.1 seconds & spreads kindness!" },
    { label: "🎨 Space Dinosaur", prompt: "Draw a Space Dinosaur with AI", response: "🦕 Dino-Star 9000! Flying through the Milky Way wearing neon space boots!" },
    { label: "🧩 Secret Code", prompt: "Decode AI Secret Message", response: "🔑 Message decoded: 'You are an awesome AI Innovator! Keep exploring!'" },
  ];

  const toggleBadge = (idx: number) => {
    if (!unlockedBadges.includes(idx)) {
      setUnlockedBadges([...unlockedBadges, idx]);
    }
    setSelectedBadge(idx);
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-orange-200/80 bg-gradient-to-br from-[#FFF7ED] via-[#FFF1F2] to-[#F0FDF4] p-6 sm:p-8 shadow-[0_20px_50px_-15px_rgba(251,146,60,0.25)]">
      {/* Decorative cute floating stickers */}
      <div className="pointer-events-none absolute -right-4 -top-4 h-28 w-28 rounded-full bg-amber-300/30 blur-2xl" />
      <div className="pointer-events-none absolute -left-4 -bottom-4 h-32 w-32 rounded-full bg-pink-300/30 blur-2xl" />

      {/* Top Bar: View Mode Switch */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-orange-200/60 pb-5">
        <div className="flex items-center gap-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 text-white shadow-md shadow-orange-300/50">
            <Smile className="h-7 w-7 animate-bounce" />
          </span>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display text-xl font-extrabold text-[#7C2D12]">
                K–12 AI Explorer Studio
              </h3>
              <span className="rounded-full bg-orange-500 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-white shadow-sm">
                Ages 6–18
              </span>
            </div>
            <p className="text-xs font-semibold text-[#9A3412]">
              Fun, safe, gamified AI learning for students & parents
            </p>
          </div>
        </div>

        {/* Kids / Parents toggle */}
        <div className="flex items-center rounded-full bg-white p-1 shadow-sm border border-orange-200">
          <button
            type="button"
            onClick={() => setViewMode("kids")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all",
              viewMode === "kids"
                ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            <Gamepad2 className="h-3.5 w-3.5" />
            Student View
          </button>
          <button
            type="button"
            onClick={() => setViewMode("parents")}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-extrabold transition-all",
              viewMode === "parents"
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm"
                : "text-slate-600 hover:text-slate-900"
            )}
          >
            <Heart className="h-3.5 w-3.5 text-pink-400" />
            Parent Guide
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      {viewMode === "kids" ? (
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          {/* Left: Interactive Prompt Sandbox */}
          <div className="rounded-2xl border border-orange-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-bold text-orange-600">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Try V's Cute AI Prompt Machine!
              </span>
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
                Safe AI Sandbox
              </span>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {funPrompts.map((p) => (
                <button
                  key={p.label}
                  type="button"
                  onClick={() => {
                    setActivePrompt(p.prompt);
                    setAiOutput(p.response);
                  }}
                  className={cn(
                    "rounded-xl px-3 py-1.5 text-xs font-bold transition-all",
                    activePrompt === p.prompt
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-sm"
                      : "bg-orange-50 text-orange-900 hover:bg-orange-100 border border-orange-200/60"
                  )}
                >
                  {p.label}
                </button>
              ))}
            </div>

            {/* AI Output Bubble */}
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/70 p-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                V's Magic Response:
              </p>
              <p className="mt-1 font-display text-sm font-extrabold text-[#7C2D12]">
                {aiOutput}
              </p>
            </div>
          </div>

          {/* Right: Cute Badge Collector */}
          <div className="rounded-2xl border border-purple-200/80 bg-white/90 p-5 shadow-sm backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <h4 className="font-display text-sm font-extrabold text-purple-950 flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-amber-500" />
                Student Badge Collector
              </h4>
              <span className="text-xs font-bold text-purple-600">
                {unlockedBadges.length} / {badges.length} Unlocked
              </span>
            </div>

            <div className="mt-3 grid grid-cols-2 gap-2.5">
              {badges.map((b, idx) => {
                const Icon = b.icon;
                const isUnlocked = unlockedBadges.includes(idx);
                const isSelected = selectedBadge === idx;

                return (
                  <button
                    key={b.title}
                    type="button"
                    onClick={() => toggleBadge(idx)}
                    className={cn(
                      "flex items-center gap-2.5 rounded-xl border p-3 text-left transition-all",
                      isSelected
                        ? "border-purple-500 bg-purple-50 shadow-md ring-2 ring-purple-400/30"
                        : "border-slate-200 bg-slate-50/60 hover:bg-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-white shadow-sm",
                        isUnlocked
                          ? `bg-gradient-to-tr ${b.color}`
                          : "bg-slate-300 text-slate-500"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-extrabold text-slate-800 truncate">
                        {b.title}
                      </p>
                      <p className="text-[10px] font-semibold text-slate-500">
                        {isUnlocked ? "Unlocked!" : "Click to view"}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Parent View Panel */
        <div className="mt-6 rounded-2xl border border-indigo-200 bg-white/95 p-6 shadow-sm">
          <h4 className="font-display text-base font-bold text-indigo-950 flex items-center gap-2">
            <Heart className="h-5 w-5 text-pink-500" />
            Parent & Guardian Peace of Mind
          </h4>
          <p className="mt-1 text-xs text-slate-600">
            Certcia K–12 tracks are designed alongside educators and child safety experts to ensure safe, age-appropriate AI exploration.
          </p>

          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-3.5">
              <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                <ShieldCheck className="h-4 w-4 text-indigo-600" />
                100% Safe Sandbox
              </span>
              <p className="mt-1 text-[11px] text-indigo-700">
                Walled-garden AI environments with zero public exposure.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-3.5">
              <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                <Users className="h-4 w-4 text-indigo-600" />
                Parent Progress Reports
              </span>
              <p className="mt-1 text-[11px] text-indigo-700">
                Weekly digest emails on completed modules and capstone projects.
              </p>
            </div>
            <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-3.5">
              <span className="text-xs font-bold text-indigo-900 flex items-center gap-1.5">
                <Trophy className="h-4 w-4 text-indigo-600" />
                MSA Academy Bridge
              </span>
              <p className="mt-1 text-[11px] text-indigo-700">
                Prepares students directly for McKinney Steam Academy certifications.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── 2. COLLEGE REAL UNIVERSITY SHOWCASE ──────────────────────────────────────

function CollegeAcademicQuad() {
  const [activeProject, setActiveProject] = useState(0);

  const capstoneProjects = [
    {
      title: "Neural Climate Change Predictor",
      student: "Elena Rostova (Class of '26)",
      major: "B.S. Computer Science & Data Analytics",
      tech: ["Python", "TensorFlow", "Geospatial Data"],
      summary: "Trained a high-accuracy predictive model on NOAA climate telemetry to forecast regional rainfall anomalies.",
      badge: "College Credit Verified",
    },
    {
      title: "Autonomous Bio-Medical Pipeline",
      student: "Marcus Chen (Class of '25)",
      major: "Pre-Med & Computational Biology",
      tech: ["PyTorch", "Medical Imaging", "OpenCV"],
      summary: "Designed an automated segmentation neural net for cellular analysis used in undergraduate research lab.",
      badge: "Admissions Portfolio Star",
    },
    {
      title: "FinTech Algorithmic Sentiment Agent",
      student: "Devon Miller (Class of '26)",
      major: "Finance & Applied Mathematics",
      tech: ["LLMs", "SEC Filings RAG", "Python"],
      summary: "Built an automated agent parsing corporate financial earnings calls into real-time risk indicators.",
      badge: "MSA College Bridge",
    },
  ];

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-blue-900/40 bg-gradient-to-br from-[#061329] via-[#0C1E40] to-[#1E3A8A] p-6 sm:p-9 text-white shadow-[0_25px_60px_-20px_rgba(37,99,235,0.4)]">
      {/* Background Crest Texture */}
      <div className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 -bottom-10 h-72 w-72 rounded-full bg-amber-500/10 blur-3xl" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-blue-800/60 pb-6">
        <div className="flex items-center gap-3.5">
          <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-500 via-amber-400 to-yellow-300 text-blue-950 shadow-lg shadow-amber-500/20 ring-2 ring-amber-300/40">
            <GraduationCap className="h-7 w-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-2xl font-bold tracking-tight text-white">
                The College & University Quad
              </h3>
              <span className="rounded-full bg-amber-400/20 px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-300 ring-1 ring-amber-400/30">
                Ages 18–24
              </span>
            </div>
            <p className="text-xs text-blue-200/80 font-medium">
              Academic outcomes, verified credentials & portfolio capstone projects
            </p>
          </div>
        </div>

        {/* Academic Seal Badge */}
        <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-md ring-1 ring-white/20">
          <Landmark className="h-4 w-4 text-amber-400" />
          <span>Accredited Academic Outcomes</span>
        </div>
      </div>

      {/* Main Grid */}
      <div className="mt-7 grid gap-6 lg:grid-cols-12">
        {/* Left 5 Cols: Key College Metrics */}
        <div className="lg:col-span-5 flex flex-col justify-between gap-4 rounded-2xl bg-blue-950/60 p-5 ring-1 ring-white/10 backdrop-blur-sm">
          <div>
            <h4 className="font-serif text-lg font-bold text-amber-300 flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-400" />
              University & Career Impact
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-blue-100/75">
              Certcia College Pathways are structured to mirror university capstone standards. Graduates build real, deployed projects that stand out in university admissions, research applications, and tech interviews.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
              <p className="text-[10px] font-bold uppercase text-amber-300">Portfolio Ready</p>
              <p className="mt-1 text-sm font-extrabold text-white">100% Verified Capstones</p>
            </div>
            <div className="rounded-xl bg-white/5 p-3 ring-1 ring-white/10">
              <p className="text-[10px] font-bold uppercase text-amber-300">College Bridge</p>
              <p className="mt-1 text-sm font-extrabold text-white">MSA Track Aligned</p>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Interactive Student Capstone Showcase */}
        <div className="lg:col-span-7 rounded-2xl bg-blue-950/80 p-5 ring-1 ring-white/15 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-blue-800/50 pb-3">
            <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
              <Scroll className="h-4 w-4" />
              Featured Student Capstone Showcase
            </span>
            <span className="text-[10px] font-semibold text-blue-200/60">
              Click project to inspect
            </span>
          </div>

          {/* Project Tabs */}
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {capstoneProjects.map((p, idx) => (
              <button
                key={p.title}
                type="button"
                onClick={() => setActiveProject(idx)}
                className={cn(
                  "rounded-xl px-3 py-1.5 text-xs font-bold whitespace-nowrap transition-all",
                  activeProject === idx
                    ? "bg-amber-400 text-blue-950 shadow-md font-extrabold"
                    : "bg-white/10 text-blue-200 hover:bg-white/20"
                )}
              >
                Project #{idx + 1}
              </button>
            ))}
          </div>

          {/* Active Project Card */}
          {capstoneProjects[activeProject] && (
            <div className="mt-4 rounded-xl border border-amber-400/30 bg-gradient-to-r from-blue-900/60 to-indigo-950/80 p-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full bg-amber-400/20 px-2.5 py-0.5 text-[10px] font-extrabold text-amber-300 ring-1 ring-amber-400/40">
                  {capstoneProjects[activeProject].badge}
                </span>
                <span className="text-[11px] font-medium text-blue-200/70">
                  {capstoneProjects[activeProject].student}
                </span>
              </div>

              <h5 className="mt-2.5 font-serif text-base font-bold text-white">
                {capstoneProjects[activeProject].title}
              </h5>
              <p className="mt-1 text-xs text-blue-100/75 leading-relaxed">
                {capstoneProjects[activeProject].summary}
              </p>

              <div className="mt-3 flex flex-wrap gap-1.5">
                {capstoneProjects[activeProject].tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/10 px-2 py-0.5 text-[10px] font-semibold text-blue-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── 3. PROFESSIONAL HIGH-TECH SHOWCASE ──────────────────────────────────────

function ProfessionalLab() {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-purple-900/40 bg-gradient-to-br from-[#0C061A] via-[#1F0C3B] to-[#4C1D95] p-6 sm:p-9 text-white shadow-[0_25px_60px_-20px_rgba(139,92,246,0.4)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-purple-800/60 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-purple-500 to-violet-600 text-white shadow-md">
            <Rocket className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Advanced Tech & Enterprise Engineering
            </h3>
            <p className="text-xs text-purple-200/80">
              Production MLOps, LLM Architectures & Enterprise Systems
            </p>
          </div>
        </div>
        <span className="rounded-full bg-purple-400/20 px-3.5 py-1 text-xs font-bold text-purple-300 ring-1 ring-purple-400/30">
          ⚡ SME Validated & Industry Heavy
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-purple-950/60 p-4 ring-1 ring-white/10">
          <Cpu className="h-5 w-5 text-purple-400" />
          <h4 className="mt-2 text-sm font-bold text-white">LLM Fine-Tuning</h4>
          <p className="mt-1 text-xs text-purple-200/70">
            LoRA, QLoRA, and custom domain dataset tokenization workflows.
          </p>
        </div>
        <div className="rounded-2xl bg-purple-950/60 p-4 ring-1 ring-white/10">
          <Layers className="h-5 w-5 text-purple-400" />
          <h4 className="mt-2 text-sm font-bold text-white">Enterprise RAG</h4>
          <p className="mt-1 text-xs text-purple-200/70">
            Vector DB indexing, hybrid dense retrieval & re-ranking pipelines.
          </p>
        </div>
        <div className="rounded-2xl bg-purple-950/60 p-4 ring-1 ring-white/10">
          <ShieldCheck className="h-5 w-5 text-purple-400" />
          <h4 className="mt-2 text-sm font-bold text-white">Production Guardrails</h4>
          <p className="mt-1 text-xs text-purple-200/70">
            Model safety, latency monitoring, and SOC-2 security protocols.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── 4. CAREER EXECUTIVE SHOWCASE ─────────────────────────────────────────────

function CareerSuite() {
  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-emerald-900/40 bg-gradient-to-br from-[#021A12] via-[#064E3B] to-[#059669] p-6 sm:p-9 text-white shadow-[0_25px_60px_-20px_rgba(16,185,129,0.4)]">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-emerald-800/60 pb-5">
        <div className="flex items-center gap-3.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-emerald-400 to-teal-500 text-emerald-950 shadow-md">
            <Briefcase className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-xl font-bold text-white">
              Executive AI Leadership Suite
            </h3>
            <p className="text-xs text-emerald-200/80">
              Career advancement, executive AI strategy & LinkedIn credentials
            </p>
          </div>
        </div>
        <span className="rounded-full bg-emerald-400/20 px-3.5 py-1 text-xs font-bold text-emerald-300 ring-1 ring-emerald-400/30">
          💼 Working Professionals
        </span>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl bg-emerald-950/60 p-5 ring-1 ring-white/10">
          <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2">
            <Trophy className="h-4 w-4 text-emerald-400" />
            Executive AI Certification
          </h4>
          <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed">
            Master high-impact AI strategy, team productivity automation, and vendor evaluation for executive decision making.
          </p>
        </div>
        <div className="rounded-2xl bg-emerald-950/60 p-5 ring-1 ring-white/10">
          <h4 className="text-sm font-bold text-emerald-300 flex items-center gap-2">
            <ExternalLink className="h-4 w-4 text-emerald-400" />
            LinkedIn Verified Credential
          </h4>
          <p className="mt-2 text-xs text-emerald-100/80 leading-relaxed">
            One-click exportable badge to feature on your LinkedIn profile, backed by Certcia AI Campus verification.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN EXPORT COMPONENT ───────────────────────────────────────────────────

export function PathwayTabShowcase({ level }: PathwayTabShowcaseProps) {
  switch (level) {
    case "k12":
      return <K12Playground />;
    case "college":
      return <CollegeAcademicQuad />;
    case "professional":
      return <ProfessionalLab />;
    case "career":
      return <CareerSuite />;
    default:
      return null;
  }
}

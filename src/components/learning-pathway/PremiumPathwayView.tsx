import { ArrowRight } from "lucide-react";
import { type PathwayLevelId, PATHWAY_LEVELS } from "@/lib/pathways";
import { COURSES_DATA } from "@/lib/courses";
import { CourseCatalogCard } from "@/components/campus/CourseCatalogCard";

const LEVEL_CATEGORY: Partial<Record<PathwayLevelId, string>> = {
  elementary: "Elementary",
  middle: "Middle School",
  high: "High School",
  college: "College",
  professional: "Professional",
  career: "Career",
};

export function PremiumPathwayView({ levelId }: { levelId: PathwayLevelId }) {
  // We fall back to the first level if something goes wrong
  const levelData = PATHWAY_LEVELS.find((p) => p.id === levelId) || PATHWAY_LEVELS[0];
  const catalogCourses = COURSES_DATA.filter(
    (c) => LEVEL_CATEGORY[levelId] && c.category === LEVEL_CATEGORY[levelId],
  );

  return (
    <div className="w-full space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* ── CINEMATIC HERO SECTION ──────────────────────────── */}
      <section 
        className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl transition-all"
        style={{
          background: levelData.theme.heroGradient,
          boxShadow: `0 25px 50px -12px ${levelData.theme.glow}`,
        }}
      >
        {/* Glow Effects */}
        <div 
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] opacity-60"
          style={{ background: levelData.theme.accent }}
        />
        <div 
          className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full blur-[100px] opacity-40"
          style={{ background: levelData.theme.accentLight }}
        />
        
        {/* Grid Overlay */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-white/5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-30" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-5">
            <span 
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black tracking-widest text-white shadow-lg backdrop-blur-md border border-white/20"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              {levelData.badgeLabel}
            </span>
            
            <h1 className="font-display text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl md:text-5xl drop-shadow-md">
              {levelData.themeTagline}
            </h1>
            
            <p className="max-w-xl text-sm sm:text-base font-medium leading-relaxed text-white/90">
              {levelData.description}
            </p>

            <div className="pt-2 flex flex-wrap gap-4 items-center">
              <a
                href="https://lmsathena.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-xs font-black transition-all hover:scale-105 shadow-xl"
                style={{ color: levelData.theme.darkBg }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore {levelData.shortLabel} Courses
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
                <div 
                  className="absolute inset-0 z-0 scale-x-0 bg-gradient-to-r from-transparent to-black/5 transition-transform duration-300 origin-left group-hover:scale-x-100" 
                />
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4">
            <div className="relative mx-auto w-full max-w-[220px] aspect-square">
              {/* Huge floating abstract icon matching the theme */}
              <div className="absolute inset-0 rounded-full animate-pulse-slow blur-3xl opacity-50" style={{ background: levelData.theme.accent }} />
              <div className="relative h-full w-full rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center transform transition-transform hover:-translate-y-2 hover:rotate-3 duration-500">
                <levelData.icon className="w-20 h-20 text-white drop-shadow-2xl" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COURSE BENTO GRID ───────────────────────────────── */}
      <section className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
              Featured Certification Tracks
            </h3>
            <p className="mt-1 text-sm font-semibold text-slate-500">
              Curriculum validated by industry leaders and educators.
            </p>
          </div>
          <div className="text-sm font-bold px-4 py-2 rounded-full bg-white shadow-sm border border-slate-200 text-slate-600">
            {catalogCourses.length} Courses Available
          </div>
        </div>

        {catalogCourses.length > 0 ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {catalogCourses.map((course) => (
              <CourseCatalogCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white py-16 text-center">
            <p className="text-lg font-semibold text-[#1C1D1F]">Coming Soon</p>
            <p className="mt-2 text-sm text-[#6A6F73]">
              We are actively building the curriculum for this pathway.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

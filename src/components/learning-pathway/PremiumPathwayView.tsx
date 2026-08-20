import { ArrowRight, Star, Clock, Users, CheckCircle2 } from "lucide-react";
import { type PathwayLevelId, PATHWAY_LEVELS, coursesForLevel } from "@/lib/pathways";
import { cn } from "@/lib/utils";

export function PremiumPathwayView({ levelId }: { levelId: PathwayLevelId }) {
  // We fall back to the first level if something goes wrong
  const levelData = PATHWAY_LEVELS.find((p) => p.id === levelId) || PATHWAY_LEVELS[0];
  const courses = coursesForLevel(levelId);

  // Split courses for bento layout (first is featured/large, rest are smaller)
  const featuredCourse = courses[0];
  const standardCourses = courses.slice(1);

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
            {courses.length} Courses Available
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Featured Large Card (Left side) */}
          {featuredCourse && (
            <div 
              className="group relative lg:col-span-8 flex flex-col overflow-hidden rounded-3xl bg-white shadow-lg transition-all hover:shadow-2xl border border-slate-200 min-h-[300px] lg:min-h-[400px]"
              style={{ '--hover-color': levelData.theme.cardHoverBorder } as React.CSSProperties}
            >
              <div className="absolute inset-0 w-full h-full">
                <img src={featuredCourse.img} alt={featuredCourse.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-5 sm:p-8 z-10">
                <div className="flex gap-2 mb-3">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                    {featuredCourse.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    {featuredCourse.rating}
                  </span>
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  {featuredCourse.title}
                </h4>
                <p className="text-white/80 font-medium max-w-xl text-xs sm:text-sm line-clamp-2 mb-6">
                  {featuredCourse.preview}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-4 mt-auto">
                  <div className="flex gap-4 text-white/70 text-[11px] font-semibold tracking-wide">
                    <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {featuredCourse.duration}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> {featuredCourse.learners.toLocaleString()} learners</span>
                  </div>
                  <button className="rounded-full bg-white px-4 py-2 text-xs font-bold text-slate-900 transition-colors group-hover:bg-slate-100 flex items-center gap-1.5">
                    View Course <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
              {/* Animated Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 rounded-3xl group-hover:border-[var(--hover-color)] pointer-events-none" />
            </div>
          )}

          {/* Standard Cards (Right side, stacked vertically) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {standardCourses.map((course) => (
              <div 
                key={course.id}
                className="group relative flex flex-col flex-1 overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-xl"
                style={{ '--hover-color': levelData.theme.cardHoverBorder } as React.CSSProperties}
              >
                <div className="h-28 sm:h-32 relative overflow-hidden shrink-0">
                  <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <span className="absolute bottom-2 left-3 inline-flex items-center rounded-md bg-white/20 backdrop-blur-md border border-white/20 px-1.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-wide">
                    {course.category}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-4">
                  <h4 className="font-display text-base font-bold text-slate-900 line-clamp-2 leading-snug">
                    {course.title}
                  </h4>
                  <p className="mt-1.5 text-[11px] font-medium text-slate-500 line-clamp-2">
                    {course.preview}
                  </p>
                  <div className="mt-auto pt-3 flex items-center justify-between">
                    <div className="flex items-start gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 mt-0.5" style={{ color: levelData.theme.accent }} />
                      <span className="text-[10px] font-bold text-slate-700 max-w-[130px] leading-tight">
                        {course.outcome}
                      </span>
                    </div>
                    <button className="shrink-0 h-6 w-6 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-colors group-hover:bg-slate-200" style={{ color: levelData.theme.accent }}>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
                {/* Animated Hover Border */}
                <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 rounded-3xl group-hover:border-[var(--hover-color)] pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

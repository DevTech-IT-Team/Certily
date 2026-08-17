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
        className="relative overflow-hidden rounded-[2.5rem] p-8 sm:p-12 md:p-16 shadow-2xl transition-all"
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

        <div className="relative z-10 grid gap-10 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span 
              className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-black tracking-widest text-white shadow-lg backdrop-blur-md border border-white/20"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              {levelData.badgeLabel}
            </span>
            
            <h1 className="font-display text-4xl font-extrabold leading-[1.15] text-white sm:text-5xl md:text-6xl drop-shadow-md">
              {levelData.themeTagline}
            </h1>
            
            <p className="max-w-xl text-lg font-medium leading-relaxed text-white/90">
              {levelData.description}
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a
                href="https://lmsathena.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-black transition-all hover:scale-105 shadow-xl"
                style={{ color: levelData.theme.darkBg }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Explore {levelData.shortLabel} Courses
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                <div 
                  className="absolute inset-0 z-0 scale-x-0 bg-gradient-to-r from-transparent to-black/5 transition-transform duration-300 origin-left group-hover:scale-x-100" 
                />
              </a>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5">
            <div className="relative mx-auto w-full max-w-[320px] aspect-square">
              {/* Huge floating abstract icon matching the theme */}
              <div className="absolute inset-0 rounded-full animate-pulse-slow blur-3xl opacity-50" style={{ background: levelData.theme.accent }} />
              <div className="relative h-full w-full rounded-[2.5rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center transform transition-transform hover:-translate-y-2 hover:rotate-3 duration-500">
                <levelData.icon className="w-32 h-32 text-white drop-shadow-2xl" strokeWidth={1.5} />
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

        <div className="grid gap-6 lg:grid-cols-3 auto-rows-[340px]">
          {/* Featured Large Card (Spans 2 columns on desktop) */}
          {featuredCourse && (
            <div 
              className="group relative col-span-1 lg:col-span-2 overflow-hidden rounded-3xl bg-white shadow-lg transition-all hover:shadow-2xl hover:-translate-y-1 border border-slate-200"
              style={{ '--hover-color': levelData.theme.cardHoverBorder } as React.CSSProperties}
            >
              <div className="absolute inset-0 w-full h-full">
                <img src={featuredCourse.img} alt={featuredCourse.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent opacity-90" />
              </div>
              
              <div className="relative h-full flex flex-col justify-end p-6 sm:p-8 z-10">
                <div className="flex gap-2 mb-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide">
                    {featuredCourse.category}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-white/20 backdrop-blur-md border border-white/20 px-3 py-1 text-xs font-bold text-white uppercase tracking-wide">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    {featuredCourse.rating}
                  </span>
                </div>
                <h4 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2 leading-tight">
                  {featuredCourse.title}
                </h4>
                <p className="text-white/80 font-medium max-w-xl text-sm sm:text-base line-clamp-2 mb-6">
                  {featuredCourse.preview}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/20 pt-4">
                  <div className="flex gap-4 text-white/70 text-sm font-semibold">
                    <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {featuredCourse.duration}</span>
                    <span className="flex items-center gap-1.5"><Users className="w-4 h-4" /> {featuredCourse.learners.toLocaleString()} learners</span>
                  </div>
                  <button className="rounded-full bg-white px-5 py-2 text-sm font-bold text-slate-900 transition-colors group-hover:bg-slate-100 flex items-center gap-2">
                    View Course <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Animated Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 rounded-3xl group-hover:border-[var(--hover-color)] pointer-events-none" />
            </div>
          )}

          {/* Standard Standard Cards */}
          {standardCourses.map((course) => (
            <div 
              key={course.id}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1"
              style={{ '--hover-color': levelData.theme.cardHoverBorder } as React.CSSProperties}
            >
              <div className="h-40 relative overflow-hidden shrink-0">
                <img src={course.img} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <span className="absolute bottom-3 left-4 inline-flex items-center rounded-md bg-white/20 backdrop-blur-md border border-white/20 px-2 py-0.5 text-[10px] font-bold text-white uppercase tracking-wide">
                  {course.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h4 className="font-display text-lg font-bold text-slate-900 line-clamp-2 leading-snug">
                  {course.title}
                </h4>
                <p className="mt-2 text-xs font-medium text-slate-500 line-clamp-2">
                  {course.preview}
                </p>
                <div className="mt-auto pt-4 flex items-center justify-between">
                  <div className="flex items-start gap-1">
                    <CheckCircle2 className="w-4 h-4 mt-0.5" style={{ color: levelData.theme.accent }} />
                    <span className="text-[11px] font-bold text-slate-700 max-w-[150px] leading-tight">
                      {course.outcome}
                    </span>
                  </div>
                  <button className="shrink-0 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-colors group-hover:bg-slate-200" style={{ color: levelData.theme.accent }}>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              {/* Animated Hover Border */}
              <div className="absolute inset-0 border-2 border-transparent transition-colors duration-300 rounded-3xl group-hover:border-[var(--hover-color)] pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

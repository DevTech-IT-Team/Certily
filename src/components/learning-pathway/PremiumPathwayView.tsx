import { getPathwayLevel, type PathwayLevelId } from "@/lib/pathways";
import { coursesForBand } from "@/lib/courses";
import { CourseCatalogCard } from "@/components/campus/CourseCatalogCard";

export function PremiumPathwayView({ levelId }: { levelId: PathwayLevelId }) {
  const levelData = getPathwayLevel(levelId);
  const catalogCourses = coursesForBand(levelId);

  return (
    <div className="w-full space-y-8 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <section
        className="relative overflow-hidden rounded-[2rem] p-6 sm:p-8 md:p-10 shadow-2xl transition-all"
        style={{
          background: levelData.theme.heroGradient,
          boxShadow: `0 25px 50px -12px ${levelData.theme.glow}`,
        }}
      >
        <div
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full blur-[100px] opacity-60"
          style={{ background: levelData.theme.accent }}
        />
        <div
          className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full blur-[100px] opacity-40"
          style={{ background: levelData.theme.accentLight }}
        />

        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-white/5 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_80%)] opacity-30" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-12 items-center">
          <div className="lg:col-span-8 space-y-5">
            <span
              className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-black tracking-widest text-white shadow-lg backdrop-blur-md border border-white/20"
              style={{ background: "rgba(255,255,255,0.15)" }}
            >
              {levelData.badge}
            </span>

            <h1 className="font-display text-3xl font-extrabold leading-[1.15] text-white sm:text-4xl md:text-5xl drop-shadow-md">
              {levelData.themeTagline}
            </h1>

            <p className="max-w-xl text-sm sm:text-base font-medium leading-relaxed text-white/90">
              {levelData.description}
            </p>

            <p className="pt-1 text-sm font-semibold text-white/80">
              {levelData.outcomeCount} certifications · {levelData.modulesPerOutcome} modules
              · lessons in every module
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-4">
            <div className="relative mx-auto w-full max-w-[220px] aspect-square">
              <div className="absolute inset-0 rounded-full animate-pulse-slow blur-3xl opacity-50" style={{ background: levelData.theme.accent }} />
              <div className="relative h-full w-full rounded-[2rem] border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl flex items-center justify-center transform transition-transform hover:-translate-y-2 hover:rotate-3 duration-500">
                <levelData.icon className="w-20 h-20 text-white drop-shadow-2xl" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6 pt-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h3 className="font-display text-2xl font-extrabold text-slate-900 tracking-tight">
              Certifications in {levelData.shortLabel}
            </h3>
            <p className="mt-1 text-sm text-slate-500">
              {levelData.outcomeCount} certifications · {levelData.modulesPerOutcome} modules
              each · lessons inside every module
            </p>
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

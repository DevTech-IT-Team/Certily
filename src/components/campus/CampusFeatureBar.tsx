import { CAMPUS_PILLARS } from "@/lib/campus";

export function CampusFeatureBar() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
      {CAMPUS_PILLARS.map(({ title, description, icon: Icon }, i) => (
        <div
          key={title}
          data-reveal
          className="group relative overflow-hidden rounded-2xl border border-border/60 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_12px_40px_-12px_rgba(123,108,255,0.35)]"
          style={{ transitionDelay: `${i * 40}ms` }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute -right-4 -top-4 h-20 w-20 rounded-full bg-primary/5 transition-transform group-hover:scale-150"
          />
          <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-[#4CD1B0]/15 text-primary transition-colors group-hover:from-primary/25 group-hover:to-[#4CD1B0]/25">
            <Icon className="h-5 w-5" aria-hidden />
          </div>
          <p className="relative mt-4 text-sm font-extrabold text-[#0F1533]">{title}</p>
          <p className="relative mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      ))}
    </div>
  );
}

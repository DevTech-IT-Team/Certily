import { CampusMap } from "./CampusMap";

export function CampusShowcase() {
  return (
    <section
      id="campus-map"
      data-illy-section="campus"
      className="scroll-mt-20 border-t border-border/60 bg-white py-16 md:py-24"
    >
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Interactive campus
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Tap a building. Illy tells you what&apos;s inside.
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            Six learning zones on one map — hover or tap to explore. Locked areas unlock after
            enrollment.
          </p>
        </div>

        <CampusMap showGuide />
      </div>
    </section>
  );
}

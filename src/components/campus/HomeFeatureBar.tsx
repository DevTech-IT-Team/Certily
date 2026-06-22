import { CAMPUS_PILLARS } from "@/lib/campus";

export function HomeFeatureBar() {
  return (
    <section id="pillars" data-illy-section="pillars" className="bg-[#F7F8FC] px-4 pb-10 pt-2 sm:px-6 sm:pb-12">
      <div className="mx-auto max-w-[88rem]">
        <div className="rounded-2xl border border-border/60 bg-white px-4 py-5 shadow-sm sm:px-6 sm:py-6">
          <ul className="flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-start lg:justify-between lg:gap-4">
            {CAMPUS_PILLARS.map(({ title, description, icon: Icon }, i) => (
              <li
                key={title}
                className={`flex flex-1 items-start gap-3 ${
                  i > 0 ? "lg:border-l lg:border-border/50 lg:pl-5" : ""
                }`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" strokeWidth={2} />
                </div>
                <div className="min-w-0 pt-0.5">
                  <p className="text-sm font-semibold leading-tight text-foreground">{title}</p>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

import { useIlly } from "./IllyContext";
import { ILLY_PERSONAS } from "@/lib/illy-guide";
import { cn } from "@/lib/utils";

export function IllyPersonas() {
  const { showTip, setFloatingOpen } = useIlly();

  return (
    <section data-illy-section="personas" className="bg-[#FAFAFF] py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
          <h2 className="text-3xl font-extrabold tracking-tight text-[#0F1533] md:text-4xl md:leading-tight">
            Meet Illy.
            <br />
            <span className="text-muted-foreground">Navigator, mentor, and campus guide.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
            Illy guides visitors through public areas, explains what unlocks after enrollment, and
            supports students through modules, capstones, and Mission Control.
          </p>
        </div>

        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] md:grid md:grid-cols-3 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
          {ILLY_PERSONAS.map((persona) => {
            const Icon = persona.icon;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => {
                  showTip(persona.message, true);
                  setFloatingOpen(true);
                }}
                className={cn(
                  "group w-[17rem] shrink-0 snap-start rounded-2xl border border-[#ECE9F8] bg-white p-6 text-left shadow-sm transition-all md:w-auto",
                  "hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_20px_50px_-24px_rgba(123,108,255,0.4)]"
                )}
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F0EDFF] to-[#E8FBF6] text-primary">
                  <Icon className="h-6 w-6" strokeWidth={1.75} />
                </div>
                <p className="mt-5 text-base font-bold text-[#0F1533]">{persona.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {persona.description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}

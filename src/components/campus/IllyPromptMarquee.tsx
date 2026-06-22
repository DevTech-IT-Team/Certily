import { useRouter } from "@tanstack/react-router";
import { useIlly } from "./IllyContext";
import { ILLY_POPULAR_PROMPTS } from "@/lib/illy-guide";

export function IllyPromptMarquee() {
  const { showTip } = useIlly();
  const router = useRouter();
  const items = [...ILLY_POPULAR_PROMPTS, ...ILLY_POPULAR_PROMPTS];

  const handlePrompt = (message: string, href?: string) => {
    showTip(message, true);
    if (href?.startsWith("/#")) {
      document.querySelector(href.slice(1))?.scrollIntoView({ behavior: "smooth" });
    } else if (href) {
      router.navigate({ to: href });
    }
  };

  return (
    <section className="border-y border-[#ECE9F8] bg-white py-12 md:py-16">
      <div className="mx-auto mb-8 max-w-6xl px-4 text-center">
        <h3 className="text-2xl font-extrabold tracking-tight text-[#0F1533] md:text-3xl">
          Popular prompts to get you started
        </h3>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee gap-4 px-4 hover:[animation-play-state:paused]">
          {items.map((p, i) => (
            <button
              key={`${p.id}-${i}`}
              type="button"
              onClick={() => handlePrompt(p.message, p.href)}
              className="w-[16.5rem] shrink-0 rounded-2xl border border-[#ECE9F8] bg-[#FAFAFF] p-5 text-left transition-all hover:border-primary/25 hover:bg-white hover:shadow-md"
            >
              <p className="font-mono text-xs font-bold text-primary">{p.command}</p>
              <p className="mt-2 text-sm font-semibold leading-snug text-[#0F1533]">{p.label}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

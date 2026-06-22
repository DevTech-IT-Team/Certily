import illyImg from "@/assets/illy.png";
import { useIlly } from "./IllyContext";

const GREETING =
  "I'm your campus guide — tap me anytime for directions on pathways, buildings, and enrollment.";

export function IllyHeroCard() {
  const { setMessage, setFloatingOpen } = useIlly();

  return (
    <button
      type="button"
      onClick={() => {
        setMessage(GREETING, true);
        setFloatingOpen(true);
      }}
      className="group w-full rounded-2xl border border-[#E4E2F0] bg-white p-4 text-left shadow-[0_8px_32px_-12px_rgba(15,14,26,0.1)] transition-all hover:border-[#5B4CF5]/20 hover:shadow-[0_12px_36px_-10px_rgba(91,76,245,0.18)] sm:p-5"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#0F1533]">
          <img src={illyImg} alt="" className="h-[92%] w-[92%] object-contain object-bottom" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-bold text-foreground sm:text-base">
            Hi, I&apos;m <span className="font-display tracking-wide">ILY</span>!{" "}
            <span aria-hidden>👋</span>
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[#5A5872]">{GREETING}</p>
        </div>
        <span className="hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#EDE9FF] text-[#5B4CF5] transition-transform group-hover:translate-x-0.5 sm:flex">
          →
        </span>
      </div>
    </button>
  );
}

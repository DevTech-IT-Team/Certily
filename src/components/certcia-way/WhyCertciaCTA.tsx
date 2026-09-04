import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const PROOF = ["AI-guided pathways", "Real-world labs", "Verified credentials"] as const;

export function WhyCertciaCTA() {
  return (
    <section
      id="why-certcia-cta"
      className="relative overflow-hidden bg-[#EEEEF8] px-4 py-16 font-sans sm:px-6 sm:py-20"
    >
      <div className="pointer-events-none absolute left-1/4 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#5B4CF5]/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-64 w-64 rounded-full bg-[#4CD1B0]/12 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.06]" />

      <div className="relative mx-auto max-w-2xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
          Start today
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem]">
          Ready to get certified?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[#5A607A]">
          Pick a pathway, practice with V, and earn proof you can showcase.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/learning"
            className="group inline-flex h-12 min-w-[11.5rem] items-center justify-center gap-2 rounded-full bg-[#5B4CF5] px-8 text-base font-bold text-white shadow-[0_10px_28px_-8px_rgba(91,76,245,0.55)] transition-all hover:scale-[1.03] hover:bg-[#4A3BE0] active:scale-[0.98]"
          >
            Explore Pathways
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#D8D6EE] bg-white px-6 text-sm font-semibold text-[#5A5872] shadow-xs transition-all hover:border-[#5B4CF5]/35 hover:text-[#5B4CF5] active:scale-[0.98]"
          >
            Talk to us
          </Link>
        </div>

        <ul className="mt-9 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-[#5A607A]">
          {PROOF.map((item) => (
            <li key={item} className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-[#5B4CF5]" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { PARTNER_LOGOS } from "@/lib/campus";

export function TrustLogosMarquee() {
  const logos = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="border-t border-border/60 bg-white py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
          Trusted by learners and partners worldwide
        </p>
      </div>
      <div className="relative mt-6 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-12 px-6">
          {logos.map((name, i) => (
            <span
              key={`${name}-${i}`}
              className="shrink-0 text-lg font-bold tracking-wide text-foreground/25 sm:text-xl"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

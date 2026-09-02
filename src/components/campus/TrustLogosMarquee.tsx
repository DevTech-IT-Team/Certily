export function TrustLogosMarquee({
  heading = "Built for learners partnering with",
  className,
}: {
  heading?: string | null;
  className?: string;
}) {
  const COLORFUL_LOGOS = [
    // Google
    <span className="font-display text-2xl font-extrabold tracking-tight text-[#4285F4]">
      G<span className="text-[#EA4335]">o</span>
      <span className="text-[#FBBC05]">o</span>g
      <span className="text-[#34A853]">l</span>
      <span className="text-[#EA4335]">e</span>
    </span>,
    // Yahoo!
    <span className="font-display text-2xl font-bold tracking-tight text-[#400090]">
      yahoo<span className="font-black">!</span>
    </span>,
    // Cognizant
    <span className="font-display text-xl font-bold tracking-tight text-[#0033A0]">
      Cognizant
    </span>,
    // DELL
    <span className="font-display text-2xl font-black tracking-widest text-[#0076CE]">
      DELL
    </span>,
    // HP
    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0096D6] font-display text-xl font-bold italic text-white">
      hp
    </span>,
    // IBM
    <span className="font-display text-2xl font-black tracking-widest text-[#052FAD]">
      IBM
    </span>,
    // Deloitte.
    <span className="font-display text-2xl font-bold tracking-tight text-black">
      deloitte<span className="text-[#86BC25]">.</span>
    </span>,
    // Infosys
    <span className="font-display text-2xl font-light tracking-wide text-[#007CC3]">
      Infosys
    </span>,
    // Accenture
    <span className="relative font-display text-xl font-bold tracking-tight text-black">
      accenture
      <span className="absolute -top-1.5 right-4 text-lg text-[#A100FF]">&gt;</span>
    </span>,
    // Oracle
    <span className="font-display text-2xl font-bold tracking-widest text-[#C74634]">
      ORACLE
    </span>,
  ];

  const logos = [...COLORFUL_LOGOS, ...COLORFUL_LOGOS, ...COLORFUL_LOGOS];

  return (
    <section className={`${heading ? "border-t border-border/60 bg-white py-12 sm:py-14" : "bg-white pb-12 sm:pb-14"} ${className ?? ""}`}>
      {heading ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="text-center text-[13px] font-semibold uppercase tracking-[0.08em] text-muted-foreground">
            {heading}
          </p>
        </div>
      ) : null}
      <div className={heading ? "relative mt-10 overflow-hidden" : "relative overflow-hidden"}>
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="flex w-max animate-marquee items-center gap-16 px-8 py-3">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="flex h-12 shrink-0 items-center justify-center grayscale-[0.2] transition-all duration-300 hover:grayscale-0 hover:scale-105"
            >
              {logo}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

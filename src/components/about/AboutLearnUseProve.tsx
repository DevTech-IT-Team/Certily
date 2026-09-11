const STEPS = [
  {
    id: "01",
    label: "Current",
    title: "Learn what matters now",
    copy: "Content evolves as technology and industry expectations evolve",
  },
  {
    id: "02",
    label: "Applied",
    title: "Practice in context",
    copy: "Real-world scenarios turn knowledge into decision-making",
  },
  {
    id: "03",
    label: "Proven",
    title: "Demonstrate capability",
    copy: "Assessment and capstone work test what learners can actually do",
  },
  {
    id: "04",
    label: "Verified",
    title: "Carry the proof forward",
    copy: "A verifiable credential that can be shared with external stakeholders",
  },
] as const;

export function AboutLearnUseProve() {
  return (
    <section className="bg-[#0F1533] px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[94rem]">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A99BFF]">
              Not a course. A certification outcome
            </p>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-5xl lg:text-[4rem]">
              <span className="block">Learn it</span>
              <span className="mt-1 block">Use it</span>
              <span className="mt-1 block">Prove it</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[#C4C8D8] lg:col-span-5">
            Real-world scenarios live inside the curriculum. Assessments test
            application. Capstones demand a meaningful demonstration. The
            credential becomes proof of the outcome.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {STEPS.map((step) => (
            <li key={step.id}>
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#A99BFF]">
                {step.id} / {step.label}
              </p>
              <h3 className="mt-4 font-display text-xl font-bold leading-snug tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#B8BDD0]">
                {step.copy}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="font-display text-lg font-bold tracking-tight sm:text-xl">
            Completion is a milestone — capability is the outcome
          </p>
          <p className="text-sm font-semibold text-[#A99BFF]">
            Learn. Apply. Prove. Share
          </p>
        </div>
      </div>
    </section>
  );
}

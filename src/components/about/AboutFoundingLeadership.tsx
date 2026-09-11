const LENSES = [
  {
    title: "Industry experience",
    copy: "We know how capability is judged when the classroom ends and real work begins.",
  },
  {
    title: "Teaching experience",
    copy: "We know that knowledge alone is not enough; learners need practice, feedback and confidence.",
  },
  {
    title: "Technology perspective",
    copy: "We design for a world where tools, roles and expectations keep changing.",
  },
  {
    title: "Outcome discipline",
    copy: "Every certification must lead to something a learner can demonstrate and share.",
  },
] as const;

export function AboutFoundingLeadership() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-[94rem] gap-5 lg:grid-cols-12 lg:gap-6">
        <article className="flex flex-col justify-between rounded-[1.75rem] bg-[#0F1533] p-8 text-white sm:p-10 lg:col-span-5 lg:min-h-[32rem] lg:p-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A99BFF]">
              Founding leadership
            </p>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] sm:text-4xl lg:text-[2.65rem]">
              Built by people who have done the work — and taught it
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-[#C4C8D8]">
              Certcia’s leadership brings together deep experience across
              industry, technology, education and learning. Many of us have been
              teachers, trainers and mentors ourselves — so we understand both
              sides of the outcome.
            </p>
          </div>
          <p className="mt-12 font-display text-5xl font-extrabold tracking-tight text-[#5B4CF5] sm:text-6xl">
            50+
            <span className="mt-2 block max-w-[12rem] font-sans text-sm font-semibold leading-snug tracking-normal text-[#C4C8D8]">
              years of combined leadership experience
            </span>
          </p>
        </article>

        <article className="rounded-[1.75rem] bg-[#EEEEF8] p-8 sm:p-10 lg:col-span-7 lg:p-12">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
            The founder’s perspective
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl">
            Technology changes quickly
            <span className="mt-1.5 block text-[#5B4CF5]">
              Learning cannot afford to stand still
            </span>
          </h2>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {LENSES.map((item) => (
              <li
                key={item.title}
                className="rounded-2xl bg-white p-5 ring-1 ring-white sm:p-6"
              >
                <h3 className="text-sm font-bold text-[#0F1533]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#5A607A]">
                  {item.copy}
                </p>
              </li>
            ))}
          </ul>

          <p className="mt-8 border-l-2 border-[#5B4CF5] pl-4 text-sm leading-relaxed text-[#5A607A]">
            This is why Certcia is more than a training platform. It is a
            long-term commitment to keeping learners ready for what comes next.
          </p>
        </article>
      </div>
    </section>
  );
}

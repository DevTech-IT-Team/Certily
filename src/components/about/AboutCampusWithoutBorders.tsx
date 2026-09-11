import { Link } from "@tanstack/react-router";

const REGIONS = [
  "North America",
  "UK & Europe",
  "Middle East",
  "India & South Asia",
  "Asia-Pacific",
] as const;

export function AboutCampusWithoutBorders() {
  return (
    <section className="bg-[#EEEEF8] px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-[94rem] gap-5 lg:grid-cols-12 lg:gap-6">
        <div className="flex flex-col lg:col-span-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
            A campus without borders
          </p>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-[1.08] tracking-[-0.035em] text-[#0F1533] sm:text-4xl lg:text-[2.65rem]">
            You do not graduate
            <span className="mt-1 block">out of Certcia</span>
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-[#5A607A]">
            Certification is not the end of the relationship. We want learners,
            parents and educators to stay connected, share feedback, showcase
            what they build and help improve what comes next.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3 lg:mt-auto lg:pt-10">
            <Link
              to="/signup"
              className="inline-flex h-12 items-center rounded-full bg-[#5B4CF5] px-7 text-sm font-bold text-white shadow-[0_10px_24px_-10px_rgba(91,76,245,0.65)] transition-colors hover:bg-[#4A3BE0]"
            >
              Join the journey
            </Link>
            <Link
              to="/learning"
              className="inline-flex h-12 items-center rounded-full border border-[#D8D6EE] bg-white px-6 text-sm font-semibold text-[#5A5872] transition-colors hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5]"
            >
              Explore Pathways
            </Link>
          </div>
        </div>

        <div className="flex flex-col rounded-[1.75rem] bg-white p-7 ring-1 ring-[#E4E2F0] sm:p-8 lg:col-span-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
            Worldwide by design
          </p>
          <h3 className="mt-4 font-display text-2xl font-extrabold leading-snug tracking-tight text-[#0F1533] sm:text-[1.75rem]">
            One learning family
            <span className="mt-1 block text-[#5B4CF5]">Many perspectives</span>
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-[#5A607A] sm:text-base">
            A continuous feedback cohort keeps Certcia connected to the people
            learning, teaching and hiring around the world.
          </p>
          <ul className="mt-6 flex flex-wrap gap-2 lg:mt-auto lg:pt-8">
            {REGIONS.map((region) => (
              <li
                key={region}
                className="rounded-full bg-[#EEEEF8] px-3.5 py-1.5 text-[12px] font-semibold text-[#5A5872] ring-1 ring-[#E4E2F0]"
              >
                {region}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 grid items-center gap-6 rounded-[1.5rem] bg-[#0F1533] px-7 py-7 sm:px-8 sm:py-8 lg:col-span-12 lg:mt-6 lg:grid-cols-12 lg:gap-6">
          <div className="lg:col-span-6">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A99BFF]">
              Our ambition
            </p>
            <p className="mt-3 max-w-md font-display text-2xl font-extrabold leading-snug tracking-tight text-white sm:text-[1.75rem]">
              Become the name families trust for future-ready certification
            </p>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-[#C4C8D8] sm:text-base lg:col-span-6 lg:justify-self-start">
            Not by being the loudest learning brand, but by staying relevant,
            proving outcomes and earning trust one learner at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

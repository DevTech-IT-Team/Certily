import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/campus/Reveal";

const SOLUTIONS = [
  {
    id: "subscription",
    // n: "01",
    title: "Certcia for Business",
    copy: "A single subscription for certificate programs across AI, Data, and Tech — for the whole team.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "genai",
    // n: "02",
    title: "GenAI Academy",
    copy: "Learn by doing: prompts, workflows, and GenAI applied to the work your teams already do.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: "custom",
    // n: "03",
    title: "Custom Learning Solutions",
    copy: "Industry-specific journeys designed around your roles, tools, and rollout plan.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
] as const;

export function EnterpriseSolutions() {
  return (
    <section id="solutions" className="scroll-mt-24 bg-white px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#5B4CF5]" />
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#5B4CF5]">
              Solutions
            </span>
          </div>
          <h2 className="max-w-xl font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl">
            Stay ahead with cutting-edge learning solutions
          </h2>
        </Reveal>

        <ol className="mt-12 grid gap-6 md:grid-cols-3 md:gap-7">
          {SOLUTIONS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className="group relative block h-[400px] overflow-hidden rounded-2xl"
              >
                <img
                  src={item.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent transition-opacity duration-300 group-hover:opacity-0" />

                <div
                  aria-hidden
                  className="absolute inset-0 bg-[#2F6FED]/70 backdrop-blur-md transition-transform duration-500 ease-out translate-y-full group-hover:translate-y-0 group-focus-visible:translate-y-0"
                />

                <div className="absolute inset-0 z-10 flex flex-col justify-end p-6 text-white sm:p-7">
                  <p className="mb-3 translate-y-3 text-sm leading-relaxed text-white/90 opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100">
                    {item.copy}
                  </p>
                  <p className="text-[11px] font-bold uppercase tracking-widest text-white/70">
                    {item.n}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-extrabold leading-snug">
                    {item.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-bold opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    Learn more
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

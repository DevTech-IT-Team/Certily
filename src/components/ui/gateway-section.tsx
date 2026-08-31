import { Globe } from "./globe";

export function GatewaySection() {
  return (
    <section className="relative overflow-hidden pt-16 sm:pt-20">
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-[#5B4CF5]" />
          <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#5B4CF5]">
            Worldwide
          </span>
          <span className="h-px w-8 bg-[#5B4CF5]" />
        </div>

        <h2 className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem] xl:text-[3.35rem]">
          Our Global <span className="text-[#5B4CF5]">Presence.</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base font-medium leading-relaxed text-[#5A607A] sm:mt-6 sm:text-lg lg:text-[1.05rem]">
          Connecting learners across the world through our vast educational
          network and certified pathways.
        </p>
      </div>

      <div className="relative mx-auto mt-4 h-[300px] w-full overflow-hidden sm:mt-5 sm:h-[400px] lg:h-[460px]">
        <div className="absolute left-1/2 top-0 aspect-square w-[min(100vw,820px)] -translate-x-1/2 sm:w-[940px] lg:w-[1040px]">
          <Globe className="top-0" />
        </div>
      </div>
    </section>
  );
}

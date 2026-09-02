import { TrustLogosMarquee } from "@/components/campus/TrustLogosMarquee";

const IMPACT = [
  { value: "400+", label: "Learners" },
  { value: "30+", label: "Programs" },
  { value: "8+", label: "Industries" },
] as const;

export function EnterprisePartners() {
  return (
    <>
      <section className="border-t border-[#E8EAF4] bg-white px-4 pt-12 sm:px-6 sm:pt-14">
        <p className="text-center text-[11px] font-bold uppercase tracking-widest text-[#5B4CF5]">
          Diverse industries & geographies
        </p>
        <h2 className="mt-2 text-center font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl">
          Our Enterprise Partners
        </h2>
      </section>
      <TrustLogosMarquee heading={null} className="pt-10 sm:pt-12" />

      <section className="bg-[#F7F8FC] px-4 py-10 sm:px-6">
        <div className="mx-auto grid max-w-5xl grid-cols-3 divide-x divide-[#E8EAF4]">
          {IMPACT.map((item) => (
            <div key={item.label} className="px-4 text-center">
              <p className="font-display text-3xl font-extrabold text-[#0F1533] sm:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#5A607A] sm:text-xs">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

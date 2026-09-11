import { TrustLogosMarquee } from "@/components/campus/TrustLogosMarquee";

export function EnterprisePartners() {
  return (
    <>
      <section className="bg-white px-4 pt-12 sm:px-6 sm:pt-16">
        <p className="text-center text-[13px] font-semibold text-[#5A607A]">
          Teams across industries develop capability with Certcia
        </p>
      </section>
      <TrustLogosMarquee heading={null} className="pt-8 sm:pt-10" />
    </>
  );
}

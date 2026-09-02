import { Link } from "@tanstack/react-router";
import { ArrowRight, Mail, Phone } from "lucide-react";

export function EnterpriseBusinessBanner() {
  return (
    <section className="relative overflow-hidden bg-[#0F1533] px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
      <div className="pointer-events-none absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#5B4CF5]/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 bottom-0 h-56 w-56 rounded-full bg-[#4CD1B0]/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl text-center">
        <p className="text-[11px] font-bold uppercase tracking-widest text-[#4CD1B0]">
          Organizations partner with
        </p>
        <h2 className="mt-3 font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-white sm:text-4xl">
          Certcia for Business
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-white/70">
          Our team will help you pick the right plan for your workforce.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-medium text-white/75">
          <a href="mailto:hello@aicampus.io" className="inline-flex items-center gap-2 hover:text-white">
            <Mail className="h-4 w-4 text-[#4CD1B0]" />
            hello@aicampus.io
          </a>
          <a href="tel:+14155550142" className="inline-flex items-center gap-2 hover:text-white">
            <Phone className="h-4 w-4 text-[#4CD1B0]" />
            +1 (415) 555-0142
          </a>
        </div>
        <Link
          to="/contact"
          className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#5B4CF5] px-7 text-sm font-bold text-white hover:bg-[#4A3BE0]"
        >
          Talk to Us
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
}

import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Building2,
  GraduationCap,
  Mail,
  Phone,
  Sparkles,
  User,
  Users,
} from "lucide-react";
import { VAvatar } from "@/components/campus/VAvatar";

const PILLARS = [
  { icon: Users, title: "Cohort-based learning", description: "Live sessions + mentorship", bg: "bg-[#EDE9FF]", fg: "text-[#5B4CF5]" },
  { icon: Sparkles, title: "GenAI Academy", description: "Learn by doing at work", bg: "bg-[#E0F2FE]", fg: "text-[#0284C7]" },
  { icon: BookOpen, title: "One subscription", description: "AI, Data & Tech programs", bg: "bg-[#FEF3C7]", fg: "text-[#D97706]" },
  { icon: GraduationCap, title: "Custom solutions", description: "Built for your industry", bg: "bg-[#D1FAE5]", fg: "text-[#059669]" },
] as const;

export function EnterpriseHero() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="relative overflow-visible bg-[#EEEEF8] pb-6 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
        <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#5B4CF5]/10 blur-3xl" />
        <div className="pointer-events-none absolute right-10 top-20 h-80 w-80 rounded-full bg-[#4CD1B0]/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.07]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-6 lg:pb-6">
              <h1 className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem] xl:text-[3.15rem]">
                <span className="block">Build a future-ready</span>
                <span className="mt-1 block text-[#5B4CF5]">workforce.</span>
              </h1>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-[#5A607A] sm:text-lg">
                Empower your employees to upskill in AI, Data, and Tech through
                cohort-based learning that drives career and business growth.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#talk-to-us"
                  className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#5B4CF5] px-7 text-base font-bold text-white shadow-[0_8px_28px_-8px_rgba(91,76,245,0.55)] transition-all hover:bg-[#4A3BE0]"
                >
                  Get in touch
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </a>
                <a
                  href="#solutions"
                  className="inline-flex h-12 items-center rounded-full border border-[#D8D6EE] bg-white px-6 text-base font-semibold text-[#5A5872] hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5]"
                >
                  Explore solutions
                </a>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-[#5A607A]">
                <a href="mailto:hello@aicampus.io" className="inline-flex items-center gap-2 hover:text-[#5B4CF5]">
                  <Mail className="h-4 w-4 text-[#5B4CF5]" />
                  hello@aicampus.io
                </a>
                <a href="tel:+14155550142" className="inline-flex items-center gap-2 hover:text-[#5B4CF5]">
                  <Phone className="h-4 w-4 text-[#5B4CF5]" />
                  +1 (415) 555-0142
                </a>
              </div>
              <dl className="mt-8 flex max-w-md gap-8">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#5A607A]">Learners</dt>
                  <dd className="font-display text-2xl font-extrabold text-[#0F1533]">400+</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#5A607A]">Programs</dt>
                  <dd className="font-display text-2xl font-extrabold text-[#0F1533]">30+</dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-wider text-[#5A607A]">Industries</dt>
                  <dd className="font-display text-2xl font-extrabold text-[#0F1533]">8+</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-6">
              <form
                id="talk-to-us"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="scroll-mt-28 overflow-hidden rounded-2xl border border-[#E4E2F0] bg-white shadow-[0_20px_50px_-24px_rgba(15,21,51,0.22)]"
              >
                <div className="flex items-center gap-3.5 border-b border-[#EDE9FF] bg-[#F7F5FF] px-6 py-5">
                  <VAvatar
                    size="md"
                    className="shrink-0 rounded-full bg-[#0F1533] p-0.5 ring-2 ring-[#5B4CF5]/20"
                  />
                  <div>
                    <p className="font-display text-lg font-extrabold text-[#0F1533]">
                      Talk to our expert
                    </p>
                    <p className="mt-0.5 text-xs font-medium text-[#5A607A]">
                      20-minute fit call · reply in one business day
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  {sent ? (
                    <p className="text-sm font-medium text-[#5A607A]">
                      Thanks — we’ll reach out shortly.
                    </p>
                  ) : (
                    <div className="space-y-3.5">
                      <div className="grid grid-cols-2 gap-3">
                        <IconField icon={<User className="h-4 w-4" />} name="name" placeholder="Your name" required />
                        <IconField icon={<Building2 className="h-4 w-4" />} name="company" placeholder="Company" required />
                      </div>
                      <IconField icon={<Mail className="h-4 w-4" />} name="email" type="email" placeholder="Work email" required />
                      <IconField icon={<Phone className="h-4 w-4" />} name="phone" type="tel" placeholder="Phone" />
                      <label className="relative block">
                        <Briefcase className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA0B4]" />
                        <select
                          name="team"
                          defaultValue=""
                          required
                          className="h-12 w-full appearance-none rounded-xl border border-[#D8D6EE] bg-white pl-11 pr-4 text-sm text-[#0F1533] outline-none transition-colors focus:border-[#5B4CF5]/50 focus:ring-2 focus:ring-[#5B4CF5]/15"
                        >
                          <option value="" disabled>
                            Team size
                          </option>
                          <option value="1-50">1–50 people</option>
                          <option value="51-200">51–200 people</option>
                          <option value="200+">200+ people</option>
                        </select>
                      </label>
                      <button
                        type="submit"
                        className="group mt-1 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#5B4CF5] text-sm font-bold text-white shadow-[0_8px_28px_-8px_rgba(91,76,245,0.55)] hover:bg-[#4A3BE0]"
                      >
                        Request a callback
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                      </button>
                      <p className="text-center text-[11px] text-[#9AA0B4]">
                        No spam. We’ll only use this to plan your rollout.
                      </p>
                    </div>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0F1FA] px-4 pb-8 pt-0 sm:px-6 sm:pb-10">
        <div className="mx-auto max-w-7xl">
          <ul className="flex flex-col gap-5 rounded-2xl border border-[#E4E2F0] bg-white px-5 py-5 shadow-sm sm:px-8 sm:py-6 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
            {PILLARS.map(({ title, description, icon: Icon, bg, fg }, i) => (
              <li
                key={title}
                className={`flex flex-1 items-start gap-3.5 ${
                  i > 0 ? "lg:border-l lg:border-[#ECEAF8] lg:pl-6" : ""
                }`}
              >
                <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${bg} ${fg}`}>
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <span>
                  <span className="block text-sm font-semibold leading-tight text-[#0F1533]">{title}</span>
                  <span className="mt-1 block text-xs text-[#6B7280]">{description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

function IconField({
  icon,
  name,
  placeholder,
  type = "text",
  required,
}: {
  icon: ReactNode;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="relative block">
      <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-[#9AA0B4]">
        {icon}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-[#D8D6EE] bg-white pl-11 pr-4 text-sm text-[#0F1533] placeholder:text-[#9AA0B4] outline-none transition-colors focus:border-[#5B4CF5]/50 focus:ring-2 focus:ring-[#5B4CF5]/15"
      />
    </label>
  );
}

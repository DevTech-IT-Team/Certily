import { Reveal } from "@/components/campus/Reveal";
import { ArrowRight, Sparkles } from "lucide-react";

const DIAGNOSTICS = [
  {
    id: "01",
    title: "Business mechanics",
    description:
      "Strategy, operating model, value chain, growth priorities, critical workflows, customer promises, risk and compliance obligations.",
    inputs:
      "Leadership interviews, process maps, KPI review, transformation roadmap",
  },
  {
    id: "02",
    title: "People & culture",
    description:
      "Roles, workforce mix, manager expectations, learning habits, adoption barriers, change readiness, location and language needs.",
    inputs:
      "Focus groups, surveys, manager interviews, role architecture",
  },
  {
    id: "03",
    title: "Technology & data",
    description:
      "Current LMS/LXP, HR systems, SSO, collaboration tools, AI stack, workflow systems, data availability, reporting and security constraints.",
    inputs:
      "System inventory, platform analytics, integration and security review",
  },
  {
    id: "04",
    title: "Skills & future state",
    description:
      "Current proficiency, role-critical capabilities, emerging skills, succession needs, future job design and the capabilities required for the next stage of growth.",
    inputs:
      "Assessments, skill taxonomy, proficiency baselines, future-state workshops",
  },
];

const SOURCES = [
  "Stakeholder interviews",
  "Skills assessments",
  "Learning data",
  "Content inventory",
  "Vendor / spend review",
  "Role & workflow observation",
];

export function EnterpriseDiagnostic() {
  return (
    <section id="audit" className="relative scroll-mt-24 overflow-hidden bg-[#F8F9FE] px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      {/* Subtle Background Mesh */}
      <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-[#5B4CF5]/[0.03] blur-[100px]" />
      
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-16 grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div className="lg:pr-8">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/20 bg-[#5B4CF5]/10 px-3 py-1.5 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5B4CF5] animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#5B4CF5]">
                  Diagnostic First
                </span>
              </div>
              <h2 className="font-display text-3xl font-extrabold leading-[1.15] tracking-[-0.03em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem]">
                Before we recommend a single course, we learn how your organization actually works
              </h2>
            </div>
            <div className="lg:mt-14">
              <p className="max-w-lg text-[16px] leading-relaxed text-[#5A607A]">
                Generic content rarely solves a specific performance problem. Our
                discovery looks at the operating context around the learner - not
                just a list of requested topics.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {DIAGNOSTICS.map((item) => (
              <div
                key={item.id}
                className="relative flex overflow-hidden rounded-[32px] border border-gray-200/80 bg-white shadow-sm"
              >
                {/* Inner Card Container */}
                <div className="relative z-10 flex h-full w-full flex-col p-6 lg:p-8">
                  
                  <div className="mb-6 flex">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#5B4CF5]/5 text-[15px] font-black text-[#5B4CF5]">
                      {item.id}
                    </div>
                  </div>

                  <h3 className="mb-3 font-display text-[20px] font-extrabold leading-[1.2] text-[#0F1533]">
                    {item.title}
                  </h3>
                  
                  <p className="mb-8 flex-grow text-[14px] leading-relaxed text-[#5A607A]">
                    {item.description}
                  </p>

                  <div className="mt-auto border-t border-gray-100 pt-5">
                    <div className="mb-2 flex items-center gap-2">
                      <Sparkles className="h-3.5 w-3.5 text-[#5B4CF5]" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#5B4CF5]">
                        Key Inputs
                      </span>
                    </div>
                    <p className="text-[13px] font-medium leading-[1.6] text-[#5A607A]">
                      {item.inputs}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mx-auto mt-16 w-fit max-w-full overflow-hidden rounded-[32px] border border-[#5B4CF5]/10 bg-white p-2 shadow-[0_8px_30px_rgb(0,0,0,0.04)] lg:rounded-full">
            <div className="flex flex-col items-center gap-4 rounded-[28px] bg-gradient-to-r from-[#F8F9FE] to-white p-5 lg:flex-row lg:rounded-full lg:px-8 lg:py-4">
              <div className="flex shrink-0 items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#5B4CF5] to-[#7B6DF7] text-white shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10 9 9 9 8 9"/>
                  </svg>
                </div>
                <span className="whitespace-nowrap text-[15px] font-extrabold text-[#0F1533]">
                  Typical evidence sources
                </span>
              </div>
              
              <div className="hidden h-8 w-[2px] bg-gray-100 lg:block" />
              <div className="h-[2px] w-full bg-gray-100 lg:hidden" />
              
              <div className="flex flex-wrap justify-center gap-2">
                {SOURCES.map((source) => (
                  <span
                    key={source}
                    className="cursor-default whitespace-nowrap rounded-full border border-gray-200 bg-white px-5 py-2 text-[13px] font-medium text-[#5A607A] shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5B4CF5]/50 hover:text-[#5B4CF5] hover:shadow-md"
                  >
                    {source}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

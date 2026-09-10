import type { ReactNode } from "react";
import { ArrowRight, Target, Cpu, Lightbulb, Users, Heart, BookOpen } from "lucide-react";

export function EnterpriseHero() {
  return (
    <section className="relative overflow-visible bg-[#F8F9FE] pb-16 pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-32">
      {/* Background blurs */}
      <div className="pointer-events-none absolute left-1/4 top-0 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#5B4CF5]/10 blur-[100px]" />
      <div className="pointer-events-none absolute right-10 top-20 h-[25rem] w-[25rem] rounded-full bg-[#4CD1B0]/10 blur-[100px]" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.05]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Column: Text Content */}
          <div className="lg:pr-8 z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#5B4CF5]/10 px-3 py-1 mb-6 border border-[#5B4CF5]/20">
              <span className="flex h-2 w-2 rounded-full bg-[#5B4CF5] animate-pulse"></span>
              <h2 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
                Enterprise Learning Engineering
              </h2>
            </div>

            <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0F1533] sm:text-5xl lg:text-[3.25rem]">
              We don't sell training.
              <span className="block mt-2 bg-gradient-to-r from-[#5B4CF5] via-[#7B6DF7] to-[#4CD1B0] bg-clip-text text-transparent">
                We engineer workforce
              </span>
              <span className="block mt-2">capability.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#5A607A]">
              Every engagement starts inside your business: how work gets done today, where the
              organization is going next, and what people must be able to do to get there. We audit,
              map, design, build, operate and continuously improve the learning ecosystem around
              you.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#audit"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#0F1533] px-8 text-sm font-bold text-white shadow-[0_8px_28px_-8px_rgba(15,21,51,0.5)] transition-all hover:bg-[#5B4CF5] hover:-translate-y-0.5 hover:shadow-[0_8px_28px_-8px_rgba(91,76,245,0.55)]"
              >
                Start with a Capability Audit
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#model"
                className="inline-flex h-12 items-center rounded-full border border-[#D8D6EE] bg-white px-8 text-sm font-bold text-[#0F1533] shadow-sm transition-all hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5] hover:bg-slate-50"
              >
                See our 7-step model
              </a>
            </div>

            <div className="mt-12">
              <p className="text-[11px] font-semibold uppercase tracking-wider text-[#9AA0B4] mb-4">
                What makes us different
              </p>
              <div className="flex flex-wrap gap-2.5">
                {[
                  "No catalogue-first selling",
                  "Procurement-ready RFPs",
                  "Custom content + platform",
                  "Managed training operations",
                  "Scale workforce up or down",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full border border-[#D8D6EE]/80 bg-white/80 px-4 py-2 text-[12px] font-semibold text-[#5A607A] shadow-sm backdrop-blur-md transition-colors hover:border-[#5B4CF5]/30 hover:text-[#0F1533]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: The Model Graphic */}
          <div className="relative z-10 perspective-1000">
            <div className="relative w-full rounded-[2.5rem] bg-[#11142A] p-8 shadow-[0_40px_80px_-20px_rgba(11,14,33,0.5)] sm:p-10 overflow-hidden border border-white/5 group">
              {/* Animated Glow in background of card */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#5B4CF5]/10 via-transparent to-transparent opacity-50 transition-opacity duration-700 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="inline-block rounded-full bg-[#1C203B] border border-white/10 px-3.5 py-1.5 mb-5 backdrop-blur-md">
                  <h3 className="text-[9px] font-bold uppercase tracking-[0.15em] text-[#A5ACCE]">
                    The Certcia Enterprise Model
                  </h3>
                </div>
                <p className="text-3xl font-display font-bold leading-tight text-white max-w-sm drop-shadow-sm tracking-tight sm:text-[2rem] sm:leading-[1.1]">
                  Your business becomes the curriculum blueprint.
                </p>
              </div>

              {/* Graphic Diagram */}
              <div className="relative mt-12 flex h-[380px] w-full items-center justify-center">
                {/* SVG Connecting Lines with animated dashes */}
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 380">
                  <defs>
                    <radialGradient id="lineGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#5B4CF5" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#5B4CF5" stopOpacity="0.1" />
                    </radialGradient>
                    <style>
                      {`
                        @keyframes dash {
                          to {
                            stroke-dashoffset: -20;
                          }
                        }
                        .animated-line {
                          animation: dash 1.5s linear infinite;
                        }
                      `}
                    </style>
                  </defs>
                  {/* Center is 200, 190 */}
                  <g
                    stroke="url(#lineGrad)"
                    strokeWidth="1.5"
                    fill="none"
                    className="animated-line"
                    strokeDasharray="4 6"
                  >
                    <path d="M200 190 L200 60" /> {/* Top */}
                    <path d="M200 190 L320 130" /> {/* Top Right */}
                    <path d="M200 190 L320 250" /> {/* Bottom Right */}
                    <path d="M200 190 L200 320" /> {/* Bottom */}
                    <path d="M200 190 L80 250" /> {/* Bottom Left */}
                    <path d="M200 190 L80 130" /> {/* Top Left */}
                  </g>
                </svg>

                {/* Central Capability Blueprint Node */}
                <div className="relative z-20 flex h-[140px] w-[140px] items-center justify-center rounded-full transition-transform duration-500 hover:scale-105 group/center">
                  {/* Outer glow */}
                  <div className="absolute inset-0 rounded-full bg-[#5B4CF5] opacity-20 blur-xl transition-opacity group-hover/center:opacity-40" />
                  {/* Border ring */}
                  <div className="absolute inset-0 rounded-full border border-[#5B4CF5]/60 shadow-[0_0_30px_rgba(91,76,245,0.4)]" />
                  <div className="absolute inset-1 rounded-full border-[3px] border-[#20254A] bg-[#161A36]" />
                  {/* Inner text container */}
                  <div className="relative flex h-full w-full items-center justify-center rounded-full text-center">
                    <span className="relative font-display font-extrabold text-white text-[13px] leading-[1.3] tracking-widest">
                      CAPABILITY
                      <br />
                      <span className="text-[#A5ACCE] font-bold text-[11px]">BLUEPRINT</span>
                    </span>
                  </div>
                </div>

                {/* Surrounding Outer Nodes (Absolute Positioned via transforms) */}
                <DiagramNode
                  x={0}
                  y={-130}
                  icon={<Target className="w-3.5 h-3.5 text-[#4CD1B0]" />}
                  label="Business goals"
                />
                <DiagramNode
                  x={120}
                  y={-60}
                  icon={<Cpu className="w-3.5 h-3.5 text-[#5B4CF5]" />}
                  label="Technology"
                />
                <DiagramNode
                  x={120}
                  y={60}
                  icon={<Lightbulb className="w-3.5 h-3.5 text-[#F59E0B]" />}
                  label="Future skills"
                />
                <DiagramNode
                  x={0}
                  y={130}
                  icon={<Users className="w-3.5 h-3.5 text-[#EC4899]" />}
                  label="Workforce"
                />
                <DiagramNode
                  x={-120}
                  y={60}
                  icon={<Heart className="w-3.5 h-3.5 text-[#EF4444]" />}
                  label="Culture"
                />
                <DiagramNode
                  x={-120}
                  y={-60}
                  icon={<BookOpen className="w-3.5 h-3.5 text-[#3B82F6]" />}
                  label="Current skills"
                />
              </div>

              {/* Bottom Flow Sequence */}
              <div className="mt-14 relative pb-2 px-1">
                {/* Connection line behind pills */}
                <div className="absolute left-0 right-4 top-1/2 h-px -translate-y-1/2 bg-white/10" />
                <ArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />

                <div className="relative flex justify-between gap-1 sm:gap-2">
                  {["Audit", "Gap map", "RFP", "Build", "Run", "Optimize"].map((step) => (
                    <span
                      key={step}
                      className="relative z-10 flex h-7 items-center justify-center rounded-full bg-[#5849F5] px-3 sm:px-4 text-[9px] uppercase tracking-widest font-bold text-white shadow-[0_0_15px_rgba(88,73,245,0.5)] transition-all duration-300 hover:scale-105 cursor-default whitespace-nowrap"
                    >
                      {step}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DiagramNode({
  x,
  y,
  icon,
  label,
}: {
  x: number;
  y: number;
  icon: ReactNode;
  label: string;
}) {
  return (
    <div
      className="absolute left-1/2 top-1/2 z-10 flex items-center gap-2.5 rounded-full border border-white/5 bg-[#1C203B] px-4 py-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:scale-110 hover:border-[#5B4CF5]/40 hover:bg-[#20254A] cursor-default"
      style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
    >
      <div className="flex items-center justify-center opacity-90 drop-shadow-md">
        {icon}
      </div>
      <span className="text-[11px] font-bold text-[#E2E8F0] whitespace-nowrap tracking-wide">{label}</span>
    </div>
  );
}

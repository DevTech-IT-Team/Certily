import { Reveal } from "@/components/campus/Reveal";

export function ImplementationMap() {
  return (
    <section className="bg-[#F8F9FE] py-16 sm:py-24 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          {/* Header */}
          <div className="mb-12">
            <h4 className="mb-4 text-[12px] font-extrabold uppercase tracking-[0.2em] text-[#5B4CF5]">
              IMPLEMENTATION MAP - NOT CUSTOMER-FACING COPY
            </h4>
            <h2 className="font-display text-[32px] sm:text-[40px] font-bold leading-[1.1] tracking-tight text-[#0F1533] max-w-4xl">
              How to build this as a Rise-inspired web experience
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#5A607A] max-w-3xl leading-relaxed">
              Use the current Certcia navigation, typography rhythm, rounded cards and dark/lime accents. The interaction model should feel like Rise 360: stacked, scannable blocks with one clear action per section.
            </p>
          </div>

          {/* Two Columns (No Cards) */}
          <div className="flex flex-col lg:flex-row gap-16 mb-12 border-t border-gray-200 pt-12">
            
            {/* Left Column: Suggested block architecture */}
            <div className="lg:w-1/2">
              <h3 className="font-display text-xl font-bold text-[#0F1533] mb-6">
                Suggested block architecture
              </h3>
              <div className="flex flex-col gap-0 border-t border-gray-100">

                <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 gap-2 sm:gap-6">
                  <div className="w-28 text-[11px] font-extrabold uppercase tracking-widest text-[#5B4CF5] shrink-0">
                    HERO
                  </div>
                  <div className="text-[13.5px] text-[#5A607A]">
                    Statement + two CTAs + animated 'capability blueprint' visual.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 gap-2 sm:gap-6">
                  <div className="w-28 text-[11px] font-extrabold uppercase tracking-widest text-[#5B4CF5] shrink-0">
                    DIAGNOSTIC
                  </div>
                  <div className="text-[13.5px] text-[#5A607A]">
                    Four card grid, expand each card on click into evidence inputs.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 gap-2 sm:gap-6">
                  <div className="w-28 text-[11px] font-extrabold uppercase tracking-widest text-[#5B4CF5] shrink-0">
                    LIFECYCLE
                  </div>
                  <div className="text-[13.5px] text-[#5A607A]">
                    Rise 360 Process style 7-step interactive with next/back controls and one active step.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 gap-2 sm:gap-6">
                  <div className="w-28 text-[11px] font-extrabold uppercase tracking-widest text-[#5B4CF5] shrink-0">
                    AUDIT OUTPUTS
                  </div>
                  <div className="text-[13.5px] text-[#5A607A]">
                    Statement block + tabs for report, roadmap, roadmap and RFP library.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 gap-2 sm:gap-6">
                  <div className="w-28 text-[11px] font-extrabold uppercase tracking-widest text-[#5B4CF5] shrink-0">
                    CAPABILITIES
                  </div>
                  <div className="text-[13.5px] text-[#5A607A]">
                    Six card feature grid, each card opens service detail mini-case.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 gap-2 sm:gap-6">
                  <div className="w-28 text-[11px] font-extrabold uppercase tracking-widest text-[#5B4CF5] shrink-0">
                    COMMERCIAL
                  </div>
                  <div className="text-[13.5px] text-[#5A607A]">
                    Elastic volume visual + accordion for engagement models.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center py-4 border-b border-gray-100 gap-2 sm:gap-6">
                  <div className="w-28 text-[11px] font-extrabold uppercase tracking-widest text-[#5B4CF5] shrink-0">
                    MEASUREMENT
                  </div>
                  <div className="text-[13.5px] text-[#5A607A]">
                    Metric grid + final conversion CTA.
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Research principles incorporated */}
            <div className="lg:w-1/2 lg:border-l lg:border-gray-200 lg:pl-16">
              <h3 className="font-display text-xl font-bold text-[#0F1533] mb-6">
                Research principles incorporated
              </h3>
              <ul className="list-disc pl-5 space-y-4 text-[13.5px] text-[#5A607A] marker:text-gray-300">
                <li className="pl-1">
                  ISO 30422 frames workplace learning around both short-term operational needs and long-term skills aligned to organizational strategy.
                </li>
                <li className="pl-1">
                  2024 managed learning leaders separate strategy, content, learning administration, technology, sourcing and delivery rather than selling isolated courses.
                </li>
                <li className="pl-1">
                  Modern learning operations use scalable / variable capacity models and governance so internal L&D can focus on business capability rather than administration.
                </li>
                <li className="pl-1">
                  Rise 360 supports modular process, tabs, accordion, scenario and custom blocks; its current publishing supports common LMS standards and responsive delivery.
                </li>
                <li className="pl-1">
                  Accessibility and localization should be designed into enterprise content from the start, not treated as post-production extras.
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Alert/Note */}
          {/* <div className="bg-[#F4F6FF] border border-[#5B4CF5]/20 rounded-2xl p-6 sm:p-8">
            <p className="text-[13px] leading-relaxed text-[#0F1533]">
              <span className="font-bold">Recommended positioning line:</span> "Certcia is an enterprise learning engineering partner. We diagnose the business, design the capability system, build what is required, and operate it at the scale your workforce needs." Avoid "industrial training organization" as the primary headline because it can be read as manufacturing only; use <span className="font-bold">industry-specific enterprise learning</span> or <span className="font-bold">enterprise learning engineering</span> instead.
            </p>
          </div> */}

        </Reveal>
      </div>
    </section>
  );
}

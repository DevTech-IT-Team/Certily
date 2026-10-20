import { HOURS_BREAKDOWN, scheduleCopy } from "@/lib/journey";

export function HoursBreakdown({ compact = false }: { compact?: boolean }) {
  const schedule = scheduleCopy();
  return (
    <section aria-labelledby="hours-breakdown-title" className="rounded-3xl border border-[#E7E5F2] bg-white p-6 sm:p-8">
      <div className="max-w-2xl">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5B4CF5]">
          20 learning hours
        </p>
        <h2 id="hours-breakdown-title" className="mt-2 font-display text-2xl font-bold tracking-tight text-[#0F1533]">
          How the six weeks are spent
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-[#4B5168] sm:text-base">
          {schedule.plain} {schedule.live}
        </p>
      </div>

      <div
        className="mt-6 flex h-3 overflow-hidden rounded-full bg-[#F3F1FA]"
        role="img"
        aria-label="14 facilitator-led hours, 4 self-paced hours, and 2 project hours"
      >
        <div className="h-full bg-[#5B4CF5]" style={{ width: "70%" }} />
        <div className="h-full bg-[#8B7CF8]" style={{ width: "20%" }} />
        <div className="h-full bg-[#C4B5FD]" style={{ width: "10%" }} />
      </div>
      <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#4B5168]">
        <li className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#5B4CF5]" aria-hidden />
          Facilitator-led, 70%
        </li>
        <li className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#8B7CF8]" aria-hidden />
          Self-paced, 20%
        </li>
        <li className="flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-[#C4B5FD]" aria-hidden />
          Project, 10%
        </li>
      </ul>

      <ol className="mt-6 grid gap-4 md:grid-cols-3">
        {HOURS_BREAKDOWN.map((part, index) => (
          <li key={part.label} className="rounded-2xl bg-[#F7F6FC] p-4">
            <p className="text-xs font-bold uppercase tracking-wide text-[#5A607A]">
              Part {index + 1}
            </p>
            <p className="mt-1 font-display text-lg font-bold text-[#0F1533]">
              {part.hours} hours
            </p>
            <p className="text-sm font-semibold text-[#1C1D1F]">{part.label}</p>
            {compact ? null : (
              <p className="mt-2 text-sm leading-relaxed text-[#4B5168]">{part.detail}</p>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

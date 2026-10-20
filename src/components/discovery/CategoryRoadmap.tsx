import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useCurrency } from "@/lib/CurrencyContext";
import { courseByCode, getJourney, type CatalogBandId } from "@/lib/journey";
import { cn } from "@/lib/utils";

type CategoryRoadmapProps = {
  bandId: CatalogBandId;
  selectedCodes?: string[];
  onToggle?: (code: string) => void;
};

export function CategoryRoadmap({ bandId, selectedCodes = [], onToggle }: CategoryRoadmapProps) {
  const journey = getJourney(bandId);
  const { formatPrice } = useCurrency();
  const sequence = journey.stages.flatMap((stage) => stage.codes.map((code) => ({ code, mode: stage.mode })));
  const [index, setIndex] = useState(0);
  const current = sequence[index];
  const active = current ? courseByCode(current.code) : undefined;
  const selected = active ? selectedCodes.includes(active.code) : false;
  const prev = sequence[(index - 1 + sequence.length) % sequence.length];
  const next = sequence[(index + 1) % sequence.length];

  return (
    <div>
      <div className="mx-auto flex max-w-5xl items-center justify-center gap-3 sm:gap-6">
        {[prev, current, next].map((item, slot) => {
          if (!item) return null;
          const course = courseByCode(item.code);
          if (!course) return null;
          const center = slot === 1;
          return (
            <button
              key={`${item.code}-${slot}`}
              type="button"
              onClick={() => setIndex(sequence.findIndex((entry) => entry.code === item.code))}
              className={cn(
                "overflow-hidden rounded-[1.6rem] border border-[#E7E1D6] bg-white shadow-sm transition duration-500",
                center ? "w-[68%] sm:w-[58%]" : "hidden w-[18%] opacity-50 sm:block",
              )}
            >
              <img src={course.image} alt="" className={cn("w-full object-cover", center ? "h-[320px] sm:h-[420px]" : "h-[220px] sm:h-[280px]")} />
            </button>
          );
        })}
      </div>

      {active ? (
        <div className="mx-auto mt-8 max-w-xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#6B6578]">
            {active.code}
            {current?.mode === "choice" ? " · pick one" : current?.mode === "optional" ? " · optional" : ""}
            {" · "}
            {active.audience}
          </p>
          <h2 className="mt-3 font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl">{active.title}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-[#5C5766]">{active.description}</p>
          <p className="mt-3 text-sm text-[#1C1D1F]">{active.artifact}</p>
          <p className="mt-5 text-sm text-[#6B6578]">20 hours · 6 weeks · {formatPrice(active.price)}</p>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-pressed={selected}
              onClick={() => onToggle?.(active.code)}
              className="rounded-full bg-[#1C1D1F] px-5 py-2.5 text-sm font-semibold text-white"
            >
              {selected ? "Added" : "Add this class"}
            </button>
            <Link to="/course/$courseId" params={{ courseId: active.id }} className="text-sm font-medium text-[#5B4CF5]">
              Details
            </Link>
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {sequence.map((item, itemIndex) => (
              <button
                key={item.code}
                type="button"
                aria-label={item.code}
                onClick={() => setIndex(itemIndex)}
                className={cn("h-1.5 rounded-full transition-all", itemIndex === index ? "w-8 bg-[#1C1D1F]" : "w-2 bg-[#1C1D1F]/25")}
              />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

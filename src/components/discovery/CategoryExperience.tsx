import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { CategoryRoadmap } from "@/components/discovery/CategoryRoadmap";
import { useCurrency } from "@/lib/CurrencyContext";
import {
  asCatalogBand,
  coursesByCodes,
  quoteCourses,
  readDraft,
  toggleCode,
  writeDraft,
} from "@/lib/journey";
import { getPathwayLevel, type PathwayLevelId } from "@/lib/pathways";

export function CategoryExperience({ levelId: rawLevelId }: { levelId: PathwayLevelId }) {
  const levelId = asCatalogBand(rawLevelId) ?? "pre-elementary";
  const level = getPathwayLevel(levelId);
  const navigate = useNavigate();
  const { formatAmount } = useCurrency();
  const [codes, setCodes] = useState<string[]>([]);
  const quote = useMemo(() => quoteCourses(coursesByCodes(codes)), [codes]);

  useEffect(() => {
    setCodes(readDraft().codes);
  }, [levelId]);

  const updateCodes = (next: string[]) => {
    setCodes(next);
    const draft = readDraft();
    writeDraft({ ...draft, codes: next, bandId: levelId });
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#EEEEF8] pb-28 pt-28 text-[#0F1533]">
      <div className="pointer-events-none absolute left-10 top-24 h-72 w-72 rounded-full bg-[#5B4CF5]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-40 h-64 w-64 rounded-full bg-[#4CD1B0]/15 blur-3xl" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <Link to="/learning" className="text-sm font-semibold text-[#5B4CF5]">
              All levels
            </Link>
            <h1 className="mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{level.label}</h1>
          </div>
          <p className="text-sm font-medium text-[#5A607A]">{level.subLabel}</p>
        </div>

        <div className="mt-8">
          <CategoryRoadmap
            bandId={levelId}
            selectedCodes={codes}
            onToggle={(code) => updateCodes(toggleCode(codes, code))}
          />
        </div>
      </div>

      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-[#E7E1D6] bg-white/90 px-4 py-3 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3">
          <p className="text-sm text-[#1C1D1F]">
            <span className="font-semibold">{codes.length}</span> added
            {quote.price > 0 ? <span className="text-[#5C5766]"> · {formatAmount(quote.price)}</span> : null}
          </p>
          <button
            type="button"
            disabled={codes.length === 0}
            onClick={() =>
              navigate({
                to: "/learning/select",
                search: { band: levelId, codes: codes.join(","), step: "review" },
              })
            }
            className="rounded-full bg-[#5B4CF5] px-5 py-2.5 text-sm font-bold text-white disabled:bg-[#C9C4E8]"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

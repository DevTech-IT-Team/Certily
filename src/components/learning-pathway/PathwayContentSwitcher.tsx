import { type PathwayLevelId, PATHWAY_LEVELS } from "@/lib/pathways";
import { PremiumPathwayView } from "./PremiumPathwayView";

type PathwayContentSwitcherProps = {
  activeLevel: PathwayLevelId | "all";
};

export function PathwayContentSwitcher({
  activeLevel,
}: PathwayContentSwitcherProps) {
  if (activeLevel === "all") {
    return (
      <div id="dedicated-pathway-view" className="space-y-16">
        {PATHWAY_LEVELS.map((level) => (
          <div key={level.id} id={`pathway-section-${level.id}`} className="scroll-mt-24">
            <PremiumPathwayView levelId={level.id} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div id="dedicated-pathway-view" className="scroll-mt-24">
      <PremiumPathwayView levelId={activeLevel} />
    </div>
  );
}

import { type PathwayLevelId, PATHWAY_LEVELS } from "@/lib/pathways";
import { PremiumPathwayView } from "./PremiumPathwayView";
import { ElementaryView } from "./ElementaryView";

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

  if (activeLevel === "elementary") {
    return (
      <div id="dedicated-pathway-view" className="scroll-mt-24">
        <ElementaryView />
      </div>
    );
  }

  return (
    <div id="dedicated-pathway-view" className="scroll-mt-24">
      <PremiumPathwayView levelId={activeLevel} />
    </div>
  );
}

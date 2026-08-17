import { useState } from "react";
import { type PathwayLevelId } from "@/lib/pathways";
import { PathwayContentSwitcher } from "@/components/learning-pathway/PathwayContentSwitcher";
import { LearningPathwayFlow } from "@/components/learning-pathway/LearningPathwayFlow";

export function InteractivePathwaySection() {
  const [activeLevel, setActiveLevel] = useState<PathwayLevelId | "all">("k2");

  return (
    <section id="pathways-interactive" className="relative py-8 sm:py-12 bg-gradient-to-b from-[#F3F2FF] via-[#F7F8FC] to-[#F0F2F8] overflow-hidden">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[400px] w-[400px] rounded-full bg-purple-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 sm:px-6 space-y-7">
        {/* ── 1. INTERACTIVE LEARNING PATHWAY FLOW MAP ───────────────────────── */}
        <LearningPathwayFlow activeLevel={activeLevel} onSelectLevel={setActiveLevel} />

        {/* ── 2. PATHWAY VIEW CONTENT (K-2, Elementary, Middle, etc.) ─────────── */}
        <PathwayContentSwitcher activeLevel={activeLevel} />
      </div>
    </section>
  );
}



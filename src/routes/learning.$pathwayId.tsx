import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect } from "react";
import { type PathwayLevelId } from "@/lib/pathways";
import { PathwayContentSwitcher } from "@/components/learning-pathway/PathwayContentSwitcher";

export const Route = createFileRoute("/learning/$pathwayId")({
  head: () => ({
    meta: [
      { title: "Learning Pathway — Certcia AI Campus" },
    ],
  }),
  component: LearningPathwayPage,
});

function LearningPathwayPage() {
  const { pathwayId } = Route.useParams();
  const navigate = Route.useNavigate();

  // Validate the pathwayId
  const isValidLevel = [
    "k2",
    "elementary",
    "middle-school",
    "high-school",
    "college",
    "career",
    "professional",
  ].includes(pathwayId);
  
  // Map banner ids like "middle-school" to exact PathwayLevelId if they differ
  // PathwayLevelId expects "middle" and "high", but banners have "middle-school", "high-school"
  // Let's normalize it to match what PathwayLevelId expects
  const normalizedLevel = (
    pathwayId === "middle-school" ? "middle" : 
    pathwayId === "high-school" ? "high" : 
    pathwayId
  ) as PathwayLevelId | "all";

  const handleSelect = useCallback(
    (id: string) => {
      // Map back internal ids to route ids if needed
      const routeId = id === "middle" ? "middle-school" : id === "high" ? "high-school" : id;
      navigate({ to: `/learning/${routeId}`, replace: true });
    },
    [navigate]
  );

  useEffect(() => {
    // If they manually navigate to an invalid level, redirect to learning index
    if (!isValidLevel && typeof window !== "undefined") {
      navigate({ to: "/learning", replace: true });
    }
  }, [isValidLevel, navigate]);

  if (!isValidLevel) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F2FF] via-[#F7F8FC] to-[#F0F2F8] pt-16 pb-16 relative overflow-hidden">
      {/* Subtle background ambient glow spots */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-purple-200/20 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-96 h-[500px] w-[500px] rounded-full bg-pink-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pt-3 sm:px-6 space-y-7">
        {/* ── PATHWAY CONTENT VIEW SWITCHER ───────────────────────── */}
        <PathwayContentSwitcher activeLevel={normalizedLevel} />
      </div>
    </div>
  );
}

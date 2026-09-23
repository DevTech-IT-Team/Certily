import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { normalizePathwayParam } from "@/lib/pathways";
import { PathwayContentSwitcher } from "@/components/learning-pathway/PathwayContentSwitcher";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/learning/$pathwayId")({
  head: () =>
    pageHead({
      title: "Learning Pathway",
      path: "/learning",
    }),
  component: LearningPathwayPage,
});

function LearningPathwayPage() {
  const { pathwayId } = Route.useParams();
  const navigate = Route.useNavigate();
  const normalizedLevel = normalizePathwayParam(pathwayId);

  useEffect(() => {
    if (!normalizedLevel && typeof window !== "undefined") {
      navigate({ to: "/learning", replace: true });
    }
  }, [normalizedLevel, navigate]);

  if (!normalizedLevel) return null;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F2FF] via-[#F7F8FC] to-[#F0F2F8] pt-16 pb-16 relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-purple-200/20 blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-96 h-[500px] w-[500px] rounded-full bg-pink-200/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-4 pt-3 sm:px-6 space-y-7">
        <PathwayContentSwitcher activeLevel={normalizedLevel} />
      </div>
    </div>
  );
}

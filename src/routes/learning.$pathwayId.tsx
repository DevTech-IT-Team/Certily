import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { CategoryExperience } from "@/components/discovery/CategoryExperience";
import { getPathwayLevel, normalizePathwayParam } from "@/lib/pathways";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/learning/$pathwayId")({
  head: ({ params }) => {
    const level = normalizePathwayParam(params.pathwayId);
    const label = level ? getPathwayLevel(level).label : "Learning pathway";
    return pageHead({
      title: `${label} pathway`,
      description: level
        ? `${getPathwayLevel(level).description} Five certifications, each 20 learning hours.`
        : "Choose a Certcia learning pathway.",
      path: `/learning/${params.pathwayId}`,
    });
  },
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

  return <CategoryExperience levelId={normalizedLevel} />;
}

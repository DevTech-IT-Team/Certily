import { createFileRoute } from "@tanstack/react-router";
import { DiscoveryLanding } from "@/components/discovery/DiscoveryLanding";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/learning/")({
  head: () =>
    pageHead({
      title: "Find a Learning Pathway",
      description:
        "Choose a learner category, explore five certifications on a guided route, and compare a single certification with a longer pathway.",
      path: "/learning",
    }),
  component: LearningIndex,
});

function LearningIndex() {
  return <DiscoveryLanding />;
}

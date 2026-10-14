import { createFileRoute } from "@tanstack/react-router";
import { PathwayBannersSection } from "@/components/campus/PathwayBannersSection";
import { useEffect } from "react";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/learning/")({
  head: () =>
    pageHead({
      title: "Learning Pathways — 30 Stackable Certifications",
      description:
        "Browse Pre-elementary, Elementary, Middle School, High School, College & Universities, and Professional AI certification tracks. 30 courses, 20 hours each, 4 modules per outcome.",
      path: "/learning",
    }),
  component: LearningIndex,
});

function LearningIndex() {
  useEffect(() => {
    // Scroll to top when this page loads so user sees the banner header
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  
  return (
    <div className="min-h-screen bg-white">
      <PathwayBannersSection />
    </div>
  );
}

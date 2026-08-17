import { createFileRoute } from "@tanstack/react-router";
import { PathwayBannersSection } from "@/components/campus/PathwayBannersSection";
import { useEffect } from "react";

export const Route = createFileRoute("/learning/")({
  head: () => ({
    meta: [
      { title: "Learning Pathways — Certcia AI Campus" },
      {
        name: "description",
        content:
          "Browse K–12, Elementary, Middle School, High School, College, Career, and Professional certification pathways with clear outcomes.",
      },
    ],
  }),
  component: LearningIndex,
});

function LearningIndex() {
  useEffect(() => {
    // Scroll to top when this page loads so user sees the banner header
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F2FF] via-[#F7F8FC] to-[#F0F2F8] pt-4 relative overflow-hidden">
      {/* Subtle background ambient glow spots */}
      <div className="pointer-events-none absolute left-1/4 top-10 h-[500px] w-[500px] rounded-full bg-[#5B4CF5]/[0.05] blur-3xl" />
      <div className="pointer-events-none absolute right-1/4 top-96 h-[500px] w-[500px] rounded-full bg-[#4CD1B0]/[0.05] blur-3xl" />
      
      <div className="relative z-10 pt-10">
        <PathwayBannersSection />
      </div>
    </div>
  );
}

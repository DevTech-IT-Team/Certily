import { createFileRoute } from "@tanstack/react-router";
import { Award, ExternalLink, Linkedin, Share2, ShieldCheck } from "lucide-react";
import { EnrollGate } from "@/components/campus/EnrollGate";
import { CampusBuildingHeader } from "@/components/campus/CampusBuildingHeader";
import { Section } from "@/components/Section";
import { canAccessBuilding } from "@/lib/enrollment";

export const Route = createFileRoute("/certification-hall")({
  head: () => ({
    meta: [{ title: "AI Certification Hall — Certily AI Campus" }],
  }),
  component: CertificationHallPage,
});

const CERTIFICATES = [
  {
    title: "AI Fundamentals for Young Learners",
    issued: "Mar 12, 2026",
    verifyId: "CERT-2026-AI-0142",
    badge: "Certified AI Explorer",
  },
  {
    title: "College AI Essentials",
    issued: "In progress",
    verifyId: "—",
    badge: "Capstone pending",
  },
];

function CertificationHallPage() {
  if (!canAccessBuilding("enrolled")) {
    return (
      <EnrollGate
        route="/certification-hall"
        buildingName="AI Certification Hall"
        description="Earn, verify, and share certificates after completing pathways and capstone projects."
        illyMessage="Complete your pathway and I'll help you celebrate — shareable credentials for college and career!"
      />
    );
  }

  return (
    <>
      <CampusBuildingHeader route="/certification-hall" />
      <Section spacing="tight" className="!pt-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="rounded-2xl border border-primary/15 bg-[#F8F7FF] p-5">
            <p className="text-sm font-semibold text-foreground">Your credential repository</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Earn certificates after course completion, assessments, and capstone projects. Verify
              and share with colleges, parents, and employers.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {CERTIFICATES.map((cert) => (
              <article
                key={cert.title}
                className="overflow-hidden rounded-2xl border border-border/70 bg-white shadow-sm"
              >
                <div className="bg-gradient-to-r from-[#7B6CFF] to-[#B8ABFF] px-5 py-4 text-white">
                  <div className="flex items-center gap-2">
                    <Award className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">Certily</span>
                  </div>
                  <p className="mt-3 text-sm font-bold">{cert.badge}</p>
                  <p className="mt-1 text-xs text-white/85">{cert.title}</p>
                </div>
                <div className="p-5">
                  <p className="text-xs text-muted-foreground">Issued: {cert.issued}</p>
                  <p className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#4CD1B0]" />
                    Verify: {cert.verifyId}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
                    >
                      <Share2 className="h-3.5 w-3.5" />
                      Share
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      LinkedIn
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-xs font-semibold text-foreground hover:bg-muted"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Verify link
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}

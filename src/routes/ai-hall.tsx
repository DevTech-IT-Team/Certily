import { createFileRoute } from "@tanstack/react-router";
import {
  Zap,
  Gamepad2,
  Calendar,
  Trophy,
  Users,
  Wrench,
  Radio,
} from "lucide-react";
import { CampusBuildingHeader } from "@/components/campus/CampusBuildingHeader";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/ai-hall")({
  head: () => ({
    meta: [
      { title: "AI Hall — Certily AI Campus" },
      {
        name: "description",
        content:
          "Free AI activities, mini-projects, demos, quiz challenges, and community events at Certily AI Campus.",
      },
    ],
  }),
  component: AIHallPage,
});

const ACTIVITIES = [
  {
    icon: Zap,
    title: "AI mini-projects",
    description: "Short guided builds to explore tools and concepts without full enrollment.",
  },
  {
    icon: Gamepad2,
    title: "Game creation workshops",
    description: "Create simple AI-powered games and share with the community.",
  },
  {
    icon: Calendar,
    title: "Webinars & live events",
    description: "Parent sessions, student showcases, and industry guest talks.",
  },
  {
    icon: Trophy,
    title: "Quiz challenges & hackathons",
    description: "Low-ticket competitions and practice experiences to build confidence.",
  },
  {
    icon: Wrench,
    title: "AI tool exploration",
    description: "Standalone demos and sandbox activities to try new AI tools safely.",
  },
  {
    icon: Radio,
    title: "Student competitions",
    description: "Mini hackathons and showcase events — public engagement before enrollment.",
  },
];

const SUBSCRIPTION_BENEFITS = [
  "Live events & webinars",
  "Hackathons & challenges",
  "AI Hall enrichment activities",
  "Member discounts on full pathways",
  "Parent/student community sessions",
];

function AIHallPage() {
  return (
    <div className="min-h-[50vh] bg-[#F5F6FA]/40">
      <CampusBuildingHeader route="/ai-hall" />
      <Section spacing="tight" title="Public AI engagement" align="center" className="!pt-6">
        <p className="mx-auto -mt-4 max-w-2xl text-center text-sm text-muted-foreground">
          AI Hall is open to everyone — explore activities, demos, and events before you enroll.
          Capstone projects in AI Lab remain gated for enrolled students.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-white p-5 shadow-sm transition-shadow hover:shadow-elegant"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <h2 className="mt-3 text-base font-bold">{title}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#4CD1B0]/25 bg-[#F4FDF9] p-5 sm:p-6">
          <div className="flex items-center gap-2">
            <Users className="h-5 w-5 text-[#4CD1B0]" />
            <h3 className="text-base font-bold text-foreground">Membership enrichment (coming)</h3>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            Future subscription model for engagement benefits — not free access to all full courses.
          </p>
          <ul className="mt-3 flex flex-wrap gap-2">
            {SUBSCRIPTION_BENEFITS.map((b) => (
              <li
                key={b}
                className="rounded-full border border-border/80 bg-white px-3 py-1 text-xs text-foreground/80"
              >
                {b}
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </div>
  );
}

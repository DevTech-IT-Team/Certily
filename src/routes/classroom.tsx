import { createFileRoute } from "@tanstack/react-router";
import { BookOpen, CheckCircle2, MessageSquare, PlayCircle, FileText } from "lucide-react";
import { EnrollGate } from "@/components/campus/EnrollGate";
import { CampusBuildingHeader } from "@/components/campus/CampusBuildingHeader";
import { Section } from "@/components/Section";
import { canAccessBuilding } from "@/lib/enrollment";

export const Route = createFileRoute("/classroom")({
  head: () => ({
    meta: [{ title: "My Classroom — Certily AI Campus" }],
  }),
  component: ClassroomPage,
});

const ENROLLED_COURSES = [
  {
    title: "AI Fundamentals for Young Learners",
    progress: 68,
    next: "Knowledge check: Prompt safety",
    lessons: 24,
    due: "Quiz due Friday",
  },
  {
    title: "College AI Essentials",
    progress: 34,
    next: "Video nugget: Building with LLMs",
    lessons: 32,
    due: "Assignment in 3 days",
  },
];

function ClassroomPage() {
  if (!canAccessBuilding("enrolled")) {
    return (
      <EnrollGate
        route="/classroom"
        buildingName="My Classroom"
        description="Your guided learning environment — lessons, assignments, quizzes, and resources."
        illyMessage="Once you're enrolled, I'll walk you through every lesson and keep you on track with reminders!"
      />
    );
  }

  return (
    <>
      <CampusBuildingHeader route="/classroom" />
      <Section spacing="tight" className="!pt-6">
        <div className="mx-auto max-w-6xl space-y-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: PlayCircle, label: "Video lessons", value: "56" },
              { icon: FileText, label: "Learning nuggets", value: "128" },
              { icon: CheckCircle2, label: "Knowledge checks", value: "12 pending" },
              { icon: MessageSquare, label: "Discussions", value: "3 new" },
            ].map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-2xl border border-border/70 bg-white p-4 shadow-sm"
              >
                <Icon className="h-5 w-5 text-primary" />
                <p className="mt-3 text-2xl font-bold text-foreground">{value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{label}</p>
              </div>
            ))}
          </div>

          <div>
            <h2 className="text-lg font-bold text-foreground">Enrolled courses</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Short Illy-led nuggets, resources, assignments, and quizzes — not a generic LMS page.
            </p>
            <div className="mt-4 grid gap-4 lg:grid-cols-2">
              {ENROLLED_COURSES.map((course) => (
                <article
                  key={course.title}
                  className="rounded-2xl border border-border/70 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-primary">
                      <BookOpen className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold text-foreground">{course.title}</h3>
                      <p className="mt-1 text-xs text-muted-foreground">{course.next}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{course.lessons} lessons</span>
                      <span>{course.progress}% complete</span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-brand-gradient"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>
                    <p className="mt-2 text-xs font-medium text-primary">{course.due}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

import { Link } from "@tanstack/react-router";
import { Lock, Unlock } from "lucide-react";
import { AI_HALL, ENROLLED_AREAS, PUBLIC_AREAS } from "@/lib/campus";
import { useEnrollment } from "@/lib/enrollment";
import { cn } from "@/lib/utils";

const PUBLIC_WITH_HALL = [...PUBLIC_AREAS, AI_HALL];

function AreaCard({
  name,
  tagline,
  route,
  locked,
  enrolled,
}: {
  name: string;
  tagline: string;
  route: string;
  locked?: boolean;
  enrolled?: boolean;
}) {
  const showLock = locked && !enrolled;

  return (
    <Link
      to={route}
      className={cn(
        "group flex flex-col rounded-2xl border bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:p-5",
        showLock ? "border-border/70" : "border-primary/20 hover:border-primary/35"
      )}
    >
      <div className="flex items-start justify-between gap-2">
        <p className="text-sm font-bold text-foreground group-hover:text-primary">{name}</p>
        {showLock ? (
          <Lock className="h-4 w-4 shrink-0 text-muted-foreground" aria-label="Enrolled students only" />
        ) : (
          <Unlock className="h-4 w-4 shrink-0 text-[#4CD1B0]" aria-label="Open to all visitors" />
        )}
      </div>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{tagline}</p>
      <p className="mt-3 text-[11px] font-semibold text-primary">
        {showLock ? "Enroll to unlock →" : "Explore →"}
      </p>
    </Link>
  );
}

export function CampusAccessSection() {
  const { enrolled, toggleDemoEnrolled } = useEnrollment();

  return (
    <section
      id="campus-access"
      data-illy-section="campus-access"
      className="border-t border-border/60 bg-white py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-[2.5rem]">
            Explore the Campus
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Two types of spaces — open for everyone, and unlocked when you enroll.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <div className="rounded-3xl border border-[#4CD1B0]/25 bg-[#F4FDF9] p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Unlock className="h-4 w-4 text-[#4CD1B0]" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#0F1533]">
                Public Access
              </p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Browse pathways, read the Newsroom, and try AI Hall activities before you enroll.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {PUBLIC_WITH_HALL.map((area) => (
                <AreaCard
                  key={area.id}
                  name={area.name}
                  tagline={area.tagline}
                  route={area.route}
                  enrolled={enrolled}
                />
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-primary/20 bg-[#F8F7FF] p-5 sm:p-6">
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-primary" />
              <p className="text-xs font-bold uppercase tracking-wider text-[#0F1533]">
                Enrolled Students
              </p>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              My Classroom, AI Lab, AI Certification Hall, and Mission Control open for students and
              parents once enrolled.
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {ENROLLED_AREAS.map((area) => (
                <AreaCard
                  key={area.id}
                  name={area.name}
                  tagline={area.tagline}
                  route={area.route}
                  locked
                  enrolled={enrolled}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/courses"
            className="inline-flex h-10 items-center rounded-full bg-foreground px-6 text-sm font-semibold text-white"
          >
            Browse learning pathways
          </Link>
          <button
            type="button"
            onClick={toggleDemoEnrolled}
            className="inline-flex h-10 items-center rounded-full border border-border bg-white px-5 text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            {enrolled ? "Exit preview mode" : "Preview enrolled areas"}
          </button>
        </div>
      </div>
    </section>
  );
}

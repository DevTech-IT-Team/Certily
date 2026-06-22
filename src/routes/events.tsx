import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Users, ArrowRight, CalendarDays } from "lucide-react";
import { PageHero, Section } from "@/components/Section";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — AI Campus" },
      { name: "description", content: "Live workshops, AMAs, hackathons, and the AI Campus Summit." },
    ],
  }),
  component: Events,
});

const EVENTS = [
  {
    t: "AI Campus Summit 2026",
    date: "Sep 18 – 20",
    loc: "San Francisco · Hybrid",
    tag: "Conference",
    seats: 1200,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80&auto=format&fit=crop",
    blurb: "Keynotes, labs, and hallway tracks with builders from frontier labs and indie teams.",
  },
  {
    t: "Hands-on: Fine-tuning Llama 3",
    date: "Jun 04 · 6 PM",
    loc: "Online",
    tag: "Workshop",
    seats: 300,
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80&auto=format&fit=crop",
    blurb: "Walk through adapters, eval harnesses, and safe defaults in a live notebook.",
  },
  {
    t: "AMA with Dr. Lina Park (DeepMind)",
    date: "Jun 11 · 7 PM",
    loc: "Online",
    tag: "AMA",
    seats: 800,
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80&auto=format&fit=crop",
    blurb: "Research directions, hiring, and what actually ships in production RL.",
  },
  {
    t: "Global Hackathon: Build with Agents",
    date: "Jul 02 – 04",
    loc: "Online · Worldwide",
    tag: "Hackathon",
    seats: 5000,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80&auto=format&fit=crop",
    blurb: "48-hour sprint with mentors, GPU credits, and demo day bounties.",
  },
  {
    t: "Enterprise AI Roundtable",
    date: "Jul 22 · 4 PM",
    loc: "London",
    tag: "Roundtable",
    seats: 60,
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80&auto=format&fit=crop",
    blurb: "Closed-door session for leaders rolling out AI literacy at scale.",
  },
  {
    t: "Research Reading Group: Mamba",
    date: "Aug 08 · 5 PM",
    loc: "Online",
    tag: "Study Group",
    seats: 200,
    img: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80&auto=format&fit=crop",
    blurb: "Paper walkthrough + office hours with the course staff.",
  },
] as const;

function EventImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] ${className}`}
      loading="lazy"
      decoding="async"
    />
  );
}

function Events() {
  return (
    <>
      <PageHero
        className="pb-5 md:pb-6"
        title={
          <>
            Where the <span className="gradient-text">AI community</span> meets
          </>
        }
        description="Live cohorts, hackathons, AMAs, and the flagship AI Campus Summit — on campus and around the world."
      />

      <div className="relative border-t border-border/60 bg-muted/35 dark:border-white/10 dark:bg-muted/10">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-[0.4] dark:opacity-15" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-10" />

        <Section spacing="tight" className="relative z-[1] !py-8 md:!py-10">
          <div className="mx-auto mb-6 flex max-w-6xl flex-col gap-2 rounded-xl border border-border/70 bg-background/85 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-card/50 sm:flex-row sm:items-center sm:justify-between md:px-5">
            <div className="flex items-center gap-2.5 text-foreground">
              <CalendarDays className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Events calendar
                </p>
                <p className="text-sm font-semibold">Summer–Fall 2026 · hybrid & online</p>
              </div>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-right">
              RSVP from your dashboard. Summit passes include lab credits; workshops are first-come.
            </p>
          </div>

          <div className="mx-auto max-w-6xl">
            <div className="mb-4 flex items-end justify-between gap-3 border-b border-border/60 pb-3 dark:border-white/10">
              <h2 className="font-display text-lg font-bold tracking-tight md:text-xl">All sessions</h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Open RSVP</span>
            </div>
            <ul className="grid list-none grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 lg:items-stretch">
              {EVENTS.map((e) => (
                <li key={e.t} className="flex min-h-0">
                  <a
                    href="https://lmsathena.com/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex min-h-0 w-full flex-1 flex-col overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm transition hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md dark:border-white/10 dark:bg-card/55"
                  >
                    <div className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted">
                      <EventImage src={e.img} alt={e.t} className="absolute inset-0" />
                      <div className="absolute left-3 top-3 rounded-md bg-background/90 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-foreground shadow-sm backdrop-blur-sm dark:bg-zinc-950/85 dark:text-zinc-100">
                        {e.tag}
                      </div>
                    </div>
                    <div className="flex min-h-0 flex-1 flex-col p-4">
                      <h3 className="font-display text-base font-semibold leading-snug text-foreground group-hover:text-primary">
                        {e.t}
                      </h3>
                      <p className="mt-2 min-h-[4.5rem] flex-1 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                        {e.blurb}
                      </p>
                      <div className="mt-3 space-y-1.5 text-xs text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                          {e.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                          {e.loc}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden />
                          {e.seats.toLocaleString()} seats
                        </div>
                      </div>
                      <span className="mt-auto inline-flex items-center gap-1 border-t border-border/50 pt-4 text-sm font-semibold text-primary dark:border-white/10">
                        Reserve seat
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                      </span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Section>
      </div>
    </>
  );
}

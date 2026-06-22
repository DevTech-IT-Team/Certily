import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calendar,
  MessageCircle,
  Quote,
  Sparkles,
  Users,
} from "lucide-react";
import { CAMPUS_STATS } from "@/lib/campus";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let animated = false;
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animated) {
        animated = true;
        const start = performance.now();
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / 1400);
          setN(Math.floor(to * (1 - Math.pow(1 - p, 3))));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);

  return (
    <span ref={ref}>
      {n.toLocaleString()}
      {suffix}
    </span>
  );
}

const MEMBER_AVATARS = [
  { initials: "AK", from: "from-[#5B4CF5] to-[#8B7CF8]" },
  { initials: "SR", from: "from-[#4CD1B0] to-[#00A88A]" },
  { initials: "MJ", from: "from-[#6366F1] to-[#818CF8]" },
  { initials: "LP", from: "from-[#F59E0B] to-[#FBBF24]" },
  { initials: "DC", from: "from-[#EC4899] to-[#F472B6]" },
] as const;

const TESTIMONIALS = [
  {
    quote:
      "Certilly helped me go from curious to confident. The projects and mentors changed everything.",
    name: "Ayaan M.",
    track: "College AI Essentials",
    initials: "AM",
    accent: "border-[#5B4CF5]/20 bg-[#5B4CF5]/[0.04]",
  },
  {
    quote:
      "My daughter finally has a clear pathway — and I can actually follow along as a parent.",
    name: "Priya K.",
    track: "Parent & K–12 learner",
    initials: "PK",
    accent: "border-[#4CD1B0]/25 bg-[#4CD1B0]/[0.06]",
  },
  {
    quote:
      "The campus events and project showcases feel like a real community, not just another LMS.",
    name: "Jordan T.",
    track: "High School AI Builder",
    initials: "JT",
    accent: "border-[#6366F1]/20 bg-[#6366F1]/[0.05]",
  },
] as const;

const ACTIVITY = [
  "12 learners joined today",
  "3 live workshops this week",
  "New capstone showcase Friday",
] as const;

export function HomeStatsSection() {
  const [activityIdx, setActivityIdx] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActivityIdx((i) => (i + 1) % ACTIVITY.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="community"
      data-illy-section="community"
      className="relative overflow-hidden border-t border-border/40 py-14 sm:py-16 md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #FAFBFE 0%, #F3F0FF 45%, #FAFBFE 100%)",
        }}
      />
      <div className="pointer-events-none absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#5B4CF5]/[0.07] blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-[#4CD1B0]/[0.08] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.12]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal>
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B4CF5]">
              <Users className="h-4 w-4" strokeWidth={2} />
              Community
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl">
              You&apos;re not learning alone
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Students, parents, and educators building real AI skills together — with events,
              showcases, and peers who actually show up.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-12 lg:gap-5">
          {/* Community hub */}
          <Reveal delay={0.05} className="lg:col-span-7">
            <div className="relative flex h-full min-h-[18rem] flex-col justify-between overflow-hidden rounded-3xl bg-[#0F1533] p-6 text-white shadow-[0_28px_64px_-24px_rgba(15,21,51,0.55)] sm:p-8">
              <div
                className="pointer-events-none absolute inset-0 opacity-60"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 100% 0%, rgba(91,76,245,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 0% 100%, rgba(76,209,176,0.18), transparent 50%)",
                }}
              />
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#5B4CF5]/20 blur-2xl" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium text-white/80 backdrop-blur-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#4CD1B0] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#4CD1B0]" />
                  </span>
                  {ACTIVITY[activityIdx]}
                </div>

                <p className="mt-5 font-display text-2xl font-bold leading-snug sm:text-[1.75rem]">
                  Join{" "}
                  <span className="bg-gradient-to-r from-[#B8ABFF] to-[#4CD1B0] bg-clip-text text-transparent">
                    <Counter to={CAMPUS_STATS[0].value} suffix={CAMPUS_STATS[0].suffix} />
                  </span>{" "}
                  learners on campus
                </p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-white/65">
                  Workshops, parent sessions, project showcases, and study circles — built for
                  every stage of the journey.
                </p>
              </div>

              <div className="relative mt-8 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {MEMBER_AVATARS.map((m, i) => (
                      <span
                        key={m.initials}
                        className={cn(
                          "flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0F1533] bg-gradient-to-br text-[11px] font-bold text-white shadow-md",
                          m.from
                        )}
                        style={{ zIndex: MEMBER_AVATARS.length - i }}
                      >
                        {m.initials}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs text-white/50">Growing every week</span>
                </div>

                <Link
                  to="/events"
                  className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#5B4CF5] px-5 text-sm font-bold text-white shadow-[0_12px_32px_-12px_rgba(91,76,245,0.65)] transition-all hover:scale-[1.02] hover:bg-[#4A3BE8] active:scale-[0.98]"
                >
                  Explore events
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2 border-t border-white/10 pt-5">
                {[
                  { icon: MessageCircle, label: "Study circles" },
                  { icon: Calendar, label: "Live workshops" },
                  { icon: Sparkles, label: "Project showcases" },
                ].map(({ icon: Icon, label }) => (
                  <span
                    key={label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-medium text-white/75"
                  >
                    <Icon className="h-3.5 w-3.5 text-[#B8ABFF]" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stats — compact 2×2 */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:col-span-5">
            {CAMPUS_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={0.08 + i * 0.04}>
                <div className="group flex h-full min-h-[5.5rem] flex-col justify-center rounded-2xl border border-border/50 bg-white/80 p-4 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-[#5B4CF5]/20 hover:shadow-[0_12px_32px_-16px_rgba(91,76,245,0.15)] sm:min-h-[6rem] sm:p-5">
                  <p className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                    <Counter to={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.12 + i * 0.06}>
              <article
                className={cn(
                  "relative flex h-full flex-col rounded-2xl border p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-6",
                  t.accent
                )}
              >
                <Quote className="h-7 w-7 text-[#5B4CF5]/25" aria-hidden />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-5 flex items-center gap-3 border-t border-border/40 pt-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0F1533] text-xs font-bold text-white">
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.track}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

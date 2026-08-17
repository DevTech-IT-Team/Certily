import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Calendar, CalendarDays, Mail, MapPin, PlayCircle, Users, Zap } from "lucide-react";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — Certcia AI Campus" },
      {
        name: "description",
        content: "Live workshops, AMAs, hackathons, and the AI Campus Summit — on campus and around the world.",
      },
    ],
  }),
  component: EventsPage,
});

const UPCOMING = [
  {
    title: "AI Campus Summit 2026",
    date: "Sep 18 – 20, 2026",
    loc: "San Francisco · Hybrid",
    tag: "Conference",
    seats: 1200,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    blurb: "Three days of keynotes, hands-on labs, and conversations with frontier AI builders. The flagship event of the Certcia campus year.",
    featured: true,
  },
  {
    title: "Hands-on: Fine-tuning Llama 3",
    date: "Jun 04 · 6 PM EDT",
    loc: "Online",
    tag: "Workshop",
    seats: 300,
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    blurb: "Walk through adapters, eval harnesses, and safe defaults in a live notebook session.",
    featured: false,
  },
  {
    title: "AMA: Dr. Lina Park (DeepMind)",
    date: "Jun 11 · 7 PM EDT",
    loc: "Online",
    tag: "AMA",
    seats: 800,
    img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80",
    blurb: "Research directions, hiring pipelines, and what actually ships in production RL systems.",
    featured: false,
  },
  {
    title: "Global Hackathon: Build with Agents",
    date: "Jul 02 – 04",
    loc: "Online · Worldwide",
    tag: "Hackathon",
    seats: 5000,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    blurb: "48-hour sprint with mentors, compute credits, and a live demo day with prize bounties.",
    featured: false,
  },
] as const;

const PAST = [
  {
    title: "AI for Educators — Spring Workshop",
    date: "Mar 15, 2026",
    loc: "Online",
    tag: "Workshop",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
    recap: "92 educators attended. Recording available.",
  },
  {
    title: "Certcia Campus Launch Day",
    date: "Feb 01, 2026",
    loc: "Dallas · In person",
    tag: "Conference",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    recap: "400+ attendees. Highlights reel on YouTube.",
  },
  {
    title: "K–12 AI Showcase — Cohort 1",
    date: "Jan 20, 2026",
    loc: "Online",
    tag: "Showcase",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    recap: "Students presented 18 capstone projects live.",
  },
] as const;

const TAG_STYLES: Record<string, { bg: string; text: string }> = {
  Conference: { bg: "#EEF2FF", text: "#5B4CF5" },
  Workshop:   { bg: "#EFF6FF", text: "#2563EB" },
  AMA:        { bg: "#F0FDF4", text: "#16A34A" },
  Hackathon:  { bg: "#FFF7ED", text: "#C2410C" },
  Showcase:   { bg: "#F5F3FF", text: "#7C3AED" },
};

const BLUE_OVERLAY = "linear-gradient(160deg, rgba(15,12,50,0.62) 0%, rgba(59,76,245,0.32) 55%, rgba(15,21,51,0.48) 100%)";

function Tag({ label }: { label: string }) {
  const s = TAG_STYLES[label] ?? { bg: "#F7F8FC", text: "#5A607A" };
  return (
    <span className="inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide" style={{ background: s.bg, color: s.text }}>
      {label}
    </span>
  );
}

function EventsPage() {
  const [featuredEvent, ...otherUpcoming] = UPCOMING;

  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-16 pb-12 sm:pt-20 sm:pb-14">
        <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(91,76,245,0.10) 0%, transparent 70%)" }} />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235B4CF5' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='23' cy='3' r='1.5'/%3E%3Ccircle cx='3' cy='23' r='1.5'/%3E%3Ccircle cx='23' cy='23' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")" }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-14">

            {/* Left */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/20 bg-[#EEF2FF] px-4 py-1.5 text-sm font-semibold text-[#5B4CF5]">
                <CalendarDays className="h-3.5 w-3.5" />
                Events · Summer–Fall 2026
              </span>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-[#0F1533] sm:text-6xl lg:text-[4rem]">
                Join the AI
                <br />
                <span style={{ background: "linear-gradient(90deg, #5B4CF5 0%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  community.
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#5A607A]">
                Live workshops, hackathons, AMAs, and the flagship AI Campus Summit — on campus and around the world. Free to attend.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                {[{ n: "4", label: "Upcoming events" }, { n: "Free RSVP", label: "Always" }, { n: "Hybrid", label: "Format" }].map((s) => (
                  <div key={s.label} className="inline-flex items-center gap-2 rounded-full border border-[#E8EAF4] bg-[#F7F8FC] px-4 py-2 text-sm">
                    <span className="font-bold text-[#0F1533]">{s.n}</span>
                    <span className="text-[#8892A4]">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — flagship card */}
            <div>
              <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8892A4]">Flagship event</p>
              <div className="overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm">
                <div className="relative aspect-[16/9] overflow-hidden bg-[#EEF2FF]">
                  <img src={featuredEvent.img} alt="" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
                  <div className="absolute inset-0" style={{ background: BLUE_OVERLAY }} />
                  <div className="absolute left-3 top-3 flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#16A34A] opacity-70" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#16A34A]" />
                    </span>
                    <span className="text-[11px] font-bold text-[#0F1533]">Live RSVP open</span>
                  </div>
                  <div className="absolute bottom-3 left-3"><Tag label={featuredEvent.tag} /></div>
                </div>
                <div className="p-5">
                  <h2 className="font-display text-lg font-extrabold text-[#0F1533]">{featuredEvent.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#5A607A]">{featuredEvent.blurb}</p>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-[#5A607A]">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-[#5B4CF5]" />{featuredEvent.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-[#5B4CF5]" />{featuredEvent.loc}</span>
                    <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-[#5B4CF5]" />{featuredEvent.seats.toLocaleString()} seats</span>
                  </div>
                  <a href="https://lmsathena.com/login" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#5B4CF5] px-6 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(91,76,245,0.40)] transition-all hover:bg-[#4A3BE8] hover:scale-[1.02]">
                    Reserve your seat <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING ─────────────────────────────────────────── */}
      <section className="bg-[#F7F8FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <Zap className="h-4 w-4 text-[#5B4CF5]" />
              <h2 className="font-display text-2xl font-extrabold text-[#0F1533]">Upcoming events</h2>
              <span className="rounded-full bg-[#EEF2FF] px-2.5 py-0.5 text-xs font-bold text-[#5B4CF5]">{UPCOMING.length}</span>
            </div>
            <span className="rounded-full border border-[#E8EAF4] bg-white px-3 py-1 text-xs font-semibold text-[#5A607A]">Open RSVP</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {/* Featured spans full width */}
            <a
              href="https://lmsathena.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="group col-span-full flex flex-col overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5B4CF5]/20 hover:shadow-[0_24px_56px_-16px_rgba(91,76,245,0.14)] sm:flex-row"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#EEF2FF] sm:aspect-auto sm:w-80 sm:shrink-0 lg:w-[400px]">
                <img src={featuredEvent.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" />
                <div className="absolute inset-0" style={{ background: BLUE_OVERLAY }} />
                <div className="absolute left-3 top-3 flex items-center gap-2">
                  <Tag label={featuredEvent.tag} />
                  <span className="rounded-full bg-[#5B4CF5] px-2.5 py-0.5 text-[10px] font-bold text-white">Flagship</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center p-6 sm:p-8">
                <h3 className="font-display text-xl font-extrabold leading-snug text-[#0F1533] transition-colors group-hover:text-[#5B4CF5] sm:text-2xl">{featuredEvent.title}</h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-[#5A607A]">{featuredEvent.blurb}</p>
                <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-[#F0F1F8] pt-5 text-xs text-[#8892A4]">
                  <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-[#5B4CF5]" />{featuredEvent.date}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5 text-[#5B4CF5]" />{featuredEvent.loc}</span>
                  <span className="flex items-center gap-1.5"><Users className="h-3.5 w-3.5 text-[#5B4CF5]" />{featuredEvent.seats.toLocaleString()} seats</span>
                  <span className="ml-auto inline-flex items-center gap-1 font-semibold text-[#5B4CF5] transition-all group-hover:gap-1.5">
                    RSVP <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </a>

            {/* Other upcoming */}
            {otherUpcoming.map((e) => (
              <a
                key={e.title}
                href="https://lmsathena.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5B4CF5]/20 hover:shadow-[0_20px_48px_-16px_rgba(91,76,245,0.14)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EEF2FF]">
                  <img src={e.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0" style={{ background: BLUE_OVERLAY }} />
                  <div className="absolute left-3 top-3"><Tag label={e.tag} /></div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold leading-snug text-[#0F1533] transition-colors group-hover:text-[#5B4CF5]">{e.title}</h3>
                  <p className="mt-2 flex-1 line-clamp-2 text-sm leading-relaxed text-[#5A607A]">{e.blurb}</p>
                  <div className="mt-4 space-y-1.5 border-t border-[#F0F1F8] pt-4 text-xs text-[#8892A4]">
                    <div className="flex items-center gap-2"><Calendar className="h-3.5 w-3.5 shrink-0 text-[#5B4CF5]" />{e.date}</div>
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 shrink-0 text-[#5B4CF5]" />{e.loc}</span>
                      <span className="flex items-center gap-1 font-semibold text-[#5B4CF5] transition-all group-hover:gap-1.5">
                        RSVP <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </div>
                    <div className="flex items-center gap-2"><Users className="h-3.5 w-3.5 shrink-0 text-[#5B4CF5]" />{e.seats.toLocaleString()} seats</div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAST EVENTS ──────────────────────────────────────── */}
      <section className="border-t border-[#E8EAF4] bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-center gap-3">
            <PlayCircle className="h-4 w-4 text-[#8892A4]" />
            <h2 className="font-display text-2xl font-extrabold text-[#0F1533]">Past events</h2>
            <span className="rounded-full border border-[#E8EAF4] bg-[#F7F8FC] px-3 py-1 text-xs font-semibold text-[#5A607A]">Watch on demand</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            {PAST.map((e) => (
              <a
                key={e.title}
                href="https://lmsathena.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5B4CF5]/20 hover:shadow-[0_20px_48px_-16px_rgba(91,76,245,0.10)]"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-[#F0F1F8]">
                  <img src={e.img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-500 group-hover:opacity-90 group-hover:scale-[1.03]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0" style={{ background: BLUE_OVERLAY }} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/25 ring-1 ring-white/40 backdrop-blur-sm transition-transform group-hover:scale-110">
                      <PlayCircle className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="absolute left-3 top-3"><Tag label={e.tag} /></div>
                  <div className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-0.5 text-[10px] font-semibold text-white/80 backdrop-blur-sm">Past</div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-base font-bold leading-snug text-[#0F1533] transition-colors group-hover:text-[#5B4CF5]">{e.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-[#8892A4]">
                    <span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5" />{e.date}</span>
                    <span className="flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{e.loc}</span>
                  </div>
                  <p className="mt-3 flex-1 text-sm text-[#5A607A]">{e.recap}</p>
                  <span className="mt-4 inline-flex items-center gap-1 border-t border-[#F0F1F8] pt-4 text-xs font-semibold text-[#5B4CF5] transition-all group-hover:gap-1.5">
                    Watch recording <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="border-t border-[#E8EAF4] bg-[#F7F8FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm">
            <div className="p-8 text-center sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/20 bg-[#EEF2FF] px-4 py-1.5 text-sm font-semibold text-[#5B4CF5]">
                <Mail className="h-3.5 w-3.5" />
                Stay updated
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-[#0F1533] sm:text-3xl">Never miss an event</h2>
              <p className="mt-2 text-base text-[#5A607A]">Get notified about new workshops, hackathons, and sessions before seats fill up.</p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <input type="email" placeholder="Your email address" className="h-12 w-full rounded-full border border-[#E8EAF4] bg-[#F7F8FC] px-5 text-sm text-[#0F1533] outline-none transition focus:border-[#5B4CF5]/40 focus:bg-white focus:ring-2 focus:ring-[#5B4CF5]/15 sm:w-72" />
                <button type="button" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-[#5B4CF5] px-7 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(91,76,245,0.40)] transition-all hover:bg-[#4A3BE8] hover:scale-[1.02] active:scale-[0.98]">
                  Notify me <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-3 text-xs text-[#8892A4]">No spam. Unsubscribe any time.</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Mail, TrendingUp } from "lucide-react";

export const Route = createFileRoute("/news")({
  head: () => ({
    meta: [
      { title: "Newsroom — Certily AI Campus" },
      {
        name: "description",
        content:
          "AI news, industry updates, and plain-language explainers that connect today's trends to Certily certifications.",
      },
    ],
  }),
  component: NewsPage,
});

const FEATURED = {
  tag: "Industry",
  title: "Why AI literacy is the most in-demand skill of 2026",
  excerpt:
    "From K–12 classrooms to Fortune 500 boardrooms — understanding AI is no longer optional. Here's what the data says, and how Certily pathways map directly to it.",
  date: "May 14, 2026",
  readTime: "5 min read",
  img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=1400&q=80",
};

const ARTICLES = [
  {
    tag: "Research",
    title: "How Certily builds curriculum around real AI outcomes",
    excerpt: "Industry professionals and SMEs validate every course direction before it publishes.",
    date: "May 09, 2026",
    readTime: "4 min",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Product",
    title: "Capstone projects now ship with shareable portfolio links",
    excerpt: "Every AI Lab submission produces a verifiable, linkable portfolio artifact.",
    date: "Apr 28, 2026",
    readTime: "3 min",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Community",
    title: "Cohort 2026 enrollments cross 400 learners",
    excerpt: "Students from across the US are now building their first AI certifications on campus.",
    date: "Apr 18, 2026",
    readTime: "2 min",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Industry",
    title: "Generative AI in K–12: what parents need to know",
    excerpt: "A plain-language guide to how schools are responding — and how Certily prepares students.",
    date: "Apr 05, 2026",
    readTime: "6 min",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Research",
    title: "The skills gap starts in high school",
    excerpt: "Students who engage with AI tools before college are 3× more likely to land technical internships.",
    date: "Mar 22, 2026",
    readTime: "5 min",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Product",
    title: "Illy now guides learners through capstone checkpoints",
    excerpt: "Our AI campus guide surfaces personalised tips at every project milestone.",
    date: "Mar 10, 2026",
    readTime: "3 min",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
  },
] as const;

const TAG_COLORS: Record<string, { bg: string; text: string; dot: string }> = {
  Industry:  { bg: "#EFF6FF", text: "#2563EB", dot: "#3B82F6" },
  Research:  { bg: "#F5F3FF", text: "#7C3AED", dot: "#8B5CF6" },
  Product:   { bg: "#EEF2FF", text: "#5B4CF5", dot: "#5B4CF5" },
  Community: { bg: "#F0FDF4", text: "#16A34A", dot: "#22C55E" },
};

const TICKER_ITEMS = [ARTICLES[0], ARTICLES[1], ARTICLES[2]] as const;

function TagPill({ tag }: { tag: string }) {
  const s = TAG_COLORS[tag] ?? { bg: "#F7F8FC", text: "#5A607A", dot: "#8892A4" };
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide"
      style={{ background: s.bg, color: s.text }}
    >
      <span className="h-1.5 w-1.5 rounded-full" style={{ background: s.dot }} />
      {tag}
    </span>
  );
}

const BLUE_OVERLAY = "linear-gradient(160deg, rgba(15,12,50,0.62) 0%, rgba(59,76,245,0.32) 55%, rgba(15,21,51,0.48) 100%)";

function NewsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-24 pb-14 sm:pt-28 sm:pb-16">
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(ellipse 80% 55% at 50% -10%, rgba(91,76,245,0.10) 0%, transparent 70%)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%235B4CF5' fill-opacity='1' fill-rule='evenodd'%3E%3Ccircle cx='3' cy='3' r='1.5'/%3E%3Ccircle cx='23' cy='3' r='1.5'/%3E%3Ccircle cx='3' cy='23' r='1.5'/%3E%3Ccircle cx='23' cy='23' r='1.5'/%3E%3C/g%3E%3C/svg%3E\")",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-[1fr_360px] lg:gap-16">

            {/* Left */}
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/20 bg-[#EEF2FF] px-4 py-1.5 text-sm font-semibold text-[#5B4CF5]">
                <TrendingUp className="h-3.5 w-3.5" />
                Newsroom
              </span>
              <h1 className="mt-5 font-display text-5xl font-extrabold leading-[1.04] tracking-tight text-[#0F1533] sm:text-6xl lg:text-[4rem]">
                Stay informed.
                <br />
                <span style={{ background: "linear-gradient(90deg, #5B4CF5 0%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  AI moves fast.
                </span>
              </h1>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#5A607A]">
                AI news, research, and plain-language explainers — connecting what's
                happening in the world to what you're learning on campus.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {(["Industry", "Research", "Product", "Community"] as const).map((tag) => {
                  const s = TAG_COLORS[tag];
                  return (
                    <span key={tag} className="cursor-default rounded-full px-3 py-1 text-xs font-semibold" style={{ background: s.bg, color: s.text }}>
                      {tag}
                    </span>
                  );
                })}
              </div>
            </div>

            {/* Right — ticker widget */}
            <div className="rounded-2xl border border-[#E8EAF4] bg-[#F7F8FC] p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#8892A4]">Latest from the newsroom</span>
                <BookOpen className="h-3.5 w-3.5 text-[#5B4CF5]" />
              </div>
              <div className="flex flex-col divide-y divide-[#E8EAF4]">
                {TICKER_ITEMS.map((a) => (
                  <a key={a.title} href="#" className="group flex flex-col gap-2 py-4 first:pt-0 last:pb-0">
                    <div className="flex items-center justify-between gap-3">
                      <TagPill tag={a.tag} />
                      <span className="text-[10px] text-[#8892A4]">{a.date}</span>
                    </div>
                    <p className="text-sm font-semibold leading-snug text-[#0F1533] transition-colors group-hover:text-[#5B4CF5]">{a.title}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#5B4CF5]">
                      {a.readTime} read <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ─────────────────────────────────────────── */}
      <section className="bg-[#F7F8FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="mb-6 text-[11px] font-bold uppercase tracking-[0.14em] text-[#8892A4]">Featured story</p>
          <a
            href="#"
            className="group grid overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#5B4CF5]/20 hover:shadow-[0_24px_56px_-16px_rgba(91,76,245,0.14)] lg:grid-cols-[1fr_480px]"
          >
            <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
              <TagPill tag={FEATURED.tag} />
              <h2 className="mt-4 font-display text-2xl font-extrabold leading-snug text-[#0F1533] transition-colors group-hover:text-[#5B4CF5] sm:text-3xl lg:text-[2rem]">
                {FEATURED.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#5A607A]">{FEATURED.excerpt}</p>
              <div className="mt-6 flex items-center gap-5">
                <span className="text-sm text-[#8892A4]">{FEATURED.date} · {FEATURED.readTime}</span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-[#5B4CF5] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(91,76,245,0.40)] transition-all group-hover:bg-[#4A3BE8]">
                  Read article <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </span>
              </div>
            </div>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#EEF2FF] lg:aspect-auto lg:min-h-[340px]">
              <img src={FEATURED.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" loading="eager" />
              <div className="absolute inset-0" style={{ background: BLUE_OVERLAY }} />
            </div>
          </a>
        </div>
      </section>

      {/* ── ARTICLE GRID ─────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[#5B4CF5]" />
              <h2 className="font-display text-2xl font-extrabold text-[#0F1533]">Latest articles</h2>
            </div>
            <span className="rounded-full border border-[#E8EAF4] bg-[#F7F8FC] px-3 py-1 text-xs font-semibold text-[#5A607A]">{ARTICLES.length} articles</span>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {ARTICLES.map((a) => (
              <a
                key={a.title}
                href="#"
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#5B4CF5]/20 hover:shadow-[0_20px_48px_-16px_rgba(91,76,245,0.14)]"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#EEF2FF]">
                  <img src={a.img} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]" loading="lazy" decoding="async" />
                  <div className="absolute inset-0" style={{ background: BLUE_OVERLAY }} />
                  <div className="absolute bottom-3 left-3"><TagPill tag={a.tag} /></div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="flex-1 font-display text-base font-bold leading-snug text-[#0F1533] transition-colors group-hover:text-[#5B4CF5]">{a.title}</h3>
                  <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-[#5A607A]">{a.excerpt}</p>
                  <div className="mt-4 flex items-center justify-between border-t border-[#F0F1F8] pt-4">
                    <span className="text-xs text-[#8892A4]">{a.date} · {a.readTime}</span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#5B4CF5] transition-all group-hover:gap-1.5">
                      Read <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ───────────────────────────────────────── */}
      <section className="border-t border-[#E8EAF4] bg-[#F7F8FC] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-2xl border border-[#E8EAF4] bg-white shadow-sm">
            <div className="p-8 text-center sm:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/20 bg-[#EEF2FF] px-4 py-1.5 text-sm font-semibold text-[#5B4CF5]">
                <Mail className="h-3.5 w-3.5" />
                Weekly digest
              </span>
              <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-[#0F1533] sm:text-3xl">Stay ahead of AI trends</h2>
              <p className="mt-2 text-base text-[#5A607A]">New articles every week — connecting industry news to the skills you're building on campus.</p>
              <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <input type="email" placeholder="Your email address" className="h-12 w-full rounded-full border border-[#E8EAF4] bg-[#F7F8FC] px-5 text-sm text-[#0F1533] outline-none transition focus:border-[#5B4CF5]/40 focus:bg-white focus:ring-2 focus:ring-[#5B4CF5]/15 sm:w-72" />
                <button type="button" className="inline-flex h-12 shrink-0 items-center gap-2 rounded-full bg-[#5B4CF5] px-7 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(91,76,245,0.40)] transition-all hover:bg-[#4A3BE8] hover:scale-[1.02] active:scale-[0.98]">
                  Subscribe <ArrowRight className="h-4 w-4" />
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

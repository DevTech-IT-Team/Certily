import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Calendar, MapPin, Users, Zap, PlayCircle, Mail } from "lucide-react";
import { AnimatedMarqueeHero } from "@/components/ui/hero-3";

export const Route = createFileRoute("/life-in-certcia")({
  head: () => ({
    meta: [
      { title: "Life in Certcia — AI Campus" },
      { name: "description", content: "Stay connected to the Certcia community with the latest news, updates, and upcoming events." },
    ],
  }),
  component: LifeInCertciaPage,
});

const LATEST_NEWS = [
  {
    tag: "Industry",
    title: "Why AI literacy is the most in-demand skill of 2026",
    excerpt: "From K–12 classrooms to Fortune 500 boardrooms — understanding AI is no longer optional. Here's what the data says.",
    date: "May 14, 2026",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Research",
    title: "How Certcia builds curriculum around real AI outcomes",
    excerpt: "Industry professionals and SMEs validate every course direction before it publishes.",
    date: "May 09, 2026",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Product",
    title: "Capstone projects now ship with shareable portfolio links",
    excerpt: "Every AI Lab submission produces a verifiable, linkable portfolio artifact.",
    date: "Apr 28, 2026",
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  },
];

const UPCOMING_EVENTS = [
  {
    title: "AI Campus Summit 2026",
    date: "Sep 18 – 20, 2026",
    loc: "San Francisco · Hybrid",
    tag: "Conference",
    seats: 1200,
    img: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
    blurb: "Three days of keynotes, hands-on labs, and conversations with frontier AI builders.",
  },
  {
    title: "Global Hackathon: Build with Agents",
    date: "Jul 02 – 04",
    loc: "Online · Worldwide",
    tag: "Hackathon",
    seats: 5000,
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    blurb: "48-hour sprint with mentors, compute credits, and a live demo day with prize bounties.",
  },
];

function LifeInCertciaPage() {
  // Injecting some explicitly lighter, brighter images into the marquee
  const LIGHT_IMAGES = [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  ];

  const marqueeImages = [
    ...LIGHT_IMAGES,
    ...LATEST_NEWS.map(n => n.img),
    ...UPCOMING_EVENTS.map(e => e.img)
  ];

  const handleExploreClick = () => {
    document.getElementById("latest-news")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <AnimatedMarqueeHero
        tagline="Life in Certcia"
        title={
          <>
            Stay connected to
            <br />
            the <span style={{ background: "linear-gradient(90deg, #5B4CF5 0%, #3B82F6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>community.</span>
          </>
        }
        description="Discover the latest campus news, read updates from the AI industry, and RSVP to upcoming hackathons and workshops."
        ctaText="Explore Campus"
        onCtaClick={handleExploreClick}
        images={marqueeImages}
        className="border-b border-[#E8EAF4]"
      />

      {/* ── LATEST NEWS: LIGHT BENTO GRID ──────────────────────── */}
      <section id="latest-news" className="py-16 sm:py-24 bg-[#FAFBFC]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/20 bg-[#EEF2FF] px-3 py-1 text-xs font-bold text-[#5B4CF5] mb-4">
                <BookOpen className="h-3.5 w-3.5" /> Campus News
              </div>
              <h2 className="font-display text-4xl font-extrabold text-[#0F1533] tracking-tight">The Latest Wire</h2>
            </div>
            <Link to="/news" className="inline-flex items-center gap-2 text-sm font-bold text-[#5B4CF5] hover:text-[#4A3BE8] transition-colors group">
              View all dispatches <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Featured Article (Spans 2 columns on desktop) */}
            {LATEST_NEWS[0] && (
              <a href="/news" className="group relative overflow-hidden rounded-[32px] lg:col-span-2 lg:row-span-2 flex flex-col justify-end min-h-[400px] lg:min-h-[500px] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(91,76,245,0.2)] transition-all duration-500">
                <img src={LATEST_NEWS[0].img} alt={LATEST_NEWS[0].title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1533] via-[#0F1533]/40 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
                
                <div className="relative z-10 p-8 sm:p-12">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
                      {LATEST_NEWS[0].tag}
                    </span>
                    <span className="text-sm font-medium text-white/80">{LATEST_NEWS[0].date}</span>
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4 group-hover:text-[#EEF2FF] transition-colors drop-shadow-md">
                    {LATEST_NEWS[0].title}
                  </h3>
                  <p className="text-white/90 text-lg max-w-2xl line-clamp-2 drop-shadow-sm font-medium">
                    {LATEST_NEWS[0].excerpt}
                  </p>
                </div>
              </a>
            )}

            {/* Sidebar Articles */}
            {LATEST_NEWS.slice(1).map((news) => (
              <a key={news.title} href="/news" className="group relative overflow-hidden rounded-[32px] bg-white border border-[#E8EAF4] shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(91,76,245,0.15)] hover:border-[#5B4CF5]/30 transition-all duration-500 flex flex-col h-[240px]">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#F7F8FC] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10 p-8 flex flex-col h-full justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-[#5B4CF5]">
                        {news.tag}
                      </span>
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F7F8FC] transition-colors group-hover:bg-[#EEF2FF]">
                        <ArrowRight className="h-4 w-4 text-[#8892A4] group-hover:text-[#5B4CF5] transition-colors" />
                      </div>
                    </div>
                    <h3 className="font-display text-xl font-bold leading-tight text-[#0F1533] group-hover:text-[#5B4CF5] transition-colors line-clamp-3">
                      {news.title}
                    </h3>
                  </div>
                  <span className="text-sm font-semibold text-[#8892A4]">{news.date}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS: VIP PASSES (Commented out for now) ── */}
      {false && (
      <section className="bg-white py-20 sm:py-32 relative overflow-hidden">
        {/* Subtle background mesh to make the white passes pop */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-[#F7F8FC] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#EEF2FF] rounded-full blur-[100px] pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 relative z-10">
          <div className="mb-16 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/20 bg-[#EEF2FF] px-4 py-1.5 text-xs font-bold text-[#5B4CF5] mb-4 uppercase tracking-widest">
              <Zap className="h-3.5 w-3.5" /> Live & Virtual
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#0F1533] tracking-tight">Upcoming Events</h2>
          </div>

          <div className="grid gap-10 lg:grid-cols-2">
            {UPCOMING_EVENTS.map((event) => {
              const dateParts = event.date.split(" ");
              const month = dateParts[0];
              const days = dateParts.slice(1).join(" ");
              
              return (
                <div key={event.title} className="group relative rounded-[32px] bg-white border border-[#E8EAF4] shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden flex flex-col sm:flex-row transition-all duration-500 hover:border-[#5B4CF5]/50 hover:shadow-[0_20px_50px_-12px_rgba(91,76,245,0.25)] hover:-translate-y-2">
                  
                  {/* Date Tear-off (Left side of VIP pass) */}
                  <div className="bg-gradient-to-br from-[#F7F8FC] to-white sm:w-40 p-8 flex sm:flex-col items-center justify-center border-b sm:border-b-0 sm:border-r-[2px] border-dashed border-[#E8EAF4] gap-2 sm:gap-0 relative">
                    {/* Fake ticket cutouts */}
                    <div className="hidden sm:block absolute -top-4 -right-4 w-8 h-8 bg-white rounded-full shadow-inner" />
                    <div className="hidden sm:block absolute -bottom-4 -right-4 w-8 h-8 bg-white rounded-full shadow-inner" />
                    
                    <span className="text-[#5B4CF5] text-sm font-bold uppercase tracking-widest">{month}</span>
                    <span className="text-[#0F1533] text-5xl font-display font-extrabold tracking-tighter my-1">{days.split(" ")[0].replace(',', '')}</span>
                    {days.includes("–") && <span className="text-[#8892A4] text-xs font-bold mt-1 uppercase tracking-wider">{days.split(" ")[1]} {days.split(" ")[2]}</span>}
                  </div>
                  
                  {/* Ticket Details */}
                  <div className="flex-1 p-8 sm:p-10 flex flex-col relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="rounded-full bg-[#EEF2FF] border border-[#5B4CF5]/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#5B4CF5]">
                        {event.tag}
                      </span>
                      <span className="text-[#8892A4] text-xs font-semibold flex items-center gap-1.5">
                        <Users className="h-3.5 w-3.5" /> {event.seats} seats
                      </span>
                    </div>
                    
                    <h3 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-[#0F1533] mb-3 group-hover:text-[#5B4CF5] transition-colors">{event.title}</h3>
                    <p className="text-base text-[#5A607A] mb-8 flex-1 font-medium leading-relaxed">{event.blurb}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="flex items-center gap-2 text-sm font-bold text-[#8892A4]">
                        <MapPin className="h-4 w-4 text-[#5B4CF5]" />{event.loc.split("·")[0]?.trim()}
                      </span>
                      <Link to="/events" className="inline-flex items-center justify-center rounded-full bg-[#0F1533] px-6 py-2.5 text-sm font-bold text-white transition-all group-hover:bg-[#5B4CF5] group-hover:shadow-[0_8px_20px_-6px_rgba(91,76,245,0.5)]">
                        RSVP
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-16 text-center">
            <Link to="/events" className="inline-flex items-center justify-center gap-2 rounded-full border border-[#E8EAF4] bg-white px-8 py-3.5 text-sm font-bold text-[#0F1533] shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5">
              Browse full calendar <ArrowRight className="h-4 w-4 text-[#5B4CF5]" />
            </Link>
          </div>
        </div>
      </section>
      )}

      {/* ── NEWSLETTER CTA: PREMIUM HORIZONTAL ───────────────── */}
      <section className="bg-white py-12 sm:py-20 px-4 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0F1533] shadow-[0_20px_40px_-15px_rgba(91,76,245,0.3)] p-8 sm:p-12">
            {/* Elegant Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
              <div className="absolute -left-40 -top-40 w-96 h-96 bg-[#5B4CF5]/30 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute -right-40 -bottom-40 w-96 h-96 bg-[#3B82F6]/20 rounded-full blur-[100px] pointer-events-none" />
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay" />
            </div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:max-w-md text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-xs font-bold text-[#A5B4FC] mb-4">
                  <Mail className="h-3.5 w-3.5" /> Weekly Digest
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-3">
                  Stay in the loop.
                </h2>
                <p className="text-white/70 font-medium leading-relaxed">
                  Get the latest campus news, exclusive event invites, and AI curriculum updates straight to your inbox.
                </p>
              </div>
              
              <div className="w-full lg:w-auto flex-1 max-w-md">
                <div className="flex flex-col sm:flex-row items-center gap-2 w-full bg-white/5 p-1.5 rounded-full border border-white/10 shadow-inner focus-within:border-[#5B4CF5]/50 focus-within:ring-4 focus-within:ring-[#5B4CF5]/20 transition-all">
                  <input 
                    type="email" 
                    placeholder="name@example.com" 
                    className="h-12 w-full flex-1 rounded-full border-none bg-transparent px-5 text-white placeholder:text-white/40 focus:outline-none focus:ring-0 text-base font-medium" 
                  />
                  <button className="h-12 w-full sm:w-auto shrink-0 rounded-full bg-[#5B4CF5] px-8 text-sm font-bold text-white transition-all hover:bg-[#4A3BE8] hover:shadow-[0_8px_20px_-6px_rgba(91,76,245,0.4)]">
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-white/40 mt-3 text-center lg:text-left px-4">
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { Link } from "@tanstack/react-router";
import { Flower2, Compass, Sparkles, Zap, Diamond, ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const EXPLORE_BANNERS = [
  {
    id: "elementary",
    badge: "01 / AGES 6-11",
    title: "Elementary",
    description: "Learn through play, imagination, and creative technology.",
    route: "/courses?level=k12",
    gradientFrom: "#F28E62",
    gradientTo: "#E07050",
    shadowColor: "rgba(242,142,98,0.28)",
    icon: Flower2,
  },
  {
    id: "middle-school",
    badge: "02 / AGES 11-14",
    title: "Middle School",
    description: "Explore new skills and start building real projects.",
    route: "/courses?level=k12",
    gradientFrom: "#11998E",
    gradientTo: "#0F7A72",
    shadowColor: "rgba(17,153,142,0.28)",
    icon: Compass,
  },
  {
    id: "high-school",
    badge: "03 / AGES 14-18",
    title: "High School",
    description: "Build advanced skills, a standout portfolio, and your future.",
    route: "/courses?level=k12",
    gradientFrom: "#7B6CFF",
    gradientTo: "#5B4CF5",
    shadowColor: "rgba(91,76,245,0.28)",
    icon: Sparkles,
  },
  {
    id: "college",
    badge: "04 / AGES 18-24",
    title: "College",
    description: "Deep dive into tech, research, and innovation.",
    route: "/courses?level=college",
    gradientFrom: "#2F80ED",
    gradientTo: "#1A60C5",
    shadowColor: "rgba(47,128,237,0.28)",
    icon: Zap,
  },
  {
    id: "professional",
    badge: "05 / CAREER GROWTH",
    title: "Professional",
    description: "Upskill, automate, and lead with AI at work.",
    route: "/courses?level=professional",
    gradientFrom: "#1E254A",
    gradientTo: "#0F1533",
    shadowColor: "rgba(15,21,51,0.28)",
    icon: Diamond,
  },
];

/** A realistic dark steel hanging rod with hooks, spanning the full width */
function HangingRod() {
  return (
    <div className="absolute top-0 inset-x-0 z-20 flex items-center" style={{ height: 28 }}>
      {/* Left ball cap */}
      <div
        className="shrink-0 h-4 w-4 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, #c8cdd4, #8e9aaa 55%, #6b7685)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
        }}
      />
      {/* Left rod segment */}
      <div
        className="h-2.5 flex-1"
        style={{
          background: "linear-gradient(180deg, #c8cdd4 0%, #8e9aaa 40%, #a8b0bb 80%, #c8cdd4 100%)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      />
      {/* Left hook */}
      <div className="relative flex flex-col items-center shrink-0 mx-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 35%, #c8cdd4, #8e9aaa 55%, #6b7685)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
          }}
        />
        <div
          className="w-1.5 h-4 mt-0"
          style={{
            background: "linear-gradient(90deg, #6b7685, #c8cdd4 50%, #6b7685)",
            boxShadow: "1px 0 2px rgba(0,0,0,0.12)",
          }}
        />
      </div>
      {/* Middle rod segment */}
      <div
        className="h-2.5 flex-1"
        style={{
          background: "linear-gradient(180deg, #c8cdd4 0%, #8e9aaa 40%, #a8b0bb 80%, #c8cdd4 100%)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      />
      {/* Right hook */}
      <div className="relative flex flex-col items-center shrink-0 mx-2">
        <div
          className="w-3 h-3 rounded-full"
          style={{
            background: "radial-gradient(circle at 35% 35%, #c8cdd4, #8e9aaa 55%, #6b7685)",
            boxShadow: "0 1px 4px rgba(0,0,0,0.18)",
          }}
        />
        <div
          className="w-1.5 h-4 mt-0"
          style={{
            background: "linear-gradient(90deg, #6b7685, #c8cdd4 50%, #6b7685)",
            boxShadow: "1px 0 2px rgba(0,0,0,0.12)",
          }}
        />
      </div>
      {/* Right rod segment */}
      <div
        className="h-2.5 flex-1"
        style={{
          background: "linear-gradient(180deg, #c8cdd4 0%, #8e9aaa 40%, #a8b0bb 80%, #c8cdd4 100%)",
          boxShadow: "0 2px 4px rgba(0,0,0,0.12), inset 0 1px 0 rgba(255,255,255,0.4)",
        }}
      />
      {/* Right ball cap */}
      <div
        className="shrink-0 h-4 w-4 rounded-full"
        style={{
          background: "radial-gradient(circle at 35% 35%, #c8cdd4, #8e9aaa 55%, #6b7685)",
          boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
        }}
      />
    </div>
  );
}

export function CampusExploreSection() {
  return (
    <section
      id="explore-campus"
      data-illy-section="explore-campus"
      className="relative overflow-visible border-t border-border/30 py-12 sm:py-16 md:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #F7F8FC 0%, #F3F4FF 38%, #F7F8FC 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-genz-hero opacity-70" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.14]" />
      <div className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-[#5B4CF5]/[0.09] blur-3xl" />
      <div className="pointer-events-none absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-[#4CD1B0]/[0.1] blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-[min(100%,48rem)] -translate-x-1/2 rounded-full bg-[#B8ABFF]/[0.12] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-primary/15 bg-white/90 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
              Explore Pathways
            </span>
          </Reveal>

          <Reveal delay={0.06} className="mt-4">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
              Find your perfect learning experience
            </h2>
          </Reveal>
        </div>

        {/* 5 Hanging Banners Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-4 overflow-visible">
          {EXPLORE_BANNERS.map((banner, i) => {
            const Icon = banner.icon;
            return (
              <Reveal key={banner.id} delay={0.1 + i * 0.07} className="overflow-visible h-full">
                {/* Outer container with rod on top */}
                <div className="group relative flex flex-col items-center overflow-visible h-full w-full min-h-[460px]">
                  {/* Realistic Steel Rod + Hooks */}
                  <HangingRod />

                  {/* V-Notch Flag Pennant */}
                  <Link
                    to={banner.route}
                    className={cn(
                      "relative mt-7 w-full flex flex-col items-center text-center px-5 pb-10 pt-5 text-white",
                      "transition-all duration-300 hover:-translate-y-1 cursor-pointer select-none rounded-t-sm"
                    )}
                    style={{
                      background: `linear-gradient(180deg, ${banner.gradientFrom} 0%, ${banner.gradientTo} 100%)`,
                      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 50% 90%, 0% 100%)",
                      minHeight: 380,
                      boxShadow: `0 8px 24px ${banner.shadowColor}`,
                    }}
                  >
                    {/* Subtle inner highlight at top */}
                    <div
                      className="pointer-events-none absolute top-0 inset-x-0 h-12 opacity-20"
                      style={{
                        background: "linear-gradient(180deg, rgba(255,255,255,0.35) 0%, transparent 100%)",
                      }}
                    />

                    {/* Badge */}
                    <span className="relative text-[9px] font-bold tracking-[0.15em] text-white/60 uppercase">
                      {banner.badge}
                    </span>

                    {/* Simple clean Icon Circle — no glass */}
                    <div
                      className="relative mt-8 flex h-14 w-14 items-center justify-center rounded-full transition-transform group-hover:scale-105"
                      style={{
                        background: "rgba(255,255,255,0.18)",
                        border: "1.5px solid rgba(255,255,255,0.3)",
                      }}
                    >
                      <Icon className="h-6 w-6 text-white stroke-[2]" />
                    </div>

                    {/* Title */}
                    <h3 className="relative mt-6 font-display text-lg font-bold tracking-tight text-white leading-tight">
                      {banner.title}
                    </h3>

                    {/* Description */}
                    <p className="relative mt-3 text-[11px] leading-relaxed text-white/80 max-w-[88%] font-medium">
                      {banner.description}
                    </p>

                    {/* Enter pathway CTA */}
                    <div className="relative mt-auto pt-6 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors">
                      <span>Enter pathway</span>
                      <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import buildingSpaceImage from "@/assets/building-space.webp";
import classroomImage from "@/assets/classroom.webp";
import learnImage from "@/assets/learn.webp";
import newsroomImage from "@/assets/newsroom.webp";
import { EXPLORE_DESTINATIONS } from "@/lib/campus";
import { Reveal } from "./Reveal";

const CARD_IMAGES = [learnImage, buildingSpaceImage, newsroomImage, classroomImage] as const;

function ExploreCard({
  name,
  subtitle,
  route,
  image,
  accent,
  delay,
}: {
  name: string;
  subtitle: string;
  route: string;
  image: string;
  accent: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <Link
        to={route}
        className="group relative block aspect-[3/4] min-h-[310px] overflow-hidden rounded-3xl shadow-[0_16px_48px_-20px_rgba(15,21,51,0.22)] transition-shadow duration-300 hover:shadow-[0_24px_56px_-18px_rgba(91,76,245,0.28)] sm:min-h-[340px] lg:min-h-[380px]"
      >
        <img
          src={image}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-50"
          style={{ backgroundColor: accent }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F1533]/85 via-[#0F1533]/25 to-transparent" />

        <span
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0F1533] shadow-md transition-all duration-300 group-hover:scale-110 group-hover:bg-white"
          aria-hidden
        >
          <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
        </span>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <h3 className="font-display text-xl font-bold leading-tight text-white sm:text-2xl">{name}</h3>
          <p className="mt-1.5 text-sm text-white/75">{subtitle}</p>
        </div>
      </Link>
    </Reveal>
  );
}

export function CampusExploreSection() {
  return (
    <section
      id="explore-campus"
      data-illy-section="explore-campus"
      className="relative overflow-hidden border-t border-border/30 py-10 sm:py-12 md:py-16"
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
        <Reveal>
          <span className="inline-flex items-center rounded-full border border-primary/15 bg-white/90 px-4 py-1.5 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
            Explore Campus
          </span>
        </Reveal>

        <Reveal delay={0.06} className="mt-4">
          <h2 className="max-w-2xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem]">
            Find your perfect learning experience
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {EXPLORE_DESTINATIONS.map((dest, i) => (
            <ExploreCard
              key={dest.id}
              name={dest.name}
              subtitle={dest.subtitle}
              route={dest.route}
              image={CARD_IMAGES[i % CARD_IMAGES.length]}
              accent={dest.accent}
              delay={0.1 + i * 0.07}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

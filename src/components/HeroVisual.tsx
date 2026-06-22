import { Link } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { BookOpen, FlaskConical, LayoutDashboard, Radio, Shield } from "lucide-react";

type Spot = {
  to: string;
  title: string;
  blurb: string;
  Icon: LucideIcon;
  anchor: string;
};

const spots: Spot[] = [
  {
    to: "/courses",
    title: "Learning Tower",
    blurb: "Courses & certification paths",
    Icon: BookOpen,
    anchor: "top-[11%] left-0 max-w-[200px]",
  },
  {
    to: "/ai-lab",
    title: "AI Innovation Lab",
    blurb: "Labs, tools & sandbox",
    Icon: FlaskConical,
    anchor: "top-[16%] right-0 max-w-[200px]",
  },
  {
    to: "/dashboard",
    title: "Mission Control",
    blurb: "Classroom, billing & progress",
    Icon: LayoutDashboard,
    anchor: "top-[57%] left-0 max-w-[200px] -translate-x-2",
  },
  {
    to: "/news",
    title: "Insight Studio",
    blurb: "News, webinars & masterclasses",
    Icon: Radio,
    anchor: "top-[58%] right-0 max-w-[200px]",
  },
  {
    to: "/contact",
    title: "Certification Hall",
    blurb: "Verify & share achievements",
    Icon: Shield,
    anchor: "bottom-0 left-1/2 max-w-[220px] -translate-x-1/2 translate-y-2",
  },
];

function CalloutCard({
  to,
  title,
  blurb,
  Icon,
  className,
}: {
  to: string;
  title: string;
  blurb: string;
  Icon: LucideIcon;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={
        "group/c flex gap-2.5 rounded-md border border-border/70 bg-card/90 px-2.5 py-2 shadow-md backdrop-blur-md transition-all duration-200 hover:border-primary/30 hover:bg-card hover:shadow-lg dark:border-white/12 dark:bg-card/80 dark:hover:bg-card focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background " +
        (className ?? "")
      }
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/10 transition-colors group-hover/c:bg-primary group-hover/c:text-primary-foreground">
        <Icon className="h-4 w-4" strokeWidth={2.25} aria-hidden />
      </span>
      <span className="min-w-0 text-left">
        <span className="block text-[12px] font-semibold leading-snug tracking-tight text-foreground">
          {title}
        </span>
        <span className="mt-0.5 block text-[10px] leading-snug text-muted-foreground">{blurb}</span>
      </span>
    </Link>
  );
}

type HeroVisualProps = {
  src: string;
  alt?: string;
};

export function HeroVisual({ src, alt = "AI campus map" }: HeroVisualProps) {
  return (
    <div className="w-full lg:flex lg:h-full lg:min-h-0 lg:flex-1 lg:flex-col">
      <div className="lg:hidden">
        <img
          src={src}
          alt={alt}
          className="block h-auto w-full opacity-90 select-none"
          loading="eager"
          decoding="async"
        />
        <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {spots.map(({ to, title, blurb, Icon }) => (
            <CalloutCard key={to + title} to={to} title={title} blurb={blurb} Icon={Icon} />
          ))}
        </div>
      </div>

      {/* Desktop: fill column height = headline → CTAs on the left; image covers that band */}
      <div className="relative hidden min-h-0 flex-1 overflow-hidden rounded-xl bg-muted/20 lg:block">
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-contain object-center opacity-90 select-none"
          loading="eager"
          decoding="async"
        />
        <div className="pointer-events-none absolute inset-0 z-10">
          {spots.map(({ to, title, blurb, Icon, anchor }) => (
            <div key={to + title} className={`pointer-events-auto absolute ${anchor}`}>
              <CalloutCard to={to} title={title} blurb={blurb} Icon={Icon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

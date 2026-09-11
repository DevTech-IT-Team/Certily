import type { LucideIcon } from "lucide-react";
import {
  ClipboardList,
  Compass,
  FileText,
  Hammer,
  LayoutTemplate,
  LineChart,
  Map,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type OrbitStep = {
  name: string;
  title: string;
  copy: string;
  icon: LucideIcon;
};

export const ENTERPRISE_ORBIT_STEPS: OrbitStep[] = [
  {
    name: "Discover",
    title: "Align on the business outcome",
    copy: "Leadership, critical roles, and the performance the strategy actually needs",
    icon: Compass,
  },
  {
    name: "Audit",
    title: "Map the full learning ecosystem",
    copy: "Skills, content, platforms, spend, and the friction learners feel today",
    icon: ClipboardList,
  },
  {
    name: "Gap map",
    title: "Show where capability breaks",
    copy: "A heatmap of proficiency versus the future-state the business is walking into",
    icon: Map,
  },
  {
    name: "Blueprint",
    title: "Design the operating system",
    copy: "Architecture, content mix, and the model required to run it at scale",
    icon: LayoutTemplate,
  },
  {
    name: "RFP",
    title: "Make procurement ready",
    copy: "Specifications, vendor criteria, and a pack your buying team can use",
    icon: FileText,
  },
  {
    name: "Build",
    title: "Launch what the roles need",
    copy: "Custom journeys, platform, change, and a rollout the workforce will use",
    icon: Hammer,
  },
  {
    name: "Optimize",
    title: "Measure what actually changes",
    copy: "Skill lift, application at work, and the KPIs agreed in the audit",
    icon: LineChart,
  },
];

type StackFeatureOrbitsProps = {
  steps?: OrbitStep[];
  active?: number;
  onSelect?: (index: number) => void;
  className?: string;
};

function OrbitRing({
  items,
  offset,
  size,
  duration,
  active,
  onSelect,
}: {
  items: OrbitStep[];
  offset: number;
  size: string;
  duration: string;
  active: number;
  onSelect?: (index: number) => void;
}) {
  const angleStep = (2 * Math.PI) / items.length;

  return (
    <div
      className="absolute rounded-full border border-dashed border-[#5B4CF5]/25"
      style={{
        width: size,
        height: size,
        left: "50%",
        top: "50%",
        marginLeft: `calc(${size} / -2)`,
        marginTop: `calc(${size} / -2)`,
        animation: `orbit-spin ${duration} linear infinite`,
      }}
    >
      {items.map((item, iconIdx) => {
        const angle = iconIdx * angleStep - Math.PI / 2;
        const x = 50 + 50 * Math.cos(angle);
        const y = 50 + 50 * Math.sin(angle);
        const index = offset + iconIdx;
        const on = index === active;
        const Icon = item.icon;
        return (
          <button
            key={item.name}
            type="button"
            onClick={() => onSelect?.(index)}
            className="absolute"
            style={{
              left: `${x}%`,
              top: `${y}%`,
              transform: "translate(-50%, -50%)",
            }}
            aria-label={item.name}
          >
            <span
              className={cn(
                "flex w-[4.6rem] flex-col items-center rounded-2xl px-1.5 py-2 shadow-[0_12px_28px_-14px_rgba(15,21,51,0.35)] ring-1 transition-colors",
                on
                  ? "bg-[#5B4CF5] text-white ring-[#5B4CF5]"
                  : "bg-white text-[#0F1533] ring-[#E4E2F0]",
              )}
              style={{
                animation: `orbit-spin-rev ${duration} linear infinite`,
              }}
            >
              <span
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-full",
                  on ? "bg-white/15 text-white" : "bg-[#EDE9FF] text-[#5B4CF5]",
                )}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span
                className={cn(
                  "mt-1 font-mono text-[9px] font-bold",
                  on ? "text-white/70" : "text-[#B0B4C8]",
                )}
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-[10px] font-bold leading-tight">
                {item.name}
              </span>
            </span>
          </button>
        );
      })}
    </div>
  );
}

export function StackFeatureOrbits({
  steps = ENTERPRISE_ORBIT_STEPS,
  active = 2,
  onSelect,
  className,
}: StackFeatureOrbitsProps) {
  const inner = steps.slice(0, 3);
  const outer = steps.slice(3);

  return (
    <div
      className={cn(
        "relative flex h-full min-h-[24rem] items-center justify-center",
        className,
      )}
    >
      <div className="pointer-events-none absolute h-[22rem] w-[22rem] rounded-full bg-[#5B4CF5]/10 blur-3xl sm:h-[28rem] sm:w-[28rem]" />
      <div className="relative flex h-[22rem] w-[22rem] items-center justify-center sm:h-[28rem] sm:w-[28rem] lg:h-[32rem] lg:w-[32rem]">
        <div className="absolute left-1/2 top-1/2 h-[42%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#5B4CF5]/15" />
        <div className="absolute left-1/2 top-1/2 h-[68%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dotted border-[#5B4CF5]/20" />

        <div className="relative z-10 flex h-[6.5rem] w-[6.5rem] flex-col items-center justify-center rounded-full bg-white shadow-[0_18px_40px_-16px_rgba(91,76,245,0.5)] ring-1 ring-[#E4E2F0]">
          <span className="font-display text-3xl font-extrabold tracking-tight text-[#5B4CF5]">
            07
          </span>
          <span className="mt-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-[#8A90A5]">
            Steps
          </span>
        </div>

        <OrbitRing
          items={inner}
          offset={0}
          size="58%"
          duration="28s"
          active={active}
          onSelect={onSelect}
        />
        <OrbitRing
          items={outer}
          offset={3}
          size="88%"
          duration="40s"
          active={active}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section className="relative mx-auto my-16 flex min-h-[32rem] max-w-6xl items-center overflow-hidden rounded-3xl border border-[#E4E2F0] bg-white px-8">
      <div className="z-10 w-1/2 pr-6">
        <h2 className="mb-4 font-display text-4xl font-bold text-[#0F1533] sm:text-5xl">
          Seven steps, one system
        </h2>
        <p className="max-w-lg text-[#5A607A]">
          Certcia’s enterprise engagement model — from discover to optimize.
        </p>
      </div>
      <StackFeatureOrbits className="w-1/2" />
    </section>
  );
}

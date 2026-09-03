import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  GitBranch,
  Infinity as InfinityIcon,
  Play,
  Shield,
  Sparkles,
} from "lucide-react";
import { VAvatar } from "@/components/campus/VAvatar";
import { useV } from "@/components/campus/VContext";
import { cn } from "@/lib/utils";
import heroScene from "@/assets/whycertcia/certciawhy.png";

const AVATARS = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=80&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=80&q=80",
];

const BAR = [
  {
    title: "AI-Powered Learning",
    copy: "Personalized guidance that adapts to you.",
    icon: Brain,
    bg: "bg-[#EDE9FF]",
    fg: "text-[#5B4CF5]",
    fill: "group-hover:bg-[#5B4CF5]",
  },
  {
    title: "Real-World Projects",
    copy: "Build skills through hands-on practice.",
    icon: GitBranch,
    bg: "bg-[#DBEAFE]",
    fg: "text-[#2563EB]",
    fill: "group-hover:bg-[#2563EB]",
  },
  {
    title: "Expert-Designed",
    copy: "Curriculum created by industry professionals.",
    icon: Shield,
    bg: "bg-[#D1FAE5]",
    fg: "text-[#059669]",
    fill: "group-hover:bg-[#059669]",
  },
  {
    title: "Verified Certification",
    copy: "Prove your skills with recognized credentials.",
    icon: BadgeCheck,
    bg: "bg-[#FEF3C7]",
    fg: "text-[#D97706]",
    fill: "group-hover:bg-[#D97706]",
  },
  {
    title: "Lifetime Access",
    copy: "Learn, grow, and revisit anytime, anywhere.",
    icon: InfinityIcon,
    bg: "bg-[#FCE7F3]",
    fg: "text-[#DB2777]",
    fill: "group-hover:bg-[#DB2777]",
  },
] as const;

export function WhyCertciaHero() {
  const { setFloatingOpen } = useV();

  return (
    <section className="relative bg-[#F7F8FC] pb-12 pt-20 sm:pb-14 sm:pt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-10">
          <div className="relative z-10 min-w-0 lg:col-span-5">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#E4DFF8] bg-[#F4F1FF] px-3.5 py-1 text-[11px] font-semibold text-[#5B4CF5]">
              <Sparkles className="h-3.5 w-3.5" />
              AI-powered Certification School
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-[-0.04em] text-[#0F1533] sm:text-5xl lg:text-[3.4rem]">
              We don’t train.
              <span className="mt-1 block bg-gradient-to-r from-[#5B4CF5] to-[#4F7DF3] bg-clip-text text-transparent">
                We certify.
              </span>
            </h1>
            <p className="mt-4 max-w-md text-base leading-relaxed text-[#5A607A]">
              A dynamic AI-powered certification school built for real-world
              outcomes, not stale training.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/learning"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-[#5B4CF5] to-[#6B5CFF] px-7 text-[15px] font-bold text-white shadow-[0_14px_30px_-10px_rgba(91,76,245,0.6)]"
              >
                Explore Pathways
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#ai-lab"
                className="inline-flex h-12 items-center gap-2.5 rounded-full border border-[#E6E5F0] bg-white px-5 text-sm font-semibold text-[#0F1533]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#EDE9FF] bg-white">
                  <Play className="ml-0.5 h-3 w-3 fill-[#5B4CF5] text-[#5B4CF5]" />
                </span>
                Watch how it works
              </a>
            </div>
            <div className="mt-7 flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {AVATARS.map((src) => (
                  <img
                    key={src}
                    src={src}
                    alt=""
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                  />
                ))}
              </div>
              <p className="text-sm leading-snug">
                <span className="font-bold text-[#5B4CF5]">Join 25,000+ learners</span>{" "}
                <span className="text-[#5A607A]">getting certified with Certcia.</span>
              </p>
            </div>
          </div>

          <div className="relative lg:col-span-7">
            <img
              src={heroScene}
              alt="Certcia certification journey — AI Lab, quizzes, certify, and progress"
              className="relative z-0 h-auto w-full select-none object-contain object-center"
            />
            <div
              className="absolute z-[1] w-[27%]"
              style={{ left: "55.5%", bottom: "12%", transform: "translateX(-50%)" }}
            >
              <div className="relative aspect-square w-full">
                <VAvatar
                  fill
                  reaction="hi"
                  onLight
                  grounded
                  interactive
                  hoverEffect={false}
                  onInteract={() => setFloatingOpen(true)}
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>

        <WhyCertciaPillars />
      </div>
    </section>
  );
}

function WhyCertciaPillars() {
  return (
    <div className="mt-8 sm:mt-10">
      <div className="mb-6 flex items-center justify-center gap-4">
        <span className="hidden h-px w-16 bg-[#D9D7EC] sm:block" />
        <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-[#9B96C8]">
          Certification that builds confidence.
        </p>
        <span className="hidden h-px w-16 bg-[#D9D7EC] sm:block" />
      </div>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
        {BAR.map((item, i) => {
          const Icon = item.icon;
          return (
            <li
              key={item.title}
              className={cn(
                "group flex items-start gap-3",
                i > 0 && "lg:border-l lg:border-[#E8EAF4] lg:pl-5",
                i < BAR.length - 1 && "lg:pr-5",
              )}
            >
              <span
                className={cn(
                  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-200 group-hover:text-white",
                  item.bg,
                  item.fg,
                  item.fill,
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="min-w-0 pt-0.5">
                <p className="text-sm font-semibold leading-tight text-[#0F1533]">{item.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#6B7280]">{item.copy}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

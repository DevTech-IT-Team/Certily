import { useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  Brain,
  GitBranch,
  Infinity as InfinityIcon,
  Play,
  Shield,
} from "lucide-react";
import gsap from "gsap";
import { VAvatar } from "@/components/campus/VAvatar";
import { useV } from "@/components/campus/VContext";
import { cn } from "@/lib/utils";
import heroScene from "@/assets/whycertcia/certciawhy.png";

const BAR = [
  {
    title: "AI-Powered Learning",
    copy: "Personalized guidance that adapts to you.",
    icon: Brain,
  },
  {
    title: "Real-World Projects",
    copy: "Build skills through hands-on practice.",
    icon: GitBranch,
  },
  {
    title: "Expert-Designed",
    copy: "Curriculum created by industry professionals.",
    icon: Shield,
  },
  {
    title: "Verified Certification",
    copy: "Prove your skills with recognized credentials.",
    icon: BadgeCheck,
  },
  {
    title: "Lifetime Access",
    copy: "Learn, grow, and revisit anytime, anywhere.",
    icon: InfinityIcon,
  },
] as const;

export function WhyCertciaHero() {
  const { setFloatingOpen } = useV();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const ctx = gsap.context(() => {
      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .from("[data-hero-line]", { opacity: 0, y: 20, duration: 0.5, stagger: 0.07 })
        .fromTo(
          "[data-hero-visual]",
          { opacity: 0, y: 14 },
          { opacity: 1, y: 0, duration: 0.65 },
          "-=0.28",
        );
    }, section);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-visible bg-[#EEEEF8] pb-10 pt-16 sm:pb-12 sm:pt-20 md:pt-24"
    >
      <div className="pointer-events-none absolute left-1/4 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#5B4CF5]/10 blur-3xl" />
      <div className="pointer-events-none absolute right-10 top-24 h-64 w-64 rounded-full bg-[#4CD1B0]/10 blur-3xl" />

      <div className="relative mx-auto max-w-[94rem] px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="relative z-10 min-w-0 lg:col-span-5">
            <h1
              data-hero-line
              className="font-display text-3xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-4xl lg:text-[2.75rem] xl:text-[3.35rem]"
            >
              <span className="block">We don’t train.</span>
              <span className="mt-1 block text-[#5B4CF5] sm:mt-1.5">We certify.</span>
            </h1>

            <p
              data-hero-line
              className="mt-4 max-w-md text-base leading-relaxed text-[#5A607A] sm:mt-5 sm:text-lg"
            >
              A dynamic AI-powered certification school built for real-world
              outcomes, not stale training.
            </p>

            <div data-hero-line className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
              <Link
                to="/learning"
                className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#5B4CF5] px-7 text-base font-bold text-white shadow-[0_8px_28px_-8px_rgba(91,76,245,0.55)] transition-all hover:scale-[1.03] hover:bg-[#4A3BE0] active:scale-[0.98]"
              >
                Explore Pathways
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <a
                href="#how-certification-is-built"
                className="inline-flex h-12 items-center gap-2.5 rounded-full border border-[#D8D6EE] bg-white px-5 text-sm font-semibold text-[#5A5872] transition-all hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5] active:scale-[0.98]"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B4CF5]/10 text-[#5B4CF5]">
                  <Play className="ml-0.5 h-3 w-3 fill-[#5B4CF5]" />
                </span>
                See how it works
              </a>
            </div>

            <p data-hero-line className="mt-6 text-sm text-[#5A607A]">
              <span className="font-bold text-[#5B4CF5]">25,000+ learners</span>{" "}
              getting certified with Certcia.
            </p>
          </div>

          <div data-hero-visual className="relative min-w-0 lg:col-span-7">
            <div className="relative mx-auto max-w-2xl lg:max-w-none">
              <div
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-[20%] h-36 w-36 -translate-x-1/2 rounded-full bg-[#5B4CF5]/15 blur-3xl"
              />

              <div className="relative animate-float-slow">
                <img
                  src={heroScene}
                  alt="Certcia certification journey — AI Lab, quizzes, certify, and progress"
                  className="relative z-0 h-auto w-full mix-blend-lighten select-none object-contain object-center"
                  draggable={false}
                />

                <div
                  className="absolute z-[2] w-[24%]"
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
          </div>
        </div>

        <div className="mt-8 sm:mt-12">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-5 lg:gap-0">
            {BAR.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  className={cn(
                    "flex items-start gap-3",
                    i > 0 && "lg:border-l lg:border-[#E8EAF4] lg:pl-5",
                    i < BAR.length - 1 && "lg:pr-5",
                  )}
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#EDE9FF] text-[#5B4CF5] sm:h-10 sm:w-10">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0 pt-0.5">
                    <p className="text-sm font-semibold leading-tight text-[#0F1533]">{item.title}</p>
                    <p className="mt-0.5 hidden text-xs leading-relaxed text-[#6B7280] sm:mt-1 sm:block">
                      {item.copy}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

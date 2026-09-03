import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  Flag,
  FlaskConical,
  Newspaper,
  Star,
  Trophy,
} from "lucide-react";
import vVideo from "@/assets/certcia.webm";
import avatarStand from "@/assets/avatars/stand.png";
import { useV } from "@/components/campus/VContext";

const SPACES = [
  {
    n: "01",
    title: "Learning Pathways",
    copy: "Structured journeys for different goals.",
    to: "/learning" as const,
    icon: Flag,
  },
  {
    n: "02",
    title: "Learning",
    copy: "Expert-crafted, age-appropriate, always-current content.",
    to: "/classroom" as const,
    icon: BookOpen,
  },
  {
    n: "03",
    title: "AI Lab",
    copy: "Applied learning, capstones, game modes, quizzes, and sandbox.",
    to: "/ai-lab" as const,
    icon: FlaskConical,
  },
  {
    n: "04",
    title: "Hall of Fame",
    copy: "Certificates, achievements, and showcase links.",
    to: "/certification-hall" as const,
    icon: Trophy,
  },
  {
    n: "05",
    title: "Newsroom",
    copy: "Latest updates, insights, and evolving world needs.",
    to: "/news" as const,
    icon: Newspaper,
  },
] as const;

export function CertciaExperience() {
  const { setFloatingOpen, setMessage } = useV();

  const openV = () => {
    setMessage(
      "Hey — I’m V. I can walk you through pathways, learning, the AI Lab, certificates, and the newsroom. What do you want to do?",
      true,
      "hi",
    );
    setFloatingOpen(true);
  };

  return (
    <section id="certcia-experience" className="relative overflow-hidden py-16 sm:py-20">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 0% 0%, rgba(76,209,176,0.18) 0%, transparent 50%), radial-gradient(ellipse 55% 45% at 100% 100%, rgba(91,76,245,0.28) 0%, transparent 48%), linear-gradient(160deg, #1B2559 0%, #141B42 48%, #0F1533 100%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="flex flex-col lg:col-span-7">
            <h2 className="font-display text-3xl font-extrabold tracking-[-0.045em] text-white sm:text-[2.75rem] sm:leading-[1.08]">
              Inside the Certcia Experience
            </h2>
            <p className="mt-3 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">
              Everything you need to learn, practice, and grow.
            </p>
            <p className="mt-3 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#C8F7EC]">
              <Star className="h-3.5 w-3.5 fill-current" />
              Only complete mastery earns certification.
            </p>

            <ul className="mt-8 divide-y divide-white/15 border-y border-white/15">
              {SPACES.map((space) => {
                const Icon = space.icon;
                return (
                  <li key={space.title}>
                    <Link
                      to={space.to}
                      className="group flex items-start gap-4 py-4 sm:items-center sm:gap-5"
                    >
                      <span className="w-8 shrink-0 font-display text-[13px] font-bold tabular-nums text-[#4CD1B0]">
                        {space.n}
                      </span>
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1 sm:grid sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:items-center sm:gap-4">
                        <span className="block font-display text-[1.05rem] font-extrabold tracking-[-0.02em] text-white group-hover:text-[#C8F7EC] sm:text-lg">
                          {space.title}
                        </span>
                        <span className="mt-1 block text-[13px] leading-relaxed text-white/70 sm:mt-0">
                          {space.copy}
                        </span>
                      </span>
                      <ArrowRight className="mt-1 hidden h-4 w-4 shrink-0 text-white/40 transition-transform group-hover:translate-x-0.5 group-hover:text-white sm:mt-0 sm:block" />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-full min-h-[28rem] overflow-hidden rounded-[1.75rem] ring-1 ring-white/25 sm:min-h-[32rem]">
              <video
                src={vVideo}
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                poster={avatarStand}
                className="absolute inset-0 h-full w-full object-cover object-[center_22%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1533] via-[#0F1533]/35 to-transparent" />

              <div className="relative z-10 flex h-full min-h-[28rem] flex-col justify-end p-6 sm:min-h-[32rem] sm:p-8">
                <p className="font-display text-4xl font-extrabold tracking-[-0.04em] text-white">
                  Ask V
                </p>
                <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/80">
                  AI Companion. Get instant help, guidance, and personalized support.
                </p>
                <button
                  type="button"
                  onClick={openV}
                  className="group mt-5 inline-flex h-12 w-fit items-center gap-2 rounded-full bg-white px-7 text-[15px] font-bold text-[#5B4CF5] transition-transform hover:scale-[1.03] active:scale-[0.98]"
                >
                  Chat with V
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

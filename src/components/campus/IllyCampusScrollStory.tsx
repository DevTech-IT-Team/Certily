/**
 * IllyCampusScrollStory
 *
 * WOW Launch Animation:
 * 1. Initial State (Section 2 - Meet Illy & Certily):
 *    - Left: "Meet Illy 👋" (About Illy - AI Mentor & Guide).
 *    - Center: Illy Mascot with glowing spotlight pedestal.
 *    - Right: "Certily AI Campus" (About Certily - Real skills, Real impact).
 *
 * 2. Scroll Stage (Landing on Campus):
 *    - Left & Right glassmorphic cards slide out gracefully.
 *    - 3D Campus image rises UP from bottom under Illy.
 *    - Illy lands cleanly on the central plaza.
 *    - Building badges pop into position around the campus.
 *
 * 3. Final State (Natural Page Scroll):
 *    - Pin releases cleanly.
 *    - The complete assembled campus (Image + Illy + Badges) stays 100% solid and scrolls naturally!
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, BookOpen, FlaskConical, Lock, ShieldCheck, Sparkles, Trophy } from "lucide-react";

import ilyStand from "@/assets/avatars/stand.png";
import campusBg from "@/assets/certilybgupdate.png";
import aboutBg from "@/assets/aboutbg.webp";

gsap.registerPlugin(ScrollTrigger);

const TAGS: {
  id: string;
  label: string;
  body: string;
  icon: "arrow" | "lock";
  style: React.CSSProperties;
}[] = [
  {
    id: "learning-pathways",
    label: "LEARNING PATHWAYS",
    body: "Explore self-paced courses and structured learning paths.",
    icon: "arrow",
    style: { top: "12%", left: "8%" },
  },
  {
    id: "my-classroom",
    label: "MY CLASSROOM",
    body: "Access your courses, assignments and learning progress.",
    icon: "lock",
    style: { top: "-12%", left: "38%" },
  },
  {
    id: "ai-lab",
    label: "AI LAB",
    body: "Hands-on projects, capstone courses and AI tools to build.",
    icon: "lock",
    style: { top: "12%", right: "8%" },
  },
  {
    id: "newsroom",
    label: "NEWSROOM",
    body: "Stay updated with AI news, industry insights and announcements.",
    icon: "arrow",
    style: { top: "48%", right: "6%" },
  },
  {
    id: "hall-of-fame",
    label: "HALL OF FAME",
    body: "Celebrate achievements, certifications and learner milestones.",
    icon: "lock",
    style: { top: "48%", left: "6%" },
  },
];

function TagCard({
  label,
  body,
  icon,
  style,
  id,
}: {
  label: string;
  body: string;
  icon: "arrow" | "lock";
  style: React.CSSProperties;
  id: string;
}) {
  return (
    <div
      data-tag={id}
      style={{ ...style, position: "absolute" }}
      className="z-30 w-[120px] sm:w-[138px] md:w-[152px] rounded-xl border border-[#E4E2F0] bg-white/95 backdrop-blur-md shadow-[0_8px_20px_-4px_rgba(15,21,51,0.16)] px-3 py-2 transition-all duration-200 hover:scale-105 hover:shadow-lg pointer-events-auto"
    >
      <p className="font-display text-[9.5px] font-extrabold uppercase tracking-[0.04em] text-[#0F1533] sm:text-[10px]">
        {label}
      </p>
      <p className="mt-0.5 text-[8.5px] leading-[1.35] text-[#5A607A] sm:text-[9px]">
        {body}
      </p>
      <div className="mt-1 flex justify-end">
        {icon === "arrow" ? (
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#5B4CF5] text-white shadow-sm sm:h-4.5 sm:w-4.5">
            <ArrowRight className="h-2 w-2 sm:h-2.5 sm:w-2.5" />
          </span>
        ) : (
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#F0F1F7] sm:h-4.5 sm:w-4.5">
            <Lock className="h-2 w-2 text-[#9896A9] sm:h-2.5 sm:w-2.5" />
          </span>
        )}
      </div>
    </div>
  );
}

export function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-9 opacity-80">
      {/* Google */}
      <span className="font-display text-xs sm:text-sm font-extrabold tracking-tight text-[#4285F4]">
        G<span className="text-[#EA4335]">o</span><span className="text-[#FBBC05]">o</span>g<span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
      </span>

      {/* Microsoft */}
      <span className="inline-flex items-center gap-1.5 font-display text-xs sm:text-sm font-bold text-[#5E5E5E]">
        <span className="grid grid-cols-2 gap-0.5 w-3 h-3">
          <span className="bg-[#F25022] rounded-[0.5px]"></span>
          <span className="bg-[#7FBA00] rounded-[0.5px]"></span>
          <span className="bg-[#00A4EF] rounded-[0.5px]"></span>
          <span className="bg-[#FFB900] rounded-[0.5px]"></span>
        </span>
        Microsoft
      </span>

      {/* AWS */}
      <span className="font-display text-xs sm:text-sm font-black tracking-wider text-[#232F3E]">
        aws
      </span>

      {/* NVIDIA */}
      <span className="font-display text-xs sm:text-sm font-extrabold tracking-tight text-[#76B900]">
        NVIDIA
      </span>

      {/* IBM */}
      <span className="font-display text-xs sm:text-sm font-black tracking-widest text-[#052FAD]">
        IBM
      </span>

      {/* Meta */}
      <span className="inline-flex items-center gap-1 font-display text-xs sm:text-sm font-bold text-[#0668E1]">
        <svg className="h-3 w-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M16.42 2C13.88 2 12.44 3.73 12 4.41 11.56 3.73 10.12 2 7.58 2 3.88 2 1 5.09 1 9.09c0 4.8 4.29 9.39 10.42 12.63.36.19.79.19 1.15 0C18.71 18.48 23 13.89 23 9.09 23 5.09 20.12 2 16.42 2zm-4.42 17.75C6.4 16.81 3 12.63 3 9.09 3 6.2 5.06 4 7.58 4c1.94 0 3.12 1.34 3.65 2.14.3.46 1.05.46 1.34 0C13.1 5.34 14.28 4 16.42 4c2.52 0 4.58 2.2 4.58 5.09 0 3.54-3.4 7.72-9 10.66z" />
        </svg>
        Meta
      </span>
    </div>
  );
}

export function IllyCampusScrollStory() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const campusRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);
  const ilyRef = useRef<HTMLDivElement>(null);
  const aboutBgRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const trigger = triggerRef.current;
      const left = leftRef.current;
      const right = rightRef.current;
      const campus = campusRef.current;
      const tagsEl = tagsRef.current;
      const ily = ilyRef.current;
      const aboutBgEl = aboutBgRef.current;
      const bottomBar = bottomBarRef.current;

      if (!trigger || !left || !right || !campus || !tagsEl || !ily || !aboutBgEl || !bottomBar) return;

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        gsap.set([campus, ily], { opacity: 1, y: -10, x: -8, scale: 0.50 });
        gsap.set([left, right, aboutBgEl, bottomBar], { opacity: 0 });
        return;
      }

      // Initial State: Text cards & Illy side-by-side on aboutbg pedestal, Campus down below
      gsap.set([left, right], { opacity: 1, x: 0 });
      gsap.set(aboutBgEl, { opacity: 1, scale: 1 });
      gsap.set(bottomBar, { opacity: 1, y: 0 });
      gsap.set(ily, { opacity: 1, y: 0, x: 0, scale: 1 });
      gsap.set(campus, { opacity: 0, y: 550, scale: 0.92 });

      const tagEls = Array.from(tagsEl.querySelectorAll<HTMLElement>("[data-tag]"));
      gsap.set(tagEls, { opacity: 0, y: 20, scale: 0.9 });

      // Master Scroll Scrub Timeline
      const tl = gsap.timeline({ paused: true });

      // 1. Stage 1 elements (Text cards, aboutbg, bottom feature bar) fade & slide out
      tl.to(left, { opacity: 0, x: -140, ease: "power2.inOut", duration: 30 }, 0);
      tl.to(right, { opacity: 0, x: 140, ease: "power2.inOut", duration: 30 }, 0);
      tl.to(aboutBgEl, { opacity: 0, ease: "power2.inOut", duration: 30 }, 0);
      tl.to(bottomBar, { opacity: 0, y: 30, ease: "power2.inOut", duration: 25 }, 0);

      // 2. 3D Campus rises UP from bottom into place under Illy
      tl.to(campus, { opacity: 1, y: 0, scale: 1, ease: "power2.out", duration: 45 }, 10);

      // 2.1 Scale Illy down to 0.50 and shift left (x: -8, y: -10) to sit centered on campus map
      tl.to(ily, { scale: 0.50, x: -8, y: -10, ease: "power2.out", duration: 45 }, 10);

      // 3. Building cards pop into position around the campus
      tagEls.forEach((el, i) => {
        tl.to(
          el,
          { opacity: 1, y: 0, scale: 1, ease: "back.out(1.4)", duration: 12 },
          45 + i * 8
        );
      });

      // Keep campus & Illy solid
      tl.to(campus, { opacity: 1, duration: 100 }, 0);
      tl.to(ily, { opacity: 1, duration: 100 }, 0);

      ScrollTrigger.refresh();

      // Pinned Launch Trigger
      const st = ScrollTrigger.create({
        trigger: trigger,
        start: "top top",
        end: "+=160%",
        pin: true,
        scrub: 1,
        animation: tl,
      });

      return () => {
        st.kill();
        tl.kill();
      };
    });

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      ref={triggerRef}
      id="meet-illy"
      className="relative w-full overflow-hidden bg-[#EEEEF8]"
    >
      {/* Viewport Stage Frame — Shifted down with pt-20 sm:pt-28 pb-8 for hero spacing */}
      <div className="relative flex h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#EEEEF8] pt-20 sm:pt-28 pb-8">

        {/* ── Background Image Layer (aboutbg.webp for Section 2) ── */}
        <div
          ref={aboutBgRef}
          className="pointer-events-none absolute inset-0 z-[5] flex items-center justify-center overflow-hidden"
        >
          <img
            src={aboutBg}
            alt="Certily AI Campus Background"
            className="h-full w-full object-cover object-[center_38%] select-none"
            draggable={false}
          />
          {/* Ambient Lighting & Soft Vignette Overlays for High Contrast */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#EEEEF8]/45 via-transparent to-[#EEEEF8]/35" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_42%,transparent_35%,rgba(238,238,248,0.45)_100%)]" />
          <div className="absolute -left-36 top-10 h-[500px] w-[500px] rounded-full bg-[#5B4CF5]/[0.07] blur-3xl" />
          <div className="absolute -right-28 bottom-10 h-[450px] w-[450px] rounded-full bg-[#00C9A7]/[0.06] blur-3xl" />
        </div>

        {/* ── Stage 1: Top Section Typography Row (Pure Unboxed Text) ── */}
        <div className="relative z-[30] flex w-full max-w-[1240px] items-start justify-between px-6 sm:px-10 pt-2">
          
          {/* LEFT SIDE: ABOUT ILLY */}
          <div
            ref={leftRef}
            className="w-[280px] sm:w-[320px] md:w-[350px] select-none text-left"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-gray-200/80 bg-white/95 px-3.5 py-1 text-xs font-bold tracking-wide text-[#0F1533] shadow-xs backdrop-blur-sm">
              <span>👋</span> MEET <span className="text-[#5B4CF5]">ILLY</span>
            </span>

            <h2 className="mt-3 font-display text-[1.85rem] sm:text-[2.2rem] md:text-[2.45rem] font-extrabold leading-[1.08] tracking-tight text-[#0F1533]">
              Your 24/7<br />
              <span className="text-[#5B4CF5]">AI Campus</span><br />
              Guide & Mentor
            </h2>

            <p className="mt-3 text-[13.5px] sm:text-[14.5px] leading-relaxed font-medium text-[#0F1533]/85 max-w-[320px]">
              Illy guides your learning journey, points you to custom pathways, assists in the AI Lab, and celebrates every milestone along the way.
            </p>

            {/* CTAs */}
            <div className="mt-6 flex items-center">
              <button
                type="button"
                onClick={() =>
                  document.getElementById("meet-illy")?.scrollIntoView({ behavior: "smooth" })
                }
                className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#5B4CF5] px-6 text-xs sm:text-sm font-bold text-white shadow-[0_8px_25px_-6px_rgba(91,76,245,0.5)] transition-all hover:bg-[#4A3BE0] hover:scale-105 active:scale-95"
              >
                Explore Learning
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>
          </div>

          {/* Center Spacer for Illy Mascot */}
          <div className="w-[120px] sm:w-[170px] shrink-0" />

          {/* RIGHT SIDE: ABOUT CERTILY */}
          <div
            ref={rightRef}
            className="w-[280px] sm:w-[320px] md:w-[350px] select-none text-left"
          >
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#5B4CF5]/20 bg-[#EDE9FF]/90 px-3.5 py-1 text-xs font-bold tracking-wider text-[#5B4CF5] shadow-2xs backdrop-blur-sm">
              ✦ CERTILY AI CAMPUS
            </span>

            <h3 className="mt-3 font-display text-[1.85rem] sm:text-[2.2rem] md:text-[2.45rem] font-extrabold leading-[1.08] tracking-tight text-[#0F1533]">
              Real skills.<br />
              Real <span className="text-[#5B4CF5]">impact.</span>
            </h3>

            <p className="mt-3 text-[13.5px] sm:text-[14.5px] leading-relaxed font-medium text-[#0F1533]/85 max-w-[320px]">
              Certily is an interactive AI-powered learning environment with structured pathways, hands-on labs, and real credentials.
            </p>
          </div>

        </div>

        {/* ── Illy Mascot (Standing on pedestal in aboutbg) ── */}
        <div
          ref={ilyRef}
          className="absolute z-[25] transition-transform duration-300"
          style={{
            left: "50%",
            top: "52.5%",
            transform: "translate(-50%, -50%)",
            width: "clamp(200px, 22vw, 290px)",
          }}
        >
          <div className="pointer-events-none absolute -inset-6 rounded-full bg-[#5B4CF5]/15 blur-2xl opacity-60" />
          
          <img
            src={ilyStand}
            alt="Illy — Certily AI Campus Guide"
            className="relative h-auto w-full drop-shadow-[0_18px_40px_rgba(91,76,245,0.28)] select-none"
            draggable={false}
          />
        </div>

        {/* ── Stage 2: 3D Campus Visual (Rises UP from bottom under Illy on scroll) ── */}
        <div
          ref={campusRef}
          className="absolute inset-0 z-[10] flex items-center justify-center px-4 pt-24 pb-2 pointer-events-none"
        >
          <div className="relative w-full max-w-[1050px] xl:max-w-[1120px] flex items-center justify-center mt-6">
            <img
              src={campusBg}
              alt="Certily 3D AI Campus"
              className="h-auto w-full max-h-[68vh] object-contain select-none"
              draggable={false}
              loading="eager"
            />

            {/* Floating Building Tag Cards */}
            <div
              ref={tagsRef}
              className="absolute inset-0 pointer-events-none overflow-visible"
            >
              {TAGS.map((tag) => (
                <TagCard
                  key={tag.id}
                  id={tag.id}
                  label={tag.label}
                  body={tag.body}
                  icon={tag.icon}
                  style={tag.style}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── Bottom Feature Pillars Card (Shifted further down) ── */}
        <div
          ref={bottomBarRef}
          className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-[30] w-full max-w-[1160px] px-4 sm:px-6 flex justify-center"
        >
          {/* Feature Pillars Card */}
          <div className="w-full rounded-3xl border border-white/90 bg-white/95 p-4 sm:p-5 shadow-[0_20px_48px_-12px_rgba(15,21,51,0.09)] backdrop-blur-lg">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 divide-y lg:divide-y-0 lg:divide-x divide-[#E4E2F0]/60">
              
              {/* Item 1 */}
              <div className="flex items-center gap-3.5 pt-2 lg:pt-0 lg:px-4 first:pt-0">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#EDE9FF]">
                  <BookOpen className="h-5 w-5 text-[#5B4CF5]" />
                </span>
                <div className="text-left">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-[#0F1533]">Structured Learning Paths</h4>
                  <p className="text-[11px] text-[#5A607A]">Beginner to Advanced</p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex items-center gap-3.5 pt-2 lg:pt-0 lg:px-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#E0F2FE]">
                  <FlaskConical className="h-5 w-5 text-[#0284C7]" />
                </span>
                <div className="text-left">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-[#0F1533]">Hands-on AI Labs</h4>
                  <p className="text-[11px] text-[#5A607A]">Practice. Build. Master.</p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex items-center gap-3.5 pt-2 lg:pt-0 lg:px-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#FEF3C7]">
                  <Trophy className="h-5 w-5 text-[#D97706]" />
                </span>
                <div className="text-left">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-[#0F1533]">Milestones & Achievements</h4>
                  <p className="text-[11px] text-[#5A607A]">Track. Earn. Celebrate.</p>
                </div>
              </div>

              {/* Item 4 */}
              <div className="flex items-center gap-3.5 pt-2 lg:pt-0 lg:px-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#D1FAE5]">
                  <ShieldCheck className="h-5 w-5 text-[#059669]" />
                </span>
                <div className="text-left">
                  <h4 className="font-display text-xs sm:text-sm font-bold text-[#0F1533]">Industry-Recognized Credentials</h4>
                  <p className="text-[11px] text-[#5A607A]">Prove Your Skills.</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

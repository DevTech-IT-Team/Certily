import { ArrowRight, Play } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import vVideo from "@/assets/Neo.webm";
import aboutBg from "@/assets/vbg.webp";
import { VAvatar } from "./VAvatar";
import { useV } from "./VContext";
import { cn } from "@/lib/utils";

const DEMO_QUESTION =
  "Which pathway fits me in K–12, and where do I start?";

function HeyGenCursor() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 drop-shadow-sm" aria-hidden>
      <path
        d="M4 2.5 L4 18.2 L8.4 14.1 L11.2 21 L13.6 20 L10.7 13.2 L16.8 13.2 Z"
        fill="#111827"
        stroke="#fff"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function VShowcaseScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const guidanceRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const videoMediaRef = useRef<HTMLVideoElement>(null);
  const typedTextRef = useRef<HTMLSpanElement>(null);
  const [activeCard, setActiveCard] = useState<
    "identity" | "guidance" | "question" | "video" | null
  >(null);

  useEffect(() => {
    const v = videoMediaRef.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    const playPromise = v.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }, []);

  useEffect(() => {
    const stage = stageRef.current;
    const cursor = cursorRef.current;
    const identity = identityRef.current;
    const guidance = guidanceRef.current;
    const question = questionRef.current;
    const video = videoRef.current;
    if (!stage || !cursor || !identity || !guidance || !question || !video) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      if (typedTextRef.current) typedTextRef.current.textContent = DEMO_QUESTION;
      return;
    }

    const point = (el: HTMLElement, offsetX = 0.78, offsetY = 0.55) => {
      const sr = stage.getBoundingClientRect();
      const er = el.getBoundingClientRect();
      return {
        x: er.left - sr.left + er.width * offsetX,
        y: er.top - sr.top + er.height * offsetY,
      };
    };

    let typingTimer: number | undefined;
    let tl: gsap.core.Timeline | null = null;
    let ctx: gsap.Context | null = null;

    const buildTimeline = () => {
      ctx?.revert();
      tl?.kill();
      window.clearInterval(typingTimer);

      ctx = gsap.context(() => {
        tl = gsap.timeline({
          repeat: -1,
          repeatDelay: 1.2,
          onRepeat: () => {
            tl?.invalidate();
          },
        });

        const moveTo = (
          el: HTMLElement,
          card: NonNullable<typeof activeCard>,
          ox = 0.78,
          oy = 0.55
        ) => {
          tl!.to(cursor, {
            x: () => point(el, ox, oy).x,
            y: () => point(el, ox, oy).y,
            duration: 0.95,
            ease: "power3.inOut",
            onStart: () => setActiveCard(card),
          });
        };

        const click = () => {
          tl!.to(cursor, { scale: 0.84, duration: 0.1, ease: "power2.in" }).to(cursor, {
            scale: 1,
            duration: 0.18,
            ease: "back.out(2.2)",
          });
        };

        const typeQuestion = () => {
          tl!.add(() => {
            if (typedTextRef.current) typedTextRef.current.textContent = "";
            let i = 0;
            window.clearInterval(typingTimer);
            typingTimer = window.setInterval(() => {
              i += 1;
              if (typedTextRef.current) {
                typedTextRef.current.textContent = DEMO_QUESTION.slice(0, i);
              }
              if (i >= DEMO_QUESTION.length) window.clearInterval(typingTimer);
            }, 26);
          });
          tl!.to({}, { duration: DEMO_QUESTION.length * 0.026 + 0.6 });
        };

        // Reset cursor to start on every repeat
        tl.set(cursor, { x: 12, y: 36, opacity: 0, scale: 1, transformOrigin: "0% 0%" });
        tl.to(cursor, { opacity: 1, duration: 0.35 });

        moveTo(identity, "identity", 0.75, 0.5);
        click();
        tl.to({}, { duration: 0.25 });

        moveTo(guidance, "guidance", 0.65, 0.45);
        click();
        tl.to({}, { duration: 0.2 });

        moveTo(question, "question", 0.75, 0.65);
        click();
        typeQuestion();

        moveTo(video, "video", 0.55, 0.7);
        click();
        tl.to({}, { duration: 0.35 });

        tl.to(cursor, { opacity: 0, duration: 0.35 });
        tl.add(() => {
          setActiveCard(null);
          if (typedTextRef.current) typedTextRef.current.textContent = DEMO_QUESTION;
        });
      }, stage);
    };

    const onResize = () => {
      window.clearInterval(typingTimer);
      buildTimeline();
    };

    const startDelay = window.setTimeout(buildTimeline, 600);
    window.addEventListener("resize", onResize);

    return () => {
      window.clearTimeout(startDelay);
      window.clearInterval(typingTimer);
      window.removeEventListener("resize", onResize);
      ctx?.revert();
      tl?.kill();
      gsap.set(cursor, { clearProps: "all" });
    };
  }, []);

  const cardBase =
    "rounded-2xl border bg-[#EDF7FF] shadow-[0_14px_36px_-18px_rgba(15,21,51,0.14)] transition-all duration-300";
  const cardActive = "border-[#5B4CF5]/40 shadow-[0_18px_44px_-16px_rgba(91,76,245,0.28)]";
  const cardIdle = "border-[#B8E4FF]";

  return (
    <div className="relative mx-auto w-full max-w-[34rem] sm:max-w-[36rem] lg:max-w-[38rem]">
      <div
        ref={stageRef}
        className="relative flex flex-col gap-3.5 overflow-visible sm:block sm:min-h-[30rem] lg:min-h-[32rem]"
      >
        {/* Your guide */}
        <div
          ref={identityRef}
          className={cn(
            "relative z-[3] inline-flex w-fit items-center gap-2.5 rounded-full border py-1.5 pl-1.5 pr-4 sm:absolute sm:left-2 sm:top-1",
            cardBase,
            activeCard === "identity" ? cardActive : cardIdle
          )}
        >
          <VAvatar size="sm" reaction="hi" className="bg-[#0F1533] p-0.5 rounded-full ring-2 ring-white" />
          <span className="text-[13px] font-semibold text-foreground sm:text-sm">Your guide</span>
        </div>

        {/* Avatar Video — transparent background, standing freely with NO zoom effect */}
        <div
          ref={videoRef}
          className="relative z-[1] mx-auto w-full max-w-[13.5rem] sm:absolute sm:right-12 sm:top-1 sm:mx-0 sm:w-[56%] sm:max-w-[19.5rem] lg:right-18 lg:top-0 lg:max-w-[22rem]"
        >
          <div className="relative aspect-[3/4] w-full flex items-end justify-center">
            <video
              ref={videoMediaRef}
              src={vVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="h-full w-full object-contain object-bottom drop-shadow-[0_20px_35px_rgba(15,21,51,0.2)]"
              aria-label="NEO campus guide preview"
            >
              <source src={vVideo} type="video/webm" />
            </video>
          </div>
        </div>

        {/* Campus guidance */}
        <div
          ref={guidanceRef}
          className={cn(
            "relative z-[4] w-full p-3.5 sm:absolute sm:left-3 sm:top-[5.25rem] sm:w-[18rem] sm:p-4",
            cardBase,
            activeCard === "guidance" ? cardActive : cardIdle
          )}
        >
          <div className="flex gap-2.5">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0F1533] text-white sm:h-9 sm:w-9">
              <Play className="ml-0.5 h-3 w-3 fill-current sm:h-3.5 sm:w-3.5" />
            </span>
            <div>
              <p className="text-[13px] font-semibold text-foreground sm:text-sm">Campus guidance</p>
              <p className="mt-0.5 text-[11px] leading-snug text-muted-foreground sm:text-xs">
                Pathways &amp; buildings
              </p>
            </div>
          </div>
        </div>

        {/* Your question */}
        <div
          ref={questionRef}
          className={cn(
            "relative z-[5] w-full p-3.5 sm:absolute sm:bottom-8 sm:left-3 sm:w-[19rem] sm:p-4",
            cardBase,
            activeCard === "question" ? cardActive : cardIdle
          )}
        >
          <p className="font-display text-[13px] font-bold text-foreground sm:text-sm">Your question</p>
          <p className="mt-2 min-h-[2.75rem] text-[11px] leading-snug text-foreground/85 sm:min-h-[3rem] sm:text-xs">
            <span ref={typedTextRef}>{DEMO_QUESTION}</span>
            {activeCard === "question" && (
              <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-[#5B4CF5] align-middle" />
            )}
          </p>
        </div>

        {/* Cursor — animates across stacked mobile + collage desktop */}
        <div
          ref={cursorRef}
          className="pointer-events-none absolute left-0 top-0 z-[100] will-change-transform opacity-0"
        >
          <HeyGenCursor />
        </div>
      </div>
    </div>
  );
}

export function VMentorSection() {
  const { setFloatingOpen, setMessage } = useV();

  const openGuide = () => {
    setMessage(
      "Need directions? I can point you to pathways, buildings, and enrollment — just tap a quick link below.",
      true,
      "hi"
    );
    setFloatingOpen(true);
  };

  return (
    <section
      id="meet-neo"
      data-v-section="v-mentor"
      className="relative overflow-visible border-t border-border/40 bg-[#EEEEF8] py-20 sm:py-24"
    >
      <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center overflow-hidden">
        <img
          src={aboutBg}
          alt=""
          width={1920}
          height={1080}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[center_38%] select-none"
          draggable={false}
        />
        {/* Ambient Lighting & Soft Vignette Overlays for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#EEEEF8]/45 via-transparent to-[#EEEEF8]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_85%_85%_at_50%_42%,transparent_35%,rgba(238,238,248,0.45)_100%)]" />
        <div className="absolute -left-36 top-10 h-[500px] w-[500px] rounded-full bg-[#5B4CF5]/[0.07] blur-3xl" />
        <div className="absolute -right-28 bottom-10 h-[450px] w-[450px] rounded-full bg-[#00C9A7]/[0.06] blur-3xl" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(91,76,245,0.05),transparent_55%)] z-[1]" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <div>
          <div className="max-w-lg">
            <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#5B4CF5]">
              Campus Companion
            </p>

            <h2 className="mt-2.5 font-display text-3xl font-extrabold tracking-tight text-[#0F1533] sm:text-4xl lg:text-[2.65rem] leading-[1.15]">
              Meet <span className="text-[#5B4CF5]">NEO</span>, your guide
              <span className="block text-[#5B4CF5]">across the Certcia campus</span>
            </h2>

            <p className="mt-4 text-sm sm:text-base leading-relaxed text-[#5A607A]">
              Your personal AI companion to navigate learning tracks, master hands-on labs, and stay on track for capstone milestones.
            </p>

            {/* Clean, Non-Texty Highlights */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5B4CF5]/10 text-xs font-bold text-[#5B4CF5]">
                  1
                </span>
                <span className="text-sm font-semibold text-[#0F1533]">
                  Curriculum &amp; pathway recommendations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5B4CF5]/10 text-xs font-bold text-[#5B4CF5]">
                  2
                </span>
                <span className="text-sm font-semibold text-[#0F1533]">
                  Hands-on AI lab guidance &amp; walkthroughs
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#5B4CF5]/10 text-xs font-bold text-[#5B4CF5]">
                  3
                </span>
                <span className="text-sm font-semibold text-[#0F1533]">
                  Capstone milestones &amp; credential readiness
                </span>
              </div>
            </div>

            {/* Grounded Action & Status Row */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <Link
                to="/learning"
                className="group inline-flex h-12 items-center gap-2.5 rounded-full bg-[#5B4CF5] px-7 text-sm font-bold text-white shadow-[0_8px_24px_-6px_rgba(91,76,245,0.45)] transition-all duration-200 hover:bg-[#4A3BE8] hover:shadow-[0_12px_28px_-6px_rgba(91,76,245,0.55)] hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Learning Pathways</span>
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* <div className="inline-flex items-center gap-2 rounded-full border border-[#D8D6EE] bg-white/90 px-3.5 py-2 text-xs font-semibold text-[#5A607A] shadow-xs">
                <span className="h-1.5 w-1.5 rounded-full bg-[#5B4CF5]" />
                <span>Interactive Guide · In Development</span>
              </div> */}
            </div>
          </div>
        </div>

        <div className="relative w-full overflow-visible">
          <VShowcaseScene />
        </div>
      </div>
    </section>
  );
}

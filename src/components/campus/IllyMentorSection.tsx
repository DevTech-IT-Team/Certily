import {
  ArrowRight,
  Compass,
  MapPin,
  Play,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import illyImg from "@/assets/illy.png";
import illyVideo from "@/assets/ilyvideo.mp4";
import { useIlly } from "./IllyContext";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

const DEMO_QUESTION =
  "Which pathway fits me in K–12, and where do I start?";

/** Purple pointer cursor — matches CTA #5B4CF5 */
function HeyGenCursor() {
  return (
    <svg
      viewBox="0 0 28 32"
      className="h-9 w-8 drop-shadow-[0_6px_16px_rgba(91,76,245,0.45)]"
      aria-hidden
      fill="none"
    >
      <path
        d="M3 2.5v22.5l6.2-5.1 3.4 8.2 3.1-1.3-3.5-8.4h7.2L3 2.5z"
        fill="#5B4CF5"
        stroke="white"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IllyShowcaseScene() {
  const stageRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const identityRef = useRef<HTMLDivElement>(null);
  const guidanceRef = useRef<HTMLDivElement>(null);
  const questionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);
  const [typed, setTyped] = useState("");
  const [activeCard, setActiveCard] = useState<
    "identity" | "guidance" | "question" | "video" | null
  >(null);

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
      setTyped(DEMO_QUESTION);
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
      gsap.set(cursor, { x: 12, y: 36, opacity: 0, scale: 1, transformOrigin: "0% 0%" });

      ctx = gsap.context(() => {
        tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });

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
            setTyped("");
            let i = 0;
            window.clearInterval(typingTimer);
            typingTimer = window.setInterval(() => {
              i += 1;
              setTyped(DEMO_QUESTION.slice(0, i));
              if (i >= DEMO_QUESTION.length) window.clearInterval(typingTimer);
            }, 28);
          });
          tl!.to({}, { duration: DEMO_QUESTION.length * 0.028 + 0.55 });
        };

        tl.to(cursor, { opacity: 1, duration: 0.3 });

        moveTo(identity, "identity", 0.88, 0.52);
        click();
        tl.to({}, { duration: 0.25 });

        moveTo(guidance, "guidance", 0.72, 0.42);
        click();
        tl.to({}, { duration: 0.2 });

        moveTo(question, "question", 0.8, 0.68);
        click();
        typeQuestion();

        moveTo(video, "video", 0.86, 0.78);
        click();
        tl.to({}, { duration: 0.35 });

        tl.to(cursor, { opacity: 0, duration: 0.3 });
        tl.add(() => {
          setActiveCard(null);
          setTyped("");
        });
      }, stage);
    };

    const onResize = () => {
      window.clearInterval(typingTimer);
      buildTimeline();
    };

    const startDelay = window.setTimeout(buildTimeline, 700);
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
          <div className="h-9 w-9 overflow-hidden rounded-full bg-[#0F1533] ring-2 ring-white sm:h-10 sm:w-10">
            <img
              src={illyImg}
              alt=""
              className="h-full w-full scale-110 object-contain object-bottom"
            />
          </div>
          <span className="text-[13px] font-semibold text-foreground sm:text-sm">Your guide</span>
        </div>

        {/* Video — centered on mobile, right collage on sm+ */}
        <div
          ref={videoRef}
          className={cn(
            "relative z-[1] mx-auto w-full max-w-[12.5rem] overflow-hidden rounded-[1.5rem] border bg-[#0F1533] shadow-[0_28px_60px_-22px_rgba(15,21,51,0.45)] transition-all duration-300 sm:absolute sm:right-0 sm:top-8 sm:mx-0 sm:w-[55%] sm:max-w-[18rem] lg:max-w-[19.5rem]",
            activeCard === "video"
              ? "border-[#5B4CF5]/35 shadow-[0_32px_64px_-20px_rgba(91,76,245,0.32)]"
              : "border-border/50"
          )}
        >
          <div className="relative aspect-[3/4] w-full">
            <video
              src={illyVideo}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={illyImg}
              className="absolute inset-0 h-full w-full scale-[1.04] object-cover object-[center_74%]"
              aria-label="ILY campus guide preview"
            />
            <div
              className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0F1533]/95 to-transparent"
              aria-hidden
            />
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
            {typed.length > 0 ? typed : activeCard === "question" ? "" : DEMO_QUESTION}
            {activeCard === "question" && (
              <span className="ml-0.5 inline-block h-3.5 w-0.5 animate-pulse bg-[#5B4CF5]" />
            )}
          </p>
        </div>

        {/* Cursor — animates across stacked mobile + collage desktop */}
        <div
          ref={cursorRef}
          className="pointer-events-none absolute left-0 top-0 z-[100] will-change-transform"
          style={{ transform: "translate3d(0,0,0)" }}
        >
          <HeyGenCursor />
        </div>
      </div>
    </div>
  );
}

export function IllyMentorSection() {
  const { setFloatingOpen, setMessage } = useIlly();

  const openGuide = () => {
    setMessage(
      "Need directions? I can point you to pathways, buildings, and enrollment — just tap a quick link below.",
      true
    );
    setFloatingOpen(true);
  };

  return (
    <section
      id="meet-illy"
      data-illy-section="illy-mentor"
      className="relative overflow-visible border-t border-border/40 bg-white py-14 sm:py-16 md:py-24"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(91,76,245,0.05),transparent_55%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-16">
        <Reveal>
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 text-sm font-semibold text-[#5B4CF5]">
              <Sparkles className="h-4 w-4" strokeWidth={2} />
              Meet your campus guide
            </p>

            <h2 className="mt-4 font-display text-3xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-[2.65rem]">
              Never get lost on your learning journey
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              ILY helps you navigate pathways, find the right buildings, and understand what to
              do next — whether you&apos;re exploring for the first time or working toward your
              certification.
            </p>

            <ul className="mt-6 space-y-2.5 text-sm text-foreground/80">
              <li className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B4CF5]/10 text-[#5B4CF5]">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                Find buildings and pathways in seconds
              </li>
              <li className="flex items-center gap-2.5">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#4CD1B0]/15 text-[#00A88A]">
                  <Compass className="h-3.5 w-3.5" />
                </span>
                Clear tips for students and parents
              </li>
            </ul>

            <button
              type="button"
              onClick={openGuide}
              className="group mt-8 inline-flex h-12 items-center gap-2 rounded-full bg-[#5B4CF5] px-7 text-sm font-bold text-white shadow-[0_14px_40px_-14px_rgba(91,76,245,0.55)] transition-all hover:scale-[1.02] hover:bg-[#4A3BE8] active:scale-[0.98]"
            >
              Start exploring
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="relative w-full overflow-visible">
          <IllyShowcaseScene />
        </Reveal>
      </div>
    </section>
  );
}

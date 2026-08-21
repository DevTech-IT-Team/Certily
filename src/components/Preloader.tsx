import { useEffect, useState, useRef } from "react";
import logoImg from "@/assets/logo/certicialogo.png";
import gsap from "gsap";

export function Preloader() {
  const [show, setShow] = useState(() => {
    // Check synchronously so the preloader renders on frame 0, preventing the page from flashing before it.
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("certcia_preloader_v7");
    }
    return false;
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);

      const tl = gsap.timeline();

      // Animate Background Orbs
      gsap.to(".orb-1", { rotation: 360, transformOrigin: "center", duration: 15, repeat: -1, ease: "linear" });
      gsap.to(".orb-2", { rotation: -360, transformOrigin: "center", duration: 15, repeat: -1, ease: "linear" });

      // Entry Animations
      tl.fromTo(
        ".preloader-logo",
        { opacity: 0, scale: 0.5, y: 30 },
        { opacity: 1, scale: 1, y: 0, duration: 1.2, ease: "back.out(1.5)" },
        0.2
      );

      tl.fromTo(
        ".preloader-text",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.15 },
        0.4
      );

      // Logo gentle continuous pulse 
      tl.to(
        ".preloader-logo",
        { scale: 1.05, duration: 1.5, yoyo: true, repeat: -1, ease: "power2.inOut" },
        1.5
      );

      return () => {
        tl.kill();
        document.body.style.overflow = "unset";
      };
    }
  }, [show]);

  const handleEnter = () => {
    const exitTl = gsap.timeline({
      onComplete: () => {
        setShow(false);
        document.body.style.overflow = "unset";
        sessionStorage.setItem("certcia_preloader_v7", "true");
      },
    });

    exitTl.to(
      ".preloader-content",
      { opacity: 0, y: -40, scale: 0.95, duration: 0.6, ease: "power3.inOut" },
      0
    );

    exitTl.to(
      containerRef.current,
      { yPercent: -100, duration: 0.8, ease: "power4.inOut", borderBottomLeftRadius: "20%", borderBottomRightRadius: "20%" },
      0.2
    );
  };

  if (!show) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-genz-hero overflow-hidden"
    >

      {/* Subtle Tech Grid Pattern */}
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

      <div className="preloader-content relative z-10 flex flex-col items-center justify-center w-full px-6 text-center">

        {/* Enhanced Big Logo */}
        <div className="relative mb-10 mt-[-5vh]">
          {/* Ambient glow behind logo */}
          <div className="absolute inset-0 bg-brand-purple/15 blur-[60px] rounded-full scale-150 animate-pulse-glow" />
          <img
            src={logoImg}
            alt="Certcia"
            className="preloader-logo relative h-28 sm:h-36 md:h-44 w-auto object-contain drop-shadow-[0_10px_40px_rgba(91,76,245,0.25)]"
          />
        </div>

        {/* Enter button replacing the old loading dots */}
        <div className="preloader-text flex gap-3 items-center justify-center mt-2">
          <button
            onClick={handleEnter}
            className="px-8 py-3.5 bg-gradient-to-r from-[#5B4CF5] to-[#4CD1B0] hover:scale-105 active:scale-95 transition-all duration-300 rounded-full text-white font-bold shadow-[0_0_20px_rgba(91,76,245,0.4)] text-lg"
          >
            Enter Campus
          </button>
        </div>

      </div>
    </div>
  );
}

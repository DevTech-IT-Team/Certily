import { useEffect, useState, useRef } from "react";
import logoImg from "@/assets/logo/certicialogo.png";
import gsap from "gsap";

export function Preloader() {
  const [show, setShow] = useState(() => {
    // Check synchronously so the preloader renders on frame 0, preventing the page from flashing before it.
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("certcia_preloader_v6");
    }
    return false;
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
      window.scrollTo(0, 0);

      const tl = gsap.timeline({
        onComplete: () => {
          setTimeout(() => {
            setShow(false);
            document.body.style.overflow = "unset";
            sessionStorage.setItem("certcia_preloader_v6", "true");
          }, 400);
        },
      });

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

      // Exit Animation 
      tl.to(
        ".preloader-content",
        { opacity: 0, y: -40, scale: 0.95, duration: 0.6, ease: "power3.inOut" },
        3.0
      );

      tl.to(
        containerRef.current,
        { yPercent: -100, duration: 0.8, ease: "power4.inOut", borderBottomLeftRadius: "20%", borderBottomRightRadius: "20%" },
        3.2
      );

      return () => {
        tl.kill();
        document.body.style.overflow = "unset";
      };
    }
  }, []);

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

        <h1 className="preloader-text font-sans text-4xl sm:text-5xl md:text-6xl font-extrabold text-text-primary tracking-tight mb-4 drop-shadow-sm text-balance">
          Hi! Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#5B4CF5] to-[#4CD1B0]">Certcia</span>
        </h1>

        <p className="preloader-text text-text-secondary text-lg sm:text-xl font-medium max-w-[450px] leading-relaxed mb-10">
          Start your learning journey now.
        </p>

        {/* Elegant pulsing dots replacing the old loading bar */}
        <div className="preloader-text flex gap-3 items-center justify-center mt-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#5B4CF5] shadow-[0_0_10px_rgba(91,76,245,0.8)] animate-pulse" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#4CD1B0] shadow-[0_0_10px_rgba(76,209,176,0.8)] animate-pulse delay-75" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#5B4CF5] shadow-[0_0_10px_rgba(91,76,245,0.8)] animate-pulse delay-150" />
        </div>

      </div>
    </div>
  );
}

import React from "react";
import { ShieldCheck, Radio, Wrench, Award, Users } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Outcome Driven", desc: "Real-world skills & certifications" },
  { icon: Radio, title: "Live & Interactive", desc: "Sessions, masterclasses & labs" },
  { icon: Wrench, title: "Practical Learning", desc: "Build & ship real AI projects" },
  { icon: Award, title: "Certified & Credible", desc: "Industry recognized certificates" },
  { icon: Users, title: "Community First", desc: "Connect & grow with peers" },
];

export const HeroMetrics: React.FC = () => {
  return (
    <div className="w-full animate-fade-up">
      <div className="group relative">
        <div className="absolute -inset-1 rounded-[2.5rem] bg-brand-gradient opacity-10 blur-xl transition-opacity duration-500 group-hover:opacity-25" />
        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/30 bg-gradient-to-br from-card/95 to-card/70 p-8 shadow-elegant backdrop-blur-2xl md:p-10 dark:from-card/80 dark:to-card/50">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,color-mix(in_oklab,var(--brand)_12%,transparent),transparent)] opacity-70"
          />

          <div className="relative z-10 grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-5">
            {features.map((f, i) => (
              <div key={i} className="group/item relative">
                <div className="flex flex-col gap-5">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/40 transition-all duration-300 group-hover/item:scale-105 group-hover/item:bg-brand-gradient group-hover/item:shadow-glow">
                    <f.icon className="h-7 w-7 text-primary transition-colors group-hover/item:text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1.5 text-[16px] font-bold tracking-tight text-foreground transition-colors group-hover/item:text-primary">
                      {f.title}
                    </h4>
                    <p className="text-[13px] font-medium leading-relaxed text-muted-foreground">
                      {f.desc}
                    </p>
                  </div>
                </div>
                {i < features.length - 1 && (
                  <div className="absolute -right-6 top-4 bottom-4 hidden w-px bg-gradient-to-b from-transparent via-border/30 to-transparent lg:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

import { Link } from "@tanstack/react-router";
import { BadgeCheck, FlaskConical, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { VAvatar } from "@/components/campus/VAvatar";
import logoImg from "@/assets/logo/certicialogo.png";
import { cn } from "@/lib/utils";

const BENEFITS = [
  { icon: Sparkles, title: "AI-guided pathways", copy: "Learn with V by your side." },
  { icon: FlaskConical, title: "Real-world practice", copy: "Build skills in the AI Lab." },
  { icon: BadgeCheck, title: "Verified credentials", copy: "Showcase proof of mastery." },
] as const;

export function AuthShell({
  children,
  eyebrow,
  title,
  titleAccent,
  subtitle,
}: {
  children: ReactNode;
  eyebrow: string;
  title: string;
  titleAccent: string;
  subtitle: string;
}) {
  return (
    <section className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[#EEEEF8] pt-20 pb-10 sm:pt-24 sm:pb-14">
      <div className="pointer-events-none absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#5B4CF5]/12 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#4CD1B0]/12 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.06]" />

      <div className="relative mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:items-stretch lg:gap-10 lg:px-8">
        <aside className="relative hidden overflow-hidden rounded-[1.75rem] bg-[#1B2559] p-8 text-white shadow-[0_28px_60px_-28px_rgba(15,21,51,0.55)] lg:flex lg:flex-col lg:justify-between lg:p-10">
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#5B4CF5]/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-[#4CD1B0]/25 blur-3xl" />

          <div className="relative">
            <Link to="/" className="inline-flex items-center">
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                certcia
              </span>
            </Link>
            <p className="mt-8 text-[11px] font-bold uppercase tracking-[0.22em] text-[#4CD1B0]">
              {eyebrow}
            </p>
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-[1.1] tracking-[-0.03em]">
              {title}
              <span className="mt-1 block text-[#C4BDF8]">{titleAccent}</span>
            </h1>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-white/70">{subtitle}</p>
          </div>

          <div className="relative mt-10 flex items-end justify-between gap-6">
            <ul className="space-y-4">
              {BENEFITS.map(({ icon: Icon, title: t, copy }) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#C4BDF8] ring-1 ring-white/15">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold">{t}</p>
                    <p className="mt-0.5 text-xs text-white/60">{copy}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="w-[7.5rem] shrink-0">
              <div className="aspect-[3/4] w-full animate-float-slow">
                <VAvatar fill reaction="hi" onLight={false} grounded={false} className="h-full w-full" />
              </div>
            </div>
          </div>
        </aside>

        <div className="flex flex-col justify-center">
          <div className="mb-6 flex items-center justify-between lg:hidden">
            <Link to="/">
              <img src={logoImg} alt="Certcia" className="h-9 w-auto" draggable={false} />
            </Link>
          </div>
          <div
            className={cn(
              "rounded-[1.75rem] border border-[#E4E2F0] bg-white p-6 shadow-[0_20px_50px_-24px_rgba(15,21,51,0.2)] sm:p-8",
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

export const fieldClass =
  "h-12 w-full rounded-xl border border-[#E8EAF4] bg-[#F7F8FC] px-4 text-sm text-[#0F1533] outline-none transition-colors placeholder:text-[#9AA0B4] focus:border-[#5B4CF5]/40 focus:bg-white focus:ring-4 focus:ring-[#5B4CF5]/10";

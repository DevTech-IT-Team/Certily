import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { GraduationCap, Lock, Menu, Search, X } from "lucide-react";
import { ENROLLED_AREAS } from "@/lib/campus";
import { useEnrollment } from "@/lib/enrollment";
import { cn } from "@/lib/utils";

const LMS_LOGIN = "https://lmsathena.com/login";

const NAV_LINKS = [
  { to: "/courses", label: "Learning" },
  { to: "/ai-lab", label: "AI Lab", enrolledOnly: true },
  { to: "/news", label: "Newsroom" },
  { to: "/events", label: "Community" },
  { to: "/contact", label: "About" },
] as const;

const MOBILE_GROUPS = [
  {
    label: "Platform",
    items: [
      { to: "/courses", label: "Learning Pathways" },
      { to: "/ai-lab", label: "AI Lab" },
      { to: "/news", label: "Newsroom" },
      { to: "/certification-hall", label: "Certification Hall" },
    ],
  },
  {
    label: "More",
    items: [
      { to: "/events", label: "Community & Events" },
      { to: "/faqs", label: "Help Center" },
      { to: "/contact", label: "Contact" },
    ],
  },
] as const;

function CertilyLogo({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B4CF5] to-[#4A3BE8] shadow-[0_4px_16px_-4px_rgba(91,76,245,0.55)] ring-1 ring-[#5B4CF5]/20",
        className
      )}
      aria-hidden
    >
      <GraduationCap className="h-[18px] w-[18px] text-white" strokeWidth={2.25} />
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { enrolled } = useEnrollment();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [path]);

  const isActive = (to: string) => path === to || path.startsWith(`${to}/`);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all", scrolled ? "py-1" : "py-2")}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={cn(
            "flex items-center justify-between gap-3 rounded-2xl border border-[#E4E2F0]/90 bg-white/95 px-3 py-2 shadow-[0_8px_32px_-12px_rgba(15,21,51,0.12)] backdrop-blur-md sm:rounded-full sm:px-4 sm:py-2.5",
            scrolled && "shadow-[0_12px_40px_-14px_rgba(15,21,51,0.16)]"
          )}
        >
          <Link to="/" className="group flex shrink-0 items-center gap-2.5">
            <CertilyLogo className="transition-transform duration-300 group-hover:scale-105" />
            <span className="leading-none">
              <span className="font-display text-lg font-bold tracking-tight text-foreground">
                Certily
              </span>
              <span className="mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.14em] text-[#5A5872]/80">
                AI Campus
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-0.5 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  isActive(link.to)
                    ? "text-[#5B4CF5]"
                    : "text-[#5A5872] hover:bg-[#F7F8FC] hover:text-foreground"
                )}
              >
                {link.label}
                {"enrolledOnly" in link && link.enrolledOnly && !enrolled && (
                  <Lock className="ml-1 inline h-3 w-3 opacity-45" aria-label="Enrolled only" />
                )}
                {isActive(link.to) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#5B4CF5]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="hidden flex-1 justify-center px-2 xl:flex xl:max-w-[15rem]">
            <label className="relative w-full">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <input
                type="search"
                placeholder="Search campus..."
                className="h-9 w-full rounded-xl border border-[#E4E2F0] bg-[#F7F8FC]/90 pl-9 pr-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-[#5B4CF5]/40 focus:bg-white focus:ring-2 focus:ring-[#5B4CF5]/15"
              />
            </label>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <a
              href={LMS_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-[#5A5872] transition-colors hover:bg-[#F7F8FC] hover:text-foreground sm:inline"
            >
              Log in
            </a>
            <a
              href={LMS_LOGIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden h-9 items-center rounded-full bg-[#5B4CF5] px-5 text-sm font-bold text-white shadow-[0_8px_24px_-10px_rgba(91,76,245,0.55)] transition-all hover:bg-[#4A3BE8] hover:scale-[1.02] active:scale-[0.98] sm:inline-flex"
            >
              Sign Up
            </a>
            <button
              type="button"
              className="rounded-lg p-2 text-foreground/80 transition-colors hover:bg-[#F7F8FC] lg:hidden"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="mt-2 rounded-2xl border border-[#E4E2F0] bg-white p-3 shadow-[0_16px_48px_-16px_rgba(15,21,51,0.14)] lg:hidden">
            {MOBILE_GROUPS.map((group) => (
              <div key={group.label} className="mb-3 last:mb-0">
                <p className="px-2 py-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  {group.label}
                </p>
                {group.items.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center justify-between rounded-lg px-2 py-2.5 text-sm font-medium hover:bg-[#F7F8FC]"
                  >
                    {item.label}
                    {ENROLLED_AREAS.some((b) => b.route === item.to) && !enrolled && (
                      <Lock className="h-3.5 w-3.5 text-muted-foreground" />
                    )}
                  </Link>
                ))}
              </div>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2 border-t border-border/60 pt-3">
              <a
                href={LMS_LOGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center rounded-full border border-[#E4E2F0] text-sm font-semibold text-foreground"
              >
                Log in
              </a>
              <a
                href={LMS_LOGIN}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 items-center justify-center rounded-full bg-[#5B4CF5] text-sm font-bold text-white"
              >
                Sign Up
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

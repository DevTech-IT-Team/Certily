import { Link } from "@tanstack/react-router";
import { ChevronRight, GraduationCap, Linkedin, Twitter, Youtube } from "lucide-react";
import { cn } from "@/lib/utils";

const platform = [
  { label: "Learning Pathways", to: "/courses" },
  { label: "AI Lab", to: "/ai-lab" },
  { label: "Newsroom", to: "/news" },
  { label: "Certification Hall", to: "/certification-hall" },
];

const company = [
  { label: "About", to: "/contact" },
  { label: "Blog", to: "/news" },
  { label: "Careers", to: "/contact" },
  { label: "Partnerships", to: "/contact" },
];

const support = [
  { label: "Help Center", to: "/faqs" },
  { label: "Contact", to: "/contact" },
  { label: "Privacy Policy", to: "/contact" },
  { label: "Terms", to: "/contact" },
];

function FooterLink({ label, to }: { label: string; to: string }) {
  return (
    <li>
      <Link
        to={to}
        className="group flex items-start gap-2 text-sm text-white/70 transition-colors hover:text-white"
      >
        <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00C9A7]" aria-hidden />
        {label}
      </Link>
    </li>
  );
}

export function Footer() {
  return (
    <footer className="relative mt-0 border-t border-white/10 bg-[#0F0E1A] text-white">
      <div className="relative mx-auto max-w-6xl px-4 py-10 md:py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="inline-flex items-center gap-2.5">
              <span
                className={cn(
                  "flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B4CF5] to-[#4A3BE8] shadow-[0_4px_16px_-4px_rgba(91,76,245,0.45)]"
                )}
                aria-hidden
              >
                <GraduationCap className="h-[18px] w-[18px] text-white" strokeWidth={2.25} />
              </span>
              <span className="font-display text-lg font-bold">Certily</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Your AI-powered learning campus — credible certifications, real projects, and Illy
              mentorship for students, parents, and professionals.
            </p>
            <div className="mt-4 flex items-center gap-2">
              {[Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-[#5B4CF5] hover:text-white"
                  aria-label="Social"
                >
                  <Icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Platform">
            <p className="text-xs font-bold uppercase tracking-wider text-white/90">Platform</p>
            <ul className="mt-3 space-y-2">
              {platform.map((item) => (
                <FooterLink key={item.to} {...item} />
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <p className="text-xs font-bold uppercase tracking-wider text-white/90">Company</p>
            <ul className="mt-3 space-y-2">
              {company.map((item) => (
                <FooterLink key={item.label} {...item} />
              ))}
            </ul>
          </nav>

          <nav aria-label="Support">
            <p className="text-xs font-bold uppercase tracking-wider text-white/90">Support</p>
            <ul className="mt-3 space-y-2">
              {support.map((item) => (
                <FooterLink key={item.label} {...item} />
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-white/50 sm:flex-row">
          <span>© {new Date().getFullYear()} Certily AI Campus. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}

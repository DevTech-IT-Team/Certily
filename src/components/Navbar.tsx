import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo/certicialogo.png";
import { useCart } from "@/lib/CartContext";

const LMS_LOGIN = "https://lmsathena.com/login";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/learning", label: "Explore Pathways" },
  { to: "/certcia-way", label: "Certcia Way" },
  { to: "/for-enterprises", label: "For Enterprises" },
  { to: "/news", label: "News" },
  { to: "/about", label: "About" },
] as const;

const MOBILE_GROUPS = [
  {
    label: "Platform",
    items: [
      { to: "/", label: "Home" },
      { to: "/learning", label: "Explore Pathways" },
      { to: "/certcia-way", label: "Certcia Way" },
      { to: "/for-enterprises", label: "For Enterprises" },
      { to: "/certification-hall", label: "Certification Hall" },
    ],
  },
  {
    label: "More",
    items: [
      { to: "/news", label: "News" },
      { to: "/about", label: "About" },
      { to: "/faqs", label: "Help Center" },
      { to: "/contact", label: "Contact" },
    ],
  },
];

function CertciaLogo({ className }: { className?: string }) {
  return (
    <img
      src={logoImg}
      alt="Certcia AI Campus"
      className={cn("h-9 w-auto object-contain", className)}
      draggable={false}
    />
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const { cartCount } = useCart();

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
          <Link to="/" className="group flex shrink-0 items-center">
            <CertciaLogo className="h-10 transition-transform duration-300 group-hover:scale-105" />
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
                {isActive(link.to) && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-[#5B4CF5]" />
                )}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Shopping Cart Icon */}
            <Link 
              to="/cart" 
              className="relative rounded-full p-2 text-[#5A5872] transition-colors hover:bg-[#F7F8FC] hover:text-[#1C1D1F]"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#5B4CF5] text-[10px] font-bold text-white shadow-sm">
                  {cartCount}
                </span>
              )}
            </Link>

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

import { useNavigate } from "@tanstack/react-router";
import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { VAvatar } from "@/components/campus/VAvatar";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo/certicialogo.png";

const fieldClass =
  "h-11 w-full rounded-xl border border-[#E8EAF0] bg-[#F7F8FC] px-3.5 text-[14px] text-[#0F1533] outline-none transition-colors placeholder:text-[#A0A6B8] focus:border-[#5B4CF5] focus:bg-white";

const ease = [0.22, 1, 0.36, 1] as const;
const swapEase = [0.4, 0, 0.2, 1] as const;

export function CertciaAuthShell({
  initialMode = "login",
}: {
  initialMode?: "login" | "signup";
}) {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const isSignup = mode === "signup";

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [showLoginPw, setShowLoginPw] = useState(false);
  const [loginBusy, setLoginBusy] = useState(false);
  const [loginErr, setLoginErr] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignupPw, setShowSignupPw] = useState(false);
  const [signupBusy, setSignupBusy] = useState(false);
  const [signupErr, setSignupErr] = useState("");

  const switchMode = (next: "login" | "signup") => {
    if (next === mode) return;
    setMode(next);
    // Update URL without remounting (remount kills the swap animation)
    const path = next === "login" ? "/login" : "/signup";
    window.history.replaceState(window.history.state, "", path);
  };

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoginErr("");
    if (!loginEmail.trim() || !loginPw) {
      setLoginErr("Enter your email and password.");
      return;
    }
    setLoginBusy(true);
    window.setTimeout(() => {
      setLoginBusy(false);
      void navigate({ to: "/dashboard" });
    }, 650);
  };

  const onSignup = (e: FormEvent) => {
    e.preventDefault();
    setSignupErr("");
    if (!name.trim() || !email.trim() || password.length < 8) {
      setSignupErr("Fill every field. Password needs at least 8 characters.");
      return;
    }
    setSignupBusy(true);
    window.setTimeout(() => {
      setSignupBusy(false);
      void navigate({ to: "/learning" });
    }, 650);
  };

  return (
    <div className="relative flex min-h-[calc(100svh-4rem)] flex-1 items-center justify-center bg-[#F7F8FC] px-4 pb-10 pt-14 sm:px-6 sm:pb-12 sm:pt-16 lg:pt-20">
      <div className="w-full max-w-[820px]">
        {/* Mobile */}
        <div className="overflow-hidden rounded-2xl border border-[#ECEEF5] bg-white lg:hidden">
          <BrandPanel
            compact
            reaction={isSignup ? "point" : "hi"}
            eyebrow={isSignup ? "You can easily" : "Welcome back"}
            title={
              isSignup
                ? "Access pathways, labs, and credentials."
                : "Continue your certification journey."
            }
          />
          <div className="p-5 sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={mode}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.25, ease }}
              >
                {isSignup ? (
                  <SignupForm
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    password={password}
                    setPassword={setPassword}
                    showPw={showSignupPw}
                    setShowPw={setShowSignupPw}
                    err={signupErr}
                    busy={signupBusy}
                    onSubmit={onSignup}
                    onSwitch={() => switchMode("login")}
                  />
                ) : (
                  <LoginForm
                    email={loginEmail}
                    setEmail={setLoginEmail}
                    password={loginPw}
                    setPassword={setLoginPw}
                    showPw={showLoginPw}
                    setShowPw={setShowLoginPw}
                    err={loginErr}
                    busy={loginBusy}
                    onSubmit={onLogin}
                    onSwitch={() => switchMode("signup")}
                  />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Desktop */}
        <div className="relative hidden h-[540px] overflow-hidden rounded-2xl border border-[#ECEEF5] bg-white lg:block">
          {/* Login form — right side */}
          <motion.div
            className="absolute inset-y-0 right-0 z-10 flex w-1/2 items-center px-10 py-8"
            initial={false}
            animate={{
              opacity: isSignup ? 0 : 1,
              x: isSignup ? 28 : 0,
              pointerEvents: isSignup ? "none" : "auto",
            }}
            transition={{ duration: 0.55, ease: swapEase }}
          >
            <LoginForm
              email={loginEmail}
              setEmail={setLoginEmail}
              password={loginPw}
              setPassword={setLoginPw}
              showPw={showLoginPw}
              setShowPw={setShowLoginPw}
              err={loginErr}
              busy={loginBusy}
              onSubmit={onLogin}
              onSwitch={() => switchMode("signup")}
            />
          </motion.div>

          {/* Signup form — left side */}
          <motion.div
            className="absolute inset-y-0 left-0 z-10 flex w-1/2 items-center px-10 py-8"
            initial={false}
            animate={{
              opacity: isSignup ? 1 : 0,
              x: isSignup ? 0 : -28,
              pointerEvents: isSignup ? "auto" : "none",
            }}
            transition={{ duration: 0.55, ease: swapEase }}
          >
            <SignupForm
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              showPw={showSignupPw}
              setShowPw={setShowSignupPw}
              err={signupErr}
              busy={signupBusy}
              onSubmit={onSignup}
              onSwitch={() => switchMode("login")}
            />
          </motion.div>

          {/* Brand panel — slides with transform (GPU) */}
          <motion.div
            className="absolute inset-y-2.5 left-2.5 z-20 w-[calc(50%-0.75rem)] overflow-hidden rounded-xl will-change-transform"
            initial={false}
            animate={{ x: isSignup ? "100%" : "0%" }}
            transition={{ duration: 0.7, ease: swapEase }}
          >
            <BrandPanel
              reaction={isSignup ? "hi" : "point"}
              eyebrow={isSignup ? "Already with us?" : "You can easily"}
              title={
                isSignup
                  ? "Log in and continue where you left off."
                  : "Get access to pathways, labs, and credentials."
              }
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function BrandPanel({
  eyebrow,
  title,
  compact,
  reaction = "hi",
}: {
  eyebrow: string;
  title: string;
  compact?: boolean;
  reaction?: "hi" | "point";
}) {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-[#1B2559] text-white",
        compact ? "min-h-[180px] p-5" : "p-6",
      )}
    >
      {/* Atmosphere — solid base + pattern, no color gradient */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.14]" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/[0.07]" />
      <div className="pointer-events-none absolute -bottom-20 -left-14 h-56 w-56 rounded-full border border-[#4CD1B0]/15" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[#0F1533]/40" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="inline-flex items-center rounded-lg bg-white px-2.5 py-1.5 shadow-sm">
            <img
              src={logoImg}
              alt="Certcia"
              className="h-6 w-auto object-contain object-left"
              draggable={false}
            />
          </div>
          {!compact && (
            <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-white/70">
              AI Campus
            </span>
          )}
        </div>

        {!compact && (
          <ul className="mt-8 space-y-2.5">
            {["Guided pathways", "Hands-on AI Lab", "Verified credentials"].map((item) => (
              <li
                key={item}
                className="flex items-center gap-2.5 text-[12.5px] font-medium text-white/75"
              >
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#4CD1B0]" />
                {item}
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto flex items-end justify-between gap-3 pt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={eyebrow + title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease }}
              className="min-w-0 flex-1 pb-0.5"
            >
              <div className="mb-2 h-0.5 w-8 rounded-full bg-[#4CD1B0]" />
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-[#4CD1B0]/90">
                {eyebrow}
              </p>
              <h2
                className={cn(
                  "mt-1.5 font-display font-extrabold leading-[1.18] tracking-[-0.03em]",
                  compact ? "text-lg" : "text-[1.35rem]",
                )}
              >
                {title}
              </h2>
            </motion.div>
          </AnimatePresence>

          <div className={cn("shrink-0", compact ? "w-[4.5rem]" : "w-[6.5rem]")}>
            <div className="aspect-[3/4] w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.35)]">
              <VAvatar
                fill
                reaction={reaction}
                onLight={false}
                grounded={false}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoginForm({
  email,
  setEmail,
  password,
  setPassword,
  showPw,
  setShowPw,
  err,
  busy,
  onSubmit,
  onSwitch,
}: {
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  showPw: boolean;
  setShowPw: (v: boolean | ((p: boolean) => boolean)) => void;
  err: string;
  busy: boolean;
  onSubmit: (e: FormEvent) => void;
  onSwitch: () => void;
}) {
  return (
    <div className="mx-auto flex h-full w-full max-w-[21rem] flex-col justify-center">
      <img
        src={logoImg}
        alt="Certcia"
        className="h-8 w-auto object-contain object-left"
        draggable={false}
      />
      <h1 className="mt-5 font-display text-[1.65rem] font-extrabold tracking-[-0.03em] text-[#0F1533]">
        Welcome back
      </h1>
      <p className="mt-2 text-[13px] leading-relaxed text-[#5A607A]">
        Access pathways, labs, and credentials in one place.
      </p>

      <form onSubmit={onSubmit} className="mt-7 space-y-4">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-[#0F1533]">Your email</span>
          <input
            type="email"
            required
            className={fieldClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-[#0F1533]">Password</span>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              required
              className={cn(fieldClass, "pr-10")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              placeholder="••••••••"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPw((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9AA0B4] hover:text-[#5B4CF5]"
            >
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>
        {err && <p className="text-[11px] font-medium text-[#DC2626]">{err}</p>}
        <button
          type="submit"
          disabled={busy}
          className="mt-1 inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#5B4CF5] text-[14px] font-bold text-white transition-colors hover:bg-[#4A3BE0] disabled:opacity-70"
        >
          {busy ? "Signing in…" : "Log in"}
        </button>
      </form>

      <p className="mt-7 text-center text-[13px] text-[#5A607A]">
        Don&apos;t have an account?{" "}
        <button type="button" onClick={onSwitch} className="font-semibold text-[#5B4CF5] hover:underline">
          Sign up
        </button>
      </p>
    </div>
  );
}

function SignupForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  showPw,
  setShowPw,
  err,
  busy,
  onSubmit,
  onSwitch,
}: {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  password: string;
  setPassword: (v: string) => void;
  showPw: boolean;
  setShowPw: (v: boolean | ((p: boolean) => boolean)) => void;
  err: string;
  busy: boolean;
  onSubmit: (e: FormEvent) => void;
  onSwitch: () => void;
}) {
  return (
    <div className="mx-auto flex h-full w-full max-w-[21rem] flex-col justify-center">
      <img
        src={logoImg}
        alt="Certcia"
        className="h-8 w-auto object-contain object-left"
        draggable={false}
      />
      <h1 className="mt-5 font-display text-[1.65rem] font-extrabold tracking-[-0.03em] text-[#0F1533]">
        Create an account
      </h1>
      <p className="mt-2 text-[13px] leading-relaxed text-[#5A607A]">
        Pathways, labs, and credentials — start in one place.
      </p>

      <form onSubmit={onSubmit} className="mt-6 space-y-3.5">
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-[#0F1533]">Full name</span>
          <input
            required
            className={fieldClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Alex Rivera"
            autoComplete="name"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-[#0F1533]">Your email</span>
          <input
            type="email"
            required
            className={fieldClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-[13px] font-semibold text-[#0F1533]">Password</span>
          <div className="relative">
            <input
              type={showPw ? "text" : "password"}
              required
              minLength={8}
              className={cn(fieldClass, "pr-10")}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              autoComplete="new-password"
            />
            <button
              type="button"
              tabIndex={-1}
              onClick={() => setShowPw((v) => !v)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9AA0B4] hover:text-[#5B4CF5]"
            >
              {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </label>
        {err && <p className="text-[11px] font-medium text-[#DC2626]">{err}</p>}
        <button
          type="submit"
          disabled={busy}
          className="mt-1 inline-flex h-11 w-full items-center justify-center rounded-xl bg-[#5B4CF5] text-[14px] font-bold text-white transition-colors hover:bg-[#4A3BE0] disabled:opacity-70"
        >
          {busy ? "Creating…" : "Get Started"}
        </button>
      </form>

      <p className="mt-6 text-center text-[13px] text-[#5A607A]">
        Already have an account?{" "}
        <button type="button" onClick={onSwitch} className="font-semibold text-[#5B4CF5] hover:underline">
          Log in
        </button>
      </p>
    </div>
  );
}


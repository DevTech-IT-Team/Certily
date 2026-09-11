import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Eye, EyeOff, Lock, Mail, User } from "lucide-react";
import { useEffect, useState, type FormEvent } from "react";
import { VAvatar } from "@/components/campus/VAvatar";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo/certicialogo.png";

const fieldClass =
  "h-12 w-full rounded-2xl border border-[#E8EAF4] bg-[#F7F8FC] pl-11 pr-4 text-[14px] text-[#0F1533] outline-none transition-colors placeholder:text-[#A8ADC0] focus:border-[#5B4CF5]/50 focus:bg-white focus:ring-4 focus:ring-[#5B4CF5]/10";

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
    window.history.replaceState(window.history.state, "", next === "login" ? "/login" : "/signup");
  };

  const onLogin = (e: FormEvent) => {
    e.preventDefault();
    setLoginErr("");
    if (!loginEmail.trim() || !loginPw) {
      setLoginErr("Enter your email and password");
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
      setSignupErr("Fill every field — password needs at least 8 characters");
      return;
    }
    setSignupBusy(true);
    window.setTimeout(() => {
      setSignupBusy(false);
      void navigate({ to: "/learning" });
    }, 650);
  };

  return (
    <div className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#EDE9FF] px-4 pb-5 pt-[5.5rem] sm:px-6 lg:pt-[6rem]">
      <div className="pointer-events-none absolute -left-28 top-8 h-[24rem] w-[24rem] rounded-full bg-[#D8D0FF]" />
      <div className="pointer-events-none absolute -right-24 top-24 h-[18rem] w-[18rem] rounded-full bg-[#E4DEFF]" />
      <div className="pointer-events-none absolute -bottom-28 left-1/3 h-[24rem] w-[24rem] rounded-full bg-[#DDD6FF]" />

      <div className="relative z-10 grid w-full max-w-[820px] overflow-hidden rounded-[2rem] bg-white shadow-[0_28px_72px_-28px_rgba(91,76,245,0.3)] lg:h-[min(640px,calc(100svh-8.5rem))] lg:grid-cols-2">
        <div className="relative hidden flex-col items-center justify-center overflow-hidden bg-[#F4F1FF] px-10 py-10 lg:flex">
          <div className="pointer-events-none absolute -left-16 bottom-6 h-56 w-56 rounded-full bg-white/70" />
          <div className="pointer-events-none absolute -right-10 top-16 h-36 w-36 rounded-full bg-[#E8E2FF]" />

          <Link to="/" className="relative z-10">
            <img
              src={logoImg}
              alt="Certcia"
              className="h-12 w-auto object-contain"
              draggable={false}
            />
          </Link>
          <p className="relative z-10 mt-4 max-w-[16rem] text-center text-[11px] font-semibold uppercase leading-relaxed tracking-[0.18em] text-[#8A90A8]">
            Real skills. Real impact.
            <br />
            Built for the future.
          </p>

          <div className="relative z-10 mt-6 w-[13.5rem]">
            <div className="aspect-[3/4] w-full">
              <VAvatar
                fill
                reaction="hi"
                onLight
                grounded={false}
                className="h-full w-full"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center px-8 py-10 sm:px-12 lg:px-14">
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
    <div className="mx-auto w-full max-w-[23.5rem]">
      <h1 className="font-display text-[1.5rem] font-extrabold tracking-[-0.03em] text-[#0F1533] sm:text-[1.7rem]">
        Welcome back to <span className="text-[#5B4CF5]">Certcia</span>
      </h1>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#8A90A8]">
        Enter your credentials to access your account.
      </p>

      <form onSubmit={onSubmit} className="mt-7 space-y-4">
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B0B4C8]" />
          <input
            type="email"
            required
            className={fieldClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
          />
        </div>
        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B0B4C8]" />
          <input
            type={showPw ? "text" : "password"}
            required
            className={cn(fieldClass, "pr-10")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            placeholder="Password"
          />
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPw((v) => !v)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#B0B4C8] hover:text-[#5B4CF5]"
            aria-label={showPw ? "Hide password" : "Show password"}
          >
            {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        <div className="flex justify-end">
          <button type="button" className="text-[13px] font-medium text-[#5B4CF5] hover:underline">
            Forgot your password?
          </button>
        </div>
        {err && <p className="text-[12px] font-medium text-[#DC2626]">{err}</p>}
        <button
          type="submit"
          disabled={busy}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#5B4CF5] text-[15px] font-semibold text-white shadow-[0_10px_28px_-8px_rgba(91,76,245,0.55)] transition-colors hover:bg-[#4A3BE0] disabled:opacity-70"
        >
          {busy ? "Signing in…" : "Sign In"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="mt-5 text-center text-[13px] text-[#8A90A8]">
        New to Certcia?{" "}
        <button type="button" onClick={onSwitch} className="font-semibold text-[#5B4CF5] hover:underline">
          Create an account
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
    <div className="mx-auto w-full max-w-[23.5rem]">
      <h1 className="font-display text-[1.5rem] font-extrabold tracking-[-0.03em] text-[#0F1533] sm:text-[1.7rem]">
        Create your <span className="text-[#5B4CF5]">Certcia</span> account
      </h1>
      <p className="mt-1.5 text-[13px] leading-relaxed text-[#8A90A8]">
        Start earning verified credentials in a few steps
      </p>

      <form onSubmit={onSubmit} className="mt-7 space-y-4">
        <div className="relative">
          <User className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B0B4C8]" />
          <input
            required
            className={fieldClass}
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            autoComplete="name"
          />
        </div>
        <div className="relative">
          <Mail className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B0B4C8]" />
          <input
            type="email"
            required
            className={fieldClass}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="email"
          />
        </div>
        <div className="relative">
          <Lock className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#B0B4C8]" />
          <input
            type={showPw ? "text" : "password"}
            required
            minLength={8}
            className={cn(fieldClass, "pr-10")}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="new-password"
          />
          <button
            type="button"
            tabIndex={-1}
            onClick={() => setShowPw((v) => !v)}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#B0B4C8] hover:text-[#5B4CF5]"
            aria-label={showPw ? "Hide password" : "Show password"}
          >
            {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        </div>
        {err && <p className="text-[12px] font-medium text-[#DC2626]">{err}</p>}
        <button
          type="submit"
          disabled={busy}
          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#5B4CF5] text-[15px] font-semibold text-white shadow-[0_10px_28px_-8px_rgba(91,76,245,0.55)] transition-colors hover:bg-[#4A3BE0] disabled:opacity-70"
        >
          {busy ? "Creating…" : "Create account"}
          <ArrowRight className="h-4 w-4" />
        </button>
      </form>

      <p className="mt-5 text-center text-[13px] text-[#8A90A8]">
        Already have an account?{" "}
        <button type="button" onClick={onSwitch} className="font-semibold text-[#5B4CF5] hover:underline">
          Sign in
        </button>
      </p>
    </div>
  );
}

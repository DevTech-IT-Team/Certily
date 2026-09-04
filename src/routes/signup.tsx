import { createFileRoute } from "@tanstack/react-router";
import { CertciaAuthShell } from "@/components/auth/CertciaAuthShell";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Sign up — Certcia AI Campus" },
      {
        name: "description",
        content: "Create your Certcia account and start earning verified credentials.",
      },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  return <CertciaAuthShell initialMode="signup" />;
}

import { createFileRoute } from "@tanstack/react-router";
import { CertciaAuthShell } from "@/components/auth/CertciaAuthShell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/signup")({
  head: () =>
    pageHead({
      title: "Sign up",
      description: "Create your Certcia account and start earning verified credentials.",
      path: "/signup",
      noIndex: true,
    }),
  component: SignupPage,
});

function SignupPage() {
  return <CertciaAuthShell initialMode="signup" />;
}

import { createFileRoute } from "@tanstack/react-router";
import { CertciaAuthShell } from "@/components/auth/CertciaAuthShell";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/login")({
  head: () =>
    pageHead({
      title: "Log in",
      description: "Log in to Certcia to continue your certification pathways.",
      path: "/login",
      noIndex: true,
    }),
  component: LoginPage,
});

function LoginPage() {
  return <CertciaAuthShell initialMode="login" />;
}

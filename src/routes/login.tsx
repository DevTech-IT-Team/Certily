import { createFileRoute } from "@tanstack/react-router";
import { CertciaAuthShell } from "@/components/auth/CertciaAuthShell";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Certcia AI Campus" },
      {
        name: "description",
        content: "Log in to Certcia to continue your certification pathways.",
      },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return <CertciaAuthShell initialMode="login" />;
}

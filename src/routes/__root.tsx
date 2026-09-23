import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import { lazy, Suspense, useEffect, useState } from "react";
import appCss from "../styles.css?url";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageEnter } from "../components/campus/PageEnter";
import { VProvider } from "../components/campus/VContext";
import { CartProvider } from "../lib/CartContext";
import { CurrencyProvider } from "../lib/CurrencyContext";
import { DeferredFonts } from "../components/seo/DeferredFonts";
import { JsonLd } from "../components/seo/JsonLd";
import { organizationJsonLd, pageHead, websiteJsonLd } from "../lib/seo";

const VChatFloating = lazy(() =>
  import("../components/campus/VChatbot").then((m) => ({ default: m.VChatFloating })),
);

function DeferredChat() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const enable = () => setReady(true);
    const onInteract = () => enable();
    window.addEventListener("pointerdown", onInteract, { once: true });
    const id = window.setTimeout(enable, 4000);
    return () => {
      window.removeEventListener("pointerdown", onInteract);
      window.clearTimeout(id);
    };
  }, []);

  if (!ready) return null;
  return (
    <Suspense fallback={null}>
      <VChatFloating />
    </Suspense>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => {
    const seo = pageHead({
      title: "Certcia AI Campus — Learn AI, Build Skills, Earn Outcomes",
      path: "/",
    });
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#5B4CF5" },
        ...seo.meta,
      ],
      links: [
        { rel: "icon", href: "/favicon.png", type: "image/png" },
        { rel: "apple-touch-icon", href: "/favicon.png" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        { rel: "stylesheet", href: appCss },
        ...seo.links,
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isAuth = pathname === "/login" || pathname === "/signup";

  return (
    <QueryClientProvider client={queryClient}>
      <CurrencyProvider>
      <CartProvider>
        <VProvider>
          <DeferredFonts />
          <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              <PageEnter>
                <Outlet />
              </PageEnter>
            </main>
            {!isAuth && <Footer />}
            {!isAuth && <DeferredChat />}
          </div>
        </VProvider>
      </CartProvider>
      </CurrencyProvider>
    </QueryClientProvider>
  );
}

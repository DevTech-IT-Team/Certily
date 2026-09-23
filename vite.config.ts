// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";

import { nitro } from "nitro/vite";

function aliasWorkerEntryForPreview(): Plugin {
  return {
    name: "alias-worker-entry-for-preview",
    apply: "build",
    enforce: "post",
    closeBundle() {
      const from = resolve("dist/server/index.js");
      const to = resolve("dist/server/server.js");
      if (existsSync(from)) {
        copyFileSync(from, to);
      }
    },
  };
}

// Vercel: TanStack Start needs Nitro output (see hosting guide). Lovable defaults to Cloudflare
// Workers on build — disable that on Vercel so the platform gets a real server bundle.
// Cloudflare / local: keep Cloudflare plugin + Worker-style `src/server.ts`.
const deployVercel = process.env.VERCEL === "1";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  cloudflare: deployVercel ? false : undefined,
  tanstackStart: {
    server: { entry: "server" },
  },
  plugins: [
    ...(deployVercel ? [nitro({ preset: "vercel" })] : []),
    aliasWorkerEntryForPreview(),
  ],
});

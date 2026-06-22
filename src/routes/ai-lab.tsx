import { createFileRoute } from "@tanstack/react-router";
import { Cpu, Zap, Cloud, Terminal, GitBranch, Database, Activity } from "lucide-react";
import { EnrollGate } from "@/components/campus/EnrollGate";
import { canAccessBuilding } from "@/lib/enrollment";
import { CampusBuildingHeader } from "@/components/campus/CampusBuildingHeader";
import { Section } from "@/components/Section";

export const Route = createFileRoute("/ai-lab")({
  head: () => ({
    meta: [
      { title: "AI Lab — Certily AI Campus" },
      { name: "description", content: "Capstone projects, practice labs, and AI tools workspace for enrolled Certily learners." },
    ],
  }),
  component: AILab,
});

function AILab() {
  if (!canAccessBuilding("enrolled")) {
    return (
      <EnrollGate
        route="/ai-lab"
        buildingName="AI Lab"
        description="Hands-on capstone projects, practice labs, templates, and AI tool workspaces."
        illyMessage="The AI Lab is where you'll build real projects — enroll in a pathway and I'll guide you through every capstone!"
      />
    );
  }

  return (
    <>
      <CampusBuildingHeader route="/ai-lab" />

      <div className="relative border-t border-border/60 bg-[#F5F6FA]/50">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-[0.45] dark:opacity-20" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.28] dark:opacity-[0.12]" />

        <Section spacing="tight" className="relative z-[1] !py-8 md:!py-10">
          <div className="mx-auto max-w-6xl rounded-3xl border border-border/70 bg-background/80 p-5 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-card/50 md:p-7">
            <div className="grid items-start gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="overflow-hidden rounded-2xl border border-border/80 bg-gradient-to-b from-muted/90 to-muted/50 shadow-inner dark:from-zinc-900/90 dark:to-zinc-950/90 dark:border-white/10">
                <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3 dark:border-white/10">
                  <div className="flex gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-destructive/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="ml-2 font-mono text-xs text-muted-foreground">lab.aicampus.io / training</span>
                </div>
                <pre className="max-h-[min(22rem,55vh)] overflow-x-auto overflow-y-auto p-4 text-xs leading-relaxed text-foreground/90 md:text-sm">
                  {`$ aicampus lab spin --gpu h100 --notebook
✓ Cluster ready in 8.2s
✓ Loaded model: meta-llama/Llama-3-8B
✓ Dataset: customer_support_v3 (124k rows)

> training.start(epochs=3, lr=2e-5)
  epoch 1 ────────────── loss 0.421  acc 0.87
  epoch 2 ─────────────  loss 0.198  acc 0.93
  epoch 3 ──────────── ✓ loss 0.087  acc 0.96

✓ Model exported → registry/llama3-cs-v1`}
                </pre>
              </div>
              <div className="lg:pt-1">
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  Build like a research team — solo or with peers.
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Every learner gets autograded notebooks, dataset access, and shareable workspaces. Pair-program in
                  real time, version with Git, and deploy to the cloud with one command.
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-border/50 pt-5 dark:border-white/10">
                  {[
                    "A100 / H100 GPU clusters on demand",
                    "Pre-configured Jupyter, VSCode, & CLI",
                    "Versioned datasets and model registry",
                    "Real-time pair coding with mentors",
                  ].map((x) => (
                    <li key={x} className="flex items-start gap-2.5 text-sm text-foreground/90">
                      <Zap className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden />
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        <Section
          spacing="tight"
          className="relative z-[1] !pt-2 !pb-8 md:!pb-10"
          title={
            <>
              Everything you need to <span className="gradient-text">ship AI</span>
            </>
          }
          align="center"
        >
          <div className="mx-auto grid max-w-6xl gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
            {[
              { i: Cpu, t: "GPU Compute", d: "On-demand A100, H100, and TPU v5 access for training and inference." },
              { i: Cloud, t: "Cloud Notebooks", d: "Stateful Jupyter & VSCode environments, ready in seconds." },
              { i: Database, t: "Curated Datasets", d: "Petabytes of curated text, vision, and multimodal datasets." },
              { i: GitBranch, t: "Model Registry", d: "Version, share, and deploy models with built-in lineage." },
              { i: Terminal, t: "CLI & SDK", d: "Reproducible workflows with the AICampus CLI and Python SDK." },
              { i: Activity, t: "Live Telemetry", d: "Stream training metrics, GPU usage, and cost in real time." },
            ].map((f, i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/70 bg-background/70 p-5 transition-all hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-md dark:border-white/10 dark:bg-card/60 dark:hover:border-primary/30"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                  <f.i className="h-5 w-5" />
                </div>
                <h3 className="mt-3 font-display text-base font-semibold">{f.t}</h3>
                <p className="mt-1.5 text-sm leading-snug text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section spacing="tight" className="relative z-[1] !pt-0 !pb-10 md:!pb-12" align="center">
          <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 rounded-2xl border border-primary/15 bg-gradient-to-r from-primary/[0.07] via-brand-2/[0.05] to-primary/[0.07] p-4 dark:border-primary/20 dark:from-primary/10 dark:via-brand-2/10 dark:to-primary/10 md:gap-4 md:p-5">
            {[
              { k: "10M+", v: "GPU hours run" },
              { k: "120k", v: "Models trained" },
              { k: "<5s", v: "Avg lab boot" },
            ].map((s) => (
              <div
                key={s.k}
                className="min-w-[7.5rem] flex-1 rounded-xl border border-border/60 bg-background/70 px-4 py-3 text-center dark:border-white/10 dark:bg-card/50"
              >
                <div className="font-display text-2xl font-bold gradient-text md:text-3xl">{s.k}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{s.v}</div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
}

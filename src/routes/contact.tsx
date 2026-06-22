import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react";
import { useState } from "react";
import { PageHero, Section } from "@/components/Section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — AI Campus" },
      { name: "description", content: "Get in touch with the AI Campus team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        className="pb-5 md:pb-6"
        title={
          <>
            Let&apos;s <span className="gradient-text">talk</span>
          </>
        }
        description="Partnerships, enterprise rollouts, press, or learner support — we route every message to the right desk."
      />

      <div className="relative border-t border-border/60 bg-muted/35 dark:border-white/10 dark:bg-muted/10">
        <div className="pointer-events-none absolute inset-0 bg-mesh opacity-[0.4] dark:opacity-15" />
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.22] dark:opacity-10" />

        <Section spacing="tight" className="relative z-[1] !py-8 md:!py-10">
          <div className="mx-auto mb-6 flex max-w-6xl flex-col gap-2 rounded-xl border border-border/70 bg-background/85 px-4 py-3 backdrop-blur-sm dark:border-white/10 dark:bg-card/50 sm:flex-row sm:items-center sm:justify-between md:px-5">
            <div className="flex items-center gap-2.5">
              <MessageSquare className="h-5 w-5 shrink-0 text-primary" aria-hidden />
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Contact routing
                </p>
                <p className="text-sm font-semibold">Typical reply within one business day</p>
              </div>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-muted-foreground sm:text-right">
              For billing or access issues, include your account email so we can help faster.
            </p>
          </div>

          <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-12 lg:gap-8">
            <aside className="lg:col-span-4">
              <div className="overflow-hidden rounded-2xl border border-border/70 bg-background/80 shadow-sm dark:border-white/10 dark:bg-card/55">
                <div className="border-b border-border/60 bg-muted/40 px-5 py-4 dark:border-white/10 dark:bg-muted/20">
                  <h2 className="font-display text-lg font-bold tracking-tight">Direct lines</h2>
                  <p className="mt-1 text-xs text-muted-foreground">Prefer email — we monitor inboxes 7 days a week.</p>
                </div>
                <ul className="divide-y divide-border/60 dark:divide-white/10">
                  {[
                    { i: Mail, t: "Email", v: "hello@aicampus.io", hint: "Best for detailed questions" },
                    { i: Phone, t: "Phone", v: "+1 (415) 555-0142", hint: "9am–6pm PT" },
                    { i: MapPin, t: "Office", v: "548 Market St, San Francisco", hint: "Visits by appointment" },
                  ].map((c) => (
                    <li key={c.t} className="flex gap-4 px-5 py-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-gradient text-white shadow-glow">
                        <c.i className="h-5 w-5" aria-hidden />
                      </div>
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-wide text-muted-foreground">{c.t}</div>
                        <div className="mt-0.5 font-semibold text-foreground">{c.v}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{c.hint}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="lg:col-span-8">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="overflow-hidden rounded-2xl border border-border/70 bg-background/85 shadow-sm dark:border-white/10 dark:bg-card/55"
              >
                <div className="border-b border-border/60 bg-muted/40 px-5 py-4 md:px-6 md:py-5 dark:border-white/10 dark:bg-muted/20">
                  <h2 className="font-display text-lg font-bold tracking-tight md:text-xl">Write to us</h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    All fields are required. We never sell your details — only AI Campus staff see this form.
                  </p>
                </div>
                <div className="space-y-4 p-5 md:p-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Full name" name="name" />
                    <Field label="Email" name="email" type="email" />
                  </div>
                  <Field label="Subject" name="subject" />
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      className="mt-1.5 w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-primary/35 dark:border-white/10 dark:bg-card"
                      placeholder="What would you like to achieve with AI Campus?"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-gradient px-6 py-3.5 font-semibold text-white shadow-elegant transition hover:scale-[1.02] active:scale-[0.98]"
                  >
                    {sent ? "Sent ✓" : (
                      <>
                        Send message <Send className="h-4 w-4" aria-hidden />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none ring-offset-background transition focus:ring-2 focus:ring-primary/35 dark:border-white/10 dark:bg-card"
      />
    </div>
  );
}

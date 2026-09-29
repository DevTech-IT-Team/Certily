import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown, Search, Rocket, ShieldCheck, Cpu, CreditCard, Mail, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqJsonLd, pageHead } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faqs")({
  head: () =>
    pageHead({
      title: "Help Center",
      description: "Get help with Certcia learning pathways, certifications, and enterprise features.",
      path: "/faqs",
    }),
  component: FAQs,
});

const GROUPS = [
  {
    g: "Getting Started",
    icon: Rocket,
    desc: "Everything you need to know about joining Certcia.",
    items: [
      ["Do I need prior coding experience?", "Not at all. Our Foundations track gets you ready in 4 weeks before you join the main cohort."],
      ["How long does each course take?", "Most courses run 6–14 weeks with about 6–8 hours of work per week."],
      ["Can I learn at my own pace?", "Yes. Every cohort is also available in self-paced mode, with the same labs and content."],
    ],
  },
  {
    g: "Certifications",
    icon: ShieldCheck,
    desc: "Details on how our credentials work and are verified.",
    items: [
      ["Are certifications industry-recognized?", "Yes. We co-issue certifications with leading AI labs and Fortune 500 partners."],
      ["How are certifications verified?", "Every cert has a unique blockchain-verifiable URL employers can validate instantly."],
    ],
  },
  {
    g: "AI Lab",
    icon: Cpu,
    desc: "Hardware, tools, and platforms provided in our lab.",
    items: [
      ["What does the AI Lab include?", "Cloud GPU access (A100/H100), Jupyter, autograded notebooks, and project templates."],
      ["Do I need a powerful computer?", "No. All compute happens in the cloud — any modern browser works."],
    ],
  },
  {
    g: "Billing & Enterprise",
    icon: CreditCard,
    desc: "Information about pricing, refunds, and corporate plans.",
    items: [
      ["Can my company sponsor me?", "Absolutely. We provide invoices, ROI reports, and an Enterprise plan with SSO."],
      ["Do you offer refunds?", "Yes. 14-day money-back guarantee on all individual plans, no questions asked."],
    ],
  },
];

function FAQs() {
  const [q, setQ] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const filteredGroups = GROUPS.filter(grp => !activeCategory || grp.g === activeCategory);

  return (
    <div className="min-h-screen bg-[#F7F8FC] selection:bg-[#5B4CF5]/20">
      <JsonLd
        data={faqJsonLd(
          GROUPS.flatMap((group) =>
            group.items.map(([question, answer]) => ({ question, answer })),
          ),
        )}
      />
      
      {/* Light Premium Hero */}
      <div className="relative overflow-hidden bg-[#EEEEF8] pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {/* Ambient Light Glows aligned with Home Hero */}
          <div className="pointer-events-none absolute left-1/4 top-0 -z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#5B4CF5]/10 blur-3xl" />
          <div className="pointer-events-none absolute right-10 top-20 -z-0 h-80 w-80 rounded-full bg-[#4CD1B0]/10 blur-3xl" />
          {/* Subtle Grid overlay */}
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-[0.07]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#5B4CF5]/5 border border-[#5B4CF5]/20 mb-8">
              <span className="flex h-2 w-2 rounded-full bg-[#5B4CF5] animate-pulse"></span>
              <span className="text-xs font-bold text-[#5B4CF5] uppercase tracking-widest">Support Center</span>
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] sm:text-5xl lg:text-[4rem] xl:text-[4.5rem]">
              How can we <br className="hidden md:block" />
              <span className="mt-1 block text-[#5B4CF5] sm:mt-1.5">help you today?</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-[#5A607A] max-w-2xl mx-auto font-medium">
              Find answers, learn how things work, and get the most out of your Certcia experience.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="mt-12 mx-auto max-w-2xl relative"
          >
            <div className="relative group rounded-full p-[1px] bg-gradient-to-r from-[#E4E2F0] hover:from-[#5B4CF5]/50 hover:to-[#4CD1B0]/50 transition-all shadow-xl shadow-[#0F1533]/5">
              <div className="relative flex items-center bg-white rounded-full px-6 py-4">
                <Search className="h-6 w-6 text-[#9896A9] group-focus-within:text-[#5B4CF5] transition-colors" />
                <input
                  value={q}
                  onChange={(e) => { setQ(e.target.value); setActiveCategory(null); }}
                  placeholder="Ask anything..."
                  className="w-full bg-transparent border-none px-4 text-[#0F1533] placeholder:text-[#5A607A] focus:outline-none focus:ring-0 text-lg md:text-xl font-medium"
                />
                <AnimatePresence>
                  {q && (
                    <motion.button 
                      initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }}
                      onClick={() => setQ("")} 
                      className="text-[10px] uppercase tracking-widest font-bold bg-[#F0F1F7] text-[#5A607A] hover:bg-[#E4E2F0] hover:text-[#0F1533] px-3 py-1.5 rounded-full transition-colors"
                    >
                      Clear
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 lg:py-32">
        {/* Bento Categories */}
        {!q && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-24"
          >
            {GROUPS.map((grp) => {
              const Icon = grp.icon;
              const isActive = activeCategory === grp.g;
              return (
                <button
                  key={grp.g}
                  onClick={() => setActiveCategory(isActive ? null : grp.g)}
                  className={cn(
                    "group text-left p-8 rounded-3xl transition-all duration-300 border bg-white",
                    isActive 
                      ? "border-[#5B4CF5] shadow-[0_15px_40px_-15px_rgba(91,76,245,0.2)] ring-1 ring-[#5B4CF5]" 
                      : "border-[#E4E2F0] shadow-sm hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0F1533]/5 hover:border-[#5B4CF5]/40"
                  )}
                >
                  <div className={cn(
                    "h-14 w-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300",
                    isActive ? "bg-[#5B4CF5] text-white" : "bg-[#F0F1F7] text-[#5B4CF5] group-hover:bg-[#5B4CF5]/10"
                  )}>
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="font-display font-bold text-[#0F1533] text-xl mb-3">{grp.g}</h3>
                  <p className="text-sm text-[#5A607A] leading-relaxed">{grp.desc}</p>
                </button>
              );
            })}
          </motion.div>
        )}

        {/* FAQ Accordions */}
        <div className="mx-auto max-w-3xl space-y-10">
          <AnimatePresence>
            {filteredGroups.map((grp) => {
              const items = grp.items.filter(([qq, aa]) => (qq + aa).toLowerCase().includes(q.toLowerCase()));
              if (items.length === 0) return null;
              return (
                <motion.section
                  key={grp.g}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <h2 className="flex items-center gap-3 font-display text-2xl font-extrabold tracking-tight text-[#0F1533]">
                      <grp.icon className="h-6 w-6 text-[#5B4CF5]" /> {grp.g}
                    </h2>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#E4E2F0] to-transparent" />
                  </div>
                  
                  <div className="space-y-4">
                    {items.map(([qq, aa]) => (
                      <FaqItem key={qq} q={qq} a={aa} />
                    ))}
                  </div>
                </motion.section>
              );
            })}
          </AnimatePresence>

          {!GROUPS.some((grp) =>
            grp.items.some(([qq, aa]) => (qq + aa).toLowerCase().includes(q.toLowerCase()))
          ) &&
            q.trim().length > 0 && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="rounded-3xl border border-dashed border-[#5B4CF5]/30 bg-[#5B4CF5]/5 py-20 text-center"
              >
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white mb-6 shadow-sm border border-[#E4E2F0]">
                  <Search className="h-8 w-8 text-[#5B4CF5]/40" />
                </div>
                <h3 className="font-display text-2xl font-bold text-[#0F1533] mb-2">No results found</h3>
                <p className="text-[#5A607A] max-w-sm mx-auto">
                  We couldn't find anything matching <span className="font-semibold text-[#0F1533]">"{q}"</span>. Try adjusting your search or reaching out.
                </p>
              </motion.div>
            )}
        </div>
        
        {/* Ultra Premium Contact Banner (Matching About CTA) */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl mt-32 relative overflow-hidden rounded-3xl border border-[#D6D8F5] bg-gradient-to-br from-[#EAEBFE] via-[#E4E6FA] to-[#DFDDF3] p-10 md:p-16 text-center shadow-[0_15px_40px_-15px_rgba(91,76,245,0.2)]"
        >
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#5B4CF5]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#4CD1B0]/20 blur-3xl" />
            
          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm mb-6 text-[#5B4CF5]">
              <MessageCircle className="h-8 w-8" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-[#0F1533] mb-4 tracking-tight">Still need answers?</h2>
            <p className="text-[#5A607A] text-lg md:text-xl max-w-md mx-auto mb-10 font-medium">
              Our support team is online and ready to help you get unstuck in minutes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full md:w-auto">
              <Link
                to="/contact"
                className="group relative inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#5B4CF5] px-8 font-bold text-white transition-transform hover:scale-105 shadow-[0_6px_20px_-6px_rgba(91,76,245,0.5)]"
              >
                Contact Support
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  
  return (
    <div className="rounded-2xl border border-[#E4E2F0] bg-white overflow-hidden transition-all duration-300 hover:border-[#5B4CF5]/30 hover:shadow-md">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="group flex w-full items-center justify-between gap-6 px-6 py-5 md:px-8 md:py-6 text-left"
      >
        <span className={cn(
          "font-display font-bold leading-snug transition-colors text-lg", 
          open ? "text-[#5B4CF5]" : "text-[#0F1533] group-hover:text-[#5B4CF5]"
        )}>
          {q}
        </span>
        <div className={cn(
          "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300", 
          open ? "bg-[#5B4CF5]/10 text-[#5B4CF5]" : "bg-[#F0F1F7] text-[#9896A9] group-hover:bg-[#5B4CF5]/10 group-hover:text-[#5B4CF5]"
        )}>
          <ChevronDown className={cn("h-4 w-4 transition-transform duration-500", open && "rotate-180")} aria-hidden />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-6 pb-6 md:px-8 md:pb-8 pt-2 text-base leading-relaxed text-[#5A607A]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

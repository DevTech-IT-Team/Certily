import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Search,
  Rocket,
  ShieldCheck,
  Cpu,
  CreditCard,
  ChevronDown,
  Mail,
  MessageSquare,
  ArrowRight,
  X,
  Layers,
  ThumbsUp,
  ThumbsDown,
  Sparkles,
  Check,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqJsonLd, pageHead } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/faqs")({
  head: () =>
    pageHead({
      title: "Help Center & FAQs",
      description:
        "Get fast answers to common questions about Certcia learning pathways, certifications, AI cloud compute, and enterprise enrollments.",
      path: "/faqs",
    }),
  component: FAQs,
});

type FaqItemData = {
  id: string;
  q: string;
  a: string;
  tags: string[];
};

type FaqGroupData = {
  id: string;
  g: string;
  badge: string;
  icon: typeof Rocket;
  desc: string;
  items: FaqItemData[];
};

const GROUPS: FaqGroupData[] = [
  {
    id: "getting-started",
    g: "Getting Started",
    badge: "Basics & Prerequisites",
    icon: Rocket,
    desc: "Everything you need to know about joining and beginning your pathway.",
    items: [
      {
        id: "gs-1",
        q: "Do I need prior coding experience?",
        a: "Not at all. Our Foundations module gets beginners completely up to speed in 4 weeks before tackling core specialization tracks. We introduce Python, git, and foundational computational logic from square one.",
        tags: ["Beginner Friendly", "Prerequisites", "Python"],
      },
      {
        id: "gs-2",
        q: "How long does each pathway take to complete?",
        a: "Most pathways run between 6 and 14 weeks at an estimated commitment of 6–8 hours per week. Because lectures and labs are flexible, you can adapt the pacing to your academic or work schedule.",
        tags: ["Course Duration", "Weekly Commitment"],
      },
      {
        id: "gs-3",
        q: "Can I learn at my own pace or are there live cohorts?",
        a: "You get the best of both worlds. Every pathway offers self-paced module access with on-demand cloud labs, alongside weekly mentor office hours and peer study sessions if you want live guidance.",
        tags: ["Flexible Learning", "Self-Paced", "Mentorship"],
      },
      {
        id: "gs-4",
        q: "What computer or hardware do I need to begin?",
        a: "Any modern computer (Mac, Windows, Linux, or Chromebook) with a modern web browser and a stable internet connection. All heavy model training and notebooks execute directly in our cloud AI Lab.",
        tags: ["System Requirements", "Zero Installation"],
      },
    ],
  },
  {
    id: "certifications",
    g: "Certifications & Standards",
    badge: "Accreditation",
    icon: ShieldCheck,
    desc: "Details on credential verification, global education alignment, and sharing.",
    items: [
      {
        id: "cert-1",
        q: "Are Certcia certifications industry-recognized?",
        a: "Yes. Our curriculum is benchmarked against recognized global education frameworks (CSTA, DigComp, Cambridge, England Computing) and co-issued in partnership with leading AI companies and university labs.",
        tags: ["Global Standards", "Industry Recognized"],
      },
      {
        id: "cert-2",
        q: "How do employers verify my credential?",
        a: "Each issued credential contains a cryptographically signed verification URL and QR code. Employers and admissions officers can validate completion status, capstone project artifacts, and competencies in one click.",
        tags: ["Instant Verification", "Cryptographic Security"],
      },
      {
        id: "cert-3",
        q: "Can I add my certificate to LinkedIn and my resume?",
        a: "Yes. We provide 1-click LinkedIn Add-to-Profile integration, downloadable print-ready high-resolution PDFs, and shareable vector badge embeds for your portfolio or personal website.",
        tags: ["LinkedIn Integration", "Resume Ready"],
      },
      {
        id: "cert-4",
        q: "What does capstone project evaluation involve?",
        a: "Every pathway concludes with an industry-grade capstone project. Your code repository and model evaluations are reviewed by senior mentors with personalized feedback before certificate issuance.",
        tags: ["Capstone", "Mentor Review"],
      },
    ],
  },
  {
    id: "ai-lab",
    g: "AI Lab & Cloud Compute",
    badge: "Infrastructure",
    icon: Cpu,
    desc: "Hardware, cloud environments, and platforms provided in our lab.",
    items: [
      {
        id: "lab-1",
        q: "What compute resources are provided in the AI Lab?",
        a: "Learners receive hosted JupyterLab instances backed by cloud GPUs (NVIDIA A100 / H100 clusters), pre-installed with PyTorch, TensorFlow, Hugging Face transformers, and optimized autograding environments.",
        tags: ["NVIDIA A100/H100", "JupyterLab", "PyTorch"],
      },
      {
        id: "lab-2",
        q: "Do I need to install CUDA, Python, or packages locally?",
        a: "No installation is required. Everything runs in isolated cloud containers accessible through your web browser, eliminating driver incompatibilities and environment setup headaches.",
        tags: ["Browser-Based", "Zero Configuration"],
      },
      {
        id: "lab-3",
        q: "Is there a quota or limit on GPU compute hours?",
        a: "Enrolled learners receive generous monthly GPU compute allowances tailored to complete all homework, guided experiments, and capstone training runs. Quotas can be easily scaled if your project demands it.",
        tags: ["Compute Allowance", "GPU Quota"],
      },
    ],
  },
  {
    id: "billing",
    g: "Billing, Refunds & Sponsorship",
    badge: "Pricing & Invoices",
    icon: CreditCard,
    desc: "Information about pricing, refunds, corporate sponsorship, and discounts.",
    items: [
      {
        id: "bill-1",
        q: "Can my employer or school sponsor my enrollment?",
        a: "Yes. Many learners use their company's annual education budget. We provide itemized receipts, course syllabi, ROI summaries, and enterprise group invoicing with direct payment options.",
        tags: ["Corporate Reimbursement", "Invoices"],
      },
      {
        id: "bill-2",
        q: "What is your refund policy?",
        a: "We offer an unconditional 14-day money-back guarantee on all individual pathway purchases. If you decide the course is not the right fit for any reason within the first two weeks, you receive a full refund.",
        tags: ["14-Day Guarantee", "No Risk"],
      },
      {
        id: "bill-3",
        q: "Are student, educator, or financial aid discounts available?",
        a: "Yes. We offer up to 30% discounts for verified students, educators, and eligible financial aid applicants. Simply submit proof of enrollment to our support desk for an immediate coupon code.",
        tags: ["Student Discount", "Financial Aid"],
      },
      {
        id: "bill-4",
        q: "What payment methods and currencies do you support?",
        a: "We support all major credit cards (Visa, Mastercard, Amex), Apple Pay, Google Pay, and international bank transfers for corporate and institutional team licenses.",
        tags: ["Credit Card", "Apple Pay", "Global Currencies"],
      },
    ],
  },
];

const POPULAR_TAGS = [
  "Beginner Friendly",
  "Certifications",
  "AI Lab GPU",
  "14-Day Guarantee",
  "Student Discount",
];

function FAQs() {
  const [q, setQ] = useState("");
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [helpfulFeedback, setHelpfulFeedback] = useState<Record<string, boolean | null>>({});

  const totalQuestions = useMemo(
    () => GROUPS.reduce((acc, g) => acc + g.items.length, 0),
    []
  );

  const filteredGroups = useMemo(() => {
    return GROUPS.map((group) => {
      // Filter by category
      if (activeCategory !== "all" && group.id !== activeCategory) {
        return null;
      }

      // Filter items by search query
      const query = q.trim().toLowerCase();
      if (!query) return group;

      const matchedItems = group.items.filter((item) => {
        const inQuestion = item.q.toLowerCase().includes(query);
        const inAnswer = item.a.toLowerCase().includes(query);
        const inTags = item.tags.some((t) => t.toLowerCase().includes(query));
        return inQuestion || inAnswer || inTags;
      });

      if (matchedItems.length === 0) return null;
      return { ...group, items: matchedItems };
    }).filter(Boolean) as FaqGroupData[];
  }, [q, activeCategory]);

  const matchedCount = useMemo(() => {
    return filteredGroups.reduce((acc, g) => acc + g.items.length, 0);
  }, [filteredGroups]);

  const handleFeedback = (itemId: string, helpful: boolean) => {
    setHelpfulFeedback((prev) => ({ ...prev, [itemId]: helpful }));
  };

  return (
    <div className="min-h-screen bg-[#F8F9FD] selection:bg-[#5B4CF5]/20 pt-24 sm:pt-28 pb-20">
      <JsonLd
        data={faqJsonLd(
          GROUPS.flatMap((group) =>
            group.items.map((item) => ({ question: item.q, answer: item.a }))
          )
        )}
      />

      {/* Hero Header — Clean, high contrast, modern with subtle gradient accents */}
      <section className="relative overflow-hidden border-b border-[#E4E6F0] bg-white py-12 sm:py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#5B4CF5]/8 blur-3xl" />
          <div className="absolute top-1/2 right-12 h-64 w-64 rounded-full bg-[#4CD1B0]/8 blur-3xl" />
          <div className="absolute inset-0 grid-bg opacity-[0.04]" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5B4CF5]/20 bg-[#5B4CF5]/5 px-3.5 py-1 text-xs font-semibold text-[#5B4CF5] mb-5 shadow-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5B4CF5] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#5B4CF5]" />
            </span>
            <span>Help Center &amp; Knowledge Base</span>
          </div>

          <h1 className="font-display text-3xl font-extrabold tracking-tight text-[#0F1533] sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.15]">
            Frequently Asked <span className="text-[#5B4CF5]">Questions</span>
          </h1>

          <p className="mt-4 max-w-2xl mx-auto text-base sm:text-lg text-[#5A607A] leading-relaxed">
            Find fast, transparent answers to questions about our curriculum pathways, verified credentials, cloud GPU labs, and enrollment.
          </p>

          {/* Interactive Search Bar */}
          <div className="mt-8 mx-auto max-w-2xl">
            <div className="relative flex items-center rounded-2xl border border-[#D5D8EB] bg-white px-4 py-2 sm:px-5 sm:py-3 shadow-md shadow-[#0F1533]/5 transition-all focus-within:border-[#5B4CF5] focus-within:ring-3 focus-within:ring-[#5B4CF5]/15 hover:border-[#5B4CF5]/50">
              <Search className="h-5 w-5 shrink-0 text-[#717696]" aria-hidden />
              <input
                type="text"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search questions, topics, or keywords (e.g. Python, GPU, refunds)..."
                className="w-full bg-transparent px-3 text-sm sm:text-base text-[#0F1533] placeholder:text-[#8D92AA] focus:outline-none"
              />
              {q ? (
                <button
                  type="button"
                  onClick={() => setQ("")}
                  className="rounded-full p-1 text-[#8D92AA] hover:bg-[#F0F1F7] hover:text-[#0F1533] transition-colors"
                  aria-label="Clear search"
                >
                  <X className="h-4 w-4" />
                </button>
              ) : (
                <span className="hidden sm:inline-flex text-[11px] font-semibold tracking-wider uppercase text-[#8D92AA] bg-[#F4F5FB] px-2 py-0.5 rounded-md border border-[#E4E6F0]">
                  Search
                </span>
              )}
            </div>

            {/* Popular Topics Quick Filters */}
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
              <span className="text-xs font-semibold text-[#8D92AA] mr-1">Popular:</span>
              {POPULAR_TAGS.map((tag) => (
                <button
                  key={tag}
                  type="button"
                  onClick={() => {
                    setQ(tag);
                    setActiveCategory("all");
                  }}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                    q.toLowerCase() === tag.toLowerCase()
                      ? "border-[#5B4CF5] bg-[#5B4CF5] text-white shadow-xs"
                      : "border-[#E4E6F0] bg-white text-[#5A607A] hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5] hover:bg-[#F9F8FF]"
                  )}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Sorted Grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (Sticky Category Navigator + Direct Support Desk) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            
            {/* Category Navigation Card */}
            <div className="overflow-hidden rounded-2xl border border-[#E2E5F2] bg-white p-4 shadow-sm">
              <div className="flex items-center justify-between pb-3 px-2 border-b border-[#F0F1F7]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8D92AA]">
                  Browse Categories
                </span>
                <span className="rounded-full bg-[#F0F1F7] px-2 py-0.5 text-xs font-bold text-[#5B4CF5]">
                  {totalQuestions} questions
                </span>
              </div>

              <div className="mt-2 space-y-1">
                {/* All Categories Option */}
                <button
                  type="button"
                  onClick={() => {
                    setActiveCategory("all");
                    setQ("");
                  }}
                  className={cn(
                    "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold transition-all",
                    activeCategory === "all"
                      ? "bg-[#5B4CF5] text-white shadow-xs"
                      : "text-[#2B314F] hover:bg-[#F4F5FB] hover:text-[#0F1533]"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Layers className={cn("h-4 w-4", activeCategory === "all" ? "text-white" : "text-[#717696]")} />
                    <span>All Questions</span>
                  </div>
                  <span
                    className={cn(
                      "rounded-full px-2 py-0.5 text-[11px] font-bold",
                      activeCategory === "all" ? "bg-white/20 text-white" : "bg-[#F0F1F7] text-[#717696]"
                    )}
                  >
                    {totalQuestions}
                  </span>
                </button>

                {/* Individual Categories */}
                {GROUPS.map((grp) => {
                  const Icon = grp.icon;
                  const isActive = activeCategory === grp.id;
                  return (
                    <button
                      key={grp.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(grp.id);
                        setQ("");
                      }}
                      className={cn(
                        "flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold transition-all",
                        isActive
                          ? "bg-[#5B4CF5] text-white shadow-xs"
                          : "text-[#2B314F] hover:bg-[#F4F5FB] hover:text-[#0F1533]"
                      )}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className={cn("h-4 w-4", isActive ? "text-white" : "text-[#717696]")} />
                        <span className="truncate">{grp.g}</span>
                      </div>
                      <span
                        className={cn(
                          "rounded-full px-2 py-0.5 text-[11px] font-bold",
                          isActive ? "bg-white/20 text-white" : "bg-[#F0F1F7] text-[#717696]"
                        )}
                      >
                        {grp.items.length}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Direct Support Desk Card */}
            <div className="overflow-hidden rounded-2xl border border-[#DCDDF6] bg-gradient-to-br from-[#F5F5FE] via-[#FFFFFF] to-[#EFF0FC] p-5 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#5B4CF5] text-white shadow-xs">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-[#0F1533]">Need personalized help?</h3>
                  <p className="text-xs text-[#5A607A]">Our advisory team replies within 24h</p>
                </div>
              </div>

              <p className="mt-3 text-xs leading-relaxed text-[#5A607A]">
                Have questions regarding team enrollment, school curriculum integration, or financial aid?
              </p>

              <div className="mt-4 space-y-2">
                <Link
                  to="/contact"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0F1533] px-4 py-2.5 text-xs font-bold text-white transition-all hover:bg-[#5B4CF5] shadow-xs"
                >
                  <span>Contact Support Team</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>

                <a
                  href="mailto:support@certcia.io"
                  className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#E2E5F2] bg-white px-4 py-2 text-xs font-semibold text-[#5A607A] transition-all hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5]"
                >
                  <Mail className="h-3.5 w-3.5" />
                  <span>support@certcia.io</span>
                </a>
              </div>

              {/* Trust Micro-Bullets */}
              <div className="mt-4 pt-4 border-t border-[#E8E9F6] grid grid-cols-2 gap-2 text-[11px] font-medium text-[#717696]">
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#5B4CF5]" />
                  <span>14-day refund</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-[#5B4CF5]" />
                  <span>24/7 AI Lab</span>
                </div>
              </div>
            </div>

          </aside>

          {/* Right Column (FAQ Groups & Accordion Cards) */}
          <main className="lg:col-span-8 space-y-8">
            {/* Active search or category header indicator */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-[#E2E5F2]">
              <div>
                <h2 className="text-lg font-bold text-[#0F1533]">
                  {activeCategory === "all" ? "All Questions" : GROUPS.find((g) => g.id === activeCategory)?.g}
                </h2>
                <p className="text-xs text-[#717696]">
                  {q ? `Showing ${matchedCount} results for "${q}"` : `Showing all verified answers`}
                </p>
              </div>

              {(q || activeCategory !== "all") && (
                <button
                  type="button"
                  onClick={() => {
                    setQ("");
                    setActiveCategory("all");
                  }}
                  className="text-xs font-semibold text-[#5B4CF5] hover:underline"
                >
                  Reset all filters
                </button>
              )}
            </div>

            {/* Accordion Cards by Category */}
            <div className="space-y-8">
              <AnimatePresence mode="popLayout">
                {filteredGroups.map((group) => {
                  const Icon = group.icon;
                  return (
                    <motion.div
                      key={group.id}
                      layout
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-3"
                    >
                      {/* Section Category Header */}
                      <div className="flex items-center gap-3 pt-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#5B4CF5]/10 text-[#5B4CF5]">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <h3 className="font-display text-base font-bold text-[#0F1533]">
                            {group.g}
                          </h3>
                        </div>
                        <div className="h-px flex-1 bg-gradient-to-r from-[#E2E5F2] to-transparent" />
                      </div>

                      {/* Items */}
                      <div className="space-y-3">
                        {group.items.map((item) => (
                          <FaqCard
                            key={item.id}
                            item={item}
                            isHelpful={helpfulFeedback[item.id] ?? null}
                            onFeedback={(helpful) => handleFeedback(item.id, helpful)}
                          />
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>

              {/* No Search Results Found */}
              {filteredGroups.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl border border-dashed border-[#DCDDF6] bg-white p-10 text-center shadow-xs"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#5B4CF5]/10 text-[#5B4CF5] mb-4">
                    <HelpCircle className="h-7 w-7" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-[#0F1533]">
                    No matching answers found
                  </h3>
                  <p className="mt-1 text-sm text-[#717696] max-w-sm mx-auto">
                    We couldn&apos;t find any question matching <span className="font-semibold text-[#0F1533]">&ldquo;{q}&rdquo;</span>.
                  </p>
                  <div className="mt-6 flex flex-wrap justify-center gap-3">
                    <button
                      type="button"
                      onClick={() => setQ("")}
                      className="rounded-xl bg-[#5B4CF5] px-4 py-2 text-xs font-bold text-white shadow-xs hover:bg-[#4A3DE3] transition-colors"
                    >
                      Clear Search
                    </button>
                    <Link
                      to="/contact"
                      className="rounded-xl border border-[#E2E5F2] bg-white px-4 py-2 text-xs font-semibold text-[#0F1533] hover:border-[#5B4CF5]/40 hover:text-[#5B4CF5] transition-colors"
                    >
                      Ask Our Team Directly
                    </Link>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Bottom Support Callout Box */}
            <div className="rounded-2xl border border-[#D7DAF2] bg-gradient-to-r from-[#F7F6FE] via-white to-[#F2F7FF] p-6 sm:p-8 shadow-xs">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#5B4CF5] mb-1">
                    <Sparkles className="h-3.5 w-3.5" />
                    <span>Still have questions?</span>
                  </div>
                  <h4 className="font-display text-xl font-bold text-[#0F1533]">
                    Can&apos;t find what you&apos;re looking for?
                  </h4>
                  <p className="mt-1 text-sm text-[#5A607A] max-w-md">
                    Our team is here to assist with curriculum details, student enrollment, and technical support.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                  <Link
                    to="/contact"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-[#5B4CF5] px-5 py-3 text-sm font-bold text-white shadow-xs transition-all hover:bg-[#4A3DE3] hover:shadow-md"
                  >
                    <span>Get in Touch</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

          </main>

        </div>
      </div>
    </div>
  );
}

function FaqCard({
  item,
  isHelpful,
  onFeedback,
}: {
  item: FaqItemData;
  isHelpful: boolean | null;
  onFeedback: (helpful: boolean) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-200 bg-white shadow-xs overflow-hidden",
        open
          ? "border-[#5B4CF5]/40 shadow-sm ring-1 ring-[#5B4CF5]/10"
          : "border-[#E4E6F0] hover:border-[#5B4CF5]/30 hover:shadow-xs"
      )}
    >
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full items-center justify-between gap-4 p-5 sm:p-6 text-left transition-colors"
        aria-expanded={open}
      >
        <div className="flex items-start gap-3.5">
          <span
            className={cn(
              "font-display text-base sm:text-[1.05rem] font-bold leading-snug transition-colors",
              open ? "text-[#5B4CF5]" : "text-[#0F1533] hover:text-[#5B4CF5]"
            )}
          >
            {item.q}
          </span>
        </div>

        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300",
            open
              ? "bg-[#5B4CF5] text-white rotate-180 shadow-xs"
              : "bg-[#F4F5FB] text-[#717696] hover:bg-[#EAEBFA] hover:text-[#5B4CF5]"
          )}
        >
          <ChevronDown className="h-4 w-4" />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-[#F0F1F7]">
              {/* Answer content */}
              <p className="text-sm sm:text-base leading-relaxed text-[#4A506B] font-normal">
                {item.a}
              </p>

              {/* Tags & Feedback row */}
              <div className="mt-5 pt-4 border-t border-[#F4F5FB] flex flex-wrap items-center justify-between gap-3">
                {/* Topic tags */}
                <div className="flex flex-wrap items-center gap-1.5">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-[#F4F5FB] px-2.5 py-1 text-[11px] font-semibold text-[#5A607A]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>

                {/* Helpful micro-feedback */}
                <div className="flex items-center gap-2 text-xs text-[#8D92AA]">
                  {isHelpful === null ? (
                    <>
                      <span>Was this helpful?</span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onFeedback(true);
                        }}
                        className="rounded-lg p-1.5 hover:bg-[#F0F1F7] hover:text-[#0F1533] transition-colors"
                        title="Yes, helpful"
                        aria-label="Yes, helpful"
                      >
                        <ThumbsUp className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onFeedback(false);
                        }}
                        className="rounded-lg p-1.5 hover:bg-[#F0F1F7] hover:text-[#0F1533] transition-colors"
                        title="Not helpful"
                        aria-label="Not helpful"
                      >
                        <ThumbsDown className="h-3.5 w-3.5" />
                      </button>
                    </>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#5B4CF5]">
                      <Check className="h-3 w-3" />
                      Thanks for your feedback!
                    </span>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

import type { LucideIcon } from "lucide-react";
import { Briefcase, GraduationCap, Rocket, School } from "lucide-react";

export type PathwayLevelId = "k12" | "college" | "professional" | "career";

export type PathwayLevel = {
  id: PathwayLevelId;
  label: string;
  shortLabel: string;
  description: string;
  focus: "launch" | "later";
  icon: LucideIcon;
  outcomes: string[];
};

export const PATHWAY_LEVELS: PathwayLevel[] = [
  {
    id: "k12",
    label: "K–12 Learning Pathways",
    shortLabel: "K–12",
    description:
      "Foundational AI literacy, prerequisites, and credible starter certifications for students and parents — including MSA / McKinney Steam Academy programs.",
    focus: "launch",
    icon: School,
    outcomes: [
      "AI fundamentals & digital literacy",
      "Project-based enrichment",
      "Parent-supported learning modules",
      "MSA / Mechanism Academy tracks",
    ],
  },
  {
    id: "college",
    label: "College Learning Pathways",
    shortLabel: "College",
    description:
      "College-ready certification outcomes with practical projects, knowledge checks, and credentials for admissions and portfolios.",
    focus: "launch",
    icon: GraduationCap,
    outcomes: [
      "Entry-level outcome courses",
      "Capstone-ready skill tracks",
      "College application support value",
      "MSA college bridge programs",
    ],
  },
  {
    id: "professional",
    label: "Advanced Professional Pathways",
    shortLabel: "Professional",
    description:
      "Premium professional-grade tracks with industry validation — launching in a later phase after K–12 and college trust is established.",
    focus: "later",
    icon: Rocket,
    outcomes: [
      "Industry-validated topics",
      "Guest lectures & SME review",
      "Longer capstone-heavy formats",
      "Institutional partnerships",
    ],
  },
  {
    id: "career",
    label: "Career Growth Pathways",
    shortLabel: "Career",
    description:
      "Career advancement certifications for working professionals — introduced after the core school and college strategy matures.",
    focus: "later",
    icon: Briefcase,
    outcomes: [
      "Career-readiness outcomes",
      "Shareable LinkedIn credentials",
      "Mentor-supported progression",
      "High-ticket advanced offerings",
    ],
  },
];

export type PathwayCourse = {
  id: string;
  title: string;
  level: PathwayLevelId;
  category: string;
  duration: string;
  rating: number;
  learners: number;
  price: string;
  outcome: string;
  preview: string;
  img: string;
  featured?: boolean;
};

export const PATHWAY_COURSES: PathwayCourse[] = [
  {
    id: "ai-fundamentals-k12",
    title: "AI Fundamentals for Young Learners",
    level: "k12",
    category: "AI Literacy",
    duration: "6 weeks",
    rating: 4.9,
    learners: 2840,
    price: "$149",
    outcome: "Certified AI Explorer — portfolio-ready mini-project",
    preview: "Illy-led nuggets, parent guides, and safe AI tool exploration.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=720&q=72",
    featured: true,
  },
  {
    id: "msa-steam-intro",
    title: "MSA Steam Academy — AI Starter Track",
    level: "k12",
    category: "MSA Programs",
    duration: "8 weeks",
    rating: 4.8,
    learners: 920,
    price: "$179",
    outcome: "MSA-aligned starter certification with guided capstone",
    preview: "Mechanism Academy curriculum maturing under K–12 strategy.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=720&q=72",
    featured: true,
  },
  {
    id: "genai-teens",
    title: "Generative AI for Teens",
    level: "k12",
    category: "Generative AI",
    duration: "7 weeks",
    rating: 4.8,
    learners: 1920,
    price: "$169",
    outcome: "Responsible GenAI practitioner badge",
    preview: "Short videos, quizzes, and creative AI projects.",
    img: "https://images.unsplash.com/photo-1527430253228-e93688616381?auto=format&fit=crop&w=720&q=72",
  },
  {
    id: "college-ai-essentials",
    title: "College AI Essentials",
    level: "college",
    category: "College Prep",
    duration: "8 weeks",
    rating: 4.9,
    learners: 3210,
    price: "$199",
    outcome: "College-ready AI certification with shareable credential",
    preview: "Practical modules validated by industry need and student relevance.",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=720&q=72",
    featured: true,
  },
  {
    id: "data-science-college",
    title: "Data Science Foundations for College",
    level: "college",
    category: "Data Science",
    duration: "10 weeks",
    rating: 4.8,
    learners: 2100,
    price: "$219",
    outcome: "Applied data project for admissions portfolios",
    preview: "Knowledge checks, Illy mentorship, and capstone in AI Lab.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=720&q=72",
  },
  {
    id: "msa-college-bridge",
    title: "MSA College Bridge — AI Pathway",
    level: "college",
    category: "MSA Programs",
    duration: "9 weeks",
    rating: 4.7,
    learners: 640,
    price: "$199",
    outcome: "Bridge certification toward advanced college tracks",
    preview: "Connects K–12 MSA learning to college-level outcomes.",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=720&q=72",
  },
  {
    id: "llm-professional",
    title: "Large Language Models — Professional Track",
    level: "professional",
    category: "NLP & LLMs",
    duration: "12 weeks",
    rating: 4.9,
    learners: 760,
    price: "$499",
    outcome: "Professional LLM practitioner certification",
    preview: "Coming in a later phase — industry SME validated.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=720&q=72",
  },
  {
    id: "mlops-pro",
    title: "Production ML Engineering",
    level: "professional",
    category: "AI Engineering",
    duration: "14 weeks",
    rating: 4.9,
    learners: 450,
    price: "$549",
    outcome: "Deploy-ready ML engineer credential",
    preview: "Capstone-heavy design with mentor feedback.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=720&q=72",
  },
  {
    id: "career-ai-leadership",
    title: "AI Leadership for Career Growth",
    level: "career",
    category: "Career Growth",
    duration: "10 weeks",
    rating: 4.8,
    learners: 320,
    price: "$399",
    outcome: "Executive AI literacy certificate",
    preview: "Later-phase career advancement pathway.",
    img: "https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=720&q=72",
  },
];

export function coursesForLevel(level: PathwayLevelId | "all") {
  if (level === "all") return PATHWAY_COURSES;
  return PATHWAY_COURSES.filter((c) => c.level === level);
}

export function countCoursesForLevel(level: PathwayLevelId | "all") {
  return coursesForLevel(level).length;
}

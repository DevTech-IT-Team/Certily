import type { LucideIcon } from "lucide-react";
import {
  Briefcase,
  Gamepad2,
  GraduationCap,
  Rocket,
  Smile,
} from "lucide-react";

export type PathwayLevelId =
  | "k5"
  | "middle"
  | "high"
  | "college"
  | "professional";

export type PathwayLevel = {
  id: PathwayLevelId;
  label: string;
  shortLabel: string;
  subLabel: string;
  badgeLabel: string;
  themeTagline: string;
  description: string;
  focus: "launch" | "later";
  icon: LucideIcon;
  audience: string;
  outcomeCount: number;
  modulesPerOutcome: number;
  hoursPerOutcome: number;
  deliveryModel: string;
  badge: string;
  outcomes: string[];
  theme: {
    gradientFrom: string;
    gradientTo: string;
    glow: string;
    accent: string;
    accentLight: string;
    accentText: string;
    darkBg: string;
    heroGradient: string;
    pageBg: string;
    cardBorder: string;
    cardHoverBorder: string;
    cardHoverGlow: string;
    pillBg: string;
    badgeStyle: string;
  };
};

export const PATHWAY_LEVELS: PathwayLevel[] = [
  {
    id: "k5",
    label: "K–5 Certification",
    shortLabel: "K–5",
    subLabel: "Grades K–5",
    badgeLabel: "📚 K–5 CERTIFICATION",
    themeTagline: "Discover AI through play, stories, and first programs",
    description:
      "Age-right AI certifications for elementary learners — start with AI Superkids: Discover AI and grow into creator, genius, game, and robot tracks.",
    focus: "launch",
    icon: Smile,
    audience: "Ages 5–11 / elementary",
    outcomeCount: 5,
    modulesPerOutcome: 5,
    hoursPerOutcome: 20,
    deliveryModel: "Guided studio + family showcase",
    badge: "Explorer / Creator",
    outcomes: [
      "AI literacy & safe exploration",
      "ScratchJr and block coding",
      "Storybook and helper capstones",
      "Parent-guided discovery modules",
    ],
    theme: {
      gradientFrom: "#F59E0B",
      gradientTo: "#D97706",
      glow: "rgba(245,158,11,0.30)",
      accent: "#D97706",
      accentLight: "#FFFBEB",
      accentText: "#B45309",
      darkBg: "#1C1000",
      heroGradient: "linear-gradient(135deg, #1C1000 0%, #78350F 50%, #D97706 100%)",
      pageBg: "linear-gradient(180deg, #FFFBEB 0%, #FEF3C7 25%, #F7F8FC 100%)",
      cardBorder: "#FDE68A",
      cardHoverBorder: "#F59E0B",
      cardHoverGlow: "rgba(245,158,11,0.22)",
      pillBg: "#FEF3C7",
      badgeStyle: "bg-amber-500 text-white shadow-amber-200",
    },
  },
  {
    id: "middle",
    label: "Middle School Certification",
    shortLabel: "Middle School",
    subLabel: "Grades 6–8",
    badgeLabel: "🎮 MIDDLE SCHOOL · GRADES 6–8",
    themeTagline: "Build Real Projects, Games & AI Models",
    description:
      "Interactive game creation, Python fundamentals, and generative AI tools for middle school students.",
    focus: "launch",
    icon: Gamepad2,
    audience: "Ages 11–14 / grades 6–8",
    outcomeCount: 5,
    modulesPerOutcome: 6,
    hoursPerOutcome: 30,
    deliveryModel: "Guided lab + independent build",
    badge: "Builder",
    outcomes: [
      "Python programming fundamentals",
      "GenAI prompt engineering for teens",
      "Robotics & sensor simulation",
      "Middle school capstone badge",
    ],
    theme: {
      gradientFrom: "#10B981",
      gradientTo: "#059669",
      glow: "rgba(16,185,129,0.30)",
      accent: "#059669",
      accentLight: "#ECFDF5",
      accentText: "#047857",
      darkBg: "#011A11",
      heroGradient: "linear-gradient(135deg, #011A11 0%, #064E3B 50%, #10B981 100%)",
      pageBg: "linear-gradient(180deg, #ECFDF5 0%, #D1FAE5 25%, #F7F8FC 100%)",
      cardBorder: "#A7F3D0",
      cardHoverBorder: "#10B981",
      cardHoverGlow: "rgba(16,185,129,0.22)",
      pillBg: "#D1FAE5",
      badgeStyle: "bg-emerald-600 text-white shadow-emerald-200",
    },
  },
  {
    id: "high",
    label: "High School Certification",
    shortLabel: "High School",
    subLabel: "Grades 9–12",
    badgeLabel: "🚀 HIGH SCHOOL · GRADES 9–12",
    themeTagline: "Standout Portfolios, AP Prep & Advanced AI",
    description:
      "Advanced portfolio tracks, machine learning basics, and college application boosters for high schoolers.",
    focus: "launch",
    icon: Rocket,
    audience: "Ages 14–18 / grades 9–12",
    outcomeCount: 10,
    modulesPerOutcome: 8,
    hoursPerOutcome: 40,
    deliveryModel: "Project studio + portfolio review",
    badge: "Developer",
    outcomes: [
      "Machine Learning & Data Science 101",
      "College portfolio project build",
      "AI ethics & responsible deployment",
      "MSA High School Capstone Certificate",
    ],
    theme: {
      gradientFrom: "#6366F1",
      gradientTo: "#4F46E5",
      glow: "rgba(99,102,241,0.30)",
      accent: "#4F46E5",
      accentLight: "#EEF2FF",
      accentText: "#3730A3",
      darkBg: "#0B0B26",
      heroGradient: "linear-gradient(135deg, #0B0B26 0%, #312E81 50%, #6366F1 100%)",
      pageBg: "linear-gradient(180deg, #EEF2FF 0%, #E0E7FF 25%, #F7F8FC 100%)",
      cardBorder: "#C7D2FE",
      cardHoverBorder: "#6366F1",
      cardHoverGlow: "rgba(99,102,241,0.22)",
      pillBg: "#E0E7FF",
      badgeStyle: "bg-indigo-600 text-white shadow-indigo-200",
    },
  },
  {
    id: "college",
    label: "University / College Certification",
    shortLabel: "University",
    subLabel: "University / college",
    badgeLabel: "🎓 UNIVERSITY / COLLEGE",
    themeTagline: "Authentic University Standards & Capstone Credit",
    description:
      "College-ready certification outcomes with practical projects, knowledge checks, and credentials for admissions and portfolios.",
    focus: "launch",
    icon: GraduationCap,
    audience: "Age 18+ / degree learners",
    outcomeCount: 10,
    modulesPerOutcome: 10,
    hoursPerOutcome: 50,
    deliveryModel: "Applied lab + technical report",
    badge: "Engineer",
    outcomes: [
      "Entry-level outcome courses",
      "Capstone-ready skill tracks",
      "College application support value",
      "MSA college bridge programs",
    ],
    theme: {
      gradientFrom: "#2563EB",
      gradientTo: "#1D4ED8",
      glow: "rgba(37,99,235,0.30)",
      accent: "#1D4ED8",
      accentLight: "#EFF6FF",
      accentText: "#1E40AF",
      darkBg: "#061329",
      heroGradient: "linear-gradient(135deg, #061329 0%, #1E3A8A 50%, #2563EB 100%)",
      pageBg: "linear-gradient(180deg, #EFF6FF 0%, #DBEAFE 25%, #F7F8FC 100%)",
      cardBorder: "#BFDBFE",
      cardHoverBorder: "#2563EB",
      cardHoverGlow: "rgba(37,99,235,0.22)",
      pillBg: "#DBEAFE",
      badgeStyle: "bg-blue-700 text-white shadow-blue-200 font-serif",
    },
  },
  {
    id: "professional",
    label: "Working Professionals Certification",
    shortLabel: "Professionals",
    subLabel: "Working professionals",
    badgeLabel: "💼 WORKING PROFESSIONALS",
    themeTagline: "Apply AI at work — leadership, product, and production systems",
    description:
      "Certifications for people already in the workforce: lead AI adoption, ship LLM workflows, and design production-ready systems.",
    focus: "launch",
    icon: Briefcase,
    audience: "Age 21+ / career learners",
    outcomeCount: 10,
    modulesPerOutcome: 10,
    hoursPerOutcome: 50,
    deliveryModel: "Workplace case + production evidence",
    badge: "Professional / Architect",
    outcomes: [
      "Executive AI literacy",
      "Shareable workplace credentials",
      "Production ML and LLM tracks",
      "Architecture and product strategy",
    ],
    theme: {
      gradientFrom: "#8B5CF6",
      gradientTo: "#6D28D9",
      glow: "rgba(139,92,246,0.30)",
      accent: "#7C3AED",
      accentLight: "#F5F3FF",
      accentText: "#4C1D95",
      darkBg: "#0C061A",
      heroGradient: "linear-gradient(135deg, #0C061A 0%, #4C1D95 50%, #7C3AED 100%)",
      pageBg: "linear-gradient(180deg, #F5F3FF 0%, #EDE9FE 25%, #F7F8FC 100%)",
      cardBorder: "#DDD6FE",
      cardHoverBorder: "#7C3AED",
      cardHoverGlow: "rgba(139,92,246,0.22)",
      pillBg: "#EDE9FE",
      badgeStyle: "bg-purple-600 text-white shadow-purple-200",
    },
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
  // K-2 Courses
  {
    id: "ai-fundamentals-k12",
    title: "AI Explorers: First Steps",
    level: "k5",
    category: "AI Literacy",
    duration: "6 weeks",
    rating: 4.9,
    learners: 2840,
    price: "$149",
    outcome: "Certified AI Explorer — portfolio-ready mini-project",
    preview: "V-led nuggets, parent guides, and safe AI tool exploration.",
    img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "k2-creative-play",
    title: "Creative Play with AI",
    level: "k5",
    category: "Creativity",
    duration: "4 weeks",
    rating: 4.8,
    learners: 1520,
    price: "$99",
    outcome: "Create your first AI-generated storybook",
    preview: "Safe, voice-guided prompt exploration for young minds.",
    img: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "k2-robot-logic",
    title: "Robot Logic & Puzzles",
    level: "k5",
    category: "Logic",
    duration: "4 weeks",
    rating: 4.9,
    learners: 2100,
    price: "$99",
    outcome: "Logic Puzzle Master Badge",
    preview: "Screen-free printable logic games mixed with interactive UI.",
    img: "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
  },

  // Elementary Courses
  {
    id: "msa-steam-intro",
    title: "Block Coding & AI Robotics",
    level: "k5",
    category: "Programming",
    duration: "8 weeks",
    rating: 4.8,
    learners: 3920,
    price: "$179",
    outcome: "Build interactive Scratch programs powered by machine learning.",
    preview: "Mechanism Academy curriculum maturing under K–12 strategy.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "elementary-storytelling",
    title: "Digital Storytelling with AI",
    level: "k5",
    category: "Creative Arts",
    duration: "6 weeks",
    rating: 4.9,
    learners: 4100,
    price: "$149",
    outcome: "Write, illustrate, and animate custom digital storybooks using generative AI.",
    preview: "Blend literacy with safe image generation.",
    img: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "elementary-capstone",
    title: "MSA Elementary STEM Bridge",
    level: "k5",
    category: "MSA Programs",
    duration: "10 weeks",
    rating: 4.9,
    learners: 1200,
    price: "$199",
    outcome: "Official McKinney Steam Academy starter certification and capstone project.",
    preview: "The ultimate preparation for Middle School.",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  },

  // Middle School Courses
  {
    id: "middle-python",
    title: "Python AI Fundamentals",
    level: "middle",
    category: "Programming",
    duration: "8 weeks",
    rating: 4.8,
    learners: 5200,
    price: "$199",
    outcome: "Learn text-based Python syntax, logic statements, and data structures.",
    preview: "Transition from blocks to real code.",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "middle-game-design",
    title: "AI Game Design",
    level: "middle",
    category: "Game Dev",
    duration: "6 weeks",
    rating: 4.9,
    learners: 3100,
    price: "$179",
    outcome: "Design interactive 2D games with intelligent NPC bots and voice recognition.",
    preview: "Make games that think.",
    img: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "middle-genai",
    title: "GenAI & Prompt Engineering",
    level: "middle",
    category: "AI Literacy",
    duration: "6 weeks",
    rating: 4.7,
    learners: 4400,
    price: "$149",
    outcome: "Master responsible AI usage, prompt design, and digital citizenship.",
    preview: "How to talk to machines effectively.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },

  // High School Courses
  {
    id: "high-ml-data",
    title: "Machine Learning & Data Science 101",
    level: "high",
    category: "Data Science",
    duration: "10 weeks",
    rating: 4.9,
    learners: 6200,
    price: "$249",
    outcome: "Build real ML models and predict outcomes from datasets.",
    preview: "The ultimate AP Computer Science prep.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "genai-teens",
    title: "Advanced Generative AI Portfolios",
    level: "high",
    category: "Generative AI",
    duration: "8 weeks",
    rating: 4.8,
    learners: 1920,
    price: "$199",
    outcome: "Build a college-ready portfolio of AI projects.",
    preview: "Stand out in university applications.",
    img: "https://images.unsplash.com/photo-1531297172868-ee25d19a4e39?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "high-ethics",
    title: "AI Ethics & Society",
    level: "high",
    category: "Ethics",
    duration: "6 weeks",
    rating: 4.8,
    learners: 2800,
    price: "$149",
    outcome: "Debate and write about the future of AI in society.",
    preview: "Critical thinking for the digital age.",
    img: "https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
  },

  // College Courses
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
    img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "data-science-college",
    title: "Applied Data Science Foundations",
    level: "college",
    category: "Data Science",
    duration: "10 weeks",
    rating: 4.8,
    learners: 2100,
    price: "$219",
    outcome: "Applied data project for admissions portfolios",
    preview: "Knowledge checks, V mentorship, and capstone in AI Lab.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
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
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
  },

  // Career / Professional Courses
  {
    id: "career-ai-leadership",
    title: "AI Leadership for Career Growth",
    level: "professional",
    category: "Career Growth",
    duration: "10 weeks",
    rating: 4.8,
    learners: 320,
    price: "$399",
    outcome: "Executive AI literacy certificate",
    preview: "Lead teams through AI transformation.",
    img: "https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "career-ai-product",
    title: "AI Product Management",
    level: "professional",
    category: "Product",
    duration: "8 weeks",
    rating: 4.9,
    learners: 840,
    price: "$299",
    outcome: "Certified AI Product Manager",
    preview: "Manage the lifecycle of AI-driven products from ideation to launch.",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "career-ai-marketing",
    title: "AI for Growth & Marketing",
    level: "professional",
    category: "Marketing",
    duration: "6 weeks",
    rating: 4.7,
    learners: 1250,
    price: "$249",
    outcome: "AI Marketing Strategist Credential",
    preview: "Leverage generative AI to scale marketing campaigns and personalize experiences.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
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
    preview: "Train, fine-tune, and deploy custom models.",
    img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
    featured: true,
  },
  {
    id: "mlops-pro",
    title: "Production ML Engineering (MLOps)",
    level: "professional",
    category: "AI Engineering",
    duration: "14 weeks",
    rating: 4.9,
    learners: 450,
    price: "$549",
    outcome: "Deploy-ready ML engineer credential",
    preview: "Capstone-heavy design with mentor feedback.",
    img: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ai-systems-arch",
    title: "Enterprise AI Systems Architecture",
    level: "professional",
    category: "Architecture",
    duration: "10 weeks",
    rating: 4.8,
    learners: 310,
    price: "$599",
    outcome: "Enterprise AI Architect Certification",
    preview: "Design scalable and secure AI systems for enterprise-grade deployment.",
    img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
];

export function coursesForLevel(level: PathwayLevelId | "all") {
  if (level === "all") return PATHWAY_COURSES;
  return PATHWAY_COURSES.filter((c) => c.level === level);
}

export function countCoursesForLevel(level: PathwayLevelId | "all") {
  if (level === "all") {
    return PATHWAY_LEVELS.reduce((sum, band) => sum + band.outcomeCount, 0);
  }
  return getPathwayLevel(level).outcomeCount;
}

export function normalizePathwayParam(pathwayId: string): PathwayLevelId | null {
  const map: Record<string, PathwayLevelId> = {
    k2: "k5",
    elementary: "k5",
    k5: "k5",
    middle: "middle",
    "middle-school": "middle",
    high: "high",
    "high-school": "high",
    college: "college",
    university: "college",
    "university-college": "college",
    career: "professional",
    professional: "professional",
    "working-professionals": "professional",
  };
  return map[pathwayId] ?? null;
}

export function pathwayToRouteId(id: PathwayLevelId): string {
  if (id === "middle") return "middle-school";
  if (id === "high") return "high-school";
  return id;
}

export const LEVEL_CATEGORY: Record<PathwayLevelId, string> = {
  k5: "K–5",
  middle: "Middle School",
  high: "High School",
  college: "University / College",
  professional: "Working Professionals",
};

export const CATALOG_TOTALS = {
  outcomes: 40,
  modules: 335,
  hours: 1650,
  stack: "Explorer → Architect",
} as const;

export function getPathwayLevel(id: PathwayLevelId) {
  return PATHWAY_LEVELS.find((level) => level.id === id) ?? PATHWAY_LEVELS[0];
}

export function categoryToLevel(category: string): PathwayLevelId | undefined {
  return (Object.entries(LEVEL_CATEGORY) as [PathwayLevelId, string][]).find(
    ([, label]) => label === category,
  )?.[0];
}

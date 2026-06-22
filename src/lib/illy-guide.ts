import type { LucideIcon } from "lucide-react";
import {
  Award,
  Beaker,
  GraduationCap,
  Map,
  Newspaper,
  Users,
} from "lucide-react";

export type IllyGuideTopic = {
  id: string;
  label: string;
  message: string;
  href?: string;
};

export type IllyPersona = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  prompt: string;
  message: string;
};

export type IllyPopularPrompt = {
  id: string;
  command: string;
  label: string;
  message: string;
  href?: string;
};

export const DEFAULT_ILLY_MESSAGE =
  "Hey! I'm ILY — your guide on the Certilly campus. Tap a quick link below and I'll point you in the right direction.";

export const ILLY_STARTER_PROMPTS = [
  {
    id: "campus-tour",
    label: "Public vs enrolled areas",
    message:
      "Public: Learning Pathways, Newsroom, and AI Hall. Enrolled: My Classroom, AI Lab, Certification Hall, and Mission Control — unlock after you enroll.",
    href: "/#explore-campus",
  },
  {
    id: "pick-pathway",
    label: "Help me pick a pathway",
    message:
      "Learning Pathways has K–12, college, and pro tracks. Tell me your grade or goal and I'll point you to the right certification.",
    href: "/courses",
  },
  {
    id: "enrollment",
    label: "How does enrollment work?",
    message:
      "Browse pathways for free, enroll when ready, then unlock My Classroom, AI Lab, and Mission Control on the campus map.",
  },
  {
    id: "certifications",
    label: "About certifications",
    message:
      "Every pathway leads to verifiable certificates in the Certification Hall — shareable with colleges and employers.",
    href: "/certification-hall",
  },
] as const;

export const ILLY_QUICK_TOPICS: IllyGuideTopic[] = [
  {
    id: "campus",
    label: "Campus map",
    message:
      "The campus map is your home base — click any building to explore pathways, labs, and halls.",
    href: "/#campus-map",
  },
  {
    id: "pathways",
    label: "Pathways",
    message:
      "Learning Pathways has every certification track — K–12, college, and professional outcomes.",
    href: "/courses",
  },
  {
    id: "pillars",
    label: "How it works",
    message:
      "Learn, Build, Grow, Connect, and Get Opportunities — that's how every Certily pathway is structured.",
    href: "/#pillars",
  },
  {
    id: "stats",
    label: "Community",
    message:
      "You're joining thousands of learners already earning certificates and building real AI projects.",
    href: "/#stats",
  },
];

export const ILLY_PERSONAS: IllyPersona[] = [
  {
    id: "guide",
    title: "Campus guide",
    description: "Navigate buildings, enrollment zones, and what's public vs locked.",
    icon: Map,
    prompt: "Give me a campus tour",
    message:
      "Start at the map — six buildings, each with a clear purpose. I'll walk you through every zone step by step.",
  },
  {
    id: "advisor",
    title: "Pathway advisor",
    description: "Match your goals to the right certification track.",
    icon: GraduationCap,
    prompt: "Which pathway fits me?",
    message:
      "Whether you're K–12, college-bound, or career-focused — I'll help you pick a pathway with real outcomes.",
  },
  {
    id: "builder",
    title: "Project coach",
    description: "Capstones, labs, and portfolio projects in the AI Lab.",
    icon: Beaker,
    prompt: "Tell me about projects",
    message:
      "The AI Lab turns theory into real builds — capstones, templates, and guided projects after you enroll.",
  },
  {
    id: "credentials",
    title: "Certification expert",
    description: "Earn, verify, and share your credentials.",
    icon: Award,
    prompt: "How do certificates work?",
    message:
      "Complete a pathway, earn verifiable certificates in the Certification Hall, and share them anywhere.",
  },
  {
    id: "news",
    title: "AI relevance",
    description: "Why these skills matter right now.",
    icon: Newspaper,
    prompt: "Why learn AI now?",
    message:
      "The Newsroom connects today's AI trends to what you'll learn — great for students and parents.",
  },
  {
    id: "community",
    title: "Community",
    description: "Events, AI Hall activities, and peer support.",
    icon: Users,
    prompt: "What's in AI Hall?",
    message:
      "AI Hall is free for everyone — challenges, demos, and events to explore before you enroll.",
  },
];

export const ILLY_POPULAR_PROMPTS: IllyPopularPrompt[] = [
  {
    id: "pathway",
    command: "/pick-pathway",
    label: "Help me pick a certification pathway",
    message:
      "Head to Learning Pathways — filter by level, preview outcomes, and enroll when you're ready.",
    href: "/courses",
  },
  {
    id: "campus",
    command: "/campus-tour",
    label: "Walk me through the campus map",
    message: "Tap any glowing dot on the map — I'll explain each building and what unlocks after enroll.",
    href: "/#campus-map",
  },
  {
    id: "enroll",
    command: "/enrollment",
    label: "Explain enrollment for parents",
    message:
      "Parents can preview everything free. Enroll to unlock classroom, lab, dashboard, and certificates.",
  },
  {
    id: "projects",
    command: "/projects",
    label: "What projects will I build?",
    message:
      "Every pathway includes hands-on projects — capstones in the AI Lab build your portfolio for college and jobs.",
    href: "/ai-lab",
  },
  {
    id: "cert",
    command: "/certificates",
    label: "How are certificates verified?",
    message:
      "Certificates are verifiable with share links — colleges and employers can confirm your achievements.",
    href: "/certification-hall",
  },
  {
    id: "ai-hall",
    command: "/ai-hall",
    label: "Free activities before I enroll",
    message: "AI Hall is open to everyone — try challenges and events before committing to a pathway.",
    href: "/ai-hall",
  },
  {
    id: "parents",
    command: "/parents",
    label: "Parent dashboard overview",
    message:
      "Mission Control gives parents visibility into progress, assignments, and certificates — unlocks with enrollment.",
    href: "/dashboard",
  },
  {
    id: "news",
    command: "/ai-news",
    label: "Why AI certifications matter",
    message:
      "The Newsroom shows how today's AI landscape connects to Certily courses — updated for families.",
    href: "/news",
  },
];

export const ILLY_SCROLL_TIPS: { target: string; message: string }[] = [
  {
    target: '[data-illy-section="hero"]',
    message: "Ask me anything here — I'm your campus expert, just like having a guide on day one.",
  },
  {
    target: '[data-illy-section="campus"]',
    message: "This is the interactive campus — hover a building and I'll tell you what's inside.",
  },
  {
    target: '[data-illy-section="personas"]',
    message: "Pick a role and I'll help as your guide, advisor, project coach, or certification expert.",
  },
  {
    target: '[data-illy-section="pillars"]',
    message: "These five pillars show how you'll learn, build projects, and grow on campus.",
  },
  {
    target: '[data-illy-section="stats"]',
    message: "Real numbers from real learners — courses, projects, and certificates earned here.",
  },
];

export const ILLY_PAGE_MESSAGES: Record<string, string> = {
  "/": DEFAULT_ILLY_MESSAGE,
  "/courses":
    "Learning Pathways is where you browse every certification track — preview courses and enroll when you're ready.",
  "/classroom":
    "My Classroom is your enrolled learning space — lessons, quizzes, and progress all in one place.",
  "/ai-lab":
    "The AI Lab is for hands-on capstones and projects. Enroll to unlock labs and submit your work.",
  "/news":
    "The Newsroom keeps you current on AI trends and shows why Certily certifications matter today.",
  "/ai-hall":
    "AI Hall is open to everyone — free activities, challenges, and events to explore before you enroll.",
  "/certification-hall":
    "Earn verifiable certificates here and share them with colleges, parents, and employers.",
  "/dashboard":
    "Mission Control tracks your goals, assignments, certificates, and parent views in one place.",
  "/events":
    "Campus events, webinars, and workshops — great ways to learn with the Certily community.",
  "/faqs": "Got questions? I can help you find answers about pathways, enrollment, and certificates.",
  "/contact": "Need to reach our team? Use this page — we're here for students and parents.",
};

const KEYWORD_RESPONSES: { keys: string[]; message: string }[] = [
  {
    keys: ["enroll", "sign up", "signup", "register", "parent"],
    message:
      "Enrollment is simple: browse pathways free, pick your track, then unlock classroom, lab, and dashboard buildings on the map.",
  },
  {
    keys: ["pathway", "course", "certification", "k-12", "college"],
    message:
      "Learning Pathways lists every track with clear outcomes. Start at /courses or ask me to compare levels.",
  },
  {
    keys: ["campus", "map", "building", "tour"],
    message:
      "The campus map has six buildings — hover any dot and I'll explain what's inside. Public areas are open now; 🔒 unlocks after enroll.",
  },
  {
    keys: ["project", "lab", "capstone", "build"],
    message:
      "Hands-on work happens in the AI Lab — capstones and portfolio projects for enrolled learners.",
  },
  {
    keys: ["certificate", "credential", "verify"],
    message:
      "Complete a pathway to earn verifiable certificates in the Certification Hall — share links with anyone.",
  },
  {
    keys: ["illy", "hello", "hi", "hey", "help"],
    message:
      "I'm your campus guide — tap a quick link below to explore pathways, buildings, and enrollment.",
  },
];

export function getIllyMessageForPath(pathname: string): string {
  return ILLY_PAGE_MESSAGES[pathname] ?? DEFAULT_ILLY_MESSAGE;
}

export function matchIllyResponse(input: string): string {
  const q = input.trim().toLowerCase();
  if (!q) return "Type a question or pick a prompt — I'm ready to help!";

  const slash = ILLY_POPULAR_PROMPTS.find((p) => p.command === q || q.startsWith(p.command));
  if (slash) return slash.message;

  const topic = ILLY_QUICK_TOPICS.find((t) => q.includes(t.label.toLowerCase()));
  if (topic) return topic.message;

  const persona = ILLY_PERSONAS.find(
    (p) => q.includes(p.title.toLowerCase()) || q.includes(p.prompt.toLowerCase())
  );
  if (persona) return persona.message;

  for (const { keys, message } of KEYWORD_RESPONSES) {
    if (keys.some((k) => q.includes(k))) return message;
  }

  return "Great question! For pathways visit Learning Pathways, for the full experience explore the campus map — or try a prompt below and I'll guide you step by step.";
}

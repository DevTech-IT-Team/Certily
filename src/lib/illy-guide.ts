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

export type IllyReaction = "hi" | "point" | "stand" | "stare" | "think";

export function matchIllyResponse(input: string): { message: string; reaction: IllyReaction } {
  const q = input.trim().toLowerCase();
  if (!q) {
    return {
      message: "Type a question or pick a prompt — I'm ready to help!",
      reaction: "stare"
    };
  }

  // Greetings
  if (q === "hi" || q === "hello" || q === "hey" || q.includes("who are you") || q.startsWith("hello") || q.startsWith("hi ")) {
    return {
      message: "Hey there! I'm ILY, your Certily AI campus guide. I can show you around, explain public vs. locked zones, or recommend the best certification pathway for your goals. Ask me anything!",
      reaction: "hi"
    };
  }

  // Enrollment questions
  if (q.includes("enroll") || q.includes("sign up") || q.includes("register") || q.includes("how to join") || q.includes("join")) {
    return {
      message: "Enrollment is super simple! You can browse all of our certification pathways for free. Once you find one you love and enroll, you'll immediately unlock My Classroom, the hands-on AI Lab, and Mission Control (your student/parent dashboard) on the map.",
      reaction: "stand"
    };
  }

  // Classroom
  if (q.includes("classroom") || q.includes("class") || q.includes("learn")) {
    return {
      message: "My Classroom is where the learning magic happens! Once enrolled in a pathway, this is where you'll access lessons, take interactive quizzes, and track your curriculum progress. Ready to check it out?",
      reaction: "point"
    };
  }

  // AI Lab
  if (q.includes("lab") || q.includes("project") || q.includes("capstone") || q.includes("build")) {
    return {
      message: "The AI Lab is where you put theory into practice! Enrolled students build real-world AI projects, work on capstones, and compile a portfolio that is shareable with colleges and employers. It's a key part of every Certily pathway.",
      reaction: "point"
    };
  }

  // Certification Hall
  if (q.includes("cert") || q.includes("credential") || q.includes("hall") || q.includes("verify")) {
    return {
      message: "The Certification Hall houses all of your completed credentials! Every Certily certification you earn comes with a secure, verifiable link that you can share with colleges, parents, and employers to prove your AI capabilities.",
      reaction: "point"
    };
  }

  // Mission Control / Dashboard
  if (q.includes("mission") || q.includes("control") || q.includes("dashboard") || q.includes("parent")) {
    return {
      message: "Mission Control is the central dashboard for students and parents. Parents can easily track progress, view certificates, and see grading details, ensuring they're involved in their child's AI education journey.",
      reaction: "point"
    };
  }

  // Newsroom
  if (q.includes("news") || q.includes("trend") || q.includes("why learn") || q.includes("why ai")) {
    return {
      message: "The Newsroom is where we connect today's AI trends with what you learn in Certily. It's a great place for parents and students to see why AI skills are so valuable in today's landscape and what careers are emerging.",
      reaction: "point"
    };
  }

  // Campus map
  if (q.includes("map") || q.includes("building") || q.includes("tour") || q.includes("where is")) {
    return {
      message: "The campus map has six main buildings. Public zones like Learning Pathways, AI Hall, and the Newsroom are open to explore right now! Enrolled zones like My Classroom, AI Lab, and Mission Control unlock once you sign up.",
      reaction: "point"
    };
  }

  // Help / Commands
  if (q.includes("help") || q.includes("what can you do") || q.includes("commands")) {
    return {
      message: "I can guide you through the campus, help you pick a certification pathway, or explain how parent dashboards work. Try asking questions like 'What pathways do you have?', 'How does enrollment work?', or 'Tell me about the AI Lab!'",
      reaction: "stand"
    };
  }

  // Fallback keyword search
  const slash = ILLY_POPULAR_PROMPTS.find((p) => p.command === q || q.startsWith(p.command));
  if (slash) {
    let reaction: IllyReaction = "stand";
    if (slash.message.toLowerCase().includes("pathway") || slash.message.toLowerCase().includes("map")) {
      reaction = "point";
    }
    return { message: slash.message, reaction };
  }

  const topic = ILLY_QUICK_TOPICS.find((t) => q.includes(t.label.toLowerCase()));
  if (topic) {
    return { message: topic.message, reaction: "point" };
  }

  const persona = ILLY_PERSONAS.find(
    (p) => q.includes(p.title.toLowerCase()) || q.includes(p.prompt.toLowerCase())
  );
  if (persona) {
    return { message: persona.message, reaction: "think" };
  }

  for (const { keys, message } of KEYWORD_RESPONSES) {
    if (keys.some((k) => q.includes(k))) {
      return { message, reaction: "stand" };
    }
  }

  // General smart fallback
  return {
    message: "That's an interesting question! I'm always learning, but as your campus guide, I can help you pick a certification pathway, tour our map buildings, or explain how parent dashboards work. What would you like to explore next?",
    reaction: "think"
  };
}

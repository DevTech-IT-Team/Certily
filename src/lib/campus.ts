import type { LucideIcon } from "lucide-react";
import {
  Award,
  Beaker,
  BookOpen,
  Briefcase,
  LayoutDashboard,
  Newspaper,
  Sparkles,
  GraduationCap,
  Users,
} from "lucide-react";

export type CampusAccess = "public" | "enrolled";

export type CampusBuilding = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  route: string;
  access: CampusAccess;
  icon: LucideIcon;
  /** Percent position on campus map */
  mapPosition: { top: string; left: string };
  illyIntro: string;
  color: string;
};

export const CAMPUS_BUILDINGS: CampusBuilding[] = [
  {
    id: "learning-pathways",
    name: "Learning Pathways",
    tagline: "Certification outcomes",
    description:
      "Browse K–12, college, and professional pathways with clear outcomes, previews, and enrollment options.",
    route: "/courses",
    access: "public",
    icon: GraduationCap,
    mapPosition: { top: "18%", left: "28%" },
    illyIntro:
      "Start here! Learning Pathways is where you explore certification courses — from K–12 fundamentals to college-level programs.",
    color: "#7B6CFF",
  },
  {
    id: "my-classroom",
    name: "My Classroom",
    tagline: "Your enrolled courses",
    description:
      "Video lessons, assignments, quizzes, discussions, and resources — unlocked after enrollment.",
    route: "/classroom",
    access: "enrolled",
    icon: BookOpen,
    mapPosition: { top: "62%", left: "26%" },
    illyIntro:
      "My Classroom is your guided learning space — lessons, nuggets, and progress tracking. Enroll to unlock it!",
    color: "#5B4FE0",
  },
  {
    id: "ai-lab",
    name: "AI Lab",
    tagline: "Capstone & projects",
    description:
      "Hands-on capstone projects, practice labs, AI tools workspace, and project submissions for enrolled learners.",
    route: "/ai-lab",
    access: "enrolled",
    icon: Beaker,
    mapPosition: { top: "16%", left: "72%" },
    illyIntro:
      "The AI Lab is where theory becomes real projects — capstones, templates, and guided builds. Members only!",
    color: "#4CD1B0",
  },
  {
    id: "newsroom",
    name: "Newsroom",
    tagline: "AI relevance & credibility",
    description:
      "Latest AI news, industry updates, and explainers that connect today's trends to Certily certifications.",
    route: "/news",
    access: "public",
    icon: Newspaper,
    mapPosition: { top: "32%", left: "76%" },
    illyIntro:
      "The Newsroom shows why our courses matter right now — AI news, trends, and parent-friendly explainers.",
    color: "#6366F1",
  },
  {
    id: "certification-hall",
    name: "AI Certification Hall",
    tagline: "Hall of Fame",
    description:
      "Certificates, badges, verification links, and achievement showcases after completing pathways.",
    route: "/certification-hall",
    access: "enrolled",
    icon: Award,
    mapPosition: { top: "72%", left: "50%" },
    illyIntro:
      "The Certification Hall celebrates your wins — verifiable certificates you can share with colleges and employers.",
    color: "#B8ABFF",
  },
  {
    id: "mission-control",
    name: "Mission Control",
    tagline: "Student & parent dashboard",
    description:
      "Track goals, assignments, capstone status, payments, events, and notifications in one control center.",
    route: "/dashboard",
    access: "enrolled",
    icon: LayoutDashboard,
    mapPosition: { top: "58%", left: "74%" },
    illyIntro:
      "Mission Control is your command center — progress, quizzes, certificates, and parent views all in one place.",
    color: "#0F1533",
  },
];

export const PUBLIC_AREAS = CAMPUS_BUILDINGS.filter((b) => b.access === "public");
export const ENROLLED_AREAS = CAMPUS_BUILDINGS.filter((b) => b.access === "enrolled");

export const CAMPUS_POSITIONING = {
  headline: "Your Campus.",
  subhead: "Your Future.",
  lead: "Self-paced learning, real AI projects, and a personal AI mentor to help you build skills that actually matter.",
  supporting:
    "Explore public pathways and news, then unlock your classroom, AI Lab, Certification Hall, and Mission Control when you enroll.",
} as const;

export type CampusMapArea = CampusBuilding | (typeof AI_HALL & { mapPosition: { top: string; left: string } });

export const AI_HALL = {
  id: "ai-hall",
  name: "AI Hall",
  tagline: "Free activities & engagement",
  description:
    "Mini-projects, demos, quiz challenges, webinars, and low-ticket AI activities — open to everyone.",
  route: "/ai-hall",
  access: "public" as const,
  icon: Sparkles,
  color: "#4CD1B0",
  mapPosition: { top: "20%", left: "58%" },
  illyIntro:
    "AI Hall is our public playground — free activities, challenges, and events to explore AI before you enroll.",
};

export const CAMPUS_MAP_AREAS: CampusMapArea[] = [...CAMPUS_BUILDINGS, AI_HALL];

/** Featured destinations for the homepage Explore section */
export const EXPLORE_DESTINATIONS = [
  {
    id: "learning-pathways",
    name: "Learning Pathways",
    subtitle: "Browse certifications",
    route: "/courses",
    accent: "#5B4CF5",
  },
  {
    id: "ai-lab",
    name: "AI Lab",
    subtitle: "Capstone & projects",
    route: "/ai-lab",
    accent: "#4CD1B0",
  },
  {
    id: "newsroom",
    name: "Newsroom",
    subtitle: "AI news & trends",
    route: "/news",
    accent: "#6366F1",
  },
  {
    id: "classroom",
    name: "My Classroom",
    subtitle: "Your enrolled courses",
    route: "/classroom",
    accent: "#5B4FE0",
  },
] as const;

export const CAMPUS_PILLARS = [
  {
    title: "Learn",
    description: "Self-paced courses built for real skills.",
    icon: GraduationCap,
  },
  {
    title: "Build",
    description: "Hands-on projects that build your portfolio.",
    icon: Beaker,
  },
  {
    title: "Grow",
    description: "Track progress and unlock achievements.",
    icon: Award,
  },
  {
    title: "Connect",
    description: "Join a community of future builders.",
    icon: Users,
  },
  {
    title: "Get Opportunities",
    description: "Internships, research, and career pathways.",
    icon: Briefcase,
  },
] as const;

export const CAMPUS_STATS = [
  { value: 400, suffix: "+", label: "Learners" },
  { value: 30, suffix: "+", label: "Learning Paths" },
  { value: 120, suffix: "+", label: "Projects Built" },
  { value: 200, suffix: "+", label: "Certificates Earned" },
] as const;

export const PARTNER_LOGOS = [
  "Microsoft",
  "Google",
  "NASA",
  "Stanford",
  "FRC",
  "NVIDIA",
] as const;

export type CampusArea = CampusBuilding | typeof AI_HALL;

export function getCampusAreaByRoute(path: string): CampusArea | undefined {
  if (path === AI_HALL.route) return AI_HALL;
  return CAMPUS_BUILDINGS.find((b) => b.route === path);
}

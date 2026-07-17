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
    tagline: "Find your certification track",
    description:
      "Browse K–12 and college pathways with clear learning outcomes, course previews, and guided enrollment. Start exploring for free.",
    route: "/courses",
    access: "public",
    icon: GraduationCap,
    mapPosition: { top: "18%", left: "28%" },
    illyIntro:
      "This is your first stop! Learning Pathways shows every certification track — from K–12 AI fundamentals to college-ready outcomes. Browse free, enroll when you're ready.",
    color: "#7B6CFF",
  },
  {
    id: "my-classroom",
    name: "My Classroom",
    tagline: "Your guided learning space",
    description:
      "Self-paced lessons, knowledge checks, assignments, and Illy-guided progress tracking — all in one place once you enroll.",
    route: "/classroom",
    access: "enrolled",
    icon: BookOpen,
    mapPosition: { top: "62%", left: "26%" },
    illyIntro:
      "My Classroom is where your learning journey lives — structured lessons, quizzes, and Illy guiding you through every module. Enroll in a pathway to unlock it.",
    color: "#5B4FE0",
  },
  {
    id: "ai-lab",
    name: "AI Lab",
    tagline: "Build real AI projects",
    description:
      "Apply what you've learned through hands-on capstone projects, guided builds, and AI tool workspaces — for enrolled learners.",
    route: "/ai-lab",
    access: "enrolled",
    icon: Beaker,
    mapPosition: { top: "16%", left: "72%" },
    illyIntro:
      "The AI Lab is where learning becomes doing. You'll build real capstone projects that go straight into your portfolio. Enroll in a pathway to get in.",
    color: "#4CD1B0",
  },
  {
    id: "newsroom",
    name: "Newsroom",
    tagline: "Why your skills matter now",
    description:
      "AI news, industry updates, and plain-language explainers that connect today's trends directly to Certily certifications.",
    route: "/news",
    access: "public",
    icon: Newspaper,
    mapPosition: { top: "32%", left: "76%" },
    illyIntro:
      "The Newsroom shows students and parents why AI skills matter right now — connecting industry headlines to the certifications we teach.",
    color: "#6366F1",
  },
  {
    id: "certification-hall",
    name: "AI Certification Hall",
    tagline: "Earn and share your credentials",
    description:
      "Verifiable certificates and achievement badges earned after completing pathways — shareable with colleges, parents, and employers.",
    route: "/certification-hall",
    access: "enrolled",
    icon: Award,
    mapPosition: { top: "72%", left: "50%" },
    illyIntro:
      "This is where you celebrate finishing a pathway! Every certificate you earn here is verifiable — share it with anyone, anywhere.",
    color: "#B8ABFF",
  },
  {
    id: "mission-control",
    name: "Mission Control",
    tagline: "Your student and parent dashboard",
    description:
      "Track learning goals, assignment progress, capstone status, and certificates — with a dedicated parent view built in.",
    route: "/dashboard",
    access: "enrolled",
    icon: LayoutDashboard,
    mapPosition: { top: "58%", left: "74%" },
    illyIntro:
      "Mission Control keeps everyone on track — students see their progress, parents see the full picture. It unlocks with enrollment.",
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

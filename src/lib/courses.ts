import {
  type CertificationLevel,
} from "@/lib/pathway-modules";
import {
  LEVEL_CATEGORY,
  categoryToLevel,
  getPathwayLevel,
  type PathwayLevelId,
} from "@/lib/pathways";
import { optimizeImageUrl } from "@/lib/media";
import { RAW_PROGRAMS, courseSlug, type RawProgram } from "@/lib/curriculum-data";

export type CourseDetails = {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  author: string;
  bestseller: boolean;
  isNew?: boolean;
  rating: number;
  ratingCount: string;
  price: string;
  originalPrice: string;
  image: string;
  updatedDate: string;
  hours: string;
  levels: string;
  hasSubtitles: boolean;
  description: string;
  longDescription: string;
  bulletPoints: string[];
  whatYouWillLearn: string[];
  requirements: string[];
  curriculum: {
    sectionTitle: string;
    moduleCode?: string;
    description?: string;
    hours?: number;
    cumulativeHours?: number;
    practice?: string;
    evidence?: string;
    safety?: string;
    role?: string;
    videoMin?: number;
    readingMin?: number;
    interactiveMin?: number;
    quizMin?: number;
    aiLabMin?: number;
    reflectionMin?: number;
    tutorMin?: number;
    totalMin?: number;
    deliverable?: string;
    masteryCheck?: string;
    feedback?: string;
    tool?: string;
    lectures: number;
    duration: string;
    lessons?: string[];
  }[];
  lessonCount: number;
  category: string;
  bandId: PathwayLevelId;
  audience: string;
  hoursPerOutcome: number;
  modulesPerOutcome: number;
  deliveryModel: string;
  badge: string;
  certLevel: CertificationLevel;
  prerequisite: string;
  prerequisiteLabel: string;
  pathwayLabel: string;
  artifact: string;
  evidenceBundle: string;
  tutor: string;
  certifier: string;
  prerequisiteCourseId?: string;
  badgeLogo?: string;
  previewVideoUrl?: string;
  previewThumbnailUrl?: string;
  facilitatorHours?: number;
  selfPacedHours?: number;
  capstoneHours?: number;
  packageLength?: string;
  syllabusAlignment?: string;
};

const DEFAULT_TUTOR = "Dr. Maya Rao";
const DEFAULT_CERTIFIER = "Certifier";

function certLevelForCode(code: string): CertificationLevel {
  if (code === "P1" || code === "E1" || code === "M1" || code === "H1" || code === "U1" || code === "P6") {
    return "Foundation";
  }
  if (code === "H2" || code === "U2" || code === "P7" || code === "E2" || code === "M2") {
    return "Professional";
  }
  if (code === "H5" || code === "U5" || code === "P10" || code === "U3") {
    return "Advanced";
  }
  return "Specialization";
}

function mapRawProgramToCourseDetails(raw: RawProgram): CourseDetails {
  const slug = courseSlug(raw.code, raw.title);
  const certLevel = certLevelForCode(raw.code);
  const modulesList = [raw.module1, raw.module2, raw.module3, raw.module4];

  const outcomesArray = (
    raw.learningOutcomes.includes(";")
      ? raw.learningOutcomes.split(";")
      : raw.learningOutcomes.split(",")
  )
    .map((s) => s.trim())
    .filter(Boolean);

  const curriculum = [
    {
      moduleCode: "M1",
      sectionTitle: raw.module1,
      hours: 5,
      description: `Guided 5-hour module exploring ${raw.module1.toLowerCase()} with hands-on practice.`,
      duration: "5 hours",
      lectures: 4,
      deliverable: `Module 1 checkpoint: ${raw.module1}`,
      lessons: [
        `Concept exploration: ${raw.module1}`,
        "Guided hands-on activity",
        "Interactive challenge & knowledge check",
        "Reflection & peer discussion",
      ],
    },
    {
      moduleCode: "M2",
      sectionTitle: raw.module2,
      hours: 5,
      description: `Skill deepening covering ${raw.module2.toLowerCase()} with applied exercises.`,
      duration: "5 hours",
      lectures: 4,
      deliverable: `Module 2 checkpoint: ${raw.module2}`,
      lessons: [
        `Core principles: ${raw.module2}`,
        "Hands-on lab activity",
        "Debugging and problem solving",
        "Progress review & feedback",
      ],
    },
    {
      moduleCode: "M3",
      sectionTitle: raw.module3,
      hours: 5,
      description: `Integration covering ${raw.module3.toLowerCase()} with collaboration and ethics.`,
      duration: "5 hours",
      lectures: 4,
      deliverable: `Module 3 checkpoint: ${raw.module3}`,
      lessons: [
        `Advanced concepts: ${raw.module3}`,
        "Collaborative task & real-world scenario",
        "Responsible practice & safety check",
        "Evidence preparation & critique",
      ],
    },
    {
      moduleCode: "M4",
      sectionTitle: raw.module4,
      hours: 5,
      description: `Module 4: ${raw.module4}. Guided hands-on implementation, reflection, and milestone deliverable.`,
      duration: "5 hours",
      deliverable: `Module 4 checkpoint: ${raw.module4}`,
      evidence: raw.assessmentEvidence,
      lectures: 4,
      lessons: [
        `Core application: ${raw.module4}`,
        "Guided hands-on investigation & building",
        "Reflection, critical thinking & peer review",
        `Milestone checkpoint: ${raw.module4}`,
      ],
    },
  ];

  return {
    id: slug,
    code: raw.code,
    title: raw.title,
    subtitle: raw.purpose,
    author: "Certcia AI Academy",
    bestseller: Boolean(raw.bestseller),
    rating: 4.9,
    ratingCount: "1,240",
    price: raw.price,
    originalPrice: raw.originalPrice,
    image: optimizeImageUrl(raw.image, 800),
    updatedDate: "October 2026",
    hours: String(raw.totalHours),
    levels: certLevel,
    hasSubtitles: true,
    description: raw.purpose,
    longDescription: `${raw.title} (${raw.code}) is a ${raw.totalHours}-hour certification across ${raw.packageLength} for ${raw.audience}. Purpose: ${raw.purpose}. Syllabus intent: ${raw.syllabusAlignment}.`,
    bulletPoints: modulesList,
    whatYouWillLearn: outcomesArray.length > 0 ? outcomesArray : modulesList,
    requirements: [
      raw.prerequisites.toLowerCase().includes("none")
        ? "No prior prerequisites needed — start here."
        : `Prerequisites: ${raw.prerequisites}`,
    ],
    curriculum,
    lessonCount: 16,
    category: raw.category,
    bandId: raw.bandId,
    audience: raw.audience,
    hoursPerOutcome: raw.totalHours,
    modulesPerOutcome: 4,
    deliveryModel: `${raw.facilitatorHours}h facilitator-led · ${raw.selfPacedHours}h self-paced · ${raw.capstoneHours}h capstone`,
    badge: raw.code,
    certLevel,
    prerequisite: raw.prerequisites,
    prerequisiteLabel: raw.prerequisites.toLowerCase().includes("none")
      ? "Start here"
      : raw.prerequisites,
    pathwayLabel: raw.category,
    artifact: raw.assessmentEvidence,
    evidenceBundle: raw.assessmentEvidence,
    tutor: DEFAULT_TUTOR,
    certifier: DEFAULT_CERTIFIER,
    facilitatorHours: raw.facilitatorHours,
    selfPacedHours: raw.selfPacedHours,
    capstoneHours: raw.capstoneHours,
    packageLength: raw.packageLength,
    syllabusAlignment: raw.syllabusAlignment,
  };
}

export const COURSES_DATA: CourseDetails[] = RAW_PROGRAMS.map(mapRawProgramToCourseDetails);

export const TOPICS_META: Record<
  string,
  {
    title: string;
    description: string;
    learnersCount: string;
    coursesCount: string;
    handsOnPracticeCount: string;
    averageRating: string;
    relatedTopics: string[];
  }
> = {
  all: {
    title: "All Courses",
    description:
      "30 stackable certifications across 6 developmental tiers — Pre-elementary to Professional Courses, 120 modules and 600 hours.",
    learnersCount: "4,820,000",
    coursesCount: "30",
    handsOnPracticeCount: "120",
    averageRating: "4.8",
    relatedTopics: [
      "Pre-elementary",
      "Elementary",
      "Middle School",
      "High School",
      "College & Universities",
      "Professional Courses",
    ],
  },
  "pre-elementary": {
    title: "Pre-elementary Certifications",
    description:
      "Five playful certifications for Nursery to K-2 (P1–P5). 20 hours each, screen-free and block foundations.",
    learnersCount: "820,000",
    coursesCount: "5",
    handsOnPracticeCount: "20",
    averageRating: "4.9",
    relatedTopics: ["Playful Algorithms", "Creative Coding", "Digital Safety"],
  },
  elementary: {
    title: "Elementary Certifications",
    description:
      "Five creator certifications for Grades 3–5 (E1–E5). Block coding, data detectives, robotics, and responsible GenAI.",
    learnersCount: "1,120,000",
    coursesCount: "5",
    handsOnPracticeCount: "20",
    averageRating: "4.8",
    relatedTopics: ["Game Design", "Data Detectives", "AI Explorers"],
  },
  "middle-school": {
    title: "Middle School Certifications",
    description:
      "Five builder certifications for Grades 6–8 (M1–M5). Python foundations, data visualisation, AI perception, and cyber safety.",
    learnersCount: "950,000",
    coursesCount: "5",
    handsOnPracticeCount: "20",
    averageRating: "4.8",
    relatedTopics: ["Python", "Data Literacy", "Cyber Safety"],
  },
  "high-school": {
    title: "High School Certifications",
    description:
      "Five developer certifications for Grades 9–12 (H1–H5). Applied Python, supervised ML, GenAI media literacy, and capstones.",
    learnersCount: "740,000",
    coursesCount: "5",
    handsOnPracticeCount: "20",
    averageRating: "4.9",
    relatedTopics: ["Applied Python", "Machine Learning", "Generative AI"],
  },
  "college-universities": {
    title: "College & Universities Certifications",
    description:
      "Five engineer certifications for postsecondary learners (U1–U5). AI/ML foundations, data engineering, deep learning, and MLOps.",
    learnersCount: "680,000",
    coursesCount: "5",
    handsOnPracticeCount: "20",
    averageRating: "4.8",
    relatedTopics: [
      "AI/ML Foundations",
      "Data Engineering",
      "Deep Learning",
      "MLOps",
    ],
  },
  "professional-courses": {
    title: "Professional Courses",
    description:
      "Five leadership and specialist certifications (P6–P10). Executive literacy, prompt productivity, no-code automation, product management, and trainer certification.",
    learnersCount: "510,000",
    coursesCount: "5",
    handsOnPracticeCount: "20",
    averageRating: "4.9",
    relatedTopics: [
      "Executive AI",
      "Prompt Engineering",
      "AI Product Management",
      "AI Trainer",
    ],
  },
};

// Aliases for friendly routing
TOPICS_META["middle"] = TOPICS_META["middle-school"];
TOPICS_META["high"] = TOPICS_META["high-school"];
TOPICS_META["college"] = TOPICS_META["college-universities"];
TOPICS_META["professional"] = TOPICS_META["professional-courses"];
TOPICS_META["k5"] = TOPICS_META["elementary"];

const TOPIC_SLUGS: Record<string, string> = {
  "Pre-elementary": "pre-elementary",
  Elementary: "elementary",
  "Middle School": "middle-school",
  "High School": "high-school",
  "College & Universities": "college-universities",
  "Professional Courses": "professional-courses",
  "All Courses": "all",
};

export function getTopicSlug(tabName: string): string {
  if (TOPIC_SLUGS[tabName]) return TOPIC_SLUGS[tabName];
  return tabName
    .toLowerCase()
    .replace(/[–/&]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function coursesForBand(bandId: PathwayLevelId | "all") {
  if (bandId === "all") return COURSES_DATA;
  if (bandId === "k5") return COURSES_DATA.filter((c) => c.bandId === "elementary");
  return COURSES_DATA.filter((c) => c.bandId === bandId);
}

export function getBandForCourse(course: CourseDetails) {
  return getPathwayLevel(
    course.bandId ?? categoryToLevel(course.category) ?? "pre-elementary",
  );
}

export function findCourseByIdOrCode(query: string): CourseDetails | undefined {
  const normalized = query.toLowerCase().trim();
  return COURSES_DATA.find(
    (c) =>
      c.id.toLowerCase() === normalized ||
      c.code.toLowerCase() === normalized ||
      c.id.startsWith(`${normalized}-`),
  );
}

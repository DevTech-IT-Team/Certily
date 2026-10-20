import { ASSESSMENT_RUBRIC } from "@/lib/curriculum-data";
import { COURSES_DATA, coursesForBand, type CourseDetails } from "@/lib/courses";
import { parseInrAmount } from "@/lib/pricing";
import {
  getPathwayLevel,
  pathwayToRouteId,
  PATHWAY_LEVELS,
  type PathwayLevelId,
} from "@/lib/pathways";

export type CatalogBandId = Exclude<PathwayLevelId, "k5">;

export type LearnerRole = "parent" | "student" | "teacher" | "professional";

export type JourneyStage = {
  id: string;
  title: string;
  detail: string;
  mode: "step" | "choice" | "optional";
  codes: string[];
};

export type CategoryJourney = {
  bandId: CatalogBandId;
  stages: JourneyStage[];
  sequenceNote: string;
};

const JOURNEYS: CategoryJourney[] = [
  {
    bandId: "pre-elementary",
    sequenceNote:
      "Recommended route: start with P1, then choose P2 or P3, then choose P4 or P5. Either option at a branch is enough. The other certification stays available, and it is not required.",
    stages: [
      {
        id: "p-start",
        title: "Start",
        detail: "Foundational patterns and instructions.",
        mode: "step",
        codes: ["P1"],
      },
      {
        id: "p-make",
        title: "Choose one",
        detail: "Screen-based stories or safe device habits. Pick one direction.",
        mode: "choice",
        codes: ["P2", "P3"],
      },
      {
        id: "p-next",
        title: "Choose one",
        detail: "Robot routes or early AI awareness. Pick the project that fits.",
        mode: "choice",
        codes: ["P4", "P5"],
      },
    ],
  },
  {
    bandId: "elementary",
    sequenceNote:
      "Recommended route: E1, then E2, then either E3 or E4, then E5. E3 and E4 are alternatives. Taking one does not require the other.",
    stages: [
      {
        id: "e1",
        title: "Start",
        detail: "Block coding stories, games, and animations.",
        mode: "step",
        codes: ["E1"],
      },
      {
        id: "e2",
        title: "Then",
        detail: "Data literacy, privacy, and source-checking.",
        mode: "step",
        codes: ["E2"],
      },
      {
        id: "e-choice",
        title: "Choose one",
        detail: "Robotics and sensors, or learning from data. Either continues the route.",
        mode: "choice",
        codes: ["E3", "E4"],
      },
      {
        id: "e5",
        title: "Then",
        detail: "Responsible generative AI, with a teacher nearby.",
        mode: "step",
        codes: ["E5"],
      },
    ],
  },
  {
    bandId: "middle",
    sequenceNote:
      "Recommended route: M1, then choose M2 or M3, then choose M4 or M5. The second and third stages are choices, not a list of required certifications.",
    stages: [
      {
        id: "m1",
        title: "Start",
        detail: "Python and computational thinking.",
        mode: "step",
        codes: ["M1"],
      },
      {
        id: "m-choice",
        title: "Choose one",
        detail: "Data visualisation or how AI perceives, learns, and uses language.",
        mode: "choice",
        codes: ["M2", "M3"],
      },
      {
        id: "m-next",
        title: "Choose one",
        detail: "A working prototype, or cyber safety and responsible technology.",
        mode: "choice",
        codes: ["M4", "M5"],
      },
    ],
  },
  {
    bandId: "high",
    sequenceNote:
      "Recommended route: H1, then one of H2, H3, or H4, then H5. The middle stage is a choice of one. H5’s own record asks for two High School certifications.",
    stages: [
      {
        id: "h1",
        title: "Start",
        detail: "Applied Python and software engineering habits.",
        mode: "step",
        codes: ["H1"],
      },
      {
        id: "h-choice",
        title: "Choose one",
        detail: "Machine learning, generative AI media literacy, or data science. Choose one.",
        mode: "choice",
        codes: ["H2", "H3", "H4"],
      },
      {
        id: "h5",
        title: "Then",
        detail: "Product, robotics, and capstone work after two High School certifications.",
        mode: "step",
        codes: ["H5"],
      },
    ],
  },
  {
    bandId: "college",
    sequenceNote:
      "Recommended route: U1, then one of U2, U3, or U4, then U5. The middle stage is one elective, not three required certifications.",
    stages: [
      {
        id: "u1",
        title: "Start",
        detail: "AI and machine learning foundations.",
        mode: "step",
        codes: ["U1"],
      },
      {
        id: "u-choice",
        title: "Choose one",
        detail: "Data engineering, deep learning, or governance. Choose one elective.",
        mode: "choice",
        codes: ["U2", "U3", "U4"],
      },
      {
        id: "u5",
        title: "Then",
        detail: "Research, MLOps, and a portfolio capstone.",
        mode: "step",
        codes: ["U5"],
      },
    ],
  },
  {
    bandId: "professional",
    sequenceNote:
      "Recommended route: P6, then P7, then choose P8 or P9. That core is three certifications and 60 hours. P10 is an additional option for trainers and educators. It is not required to finish the recommended route, and this route is not a five-certification pathway.",
    stages: [
      {
        id: "p6",
        title: "Start",
        detail: "AI literacy for business leaders.",
        mode: "step",
        codes: ["P6"],
      },
      {
        id: "p7",
        title: "Then",
        detail: "Prompt design, productivity, and review.",
        mode: "step",
        codes: ["P7"],
      },
      {
        id: "p-choice",
        title: "Choose one",
        detail: "No-code automation or product, data, and risk management.",
        mode: "choice",
        codes: ["P8", "P9"],
      },
      {
        id: "p10",
        title: "Optional",
        detail: "An additional certification for educators and trainers. Not part of the core route.",
        mode: "optional",
        codes: ["P10"],
      },
    ],
  },
];

export const LEARNER_ROLES: { id: LearnerRole; title: string; detail: string }[] = [
  {
    id: "parent",
    title: "A parent or guardian",
    detail: "You are choosing for a child and want age, time, and project details first.",
  },
  {
    id: "student",
    title: "A student",
    detail: "You are choosing for yourself and want the skills, projects, and next certification.",
  },
  {
    id: "teacher",
    title: "A teacher or educator",
    detail: "You want classroom use, syllabus alignment, and practical facilitation.",
  },
  {
    id: "professional",
    title: "A professional learner",
    detail: "You want role-specific practice for leadership, product, or technical work.",
  },
];

export const HOURS_BREAKDOWN = [
  {
    label: "Facilitator-led learning",
    hours: 14,
    percent: 70,
    detail: "Three 45-minute classes each week, plus one 30-minute milestone clinic.",
  },
  {
    label: "Self-paced learning",
    hours: 4,
    percent: 20,
    detail: "Practice between classes. This is part of the commitment, not extra live teaching.",
  },
  {
    label: "Project and capstone",
    hours: 2,
    percent: 10,
    detail: "The artefact or capstone the learner submits as evidence.",
  },
] as const;

export const PROPOSED_PASS_THRESHOLD = 70;

export const DRAFT_STORAGE_KEY = "certcia_pathway_draft";

export type PathwayDraft = {
  role: LearnerRole | null;
  codes: string[];
  bandId: CatalogBandId | null;
};

export function catalogBands() {
  return PATHWAY_LEVELS.filter((level): level is (typeof PATHWAY_LEVELS)[number] & { id: CatalogBandId } => level.id !== "k5");
}

export function asCatalogBand(id: string | null | undefined): CatalogBandId | null {
  if (!id || id === "k5") return id === "k5" ? "elementary" : null;
  return JOURNEYS.some((journey) => journey.bandId === id) ? (id as CatalogBandId) : null;
}

export function getJourney(bandId: CatalogBandId) {
  return JOURNEYS.find((journey) => journey.bandId === bandId) ?? JOURNEYS[0];
}

export function courseByCode(code: string) {
  return COURSES_DATA.find((course) => course.code.toUpperCase() === code.toUpperCase());
}

export function coursesByCodes(codes: string[]) {
  const seen = new Set<string>();
  const courses: CourseDetails[] = [];
  for (const code of codes) {
    const course = courseByCode(code);
    if (!course || seen.has(course.code)) continue;
    seen.add(course.code);
    courses.push(course);
  }
  return courses;
}

export function findStageForCode(code: string) {
  for (const journey of JOURNEYS) {
    const stage = journey.stages.find((item) => item.codes.includes(code));
    if (stage) return { journey, stage };
  }
  return null;
}

export function bandCourses(bandId: CatalogBandId) {
  return coursesForBand(bandId);
}

export function categoryHourSummary(bandId: CatalogBandId) {
  const courses = bandCourses(bandId);
  const hours = courses.reduce((sum, course) => sum + course.hoursPerOutcome, 0);
  if (bandId === "professional") {
    return {
      count: courses.length,
      hours,
      headline: `${courses.length} certifications are available in this category`,
      detail:
        "The recommended professional route is P6, P7, and one of P8 or P9: 3 certifications and 60 hours. P10 adds 20 hours for trainers. Buying every certification is 100 hours, and that is a separate choice from the recommended route.",
    };
  }
  return {
    count: courses.length,
    hours,
    headline: `${courses.length} certifications · ${hours} learning hours in this category`,
    detail:
      "A recommended route follows one option at each choice. You do not need every certification to make progress, and you can buy a single certification on its own.",
  };
}

export function listedPrice(course: CourseDetails) {
  return parseInrAmount(course.price) ?? 0;
}

export function listedOriginal(course: CourseDetails) {
  return parseInrAmount(course.originalPrice) ?? listedPrice(course);
}

export function quoteCourses(courses: CourseDetails[]) {
  const price = courses.reduce((sum, course) => sum + listedPrice(course), 0);
  const original = courses.reduce((sum, course) => sum + listedOriginal(course), 0);
  const hours = courses.reduce((sum, course) => sum + course.hoursPerOutcome, 0);
  const listedDifference = original > price ? original - price : 0;
  return { price, original, hours, listedDifference, count: courses.length };
}

export type SelectionShape =
  | "empty"
  | "single"
  | "two"
  | "three"
  | "full-category"
  | "cross-category"
  | "professional-core"
  | "professional-plus-trainer"
  | "custom";

const PROFESSIONAL_CORE = ["P6", "P7"];

function isProfessionalCore(codes: string[]) {
  if (!codes.includes("P6") || !codes.includes("P7")) return false;
  const elective = ["P8", "P9"].filter((code) => codes.includes(code));
  return elective.length === 1;
}

export function describeSelection(courses: CourseDetails[]): {
  shape: SelectionShape;
  title: string;
  detail: string;
} {
  const codes = courses.map((course) => course.code);
  const bands = new Set(courses.map((course) => course.bandId));
  const hours = courses.reduce((sum, course) => sum + course.hoursPerOutcome, 0);

  if (courses.length === 0) {
    return {
      shape: "empty",
      title: "No certifications selected",
      detail: "Choose at least one certification. A bundle is optional.",
    };
  }

  if (
    isProfessionalCore(codes) &&
    codes.length === 3 &&
    !codes.includes("P10")
  ) {
    return {
      shape: "professional-core",
      title: "Recommended professional route",
      detail: `${courses.length} certifications · ${hours} hours. P10 is still optional for trainers and is not included.`,
    };
  }

  if (isProfessionalCore(codes) && codes.length === 4 && codes.includes("P10")) {
    return {
      shape: "professional-plus-trainer",
      title: "Professional route plus trainer option",
      detail: `${courses.length} certifications · ${hours} hours. This includes optional P10. It is not a completed five-certification pathway.`,
    };
  }

  if (courses.length === 5 && bands.size === 1) {
    const band = courses[0].bandId;
    return {
      shape: "full-category",
      title:
        band === "professional"
          ? "All five professional certifications"
          : "Full category pathway",
      detail:
        band === "professional"
          ? "5 certifications · 100 hours. This buys the whole category, including both P8 and P9 and optional P10. It is wider than the recommended 60-hour route."
          : "5 certifications · 100 hours in one category. Each certification is still completed on its own.",
    };
  }

  if (courses.length === 5 && bands.size > 1) {
    return {
      shape: "cross-category",
      title: "Cross-category progression",
      detail: "5 certifications · 100 hours selected across more than one category.",
    };
  }

  if (courses.length === 1) {
    return {
      shape: "single",
      title: "Single certification",
      detail: `1 certification · ${hours} hours. A complete outcome on its own.`,
    };
  }
  if (courses.length === 2) {
    return {
      shape: "two",
      title: "Two-certification bundle",
      detail: `2 certifications · ${hours} hours. Each one is awarded independently.`,
    };
  }
  if (courses.length === 3) {
    return {
      shape: "three",
      title: "Three-certification pathway",
      detail: `3 certifications · ${hours} hours. A longer route, still made of separate certifications.`,
    };
  }

  return {
    shape: "custom",
    title: "Custom selection",
    detail: `${courses.length} certifications · ${hours} hours. Priced as the sum of the selected certifications. No extra bundle price is configured.`,
  };
}

export type PackageOffer = {
  id: string;
  label: string;
  officialName: string;
  summary: string;
  matches: (courses: CourseDetails[]) => boolean;
  configured: boolean;
};

export const PACKAGE_OFFERS: PackageOffer[] = [
  {
    id: "single",
    label: "Try one",
    officialName: "Single certification",
    summary: "One certification, 20 hours, about six weeks.",
    matches: (courses) => describeSelection(courses).shape === "single",
    configured: true,
  },
  {
    id: "two",
    label: "Build momentum",
    officialName: "Two-certification bundle",
    summary: "Two certifications, 40 hours. No separate bundle price is configured.",
    matches: (courses) => describeSelection(courses).shape === "two",
    configured: true,
  },
  {
    id: "three",
    label: "Go deeper",
    officialName: "Three-certification pathway",
    summary: "Three certifications, 60 hours, including the recommended professional core.",
    matches: (courses) => {
      const shape = describeSelection(courses).shape;
      return shape === "three" || shape === "professional-core";
    },
    configured: true,
  },
  {
    id: "full",
    label: "Complete the category",
    officialName: "Full category pathway",
    summary: "All five certifications in one category, 100 hours.",
    matches: (courses) => describeSelection(courses).shape === "full-category",
    configured: true,
  },
  {
    id: "cross",
    label: "Explore across stages",
    officialName: "Cross-category progression",
    summary: "Five certifications you choose across categories, 100 hours.",
    matches: (courses) => describeSelection(courses).shape === "cross-category",
    configured: true,
  },
  {
    id: "annual",
    label: "Plan the year",
    officialName: "Annual Academy Pass",
    summary:
      "Access limits, expiry, learner coverage, and support terms are not configured yet.",
    matches: () => false,
    configured: false,
  },
];

export function guidanceCopy(role: LearnerRole | null, bandId: CatalogBandId) {
  const level = getPathwayLevel(bandId);
  if (role === "parent") {
    return `${level.audience}. Learning is facilitator-led, with a project the learner can show. You can buy one certification or continue when it is a good fit.`;
  }
  if (role === "student") {
    return `${level.themeTagline}. Each certification ends with evidence you can keep: ${level.outcomes[0]}.`;
  }
  if (role === "teacher") {
    return `${level.description} Syllabus alignment is listed on each certification. P10 is the trainer certification when you are choosing professional study.`;
  }
  if (role === "professional") {
    return `${level.description} Outcomes stay tied to the certification you select.`;
  }
  if (bandId === "pre-elementary" || bandId === "elementary") {
    return `For families: ${level.audience}. Lessons are structured, a facilitator leads most of the time, and the project is age-appropriate.`;
  }
  if (bandId === "professional") {
    return level.description;
  }
  return level.description;
}

export function audienceLenses(course: CourseDetails) {
  const weeks = course.packageLength ?? "6 weeks";
  return [
    {
      id: "parent" as const,
      title: "For parents",
      body: `Suitable for ${course.audience}. The purpose is: ${course.description} The commitment is ${course.hoursPerOutcome} hours over ${weeks}, with ${course.facilitatorHours ?? 14} of those hours facilitator-led. The project to look for is: ${course.artifact}.`,
    },
    {
      id: "student" as const,
      title: "For students",
      body: `You will practise ${course.whatYouWillLearn.join("; ")}. What you make or show: ${course.artifact}.`,
    },
    {
      id: "teacher" as const,
      title: course.bandId === "professional" ? "For teachers and professionals" : "For teachers",
      body: course.syllabusAlignment
        ? `Syllabus alignment on record: ${course.syllabusAlignment}. Prerequisite listed for this certification: ${course.prerequisite}.`
        : `Prerequisite listed for this certification: ${course.prerequisite}.`,
    },
  ];
}

export function scheduleCopy() {
  return {
    weeks: "Six weeks",
    live: "Eighteen classes of 45 minutes come to 13.5 facilitator-led hours. One 30-minute milestone clinic brings facilitator-led time to 14 hours.",
    plain:
      "The 20 hours are the whole learning commitment. They are not 20 hours of live class.",
  };
}

export function proposedCompletion(course: CourseDetails) {
  return {
    status: "proposed" as const,
    note: "These completion rules are a proposal until the academy confirms them. This page does not mark a certification complete.",
    rules: [
      "Complete the required learning activities in the four modules.",
      `Submit the required artefact: ${course.artifact}.`,
      `Meet the assessment rubric. A ${PROPOSED_PASS_THRESHOLD}% threshold is the proposed recommendation, not a confirmed rule.`,
      "Complete the responsible-use check. Responsible practice is one part of the rubric already on record.",
    ],
    rubric: ASSESSMENT_RUBRIC,
  };
}

export function emptyDraft(): PathwayDraft {
  return { role: null, codes: [], bandId: null };
}

export function readDraft(): PathwayDraft {
  if (typeof window === "undefined") return emptyDraft();
  try {
    const raw = window.sessionStorage.getItem(DRAFT_STORAGE_KEY);
    if (!raw) return emptyDraft();
    const parsed = JSON.parse(raw) as Partial<PathwayDraft>;
    const role = LEARNER_ROLES.some((item) => item.id === parsed.role)
      ? (parsed.role as LearnerRole)
      : null;
    const codes = Array.isArray(parsed.codes)
      ? coursesByCodes(parsed.codes.filter((code): code is string => typeof code === "string")).map(
          (course) => course.code,
        )
      : [];
    return {
      role,
      codes,
      bandId: asCatalogBand(parsed.bandId),
    };
  } catch {
    return emptyDraft();
  }
}

export function writeDraft(draft: PathwayDraft) {
  if (typeof window === "undefined") return;
  const unique = coursesByCodes(draft.codes).map((course) => course.code);
  window.sessionStorage.setItem(
    DRAFT_STORAGE_KEY,
    JSON.stringify({ ...draft, codes: unique }),
  );
}

export function toggleCode(codes: string[], code: string) {
  const course = courseByCode(code);
  if (!course) return codes;
  return codes.includes(course.code)
    ? codes.filter((item) => item !== course.code)
    : [...codes, course.code];
}

export function pathwayHref(bandId: CatalogBandId) {
  return `/learning/${pathwayToRouteId(bandId)}` as const;
}

export function prerequisiteNotice(course: CourseDetails, selectedCodes: string[]) {
  const text = course.prerequisite?.trim();
  if (!text || /^none$/i.test(text.trim())) return null;
  const named = text.match(/\b(?:P|E|M|H|U)\d{1,2}\b/gi) ?? [];
  const missing = named.filter(
    (code) => !selectedCodes.some((selected) => selected.toUpperCase() === code.toUpperCase()),
  );
  return {
    text,
    recommended: /recommend|equivalent|helpful|experience|mediated/i.test(text),
    missing,
  };
}

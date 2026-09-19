import {
  ELEMENTARY_MODULES,
  MIDDLE_MODULES,
  HIGH_SCHOOL_MODULES,
  UNIVERSITY_OUTCOMES,
  PROFESSIONAL_OUTCOMES,
  fitLessonsToCount,
  formatModuleDuration,
  type CertificationLevel,
  type PathwayModule,
  type PathwayModuleLesson,
} from "@/lib/pathway-modules";
import {
  LEVEL_CATEGORY,
  categoryToLevel,
  getPathwayLevel,
  type PathwayLevelId,
} from "@/lib/pathways";

export type CourseDetails = {
  id: string;
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
};

const DEFAULT_TUTOR = "Dr. Maya Rao";
const DEFAULT_CERTIFIER = "Certifier";

type CertMaster = {
  certLevel: CertificationLevel;
  prerequisite: string;
  pathwayLabel: string;
  artifact: string;
  evidenceBundle: string;
};

function shortPrerequisite(raw: string): string {
  if (/none|start here/i.test(raw)) return "Start here";
  if (/prior ai superkids/i.test(raw)) return "Needs Discover AI";
  if (/at least one prior high-school/i.test(raw)) return "Needs a prior high-school certification";
  if (/at least one technical or product/i.test(raw)) return "Needs a prior technical or product certification";
  if (/basic block coding/i.test(raw)) return "Needs basic block coding";
  if (/basic sequencing/i.test(raw)) return "Needs basic sequencing";
  if (/basic networking/i.test(raw)) return "Needs basic networking";
  if (/basic spreadsheet/i.test(raw)) return "Needs basic spreadsheet skills";
  if (/professional or university product/i.test(raw)) return "Needs product or project experience";
  if (/professional, policy/i.test(raw)) return "Needs policy, risk, or AI delivery experience";
  if (/lo 21 plus/i.test(raw)) return "Needs Applied Python & Data Science Foundations";
  const needs = raw
    .replace(/^LO\s*\d+\s*/i, "")
    .replace(/\s+or equivalent.*$/i, "")
    .replace(/\s+or demonstrated.*$/i, "")
    .replace(/\s+or placement.*$/i, "")
    .replace(/\s+or professional.*$/i, "")
    .replace(/\s+recommended.*$/i, "")
    .trim();
  return needs.startsWith("Needs") ? needs : `Needs ${needs}`;
}

const PREREQ_COURSE_ID: Record<string, string> = {
  "k5:creator": "k5-explorer",
  "k5:genius": "k5-explorer",
  "middle:ml-builder": "middle-python-pro",
  "middle:genai-creator": "middle-python-pro",
  "middle:game-dev-studio": "middle-python-pro",
  "high:ml-developer": "high-data-science-foundations",
  "high:dl-developer": "high-data-science-foundations",
  "high:llm-app-developer": "high-genai-foundations",
  "high:ai-agents-developer": "high-genai-foundations",
  "high:ai-product-studio": "high-genai-foundations",
  "college:ml-engineer": "college-applied-python-data-science",
  "college:llm-application-engineer": "college-genai-foundations",
  "college:data-scientist": "college-data-analytics-bi",
  "college:computer-vision-engineer": "college-applied-python-data-science",
  "college:ai-healthcare-life-sciences": "college-applied-python-data-science",
  "professional:mlops-production-architect": "college-applied-python-data-science",
  "professional:agentic-ai-systems-architect": "college-genai-foundations",
  "professional:data-engineering-architect": "college-data-analytics-bi",
  "professional:ai-threat-detection-analyst": "college-cybersecurity-foundations",
  "professional:security-ai-governance": "college-cybersecurity-foundations",
  "professional:cloud-ai-engineer": "college-cloud-foundations-ai",
  "professional:ai-infrastructure-scaling": "college-cloud-foundations-ai",
};

const CERT_MASTER: Record<string, CertMaster> = {
  "k5:explorer": {
    certLevel: "Foundation",
    prerequisite: "None; start here.",
    pathwayLabel: "AI Superkids",
    artifact: "An animated 'smart helper' character that talks and responds - a tap-and-play storybook",
    evidenceBundle:
      "An animated 'smart helper' character that talks and responds - a tap-and-play storybook; learner reflection; source / data note; parent or mentor showcase",
  },
  "k5:creator": {
    certLevel: "Professional",
    prerequisite: "Prior AI Superkids outcome or equivalent block-coding experience.",
    pathwayLabel: "AI Superkids",
    artifact:
      "A Scratch game that sees and reacts to the player (on-device face-sensing) plus a simple block chatbot",
    evidenceBundle:
      "A Scratch game that sees and reacts to the player (on-device face-sensing) plus a simple block chatbot; learner reflection; source / data note; parent or mentor showcase",
  },
  "k5:genius": {
    certLevel: "Advanced",
    prerequisite: "Prior AI Superkids outcome or equivalent block-coding experience.",
    pathwayLabel: "AI Superkids",
    artifact:
      "A game or character that recognises your face, voice or drawings using a model the student trained",
    evidenceBundle:
      "A game or character that recognises your face, voice or drawings using a model the student trained; learner reflection; source / data note; parent or mentor showcase",
  },
  "k5:game-maker": {
    certLevel: "Specialization",
    prerequisite: "Basic block coding or facilitator placement check.",
    pathwayLabel: "Creative Computing",
    artifact: "A designed, coded and shareable video game with rule-based 'smart' behaviour",
    evidenceBundle:
      "A designed, coded and shareable video game with rule-based 'smart' behaviour; learner reflection; source / data note; parent or mentor showcase",
  },
  "k5:robo-coder": {
    certLevel: "Specialization",
    prerequisite: "Basic sequencing and conditionals; block coding recommended.",
    pathwayLabel: "Creative Computing",
    artifact: "Code a virtual robot through missions and mazes - entirely on screen, no hardware",
    evidenceBundle:
      "Code a virtual robot through missions and mazes - entirely on screen, no hardware; learner reflection; source / data note; parent or mentor showcase",
  },
  "middle:python-pro": {
    certLevel: "Foundation",
    prerequisite: "None; start here.",
    pathwayLabel: "AI Builder",
    artifact: "A working Python program / playable text-coded mini-game",
    evidenceBundle:
      "A working Python program / playable text-coded mini-game; learner reflection; source / data note; parent or mentor showcase",
  },
  "middle:ml-builder": {
    certLevel: "Professional",
    prerequisite: "LO 6 Python Pro or equivalent data-handling experience.",
    pathwayLabel: "AI Builder",
    artifact: "An ML model the student trains to predict or classify something they care about",
    evidenceBundle:
      "An ML model the student trains to predict or classify something they care about; learner reflection; source / data note; parent or mentor showcase",
  },
  "middle:genai-creator": {
    certLevel: "Advanced",
    prerequisite: "LO 6 Python Pro or equivalent digital-literacy and AI-safety readiness.",
    pathwayLabel: "AI Builder",
    artifact: "Their own AI chatbot/assistant with a personality and a job",
    evidenceBundle:
      "Their own AI chatbot/assistant with a personality and a job; learner reflection; source / data note; parent or mentor showcase",
  },
  "middle:cyber-defender": {
    certLevel: "Specialization",
    prerequisite: "None; start here.",
    pathwayLabel: "Cybersecurity",
    artifact: "A 'defend the system' challenge in browser labs plus a personal security audit",
    evidenceBundle:
      "A 'defend the system' challenge in browser labs plus a personal security audit; learner reflection; source / data note; parent or mentor showcase",
  },
  "middle:game-dev-studio": {
    certLevel: "Specialization",
    prerequisite: "LO 6 Python Pro or equivalent text-based programming.",
    pathwayLabel: "Game Development",
    artifact: "A coded, playable game with AI enemies driven by decision trees",
    evidenceBundle:
      "A coded, playable game with AI enemies driven by decision trees; learner reflection; source / data note; parent or mentor showcase",
  },
  "high:data-science-foundations": {
    certLevel: "Foundation",
    prerequisite: "None; start here.",
    pathwayLabel: "AI Developer",
    artifact: "A data-analysis and first ML mini-project in Python, published to GitHub",
    evidenceBundle:
      "A data-analysis and first ML mini-project in Python, published to GitHub; learner reflection; source / data note; README or technical report",
  },
  "high:ml-developer": {
    certLevel: "Professional",
    prerequisite: "LO 11 AI & Data Science Foundations or demonstrated equivalent.",
    pathwayLabel: "AI Developer",
    artifact: "A trained, evaluated ML model solving a real problem (classification or regression)",
    evidenceBundle:
      "A trained, evaluated ML model solving a real problem (classification or regression); learner reflection; source / data note; README or technical report",
  },
  "high:dl-developer": {
    certLevel: "Advanced",
    prerequisite: "LO 11 AI & Data Science Foundations or demonstrated equivalent.",
    pathwayLabel: "AI Developer",
    artifact: "A neural network (image or text) built, trained and deployed as a live demo",
    evidenceBundle:
      "A neural network (image or text) built, trained and deployed as a live demo; learner reflection; source / data note; README or technical report",
  },
  "high:genai-foundations": {
    certLevel: "Foundation",
    prerequisite: "None; start here.",
    pathwayLabel: "GenAI Developer",
    artifact: "A working GenAI-powered tool built with prompt engineering",
    evidenceBundle:
      "A working GenAI-powered tool built with prompt engineering; learner reflection; source / data note; README or technical report",
  },
  "high:llm-app-developer": {
    certLevel: "Professional",
    prerequisite: "LO 14 Generative AI Foundations or placement assessment.",
    pathwayLabel: "GenAI Developer",
    artifact: "A deployed LLM app grounded in your own data (RAG) - for example a study assistant",
    evidenceBundle:
      "A deployed LLM app grounded in your own data (RAG) - for example a study assistant; learner reflection; source / data note; README or technical report",
  },
  "high:ai-agents-developer": {
    certLevel: "Advanced",
    prerequisite: "LO 14 Generative AI Foundations or placement assessment.",
    pathwayLabel: "GenAI Developer",
    artifact: "An autonomous multi-agent system that completes a real multi-step task",
    evidenceBundle:
      "An autonomous multi-agent system that completes a real multi-step task; learner reflection; source / data note; README or technical report",
  },
  "high:cyber-ethical-hacking": {
    certLevel: "Specialization",
    prerequisite: "Basic networking and computing literacy; all labs are sandboxed.",
    pathwayLabel: "Specialization / Portfolio",
    artifact: "Solved capture-the-flag challenges plus a personal security portfolio",
    evidenceBundle:
      "Solved capture-the-flag challenges plus a personal security portfolio; learner reflection; source / data note; README or technical report",
  },
  "high:data-analyst-pro": {
    certLevel: "Specialization",
    prerequisite: "Basic spreadsheet or data-handling experience.",
    pathwayLabel: "Specialization / Portfolio",
    artifact: "An interactive data dashboard that tells a real story",
    evidenceBundle:
      "An interactive data dashboard that tells a real story; learner reflection; source / data note; README or technical report",
  },
  "high:ai-product-studio": {
    certLevel: "Specialization",
    prerequisite: "LO 14 Generative AI Foundations recommended; problem idea required.",
    pathwayLabel: "Specialization / Portfolio",
    artifact: "An AI product prototype plus an investor-style pitch",
    evidenceBundle:
      "An AI product prototype plus an investor-style pitch; learner reflection; source / data note; README or technical report",
  },
  "high:ai-capstone-portfolio": {
    certLevel: "Specialization",
    prerequisite: "At least one prior high-school AI or data outcome.",
    pathwayLabel: "Specialization / Portfolio",
    artifact: "A polished end-to-end AI project plus GitHub portfolio and presentation",
    evidenceBundle:
      "A polished end-to-end AI project plus GitHub portfolio and presentation; learner reflection; source / data note; README or technical report",
  },
  "college:applied-python-data-science": {
    certLevel: "Foundation",
    prerequisite: "None; start here.",
    pathwayLabel: "AI/ML Engineering",
    artifact: "A reproducible data-science notebook and analysis on a real dataset",
    evidenceBundle:
      "A reproducible data-science notebook and analysis on a real dataset; learner reflection; source / data note; README or technical report",
  },
  "college:ml-engineer": {
    certLevel: "Professional",
    prerequisite: "LO 21 Applied Python & Data Science Foundations or equivalent professional experience.",
    pathwayLabel: "AI/ML Engineering",
    artifact: "A trained, tuned and evaluated ML model with a documented pipeline",
    evidenceBundle:
      "A trained, tuned and evaluated ML model with a documented pipeline; learner reflection; source / data note; README or technical report",
  },
  "college:genai-foundations": {
    certLevel: "Foundation",
    prerequisite: "None; start here.",
    pathwayLabel: "GenAI/LLM Engineering",
    artifact: "A GenAI-powered tool plus a prompt and evaluation report",
    evidenceBundle:
      "A GenAI-powered tool plus a prompt and evaluation report; learner reflection; source / data note; README or technical report",
  },
  "college:llm-application-engineer": {
    certLevel: "Professional",
    prerequisite: "LO 24 Generative AI Foundations or equivalent LLM application experience.",
    pathwayLabel: "GenAI/LLM Engineering",
    artifact: "A deployed RAG application with evaluation on real documents",
    evidenceBundle:
      "A deployed RAG application with evaluation on real documents; learner reflection; source / data note; README or technical report",
  },
  "college:data-analytics-bi": {
    certLevel: "Foundation",
    prerequisite: "None; start here.",
    pathwayLabel: "Data Science & Engineering",
    artifact: "An executive BI dashboard answering real business questions",
    evidenceBundle:
      "An executive BI dashboard answering real business questions; learner reflection; source / data note; README or technical report",
  },
  "college:data-scientist": {
    certLevel: "Professional",
    prerequisite: "LO 27 Data Analytics & BI Foundations or equivalent data experience.",
    pathwayLabel: "Data Science & Engineering",
    artifact: "An end-to-end analysis with statistical modelling and a predictive model",
    evidenceBundle:
      "An end-to-end analysis with statistical modelling and a predictive model; learner reflection; source / data note; README or technical report",
  },
  "college:cybersecurity-foundations": {
    certLevel: "Foundation",
    prerequisite: "None; start here.",
    pathwayLabel: "Cybersecurity & AI Governance",
    artifact: "A hardened system plus a documented security assessment",
    evidenceBundle:
      "A hardened system plus a documented security assessment; learner reflection; source / data note; README or technical report",
  },
  "college:cloud-foundations-ai": {
    certLevel: "Foundation",
    prerequisite: "None; start here.",
    pathwayLabel: "Cloud & AI Infrastructure",
    artifact: "A cloud-deployed app using managed AI and data services",
    evidenceBundle:
      "A cloud-deployed app using managed AI and data services; learner reflection; source / data note; README or technical report",
  },
  "college:computer-vision-engineer": {
    certLevel: "Specialization",
    prerequisite: "LO 21 plus linear algebra/programming readiness; guided pathway available.",
    pathwayLabel: "Specialization / Portfolio",
    artifact: "A deployed vision application (detection or segmentation) with evaluation",
    evidenceBundle:
      "A deployed vision application (detection or segmentation) with evaluation; learner reflection; source / data note; README or technical report",
  },
  "college:ai-healthcare-life-sciences": {
    certLevel: "Specialization",
    prerequisite: "LO 21 plus domain access and a non-clinical educational dataset.",
    pathwayLabel: "Specialization / Portfolio",
    artifact: "A healthcare AI project (imaging or clinical data) with a compliance note",
    evidenceBundle:
      "A healthcare AI project (imaging or clinical data) with a compliance note; learner reflection; source / data note; README or technical report",
  },
  "professional:mlops-production-architect": {
    certLevel: "Advanced",
    prerequisite: "LO 21 Applied Python & Data Science Foundations or equivalent professional experience.",
    pathwayLabel: "AI/ML Engineering",
    artifact: "A deployed, monitored ML service with CI/CD, tracking and drift alerts",
    evidenceBundle:
      "A deployed, monitored ML service with CI/CD, tracking and drift alerts; learner reflection; source / data note; README or technical report",
  },
  "professional:agentic-ai-systems-architect": {
    certLevel: "Advanced",
    prerequisite: "LO 24 Generative AI Foundations or equivalent LLM application experience.",
    pathwayLabel: "GenAI/LLM Engineering",
    artifact: "A production multi-agent system that automates a real business workflow",
    evidenceBundle:
      "A production multi-agent system that automates a real business workflow; learner reflection; source / data note; README or technical report",
  },
  "professional:data-engineering-architect": {
    certLevel: "Advanced",
    prerequisite: "LO 27 Data Analytics & BI Foundations or equivalent data experience.",
    pathwayLabel: "Data Science & Engineering",
    artifact: "A production data pipeline (ETL/ELT) feeding an analytics or ML workload",
    evidenceBundle:
      "A production data pipeline (ETL/ELT) feeding an analytics or ML workload; learner reflection; source / data note; README or technical report",
  },
  "professional:ai-threat-detection-analyst": {
    certLevel: "Professional",
    prerequisite: "LO 30 Cybersecurity Foundations or equivalent security experience.",
    pathwayLabel: "Cybersecurity & AI Governance",
    artifact: "An anomaly-detection pipeline plus an incident-response runbook",
    evidenceBundle:
      "An anomaly-detection pipeline plus an incident-response runbook; learner reflection; source / data note; README or technical report",
  },
  "professional:security-ai-governance": {
    certLevel: "Advanced",
    prerequisite: "LO 30 Cybersecurity Foundations or equivalent security experience.",
    pathwayLabel: "Cybersecurity & AI Governance",
    artifact: "An AI risk and governance framework plus a model-risk assessment",
    evidenceBundle:
      "An AI risk and governance framework plus a model-risk assessment; learner reflection; source / data note; README or technical report",
  },
  "professional:cloud-ai-engineer": {
    certLevel: "Professional",
    prerequisite: "LO 33 Cloud Foundations for AI or equivalent cloud experience.",
    pathwayLabel: "Cloud & AI Infrastructure",
    artifact: "A deployed AI service using cloud ML (serverless inference, AutoML, APIs)",
    evidenceBundle:
      "A deployed AI service using cloud ML (serverless inference, AutoML, APIs); learner reflection; source / data note; README or technical report",
  },
  "professional:ai-infrastructure-scaling": {
    certLevel: "Advanced",
    prerequisite: "LO 33 Cloud Foundations for AI or equivalent cloud experience.",
    pathwayLabel: "Cloud & AI Infrastructure",
    artifact: "A scalable, monitored AI infrastructure design and deployment",
    evidenceBundle:
      "A scalable, monitored AI infrastructure design and deployment; learner reflection; source / data note; README or technical report",
  },
  "professional:ai-product-manager": {
    certLevel: "Specialization",
    prerequisite: "Professional or university product/project experience recommended.",
    pathwayLabel: "Specialization / Portfolio",
    artifact: "An AI product strategy: roadmap, business case and success metrics",
    evidenceBundle:
      "An AI product strategy: roadmap, business case and success metrics; learner reflection; source / data note; README or technical report",
  },
  "professional:responsible-ai-ethics": {
    certLevel: "Specialization",
    prerequisite: "Professional, policy, legal, risk, or AI delivery experience recommended.",
    pathwayLabel: "Specialization / Portfolio",
    artifact: "An AI governance and model-risk pack for a real use case",
    evidenceBundle:
      "An AI governance and model-risk pack for a real use case; learner reflection; source / data note; README or technical report",
  },
  "professional:ai-career-capstone-portfolio": {
    certLevel: "Specialization",
    prerequisite: "At least one technical or product certification and a defined portfolio problem.",
    pathwayLabel: "Specialization / Portfolio",
    artifact: "A polished portfolio project plus GitHub, resume and a mock technical interview",
    evidenceBundle:
      "A polished portfolio project plus GitHub, resume and a mock technical interview; learner reflection; source / data note; README or technical report",
  },
};

function lessonsInsideModule(lesson: PathwayModuleLesson): string[] {
  const chunks = (lesson.description ?? "")
    .split(/;\s*/)
    .map((part) => part.replace(/\.$/, "").trim())
    .filter((part) => part.length > 10);

  return chunks.length >= 2 ? chunks.slice(0, 4) : [];
}

function coursesFromModules(
  modules: PathwayModule[],
  bandId: PathwayLevelId,
  idPrefix: string,
): CourseDetails[] {
  const band = getPathwayLevel(bandId);
  const category = LEVEL_CATEGORY[bandId];

  const dummyPrices: Record<PathwayLevelId, { price: number; original: number }> = {
    k5: { price: 1499, original: 2999 },
    middle: { price: 2499, original: 4999 },
    high: { price: 3999, original: 7999 },
    college: { price: 6499, original: 12999 },
    professional: { price: 9999, original: 19999 },
  };
  const listed = dummyPrices[bandId];

  return modules.slice(0, band.outcomeCount).map((mod, index) => {
    const lessons = fitLessonsToCount(mod.lessons, band.modulesPerOutcome);
    const bump = index % 3;
    const metaKey = `${bandId}:${mod.id}`;
    const master = CERT_MASTER[metaKey];
    const certLevel = master?.certLevel ?? "Foundation";
    const prerequisite = master?.prerequisite ?? "None; start here.";
    const artifact = master?.artifact ?? mod.outcomeArtifact ?? mod.description;
    const evidenceBundle = master?.evidenceBundle ?? artifact;
    const pathwayLabel = master?.pathwayLabel ?? category;
    const defaultHours = Math.round(band.hoursPerOutcome / band.modulesPerOutcome);
    return {
      id: `${idPrefix}-${mod.id}`,
      title: mod.title,
      subtitle: artifact,
      author: "Certcia AI Campus",
      bestseller: index === 0,
      rating: 4.9,
      ratingCount: "1,204",
      price: `₹${listed.price + bump * 200}`,
      originalPrice: `₹${listed.original + bump * 400}`,
      image: mod.image,
      updatedDate: "August 2026",
      hours: String(band.hoursPerOutcome),
      levels: certLevel,
      hasSubtitles: true,
      description: mod.description,
      longDescription: `${mod.title} is a ${band.hoursPerOutcome}-hour ${certLevel.toLowerCase()} certification. Artifact: ${artifact}.`,
      bulletPoints: lessons.slice(0, 3).map((l) => l.title),
      whatYouWillLearn: lessons.filter((l) => !l.capstone).map((l) => l.title),
      requirements: [shortPrerequisite(prerequisite)],
      curriculum: lessons.map((lesson, lessonIndex) => {
        const nested = lessonsInsideModule(lesson);
        const hours = lesson.hours ?? defaultHours;
        return {
          moduleCode: lesson.capstone ? "Capstone" : `M${lessonIndex + 1}`,
          sectionTitle: lesson.title,
          description:
            lesson.description ??
            `${lesson.title} is a guided module inside this certification. Learners practice the skill, then check their understanding before moving on.`,
          hours,
          cumulativeHours: lesson.cumulativeHours,
          practice: lesson.practice,
          evidence: lesson.evidence,
          safety: lesson.safety,
          role: lesson.role,
          videoMin: lesson.videoMin,
          readingMin: lesson.readingMin,
          interactiveMin: lesson.interactiveMin,
          quizMin: lesson.quizMin,
          aiLabMin: lesson.aiLabMin,
          reflectionMin: lesson.reflectionMin,
          tutorMin: lesson.tutorMin,
          totalMin: lesson.totalMin,
          deliverable: lesson.deliverable,
          masteryCheck: lesson.masteryCheck,
          feedback: lesson.feedback,
          tool: lesson.tool,
          lectures: nested.length,
          duration: formatModuleDuration({
            hours,
            videoMin: lesson.videoMin,
            readingMin: lesson.readingMin,
            aiLabMin: lesson.aiLabMin,
          }),
          lessons: nested,
        };
      }),
      lessonCount: lessons.reduce((sum, lesson) => sum + lessonsInsideModule(lesson).length, 0),
      category,
      bandId,
      audience: band.audience,
      hoursPerOutcome: band.hoursPerOutcome,
      modulesPerOutcome: band.modulesPerOutcome,
      deliveryModel: "Self-paced",
      badge: certLevel,
      certLevel,
      prerequisite,
      prerequisiteLabel: shortPrerequisite(prerequisite),
      pathwayLabel,
      artifact,
      evidenceBundle,
      tutor: DEFAULT_TUTOR,
      certifier: mod.certifier ?? DEFAULT_CERTIFIER,
      prerequisiteCourseId: PREREQ_COURSE_ID[metaKey],
    };
  });
}

export const COURSES_DATA: CourseDetails[] = [
  ...coursesFromModules(ELEMENTARY_MODULES, "k5", "k5"),
  ...coursesFromModules(MIDDLE_MODULES, "middle", "middle"),
  ...coursesFromModules(HIGH_SCHOOL_MODULES, "high", "high"),
  ...coursesFromModules(UNIVERSITY_OUTCOMES, "college", "college"),
  ...coursesFromModules(PROFESSIONAL_OUTCOMES, "professional", "professional"),
];

export const TOPICS_META: Record<string, {
  title: string;
  description: string;
  learnersCount: string;
  coursesCount: string;
  handsOnPracticeCount: string;
  averageRating: string;
  relatedTopics: string[];
}> = {
  "all": {
    title: "All certifications",
    description: "40 stackable certifications from K–5 through working professionals — 335 modules and 1,650 hours, Explorer to Architect.",
    learnersCount: "6,148,447",
    coursesCount: "40",
    handsOnPracticeCount: "335",
    averageRating: "4.5",
    relatedTopics: ["K–5", "Middle School", "University / College"]
  },
  "k-5": {
    title: "K–5 certifications",
    description: "Five Explorer / Creator certifications for ages 5–11. Each has 5 modules with lessons and 20 guided-studio hours, ending in a family showcase.",
    learnersCount: "1,234,567",
    coursesCount: "5",
    handsOnPracticeCount: "25",
    averageRating: "4.8",
    relatedTopics: ["Block Coding", "Creative Play", "Kids Programming"]
  },
  "middle-school": {
    title: "Middle school certifications",
    description: "Five Builder certifications for grades 6–8. Each has 6 modules with lessons and 30 hours in a guided lab plus independent build.",
    learnersCount: "892,104",
    coursesCount: "5",
    handsOnPracticeCount: "30",
    averageRating: "4.7",
    relatedTopics: ["Python Basics", "Data Science", "Machine Learning Intro"]
  },
  "high-school": {
    title: "High school certifications",
    description: "Ten Developer certifications for grades 9–12. Each has 8 modules with lessons and 40 hours in a project studio with portfolio review.",
    learnersCount: "543,901",
    coursesCount: "10",
    handsOnPracticeCount: "80",
    averageRating: "4.6",
    relatedTopics: ["Advanced Python", "Neural Networks", "AP Computer Science"]
  },
  "university-college": {
    title: "University / college certifications",
    description: "Ten Engineer certifications for degree learners. Each has 10 modules with lessons and 50 hours in an applied lab with a technical report.",
    learnersCount: "1,450,222",
    coursesCount: "10",
    handsOnPracticeCount: "100",
    averageRating: "4.6",
    relatedTopics: ["AI Architecture", "Cloud Computing", "Software Engineering"]
  },
  "working-professionals": {
    title: "Working professional certifications",
    description: "Ten Professional / Architect certifications for career learners. Each has 10 modules with lessons and 50 hours with workplace cases and production evidence.",
    learnersCount: "2,840,119",
    coursesCount: "10",
    handsOnPracticeCount: "100",
    averageRating: "4.5",
    relatedTopics: ["LLMs", "RAG", "Agentic AI", "MLOps"]
  },
  "free-courses": {
    title: "Free Courses",
    description: "High-quality introductory courses available at no cost to kickstart your learning journey.",
    learnersCount: "12,500,000",
    coursesCount: "150",
    handsOnPracticeCount: "400",
    averageRating: "4.7",
    relatedTopics: ["Beginner AI", "Programming Basics"]
  }
};

const TOPIC_SLUGS: Record<string, string> = {
  "K–5": "k-5",
  "Middle School": "middle-school",
  "High School": "high-school",
  "University / College": "university-college",
  "Working Professionals": "working-professionals",
  "Free Courses": "free-courses",
};

export function getTopicSlug(tabName: string): string {
  if (TOPIC_SLUGS[tabName]) return TOPIC_SLUGS[tabName];
  return tabName
    .toLowerCase()
    .replace(/[–/]/g, " ")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function coursesForBand(bandId: PathwayLevelId | "all") {
  if (bandId === "all") return COURSES_DATA;
  return COURSES_DATA.filter((course) => course.bandId === bandId);
}

export function getBandForCourse(course: CourseDetails) {
  return getPathwayLevel(course.bandId ?? categoryToLevel(course.category) ?? "k5");
}

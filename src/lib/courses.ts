import { ELEMENTARY_MODULES, MIDDLE_MODULES, HIGH_SCHOOL_MODULES, COLLEGE_MODULES, type PathwayModule } from "@/lib/pathway-modules";

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
    lectures: number;
    duration: string;
    lessons?: string[];
  }[];
  category: string;
  badgeLogo?: string;
  previewVideoUrl?: string;
  previewThumbnailUrl?: string;
};

function coursesFromModules(
  modules: PathwayModule[],
  category: string,
  idPrefix: string,
): CourseDetails[] {
  return modules.map((mod, index) => {
    const audience = mod.audienceLabel ?? `ages ${mod.ages}`;
    return {
      id: `${idPrefix}-${mod.id}`,
      title: `${mod.title} (${audience})`,
      subtitle: mod.description,
      author: "Certcia AI Campus",
      bestseller: index === 0,
      rating: 4.9,
      ratingCount: "1,204",
      price: "Free",
      originalPrice: "₹999.00",
      image: mod.image,
      updatedDate: "August 2026",
      hours: String(mod.lessons.length * 2),
      levels: "Beginner",
      hasSubtitles: true,
      description: mod.description,
      longDescription: `${mod.title} is built for ${audience}. ${mod.description}. Each lesson builds toward a capstone project.`,
      bulletPoints: mod.lessons.slice(0, 3).map((l) => l.title),
      whatYouWillLearn: mod.lessons.filter((l) => !l.capstone).map((l) => l.title),
      requirements: [
        "A laptop or tablet with a modern web browser.",
        "Curiosity and a willingness to learn through play!",
      ],
      curriculum: mod.lessons.map((lesson) => ({
        sectionTitle: lesson.title,
        lectures: 1,
        duration: lesson.capstone ? "Capstone" : "25min",
        lessons: [lesson.title],
      })),
      category,
    };
  });
}

export const COURSES_DATA: CourseDetails[] = [
  ...coursesFromModules(ELEMENTARY_MODULES, "Elementary", "elementary"),
  ...coursesFromModules(MIDDLE_MODULES, "Middle School", "middle"),
  ...coursesFromModules(HIGH_SCHOOL_MODULES, "High School", "high"),
  ...coursesFromModules(COLLEGE_MODULES, "College", "college"),
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
    title: "All Courses",
    description: "Explore our complete catalog of AI and programming courses designed to take you from beginner to professional.",
    learnersCount: "6,148,447",
    coursesCount: "3,114",
    handsOnPracticeCount: "6,302",
    averageRating: "4.5",
    relatedTopics: ["IT & Software", "Development", "Data Science"]
  },
  "elementary": {
    title: "Elementary Courses",
    description: "Elementary courses teach young learners the basics of logic and creative technology through playful visual programming.",
    learnersCount: "1,234,567",
    coursesCount: "42",
    handsOnPracticeCount: "115",
    averageRating: "4.8",
    relatedTopics: ["Block Coding", "Creative Play", "Kids Programming"]
  },
  "middle-school": {
    title: "Middle School Courses",
    description: "Middle school courses introduce students to text-based programming, data analysis, and the foundational concepts of AI.",
    learnersCount: "892,104",
    coursesCount: "68",
    handsOnPracticeCount: "250",
    averageRating: "4.7",
    relatedTopics: ["Python Basics", "Data Science", "Machine Learning Intro"]
  },
  "high-school": {
    title: "High School Courses",
    description: "High school courses dive deep into algorithms, neural networks, and preparing for college-level computer science.",
    learnersCount: "543,901",
    coursesCount: "120",
    handsOnPracticeCount: "480",
    averageRating: "4.6",
    relatedTopics: ["Advanced Python", "Neural Networks", "AP Computer Science"]
  },
  "college": {
    title: "College Courses",
    description: "College-level courses tackle complex architectures, research methodologies, and enterprise-grade system design.",
    learnersCount: "1,450,222",
    coursesCount: "310",
    handsOnPracticeCount: "1,200",
    averageRating: "4.6",
    relatedTopics: ["AI Architecture", "Cloud Computing", "Software Engineering"]
  },
  "professional": {
    title: "Professional Courses",
    description: "Professional courses are designed for working developers looking to upskill and build production-ready AI applications.",
    learnersCount: "2,840,119",
    coursesCount: "850",
    handsOnPracticeCount: "3,400",
    averageRating: "4.5",
    relatedTopics: ["LLMs", "RAG", "Agentic AI", "MLOps"]
  },
  "career": {
    title: "Career Track Courses",
    description: "Comprehensive bootcamps designed to land you a job in the AI industry.",
    learnersCount: "450,112",
    coursesCount: "25",
    handsOnPracticeCount: "800",
    averageRating: "4.8",
    relatedTopics: ["Interview Prep", "Portfolio Building", "Job Guarantee"]
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

export function getTopicSlug(tabName: string): string {
  if (tabName === "Free Courses") return "free-courses";
  return tabName.toLowerCase().replace(/\s+/g, '-');
}

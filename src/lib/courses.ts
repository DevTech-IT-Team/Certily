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
  }[];
  category: string;
  badgeLogo?: string;
  previewVideoUrl?: string;
  previewThumbnailUrl?: string;
};

export const COURSES_DATA: CourseDetails[] = [
  {
    id: "course-1",
    title: "The AI Engineer Course 2026: Complete AI Engineer Bootcamp",
    subtitle: "Master Python, LangChain, Hugging Face, Transformers, and LLMs to build cutting-edge Artificial Intelligence applications.",
    author: "365 Careers",
    bestseller: true,
    rating: 4.5,
    ratingCount: "24,566",
    price: "₹399.00",
    originalPrice: "₹3,089.00",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=800&q=80",
    updatedDate: "August 2026",
    hours: "30",
    levels: "All Levels",
    hasSubtitles: true,
    description: "Complete AI Engineer Training: Python, NLP, Transformers, LLMs, LangChain, Hugging Face, APIs",
    longDescription: "Are you interested in exploring the exciting world of AI and mastering the fundamentals to unlock its full potential? If that's the case, you've come to the right place! This comprehensive AI engineering bootcamp begins with the fundamentals—exploring the core components behind today's cutting-edge algorithms. Through this journey, you'll establish a strong foundation that will allow you to build robust, scalable AI applications for the real world.",
    bulletPoints: [
      "The course provides the entire toolbox you need to become an AI Engineer",
      "Understand key Artificial Intelligence concepts and build a solid foundation",
      "Start coding in Python and learn how to use it for NLP and AI",
    ],
    whatYouWillLearn: [
      "Understand key Artificial Intelligence concepts and build a solid foundation",
      "Understand Generative AI and the underlying technology",
      "Acquire an understanding of key AI tools",
      "Skyrocket productivity using AI",
      "Grasp the importance of AI ethics",
      "Become acquainted with the top job prospects in the AI field"
    ],
    requirements: [
      "No prior experience is required. We will start from the very basics.",
      "A computer (Windows, Mac, or Linux) with an internet connection."
    ],
    curriculum: [
      { sectionTitle: "Getting Started", lectures: 3, duration: "15min" },
      { sectionTitle: "What does the course cover", lectures: 2, duration: "10min" },
      { sectionTitle: "Natural vs Artificial Intelligence", lectures: 4, duration: "25min" },
      { sectionTitle: "Brief history of AI", lectures: 5, duration: "42min" },
      { sectionTitle: "Demystifying AI, Data science, Machine learning, and Deep learning", lectures: 8, duration: "50min" },
      { sectionTitle: "Weak vs. Strong AI", lectures: 2, duration: "12min" },
      { sectionTitle: "Key AI techniques", lectures: 5, duration: "40min" },
      { sectionTitle: "Understanding Generative AI", lectures: 10, duration: "1hr 15min" }
    ],
    category: "Professional",
    badgeLogo: "365 Careers"
  },
  {
    id: "course-2",
    title: "Intro to AI: A Beginner's Guide to Artificial Intelligence",
    subtitle: "Understand How AI Works and How to Leverage This Technology to Transform Your Business and Career",
    author: "365 Careers",
    bestseller: true,
    rating: 4.5,
    ratingCount: "32,373",
    price: "₹399.00",
    originalPrice: "₹2,329.00",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    updatedDate: "July 2026",
    hours: "12",
    levels: "Beginner",
    hasSubtitles: true,
    description: "A comprehensive beginner guide to AI concepts without deep math.",
    longDescription: "Are you interested in exploring the exciting world of AI and mastering the fundamentals to unlock its full potential? If that's the case, you've come to the right place! This Intro to AI course begins with the fundamentals—exploring the core components behind today's cutting-edge algorithms. Through this comprehensive journey, you'll establish a strong understanding of how AI works without getting bogged down by complicated math.",
    bulletPoints: [
      "Grasp the fundamentals of machine learning and neural networks",
      "Real-world applications of AI in business",
      "No programming experience required",
    ],
    whatYouWillLearn: [
      "Understand key Artificial Intelligence concepts and build a solid foundation",
      "Understand Generative AI and the underlying technology",
      "Acquire an understanding of key AI tools",
      "Skyrocket productivity using AI",
      "Grasp the importance of AI ethics",
      "Become acquainted with the top job prospects in the AI field"
    ],
    requirements: [
      "No prior experience is required. We will start from the very basics."
    ],
    curriculum: [
      { sectionTitle: "Getting started", lectures: 5, duration: "45min" },
      { sectionTitle: "What does the course cover", lectures: 3, duration: "27min" },
      { sectionTitle: "Natural vs Artificial Intelligence", lectures: 2, duration: "18min" },
      { sectionTitle: "Brief history of AI", lectures: 4, duration: "43min" },
      { sectionTitle: "Demystifying AI, Data science, Machine learning", lectures: 5, duration: "51min" }
    ],
    category: "High School",
    badgeLogo: "365 Careers"
  },
  {
    id: "course-3",
    title: "Complete AI Architecture Bootcamp: From RAG to Agents",
    subtitle: "Design and implement production-ready LLM applications from scratch using RAG and autonomous agents.",
    author: "Data Science Academy, School of AI",
    bestseller: false,
    isNew: true,
    rating: 4.7,
    ratingCount: "15",
    price: "₹399.00",
    originalPrice: "₹1,919.00",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
    updatedDate: "August 2026",
    hours: "45",
    levels: "Intermediate",
    hasSubtitles: true,
    description: "Build robust AI systems using modern architecture patterns.",
    longDescription: "Take your AI skills to the next level by mastering the architecture behind today's most advanced LLM applications. You will learn to build enterprise-scale RAG (Retrieval-Augmented Generation) pipelines, implement semantic caching, and deploy autonomous agents capable of complex reasoning and tool use.",
    bulletPoints: [
      "Master Retrieval-Augmented Generation (RAG)",
      "Build autonomous agents with LangChain",
      "Deploy scalable AI applications to production",
    ],
    whatYouWillLearn: [
      "Design scalable RAG architectures",
      "Implement advanced vector search techniques",
      "Build multi-agent collaboration systems",
      "Deploy models to cloud infrastructure",
      "Optimize LLM inference costs and latency",
      "Secure AI applications against prompt injection"
    ],
    requirements: [
      "Basic understanding of Python programming.",
      "Familiarity with REST APIs and basic cloud concepts."
    ],
    curriculum: [
      { sectionTitle: "Introduction to AI Architecture", lectures: 4, duration: "40min" },
      { sectionTitle: "Building Blocks of RAG", lectures: 8, duration: "1hr 20min" },
      { sectionTitle: "Advanced Vector Search", lectures: 6, duration: "55min" },
      { sectionTitle: "Agentic Workflows", lectures: 10, duration: "1hr 45min" },
      { sectionTitle: "Deployment & Scaling", lectures: 7, duration: "1hr 10min" }
    ],
    category: "College"
  },
  {
    id: "course-4",
    title: "A Practical Intro to AI Agents and Agentic AI",
    subtitle: "Learn how to build, deploy, and manage autonomous AI agents to automate your complex daily workflows.",
    author: "Ligency, Alex Honchar",
    bestseller: true,
    rating: 4.6,
    ratingCount: "396",
    price: "₹399.00",
    originalPrice: "₹1,299.00",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    updatedDate: "August 2026",
    hours: "8",
    levels: "All Levels",
    hasSubtitles: true,
    description: "Step-by-step practical guide to building agentic AI solutions.",
    longDescription: "Understand AI Agents and Build Real Ones on Your Daily Work - No Code with Claude Cowork and free OpenWork. This course offers a deep dive into the practical application of Agentic AI, teaching you how to leverage frameworks like AutoGen and LangChain to automate multi-step reasoning tasks.",
    bulletPoints: [
      "Learn what makes AI 'agentic'",
      "Create multi-agent systems with AutoGen",
      "Practical workflows for real-world tasks",
    ],
    whatYouWillLearn: [
      "Build 6 working AI agents in under 4 hours",
      "Understand how AI agents actually work - LLMs, memory, tools",
      "Save hours every week by automating email and meeting prep",
      "Deploy custom agents to your internal team",
      "Integrate agents with APIs like Slack, Notion, and Gmail"
    ],
    requirements: [
      "No coding experience necessary for the first half of the course.",
      "Basic programming knowledge helps for the advanced AutoGen sections."
    ],
    curriculum: [
      { sectionTitle: "What is Agentic AI?", lectures: 3, duration: "25min" },
      { sectionTitle: "No-Code Agent Building", lectures: 5, duration: "45min" },
      { sectionTitle: "Introduction to AutoGen", lectures: 6, duration: "1hr 10min" },
      { sectionTitle: "Building a Multi-Agent Team", lectures: 8, duration: "1hr 30min" },
      { sectionTitle: "Real-world Workflows", lectures: 4, duration: "50min" }
    ],
    category: "Professional"
  },
  {
    id: "course-5",
    title: "Elementary Coding: Build Your First AI Chatbot",
    subtitle: "A fun, interactive introduction to programming and AI for young learners.",
    author: "Certcia AI Campus",
    bestseller: true,
    rating: 4.9,
    ratingCount: "1,204",
    price: "Free",
    originalPrice: "₹999.00",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
    updatedDate: "August 2026",
    hours: "15",
    levels: "Beginner",
    hasSubtitles: true,
    description: "Learn through play, imagination, and creative technology designed for ages 6-11.",
    longDescription: "Our elementary program introduces children to the magic of coding and Artificial Intelligence through playful, visual interfaces. Kids will drag and drop blocks to build their very own interactive stories, games, and basic AI chatbots, setting a strong foundation for future learning.",
    bulletPoints: [
      "Introduction to block-based coding and logic",
      "Creative problem solving with playful AI tools",
      "Safe and guided environment for early learners"
    ],
    whatYouWillLearn: [
      "Understand basic programming concepts like loops and conditionals",
      "Build a simple interactive chatbot",
      "Create animated stories with block coding",
      "Develop problem-solving and logical thinking skills"
    ],
    requirements: [
      "A laptop or tablet with a modern web browser.",
      "Curiosity and a willingness to learn through play!"
    ],
    curriculum: [
      { sectionTitle: "Welcome to Coding", lectures: 2, duration: "15min" },
      { sectionTitle: "Making Things Move", lectures: 4, duration: "35min" },
      { sectionTitle: "Talking to the Computer", lectures: 5, duration: "40min" },
      { sectionTitle: "Building Your First Chatbot", lectures: 6, duration: "55min" }
    ],
    category: "Elementary"
  },
  {
    id: "course-6",
    title: "Middle School Data Science & AI Foundations",
    subtitle: "Step up to Python programming and discover how data powers the AI applications you use every day.",
    author: "Certcia AI Campus",
    bestseller: false,
    rating: 4.8,
    ratingCount: "852",
    price: "₹199.00",
    originalPrice: "₹1,499.00",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80",
    updatedDate: "July 2026",
    hours: "20",
    levels: "Beginner",
    hasSubtitles: true,
    description: "Explore new skills and start building real projects with real data.",
    longDescription: "Designed for middle schoolers, this hands-on course transitions students from visual coding to real text-based Python programming. Students will learn how to analyze datasets, visualize information, and train a basic machine learning model to recognize images and text.",
    bulletPoints: [
      "Learn Python basics in a fun, interactive way",
      "Understand how data trains AI models",
      "Build your very first machine learning project"
    ],
    whatYouWillLearn: [
      "Write real Python code from scratch",
      "Analyze and visualize real-world datasets",
      "Understand the difference between AI, ML, and Data Science",
      "Train an image recognition model"
    ],
    requirements: [
      "Basic computer literacy.",
      "No prior text-based programming required."
    ],
    curriculum: [
      { sectionTitle: "Hello Python!", lectures: 4, duration: "35min" },
      { sectionTitle: "Working with Data", lectures: 6, duration: "50min" },
      { sectionTitle: "Creating Charts and Graphs", lectures: 5, duration: "45min" },
      { sectionTitle: "Your First AI Model", lectures: 7, duration: "1hr 5min" }
    ],
    category: "Middle School"
  }
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

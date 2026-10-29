import playfulAlgorithmsImg from "@/assets/pre-elementary/Playful Algorithms and Patterns.jpg";
import creativeCodingImg from "@/assets/pre-elementary/Creative Coding with Blocks.jpg";
import digitalSafetyImg from "@/assets/pre-elementary/Digital Safety and Smart Devices.jpg";
import earlyRoboticsImg from "@/assets/pre-elementary/Early Robotics and Logic.png";
import aiAroundUsImg from "@/assets/pre-elementary/AI Around Us People, Pictures and Voices.png";

import codingStoriesImg from "@/assets/elementary/Coding Stories, Games and Animations.png";
import dataDetectivesImg from "@/assets/elementary/Data Detectives and Digital Citizenship.jpg";
import youngInventorsImg from "@/assets/elementary/Young Inventors Robotics and Sensors.jpg";
import aiExplorersImg from "@/assets/elementary/AI Explorers Learning from Data.jpg";
import responsibleGenAiImg from "@/assets/elementary/Responsible Generative AI for Learners.jpeg";

import howAiWorksImg from "@/assets/middle/How AI Works Perception, Learning and Language.jfif";
import webAppPrototypingImg from "@/assets/middle/Web, App and Physical-Computing Prototyping.jfif";

import appliedPythonImg from "@/assets/high/Applied Python, Algorithms and Software Engineering.jfif";
import mlFoundationsImg from "@/assets/high/Machine Learning Foundations and Evaluation.jfif";
import genAiMediaLitImg from "@/assets/high/Generative AI, Language and Media Literacy.jfif";
import dataScienceSocialImg from "@/assets/high/Data Science for Social and Scientific Problems.jfif";
import aiProductCapstoneImg from "@/assets/high/AI Product Design, Robotics and Capstone.jfif";

import collegeAiMlFoundationsImg from "@/assets/college/AI and Machine Learning Foundations.jpg";
import collegeDataEngImg from "@/assets/college/Data Engineering, Analytics and Visualisation.jpg";
import collegeDeepLearningImg from "@/assets/college/Deep Learning, Computer Vision and NLP.jpg";
import collegeResponsibleAiImg from "@/assets/college/Responsible AI, Governance and Policy.jpg";
import collegeMlopsCapstoneImg from "@/assets/college/AI Research, MLOps and Portfolio Capstone.jfif";

export interface RawProgram {
  category:
  | "Pre-elementary"
  | "Elementary"
  | "Middle School"
  | "High School"
  | "College & Universities"
  | "Professional Courses";
  bandId:
  | "pre-elementary"
  | "elementary"
  | "middle"
  | "high"
  | "college"
  | "professional";
  code: string;
  title: string;
  audience: string;
  prerequisites: string;
  purpose: string;
  module1: string;
  module2: string;
  module3: string;
  module4: string;
  learningOutcomes: string;
  assessmentEvidence: string;
  syllabusAlignment: string;
  facilitatorHours: number;
  selfPacedHours: number;
  capstoneHours: number;
  totalHours: number;
  packageLength: string;
  price: string;
  originalPrice: string;
  image: string;
  bestseller?: boolean;
}

export const RAW_PROGRAMS: RawProgram[] = [
  // ==========================================
  // PRE-ELEMENTARY (P1 – P5)
  // ==========================================
  {
    category: "Pre-elementary",
    bandId: "pre-elementary",
    code: "P1",
    title: "Playful Algorithms and Patterns",
    audience: "Nursery–K-2",
    prerequisites: "None",
    purpose:
      "Spark early computational thinking through rhythm songs, tactile puzzle games, and hands-on pattern activities that turn everyday play into joyful problem solving.",
    module1: "Storybook puzzles, rhythm songs, and color patterns",
    module2: "Hands-on sorting adventures and unplugged mazes",
    module3: "Cause, effect, and curious picture machines",
    module4: "Playful team challenges and show-and-tell reflection",
    learningOutcomes:
      "Spot repeating patterns in daily life; assemble visual step-by-step instructions; explore cause and effect with friends",
    assessmentEvidence:
      "Picture algorithm journey map, tactile sorting challenge, and a guided show-and-tell",
    syllabusAlignment:
      "Early-years reasoning, computational thinking and digital readiness",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image: playfulAlgorithmsImg,
    bestseller: true,
  },
  {
    category: "Pre-elementary",
    bandId: "pre-elementary",
    code: "P2",
    title: "Creative Coding with Blocks",
    audience: "K-1–K-2",
    prerequisites: "Basic device use",
    purpose:
      "Bring stories to life with visual tap-and-snap coding blocks, animating colorful characters and building playful mini-games with zero typing needed.",
    module1: "Meet the sprites: backgrounds, characters, and happy taps",
    module2: "Dance loops, musical sequences, and character steps",
    module3: "Action triggers, fun sound effects, and simple debugging",
    module4: "Build and narrate your very own animated storybook",
    learningOutcomes:
      "Snap together block sequences; trigger animations with touch events; express imaginative ideas through interactive media",
    assessmentEvidence:
      "Playable animated story project, creative character sequence, and an oral storytelling walkthrough",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image: creativeCodingImg,
  },
  {
    category: "Pre-elementary",
    bandId: "pre-elementary",
    code: "P3",
    title: "Digital Safety and Smart Devices",
    audience: "Nursery–K-2",
    prerequisites: "None",
    purpose:
      "Empower young digital explorers to use screens mindfully, build healthy screen-time habits, protect their personal boundaries, and always know when to ask a trusted adult.",
    module1: "Smart devices at home: screen balance and kind handling",
    module2: "Secret passcodes, personal boundaries, and asking grown-ups",
    module3: "Voice helpers, robotic assistants, and human choices",
    module4: "Kind digital citizenship badges and safety role-play",
    learningOutcomes:
      "Practice gentle device care; recognize personal information boundaries; choose intentional and creative screen activities",
    assessmentEvidence:
      "Illustrated family safety pledge, classroom role-play scenario, and friendly device habit badge",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image: digitalSafetyImg,
  },
  {
    category: "Pre-elementary",
    bandId: "pre-elementary",
    code: "P4",
    title: "Early Robotics and Logic",
    audience: "K-2",
    prerequisites: "P1 recommended",
    purpose:
      "Discover how physical robots perceive the world by guiding tactile robotic toys through colorful floor mazes using light, sound, and sequence commands.",
    module1: "Robot adventures: steering with arrows and directional cards",
    module2: "Sensors in action: feeling obstacles and following colorful lines",
    module3: "Looping laps and solving fun floor puzzle pathways",
    module4: "The Great Robot Rescue: cooperative obstacle course challenge",
    learningOutcomes:
      "Translate path directions into robotic commands; debug wrong turns with patience; understand how physical machines take inputs and produce motion",
    assessmentEvidence:
      "Working robot navigation run, mapped route sketch, and live demonstration for peers",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image: earlyRoboticsImg,
  },
  {
    category: "Pre-elementary",
    bandId: "pre-elementary",
    code: "P5",
    title: "AI Around Us: People, Pictures and Voices",
    audience: "K-2",
    prerequisites: "P1 recommended",
    purpose:
      "Demystify artificial intelligence for curious young minds by exploring how machines recognize photos, hear voices, and help humans solve playful everyday challenges.",
    module1: "Magical tech or clever computer? Spotting smart helpers around us",
    module2: "How cameras see faces and microphones hear friendly voices",
    module3: "What computers do super fast and where they still need humans",
    module4: "The Human-Check detective challenge and future inventor gallery",
    learningOutcomes:
      "Distinguish natural human creativity from computer pattern recognition; celebrate how smart tools assist people; cultivate curious questions about technology",
    assessmentEvidence:
      "Human versus machine picture sorting gallery, hands-on detective case, and teacher-guided reflection",
    syllabusAlignment:
      "AI awareness, perception, natural interaction and critical thinking",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image: aiAroundUsImg,
  },

  // ==========================================
  // ELEMENTARY (E1 – E5)
  // ==========================================
  {
    category: "Elementary",
    bandId: "elementary",
    code: "E1",
    title: "Coding Stories, Games and Animations",
    audience: "Grades 3-5",
    prerequisites: "P2 or equivalent",
    purpose:
      "Design interactive arcade games, animated adventures, and creative musical projects while mastering real computational logic with loops, variables, and broadcast messages.",
    module1: "Game loops, player scores, and dynamic variables",
    module2: "Conditional branching, secret keys, and event broadcasts",
    module3: "Playtesting, player feedback, and systematic debugging",
    module4: "Launch your original playable game and story showcase",
    learningOutcomes:
      "Construct working multi-level games; implement variables and game physics; document and fix code bugs with confidence",
    assessmentEvidence:
      "Playable block-based game, interactive story project, and a recorded code walkthrough",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image: codingStoriesImg,
    bestseller: true,
  },
  {
    category: "Elementary",
    bandId: "elementary",
    code: "E2",
    title: "Data Detectives and Digital Citizenship",
    audience: "Grades 3-5",
    prerequisites: "Basic spreadsheet or coding",
    purpose:
      "Uncover real-world stories hidden in data, craft colorful visual charts, and build savvy digital citizenship habits to navigate information, privacy, and online truth.",
    module1: "Detective field notes: gathering and structuring authentic data",
    module2: "Visual storytelling: charts, graphs, and trend discovery",
    module3: "Spotting misinformation, protecting privacy, and digital ethics",
    module4: "Collaborative data investigation and interactive presentation",
    learningOutcomes:
      "Collect and clean data responsibly; build clear visual charts; evaluate source credibility; commit to safe online practices",
    assessmentEvidence:
      "Visual data infographic, verified source checklist, and a classroom digital citizenship pledge",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image: dataDetectivesImg,
  },
  {
    category: "Elementary",
    bandId: "elementary",
    code: "E3",
    title: "Young Inventors: Robotics and Sensors",
    audience: "Grades 3-5",
    prerequisites: "E1 recommended",
    purpose:
      "Step into the shoes of a hardware engineer by connecting circuits, microcontrollers, and smart environmental sensors to solve real-world community challenges.",
    module1: "Tinkering with circuits: breadboards, lights, and buzzer signals",
    module2: "Sensor intelligence: reading light, motion, and temperature",
    module3: "Microcontroller code: logic rules that react to the physical world",
    module4: "Smart invention showcase: working prototype and peer demonstration",
    learningOutcomes:
      "Wire functional input-output circuits; write logic that responds to live sensors; iterate on physical hardware prototypes",
    assessmentEvidence:
      "Working sensor-driven invention, schematic system diagram, and engineering test log",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image: youngInventorsImg,
  },
  {
    category: "Elementary",
    bandId: "elementary",
    code: "E4",
    title: "AI Explorers: Learning from Data",
    audience: "Grades 3-5",
    prerequisites: "E2 recommended",
    purpose:
      "Peek behind the curtain of machine learning by training custom vision and sound models with your own data, examining how computers make predictions and why fairness matters.",
    module1: "How machines learn: training examples, classes, and labels",
    module2: "Collecting balanced datasets and training vision classifiers",
    module3: "Testing model confidence, prediction errors, and algorithmic fairness",
    module4: "Interactive AI detector project and societal impact reflection",
    learningOutcomes:
      "Train, evaluate, and test a real machine learning classifier; spot dataset bias and blind spots; explain how models classify unseen data",
    assessmentEvidence:
      "Working interactive model demo, model confidence analysis, and an ethical AI concept map",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image: aiExplorersImg,
  },
  {
    category: "Elementary",
    bandId: "elementary",
    code: "E5",
    title: "Responsible Generative AI for Learners",
    audience: "Grades 4-5",
    prerequisites: "E2 recommended; teacher mediated",
    purpose:
      "Unlock the creative power of generative AI tools responsibly, mastering effective prompt engineering, rigorous fact-checking, copyright awareness, and original storytelling.",
    module1: "Prompt crafting: guiding language and visual generative models",
    module2: "Detective checks: spotting hallucinations and verifying sources",
    module3: "Respecting creators: intellectual property, bias, and privacy",
    module4: "Co-creating an original verified multimedia publication",
    learningOutcomes:
      "Formulate clear, iterative prompts; apply fact-checking protocols to AI outputs; produce creative artifacts that cite sources and uphold ethical standards",
    assessmentEvidence:
      "Verified prompt and generation portfolio, fact-check audit trail, and human-curated final showcase",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image: responsibleGenAiImg,
  },

  // ==========================================
  // MIDDLE SCHOOL (M1 – M5)
  // ==========================================
  {
    category: "Middle School",
    bandId: "middle",
    code: "M1",
    title: "Python Foundations and Computational Thinking",
    audience: "Grades 6-8",
    prerequisites: "Basic typing and maths",
    purpose:
      "Transition from visual blocks to real-world Python coding, writing expressive algorithms, building interactive text games, and learning professional debugging techniques.",
    module1: "Syntax and logic: writing your first clean Python scripts",
    module2: "Dynamic control flow: loops, conditional branches, and custom functions",
    module3: "Organizing data: lists, dictionaries, file I/O, and test cases",
    module4: "Interactive capstone project and collaborative code review",
    learningOutcomes:
      "Write clean, readable Python scripts; architect robust data structures; test and debug code systematically",
    assessmentEvidence:
      "Working Python software project, test suite, and peer code review report",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,999",
    originalPrice: "₹5,999",
    image:
      "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    bestseller: true,
  },
  {
    category: "Middle School",
    bandId: "middle",
    code: "M2",
    title: "Data Literacy and Visualisation",
    audience: "Grades 6-8",
    prerequisites: "M1 or equivalent",
    purpose:
      "Master the modern data pipeline that powers artificial intelligence, exploring raw real-world datasets, spotting hidden patterns, and building compelling data visualisations.",
    module1: "Data collection methods and ethical sourcing",
    module2: "Data cleaning: handling missing values and outlier detection",
    module3: "Statistical discovery: charts, histograms, and trend analysis",
    module4: "Data journalism project: uncovering and presenting a compelling data story",
    learningOutcomes:
      "Clean and prepare datasets; design communicative charts; identify sampling bias and data limitations",
    assessmentEvidence:
      "Interactive data notebook, visual dashboard story, and methodology critique",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,999",
    originalPrice: "₹5,999",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Middle School",
    bandId: "middle",
    code: "M3",
    title: "How AI Works: Perception, Learning and Language",
    audience: "Grades 6-8",
    prerequisites: "M1 recommended",
    purpose:
      "Unravel how computers see images, understand speech, and generate language by conducting hands-on low-code experiments that explore neural networks and machine perception.",
    module1: "Machine perception: transforming pixels and audio waves into numbers",
    module2: "Supervised training: labels, feature extraction, and classification",
    module3: "Language models and generative AI: embeddings, tokens, and transformers",
    module4: "Stress-testing AI models: error analysis and ethical implications",
    learningOutcomes:
      "Train and evaluate vision and NLP models; diagnose prediction failures; map core AI concepts to real-world applications",
    assessmentEvidence:
      "Low-code experiment notebook, model diagnostic audit, and conceptual system map",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,999",
    originalPrice: "₹5,999",
    image: howAiWorksImg,
  },
  {
    category: "Middle School",
    bandId: "middle",
    code: "M4",
    title: "Web, App and Physical-Computing Prototyping",
    audience: "Grades 6-8",
    prerequisites: "M1",
    purpose:
      "Bridge software with the real world by building web applications connected to live APIs, microcontroller sensors, and smart device interfaces.",
    module1: "User-centered design: wireframes, user flow, and API endpoints",
    module2: "Interactive frontends: HTML, CSS, JavaScript, and dynamic components",
    module3: "Physical computing: connecting microcontrollers, motors, and live sensor feeds",
    module4: "Connected IoT prototype launch and live demonstration",
    learningOutcomes:
      "Build full-stack interactive prototypes; interface software with physical hardware; iterate based on usability testing",
    assessmentEvidence:
      "Working connected hardware/software prototype, architecture diagram, and usability report",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,999",
    originalPrice: "₹5,999",
    image: webAppPrototypingImg,
  },
  {
    category: "Middle School",
    bandId: "middle",
    code: "M5",
    title: "Cyber Safety and Responsible Technology",
    audience: "Grades 6-8",
    prerequisites: "None; M1 recommended",
    purpose:
      "Develop defensive cybersecurity mindsets and ethical reasoning, investigating network security, password cryptography, social engineering, and responsible digital citizenship.",
    module1: "Identity defense: multi-factor authentication, cryptography, and phishing triage",
    module2: "Network architecture: packets, firewalls, and vulnerability assessment",
    module3: "Ethical hacking boundaries and privacy-preserving design principles",
    module4: "Cyber incident response simulation and community awareness campaign",
    learningOutcomes:
      "Identify common cyber vectors; simulate incident response protocols; champion secure and ethical digital practices",
    assessmentEvidence:
      "Threat modeling matrix, security audit report, and simulated incident defense plan",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,999",
    originalPrice: "₹5,999",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },

  // ==========================================
  // HIGH SCHOOL (H1 – H5)
  // ==========================================
  {
    category: "High School",
    bandId: "high",
    code: "H1",
    title: "Applied Python, Algorithms and Software Engineering",
    audience: "Grades 9-12",
    prerequisites: "M1 or equivalent",
    purpose:
      "Engineer production-grade Python software, architect robust object-oriented systems, and master algorithmic problem solving benchmarked for university computing.",
    module1: "Modular and object-oriented design",
    module2: "Data structures and algorithms",
    module3: "Testing, version control and documentation",
    module4: "Team software project",
    learningOutcomes: "Repository, requirements, test suite, review record",
    assessmentEvidence:
      "AP/Cambridge/Pearson/IB-style programming and CS practices",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,499",
    originalPrice: "₹6,999",
    image: appliedPythonImg,
    bestseller: true,
  },
  {
    category: "High School",
    bandId: "high",
    code: "H2",
    title: "Machine Learning Foundations and Evaluation",
    audience: "Grades 9-12",
    prerequisites: "H1 plus algebra/statistics",
    purpose:
      "Master the core mathematical and statistical mechanics of machine learning, training and rigorously stress-testing models with real-world validation metrics.",
    module1: "Features, labels, train/test",
    module2: "Regression, classification and baselines",
    module3: "Metrics, overfitting and error analysis",
    module4: "Applied model and model card",
    learningOutcomes: "Notebook, evaluation report, model card, defence",
    assessmentEvidence:
      "AI/ML foundations, data, statistics and responsible evaluation",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,499",
    originalPrice: "₹6,999",
    image: mlFoundationsImg,
  },
  {
    category: "High School",
    bandId: "high",
    code: "H3",
    title: "Generative AI, Language and Media Literacy",
    audience: "Grades 9-12",
    prerequisites: "H1 recommended",
    purpose:
      "Investigate deep learning models, prompt architecture, and synthetic media, learning to ground generative outputs, identify deepfakes, and build ethical AI tools.",
    module1: "Language models, prompting and context",
    module2: "Retrieval, citations and grounding",
    module3: "Multimodal media, copyright and deepfakes",
    module4: "Human-in-the-loop product",
    learningOutcomes:
      "Prompt matrix, source-grounded artefact, risk register",
    assessmentEvidence:
      "AI literacy, language, media literacy, ethics and integrity",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,499",
    originalPrice: "₹6,999",
    image: genAiMediaLitImg,
  },
  {
    category: "High School",
    bandId: "high",
    code: "H4",
    title: "Data Science for Social and Scientific Problems",
    audience: "Grades 9-12",
    prerequisites: "H1; intro statistics",
    purpose:
      "Transform raw global datasets into defensible scientific discoveries, mastering statistical inference, reproducible Jupyter pipelines, and compelling data storytelling.",
    module1: "Question and data acquisition",
    module2: "Cleaning and exploration",
    module3: "Statistics and visual storytelling",
    module4: "Reproducible report and presentation",
    learningOutcomes:
      "Notebook, reproducibility checklist, report, dashboard",
    assessmentEvidence:
      "Data science, computational thinking and interdisciplinary inquiry",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,499",
    originalPrice: "₹6,999",
    image: dataScienceSocialImg,
  },
  {
    category: "High School",
    bandId: "high",
    code: "H5",
    title: "AI Product Design, Robotics and Capstone",
    audience: "Grades 9-12",
    prerequisites: "Two H certifications",
    purpose:
      "Turn breakthrough AI capabilities into real-world autonomous robots and interactive software products, culminating in a defendable capstone portfolio.",
    module1: "Problem discovery and requirements",
    module2: "Architecture and prototype",
    module3: "Build, test, safety and accessibility",
    module4: "Capstone defence and portfolio",
    learningOutcomes:
      "Capstone, architecture, impact assessment, user test, defence",
    assessmentEvidence:
      "Design thinking, AI systems, robotics, entrepreneurship and impact",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,499",
    originalPrice: "₹6,999",
    image: aiProductCapstoneImg,
  },

  // ==========================================
  // COLLEGE & UNIVERSITIES (U1 – U5)
  // ==========================================
  {
    category: "College & Universities",
    bandId: "college",
    code: "U1",
    title: "AI and Machine Learning Foundations",
    audience: "Postsecondary",
    prerequisites: "Programming and quantitative foundations",
    purpose:
      "Build rigorous mathematical and practical foundations in statistical learning, implementing classical regression, classification, clustering, and optimization algorithms in reproducible Python pipelines.",
    module1: "Problem formulation and data pipeline",
    module2: "Supervised and unsupervised learning",
    module3: "Optimisation, evaluation and generalisation",
    module4: "Reproducible project and report",
    learningOutcomes: "Code, experiment log, technical report, viva",
    assessmentEvidence:
      "University AI/ML foundations and research practice",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,999",
    originalPrice: "₹7,999",
    image: collegeAiMlFoundationsImg,
    bestseller: true,
  },
  {
    category: "College & Universities",
    bandId: "college",
    code: "U2",
    title: "Data Engineering, Analytics and Visualisation",
    audience: "Postsecondary",
    prerequisites: "Programming and statistics",
    purpose:
      "Architect resilient data pipelines and analytical warehouses for high-throughput AI systems, mastering schema design, stream transformation, automated data quality checks, and executive visual dashboards.",
    module1: "Relational data and schemas",
    module2: "Ingestion, cleaning and transformation",
    module3: "Analytics and visualisation",
    module4: "Pipeline project and governance note",
    learningOutcomes: "Data model, pipeline, quality checks, dashboard",
    assessmentEvidence:
      "Data systems, analytics, visualisation and governance",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,999",
    originalPrice: "₹7,999",
    image: collegeDataEngImg,
  },
  {
    category: "College & Universities",
    bandId: "college",
    code: "U3",
    title: "Deep Learning, Computer Vision and NLP",
    audience: "Postsecondary",
    prerequisites: "U1 or equivalent",
    purpose:
      "Explore cutting-edge neural architectures from convolutional backbones to attention-based transformers, fine-tuning pretrained foundation models for computer vision and natural language processing.",
    module1: "Neural networks",
    module2: "Vision and representation learning",
    module3: "Language and embeddings",
    module4: "Experiment and limitations report",
    learningOutcomes: "Notebook, architecture explanation, evaluation",
    assessmentEvidence:
      "AI specialisation, deep learning, vision and language",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,999",
    originalPrice: "₹7,999",
    image: collegeDeepLearningImg,
  },
  {
    category: "College & Universities",
    bandId: "college",
    code: "U4",
    title: "Responsible AI, Governance and Policy",
    audience: "Postsecondary",
    prerequisites: "None; technical literacy helpful",
    purpose:
      "Navigate the legal, ethical, and societal frontiers of artificial intelligence, evaluating algorithmic fairness, regulatory frameworks, intellectual property, and verifiable risk-audit methodologies.",
    module1: "Human rights, fairness and privacy",
    module2: "Transparency and accountability",
    module3: "Risk and impact assessment",
    module4: "Case analysis and policy",
    learningOutcomes: "Impact assessment, policy memo, presentation",
    assessmentEvidence:
      "UNESCO human-centred AI, ethics, governance and policy",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,999",
    originalPrice: "₹7,999",
    image: collegeResponsibleAiImg,
  },
  {
    category: "College & Universities",
    bandId: "college",
    code: "U5",
    title: "AI Research, MLOps and Portfolio Capstone",
    audience: "Postsecondary",
    prerequisites: "U1 plus technical/governance elective",
    purpose:
      "Bridge laboratory research with production engineering by developing an end-to-end MLOps pipeline featuring experiment tracking, automated model deployment, drift monitoring, and an academic viva defense.",
    module1: "Research question and experiment design",
    module2: "Reproducibility and deployment",
    module3: "Monitoring, drift and documentation",
    module4: "Capstone defence and portfolio",
    learningOutcomes:
      "Research/deployment artefact, README, poster, viva",
    assessmentEvidence:
      "Research, software engineering, MLOps and employability",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹3,999",
    originalPrice: "₹7,999",
    image: collegeMlopsCapstoneImg,
  },

  // ==========================================
  // PROFESSIONAL COURSES (P6 – P10)
  // ==========================================
  {
    category: "Professional Courses",
    bandId: "professional",
    code: "P6",
    title: "AI Literacy for Business Leaders",
    audience: "Owners, executives, managers and educators",
    prerequisites: "None",
    purpose: "Enable sound AI adoption decisions without programming",
    module1: "AI concepts and use cases",
    module2: "Data, process and vendor readiness",
    module3: "Risk, privacy and governance",
    module4: "Use-case prioritisation and roadmap",
    learningOutcomes:
      "Use-case canvas, vendor checklist, risk register, roadmap",
    assessmentEvidence:
      "Digital transformation, AI literacy and decision-making",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹4,499",
    originalPrice: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80",
    bestseller: true,
  },
  {
    category: "Professional Courses",
    bandId: "professional",
    code: "P7",
    title: "Prompt Design, AI Productivity and Review",
    audience: "AI-enabled professionals",
    prerequisites: "Basic digital literacy",
    purpose: "Improve quality, efficiency and accountability",
    module1: "Task decomposition and prompt patterns",
    module2: "Context, examples and structured output",
    module3: "Verification, privacy and disclosure",
    module4: "Workflow redesign and measurement",
    learningOutcomes:
      "Prompt library, review protocol, before/after workflow",
    assessmentEvidence:
      "Generative AI literacy, productivity, media literacy and integrity",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹4,499",
    originalPrice: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Professional Courses",
    bandId: "professional",
    code: "P8",
    title: "No-Code/Low-Code AI Automation",
    audience: "Operations, marketing, HR, education and service teams",
    prerequisites: "P6 or equivalent",
    purpose: "Build safe automations around approved tools",
    module1: "Process mapping and tool selection",
    module2: "Data flows, APIs and permissions",
    module3: "Exceptions, testing and human approval",
    module4: "Deployable workflow and SOP",
    learningOutcomes: "Workflow, data-flow diagram, test matrix, SOP",
    assessmentEvidence:
      "Automation, systems thinking, data governance and operations",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹4,499",
    originalPrice: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Professional Courses",
    bandId: "professional",
    code: "P9",
    title: "AI Product, Data and Risk Management",
    audience: "Product managers, analysts and founders",
    prerequisites: "Professional experience",
    purpose: "Manage AI initiatives from discovery to launch",
    module1: "Stakeholder discovery and requirements",
    module2: "Data/model requirements",
    module3: "Evaluation, safety and monitoring",
    module4: "Launch plan and review",
    learningOutcomes: "PRD, evaluation plan, risk register, operations plan",
    assessmentEvidence: "Product management, AI governance, data and risk",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹4,499",
    originalPrice: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Professional Courses",
    bandId: "professional",
    code: "P10",
    title: "Educator and Trainer Certificate in AI and Coding",
    audience: "Teachers, tutors and academy trainers",
    prerequisites: "Teaching/facilitation experience",
    purpose:
      "Deliver age-appropriate, inclusive and safe AI/coding learning",
    module1: "Age progression and misconceptions",
    module2: "Unplugged, block, Python and project pedagogy",
    module3: "Ethics, safeguarding and assessment",
    module4: "Micro-teaching and course planning",
    learningOutcomes:
      "Lesson plans, rubric, safeguarding checklist, board mapping",
    assessmentEvidence:
      "Pedagogy, curriculum design, assessment and responsible AI",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹4,499",
    originalPrice: "₹8,999",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
  },
];

// Slugs generator for clean URLs like /course/p1 or /course/p1-playful-algorithms-and-patterns
export function courseSlug(code: string, title: string): string {
  const clean = `${code}-${title}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
  return clean;
}

// Curriculum Alignment Crosswalk Data
export const BOARD_CROSSWALK = [
  {
    framework: "CSTA PK–12 + AI4K12",
    emphasis: "Algorithms, programming, data, systems, security, ethics and AI concepts.",
    academyCoverage: "P1–P5, E1–E5, M1–M5, H1–H5; especially M3, H2, H3 and H5.",
    coverageLevel: "Strong common-core coverage",
    stillToMap: "State standards, grade indicators, AP/state labels and programming language.",
  },
  {
    framework: "England: Computing KS1–4",
    emphasis: "Algorithms, programming, debugging, networks, data, hardware/software and online safety.",
    academyCoverage: "P1–P5, E1–E5, M1–M5, H1 and H5.",
    coverageLevel: "Strong coverage",
    stillToMap: "Key Stage statements, GCSE specification, assessment and safeguarding rules.",
  },
  {
    framework: "India: CBSE AI & school computing",
    emphasis: "AI awareness, employability, problem-solving, data, ethics, projects and interdisciplinary integration.",
    academyCoverage: "E2–E5, M2–M5, H1–H5, U4 and P6–P10.",
    coverageLevel: "Strong AI/project/ethics coverage",
    stillToMap: "Subject codes, prescribed units, practical file format, exam pattern and local language.",
  },
  {
    framework: "IB PYP / MYP / DP",
    emphasis: "Inquiry, design thinking, computational thinking, reflection and transdisciplinary projects.",
    academyCoverage: "P1/E1/E3/E4, M4, H1/H5, U1/U4/U5.",
    coverageLevel: "Strong project/inquiry fit",
    stillToMap: "IB subject content, internal assessment, academic integrity and programme of inquiry.",
  },
  {
    framework: "Cambridge & Pearson Edexcel",
    emphasis: "Programming, algorithms, data representation, systems, testing, abstraction and application.",
    academyCoverage: "M1–M4, H1–H5, U1–U3.",
    coverageLevel: "Strong technical alignment",
    stillToMap: "Current specification, command words, programming language and practical assessment.",
  },
  {
    framework: "DigComp / UNESCO AI framework",
    emphasis: "Data literacy, communication, content creation, safety, problem-solving, human-centred AI and ethics.",
    academyCoverage: "P3, E2, E5, M2, M5, H3, H4, U4 and P6–P10.",
    coverageLevel: "Strong responsible-use alignment",
    stillToMap: "Country curriculum, privacy procedures, cultural context, accessibility and approved tools.",
  },
];

// Learner Roadmaps
export const LEARNER_ROADMAPS = [
  {
    title: "Pre-elementary sampler",
    sequence: "P1 → P2/P3 → P4/P5",
    description: "Pattern, block, safety, robotics and AI-awareness artefacts. Progress to Elementary when ready.",
  },
  {
    title: "Elementary creator",
    sequence: "E1 → E2 → E3/E4 → E5",
    description: "Coding, data, prototype, AI experiment and verified generative-AI evidence.",
  },
  {
    title: "Middle school builder",
    sequence: "M1 → M2/M3 → M4 → M5",
    description: "Python, data, AI, prototype and cyber-safety portfolio.",
  },
  {
    title: "High school AI pathway",
    sequence: "H1 → H2/H3/H4 → elective → H5",
    description: "Software repository, AI/data/GenAI evidence and capstone defence.",
  },
  {
    title: "University pathway",
    sequence: "U1 → U2/U3/U4 → elective → U5",
    description: "Technical, research or governance portfolio with viva evidence.",
  },
  {
    title: "Professional leader pathway",
    sequence: "P6 → P7 → P8/P9 → optional P10",
    description: "Use-case, prompt, workflow, product, risk or teaching portfolio.",
  },
];

// Assessment Rubric
export const ASSESSMENT_RUBRIC = [
  { name: "Conceptual understanding", percentage: 25 },
  { name: "Application / technical skill", percentage: 30 },
  { name: "Responsible practice", percentage: 20 },
  { name: "Communication / collaboration", percentage: 15 },
  { name: "Process / reflection", percentage: 10 },
];

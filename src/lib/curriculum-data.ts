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
    purpose: "Build sequencing, patterns and instructions through play",
    module1: "Stories, songs and patterns",
    module2: "Unplugged algorithms and sorting",
    module3: "Inputs, outputs and cause/effect",
    module4: "Team challenge and reflection",
    learningOutcomes:
      "Sequence instructions; identify patterns; explain input/output; collaborate",
    assessmentEvidence: "Picture algorithm, sorting task, oral explanation",
    syllabusAlignment:
      "Early-years reasoning, computational thinking and digital readiness",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    bestseller: true,
  },
  {
    category: "Pre-elementary",
    bandId: "pre-elementary",
    code: "P2",
    title: "Creative Coding with Blocks",
    audience: "K-1–K-2",
    prerequisites: "Basic device use",
    purpose: "Introduce screen-based coding through stories and animation",
    module1: "Sprites, scenes and events",
    module2: "Sequences and loops",
    module3: "Conditions, messages and debugging",
    module4: "Create and present a mini story/game",
    learningOutcomes:
      "Working block project, annotated sequence, show-and-tell",
    assessmentEvidence: "Early programming, logic, creativity and communication",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Pre-elementary",
    bandId: "pre-elementary",
    code: "P3",
    title: "Digital Safety and Smart Devices",
    audience: "Nursery–K-2",
    prerequisites: "None",
    purpose: "Develop safe, kind and purposeful device use",
    module1: "Device parts and safe handling",
    module2: "Privacy, passwords and asking for help",
    module3: "Smart assistants, robots and human choice",
    module4: "Safety poster and role-play",
    learningOutcomes: "Safe-use routine, role-play, poster",
    assessmentEvidence: "Digital citizenship, online safety and human agency",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Pre-elementary",
    bandId: "pre-elementary",
    code: "P4",
    title: "Early Robotics and Logic",
    audience: "K-2",
    prerequisites: "P1 recommended",
    purpose: "Use programmable toys or simulations to practise logic",
    module1: "Robot commands and routes",
    module2: "Sensors, movement and outputs",
    module3: "Loops and simple conditions",
    module4: "Obstacle-course challenge",
    learningOutcomes: "Robot route, explanation, observation",
    assessmentEvidence: "Inputs/outputs, algorithms and physical computing",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Pre-elementary",
    bandId: "pre-elementary",
    code: "P5",
    title: "AI Around Us: People, Pictures and Voices",
    audience: "K-2",
    prerequisites: "P1 recommended",
    purpose:
      "Introduce AI awareness without model training or child accounts",
    module1: "Where children see AI",
    module2: "Pictures, voices and recommendations",
    module3: "What machines do well/poorly",
    module4: "Human-check and reflection",
    learningOutcomes:
      "Sort examples into human/machine/both; explain checking",
    assessmentEvidence: "Picture sort, oral explanation, teacher observation",
    syllabusAlignment:
      "AI awareness, perception, natural interaction and critical thinking",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹1,999",
    originalPrice: "₹3,999",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
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
    purpose: "Strengthen block coding and computational thinking",
    module1: "Events, loops and variables",
    module2: "Conditions, messages and functions",
    module3: "Debugging and user feedback",
    module4: "Original game/story project",
    learningOutcomes: "Working program, algorithm, debugging log",
    assessmentEvidence:
      "Programming, algorithms, decomposition and creativity",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    bestseller: true,
  },
  {
    category: "Elementary",
    bandId: "elementary",
    code: "E2",
    title: "Data Detectives and Digital Citizenship",
    audience: "Grades 3-5",
    prerequisites: "Basic spreadsheet or coding",
    purpose: "Build data literacy, privacy and source-checking habits",
    module1: "Data types and collection",
    module2: "Sorting, charts and patterns",
    module3: "Privacy, consent and misinformation",
    module4: "Team investigation and presentation",
    learningOutcomes: "Dataset, chart, source-check and privacy pledge",
    assessmentEvidence:
      "Data literacy, safety, communication and responsible technology",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Elementary",
    bandId: "elementary",
    code: "E3",
    title: "Young Inventors: Robotics and Sensors",
    audience: "Grades 3-5",
    prerequisites: "E1 recommended",
    purpose: "Apply coding to physical systems and engineering design",
    module1: "Circuits, sensors and actuators",
    module2: "Control logic and block coding",
    module3: "Design, build and test",
    module4: "Prototype challenge and reflection",
    learningOutcomes: "Prototype/simulator, system diagram, test table",
    assessmentEvidence: "Physical computing, design thinking and systems",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Elementary",
    bandId: "elementary",
    code: "E4",
    title: "AI Explorers: Learning from Data",
    audience: "Grades 3-5",
    prerequisites: "E2 recommended",
    purpose: "Explain data, patterns, predictions and model limitations",
    module1: "Examples of classification",
    module2: "Training examples and labels",
    module3: "Predictions, errors and fairness",
    module4: "No-code model experiment",
    learningOutcomes: "Model experiment, error log, concept map",
    assessmentEvidence:
      "AI4K12 learning, representation, data and societal impact",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Elementary",
    bandId: "elementary",
    code: "E5",
    title: "Responsible Generative AI for Learners",
    audience: "Grades 4-5",
    prerequisites: "E2 recommended; teacher mediated",
    purpose: "Use generative tools critically, safely and creatively",
    module1: "Prompts and generated patterns",
    module2: "Checking facts and hallucinations",
    module3: "Attribution, privacy and inclusion",
    module4: "Human-reviewed creative artefact",
    learningOutcomes: "Prompt journal, verification checklist, final artefact",
    assessmentEvidence:
      "AI literacy, media literacy, ethics and human-centred design",
    syllabusAlignment:
      "Board-aligned AI, coding, data, design and responsible-technology skills",
    facilitatorHours: 14,
    selfPacedHours: 4,
    capstoneHours: 2,
    totalHours: 20,
    packageLength: "6 weeks",
    price: "₹2,499",
    originalPrice: "₹4,999",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
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
      "Transition to text programming and systematic problem solving",
    module1: "Variables and syntax",
    module2: "Conditions, loops and functions",
    module3: "Lists, files and debugging",
    module4: "Mini-project and code review",
    learningOutcomes:
      "Readable Python, data structures, tests, algorithm explanation",
    assessmentEvidence:
      "Programming, algorithms, debugging and problem solving",
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
    purpose: "Teach the data pipeline that supports AI",
    module1: "Data types and collection",
    module2: "Cleaning and missing values",
    module3: "Charts and basic statistics",
    module4: "Data story and peer critique",
    learningOutcomes: "Clean dataset, chart, data dictionary, limitations",
    assessmentEvidence: "Data analysis, visualisation, bias and communication",
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
    purpose: "Introduce AI through accessible experiments",
    module1: "Perception and representation",
    module2: "Training data, labels and classification",
    module3: "Language, recommendations and GenAI",
    module4: "Model test and error analysis",
    learningOutcomes:
      "Low-code model experiment, error analysis, concept map",
    assessmentEvidence:
      "AI4K12 perception, learning, natural interaction and impact",
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
      "https://images.unsplash.com/photo-1507146426996-ef05388891f7?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Middle School",
    bandId: "middle",
    code: "M4",
    title: "Web, App and Physical-Computing Prototyping",
    audience: "Grades 6-8",
    prerequisites: "M1",
    purpose: "Combine code, interface, sensors or APIs",
    module1: "User needs and data flow",
    module2: "Web/app or microcontroller basics",
    module3: "APIs, sensors and events",
    module4: "Prototype test and demo",
    learningOutcomes: "Prototype, system diagram, feedback, test report",
    assessmentEvidence: "Digital solutions, systems, design and coding",
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
      "https://images.unsplash.com/photo-1517055729441-37497d94b4ee?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "Middle School",
    bandId: "middle",
    code: "M5",
    title: "Cyber Safety and Responsible Technology",
    audience: "Grades 6-8",
    prerequisites: "None; M1 recommended",
    purpose: "Build security habits and ethical reasoning",
    module1: "Accounts, privacy and phishing",
    module2: "Networks and common threats",
    module3: "Secure and inclusive design",
    module4: "Incident-response scenario and campaign",
    learningOutcomes: "Threat model, safety checklist, response exercise",
    assessmentEvidence: "Systems, security, privacy, ethics and citizenship",
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
      "Prepare for school-board and university computing pathways",
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
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    bestseller: true,
  },
  {
    category: "High School",
    bandId: "high",
    code: "H2",
    title: "Machine Learning Foundations and Evaluation",
    audience: "Grades 9-12",
    prerequisites: "H1 plus algebra/statistics",
    purpose: "Teach the supervised-learning workflow and limitations",
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
    image:
      "https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "High School",
    bandId: "high",
    code: "H3",
    title: "Generative AI, Language and Media Literacy",
    audience: "Grades 9-12",
    prerequisites: "H1 recommended",
    purpose: "Develop informed creation and verification with GenAI",
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
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "High School",
    bandId: "high",
    code: "H4",
    title: "Data Science for Social and Scientific Problems",
    audience: "Grades 9-12",
    prerequisites: "H1; intro statistics",
    purpose: "Turn real questions into defensible investigations",
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
    image:
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "High School",
    bandId: "high",
    code: "H5",
    title: "AI Product Design, Robotics and Capstone",
    audience: "Grades 9-12",
    prerequisites: "Two H certifications",
    purpose: "Integrate AI, coding, systems, design and responsibility",
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
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
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
    purpose: "Bridge to undergraduate AI study",
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
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    bestseller: true,
  },
  {
    category: "College & Universities",
    bandId: "college",
    code: "U2",
    title: "Data Engineering, Analytics and Visualisation",
    audience: "Postsecondary",
    prerequisites: "Programming and statistics",
    purpose: "Build data foundations for AI teams",
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
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "College & Universities",
    bandId: "college",
    code: "U3",
    title: "Deep Learning, Computer Vision and NLP",
    audience: "Postsecondary",
    prerequisites: "U1 or equivalent",
    purpose: "Survey modern architectures through experiments",
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
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "College & Universities",
    bandId: "college",
    code: "U4",
    title: "Responsible AI, Governance and Policy",
    audience: "Postsecondary",
    prerequisites: "None; technical literacy helpful",
    purpose:
      "Develop judgement to design, procure, audit or regulate AI",
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
    image:
      "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80",
  },
  {
    category: "College & Universities",
    bandId: "college",
    code: "U5",
    title: "AI Research, MLOps and Portfolio Capstone",
    audience: "Postsecondary",
    prerequisites: "U1 plus technical/governance elective",
    purpose:
      "Prepare for research, graduate study and entry-level AI work",
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
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
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

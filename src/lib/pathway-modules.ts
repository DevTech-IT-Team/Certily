export type ModuleTimeMix = {
  videoMin: number;
  readingMin: number;
  interactiveMin: number;
  quizMin: number;
  aiLabMin: number;
  reflectionMin: number;
  tutorMin: number;
  totalMin: number;
};

export type PathwayModuleLesson = {
  title: string;
  description?: string;
  hours?: number;
  cumulativeHours?: number;
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
  practice?: string;
  evidence?: string;
  safety?: string;
  capstone?: boolean;
};

const DESIGN_SAFETY =
  "Use accessible captions, readable text, keyboard alternatives, safe sample data, and no personal data by default.";

type BandDesignId = "k5" | "middle" | "high" | "college" | "professional";

const MODULE_DESIGNS: Record<
  BandDesignId,
  {
    hours: number;
    regular: ModuleTimeMix;
    capstone: ModuleTimeMix;
    deliverable: string;
    masteryCheck: string;
    feedback: string;
    tool: string;
  }
> = {
  k5: {
    hours: 4,
    regular: { videoMin: 20, readingMin: 20, interactiveMin: 30, quizMin: 15, aiLabMin: 135, reflectionMin: 15, tutorMin: 5, totalMin: 240 },
    capstone: { videoMin: 10, readingMin: 10, interactiveMin: 20, quizMin: 10, aiLabMin: 165, reflectionMin: 15, tutorMin: 10, totalMin: 240 },
    deliverable: "Small working artifact, oral explanation, or guided build checkpoint",
    masteryCheck: "Try–show–explain: learner demonstrates the task and explains one choice.",
    feedback: "Immediate answer explanation + hint ladder; peer / tutor review for the checkpoint.",
    tool: "Child-safe visual / block sandbox",
  },
  middle: {
    hours: 5,
    regular: { videoMin: 30, readingMin: 30, interactiveMin: 30, quizMin: 20, aiLabMin: 160, reflectionMin: 20, tutorMin: 10, totalMin: 300 },
    capstone: { videoMin: 20, readingMin: 20, interactiveMin: 20, quizMin: 15, aiLabMin: 190, reflectionMin: 25, tutorMin: 10, totalMin: 300 },
    deliverable: "Working code / model / design checkpoint with a short debug or test note",
    masteryCheck: "Checkpoint test plus a working example and debugging explanation.",
    feedback: "Immediate answer explanation + hint ladder; peer / tutor review for the checkpoint.",
    tool: "Browser IDE, notebook, or isolated game/security lab",
  },
  high: {
    hours: 5,
    regular: { videoMin: 35, readingMin: 35, interactiveMin: 30, quizMin: 20, aiLabMin: 130, reflectionMin: 35, tutorMin: 15, totalMin: 300 },
    capstone: { videoMin: 20, readingMin: 20, interactiveMin: 20, quizMin: 15, aiLabMin: 190, reflectionMin: 25, tutorMin: 10, totalMin: 300 },
    deliverable: "Repo commit, notebook, evaluation note, design decision, or evidence item",
    masteryCheck: "Applied task meets acceptance tests; learner explains limitations and evidence.",
    feedback: "Automated tests or rubric checklist + peer / assessor feedback before capstone.",
    tool: "Browser IDE, notebook, or isolated game/security lab",
  },
  college: {
    hours: 5,
    regular: { videoMin: 30, readingMin: 45, interactiveMin: 25, quizMin: 20, aiLabMin: 145, reflectionMin: 25, tutorMin: 10, totalMin: 300 },
    capstone: { videoMin: 20, readingMin: 30, interactiveMin: 20, quizMin: 15, aiLabMin: 180, reflectionMin: 25, tutorMin: 10, totalMin: 300 },
    deliverable: "Repo commit, notebook, evaluation note, design decision, or evidence item",
    masteryCheck: "Reproducible or reviewable artifact meets acceptance tests; learner documents trade-offs.",
    feedback: "Automated tests or rubric checklist + peer / assessor feedback before capstone.",
    tool: "Versioned repo, reproducible notebook, managed or containerised sandbox",
  },
  professional: {
    hours: 5,
    regular: { videoMin: 30, readingMin: 45, interactiveMin: 25, quizMin: 20, aiLabMin: 145, reflectionMin: 25, tutorMin: 10, totalMin: 300 },
    capstone: { videoMin: 20, readingMin: 30, interactiveMin: 20, quizMin: 15, aiLabMin: 180, reflectionMin: 25, tutorMin: 10, totalMin: 300 },
    deliverable: "Repo commit, notebook, evaluation note, design decision, or evidence item",
    masteryCheck: "Reproducible or reviewable artifact meets acceptance tests; learner documents trade-offs.",
    feedback: "Automated tests or rubric checklist + peer / assessor feedback before capstone.",
    tool: "Versioned repo, reproducible notebook, managed or containerised sandbox",
  },
};

function moduleRole(index: number, isCapstone: boolean): string {
  if (isCapstone) return "Capstone";
  if (index < 2) return "Foundation / guided practice";
  return "Applied build / transfer";
}

export function applyModuleDesign(
  lessons: PathwayModuleLesson[],
  band: BandDesignId,
  capstoneDeliverable?: string,
): PathwayModuleLesson[] {
  const spec = MODULE_DESIGNS[band];
  return lessons.map((lesson, index) => {
    const isCapstone =
      Boolean(lesson.capstone) || /capstone/i.test(lesson.title);
    const mins = isCapstone ? spec.capstone : spec.regular;
    return {
      ...lesson,
      ...mins,
      hours: spec.hours,
      cumulativeHours: spec.hours * (index + 1),
      role: moduleRole(index, isCapstone),
      deliverable: isCapstone
        ? capstoneDeliverable ??
          lesson.evidence ??
          `Final capstone artifact: ${lesson.title.replace(/^CAPSTONE:\s*/i, "")}; presentation / viva where applicable; revision log`
        : spec.deliverable,
      masteryCheck: spec.masteryCheck,
      feedback: spec.feedback,
      tool: spec.tool,
      safety: DESIGN_SAFETY,
      practice: lesson.practice ?? spec.feedback,
    };
  });
}

export function formatModuleDuration(lesson: Pick<PathwayModuleLesson, "hours" | "videoMin" | "readingMin" | "aiLabMin">): string {
  const hours = lesson.hours ?? 5;
  if (lesson.videoMin == null || lesson.readingMin == null || lesson.aiLabMin == null) {
    return `${hours} hours · video · AI Lab`;
  }
  return `${hours} hours · ${lesson.videoMin} min video · ${lesson.readingMin} min read · ${lesson.aiLabMin} min AI Lab`;
}

export type CertificationLevel =
  | "Foundation"
  | "Professional"
  | "Advanced"
  | "Specialization";

export type PathwayModule = {
  id: string;
  title: string;
  ages: string;
  audienceLabel?: string;
  description: string;
  image: string;
  badge?: string;
  outcomeArtifact?: string;
  certLevel?: CertificationLevel;
  prerequisite?: string;
  pathwayLabel?: string;
  evidenceBundle?: string;
  tutor?: string;
  certifier?: string;
  lessons: PathwayModuleLesson[];
};

const K5_PRACTICE =
  "Guided build, oral explanation, peer or family share";

function k5Module(
  title: string,
  coverage: string,
  cumulativeHours: number,
  extras?: { capstone?: boolean; evidence?: string; practice?: string },
): PathwayModuleLesson {
  const spec = MODULE_DESIGNS.k5;
  const isCapstone = Boolean(extras?.capstone);
  const mins = isCapstone ? spec.capstone : spec.regular;
  const index = Math.max(Math.round(cumulativeHours / spec.hours) - 1, 0);
  return {
    title,
    description: coverage,
    ...mins,
    hours: spec.hours,
    cumulativeHours,
    role: moduleRole(index, isCapstone),
    deliverable: isCapstone
      ? extras?.evidence ?? spec.deliverable
      : spec.deliverable,
    masteryCheck: spec.masteryCheck,
    feedback: spec.feedback,
    tool: spec.tool,
    practice: extras?.practice ?? K5_PRACTICE,
    evidence: extras?.evidence,
    safety: DESIGN_SAFETY,
    capstone: extras?.capstone,
  };
}

const MIDDLE_PRACTICE =
  "Lab checkpoint, code / design evidence, debugging note";

function middleModule(
  title: string,
  coverage: string,
  cumulativeHours: number,
  extras?: { capstone?: boolean; evidence?: string; practice?: string },
): PathwayModuleLesson {
  const spec = MODULE_DESIGNS.middle;
  const isCapstone = Boolean(extras?.capstone);
  const mins = isCapstone ? spec.capstone : spec.regular;
  const index = Math.max(Math.round(cumulativeHours / spec.hours) - 1, 0);
  return {
    title,
    description: coverage,
    ...mins,
    hours: spec.hours,
    cumulativeHours,
    role: moduleRole(index, isCapstone),
    deliverable: isCapstone
      ? extras?.evidence ?? spec.deliverable
      : spec.deliverable,
    masteryCheck: spec.masteryCheck,
    feedback: spec.feedback,
    tool: spec.tool,
    practice: extras?.practice ?? MIDDLE_PRACTICE,
    evidence: extras?.evidence,
    safety: DESIGN_SAFETY,
    capstone: extras?.capstone,
  };
}

const WORKPLACE_BRIDGE: PathwayModuleLesson[] = [
  {
    title: "Workplace Brief and Stakeholders",
    description: "Frame the job to be done, who decides, and what evidence will count as done.",
  },
  {
    title: "Data, Tools and Constraints",
    description: "Work inside real limits: access, privacy, cost, and the tools the team already uses.",
  },
  {
    title: "Build the Working Slice",
    description: "Ship a narrow, usable slice instead of a demo that cannot survive review.",
  },
  {
    title: "Risk, Review and Handoff",
    description: "Document failure modes, review steps, and how another teammate takes it over.",
  },
  {
    title: "Evidence Pack for Production",
    description: "Collect the artifacts a workplace reviewer needs: notes, metrics, and a usage policy.",
  },
];

export function fitLessonsToCount(
  lessons: PathwayModuleLesson[],
  count: number,
  extras: PathwayModuleLesson[] = WORKPLACE_BRIDGE,
): PathwayModuleLesson[] {
  const capstone =
    lessons.find((lesson) => lesson.capstone) ?? lessons[lessons.length - 1];
  const body = lessons.filter((lesson) => !lesson.capstone);
  const needed = Math.max(count - 1, 0);
  const fitted = body.slice(0, needed);
  let extraIndex = 0;
  while (fitted.length < needed && extras[extraIndex]) {
    fitted.push(extras[extraIndex]);
    extraIndex += 1;
  }
  while (fitted.length < needed) {
    fitted.push({
      title: `Guided practice ${fitted.length + 1}`,
      description: "Practice the skill with a checkpoint before the capstone.",
    });
  }
  return [...fitted, { ...capstone, capstone: true }];
}

export const ELEMENTARY_MODULES: PathwayModule[] = [
  {
    id: "explorer",
    title: "AI Superkids: Discover AI",
    ages: "K–5",
    badge: "Explorer",
    description:
      "An animated smart helper character that talks and responds — a tap-and-play storybook.",
    outcomeArtifact:
      "An animated 'smart helper' character that talks and responds - a tap-and-play storybook",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    lessons: [
      k5Module(
        "What Is AI? Smart Things All Around Us",
        "Spot AI in daily life (voice assistants, camera filters, recommendations); sort 'smart' vs 'not smart' objects; machines follow instructions.",
        4,
      ),
      k5Module(
        "How Machines See and Hear (Perception)",
        "Cameras and microphones as machine senses; picture-matching and sound-matching games; why machines sometimes get it wrong.",
        8,
      ),
      k5Module(
        "Tap, Drag, Code: First Programs in ScratchJr",
        "Icon-based blocks with no reading or typing; sequences, start/stop events, motion, repeat loops; debugging by replaying.",
        12,
      ),
      k5Module(
        "Making a Helper Talk Back (Natural Interaction)",
        "Recorded voice and speech bubbles; simple 'if I tap, you say' response rules; being kind and fair with AI (Societal Impact).",
        16,
      ),
      k5Module(
        "CAPSTONE: My Smart Helper Storybook",
        "Design a helper character, script 4-6 responses, build the tap-and-play storybook, record narration, present to family.",
        20,
        {
          capstone: true,
          evidence:
            "Final artifact: An animated 'smart helper' character that talks and responds - a tap-and-play storybook; presentation / viva; revision log",
        },
      ),
    ],
  },
  {
    id: "creator",
    title: "AI Superkids: Creative Coding",
    ages: "K–5",
    badge: "Creator",
    description:
      "A Scratch game that sees and reacts to the player (on-device face-sensing) plus a simple block chatbot.",
    outcomeArtifact:
      "A Scratch game that sees and reacts to the player (on-device face-sensing) plus a simple block chatbot",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=900&q=80",
    lessons: [
      k5Module(
        "From Blocks to Bigger Ideas: Scratch Foundations",
        "Sprites, costumes, events, loops, conditionals and variables; the stage and coordinate movement; remixing safely.",
        4,
      ),
      k5Module(
        "Teaching a Game to See You (Face-Sensing)",
        "Scratch face-sensing blocks running on-device; smile/tilt/position triggers; privacy rule - nothing is stored or sent.",
        8,
      ),
      k5Module(
        "Chatbots and Conversation Rules",
        "Natural Interaction big idea; if-then dialogue trees, keyword matching, giving a bot a personality and a polite fallback.",
        12,
      ),
      k5Module(
        "Game Design: Rules, Score and Feedback",
        "Goals, win/lose conditions, scoring, levels and difficulty; playtesting with a partner and acting on feedback.",
        16,
      ),
      k5Module(
        "CAPSTONE: My Face-Reactive Game + Block Chatbot",
        "Build a playable game driven by face-sensing input, add a chatbot helper character, playtest, polish and share.",
        20,
        {
          capstone: true,
          evidence:
            "Final artifact: A Scratch game that sees and reacts to the player (on-device face-sensing) plus a simple block chatbot; presentation / viva; revision log",
        },
      ),
    ],
  },
  {
    id: "genius",
    title: "AI Superkids: Train an AI",
    ages: "K–5",
    badge: "Creator",
    description:
      "A game or character that recognises your face, voice or drawings using a model the student trained.",
    outcomeArtifact:
      "A game or character that recognises your face, voice or drawings using a model the student trained",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    lessons: [
      k5Module(
        "How Machines Learn: Examples, Not Rules",
        "Training vs programming; classes, labels and examples; the Learning big idea explained without any maths.",
        4,
      ),
      k5Module(
        "Train Your Own Model with Teachable Machine",
        "Image, audio and pose projects in-browser; collecting varied examples; balanced classes; exporting the trained model.",
        8,
      ),
      k5Module(
        "Testing, Confusing and Fixing Your Model",
        "Testing with new examples; reading confidence scores; why bad or narrow examples create bias; improving with better data.",
        12,
      ),
      k5Module(
        "Plugging Your Model into Scratch",
        "Connecting the trained model to Scratch; confidence thresholds; turning a prediction into a game action or reaction.",
        16,
      ),
      k5Module(
        "CAPSTONE: The AI I Trained",
        "Choose a recognition task, gather and label data, train and test the model, wire it into a game or character, demo it.",
        20,
        {
          capstone: true,
          evidence:
            "Final artifact: A game or character that recognises your face, voice or drawings using a model the student trained; presentation / viva; revision log",
        },
      ),
    ],
  },
  {
    id: "game-maker",
    title: "Game Maker Studio",
    ages: "K–5",
    badge: "Creator",
    description:
      "A designed, coded and shareable video game with rule-based 'smart' behaviour.",
    outcomeArtifact:
      "A designed, coded and shareable video game with rule-based 'smart' behaviour",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    lessons: [
      k5Module(
        "What Makes a Game Fun: Design Basics",
        "Mechanics, goal, challenge and reward; genres; sketching a one-page game design document.",
        4,
      ),
      k5Module(
        "Coding the Core Loop",
        "Sprites, player input, movement, collision detection, score and lives in Scratch or MakeCode Arcade.",
        8,
      ),
      k5Module(
        "Smart Behaviour with Rules",
        "Representation and Reasoning through decision logic; states such as patrol, chase and flee; randomness vs rules.",
        12,
      ),
      k5Module(
        "Levels, Art, Sound and Polish",
        "Difficulty curve across levels, sprite and background art, sound effects, title and game-over screens.",
        16,
      ),
      k5Module(
        "CAPSTONE: Publish and Playtest My Game",
        "Finish the build, run a structured playtest, fix the top three issues, publish and write a short designer's note.",
        20,
        {
          capstone: true,
          evidence:
            "Final artifact: A designed, coded and shareable video game with rule-based 'smart' behaviour; presentation / viva; revision log",
        },
      ),
    ],
  },
  {
    id: "robo-coder",
    title: "Robo Coder Lab",
    ages: "K–5",
    badge: "Creator",
    description:
      "Code a virtual robot through missions and mazes - entirely on screen, no hardware.",
    outcomeArtifact:
      "Code a virtual robot through missions and mazes - entirely on screen, no hardware",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    lessons: [
      k5Module(
        "Meet the Virtual Robot",
        "Simulator interface; drive, turn and timing blocks; the coordinate grid; running, pausing and resetting a mission.",
        4,
      ),
      k5Module(
        "Sensors and Sensing",
        "Distance, colour, bumper and gyro sensors; reading sensor values live; how sensing differs from guessing.",
        8,
      ),
      k5Module(
        "Decisions and Loops: Maze Logic",
        "If/else and repeat-until; wall-following and line-following algorithms; debugging by stepping through the run.",
        12,
      ),
      k5Module(
        "Pathfinding and Mission Planning",
        "Planning efficient routes, sequencing sub-goals, comparing solutions on time and distance, optimising the code.",
        16,
      ),
      k5Module(
        "CAPSTONE: Robot Mission Challenge Run",
        "Complete a timed multi-stage mission course autonomously, record the run, and explain the logic behind the solution.",
        20,
        {
          capstone: true,
          evidence:
            "Final artifact: Code a virtual robot through missions and mazes - entirely on screen, no hardware; presentation / viva; revision log",
        },
      ),
    ],
  },
];

export const MIDDLE_MODULES: PathwayModule[] = [
  {
    id: "python-pro",
    title: "Python Pro",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    badge: "Builder",
    description:
      "A working Python program / playable text-coded mini-game.",
    outcomeArtifact:
      "A working Python program / playable text-coded mini-game",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    lessons: [
      middleModule(
        "Python Setup and First Programs",
        "Browser IDE (Trinket/Replit), print and input, comments, running code, reading error messages, blocks-to-text transition.",
        5,
      ),
      middleModule(
        "Data, Variables and Operators",
        "Integers, floats, strings, booleans; type casting; arithmetic and string methods; f-string formatting.",
        10,
      ),
      middleModule(
        "Decisions and Loops",
        "Comparison and logical operators; if/elif/else; while and for loops; range; nesting and loop control.",
        15,
      ),
      middleModule(
        "Lists, Dictionaries and Data Handling",
        "Creating and indexing lists; list methods; dictionaries as key-value stores; iterating over collections.",
        20,
      ),
      middleModule(
        "Functions, Modules and Debugging",
        "Defining functions, parameters, return values, scope; importing random, math and turtle; systematic debugging.",
        25,
      ),
      middleModule(
        "CAPSTONE: Text-Coded Playable Mini-Game",
        "Plan, build and test a complete Python game with state, scoring and input validation; document the code.",
        30,
        {
          capstone: true,
          evidence:
            "Final artifact: A working Python program / playable text-coded mini-game; presentation / viva; revision log",
        },
      ),
    ],
  },
  {
    id: "ml-builder",
    title: "Machine Learning Builder",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    badge: "Builder",
    description:
      "An ML model the student trains to predict or classify something they care about.",
    outcomeArtifact:
      "An ML model the student trains to predict or classify something they care about",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    lessons: [
      middleModule(
        "What Data Is and How ML Uses It",
        "Features and labels, rows and columns, structured vs unstructured data, real-world dataset examples.",
        5,
      ),
      middleModule(
        "Colab and Pandas Basics",
        "Notebook cells, loading CSV files, head/describe/info, selecting columns, filtering rows, simple plots.",
        10,
      ),
      middleModule(
        "Classification: Teaching a Model to Sort",
        "Decision trees and k-nearest neighbours in scikit-learn; fit and predict; interpreting a tree diagram.",
        15,
      ),
      middleModule(
        "Regression: Teaching a Model to Predict Numbers",
        "Linear regression, line of best fit, making predictions on new inputs, plotting predicted vs actual.",
        20,
      ),
      middleModule(
        "Train/Test, Accuracy and Bias",
        "Train-test split, accuracy and error, overfitting, why biased data yields unfair models, fairness discussion.",
        25,
      ),
      middleModule(
        "CAPSTONE: My Prediction Model",
        "Choose a dataset, frame a question, clean the data, train and evaluate a model, present findings and limitations.",
        30,
        {
          capstone: true,
          evidence:
            "Final artifact: An ML model the student trains to predict or classify something they care about; presentation / viva; revision log",
        },
      ),
    ],
  },
  {
    id: "genai-creator",
    title: "Generative AI Creator",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    badge: "Builder",
    description:
      "Their own AI chatbot/assistant with a personality and a job.",
    outcomeArtifact:
      "Their own AI chatbot/assistant with a personality and a job",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    lessons: [
      middleModule(
        "How Generative AI Works",
        "Next-word prediction, tokens, training data, what LLMs can and cannot do, age-appropriate model mental model.",
        5,
      ),
      middleModule(
        "Prompt Engineering Basics",
        "Clear instructions, role and audience, examples, format control, iterating a prompt to a better answer.",
        10,
      ),
      middleModule(
        "Designing a Chatbot Persona and Job",
        "Defining purpose, tone, audience, boundaries and refusals; writing a persona brief and sample conversations.",
        15,
      ),
      middleModule(
        "Chatbot Logic and Knowledge Grounding",
        "System prompts, giving the bot reference facts, conversation memory, handling questions it should not answer.",
        20,
      ),
      middleModule(
        "Safety, Truth and Responsible Use",
        "Hallucination and verification, privacy and personal data, attribution, kid-safe usage rules and parental consent.",
        25,
      ),
      middleModule(
        "CAPSTONE: My AI Assistant",
        "Ship a working chatbot with a defined persona and job, a grounded knowledge base, safety rules and a test log.",
        30,
        {
          capstone: true,
          evidence:
            "Final artifact: Their own AI chatbot/assistant with a personality and a job; presentation / viva; revision log",
        },
      ),
    ],
  },
  {
    id: "cyber-defender",
    title: "Cyber Defender",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    badge: "Builder",
    description:
      "A defend-the-system challenge in browser labs plus a personal security audit.",
    outcomeArtifact:
      "A 'defend the system' challenge in browser labs plus a personal security audit",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    lessons: [
      middleModule(
        "How the Internet Works and Where Attacks Happen",
        "Clients, servers, IP addresses, packets and protocols; mapping the attack surface of everyday devices.",
        5,
      ),
      middleModule(
        "Passwords, Authentication and Encryption",
        "Password strength and hashing, multi-factor authentication, password managers, hands-on cipher labs.",
        10,
      ),
      middleModule(
        "Phishing, Scams and Social Engineering",
        "Spotting fake emails, links and profiles; pretexting and urgency tactics; simulated inbox triage lab.",
        15,
      ),
      middleModule(
        "Safe Browsing, Devices and Privacy",
        "Updates and patching, app permissions, public Wi-Fi, digital footprint and privacy settings audit.",
        20,
      ),
      middleModule(
        "Intro Ethical Hacking in Simulated Labs",
        "Reconnaissance and vulnerability spotting in a sandbox, responsible disclosure, the law and hacker ethics.",
        25,
      ),
      middleModule(
        "CAPSTONE: Defend-the-System Challenge",
        "Complete a scored defence scenario, then produce a personal and family security audit with prioritised fixes.",
        30,
        {
          capstone: true,
          evidence:
            "Final artifact: A 'defend the system' challenge in browser labs plus a personal security audit; presentation / viva; revision log",
        },
      ),
    ],
  },
  {
    id: "game-dev-studio",
    title: "Game Dev Studio",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    badge: "Builder",
    description:
      "A coded, playable game with AI enemies driven by decision trees.",
    outcomeArtifact:
      "A coded, playable game with AI enemies driven by decision trees",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=900&q=80",
    lessons: [
      middleModule(
        "Game Dev Foundations and Toolchain",
        "Pygame or Roblox Lua setup, the game loop, frames and timing, project structure and version saving.",
        5,
      ),
      middleModule(
        "Sprites, Input and Movement",
        "Drawing and animating sprites, keyboard/mouse events, velocity and gravity, collision detection.",
        10,
      ),
      middleModule(
        "Game State, Score and Levels",
        "State machines for menu/play/pause/game-over, score and health systems, level loading and progression.",
        15,
      ),
      middleModule(
        "Enemy AI with Decision Trees",
        "Decision-tree behaviour for chase, flee and patrol; line-of-sight checks; tuning difficulty fairly.",
        20,
      ),
      middleModule(
        "Sound, Art and Playtesting",
        "Sound effects and music, asset pipeline, structured playtesting, bug logging and prioritised fixes.",
        25,
      ),
      middleModule(
        "CAPSTONE: Playable Game with AI Enemies",
        "Ship a complete game with at least two AI behaviours, three levels, a build file and a design write-up.",
        30,
        {
          capstone: true,
          evidence:
            "Final artifact: A coded, playable game with AI enemies driven by decision trees; presentation / viva; revision log",
        },
      ),
    ],
  },
];

export const HIGH_SCHOOL_MODULES: PathwayModule[] = [
  {
    id: "data-science-foundations",
    title: "AI & Data Science Foundations",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "Python, pandas, stats, and a published analysis with an ML mini-project",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Advanced Python for Data Work" },
      { title: "NumPy and Vectorised Computing" },
      { title: "Pandas: Wrangling Real Data" },
      { title: "Exploratory Data Analysis and Visualisation" },
      { title: "Statistics for Data Science" },
      { title: "First ML Models with scikit-learn" },
      { title: "Reproducibility, Git and GitHub" },
      { title: "CAPSTONE: Published Analysis + ML Mini-Project", capstone: true },
    ],
  },
  {
    id: "ml-developer",
    title: "Machine Learning Developer",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "The full ML workflow from features to a trained, evaluated model",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "The ML Workflow End to End" },
      { title: "Feature Engineering and Preprocessing" },
      { title: "Classification Algorithms" },
      { title: "Regression and Ensemble Methods" },
      { title: "Model Evaluation and Validation" },
      { title: "Hyperparameter Tuning and Model Selection" },
      { title: "Deployment Basics" },
      { title: "CAPSTONE: Trained, Evaluated Model", capstone: true },
    ],
  },
  {
    id: "dl-developer",
    title: "Deep Learning Developer",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "Neural nets, vision, transfer learning, and a live deployed demo",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Neural Network Fundamentals" },
      { title: "Training Networks: Loss, Gradients and Backprop" },
      { title: "Building with TensorFlow/Keras or PyTorch" },
      { title: "Convolutional Networks for Images" },
      { title: "Transfer Learning and Pretrained Models" },
      { title: "Sequence and Text Models" },
      { title: "Deploying a Live Demo" },
      { title: "CAPSTONE: Deployed Neural Network Demo", capstone: true },
    ],
  },
  {
    id: "genai-foundations",
    title: "Generative AI Foundations",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "LLMs, prompting, tools, and a working GenAI product with a prompt report",
    image:
      "https://images.unsplash.com/photo-1676277791608-ac54db37d133?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "How LLMs Work" },
      { title: "Prompt Engineering Core Patterns" },
      { title: "Advanced Prompting and Iteration" },
      { title: "The GenAI Tool Landscape" },
      { title: "Building a Tool with No-Code and Low-Code" },
      { title: "Evaluating GenAI Output" },
      { title: "Responsible and Ethical Use" },
      { title: "CAPSTONE: Working GenAI Tool + Prompt Report", capstone: true },
    ],
  },
  {
    id: "llm-app-developer",
    title: "LLM App Developer",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "APIs, embeddings, RAG, and a deployed study assistant",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "LLM APIs and the Developer Workflow" },
      { title: "Embeddings and Vector Search" },
      { title: "Retrieval-Augmented Generation" },
      { title: "Building the App Layer" },
      { title: "Working With Your Own Data" },
      { title: "Evaluation and Guardrails" },
      { title: "Deployment and Version Control" },
      { title: "CAPSTONE: Deployed RAG Study Assistant", capstone: true },
    ],
  },
  {
    id: "ai-agents-developer",
    title: "AI Workflow & Agents Developer",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "Tools, memory, multi-agent systems, and an autonomous agent project",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "From Chatbots to Agents" },
      { title: "Tool Use and Function Calling" },
      { title: "Memory, State and Context Management" },
      { title: "Multi-Agent Orchestration" },
      { title: "Planning, Reasoning and Task Decomposition" },
      { title: "Guardrails, Safety and Human-in-the-Loop" },
      { title: "Observability and Evaluation of Agents" },
      { title: "CAPSTONE: Governed AI Workflow with Agents", capstone: true },
    ],
  },
  {
    id: "cyber-ethical-hacking",
    title: "Cybersecurity & Ethical Hacking",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "Networks, crypto, web security, CTF practice, and a security portfolio",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Security Foundations and the CIA Triad" },
      { title: "Networking and Reconnaissance" },
      { title: "Cryptography and Crypto Challenges" },
      { title: "Web Security" },
      { title: "Forensics and Reverse Engineering Basics" },
      { title: "Capture the Flag Practice" },
      { title: "Personal and Organisational Defence" },
      { title: "CAPSTONE: CTF Set + Security Portfolio", capstone: true },
    ],
  },
  {
    id: "data-analyst-pro",
    title: "Data Analyst Pro",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "SQL, dashboards, storytelling, and an interactive analytics product",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "The Analytics Mindset and Business Questions" },
      { title: "SQL Fundamentals" },
      { title: "Advanced SQL and Data Modelling" },
      { title: "Cleaning and Preparing Data" },
      { title: "Data Visualisation Principles" },
      { title: "Building Dashboards" },
      { title: "Data Storytelling and Presentation" },
      { title: "CAPSTONE: Interactive Dashboard", capstone: true },
    ],
  },
  {
    id: "ai-product-studio",
    title: "AI Product & Startup Studio",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "Product thinking, an AI MVP, and an investor-ready pitch",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Finding a Problem Worth Solving" },
      { title: "AI Product Thinking" },
      { title: "UX and Rapid Prototyping" },
      { title: "Building an AI-Powered MVP" },
      { title: "Business Model and Unit Economics" },
      { title: "Go-to-Market and Validation" },
      { title: "Pitch Craft and Storytelling" },
      { title: "CAPSTONE: AI Prototype + Investor Pitch", capstone: true },
    ],
  },
  {
    id: "ai-capstone-portfolio",
    title: "AI Capstone & Portfolio",
    ages: "9–12",
    audienceLabel: "grades 9–12",
    description:
      "An end-to-end AI project you can publish and present",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Scoping a Portfolio-Grade Project" },
      { title: "Project Planning and Version Control" },
      { title: "Data and Model Development" },
      { title: "Building the Full Solution" },
      { title: "Evaluation and Iteration" },
      { title: "Documentation and Technical Writing" },
      { title: "Portfolio and Presentation Design" },
      { title: "CAPSTONE: End-to-End AI Project + Portfolio", capstone: true },
    ],
  },
].map((mod): PathwayModule => ({
  ...mod,
  tutor: "Dr. Maya Rao",
  certifier: "Certifier",
  lessons: applyModuleDesign(mod.lessons, "high"),
}));

export const COLLEGE_MODULES: PathwayModule[] = [
  {
    id: "applied-python-data-science",
    title: "Applied Python & Data Science Foundations",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Python, Git, pandas, stats, scikit-learn, and a reproducible notebook",
    image:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Professional Python" },
      { title: "Git, GitHub and Reproducible Workflows" },
      { title: "NumPy and Numerical Computing" },
      { title: "Pandas for Data Wrangling" },
      { title: "Data Cleaning and Quality" },
      { title: "Exploratory Analysis and Visualisation" },
      { title: "Statistics and Probability for Data Science" },
      { title: "Introduction to scikit-learn" },
      { title: "Communicating Analysis" },
      { title: "CAPSTONE: Reproducible Data Science Notebook", capstone: true },
    ],
  },
  {
    id: "ml-engineer",
    title: "Machine Learning Engineer",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Features, ensembles, evaluation, AutoML, and a documented model pipeline",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "ML Problem Framing and Metric Design" },
      { title: "Data Pipelines and Feature Stores" },
      { title: "Feature Engineering at Scale" },
      { title: "Supervised Learning Algorithms in Depth" },
      { title: "Ensembles: Random Forest, XGBoost, LightGBM" },
      { title: "Model Evaluation, Validation and Error Analysis" },
      { title: "Hyperparameter Optimisation and AutoML" },
      { title: "Imbalanced Data, Drift and Robustness" },
      { title: "Packaging and Documenting a Model Pipeline" },
      { title: "CAPSTONE: Tuned Model + Documented Pipeline", capstone: true },
    ],
  },
  {
    id: "mlops-production-architect",
    title: "MLOps & Production ML Architect",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Docker, serving, CI/CD, monitoring, and a deployed ML service",
    image:
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "MLOps Landscape and Maturity Models" },
      { title: "Containerisation with Docker" },
      { title: "Experiment Tracking and Model Registry" },
      { title: "Model Serving and Inference APIs" },
      { title: "CI/CD for Machine Learning" },
      { title: "Orchestration and Scheduled Retraining" },
      { title: "Monitoring, Drift and Alerting" },
      { title: "Scalability, Cost and Performance" },
      { title: "Governance, Reproducibility and Compliance" },
      { title: "CAPSTONE: Deployed, Monitored ML Service", capstone: true },
    ],
  },
  {
    id: "genai-foundations",
    title: "Generative AI Foundations",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Transformers, prompting, evaluation, and a GenAI tool with a report",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Foundation Models and Transformer Architecture" },
      { title: "Prompt Engineering Core Patterns" },
      { title: "Advanced Prompting and Structured Output" },
      { title: "The GenAI Tooling Landscape" },
      { title: "Context Engineering and Grounding Basics" },
      { title: "Evaluation of GenAI Systems" },
      { title: "Cost, Latency and Model Selection" },
      { title: "Responsible Use, IP and Disclosure" },
      { title: "Building a GenAI Workflow or Tool" },
      { title: "CAPSTONE: GenAI Tool + Evaluation Report", capstone: true },
    ],
  },
  {
    id: "llm-application-engineer",
    title: "LLM Application Engineer",
    ages: "18+",
    audienceLabel: "college",
    description:
      "APIs, vectors, RAG, guardrails, and a deployed evaluated RAG app",
    image:
      "https://images.unsplash.com/photo-1676277791608-ac54db37d133?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "LLM API Engineering" },
      { title: "Embeddings and Vector Databases" },
      { title: "Chunking, Indexing and Retrieval Strategy" },
      { title: "RAG Architecture and Patterns" },
      { title: "Orchestration Frameworks" },
      { title: "Advanced RAG" },
      { title: "Evaluation and Observability for LLM Apps" },
      { title: "Security: Prompt Injection, PII and Guardrails" },
      { title: "Deployment, Scaling and Caching" },
      { title: "CAPSTONE: Deployed, Evaluated RAG Application", capstone: true },
    ],
  },
  {
    id: "agentic-ai-systems-architect",
    title: "Agentic AI Systems Architect",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Agent loops, tools, multi-agent orchestration, and a production workflow",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Agent Architectures and the Agent Loop" },
      { title: "Tool Use, Function Calling and APIs" },
      { title: "Memory and Context Architecture" },
      { title: "Planning, Reasoning and Task Decomposition" },
      { title: "Multi-Agent Orchestration Patterns" },
      { title: "Workflow Automation and Enterprise Integration" },
      { title: "Guardrails, Permissions and Human-in-the-Loop" },
      { title: "Evaluation, Tracing and Reliability Engineering" },
      { title: "Cost, Latency and Failure-Mode Design" },
      { title: "CAPSTONE: Production Multi-Agent Workflow with Human Controls", capstone: true },
    ],
  },
  {
    id: "data-analytics-bi",
    title: "Data Analytics & BI Foundations",
    ages: "18+",
    audienceLabel: "college",
    description:
      "SQL, KPIs, dashboards, and an executive BI product",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Analytics Foundations and Business Questions" },
      { title: "SQL Fundamentals" },
      { title: "Advanced SQL and Window Functions" },
      { title: "Data Modelling for Analytics" },
      { title: "ETL and Data Preparation" },
      { title: "KPI and Metric Design" },
      { title: "Visualisation Principles" },
      { title: "Dashboard Development" },
      { title: "Data Storytelling for Executives" },
      { title: "CAPSTONE: Executive BI Dashboard", capstone: true },
    ],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Inference, A/B tests, forecasting, and a statistical predictive model",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Statistical Foundations and Inference" },
      { title: "Experiment Design and A/B Testing" },
      { title: "Regression Modelling and Diagnostics" },
      { title: "Classification and Probabilistic Models" },
      { title: "Time Series Analysis and Forecasting" },
      { title: "Causal Inference Basics" },
      { title: "Feature Engineering and Model Interpretation" },
      { title: "Communicating Statistical Results" },
      { title: "End-to-End Analysis Workflow" },
      { title: "CAPSTONE: Statistical Analysis + Predictive Model", capstone: true },
    ],
  },
  {
    id: "data-engineering-architect",
    title: "Data Engineering Architect",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Warehouses, batch and streaming pipelines, and production ETL/ELT",
    image:
      "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Data Architecture Landscape" },
      { title: "Advanced SQL and Performance Tuning" },
      { title: "Dimensional and Analytical Data Modelling" },
      { title: "Batch ETL/ELT Pipeline Development" },
      { title: "Orchestration and Scheduling" },
      { title: "Streaming and Real-Time Data" },
      { title: "Cloud Warehouses and Storage Formats" },
      { title: "Data Quality, Testing and Observability" },
      { title: "Governance, Lineage and Cost Management" },
      { title: "CAPSTONE: Production ETL/ELT Pipeline", capstone: true },
    ],
  },
  {
    id: "cybersecurity-foundations",
    title: "Cybersecurity Foundations",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Risk, crypto, IAM, CTF labs, and a hardened system assessment",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Security Principles, Risk and Governance" },
      { title: "Networking and Protocols for Security" },
      { title: "Operating System and Endpoint Security" },
      { title: "Applied Cryptography" },
      { title: "Identity and Access Management" },
      { title: "Threats, Vulnerabilities and Attack Techniques" },
      { title: "Secure Configuration and Hardening" },
      { title: "Security Testing and CTF Labs" },
      { title: "Security Operations and Incident Response" },
      { title: "CAPSTONE: Hardened System + Security Assessment", capstone: true },
    ],
  },
  {
    id: "ai-threat-detection-analyst",
    title: "AI-Powered Threat Detection Analyst",
    ages: "18+",
    audienceLabel: "college",
    description:
      "SOC, SIEM, detection engineering, and an anomaly-detection runbook",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "SOC Operations and the Analyst Workflow" },
      { title: "Log Sources, Telemetry and Data Collection" },
      { title: "SIEM Fundamentals and Query Languages" },
      { title: "Detection Engineering and Rules" },
      { title: "Statistical and ML Anomaly Detection" },
      { title: "Building an ML Detection Pipeline" },
      { title: "Threat Hunting and Intelligence" },
      { title: "Alert Triage, Tuning and False Positives" },
      { title: "Incident Response and Runbooks" },
      { title: "CAPSTONE: Anomaly-Detection Pipeline + Runbook", capstone: true },
    ],
  },
  {
    id: "security-ai-governance",
    title: "Security & AI Governance Architect",
    ages: "18+",
    audienceLabel: "college",
    description:
      "AI risk, red-teaming, privacy, and a model-risk assessment pack",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "AI Risk Landscape and Regulation" },
      { title: "Threat Modelling for AI Systems" },
      { title: "Adversarial ML and Model Attacks" },
      { title: "AI Red-Teaming Methodology" },
      { title: "LLM-Specific Risks" },
      { title: "Model Risk Management and Assurance" },
      { title: "Governance Frameworks, Policy and Controls" },
      { title: "Privacy, Data Protection and Compliance" },
      { title: "Audit, Documentation and Reporting" },
      { title: "CAPSTONE: Governance Framework + Model Risk Assessment", capstone: true },
    ],
  },
  {
    id: "cloud-foundations-ai",
    title: "Cloud Foundations for AI",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Compute, IAM, managed AI services, and a cloud-deployed app",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Cloud Computing Concepts and Service Models" },
      { title: "Compute: VMs, Containers and Serverless" },
      { title: "Storage and Databases" },
      { title: "Networking and Security Groups" },
      { title: "IAM, Roles and Access Control" },
      { title: "Managed AI and Data Services" },
      { title: "Infrastructure as Code Basics" },
      { title: "Cost Management and Free-Tier Discipline" },
      { title: "Deploying an Application to the Cloud" },
      { title: "CAPSTONE: Cloud-Deployed App with Managed AI", capstone: true },
    ],
  },
  {
    id: "cloud-ai-engineer",
    title: "Cloud AI Engineer",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Cloud ML platforms, endpoints, serverless inference, and CI/CD for AI",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a5804f08d?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Cloud ML Platform Overview" },
      { title: "Data Services and Feature Pipelines" },
      { title: "Training and AutoML in the Cloud" },
      { title: "Model Deployment and Endpoints" },
      { title: "Serverless Inference and Event-Driven AI" },
      { title: "Prebuilt AI APIs" },
      { title: "Securing AI Workloads" },
      { title: "Monitoring, Logging and Cost Optimisation" },
      { title: "CI/CD for Cloud AI" },
      { title: "CAPSTONE: Deployed Cloud AI Service", capstone: true },
    ],
  },
  {
    id: "ai-infrastructure-scaling",
    title: "AI Infrastructure & Scaling Architect",
    ages: "18+",
    audienceLabel: "college",
    description:
      "GPUs, Kubernetes, inference scale, and a reference infrastructure design",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "AI Compute: GPUs, TPUs and Accelerators" },
      { title: "Distributed Training Fundamentals" },
      { title: "Kubernetes and Container Orchestration for AI" },
      { title: "Inference Optimisation" },
      { title: "Scaling Patterns and Load Management" },
      { title: "Storage, Networking and Data Throughput" },
      { title: "Observability for AI Infrastructure" },
      { title: "Reliability, Capacity and Cost/Performance Engineering" },
      { title: "Reference Architectures and Design Reviews" },
      { title: "CAPSTONE: Scalable AI Infrastructure Design", capstone: true },
    ],
  },
  {
    id: "computer-vision-engineer",
    title: "Computer Vision Engineer",
    ages: "18+",
    audienceLabel: "college",
    description:
      "CNNs, detection, segmentation, ViTs, and a deployed vision app",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Image Fundamentals and Classical Computer Vision" },
      { title: "CNN Architectures in Depth" },
      { title: "Data Pipelines, Annotation and Augmentation" },
      { title: "Image Classification and Transfer Learning" },
      { title: "Object Detection" },
      { title: "Segmentation and Instance Masks" },
      { title: "Vision Transformers and Multimodal Models" },
      { title: "Evaluation Metrics for Vision" },
      { title: "Optimisation and Edge/Real-Time Deployment" },
      { title: "CAPSTONE: Deployed Vision Application", capstone: true },
    ],
  },
  {
    id: "ai-product-manager",
    title: "AI Product Manager & Strategist",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Discovery, AI UX, OKRs, ROI, and an AI product strategy pack",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "The AI PM Role and Opportunity Framing" },
      { title: "AI Capability Fluency for Product Managers" },
      { title: "Discovery, User Research and Problem Validation" },
      { title: "Data Strategy and Feasibility Assessment" },
      { title: "Designing AI UX" },
      { title: "Roadmapping and Prioritisation" },
      { title: "Metrics, OKRs and Experimentation" },
      { title: "Business Case, Pricing and ROI" },
      { title: "Risk, Governance and Launch Readiness" },
      { title: "CAPSTONE: AI Product Strategy", capstone: true },
    ],
  },
  {
    id: "responsible-ai-ethics",
    title: "Responsible AI, Ethics & Policy",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Fairness, privacy, regulation, and a governance model-risk pack",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Foundations of AI Ethics" },
      { title: "Bias and Fairness" },
      { title: "Transparency and Explainability" },
      { title: "Privacy and Data Protection" },
      { title: "Safety, Robustness and Misuse" },
      { title: "The Regulatory Landscape" },
      { title: "Governance Frameworks and Operating Models" },
      { title: "Impact Assessment and Auditing" },
      { title: "Stakeholder Engagement and Communication" },
      { title: "CAPSTONE: Governance and Model-Risk Pack", capstone: true },
    ],
  },
  {
    id: "ai-healthcare-life-sciences",
    title: "AI for Healthcare & Life Sciences",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Clinical data, imaging, NLP, HIPAA, and a healthcare AI project",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Healthcare Data Landscape" },
      { title: "Clinical Workflow and Problem Framing" },
      { title: "Privacy, HIPAA and Regulatory Basics" },
      { title: "Working With Clinical Tabular Data" },
      { title: "Medical Imaging and Deep Learning" },
      { title: "NLP on Clinical Text" },
      { title: "Validation, Bias and Clinical Evaluation" },
      { title: "Deployment and Integration in Care Settings" },
      { title: "Domain Ethics and Health Equity" },
      { title: "CAPSTONE: Healthcare AI Project + Compliance Note", capstone: true },
    ],
  },
  {
    id: "ai-career-capstone-portfolio",
    title: "AI Career Capstone & Portfolio",
    ages: "18+",
    audienceLabel: "college",
    description:
      "Portfolio, resume, interviews, and a mock-interview ready package",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Career Mapping and Role Targeting" },
      { title: "Portfolio Strategy and Project Selection" },
      { title: "Building the Capstone Solution" },
      { title: "Engineering Quality" },
      { title: "Deployment and Demo Craft" },
      { title: "GitHub Profile and Project Presentation" },
      { title: "Resume, LinkedIn and Personal Brand" },
      { title: "Technical Interview Preparation" },
      { title: "Behavioural and Communication Interviews" },
      { title: "CAPSTONE: Portfolio + Resume + Mock Interview", capstone: true },
    ],
  },
];

export const PROFESSIONAL_MODULES: PathwayModule[] = [
  {
    id: "ai-leadership",
    title: "AI Leadership for Career Growth",
    ages: "18+",
    audienceLabel: "working professionals",
    description:
      "Executive AI literacy, team adoption, and a shareable leadership credential",
    image:
      "https://images.unsplash.com/photo-1454165804603-c3d57bc86b40?auto=format&fit=crop&w=900&q=80",
    lessons: [
      {
        title: "AI in the Modern Workplace",
        description: "Map where AI already shows up in your role, industry, and team workflows.",
      },
      {
        title: "Opportunity Framing and Use-Case Selection",
        description: "Choose high-value AI use cases and define success in business language.",
      },
      {
        title: "Leading Change and Responsible Adoption",
        description: "Build trust, manage risk, and roll out AI so people actually use it.",
      },
      {
        title: "Measuring Impact and ROI",
        description: "Track skill lift, productivity, and the KPIs leadership cares about.",
      },
      {
        title: "CAPSTONE: AI Transformation Brief",
        description: "Present a 90-day AI plan for your team with risks, owners, and metrics.",
        capstone: true,
      },
    ],
  },
  {
    id: "ai-product",
    title: "AI Product Management",
    ages: "18+",
    audienceLabel: "working professionals",
    description:
      "Discovery, AI UX, and a product strategy you can take to stakeholders",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    lessons: [
      {
        title: "The AI Product Manager Role",
        description: "Learn how PMs frame problems, feasibility, and data needs for AI features.",
      },
      {
        title: "Discovery and Problem Validation",
        description: "Interview users, test assumptions, and decide what is actually worth building.",
      },
      {
        title: "Designing AI Experiences",
        description: "Prototype prompts, fallbacks, and human-in-the-loop flows that feel reliable.",
      },
      {
        title: "Roadmaps, Metrics and Launch",
        description: "Prioritize the backlog and ship with evaluation, privacy, and rollback plans.",
      },
      {
        title: "CAPSTONE: AI Product Strategy Pack",
        description: "Deliver a one-pager, prototype, and launch checklist for an AI-powered product.",
        capstone: true,
      },
    ],
  },
  {
    id: "llm-professional",
    title: "Large Language Models — Professional Track",
    ages: "18+",
    audienceLabel: "working professionals",
    description:
      "Prompting, RAG, evaluation, and a production-ready LLM workflow",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    lessons: [
      {
        title: "How LLMs Work in Practice",
        description: "Build a working mental model of tokens, context, cost, and failure modes.",
      },
      {
        title: "Prompting and Structured Output",
        description: "Design prompts that stay consistent across real work tasks.",
      },
      {
        title: "Grounding with Your Own Data (RAG)",
        description: "Connect documents and knowledge bases so answers stay accurate.",
      },
      {
        title: "Evaluation, Safety and Guardrails",
        description: "Test quality, catch hallucinations, and add review steps before users see output.",
      },
      {
        title: "CAPSTONE: Deployed LLM Workflow",
        description: "Ship a documented LLM assistant with evaluation notes and a usage policy.",
        capstone: true,
      },
    ],
  },
  {
    id: "mlops-pro",
    title: "Production ML Engineering (MLOps)",
    ages: "18+",
    audienceLabel: "working professionals",
    description:
      "Pipelines, serving, monitoring, and a deployed ML service",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    lessons: [
      {
        title: "From Notebook to Production",
        description: "Package models so they can be versioned, reviewed, and reused by a team.",
      },
      {
        title: "Serving, APIs and Inference",
        description: "Expose predictions through reliable endpoints with latency and cost in mind.",
      },
      {
        title: "CI/CD and Model Registry",
        description: "Automate tests, promotions, and rollback when a new model is worse.",
      },
      {
        title: "Monitoring, Drift and Incidents",
        description: "Watch live performance and know when to retrain or pause a model.",
      },
      {
        title: "CAPSTONE: Deployed, Monitored ML Service",
        description: "Launch a service with a runbook, alerts, and a documented pipeline.",
        capstone: true,
      },
    ],
  },
  {
    id: "enterprise-ai-arch",
    title: "Enterprise AI Systems Architecture",
    ages: "18+",
    audienceLabel: "working professionals",
    description:
      "Scalable, secure AI systems designed for real organizational constraints",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=80",
    lessons: [
      {
        title: "Enterprise AI Landscape",
        description: "Map platforms, data, identity, and risk across a real organization.",
      },
      {
        title: "Reference Architectures",
        description: "Choose patterns for chat, retrieval, agents, and batch intelligence.",
      },
      {
        title: "Security, Privacy and Access",
        description: "Design IAM, data boundaries, and audit trails for AI workloads.",
      },
      {
        title: "Cost, Reliability and Scale",
        description: "Plan for traffic spikes, vendor lock-in, and total cost of ownership.",
      },
      {
        title: "CAPSTONE: Architecture Decision Record",
        description: "Present a secure, scalable architecture with trade-offs leadership can approve.",
        capstone: true,
      },
    ],
  },
];

const UNIVERSITY_KEEP_IDS = [
  "applied-python-data-science",
  "ml-engineer",
  "genai-foundations",
  "llm-application-engineer",
  "data-analytics-bi",
  "data-scientist",
  "cybersecurity-foundations",
  "cloud-foundations-ai",
  "computer-vision-engineer",
  "ai-healthcare-life-sciences",
] as const;

export const UNIVERSITY_OUTCOMES: PathwayModule[] = UNIVERSITY_KEEP_IDS.map(
  (id) => COLLEGE_MODULES.find((mod) => mod.id === id)!,
).map((mod) => ({
  ...mod,
  ages: "18+",
  audienceLabel: "degree learners",
  badge: "Engineer",
  tutor: "Dr. Maya Rao",
  certifier: "Certifier",
  lessons: applyModuleDesign(fitLessonsToCount(mod.lessons, 10), "college"),
}));

const PROFESSIONAL_FROM_COLLEGE_IDS = [
  "mlops-production-architect",
  "agentic-ai-systems-architect",
  "data-engineering-architect",
  "ai-threat-detection-analyst",
  "security-ai-governance",
  "cloud-ai-engineer",
  "ai-infrastructure-scaling",
  "ai-product-manager",
  "responsible-ai-ethics",
  "ai-career-capstone-portfolio",
] as const;

export const PROFESSIONAL_OUTCOMES: PathwayModule[] = PROFESSIONAL_FROM_COLLEGE_IDS.map(
  (id) => COLLEGE_MODULES.find((mod) => mod.id === id)!,
).map((mod) => ({
  ...mod,
  ages: "21+",
  audienceLabel: "career learners",
  badge: "Professional / Architect",
  tutor: "Dr. Maya Rao",
  certifier: "Certifier",
  lessons: applyModuleDesign(fitLessonsToCount(mod.lessons, 10), "professional"),
}));

export const PATHWAY_MODULES: Record<string, PathwayModule[]> = {
  "K–5": ELEMENTARY_MODULES,
  "Middle School": MIDDLE_MODULES,
  "High School": HIGH_SCHOOL_MODULES,
  "University / College": UNIVERSITY_OUTCOMES,
  "Working Professionals": PROFESSIONAL_OUTCOMES,
};

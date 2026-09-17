export type PathwayModuleLesson = {
  title: string;
  capstone?: boolean;
};

export type PathwayModule = {
  id: string;
  title: string;
  ages: string;
  audienceLabel?: string;
  description: string;
  image: string;
  lessons: PathwayModuleLesson[];
};

export const ELEMENTARY_MODULES: PathwayModule[] = [
  {
    id: "explorer",
    title: "AI Superkids: Explorer",
    ages: "5–7",
    description:
      "Smart things, first programs, and a helper that talks back",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "What Is AI? Smart Things All Around Us" },
      { title: "How Machines See and Hear (Perception)" },
      { title: "Tap, Drag, Code: First Programs in ScratchJr" },
      { title: "Making a Helper Talk Back (Natural Interaction)" },
      { title: "CAPSTONE: My Smart Helper Storybook", capstone: true },
    ],
  },
  {
    id: "creator",
    title: "AI Superkids: Creator",
    ages: "7–9",
    description:
      "Scratch, face-sensing, chatbots, and a game you can play",
    image:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "From Blocks to Bigger Ideas: Scratch Foundations" },
      { title: "Teaching a Game to See You (Face-Sensing)" },
      { title: "Chatbots and Conversation Rules" },
      { title: "Game Design: Rules, Score and Feedback" },
      {
        title: "CAPSTONE: My Face-Reactive Game + Block Chatbot",
        capstone: true,
      },
    ],
  },
  {
    id: "genius",
    title: "AI Superkids: Genius",
    ages: "9–11",
    description:
      "Train a model, test it, and plug it into Scratch",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "How Machines Learn: Examples, Not Rules" },
      { title: "Train Your Own Model with Teachable Machine" },
      { title: "Testing, Confusing and Fixing Your Model" },
      { title: "Plugging Your Model into Scratch" },
      { title: "CAPSTONE: The AI I Trained", capstone: true },
    ],
  },
  {
    id: "game-maker",
    title: "Game Maker Studio",
    ages: "7–11",
    description: "Design, code, polish, and playtest a game",
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "What Makes a Game Fun: Design Basics" },
      { title: "Coding the Core Loop" },
      { title: "Smart Behaviour with Rules" },
      { title: "Levels, Art, Sound and Polish" },
      { title: "CAPSTONE: Publish and Playtest My Game", capstone: true },
    ],
  },
  {
    id: "robo-coder",
    title: "Robo Coder Lab",
    ages: "7–11",
    description:
      "Sensors, maze logic, and a robot mission challenge",
    image:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Meet the Virtual Robot" },
      { title: "Sensors and Sensing" },
      { title: "Decisions and Loops: Maze Logic" },
      { title: "Pathfinding and Mission Planning" },
      { title: "CAPSTONE: Robot Mission Challenge Run", capstone: true },
    ],
  },
];

export const MIDDLE_MODULES: PathwayModule[] = [
  {
    id: "python-pro",
    title: "Python Pro",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    description:
      "First programs, data, loops, and a playable mini-game in Python",
    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Python Setup and First Programs" },
      { title: "Data, Variables and Operators" },
      { title: "Decisions and Loops" },
      { title: "Lists, Dictionaries and Data Handling" },
      { title: "Functions, Modules and Debugging" },
      { title: "CAPSTONE: Text-Coded Playable Mini-Game", capstone: true },
    ],
  },
  {
    id: "ml-builder",
    title: "AI & Machine Learning Builder",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    description:
      "Data, models, accuracy, and a prediction project you train yourself",
    image:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "What Data Is and How ML Uses It" },
      { title: "Colab and Pandas Basics" },
      { title: "Classification: Teaching a Model to Sort" },
      { title: "Regression: Teaching a Model to Predict Numbers" },
      { title: "Train/Test, Accuracy and Bias" },
      { title: "CAPSTONE: My Prediction Model", capstone: true },
    ],
  },
  {
    id: "genai-creator",
    title: "Generative AI Creator",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    description:
      "Prompts, chatbot logic, and a responsible AI assistant",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "How Generative AI Works" },
      { title: "Prompt Engineering Basics" },
      { title: "Designing a Chatbot Persona and Job" },
      { title: "Chatbot Logic and Knowledge Grounding" },
      { title: "Safety, Truth and Responsible Use" },
      { title: "CAPSTONE: My AI Assistant", capstone: true },
    ],
  },
  {
    id: "cyber-defender",
    title: "Cyber Defender",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    description:
      "Passwords, phishing, privacy, and a defend-the-system challenge",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "How the Internet Works and Where Attacks Happen" },
      { title: "Passwords, Authentication and Encryption" },
      { title: "Phishing, Scams and Social Engineering" },
      { title: "Safe Browsing, Devices and Privacy" },
      { title: "Intro Ethical Hacking in Simulated Labs" },
      { title: "CAPSTONE: Defend-the-System Challenge", capstone: true },
    ],
  },
  {
    id: "game-dev-studio",
    title: "Game Dev Studio",
    ages: "6–8",
    audienceLabel: "grades 6–8",
    description:
      "Sprites, levels, enemy AI, and a playable game with AI enemies",
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?auto=format&fit=crop&w=900&q=80",
    lessons: [
      { title: "Game Dev Foundations and Toolchain" },
      { title: "Sprites, Input and Movement" },
      { title: "Game State, Score and Levels" },
      { title: "Enemy AI with Decision Trees" },
      { title: "Sound, Art and Playtesting" },
      { title: "CAPSTONE: Playable Game with AI Enemies", capstone: true },
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
    title: "AI Agents Developer",
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
      { title: "CAPSTONE: Autonomous Multi-Agent System", capstone: true },
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
];

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
      { title: "CAPSTONE: Production Multi-Agent Workflow", capstone: true },
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

export const PATHWAY_MODULES: Record<string, PathwayModule[]> = {
  Elementary: ELEMENTARY_MODULES,
  "Middle School": MIDDLE_MODULES,
  "High School": HIGH_SCHOOL_MODULES,
  College: COLLEGE_MODULES,
};

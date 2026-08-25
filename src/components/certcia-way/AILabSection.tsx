import { Reveal } from "@/components/campus/Reveal";
import { Zap, Code2, Sparkles, Brain, ArrowRight, CheckCircle2, XCircle, Terminal, Activity, Globe, MousePointerClick, Gamepad2, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FEATURES = [
  {
    id: "quizzes",
    title: "Interactive Quizzes",
    description: "Test your knowledge in real-time with smart, adaptive quizzes that learn from your mistakes and help you master concepts faster.",
    icon: MousePointerClick,
    color: "text-blue-500",
    glow: "bg-blue-500/10",
    bgTint: "bg-blue-50 border-blue-200/60 shadow-sm shadow-blue-100/50"
  },
  {
    id: "games",
    title: "Gamified Learning",
    description: "Turn complex subjects into engaging missions. Earn points, unlock badges, and level up your skills through play.",
    icon: Gamepad2,
    color: "text-[#5B4CF5]",
    glow: "bg-[#5B4CF5]/10",
    bgTint: "bg-[#5B4CF5]/[0.08] border-[#5B4CF5]/20 shadow-sm shadow-[#5B4CF5]/5"
  },
  {
    id: "hackathons",
    title: "Global Hackathons",
    description: "Collaborate with peers around the world. Build AI models, solve real challenges, and showcase your talent on a global stage.",
    icon: Globe,
    color: "text-emerald-500",
    glow: "bg-emerald-500/10",
    bgTint: "bg-emerald-50 border-emerald-200/60 shadow-sm shadow-emerald-100/50"
  }
];

const QUESTIONS = [
  {
    q: "Experiment 01: Select the correct architecture to process natural language.",
    options: [
      { id: "A", text: "init_transformer_model()" },
      { id: "B", text: "build_relational_db()" },
      { id: "C", text: "deploy_blockchain_node()" }
    ],
    correct: "A"
  },
  {
    q: "Experiment 02: Execute the function that allows the neural network to learn from its errors.",
    options: [
      { id: "A", text: "apply_static_typing()" },
      { id: "B", text: "run_backpropagation()" },
      { id: "C", text: "render_css_flexbox()" }
    ],
    correct: "B"
  },
  {
    q: "Experiment 03: Define the ultimate parameter for Artificial General Intelligence (AGI).",
    options: [
      { id: "A", text: "target = 'play_chess'" },
      { id: "B", text: "target = 'sort_arrays'" },
      { id: "C", text: "target = 'human_cognition'" }
    ],
    correct: "C"
  }
];

export function AILabSection() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [shake, setShake] = useState(false);
  const [activeFeature, setActiveFeature] = useState<string | null>(null);

  const handleSelect = (id: string) => {
    if (selectedAnswer || isFinished) return;
    
    setSelectedAnswer(id);
    const correct = QUESTIONS[currentQuestion].correct === id;
    
    if (correct) {
      setScore(s => s + 1);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }

    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelectedAnswer(null);
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  const resetSandbox = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setIsFinished(false);
    setScore(0);
  };

  return (
    <section className="relative px-4 py-24 sm:px-6 lg:px-8 bg-[#F7F8FC] overflow-hidden font-sans border-t border-slate-200">
      
      {/* Super minimal abstract background */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] bg-[#5B4CF5]/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-[3.35rem] font-extrabold leading-[1.12] tracking-[-0.03em] text-[#0F1533] mb-6">
              Where learning becomes <span className="text-[#5B4CF5]">an experiment</span>.
            </h2>
            <p className="max-w-2xl text-base sm:text-lg lg:text-[1.05rem] leading-relaxed text-[#5A607A] font-medium mx-auto">
              Step into the AI Lab, our experimental playground. Discover interactive clickers, immersive games, and global hackathons designed to put your skills to the test.
            </p>
          </Reveal>
        </div>

        {/* Expanding Accordion Feature Cards */}
        <div 
          className="flex flex-col md:flex-row w-full h-auto md:h-[360px] gap-4 mb-32"
          onMouseLeave={() => setActiveFeature(null)}
        >
          {FEATURES.map((feature) => {
            const isExpanded = activeFeature === feature.id;
            const isDefault = activeFeature === null;
            const showDescription = isExpanded || isDefault;
            const isShrunk = activeFeature !== null && activeFeature !== feature.id;

            return (
              <motion.div
                key={feature.id}
                onMouseEnter={() => setActiveFeature(feature.id)}
                onClick={() => setActiveFeature(feature.id)}
                animate={{
                  flex: isExpanded ? 3 : 1
                }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                className={cn(
                  "relative overflow-hidden rounded-[2rem] cursor-pointer border transition-colors duration-300 min-h-[100px] md:min-h-0",
                  isExpanded ? "bg-[#5B4CF5] border-[#5B4CF5] shadow-[0_20px_50px_-12px_rgba(91,76,245,0.4)]" : cn(feature.bgTint, "hover:bg-white")
                )}
              >
                {/* Large Background Icon for active/default state to prevent blankness */}
                <AnimatePresence>
                  {(isExpanded || isDefault) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8, x: 20 }}
                      animate={{ opacity: isExpanded ? 0.12 : 0.08, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.8, x: 20 }}
                      className={cn("absolute -right-8 -bottom-8 pointer-events-none transition-colors", isExpanded ? "text-white" : feature.color)}
                    >
                      <feature.icon className="w-64 h-64" />
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                  {/* Top Section: Icon & Title */}
                  <div className="flex items-center gap-4">
                    <div className={cn(
                      "w-12 h-12 rounded-2xl flex flex-shrink-0 items-center justify-center transition-colors duration-300", 
                      isExpanded ? "bg-white/20 text-white" : cn("bg-slate-100", feature.color)
                    )}>
                      <feature.icon className="w-6 h-6" />
                    </div>
                    
                    {/* Always show title horizontally, hide on desktop when active to show bottom title */}
                    <div className={cn("block", isExpanded ? "md:hidden" : "block")}>
                      <h3 className={cn(
                        "font-display font-bold transition-colors duration-300", 
                        isExpanded ? "text-white text-lg" : "text-[#0F1533]",
                        isShrunk ? "text-base md:text-sm whitespace-nowrap truncate max-w-[120px]" : "text-lg"
                      )}>
                        {feature.title}
                      </h3>
                    </div>
                  </div>

                  {/* Bottom Section: Content & Action */}
                  <div className="mt-auto flex flex-col justify-end">
                    <AnimatePresence>
                      {showDescription && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, height: 0 }}
                          animate={{ opacity: 1, y: 0, height: "auto" }}
                          exit={{ opacity: 0, y: 10, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className={cn("w-full mb-6", isExpanded ? "md:w-[85%]" : "")}
                        >
                          {isExpanded && (
                            <h3 className="hidden md:block font-display text-2xl lg:text-3xl font-bold text-white mb-3">
                              {feature.title}
                            </h3>
                          )}
                          <p className={cn(
                            "leading-relaxed font-medium transition-colors duration-300",
                            isExpanded ? "text-[14px] md:text-[15px] text-white/90" : "text-[14px] md:text-[15px] text-[#5A607A]"
                          )}>
                            {feature.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Bottom Action Arrow */}
                    <div className={cn(
                       "flex items-center gap-2 transition-colors duration-300",
                       isExpanded ? "text-white/80" : feature.color
                    )}>
                      <span className="text-[12px] font-bold uppercase tracking-wider">
                        {isExpanded ? "Active" : "Explore"}
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            
            {/* Left Content - Minimal & Clean */}
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200/60 bg-white/50 text-[#5B4CF5] text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3 h-3" />
                Live AI Sandbox
              </div>
              
              <h2 className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#0F1533] mb-6">
                Stop reading. <br/>
                <span className="text-[#5B4CF5]">Start experimenting.</span>
              </h2>
              
              <p className="text-base sm:text-lg leading-relaxed text-[#5A607A] font-medium mb-10 max-w-md">
                Don't just memorize concepts—test them instantly in our zero-setup environments. Get real-time feedback and build actual muscle memory.
              </p>
              
              <ul className="space-y-4 mb-10 border-l-2 border-[#5B4CF5]/20 pl-6 py-2">
                <li className="flex items-center gap-3 text-[#0F1533] font-bold text-[15px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B4CF5]" />
                  Real-time compilation & AI feedback
                </li>
                <li className="flex items-center gap-3 text-[#0F1533] font-bold text-[15px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B4CF5]" />
                  Weekly global leaderboards
                </li>
                <li className="flex items-center gap-3 text-[#0F1533] font-bold text-[15px]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5B4CF5]" />
                  Zero configuration required
                </li>
              </ul>
            </div>

            {/* Right: PLAYABLE SANDBOX - Minimal Glassmorphic Mac Window */}
            <div className="w-full lg:w-[520px] flex-shrink-0 relative">
               
               {/* Decorative floating brain behind the terminal */}
               <div className="absolute -top-12 -right-12 opacity-5 pointer-events-none">
                 <Brain className="w-64 h-64 text-[#0F1533]" />
               </div>

               <div className="relative rounded-[1.5rem] bg-white/70 backdrop-blur-2xl border border-white/80 shadow-[0_20px_60px_-15px_rgba(91,76,245,0.15)] overflow-hidden">
                 
                 {/* Mac-style Header */}
                 <div className="px-5 py-3.5 bg-white/40 border-b border-white/60 flex items-center">
                   <div className="flex gap-1.5 absolute left-5">
                     <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] shadow-sm" />
                     <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] shadow-sm" />
                     <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F] shadow-sm" />
                   </div>
                   <div className="flex-1 flex items-center justify-center gap-2 text-slate-400 text-[10px] font-bold tracking-widest uppercase">
                     <Terminal className="w-3 h-3" />
                     {isFinished ? "Session Terminated" : `Experiment ${currentQuestion + 1} / ${QUESTIONS.length}`}
                   </div>
                 </div>

                 {/* Sandbox Body */}
                 <div className="p-8 min-h-[380px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                      {!isFinished ? (
                        <motion.div 
                          key="quiz"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0, x: shake ? [-6, 6, -6, 6, 0] : 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex flex-col gap-6"
                        >
                          <h4 className="text-[17px] md:text-[19px] font-medium text-[#0F1533] leading-relaxed">
                            {QUESTIONS[currentQuestion].q}
                          </h4>
                          
                          <div className="space-y-2.5">
                            {QUESTIONS[currentQuestion].options.map((opt) => {
                              const isSelected = selectedAnswer === opt.id;
                              const isCorrect = QUESTIONS[currentQuestion].correct === opt.id;
                              
                              // Minimalist button states
                              let buttonState = "bg-white/40 hover:bg-white border border-slate-100 text-[#5A607A] hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.04)]";
                              
                              if (selectedAnswer) {
                                if (isSelected && isCorrect) buttonState = "bg-emerald-50/50 border-emerald-200 text-emerald-700";
                                else if (isSelected && !isCorrect) buttonState = "bg-red-50/50 border-red-200 text-red-700";
                                else if (isCorrect) buttonState = "bg-white/40 border-emerald-100 text-emerald-600 opacity-50"; 
                                else buttonState = "bg-transparent border-transparent text-slate-300 opacity-30";
                              }

                              return (
                                <button 
                                  key={opt.id}
                                  onClick={() => handleSelect(opt.id)}
                                  disabled={!!selectedAnswer}
                                  className={cn(
                                    "w-full p-3.5 rounded-xl text-left transition-all duration-300 flex items-center justify-between group font-mono text-[13px]",
                                    buttonState
                                  )}
                                >
                                  <div className="flex items-center gap-4">
                                    <div className={cn(
                                      "w-6 h-6 rounded flex items-center justify-center text-[11px] font-sans font-bold transition-colors",
                                      selectedAnswer ? (isSelected ? (isCorrect ? "bg-emerald-500 text-white" : "bg-red-500 text-white") : "bg-slate-200 text-slate-400") : "bg-slate-100 text-slate-400 group-hover:bg-[#5B4CF5]/10 group-hover:text-[#5B4CF5]"
                                    )}>
                                      {opt.id}
                                    </div>
                                    <span className="truncate">{opt.text}</span>
                                  </div>
                                  
                                  {selectedAnswer && isSelected && (
                                    isCorrect ? <CheckCircle2 className="w-4 h-4 text-emerald-600" /> : <XCircle className="w-4 h-4 text-red-600" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                          
                          {/* Ultra-minimal Progress Bar */}
                          <div className="w-full h-1 bg-slate-100 rounded-full mt-2 overflow-hidden relative">
                            <motion.div 
                              className="absolute top-0 left-0 h-full bg-[#5B4CF5] rounded-full"
                              initial={{ width: `${(currentQuestion / QUESTIONS.length) * 100}%` }}
                              animate={{ width: `${((currentQuestion + (selectedAnswer ? 1 : 0)) / QUESTIONS.length) * 100}%` }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                            />
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div 
                          key="success"
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex flex-col items-center justify-center text-center gap-5 py-8"
                        >
                          <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-inner">
                            <Activity className="w-8 h-8 text-emerald-500" />
                          </div>
                          
                          <div>
                            <h4 className="text-2xl font-display font-black text-[#0F1533] mb-1">
                              Compilation Successful
                            </h4>
                            <p className="text-[#5A607A] text-[15px]">
                              Tests passed: <strong className="text-[#5B4CF5] mx-1">{score}/{QUESTIONS.length}</strong> 
                            </p>
                          </div>
                          
                          <button 
                            onClick={resetSandbox}
                            className="mt-2 h-10 px-6 rounded-full bg-slate-100 text-slate-600 text-[13px] font-bold hover:bg-slate-200 transition-colors flex items-center gap-2 group"
                          >
                            <Terminal className="w-3.5 h-3.5" />
                            Restart Kernel
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                 </div>
               </div>
            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}

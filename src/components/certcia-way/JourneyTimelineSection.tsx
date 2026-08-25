import { Reveal } from "@/components/campus/Reveal";
import { VAvatar } from "@/components/campus/VAvatar";
import { cn } from "@/lib/utils";
import { 
  CheckSquare, 
  Gamepad2, BookOpen, Star, ShieldCheck,
  TrendingUp, Compass, Activity, Calendar,
  GraduationCap, Briefcase, Trophy, Target,
  Microscope, Users, Laptop, FileBadge,
  Medal, Clock, Building2, Rocket,
  Award, HeartHandshake, BriefcaseBusiness
} from "lucide-react";
import { motion, useScroll, useTransform, useMotionValueEvent, useSpring } from "framer-motion";
import { useRef, useState } from "react";

// Import the specific point_right image requested by the user
import avatarPointRight from "@/assets/avatars/point_right.png";

type TimelineStep = {
  id: string;
  subtitle: string;
  title: string;
  description: string;
  reaction: "hi" | "point" | "think" | "stand" | "stare";
  customImageSrc?: string;
  mainIcon: React.ElementType; // New field for the sleek badge
  benefits: { icon: React.ElementType; text: string }[];
};

const TIMELINE_STEPS: TimelineStep[] = [
  {
    id: "01",
    subtitle: "BUILD CURIOSITY",
    title: "Elementary School",
    description: "Spark curiosity and build a strong foundation through fun, interactive learning experiences that make every day exciting.",
    reaction: "hi" as const,
    mainIcon: Gamepad2,
    benefits: [
      { icon: Gamepad2, text: "Engaging lessons that make learning fun" },
      { icon: BookOpen, text: "Build reading, math, and critical thinking skills" },
      { icon: Star, text: "Earn points, badges, and rewards" },
      { icon: ShieldCheck, text: "Safe, ad-free environment for young learners" }
    ]
  },
  {
    id: "02",
    subtitle: "BUILD CONFIDENCE",
    title: "Middle School",
    description: "Explore new subjects, develop stronger study habits, and gain the confidence to take on bigger challenges.",
    reaction: "think" as const,
    mainIcon: Compass,
    benefits: [
      { icon: TrendingUp, text: "Strengthen core academic skills" },
      { icon: Compass, text: "Discover interests and new passions" },
      { icon: Activity, text: "Interactive quizzes and real-time feedback" },
      { icon: Calendar, text: "Build study habits that last" }
    ]
  },
  {
    id: "03",
    subtitle: "PREPARE FOR THE FUTURE",
    title: "High School",
    description: "Take your learning further with advanced topics, skill-building labs, and tools to prepare for college and beyond.",
    reaction: "stand" as const,
    mainIcon: GraduationCap,
    benefits: [
      { icon: GraduationCap, text: "Advanced courses and AP-aligned content" },
      { icon: Briefcase, text: "College & career readiness resources" },
      { icon: Trophy, text: "Projects, competitions & leaderboards" },
      { icon: Target, text: "Track progress and set goals" }
    ]
  },
  {
    id: "04",
    subtitle: "ACHIEVE YOUR GOALS",
    title: "College",
    description: "Master complex concepts, collaborate on real-world projects, and gain the skills employers value most.",
    reaction: "point" as const,
    customImageSrc: avatarPointRight,
    mainIcon: Microscope,
    benefits: [
      { icon: Microscope, text: "University-level courses and labs" },
      { icon: Users, text: "Collaborate and build real-world projects" },
      { icon: Laptop, text: "Industry tools and AI-powered support" },
      { icon: FileBadge, text: "Certificates to showcase your skills" }
    ]
  },
  {
    id: "05",
    subtitle: "LEAD AND INNOVATE",
    title: "Professional",
    description: "Upskill, specialize, and stay ahead in your career with expert-led training and industry-recognized credentials.",
    reaction: "stare" as const,
    mainIcon: Building2,
    benefits: [
      { icon: Building2, text: "In-demand professional courses" },
      { icon: Clock, text: "Learn at your own pace, on your schedule" },
      { icon: Medal, text: "Industry-recognized certifications" },
      { icon: Rocket, text: "Advance your career and earning potential" }
    ]
  },
  {
    id: "06",
    subtitle: "LIFELONG SUCCESS",
    title: "Career",
    description: "Unlock your full potential with continuous growth, elite mentorship, and career-defining opportunities that last a lifetime.",
    reaction: "point" as const,
    customImageSrc: avatarPointRight,
    mainIcon: BriefcaseBusiness,
    benefits: [
      { icon: BriefcaseBusiness, text: "Top-tier career placement assistance" },
      { icon: Users, text: "Lifelong exclusive community access" },
      { icon: Award, text: "Alumni networking and VIP events" },
      { icon: HeartHandshake, text: "Continuous mentorship and skill upgrades" }
    ]
  }
];

export function JourneyTimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end 90%"] // Finishes drawing line when the bottom is still fully visible
  });

  // Smooth out the scroll progress to eliminate jitter/shaking on the avatar's movement
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const lineHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  
  // Create a separate scroll progress for visibility
  const { scrollYProgress: visibilityProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 80%"] // Fades out exactly as the user scrolls past the bottom of the track
  });

  const smoothVisibility = useSpring(visibilityProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Fade in immediately, fade out exactly at the end
  const trackOpacity = useTransform(smoothVisibility, [0, 0.05, 0.9, 1], [0, 1, 1, 0]);
  const avatarScale = useTransform(smoothVisibility, [0, 0.05, 0.9, 1], [0.8, 1, 1, 0.8]);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Update active step calculation for 6 steps
    if (latest < 0.16) setCurrentStepIndex(0);
    else if (latest < 0.33) setCurrentStepIndex(1);
    else if (latest < 0.5) setCurrentStepIndex(2);
    else if (latest < 0.66) setCurrentStepIndex(3);
    else if (latest < 0.83) setCurrentStepIndex(4);
    else setCurrentStepIndex(5);
  });

  return (
    <section className="relative px-4 pt-8 pb-10 sm:px-6 lg:px-8 bg-[#F7F8FC] overflow-hidden font-sans border-t border-slate-200">
      
      {/* Subtle Background Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Ultra-Clean Premium Header Section */}
        <Reveal>
          <div className="flex flex-col md:flex-row items-center gap-10 mb-16 relative text-center md:text-left z-10 pt-0">
            <div className="flex-1 relative z-10">
              
              {/* Minimalist Floating Badge */}
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200/80 text-[#5B4CF5] text-[10px] font-bold uppercase tracking-widest mb-6 bg-white shadow-sm cursor-default"
              >
                <CheckSquare className="w-3 h-3" />
                YOUR JOURNEY, OUR MISSION
              </motion.div>
              
              {/* STRICTLY 2-LINE TYPOGRAPHY */}
              <h2 className="font-display text-4xl md:text-[56px] font-bold leading-[1.15] text-[#0F1533] tracking-tight mb-6">
                Learning for <span className="text-[#5B4CF5]">every</span> stage.<br />
                Growth for <span className="text-[#5B4CF5]">every</span> future.
              </h2>
              
              <p className="max-w-lg text-[15px] md:text-[17px] leading-relaxed text-[#5A607A] font-medium mx-auto md:mx-0">
                Certcia's learning pathways are designed to grow with you—building real skills, confidence, and opportunities at every step of your journey.
              </p>
            </div>
            
            {/* Right Header Graphic - "The Certcia Way" Abstract */}
            <div className="hidden md:flex flex-shrink-0 relative w-96 h-96 justify-center items-center group">
              <div className="absolute inset-0 bg-[#5B4CF5]/5 rounded-full blur-3xl z-0" />
              
              <div className="relative w-full h-full">
                {/* Card 1 (Back - High School) */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
                  className="absolute top-12 right-12 w-48 h-24 bg-white/60 backdrop-blur-md rounded-2xl border border-white shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-4 flex items-center gap-3 rotate-12"
                >
                   <div className="w-10 h-10 rounded-full bg-[#0D9488]/10 flex items-center justify-center">
                     <GraduationCap className="w-5 h-5 text-[#0D9488]" />
                   </div>
                   <div>
                     <div className="w-20 h-2 bg-slate-200 rounded-full mb-2" />
                     <div className="w-12 h-2 bg-slate-100 rounded-full" />
                   </div>
                </motion.div>

                {/* Card 2 (Middle - Middle School) */}
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute top-36 left-4 w-56 h-28 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-[0_15px_40px_rgba(0,0,0,0.08)] p-5 flex items-center gap-4 -rotate-6 z-10"
                >
                   <div className="w-12 h-12 rounded-full bg-[#2563EB]/10 flex items-center justify-center">
                     <Compass className="w-6 h-6 text-[#2563EB]" />
                   </div>
                   <div>
                     <div className="w-24 h-2.5 bg-slate-200 rounded-full mb-2" />
                     <div className="w-16 h-2 bg-slate-100 rounded-full" />
                   </div>
                </motion.div>

                {/* Card 3 (Front - Professional) */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute bottom-12 right-4 w-64 h-32 bg-white rounded-2xl border border-slate-100 shadow-[0_20px_50px_rgba(91,76,245,0.15)] p-6 flex flex-col justify-center gap-3 z-20"
                >
                   <div className="flex items-center gap-3">
                     <div className="w-10 h-10 rounded-full bg-[#5B4CF5]/10 flex items-center justify-center">
                       <Trophy className="w-5 h-5 text-[#5B4CF5]" />
                     </div>
                     <div className="flex-1">
                       <div className="text-[10px] font-bold text-[#5B4CF5] tracking-widest mb-1">THE WAY</div>
                       <div className="w-24 h-3 bg-[#0F1533] rounded-full" />
                     </div>
                   </div>
                   <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden mt-2">
                     <div className="w-2/3 h-full bg-[#5B4CF5] rounded-full" />
                   </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Timeline Layout */}
        <div className="relative mt-12 pb-4" ref={containerRef}>
          
          {/* Base Track Line - Shifted right slightly to give massive avatar room */}
          <motion.div 
            className="absolute left-10 md:left-[80px] top-4 bottom-0 w-[4px] -translate-x-1/2 bg-slate-200/80 rounded-full" 
            style={{ opacity: trackOpacity }}
          />
          
          {/* Animated Progress Line - Monochrome Purple */}
          <motion.div 
            className="absolute left-10 md:left-[80px] top-4 w-[4px] -translate-x-1/2 bg-[#5B4CF5] origin-top rounded-full shadow-[0_0_12px_rgba(91,76,245,0.5)]"
            style={{ height: lineHeight, opacity: trackOpacity }}
          />

          {/* TRULY MASSIVE TRAVELING AVATAR (Now properly centered and fading out) */}
          <motion.div 
            className="absolute left-10 md:left-[80px] top-0 z-50 -translate-x-1/2 -translate-y-1/2 origin-center"
            style={{ top: lineHeight, opacity: trackOpacity, scale: avatarScale }}
          >
            {/* Removed the negative margin (-mt-24) so it doesn't bleed into the header view */}
            <div className="relative flex items-center justify-center transition-transform duration-300 hover:scale-[1.05]">
               {/* Massive Ambient Glow */}
               <div className="absolute inset-0 bg-white/80 rounded-full blur-[40px] opacity-100" />
               <VAvatar 
                 size="hero" 
                 reaction={TIMELINE_STEPS[currentStepIndex].reaction}
                 customImageSrc={TIMELINE_STEPS[currentStepIndex].customImageSrc}
                 className="relative z-10 drop-shadow-[0_30px_40px_rgba(0,0,0,0.4)] scale-110 origin-center" 
               />
            </div>
          </motion.div>

          <div className="space-y-20 pt-16">
            {TIMELINE_STEPS.map((step, index) => {
              const isActive = currentStepIndex >= index;
              
              return (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  key={step.id} 
                  className="relative flex flex-col md:flex-row items-start pl-28 md:pl-[200px] group cursor-default"
                >
                  
                  {/* Number Node on the line */}
                  <div className={cn(
                    "absolute left-10 md:left-[80px] top-8 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 z-10 shadow-sm border-2",
                    isActive ? "bg-[#5B4CF5] text-white border-[#5B4CF5] scale-110" : "bg-white text-slate-400 border-slate-200 scale-100"
                  )}>
                    {step.id}
                  </div>

                  {/* Dense, Premium "Wow" Card */}
                  <div 
                    className={cn(
                      "w-full max-w-[850px] bg-gradient-to-br from-white to-[#F8F9FC] rounded-[1.25rem] p-6 lg:p-8 flex flex-col lg:flex-row gap-8 lg:gap-10 transition-all duration-500 border overflow-hidden relative",
                      isActive 
                        ? "opacity-100 border-slate-200/80 shadow-[0_8px_30px_-4px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.08)]" 
                        : "opacity-40 border-slate-100 shadow-sm scale-[0.98]"
                    )}
                  >
                    
                    {/* Subtle Background Glow on Active */}
                    {isActive && (
                      <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#5B4CF5]/5 rounded-full blur-[50px] pointer-events-none transition-opacity duration-700" />
                    )}
                    
                    {/* Premium Watermark Number */}
                    <div className="absolute -bottom-4 -left-4 text-[120px] font-display font-black text-slate-900 opacity-[0.03] pointer-events-none select-none z-0 tracking-tighter leading-none">
                      {step.id}
                    </div>

                    {/* Left: Content */}
                    <div className="flex-1 flex flex-col justify-center relative z-10">
                       <div className="flex items-center gap-3 mb-4">
                         {/* Sleek Icon Badge */}
                         <div className={cn(
                           "w-9 h-9 rounded-[10px] flex items-center justify-center transition-colors duration-500 shadow-sm",
                           isActive ? "bg-[#5B4CF5]/10 text-[#5B4CF5] border border-[#5B4CF5]/20" : "bg-slate-50 text-slate-300 border border-slate-100"
                         )}>
                           <step.mainIcon className="w-4 h-4" />
                         </div>
                         <span className={cn(
                           "font-black text-[10px] uppercase tracking-[0.2em] transition-colors duration-500",
                           isActive ? "text-[#5B4CF5]" : "text-slate-400"
                         )}>
                           {step.subtitle}
                         </span>
                       </div>
                       
                       <h3 className="font-display text-3xl font-bold text-[#0F1533] mb-3 tracking-tight transition-transform duration-500 group-hover:translate-x-1">
                         {step.title}
                       </h3>
                       
                       <p className="text-[#5A607A] text-[15px] leading-relaxed font-medium">
                         {step.description}
                       </p>
                    </div>

                    {/* Right: Key Benefits List (Sleek Interactive Rows) */}
                    <div className="w-full lg:w-[320px] flex-shrink-0 lg:border-l border-slate-200/60 lg:pl-8 flex flex-col justify-center pt-6 lg:pt-0 border-t lg:border-t-0 relative z-10">
                       <h4 className="text-[#0F1533] font-bold text-[11px] uppercase tracking-wider mb-4 opacity-80">
                         Key Benefits
                       </h4>
                       <div className="space-y-1.5">
                         {step.benefits.map((benefit, i) => (
                           <div key={i} className={cn(
                             "flex items-center gap-3 p-2.5 rounded-lg transition-all duration-300 border border-transparent group/item",
                             isActive ? "hover:bg-white hover:border-slate-100 hover:shadow-sm" : ""
                           )}>
                             <div className={cn(
                               "w-7 h-7 rounded-full flex flex-shrink-0 items-center justify-center transition-all duration-300 shadow-sm group-hover/item:scale-110",
                               isActive ? "bg-[#5B4CF5]/10 text-[#5B4CF5]" : "bg-slate-50 text-slate-300"
                             )}>
                               <benefit.icon className="w-3.5 h-3.5" />
                             </div>
                             <span className="text-[13px] font-semibold text-slate-600 leading-tight transition-colors duration-300 group-hover/item:text-[#0F1533]">
                               {benefit.text}
                             </span>
                           </div>
                         ))}
                       </div>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}

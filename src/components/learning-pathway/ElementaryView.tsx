import { ArrowRight, CheckCircle2, ChevronRight, Clock, GraduationCap, Rocket, Search, Shield, Trophy, Users, Brain } from "lucide-react";
import HiMascot from "@/assets/avatars/hi.png";

export function ElementaryView() {
  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-8 lg:px-10 pb-12 space-y-12">
        {/* HERO SECTION */}
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#291A6E] via-[#7B3258] to-[#EE6B18] px-8 py-8 sm:px-12 md:py-10 text-white shadow-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold backdrop-blur-sm tracking-wide">
                <GraduationCap className="h-3.5 w-3.5" />
                ELEMENTARY
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight">
                Discover, Experiment &<br />Create with <span className="text-[#FF9800]">AI</span>
              </h1>

              <p className="text-base md:text-[17px] text-white/90 max-w-lg leading-relaxed font-medium">
                Hands-on STEM and creative projects for young learners building digital skills, coding basics, and critical thinking.
              </p>

              <button className="mt-2 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#291A6E] transition-transform hover:scale-105 shadow-md">
                Explore Elementary Courses
                <ArrowRight className="h-4 w-4" />
              </button>

              {/* Divider and Badges */}
              <div className="pt-8 border-t border-white/10 mt-4 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] font-semibold text-white tracking-wide">
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 opacity-70" strokeWidth={1.5} />
                  Age-Appropriate Learning
                </div>
                <div className="flex items-center gap-2">
                  <Trophy className="h-4 w-4 opacity-70" strokeWidth={1.5} />
                  Project-Based Activities
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 opacity-70" strokeWidth={1.5} />
                  Safe & Supportive Environment
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center lg:justify-end h-full items-start">
              {/* The thin glass container */}
              <div className="relative w-full max-w-[360px] h-[360px] -mb-16 lg:-mb-20 rounded-[24px] border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center mr-4 lg:mr-6 mt-10 lg:mt-4">
                {/* Speech Bubble */}
                <div className="absolute -top-4 -right-4 z-30 bg-[#FBF9F6] text-[#0F1533] font-bold p-3.5 px-4 rounded-[14px] rounded-bl-none shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] max-w-[160px] text-[11px] leading-relaxed border border-gray-100">
                  Hi there! Let's learn<br />something <span className="text-[#EE6B18]">amazing</span><br />together!
                </div>

                {/* Avatar Image - Overflowing */}
                <img src={HiMascot} alt="V Mascot" className="absolute bottom-0 w-[95%] max-w-[300px] h-auto object-contain object-bottom z-20 pointer-events-none drop-shadow-2xl" />

                {/* Decorative floating elements specific to the container */}
                <div className="absolute -bottom-8 -right-8 opacity-80">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18M3 12h18M12 8l4-4M12 8L8 4M12 16l4 4M12 16l-4 4" />
                  </svg>
                </div>
                <div className="absolute bottom-12 -right-6 opacity-80">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M12 2L15 9L22 9L16 14L18 21L12 17L6 21L8 14L2 9L9 9L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative background dashed path & stars */}
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <svg className="absolute top-12 left-8 text-white w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v18M3 12h18M12 8l4-4M12 8L8 4M12 16l4 4M12 16l-4 4" />
            </svg>
            <svg className="absolute top-16 right-[35%] text-white w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 3v18M3 12h18M12 8l4-4M12 8L8 4M12 16l4 4M12 16l-4 4" />
            </svg>
            {/* Faint dashed line */}
            <svg className="absolute top-[20%] right-0 w-[80%] h-auto opacity-15 pointer-events-none" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,50 C200,100 300,350 800,250" stroke="white" strokeWidth="2" strokeDasharray="6 8" fill="none" />
            </svg>
          </div>
        </div>

        {/* FEATURED TRACKS */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#0F1533]">Featured Certification Tracks</h2>
              <p className="text-[#5A607A] text-sm mt-1 font-medium">Curriculum validated by industry leaders and educators.</p>
            </div>
            <div className="hidden sm:inline-flex rounded-full border border-gray-200 bg-white px-5 py-2 text-[13px] font-bold text-gray-700 shadow-sm">
              3 Courses Available
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6">
            {/* Track 1 (Larger) */}
            <div className="lg:col-span-7 group relative overflow-hidden rounded-[24px] bg-[#1A1A1A] shadow-sm transition-shadow hover:shadow-md border border-gray-200 flex flex-col h-[280px]">
              <img src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80" alt="Robotics" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0D1F]/95 via-[#0A0D1F]/40 to-transparent" />

              <div className="relative z-10 p-6 sm:p-7 flex flex-col h-full justify-between">
                <div className="flex items-center gap-3">
                  <span className="rounded-full bg-black/10 backdrop-blur-md px-3.5 py-1 text-[9px] font-bold text-white uppercase tracking-wider border border-white/60">PROGRAMMING</span>
                  <span className="rounded-full bg-black/10 backdrop-blur-md px-3.5 py-1 text-[9px] font-bold text-white uppercase tracking-wider border border-white/60 flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#FF8C00]"></div> K-5
                  </span>
                </div>

                <div className="w-full">
                  <h3 className="text-[26px] font-extrabold text-white leading-tight mb-1.5 tracking-tight">Block Coding & AI Robotics</h3>
                  <p className="text-white/90 text-[13px] font-medium max-w-lg mb-4">Mechanism Academy curriculum maturing under K-12 strategy.</p>

                  <div className="flex items-center justify-between border-t border-white/20 pt-4">
                    <div className="flex items-center gap-6 text-xs font-bold text-white">
                      <div className="flex items-center gap-2"><Clock className="h-4 w-4 opacity-70" /> 8 Weeks</div>
                      <div className="flex items-center gap-2"><Users className="h-4 w-4 opacity-70" /> 2,300+ Enrolled</div>
                    </div>
                    <button className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-[12px] font-bold text-[#0F1533] transition-colors hover:bg-gray-100 shadow-sm">
                      View Course <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Track 2 (Smaller) */}
            <div className="lg:col-span-5 group relative overflow-hidden rounded-[24px] bg-white shadow-sm transition-shadow hover:shadow-md border border-gray-200 flex flex-col h-[280px]">
              <div className="h-[42%] relative overflow-hidden bg-gray-100 shrink-0">
                <img src="https://images.unsplash.com/photo-1546776310-eef45dd6d63c?auto=format&fit=crop&w=600&q=80" alt="Robot Hand" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute bottom-3 left-5 rounded-full bg-black/10 backdrop-blur-sm px-3 py-1 text-[8px] font-bold text-white uppercase tracking-wider border border-white/60 shadow-sm">
                  CREATIVE ARTS
                </div>
                <div className="absolute bottom-3 right-5 text-white font-bold text-[10px] tracking-widest uppercase drop-shadow-md">
                  ASIMO
                </div>
              </div>
              <div className="flex-1 p-5 sm:px-6 sm:py-4 flex flex-col justify-between">
                <div>
                  <h3 className="text-[17px] font-extrabold text-[#0F1533] leading-tight mb-1">Digital Storytelling with AI</h3>
                  <p className="text-[#5A607A] text-[11px] font-semibold leading-relaxed">Build stories, art, and image generation.</p>
                  <ul className="text-[11px] text-[#0F1533] font-semibold mt-3">
                    <li className="flex items-start gap-2.5">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="#FF7043" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5 drop-shadow-sm"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                      <span className="leading-relaxed opacity-90 max-w-[200px]">Write, illustrate, and animate stories using easy-to-use AI generative tools.</span>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-end">
                  <button className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-gray-50 text-[#FF7043] transition-colors hover:bg-gray-100 shadow-sm">
                    <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* HYBRID SPLIT LAYOUT */}
        <div className="relative mt-12 mb-8">
          {/* Background decorations */}
          <div className="absolute -top-10 -left-20 w-[400px] h-[400px] bg-[#7F55E0]/10 rounded-full blur-[80px] pointer-events-none z-0"></div>
          <div className="absolute bottom-10 -right-20 w-[300px] h-[300px] bg-[#EE6B18]/10 rounded-full blur-[100px] pointer-events-none z-0"></div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            
            {/* Left Side: Modern Card */}
            <div className="lg:col-span-5 relative group w-full max-w-md mx-auto lg:max-w-none">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#7F55E0] to-[#EE6B18] rounded-[32px] blur-xl opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative rounded-[32px] overflow-hidden bg-white shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100/50 flex flex-col">
                <div className="h-[220px] relative overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80" alt="STEM Foundations" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center rounded-full bg-black/40 backdrop-blur-md px-3 py-1.5 text-[10px] font-extrabold text-white uppercase tracking-wider border border-white/20 shadow-sm">
                      STEM FOUNDATIONS
                    </span>
                  </div>
                </div>
                <div className="p-7 sm:p-8 flex flex-col flex-grow bg-white">
                  <h3 className="text-[22px] sm:text-[24px] font-extrabold text-[#0F1533] leading-tight mb-3">
                    MSA Elementary <br/>STEM Bridge
                  </h3>
                  <p className="text-[#5A607A] text-[13px] font-medium leading-relaxed mb-8">
                    The building playground for Middle School. Critical thinking, data analysis, and hands-on projects.
                  </p>
                  
                  <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex gap-3 items-center">
                      <div className="shrink-0 h-6 w-6 rounded-full bg-[#7F55E0]/10 flex items-center justify-center">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#7F55E0]" />
                      </div>
                      <p className="text-[12px] text-[#0F1533] font-bold">Real-world ready</p>
                    </div>
                    <button className="flex items-center justify-center gap-2 rounded-full bg-[#7F55E0] px-5 py-2 text-[12px] font-bold text-white transition-all hover:bg-[#6c42cc] shadow-md shadow-[#7F55E0]/20 hover:-translate-y-0.5">
                      Start <ChevronRight className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side: Floating Features */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="mb-8 relative text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#0F1533] leading-[1.15] tracking-tight mb-4">
                  Why Elementary<br className="hidden lg:block"/>Learners <span className="text-[#7F55E0]">Love Certcia</span>
                </h2>
                <p className="text-[#5A607A] font-medium text-[15px] max-w-lg mx-auto lg:mx-0">
                  A perfect blend of hands-on creativity and digital innovation designed specifically for young, curious minds.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-6 relative">
                {/* Decorative Dot Grid */}
                <div className="absolute -top-12 -right-4 opacity-40 hidden md:block pointer-events-none">
                  <svg width="60" height="40" viewBox="0 0 60 40" fill="#FFB020">
                    <circle cx="4" cy="4" r="2" /><circle cx="16" cy="4" r="2" /><circle cx="28" cy="4" r="2" /><circle cx="40" cy="4" r="2" /><circle cx="52" cy="4" r="2" />
                    <circle cx="4" cy="16" r="2" /><circle cx="16" cy="16" r="2" /><circle cx="28" cy="16" r="2" /><circle cx="40" cy="16" r="2" /><circle cx="52" cy="16" r="2" />
                    <circle cx="4" cy="28" r="2" /><circle cx="16" cy="28" r="2" /><circle cx="28" cy="28" r="2" /><circle cx="40" cy="28" r="2" /><circle cx="52" cy="28" r="2" />
                  </svg>
                </div>

                {/* Feature 1 */}
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                  <div className="shrink-0 h-12 w-12 rounded-[14px] bg-white border border-[#E9DDFF] shadow-sm flex items-center justify-center text-[#7F55E0]">
                    <Rocket className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#0F1533] text-[16px] mb-1.5">Hands-On Projects</h5>
                    <p className="text-[13px] text-[#5A607A] font-medium leading-relaxed">Build, tinker, and create with real-world tools.</p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                  <div className="shrink-0 h-12 w-12 rounded-[14px] bg-white border border-[#FFEAF0] shadow-sm flex items-center justify-center text-[#F24E6D]">
                    <Brain className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#0F1533] text-[16px] mb-1.5">AI-Powered Learning</h5>
                    <p className="text-[13px] text-[#5A607A] font-medium leading-relaxed">Engaging AI experiences tailored for kids.</p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                  <div className="shrink-0 h-12 w-12 rounded-[14px] bg-white border border-[#EBF4FF] shadow-sm flex items-center justify-center text-[#3587EA]">
                    <Users className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#0F1533] text-[16px] mb-1.5">Safe & Guided</h5>
                    <p className="text-[13px] text-[#5A607A] font-medium leading-relaxed">Expert mentors and 24/7 guided support.</p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start text-center sm:text-left">
                  <div className="shrink-0 h-12 w-12 rounded-[14px] bg-white border border-[#FFF2E5] shadow-sm flex items-center justify-center text-[#F58220]">
                    <Trophy className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h5 className="font-extrabold text-[#0F1533] text-[16px] mb-1.5">Earn & Celebrate</h5>
                    <p className="text-[13px] text-[#5A607A] font-medium leading-relaxed">Badges, certificates, and achievements.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FLOATING CTA BANNER */}
        <div className="w-full max-w-[900px] mx-auto mt-16 mb-4 relative z-10">
          <div className="rounded-[20px] bg-white p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgb(0,0,0,0.06)] border border-[#E9DDFF]">
            
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 flex-1">
              <div className="shrink-0">
                <div className="h-14 w-14 rounded-full bg-[#F5EDFD] flex items-center justify-center text-[#7F55E0] shadow-sm">
                  <GraduationCap className="h-6 w-6" strokeWidth={1.5} />
                </div>
              </div>
              <div className="flex flex-col justify-center pt-1">
                <h2 className="text-[16px] md:text-[18px] font-extrabold text-[#0F1533] mb-1.5 tracking-tight">
                  Preparing young minds today for the innovators of tomorrow.
                </h2>
                <p className="text-[#5A607A] font-medium text-[13px]">
                  Empower curiosity. Build confidence. Create the future.
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full sm:w-auto mt-2 md:mt-0">
              <button className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#7F55E0] text-white font-bold text-[13px] shadow-sm shadow-[#7F55E0]/20 transition-all hover:-translate-y-0.5 hover:bg-[#6c42cc] flex items-center justify-center gap-2">
                Explore the Program <ChevronRight className="h-4 w-4" strokeWidth={2.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

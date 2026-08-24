import { createFileRoute, Link } from "@tanstack/react-router";
import { COURSES_DATA } from "@/lib/courses";
import { Star, Check, PlayCircle, Monitor, FileText, Download, Award, ChevronRight, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/CartContext";
import certciaVideo from "@/assets/certcia.mp4";

export const Route = createFileRoute("/course/$courseId")({
  component: CourseLandingPage,
});

function CourseLandingPage() {
  const { courseId } = Route.useParams();
  const course = COURSES_DATA.find((c) => c.id === courseId);
  const [expandedSections, setExpandedSections] = useState<number[]>([0]); // Expand first by default
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const { addToCart, isInCart } = useCart();

  if (!course) {
    return (
      <div className="min-h-screen pt-20 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link to="/learning" className="mt-4 text-[#5B4CF5] hover:underline">
          Back to Explore
        </Link>
      </div>
    );
  }

  const toggleSection = (index: number) => {
    setExpandedSections(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1D1F] relative">
      
      {/* Full-width dark background for hero */}
      <div className="absolute top-0 left-0 right-0 h-[480px] bg-gradient-to-br from-slate-950 via-[#0F1533] to-slate-900 overflow-hidden z-0">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] pointer-events-none" />
      </div>

      {/* Unified Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 pb-20 pt-28 md:pt-32 relative z-10">
        
        {/* Left Column (Hero Content + Main Content) */}
        <div className="lg:col-span-2">
          
          {/* --- HERO CONTENT (White text on dark bg) --- */}
          <div className="pb-16 md:pb-24">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm text-indigo-200/80 mb-6 font-medium w-fit px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
              <Link to="/learning" className="hover:text-white cursor-pointer transition-colors">Explore Pathways</Link>
              <ChevronRight className="h-4 w-4" />
              <span className="hover:text-white cursor-pointer transition-colors">{course.category}</span>
              <ChevronRight className="h-4 w-4" />
              <span className="hover:text-white cursor-pointer transition-colors text-white">{course.title.split(":")[0]}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6 max-w-3xl tracking-tight">
              {course.title}
            </h1>
            
            <p className="text-[18px] text-indigo-100/90 leading-relaxed max-w-3xl font-medium">
              {course.subtitle}
            </p>
          </div>

          {/* --- MAIN CONTENT (Dark text on white bg) --- */}
          <div className="pt-8">
            
            {/* Meta Info Box (Half-centered over the boundary) */}
            <div className="flex items-center gap-4 text-sm text-[#424446] mb-12 p-4 bg-white shadow-xl shadow-black/5 rounded-xl border border-gray-200 overflow-x-auto whitespace-nowrap scrollbar-hide relative z-20 -mt-10 md:-mt-16">
              <div className="flex items-center gap-2 bg-orange-50 text-orange-700 border border-orange-200 font-bold px-2.5 py-1 text-xs rounded-md shrink-0">
                <Award className="h-4 w-4" /> Nanodegree Program
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Monitor className="h-4 w-4 text-gray-500" /> 
                <span>Intermediate</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <div className="h-4 w-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-500">L</div>
                <span>{course.hours} hours</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <Star className="h-4 w-4 fill-orange-400 text-orange-400" />
                <span className="font-bold text-[#1C1D1F]">{course.rating}</span>
                <span className="text-[#5B4CF5] hover:underline cursor-pointer">({course.ratingCount})</span>
              </div>
              <div className="flex items-center gap-1.5 shrink-0">
                <FileText className="h-4 w-4 text-gray-500" />
                <span>Updated: {course.updatedDate}</span>
              </div>
            </div>

          {/* Skills you'll learn */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1C1D1F]">Skills you'll learn</h2>
              <span className="text-sm text-gray-500 flex items-center gap-1"><Award className="h-4 w-4" /> {course.whatYouWillLearn.length + 3} skills</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {course.whatYouWillLearn.map((item, i) => (
                <div key={i} className="px-3 py-1.5 bg-[#F7F9FA] border border-black/5 rounded-md text-[13px] text-[#424446] font-medium hover:bg-gray-100 transition-colors">
                  {item.split(" ").slice(0, 4).join(" ")}...
                </div>
              ))}
              <div className="px-3 py-1.5 bg-[#F7F9FA] border border-black/5 rounded-md text-[13px] text-[#424446] font-medium hover:bg-gray-100 transition-colors">Generative AI</div>
              <div className="px-3 py-1.5 bg-[#F7F9FA] border border-black/5 rounded-md text-[13px] text-[#424446] font-medium hover:bg-gray-100 transition-colors">Machine Learning</div>
              <div className="px-3 py-1.5 bg-[#F7F9FA] border border-black/5 rounded-md text-[13px] text-[#424446] font-medium hover:bg-gray-100 transition-colors">Data Analysis</div>
              <button className="px-3 py-1.5 text-[13px] text-[#5B4CF5] font-bold hover:underline">
                +4 More
              </button>
            </div>
          </div>

          {/* Prerequisites */}
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1C1D1F]">Prerequisites</h2>
              <span className="text-sm text-gray-500 flex items-center gap-1"><Check className="h-4 w-4" /> {course.requirements.length} prerequisites</span>
            </div>
            <p className="text-[14px] text-[#424446] mb-4">Prior to enrolling, you should have the following knowledge:</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {course.requirements.map((req, i) => (
                <div key={i} className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 rounded-md text-[13px] font-bold hover:bg-blue-100 transition-colors">
                  {req.split(" ").slice(0, 3).join(" ")}
                </div>
              ))}
              <button className="px-3 py-1.5 text-[13px] text-[#5B4CF5] font-bold hover:underline">
                +1 More
              </button>
            </div>
            <p className="text-[14px] text-[#424446]">You will also need to be able to communicate fluently and professionally in <strong>written and spoken English</strong>.</p>
          </div>

          {/* Program Outline (Curriculum) */}
          <div className="mb-14">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <h2 className="text-2xl font-bold text-[#1C1D1F]">Program Outline</h2>
              <div className="flex items-center gap-4 text-sm text-[#424446] font-medium">
                <span className="flex items-center gap-1.5"><Monitor className="h-4 w-4" /> {course.curriculum.length} courses</span>
                <span className="flex items-center gap-1.5"><FileText className="h-4 w-4" /> {course.curriculum.reduce((acc, curr) => acc + curr.lectures, 0)} lessons</span>
                <span className="flex items-center gap-1.5"><Award className="h-4 w-4" /> 4 projects</span>
              </div>
            </div>
            
            <div className="border border-blue-200/60 rounded-xl overflow-hidden bg-white shadow-sm">
              {course.curriculum.map((section, idx) => {
                const isExpanded = expandedSections.includes(idx);
                return (
                  <div key={idx} className="border-b border-blue-100/60 last:border-0">
                    <button 
                      onClick={() => toggleSection(idx)}
                      className="w-full flex items-center justify-between p-5 bg-[#F8FAFC] hover:bg-[#F1F5F9] transition-colors text-left"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-sm font-medium text-gray-500">Course {idx + 1}:</span>
                        <span className="font-bold text-[16px] text-[#1C1D1F]">{section.sectionTitle}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="hidden sm:block px-3 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-500">
                          {section.duration}
                        </div>
                        <ChevronDown className={cn("h-5 w-5 text-blue-600 transition-transform duration-300", isExpanded ? "rotate-180" : "")} />
                      </div>
                    </button>
                    
                    <div 
                      className={cn(
                        "grid transition-all duration-300 ease-in-out",
                        isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="overflow-hidden">
                        <div className="p-6 bg-white space-y-6">
                          <p className="text-[14px] text-[#424446] leading-relaxed max-w-3xl">
                            {idx === 0 ? course.longDescription.slice(0, 150) + "..." : "Master advanced techniques and build robust solutions with hands-on projects and expert feedback loops designed to solve complex problems."}
                          </p>
                          <div className="space-y-0">
                            {Array.from({ length: Math.min(3, section.lectures) }).map((_, lIdx) => (
                              <div key={lIdx} className="group flex flex-col sm:flex-row items-start py-4 border-t border-gray-100 gap-4 text-[14px]">
                                <div className="flex items-start gap-4 sm:w-1/3">
                                  <div className="mt-0.5 h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-[10px] font-bold shrink-0">
                                    L{lIdx + 1}
                                  </div>
                                  <span className="font-bold text-[#1C1D1F]">
                                    {lIdx === 0 ? "Introduction to Concepts and Planning" : "Implementing Advanced Patterns"}
                                  </span>
                                </div>
                                <div className="sm:w-2/3 text-[#424446] leading-relaxed">
                                  Introduces the core concepts of this section, including prerequisites, environment setup, and practical application scenarios.
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="flex justify-center mt-6">
              <button className="flex items-center gap-2 px-6 py-2.5 border border-[#5B4CF5] text-[#5B4CF5] hover:bg-[#F7F8FC] rounded-lg font-bold transition-colors">
                <Download className="h-4 w-4" /> Download Syllabus
              </button>
            </div>
          </div>

          {/* Instructors Mockup */}
          <div className="mb-14 border-t border-black/5 pt-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-[#1C1D1F]">Program Instructors</h2>
              <span className="text-sm text-gray-500 flex items-center gap-1">3 instructors</span>
            </div>
            <p className="text-[14px] text-[#424446] mb-8 max-w-2xl">
              Unlike typical professors, our instructors come from Fortune 500 and Global 2000 companies and have demonstrated leadership and expertise in their professions.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              {[
                { name: "Brian Cruz", title: "Head of AI Engineering" },
                { name: "Peter Kowalchuk", title: "Principal Machine Learning Engineer" },
                { name: course.author, title: "Lead Curriculum Developer" }
              ].map((inst, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-20 h-20 rounded-full bg-gray-200 mb-4 overflow-hidden">
                    <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${inst.name}`} alt={inst.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-[#1C1D1F] text-[15px]">{inst.name}</h3>
                  <p className="text-[12px] text-gray-500 mt-1">{inst.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* About this program */}
          <div className="mb-12 border-t border-black/5 pt-12">
            <h2 className="text-2xl font-bold text-[#1C1D1F] mb-6">About this program</h2>
            <div className="text-[15px] leading-relaxed text-[#424446] space-y-5 max-w-3xl">
              <p>{course.longDescription}</p>
            </div>
          </div>
          </div>
        </div>

        {/* ── STICKY SIDEBAR (Right Column) ─────────────────────────────────── */}
        <div className="hidden lg:block lg:col-span-1 relative z-20">
          {/* Sticky Sidebar */}
          <div className="sticky top-24 pb-10">
            <div className="bg-white border border-gray-200 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.14)] rounded-xl overflow-hidden">
              
              {/* Video Preview Thumbnail */}
              <div 
                className="relative cursor-pointer group bg-slate-900 h-36 overflow-hidden"
                onClick={() => setIsPreviewOpen(true)}
                onMouseEnter={() => setIsHoveringVideo(true)}
                onMouseLeave={() => setIsHoveringVideo(false)}
              >
                {isHoveringVideo ? (
                  <video 
                    src={course.previewVideoUrl || certciaVideo}
                    autoPlay 
                    muted 
                    loop 
                    className="absolute inset-0 w-full h-full object-cover z-0 opacity-80" 
                  />
                ) : (
                  <>
                    <img src={course.previewThumbnailUrl || course.image} alt={course.title} className="absolute inset-0 w-full h-full object-cover z-0 opacity-90" />
                    <div className="absolute inset-0 bg-slate-900/40 mix-blend-multiply z-10" />
                  </>
                )}
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-20 flex flex-col items-center justify-end pb-4 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-md rounded-full p-3 mb-2 transition-transform duration-300 group-hover:scale-110">
                    <PlayCircle className="h-8 w-8 text-white" />
                  </div>
                  <div className="font-bold text-white text-xs tracking-wide">
                    Preview this course
                  </div>
                </div>
              </div>

              {/* Subscription Options */}
              <div className="p-4">
                
                {/* Bundle Option */}
                <div className="border-2 border-[#5B4CF5] bg-[#F7F8FC] rounded-lg p-3 mb-2 relative cursor-pointer">
                  <div className="text-[11px] text-[#424446] font-bold mb-0.5">Subscription - Bundle</div>
                  <div className="flex items-end gap-1">
                    <span className="text-xl font-bold text-[#1C1D1F] tracking-tight">{course.price}</span>
                    <span className="text-xs text-gray-500 mb-1">/ month</span>
                  </div>
                </div>

                {/* Individual Option */}
                <div className="border border-gray-200 rounded-lg p-3 mb-4 hover:border-gray-300 transition-colors cursor-pointer opacity-70">
                  <div className="text-[11px] text-[#424446] font-medium mb-0.5">Individual Course</div>
                  <div className="flex items-end gap-1">
                    <span className="text-lg font-bold text-[#1C1D1F] tracking-tight">₹{(parseFloat(course.price.replace(/[^0-9.]/g, '')) * 3).toLocaleString('en-IN')}</span>
                    <span className="text-[10px] text-gray-500 mb-1">/ one-time payment</span>
                  </div>
                </div>

                {/* Value Props */}
                <div className="mb-4 bg-[#F8FAFC] border border-blue-100 rounded-xl p-4">
                  <div className="text-[15px] font-bold text-[#1C1D1F] mb-1">Subscription - Bundle</div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-gray-400 line-through text-sm">{course.originalPrice}</span>
                    <span className="bg-orange-100 text-orange-800 text-[10px] font-bold px-1.5 py-0.5 rounded flex items-center gap-1">
                      🔥 10% off
                    </span>
                  </div>
                  <div className="flex items-end gap-1 mb-3">
                    <span className="text-2xl font-bold text-[#1C1D1F] tracking-tight">{course.price}</span>
                    <span className="text-xs text-gray-500 mb-1">/ month</span>
                  </div>
                  
                  <ul className="space-y-2 text-[12px] text-[#424446]">
                    <li className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-600 shrink-0" /> Cancel Anytime
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-600 shrink-0" /> Unlimited access to hundreds of top-rated courses
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-600 shrink-0" /> Hands-on projects with expert feedback
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="h-4 w-4 text-blue-600 shrink-0" /> Program Certificates
                    </li>
                  </ul>
                </div>

                {isInCart(course.id) ? (
                  <Link 
                    to="/cart"
                    className="w-full flex items-center justify-center bg-[#5B4CF5] hover:bg-[#4A3BE8] text-white py-3.5 font-bold text-[15px] transition-all rounded-xl shadow-[0_8px_20px_-8px_rgba(91,76,245,0.6)]"
                  >
                    Go to cart
                  </Link>
                ) : (
                  <button 
                    onClick={() => addToCart(course.id)}
                    className="w-full bg-[#3B82F6] hover:bg-[#2563EB] text-white py-3.5 font-bold text-[15px] transition-all rounded-xl shadow-[0_8px_20px_-8px_rgba(59,130,246,0.6)]"
                  >
                    Enroll Now
                  </button>
                )}
                
                <p className="text-[10px] text-gray-400 mt-4 text-center leading-relaxed">
                  *Discount applies to the first year of membership, after which plans are converted to month-to-month.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-12 animate-fade-in">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setIsPreviewOpen(false)}
          />
          
          {/* Modal Container */}
          <div className="relative w-full max-w-5xl rounded-2xl shadow-[0_0_80px_-20px_rgba(91,76,245,0.5)] border border-white/10 bg-slate-950 overflow-hidden ring-1 ring-white/5">
            
            {/* Cinematic Header */}
            <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
              <h3 className="text-white font-bold text-lg tracking-tight drop-shadow-md">
                Course Preview: <span className="font-normal opacity-80">{course.title}</span>
              </h3>
              <button 
                onClick={() => setIsPreviewOpen(false)}
                className="p-2 rounded-full bg-black/40 hover:bg-[#5B4CF5] text-white/80 hover:text-white transition-all duration-300 backdrop-blur-md pointer-events-auto shadow-lg"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            {/* Video Player */}
            <div className="relative w-full aspect-video bg-black flex items-center justify-center">
              <video 
                src={course.previewVideoUrl || certciaVideo}
                controls 
                autoPlay 
                controlsList="nodownload"
                className="w-full h-full object-contain outline-none"
              >
                Your browser does not support HTML video.
              </video>
            </div>
            
            {/* Ambient Glow */}
            <div className="absolute -inset-4 bg-indigo-500/20 blur-3xl -z-10 rounded-[3rem] opacity-50 mix-blend-screen pointer-events-none" />
          </div>
        </div>
      )}
    </div>
  );
}

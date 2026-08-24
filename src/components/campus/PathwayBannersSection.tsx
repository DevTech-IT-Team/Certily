import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Star, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";
import { useCart } from "@/lib/CartContext";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";

import { COURSES_DATA, getTopicSlug } from "@/lib/courses";
const TABS = [
  "All",
  "Elementary",
  "Middle School",
  "High School",
  "College",
  "Professional",
  "Career",
  "Free Courses"
] as const;

export function PathwayBannersSection() {
  const [activeTab, setActiveTab] = useState<string>("All");
  const { addToCart, isInCart } = useCart();

  const filteredCourses = COURSES_DATA.filter((p) => {
    if (activeTab === "All") return true;
    if (activeTab === "Free Courses") return p.price === "Free";
    return p.category === activeTab;
  });

  return (
    <section className="py-8 sm:py-12 md:py-16 font-sans bg-white min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        
        {/* Header - Left Aligned */}
        <Reveal>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight text-[#1C1D1F] sm:text-4xl">
              Every learner has a path. Find yours.
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#6A6F73] sm:text-lg">
              K–12 and college pathways are open now. Professional and career tracks coming as the campus grows.
            </p>
          </div>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.1}>
          <div className="mt-8 flex gap-6 overflow-x-auto border-b border-[#D1D7DC] pb-0 scrollbar-hide">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "whitespace-nowrap px-1 pb-3 text-sm font-bold transition-colors border-b-2",
                  activeTab === tab
                    ? "border-black text-black"
                    : "border-transparent text-[#6A6F73] hover:text-black"
                )}
              >
                {tab}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Cards Grid */}
        <div className="mt-6 min-h-[400px]">
          {filteredCourses.length > 0 ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {filteredCourses.slice(0, 4).map((course, i) => (
                <Reveal key={course.id} delay={0.1 + i * 0.05}>
                  <HoverCard openDelay={300} closeDelay={100}>
                    <HoverCardTrigger asChild>
                      <Link
                        to="/course/$courseId"
                        params={{ courseId: course.id }}
                        className="group flex flex-col h-full bg-white transition-all duration-300 outline-none border border-black/5 rounded-xl hover:shadow-xl hover:-translate-y-1 overflow-hidden"
                      >
                        {/* Image Area */}
                        <div className="relative aspect-[16/9] w-full bg-gray-100">
                          <img 
                            src={course.image} 
                            alt={course.title}
                            className="h-full w-full object-cover transition-opacity group-hover:opacity-90"
                          />
                          {('badgeLogo' in course && course.badgeLogo) && (
                            <div className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 bg-[#0F1533] px-3 py-1 rounded-[4px] flex items-center shadow-sm z-10">
                              <span className="text-white text-[11px] font-bold tracking-tight">{course.badgeLogo as string}</span>
                            </div>
                          )}
                        </div>
                        
                        {/* Content Area */}
                        <div className="flex flex-col flex-1 p-5 pt-8">
                          <h3 className="font-bold text-[17px] leading-tight text-[#1C1D1F] line-clamp-2">
                            {course.title}
                          </h3>
                          <p className="mt-1.5 text-[13px] text-[#6A6F73] line-clamp-1">
                            {course.author}
                          </p>
                          
                          {/* Rating Row */}
                          <div className="mt-2.5 flex items-center gap-2 flex-wrap">
                            {course.bestseller && (
                              <span className="bg-[#CCF0EB] px-2 py-0.5 text-xs font-bold text-[#115C52] rounded-[3px]">
                                Bestseller
                              </span>
                            )}
                            <div className="flex items-center gap-1 border border-[#D1D7DC] px-1.5 py-0.5 rounded-[3px]">
                              <Star className="h-3 w-3 fill-[#E59819] text-[#E59819]" />
                              <span className="text-xs font-bold text-[#1C1D1F]">{course.rating}</span>
                            </div>
                            <div className="border border-[#D1D7DC] px-1.5 py-0.5 rounded-[3px]">
                              <span className="text-xs text-[#6A6F73]">{course.ratingCount} ratings</span>
                            </div>
                          </div>

                          {/* Price Row */}
                          <div className="mt-auto pt-4 flex items-center gap-2">
                            <span className="font-bold text-[17px] text-[#1C1D1F]">{course.price}</span>
                            <span className="text-[15px] text-[#6A6F73] line-through">{course.originalPrice}</span>
                          </div>
                        </div>
                      </Link>
                    </HoverCardTrigger>
                    
                    {/* Hover Popover */}
                    <HoverCardContent 
                      side="right" 
                      align="start" 
                      sideOffset={14} 
                      className="group w-[320px] p-6 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.15)] border border-black/5 rounded-2xl bg-white/95 backdrop-blur-xl z-[100] animate-in fade-in zoom-in-95 duration-200"
                    >
                      {/* Custom seamless arrow pointer pointing at the image */}
                      <div className="absolute top-[60px] h-[14px] w-[14px] rotate-45 bg-white z-10 transition-all duration-200 opacity-0 group-data-[state=open]:opacity-100
                        group-data-[side=right]:-left-[7.5px] group-data-[side=right]:border-l group-data-[side=right]:border-b group-data-[side=right]:border-black/5
                        group-data-[side=left]:-right-[7.5px] group-data-[side=left]:border-r group-data-[side=left]:border-t group-data-[side=left]:border-black/5
                        group-data-[side=top]:hidden group-data-[side=bottom]:hidden
                      " />

                      <h3 className="text-[17px] font-bold leading-snug text-[#1C1D1F]">
                        {course.title}
                      </h3>
                      
                      <div className="mt-2.5 flex items-center gap-2.5">
                        {course.bestseller && (
                          <span className="bg-[#CCF0EB] px-1.5 py-0.5 text-[11px] font-bold text-[#115C52] rounded-[3px]">
                            Bestseller
                          </span>
                        )}
                        <span className="text-[12px] text-[#6A6F73]">
                          Updated <span className="font-bold text-[#115C52]">{course.updatedDate}</span>
                        </span>
                      </div>

                      <div className="mt-1.5 text-[12px] text-[#6A6F73]">
                        {course.hours} total hours · {course.levels} · {course.hasSubtitles && "Subtitles"}
                      </div>

                      <p className="mt-3 text-[13px] text-[#1C1D1F] leading-relaxed">
                        {course.description}
                      </p>

                      <ul className="mt-3 space-y-2.5">
                        {/* Show up to 3 bullet points */}
                        {course.bulletPoints.slice(0, 3).map((point, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="h-3.5 w-3.5 text-[#1C1D1F] mt-0.5 shrink-0" strokeWidth={2} />
                            <span className="text-[13px] text-[#5A607A] leading-snug">{point}</span>
                          </li>
                        ))}
                      </ul>

                      {isInCart(course.id) ? (
                        <Link 
                          to="/cart"
                          className="mt-6 w-full flex items-center justify-center bg-[#F7F8FC] hover:bg-[#EEF0F8] text-[#5B4CF5] py-2.5 font-bold text-[15px] transition-colors rounded-lg"
                        >
                          Go to cart
                        </Link>
                      ) : (
                        <button 
                          onClick={() => addToCart(course.id)}
                          className="mt-6 w-full bg-[#5B4CF5] hover:bg-[#4A3BE8] hover:shadow-[0_8px_20px_-8px_rgba(91,76,245,0.6)] text-white py-2.5 font-bold text-[15px] transition-all rounded-lg"
                        >
                          Add to cart
                        </button>
                      )}
                    </HoverCardContent>
                  </HoverCard>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-lg font-semibold text-[#1C1D1F]">Coming Soon</p>
              <p className="mt-2 text-sm text-[#6A6F73]">We are actively building the curriculum for this category.</p>
            </div>
          )}

          <div className="mt-10">
            <Link 
              to="/topic/$topicId" 
              params={{ topicId: getTopicSlug(activeTab) }}
              className="text-[#5B4CF5] hover:text-[#4A3BE8] font-bold text-[16px] inline-flex items-center gap-2 group"
            >
              {activeTab === "All" ? "Show all courses" : `Show all ${activeTab} courses`}
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

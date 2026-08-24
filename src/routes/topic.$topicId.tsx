import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { COURSES_DATA, TOPICS_META } from "@/lib/courses";
import { Star, Check, HelpCircle } from "lucide-react";
import { useCart } from "@/lib/CartContext";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Reveal } from "@/components/campus/Reveal";

export const Route = createFileRoute("/topic/$topicId")({
  component: TopicPage,
  loader: ({ params }) => {
    const topicMeta = TOPICS_META[params.topicId];
    if (!topicMeta) {
      throw notFound();
    }
    return { topicMeta };
  }
});

function TopicPage() {
  const { topicId } = Route.useParams();
  const { topicMeta } = Route.useLoaderData();
  const { addToCart, isInCart } = useCart();

  // Filter courses by category slug
  const courses = COURSES_DATA.filter(course => {
    if (topicId === "all") return true;
    if (topicId === "free-courses") return course.category === "Free Courses";
    return course.category.toLowerCase().replace(/\s+/g, '-') === topicId;
  });

  return (
    <div className="min-h-screen bg-white font-sans pt-12 pb-24">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#1C1D1F] mb-6">
          {topicMeta.title}
        </h1>
        
        <p className="max-w-4xl text-[16px] text-[#1C1D1F] leading-relaxed mb-8">
          {topicMeta.description}
        </p>

        {/* Stats Row */}
        <div className="flex flex-wrap gap-x-12 gap-y-6 mb-10">
          <div>
            <div className="text-[12px] font-bold text-[#6A6F73] mb-1">Number of learners</div>
            <div className="text-2xl font-bold text-[#1C1D1F]">{topicMeta.learnersCount}</div>
          </div>
          <div>
            <div className="text-[12px] font-bold text-[#6A6F73] mb-1">Number of courses</div>
            <div className="text-2xl font-bold text-[#1C1D1F]">{topicMeta.coursesCount}</div>
          </div>
          <div>
            <div className="text-[12px] font-bold text-[#6A6F73] mb-1 flex items-center gap-1">
              Number of hands-on practice <HelpCircle className="h-3.5 w-3.5 text-[#6A6F73]" />
            </div>
            <div className="text-2xl font-bold text-[#1C1D1F]">{topicMeta.handsOnPracticeCount}</div>
          </div>
          <div>
            <div className="text-[12px] font-bold text-[#6A6F73] mb-1">Average course rating</div>
            <div className="text-2xl font-bold text-[#1C1D1F] flex items-center gap-2">
              {topicMeta.averageRating}
              <Star className="h-5 w-5 fill-[#B4690E] text-[#B4690E]" />
            </div>
          </div>
        </div>

        {/* Related Topics */}
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-[14px] font-bold text-[#1C1D1F]">Related</span>
          {topicMeta.relatedTopics.map(topic => (
            <Link 
              key={topic}
              to="/learning"
              className="px-4 py-2 border border-[#1C1D1F] rounded-full text-[14px] font-bold text-[#1C1D1F] hover:bg-gray-50 transition-colors"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-[#D1D7DC] pt-12">
        <h2 className="text-2xl font-bold text-[#1C1D1F] mb-6">All {topicMeta.title}</h2>

        {courses.length === 0 ? (
          <div className="py-16 text-center text-gray-500">
            No courses found for this category yet.
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 min-h-[400px]">
            {courses.map((course, i) => (
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
        )}
      </div>
    </div>
  );
}

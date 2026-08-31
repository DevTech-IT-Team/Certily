import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { COURSES_DATA, TOPICS_META } from "@/lib/courses";
import { Star, HelpCircle } from "lucide-react";
import { Reveal } from "@/components/campus/Reveal";
import { CourseCatalogCard } from "@/components/campus/CourseCatalogCard";

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
          <div className="grid min-h-[400px] gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {courses.map((course, i) => (
              <Reveal key={course.id} delay={0.1 + i * 0.05}>
                <CourseCatalogCard course={course} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

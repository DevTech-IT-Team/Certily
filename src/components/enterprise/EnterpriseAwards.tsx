import { ChevronLeft, ChevronRight } from "lucide-react";

export function EnterpriseAwards() {
  const awards = [
    { title: "Top 50 Emerging AI Startups - 2024", awarder: "Tech Startups India", color: "text-blue-800 font-bold" },
    { title: "Most Innovative EdTech Platform - 2024", awarder: "EdTech Innovation Awards", color: "text-black font-serif" },
    { title: "Best New B2B SaaS Startup - 2024", awarder: "SaaSBooster", color: "text-green-700 font-bold" },
    { title: "Outstanding AI Training Solution Provider", awarder: "AI World Congress", color: "text-blue-800 font-bold" },
    { title: "Fastest Growing E-learning Platform - Q1 2024", awarder: "StartupDunia", color: "text-purple-600 font-bold" },
    { title: "Best AI Platform of the Year - Early Stage", awarder: "BW STARTUPS", color: "text-red-600 font-bold" },
    { title: "Product of the Day - #1 Education App", awarder: "Product Hunt", color: "text-orange-500 font-black" },
    { title: "Best Corporate Training Innovator - 2024", awarder: "HR Tech Insights", color: "text-teal-600 font-bold" },
    { title: "Top 10 AI Startups to Watch", awarder: "Inc42", color: "text-indigo-600 font-bold" },
  ];

  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Awards And Recognitions
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 pt-2 hide-scrollbar">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex w-[260px] shrink-0 flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`text-sm ${award.color}`}>
                {award.awarder}
              </div>
              <p className="mt-4 flex-1 text-sm font-semibold leading-relaxed text-gray-800">
                {award.title}
              </p>
              <div className="mt-6">
                <a href="#" className="text-xs font-bold text-blue-600 hover:underline">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

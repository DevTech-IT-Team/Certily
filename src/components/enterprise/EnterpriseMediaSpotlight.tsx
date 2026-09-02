import { ChevronLeft, ChevronRight } from "lucide-react";

export function EnterpriseMediaSpotlight() {
  const articles = [
    { source: "TechCrunch", headline: "Certcia emerges from stealth to transform enterprise AI upskilling", date: "02 Nov 2023", color: "text-green-600" },
    { source: "YourStory", headline: "How this new edtech startup is building an AI-first workforce for Indian enterprises", date: "04 Feb 2024", color: "text-red-500" },
    { source: "VentureBeat", headline: "Certcia secures seed funding to scale AI training platforms globally", date: "02 Feb 2024", color: "text-blue-600" },
    { source: "Product Hunt", headline: "Certcia AI Academy lands #1 Product of the Day", date: "10 Dec 2023", color: "text-orange-500" },
    { source: "Inc42", headline: "Top 10 Emerging AI Startups to Watch in 2024", date: "15 Dec 2023", color: "text-blue-800" },
    { source: "Forbes India", headline: "The rising wave of specialized AI training: Certcia's bold new approach", date: "12 Nov 2023", color: "text-black" },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 sm:text-xs">
              FEATURES
            </p>
            <h2 className="mt-1 font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Media Spotlight
            </h2>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 pt-2 hide-scrollbar">
          {articles.map((article, index) => (
            <div
              key={index}
              className="flex w-[280px] shrink-0 flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className={`text-sm font-black ${article.color}`}>
                {article.source}
              </div>
              <p className="mt-4 flex-1 text-sm font-semibold leading-relaxed text-gray-800">
                {article.headline}
              </p>
              <div className="mt-6 text-xs font-medium text-gray-400">
                {article.date}
              </div>
            </div>
          ))}
          {/* Read more card */}
          <div className="flex w-[150px] shrink-0 flex-col items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition-colors hover:bg-gray-100">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
              <ChevronRight className="h-5 w-5" />
            </div>
            <p className="mt-4 text-xs font-bold text-gray-600">Read more</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function EnterpriseUniversities() {
  const universities = [
    { name: "McCombs School of Business", color: "text-orange-700", font: "font-serif" },
    { name: "GREAT LAKES", color: "text-blue-800", font: "font-bold" },
    { name: "Northwestern", color: "text-purple-900", font: "font-serif" },
    { name: "IDSS MIT", color: "text-black", font: "font-black" },
    { name: "Deakin University", color: "text-gray-800", font: "font-serif" },
    { name: "IIT Bombay", color: "text-blue-600", font: "font-bold" },
    { name: "MIT Professional Education", color: "text-red-800", font: "font-sans font-bold" },
    { name: "Johns Hopkins", color: "text-blue-900", font: "font-serif" },
    { name: "WALSH COLLEGE", color: "text-gray-900", font: "font-serif font-bold tracking-widest" },
  ];

  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-blue-500 sm:text-xs">
          IN PARTNERSHIP WITH
        </p>
        <h2 className="mt-2 font-display text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          World's Top Universities
        </h2>

        <div className="mx-auto mt-12 max-w-5xl">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 sm:gap-x-16 sm:gap-y-12">
            {universities.map((uni, index) => (
              <div
                key={index}
                className={`flex items-center justify-center text-lg sm:text-xl ${uni.color} ${uni.font}`}
              >
                {uni.name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

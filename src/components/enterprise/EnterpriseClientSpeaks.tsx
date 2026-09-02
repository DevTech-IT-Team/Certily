import { Quote } from "lucide-react";

export function EnterpriseClientSpeaks() {
  return (
    <section className="bg-gray-50 px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
          Our Client Speaks
        </h2>

        <div className="mx-auto mt-12 text-left">
          <div className="relative rounded-2xl bg-white p-8 shadow-sm sm:p-12">
            <Quote className="absolute left-6 top-6 h-8 w-8 text-orange-200 sm:left-8 sm:top-8" />
            <div className="relative z-10 pl-6 sm:pl-8">
              <p className="text-lg font-bold text-gray-900 sm:text-xl">
                "Certcia subject matter experts experience are par excellence!"
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray-600 sm:text-base">
                "Certcia was able to understand our need and deliver well to our context. The experience their subject matter experts bring to the table is par-excellence. The team was able to bring in a lot of insights for us from across industries that added a lot of value for us."
              </p>
              <div className="mt-6 flex items-center gap-4 border-t border-gray-100 pt-6">
                <div className="text-sm font-bold text-gray-900">Redington</div>
                <div className="h-4 w-px bg-gray-300"></div>
                <div className="text-sm font-medium text-gray-500">HR, L&D Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

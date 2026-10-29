import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { useCart } from "@/lib/CartContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { asCatalogBand, coursesByCodes, quoteCourses, readDraft, writeDraft } from "@/lib/journey";
import { pathwayToRouteId } from "@/lib/pathways";
import { ArrowLeft, ArrowRight, Clock, Trash2, ShieldCheck, Lock } from "lucide-react";

export type PurchaseSearch = {
  band?: string;
  codes?: string;
  role?: string;
  step?: string;
};

export function GuidedPurchase({ search }: { search: PurchaseSearch }) {
  const navigate = useNavigate();
  const { addManyToCart } = useCart();
  const { formatAmount, formatPrice } = useCurrency();
  const courses = useMemo(
    () => coursesByCodes((search.codes ?? "").split(/[,\s]+/)),
    [search.codes],
  );
  const quote = quoteCourses(courses);
  const bandId = asCatalogBand(search.band) ?? asCatalogBand(courses[0]?.bandId) ?? "pre-elementary";

  useEffect(() => {
    if (search.codes !== undefined) return;
    const draft = readDraft();
    navigate({
      to: "/learning/select",
      replace: true,
      search: { band: draft.bandId ?? undefined, codes: draft.codes.join(","), step: "review" },
    });
  }, [navigate, search.codes]);

  const remove = (code: string) => {
    const next = courses.filter((course) => course.code !== code).map((course) => course.code);
    writeDraft({ role: null, codes: next, bandId });
    navigate({
      to: "/learning/select",
      replace: true,
      search: { band: bandId, codes: next.join(","), step: "review" },
    });
  };

  const checkout = () => {
    if (courses.length === 0) return;
    addManyToCart(
      courses.map((course) => course.id),
      { silent: true },
    );
    navigate({ to: "/cart" });
  };

  return (
    <div className="min-h-screen bg-[#FBFBFC] font-sans text-[#0F1533] pt-24 sm:pt-28 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/learning/$pathwayId"
            params={{ pathwayId: pathwayToRouteId(bandId) }}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B4CF5] hover:text-[#4A3BE8] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Pathway</span>
          </Link>

          <div className="mt-3 flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-gray-200/80 pb-5">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F1533]">
                Your Selection
              </h1>
              <p className="mt-1 text-sm text-[#5A607A]">
                {quote.count} {quote.count === 1 ? "certification" : "certifications"} · {quote.hours} learning hours
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#5A607A] bg-white border border-gray-200/80 rounded-full px-3.5 py-1.5 w-fit shadow-2xs">
              <ShieldCheck className="h-3.5 w-3.5 text-[#5B4CF5]" />
              <span>Board-Aligned Pathway</span>
            </div>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px] items-start">
          {/* Left Column: Courses List */}
          <div className="w-full">
            {courses.length === 0 ? (
              <div className="rounded-2xl border border-gray-200/80 bg-white p-12 text-center shadow-xs">
                <h2 className="text-xl font-bold text-[#0F1533]">Nothing picked yet</h2>
                <p className="mt-2 text-sm text-[#5A607A]">
                  Explore learning pathways to pick certifications for your curriculum.
                </p>
                <div className="mt-6">
                  <Link
                    to="/learning"
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-[#5B4CF5] px-7 text-sm font-semibold text-white shadow-xs transition hover:bg-[#4A3BE8] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Explore Pathways</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="group flex flex-col sm:flex-row gap-4.5 rounded-2xl border border-gray-200/80 bg-white p-4.5 shadow-xs transition hover:border-[#5B4CF5]/30 hover:shadow-sm"
                  >
                    <div className="shrink-0 overflow-hidden rounded-xl border border-gray-100 bg-gray-50">
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full sm:w-[130px] aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>

                    <div className="min-w-0 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="rounded-full bg-[#5B4CF5]/10 px-2.5 py-0.5 text-[11px] font-bold text-[#5B4CF5]">
                            {course.code}
                          </span>
                          <span className="text-xs text-[#5A607A] flex items-center gap-1">
                            <Clock className="h-3 w-3 text-[#5B4CF5]" />
                            20h · 6 weeks
                          </span>
                        </div>

                        <h3 className="font-bold text-base text-[#0F1533] leading-snug">
                          {course.title}
                        </h3>
                      </div>

                      <div className="mt-3 pt-2.5 border-t border-gray-100 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={() => remove(course.code)}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="h-3.5 w-3.5" />
                          <span>Remove</span>
                        </button>

                        <span className="text-base font-extrabold text-[#0F1533]">
                          {formatPrice(course.price)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Order Summary Sidebar */}
          <aside className="w-full rounded-2xl border border-gray-200/80 bg-white p-6 shadow-xs lg:sticky lg:top-28">
            <h3 className="text-base font-bold text-[#0F1533] mb-4">Summary</h3>

            <div className="space-y-3 border-b border-gray-100 pb-4 text-sm">
              <div className="flex justify-between text-[#5A607A]">
                <span>Certifications</span>
                <span className="font-medium text-[#0F1533]">{quote.count}</span>
              </div>
              <div className="flex justify-between text-[#5A607A]">
                <span>Total Hours</span>
                <span className="font-medium text-[#0F1533]">{quote.hours} hrs</span>
              </div>
              <div className="flex justify-between text-[#5A607A]">
                <span>Curriculum Status</span>
                <span className="font-medium text-[#5B4CF5]">Board Ready</span>
              </div>
            </div>

            <div className="pt-4 mb-6 flex justify-between items-baseline">
              <span className="text-sm font-semibold text-[#0F1533]">Total</span>
              <span className="text-2xl font-extrabold text-[#0F1533]">
                {courses.length === 0 ? "—" : formatAmount(quote.price)}
              </span>
            </div>

            <button
              type="button"
              disabled={courses.length === 0}
              onClick={checkout}
              className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#5B4CF5] px-6 text-sm font-semibold text-white shadow-xs transition hover:bg-[#4A3BE8] disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span>Continue to Checkout</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#5A607A]">
              <Lock className="h-3 w-3 text-[#5A607A]" />
              <span>Secure academy confirmation</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}

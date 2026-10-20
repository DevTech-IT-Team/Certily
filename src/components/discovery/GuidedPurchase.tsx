import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo } from "react";
import { useCart } from "@/lib/CartContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { asCatalogBand, coursesByCodes, quoteCourses, readDraft, writeDraft } from "@/lib/journey";
import { pathwayToRouteId } from "@/lib/pathways";

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
    <div className="min-h-screen bg-[#F7F6F3] pt-28 text-[#161513]">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 pb-24 sm:px-6 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div>
          <Link
            to="/learning/$pathwayId"
            params={{ pathwayId: pathwayToRouteId(bandId) }}
            className="text-sm font-semibold text-[#5B4CF5]"
          >
            Back to the hall
          </Link>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight">Your picks</h1>
          <p className="mt-2 text-sm text-[#5A607A]">
            {quote.count} {quote.count === 1 ? "certification" : "certifications"} · {quote.hours} hours
          </p>
          {courses.length === 0 ? (
            <p className="mt-8 rounded-[1.5rem] bg-white px-5 py-8 text-sm text-[#5A607A]">
              Nothing picked yet.
            </p>
          ) : (
            <ul className="mt-6 space-y-3">
              {courses.map((course) => (
                <li key={course.id} className="flex gap-4 overflow-hidden rounded-[1.4rem] bg-white p-3">
                  <img src={course.image} alt="" className="h-20 w-28 rounded-xl object-cover" />
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-lg font-bold leading-tight">{course.title}</p>
                    <p className="mt-1 text-xs text-[#5A607A]">
                      {course.code} · 20h · 6 weeks
                    </p>
                    <button type="button" onClick={() => remove(course.code)} className="mt-2 text-xs font-bold text-[#5B4CF5]">
                      Remove
                    </button>
                  </div>
                  <p className="text-sm font-bold">{formatPrice(course.price)}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
        <aside className="h-fit rounded-[1.5rem] bg-[#161513] p-5 text-white lg:sticky lg:top-28">
          <p className="text-xs uppercase tracking-[0.14em] text-white/60">Total</p>
          <p className="mt-2 font-display text-4xl font-bold">
            {courses.length === 0 ? "—" : formatAmount(quote.price)}
          </p>
          <p className="mt-2 text-sm text-white/70">{quote.hours} hours</p>
          <button
            type="button"
            disabled={courses.length === 0}
            onClick={checkout}
            className="mt-6 w-full rounded-full bg-white py-3 text-sm font-bold text-[#0F1533] disabled:opacity-40"
          >
            Checkout
          </button>
          <p className="mt-3 text-xs leading-relaxed text-white/55">
            Continues to the academy login. Payment is confirmed there.
          </p>
        </aside>
      </div>
    </div>
  );
}

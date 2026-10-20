import { Link, useNavigate } from "@tanstack/react-router";
import { useCart } from "@/lib/CartContext";
import { useCurrency } from "@/lib/CurrencyContext";
import type { CourseDetails } from "@/lib/courses";
import { courseByCode, findStageForCode, getJourney, readDraft, writeDraft } from "@/lib/journey";
import { pathwayToRouteId } from "@/lib/pathways";

export function CourseContextSections({ course }: { course: CourseDetails }) {
  const placement = findStageForCode(course.code);
  const journey = placement ? getJourney(placement.journey.bandId) : null;

  return (
    <div className="mt-10">
      {journey ? (
        <section>
          <h2 className="font-display text-xl font-bold text-[#0F1533]">Other certifications in {course.category}</h2>
          <p className="mt-1 text-sm text-[#5A607A]">Same stage. Open another one if this is not the right fit.</p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {journey.stages.flatMap((stage) => stage.codes).map((code) => {
              const item = courseByCode(code);
              if (!item) return null;
              const current = item.code === course.code;
              return (
                <Link
                  key={code}
                  to="/course/$courseId"
                  params={{ courseId: item.id }}
                  aria-current={current ? "page" : undefined}
                  className={
                    current
                      ? "rounded-2xl bg-[#0F1533] px-4 py-3 text-sm font-semibold text-white"
                      : "rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-[#0F1533] ring-1 ring-[#E7E5F1] hover:ring-[#5B4CF5]"
                  }
                >
                  <span className={current ? "text-white/70" : "text-[#5B4CF5]"}>{item.code}</span>
                  <span className="mt-0.5 block">{item.title}</span>
                </Link>
              );
            })}
          </div>
        </section>
      ) : null}
    </div>
  );
}

export function CoursePurchaseCard({ course }: { course: CourseDetails }) {
  const { formatPrice } = useCurrency();
  const { isInCart } = useCart();
  const navigate = useNavigate();
  const placement = findStageForCode(course.code);

  const choose = () => {
    const draft = readDraft();
    const codes = draft.codes.includes(course.code) ? draft.codes : [...draft.codes, course.code];
    const bandId = placement?.journey.bandId ?? draft.bandId;
    writeDraft({ ...draft, codes, bandId });
    navigate({
      to: "/learning/select",
      search: {
        band: bandId ?? undefined,
        codes: codes.join(","),
        step: "review",
      },
    });
  };

  return (
    <div className="overflow-hidden rounded-[1.75rem] bg-white shadow-[0_28px_60px_-24px_rgba(15,21,51,0.4)] ring-1 ring-[#E7E5F1]">
      <img src={course.image} alt="" className="h-72 w-full object-cover" />
      <div className="p-6">
        <p className="text-xs font-bold tracking-[0.14em] text-[#5B4CF5]">{course.code}</p>
        <h2 className="mt-1 font-display text-xl font-bold leading-snug text-[#0F1533]">{course.title}</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#5A607A]">For {course.audience}. Certificate included when you finish.</p>
        <div className="mt-4 flex items-end gap-2">
          <p className="font-display text-4xl font-bold tracking-tight text-[#0F1533]">{formatPrice(course.price)}</p>
          {course.originalPrice ? (
            <p className="mb-1 text-sm text-[#8B90A8] line-through">{formatPrice(course.originalPrice)}</p>
          ) : null}
        </div>
        <button
          type="button"
          onClick={choose}
          className="mt-5 h-12 w-full rounded-full bg-[#5B4CF5] text-sm font-bold text-white shadow-[0_10px_24px_-12px_rgba(91,76,245,0.8)] hover:bg-[#4A3BE0]"
        >
          Add to my path
        </button>
        {placement ? (
          <Link
            to="/learning/$pathwayId"
            params={{ pathwayId: pathwayToRouteId(placement.journey.bandId) }}
            className="mt-3 block text-center text-sm font-semibold text-[#5A607A] hover:text-[#5B4CF5]"
          >
            More certifications in {course.category}
          </Link>
        ) : null}
        {isInCart(course.id) ? (
          <Link to="/cart" className="mt-2 block text-center text-xs font-bold text-[#5A607A]">
            In cart
          </Link>
        ) : null}
      </div>
    </div>
  );
}

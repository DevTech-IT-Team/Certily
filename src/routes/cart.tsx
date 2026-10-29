import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/CartContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { COURSES_DATA } from "@/lib/courses";
import { quoteCourses } from "@/lib/journey";
import { ArrowRight, Star, Plus, Check } from "lucide-react";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cart")({
  head: () =>
    pageHead({
      title: "Shopping Cart",
      path: "/cart",
      noIndex: true,
    }),
  component: CartPage,
});

function CartPage() {
  const { cartItems, cartTotal, removeFromCart, addToCart, isInCart, cartReady } = useCart();
  const { formatPrice, formatAmount } = useCurrency();
  const cartCourses = cartItems;
  const quote = quoteCourses(cartCourses);
  const recommendedCourses = COURSES_DATA.filter(
    (c) => !cartItems.some((item) => item.id === c.id)
  ).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#FBFBFC] font-sans text-[#0F1533] pt-24 sm:pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="border-b border-gray-200/80 pb-5 mb-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F1533]">
            Shopping Cart
          </h1>
          <p className="mt-1 text-sm text-[#5A607A]">
            {cartCourses.length === 0
              ? "0 certifications in your cart"
              : `${cartCourses.length} certification${cartCourses.length === 1 ? "" : "s"} selected`}
          </p>
        </div>

        {/* Loading State */}
        {!cartReady ? (
          <div className="rounded-2xl border border-gray-200/80 bg-white p-12 text-center shadow-xs">
            <div className="inline-block h-6 w-6 animate-spin rounded-full border-2 border-[#5B4CF5] border-t-transparent mb-3" />
            <p className="text-sm text-[#5A607A]">Loading your cart...</p>
          </div>
        ) : cartCourses.length === 0 ? (
          /* ============================================================ */
          /* CLEAN & SORTED EMPTY STATE                                   */
          /* ============================================================ */
          <div className="rounded-2xl border border-gray-200/80 bg-white p-12 sm:p-16 text-center shadow-xs">
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#0F1533]">
              Your cart is empty
            </h2>
            <p className="mt-2 max-w-md mx-auto text-sm text-[#5A607A] leading-relaxed">
              Explore our certified pathways and interactive AI labs across the Certcia campus to begin your journey.
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
          /* ============================================================ */
          /* CLEAN & SORTED FILLED CART                                   */
          /* ============================================================ */
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Cart Items List */}
            <div className="flex-1 w-full divide-y divide-gray-100 rounded-2xl border border-gray-200/80 bg-white p-6 shadow-xs">
              <div className="pb-3 mb-2 flex items-center justify-between text-xs font-semibold text-gray-500 uppercase tracking-wider">
                <span>Certification ({cartCourses.length})</span>
                <span>Price</span>
              </div>

              {cartCourses.map((course) => (
                <div
                  key={course.id}
                  className="py-4 first:pt-2 last:pb-2 flex flex-col sm:flex-row gap-4 justify-between items-start"
                >
                  <div className="flex gap-4 min-w-0 flex-1">
                    <Link
                      to="/course/$courseId"
                      params={{ courseId: course.id }}
                      className="shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-[120px] aspect-video object-cover"
                      />
                    </Link>

                    <div className="min-w-0 flex-1">
                      <Link
                        to="/course/$courseId"
                        params={{ courseId: course.id }}
                        className="font-bold text-sm text-[#0F1533] hover:text-[#5B4CF5] transition line-clamp-2 leading-snug"
                      >
                        {course.title}
                      </Link>
                      <p className="mt-1 text-xs text-[#5A607A]">By {course.author}</p>
                      <div className="mt-2.5">
                        <button
                          type="button"
                          onClick={() => removeFromCart(course.id)}
                          className="text-xs font-semibold text-red-500 hover:text-red-600 transition"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="text-right shrink-0 sm:pl-4">
                    <div className="font-bold text-base text-[#0F1533]">
                      {formatPrice(course.price)}
                    </div>
                    {course.originalPrice && (
                      <div className="text-xs text-gray-400 line-through">
                        {formatPrice(course.originalPrice)}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary Sidebar */}
            <div className="w-full lg:w-[320px] shrink-0">
              <div className="rounded-2xl border border-gray-200/80 bg-white p-6 shadow-xs lg:sticky lg:top-28">
                <h3 className="text-base font-bold text-[#0F1533] mb-4">Summary</h3>

                <div className="space-y-3 border-b border-gray-100 pb-4 text-sm">
                  <div className="flex justify-between text-[#5A607A]">
                    <span>Certifications</span>
                    <span className="font-medium text-[#0F1533]">{cartCourses.length}</span>
                  </div>
                  {quote.hours > 0 && (
                    <div className="flex justify-between text-[#5A607A]">
                      <span>Learning hours</span>
                      <span className="font-medium text-[#0F1533]">{quote.hours} hrs</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#5A607A]">
                    <span>Subtotal</span>
                    <span className="font-medium text-[#0F1533]">{formatAmount(cartTotal)}</span>
                  </div>
                </div>

                <div className="pt-4 mb-6 flex justify-between items-baseline">
                  <span className="text-sm font-semibold text-[#0F1533]">Total</span>
                  <span className="text-2xl font-extrabold text-[#0F1533]">
                    {formatAmount(cartTotal)}
                  </span>
                </div>

                <a
                  href="https://lmsathena.com/login"
                  className="w-full inline-flex h-11 items-center justify-center gap-2 rounded-full bg-[#5B4CF5] px-6 text-sm font-semibold text-white shadow-xs transition hover:bg-[#4A3BE8]"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <p className="mt-3 text-center text-[11px] text-[#5A607A] leading-relaxed">
                  Payment is completed securely on the official LMS Athena portal.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Clean, Sorted Recommendations Grid */}
        {recommendedCourses.length > 0 && (
          <div className="mt-14">
            <div className="flex items-center justify-between mb-5">
              <div>
                <h3 className="text-lg font-bold text-[#0F1533]">Recommended Certifications</h3>
                <p className="text-xs text-[#5A607A] mt-0.5">
                  Popular pathways to kickstart your learning
                </p>
              </div>
              <Link
                to="/learning"
                className="text-xs font-semibold text-[#5B4CF5] hover:text-[#4A3BE8] transition flex items-center gap-1"
              >
                <span>View all</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {recommendedCourses.map((course) => {
                const added = isInCart(course.id);
                return (
                  <div
                    key={course.id}
                    className="flex flex-col rounded-xl border border-gray-200/80 bg-white overflow-hidden shadow-2xs transition hover:shadow-md hover:border-[#5B4CF5]/40"
                  >
                    <Link
                      to="/course/$courseId"
                      params={{ courseId: course.id }}
                      className="aspect-video bg-gray-50 overflow-hidden"
                    >
                      <img
                        src={course.image}
                        alt={course.title}
                        className="w-full h-full object-cover transition duration-300 hover:scale-105"
                      />
                    </Link>

                    <div className="p-4 flex flex-col flex-1">
                      <div className="flex items-center gap-1 text-xs mb-1 text-amber-600 font-semibold">
                        <Star className="h-3 w-3 fill-amber-500 text-amber-500" />
                        <span>{course.rating}</span>
                        <span className="text-gray-400 font-normal">({course.ratingCount})</span>
                      </div>

                      <Link
                        to="/course/$courseId"
                        params={{ courseId: course.id }}
                        className="font-semibold text-sm text-[#0F1533] hover:text-[#5B4CF5] transition line-clamp-2 leading-snug mb-1"
                      >
                        {course.title}
                      </Link>

                      <p className="text-xs text-[#5A607A] mb-3">By {course.author}</p>

                      <div className="mt-auto pt-3 border-t border-gray-100 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-sm text-[#0F1533]">
                            {formatPrice(course.price)}
                          </div>
                          {course.originalPrice && (
                            <div className="text-[11px] text-gray-400 line-through">
                              {formatPrice(course.originalPrice)}
                            </div>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => addToCart(course.id)}
                          disabled={added}
                          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold transition ${
                            added
                              ? "bg-green-50 text-green-700 border border-green-200 cursor-default"
                              : "bg-gray-100 hover:bg-[#5B4CF5] text-gray-700 hover:text-white"
                          }`}
                        >
                          {added ? (
                            <>
                              <Check className="h-3 w-3" />
                              <span>Added</span>
                            </>
                          ) : (
                            <>
                              <Plus className="h-3 w-3" />
                              <span>Add</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

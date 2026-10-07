import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/CartContext";
import { useCurrency } from "@/lib/CurrencyContext";
import { COURSES_DATA } from "@/lib/courses";
import { Star, Trash2, Plus } from "lucide-react";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/cart")({
  head: () =>
    pageHead({
      title: "Cart",
      path: "/cart",
      noIndex: true,
    }),
  component: CartPage,
});

function CartPage() {
  const { cartItems, cartCount, cartTotal, removeFromCart } = useCart();
  const { formatPrice, formatAmount } = useCurrency();
  const cartCourses = cartItems;
  const totalPrice = cartTotal;
  const totalOriginalPrice = cartTotal * (1 / 0.17);
  // Recommended courses (not in cart)
  const recommendedCourses = COURSES_DATA.filter(c => !cartItems.some(item => item.id === c.id)).slice(0, 4);

  const handleCheckout = () => {
    console.log("Checkout clicked! Cart courses:", cartCourses);
    if (cartCourses.length === 0) {
      console.warn("Cart is empty, cannot checkout");
      return;
    }
    
    // Note: If you ever figure out how LMS Athena accepts cart items via URL, 
    // you can pass them like this: `https://lmsathena.com/login?redirect=/checkout?items=${courseIds}`
    const courseIds = cartCourses.map(course => course.id).join(',');
    
    // Per your request, strictly using this URL for now:
    const finalUrl = `https://lmsathena.com/login`;
    
    console.log("Redirecting to:", finalUrl);

    // 4. Redirect the user to the login page
    window.location.href = finalUrl;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1D1F] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <h1 className="text-4xl font-bold text-[#1C1D1F] mb-8">Shopping Cart</h1>
        <div className="text-[#1C1D1F] font-bold text-[16px] mb-6 border-b border-black/10 pb-4">
          {cartCourses.length} Course{cartCourses.length > 1 ? 's' : ''} in Cart
        </div>

        {cartCourses.length === 0 ? (
          <div className="border border-gray-200 rounded-lg p-16 text-center flex flex-col items-center justify-center bg-white shadow-sm">
            <h2 className="text-xl font-bold text-[#1C1D1F] mb-4">Your cart is empty</h2>
            <p className="text-[#6A6F73] mb-8">Keep shopping to find a course and accelerate your career.</p>
            <Link 
              to="/learning"
              className="bg-[#5B4CF5] hover:bg-[#4A3BE8] text-white px-8 py-3.5 font-bold text-[15px] transition-all rounded-md shadow-sm"
            >
              Explore Pathways
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Left Column: Cart Items List */}
            <div className="flex-1">
              <div className="flex flex-col gap-6">
                {cartCourses.map(course => (
                  <div key={course.id} className="group flex flex-col sm:flex-row gap-4 pb-6 border-b border-gray-200 last:border-0">
                    <Link to="/course/$courseId" params={{ courseId: course.id }} className="shrink-0 overflow-hidden rounded-md border border-black/5 bg-gray-50 h-fit">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-[120px] sm:w-[140px] aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <Link to="/course/$courseId" params={{ courseId: course.id }} className="font-bold text-[16px] text-[#1C1D1F] leading-tight hover:text-[#5B4CF5] transition-colors line-clamp-2">
                          {course.title}
                        </Link>
                        <p className="text-[13px] text-[#6A6F73] mt-1">By {course.author}</p>
                        <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                          {course.bestseller && (
                            <span className="bg-[#ECEB98] px-1.5 py-0.5 text-[11px] font-bold text-[#3D3C0A] rounded-sm">Bestseller</span>
                          )}
                          <div className="flex items-center text-[13px] font-medium">
                            <span className="text-[#B4690E] font-bold mr-1">{course.rating}</span>
                            <Star className="h-3.5 w-3.5 fill-[#B4690E] text-[#B4690E]" />
                            <span className="text-[#6A6F73] ml-1">({course.ratingCount} ratings)</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end gap-2 shrink-0 sm:w-[120px]">
                        <div className="text-right">
                          <div className="font-bold text-[18px] text-[#1C1D1F] leading-none mb-1">{formatPrice(course.price)}</div>
                          <div className="text-[14px] text-[#6A6F73] line-through">{formatPrice(course.originalPrice)}</div>
                        </div>
                        <button 
                          onClick={() => removeFromCart(course.id)}
                          className="text-[13px] text-[#5B4CF5] hover:text-[#4A3BE8] font-semibold transition-colors sm:mt-2"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Checkout Sticky Sidebar */}
            <div className="lg:w-[300px] shrink-0">
              <div className="bg-white p-0 lg:sticky lg:top-24">
                <div className="text-[14px] font-medium text-[#6A6F73] mb-1">Total:</div>
                <div className="text-[1.75rem] font-bold text-[#1C1D1F] mb-1 tracking-tight leading-none">{formatAmount(totalPrice)}</div>
                
                <div className="flex items-center gap-2 mb-5 mt-1.5">
                  <div className="text-[14px] text-[#6A6F73] line-through">
                    {formatAmount(totalOriginalPrice)}
                  </div>
                  <div className="text-[14px] text-[#1C1D1F] font-medium">
                    84% off
                  </div>
                </div>

                <a 
                  href="https://lmsathena.com/login"
                  className="w-full flex items-center justify-center bg-[#5B4CF5] hover:bg-[#4A3BE8] text-white py-3 font-semibold text-[15px] rounded-sm transition-all duration-300"
                >
                  Checkout
                </a>
                <p className="text-center text-[12px] text-[#6A6F73] mt-3">
                  Please log in to complete your enrollment.
                </p>
              </div>
            </div>

          </div>
        )}

        {/* You Might Also Like Section */}
        {recommendedCourses.length > 0 && (
          <div className="mt-20 border-t border-black/10 pt-12">
            <h2 className="text-2xl font-bold text-[#1C1D1F] mb-8">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedCourses.map((course) => (
                <div key={course.id} className="group flex flex-col bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300">
                  <Link to="/course/$courseId" params={{ courseId: course.id }} className="relative aspect-video overflow-hidden">
                    <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </Link>
                  <div className="p-4 flex flex-col flex-1">
                    <Link to="/course/$courseId" params={{ courseId: course.id }} className="font-bold text-[15px] text-[#1C1D1F] leading-tight hover:text-[#5B4CF5] transition-colors line-clamp-2 mb-2">
                      {course.title}
                    </Link>
                    <p className="text-[12px] text-[#6A6F73] mb-2">By {course.author}</p>
                    <div className="flex items-center gap-1 text-[12px] mb-3">
                      <span className="font-bold text-[#B4690E]">{course.rating}</span>
                      <Star className="h-3 w-3 fill-[#B4690E] text-[#B4690E]" />
                      <span className="text-[#6A6F73]">({course.ratingCount})</span>
                    </div>
                    <div className="mt-auto flex items-end justify-between">
                      <div>
                        <div className="font-bold text-[16px] text-[#1C1D1F]">{formatPrice(course.price)}</div>
                        <div className="text-[12px] text-[#6A6F73] line-through">{formatPrice(course.originalPrice)}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
}

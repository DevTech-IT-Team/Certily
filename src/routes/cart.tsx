import { createFileRoute, Link } from "@tanstack/react-router";
import { useCart } from "@/lib/CartContext";
import { COURSES_DATA } from "@/lib/courses";
import { Star, Trash2, Plus } from "lucide-react";

export const Route = createFileRoute("/cart")({
  component: CartPage,
});

function CartPage() {
  const { cartItems, cartCount, cartTotal, removeFromCart } = useCart();
  const cartCourses = cartItems;
  const totalPrice = cartTotal;
  const totalOriginalPrice = cartTotal * (1 / 0.17);
  
  // Recommended courses (not in cart)
  const recommendedCourses = COURSES_DATA.filter(c => !cartItems.some(item => item.id === c.id)).slice(0, 4);

  return (
    <div className="min-h-screen bg-white font-sans text-[#1C1D1F] pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <h1 className="text-4xl font-bold text-[#1C1D1F] mb-8">Shopping Cart</h1>
        <div className="text-[#1C1D1F] font-bold text-[16px] mb-6 border-b border-black/10 pb-4">
          {cartCourses.length} Course{cartCourses.length > 1 ? 's' : ''} in Cart
        </div>

        {cartCount === 0 ? (
          <div className="border border-[#D1D7DC] rounded-lg p-12 text-center flex flex-col items-center justify-center bg-gray-50">
            <h2 className="text-xl font-bold mb-4">Your cart is empty. Keep shopping to find a course!</h2>
            <Link 
              to="/learning"
              className="bg-[#A435F0] hover:bg-[#8710D8] text-white px-6 py-3 font-bold text-[16px] transition-colors rounded-sm"
            >
              Keep shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Column: Cart Items */}
            <div className="lg:col-span-3 space-y-4">
              {cartCourses.map(course => (
                <div key={course.id} className="flex gap-4 p-4 bg-white border border-black/5 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <Link to="/course/$courseId" params={{ courseId: course.id }} className="shrink-0 group">
                    <img 
                      src={course.image} 
                      alt={course.title}
                      className="w-[120px] h-[68px] sm:w-[160px] sm:h-[90px] object-cover rounded-lg"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Link to="/course/$courseId" params={{ courseId: course.id }} className="font-bold text-[15px] sm:text-[16px] text-[#1C1D1F] leading-tight hover:text-[#5B4CF5] transition-colors line-clamp-2">
                        {course.title}
                      </Link>
                      <p className="text-[12px] text-[#6A6F73] mt-1">By {course.author}</p>
                      <div className="flex items-center gap-2 mt-1 flex-wrap">
                        {course.bestseller && (
                          <span className="bg-[#CCF0EB] px-1.5 py-0.5 text-[11px] font-bold text-[#115C52] rounded-sm">Bestseller</span>
                        )}
                        <div className="flex items-center text-[12px]">
                          <span className="font-bold text-[#B4690E] mr-1">{course.rating}</span>
                          <Star className="h-3 w-3 fill-[#B4690E] text-[#B4690E]" />
                          <span className="text-[#6A6F73] ml-1">({course.ratingCount} ratings)</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-center sm:items-end gap-4 sm:gap-2">
                      <button 
                        onClick={() => removeFromCart(course.id)}
                        className="flex items-center gap-1 text-[13px] text-gray-500 hover:text-red-600 font-medium transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                      <div className="text-right">
                        <div className="font-bold text-[16px] sm:text-[18px] text-[#5B4CF5]">{course.price}</div>
                        <div className="text-[14px] text-[#6A6F73] line-through">{course.originalPrice}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column: Checkout Sticky Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-indigo-50/30 border border-indigo-100 rounded-2xl p-6 lg:sticky lg:top-24">
                <div className="text-[16px] font-bold text-[#6A6F73] mb-2">Total:</div>
                <div className="text-4xl font-bold text-[#1C1D1F] mb-1 tracking-tight">₹{totalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                <div className="text-[16px] text-[#6A6F73] line-through mb-6">₹{totalOriginalPrice.toLocaleString('en-IN', { minimumFractionDigits: 2 })}</div>
                <div className="text-sm text-indigo-700 font-medium mb-6 bg-indigo-100/50 px-3 py-2 rounded-lg inline-block">
                  84% off
                </div>
                <button className="w-full bg-[#5B4CF5] hover:bg-[#4A3BE8] hover:shadow-[0_8px_24px_-10px_rgba(91,76,245,0.6)] text-white py-4 font-bold text-[16px] rounded-xl transition-all">
                  Checkout
                </button>
                <div className="mt-4 pt-4 border-t border-black/10">
                  <div className="text-[14px] font-bold text-[#1C1D1F] mb-2">Promotions</div>
                  <div className="flex items-center gap-2">
                    <button className="text-[14px] text-[#5B4CF5] hover:text-[#4A3BE8] font-bold flex-1 text-left">
                      Enter Coupon
                    </button>
                  </div>
                </div>
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
                        <div className="font-bold text-[16px] text-[#1C1D1F]">{course.price}</div>
                        <div className="text-[12px] text-[#6A6F73] line-through">{course.originalPrice}</div>
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

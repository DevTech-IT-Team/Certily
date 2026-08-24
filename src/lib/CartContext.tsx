import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { COURSES_DATA, type CourseDetails } from "./courses";

interface CartContextType {
  cartItems: CourseDetails[];
  addToCart: (courseId: string) => void;
  removeFromCart: (courseId: string) => void;
  isInCart: (courseId: string) => boolean;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastAddedCourseId, setLastAddedCourseId] = useState<string | null>(null);

  // Load from local storage on mount
  useEffect(() => {
    const stored = localStorage.getItem("certcia_cart");
    if (stored) {
      try {
        setCartIds(JSON.parse(stored));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save to local storage on change
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("certcia_cart", JSON.stringify(cartIds));
    }
  }, [cartIds, isLoaded]);

  const cartItems = cartIds
    .map(id => COURSES_DATA.find(c => c.id === id))
    .filter((c): c is CourseDetails => c !== undefined);

  const addToCart = (courseId: string) => {
    setCartIds(prev => {
      if (!prev.includes(courseId)) {
        return [...prev, courseId];
      }
      return prev;
    });
    setLastAddedCourseId(courseId);
    setIsModalOpen(true);
  };

  const removeFromCart = (courseId: string) => {
    setCartIds(prev => prev.filter(id => id !== courseId));
  };

  const isInCart = (courseId: string) => cartIds.includes(courseId);

  const cartCount = cartIds.length;

  const cartTotal = cartItems.reduce((total, course) => {
    const priceStr = course.price.replace(/[^0-9.]/g, '');
    const price = parseFloat(priceStr);
    return total + (isNaN(price) ? 0 : price);
  }, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, isInCart, cartCount, cartTotal }}>
      {children}
      
      {/* Global Added to Cart Modal */}
      <AddedToCartModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        courseId={lastAddedCourseId} 
      />
    </CartContext.Provider>
  );
}

// ----------------------------------------------------------------------
// Added To Cart Modal
// ----------------------------------------------------------------------
import { Dialog, DialogContent, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Link } from "@tanstack/react-router";
import { X, Check, Plus } from "lucide-react";
function AddedToCartModal({ isOpen, onClose, courseId }: { isOpen: boolean, onClose: () => void, courseId: string | null }) {
  const { addToCart } = useCart();
  
  if (!courseId) return null;
  const course = COURSES_DATA.find(c => c.id === courseId);
  if (!course) return null;

  // Find related courses
  const relatedCourses = COURSES_DATA
    .filter(c => c.id !== course.id)
    .slice(0, 2); // Show top 2 related

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[540px] p-0 border-0 overflow-hidden bg-white rounded-3xl gap-0 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.25)]">
        <DialogTitle className="sr-only">Added to cart</DialogTitle>
        
        <DialogClose className="absolute right-4 top-4 rounded-full p-2 bg-gray-50 text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-all z-10 focus:outline-none">
          <X className="h-5 w-5" />
        </DialogClose>
        
        {/* Header Section */}
        <div className="p-6 pb-5 bg-gradient-to-b from-emerald-50/40 to-white relative">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-[#10b981] rounded-full p-1 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Check className="h-4 w-4 text-white" strokeWidth={3} />
            </div>
            <h2 className="text-xl font-black text-[#1C1D1F] tracking-tight">
              Added to cart
            </h2>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="shrink-0 overflow-hidden rounded-xl border border-gray-100 shadow-sm group">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-[100px] sm:w-[120px] aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex-1">
              <div className="font-bold text-[15px] sm:text-[16px] text-[#1C1D1F] leading-snug line-clamp-2 mb-1">
                {course.title}
              </div>
              <div className="text-[13px] text-[#6A6F73]">
                By {course.author}
              </div>
              <div className="font-black text-[15px] sm:text-[16px] text-[#1C1D1F] mt-1.5">{course.price}</div>
            </div>
          </div>

          <div className="mt-6">
            <Link 
              to="/cart"
              onClick={onClose}
              className="w-full flex items-center justify-center bg-[#5B4CF5] hover:bg-[#4A3BE8] text-white py-3 font-bold text-[15px] transition-all rounded-xl shadow-[0_8px_20px_-8px_rgba(91,76,245,0.6)] hover:shadow-[0_12px_24px_-8px_rgba(91,76,245,0.8)]"
            >
              Go to cart
            </Link>
          </div>
        </div>

        {/* Cross-Sell Section */}
        {relatedCourses.length > 0 && (
          <div className="p-6 pt-5 bg-[#F7F8FC] border-t border-black/5">
            <h3 className="font-bold text-[15px] text-[#1C1D1F] mb-3">Frequently Bought Together</h3>
            <div className="space-y-2.5">
              {relatedCourses.map((related) => (
                <div key={related.id} className="flex gap-3 p-3 bg-white border border-gray-200/60 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 items-center group">
                  <div className="shrink-0 overflow-hidden rounded-lg border border-black/5">
                    <img 
                      src={related.image} 
                      alt={related.title} 
                      className="w-[72px] sm:w-[80px] aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-[13px] text-[#1C1D1F] line-clamp-2 leading-tight group-hover:text-[#5B4CF5] transition-colors">
                      {related.title}
                    </div>
                    <div className="flex items-center gap-1.5 mt-1">
                      <span className="font-black text-[#1C1D1F] text-[14px]">{related.price}</span>
                      <span className="text-[#6A6F73] line-through text-[11px]">{related.originalPrice}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => addToCart(related.id)}
                    className="shrink-0 h-9 w-9 flex items-center justify-center bg-white border-2 border-gray-100 hover:border-[#5B4CF5] text-gray-400 hover:text-[#5B4CF5] hover:bg-indigo-50 rounded-full transition-all"
                    aria-label={`Add ${related.title} to cart`}
                  >
                     <Plus className="h-4 w-4" strokeWidth={2.5} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

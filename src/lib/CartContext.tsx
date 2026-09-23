import {
  createContext,
  lazy,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { CourseDetails } from "./courses";

const AddedToCartModal = lazy(() =>
  import("@/components/cart/AddedToCartModal").then((m) => ({
    default: m.AddedToCartModal,
  })),
);

interface CartContextType {
  cartItems: CourseDetails[];
  addToCart: (courseId: string) => void;
  removeFromCart: (courseId: string) => void;
  isInCart: (courseId: string) => boolean;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function parsePrice(raw: string) {
  const price = parseFloat(raw.replace(/[^0-9.]/g, ""));
  return Number.isNaN(price) ? 0 : price;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartIds, setCartIds] = useState<string[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [catalog, setCatalog] = useState<CourseDetails[] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastAddedCourseId, setLastAddedCourseId] = useState<string | null>(null);

  const loadCatalog = useCallback(() => {
    if (catalog) return Promise.resolve(catalog);
    return import("./courses").then((mod) => {
      setCatalog(mod.COURSES_DATA);
      return mod.COURSES_DATA;
    });
  }, [catalog]);

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

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("certcia_cart", JSON.stringify(cartIds));
    }
  }, [cartIds, isLoaded]);

  useEffect(() => {
    if (cartIds.length > 0 || isModalOpen) {
      void loadCatalog();
    }
  }, [cartIds.length, isModalOpen, loadCatalog]);

  const cartItems = useMemo(
    () =>
      catalog
        ? cartIds
            .map((id) => catalog.find((course) => course.id === id))
            .filter((course): course is CourseDetails => course !== undefined)
        : [],
    [catalog, cartIds],
  );

  const addToCart = (courseId: string) => {
    setCartIds((prev) => (prev.includes(courseId) ? prev : [...prev, courseId]));
    setLastAddedCourseId(courseId);
    setIsModalOpen(true);
    void loadCatalog();
  };

  const removeFromCart = (courseId: string) => {
    setCartIds((prev) => prev.filter((id) => id !== courseId));
  };

  const isInCart = (courseId: string) => cartIds.includes(courseId);
  const cartCount = cartIds.length;
  const cartTotal = cartItems.reduce((total, course) => total + parsePrice(course.price), 0);

  const lastAdded = catalog?.find((course) => course.id === lastAddedCourseId) ?? null;
  const relatedCourses = catalog
    ? catalog.filter((course) => course.id !== lastAddedCourseId).slice(0, 2)
    : [];

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, isInCart, cartCount, cartTotal }}
    >
      {children}
      {isModalOpen ? (
        <Suspense fallback={null}>
          <AddedToCartModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            course={lastAdded}
            relatedCourses={relatedCourses}
          />
        </Suspense>
      ) : null}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}

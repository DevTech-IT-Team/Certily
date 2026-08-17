import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_V_MESSAGE } from "@/lib/v-guide";

export type VReaction = "hi" | "point" | "stand" | "stare" | "think";

type VContextValue = {
  message: string;
  reaction: VReaction;
  activeBuildingId: string | null;
  isInitialWelcome: boolean;
  setActiveBuildingId: (id: string | null) => void;
  setMessage: (message: string, pin?: boolean, reaction?: VReaction) => void;
  showTip: (message: string, pin?: boolean, reaction?: VReaction) => void;
  isPinned: () => boolean;
  floatingOpen: boolean;
  setFloatingOpen: (open: boolean) => void;
  setReaction: (reaction: VReaction) => void;
};

export const VContext = createContext<VContextValue | null>(null);

export function VProvider({ children }: { children: ReactNode }) {
  const [message, setMessageState] = useState(DEFAULT_V_MESSAGE);
  const [reaction, setReactionState] = useState<VReaction>("hi");
  const [activeBuildingId, setActiveBuildingIdState] = useState<string | null>(null);
  const [isInitialWelcome, setIsInitialWelcome] = useState(true);
  const [floatingOpen, setFloatingOpen] = useState(false);
  const pinnedUntil = useRef(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialWelcome(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const setActiveBuildingId = useCallback((id: string | null) => {
    setActiveBuildingIdState(id);
    if (id) {
      setIsInitialWelcome(false);
    }
  }, []);

  const isPinned = useCallback(() => Date.now() < pinnedUntil.current, []);

  const setMessage = useCallback((next: string, pin = false, nextReaction?: VReaction) => {
    if (pin) pinnedUntil.current = Date.now() + 8000;
    setMessageState(next);
    if (nextReaction) {
      setReactionState(nextReaction);
    } else {
      const text = next.toLowerCase();
      if (text.includes("hi") || text.includes("hello") || text.includes("hey") || text.includes("welcome")) {
        setReactionState("hi");
      } else if (text.includes("explore") || text.includes("map") || text.includes("click") || text.includes("tap") || text.includes("point") || text.includes("here is") || text.includes("unlock")) {
        setReactionState("point");
      } else {
        setReactionState("stand");
      }
    }
  }, []);

  const showTip = setMessage;

  const setReaction = useCallback((r: VReaction) => {
    setReactionState(r);
  }, []);

  return (
    <VContext.Provider
      value={{
        message,
        reaction,
        activeBuildingId,
        isInitialWelcome,
        setActiveBuildingId,
        setMessage,
        showTip,
        isPinned,
        floatingOpen,
        setFloatingOpen,
        setReaction,
      }}
    >
      {children}
    </VContext.Provider>
  );
}

export function useV() {
  const ctx = useContext(VContext);
  if (!ctx) throw new Error("useV must be used within VProvider");
  return ctx;
}

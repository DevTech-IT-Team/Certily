import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_ILLY_MESSAGE } from "@/lib/illy-guide";

export type IllyReaction = "hi" | "point" | "stand" | "stare" | "think";

type IllyContextValue = {
  message: string;
  reaction: IllyReaction;
  setMessage: (message: string, pin?: boolean, reaction?: IllyReaction) => void;
  showTip: (message: string, pin?: boolean, reaction?: IllyReaction) => void;
  isPinned: () => boolean;
  floatingOpen: boolean;
  setFloatingOpen: (open: boolean) => void;
  setReaction: (reaction: IllyReaction) => void;
};

export const IllyContext = createContext<IllyContextValue | null>(null);

export function IllyProvider({ children }: { children: ReactNode }) {
  const [message, setMessageState] = useState(DEFAULT_ILLY_MESSAGE);
  const [reaction, setReactionState] = useState<IllyReaction>("hi");
  const [floatingOpen, setFloatingOpen] = useState(false);
  const pinnedUntil = useRef(0);

  const isPinned = useCallback(() => Date.now() < pinnedUntil.current, []);

  const setMessage = useCallback((next: string, pin = false, nextReaction?: IllyReaction) => {
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

  const setReaction = useCallback((r: IllyReaction) => {
    setReactionState(r);
  }, []);

  return (
    <IllyContext.Provider
      value={{
        message,
        reaction,
        setMessage,
        showTip,
        isPinned,
        floatingOpen,
        setFloatingOpen,
        setReaction,
      }}
    >
      {children}
    </IllyContext.Provider>
  );
}

export function useIlly() {
  const ctx = useContext(IllyContext);
  if (!ctx) throw new Error("useIlly must be used within IllyProvider");
  return ctx;
}

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { DEFAULT_ILLY_MESSAGE } from "@/lib/illy-guide";

type IllyContextValue = {
  message: string;
  setMessage: (message: string, pin?: boolean) => void;
  showTip: (message: string, pin?: boolean) => void;
  isPinned: () => boolean;
  floatingOpen: boolean;
  setFloatingOpen: (open: boolean) => void;
};

const IllyContext = createContext<IllyContextValue | null>(null);

export function IllyProvider({ children }: { children: ReactNode }) {
  const [message, setMessageState] = useState(DEFAULT_ILLY_MESSAGE);
  const [floatingOpen, setFloatingOpen] = useState(false);
  const pinnedUntil = useRef(0);

  const isPinned = useCallback(() => Date.now() < pinnedUntil.current, []);

  const setMessage = useCallback((next: string, pin = false) => {
    if (pin) pinnedUntil.current = Date.now() + 8000;
    setMessageState(next);
  }, []);

  const showTip = setMessage;

  return (
    <IllyContext.Provider
      value={{
        message,
        setMessage,
        showTip,
        isPinned,
        floatingOpen,
        setFloatingOpen,
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

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import {
  type Currency,
  FALLBACK_INR_PER_USD,
  currencyFromIp,
  currencyFromTimezone,
  fetchLiveInrPerUsd,
  formatListedPrice,
  formatMoney,
  readCachedFx,
  readStoredCurrency,
  writeCachedFx,
  writeStoredCurrency,
} from "@/lib/pricing";

type CurrencyContextValue = {
  currency: Currency;
  setCurrency: (currency: Currency) => void;
  formatPrice: (raw: string) => string;
  formatAmount: (amountInr: number) => string;
};

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrencyState] = useState<Currency>("INR");
  const [inrPerUsd, setInrPerUsd] = useState(FALLBACK_INR_PER_USD);

  useEffect(() => {
    const fromTz = currencyFromTimezone();
    if (fromTz) setCurrencyState(fromTz);

    const cached = readCachedFx();
    if (cached) setInrPerUsd(cached);

    let cancelled = false;
    let idleId = 0;
    let timeoutId = 0;
    const startNetwork = () => {
      if (cancelled) return;
      currencyFromIp().then((fromIp) => {
        if (cancelled || !fromIp) return;
        setCurrencyState(fromIp);
      });
      fetchLiveInrPerUsd().then((live) => {
        if (cancelled || !live) return;
        setInrPerUsd(live);
        writeCachedFx(live);
      });
    };

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(startNetwork, { timeout: 2500 });
    } else {
      timeoutId = window.setTimeout(startNetwork, 1200);
    }

    const id = window.setInterval(() => {
      fetchLiveInrPerUsd().then((live) => {
        if (cancelled || !live) return;
        setInrPerUsd(live);
        writeCachedFx(live);
      });
    }, 15 * 60 * 1000);

    return () => {
      cancelled = true;
      if (idleId) window.cancelIdleCallback(idleId);
      if (timeoutId) window.clearTimeout(timeoutId);
      window.clearInterval(id);
    };
  }, []);

  const setCurrency = useCallback((next: Currency) => {
    setCurrencyState(next);
    writeStoredCurrency(next);
  }, []);

  const value = useMemo<CurrencyContextValue>(
    () => ({
      currency,
      setCurrency,
      formatPrice: (raw) => formatListedPrice(raw, currency, inrPerUsd),
      formatAmount: (amountInr) => formatMoney(amountInr, currency, inrPerUsd),
    }),
    [currency, inrPerUsd, setCurrency],
  );

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
}

export function useCurrency() {
  const ctx = useContext(CurrencyContext);
  if (!ctx) {
    throw new Error("useCurrency must be used within CurrencyProvider");
  }
  return ctx;
}

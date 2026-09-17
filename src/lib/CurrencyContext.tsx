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

    let cancelled = false;
    currencyFromIp().then((fromIp) => {
      if (cancelled || !fromIp) return;
      setCurrencyState(fromIp);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const cached = readCachedFx();
    if (cached) setInrPerUsd(cached);

    let cancelled = false;
    const loadRate = async () => {
      const live = await fetchLiveInrPerUsd();
      if (cancelled || !live) return;
      setInrPerUsd(live);
      writeCachedFx(live);
    };
    loadRate();
    const id = window.setInterval(loadRate, 15 * 60 * 1000);
    return () => {
      cancelled = true;
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

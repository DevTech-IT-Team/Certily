export type Currency = "INR" | "USD";

const STORAGE_KEY = "certcia_currency";
const RATE_KEY = "certcia_fx_inr_usd";
export const FALLBACK_INR_PER_USD = 83;

type CachedRate = { inrPerUsd: number; at: number };

export function parseInrAmount(raw: string): number | null {
  if (!raw || /^free$/i.test(raw.trim())) return null;
  const n = parseFloat(raw.replace(/[^0-9.]/g, ""));
  return Number.isFinite(n) ? n : null;
}

export function formatMoney(
  amountInr: number,
  currency: Currency,
  inrPerUsd = FALLBACK_INR_PER_USD,
): string {
  if (currency === "INR") {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amountInr);
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amountInr / inrPerUsd);
}

export function formatListedPrice(
  raw: string,
  currency: Currency,
  inrPerUsd = FALLBACK_INR_PER_USD,
): string {
  const amount = parseInrAmount(raw);
  if (amount === null) return "Free";
  return formatMoney(amount, currency, inrPerUsd);
}

export function readStoredCurrency(): Currency | null {
  if (typeof window === "undefined") return null;
  const stored = window.localStorage.getItem(STORAGE_KEY);
  return stored === "INR" || stored === "USD" ? stored : null;
}

export function writeStoredCurrency(currency: Currency) {
  window.localStorage.setItem(STORAGE_KEY, currency);
}

export function readCachedFx(): number | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(RATE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as CachedRate;
    return parsed.inrPerUsd > 1 ? parsed.inrPerUsd : null;
  } catch {
    return null;
  }
}

export function writeCachedFx(inrPerUsd: number) {
  window.localStorage.setItem(
    RATE_KEY,
    JSON.stringify({ inrPerUsd, at: Date.now() } satisfies CachedRate),
  );
}

export async function fetchLiveInrPerUsd(): Promise<number | null> {
  try {
    const res = await fetch("https://open.er-api.com/v6/latest/USD");
    if (!res.ok) return null;
    const data = (await res.json()) as { rates?: { INR?: number } };
    const inr = data.rates?.INR;
    if (!inr || inr < 1) return null;
    return inr;
  } catch {
    return null;
  }
}

export function currencyFromTimezone(): Currency | null {
  if (typeof Intl === "undefined") return null;
  const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
  if (tz === "Asia/Kolkata" || tz === "Asia/Calcutta") return "INR";
  if (tz.startsWith("America/")) return "USD";
  const lang = typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "";
  if (lang.endsWith("-in") || lang.startsWith("hi")) return "INR";
  if (lang.endsWith("-us")) return "USD";
  return null;
}

export async function currencyFromIp(): Promise<Currency | null> {
  try {
    const res = await fetch("https://ipwho.is/?fields=country_code,success");
    if (!res.ok) return null;
    const data = (await res.json()) as { success?: boolean; country_code?: string };
    if (!data.success || !data.country_code) return null;
    return data.country_code === "IN" ? "INR" : "USD";
  } catch {
    return null;
  }
}

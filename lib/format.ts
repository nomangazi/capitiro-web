export type CurrencyCode = "USD" | "EUR" | "GBP";

export interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  /** Locale used for number formatting. English locales keep copy and numbers consistent. */
  locale: string;
  label: string;
}

export const currencies: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: "USD", symbol: "$", locale: "en-US", label: "US Dollar" },
  EUR: { code: "EUR", symbol: "€", locale: "en-IE", label: "Euro" },
  GBP: { code: "GBP", symbol: "£", locale: "en-GB", label: "British Pound" },
};

export const currencyCodes = Object.keys(currencies) as CurrencyCode[];

export function isCurrencyCode(value: unknown): value is CurrencyCode {
  return typeof value === "string" && value in currencies;
}

const formatterCache = new Map<string, Intl.NumberFormat>();

function getFormatter(locale: string, options: Intl.NumberFormatOptions): Intl.NumberFormat {
  const key = `${locale}|${JSON.stringify(options)}`;
  let formatter = formatterCache.get(key);
  if (!formatter) {
    formatter = new Intl.NumberFormat(locale, options);
    formatterCache.set(key, formatter);
  }
  return formatter;
}

/** "$1,234" / "€1,234" / "£1,234". Non-finite values render as an em dash. */
export function formatMoney(value: number, currency: CurrencyCode = "USD", decimals = 0): string {
  if (!Number.isFinite(value)) return "—";
  const info = currencies[currency];
  return getFormatter(info.locale, {
    style: "currency",
    currency: info.code,
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);
}

/** Short axis labels: "$12K", "€1.2M". */
export function formatCompactMoney(value: number, currency: CurrencyCode = "USD"): string {
  if (!Number.isFinite(value)) return "—";
  const info = currencies[currency];
  return getFormatter(info.locale, {
    style: "currency",
    currency: info.code,
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(value);
}

export function formatNumber(value: number, decimals = 0): string {
  if (!Number.isFinite(value)) return "—";
  return getFormatter("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals }).format(value);
}

export function formatPercent(value: number, decimals = 1): string {
  if (!Number.isFinite(value)) return "—";
  return `${formatNumber(value, decimals)}%`;
}

/** 32 → "2 years 8 months", 12 → "1 year", 5 → "5 months". */
export function formatDuration(totalMonths: number): string {
  if (!Number.isFinite(totalMonths)) return "Never";
  const months = Math.max(0, Math.round(totalMonths));
  const years = Math.floor(months / 12);
  const rest = months % 12;
  const parts: string[] = [];
  if (years > 0) parts.push(`${years} ${years === 1 ? "year" : "years"}`);
  if (rest > 0 || years === 0) parts.push(`${rest} ${rest === 1 ? "month" : "months"}`);
  return parts.join(" ");
}

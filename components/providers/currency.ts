"use client";

import { useCallback, useSyncExternalStore } from "react";
import {
  currencies,
  formatCompactMoney,
  formatMoney,
  isCurrencyCode,
  type CurrencyCode,
} from "@/lib/format";

const STORAGE_KEY = "capitiro-currency";
const EUROZONE = new Set([
  "AT", "BE", "HR", "CY", "EE", "FI", "FR", "DE", "GR", "IE", "IT",
  "LV", "LT", "LU", "MT", "NL", "PT", "SK", "SI", "ES",
]);
const EURO_LANGUAGES = new Set(["de", "fr", "it", "es", "nl", "pt", "fi", "el", "sk", "sl", "et", "lv", "lt", "ga", "mt", "hr"]);

/** Best guess from the browser locale: en-GB → GBP, eurozone → EUR, otherwise USD. */
function detectCurrency(): CurrencyCode {
  const [language, region] = (navigator.language || "en-US").split("-");
  const country = region?.toUpperCase();
  if (country === "GB") return "GBP";
  if (country && EUROZONE.has(country)) return "EUR";
  if (!country && EURO_LANGUAGES.has(language.toLowerCase())) return "EUR";
  return "USD";
}

let current: CurrencyCode | null = null;
const listeners = new Set<() => void>();

function readInitial(): CurrencyCode {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isCurrencyCode(stored)) return stored;
  } catch {
    // Storage can be blocked (private mode, strict cookie settings) — fall back to detection.
  }
  return detectCurrency();
}

function getSnapshot(): CurrencyCode {
  if (current === null) current = readInitial();
  return current;
}

function getServerSnapshot(): CurrencyCode {
  return "USD";
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

export function setCurrency(code: CurrencyCode) {
  current = code;
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Preference just won't persist.
  }
  listeners.forEach((listener) => listener());
}

/** Visitor's display currency (USD/EUR/GBP) plus bound formatters. Shared across all components. */
export function useCurrency() {
  const currency = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const money = useCallback((value: number, decimals = 0) => formatMoney(value, currency, decimals), [currency]);
  const compact = useCallback((value: number) => formatCompactMoney(value, currency), [currency]);
  return { currency, symbol: currencies[currency].symbol, setCurrency, money, compact };
}

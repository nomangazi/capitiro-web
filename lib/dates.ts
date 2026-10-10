/** "2026-10-10" → "October 10, 2026". Dates are ISO calendar days, formatted in UTC so they never shift by timezone. */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" });
}

/** Latest of several ISO dates (lexical order works for YYYY-MM-DD). */
export function latestDate(dates: string[]): string {
  return dates.reduce((latest, d) => (d > latest ? d : latest), dates[0]);
}

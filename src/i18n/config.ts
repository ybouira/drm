export const LOCALES = ["en", "it"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

export const LOCALE_COOKIE = "drommer-lang";

export function parseLocale(value: string | undefined | null): Locale {
  return value === "it" ? "it" : DEFAULT_LOCALE;
}

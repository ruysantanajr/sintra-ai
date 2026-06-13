import type { Locale } from "./i18n";

export type LocalizedString = Record<Locale, string>;

export function localize(value: string | LocalizedString, locale: Locale): string {
  if (typeof value === "string") return value;
  return value[locale] ?? value.en ?? "";
}

export function localizeArray(
  value: string[] | Record<Locale, string[]>,
  locale: Locale
): string[] {
  if (Array.isArray(value)) return value;
  return value[locale] ?? value.en ?? [];
}

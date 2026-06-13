"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import translations, { type Locale, type Translations } from "@/lib/i18n";

interface LanguageCtx {
  locale: Locale;
  t:      Translations;
  toggle: () => void;
  setLocale: (l: Locale) => void;
}

const STORAGE_KEY = "sintra_locale";
const VALID_LOCALES: Locale[] = ["en", "pt-BR"];

function detectInitial(): Locale {
  if (typeof window === "undefined") return "en";
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved && VALID_LOCALES.includes(saved as Locale)) return saved as Locale;
  } catch {}
  const nav = window.navigator.language || "";
  if (nav.toLowerCase().startsWith("pt")) return "pt-BR";
  return "en";
}

const Ctx = createContext<LanguageCtx>({
  locale: "en",
  t:      translations.en,
  toggle: () => {},
  setLocale: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    setLocaleState(detectInitial());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
    }
    try { window.localStorage.setItem(STORAGE_KEY, locale); } catch {}
  }, [locale]);

  const setLocale = useCallback((l: Locale) => setLocaleState(l), []);
  const toggle = useCallback(
    () => setLocaleState(l => (l === "en" ? "pt-BR" : "en")),
    []
  );

  return (
    <Ctx.Provider value={{ locale, t: translations[locale], toggle, setLocale }}>
      {children}
    </Ctx.Provider>
  );
}

export function useLanguage() {
  return useContext(Ctx);
}

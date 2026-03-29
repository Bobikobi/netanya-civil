'use client';
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export type Locale = 'he' | 'en' | 'ru';

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  dir: 'rtl' | 'ltr';
}

const I18nContext = createContext<I18nContextType>({
  locale: 'he',
  setLocale: () => {},
  dir: 'rtl',
});

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('he');

  useEffect(() => {
    const saved = localStorage.getItem('locale') as Locale | null;
    if (saved && ['he', 'en', 'ru'].includes(saved)) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('locale', l);
  }, []);

  // Sync <html lang> and dir with locale
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === 'he' ? 'rtl' : 'ltr';
  }, [locale]);

  const dir = locale === 'he' ? 'rtl' : 'ltr';

  return (
    <I18nContext.Provider value={{ locale, setLocale, dir }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export const LOCALE_LABELS: Record<Locale, string> = {
  he: 'עברית',
  en: 'English',
  ru: 'Русский',
};

export const LOCALE_FLAGS: Record<Locale, string> = {
  he: '🇮🇱',
  en: '🇬🇧',
  ru: '🇷🇺',
};

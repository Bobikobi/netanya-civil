'use client';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Home, Heart, Users, MessageSquare, HelpCircle, Shield, Phone, GitBranch, Globe } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';
import { I18nProvider, useI18n, LOCALE_FLAGS, Locale } from '@/lib/i18n';
import { PhoneAuthProvider } from '@/lib/phone-auth';
import { nav, footer } from '@/lib/translations';

const NAV_ITEMS = [
  { href: '/emergency', key: 'home', icon: Home },
  { href: '/emergency/mashe', key: 'mashe', icon: Heart },
  { href: '/emergency/teams', key: 'teams', icon: Users },
  { href: '/emergency/scripts', key: 'scripts', icon: MessageSquare },
  { href: '/emergency/contacts', key: 'contacts', icon: Phone },
  { href: '/emergency/orgchart', key: 'orgchart', icon: GitBranch },
  { href: '/emergency/faq', key: 'faq', icon: HelpCircle },
];

function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const locales: Locale[] = ['he', 'en', 'ru'];

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={locale === 'he' ? 'בחירת שפה' : locale === 'en' ? 'Select language' : 'Выбор языка'}
        className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs md:text-sm font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-all duration-200"
      >
        <Globe size={14} />
        <span className="hidden md:inline">{LOCALE_FLAGS[locale]}</span>
      </button>
      {open && (
        <div role="menu" className="absolute top-full mt-1 bg-white border border-gray-200 rounded-xl shadow-lg py-1 z-50 min-w-[120px]" style={{ left: 0 }}>
          {locales.map(l => (
            <button
              key={l}
              role="menuitem"
              aria-current={l === locale ? 'true' : undefined}
              onClick={() => { setLocale(l); setOpen(false); }}
              onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}
              className={`w-full text-right px-4 py-2 text-sm hover:bg-gray-50 flex items-center gap-2 ${l === locale ? 'font-bold text-gray-900' : 'text-gray-600'}`}
            >
              <span>{LOCALE_FLAGS[l]}</span>
              <span>{l === 'he' ? 'עברית' : l === 'en' ? 'English' : 'Русский'}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function LayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { locale, dir } = useI18n();
  const t = (key: string, dict: Record<string, Record<Locale, string>>) => dict[key]?.[locale] ?? dict[key]?.['he'] ?? key;

  return (
    <div dir={dir} className="min-h-screen bg-gray-50 text-gray-900">
      {/* Skip to content */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:z-[100] focus:bg-white focus:border focus:border-gray-300 focus:rounded-lg focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-gray-900 focus:shadow-lg" style={{ [dir === 'rtl' ? 'right' : 'left']: '0.5rem' }}>
        {locale === 'he' ? 'דלג לתוכן' : locale === 'en' ? 'Skip to content' : 'Перейти к содержанию'}
      </a>
      {/* Sticky top navigation */}
      <nav aria-label={locale === 'he' ? 'ניווט ראשי' : locale === 'en' ? 'Main navigation' : 'Главная навигация'} className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Nav items */}
            <div className="flex items-center gap-1 min-w-0 flex-1">
              <div className="flex items-center gap-0.5 md:gap-1 overflow-x-auto scrollbar-hide min-w-0">
                {NAV_ITEMS.map(item => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex items-center gap-1.5 px-2.5 md:px-4 py-2 rounded-lg text-xs md:text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-500 hover:text-gray-900 hover:bg-gray-100'
                    }`}
                  >
                      <Icon size={14} className="md:hidden flex-shrink-0" aria-hidden="true" />
                      {t(item.key, nav)}
                    </Link>
                  );
                })}
              </div>
              <LanguageSwitcher />
            </div>
            {/* Logo + Brand */}
            <div className="flex items-center gap-3">
              <Link href="/emergency" className="hidden md:flex items-center gap-3 border border-gray-200 rounded-xl px-4 py-2">
                <Shield size={22} className="text-gray-500" />
                <div className={locale === 'he' ? 'text-right' : 'text-left'}>
                  <div className="font-bold text-sm text-gray-900 leading-tight">{t('brand', nav)}</div>
                  <div className="text-[11px] text-gray-400 leading-tight">{t('brandSub', nav)}</div>
                </div>
              </Link>
              <Link href="/emergency">
                <Image src="/netanya-logo.png" alt="עיריית נתניה" width={140} height={40} className="h-8 md:h-9 w-auto min-w-[80px]" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main id="main-content" className="animate-fadeIn">
        {children}
      </main>

      {/* Footer */}
      <footer aria-label={locale === 'he' ? 'כותרת תחתונה' : locale === 'en' ? 'Footer' : 'Подвал'} className="border-t border-gray-200 bg-white py-6 mt-16">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm space-y-2">
          <p className="text-gray-600 font-medium">{t('line1', footer)}</p>
          <p className="text-gray-400 text-xs">{t('line2', footer)}</p>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 pt-2 border-t border-gray-100 mt-3">
            <Link href="/emergency/accessibility" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">{t('accessibility', footer)}</Link>
            <Link href="/emergency/privacy" className="text-xs text-gray-400 hover:text-blue-500 transition-colors">{t('privacy', footer)}</Link>
            <span className="text-xs text-gray-300">© {new Date().getFullYear()} אלעד סעדון</span>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 800px; }
        }
        @keyframes pulseArrow {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(4px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
          overflow: hidden;
        }
        .animate-pulseArrow {
          animation: pulseArrow 1.5s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        }
      `}</style>
    </div>
  );
}

export default function EmergencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <PhoneAuthProvider>
        <LayoutInner>{children}</LayoutInner>
      </PhoneAuthProvider>
    </I18nProvider>
  );
}

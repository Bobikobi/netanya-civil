'use client';
import { useState } from 'react';
import { Phone, Search, Copy, Check, ExternalLink, Lock } from 'lucide-react';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import { usePhoneAuth, ContactData } from '@/lib/phone-auth';
import { contactsPage } from '@/lib/translations';

const CATEGORIES = [
  'מטה מכלול',
  'צוותי התערבות',
  'רובעים',
  'מס"ר',
  'מטה מל"מ',
  'מטה רגשי',
  'קו פתוח',
  'קישור בתי חולים',
  'מטה חללים',
  'אוכלוסיות מיוחדות',
  'קליטת אוכלוסייה',
  'תפעול ומתנדבים',
  'אזרחים ותיקים',
  'קליטת עלייה',
  'תיירות',
  'בריאות',
  'ט.ל.י.ה',
  'גורמי חוץ',
];

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  'מטה מכלול': { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700', badge: 'bg-slate-100 text-slate-600' },
  'צוותי התערבות': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100 text-red-600' },
  'רובעים': { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-700', badge: 'bg-orange-100 text-orange-600' },
  'מס"ר': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-600' },
  'מטה מל"מ': { bg: 'bg-cyan-50', border: 'border-cyan-200', text: 'text-cyan-700', badge: 'bg-cyan-100 text-cyan-600' },
  'מטה רגשי': { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', badge: 'bg-pink-100 text-pink-600' },
  'קו פתוח': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-100 text-green-600' },
  'קישור בתי חולים': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-600' },
  'מטה חללים': { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-700', badge: 'bg-gray-200 text-gray-600' },
  'אוכלוסיות מיוחדות': { bg: 'bg-violet-50', border: 'border-violet-200', text: 'text-violet-700', badge: 'bg-violet-100 text-violet-600' },
  'קליטת אוכלוסייה': { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', badge: 'bg-teal-100 text-teal-600' },
  'תפעול ומתנדבים': { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-600' },
  'אזרחים ותיקים': { bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-700', badge: 'bg-emerald-100 text-emerald-600' },
  'קליטת עלייה': { bg: 'bg-sky-50', border: 'border-sky-200', text: 'text-sky-700', badge: 'bg-sky-100 text-sky-600' },
  'תיירות': { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-600' },
  'בריאות': { bg: 'bg-lime-50', border: 'border-lime-200', text: 'text-lime-700', badge: 'bg-lime-100 text-lime-600' },
  'ט.ל.י.ה': { bg: 'bg-fuchsia-50', border: 'border-fuchsia-200', text: 'text-fuchsia-700', badge: 'bg-fuchsia-100 text-fuchsia-600' },
  'גורמי חוץ': { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', badge: 'bg-indigo-100 text-indigo-600' },
};

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const { locale } = useI18n();
  const { unlocked, requestUnlock, pageContacts } = usePhoneAuth();
  const allContacts = pageContacts('contacts');

  function copyPhone(phone: string) {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 1500);
  }

  if (!unlocked) {
    const labels = {
      title: { he: 'ספר טלפונים מוגן', en: 'Protected Phone Book', ru: 'Защищённый справочник' },
      desc: { he: 'הזן סיסמה כדי לגשת לספר הטלפונים', en: 'Enter password to access the phone book', ru: 'Введите пароль для доступа к справочнику' },
    };
    return (
      <div className="max-w-md mx-auto px-6 py-20">
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-center space-y-6">
          <div className="mx-auto w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
            <Lock size={28} className="text-gray-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">{labels.title[locale]}</h1>
            <p className="text-gray-400 text-sm mt-1">{labels.desc[locale]}</p>
          </div>
          <button
            onClick={requestUnlock}
            className="w-full bg-gray-900 text-white font-bold rounded-xl px-4 py-3 hover:bg-gray-800 transition-colors"
          >
            {{
              he: 'הזן סיסמה',
              en: 'Enter Password',
              ru: 'Ввести пароль',
            }[locale]}
          </button>
        </div>
      </div>
    );
  }

  const filtered = allContacts.filter(c => {
    const matchesSearch =
      !search ||
      c.name.includes(search) ||
      c.role.includes(search) ||
      c.phone.includes(search) ||
      (c.parent_id || '').includes(search);
    const matchesCategory = !activeCategory || c.parent_id === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const grouped = CATEGORIES.map(cat => ({
    category: cat,
    contacts: filtered.filter(c => c.parent_id === cat),
  })).filter(g => g.contacts.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{contactsPage.title[locale]}</h1>
        <p className="text-gray-400 text-base">{contactsPage.subtitle[locale]}</p>
      </section>

      {/* Yachad link */}
      <div className="text-center">
        <a href="https://go.gov.il/wrwov" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-blue-100 transition-colors">
          <ExternalLink size={15} />
          {contactsPage.yachadLink[locale]}
        </a>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder={contactsPage.searchPlaceholder[locale]}
          aria-label={contactsPage.searchPlaceholder[locale]}
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="w-full bg-white border border-gray-200 rounded-xl pr-11 pl-4 py-3 text-sm text-gray-700 placeholder:text-gray-400 focus:outline-none focus:border-blue-300 focus:ring-2 focus:ring-blue-100 transition-all"
        />
      </div>

      {/* Category filter chips */}
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setActiveCategory(null)}
          className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
            !activeCategory ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          }`}
        >
          {contactsPage.allCategories[locale]}
        </button>
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeCategory === cat ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Contact cards grouped by category */}
      <div className="space-y-6">
        {grouped.map(group => {
          const colors = CATEGORY_COLORS[group.category] || CATEGORY_COLORS['גורמי חוץ'];
          return (
            <div key={group.category}>
              <div className="flex items-center gap-2 mb-3">
                <span className={`${colors.badge} px-3 py-1 rounded-lg text-xs font-bold`}>
                  {group.category}
                </span>
                <span className="text-gray-300 text-xs">{group.contacts.length} אנשי קשר</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                {group.contacts.map((contact, idx) => (
                  <div
                    key={idx}
                    className={`${colors.bg} border ${colors.border} rounded-xl p-3.5 hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0 flex-1">
                        <div className="font-bold text-gray-900 text-sm truncate">
                          {contact.name || <span className="text-gray-300 font-normal">טרם הוזן</span>}
                        </div>
                        <div className="text-xs text-gray-500 mt-0.5">{contact.role}</div>
                      </div>
                    </div>
                    {contact.phone && (
                      <div className="mt-2.5 flex items-center gap-1.5">
                        <a
                          href={`tel:${contact.phone}`}
                          className={`flex items-center gap-1.5 ${colors.text} text-sm font-medium hover:underline`}
                          dir="ltr"
                        >
                          <Phone size={13} />
                          {contact.phone}
                        </a>
                        <button
                          onClick={() => copyPhone(contact.phone)}
                          className="p-1 rounded-md hover:bg-white/80 transition-colors"
                          title="העתק מספר"
                        >
                          {copiedPhone === contact.phone ? (
                            <Check size={13} className="text-green-500" />
                          ) : (
                            <Copy size={13} className="text-gray-400" />
                          )}
                        </button>
                      </div>
                    )}
                    {!contact.phone && (
                      <div className="mt-2.5 text-xs text-gray-300">מספר טלפון טרם הוזן</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12">
          <Phone size={40} className="mx-auto text-gray-200 mb-3" />
          <p className="text-gray-400 text-sm">לא נמצאו אנשי קשר תואמים</p>
        </div>
      )}

      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
        <p className="text-amber-700 text-sm font-medium">
          מבוסס על תרשים מבנה ארגוני מכלול אוכלוסייה · מעודכן אפריל 2026
        </p>
      </div>
    </div>
  );
}

'use client';
import { useState } from 'react';
import { Phone, Search, Copy, Check, ExternalLink } from 'lucide-react';
import React from 'react';

export interface Contact {
  name: string;
  role: string;
  phone: string;
  phone2?: string;
  category: string;
}

const CONTACTS: Contact[] = [
  // מטה מכלול אוכלוסייה
  { name: '', role: 'ראש מכלול אוכלוסייה', phone: '', category: 'מטה מכלול' },
  { name: '', role: 'סגן ראש מכלול', phone: '', category: 'מטה מכלול' },
  { name: '', role: 'ראש תא רווחה', phone: '', category: 'מטה מכלול' },
  { name: '', role: 'רכז מידע ודיווח', phone: '', category: 'מטה מכלול' },
  { name: '', role: 'קצין קישור פיקוד העורף', phone: '', category: 'מטה מכלול' },

  // צוות תקרית
  { name: '', role: 'ראש צוות תקרית', phone: '', category: 'צוות תקרית' },
  { name: '', role: 'חבר צוות תקרית', phone: '', category: 'צוות תקרית' },

  // מס"ר
  { name: '', role: 'מנהל מס"ר', phone: '', category: 'מס"ר' },
  { name: '', role: 'אחראי מתחם קליטה', phone: '', category: 'מס"ר' },
  { name: '', role: 'אחראי מתחם המתנה', phone: '', category: 'מס"ר' },
  { name: '', role: 'אחראי מתחם שיבוץ', phone: '', category: 'מס"ר' },
  { name: '', role: 'אחראי מתחם נעדרים', phone: '', category: 'מס"ר' },

  // צוות מלונות
  { name: '', role: 'ראש צוות מלונות', phone: '', category: 'צוות מלונות' },
  { name: '', role: 'רכז שיבוצים', phone: '', category: 'צוות מלונות' },

  // צוות קישור לבתי חולים
  { name: '', role: 'קישור לניאדו', phone: '', category: 'קישור בתי חולים' },
  { name: '', role: 'קישור מאיר', phone: '', category: 'קישור בתי חולים' },
  { name: '', role: 'קישור הלל יפה', phone: '', category: 'קישור בתי חולים' },

  // צוות בשורה מרה
  { name: '', role: 'ראש צוות בשורה מרה', phone: '', category: 'בשורה מרה' },

  // צוות תל"ם
  { name: '', role: 'ראש צוות תל"ם', phone: '', category: 'תל"ם' },

  // צוות מענה רגשי / קו פתוח
  { name: '', role: 'ראש צוות קו פתוח', phone: '', category: 'קו פתוח' },

  // צוות מתנדבים
  { name: '', role: 'ראש צוות מתנדבים', phone: '', category: 'מתנדבים וקהילה' },
  { name: '', role: 'רכז לוגיסטיקה', phone: '', category: 'מתנדבים וקהילה' },

  // "מי יציל את המציל"
  { name: '', role: 'אחראי ונטילציה', phone: '', category: 'מי יציל את המציל' },

  // גורמי חוץ
  { name: 'מוקד עירוני', role: 'מוקד 106', phone: '106', category: 'גורמי חוץ' },
  { name: 'משטרת ישראל', role: 'מוקד 100', phone: '100', category: 'גורמי חוץ' },
  { name: 'מד"א', role: 'מוקד 101', phone: '101', category: 'גורמי חוץ' },
  { name: 'כיבוי והצלה', role: 'מוקד 102', phone: '102', category: 'גורמי חוץ' },
  { name: 'פיקוד העורף', role: 'מוקד 104', phone: '104', category: 'גורמי חוץ' },
  { name: 'ער"ן – עזרה ראשונה נפשית', role: 'קו חירום', phone: '1201', category: 'גורמי חוץ' },
  { name: 'נט"ל – קו סיוע רגשי', role: 'קו חירום', phone: '*2784', category: 'גורמי חוץ' },
];

const CATEGORIES = [
  'מטה מכלול',
  'צוות תקרית',
  'מס"ר',
  'צוות מלונות',
  'קישור בתי חולים',
  'בשורה מרה',
  'תל"ם',
  'קו פתוח',
  'מתנדבים וקהילה',
  'מי יציל את המציל',
  'גורמי חוץ',
];

const CATEGORY_COLORS: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  'מטה מכלול': { bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-700', badge: 'bg-slate-100 text-slate-600' },
  'צוות תקרית': { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-700', badge: 'bg-red-100 text-red-600' },
  'מס"ר': { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-700', badge: 'bg-blue-100 text-blue-600' },
  'צוות מלונות': { bg: 'bg-teal-50', border: 'border-teal-200', text: 'text-teal-700', badge: 'bg-teal-100 text-teal-600' },
  'קישור בתי חולים': { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-700', badge: 'bg-purple-100 text-purple-600' },
  'בשורה מרה': { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-700', badge: 'bg-gray-200 text-gray-600' },
  'תל"ם': { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-700', badge: 'bg-pink-100 text-pink-600' },
  'קו פתוח': { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-700', badge: 'bg-green-100 text-green-600' },
  'מתנדבים וקהילה': { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-600' },
  'מי יציל את המציל': { bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-700', badge: 'bg-rose-100 text-rose-600' },
  'גורמי חוץ': { bg: 'bg-indigo-50', border: 'border-indigo-200', text: 'text-indigo-700', badge: 'bg-indigo-100 text-indigo-600' },
};

export default function ContactsPage() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  function copyPhone(phone: string) {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 1500);
  }

  const filtered = CONTACTS.filter(c => {
    const matchesSearch =
      !search ||
      c.name.includes(search) ||
      c.role.includes(search) ||
      c.phone.includes(search) ||
      c.category.includes(search);
    const matchesCategory = !activeCategory || c.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const grouped = CATEGORIES.map(cat => ({
    category: cat,
    contacts: filtered.filter(c => c.category === cat),
  })).filter(g => g.contacts.length > 0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-8">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">ספר טלפונים</h1>
        <p className="text-gray-400 text-base">אנשי קשר מרכזיים לפי צוותים – לחצו על מספר כדי לחייג</p>
      </section>

      {/* Yachad link */}
      <div className="text-center">
        <a href="https://go.gov.il/wrwov" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-blue-100 transition-colors">
          <ExternalLink size={15} />
          כניסה למערכת יחד – לחץ כאן
        </a>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="חיפוש לפי שם, תפקיד או צוות..."
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
          הכל
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
                        {contact.phone2 && (
                          <a
                            href={`tel:${contact.phone2}`}
                            className={`flex items-center gap-1 ${colors.text} text-sm font-medium hover:underline mr-2`}
                            dir="ltr"
                          >
                            <Phone size={13} />
                            {contact.phone2}
                          </a>
                        )}
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

      {/* Note */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 text-center">
        <p className="text-amber-700 text-sm font-medium">
          הספר מעודכן לפי מבנה צוותי החירום. יש להשלים שמות ומספרים בהתאם לרשימה העדכנית של מנהל המכלול.
        </p>
      </div>
    </div>
  );
}

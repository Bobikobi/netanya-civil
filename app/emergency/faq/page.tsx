'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Database, LogIn, BarChart3, Truck, FileText, Building2, Headphones, ExternalLink } from 'lucide-react';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import { faqPage, faqCategories, faqUI } from '@/lib/translations';

const FAQ_ICONS: Record<string, { icon: React.ElementType; iconColor: string; iconBg: string }> = {
  general: { icon: HelpCircle, iconColor: 'text-blue-500', iconBg: 'bg-blue-100' },
  data_entry: { icon: Database, iconColor: 'text-emerald-500', iconBg: 'bg-emerald-100' },
  access: { icon: LogIn, iconColor: 'text-purple-500', iconBg: 'bg-purple-100' },
  reports: { icon: BarChart3, iconColor: 'text-amber-500', iconBg: 'bg-amber-100' },
  evacuation: { icon: Truck, iconColor: 'text-red-500', iconBg: 'bg-red-100' },
  forms: { icon: FileText, iconColor: 'text-teal-500', iconBg: 'bg-teal-100' },
  municipality: { icon: Building2, iconColor: 'text-indigo-500', iconBg: 'bg-indigo-100' },
  support: { icon: Headphones, iconColor: 'text-pink-500', iconBg: 'bg-pink-100' },
};

export default function FAQPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);
  const { locale } = useI18n();

  function toggleCategory(id: string) {
    setExpandedCategory(prev => (prev === id ? null : id));
    setExpandedQuestion(null);
  }

  function toggleQuestion(key: string) {
    setExpandedQuestion(prev => (prev === key ? null : key));
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{faqPage.title[locale]}</h1>
        <p className="text-gray-400 text-base">{faqPage.subtitle[locale]}</p>
      </section>

      {/* Yachad link */}
      <div className="text-center">
        <a href="https://go.gov.il/wrwov" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-blue-100 transition-colors">
          <ExternalLink size={15} />
          {faqPage.yachadLink[locale]}
        </a>
      </div>

      <div className="space-y-3">
        {faqCategories.map(category => {
          const icons = FAQ_ICONS[category.id] || FAQ_ICONS.general;
          const Icon = icons.icon;
          const isCatExpanded = expandedCategory === category.id;
          return (
            <div key={category.id} className={`bg-white border border-gray-200 ${isCatExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} overflow-hidden shadow-sm`}>
              <button
                onClick={() => toggleCategory(category.id)}
                aria-expanded={isCatExpanded}
                aria-controls={`faq-cat-${category.id}`}
                className="w-full flex items-center gap-4 p-5 text-right hover:bg-gray-50 transition-colors"
              >
                <div className={`${icons.iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className={icons.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{category.title[locale]}</div>
                  <div className="text-xs text-gray-400">{category.questions.length} {faqUI.questions[locale]}</div>
                </div>
                <div className={`transition-transform duration-200 ${isCatExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} className="text-gray-400" />
                </div>
              </button>
              {isCatExpanded && (
                <div id={`faq-cat-${category.id}`} role="region" aria-label={category.title[locale]} className="border-t border-gray-200 px-4 pb-4 pt-2 space-y-1.5 animate-slideDown">
                  {category.questions.map((faq, idx) => {
                    const key = `${category.id}-${idx}`;
                    const isQExpanded = expandedQuestion === key;
                    return (
                      <div key={key} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(key)}
                          aria-expanded={isQExpanded}
                          aria-controls={`faq-q-${key}`}
                          className="w-full flex items-center gap-3 p-3.5 text-right hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-blue-500 font-bold text-xs flex-shrink-0">{faqUI.q[locale]}</span>
                          <span className="flex-1 text-gray-700 text-sm text-right">{faq.q[locale]}</span>
                          <div className={`transition-transform duration-200 flex-shrink-0 ${isQExpanded ? 'rotate-180' : ''}`}>
                            <ChevronDown size={14} className="text-gray-400" />
                          </div>
                        </button>
                        {isQExpanded && (
                          <div id={`faq-q-${key}`} role="region" aria-label={faq.q[locale]} className="bg-blue-50 border-t border-blue-200 p-3.5 animate-slideDown">
                            <div className="flex gap-2">
                              <span className="text-blue-500 font-bold text-xs flex-shrink-0">{faqUI.a[locale]}</span>
                              <p className="text-gray-600 text-sm leading-relaxed">{faq.a[locale]}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>


    </div>
  );
}

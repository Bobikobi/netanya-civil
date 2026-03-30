'use client';
import { Lock, Shield, Eye, Trash2, UserCheck, Bell } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { privacyPage, privacySections } from '@/lib/translations';

const ICONS = [Eye, Shield, UserCheck, Bell, Trash2];
const COLORS = ['blue', 'green', 'purple', 'amber', 'red'];

const COLOR_MAP: Record<string, { bg: string; border: string; icon: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', icon: 'text-blue-500' },
  green: { bg: 'bg-green-50', border: 'border-green-200', icon: 'text-green-500' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', icon: 'text-purple-500' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', icon: 'text-amber-500' },
  red: { bg: 'bg-red-50', border: 'border-red-200', icon: 'text-red-500' },
};

export default function PrivacyPage() {
  const { locale } = useI18n();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
          <Lock size={24} className="text-gray-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{privacyPage.title[locale]}</h1>
          <p className="text-sm text-gray-500">{privacyPage.updated[locale]}</p>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-amber-50 rounded-2xl border border-amber-200 p-5 mb-6">
        <p className="text-amber-800 text-sm leading-relaxed">
          {privacyPage.disclaimer[locale]}
        </p>
      </div>

      {/* Intro */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 mb-8">
        <p className="text-gray-600 leading-relaxed">
          {privacyPage.intro[locale]}
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-5">
        {privacySections.map((section, i) => {
          const colors = COLOR_MAP[COLORS[i]];
          const Icon = ICONS[i];
          return (
            <section key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                  <Icon size={18} className={colors.icon} />
                </div>
                <h2 className="text-lg font-bold text-gray-900">{section.title[locale]}</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{section.content[locale]}</p>
            </section>
          );
        })}
      </div>

      {/* Contact */}
      <div className="mt-8 bg-gray-50 rounded-2xl border border-gray-200 p-6 text-center">
        <p className="text-sm text-gray-500 mb-1">{privacyPage.questionsLabel[locale]}</p>
        <a href="mailto:ELAD.SAA@NETANYA.MUNI.IL" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
          ELAD.SAA@NETANYA.MUNI.IL
        </a>
        <p className="text-xs text-gray-400 mt-3">
          {privacyPage.updateNotice[locale]}
        </p>
      </div>
    </div>
  );
}

'use client';
import { Shield, Mail, CheckCircle, AlertTriangle } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { accessibilityPage, accessibilityContent, accessibleFeatures, notYetAccessible } from '@/lib/translations';

export default function AccessibilityPage() {
  const { locale } = useI18n();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <Shield size={24} className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">{accessibilityPage.title[locale]}</h1>
          <p className="text-sm text-gray-500">{accessibilityPage.updated[locale]}</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        {/* Disclaimer */}
        <section className="bg-amber-50 rounded-2xl border border-amber-200 p-5">
          <p className="text-amber-800 text-sm leading-relaxed">
            {accessibilityPage.disclaimer[locale]}
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">{accessibilityPage.commitmentTitle[locale]}</h2>
          <p className="text-gray-600 leading-relaxed">
            {accessibilityContent.commitmentP1[locale]}
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            {accessibilityContent.commitmentP2[locale]}
          </p>
        </section>

        {/* Accessible Features */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-green-500" />
            {accessibilityPage.featuresTitle[locale]}
          </h2>
          <ul className="space-y-2.5">
            {accessibleFeatures.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{feature[locale]}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Not Yet Accessible */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle size={20} className="text-amber-500" />
            {accessibilityPage.inProgressTitle[locale]}
          </h2>
          <p className="text-gray-500 text-sm mb-3">
            {accessibilityContent.inProgressIntro[locale]}
          </p>
          <ul className="space-y-2.5">
            {notYetAccessible.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{item[locale]}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Legal Basis */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">{accessibilityPage.legalTitle[locale]}</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong className="text-gray-800">{accessibilityContent.legalLaw[locale]}</strong>{' '}
              {accessibilityContent.legalLawDesc[locale]}
            </p>
            <p>
              <strong className="text-gray-800">{accessibilityContent.legalStandard[locale]}</strong>{' '}
              {accessibilityContent.legalStandardDesc[locale]}
            </p>
            <p>
              <strong className="text-gray-800">{accessibilityContent.legalDeclaration[locale]}</strong>{' '}
              {accessibilityContent.legalDeclarationDesc[locale]}
            </p>
          </div>
        </section>

        {/* Accessibility Coordinator */}
        <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">{accessibilityPage.contactTitle[locale]}</h2>
          <p className="text-gray-600 text-sm mb-4">
            {accessibilityContent.contactIntro[locale]}
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-2.5 bg-white rounded-xl border border-blue-100 px-4 py-3">
              <Shield size={16} className="text-blue-500" />
              <div>
                <p className="text-xs text-gray-400">{accessibilityContent.contactPerson[locale]}</p>
                <p className="text-sm font-medium text-gray-800">אלעד סעדון</p>
              </div>
            </div>
            <a href="mailto:ELAD.SAA@NETANYA.MUNI.IL" className="flex items-center gap-2.5 bg-white rounded-xl border border-blue-100 px-4 py-3 hover:border-blue-300 transition-colors">
              <Mail size={16} className="text-blue-500" />
              <div>
                <p className="text-xs text-gray-400">{accessibilityContent.email[locale]}</p>
                <p className="text-sm font-medium text-gray-800">ELAD.SAA@NETANYA.MUNI.IL</p>
              </div>
            </a>
          </div>
        </section>

        {/* Supported Browsers */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">{accessibilityPage.browsersTitle[locale]}</h2>
          <p className="text-gray-600 text-sm">
            האתר תוכנן ונבדק לעבודה מיטבית בדפדפנים: Google Chrome, Mozilla Firefox, Microsoft Edge,
            ו-Safari בגרסאותיהם העדכניות. האתר מותאם לתצוגה במחשב שולחני, טאבלט וטלפון נייד (Responsive Design).
          </p>
        </section>
      </div>
    </div>
  );
}

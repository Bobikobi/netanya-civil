'use client';
import { Lock, Shield, Eye, Trash2, UserCheck, Bell } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { privacyPage } from '@/lib/translations';

const SECTIONS = [
  {
    icon: Eye,
    title: 'איסוף מידע',
    color: 'blue',
    content: `האתר אוסף מידע בסיסי הנדרש לצורך תפעולו התקין בלבד. מידע זה עשוי לכלול נתוני גלישה כלליים (כגון כתובת IP, סוג דפדפן, מערכת הפעלה) המשמשים לצורכי אבטחה ושיפור חוויית השימוש. האתר אינו אוסף מידע אישי מזהה (כגון שם, מספר זהות, כתובת) אלא אם כן המשתמש מוסר אותו מרצונו בטפסי יצירת קשר.`,
  },
  {
    icon: Shield,
    title: 'אבטחת מידע',
    color: 'green',
    content: `מפעיל האתר נוקט באמצעי אבטחת מידע סבירים להגנה על המידע המאוחסן באתר, ברוח חוק הגנת הפרטיות, תשמ"א-1981, ותיקון 13 לחוק. האתר מוגן באמצעות הצפנת SSL/TLS, ומידע המאוחסן במערכות מאובטח בהתאם לסטנדרטים המקובלים.`,
  },
  {
    icon: UserCheck,
    title: 'שימוש במידע',
    color: 'purple',
    content: `המידע שנאסף באתר ישמש אך ורק למטרות שלשמן נמסר: תפעול האתר, מענה לפניות, שיפור השירות ותחזוקת מערכות. לא יועבר מידע אישי לצד שלישי כלשהו, למעט במקרים הנדרשים על-פי חוק או בצו שיפוטי. לא נעשה שימוש במידע לצרכים שיווקיים או מסחריים.`,
  },
  {
    icon: Bell,
    title: 'עוגיות (Cookies)',
    color: 'amber',
    content: `האתר עשוי להשתמש בעוגיות (Cookies) לצורך שיפור חוויית הגלישה ותפעול תקין של האתר. עוגיות הן קבצי טקסט קטנים הנשמרים במכשיר המשתמש. ניתן להגדיר את הדפדפן כך שידחה עוגיות או יתריע על שליחתן, אולם חלק מפונקציות האתר עשויות שלא לפעול כראוי ללא עוגיות.`,
  },
  {
    icon: Trash2,
    title: 'זכות עיון, תיקון ומחיקה',
    color: 'red',
    content: `בהתאם לחוק הגנת הפרטיות, כל אדם רשאי לעיין במידע אישי המוחזק לגביו, לבקש לתקנו או למחקו. לצורך מימוש זכויות אלו, ניתן לפנות למפעיל האתר בדוא"ל ELAD.SAA@NETANYA.MUNI.IL. אטפל בפנייתכם בהקדם האפשרי.`,
  },
];

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
          מדיניות פרטיות זו מפרטת את אופן האיסוף, השימוש והשמירה על מידע אישי באתר צוותי חירום,
          יוזמה פרטית של אלעד סעדון לסיוע לצוותי חירום של אגף השירותים החברתיים בנתניה.
          המדיניות פועלת ברוח חוק הגנת הפרטיות, תשמ&quot;א-1981, תיקון 13 לחוק, חוק הגנת הצרכן,
          וחוק התקשורת (בזק ושידורים) (תיקון מס&apos; 40), תשס&quot;ח-2008 (&quot;חוק הספאם&quot;).
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-5">
        {SECTIONS.map((section, i) => {
          const colors = COLOR_MAP[section.color];
          const Icon = section.icon;
          return (
            <section key={i} className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-9 h-9 rounded-lg ${colors.bg} ${colors.border} border flex items-center justify-center`}>
                  <Icon size={18} className={colors.icon} />
                </div>
                <h2 className="text-lg font-bold text-gray-900">{section.title}</h2>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{section.content}</p>
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

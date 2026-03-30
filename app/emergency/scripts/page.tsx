'use client';
import { useState } from 'react';
import { ChevronDown, AlertCircle, Home, Hotel, Search, ShieldOff, ExternalLink, Phone, Lock } from 'lucide-react';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import { usePhoneAuth } from '@/lib/phone-auth';
import { scriptsPage } from '@/lib/translations';

interface ScriptData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  bgColor: string;
  border: string;
  iconColor: string;
  iconBg: string;
  scenario: string;
  doSay: string[];
  dontSay: string[];
  steps: string[];
}

const SCRIPTS: ScriptData[] = [
  {
    id: 'distressed',
    title: 'אדם נסער',
    subtitle: 'אדם במצוקה רגשית חריפה, בוכה, צועק, או בהלם',
    icon: AlertCircle,
    bgColor: 'from-red-50 to-red-100/50',
    border: 'border-red-200',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-100',
    scenario: 'תושב שנפגע באירוע נמצא במצב של בכי, צעקות, או הלם. יכול להיות שהוא מנסה לרוץ חזרה לאזור הסכנה או שהוא קופא במקומו.',
    doSay: ['"שמי ___, אני מצוות העירייה. אני כאן איתך."', '"אתה במקום בטוח עכשיו."', '"תעזור לי – כמה קומות יש בבניין שלך?"', '"בוא נלך ביחד לנקודת הקליטה."'],
    dontSay: ['"תירגע" / "יהיה בסדר"', '"אל תבכה"', '"זה יכול היה להיות יותר גרוע"', '"אני יודע מה אתה מרגיש"'],
    steps: ['ניגשים בצורה רגועה, שומרים על מרחק נוח', 'מזדהים בשם ובתפקיד', 'מפעילים מודל מעש"ה – מחויבות > עידוד > שאלות > הבניה', 'מנתבים לנקודת קליטה או שולחן קדמי'],
  },
  {
    id: 'property',
    title: 'מחפש מידע על נכס',
    subtitle: 'תושב רוצה לדעת מה מצב ביתו / דירתו',
    icon: Home,
    bgColor: 'from-blue-50 to-blue-100/50',
    border: 'border-blue-200',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
    scenario: 'תושב שפונה מביתו רוצה לדעת מה קרה לדירתו, האם ניתן לחזור, מה מצב הנכס.',
    doSay: ['"אני מבין שזה מדאיג מאוד. בוא נבדוק ביחד."', '"כרגע הכניסה לאזור אסורה מטעמי בטיחון."', '"צוותי הנדסה בודקים את המבנים – נעדכן ברגע שנקבל מידע."', '"בינתיים, בוא נוודא שיש לך את כל מה שאתה צריך."'],
    dontSay: ['"הכל בסדר שם" (אם אתה לא יודע)', '"למה לא פינית קודם?"', '"זה רק חומר, העיקר שאתה בחיים"'],
    steps: ['הקשבה לדאגות התושב', 'בדיקת מידע זמין מול המטה', 'עדכון הגון – רק מה שידוע בוודאות', 'הפניה לצוותי הנדסה / ביטוח לפי הצורך'],
  },
  {
    id: 'hotel',
    title: 'מבקש מלון',
    subtitle: 'תושב מבקש שיבוץ למלון',
    icon: Hotel,
    bgColor: 'from-teal-50 to-teal-100/50',
    border: 'border-teal-200',
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-100',
    scenario: 'תושב שביתו נפגע או שנדרש לפנות דירתו מבקש פתרון לינה. ייתכן שמדובר במשפחה עם ילדים או קשיש.',
    doSay: ['"אני אעזור לך בתהליך. בוא נבדוק את הזכאות."', '"יש מספר אפשרויות – נמצא את המתאימה לך."', '"אם יש צרכים מיוחדים (נכות, תינוק, חיית מחמד) – אנא ספרו לי."'],
    dontSay: ['"אין מלונות פנויים" (לפני שבדקת)', '"תסתדר עם משפחה"', '"זה לא באחריות שלי"'],
    steps: ['בירור זכאות עפ"י הקריטריונים', 'בדיקת צרכים מיוחדים של המשפחה', 'תיאום עם צוות מלונות', 'הפניה למלון מתאים + מסירת פרטים', 'עדכון מערכת יחד'],
  },
  {
    id: 'missing',
    title: 'מחפש בן משפחה',
    subtitle: 'אדם מחפש קרוב משפחה שלא מצליח ליצור איתו קשר',
    icon: Search,
    bgColor: 'from-purple-50 to-purple-100/50',
    border: 'border-purple-200',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-100',
    scenario: 'אדם מודאג שלא מצליח ליצור קשר עם בן משפחה מאז האירוע. עשוי להיות במצב חרדה גבוה.',
    doSay: ['"אני מבין את הדאגה. בוא נפעל ביחד."', '"יש לנו צוות שעוסק באיתור – אני מעביר את הפרטים עכשיו."', '"ספר לי מתי דיברתם לאחרונה ואיפה הוא היה."'],
    dontSay: ['"בטח הכל בסדר"', '"אל תדאג" (בלי לעשות משהו מוחשי)', '"כנראה אין קליטה"'],
    steps: ['רישום פרטים מלאים על הנעדר (שם, גיל, כתובת, מראה)', 'בדיקה מול רשימות נפגעים ובתי חולים', 'העברת פרטים לצוות קישור לבתי חולים', 'עדכון שוטף של המשפחה', 'ונטילציה – הפעלת מודל מעש"ה'],
  },
  {
    id: 'refusal',
    title: 'סירוב פינוי',
    subtitle: 'תושב מסרב להתפנות מביתו למרות ההנחיה',
    icon: ShieldOff,
    bgColor: 'from-amber-50 to-amber-100/50',
    border: 'border-amber-200',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100',
    scenario: 'תושב מסרב לעזוב את ביתו למרות הנחיה לפנות. ייתכן שמדובר בקשיש, אדם עם מוגבלות, או אדם שמפחד לעזוב.',
    doSay: ['"אני מבין שקשה לעזוב את הבית. בוא נדבר על זה."', '"הבטיחות שלך חשובה לנו מאוד."', '"יש לנו מקום בטוח שמחכה לך, עם כל מה שצריך."', '"אני לא יכול להכריח, אבל אני ממליץ בחום."'],
    dontSay: ['"אתה חייב לצאת" (בכפייה)', '"זו פקודה"', '"אם תישאר – זה על אחריותך"'],
    steps: ['הבנת הסיבה לסירוב (פחד, חיית מחמד, ציוד)', 'טיפול בחסם – פתרון מותאם', 'שכנוע רך עם דגש על בטיחות', 'אם עדיין מסרב – תיעוד ודיווח למטה', 'אין להשתמש בכוח – רק שכנוע'],
  },
];

export default function ScriptsPage() {
  const [expandedScript, setExpandedScript] = useState<string | null>(null);
  const { locale } = useI18n();
  const { unlocked, requestUnlock, getPhone } = usePhoneAuth();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{scriptsPage.title[locale]}</h1>
        <p className="text-gray-400 text-base">{scriptsPage.subtitle[locale]}</p>
      </section>

      {/* Yachad link */}
      <div className="text-center">
        <a href="https://go.gov.il/wrwov" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-blue-100 transition-colors">
          <ExternalLink size={15} />
          {scriptsPage.yachadLink[locale]}
        </a>
      </div>

      <div className="space-y-3">
        {SCRIPTS.map(script => {
          const Icon = script.icon;
          const isExpanded = expandedScript === script.id;
          return (
            <div key={script.id} className={`bg-gradient-to-l ${script.bgColor} border ${script.border} ${isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} overflow-hidden shadow-sm`}>
              <button
                onClick={() => setExpandedScript(isExpanded ? null : script.id)}
                aria-expanded={isExpanded}
                aria-controls={`script-${script.id}`}
                className="w-full flex items-center gap-4 p-5 text-right hover:bg-white/50 transition-colors"
              >
                <div className={`${script.iconBg} rounded-xl w-11 h-11 flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className={script.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{script.title}</div>
                  <div className="text-xs text-gray-400">{script.subtitle}</div>
                </div>
                <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} className="text-gray-400" />
                </div>
              </button>
              {isExpanded && (
                <div id={`script-${script.id}`} role="region" aria-label={script.title} className={`bg-white border-t ${script.border} px-5 pb-5 pt-4 space-y-5 animate-slideDown`}>
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-4">
                    <h3 className="font-bold text-gray-500 mb-1.5 text-xs">{scriptsPage.scenario[locale]}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{script.scenario}</p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2.5">{scriptsPage.stepsTitle[locale]}</h3>
                    <ol className="space-y-2">
                      {script.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-600 text-sm">
                          <span className="bg-gray-100 text-gray-500 font-bold rounded-lg w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                      <h3 className="font-bold text-emerald-700 mb-2.5 text-xs flex items-center gap-1">&#10003; {scriptsPage.doSay[locale]}</h3>
                      <ul className="space-y-2">
                        {script.doSay.map((phrase, i) => (
                          <li key={i} className="text-gray-600 text-sm">{phrase}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                      <h3 className="font-bold text-red-700 mb-2.5 text-xs flex items-center gap-1">&#10007; {scriptsPage.dontSay[locale]}</h3>
                      <ul className="space-y-2">
                        {script.dontSay.map((phrase, i) => (
                          <li key={i} className="text-gray-600 text-sm">{phrase}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Embedded key contacts */}
      <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <Phone size={16} className="text-blue-500" />
          {scriptsPage.contactsTitle[locale]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            { name: 'נדין שם טוב', role: 'ראש מטה התערבות' },
            { name: 'סיגל קני פז', role: 'ראש מטה רגשי' },
            { name: 'רקפת וינגרט', role: 'קו פתוח ומידע' },
            { name: 'שביט ביטון', role: 'מרכז משפחות (מס"ר)' },
            { name: 'ער"ן', role: 'עזרה ראשונה נפשית' },
            { name: 'מוקד 106', role: 'מוקד עירוני' },
          ].map((c, i) => {
            const phone = getPhone('scripts', c.name);
            return unlocked && phone ? (
              <a key={i} href={`tel:${phone}`} className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 hover:bg-blue-50 hover:border-blue-200 transition-colors">
                <Phone size={12} className="text-blue-500 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-gray-900 truncate">{c.name}</div>
                  <div className="text-[10px] text-gray-400">{c.role} · <span dir="ltr">{phone}</span></div>
                </div>
              </a>
            ) : (
              <button key={i} onClick={requestUnlock} className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 hover:bg-blue-50 hover:border-blue-200 transition-colors text-right w-full">
                <Lock size={12} className="text-gray-400 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-xs font-bold text-gray-900 truncate">{c.name}</div>
                  <div className="text-[10px] text-gray-400">{c.role} · <span className="text-gray-300">●●●-●●●●●●●</span></div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </div>
  );
}

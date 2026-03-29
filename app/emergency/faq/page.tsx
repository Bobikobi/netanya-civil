'use client';
import { useState } from 'react';
import { ChevronDown, HelpCircle, Database, LogIn, BarChart3, Truck, FileText, Building2, Headphones, ExternalLink, Phone } from 'lucide-react';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import { faqPage } from '@/lib/translations';

interface FAQCategory {
  id: string;
  title: string;
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
  questions: { q: string; a: string }[];
}

const FAQ_CATEGORIES: FAQCategory[] = [
  {
    id: 'general',
    title: 'מטרת מערכת \'יחד\' ומידע כללי',
    icon: HelpCircle,
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
    questions: [
      { q: 'מה זו מערכת \'יחד\'?', a: 'מערכת \'יחד\' היא מערכת ממוחשבת לאומית לניהול אירועי חירום ברשויות מקומיות. היא מאפשרת רישום תושבים שנפגעו, ניהול צרכים, מעקב אחר פנויים ומשובצים למלונות, ותיאום בין גורמים.' },
      { q: 'מי אחראי על תפעול המערכת?', a: 'הרשות המקומית – בדרך כלל דרך מכלול אוכלוסייה ואגף השירותים החברתיים. יש גורמי מטה ארציים שמלווים את התהליך.' },
      { q: 'מתי מפעילים את המערכת?', a: 'בכל אירוע חירום שמצריך פינוי תושבים, שיבוץ למלונות, או מעקב אחר נפגעים – לרבות אירועי ביטחון, שריפות, הצפות ואסונות.' },
      { q: 'האם המערכת מחליפה את הטיפול הישיר בתושבים?', a: 'לא. המערכת היא כלי עבודה לצוותים – היא לא מחליפה את האינטראקציה האנושית, אלא מסייעת בניהול ותיעוד.' },
      { q: 'מה הקשר בין מערכת \'יחד\' למערכת 106?', a: 'מוקד 106 הוא ערוץ הדיווח של התושבים. \'יחד\' היא המערכת הפנימית שבה נרשמות הפניות ומנוהל הטיפול.' },
    ],
  },
  {
    id: 'data_entry',
    title: 'הזנת נתונים למערכת',
    icon: Database,
    iconColor: 'text-emerald-500',
    iconBg: 'bg-emerald-100',
    questions: [
      { q: 'מי מוסמך להזין נתונים למערכת?', a: 'כל עובד בעל הרשאה שקיבל תדרוך. בדרך כלל – צוותי שולחן קדמי, מס"ר ומטה מכלול.' },
      { q: 'אילו נתונים חובה להזין?', a: 'שם מלא, מספר תעודת זהות, כתובת, מספר טלפון, הרכב משפחה, וצרכים מיוחדים.' },
      { q: 'מה עושים אם אין מספר תעודת זהות?', a: 'ניתן לרשום עם פרטים חלופיים (שם, טלפון) ולעדכן את תעודת הזהות בהמשך.' },
      { q: 'האם ניתן לעדכן נתונים אחרי ההזנה הראשונית?', a: 'כן, ניתן לעדכן ולהשלים פרטים בכל שלב.' },
    ],
  },
  {
    id: 'access',
    title: 'כניסה והרשאות למערכת \'יחד\'',
    icon: LogIn,
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-100',
    questions: [
      { q: 'איך נכנסים למערכת?', a: 'דרך ממשק אינטרנט ייעודי עם שם משתמש וסיסמה. ההרשאות ניתנות מראש על ידי מנהל המערכת.' },
      { q: 'מה עושים אם שכחתי סיסמה?', a: 'יש לפנות למנהל המערכת ברשות או לתמיכה הטכנית הארצית.' },
      { q: 'האם ניתן להיכנס מטלפון נייד?', a: 'כן, המערכת זמינה גם מדפדפן בטלפון נייד.' },
      { q: 'כמה רמות הרשאה יש?', a: 'יש מספר רמות – צופה, מזין, מנהל צוות ומנהל מערכת. ההרשאות מוגדרות לפי תפקיד.' },
      { q: 'מי מקבל הרשאות?', a: 'עובדי אגף רווחה, מנהלי מכלול, ובעלי תפקידים שהוגדרו מראש בתוכנית ההפעלה.' },
    ],
  },
  {
    id: 'reports',
    title: 'נתונים ודוחות',
    icon: BarChart3,
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100',
    questions: [
      { q: 'אילו דוחות ניתן להפיק?', a: 'דוח תושבים מפונים, דוח שיבוצים למלונות, דוח צרכים מיוחדים, דוח נעדרים, ודוח תמונת מצב כללי.' },
      { q: 'מי יכול להפיק דוחות?', a: 'כל מי שיש לו הרשאת "מנהל צוות" ומעלה.' },
      { q: 'באיזו תדירות יש לעדכן את תמונת המצב?', a: 'בזמן אירוע פעיל – כל 15-30 דקות. לאחר מכן – לפי הצורך.' },
      { q: 'האם הנתונים מתעדכנים בזמן אמת?', a: 'כן, כל הזנה של נתונים מתעדכנת מיידית ונראית לכל בעלי ההרשאות.' },
      { q: 'איך משתפים דוחות עם גורמי חוץ?', a: 'ניתן לייצא דוחות ל-PDF או Excel ולשלוח בצורה מאובטחת.' },
      { q: 'מי אחראי על דיוק הנתונים?', a: 'כל גורם מזין אחראי על הנתונים שלו. מנהל המכלול אחראי על בקרה כללית.' },
    ],
  },
  {
    id: 'evacuation',
    title: 'תהליך הפינוי',
    icon: Truck,
    iconColor: 'text-red-500',
    iconBg: 'bg-red-100',
    questions: [
      { q: 'מי מחליט על פינוי?', a: 'פיקוד העורף בתיאום עם הרשות המקומית. ראש העיר מקבל את ההחלטה הסופית ברמה המקומית.' },
      { q: 'לאן מפנים תושבים?', a: 'למלונות, מקלטים ציבוריים, או לרשויות אחרות – בהתאם להנחיות.' },
      { q: 'מה עם תושבים שלא יכולים להתפנות בעצמם?', a: 'צוותי תל"ם ומד"א אחראים על פינוי אוכלוסיות פגיעות. יש רשימות מוכנות מראש.' },
      { q: 'מה קורה עם חיות מחמד?', a: 'יש מלונות שמקבלים חיות מחמד. במקרים אחרים – תיאום עם השירות הווטרינרי העירוני.' },
      { q: 'כמה זמן נמשך פינוי?', a: 'תלוי בהיקף האירוע. ימים עד שבועות. הכל מנוהל ומתועד במערכת.' },
    ],
  },
  {
    id: 'forms',
    title: 'מילוי טופס דיווח',
    icon: FileText,
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-100',
    questions: [
      { q: 'אילו טפסים צריך למלא באירוע?', a: 'טופס רישום משפחה, טופס צרכים מיוחדים, טופס איתור נעדרים, וטופס שיבוץ מלון.' },
      { q: 'היכן נמצאים הטפסים?', a: 'בתוך מערכת \'יחד\' או בקישור ישיר שמשותף על ידי המטה. חלק מהטפסים זמינים גם במערכת טפסי מס"ר.' },
      { q: 'אפשר למלא טופס ידני?', a: 'כן, יש גרסאות מודפסות. אבל חובה להעלות למערכת בהקדם האפשרי.' },
      { q: 'מה עושים עם טפסים שלא מלאים עד הסוף?', a: 'מעבירים למנהל הצוות שידאג להשלמה. חשוב לא להשאיר טפסים חלקיים.' },
      { q: 'איך התושב ממלא דיווח על נזק לנכס?', a: 'דרך טופס רשות המיסים – "דיווח תושבים שביתם ניזוק". הקישור מופיע בדף הבית.' },
    ],
  },
  {
    id: 'municipality',
    title: 'תפקיד הרשות המקומית',
    icon: Building2,
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-100',
    questions: [
      { q: 'מה תפקיד הרשות המקומית באירוע חירום?', a: 'הרשות אחראית על רווחת התושבים – פינוי, קליטה, שיבוץ למלונות, מידע, סיוע רגשי, ותיאום מול גורמי חוץ.' },
      { q: 'מי מנהל את מכלול אוכלוסייה?', a: 'מנהל אגף השירותים החברתיים, או בעל תפקיד שמונה מראש.' },
      { q: 'מהו "תא רווחה"?', a: 'תא רווחה הוא הגרעין המקצועי באגף שירותים חברתיים שמנהל את כל הטיפול בתושבים באירוע חירום.' },
      { q: 'איך הרשות מתממשקת עם צה"ל ופיקוד העורף?', a: 'דרך קצין קישור ומטה מכלול אוכלוסייה – בדיווחים, ישיבות מצב ומערכות מידע משותפות.' },
    ],
  },
  {
    id: 'support',
    title: 'תמיכה וקישורים',
    icon: Headphones,
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-100',
    questions: [
      { q: 'לאן לפנות בבעיה טכנית?', a: 'לתמיכה הטכנית של מערכת \'יחד\' – המספר מופיע במערכת עצמה ובחומרי ההדרכה.' },
      { q: 'איפה אפשר לקרוא עוד על הנהלים?', a: 'בפורטל החירום של משרד הרווחה, ובחומרים שמופצים על ידי מנהל המכלול.' },
      { q: 'יש הדרכות למערכת?', a: 'כן, יש הדרכות תקופתיות ותרגילי שולחן. מומלץ להשתתף באופן קבוע.' },
    ],
  },
];

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
        {FAQ_CATEGORIES.map(category => {
          const Icon = category.icon;
          const isCatExpanded = expandedCategory === category.id;
          return (
            <div key={category.id} className={`bg-white border border-gray-200 ${isCatExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} overflow-hidden shadow-sm`}>
              <button
                onClick={() => toggleCategory(category.id)}
                className="w-full flex items-center gap-4 p-5 text-right hover:bg-gray-50 transition-colors"
              >
                <div className={`${category.iconBg} w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className={category.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{category.title}</div>
                  <div className="text-xs text-gray-400">{category.questions.length} שאלות</div>
                </div>
                <div className={`transition-transform duration-200 ${isCatExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} className="text-gray-400" />
                </div>
              </button>
              {isCatExpanded && (
                <div className="border-t border-gray-200 px-4 pb-4 pt-2 space-y-1.5 animate-slideDown">
                  {category.questions.map((faq, idx) => {
                    const key = `${category.id}-${idx}`;
                    const isQExpanded = expandedQuestion === key;
                    return (
                      <div key={key} className="bg-gray-50 border border-gray-200 rounded-xl overflow-hidden">
                        <button
                          onClick={() => toggleQuestion(key)}
                          className="w-full flex items-center gap-3 p-3.5 text-right hover:bg-gray-100 transition-colors"
                        >
                          <span className="text-blue-500 font-bold text-xs flex-shrink-0">ש:</span>
                          <span className="flex-1 text-gray-700 text-sm text-right">{faq.q}</span>
                          <div className={`transition-transform duration-200 flex-shrink-0 ${isQExpanded ? 'rotate-180' : ''}`}>
                            <ChevronDown size={14} className="text-gray-400" />
                          </div>
                        </button>
                        {isQExpanded && (
                          <div className="bg-blue-50 border-t border-blue-200 p-3.5 animate-slideDown">
                            <div className="flex gap-2">
                              <span className="text-blue-500 font-bold text-xs flex-shrink-0">ת:</span>
                              <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
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

      {/* Embedded key contacts */}
      <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <Phone size={16} className="text-blue-500" />
          {faqPage.contactsTitle[locale]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            { name: 'בני שכטר', role: 'מערכות מידע', phone: '052-2452270' },
            { name: 'ענת עשור', role: 'מיון פניות', phone: '052-6404403' },
            { name: 'יניר יעקובי', role: 'רכז חירום מכלול', phone: '052-3800007' },
            { name: 'רויטל נחמיאס', role: 'פרסום ומידע', phone: '054-4922372' },
            { name: 'רקפת וינגרט', role: 'קו פתוח ומידע', phone: '052-5799061' },
            { name: 'מוקד 106', role: 'מוקד עירוני', phone: '106' },
          ].map((c, i) => (
            <a key={i} href={`tel:${c.phone}`} className="flex items-center gap-2.5 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 hover:bg-blue-50 hover:border-blue-200 transition-colors">
              <Phone size={12} className="text-blue-500 flex-shrink-0" />
              <div className="min-w-0">
                <div className="text-xs font-bold text-gray-900 truncate">{c.name}</div>
                <div className="text-[10px] text-gray-400">{c.role} · <span dir="ltr">{c.phone}</span></div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

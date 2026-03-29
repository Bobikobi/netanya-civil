'use client';
import { Shield, Phone, Mail, MapPin, CheckCircle, AlertTriangle } from 'lucide-react';

const ACCESSIBLE_FEATURES = [
  'תמיכה בטכנולוגיות מסייעות (קוראי מסך, תצוגה מוגדלת)',
  'ניווט מלא באמצעות מקלדת בלבד',
  'ניגודיות צבעים בהתאם לתקן WCAG AA',
  'טקסט חלופי לכל התמונות והאלמנטים הגרפיים',
  'מבנה סמנטי תקין עם כותרות היררכיות',
  'תמיכה בשינוי גודל גופנים ללא פגיעה בפריסה',
  'ניווט עקבי ואחיד בכל דפי האתר',
  'קישורים בעלי טקסט מתאר ברור',
  'טפסים עם תוויות ברורות והנחיות שגיאה',
  'תמיכה מלאה בשפה העברית ובכיוון RTL',
];

const NOT_YET_ACCESSIBLE = [
  'חלק מקובצי PDF המצורפים עשויים שלא להיות נגישים במלואם',
  'תוכן וידאו ייתכן ואינו כולל כתוביות בכל המקרים',
  'מפות אינטראקטיביות עשויות לדרוש התאמות נוספות',
];

export default function AccessibilityPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center gap-3 mb-8">
        <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <Shield size={24} className="text-blue-600" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">הצהרת נגישות</h1>
          <p className="text-sm text-gray-500">עודכן לאחרונה: אפריל 2026</p>
        </div>
      </div>

      <div className="space-y-8">
        {/* Introduction */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">מחויבות לנגישות</h2>
          <p className="text-gray-600 leading-relaxed">
            עיריית נתניה מחויבת להנגשת אתר צוותי החירום לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות,
            בהתאם לתקן הישראלי ת&quot;י 5568, הנחיות WCAG 2.1 ברמה AA, וחוק שוויון זכויות לאנשים עם
            מוגבלות, תשנ&quot;ח-1998, ותקנות הנגישות לשירות (התאמות נגישות לשירות), תשע&quot;ג-2013.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            אנו פועלים באופן שוטף לשיפור חוויית הגלישה עבור כלל המשתמשים ומשקיעים מאמצים ניכרים
            להבטיח שהאתר יהיה נגיש ושוויוני ככל האפשר.
          </p>
        </section>

        {/* Accessible Features */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <CheckCircle size={20} className="text-green-500" />
            התאמות נגישות שבוצעו
          </h2>
          <ul className="space-y-2.5">
            {ACCESSIBLE_FEATURES.map((feature, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Not Yet Accessible */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
            <AlertTriangle size={20} className="text-amber-500" />
            תחומים בתהליך הנגשה
          </h2>
          <p className="text-gray-500 text-sm mb-3">
            אנו מודעים לכך שחלק מהתכנים באתר טרם הונגשו במלואם. אנו עובדים על הנגשתם:
          </p>
          <ul className="space-y-2.5">
            {NOT_YET_ACCESSIBLE.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-1.5 w-2 h-2 rounded-full bg-amber-400 flex-shrink-0" />
                <span className="text-gray-600 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Legal Basis */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">בסיס חוקי</h2>
          <div className="space-y-3 text-sm text-gray-600">
            <p>
              <strong className="text-gray-800">חוק שוויון זכויות לאנשים עם מוגבלות (תשנ&quot;ח-1998):</strong>{' '}
              מחייב גופים ציבוריים להנגיש את שירותיהם המקוונים. תקנה 35 קובעת כי אתר אינטרנט של רשות ציבורית
              יהיה נגיש בהתאם להנחיות תקן ת&quot;י 5568.
            </p>
            <p>
              <strong className="text-gray-800">תקן ישראלי ת&quot;י 5568:</strong>{' '}
              מבוסס על הנחיות WCAG (Web Content Accessibility Guidelines) של ארגון W3C ברמה AA.
              התקן מפרט דרישות טכניות להנגשת תוכן מקוון.
            </p>
            <p>
              <strong className="text-gray-800">תקנה 91 – הצהרת נגישות:</strong>{' '}
              מחייבת פרסום הצהרת נגישות באתר הכוללת פירוט ההתאמות שבוצעו, תחומים שטרם הונגשו,
              ופרטי יצירת קשר עם רכז הנגישות.
            </p>
          </div>
        </section>

        {/* Accessibility Coordinator */}
        <section className="bg-blue-50 rounded-2xl border border-blue-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">רכז/ת נגישות</h2>
          <p className="text-gray-600 text-sm mb-4">
            נתקלתם בבעיית נגישות? צרו קשר עם רכז/ת הנגישות של עיריית נתניה.
            אנו מתחייבים לטפל בפנייתכם תוך 7 ימי עסקים.
          </p>
          <div className="grid sm:grid-cols-3 gap-3">
            <a href="tel:09-8610100" className="flex items-center gap-2.5 bg-white rounded-xl border border-blue-100 px-4 py-3 hover:border-blue-300 transition-colors">
              <Phone size={16} className="text-blue-500" />
              <div>
                <p className="text-xs text-gray-400">טלפון</p>
                <p className="text-sm font-medium text-gray-800" dir="ltr">09-8610100</p>
              </div>
            </a>
            <a href="mailto:nagishut@netanya.muni.il" className="flex items-center gap-2.5 bg-white rounded-xl border border-blue-100 px-4 py-3 hover:border-blue-300 transition-colors">
              <Mail size={16} className="text-blue-500" />
              <div>
                <p className="text-xs text-gray-400">דוא&quot;ל</p>
                <p className="text-sm font-medium text-gray-800">nagishut@netanya.muni.il</p>
              </div>
            </a>
            <div className="flex items-center gap-2.5 bg-white rounded-xl border border-blue-100 px-4 py-3">
              <MapPin size={16} className="text-blue-500" />
              <div>
                <p className="text-xs text-gray-400">כתובת</p>
                <p className="text-sm font-medium text-gray-800">רזיאל 1, נתניה</p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Browsers */}
        <section className="bg-white rounded-2xl border border-gray-200 p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-3">דפדפנים ומכשירים נתמכים</h2>
          <p className="text-gray-600 text-sm">
            האתר תוכנן ונבדק לעבודה מיטבית בדפדפנים: Google Chrome, Mozilla Firefox, Microsoft Edge,
            ו-Safari בגרסאותיהם העדכניות. האתר מותאם לתצוגה במחשב שולחני, טאבלט וטלפון נייד (Responsive Design).
          </p>
        </section>
      </div>
    </div>
  );
}

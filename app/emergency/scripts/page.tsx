'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertCircle, Home, Hotel, Search, ShieldOff } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface ScriptData {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
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
    color: 'from-red-500 to-red-600',
    scenario:
      'תושב שנפגע באירוע נמצא במצב של בכי, צעקות, או הלם. יכול להיות שהוא מנסה לרוץ חזרה לאזור הסכנה או שהוא קופא במקומו.',
    doSay: [
      '"שמי ___, אני מצוות העירייה. אני כאן איתך."',
      '"אתה במקום בטוח עכשיו."',
      '"תעזור לי – כמה קומות יש בבניין שלך?"',
      '"בוא נלך ביחד לנקודת הקליטה."',
    ],
    dontSay: [
      '"תירגע" / "יהיה בסדר"',
      '"אל תבכה"',
      '"זה יכול היה להיות יותר גרוע"',
      '"אני יודע מה אתה מרגיש"',
    ],
    steps: [
      'ניגשים בצורה רגועה, שומרים על מרחק נוח',
      'מזדהים בשם ובתפקיד',
      'מפעילים מודל מעש"ה – מחויבות ← עידוד ← שאלות ← הבניה',
      'מנתבים לנקודת קליטה או שולחן קדמי',
    ],
  },
  {
    id: 'property',
    title: 'מחפש מידע על נכס',
    subtitle: 'תושב רוצה לדעת מה מצב ביתו / דירתו',
    icon: Home,
    color: 'from-blue-500 to-blue-600',
    scenario:
      'תושב שפונה מביתו רוצה לדעת מה קרה לדירתו, האם ניתן לחזור, מה מצב הנכס.',
    doSay: [
      '"אני מבין שזה מדאיג מאוד. בוא נבדוק ביחד."',
      '"כרגע הכניסה לאזור אסורה מטעמי בטיחון."',
      '"צוותי הנדסה בודקים את המבנים – נעדכן ברגע שנקבל מידע."',
      '"בינתיים, בוא נוודא שיש לך את כל מה שאתה צריך."',
    ],
    dontSay: [
      '"הכל בסדר שם" (אם אתה לא יודע)',
      '"למה לא פינית קודם?"',
      '"זה רק חומר, העיקר שאתה בחיים"',
    ],
    steps: [
      'הקשבה לדאגות התושב',
      'בדיקת מידע זמין מול המטה',
      'עדכון הגון – רק מה שידוע בוודאות',
      'הפניה לצוותי הנדסה / ביטוח לפי הצורך',
    ],
  },
  {
    id: 'hotel',
    title: 'מבקש מלון',
    subtitle: 'תושב מבקש שיבוץ למלון',
    icon: Hotel,
    color: 'from-teal-500 to-teal-600',
    scenario:
      'תושב שביתו נפגע או שנדרש לפנות דירתו מבקש פתרון לינה. ייתכן שמדובר במשפחה עם ילדים או קשיש.',
    doSay: [
      '"אני אעזור לך בתהליך. בוא נבדוק את הזכאות."',
      '"יש מספר אפשרויות – נמצא את המתאימה לך."',
      '"אם יש צרכים מיוחדים (נכות, תינוק, חיית מחמד) – אנא ספרו לי."',
    ],
    dontSay: [
      '"אין מלונות פנויים" (לפני שבדקת)',
      '"תסתדר עם משפחה"',
      '"זה לא באחריות שלי"',
    ],
    steps: [
      'בירור זכאות עפ"י הקריטריונים',
      'בדיקת צרכים מיוחדים של המשפחה',
      'תיאום עם צוות מלונות',
      'הפניה למלון מתאים + מסירת פרטים',
      'עדכון מערכת יחד',
    ],
  },
  {
    id: 'missing',
    title: 'מחפש בן משפחה',
    subtitle: 'אדם מחפש קרוב משפחה שלא מצליח ליצור איתו קשר',
    icon: Search,
    color: 'from-purple-500 to-purple-600',
    scenario:
      'אדם מודאג שלא מצליח ליצור קשר עם בן משפחה מאז האירוע. עשוי להיות במצב חרדה גבוה.',
    doSay: [
      '"אני מבין את הדאגה. בוא נפעל ביחד."',
      '"יש לנו צוות שעוסק באיתור – אני מעביר את הפרטים עכשיו."',
      '"ספר לי מתי דיברתם לאחרונה ואיפה הוא היה."',
    ],
    dontSay: [
      '"בטח הכל בסדר"',
      '"אל תדאג" (בלי לעשות משהו מוחשי)',
      '"כנראה אין קליטה"',
    ],
    steps: [
      'רישום פרטים מלאים על הנעדר (שם, גיל, כתובת, מראה)',
      'בדיקה מול רשימות נפגעים ובתי חולים',
      'העברת פרטים לצוות קישור לבתי חולים',
      'עדכון שוטף של המשפחה',
      'ונטילציה – הפעלת מודל מעש"ה',
    ],
  },
  {
    id: 'refusal',
    title: 'סירוב פינוי',
    subtitle: 'תושב מסרב להתפנות מביתו למרות ההנחיה',
    icon: ShieldOff,
    color: 'from-amber-500 to-amber-600',
    scenario:
      'תושב מסרב לעזוב את ביתו למרות הנחיה לפנות. ייתכן שמדובר בקשיש, אדם עם מוגבלות, או אדם שמפחד לעזוב.',
    doSay: [
      '"אני מבין שקשה לעזוב את הבית. בוא נדבר על זה."',
      '"הבטיחות שלך חשובה לנו מאוד."',
      '"יש לנו מקום בטוח שמחכה לך, עם כל מה שצריך."',
      '"אני לא יכול להכריח, אבל אני ממליץ בחום."',
    ],
    dontSay: [
      '"אתה חייב לצאת" (בכפייה)',
      '"זו פקודה"',
      '"אם תישאר – זה על אחריותך"',
    ],
    steps: [
      'הבנת הסיבה לסירוב (פחד, חיית מחמד, ציוד)',
      'טיפול בחסם – פתרון מותאם',
      'שכנוע רך עם דגש על בטיחות',
      'אם עדיין מסרב – תיעוד ודיווח למטה',
      'אין להשתמש בכוח – רק שכנוע',
    ],
  },
];

export default function ScriptsPage() {
  const [expandedScript, setExpandedScript] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">תסריטי שיחה והרגעה</h1>
        <p className="text-slate-500 text-lg">תסריטים מעשיים למצבי אמת בשטח – לחצו כדי לפתוח</p>
      </section>

      {/* Scripts */}
      <div className="space-y-3">
        {SCRIPTS.map(script => {
          const Icon = script.icon;
          const isExpanded = expandedScript === script.id;
          return (
            <div key={script.id} className="bg-white rounded-xl shadow overflow-hidden">
              <button
                onClick={() => setExpandedScript(isExpanded ? null : script.id)}
                className="w-full flex items-center gap-4 p-5 text-right hover:bg-slate-50 transition-colors"
              >
                <div className={`bg-gradient-to-bl ${script.color} text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg text-slate-800">{script.title}</div>
                  <div className="text-sm text-slate-500">{script.subtitle}</div>
                </div>
                {isExpanded ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              {isExpanded && (
                <div className="border-t px-5 pb-5 pt-4 space-y-5">
                  {/* Scenario */}
                  <div className="bg-slate-50 rounded-lg p-4 border">
                    <h3 className="font-bold text-slate-700 mb-1 text-sm">תיאור המצב</h3>
                    <p className="text-slate-600">{script.scenario}</p>
                  </div>

                  {/* Steps */}
                  <div>
                    <h3 className="font-bold text-slate-700 mb-2">שלבי הפעולה</h3>
                    <ol className="space-y-1.5">
                      {script.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="bg-blue-100 text-blue-700 font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Do Say */}
                    <div className="bg-green-50 rounded-lg p-4 border border-green-100">
                      <h3 className="font-bold text-green-700 mb-2 text-sm flex items-center gap-1">
                        ✓ כן לומר
                      </h3>
                      <ul className="space-y-1.5">
                        {script.doSay.map((phrase, i) => (
                          <li key={i} className="text-green-700 text-sm italic">{phrase}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Don't Say */}
                    <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                      <h3 className="font-bold text-red-700 mb-2 text-sm flex items-center gap-1">
                        ✗ לא לומר
                      </h3>
                      <ul className="space-y-1.5">
                        {script.dontSay.map((phrase, i) => (
                          <li key={i} className="text-red-700 text-sm italic">{phrase}</li>
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
    </div>
  );
}

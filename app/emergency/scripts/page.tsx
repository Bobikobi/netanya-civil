'use client';
import { useState } from 'react';
import { ChevronDown, MessageSquare, AlertCircle, Home, Hotel, Search, ShieldOff } from 'lucide-react';
import React from 'react';

interface ScriptData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  gradient: string;
  border: string;
  iconColor: string;
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
    gradient: 'from-red-500/15 to-red-900/15',
    border: 'border-red-500/30',
    iconColor: 'text-red-400',
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
      'מפעילים מודל מעש"ה – מחויבות > עידוד > שאלות > הבניה',
      'מנתבים לנקודת קליטה או שולחן קדמי',
    ],
  },
  {
    id: 'property',
    title: 'מחפש מידע על נכס',
    subtitle: 'תושב רוצה לדעת מה מצב ביתו / דירתו',
    icon: Home,
    gradient: 'from-blue-500/15 to-blue-900/15',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
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
    gradient: 'from-teal-500/15 to-teal-900/15',
    border: 'border-teal-500/30',
    iconColor: 'text-teal-400',
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
    gradient: 'from-purple-500/15 to-purple-900/15',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
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
    gradient: 'from-amber-500/15 to-amber-900/15',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
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
    <div className="space-y-10">
      {/* Hero */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-white to-white/70 bg-clip-text text-transparent">
          תסריטי שיחה והרגעה
        </h1>
        <p className="text-white/40 text-base">תסריטים מעשיים למצבי אמת בשטח – לחצו כדי לפתוח</p>
      </section>

      {/* Scripts */}
      <div className="space-y-3">
        {SCRIPTS.map(script => {
          const Icon = script.icon;
          const isExpanded = expandedScript === script.id;
          return (
            <div key={script.id} className={`bg-gradient-to-l ${script.gradient} border ${script.border} ${isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} overflow-hidden`}>
              <button
                onClick={() => setExpandedScript(isExpanded ? null : script.id)}
                className="w-full flex items-center gap-4 p-5 text-right hover:bg-white/5 transition-colors"
              >
                <div className="bg-white/10 rounded-xl w-11 h-11 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className={script.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white text-sm">{script.title}</div>
                  <div className="text-xs text-white/40">{script.subtitle}</div>
                </div>
                <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} className="text-white/40" />
                </div>
              </button>
              {isExpanded && (
                <div className={`bg-white/5 border-t ${script.border} px-5 pb-5 pt-4 space-y-5 animate-slideDown`}>
                  {/* Scenario */}
                  <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <h3 className="font-bold text-white/70 mb-1.5 text-xs">תיאור המצב</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{script.scenario}</p>
                  </div>

                  {/* Steps */}
                  <div>
                    <h3 className="font-bold text-white text-sm mb-2.5">שלבי הפעולה</h3>
                    <ol className="space-y-2">
                      {script.steps.map((step, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/60 text-sm">
                          <span className="bg-white/10 text-white/60 font-bold rounded-lg w-6 h-6 flex items-center justify-center flex-shrink-0 text-xs mt-0.5">
                            {i + 1}
                          </span>
                          {step}
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* Do Say */}
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                      <h3 className="font-bold text-emerald-400 mb-2.5 text-xs flex items-center gap-1">
                        &#10003; כן לומר
                      </h3>
                      <ul className="space-y-2">
                        {script.doSay.map((phrase, i) => (
                          <li key={i} className="text-white/60 text-sm">{phrase}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Don't Say */}
                    <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                      <h3 className="font-bold text-red-400 mb-2.5 text-xs flex items-center gap-1">
                        &#10007; לא לומר
                      </h3>
                      <ul className="space-y-2">
                        {script.dontSay.map((phrase, i) => (
                          <li key={i} className="text-white/60 text-sm">{phrase}</li>
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

'use client';
import { useState } from 'react';
import { ChevronDown, AlertTriangle, CheckCircle, Play, BookOpen, Phone } from 'lucide-react';
import React from 'react';

const STEPS = [
  {
    letter: 'מ',
    title: 'מחויבות',
    english: 'Commitment',
    description:
      'יצירת קשר עם הנפגע ללא הבטחות שווא. הבטחה להיות איתו: "אני איתך, אתה לא לבד". המטרה – תחושת שייכות ואי-בדידות ברגע הקשה.',
    example:
      '"שמי ___, אני מצוות העירייה. אני איתך עכשיו. אתה לא לבד."',
    color: 'bg-blue-500',
    colorLight: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    letter: 'ע',
    title: 'עידוד לפעולה',
    english: 'Encouragement to Action',
    description:
      'החזרת האדם ממצב פסיבי לאקטיבי על ידי מתן הנחיות פשוטות לביצוע. המטרה – להוציא את האדם מקיפאון ולהחזיר לו תחושת מסוגלות ושליטה.',
    example:
      '"תעזור לי לאסוף את הציוד", "אסוף מספר טלפון", "חלק מים לתושבים"',
    color: 'bg-emerald-500',
    colorLight: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    letter: 'ש',
    title: 'שאלות קוגניטיביות',
    english: 'Cognitive Questions',
    description:
      'שאילת שאלות הדורשות חשיבה רציונלית – לא רגשית. המטרה: להפעיל את הקורטקס הפרה-פרונטלי ולהוציא את המוח ממצב חרדה.',
    example:
      '"כמה קומות יש בבניין?" / "באיזו שעה בערך זה קרה?" / "כמה אנשים גרים בדירה?"',
    color: 'bg-purple-500',
    colorLight: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    letter: 'ה',
    title: 'הבניה',
    english: 'Structure',
    description:
      'הבנייה של רצף האירועים – יצירת סדר בבלבול על ידי תיאור עובדתי וקצר של האירוע, והדגשה שהסכנה חלפה. המטרה: החזרת תחושת סדר ושליטה לאחר הכאוס.',
    example:
      '"הייתה אזעקה, נכנסנו לממ"ד, עכשיו האיום חלף ואנחנו בטוחים."',
    color: 'bg-rose-500',
    colorLight: 'bg-rose-50',
    borderColor: 'border-rose-200',
  },
];

const MISTAKES = [
  { wrong: 'לומר \'תירגע\' או \'יהיה בסדר\'', right: '\'אני כאן איתך. בוא נסתכל יחד על העובדות.\'' },
  { wrong: 'להגיב רגשית: \'אוי, איזה אסון!\'', right: '\'הבית נפגע. כרגע אתם בטוחים.\' (עובדות בלבד)' },
  { wrong: 'להפעיל לחץ לדבר על הרגשות', right: 'שאלות קוגניטיביות שמחזירות לתפקוד' },
  { wrong: 'להבטיח תוצאות (\'ימצאו את כולם\')', right: '\'אנחנו פועלים עכשיו. אני איתך.\'' },
  { wrong: 'להשאיר את האדם פסיבי ובמצוקה', right: 'הנעה לפעולה קטנה ומיידית שמחזירה תחושת שליטה' },
];

const REMINDERS = [
  { title: 'לפני שניגשים לאדם במצוקה', items: ['נשום עמוק', 'זהה את עצמך', 'שמור על קשר עין', 'דבר בטון רגוע ואיטי'] },
  { title: 'הסדר הנכון של הפעולות', items: ['מחויבות', 'עידוד לפעולה', 'שאלות קוגניטיביות', 'הבניה'] },
  { title: 'בסיום המפגש', items: ['ודא שהאדם יודע לאן לפנות', 'השאר פרטים ליצירת קשר', 'דווח למטה'] },
  { title: 'דאגה לעצמכם', items: ['ונטילציה עם עמיתים', 'שתייה ואוכל', 'זמן מנוחה בין התערבויות'] },
];

export default function MashePage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-14">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">מודל מעש״ה</h1>
        <p className="text-gray-400 text-base">עזרה ראשונה נפשית – פותח ע״י ד״ר משה פרחי</p>
      </section>

      <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-5 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <BookOpen size={20} className="text-blue-500" />
          מהו מודל מעש״ה?
        </h2>
        <p className="text-gray-500 leading-relaxed text-sm">
          מודל מעש״ה הוא כלי לאומי מובנה לעזרה ראשונה נפשית (עשר״נ), פותח על ידי ד״ר משה פרחי.
          המודל מבוסס על עקרונות נוירו-פסיכולוגיים שמטרתם מעבר מחשיבה רגשית לחשיבה קוגניטיבית-תפקודית, תוך דקה-שתיים בלבד.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="font-bold text-blue-700 text-sm mb-1">מטרת המודל</p>
          <p className="text-gray-600 text-sm">העברת הנפגע ממצב פסיבי-רגשי למצב פעיל-תפקודי – מ&quot;למה?&quot; (רגש) ל&quot;מה?&quot; (עובדה/תפקוד).</p>
        </div>
        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <p className="font-bold text-emerald-700 text-sm mb-1">מי יכול להשתמש?</p>
          <p className="text-gray-600 text-sm">מתאים לכל אדם – ללא צורך בידע מקצועי מוקדם בבריאות הנפש. הוכח כיעיל להפחתת קשיים פסיכולוגיים בעתיד.</p>
        </div>
        <div className="flex flex-wrap items-center gap-3 bg-gray-50 border border-gray-200 rounded-xl p-4">
          <span className="text-xs font-medium text-gray-400">ראשי תיבות:</span>
          <div className="flex gap-2">
            {STEPS.map(s => (
              <span key={s.letter} className={`${s.color} text-white font-bold w-9 h-9 rounded-lg text-lg flex items-center justify-center`}>{s.letter}</span>
            ))}
          </div>
          <span className="text-gray-500 text-sm">מחויבות · עידוד לפעולה · שאלות קוגניטיביות · הבניה</span>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold text-gray-900 text-center">עקרונות הליבה – לפי סדר הפעולות</h2>
        <div className="space-y-3">
          {STEPS.map((step, idx) => {
            const isExpanded = expandedStep === idx;
            return (
              <div key={idx} className={`bg-white border ${step.borderColor} rounded-2xl overflow-hidden shadow-sm`}>
                <button onClick={() => setExpandedStep(isExpanded ? null : idx)} className="w-full flex items-center gap-4 p-5 text-right hover:bg-gray-50 transition-colors">
                  <div className={`${step.color} text-white text-xl font-bold w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>{step.letter}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-gray-900">{step.letter} – {step.title}</div>
                    <div className="text-xs text-gray-400">{step.english}</div>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-lg font-medium ml-2">שלב {idx + 1}</span>
                  <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} className="text-gray-400" />
                  </div>
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 space-y-4 animate-slideDown">
                    <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
                    <div className={`${step.colorLight} border ${step.borderColor} rounded-xl p-4`}>
                      <div className="text-xs font-medium text-gray-400 mb-1.5">דוגמה לשימוש</div>
                      <p className="text-gray-600 text-sm italic">{step.example}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold text-gray-900 text-center flex items-center justify-center gap-2">
          <AlertTriangle size={20} className="text-amber-500" />
          טעויות נפוצות וכיצד להימנע
        </h2>
        <div className="space-y-3">
          {MISTAKES.map((m, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col md:flex-row gap-3 shadow-sm">
              <div className="flex-1 bg-red-50 border border-red-200 rounded-xl p-3">
                <div className="text-red-600 font-bold text-xs mb-1 flex items-center gap-1"><span>&#10007;</span> לא לעשות</div>
                <p className="text-gray-600 text-sm">{m.wrong}</p>
              </div>
              <div className="flex-1 bg-emerald-50 border border-emerald-200 rounded-xl p-3">
                <div className="text-emerald-600 font-bold text-xs mb-1 flex items-center gap-1"><CheckCircle size={12} /> במקום</div>
                <p className="text-gray-600 text-sm">{m.right}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 space-y-4 shadow-sm">
        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Play size={20} className="text-blue-500" />
          סרטון הדרכה – ד״ר משה פרחי
        </h2>
        <p className="text-gray-500 text-sm">
          ד״ר משה פרחי, ראש החוג לעבודה סוציאלית ומפתח מודל מעש״ה, מציג את המודל להגשת עזרה ראשונה נפשית.
        </p>
        <div className="bg-gray-50 border border-gray-200 rounded-xl p-10 text-center">
          <Play size={40} className="mx-auto mb-2 text-gray-300" />
          <p className="text-gray-400 text-sm">סרטון ההדרכה יתווסף בקרוב</p>
        </div>
      </section>

      <section className="space-y-5">
        <h2 className="text-xl font-bold text-gray-900 text-center">תזכורות מהירות לשטח</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {REMINDERS.map((reminder, idx) => (
            <div key={idx} className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm">
              <h3 className="font-bold text-gray-900 text-sm mb-3">{reminder.title}</h3>
              <ul className="space-y-1.5">
                {reminder.items.map((item, i) => (
                  <li key={i} className="text-gray-500 flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Embedded key contacts */}
      <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <Phone size={16} className="text-blue-500" />
          אנשי קשר – מטה רגשי וצוותי התערבות
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            { name: 'סיגל קני פז', role: 'ראש מטה רגשי', phone: '054-5594108' },
            { name: 'מירב מור', role: 'סגן מטה רגשי', phone: '052-4686349' },
            { name: 'נדין שם טוב', role: 'ראש מטה התערבות', phone: '054-4719718' },
            { name: 'ער"ן', role: 'עזרה ראשונה נפשית', phone: '1201' },
            { name: 'נט"ל', role: 'קו סיוע רגשי', phone: '*2784' },
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

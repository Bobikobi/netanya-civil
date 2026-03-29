'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, AlertTriangle, CheckCircle, Play, BookOpen } from 'lucide-react';

const STEPS = [
  {
    letter: 'מ',
    title: 'מחויבות',
    english: 'Commitment',
    description:
      'יצירת קשר עם הנפגע ללא הבטחות שווא. הבטחה להיות איתו: "אני איתך, אתה לא לבד". המטרה – תחושת שייכות ואי-בדידות ברגע הקשה.',
    example:
      '"שמי ___, אני מצוות העירייה. אני איתך עכשיו. אתה לא לבד."',
    color: 'bg-blue-600',
  },
  {
    letter: 'ע',
    title: 'עידוד לפעולה',
    english: 'Encouragement to Action',
    description:
      'החזרת האדם ממצב פסיבי לאקטיבי על ידי מתן הנחיות פשוטות לביצוע. המטרה – להוציא את האדם מקיפאון ולהחזיר לו תחושת מסוגלות ושליטה.',
    example:
      '"תעזור לי לאסוף את הציוד", "אסוף מספר טלפון", "חלק מים לתושבים"',
    color: 'bg-emerald-600',
  },
  {
    letter: 'ש',
    title: 'שאלות קוגניטיביות',
    english: 'Cognitive Questions',
    description:
      'שאילת שאלות הדורשות חשיבה רציונלית – לא רגשית. המטרה: להפעיל את הקורטקס הפרה-פרונטלי ולהוציא את המוח ממצב חרדה.',
    example:
      '"כמה קומות יש בבניין?" / "באיזו שעה בערך זה קרה?" / "כמה אנשים גרים בדירה?"',
    color: 'bg-purple-600',
  },
  {
    letter: 'ה',
    title: 'הבניה',
    english: 'Structure',
    description:
      'הבנייה של רצף האירועים – יצירת סדר בבלבול על ידי תיאור עובדתי וקצר של האירוע, והדגשה שהסכנה חלפה. המטרה: החזרת תחושת סדר ושליטה לאחר הכאוס.',
    example:
      '"הייתה אזעקה, נכנסנו לממ"ד, עכשיו האיום חלף ואנחנו בטוחים."',
    color: 'bg-rose-600',
  },
];

const MISTAKES = [
  {
    wrong: 'לומר \'תירגע\' או \'יהיה בסדר\'',
    right: '\'אני כאן איתך. בוא נסתכל יחד על העובדות.\'',
  },
  {
    wrong: 'להגיב רגשית: \'אוי, איזה אסון!\'',
    right: '\'הבית נפגע. כרגע אתם בטוחים.\' (עובדות בלבד)',
  },
  {
    wrong: 'להפעיל לחץ לדבר על הרגשות',
    right: 'שאלות קוגניטיביות שמחזירות לתפקוד',
  },
  {
    wrong: 'להבטיח תוצאות (\'ימצאו את כולם\')',
    right: '\'אנחנו פועלים עכשיו. אני איתך.\'',
  },
  {
    wrong: 'להשאיר את האדם פסיבי ובמצוקה',
    right: 'הנעה לפעולה קטנה ומיידית שמחזירה תחושת שליטה',
  },
];

const REMINDERS = [
  {
    title: 'לפני שניגשים לאדם במצוקה',
    items: ['נשום עמוק', 'זהה את עצמך', 'שמור על קשר עין', 'דבר בטון רגוע ואיטי'],
  },
  {
    title: 'הסדר הנכון של הפעולות',
    items: ['מחויבות → עידוד לפעולה → שאלות קוגניטיביות → הבניה'],
  },
  {
    title: 'בסיום המפגש',
    items: ['ודא שהאדם יודע לאן לפנות', 'השאר פרטים ליצירת קשר', 'דווח למטה'],
  },
  {
    title: 'דאגה לעצמכם',
    items: ['ונטילציה עם עמיתים', 'שתייה ואוכל', 'זמן מנוחה בין התערבויות'],
  },
];

export default function MashePage() {
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">מודל מעש״ה</h1>
        <p className="text-slate-500 text-lg">עזרה ראשונה נפשית – פותח ע״י ד״ר משה פרחי</p>
      </section>

      {/* What is MASHE */}
      <section className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <BookOpen size={24} className="text-blue-600" />
          מהו מודל מעש״ה?
        </h2>
        <p className="text-slate-700 leading-relaxed">
          מודל מעש״ה הוא כלי לאומי מובנה לעזרה ראשונה נפשית (עשר״נ), פותח על ידי ד״ר משה פרחי.
          המודל מבוסס על עקרונות נוירו-פסיכולוגיים שמטרתם מעבר מחשיבה רגשית לחשיבה קוגניטיבית-תפקודית,
          תוך דקה-שתיים בלבד.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
          <p className="font-bold text-blue-800 mb-1">מטרת המודל</p>
          <p className="text-blue-700">
            העברת הנפגע ממצב פסיבי-רגשי למצב פעיל-תפקודי – מ&quot;למה?&quot; (רגש) ל&quot;מה?&quot; (עובדה/תפקוד).
          </p>
        </div>
        <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-100">
          <p className="font-bold text-emerald-800 mb-1">מי יכול להשתמש?</p>
          <p className="text-emerald-700">
            מתאים לכל אדם – ללא צורך בידע מקצועי מוקדם בבריאות הנפש. הוכח כיעיל להפחתת קשיים
            פסיכולוגיים בעתיד.
          </p>
        </div>
        <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-4">
          <span className="text-xl font-bold text-slate-400">ראשי תיבות:</span>
          <div className="flex gap-2">
            {STEPS.map(s => (
              <span key={s.letter} className={`${s.color} text-white font-bold px-3 py-1 rounded-lg text-lg`}>
                {s.letter}
              </span>
            ))}
          </div>
          <span className="text-slate-600">מחויבות · עידוד לפעולה · שאלות קוגניטיביות · הבניה</span>
        </div>
      </section>

      {/* Steps */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center">עקרונות הליבה – לפי סדר הפעולות</h2>
        <div className="space-y-3">
          {STEPS.map((step, idx) => {
            const isExpanded = expandedStep === idx;
            return (
              <div key={idx} className="bg-white rounded-xl shadow overflow-hidden">
                <button
                  onClick={() => setExpandedStep(isExpanded ? null : idx)}
                  className="w-full flex items-center gap-4 p-5 text-right"
                >
                  <div className={`${step.color} text-white text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                    {step.letter}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-slate-800">
                      {step.letter} – {step.title}
                    </div>
                    <div className="text-sm text-slate-500">{step.english}</div>
                  </div>
                  <div className="text-slate-400 bg-slate-100 px-2 py-1 rounded text-xs font-bold ml-2">
                    שלב {idx + 1}
                  </div>
                  {isExpanded ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 space-y-4">
                    <p className="text-slate-700 leading-relaxed">{step.description}</p>
                    <div className="bg-slate-50 rounded-lg p-4 border">
                      <div className="text-sm font-bold text-slate-500 mb-1">דוגמה לשימוש</div>
                      <p className="text-slate-700 italic">{step.example}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center flex items-center justify-center gap-2">
          <AlertTriangle size={24} className="text-amber-500" />
          טעויות נפוצות וכיצד להימנע
        </h2>
        <div className="space-y-3">
          {MISTAKES.map((m, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-5 flex flex-col md:flex-row gap-4">
              <div className="flex-1 bg-red-50 rounded-lg p-3 border border-red-100">
                <div className="text-red-600 font-bold text-sm mb-1 flex items-center gap-1">
                  <span className="text-lg">✗</span> לא לעשות
                </div>
                <p className="text-red-700">{m.wrong}</p>
              </div>
              <div className="flex-1 bg-green-50 rounded-lg p-3 border border-green-100">
                <div className="text-green-600 font-bold text-sm mb-1 flex items-center gap-1">
                  <CheckCircle size={16} /> במקום
                </div>
                <p className="text-green-700">{m.right}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="bg-white rounded-xl shadow-md p-6 md:p-8 space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
          <Play size={24} className="text-blue-600" />
          סרטון הדרכה – ד״ר משה פרחי
        </h2>
        <p className="text-slate-600">
          ד״ר משה פרחי, ראש החוג לעבודה סוציאלית ומפתח מודל מעש״ה, מציג את המודל להגשת
          עזרה ראשונה נפשית. הסרטון מדגים את שילוב העקרונות המחזירים לתפקוד תוך דקות ספורות.
        </p>
        <div className="bg-slate-100 rounded-lg p-8 text-center text-slate-500">
          <Play size={48} className="mx-auto mb-2 text-slate-400" />
          <p>סרטון ההדרכה יתווסף בקרוב</p>
        </div>
      </section>

      {/* Quick Reminders */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center">תזכורות מהירות לשטח</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {REMINDERS.map((reminder, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-5">
              <h3 className="font-bold text-slate-800 mb-2">{reminder.title}</h3>
              <ul className="space-y-1">
                {reminder.items.map((item, i) => (
                  <li key={i} className="text-slate-600 flex items-start gap-2 text-sm">
                    <span className="text-blue-500 mt-0.5">●</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

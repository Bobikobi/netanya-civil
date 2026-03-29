'use client';
import { useState } from 'react';
import { ChevronDown, AlertTriangle, CheckCircle, Play, BookOpen } from 'lucide-react';
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
    colorLight: 'bg-blue-500/20',
    textColor: 'text-blue-400',
    borderColor: 'border-blue-500/30',
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
    colorLight: 'bg-emerald-500/20',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500/30',
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
    colorLight: 'bg-purple-500/20',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500/30',
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
    colorLight: 'bg-rose-500/20',
    textColor: 'text-rose-400',
    borderColor: 'border-rose-500/30',
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
    items: ['מחויבות', 'עידוד לפעולה', 'שאלות קוגניטיביות', 'הבניה'],
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
    <div className="space-y-14">
      {/* Hero */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-white to-white/70 bg-clip-text text-transparent">
          מודל מעש״ה
        </h1>
        <p className="text-white/40 text-base">עזרה ראשונה נפשית – פותח ע״י ד״ר משה פרחי</p>
      </section>

      {/* What is MASHE */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-5">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <BookOpen size={20} className="text-blue-400" />
          מהו מודל מעש״ה?
        </h2>
        <p className="text-white/60 leading-relaxed text-sm">
          מודל מעש״ה הוא כלי לאומי מובנה לעזרה ראשונה נפשית (עשר״נ), פותח על ידי ד״ר משה פרחי.
          המודל מבוסס על עקרונות נוירו-פסיכולוגיים שמטרתם מעבר מחשיבה רגשית לחשיבה קוגניטיבית-תפקודית,
          תוך דקה-שתיים בלבד.
        </p>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4">
          <p className="font-bold text-blue-400 text-sm mb-1">מטרת המודל</p>
          <p className="text-white/60 text-sm">
            העברת הנפגע ממצב פסיבי-רגשי למצב פעיל-תפקודי – מ"למה?" (רגש) ל"מה?" (עובדה/תפקוד).
          </p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
          <p className="font-bold text-emerald-400 text-sm mb-1">מי יכול להשתמש?</p>
          <p className="text-white/60 text-sm">
            מתאים לכל אדם – ללא צורך בידע מקצועי מוקדם בבריאות הנפש. הוכח כיעיל להפחתת קשיים
            פסיכולוגיים בעתיד.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4">
          <span className="text-xs font-medium text-white/40">ראשי תיבות:</span>
          <div className="flex gap-2">
            {STEPS.map(s => (
              <span key={s.letter} className={`${s.color} text-white font-bold w-9 h-9 rounded-lg text-lg flex items-center justify-center`}>
                {s.letter}
              </span>
            ))}
          </div>
          <span className="text-white/50 text-sm">מחויבות · עידוד לפעולה · שאלות קוגניטיביות · הבניה</span>
        </div>
      </section>

      {/* Steps */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-white text-center">עקרונות הליבה – לפי סדר הפעולות</h2>
        <div className="space-y-3">
          {STEPS.map((step, idx) => {
            const isExpanded = expandedStep === idx;
            return (
              <div key={idx} className={`bg-white/5 border ${step.borderColor} rounded-2xl overflow-hidden`}>
                <button
                  onClick={() => setExpandedStep(isExpanded ? null : idx)}
                  className="w-full flex items-center gap-4 p-5 text-right hover:bg-white/5 transition-colors"
                >
                  <div className={`${step.color} text-white text-xl font-bold w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {step.letter}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white">
                      {step.letter} – {step.title}
                    </div>
                    <div className="text-xs text-white/40">{step.english}</div>
                  </div>
                  <span className="text-xs text-white/30 bg-white/5 px-2 py-1 rounded-lg font-medium ml-2">
                    שלב {idx + 1}
                  </span>
                  <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} className="text-white/40" />
                  </div>
                </button>
                {isExpanded && (
                  <div className="px-5 pb-5 space-y-4 animate-slideDown">
                    <p className="text-white/60 leading-relaxed text-sm">{step.description}</p>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-xs font-medium text-white/40 mb-1.5">דוגמה לשימוש</div>
                      <p className="text-white/70 text-sm italic">{step.example}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Common Mistakes */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-white text-center flex items-center justify-center gap-2">
          <AlertTriangle size={20} className="text-amber-400" />
          טעויות נפוצות וכיצד להימנע
        </h2>
        <div className="space-y-3">
          {MISTAKES.map((m, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-3">
              <div className="flex-1 bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                <div className="text-red-400 font-bold text-xs mb-1 flex items-center gap-1">
                  <span>&#10007;</span> לא לעשות
                </div>
                <p className="text-white/60 text-sm">{m.wrong}</p>
              </div>
              <div className="flex-1 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3">
                <div className="text-emerald-400 font-bold text-xs mb-1 flex items-center gap-1">
                  <CheckCircle size={12} /> במקום
                </div>
                <p className="text-white/60 text-sm">{m.right}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Play size={20} className="text-blue-400" />
          סרטון הדרכה – ד״ר משה פרחי
        </h2>
        <p className="text-white/50 text-sm">
          ד״ר משה פרחי, ראש החוג לעבודה סוציאלית ומפתח מודל מעש״ה, מציג את המודל להגשת
          עזרה ראשונה נפשית. הסרטון מדגים את שילוב העקרונות המחזירים לתפקוד תוך דקות ספורות.
        </p>
        <div className="bg-white/5 border border-white/10 rounded-xl p-10 text-center">
          <Play size={40} className="mx-auto mb-2 text-white/20" />
          <p className="text-white/30 text-sm">סרטון ההדרכה יתווסף בקרוב</p>
        </div>
      </section>

      {/* Quick Reminders */}
      <section className="space-y-5">
        <h2 className="text-xl font-bold text-white text-center">תזכורות מהירות לשטח</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {REMINDERS.map((reminder, idx) => (
            <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <h3 className="font-bold text-white text-sm mb-3">{reminder.title}</h3>
              <ul className="space-y-1.5">
                {reminder.items.map((item, i) => (
                  <li key={i} className="text-white/50 flex items-start gap-2 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20 mt-1.5 flex-shrink-0" />
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

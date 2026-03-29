'use client';
import { useState } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  Users,
  ClipboardList,
  Building2,
  Heart,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Zap,
  ArrowDown,
} from 'lucide-react';

const FLOW_STEPS = [
  {
    id: 'event',
    title: 'אירוע הרס',
    subtitle: 'נפילת טיל / אירוע המוני',
    icon: AlertTriangle,
    color: 'from-red-600 to-red-700',
    borderColor: 'border-red-500',
    details: [
      'קבלת התרעה / דיווח על אירוע',
      'הפעלת שרשרת דיווח',
      'כינוס צוותי חירום',
    ],
  },
  {
    id: 'intervention',
    title: 'צוות התערבות במקום',
    subtitle: 'הרגעה · טיפול · ניתוב',
    icon: Users,
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-500',
    details: [
      'הגעה ראשונה לאזור האירוע',
      'מענה נפשי ראשוני לפצועים ולנוכחים',
      'ניתוב תושבים לנקודות קליטה',
      'דיווח למטה על תמונת מצב',
    ],
  },
  {
    id: 'front_desk',
    title: 'שולחן קדמי',
    subtitle: 'תשאול · רישום · הפניה',
    icon: ClipboardList,
    color: 'from-yellow-500 to-yellow-600',
    borderColor: 'border-yellow-500',
    details: [
      'נקודת קליטה קדמית למשפחות',
      'תשאול ראשוני ורישום פרטים',
      'הפניה לגורמים המתאימים',
      'עדכון מערכת יחד',
    ],
  },
  {
    id: 'msr',
    title: 'מס"ר – מרכז סיוע ראשוני',
    subtitle: 'הרגעה · מידע · זכאות · ציוד',
    icon: Building2,
    color: 'from-blue-600 to-blue-700',
    borderColor: 'border-blue-500',
    details: [
      'מרכז סיוע מרכזי למשפחות',
      'מתן מידע על זכאויות',
      'חלוקת ציוד חיוני',
      'איתור נעדרים',
      'הפעלת צוותים מקבילים',
    ],
  },
];

const PARALLEL_TEAMS = [
  { title: 'צוות קישור לבתי חולים', desc: 'יציאה לבתי החולים, סיוע למשפחות ואיתור נעדרים' },
  { title: 'צוות מלונות', desc: 'קבלה וקליטה של זכאים, עבודה מול המלונות' },
  { title: 'צוות בשורה מרה', desc: 'מסירת הודעה על הרוג, לעולם לא בשטח האירוע' },
  { title: 'צוות תל"ם', desc: 'קשר יזום עם אוכלוסיות פגיעות, מופעל שעות לאחר שיא האירוע' },
  { title: 'מענה רגשי לתושבים', desc: 'מענה טלפוני לתושבים במצוקה, הפניות ממוקד 106' },
  { title: 'צוות מתנדבים וקהילה', desc: 'עיבוי צוותי שטח, רישום וניהול מתנדבים' },
  { title: '"מי יציל את המציל"', desc: 'ונטילציה ותמיכה לצוותי החירום, לכל אנשי השטח והמקצוע' },
  { title: 'מטה מכלול אוכלוסייה', desc: 'ריכוז תמונת מצב, תיאום והקצאת משימות, עדכון ראש העיר' },
];

const QUICK_LINKS = [
  { href: '/emergency/mashe', label: 'מודל מעש״ה', sublabel: 'עזרה ראשונה נפשית', icon: Heart },
  { href: '/emergency/teams', label: 'צוותי החירום', sublabel: 'תוכניות הפעלה מלאות', icon: Users },
  { href: '/emergency/scripts', label: 'תסריטי שיחה', sublabel: 'מצבי שטח מעשיים', icon: MessageSquare },
  { href: '/emergency/faq', label: 'שאלות ותשובות', sublabel: 'מערכת יחד ותהליכים', icon: HelpCircle },
];

const TIPS = [
  'בהיכון תמידי: ודאי שכל הציוד הקריטי זמין, תקין ומוכן להפעלה מיידית.',
  'שמור על קשר רציף עם המטה – דווח כל 15 דקות על תמונת מצב.',
  'הקפד על זיהוי עצמי מול תושבים – אמון הוא הבסיס להתערבות.',
  'אל תבטיח תוצאות – הבטח נוכחות: "אני כאן איתך".',
  'תעד כל פעולה – הרישום חשוב לא פחות מהטיפול.',
  'דאג לעצמך – אתה לא יכול לעזור אם אתה שבור.',
  'הכר את הצוותים האחרים – תיאום הוא מפתח ההצלחה.',
  'שמור על שפה רגועה ועובדתית – הימנע מדרמטיזציה.',
  'ודא שכל תושב שעוזב את המקום יודע לאן לפנות.',
  'בסוף המשמרת – ונטילציה חובה, לא המלצה.',
];

export default function EmergencyHomePage() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [tipIndex, setTipIndex] = useState(0);

  function toggleStep(id: string) {
    setExpandedStep(prev => (prev === id ? null : id));
  }

  function nextTip() {
    setTipIndex(prev => (prev + 1) % TIPS.length);
  }

  return (
    <div className="space-y-12">
      {/* Hero */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">
          צוותי חירום – אגף שירותים חברתיים
        </h1>
        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
          כלי לריענון ותרגול הפעלת צוותי חירום של אגף השירותים החברתיים בנתניה
        </p>
      </section>

      {/* Quick Links */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {QUICK_LINKS.map(link => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-5 text-center group"
            >
              <div className="bg-blue-50 group-hover:bg-blue-100 transition-colors rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <Icon size={22} className="text-blue-700" />
              </div>
              <div className="font-bold text-slate-800 text-sm">{link.label}</div>
              <div className="text-xs text-slate-500 mt-1">{link.sublabel}</div>
            </Link>
          );
        })}
      </section>

      {/* External Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <a
          href="https://emergency-dashboard-live-silk.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-700 hover:bg-blue-800 text-white rounded-xl p-5 flex items-center gap-4 transition-colors"
        >
          <ClipboardList size={28} />
          <div>
            <div className="font-bold">מערכת טפסי מס״ר</div>
            <div className="text-blue-200 text-sm">רישום משפחות · יציאה מאזור שנפגע · איתור נעדרים</div>
          </div>
          <ExternalLink size={18} className="mr-auto" />
        </a>
        <a
          href="https://govforms.gov.il/mw/forms/Emergency_UnRecogognized@taxes.gov.il"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl p-5 flex items-center gap-4 transition-colors"
        >
          <Building2 size={28} />
          <div>
            <div className="font-bold">דיווח תושבים – רשות המיסים</div>
            <div className="text-emerald-200 text-sm">מילוי למי שביתו נפגע · מגיע לצוות מלונות ולמס רכוש</div>
          </div>
          <ExternalLink size={18} className="mr-auto" />
        </a>
      </section>

      {/* Flow Diagram */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center">
          זרימת הפעלת הצוותים באירוע הרס
        </h2>
        <p className="text-center text-slate-500 text-sm">לחצו על כל שלב כדי לראות פירוט המשימות</p>

        <div className="space-y-3">
          {FLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === step.id;
            return (
              <div key={step.id}>
                <button
                  onClick={() => toggleStep(step.id)}
                  className={`w-full bg-gradient-to-l ${step.color} text-white rounded-xl p-5 flex items-center gap-4 text-right transition-all hover:opacity-95`}
                >
                  <div className="bg-white/20 rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg">{step.title}</div>
                    <div className="text-white/80 text-sm">{step.subtitle}</div>
                  </div>
                  {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                {isExpanded && (
                  <div className={`bg-white border-r-4 ${step.borderColor} rounded-b-xl p-5 shadow-inner`}>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-700">
                          <span className="text-blue-600 mt-0.5">●</span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {idx < FLOW_STEPS.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown size={20} className="text-slate-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Parallel Teams */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800 text-center">צוותים מקבילים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PARALLEL_TEAMS.map((team, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow p-4 border-r-4 border-blue-500"
            >
              <div className="font-bold text-slate-800 mb-1">{team.title}</div>
              <div className="text-sm text-slate-600">{team.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tip Carousel */}
      <section className="bg-amber-50 border border-amber-200 rounded-xl p-6 text-center">
        <div className="text-amber-700 font-bold mb-2 flex items-center justify-center gap-2">
          <Zap size={18} />
          טיפ מקצועי לצוות החירום
        </div>
        <p className="text-slate-700 text-lg mb-4">{TIPS[tipIndex]}</p>
        <button
          onClick={nextTip}
          className="bg-amber-200 hover:bg-amber-300 text-amber-800 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          טיפ הבא ({tipIndex + 1} / {TIPS.length})
        </button>
      </section>
    </div>
  );
}

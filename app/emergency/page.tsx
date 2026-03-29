'use client';
import { useState, useEffect } from 'react';
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
  ArrowDown,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import React from 'react';

const FLOW_STEPS = [
  {
    id: 'event',
    title: 'אירוע הרס',
    subtitle: 'נפילת טיל / אירוע המוני',
    icon: AlertTriangle,
    gradient: 'from-red-500/20 to-red-900/20',
    border: 'border-red-500/50',
    iconBg: 'bg-red-500/20',
    iconColor: 'text-red-400',
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
    gradient: 'from-orange-500/20 to-orange-900/20',
    border: 'border-orange-500/50',
    iconBg: 'bg-orange-500/20',
    iconColor: 'text-orange-400',
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
    gradient: 'from-amber-500/20 to-amber-900/20',
    border: 'border-amber-500/50',
    iconBg: 'bg-amber-500/20',
    iconColor: 'text-amber-400',
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
    gradient: 'from-blue-500/20 to-blue-900/20',
    border: 'border-blue-500/50',
    iconBg: 'bg-blue-500/20',
    iconColor: 'text-blue-400',
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
  { title: 'צוות קישור לבתי חולים', desc: 'יציאה לבתי החולים\nסיוע למשפחות ואיתור נעדרים' },
  { title: 'צוות מלונות', desc: 'קבלה וקליטה של זכאים\nעבודה מול המלונות' },
  { title: 'צוות בשורה מרה', desc: 'מסירת הודעה על הרוג\nלעולם לא בשטח האירוע' },
  { title: 'צוות תל"ם', desc: 'קשר יזום עם אוכלוסיות פגיעות\nמופעל שעות לאחר שיא האירוע' },
  { title: 'מענה רגשי לתושבים', desc: 'מענה טלפוני לתושבים במצוקה\nהפניות ממוקד 106' },
  { title: 'צוות מתנדבים וקהילה', desc: 'עיבוי צוותי שטח\nרישום וניהול מתנדבים' },
  { title: '"מי יציל את המציל"', desc: 'ונטילציה ותמיכה לצוותי החירום\nלכל אנשי השטח והמקצוע' },
  { title: 'מטה מכלול אוכלוסייה', desc: 'ריכוז תמונת מצב\nתיאום והקצאת משימות\nעדכון ראש העיר' },
];

const QUICK_LINKS = [
  { href: '/emergency/mashe', label: 'מודל מעש״ה', sublabel: 'עזרה ראשונה נפשית', icon: Heart, color: 'from-pink-500/20 to-pink-900/10', iconColor: 'text-pink-400' },
  { href: '/emergency/teams', label: 'צוותי החירום', sublabel: 'תוכניות הפעלה מלאות', icon: Users, color: 'from-blue-500/20 to-blue-900/10', iconColor: 'text-blue-400' },
  { href: '/emergency/scripts', label: 'תסריטי שיחה', sublabel: 'מצבי שטח מעשיים', icon: MessageSquare, color: 'from-emerald-500/20 to-emerald-900/10', iconColor: 'text-emerald-400' },
  { href: '/emergency/faq', label: 'שאלות ותשובות', sublabel: 'מערכת יחד ותהליכים', icon: HelpCircle, color: 'from-violet-500/20 to-violet-900/10', iconColor: 'text-violet-400' },
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
  'אל תניח שאתה יודע מה האדם מרגיש – שאל ותקשיב.',
  'אם אתה לא בטוח – התייעץ עם הצוות. אין בושה בזה.',
  'הכן ערכת חירום אישית עם מים, חטיף, מטען ופנס.',
  'למד את שמות אנשי הקשר המרכזיים בכל צוות.',
  'הפסקה קצרה כל שעה – שתייה, נשימה, חזרה.',
];

export default function EmergencyHomePage() {
  const [expandedStep, setExpandedStep] = useState<string | null>(null);
  const [tipIndex, setTipIndex] = useState(0);
  const [tipFade, setTipFade] = useState(true);

  function toggleStep(id: string) {
    setExpandedStep(prev => (prev === id ? null : id));
  }

  function changeTip(dir: number) {
    setTipFade(false);
    setTimeout(() => {
      setTipIndex(prev => (prev + dir + TIPS.length) % TIPS.length);
      setTipFade(true);
    }, 200);
  }

  useEffect(() => {
    const interval = setInterval(() => changeTip(1), 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-14">
      {/* Hero */}
      <section className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm text-white/60 mb-2">
          <Users size={14} />
          תהליך הפעלה
        </div>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-white to-white/70 bg-clip-text text-transparent leading-tight">
          צוותי חירום
          <span className="block text-lg md:text-xl font-normal text-white/50 mt-2">אגף שירותים חברתיים</span>
        </h1>
        <p className="text-white/40 text-base max-w-xl mx-auto">
          כלי לריענון ותרגול הפעלת צוותי חירום של אגף השירותים החברתיים בנתניה
        </p>
      </section>

      {/* Quick Navigation Links */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {QUICK_LINKS.map(link => {
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`bg-gradient-to-b ${link.color} border border-white/10 rounded-2xl p-5 text-center card-hover group`}
            >
              <div className="mx-auto mb-3">
                <Icon size={28} className={`${link.iconColor} mx-auto transition-transform duration-200 group-hover:scale-110`} />
              </div>
              <div className="font-bold text-white text-sm">{link.label}</div>
              <div className="text-xs text-white/40 mt-1">{link.sublabel}</div>
            </Link>
          );
        })}
      </section>

      {/* External Links */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a
          href="https://emergency-dashboard-live-silk.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-l from-blue-600/30 to-blue-900/30 border border-blue-500/30 rounded-2xl p-5 flex items-center gap-4 card-hover group"
        >
          <div className="bg-blue-500/20 rounded-xl p-3 flex-shrink-0">
            <ClipboardList size={24} className="text-blue-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-white text-sm">מערכת טפסי מס״ר</div>
            <div className="text-blue-300/60 text-xs mt-0.5">רישום משפחות · יציאה מאזור שנפגע · איתור נעדרים</div>
          </div>
          <ExternalLink size={16} className="text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0" />
        </a>
        <a
          href="https://govforms.gov.il/mw/forms/Emergency_UnRecogognized@taxes.gov.il"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-l from-emerald-600/30 to-emerald-900/30 border border-emerald-500/30 rounded-2xl p-5 flex items-center gap-4 card-hover group"
        >
          <div className="bg-emerald-500/20 rounded-xl p-3 flex-shrink-0">
            <Building2 size={24} className="text-emerald-400" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-bold text-white text-sm">דיווח תושבים – רשות המיסים</div>
            <div className="text-emerald-300/60 text-xs mt-0.5">מילוי למי שביתו נפגע · מגיע לצוות מלונות ולמס רכוש</div>
          </div>
          <ExternalLink size={16} className="text-white/30 group-hover:text-white/60 transition-colors flex-shrink-0" />
        </a>
      </section>

      {/* Flow Diagram */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-bold text-white">
            זרימת הפעלת הצוותים באירוע הרס
          </h2>
          <p className="text-white/40 text-sm">לחצו על כל שלב כדי לראות פירוט המשימות</p>
        </div>

        <div className="space-y-0">
          {FLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === step.id;
            return (
              <div key={step.id}>
                <button
                  onClick={() => toggleStep(step.id)}
                  className={`w-full bg-gradient-to-l ${step.gradient} border ${step.border} ${isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} p-5 flex items-center gap-4 text-right transition-all duration-200 hover:bg-white/5`}
                >
                  <div className={`${step.iconBg} rounded-xl w-12 h-12 flex items-center justify-center flex-shrink-0`}>
                    <Icon size={22} className={step.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-bold text-white">{step.title}</div>
                    <div className="text-white/50 text-sm">{step.subtitle}</div>
                  </div>
                  <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                    <ChevronDown size={18} className="text-white/40" />
                  </div>
                </button>
                {isExpanded && (
                  <div className={`bg-white/5 border-x border-b ${step.border} rounded-b-2xl p-5 animate-slideDown`}>
                    <ul className="space-y-2.5">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/30 mt-1.5 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {idx < FLOW_STEPS.length - 1 && (
                  <div className="flex justify-center py-2">
                    <ArrowDown size={18} className="text-white/20 animate-pulseArrow" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Parallel Teams */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-white text-center">צוותים מקבילים</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {PARALLEL_TEAMS.map((team, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/[0.07] transition-colors"
            >
              <div className="font-bold text-white text-sm mb-1">{team.title}</div>
              <div className="text-xs text-white/40 whitespace-pre-line leading-relaxed">{team.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Tip Carousel */}
      <section className="bg-gradient-to-l from-amber-500/10 to-amber-900/10 border border-amber-500/20 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
            <Lightbulb size={16} />
            טיפ מקצועי לצוות החירום
          </div>
          <span className="text-white/30 text-xs">{tipIndex + 1} / {TIPS.length}</span>
        </div>
        <p className={`text-white/80 text-base leading-relaxed transition-opacity duration-200 min-h-[48px] ${tipFade ? 'opacity-100' : 'opacity-0'}`}>
          {TIPS[tipIndex]}
        </p>
        <div className="flex items-center gap-2 mt-4">
          <button
            onClick={() => changeTip(-1)}
            className="bg-white/10 hover:bg-white/15 rounded-lg p-1.5 transition-colors"
          >
            <ChevronRight size={16} className="text-white/60" />
          </button>
          <button
            onClick={() => changeTip(1)}
            className="bg-white/10 hover:bg-white/15 rounded-lg p-1.5 transition-colors"
          >
            <ChevronLeft size={16} className="text-white/60" />
          </button>
          <div className="flex gap-1 mr-2">
            {TIPS.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === tipIndex ? 'bg-amber-400' : 'bg-white/10'}`} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

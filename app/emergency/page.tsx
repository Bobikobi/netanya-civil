'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  AlertTriangle,
  Users,
  Building2,
  Heart,
  MessageSquare,
  HelpCircle,
  ChevronDown,
  ExternalLink,
  ArrowDown,
  Lightbulb,
  ChevronRight,
  ChevronLeft,
  Shield,
} from 'lucide-react';
import React from 'react';

const FLOW_STEPS = [
  {
    id: 'event',
    title: 'אירוע הרס',
    subtitle: 'נפילת טיל / אירוע המוני',
    icon: AlertTriangle,
    gradient: 'from-red-50 to-red-100',
    border: 'border-red-200',
    iconBg: 'bg-red-100',
    iconColor: 'text-red-500',
    details: [
      'קבלת התרעה / דיווח על אירוע',
      'ראש מכלול אוכלוסייה וראשי מטות מגיע למקום האירוע',
      'הפעלת הצוותים הרלוונטים באמצעות קבוצות וואטסאפ',
    ],
  },
  {
    id: 'incident',
    title: 'צוות תקרית באזור האירוע',
    subtitle: 'הרגעה · טיפול · ניתוב',
    icon: Users,
    gradient: 'from-orange-50 to-orange-100',
    border: 'border-orange-200',
    iconBg: 'bg-orange-100',
    iconColor: 'text-orange-500',
    details: [
      'הגעה ראשונה לאזור האירוע',
      'מענה נפשי ראשוני לפצועים ולנוכחים',
      'אחרי הרגעה – רישום ראשוני באפליקציית מודיעין אוכלוסייה',
      'ניתוב תושבים לנקודות קליטה',
      'דיווח למטה על תמונת מצב',
    ],
  },
  {
    id: 'msr',
    title: 'מס"ר – מרכז סיוע ראשוני',
    subtitle: 'קליטה · המתנה · שיבוץ · נעדרים',
    icon: Building2,
    gradient: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-500',
    details: [
      'מתחם קליטה – קליטה ע"י ברקוד מערכת "יחד"',
      'מתחם המתנה – מתחם שהייה והפעלה, מתן סיוע רגשי לזקוקים לכך',
      'מתחם שיבוץ לבתי מלון',
      'מתחם נעדרים – תשאול לאיתור נעדרים בשיתוף משטרת ישראל',
      'במס"ר יושב לרוב נציג מס רכוש, נציג קופ"ח, נציג פיקוד העורף, נציג דוברת העירייה והוא נתמך ע"י צוות לוגיסטיקה',
    ],
  },
];

const PARALLEL_TEAMS = [
  { title: 'צוות קישור לבתי חולים', desc: 'יציאה לבתי חולים: לניאדו, מאיר, הלל יפה' },
  { title: 'צוות קליטת אוכלוסייה בבתי מלון', desc: 'עבודה מול המלונות' },
  { title: 'צוות בשורה מרה', desc: 'מסירת הודעה על הרוג\nלעולם לא בשטח האירוע' },
  { title: 'צוות תל"ם', desc: 'קשר יזום עם אוכלוסיות פגיעות\nמופעל שעות לאחר שיא האירוע' },
  { title: 'צוות קו פתוח', desc: 'מענה טלפוני לתושבים במצוקה רגשית\nהפניות ממוקד 106' },
  { title: 'צוות מתנדבים וקהילה', desc: 'הפעלת חמ"ל לוגיסטיקה\nרישום וניהול מתנדבים' },
  { title: '"מי יציל את המציל"', desc: 'ונטילציה ותמיכה לצוותי החירום\nלכל אנשי השטח והמקצוע' },
  { title: 'מטה מכלול אוכלוסייה', desc: 'ריכוז תמונת מצב\nתיאום והקצאת משימות\nעדכונים בהערכת מצב' },
];

const QUICK_LINKS = [
  { href: '/emergency/mashe', label: 'מודל מעש״ה', sublabel: 'עזרה ראשונה נפשית', icon: Heart, iconColor: 'text-pink-500', bg: 'bg-pink-50' },
  { href: '/emergency/teams', label: 'צוותי החירום', sublabel: 'תוכניות הפעלה מלאות', icon: Users, iconColor: 'text-blue-500', bg: 'bg-blue-50' },
  { href: '/emergency/scripts', label: 'תסריטי שיחה', sublabel: 'מצבי שטח מעשיים', icon: MessageSquare, iconColor: 'text-emerald-500', bg: 'bg-emerald-50' },
  { href: '/emergency/faq', label: 'שאלות ותשובות', sublabel: 'מערכת יחד ותהליכים', icon: HelpCircle, iconColor: 'text-violet-500', bg: 'bg-violet-50' },
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
    <div>
      {/* ===== HERO – full width dark blue ===== */}
      <section className="relative bg-[#2d4a6f] overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute top-1/2 right-[-8%] -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-white/[0.06]" />
        <div className="absolute top-[-15%] left-[-5%] w-[350px] h-[350px] rounded-full bg-white/[0.04]" />
        <div className="absolute bottom-[-20%] left-[30%] w-[250px] h-[250px] rounded-full bg-white/[0.03]" />

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-24 md:py-32">
          {/* Shield icon */}
          <div className="mx-auto mb-8 w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
            <Shield size={30} className="text-white/70" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            צוותי חירום
          </h1>
          <p className="text-2xl md:text-3xl font-bold text-amber-400 mb-6">
            אגף שירותים חברתיים
          </p>
          <p className="text-white/60 text-base md:text-lg">
            כלי לריענון ותרגול הפעלת צוותי חירום של אגף השירותים החברתיים בנתניה
          </p>
          {/* Scroll hint */}
          <div className="mt-10">
            <ChevronDown size={24} className="mx-auto text-white/30 animate-pulseArrow" />
          </div>
        </div>
      </section>

      {/* ===== External Links – full width banners ===== */}
      <section className="space-y-3 px-6 max-w-6xl mx-auto -mt-6 relative z-20">
        <a
          href="https://emergency-dashboard-live-silk.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-500 hover:bg-blue-600 transition-colors rounded-2xl p-5 flex items-center gap-4 shadow-lg"
        >
          <ExternalLink size={20} className="text-white/70 flex-shrink-0" />
          <div className="flex-1 min-w-0 text-right">
            <div className="font-bold text-white text-lg">מערכת טפסי מס״ר</div>
            <div className="text-white/70 text-sm mt-0.5">רישום משפחות · יציאה מאזור שנפגע · איתור נעדרים</div>
          </div>
        </a>
        <a
          href="https://go.gov.il/wrwov"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-emerald-500 hover:bg-emerald-600 transition-colors rounded-2xl p-5 flex items-center gap-4 shadow-lg"
        >
          <ExternalLink size={20} className="text-white/70 flex-shrink-0" />
          <div className="flex-1 min-w-0 text-right">
            <div className="font-bold text-white text-lg">מערכת יחד – לחץ כאן</div>
            <div className="text-white/70 text-sm mt-0.5">מערכת לאומית לניהול אירועי חירום ברשויות מקומיות</div>
          </div>
        </a>
        <a
          href="https://govforms.gov.il/mw/forms/Emergency_UnRecogognized@taxes.gov.il"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-orange-500 hover:bg-orange-600 transition-colors rounded-2xl p-5 flex items-center gap-4 shadow-lg"
        >
          <ExternalLink size={20} className="text-white/70 flex-shrink-0" />
          <div className="flex-1 min-w-0 text-right">
            <div className="font-bold text-white text-lg">דיווח תושבים שביתם ניזוק – רשות המיסים</div>
            <div className="text-white/70 text-sm mt-0.5">מילוי למי שביתו נפגע · מגיע לצוות מלונות ולמס רכוש</div>
          </div>
        </a>
      </section>

      {/* ===== Quick Navigation Links ===== */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {QUICK_LINKS.map(link => {
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="bg-white border border-gray-200 rounded-2xl p-5 text-center card-hover group shadow-sm"
              >
                <div className={`mx-auto mb-3 w-12 h-12 rounded-xl ${link.bg} flex items-center justify-center`}>
                  <Icon size={24} className={`${link.iconColor} transition-transform duration-200 group-hover:scale-110`} />
                </div>
                <div className="font-bold text-gray-900 text-sm">{link.label}</div>
                <div className="text-xs text-gray-400 mt-1">{link.sublabel}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== Side-by-side: Flow Diagram + Parallel Teams ===== */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* LEFT: Flow diagram */}
          <div className="space-y-4">
            <div className="text-center lg:text-right space-y-1 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">
                זרימת הפעלת הצוותים באירוע הרס
              </h2>
              <p className="text-gray-400 text-sm">לחצו על כל שלב כדי לראות פירוט</p>
            </div>

            <div className="space-y-0">
              {FLOW_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isExpanded = expandedStep === step.id;
                return (
                  <div key={step.id}>
                    <button
                      onClick={() => toggleStep(step.id)}
                      className={`w-full bg-gradient-to-l ${step.gradient} border ${step.border} ${isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} p-4 flex items-center gap-3 text-right transition-all duration-200 hover:shadow-md`}
                    >
                      <div className={`${step.iconBg} rounded-xl w-10 h-10 flex items-center justify-center flex-shrink-0`}>
                        <Icon size={20} className={step.iconColor} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-900 text-sm">{step.title}</div>
                        <div className="text-gray-500 text-xs">{step.subtitle}</div>
                      </div>
                      <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown size={16} className="text-gray-400" />
                      </div>
                    </button>
                    {isExpanded && (
                      <div className={`bg-white border-x border-b ${step.border} rounded-b-2xl p-4 animate-slideDown`}>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {idx < FLOW_STEPS.length - 1 && (
                      <div className="flex justify-center py-1.5">
                        <ArrowDown size={16} className="text-gray-300 animate-pulseArrow" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: Parallel Teams */}
          <div className="space-y-4">
            <div className="text-center lg:text-right space-y-1 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">צוותים מקבילים</h2>
              <p className="text-gray-400 text-sm">צוותים שפועלים במקביל לזרם הראשי</p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {PARALLEL_TEAMS.map((team, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="font-bold text-gray-900 text-sm mb-1">{team.title}</div>
                  <div className="text-xs text-gray-400 whitespace-pre-line leading-relaxed">{team.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== Tip Carousel ===== */}
      <section className="max-w-6xl mx-auto px-6 mt-14 mb-10">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
              <Lightbulb size={16} />
              טיפ מקצועי לצוות החירום
            </div>
            <span className="text-gray-400 text-xs">{tipIndex + 1} / {TIPS.length}</span>
          </div>
          <p className={`text-gray-700 text-base leading-relaxed transition-opacity duration-200 min-h-[48px] ${tipFade ? 'opacity-100' : 'opacity-0'}`}>
            {TIPS[tipIndex]}
          </p>
          <div className="flex items-center gap-2 mt-4">
            <button
              onClick={() => changeTip(-1)}
              className="bg-amber-100 hover:bg-amber-200 rounded-lg p-1.5 transition-colors"
            >
              <ChevronRight size={16} className="text-amber-700" />
            </button>
            <button
              onClick={() => changeTip(1)}
              className="bg-amber-100 hover:bg-amber-200 rounded-lg p-1.5 transition-colors"
            >
              <ChevronLeft size={16} className="text-amber-700" />
            </button>
            <div className="flex gap-1 mr-2">
              {TIPS.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full transition-colors ${i === tipIndex ? 'bg-amber-500' : 'bg-amber-200'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

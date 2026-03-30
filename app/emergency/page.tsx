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
  Hospital,
  Hotel,
  HeartHandshake,
  Phone,
  HandHelping,
  ShieldHalf,
  BarChart3,
  UserCheck,
  Download,
  Monitor,
  BookOpen,
  X,
} from 'lucide-react';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import { home, homeQuickLinks, homeFlowSteps, homeTips, homeEmergencyPhones, homeParallelTeams } from '@/lib/translations';

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
      'ראש מכלול אוכלוסייה וראשי מטות מגיעים למקום האירוע',
      'הפעלת הצוותים הרלוונטיים באמצעות קבוצות וואטסאפ',
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
      'הפנייה למס"ר',
      'חבירה לחפ"ק אחוד בשטח אזור התקרית ולאיש צוות מל"מ במטה לשם העברת מידע אודות האוכלוסייה',
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
  { icon: Hospital, color: 'text-red-500', bg: 'bg-red-50', border: 'border-red-200' },
  { icon: Hotel, color: 'text-amber-500', bg: 'bg-amber-50', border: 'border-amber-200' },
  { icon: HeartHandshake, color: 'text-gray-600', bg: 'bg-gray-50', border: 'border-gray-300' },
  { icon: UserCheck, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-200' },
  { icon: Phone, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-200' },
  { icon: HandHelping, color: 'text-teal-500', bg: 'bg-teal-50', border: 'border-teal-200' },
  { icon: ShieldHalf, color: 'text-indigo-500', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  { icon: BarChart3, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-200' },
  { icon: Monitor, color: 'text-cyan-500', bg: 'bg-cyan-50', border: 'border-cyan-200' },
];

const QUICK_LINKS = [
  { href: '/emergency/mashe', key: 'mashe' as const, icon: Heart, iconColor: 'text-pink-500', bg: 'bg-pink-50' },
  { href: '/emergency/teams', key: 'teams' as const, icon: Users, iconColor: 'text-blue-500', bg: 'bg-blue-50' },
  { href: '/emergency/scripts', key: 'scripts' as const, icon: MessageSquare, iconColor: 'text-emerald-500', bg: 'bg-emerald-50' },
  { href: '/emergency/contacts', key: 'contacts' as const, icon: Phone, iconColor: 'text-orange-500', bg: 'bg-orange-50' },
  { href: '/emergency/faq', key: 'faq' as const, icon: HelpCircle, iconColor: 'text-violet-500', bg: 'bg-violet-50' },
];

const EMERGENCY_PHONES = [
  { label: 'מוקד עירוני 106', phone: '106', color: 'bg-blue-500' },
  { label: 'משטרה 100', phone: '100', color: 'bg-blue-700' },
  { label: 'מד"א 101', phone: '101', color: 'bg-red-500' },
  { label: 'כיבוי 102', phone: '102', color: 'bg-orange-500' },
  { label: 'פיקוד העורף 104', phone: '104', color: 'bg-gray-700' },
  { label: 'ער"ן 1201', phone: '1201', color: 'bg-emerald-500' },
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
  const [showForms, setShowForms] = useState(false);
  const [showIntakeGuide, setShowIntakeGuide] = useState(false);
  const { locale } = useI18n();

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
      <section className="relative bg-[#1e3a5f] overflow-hidden">
        {/* Background image – dimmed & tinted to match site palette */}
        <div className="absolute inset-0">
          <img
            src="/hero-bg.png"
            alt=""
            aria-hidden="true"
            className="w-full h-full object-cover object-[center_30%] scale-110 mix-blend-luminosity opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#1e3a5f]/80 via-[#1e3a5f]/50 to-[#1e3a5f]/90" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto text-center px-6 py-14 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-2" style={{ textShadow: '0 2px 8px rgba(0,0,0,0.5), 0 0 2px rgba(0,0,0,0.3)' }}>
            {home.heroTitle[locale]}
          </h1>
          <p className="text-xl md:text-2xl font-bold text-amber-300 mb-4" style={{ textShadow: '0 2px 6px rgba(0,0,0,0.5)' }}>
            {home.heroSubtitle[locale]}
          </p>
          <p className="text-white/85 text-sm md:text-base" style={{ textShadow: '0 1px 4px rgba(0,0,0,0.4)' }}>
            {home.heroDesc[locale]}
          </p>
          {/* Scroll hint */}
          <div className="mt-6">
            <ChevronDown size={22} className="mx-auto text-white/30 animate-pulseArrow" />
          </div>
        </div>
      </section>

      {/* ===== External Links – full width banners ===== */}
      <section className="space-y-3 px-6 max-w-6xl mx-auto -mt-6 relative z-20">
        {/* YACHAD System + Download Forms */}
        <div className="bg-emerald-500 rounded-2xl shadow-lg overflow-hidden">
          <a
            href="https://go.gov.il/wrwov"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-5 hover:opacity-80 transition-opacity"
          >
            <ExternalLink size={20} className="text-white/70 flex-shrink-0" />
            <div className="flex-1 min-w-0 text-right">
              <div className="font-bold text-white text-lg">{home.yachadSystem[locale]}</div>
              <div className="text-white/70 text-sm mt-0.5">{home.yachadDesc[locale]}</div>
            </div>
          </a>
          <div className="bg-emerald-50 border-t border-emerald-300 px-5 pb-4 pt-3 space-y-2">
            <button
              onClick={() => setShowForms(!showForms)}
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Download size={14} className="text-emerald-600 flex-shrink-0" />
              <span className="text-xs font-semibold text-emerald-700">{home.msrFormsInlineExplain[locale]} – לחץ כאן</span>
              <ChevronDown size={14} className={`text-emerald-600 transition-transform duration-200 ${showForms ? 'rotate-180' : ''}`} />
            </button>
            {showForms && <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 animate-slideDown">
              <a href="/docs/tofes-rishum-toshavim.docx" download className="flex items-center gap-2 bg-white border border-emerald-200 rounded-xl px-3 py-2.5 hover:bg-emerald-100 transition-colors">
                <Download size={16} className="text-emerald-500 flex-shrink-0" />
                <div className="min-w-0 text-right">
                  <div className="text-xs font-bold text-gray-900">{home.msrForm1[locale]}</div>
                </div>
              </a>
              <a href="/docs/nispach-a-hitchayvut-nizok.doc" download className="flex items-center gap-2 bg-white border border-emerald-200 rounded-xl px-3 py-2.5 hover:bg-emerald-100 transition-colors">
                <Download size={16} className="text-emerald-500 flex-shrink-0" />
                <div className="min-w-0 text-right">
                  <div className="text-xs font-bold text-gray-900">{home.msrForm2[locale]}</div>
                </div>
              </a>
              <a href="/docs/nispach-h-shuvar-hafnaya-malon.docx" download className="flex items-center gap-2 bg-white border border-emerald-200 rounded-xl px-3 py-2.5 hover:bg-emerald-100 transition-colors">
                <Download size={16} className="text-emerald-500 flex-shrink-0" />
                <div className="min-w-0 text-right">
                  <div className="text-xs font-bold text-gray-900">{home.msrForm3[locale]}</div>
                </div>
              </a>
            </div>}
          </div>
        </div>

        {/* Population Intelligence App */}
        <a
          href="https://play.google.com/store/apps/details?id=com.microsoft.msapps"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-blue-500 hover:bg-blue-600 transition-colors rounded-2xl p-5 shadow-lg"
        >
          <div className="flex items-center gap-4">
            <ExternalLink size={20} className="text-white/70 flex-shrink-0" />
            <div className="flex-1 min-w-0 text-right">
              <div className="font-bold text-white text-lg">{home.populationApp[locale]}</div>
              <div className="text-white/70 text-sm mt-0.5">{home.populationAppDesc[locale]}</div>
            </div>
          </div>
          <div className="text-white/60 text-xs mt-2 text-right pr-9">
            {home.populationAppExplain[locale]}
          </div>
        </a>

        {/* Intake Form */}
        <div className="flex shadow-lg rounded-2xl overflow-hidden">
          <a
            href="https://netanya.flowmateapp.com/form/PMVznck3VBaPMjhYKFqC12PAw9zg7dwEORQWDITI?session=uf18QrktdH7KWseyPPujy1SIK4O5WODnKoxOPHTJ&restricted=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-violet-500 hover:bg-violet-600 transition-colors p-5 flex items-center gap-4"
          >
            <ExternalLink size={20} className="text-white/70 flex-shrink-0" />
            <div className="flex-1 min-w-0 text-right">
              <div className="font-bold text-white text-lg">{home.intakeForm[locale]}</div>
              <div className="text-white/70 text-sm mt-0.5">{home.intakeFormDesc[locale]}</div>
            </div>
          </a>
          <button
            onClick={() => setShowIntakeGuide(true)}
            className="bg-violet-700 hover:bg-violet-800 transition-colors px-3 flex items-center justify-center border-r border-violet-400/30 flex-shrink-0 gap-1.5 group"
            title="מדריך למילוי הטופס"
          >
            <BookOpen size={16} className="text-white/80 group-hover:text-white" />
            <span className="text-white/90 text-[11px] font-medium leading-tight whitespace-nowrap group-hover:text-white">מדריך<br/>למילוי</span>
          </button>
        </div>
      </section>

      {/* ===== Quick Navigation Links ===== */}
      <section className="max-w-6xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
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
                <div className="font-bold text-gray-900 text-sm">{homeQuickLinks[link.key]?.label[locale]}</div>
                <div className="text-xs text-gray-400 mt-1">{homeQuickLinks[link.key]?.sublabel[locale]}</div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ===== Side-by-side: Flow Diagram + Parallel Teams ===== */}
      <section className="max-w-6xl mx-auto px-6 mt-14">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6">
          {/* RIGHT (in RTL): Flow diagram */}
          <div className="space-y-4">
            <div className="text-center lg:text-right space-y-1 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">
                {home.flowTitle[locale]}
              </h2>
              <p className="text-gray-400 text-sm">{home.flowDesc[locale]}</p>
            </div>

            <div className="space-y-0">
              {FLOW_STEPS.map((step, idx) => {
                const Icon = step.icon;
                const isExpanded = expandedStep === step.id;
                return (
                  <div key={step.id}>
                    <button
                      onClick={() => toggleStep(step.id)}
                      aria-expanded={isExpanded}
                      aria-controls={`flow-${step.id}`}
                      className={`w-full bg-gradient-to-l ${step.gradient} border ${step.border} ${isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} p-4 flex items-center gap-3 text-right transition-all duration-200 hover:shadow-md`}
                    >
                      <div className={`${step.iconBg} rounded-xl w-10 h-10 flex items-center justify-center flex-shrink-0`}>
                        <Icon size={20} className={step.iconColor} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-bold text-gray-900 text-sm">{homeFlowSteps[idx]?.title[locale] ?? step.title}</div>
                        <div className="text-gray-500 text-xs">{homeFlowSteps[idx]?.subtitle[locale] ?? step.subtitle}</div>
                      </div>
                      <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                        <ChevronDown size={16} className="text-gray-400" />
                      </div>
                    </button>
                    {isExpanded && (
                      <div id={`flow-${step.id}`} role="region" aria-label={homeFlowSteps[idx]?.title[locale] ?? step.title} className={`bg-white border-x border-b ${step.border} rounded-b-2xl p-4 animate-slideDown`}>
                        <ul className="space-y-2">
                          {(homeFlowSteps[idx]?.details ?? step.details.map(d => ({ he: d, en: d, ru: d }))).map((detail, i) => (
                            <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                              {typeof detail === 'string' ? detail : detail[locale]}
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

          {/* LEFT (in RTL): Parallel Teams */}
          <div className="space-y-4">
            <div className="text-center lg:text-right space-y-1 mb-2">
              <h2 className="text-2xl font-bold text-gray-900">{home.parallelTitle[locale]}</h2>
              <p className="text-gray-400 text-sm">{home.parallelDesc[locale]}</p>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {PARALLEL_TEAMS.map((team, idx) => {
                const TIcon = team.icon;
                const t = homeParallelTeams[idx];
                return (
                  <div
                    key={idx}
                    className={`${team.bg} border ${team.border} rounded-xl p-3.5 hover:shadow-md transition-shadow`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="bg-white rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                        <TIcon size={16} className={team.color} />
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-gray-900 text-sm">{t.title[locale]}</div>
                        <div className="text-xs text-gray-500 whitespace-pre-line leading-relaxed mt-0.5">{t.desc[locale]}</div>
                        {t.people && <div className="text-[11px] text-gray-400 font-medium mt-1">{t.people[locale]}</div>}
                      </div>
                    </div>
                  </div>
                );
              })}
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
              {home.tipLabel[locale]}
            </div>
            <span className="text-gray-400 text-xs">{tipIndex + 1} / {TIPS.length}</span>
          </div>
          <p className={`text-gray-700 text-base leading-relaxed transition-opacity duration-200 min-h-[48px] ${tipFade ? 'opacity-100' : 'opacity-0'}`}>
            {homeTips[tipIndex]?.[locale] ?? TIPS[tipIndex]}
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

      {/* ===== Emergency Quick Dial ===== */}
      <section className="max-w-6xl mx-auto px-6 mt-10 mb-10">
        <div className="text-center mb-4">
          <h2 className="text-lg font-bold text-gray-900">{home.emergencyDial[locale]}</h2>
          <p className="text-gray-400 text-xs mt-1">{home.emergencyDialDesc[locale]} · <Link href="/emergency/contacts" className="text-blue-500 hover:underline">{home.fullPhoneBook[locale]}</Link></p>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
          {EMERGENCY_PHONES.map((ep, idx) => (
            <a
              key={idx}
              href={`tel:${ep.phone}`}
              className={`${ep.color} rounded-xl p-3 text-center text-white hover:opacity-90 transition-opacity shadow-sm`}
            >
              <div className="text-lg font-bold" dir="ltr">{ep.phone}</div>
              <div className="text-[10px] text-white/80 mt-0.5">{homeEmergencyPhones[idx]?.label[locale] ?? ep.label}</div>
            </a>
          ))}
        </div>
      </section>
      {/* Intake Guide Modal */}
      {showIntakeGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" onClick={() => setShowIntakeGuide(false)}>
          <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-y-auto" dir="rtl" onClick={e => e.stopPropagation()}>
            <div className="sticky top-0 bg-violet-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <h2 className="font-bold text-lg flex items-center gap-2"><BookOpen size={20} /> מדריך הפעלה: מערכת איתור תושבים בחירום</h2>
              <button onClick={() => setShowIntakeGuide(false)} className="hover:bg-violet-700 rounded-lg p-1 transition-colors"><X size={20} /></button>
            </div>
            <div className="p-5 space-y-7 text-sm text-gray-700 leading-relaxed">
              {/* Section 1 */}
              <div>
                <h3 className="font-bold text-violet-700 text-base mb-2 border-b border-violet-100 pb-1">התחברות למערכת</h3>
                <ul className="list-disc pr-5 space-y-1">
                  <li>הקלד את הסיסמה האישית שלך</li>
                  <li><strong>דגש חשוב:</strong> לחץ על "דילוג על ההגדרה" כדי להיכנס מיד ללא אימות דוא"ל</li>
                </ul>
              </div>
              {/* Section 2 */}
              <div>
                <h3 className="font-bold text-violet-700 text-base mb-2 border-b border-violet-100 pb-1">גישה לאפליקציה</h3>
                <ul className="list-disc pr-5 space-y-1">
                  <li>בתפריט התחתון, לחץ על סמל <strong>All apps</strong> (כל האפליקציות)</li>
                  <li>מתוך הרשימה, בחר באפליקציית <strong>"איתור תושבים בחירום"</strong></li>
                </ul>
              </div>
              {/* Section 3 */}
              <div>
                <h3 className="font-bold text-violet-700 text-base mb-2 border-b border-violet-100 pb-1">ניהול ועדכון סטטוס תושב</h3>
                <ul className="list-disc pr-5 space-y-1">
                  <li><span className="inline-block w-3 h-3 rounded-full bg-gray-400 ml-1 align-middle"></span> <strong>אפור - טרם החל:</strong> פנייה חדשה או תושב שטרם נוצר עמו קשר</li>
                  <li><span className="inline-block w-3 h-3 rounded-full bg-orange-400 ml-1 align-middle"></span> <strong>כתום - לא אותר:</strong> תושב שהוגדר כנעדר או שלא ניתן ליצור עמו קשר</li>
                  <li>לביצוע עדכון: <strong>לחיצה כפולה</strong> על רשומת תושב תפתח את חלון העדכון המלא</li>
                  <li>ניתן לעדכן שם אירוע, כתובת פגיעה, סיבת המצב והוספת מלל חופשי לתיעוד</li>
                  <li><strong>חובה:</strong> הקפד ללחוץ על "שמור" בסיום כל עדכון</li>
                </ul>
              </div>
              {/* Section 4 */}
              <div>
                <h3 className="font-bold text-violet-700 text-base mb-2 border-b border-violet-100 pb-1">איתור והוספת תושב חדש</h3>
                <ul className="list-disc pr-5 space-y-1">
                  <li><strong>חיפוש:</strong> לחץ על תפריט "3 השורות", עבור ללשונית "פניות" וחפש לפי שם</li>
                  <li><strong>הוספת תושב חסר:</strong> אם התושב אינו מופיע, פתח את "טופס אינטייק מרכז משפחות"</li>
                  <li>הזן פרטים: שם מלא, תעודת זהות ומספר נייד</li>
                  <li>לאחר השליחה, חזור לאפליקציה המרכזית להמשך מעקב</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

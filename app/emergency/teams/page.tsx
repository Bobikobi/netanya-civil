'use client';
import { useState } from 'react';
import { ChevronDown, Users, Building2, Phone, Heart, Hotel, Search, UserCheck, Shield, Star, ExternalLink } from 'lucide-react';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import { teamsPage } from '@/lib/translations';

interface TeamData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  bgColor: string;
  border: string;
  iconColor: string;
  iconBg: string;
  tasks: string[];
  keyPoints: string[];
}

const TEAMS: TeamData[] = [
  {
    id: 'intervention',
    title: 'צוות התערבות במקום',
    subtitle: 'צוות ראשון המגיע למקום האירוע, נותן מענה נפשי ראשוני ומנתב תושבים',
    icon: Users,
    bgColor: 'from-red-50 to-red-100/50',
    border: 'border-red-200',
    iconColor: 'text-red-500',
    iconBg: 'bg-red-100',
    tasks: [
      'הגעה מהירה לאזור האירוע',
      'מתן מענה נפשי ראשוני (מודל מעש"ה)',
      'הרגעה ותמיכה בנפגעים ובתושבי הסביבה',
      'ניתוב תושבים לנקודות קליטה ושולחן קדמי',
      'דיווח למטה על תמונת מצב בשטח',
      'סיוע לכוחות ההצלה במידת הצורך',
    ],
    keyPoints: ['תמיד בזוגות – לעולם לא לבד', 'שמירה על קשר רציף עם המטה', 'זיהוי עצמי מלא בפני תושבים'],
  },
  {
    id: 'front_desk',
    title: 'שולחן קדמי',
    subtitle: 'נקודת קליטה קדמית למשפחות – רישום, תשאול והפניה',
    icon: Building2,
    bgColor: 'from-orange-50 to-orange-100/50',
    border: 'border-orange-200',
    iconColor: 'text-orange-500',
    iconBg: 'bg-orange-100',
    tasks: [
      'קליטה ראשונית של תושבים מפונים',
      'תשאול ורישום פרטי משפחה',
      'מילוי טפסים ראשוניים במערכת יחד',
      'הפניה לגורמים המתאימים (מס"ר, מלונות, בתי חולים)',
      'מתן מידע בסיסי על זכויות ותהליכים',
    ],
    keyPoints: ['שפה רגועה ומכבדת', 'תיעוד מלא של כל פנייה', 'הפניה מהירה – לא להחזיק אנשים בתור'],
  },
  {
    id: 'msr',
    title: 'מס"ר – מרכז סיוע ראשוני',
    subtitle: 'מרכז למשפחות – הרגעה, מידע, זכאויות, ציוד ואיתור נעדרים',
    icon: Heart,
    bgColor: 'from-blue-50 to-blue-100/50',
    border: 'border-blue-200',
    iconColor: 'text-blue-500',
    iconBg: 'bg-blue-100',
    tasks: [
      'הרגעה ותמיכה נפשית למשפחות',
      'מתן מידע עדכני על מצב האירוע',
      'בירור זכאויות (מלון, ציוד, פיצויים)',
      'חלוקת ציוד חיוני (שמיכות, ביגוד, מזון)',
      'ריכוז מידע לאיתור נעדרים',
      'תיאום מול צוותים מקבילים',
    ],
    keyPoints: ['מרחב מוגן ושקט – חשוב ליצור אווירה רגועה', 'עדכונים שוטפים מהמטה', 'נגישות מלאה לכלל האוכלוסייה'],
  },
  {
    id: 'hotels',
    title: 'צוות מלונות',
    subtitle: 'קליטת זכאים למלונות, תיאום עם משרד התיירות ומערכת יחד',
    icon: Hotel,
    bgColor: 'from-teal-50 to-teal-100/50',
    border: 'border-teal-200',
    iconColor: 'text-teal-500',
    iconBg: 'bg-teal-100',
    tasks: [
      'בדיקת זכאות למלון עפ"י קריטריונים',
      'תיאום מול משרד התיירות על חדרים זמינים',
      'הפניית משפחות למלונות מתאימים',
      'ליווי המשפחות בתהליך הקליטה',
      'עדכון מערכת יחד על שיבוצים',
      'מעקב אחר מלונות מלאים ופתיחת חלופות',
    ],
    keyPoints: ['עבודה מול רשימת מלונות מעודכנת', 'רגישות למשפחות עם צרכים מיוחדים', 'תיאום שוטף עם המטה'],
  },
  {
    id: 'hospitals',
    title: 'צוות קישור לבתי חולים',
    subtitle: 'ליווי משפחות בבתי חולים, איסוף מידע ואיתור נעדרים',
    icon: Search,
    bgColor: 'from-purple-50 to-purple-100/50',
    border: 'border-purple-200',
    iconColor: 'text-purple-500',
    iconBg: 'bg-purple-100',
    tasks: [
      'יציאה לבתי החולים הרלוונטיים',
      'איסוף מידע על פצועים מאושפזים',
      'סיוע למשפחות באיתור נעדרים',
      'ליווי רגשי של משפחות בבתי החולים',
      'דיווח למטה על משפחות שאותרו',
    ],
    keyPoints: ['עבודה בתיאום מלא עם צוות בית החולים', 'שמירה על פרטיות המטופלים', 'דיווח מיידי על כל איתור'],
  },
  {
    id: 'bad_news',
    title: 'צוות בשורה מרה',
    subtitle: 'מסירת הודעה על הרוג – בהתאם לכללים מחמירים ועם ליווי מקצועי',
    icon: Shield,
    bgColor: 'from-gray-50 to-gray-100/50',
    border: 'border-gray-200',
    iconColor: 'text-gray-500',
    iconBg: 'bg-gray-100',
    tasks: [
      'מסירת הודעה על הרוג של בן משפחה',
      'ליווי מקצועי צמוד למשפחה לאחר ההודעה',
      'תיאום מול משטרה וזיהוי הנפטרים',
      'הפניית המשפחה לגורמי תמיכה המשכיים',
    ],
    keyPoints: ['לעולם לא בשטח האירוע – רק בסביבה מוגנת', 'תמיד בצמד מקצועי', 'לפי נהלים מחמירים בלבד', 'אין למסור מידע חלקי'],
  },
  {
    id: 'talem',
    title: 'צוות תל"ם – תשומת לב מיוחדת',
    subtitle: 'סיוע לאוכלוסיות פגיעות הדורשות קשר יזום – מספר שעות לאחר שיא האירוע',
    icon: UserCheck,
    bgColor: 'from-pink-50 to-pink-100/50',
    border: 'border-pink-200',
    iconColor: 'text-pink-500',
    iconBg: 'bg-pink-100',
    tasks: [
      'איתור קשישים בודדים באזור האירוע',
      'קשר יזום עם אוכלוסיות פגיעות (נכים, חולי נפש)',
      'בדיקת צרכים מיוחדים (תרופות, ציוד רפואי)',
      'הפניה לשירותים מתאימים',
      'מופעל מספר שעות לאחר שיא האירוע',
    ],
    keyPoints: ['פעולה יזומה – לא ממתינים לפניות', 'עבודה מול רשימות אוכלוסייה מעודכנות', 'רגישות תרבותית ושפתית'],
  },
  {
    id: 'emotional',
    title: 'צוות מענה רגשי לתושבים',
    subtitle: 'מענה רגשי טלפוני לתושבים במצוקה – בהפעלת צוות השפ"ח',
    icon: Phone,
    bgColor: 'from-indigo-50 to-indigo-100/50',
    border: 'border-indigo-200',
    iconColor: 'text-indigo-500',
    iconBg: 'bg-indigo-100',
    tasks: [
      'מענה טלפוני לתושבים במצוקה',
      'קבלת הפניות ממוקד 106',
      'הפעלת מודל מעש"ה בטלפון',
      'הפניה לגורמי מקצוע במידת הצורך',
      'תיעוד שיחות ומעקב',
    ],
    keyPoints: ['זמינות רציפה לאורך כל האירוע', 'הקשבה פעילה – לא לחפש "לפתור"', 'דיווח על מקרים קשים למטה'],
  },
  {
    id: 'volunteers',
    title: 'צוות מתנדבים וקהילה',
    subtitle: 'הפעלת מתנדבים בשעת חירום ומתן סיוע לצרכים מידיים',
    icon: Star,
    bgColor: 'from-amber-50 to-amber-100/50',
    border: 'border-amber-200',
    iconColor: 'text-amber-500',
    iconBg: 'bg-amber-100',
    tasks: [
      'עיבוי צוותי שטח במתנדבים מאומנים',
      'רישום וניהול מתנדבים חדשים',
      'הקצאת משימות למתנדבים עפ"י כישורים',
      'תיאום מול ארגוני מתנדבים',
      'מתן סיוע לצרכים מידיים (מזון, הסעות)',
    ],
    keyPoints: ['כל מתנדב חייב לעבור תדרוך קצר', 'ניהול רשימה מעודכנת של מתנדבים זמינים', 'שיבוץ בהתאם ליכולות ולצרכים'],
  },
  {
    id: 'savior',
    title: '"מי יציל את המציל"',
    subtitle: 'ונטילציה ותמיכה רגשית לצוותי החירום הפועלים בשטח',
    icon: Heart,
    bgColor: 'from-rose-50 to-rose-100/50',
    border: 'border-rose-200',
    iconColor: 'text-rose-500',
    iconBg: 'bg-rose-100',
    tasks: [
      'מתן ונטילציה לצוותי השטח בהפסקות',
      'זיהוי סימני עומס וסטרס אצל צוותי החירום',
      'הפניה לטיפול מקצועי במידת הצורך',
      'יצירת מרחב מנוחה ושקט לצוותים',
      'תמיכה לכל אנשי השטח והמקצוע',
    ],
    keyPoints: ['נוכחות בלתי פולשנית – לא לכפות שיחה', 'מזון, שתייה ומנוחה – הבסיס', 'אחרי המשמרת – ונטילציה חובה'],
  },
  {
    id: 'hq',
    title: 'מטה מכלול אוכלוסייה',
    subtitle: 'ניהול, תיאום וריכוז תמונת מצב כוללת – מנהל מכלול + ראש תא רווחה',
    icon: Shield,
    bgColor: 'from-slate-50 to-slate-100/50',
    border: 'border-slate-200',
    iconColor: 'text-slate-500',
    iconBg: 'bg-slate-100',
    tasks: [
      'ריכוז תמונת מצב מכל הצוותים',
      'קבלת החלטות וחלוקת משימות',
      'תיאום מול גורמי חוץ (צבא, משטרה, מד"א)',
      'עדכון ראש העיר / הנהלת העירייה',
      'ניהול משאבים וכוח אדם',
      'הפעלת צוותים נוספים עפ"י הצורך',
    ],
    keyPoints: ['עדכון תמונת מצב כל 15 דקות', 'ניהול לוח משימות מרכזי', 'תיעוד מלא של כל ההחלטות'],
  },
];

export default function EmergencyTeamsPage() {
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);
  const { locale } = useI18n();

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-10">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{teamsPage.title[locale]}</h1>
        <p className="text-gray-400 text-base">{teamsPage.subtitle[locale]}</p>
      </section>

      {/* Yachad link */}
      <div className="text-center">
        <a href="https://go.gov.il/wrwov" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-xl px-5 py-2.5 text-sm font-medium hover:bg-blue-100 transition-colors">
          <ExternalLink size={15} />
          {teamsPage.yachadLink[locale]}
        </a>
      </div>

      <div className="space-y-3">
        {TEAMS.map(team => {
          const Icon = team.icon;
          const isExpanded = expandedTeam === team.id;
          return (
            <div key={team.id} className={`bg-gradient-to-l ${team.bgColor} border ${team.border} ${isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} overflow-hidden shadow-sm`}>
              <button
                onClick={() => setExpandedTeam(isExpanded ? null : team.id)}
                aria-expanded={isExpanded}
                aria-controls={`team-${team.id}`}
                className="w-full flex items-center gap-4 p-5 text-right hover:bg-white/50 transition-colors"
              >
                <div className={`${team.iconBg} rounded-xl w-11 h-11 flex items-center justify-center flex-shrink-0`}>
                  <Icon size={20} className={team.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{team.title}</div>
                  <div className="text-xs text-gray-400 truncate">{team.subtitle}</div>
                </div>
                <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} className="text-gray-400" />
                </div>
              </button>
              {isExpanded && (
                <div id={`team-${team.id}`} role="region" aria-label={team.title} className={`bg-white border-t ${team.border} px-5 pb-5 pt-4 space-y-4 animate-slideDown`}>
                  <div>
                    <h3 className="font-bold text-gray-900 text-sm mb-2.5">{teamsPage.mainTasks[locale]}</h3>
                    <ul className="space-y-2">
                      {team.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-gray-600 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-1.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                    <h3 className="font-bold text-amber-700 mb-2 text-xs">{teamsPage.keyPoints[locale]}</h3>
                    <ul className="space-y-1.5">
                      {team.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className="text-amber-500 mt-0.5 text-xs">&#9889;</span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Embedded key contacts */}
      <section className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-3">
        <h2 className="text-sm font-bold text-gray-900 flex items-center gap-2">
          <Phone size={16} className="text-blue-500" />
          {teamsPage.contactsTitle[locale]}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {[
            { name: 'רותי גור', role: 'ראש מטה (א׳)', phone: '052-2422009' },
            { name: 'לימור איצקוביץ', role: 'ראש מטה (ב׳)', phone: '052-3890241' },
            { name: 'יניר יעקובי', role: 'רכז חירום', phone: '052-3800007' },
            { name: 'נדין שם טוב', role: 'ראש מטה התערבות', phone: '054-4719718' },
            { name: 'סיגל קני פז', role: 'ראש מטה רגשי', phone: '054-5594108' },
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

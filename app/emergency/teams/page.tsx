'use client';
import { useState } from 'react';
import { ChevronDown, Users, Building2, Phone, Heart, Hotel, Search, UserCheck, Shield, Star } from 'lucide-react';
import React from 'react';

interface TeamData {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  gradient: string;
  border: string;
  iconColor: string;
  tasks: string[];
  keyPoints: string[];
}

const TEAMS: TeamData[] = [
  {
    id: 'intervention',
    title: 'צוות התערבות במקום',
    subtitle: 'צוות ראשון המגיע למקום האירוע, נותן מענה נפשי ראשוני ומנתב תושבים',
    icon: Users,
    gradient: 'from-red-500/15 to-red-900/15',
    border: 'border-red-500/30',
    iconColor: 'text-red-400',
    tasks: [
      'הגעה מהירה לאזור האירוע',
      'מתן מענה נפשי ראשוני (מודל מעש"ה)',
      'הרגעה ותמיכה בנפגעים ובתושבי הסביבה',
      'ניתוב תושבים לנקודות קליטה ושולחן קדמי',
      'דיווח למטה על תמונת מצב בשטח',
      'סיוע לכוחות ההצלה במידת הצורך',
    ],
    keyPoints: [
      'תמיד בזוגות – לעולם לא לבד',
      'שמירה על קשר רציף עם המטה',
      'זיהוי עצמי מלא בפני תושבים',
    ],
  },
  {
    id: 'front_desk',
    title: 'שולחן קדמי',
    subtitle: 'נקודת קליטה קדמית למשפחות – רישום, תשאול והפניה',
    icon: Building2,
    gradient: 'from-orange-500/15 to-orange-900/15',
    border: 'border-orange-500/30',
    iconColor: 'text-orange-400',
    tasks: [
      'קליטה ראשונית של תושבים מפונים',
      'תשאול ורישום פרטי משפחה',
      'מילוי טפסים ראשוניים במערכת יחד',
      'הפניה לגורמים המתאימים (מס"ר, מלונות, בתי חולים)',
      'מתן מידע בסיסי על זכויות ותהליכים',
    ],
    keyPoints: [
      'שפה רגועה ומכבדת',
      'תיעוד מלא של כל פנייה',
      'הפניה מהירה – לא להחזיק אנשים בתור',
    ],
  },
  {
    id: 'msr',
    title: 'מס"ר – מרכז סיוע ראשוני',
    subtitle: 'מרכז למשפחות – הרגעה, מידע, זכאויות, ציוד ואיתור נעדרים',
    icon: Heart,
    gradient: 'from-blue-500/15 to-blue-900/15',
    border: 'border-blue-500/30',
    iconColor: 'text-blue-400',
    tasks: [
      'הרגעה ותמיכה נפשית למשפחות',
      'מתן מידע עדכני על מצב האירוע',
      'בירור זכאויות (מלון, ציוד, פיצויים)',
      'חלוקת ציוד חיוני (שמיכות, ביגוד, מזון)',
      'ריכוז מידע לאיתור נעדרים',
      'תיאום מול צוותים מקבילים',
    ],
    keyPoints: [
      'מרחב מוגן ושקט – חשוב ליצור אווירה רגועה',
      'עדכונים שוטפים מהמטה',
      'נגישות מלאה לכלל האוכלוסייה',
    ],
  },
  {
    id: 'hotels',
    title: 'צוות מלונות',
    subtitle: 'קליטת זכאים למלונות, תיאום עם משרד התיירות ומערכת יחד',
    icon: Hotel,
    gradient: 'from-teal-500/15 to-teal-900/15',
    border: 'border-teal-500/30',
    iconColor: 'text-teal-400',
    tasks: [
      'בדיקת זכאות למלון עפ"י קריטריונים',
      'תיאום מול משרד התיירות על חדרים זמינים',
      'הפניית משפחות למלונות מתאימים',
      'ליווי המשפחות בתהליך הקליטה',
      'עדכון מערכת יחד על שיבוצים',
      'מעקב אחר מלונות מלאים ופתיחת חלופות',
    ],
    keyPoints: [
      'עבודה מול רשימת מלונות מעודכנת',
      'רגישות למשפחות עם צרכים מיוחדים',
      'תיאום שוטף עם המטה',
    ],
  },
  {
    id: 'hospitals',
    title: 'צוות קישור לבתי חולים',
    subtitle: 'ליווי משפחות בבתי חולים, איסוף מידע ואיתור נעדרים',
    icon: Search,
    gradient: 'from-purple-500/15 to-purple-900/15',
    border: 'border-purple-500/30',
    iconColor: 'text-purple-400',
    tasks: [
      'יציאה לבתי החולים הרלוונטיים',
      'איסוף מידע על פצועים מאושפזים',
      'סיוע למשפחות באיתור נעדרים',
      'ליווי רגשי של משפחות בבתי החולים',
      'דיווח למטה על משפחות שאותרו',
    ],
    keyPoints: [
      'עבודה בתיאום מלא עם צוות בית החולים',
      'שמירה על פרטיות המטופלים',
      'דיווח מיידי על כל איתור',
    ],
  },
  {
    id: 'bad_news',
    title: 'צוות בשורה מרה',
    subtitle: 'מסירת הודעה על הרוג – בהתאם לכללים מחמירים ועם ליווי מקצועי',
    icon: Shield,
    gradient: 'from-gray-500/15 to-gray-900/15',
    border: 'border-gray-500/30',
    iconColor: 'text-gray-400',
    tasks: [
      'מסירת הודעה על הרוג של בן משפחה',
      'ליווי מקצועי צמוד למשפחה לאחר ההודעה',
      'תיאום מול משטרה וזיהוי הנפטרים',
      'הפניית המשפחה לגורמי תמיכה המשכיים',
    ],
    keyPoints: [
      'לעולם לא בשטח האירוע – רק בסביבה מוגנת',
      'תמיד בצמד מקצועי',
      'לפי נהלים מחמירים בלבד',
      'אין למסור מידע חלקי',
    ],
  },
  {
    id: 'talem',
    title: 'צוות תל"ם – תשומת לב מיוחדת',
    subtitle: 'סיוע לאוכלוסיות פגיעות הדורשות קשר יזום – מספר שעות לאחר שיא האירוע',
    icon: UserCheck,
    gradient: 'from-pink-500/15 to-pink-900/15',
    border: 'border-pink-500/30',
    iconColor: 'text-pink-400',
    tasks: [
      'איתור קשישים בודדים באזור האירוע',
      'קשר יזום עם אוכלוסיות פגיעות (נכים, חולי נפש)',
      'בדיקת צרכים מיוחדים (תרופות, ציוד רפואי)',
      'הפניה לשירותים מתאימים',
      'מופעל מספר שעות לאחר שיא האירוע',
    ],
    keyPoints: [
      'פעולה יזומה – לא ממתינים לפניות',
      'עבודה מול רשימות אוכלוסייה מעודכנות',
      'רגישות תרבותית ושפתית',
    ],
  },
  {
    id: 'emotional',
    title: 'צוות מענה רגשי לתושבים',
    subtitle: 'מענה רגשי טלפוני לתושבים במצוקה – בהפעלת צוות השפ"ח',
    icon: Phone,
    gradient: 'from-indigo-500/15 to-indigo-900/15',
    border: 'border-indigo-500/30',
    iconColor: 'text-indigo-400',
    tasks: [
      'מענה טלפוני לתושבים במצוקה',
      'קבלת הפניות ממוקד 106',
      'הפעלת מודל מעש"ה בטלפון',
      'הפניה לגורמי מקצוע במידת הצורך',
      'תיעוד שיחות ומעקב',
    ],
    keyPoints: [
      'זמינות רציפה לאורך כל האירוע',
      'הקשבה פעילה – לא לחפש "לפתור"',
      'דיווח על מקרים קשים למטה',
    ],
  },
  {
    id: 'volunteers',
    title: 'צוות מתנדבים וקהילה',
    subtitle: 'הפעלת מתנדבים בשעת חירום ומתן סיוע לצרכים מידיים',
    icon: Star,
    gradient: 'from-amber-500/15 to-amber-900/15',
    border: 'border-amber-500/30',
    iconColor: 'text-amber-400',
    tasks: [
      'עיבוי צוותי שטח במתנדבים מאומנים',
      'רישום וניהול מתנדבים חדשים',
      'הקצאת משימות למתנדבים עפ"י כישורים',
      'תיאום מול ארגוני מתנדבים',
      'מתן סיוע לצרכים מידיים (מזון, הסעות)',
    ],
    keyPoints: [
      'כל מתנדב חייב לעבור תדרוך קצר',
      'ניהול רשימה מעודכנת של מתנדבים זמינים',
      'שיבוץ בהתאם ליכולות ולצרכים',
    ],
  },
  {
    id: 'savior',
    title: '"מי יציל את המציל"',
    subtitle: 'ונטילציה ותמיכה רגשית לצוותי החירום הפועלים בשטח',
    icon: Heart,
    gradient: 'from-rose-500/15 to-rose-900/15',
    border: 'border-rose-500/30',
    iconColor: 'text-rose-400',
    tasks: [
      'מתן ונטילציה לצוותי השטח בהפסקות',
      'זיהוי סימני עומס וסטרס אצל צוותי החירום',
      'הפניה לטיפול מקצועי במידת הצורך',
      'יצירת מרחב מנוחה ושקט לצוותים',
      'תמיכה לכל אנשי השטח והמקצוע',
    ],
    keyPoints: [
      'נוכחות בלתי פולשנית – לא לכפות שיחה',
      'מזון, שתייה ומנוחה – הבסיס',
      'אחרי המשמרת – ונטילציה חובה',
    ],
  },
  {
    id: 'hq',
    title: 'מטה מכלול אוכלוסייה',
    subtitle: 'ניהול, תיאום וריכוז תמונת מצב כוללת – מנהל מכלול + ראש תא רווחה',
    icon: Shield,
    gradient: 'from-slate-500/15 to-slate-900/15',
    border: 'border-slate-500/30',
    iconColor: 'text-slate-400',
    tasks: [
      'ריכוז תמונת מצב מכל הצוותים',
      'קבלת החלטות וחלוקת משימות',
      'תיאום מול גורמי חוץ (צבא, משטרה, מד"א)',
      'עדכון ראש העיר / הנהלת העירייה',
      'ניהול משאבים וכוח אדם',
      'הפעלת צוותים נוספים עפ"י הצורך',
    ],
    keyPoints: [
      'עדכון תמונת מצב כל 15 דקות',
      'ניהול לוח משימות מרכזי',
      'תיעוד מלא של כל ההחלטות',
    ],
  },
];

export default function EmergencyTeamsPage() {
  const [expandedTeam, setExpandedTeam] = useState<string | null>(null);

  return (
    <div className="space-y-10">
      {/* Hero */}
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-l from-white to-white/70 bg-clip-text text-transparent">
          צוותי החירום
        </h1>
        <p className="text-white/40 text-base">בחרו צוות לצפייה בתוכנית ההפעלה המלאה</p>
      </section>

      {/* Teams */}
      <div className="space-y-3">
        {TEAMS.map(team => {
          const Icon = team.icon;
          const isExpanded = expandedTeam === team.id;
          return (
            <div key={team.id} className={`bg-gradient-to-l ${team.gradient} border ${team.border} ${isExpanded ? 'rounded-t-2xl' : 'rounded-2xl'} overflow-hidden`}>
              <button
                onClick={() => setExpandedTeam(isExpanded ? null : team.id)}
                className="w-full flex items-center gap-4 p-5 text-right hover:bg-white/5 transition-colors"
              >
                <div className="bg-white/10 rounded-xl w-11 h-11 flex items-center justify-center flex-shrink-0">
                  <Icon size={20} className={team.iconColor} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-white text-sm">{team.title}</div>
                  <div className="text-xs text-white/40 truncate">{team.subtitle}</div>
                </div>
                <div className={`transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}>
                  <ChevronDown size={18} className="text-white/40" />
                </div>
              </button>
              {isExpanded && (
                <div className={`bg-white/5 border-t ${team.border} px-5 pb-5 pt-4 space-y-4 animate-slideDown`}>
                  <div>
                    <h3 className="font-bold text-white text-sm mb-2.5">משימות עיקריות</h3>
                    <ul className="space-y-2">
                      {team.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-white/60 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-white/25 mt-1.5 flex-shrink-0" />
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4">
                    <h3 className="font-bold text-amber-400 mb-2 text-xs">נקודות מפתח</h3>
                    <ul className="space-y-1.5">
                      {team.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-white/60 text-sm">
                          <span className="text-amber-400 mt-0.5 text-xs">&#9889;</span>
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
    </div>
  );
}

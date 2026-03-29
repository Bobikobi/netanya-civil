'use client';
import { useState } from 'react';
import { ChevronDown, ChevronUp, Users, Building2, Phone, Heart, Hotel, Search, UserCheck, Shield, Star } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface TeamData {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  color: string;
  borderColor: string;
  tasks: string[];
  keyPoints: string[];
}

const TEAMS: TeamData[] = [
  {
    id: 'intervention',
    title: 'צוות התערבות במקום',
    subtitle: 'צוות ראשון המגיע למקום האירוע, נותן מענה נפשי ראשוני ומנתב תושבים',
    icon: Users,
    color: 'from-red-500 to-red-600',
    borderColor: 'border-red-500',
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
    color: 'from-orange-500 to-orange-600',
    borderColor: 'border-orange-500',
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
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500',
    tasks: [
      'הרגעה ותמיכה נפשית למשפחות',
      'מתן מידע עדכני על מצב האירוע',
      'בירור זכאויות (מלון, ציוד, פיצויים)',
      'חלוקת ציוד חיוני (שמיכות, ביגוד, מזון)',
      'ריכוז מידע לאיתור נעדרים',
      'תיאום מול צוותים מקבילים',
    ],
    keyPoints: [
      'מרחב מוגן ושקט – חשוב ליצור אוירה רגועה',
      'עדכונים שוטפים מהמטה',
      'נגישות מלאה לכלל האוכלוסייה',
    ],
  },
  {
    id: 'hotels',
    title: 'צוות מלונות',
    subtitle: 'קליטת זכאים למלונות, תיאום עם משרד התיירות ומערכת יחד',
    icon: Hotel,
    color: 'from-teal-500 to-teal-600',
    borderColor: 'border-teal-500',
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
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500',
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
    color: 'from-gray-600 to-gray-700',
    borderColor: 'border-gray-500',
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
    color: 'from-pink-500 to-pink-600',
    borderColor: 'border-pink-500',
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
    color: 'from-indigo-500 to-indigo-600',
    borderColor: 'border-indigo-500',
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
    color: 'from-amber-500 to-amber-600',
    borderColor: 'border-amber-500',
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
    color: 'from-rose-500 to-rose-600',
    borderColor: 'border-rose-500',
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
    color: 'from-slate-600 to-slate-700',
    borderColor: 'border-slate-500',
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
    <div className="space-y-8">
      {/* Hero */}
      <section className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800">צוותי החירום</h1>
        <p className="text-slate-500 text-lg">בחרו צוות לצפייה בתוכנית ההפעלה המלאה</p>
      </section>

      {/* Teams Grid */}
      <div className="space-y-3">
        {TEAMS.map(team => {
          const Icon = team.icon;
          const isExpanded = expandedTeam === team.id;
          return (
            <div key={team.id} className="bg-white rounded-xl shadow overflow-hidden">
              <button
                onClick={() => setExpandedTeam(isExpanded ? null : team.id)}
                className="w-full flex items-center gap-4 p-5 text-right hover:bg-slate-50 transition-colors"
              >
                <div className={`bg-gradient-to-bl ${team.color} text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0`}>
                  <Icon size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-lg text-slate-800">{team.title}</div>
                  <div className="text-sm text-slate-500 truncate">{team.subtitle}</div>
                </div>
                {isExpanded ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
              </button>
              {isExpanded && (
                <div className={`border-t border-r-4 ${team.borderColor} px-5 pb-5 pt-4 space-y-4`}>
                  <div>
                    <h3 className="font-bold text-slate-700 mb-2">משימות עיקריות</h3>
                    <ul className="space-y-1.5">
                      {team.tasks.map((task, i) => (
                        <li key={i} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-blue-500 mt-0.5">●</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4 border border-amber-100">
                    <h3 className="font-bold text-amber-800 mb-2 text-sm">נקודות מפתח</h3>
                    <ul className="space-y-1">
                      {team.keyPoints.map((point, i) => (
                        <li key={i} className="flex items-start gap-2 text-amber-700 text-sm">
                          <span className="mt-0.5">⚡</span>
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

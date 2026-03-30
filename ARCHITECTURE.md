# 🏗️ מיפוי ארכיטקטורת המערכת – צוותי חירום נתניה

> עודכן לאחרונה: מרץ 2026

---

## 📊 סקירת פרויקט

| פרמטר | ערך |
|--------|------|
| **פריימוורק** | Next.js 14.2 (App Router) |
| **שפת תכנות** | TypeScript 5 |
| **עיצוב** | Tailwind CSS 3.4 |
| **מסד נתונים** | Supabase (PostgreSQL) |
| **אייקונים** | Lucide React |
| **שפות UI** | עברית (ברירת מחדל), אנגלית, רוסית |
| **כיוון** | RTL (עם תמיכה דינמית ב-LTR) |
| **דפלוי** | Vercel (auto-deploy מ-master) |
| **URL** | `netanya-civil.vercel.app` |

---

## 📁 מבנה תיקיות

```
netanya-civil/
├── app/
│   ├── layout.tsx              # Root layout – פונטים, metadata, <html lang="he" dir="rtl">
│   ├── globals.css             # סגנונות גלובליים – Tailwind, focus-visible, sr-only
│   ├── page.tsx                # דף בית (/) – דשבורד אירועים מ-Supabase
│   ├── report/
│   │   └── page.tsx            # דיווח אירוע (/report) – טופס + Zod validation
│   ├── fonts/
│   │   ├── GeistVF.woff        # פונט ראשי
│   │   └── GeistMonoVF.woff    # פונט mono
│   └── emergency/
│       ├── layout.tsx          # Layout משותף – Navbar, I18nProvider, Footer
│       ├── page.tsx            # דף ראשי חירום (/emergency)
│       ├── mashe/page.tsx      # מודל מעש"ה (/emergency/mashe)
│       ├── teams/page.tsx      # צוותי חירום (/emergency/teams)
│       ├── scripts/page.tsx    # תסריטי שיחה (/emergency/scripts)
│       ├── contacts/page.tsx   # ספר טלפונים (/emergency/contacts)
│       ├── orgchart/page.tsx   # מבנה ארגוני (/emergency/orgchart)
│       ├── faq/page.tsx        # שאלות ותשובות (/emergency/faq)
│       ├── accessibility/page.tsx # הצהרת נגישות
│       └── privacy/page.tsx    # מדיניות פרטיות
├── lib/
│   ├── i18n.tsx                # I18n Provider – ניהול שפה, localStorage, RTL sync
│   ├── translations.ts        # ~1000 שורות – כל מחרוזות UI ב-3 שפות
│   ├── supabase.ts             # Supabase client initialization
│   └── utils.ts                # cn() (clsx + tailwind-merge), formatTimeAgo()
├── components/
│   ├── Navbar.tsx              # Navbar פשוט (לא בשימוש בנתיבי emergency)
│   └── Footer.tsx              # Footer פשוט
├── types/
│   └── index.ts                # TypeScript interfaces: Incident, IncidentUpdate
├── public/
│   └── netanya-logo.png        # לוגו עיריית נתניה
├── package.json
├── tsconfig.json               # path alias: @/* → ./*
├── tailwind.config.ts
├── next.config.mjs             # ignore ESLint/TS errors in build
└── postcss.config.mjs
```

---

## 🗺️ מפת ניתובים (Routes)

```
/ ─────────────────── דשבורד אירועים (Supabase real-time)
/report ──────────── טופס דיווח אירוע

/emergency ────────── דף ראשי חירום (Hero + זרימה + צוותים מקבילים + טלפונים)
  ├── /mashe ──────── מודל מעש"ה – עזרה ראשונה נפשית (4 שלבים)
  ├── /teams ──────── 8 צוותי חירום עם פירוט משימות
  ├── /scripts ────── 5 תסריטי שיחה למצבי שטח
  ├── /contacts ───── ספר טלפונים (60+ אנשי קשר, חיפוש, העתקה)
  ├── /orgchart ───── עץ מבנה ארגוני אינטראקטיבי
  ├── /faq ────────── 7 קטגוריות × 30+ שאלות ותשובות
  ├── /accessibility ─ הצהרת נגישות WCAG AA
  └── /privacy ────── מדיניות פרטיות
```

---

## 🔄 זרימת נתונים (Data Flow)

### I18n – ניהול שפות

```
localStorage("locale")
       │
       ▼
┌─────────────────┐
│  I18nProvider    │  ← Context Provider עוטף את /emergency/*
│  lib/i18n.tsx    │
├─────────────────┤
│ locale: he|en|ru │
│ dir: rtl|ltr     │
│ setLocale()      │
└────────┬────────┘
         │ useEffect
         ▼
  document.documentElement.lang = locale
  document.documentElement.dir  = dir
         │
         ▼
┌─────────────────────┐
│ lib/translations.ts │ ← ~1000 שורות תרגום
│ nav, footer, home,  │
│ mashe, teamsPage,    │
│ scriptsPage, faqPage │
│ contactsPage, ...    │
└─────────────────────┘
```

### Supabase – מסד נתונים

```
┌──────────────┐      ┌──────────────────┐
│ /report      │─────▶│ supabase         │
│ (טופס דיווח) │ INSERT│ .incidents       │
└──────────────┘      │ ┌──────────────┐ │
                      │ │ id           │ │
┌──────────────┐      │ │ created_at   │ │
│ / (דשבורד)   │◀─────│ │ type         │ │
│ (polling 30s)│SELECT│ │ description  │ │
└──────────────┘      │ │ address      │ │
                      │ │ lat, lng     │ │
                      │ │ status       │ │
                      │ │ reporter_phone│ │
                      │ └──────────────┘ │
                      │                  │
                      │ .incident_updates│
                      │ ┌──────────────┐ │
                      │ │ id           │ │
                      │ │ incident_id  │ │
                      │ │ message      │ │
                      │ │ created_at   │ │
                      │ │ author_name  │ │
                      │ └──────────────┘ │
                      └──────────────────┘
```

---

## 🧩 היררכיית קומפוננטות

```
<html lang="he" dir="rtl">              (app/layout.tsx)
└── <body>
    │
    ├── / (Home)                         (app/page.tsx)
    │   └── IncidentDashboard            useEffect → Supabase fetch (30s poll)
    │       ├── StatusFilter
    │       └── IncidentCards
    │
    ├── /report                          (app/report/page.tsx)
    │   └── ReportForm                   react-hook-form + Zod
    │
    └── /emergency/*                     (app/emergency/layout.tsx)
        ├── I18nProvider                 lib/i18n.tsx
        └── LayoutInner
            ├── <a> Skip-to-content      sr-only (3 שפות)
            ├── <nav> Navbar (sticky)
            │   ├── NAV_ITEMS ×7         בית, מעש"ה, צוותים, תסריטים, טלפונים, מבנה, FAQ
            │   ├── LanguageSwitcher      🇮🇱/🇬🇧/🇷🇺 dropdown
            │   └── Logo + Brand
            │
            ├── <main> Content
            │   ├── EmergencyHome         Hero + Quick links + Flow steps + Parallel teams + Tips + Phones
            │   ├── MashePage             4 שלבי מעש"ה (אקורדיון) + טעויות + סרטון + תזכורות
            │   ├── TeamsPage             8 צוותים (אקורדיון) + אנשי קשר מוטבעים
            │   ├── ScriptsPage           5 תסריטים (אקורדיון) – מה לומר / לא לומר
            │   ├── ContactsPage          חיפוש + סינון קטגוריות + 60+ כרטיסי איש קשר
            │   ├── OrgChartPage          עץ רקורסיבי OrgNode (expand/collapse)
            │   ├── FAQPage               7 קטגוריות × שאלות (אקורדיון כפול)
            │   ├── AccessibilityPage     הצהרת WCAG AA
            │   └── PrivacyPage           מדיניות פרטיות (7 סעיפים)
            │
            └── <footer>                  footer line1, line2, accessibility, privacy links
```

---

## 🌍 מערכת תרגומים (translations.ts)

| סקשן | מפתחות | שימוש |
|-------|--------|-------|
| `nav` | 9 | ניווט: בית, מעש"ה, צוותים, תסריטים, טלפונים, מבנה, FAQ, brand |
| `footer` | 4 | כותרת תחתונה: שורות טקסט, נגישות, פרטיות |
| `home` | 13 | דף בית: hero, מערכות חיצוניות, זרימה, צוותים, טלפונים |
| `homeQuickLinks` | 5 | כרטיסי ניווט מהיר (label + sublabel) |
| `homeFlowSteps` | 3 | שלבי הפעלת צוותים (title, subtitle, details[]) |
| `homeParallelTeams` | 8 | צוותים מקבילים (title, desc, people) |
| `homeTips` | 15 | טיפים מקצועיים (קרוסלה) |
| `homeEmergencyPhones` | 6 | מספרי חירום (106, 100, 101, 102, 104, 1201) |
| `mashe` | 16 | דף מעש"ה: כותרות, שלבים, טעויות, סרטון |
| `masheSteps` | 4 | 4 שלבי המודל (letter, title, description, example) |
| `masheMistakes` | 5 | טעויות נפוצות + תיקון |
| `masheReminders` | 4 | קטגוריות תזכורת |
| `teamsPage` | 5 | דף צוותים: כותרות, משימות, נקודות מפתח |
| `scriptsPage` | 7 | דף תסריטים: כותרות, תרחיש, לומר/לא |
| `contactsPage` | 6 | ספר טלפונים: חיפוש, קטגוריות, העתקה |
| `orgchartPage` | 4 | מבנה ארגוני: כותרות, הוראות |
| `faqPage` | 4 | שאלות ותשובות: כותרות |
| `accessibilityPage` | 9 | הצהרת נגישות |
| `privacyPage` | 5 | מדיניות פרטיות |

**סה"כ: ~500+ מפתחות תרגום × 3 שפות**

---

## 🔗 אינטגרציות חיצוניות

| שירות | סוג | URL / פרטים |
|--------|------|-------------|
| **Supabase** | מסד נתונים | `NEXT_PUBLIC_SUPABASE_URL` / `NEXT_PUBLIC_SUPABASE_ANON_KEY` |
| **Vercel** | דפלוי | Auto-deploy מ-`master` branch |
| **מערכת מס"ר** | לינק חיצוני | `emergency-dashboard-live-silk.vercel.app` |
| **מערכת יחד** | לינק חיצוני | `go.gov.il/wrwov` |
| **YouTube** | סרטון הדרכה | מוטבע בדף מעש"ה |

---

## 🎨 מערכת עיצוב

### פלטת צבעים

| אלמנט | צבע | קלאס |
|--------|------|-------|
| Hero | כחול כהה | `bg-[#2d4a6f]` |
| רקע כללי | אפור בהיר | `bg-gray-50` |
| כרטיסים | לבן | `bg-white border border-gray-200` |
| כפתורים ראשיים | כחול | `bg-blue-500 / bg-blue-700` |
| מערכת יחד | ירוק | `bg-emerald-500` |
| אזהרות | כתום | `bg-amber-50 border-amber-200` |
| פעיל בניווט | שחור | `bg-gray-900 text-white` |

### Responsive

| Breakpoint | שימוש |
|-----------|-------|
| Mobile-first | ברירת מחדל – עמודה אחת, טקסט קטן |
| `md:` (768px) | 2 עמודות, טקסט גדול יותר, לוגו מורחב |
| `lg:` (1024px) | Grid צד-לצד (flow + parallel teams) |

### נגישות (A11y)

| פיצ'ר | מימוש |
|--------|-------|
| Skip-to-content | `<a href="#main-content">` (sr-only, 3 שפות) |
| Focus ring | `*:focus-visible { outline: 2px solid #3b82f6 }` |
| ARIA labels | nav, footer, search input, accordions |
| `aria-expanded` | כל אקורדיון + orgchart tree nodes |
| `aria-current="page"` | לינקים פעילים בניווט |
| `role="menu"` | Language switcher dropdown |
| Keyboard | Escape סוגר dropdown, Tab navigation |

---

## 📦 Dependencies עיקריות

```json
{
  "next": "14.2.35",
  "react": "^18",
  "typescript": "^5",
  "tailwindcss": "^3.4.1",
  "@supabase/supabase-js": "^2.100.1",
  "react-hook-form": "^7.54.2",
  "zod": "^3.24.1",
  "@hookform/resolvers": "^3.9.1",
  "lucide-react": "^0.468.0",
  "clsx": "^2.1.1",
  "tailwind-merge": "^2.6.0",
  "sonner": "^1.7.3"
}
```

---

## 📊 סטטיסטיקות

| מדד | ערך |
|------|------|
| עמודים | 10 (+ root layout) |
| Client Components | 12+ |
| מפתחות תרגום | ~500+ |
| אנשי קשר | 60+ |
| צוותי חירום מתועדים | 8 |
| סוגי אירועים | 7 |
| שפות נתמכות | 3 |
| טלפוני חירום | 6 |
| קטגוריות FAQ | 7 (30+ שאלות) |
| תסריטי שיחה | 5 |
| טיפים מקצועיים | 15 |

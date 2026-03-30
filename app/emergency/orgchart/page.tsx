'use client';
import { useState } from 'react';
import { Phone, ChevronDown, Shield, Lock } from 'lucide-react';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import { usePhoneAuth } from '@/lib/phone-auth';
import { orgchartPage, orgchartUnits, orgchartRoles, orgchartSupportUnits } from '@/lib/translations';

interface OrgUnit {
  id: string;
  title: string;
  people: { name: string; role: string; phone: string }[];
  color: string;
  borderColor: string;
  textColor: string;
  children?: OrgUnit[];
}

const ORG_TREE: OrgUnit = {
  id: 'root',
  title: 'מטה חירום עירוני',
  people: [],
  color: 'bg-[#2d4a6f]',
  borderColor: 'border-[#2d4a6f]',
  textColor: 'text-white',
  children: [
    {
      id: 'maklol',
      title: 'מטה מכלול אוכלוסייה',
      color: 'bg-blue-100',
      borderColor: 'border-blue-300',
      textColor: 'text-blue-900',
      people: [
        { name: 'רותי גור', role: 'ראש מטה (א׳)', phone: '' },
        { name: 'עדי פוליטי', role: 'סגן (א׳)', phone: '' },
        { name: 'לימור איצקוביץ', role: 'ראש מטה (ב׳)', phone: '' },
        { name: 'דבי סבטוי', role: 'סגן (ב׳)', phone: '' },
        { name: 'יניר יעקובי', role: 'רכז חירום', phone: '' },
      ],
      children: [
        {
          id: 'intervention',
          title: 'מטה צוותי התערבות',
          color: 'bg-red-50',
          borderColor: 'border-red-300',
          textColor: 'text-red-800',
          people: [
            { name: 'נדין שם טוב', role: 'ראש מטה', phone: '' },
            { name: 'יעל קידר', role: '', phone: '' },
          ],
          children: [
            { id: 'r1', title: 'רובע א׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'דקלה קליין', role: '', phone: '' }, { name: 'מורית שטרן', role: '', phone: '' }] },
            { id: 'r2', title: 'רובע ב׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'אורלי וקשי', role: '', phone: '' }, { name: 'אודי מגידי', role: '', phone: '' }] },
            { id: 'r3', title: 'רובע ג׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'מירי ברון', role: '', phone: '' }, { name: 'אור הרוש', role: '', phone: '' }] },
            { id: 'r4', title: 'רובע ד׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'מיכל חלפון', role: '', phone: '' }, { name: 'סיון לוי נפתלי', role: '', phone: '' }] },
            { id: 'r5', title: 'רובע ה׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'אביבית דבי', role: '', phone: '' }, { name: 'אירית שפירא', role: '', phone: '' }] },
          ],
        },
        {
          id: 'msr',
          title: 'מרכז משפחות (מס"ר)',
          color: 'bg-blue-50',
          borderColor: 'border-blue-300',
          textColor: 'text-blue-800',
          people: [
            { name: 'שביט ביטון', role: '', phone: '' },
            { name: 'ליטל לוריא', role: '', phone: '' },
          ],
          children: [
            { id: 'msr_wait', title: 'מתחם המתנה', color: 'bg-blue-50/50', borderColor: 'border-blue-200', textColor: 'text-blue-700', people: [{ name: 'כנרת מנטין', role: '', phone: '' }] },
            { id: 'msr_miss', title: 'מתחם נעדרים', color: 'bg-blue-50/50', borderColor: 'border-blue-200', textColor: 'text-blue-700', people: [{ name: 'מיה אופננג', role: '', phone: '' }] },
            { id: 'msr_absorb', title: 'מתחם קליטה', color: 'bg-blue-50/50', borderColor: 'border-blue-200', textColor: 'text-blue-700', people: [] },
            { id: 'msr_assign', title: 'מתחם שיבוץ', color: 'bg-blue-50/50', borderColor: 'border-blue-200', textColor: 'text-blue-700', people: [] },
          ],
        },
        {
          id: 'mlm',
          title: 'מטה מל"מ',
          color: 'bg-cyan-50',
          borderColor: 'border-cyan-300',
          textColor: 'text-cyan-800',
          people: [
            { name: 'שני רשף', role: 'ראש מטה', phone: '' },
            { name: 'ציפי כרמלי', role: 'סגן', phone: '' },
            { name: 'בל מרקוביץ', role: 'שפ"ח', phone: '' },
          ],
        },
        {
          id: 'emotional',
          title: 'מטה רגשי',
          color: 'bg-pink-50',
          borderColor: 'border-pink-300',
          textColor: 'text-pink-800',
          people: [
            { name: 'סיגל קני פז', role: 'ראש מטה', phone: '' },
            { name: 'מירב מור', role: 'סגן', phone: '' },
          ],
        },
        {
          id: 'hotline',
          title: 'צוות קו פתוח ומידע',
          color: 'bg-green-50',
          borderColor: 'border-green-300',
          textColor: 'text-green-800',
          people: [
            { name: 'רקפת וינגרט', role: '', phone: '' },
            { name: 'שלומית עמרני', role: '', phone: '' },
          ],
        },
        {
          id: 'hospitals',
          title: 'קישור בית חולים',
          color: 'bg-purple-50',
          borderColor: 'border-purple-300',
          textColor: 'text-purple-800',
          people: [
            { name: 'שמרית דיאמנט', role: '', phone: '' },
            { name: 'אסנת דוד', role: '', phone: '' },
          ],
        },
        {
          id: 'casualties',
          title: 'מטה חללים (ליווי מש׳ + תר"ח)',
          color: 'bg-gray-100',
          borderColor: 'border-gray-400',
          textColor: 'text-gray-800',
          people: [
            { name: 'נילי חומן', role: 'ראש מטה', phone: '' },
            { name: 'יעל שחר', role: 'סגן', phone: '' },
          ],
        },
        {
          id: 'special',
          title: 'מטה אוכלוסיות מיוחדות',
          color: 'bg-violet-50',
          borderColor: 'border-violet-300',
          textColor: 'text-violet-800',
          people: [
            { name: 'קלרה חן', role: 'ראש מטה', phone: '' },
            { name: 'יעל רכס', role: 'סגן', phone: '' },
          ],
        },
        {
          id: 'absorption',
          title: 'מטה קליטת אוכלוסייה',
          color: 'bg-teal-50',
          borderColor: 'border-teal-300',
          textColor: 'text-teal-800',
          people: [
            { name: 'אתי עמיאל', role: 'ראש מטה', phone: '' },
            { name: 'הדר שחר פז', role: 'סגן', phone: '' },
          ],
        },
        {
          id: 'ops',
          title: 'מטה תפעול ומתנדבים',
          color: 'bg-amber-50',
          borderColor: 'border-amber-300',
          textColor: 'text-amber-800',
          people: [
            { name: 'אפרת ברוך', role: 'ראש מטה', phone: '' },
            { name: 'מלי גניש', role: 'סגן + לוגיסטיקה', phone: '' },
            { name: 'אתי יוזף', role: 'חמ"ל מתנדבים', phone: '' },
          ],
        },
        {
          id: 'seniors',
          title: 'מטה אזרחים ותיקים',
          color: 'bg-emerald-50',
          borderColor: 'border-emerald-300',
          textColor: 'text-emerald-800',
          people: [
            { name: 'גילה גלעדי', role: 'ראש מטה', phone: '' },
            { name: 'ספי אביב', role: 'סגן', phone: '' },
          ],
        },
        {
          id: 'aliya',
          title: 'מטה קליטת עלייה',
          color: 'bg-sky-50',
          borderColor: 'border-sky-300',
          textColor: 'text-sky-800',
          people: [
            { name: 'בני אמר', role: 'ראש מטה', phone: '' },
          ],
        },
        {
          id: 'tourism',
          title: 'מטה תיירות',
          color: 'bg-rose-50',
          borderColor: 'border-rose-300',
          textColor: 'text-rose-800',
          people: [
            { name: 'אולגה לורייה', role: 'ראש מטה', phone: '' },
            { name: 'עדנה שפיצר', role: 'סגן', phone: '' },
          ],
        },
        {
          id: 'health',
          title: 'מטה בריאות',
          color: 'bg-lime-50',
          borderColor: 'border-lime-300',
          textColor: 'text-lime-800',
          people: [
            { name: 'שלומי רוקח', role: 'ראש מטה', phone: '' },
          ],
        },
      ],
    },
  ],
};

// Support staff rendered separately
const SUPPORT_STAFF = [
  { unit: 'מיון פניות', name: 'ענת עשור', phone: '' },
  { unit: 'מערכות מידע', name: 'בני שכטר', phone: '' },
  { unit: 'מערכות מידע', name: 'לוציאנה', phone: '' },
  { unit: 'פרסום ומידע', name: 'רויטל נחמיאס', phone: '' },
  { unit: 'משאבי אנוש', name: 'חגית אביב', phone: '' },
  { unit: 'משאבי אנוש', name: 'רויטל רש', phone: '' },
  { unit: 'מרכז ט.ל.י.ה', name: 'צפי גלובין', phone: '' },
];

function OrgNode({ node, depth = 0 }: { node: OrgUnit; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 2);
  const { unlocked, requestUnlock, getPhone } = usePhoneAuth();
  const { locale } = useI18n();
  const hasChildren = node.children && node.children.length > 0;
  const translatedTitle = orgchartUnits[node.title]?.[locale] ?? node.title;

  return (
    <div className="animate-fadeIn">
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={hasChildren ? expanded : undefined}
        aria-label={translatedTitle}
        className={`w-full ${node.color} border-2 ${node.borderColor} rounded-xl p-3 text-right transition-all duration-300 hover:shadow-lg ${
          depth === 0 ? 'mb-4' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className={`font-bold text-sm ${node.textColor}`}>{translatedTitle}</div>
            {node.people.length > 0 && (
              <div className="mt-1.5 space-y-0.5">
                {node.people.map((p, i) => {
                  const phone = getPhone('contacts', p.name);
                  const translatedRole = p.role ? (orgchartRoles[p.role]?.[locale] ?? p.role) : '';
                  return (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className={`${depth === 0 ? 'text-white/80' : 'text-gray-600'}`}>
                      {p.name}{translatedRole ? ` – ${translatedRole}` : ''}
                    </span>
                    {unlocked && phone ? (
                        <a
                          href={`tel:${phone}`}
                          onClick={e => e.stopPropagation()}
                          className={`flex items-center gap-0.5 ${depth === 0 ? 'text-white/70 hover:text-white' : 'text-blue-500 hover:text-blue-700'} hover:underline`}
                          dir="ltr"
                        >
                          <Phone size={10} />
                          {phone}
                        </a>
                    ) : (
                        <span
                          onClick={e => { e.stopPropagation(); requestUnlock(); }}
                          className={`flex items-center gap-0.5 cursor-pointer ${depth === 0 ? 'text-white/40' : 'text-gray-400'} hover:text-gray-600`}
                        >
                          <Lock size={10} />
                          <span className="text-[10px]">●●●-●●●●●●●</span>
                        </span>
                    )}
                  </div>
                  );
                })}
              </div>
            )}
          </div>
          {hasChildren && (
            <ChevronDown
              size={16}
              className={`${depth === 0 ? 'text-white/60' : 'text-gray-400'} transition-transform duration-300 flex-shrink-0 mr-2 ${
                expanded ? 'rotate-180' : ''
              }`}
            />
          )}
        </div>
      </button>

      {hasChildren && expanded && (
        <div className="mr-4 border-r-2 border-gray-200 pr-4 space-y-2 mt-2 mb-3 animate-slideDown">
          {node.children!.map(child => (
            <OrgNode key={child.id} node={child} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function OrgChartPage() {
  const { locale } = useI18n();
  const { unlocked, requestUnlock, getPhone } = usePhoneAuth();

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">
      <section className="text-center space-y-3">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{orgchartPage.title[locale]}</h1>
        <p className="text-gray-400 text-base">{orgchartPage.subtitle[locale]}</p>
        <p className="text-gray-400 text-xs">{orgchartPage.instructions[locale]}</p>
      </section>

      {/* Interactive org tree */}
      <div className="space-y-2">
        <OrgNode node={ORG_TREE} depth={0} />
      </div>

      {/* Support staff */}
      <section className="space-y-4">
        <h2 className="text-lg font-bold text-gray-900 text-center">{orgchartPage.supportTitle[locale]}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {SUPPORT_STAFF.map((s, idx) => {
            const phone = getPhone('contacts', s.name);
            return (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-3 hover:shadow-md transition-shadow">
              <div className="text-xs text-gray-400 mb-1">{orgchartSupportUnits[s.unit]?.[locale] ?? s.unit}</div>
              <div className="font-bold text-gray-900 text-sm">{s.name}</div>
              {unlocked && phone ? (
                  <a href={`tel:${phone}`} className="flex items-center gap-1 text-blue-500 text-xs mt-1 hover:underline" dir="ltr">
                    <Phone size={11} />
                    {phone}
                  </a>
              ) : (
                  <button onClick={requestUnlock} className="flex items-center gap-1 text-gray-400 text-xs mt-1 hover:text-gray-600 transition-colors">
                    <Lock size={11} />
                    <span>●●●-●●●●●●●</span>
                  </button>
              )}
            </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

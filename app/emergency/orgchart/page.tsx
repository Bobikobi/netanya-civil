'use client';
import { useState } from 'react';
import { Phone, ChevronDown, Shield } from 'lucide-react';
import React from 'react';
import { useI18n } from '@/lib/i18n';
import { orgchartPage } from '@/lib/translations';

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
        { name: 'רותי גור', role: 'ראש מטה (א׳)', phone: '052-2422009' },
        { name: 'עדי פוליטי', role: 'סגן (א׳)', phone: '052-3315503' },
        { name: 'לימור איצקוביץ', role: 'ראש מטה (ב׳)', phone: '052-3890241' },
        { name: 'דבי סבטוי', role: 'סגן (ב׳)', phone: '052-8138756' },
        { name: 'יניר יעקובי', role: 'רכז חירום', phone: '052-3800007' },
      ],
      children: [
        {
          id: 'intervention',
          title: 'מטה צוותי התערבות',
          color: 'bg-red-50',
          borderColor: 'border-red-300',
          textColor: 'text-red-800',
          people: [
            { name: 'נדין שם טוב', role: 'ראש מטה', phone: '054-4719718' },
            { name: 'יעל קידר', role: '', phone: '058-5768666' },
          ],
          children: [
            { id: 'r1', title: 'רובע א׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'דקלה קליין', role: '', phone: '050-6936618' }, { name: 'מורית שטרן', role: '', phone: '054-6783122' }] },
            { id: 'r2', title: 'רובע ב׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'אורלי וקשי', role: '', phone: '052-5123079' }, { name: 'אודי מגידי', role: '', phone: '052-5799063' }] },
            { id: 'r3', title: 'רובע ג׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'מירי ברון', role: '', phone: '050-7112414' }, { name: 'אור הרוש', role: '', phone: '052-5343103' }] },
            { id: 'r4', title: 'רובע ד׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'מיכל חלפון', role: '', phone: '050-2748662' }, { name: 'סיון לוי נפתלי', role: '', phone: '052-6879393' }] },
            { id: 'r5', title: 'רובע ה׳', color: 'bg-red-50/50', borderColor: 'border-red-200', textColor: 'text-red-700', people: [{ name: 'אביבית דבי', role: '', phone: '052-2207705' }, { name: 'אירית שפירא', role: '', phone: '052-4434987' }] },
          ],
        },
        {
          id: 'msr',
          title: 'מרכז משפחות (מס"ר)',
          color: 'bg-blue-50',
          borderColor: 'border-blue-300',
          textColor: 'text-blue-800',
          people: [
            { name: 'שביט ביטון', role: '', phone: '054-4849474' },
            { name: 'ליטל לוריא', role: '', phone: '054-8184472' },
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
            { name: 'שני רשף', role: 'ראש מטה', phone: '054-7336485' },
            { name: 'ציפי כרמלי', role: 'סגן', phone: '052-2587918' },
            { name: 'בל מרקוביץ', role: 'שפ"ח', phone: '052-4565525' },
          ],
        },
        {
          id: 'emotional',
          title: 'מטה רגשי',
          color: 'bg-pink-50',
          borderColor: 'border-pink-300',
          textColor: 'text-pink-800',
          people: [
            { name: 'סיגל קני פז', role: 'ראש מטה', phone: '054-5594108' },
            { name: 'מירב מור', role: 'סגן', phone: '052-4686349' },
          ],
        },
        {
          id: 'hotline',
          title: 'צוות קו פתוח ומידע',
          color: 'bg-green-50',
          borderColor: 'border-green-300',
          textColor: 'text-green-800',
          people: [
            { name: 'רקפת וינגרט', role: '', phone: '052-5799061' },
            { name: 'שלומית עמרני', role: '', phone: '054-2339491' },
          ],
        },
        {
          id: 'hospitals',
          title: 'קישור בית חולים',
          color: 'bg-purple-50',
          borderColor: 'border-purple-300',
          textColor: 'text-purple-800',
          people: [
            { name: 'שמרית דיאמנט', role: '', phone: '052-4722014' },
            { name: 'אסנת דוד', role: '', phone: '054-8200602' },
          ],
        },
        {
          id: 'casualties',
          title: 'מטה חללים (ליווי מש׳ + תר"ח)',
          color: 'bg-gray-100',
          borderColor: 'border-gray-400',
          textColor: 'text-gray-800',
          people: [
            { name: 'נילי חומן', role: 'ראש מטה', phone: '050-5958666' },
            { name: 'יעל שחר', role: 'סגן', phone: '052-4476011' },
          ],
        },
        {
          id: 'special',
          title: 'מטה אוכלוסיות מיוחדות',
          color: 'bg-violet-50',
          borderColor: 'border-violet-300',
          textColor: 'text-violet-800',
          people: [
            { name: 'קלרה חן', role: 'ראש מטה', phone: '052-6642723' },
            { name: 'יעל רכס', role: 'סגן', phone: '052-5550588' },
          ],
        },
        {
          id: 'absorption',
          title: 'מטה קליטת אוכלוסייה',
          color: 'bg-teal-50',
          borderColor: 'border-teal-300',
          textColor: 'text-teal-800',
          people: [
            { name: 'אתי עמיאל', role: 'ראש מטה', phone: '054-8462292' },
            { name: 'הדר שחר פז', role: 'סגן', phone: '054-4251952' },
          ],
        },
        {
          id: 'ops',
          title: 'מטה תפעול ומתנדבים',
          color: 'bg-amber-50',
          borderColor: 'border-amber-300',
          textColor: 'text-amber-800',
          people: [
            { name: 'אפרת ברוך', role: 'ראש מטה', phone: '052-4680330' },
            { name: 'מלי גניש', role: 'סגן + לוגיסטיקה', phone: '052-2921818' },
            { name: 'אתי יוזף', role: 'חמ"ל מתנדבים', phone: '052-5799082' },
          ],
        },
        {
          id: 'seniors',
          title: 'מטה אזרחים ותיקים',
          color: 'bg-emerald-50',
          borderColor: 'border-emerald-300',
          textColor: 'text-emerald-800',
          people: [
            { name: 'גילה גלעדי', role: 'ראש מטה', phone: '052-5799058' },
            { name: 'ספי אביב', role: 'סגן', phone: '054-6460570' },
          ],
        },
        {
          id: 'aliya',
          title: 'מטה קליטת עלייה',
          color: 'bg-sky-50',
          borderColor: 'border-sky-300',
          textColor: 'text-sky-800',
          people: [
            { name: 'בני אמר', role: 'ראש מטה', phone: '052-6398920' },
          ],
        },
        {
          id: 'tourism',
          title: 'מטה תיירות',
          color: 'bg-rose-50',
          borderColor: 'border-rose-300',
          textColor: 'text-rose-800',
          people: [
            { name: 'אולגה לורייה', role: 'ראש מטה', phone: '054-3355359' },
            { name: 'עדנה שפיצר', role: 'סגן', phone: '054-3451816' },
          ],
        },
        {
          id: 'health',
          title: 'מטה בריאות',
          color: 'bg-lime-50',
          borderColor: 'border-lime-300',
          textColor: 'text-lime-800',
          people: [
            { name: 'שלומי רוקח', role: 'ראש מטה', phone: '052-3684242' },
          ],
        },
      ],
    },
  ],
};

// Support staff rendered separately
const SUPPORT_STAFF = [
  { unit: 'מיון פניות', name: 'ענת עשור', phone: '052-6404403' },
  { unit: 'מערכות מידע', name: 'בני שכטר', phone: '052-2452270' },
  { unit: 'מערכות מידע', name: 'לוציאנה', phone: '050-6400205' },
  { unit: 'פרסום ומידע', name: 'רויטל נחמיאס', phone: '054-4922372' },
  { unit: 'משאבי אנוש', name: 'חגית אביב', phone: '050-7233665' },
  { unit: 'משאבי אנוש', name: 'רויטל רש', phone: '050-3808184' },
  { unit: 'מרכז ט.ל.י.ה', name: 'צפי גלובין', phone: '054-4501520' },
];

function OrgNode({ node, depth = 0 }: { node: OrgUnit; depth?: number }) {
  const [expanded, setExpanded] = useState(depth < 2);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="animate-fadeIn">
      <button
        onClick={() => setExpanded(!expanded)}
        aria-expanded={hasChildren ? expanded : undefined}
        aria-label={node.title}
        className={`w-full ${node.color} border-2 ${node.borderColor} rounded-xl p-3 text-right transition-all duration-300 hover:shadow-lg ${
          depth === 0 ? 'mb-4' : ''
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex-1 min-w-0">
            <div className={`font-bold text-sm ${node.textColor}`}>{node.title}</div>
            {node.people.length > 0 && (
              <div className="mt-1.5 space-y-0.5">
                {node.people.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs">
                    <span className={`${depth === 0 ? 'text-white/80' : 'text-gray-600'}`}>
                      {p.name}{p.role ? ` – ${p.role}` : ''}
                    </span>
                    {p.phone && (
                      <a
                        href={`tel:${p.phone}`}
                        onClick={e => e.stopPropagation()}
                        className={`flex items-center gap-0.5 ${depth === 0 ? 'text-white/70 hover:text-white' : 'text-blue-500 hover:text-blue-700'} hover:underline`}
                        dir="ltr"
                      >
                        <Phone size={10} />
                        {p.phone}
                      </a>
                    )}
                  </div>
                ))}
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
          {SUPPORT_STAFF.map((s, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-xl p-3 hover:shadow-md transition-shadow">
              <div className="text-xs text-gray-400 mb-1">{s.unit}</div>
              <div className="font-bold text-gray-900 text-sm">{s.name}</div>
              {s.phone && (
                <a href={`tel:${s.phone}`} className="flex items-center gap-1 text-blue-500 text-xs mt-1 hover:underline" dir="ltr">
                  <Phone size={11} />
                  {s.phone}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

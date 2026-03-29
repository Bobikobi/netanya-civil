'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { Incident, IncidentStatus, IncidentType } from '../types';
import { formatTimeAgo } from '../lib/utils';
import { Flame, Waves, Car, Zap, Wind, Shield, AlertCircle, Plus, Loader2 } from 'lucide-react';
import Link from 'next/link';

const TYPE_LABELS: Record<IncidentType, string> = {
  fire: 'שריפה',
  flood: 'הצפה',
  road_hazard: 'מפגע בכביש',
  power_outage: 'הפסקת חשמל',
  gas_leak: 'דליפת גז',
  security: 'אירוע ביטחוני',
  other: 'אחר',
};

const TYPE_ICONS: Record<IncidentType, React.ComponentType<{ className?: string; size?: number }>> = {
  fire: Flame,
  flood: Waves,
  road_hazard: Car,
  power_outage: Zap,
  gas_leak: Wind,
  security: Shield,
  other: AlertCircle,
};

const STATUS_BADGE: Record<Exclude<IncidentStatus, 'closed'>, { label: string; classes: string }> = {
  open: { label: 'פתוח', classes: 'bg-red-600 text-white' },
  in_progress: { label: 'בטיפול', classes: 'bg-yellow-400 text-gray-900' },
};

export default function HomePage() {
  const [incidents, setIncidents] = useState<Incident[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchIncidents() {
    const { data } = await supabase
      .from('incidents')
      .select('*')
      .not('status', 'eq', 'closed')
      .order('created_at', { ascending: false });
    setIncidents(data ?? []);
    setLoading(false);
  }

  useEffect(() => {
    fetchIncidents();
    const interval = setInterval(fetchIncidents, 30000);
    return () => clearInterval(interval);
  }, []);

  const openCount = incidents.filter(i => i.status === 'open').length;
  const inProgressCount = incidents.filter(i => i.status === 'in_progress').length;

  if (loading) {
    return (
      <div className="flex items-center justify-center py-24">
        <Loader2 className="animate-spin text-blue-700" size={48} />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-4 text-lg font-medium">
          <span>🟢 {openCount} אירועים פתוחים</span>
          <span className="text-gray-400">|</span>
          <span>🟡 {inProgressCount} בטיפול</span>
        </div>
        <Link
          href="/report"
          className="flex items-center gap-1 bg-blue-700 hover:bg-blue-800 text-white px-4 py-2 rounded font-medium transition-colors"
        >
          דווח על אירוע חדש <Plus size={18} />
        </Link>
      </div>

      {incidents.length === 0 ? (
        <div className="text-center py-20 text-2xl text-green-600 font-medium">
          אין אירועים פעילים כרגע ✅
        </div>
      ) : (
        <div className="space-y-4">
          {incidents.map(incident => {
            const Icon = TYPE_ICONS[incident.type];
            const badge = STATUS_BADGE[incident.status as Exclude<IncidentStatus, 'closed'>];
            return (
              <div key={incident.id} className="bg-white rounded-lg shadow p-4 flex gap-4 items-start">
                <div className="flex-shrink-0 mt-1">
                  <Icon className="text-blue-700" size={28} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-lg">{TYPE_LABELS[incident.type]}</span>
                    {badge && (
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${badge.classes}`}>
                        {badge.label}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-700 truncate">
                    <b>כתובת:</b> {incident.address}
                  </div>
                  <div className="text-gray-600 truncate">
                    <b>תיאור:</b>{' '}
                    {incident.description.length > 100
                      ? incident.description.slice(0, 100) + '…'
                      : incident.description}
                  </div>
                  <div className="text-gray-400 text-xs mt-1">
                    {formatTimeAgo(incident.created_at)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

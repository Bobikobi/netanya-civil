'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { supabase } from '../../lib/supabase';
import { useState } from 'react';
import { Toaster, toast } from 'sonner';
import Link from 'next/link';

const INCIDENT_TYPES = [
  { value: 'fire', label: 'שריפה' },
  { value: 'flood', label: 'הצפה' },
  { value: 'road_hazard', label: 'מפגע בכביש' },
  { value: 'power_outage', label: 'הפסקת חשמל' },
  { value: 'gas_leak', label: 'דליפת גז' },
  { value: 'security', label: 'אירוע ביטחוני' },
  { value: 'other', label: 'אחר' },
];

const phoneRegex = /^05\d{8}$/;

const schema = z.object({
  type: z.string().min(1, 'יש לבחור סוג אירוע'),
  address: z.string().min(1, 'יש להזין כתובת'),
  description: z.string().min(10, 'יש להזין תיאור מפורט (לפחות 10 תווים)'),
  reporter_phone: z.string().optional().refine(
    val => !val || phoneRegex.test(val),
    { message: 'מספר טלפון לא תקין (ישראלי)' }
  ),
});

type FormData = z.infer<typeof schema>;

export default function ReportPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setError(null);
    setSuccess(null);
    const { data: incident, error } = await supabase
      .from('incidents')
      .insert([{ ...data }])
      .select('id')
      .single();
    if (error) {
      setError(error.message);
      toast.error('אירעה שגיאה בשליחת הדיווח');
    } else {
      setSuccess(incident.id);
      toast.success('הדיווח נשלח בהצלחה!');
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh]">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded shadow p-8 w-full max-w-lg space-y-6 text-right">
        <h1 className="text-2xl font-bold mb-4">דיווח על אירוע חירום</h1>
        <div>
          <label className="block mb-1 font-medium">סוג אירוע</label>
          <select {...register('type')} className="w-full border rounded px-3 py-2">
            <option value="">בחר סוג אירוע</option>
            {INCIDENT_TYPES.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
          {errors.type && <div className="text-red-600 text-sm mt-1">{errors.type.message}</div>}
        </div>
        <div>
          <label className="block mb-1 font-medium">כתובת</label>
          <input {...register('address')} className="w-full border rounded px-3 py-2" />
          {errors.address && <div className="text-red-600 text-sm mt-1">{errors.address.message}</div>}
        </div>
        <div>
          <label className="block mb-1 font-medium">תיאור</label>
          <textarea {...register('description')} className="w-full border rounded px-3 py-2 min-h-[80px]" />
          {errors.description && <div className="text-red-600 text-sm mt-1">{errors.description.message}</div>}
        </div>
        <div>
          <label className="block mb-1 font-medium">טלפון (אופציונלי)</label>
          <input {...register('reporter_phone')} className="w-full border rounded px-3 py-2" placeholder="05XXXXXXXX" />
          {errors.reporter_phone && <div className="text-red-600 text-sm mt-1">{errors.reporter_phone.message}</div>}
        </div>
        {error && <div className="bg-red-100 text-red-700 p-2 rounded text-sm">{error}</div>}
        {success ? (
          <div className="bg-green-100 text-green-700 p-3 rounded text-center">
            הדיווח נשלח בהצלחה ✅<br />
            מזהה אירוע: <b>{success.slice(0,8)}</b><br />
            <Link href="/" className="inline-block mt-3 bg-blue-700 text-white px-4 py-2 rounded">חזור לדף הבית</Link>
          </div>
        ) : (
          <button type="submit" className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded flex items-center justify-center gap-2" disabled={isSubmitting}>
            {isSubmitting && <span className="loader border-white border-2 mr-2"></span>}
            שלח דיווח
          </button>
        )}
      </form>
      <Toaster richColors position="top-center" />
      <style>{`.loader { border-radius: 50%; width: 18px; height: 18px; border-top: 2px solid #fff; border-right: 2px solid #fff; border-bottom: 2px solid #fff; border-left: 2px solid #3b82f6; animation: spin 1s linear infinite; display: inline-block; } @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  );
}

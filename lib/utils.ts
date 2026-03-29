import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(...inputs));
}

const HEBREW_LABELS: Record<string, string> = {
  minute: 'דקה',
  minutes: 'דקות',
  hour: 'שעה',
  hours: 'שעות',
  day: 'יום',
  days: 'ימים',
};

export function formatTimeAgo(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffMins = Math.floor(diffMs / 60000);
  if (diffMins < 1) return 'הרגע';
  if (diffMins < 60) return `לפני ${diffMins} ${diffMins === 1 ? HEBREW_LABELS['minute'] : HEBREW_LABELS['minutes']}`;
  const diffHours = Math.floor(diffMins / 60);
  if (diffHours < 24) return `לפני ${diffHours} ${diffHours === 1 ? HEBREW_LABELS['hour'] : HEBREW_LABELS['hours']}`;
  const diffDays = Math.floor(diffHours / 24);
  return `לפני ${diffDays} ${diffDays === 1 ? HEBREW_LABELS['day'] : HEBREW_LABELS['days']}`;
}

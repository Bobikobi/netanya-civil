'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Heart, Users, MessageSquare, HelpCircle, ArrowRight } from 'lucide-react';

const NAV_ITEMS = [
  { href: '/emergency', label: 'דף הבית', icon: Home },
  { href: '/emergency/mashe', label: 'מודל מעש״ה', icon: Heart },
  { href: '/emergency/teams', label: 'צוותי חירום', icon: Users },
  { href: '/emergency/scripts', label: 'תסריטי שיחה', icon: MessageSquare },
  { href: '/emergency/faq', label: 'שאלות ותשובות', icon: HelpCircle },
];

export default function EmergencyLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Top Header */}
      <header className="bg-gradient-to-l from-blue-900 to-blue-800 text-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 rounded-full p-2">
              <Users size={28} />
            </div>
            <div>
              <h1 className="text-xl font-bold leading-tight">צוותי חירום</h1>
              <p className="text-blue-200 text-sm">אגף שירותים חברתיים · עיריית נתניה</p>
            </div>
          </div>
          <Link
            href="/"
            className="flex items-center gap-1 text-blue-200 hover:text-white transition-colors text-sm"
          >
            חזרה לאתר הראשי
            <ArrowRight size={16} />
          </Link>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex gap-1 overflow-x-auto py-2">
            {NAV_ITEMS.map(item => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-blue-100 text-blue-800'
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                  }`}
                >
                  <Icon size={16} />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Page Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-800 text-slate-300 py-6 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm space-y-1">
          <p className="font-medium text-white">אגף השירותים החברתיים · עיריית נתניה</p>
          <p>כלי לריענון ותרגול צוותי חירום · אין להסתמך כתחליף לנהלים רשמיים</p>
        </div>
      </footer>
    </div>
  );
}

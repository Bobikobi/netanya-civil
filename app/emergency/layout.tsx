'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Heart, Users, MessageSquare, HelpCircle, ChevronLeft } from 'lucide-react';
import React from 'react';

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
    <div dir="rtl" className="min-h-screen bg-[#0f172a] text-white">
      {/* Sticky top navigation */}
      <nav className="sticky top-0 z-50 bg-[#1e293b]/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide">
              {NAV_ITEMS.map(item => {
                const isActive = pathname === item.href;
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'bg-white/15 text-white'
                        : 'text-white/60 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <Icon size={15} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
            <Link
              href="/"
              className="flex items-center gap-1 text-white/50 hover:text-white transition-colors text-xs whitespace-nowrap mr-2"
            >
              לאתר הראשי
              <ChevronLeft size={14} />
            </Link>
          </div>
        </div>
      </nav>

      {/* Page content */}
      <main className="max-w-5xl mx-auto px-4 py-10 animate-fadeIn">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-6 mt-16">
        <div className="max-w-5xl mx-auto px-4 text-center text-sm space-y-1">
          <p className="text-white/70 font-medium">אגף השירותים החברתיים · עיריית נתניה</p>
          <p className="text-white/40 text-xs">כלי לריענון ותרגול צוותי חירום · אין להסתמך כתחליף לנהלים רשמיים</p>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { opacity: 0; max-height: 0; }
          to { opacity: 1; max-height: 800px; }
        }
        @keyframes pulseArrow {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(4px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out;
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out forwards;
          overflow: hidden;
        }
        .animate-pulseArrow {
          animation: pulseArrow 1.5s ease-in-out infinite;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .card-hover {
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .card-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
}

import Link from 'next/link';
import { Plus, Shield } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 bg-[#1a3c6e] flex items-center justify-between" dir="rtl">
      <div className="flex-1">
        <span className="text-white font-bold text-lg">עיריית נתניה <span className="mx-2">|</span> מגן אזרחי</span>
      </div>
      <div className="flex items-center gap-3">
        <Link href="/emergency" className="flex items-center gap-1 text-blue-200 hover:text-white font-medium px-3 py-2 rounded transition-colors">
          <Shield size={18} />
          צוותי חירום
        </Link>
        <Link href="/report" className="flex items-center gap-1 text-white font-medium bg-blue-700 hover:bg-blue-800 px-4 py-2 rounded transition-colors">
          דווח על אירוע <Plus size={18} />
        </Link>
      </div>
    </nav>
  );
}

import { BookOpen, Moon, Sun, Search } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-200">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">আমার ডায়েরি</span>
        </Link>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-all">
            <Search className="w-5 h-5" />
          </button>
          {/* ডার্ক মোড টগল এখানে বসবে */}
          <div className="h-6 w-[1px] bg-gray-200 dark:bg-gray-700 mx-1"></div>
          <button className="p-2 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">
            <Moon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
}

import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface BookCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export default function BookCard({ id, title, excerpt, date, readTime }: BookCardProps) {
  return (
    <div className="group bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 p-6 rounded-[2rem] shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
      <div className="flex items-center gap-3 text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-3">
        <Calendar className="w-3 h-3" /> {date}
        <span className="text-gray-300">•</span>
        <Clock className="w-3 h-3" /> {readTime} পড়া যাবে
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      
      <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
        {excerpt}
      </p>

      <Link 
        href={`/book/${id}`} 
        className="inline-flex items-center gap-2 text-sm font-bold text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform"
      >
        সম্পূর্ণ পড়ুন <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

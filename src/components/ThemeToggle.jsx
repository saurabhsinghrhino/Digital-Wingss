import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 bg-slate-100 hover:bg-slate-200 dark:bg-navy-light dark:hover:bg-slate-800 border border-slate-200/80 dark:border-white/10 shadow-sm hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-blue focus:ring-offset-2 dark:focus:ring-offset-navy-dark ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-4 h-4 md:w-5 md:h-5 flex items-center justify-center overflow-hidden">
        {/* Sun Icon (Dark Mode Active) */}
        <Sun
          className={`w-4 h-4 md:w-5 md:h-5 text-amber-400 transition-all duration-500 transform absolute ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-0 opacity-0'
          }`}
          aria-hidden="true"
        />

        {/* Moon Icon (Light Mode Active) */}
        <Moon
          className={`w-4 h-4 md:w-5 md:h-5 text-navy-medium transition-all duration-500 transform absolute ${
            !isDark
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-0 opacity-0'
          }`}
          aria-hidden="true"
        />
      </div>
    </button>
  );
}

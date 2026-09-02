import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ num, title, id, shortDesc, capabilities }) {
  return (
    <div
      className="group relative border border-navy-medium/10 dark:border-white/10 bg-white dark:bg-slate-900/90 p-8 md:p-10 flex flex-col justify-between hover:bg-navy-medium dark:hover:bg-navy-light hover:border-navy-medium dark:hover:border-brand-blue transition-all duration-500 ease-out min-h-[300px] overflow-hidden"
    >
      {/* Glow highlight on card hover */}
      <div className="absolute -inset-full bg-radial from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

      <div>
        {/* Top bar with index number and minimal icon */}
        <div className="flex items-center justify-between mb-8">
          <span className="text-sm font-extrabold text-brand-blue tracking-widest">{num}</span>
          <div className="w-8 h-8 rounded-full border border-navy-medium/10 dark:border-white/20 group-hover:border-white/20 flex items-center justify-center transition-colors duration-300">
            <ArrowUpRight className="w-4 h-4 text-navy-medium dark:text-slate-200 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45" />
          </div>
        </div>

        {/* Heading */}
        <h3 className="text-2xl font-bold text-navy-medium dark:text-white group-hover:text-white transition-colors duration-300 tracking-tight mb-4">
          {title}
        </h3>

        {/* Short static description */}
        <p className="text-sm text-slate-500 dark:text-slate-400 group-hover:text-slate-300 transition-colors duration-300 mb-6 leading-relaxed">
          {shortDesc}
        </p>

        {/* Accordion Expandable area */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
          <div className="overflow-hidden">
            {/* Core Capabilities */}
            <div className="pt-2 border-t border-navy-medium/10 dark:border-white/10 group-hover:border-white/10 flex flex-wrap gap-2 mb-6">
              {capabilities.slice(0, 3).map((cap, index) => (
                <span
                  key={index}
                  className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-ice-accent dark:bg-slate-800 text-navy-medium dark:text-slate-200 rounded-none group-hover:bg-white/10 group-hover:text-white transition-colors"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Button link aligned at bottom */}
      <div className="mt-8">
        <Link
          to={`/services/${id}`}
          className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-blue group-hover:text-white transition-colors duration-300"
        >
          <span>Explore Service</span>
          <span className="transform transition-transform group-hover:translate-x-1 duration-300">→</span>
        </Link>
      </div>
    </div>
  );
}

import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function ProjectCard({
  title,
  category,
  imageUrl,
  url,
  sizeClass = "col-span-1",
}) {
  return (
    <div
      className={`group relative overflow-hidden bg-navy-medium ${sizeClass} aspect-video lg:aspect-[4/3] flex flex-col justify-end p-8 md:p-10 transition-all duration-500`}
    >
      {/* Background Image Container */}
      <div
        className="absolute inset-0 z-0"
        onClick={() => {
          window.open(url, "_blank");
        }}
      >
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-105"
        />
        {/* Navy Blue overlay */}
        <div className="absolute inset-0 bg-navy-medium/60 group-hover:bg-navy-dark/85 transition-colors duration-500 z-1"></div>
      </div>

      {/* Decorative Ice-blue Highlight bar */}
      <div className="absolute left-0 bottom-0 w-1 h-0 bg-brand-blue group-hover:h-full transition-all duration-500 z-2"></div>

      {/* Content */}
      <div className="relative z-10 flex items-end justify-between translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-brand-blue mb-2 block">
            {category}
          </span>
          <h4 className="text-2xl font-bold text-white tracking-tight">
            {title}
          </h4>
        </div>
        <div
          onClick={() => {
            window.open(url, "_blank");
          }}
          className="w-12 h-12 bg-white/10 group-hover:bg-brand-blue rounded-full cursor-pointer flex items-center justify-center text-white transition-all duration-300 transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100"
        >
          <ArrowUpRight className="w-5 h-5 transition-transform duration-300 transform group-hover:rotate-45 " />
        </div>
      </div>
    </div>
  );
}

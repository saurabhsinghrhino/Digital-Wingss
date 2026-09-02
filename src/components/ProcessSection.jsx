import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ProcessSection() {
  const containerRef = useRef(null);
  const progressLineRef = useRef(null);

  const steps = [
    { num: '01', title: 'Discover', desc: 'We align on business goals, map user needs, audit competitors, and establish a foundational project scope.' },
    { num: '02', title: 'Strategize', desc: 'Crafting digital roadmaps, tech-stack architecture, sitemaps, conversion funnels, and design principles.' },
    { num: '03', title: 'Create', desc: 'Designing custom user interfaces, brand-focused graphics, editorial layouts, and visual prototypes.' },
    { num: '04', title: 'Build', desc: 'Engineering modular, high-speed code with React, Tailwind, and scalable backend integrations.' },
    { num: '05', title: 'Testing', desc: 'Iterative QA testing across browsers, responsive checks, load testing, and technical SEO deployment.' },
    { num: '06', title: 'Grow', desc: 'Continuous optimization, organic ranking management, ad campaigns, and long-term scale guidance.' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical scroll progress line height
      gsap.fromTo(
        progressLineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 50%',
            end: 'bottom 70%',
            scrub: true,
          },
        }
      );

      // Animate individual process items as they come into view
      const stepItems = containerRef.current.querySelectorAll('.process-item');
      stepItems.forEach((item) => {
        const marker = item.querySelector('.process-marker');
        const text = item.querySelector('.process-text');

        gsap.fromTo(
          [marker, text],
          { opacity: 0.15, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            scrollTrigger: {
              trigger: item,
              start: 'top 75%',
              end: 'top 45%',
              toggleActions: 'play reverse play reverse',
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-24 bg-white dark:bg-navy-dark relative overflow-hidden grid-bg transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
            Our Workflow
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy-medium dark:text-white tracking-tight">
            From Idea to Impact.
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Our systematic approach eliminates guesswork. We combine research, technical architecture, and creative strategy to drive consistent results.
          </p>
        </div>

        {/* Process Steps Containers */}
        <div className="relative pl-6 md:pl-12 max-w-4xl mx-auto">
          {/* Vertical progress line background */}
          <div className="absolute left-[7.5px] md:left-[13.5px] top-4 bottom-4 w-[3px] bg-slate-100 dark:bg-slate-800 rounded-full"></div>
          
          {/* Animated vertical progress line */}
          <div
            ref={progressLineRef}
            className="absolute left-[7.5px] md:left-[13.5px] top-4 bottom-4 w-[3px] bg-brand-blue rounded-full origin-top"
          ></div>

          {/* Process step items */}
          <div className="space-y-16">
            {steps.map((step, idx) => (
              <div key={idx} className="process-item flex items-start relative pl-10 md:pl-16">
                
                {/* Node Marker */}
                <div className="process-marker absolute left-0 top-1 w-[18px] h-[18px] md:w-[30px] md:h-[30px] rounded-full bg-white dark:bg-slate-900 border-2 border-slate-300 dark:border-slate-700 flex items-center justify-center z-10 transition-colors duration-300">
                  <div className="w-[8px] h-[8px] md:w-[12px] md:h-[12px] rounded-full bg-slate-300 dark:bg-slate-600"></div>
                </div>

                {/* Content Box */}
                <div className="process-text flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-2">
                    <span className="text-lg md:text-xl font-extrabold text-brand-blue font-mono">
                      {step.num}
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold text-navy-medium dark:text-white tracking-tight">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

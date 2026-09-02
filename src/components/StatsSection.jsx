import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function StatsSection() {
  const containerRef = useRef(null);
  const counterNodes = useRef([]);

  // Configurable statistics array - easily modify values, prefixes, and suffixes here
  const statsData = [
    {
      value: 400,
      prefix: "",
      suffix: "+",
      label: "Projects Completed",
    },
    {
      value: 2,
      prefix: "",
      suffix: "+",
      label: "Years of Experience",
    },
    {
      value: 1,
      prefix: "₹",
      suffix: "Cr+",
      label: "Revenue Generated",
    },
    {
      value: 250,
      prefix: "",
      suffix: "+",
      label: "Happy Clients",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if the user has requested reduced motion to disable counter animations
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    // Setup GSAP animation context for clean cleanup
    const ctx = gsap.context(() => {
      // 1. Initial Staggered Entrance Animation for cards
      gsap.fromTo(
        ".stats-card",
        { opacity: 0, y: 40, scale: 0.97 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            once: true,
          },
        },
      );

      // 2. Numerical Counter Animation (interpolates numerical values)
      if (prefersReducedMotion) {
        statsData.forEach((stat, idx) => {
          const node = counterNodes.current[idx];
          if (node) {
            node.innerText = `${stat.prefix}${stat.value}${stat.suffix}`;
          }
        });
      } else {
        statsData.forEach((stat, idx) => {
          const node = counterNodes.current[idx];
          if (!node) return;

          const countObj = { val: 0 };

          gsap.to(countObj, {
            val: stat.value,
            duration: 1.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: container,
              start: "top 75%",
              once: true,
            },
            onUpdate: () => {
              node.innerText = `${stat.prefix}${Math.floor(countObj.val)}${stat.suffix}`;
            },
          });
        });
      }
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white dark:bg-navy-dark relative overflow-hidden grid-bg border-t border-navy-medium/5 dark:border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading & Subtitle */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
            Our Legacy
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy-medium dark:text-white tracking-tight">
            DigitalWings by the Numbers.
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
            From ambitious ideas to measurable digital results, our work is
            defined by the projects we've delivered, relationships we've built,
            and growth we've helped create.
          </p>
        </div>

        {/* Responsive Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, idx) => (
            <div
              key={idx}
              className="stats-card bg-slate-50/50 dark:bg-slate-900/60 p-8 md:p-10 border border-navy-medium/5 dark:border-white/10 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col justify-between min-h-[180px] relative overflow-hidden"
            >
              {/* Subtle top decoration divider line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-100 dark:bg-slate-800 group-hover:bg-brand-blue transition-colors"></div>

              <div>
                {/* Numeric Counter Holder */}
                <div className="text-5xl md:text-6xl font-extrabold text-navy-medium dark:text-slate-100 tracking-tighter mb-4">
                  <span
                    ref={(el) => (counterNodes.current[idx] = el)}
                    className="inline-block"
                  >
                    {stat.prefix}0{stat.suffix}
                  </span>
                </div>

                {/* Subtitle / Descriptive Label */}
                <h3 className="text-xs uppercase font-extrabold tracking-widest text-slate-400 dark:text-slate-400 font-sans leading-relaxed">
                  {stat.label}
                </h3>
              </div>

              {/* Decorative Ice-blue indicator node */}
              <div className="w-6 h-1 bg-brand-blue/30 mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

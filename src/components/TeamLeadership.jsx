import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function TeamLeadership() {
  const sectionRef = useRef(null);

  const leaders = [
    {
      name: "GYAN SINGH",
      role: "Chairman & Founder",
      image: "/Co-Founder.png",
      description:
        "As the Founder & Chairman, he provides the vision, values, and strategic direction that drive the company's long-term growth and success.",
    },
    {
      name: "SAURABH SINGH",
      role: "CTO & Co-Founder",
      image: "/CTO.png",
      description:
        "Saurabh Singh is the Chief Technology Officer at DigitalWings, driving end-to-end technical strategy across web engineering, application development, and IT infrastructure. Focused on turning complex business requirements into high-value digital solutions, Saurabh Singh leads the technical teams to engineer secure, scalable, and optimized platforms built to drive measurable business outcomes.",
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // 1. Header and title animations
      gsap.fromTo(
        ".lead-header",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            once: true,
          },
        },
      );

      // 2. Profile visual reveal
      gsap.fromTo(
        ".lead-portrait-reveal",
        { opacity: 0, scale: 0.98, y: 40 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: section,
            start: "top 70%",
            once: true,
          },
        },
      );

      // 3. Staggered details animation
      gsap.fromTo(
        ".lead-details-stagger",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: section,
            start: "top 65%",
            once: true,
          },
        },
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const isSingleFounder = leaders.length === 1;

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-white dark:bg-navy-dark border-t border-navy-medium/10 dark:border-white/10 relative overflow-hidden transition-colors duration-300"
    >
      {/* Visual background details */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-ice-accent/30 dark:bg-brand-blue/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-20 lead-header">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
            Leadership
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-navy-medium dark:text-white tracking-tight">
            Meet the Leadership.
          </h2>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Behind DigitalWings is a team driven by technology, creativity, and
            a commitment to helping businesses grow in the digital world.
          </p>
        </div>

        {isSingleFounder ? (
          /* ================= SINGLE FOUNDER SPLIT LAYOUT ================= */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Left: Large Portrait Image */}
            <div className="lg:col-span-5 lead-portrait-reveal">
              <div className="relative group overflow-hidden border border-navy-medium/10 dark:border-white/10 aspect-[4/5] bg-slate-100 dark:bg-slate-900 rounded-none shadow-md">
                <img
                  src={leaders[0].image}
                  alt={`DigitalWings CEO and Co-Founder ${leaders[0].name}`}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-brand-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-full h-[4px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            </div>

            {/* Right: Detailed Content and CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="lead-details-stagger">
                <h4 className="text-xl font-extrabold text-navy-medium/80 dark:text-slate-200 tracking-tight italic leading-relaxed">
                  "Building Digital Experiences That Move Businesses Forward."
                </h4>
              </div>

              <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed lead-details-stagger">
                {leaders[0].description}
              </p>

              {/* Connect Block & Social Icons */}
              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100 dark:border-slate-800 lead-details-stagger">
                {leaders[0].linkedin && (
                  <a
                    href={leaders[0].linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Connect with ${leaders[0].name} on LinkedIn`}
                    className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-navy-medium dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-blue transition-colors outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <Linkedin className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>LinkedIn</span>
                  </a>
                )}

                {leaders[0].email && (
                  <a
                    href={`mailto:${leaders[0].email}`}
                    aria-label={`Email ${leaders[0].name} at ${leaders[0].email}`}
                    className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-navy-medium dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-blue transition-colors outline-none focus:ring-2 focus:ring-brand-blue"
                  >
                    <Mail className="w-4 h-4 text-brand-blue shrink-0" />
                    <span>Send Email</span>
                  </a>
                )}

                <div className="ml-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center space-x-2 px-6 py-3 bg-navy-medium dark:bg-brand-blue text-white hover:bg-brand-blue dark:hover:bg-sky-400 text-[10px] font-extrabold uppercase tracking-widest transition-colors duration-300"
                  >
                    <span>Connect With Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* ================= MULTI-FOUNDER GRID LAYOUT ================= */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12">
            {leaders.map((leader, idx) => (
              <div
                key={idx}
                className="lead-portrait-reveal flex flex-col space-y-6"
              >
                {/* Portrait Card */}
                <div className="relative group overflow-hidden border border-navy-medium/5 dark:border-white/10 aspect-[4/5] bg-slate-50 dark:bg-slate-900 rounded-none shadow-sm hover:shadow-md transition-shadow">
                  <img
                    src={leader.image}
                    alt={`DigitalWings ${leader.role} ${leader.name}`}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-103"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 w-full h-[4px] bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </div>

                {/* Details info */}
                <div className="space-y-3">
                  <div>
                    <h3 className="text-xl font-bold text-navy-medium dark:text-white leading-none">
                      {leader.name}
                    </h3>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue block mt-2">
                      {leader.role}
                    </span>
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                    {leader.description}
                  </p>

                  {/* Social Buttons */}
                  <div className="flex items-center space-x-4 pt-2">
                    {leader.linkedin && (
                      <a
                        href={leader.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Connect with ${leader.name} on LinkedIn`}
                        className="text-navy-medium dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors outline-none"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {leader.email && (
                      <a
                        href={`mailto:${leader.email}`}
                        aria-label={`Email ${leader.name}`}
                        className="text-navy-medium dark:text-slate-300 hover:text-brand-blue dark:hover:text-brand-blue transition-colors outline-none"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

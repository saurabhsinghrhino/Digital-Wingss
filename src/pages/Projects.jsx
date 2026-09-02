import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { projectsData } from "../data/projects";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const galleryRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects Showcase | DigitalWings";
  }, []);

  // GSAP animation on filter change to animate matching cards
  useEffect(() => {
    const cards = galleryRef.current?.querySelectorAll(".project-card-item");
    if (cards && cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" },
      );
    }
  }, [activeFilter]);

  const categories = [
    "All",
    "Websites",
    "Applications",
    "SEO",
    "Marketing",
    "Creative",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeFilter);

  const featuredProject = filteredProjects[0];
  const gridProjects = filteredProjects.slice(1);

  return (
    <div className="w-full pt-36 pb-24 bg-white dark:bg-navy-dark min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Projects Page Hero */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-navy-medium dark:text-white tracking-tight leading-tight">
            Digital Work Built To Make An Impact.
          </h1>
          <p className="mt-6 text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
            Explore selected digital products, responsive websites, scalable
            mobile applications, and growth campaigns engineered by
            DigitalWings.
          </p>
        </div>

        {/* Minimal Filters Menu */}
        <div className="flex flex-wrap gap-2.5 mb-16 border-b border-navy-medium/10 dark:border-white/10 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeFilter === cat
                  ? "bg-navy-medium dark:bg-brand-blue text-white shadow-sm"
                  : "bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-navy-medium dark:text-slate-200 hover:border-navy-medium dark:hover:border-brand-blue hover:bg-white dark:hover:bg-slate-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Showcase Area */}
        <div ref={galleryRef} className="space-y-16">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-navy-medium/10 dark:border-white/10">
              <p className="text-slate-400 text-sm">
                No projects matching this category at the moment.
              </p>
            </div>
          ) : (
            <>
              {/* FEATURED PROJECT BLOCK */}
              {featuredProject && (
                <div className="project-card-item grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border border-navy-medium/10 dark:border-white/10 p-6 md:p-8 bg-slate-50/20 dark:bg-slate-900/60 group">
                  {/* Image side */}
                  <div className="lg:col-span-7 aspect-video relative overflow-hidden bg-navy-medium">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-navy-medium/10 group-hover:bg-transparent transition-all duration-300"></div>
                  </div>

                  {/* Text side */}
                  <div className="lg:col-span-5 flex flex-col space-y-5 lg:pl-4">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue">
                      Featured Project &middot; {featuredProject.category}
                    </span>
                    <h3 className="text-3xl font-black text-navy-medium dark:text-white tracking-tight group-hover:text-brand-blue dark:group-hover:text-brand-blue transition-colors duration-300">
                      {featuredProject.title}
                    </h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                      {featuredProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 pt-2 border-t border-navy-medium/10 dark:border-white/10">
                      {featuredProject.services.map((svc, idx) => (
                        <span
                          key={idx}
                          className="text-[9px] uppercase font-bold tracking-wider px-2 py-0.5 bg-ice-accent dark:bg-slate-800 text-navy-medium dark:text-slate-200"
                        >
                          {svc}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-400 dark:text-slate-500">
                        Year: {featuredProject.year}
                      </span>
                      <Link
                        to={featuredProject.link}
                        className="inline-flex items-center space-x-2 text-xs font-extrabold uppercase tracking-widest text-brand-blue group"
                      >
                        <span>View Case Study</span>
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* ASYMMETRIC SECONDARY GRID */}
              {gridProjects.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {gridProjects.map((proj, idx) => {
                    let sizeClass = "col-span-1";
                    if (idx % 3 === 0) {
                      sizeClass = "col-span-1 md:col-span-2";
                    }
                    return (
                      <div
                        key={proj.id}
                        className={`project-card-item border border-navy-medium/10 dark:border-white/10 bg-white dark:bg-slate-900/80 flex flex-col justify-between group overflow-hidden ${sizeClass}`}
                      >
                        <div>
                          {/* Image wrapper */}
                          <div className="aspect-video relative overflow-hidden bg-navy-medium">
                            <img
                              src={proj.image}
                              alt={proj.title}
                              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-navy-medium/10"></div>
                          </div>

                          {/* Info area */}
                          <div className="p-6 md:p-8 space-y-4">
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-blue">
                                {proj.category}
                              </span>
                              <span className="text-[10px] font-bold text-slate-400 dark:text-slate-500">
                                {proj.year}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-navy-medium dark:text-white group-hover:text-brand-blue dark:group-hover:text-brand-blue transition-colors duration-300 tracking-tight">
                              {proj.title}
                            </h4>
                            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                              {proj.description}
                            </p>

                            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-navy-medium/10 dark:border-white/10">
                              {proj.services.map((svc, sIdx) => (
                                <span
                                  key={sIdx}
                                  className="text-[8px] uppercase font-bold tracking-wider px-2 py-0.5 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-500 dark:text-slate-400"
                                >
                                  {svc}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="p-6 md:px-8 md:pb-8 pt-0 flex justify-end">
                          <Link
                            to={proj.link}
                            className="inline-flex items-center space-x-1.5 text-xs font-extrabold uppercase tracking-widest text-brand-blue"
                          >
                            <span>View Project</span>
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </Link>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {/* Projects Page Bottom CTA Section */}
        <div className="mt-40 p-12 bg-navy-medium text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h3 className="text-3xl font-black tracking-tight">
              Have a project in mind?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              Let's turn your idea into a digital experience that delivers real
              results.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2.5 px-8 py-4 bg-brand-blue text-white hover:bg-brand-hover text-xs font-bold uppercase tracking-widest transition-colors duration-300"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

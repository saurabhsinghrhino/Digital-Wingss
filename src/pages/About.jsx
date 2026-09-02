import React, { useEffect } from "react";
import {
  ArrowRight,
  Compass,
  ShieldCheck,
  Zap,
  HeartHandshake,
} from "lucide-react";
import { Link } from "react-router-dom";
import TeamLeadership from "../components/TeamLeadership";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "About DigitalWings | Digital Solutions & Growth";
  }, []);

  const coreValues = [
    {
      title: "Transparency",
      desc: "We share detailed work trackers and clear ad campaign dashboards. No hidden commissions or confusing charts.",
      icon: Compass,
    },
    {
      title: "Performance",
      desc: "We measure success in qualified leads generated and page load times, not raw page visits or vanity likes.",
      icon: Zap,
    },
    {
      title: "No Code Bloat",
      desc: "We write clean, modular software using components tailored precisely to your company operations.",
      icon: ShieldCheck,
    },
    {
      title: "Active Partnership",
      desc: "We align with your team members daily. When your traffic expands, we monitor servers proactively.",
      icon: HeartHandshake,
    },
  ];

  const galleryImages = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
      tag: "COLLABORATION",
      caption: "Our multidisciplinary review sessions",
    },
    {
      url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
      tag: "ENGINEERING",
      caption: "Writing modular code using React/Tailwind",
    },
    {
      url: "https://i.pinimg.com/736x/bc/41/a7/bc41a721517fb35e470f4415e2453fbe.jpg",
      tag: "WORKSPACE",
      caption: "Our Noida-based creative workspace",
    },
  ];

  return (
    <div className="w-full pt-36 pb-24 bg-white dark:bg-navy-dark min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero Title */}
        <div className="max-w-4xl mb-24">
          <div className="flex items-center space-x-3 mb-6">
            <img
              src="/logo.jpg"
              alt="DigitalWings Logo"
              className="h-6 w-auto object-contain rounded-full"
            />
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
              Our Identity
            </span>
          </div>
          <h1 className="text-4xl md:text-7xl font-black text-navy-medium dark:text-white tracking-tight leading-tight">
            Technology Is Our Tool.
            <br />
            Growth Is Our Goal.
          </h1>
          <p className="mt-8 text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed max-w-3xl">
            DigitalWings was founded in Noida with a singular philosophy: to
            bridge the gap between creative visual designs and clean software
            engineering. We believe digital products should look expensive while
            remaining simple to navigate and run.
          </p>
        </div>

        {/* Asymmetric Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center mb-32">
          <div className="lg:col-span-5 relative aspect-video lg:aspect-[4/5] overflow-hidden border border-navy-medium/10 dark:border-white/10">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
              alt="DigitalWings creative planning"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-medium/10"></div>
          </div>
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <h2 className="text-3xl font-extrabold text-navy-medium dark:text-white tracking-tight">
              How We Think
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              We reject templated corporate websites and generic software
              architectures. In a world full of digital noise, a website or
              application needs to be fast, responsive, and clear in its intent.
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              Our development process aligns directly with your marketing
              efforts. When our creative team produces video content, we ensure
              it maps to optimized landing page layouts built to handle paid
              Meta campaigns or organic SEO crawlers. Everything works together
              as a unified system.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-navy-medium/10 dark:border-white/10 text-navy-medium dark:text-white">
              <div>
                <span className="text-2xl md:text-3xl font-black font-mono text-brand-blue">
                  98%
                </span>
                <p className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mt-1">
                  Client Retention
                </p>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-black font-mono text-brand-blue">
                  4.9s
                </span>
                <p className="text-xs uppercase font-extrabold tracking-widest text-slate-400 mt-1">
                  Average Page Load
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Image Gallery */}
        <div className="mb-32">
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
              Workspace
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-medium dark:text-white tracking-tight">
              Our environment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryImages.map((img, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden bg-navy-medium aspect-video md:aspect-[3/4] flex flex-col justify-end p-6"
              >
                <img
                  src={img.url}
                  alt={img.caption}
                  className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out z-0 opacity-80 group-hover:opacity-95"
                />

                <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-1 bg-brand-blue transition-all duration-300 z-2"></div>

                <div className="relative z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-[9px] font-extrabold tracking-widest text-brand-blue bg-white dark:bg-slate-900 px-2 py-1 inline-block mb-3">
                    {img.tag}
                  </span>
                  <p className="text-sm font-bold text-white leading-tight">
                    {img.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission, Vision, and Values */}
        <div className="py-20 border-t border-navy-medium/10 dark:border-white/10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
              Values
            </span>
            <h2 className="text-3xl font-extrabold text-navy-medium dark:text-white tracking-tight">
              What Guides DigitalWings
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {coreValues.map((val, idx) => {
              const IconComp = val.icon;
              return (
                <div
                  key={idx}
                  className="p-8 border border-navy-medium/10 dark:border-white/10 bg-slate-50/20 dark:bg-slate-900/60 space-y-4"
                >
                  <div className="w-10 h-10 bg-ice-accent dark:bg-slate-800 rounded-full flex items-center justify-center text-brand-blue">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-medium dark:text-white tracking-tight">
                    {val.title}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Meet the Leadership */}
        <TeamLeadership />

        {/* CTA Banner */}
        <div className="mt-20 p-12 bg-navy-medium text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Ready to collaborate?
            </h3>
            <p className="text-sm text-slate-300">
              Tell us about your organization and goals. Let us engineer a
              digital experience that drives growth.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-blue text-white hover:bg-brand-hover text-xs font-bold uppercase tracking-widest transition-colors duration-300"
              >
                <span>Connect With A Strategist</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

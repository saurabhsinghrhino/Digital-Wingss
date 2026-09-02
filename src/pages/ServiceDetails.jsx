import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, HelpCircle } from 'lucide-react';
import { servicesData } from '../data/services';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = servicesData.find((svc) => svc.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (service) {
      document.title = `${service.title} | DigitalWings`;
    } else {
      document.title = 'Service Not Found | DigitalWings';
    }
  }, [service, slug]);

  if (!service) {
    return (
      <div className="w-full min-h-screen pt-48 pb-24 bg-white dark:bg-navy-dark flex flex-col items-center justify-center text-center px-6 transition-colors duration-300">
        <h2 className="text-3xl font-extrabold text-navy-medium dark:text-white mb-4">Service Page Not Found</h2>
        <p className="text-slate-500 dark:text-slate-400 max-w-md mb-8">
          The service you are looking for does not exist or has been restructured. Explore our core services deck below.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center space-x-2 px-6 py-3 bg-navy-medium dark:bg-brand-blue text-white hover:bg-brand-blue dark:hover:bg-sky-400 uppercase tracking-widest text-xs font-extrabold transition-colors duration-300"
        >
          <span>Explore All Services</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    );
  }

  const heroImages = {
    'web-development': 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    'app-development': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    'seo': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    'social-media-marketing': 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=1200&q=80',
    'meta-ads': 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    'promotional-videos': 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
  };

  return (
    <div className="w-full bg-white dark:bg-navy-dark transition-colors duration-300">
      {/* 1. HERO SECTION */}
      <section className="pt-36 pb-20 md:pt-48 md:pb-28 relative overflow-hidden bg-white dark:bg-navy-dark grid-bg border-b border-navy-medium/5 dark:border-white/10 transition-colors duration-300">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">
            <Link to="/services" className="hover:text-brand-blue transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-navy-medium dark:text-slate-100">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            {/* Title / Description */}
            <div className="lg:col-span-7 flex flex-col space-y-6">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue font-mono">
                Service Focus — {service.num}
              </span>
              <h1 className="text-4xl md:text-6xl font-black text-navy-medium dark:text-white tracking-tight leading-none">
                {service.title}
              </h1>
              <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
                {service.longDesc}
              </p>
              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-navy-medium dark:bg-brand-blue text-white hover:bg-brand-blue dark:hover:bg-sky-400 uppercase tracking-widest text-xs font-extrabold transition-colors duration-300"
                >
                  <span>Request an Estimate</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Visual Display */}
            <div className="lg:col-span-5 relative aspect-video lg:aspect-[4/3] overflow-hidden border border-navy-medium/10 dark:border-white/10 shadow-2xl">
              <img
                src={heroImages[service.id] || 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-navy-medium/10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHAT WE DO & CAPABILITIES */}
      <section className="py-24 bg-slate-50 dark:bg-navy-dark border-b border-navy-medium/5 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Detailed analysis */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl font-extrabold text-navy-medium dark:text-white tracking-tight">Our Focus Areas</h2>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              We approach {service.title} not as a checklist, but as a strategic tool to drive customer action. By designing customized strategies aligned to actual user personas, we remove barriers to conversion and maximize efficiency.
            </p>
            <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 leading-relaxed">
              Whether you need to scale existing assets or establish a new digital channel from the ground up, our multidisciplinary team collaborates to write clean scripts/code, configure correct tag integrations, and optimize design layouts for high fidelity and rapid loading speeds.
            </p>
          </div>

          {/* Capabilities panel */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900/90 p-8 border border-navy-medium/10 dark:border-white/10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xs uppercase font-extrabold tracking-widest text-brand-blue mb-6">Service Capabilities</h3>
              <ul className="space-y-4">
                {service.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-sm text-navy-medium dark:text-slate-200 font-semibold">
                    <span className="w-2 h-2 rounded-full bg-brand-blue shrink-0"></span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 3. BUSINESS BENEFITS */}
      <section className="py-24 bg-white dark:bg-navy-dark border-b border-navy-medium/5 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">Value Add</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-medium dark:text-white tracking-tight">
              Business Benefits
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 border border-navy-medium/10 dark:border-white/10 bg-slate-50/30 dark:bg-slate-900/60 flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-brand-blue shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-navy-medium dark:text-white text-lg mb-2">Benefit 0{idx + 1}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{benefit}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR APPROACH / STEP-BY-STEP PROCESS */}
      <section className="py-24 bg-slate-50 dark:bg-navy-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">Our Delivery Method</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-medium dark:text-white tracking-tight">
              Our Execution Approach
            </h2>
          </div>

          {/* Grid timeline steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.approach.map((stepItem, idx) => (
              <div key={idx} className="p-8 bg-white dark:bg-slate-900/90 border border-navy-medium/10 dark:border-white/10 shadow-sm relative group flex flex-col justify-between min-h-[220px]">
                <div className="absolute top-0 left-0 w-full h-[3px] bg-slate-200 dark:bg-slate-700 group-hover:bg-brand-blue transition-colors duration-300"></div>
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-mono font-bold text-brand-blue">{stepItem.step}</span>
                    <span className="text-[10px] text-slate-300 dark:text-slate-500 font-bold uppercase tracking-wider">Phase</span>
                  </div>
                  <h3 className="text-xl font-bold text-navy-medium dark:text-white mb-3 tracking-tight">{stepItem.title}</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{stepItem.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BLOCK */}
      <section className="py-24 bg-navy-medium text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
        <div className="relative z-10 max-w-xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-white">Have a project in mind? Let's talk.</h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Ready to design a new website, launch a mobile platform, scale advertising campaigns, or dominate search ranks? Send us your requirements and we will reply within one business day.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-blue text-white hover:bg-brand-hover text-xs font-bold uppercase tracking-widest transition-colors duration-300"
            >
              <span>Initiate Project Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

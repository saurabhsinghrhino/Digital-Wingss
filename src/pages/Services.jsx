import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { servicesData } from "../data/services";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "IT & Digital Marketing Services | DigitalWings";
  }, []);

  const images = {
    "web-development":
      "https://images.unsplash.com/photo-1780253240775-901a90864401?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "app-development":
      "https://images.unsplash.com/photo-1609851451108-e937620f1210?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    seo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    "social-media-marketing":
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80",
    "meta-ads":
      "https://images.unsplash.com/photo-1636114673156-052a83459fc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "promotional-videos":
      "https://images.unsplash.com/photo-1664277497086-e21115efbbf4?q=80&w=2063&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  };

  return (
    <div className="w-full pt-36 pb-24 bg-white dark:bg-navy-dark min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero Header */}
        <div className="max-w-3xl mb-24">
          <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
            Service Deck
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-navy-medium dark:text-white tracking-tight leading-tight">
            How We Move Your Business Forward.
          </h1>
          <p className="mt-6 text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            We provide a unified growth suite: combining raw technical
            development with targeted marketing optimization and video asset
            production.
          </p>
        </div>

        {/* Editorial Alternating Grid */}
        <div className="space-y-32">
          {servicesData.map((svc, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={svc.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
                  isEven ? "" : "lg:flex-row-reverse"
                }`}
              >
                {/* Image Section */}
                <div
                  className={`lg:col-span-5 relative group overflow-hidden border border-navy-medium/10 dark:border-white/10 bg-navy-medium aspect-video lg:aspect-[4/3] ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <img
                    src={
                      images[svc.id] ||
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
                    }
                    alt={svc.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-navy-medium/10 group-hover:bg-transparent transition-all duration-300"></div>
                </div>

                {/* Text Content */}
                <div
                  className={`lg:col-span-7 flex flex-col space-y-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Top Header */}
                  <div className="flex items-center space-x-4">
                    <span className="text-lg font-mono font-bold text-brand-blue">
                      {svc.num}
                    </span>
                    <h2 className="text-3xl font-extrabold text-navy-medium dark:text-white tracking-tight">
                      {svc.title}
                    </h2>
                  </div>

                  <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                    {svc.longDesc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-navy-medium/10 dark:border-white/10">
                    {/* Capabilities list */}
                    <div>
                      <h4 className="text-xs uppercase font-extrabold tracking-widest text-navy-medium dark:text-slate-200 mb-3">
                        Capabilities
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        {svc.capabilities.slice(0, 4).map((cap, idx) => (
                          <li key={idx} className="flex items-center space-x-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0"></span>
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Benefits */}
                    <div>
                      <h4 className="text-xs uppercase font-extrabold tracking-widest text-navy-medium dark:text-slate-200 mb-3">
                        Key Benefits
                      </h4>
                      <ul className="space-y-2 text-sm text-slate-500 dark:text-slate-400">
                        {svc.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Call to Actions */}
                  <div className="pt-6">
                    <Link
                      to={`/services/${svc.id}`}
                      className="inline-flex items-center space-x-2 px-6 py-3 bg-navy-medium dark:bg-brand-blue text-white hover:bg-brand-blue dark:hover:bg-sky-400 text-xs font-bold uppercase tracking-widest transition-colors duration-300"
                    >
                      <span>Explore {svc.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Block */}
        <div className="mt-40 p-12 bg-navy-medium text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              Need a custom technical approach?
            </h3>
            <p className="text-sm text-slate-300">
              Our engineering team can formulate custom architectures tailored
              to your business rules. We are ready to help you plan.
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-flex items-center space-x-2 px-8 py-4 bg-brand-blue text-white hover:bg-brand-hover text-xs font-bold uppercase tracking-widest transition-colors duration-300"
              >
                <span>Consult Our Team</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

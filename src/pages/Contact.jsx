import React, { useEffect } from "react";
import { Mail, Phone, MapPin, ArrowUpRight, ShieldAlert } from "lucide-react";
import InquiryForm from "../components/InquiryForm";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact DigitalWings | Start Your Project";
  }, []);

  const offices = [
    {
      city: "Lucknow Office (HQ)",
      address:
        "Sushant Golf-Cit, Near LuLu Mall, Lucknow, Uttar Pradesh-201301",
      phone: "+91 73792 97720",
      email: "officiallydigitalwings@gmail.com",
    },
  ];

  return (
    <div className="w-full pt-36 pb-24 bg-white dark:bg-navy-dark min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Page Hero Title */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center space-x-3 mb-6">
            <img
              src="/logo.jpg"
              alt="DigitalWings Logo"
              className="h-6 w-auto object-contain rounded-full"
            />
            <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
              Get in Touch
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-navy-medium dark:text-white tracking-tight leading-tight">
            Let's Build Something That Matters.
          </h1>
          <p className="mt-6 text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed">
            Have a project scoping question, a RFP, or looking to scale your
            marketing campaigns? Send us a message and our partners will respond
            within 24 hours.
          </p>
        </div>

        {/* Form and Contact Details Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Office info & Map mockup */}
          <div className="lg:col-span-5 space-y-12">
            {/* Contact Details */}
            <div className="space-y-8">
              {offices.map((office, idx) => (
                <div
                  key={idx}
                  className="p-8 border border-navy-medium/10 dark:border-white/10 bg-slate-50/20 dark:bg-slate-900/60 space-y-6"
                >
                  <h3 className="text-xl font-bold text-navy-medium dark:text-white tracking-tight border-b border-navy-medium/10 dark:border-white/10 pb-4">
                    {office.city}
                  </h3>
                  <ul className="space-y-4 text-sm text-slate-500 dark:text-slate-400">
                    <li className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <span>{office.address}</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, "")}`}
                        className="hover:text-brand-blue transition-colors"
                      >
                        {office.phone}
                      </a>
                    </li>
                    <li className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-brand-blue transition-colors"
                      >
                        {office.email}
                      </a>
                    </li>
                  </ul>
                </div>
              ))}
            </div>

            {/* Premium Google Maps Mockup */}
            <div className="relative aspect-video bg-navy-medium border border-navy-medium/10 dark:border-white/10 overflow-hidden flex flex-col justify-between p-8 text-white">
              <div className="absolute inset-0 dark-grid-bg opacity-30 pointer-events-none"></div>

              {/* Abstract Node mapping marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
                <span className="absolute w-8 h-8 rounded-full bg-brand-blue/30 animate-ping"></span>
                <span className="absolute w-4 h-4 rounded-full bg-brand-blue border-2 border-white"></span>
              </div>

              <div className="relative z-10">
                <span className="text-[10px] font-mono tracking-widest text-brand-blue uppercase font-bold">
                  Location node
                </span>
                <h4 className="text-lg font-bold tracking-tight">
                  Lucknow, Sushant Golf-City
                </h4>
              </div>

              <div className="relative z-10 text-xs text-slate-400">
                <span>Wings Studio HQ coordinates active</span>
              </div>
            </div>

            {/* Work Guidelines note */}
            <div className="p-6 border border-brand-blue/10 dark:border-white/10 bg-ice-glow/30 dark:bg-slate-900/40 flex items-start space-x-3 text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
              <ShieldAlert className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-navy-medium dark:text-slate-200 mb-1">
                  RFP & Scoping Guidelines
                </p>
                <p>
                  We perform rigorous scoping for all inquiries. If you have
                  document specifications or project mockups, feel free to
                  attach link coordinates in the requirements details area.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Inquiry Form component */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-navy-medium dark:text-white tracking-tight">
                Project Details Form
              </h2>
              <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">
                Please fill out all fields marked with an asterisk (*).
              </p>
            </div>
            <InquiryForm />
          </div>
        </div>
      </div>
    </div>
  );
}

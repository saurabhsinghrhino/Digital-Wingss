import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { servicesData } from "../data/services";
import { projectsData } from "../data/projects";
import ServiceCard from "../components/ServiceCard";
import ProjectCard from "../components/ProjectCard";
import ProcessSection from "../components/ProcessSection";
import InquiryForm from "../components/InquiryForm";
import StatsSection from "../components/StatsSection";
import GoogleReviews from "../components/GoogleReviews";
import HomeImageCarousel from "../components/HomeImageCarousel";
import FullPageCarousel from "../components/FullPageCarousel";

export default function Home() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    // Scroll to top on load
    window.scrollTo(0, 0);

    // Document SEO
    document.title = "DigitalWings — Digital Solutions That Drive Growth";

    // GSAP context for auto-cleanup on unmount
    const ctx = gsap.context(() => {
      // Hero entrance animations using GSAP timeline
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Animate line-by-line reveal of the heading
      const lines = titleRef.current?.querySelectorAll(".hero-line");
      if (lines && lines.length > 0) {
        tl.fromTo(
          lines,
          { yPercent: 105 },
          { yPercent: 0, duration: 0.9, stagger: 0.12, delay: 0.2 },
        );
      }

      if (descRef.current) {
        tl.fromTo(
          descRef.current,
          { y: 25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.4",
        );
      }

      if (ctaRef.current) {
        tl.fromTo(
          ctaRef.current,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" },
          "-=0.5",
        );
      }

      if (visualRef.current) {
        tl.fromTo(
          visualRef.current,
          { scale: 0.96, opacity: 0, y: 30 },
          { scale: 1, opacity: 1, y: 0, duration: 1.2, ease: "power3.out" },
          "-=0.6",
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const whyUsPoints = [
    {
      title: "Strategy First",
      desc: "Every line of code and marketing dollar is aligned with a clear business outcome.",
    },
    {
      title: "Built For Growth",
      desc: "We engineer modular systems designed to support scaling workloads and user traffic.",
    },
    {
      title: "Technology + Creativity",
      desc: "We bring raw technical expertise and high-end visual design under one roof.",
    },
    {
      title: "Long-Term Partnership",
      desc: "We function as an integrated extension of your business, not just a service vendor.",
    },
  ];

  // Curated agency showcase images for the Home Page Image Carousel
  const homeCarouselImages = [
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
      alt: "DigitalWings Tech Studio & Team Collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=2392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "DigitalWings Tech Studio & Team Collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "DigitalWings Tech Studio & Team Collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "DigitalWings Tech Studio & Team Collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "DigitalWings Tech Studio & Team Collaboration",
    },
  ];

  const largeImages = [
    {
      url: "/bg-img.jpg",
      alt: "DigitalWings Tech Studio & Team Collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1603201667141-5a2d4c673378?q=80&w=2392&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "DigitalWings Tech Studio & Team Collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "DigitalWings Tech Studio & Team Collaboration",
    },
    {
      url: "https://images.unsplash.com/photo-1560264280-88b68371db39?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "DigitalWings Tech Studio & Team Collaboration",
    },
  ];

  return (
    <div className="w-full">
      {/* 1. HERO SECTION */}
      <section
        ref={heroRef}
        className="pt-36 pb-20 md:pt-48 md:pb-28 relative overflow-hidden flex flex-col justify-center min-h-screen"
      >
        {/* Hero Background Image with Blur */}
        <div className="absolute inset-0 z-0">
          <FullPageCarousel slides={largeImages} />
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full text-center relative z-10">
          {/* Eyebrow Label */}
          <div className="mb-8 overflow-hidden inline-block">
            <span className="inline-block text-[10px] font-extrabold uppercase tracking-widest px-3.5 py-2 bg-ice-accent dark:bg-slate-800 text-navy-medium dark:text-sky-300 border border-brand-blue/10 dark:border-white/10">
              Creative Technology Studio
            </span>
          </div>

          {/* Masked Header */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl md:text-[88px] font-black text-slate-900 dark:text-white tracking-tighter uppercase leading-[0.85] max-w-6xl mx-auto flex flex-col space-y-1 md:space-y-2"
          >
            <span className="block overflow-hidden relative">
              <span className="hero-line block">We Build</span>
            </span>
            <span className="block overflow-hidden relative text-brand-blue">
              <span className="hero-line block">Digital Experiences</span>
            </span>
            <span className="block overflow-hidden relative">
              <span className="hero-line block">That Move Businesses</span>
            </span>
            <span className="block overflow-hidden relative">
              <span className="hero-line block">Forward.</span>
            </span>
          </h1>

          <div
            ref={ctaRef}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2.5 px-9 py-4 bg-navy-medium dark:bg-brand-blue text-white hover:bg-brand-blue dark:hover:bg-sky-400 uppercase tracking-widest text-xs font-extrabold transition-all duration-300 w-full sm:w-auto text-center justify-center transform hover:-translate-y-1 hover:shadow-lg border border-navy-medium dark:border-brand-blue"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-9 py-4 border border-navy-medium/10 dark:border-white/20 bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-800 text-navy-medium dark:text-slate-100 hover:border-navy-medium dark:hover:border-brand-blue uppercase tracking-widest text-xs font-extrabold transition-all duration-300 w-full sm:w-auto text-center justify-center transform hover:-translate-y-1"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST / SHORT COMPANY STATEMENT */}
      <section className="w-full flex flex-col lg:flex-row justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-24 py-12 lg:py-20 bg-slate-50 dark:bg-navy-dark border-y border-navy-medium/5 dark:border-white/10 relative gap-10 lg:gap-12 transition-colors duration-300">
        {/* Text Container */}
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center">
          <div className="max-w-xl">
            <h3 className="text-sm sm:text-base md:text-xl font-extrabold uppercase tracking-widest text-brand-blue mb-3 md:mb-4">
              About Digital Wingss
            </h3>
            <p className="text-xl sm:text-2xl md:text-3xl font-bold text-navy-medium dark:text-white leading-snug sm:leading-tight tracking-tight">
              We design and code digital products that don't just look expensive
              — they solve real problems.
            </p>
            <p className="text-xs sm:text-sm mt-3 md:mt-4 text-blue-900 dark:text-slate-300 leading-relaxed">
              Digital Wings is a modern IT services company dedicated to helping
              businesses build, grow, and succeed in the digital world. We
              specialize in website development, app development, SEO, social
              media marketing, Meta advertising, and promotional video
              production, delivering innovative and result-driven solutions
              tailored to every business’s unique needs. By combining creative
              design, advanced technology, and effective digital strategies, we
              transform ideas into powerful digital experiences that help brands
              stand out, reach their target audience, and achieve sustainable
              growth. At Digital Wings, we believe in turning your vision into
              reality through technology, creativity, and a commitment to
              quality.
            </p>
          </div>
        </div>

        {/* Home Image Carousel Container */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <HomeImageCarousel images={homeCarouselImages} />
        </div>
      </section>

      {/* Legacy Statistics Section */}
      <StatsSection />

      {/* 3. SERVICES SECTION */}
      <section className="py-24 bg-white dark:bg-navy-dark transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <div className="max-w-2xl">
              <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
                Our Offerings
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-navy-medium dark:text-white tracking-tight">
                Everything You Need to Grow Digitally.
              </h2>
            </div>
            <div>
              <Link
                to="/services"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-navy-medium dark:text-slate-200 hover:text-brand-blue dark:hover:text-brand-blue transition-colors group"
              >
                <span>View Full Service Deck</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
            {servicesData.map((svc) => (
              <ServiceCard
                key={svc.id}
                id={svc.id}
                num={svc.num}
                title={svc.title}
                shortDesc={svc.shortDesc}
                capabilities={svc.capabilities}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHY DIGITALWINGS */}
      <section className="py-24 bg-navy-medium text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
              Why Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Engineered for measurable impact.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {whyUsPoints.map((pt, idx) => (
              <div
                key={idx}
                className="p-8 border border-white/10 hover:border-brand-blue/30 transition-all duration-300 bg-white/[0.02]"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <span className="text-xs font-mono font-bold text-brand-blue">
                    0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-white">
                    {pt.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SELECTED WORK / SHOWCASE */}
      <section className="py-24 bg-white dark:bg-navy-dark grid-bg transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-3xl mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-navy-medium dark:text-white tracking-tight">
              Selected Work
            </h2>
          </div>

          {/* Asymmetric layout grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projectsData.slice(0, 4).map((proj, idx) => {
              let sizeClass = "col-span-1";
              if (idx === 0 || idx === 3) {
                sizeClass = "col-span-1 lg:col-span-2";
              }
              return (
                <ProjectCard
                  key={proj.id}
                  title={proj.title}
                  category={proj.category}
                  imageUrl={proj.image}
                  sizeClass={sizeClass}
                  url={proj.url}
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Reviews Carousel Section */}
      <GoogleReviews />

      {/* 6. PROCESS SECTION */}
      <ProcessSection />

      {/* 7. ABOUT PREVIEW */}
      <section className="py-24 bg-slate-50 dark:bg-navy-dark border-t border-navy-medium/5 dark:border-white/10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden border border-navy-medium/10 dark:border-white/10 shadow-xl">
            <img
              src="/bg-img.jpg"
              alt="DigitalWings office studio collaboration"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-medium/40 hover:bg-navy-medium/20 transition-all duration-300"></div>
          </div>
          <div className="flex flex-col space-y-6">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue">
              About the studio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy-medium dark:text-white tracking-tight">
              Growth Is Our Goal. Technology Is Our Tool.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              We are a team of software developers, creative designers, and
              search engine strategists united by a shared mission: to build
              custom solutions that create significant value for our clients. We
              reject templated work and corporate buzzwords, choosing instead to
              focus on performance metrics, transparency, and clean engineering.
            </p>
            <div>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-navy-medium dark:bg-brand-blue text-white hover:bg-brand-blue dark:hover:bg-sky-400 text-xs font-bold uppercase tracking-widest transition-colors duration-300"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. INQUIRY CTA SECTION */}
      <section className="py-24 bg-white dark:bg-navy-dark relative transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="max-w-xl mx-auto text-center mb-16">
            <span className="text-xs uppercase font-extrabold tracking-widest text-brand-blue block mb-3">
              Work With Us
            </span>
            <h2 className="text-4xl font-black text-navy-medium dark:text-white tracking-tight">
              Start Your Growth Story.
            </h2>
            <p className="mt-3 text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
              Have an app development project, a website redesign, or need a
              growth strategy? Tell us your budget and project details below,
              and we will get back to you with a custom strategy.
            </p>
          </div>

          <InquiryForm />
        </div>
      </section>
    </div>
  );
}

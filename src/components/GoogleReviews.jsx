import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function GoogleReviews() {
  const containerRef = useRef(null);
  const sliderTrackRef = useRef(null);
  const dragStartX = useRef(0);
  const isDragging = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const [autoplayActive, setAutoplayActive] = useState(true);
  const [hovered, setHovered] = useState(false);

  // Configurable reviews array
  const reviewsData = [
    {
      name: "Simran Srivastava",
      initials: "RS",
      role: "Director, Aura Fintech",
      rating: 5,
      review:
        "I had a great experience working with Digital Wings IT Company. Their team is very professional, responsive, and dedicated to delivering quality work. They understand the client’s requirements properly and provide effective digital solutions.",
      date: "August 2026",
    },
    {
      name: "Abhay Shukla",
      initials: "PP",
      role: "Founder, Bloom Organics",
      rating: 5,
      review:
        "Good experience working with this software company. They maintained transparency at every stage. Timely delivery with proper support. Satisfied with the results.",
      date: "July 2026",
    },
    {
      name: "Rekha Singh",
      initials: "VM",
      role: "CEO, Zenith Logistics",
      rating: 5,
      review:
        "The team is very professional, the support is good, and the team is responsive. The overall experience was good. Thank you, Digital Wings",
      date: "June 2026",
    },
    {
      name: "Sarthaktech",
      initials: "AS",
      role: "Marketing VP, Core Apparel",
      rating: 5,
      review:
        "Very good company and cheapest price, they provide project purchase along with it, 3 months support is also excellent, I recommended to everyone, work got done from here....🥰😍",
      date: "May 2026",
    },
    {
      name: "Ayush Tripathi",
      initials: "AV",
      role: "Managing Partner, Vista Real Estate",
      rating: 5,
      review:
        "“Excellent tech company with a highly skilled and professional team. They develop innovative and user-friendly apps with great performance and design. Their support, communication, and commitment to quality are impressive. Overall, a reliable company for app development and technical solutions.”",
      date: "April 2026",
    },
    {
      name: "Shristy Sadh",
      initials: "SS",
      role: "Founder, TechNova Solutions",
      rating: 5,
      review:
        "Highly professional and reliable IT company. The team delivers excellent quality work and always meets deadlines. Their communication is clear and smooth, making the entire process hassle-free. They understand requirements well and provide the best possible solutions. Highly recommended for web development, software solutions, and digital services.",
      date: "Feb 2026",
    },
    {
      name: "Dev gabba",
      initials: "DG",
      role: "Founder, PreKickz",
      rating: 5,
      review:
        "Our experience with Digital Wings has been nothing short of excellent. The team is highly skilled, professional, and passionate about delivering quality results. They took the time to understand our business objectives and transformed our ideas into a polished and functional website. Their technical expertise, creativity, and commitment to deadlines make them one of the best digital service providers we have worked with.",
      date: "August 2026",
    },
    {
      name: "Nand kumar singh",
      initials: "NS",
      role: "Founder, Motiqo",
      rating: 5,
      review:
        "We had a great experience working with the team for our website development. They understood our business requirements, suggested the right design and delivered a modern, professional and responsive website. The communication throughout the project was smooth, and they were always available whenever we needed any changes or support. Highly recommended for anyone looking for a reliable website development team.",
      date: "August 2026",
    },
  ];

  // Responsive columns detector
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3);
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2);
      } else {
        setCardsToShow(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = reviewsData.length - cardsToShow;

  // Carousel slider navigations
  const handleNext = () => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const selectSlide = (idx) => {
    setAutoplayActive(false);
    setActiveIndex(idx);
  };

  const triggerManualNext = () => {
    setAutoplayActive(false);
    handleNext();
  };

  const triggerManualPrev = () => {
    setAutoplayActive(false);
    handlePrev();
  };

  // Autoplay handler
  useEffect(() => {
    if (!autoplayActive || hovered) return;

    const timer = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(timer);
  }, [activeIndex, autoplayActive, hovered, cardsToShow]);

  // Pointer gesture swipe detection
  const handlePointerDown = (e) => {
    dragStartX.current = e.clientX;
    isDragging.current = true;
  };

  const handlePointerUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const deltaX = e.clientX - dragStartX.current;

    if (Math.abs(deltaX) > 40) {
      setAutoplayActive(false);
    }

    if (deltaX < -50) {
      handleNext();
    } else if (deltaX > 50) {
      handlePrev();
    }
  };

  // GSAP ScrollTrigger Entrance Animations
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Fade and slide-up headers
      gsap.fromTo(
        ".reviews-header-elem",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: container,
            start: "top 75%",
            once: true,
          },
        },
      );

      // Stagger reveal review cards
      gsap.fromTo(
        ".review-card-wrapper",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: container,
            start: "top 70%",
            once: true,
          },
        },
      );

      // Smooth fade-in controls
      gsap.fromTo(
        ".reviews-controls-elem",
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: container,
            start: "top 65%",
            once: true,
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 bg-white dark:bg-navy-dark relative overflow-hidden grid-bg transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Heading & Google Trust Score Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl reviews-header-elem">
            {/* Google trust indicator above heading */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 bg-slate-50 dark:bg-slate-900 border border-navy-medium/5 dark:border-white/10 text-navy-medium dark:text-slate-200 text-[11px] font-extrabold uppercase tracking-widest mb-4">
              <span className="text-amber-500">★</span>
              <span>4.9 / 5</span>
              <span className="text-slate-300 dark:text-slate-600">|</span>
              <span className="text-slate-400 font-bold">Google Reviews</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-navy-medium dark:text-white tracking-tight">
              What Our Clients Say.
            </h2>
            <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed max-w-xl">
              Real experiences from businesses we've helped grow, transform, and
              succeed in the digital world.
            </p>
          </div>

          {/* Navigation Controls positioned next to the header on desktop */}
          <div className="flex items-center space-x-3 shrink-0 reviews-controls-elem">
            <button
              onClick={triggerManualPrev}
              aria-label="Previous testimonials page"
              className="p-3 border border-navy-medium/10 dark:border-white/20 text-navy-medium dark:text-slate-200 hover:bg-navy-medium dark:hover:bg-brand-blue hover:text-white dark:hover:text-white hover:border-navy-medium transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={triggerManualNext}
              aria-label="Next testimonials page"
              className="p-3 border border-navy-medium/10 dark:border-white/20 text-navy-medium dark:text-slate-200 hover:bg-navy-medium dark:hover:bg-brand-blue hover:text-white dark:hover:text-white hover:border-navy-medium transition-all duration-300 outline-none focus:ring-2 focus:ring-brand-blue"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel Window */}
        <div
          className="relative overflow-visible cursor-grab active:cursor-grabbing reviews-controls-elem"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onPointerDown={handlePointerDown}
          onPointerUp={handlePointerUp}
          role="region"
          aria-label="Client testimonials slider"
        >
          <div className="overflow-hidden">
            {/* Slider track wrapper */}
            <div
              ref={sliderTrackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${activeIndex * (100 / cardsToShow)}%)`,
              }}
            >
              {reviewsData.map((item, idx) => {
                const isCenter = cardsToShow === 3 && idx === activeIndex + 1;

                return (
                  <div
                    key={idx}
                    className="review-card-wrapper shrink-0 px-4 transition-all duration-500"
                    style={{ width: `${100 / cardsToShow}%` }}
                  >
                    <div
                      className={`relative bg-slate-50/50 dark:bg-slate-900/70 p-8 md:p-10 border transition-all duration-500 h-full flex flex-col justify-between min-h-[300px] select-none ${
                        isCenter
                          ? "border-brand-blue/30 bg-white dark:bg-slate-900 scale-[1.03] shadow-lg shadow-navy-medium/5 dark:shadow-black/40"
                          : "border-navy-medium/5 dark:border-white/10 opacity-80 scale-100 hover:opacity-100 hover:border-navy-medium/10 dark:hover:border-white/20"
                      }`}
                    >
                      {/* Subtle Google "G" emblem watermark */}
                      <svg
                        className="absolute top-6 right-6 w-4 h-4 opacity-15 fill-current text-slate-500 dark:text-slate-400 pointer-events-none"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path d="M12.24 10.285V14.4h6.887c-.648 2.41-2.519 4.113-6.887 4.113-4.832 0-8.72-3.887-8.72-8.72s3.888-8.72 8.72-8.72c2.27 0 4.187.818 5.64 2.183l3.225-3.225C18.285.992 15.525 0 12.24 0 5.58 0 0 5.58 0 12.24s5.58 12.24 12.24 12.24c6.96 0 12.24-4.887 12.24-12.24 0-.787-.075-1.564-.24-2.28H12.24z" />
                      </svg>

                      <div>
                        {/* Rating Stars */}
                        <div className="flex items-center space-x-1 mb-5">
                          {[...Array(item.rating)].map((_, sIdx) => (
                            <Star
                              key={sIdx}
                              className="w-4 h-4 fill-amber-500 stroke-amber-500"
                              aria-hidden="true"
                            />
                          ))}
                        </div>

                        {/* Review Content */}
                        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed font-medium italic">
                          "{item.review}"
                        </p>
                      </div>

                      {/* Reviewer Metadata Footer block */}
                      <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex items-center space-x-4">
                        {/* Circular Monogram Initial Avatar */}
                        <div className="w-11 h-11 shrink-0 rounded-full bg-navy-medium dark:bg-navy-light text-brand-blue flex items-center justify-center font-extrabold text-xs">
                          {item.initials}
                        </div>
                        <div>
                          <div className="font-extrabold text-navy-medium dark:text-white text-xs leading-none">
                            {item.name}
                          </div>
                          <div className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest mt-1">
                            {item.role}
                          </div>
                          <div className="text-[9px] text-slate-300 dark:text-slate-500 font-bold uppercase mt-0.5">
                            {item.date}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-16 flex flex-col items-center space-y-8 reviews-controls-elem">
          <div className="flex items-center space-x-2">
            {[...Array(reviewsData.length - cardsToShow + 1)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => selectSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx
                    ? "w-6 bg-brand-blue"
                    : "w-1.5 bg-navy-medium/10 dark:bg-white/20 hover:bg-navy-medium/30 dark:hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

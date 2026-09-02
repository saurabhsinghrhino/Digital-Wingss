import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

export const FullPageCarousel = ({
  slides = [],
  autoPlayInterval = 2000,
  accentColor = "#d4c5b9",
  className = "",
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [touchStartX, setTouchStartX] = useState(0);

  const nextSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentIdx((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    if (slides.length <= 1) return;
    setCurrentIdx((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  // Auto-play effect
  useEffect(() => {
    if (!isPlaying || slides.length <= 1) return;
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [isPlaying, autoPlayInterval, nextSlide, slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch handlers
  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) nextSlide();
    if (touchEndX - touchStartX > 50) prevSlide();
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      className={`relative w-full h-screen bg-[#0a0a0a] text-white overflow-hidden select-none ${className}`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* 1. Image Slides */}
      {slides.map((slide, idx) => {
        const isActive = idx === currentIdx;
        const imageSrc =
          typeof slide === "string" ? slide : slide.url || slide.image;
        const title = typeof slide === "object" ? slide.title : "";
        const subtitle = typeof slide === "object" ? slide.subtitle : "";

        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive
                ? "opacity-100 z-10 pointer-events-auto"
                : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Zoom */}
            <img
              src={imageSrc}
              alt={title || `Slide ${idx + 1}`}
              loading={idx === 0 ? "eager" : "lazy"}
              className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                isActive ? "scale-105" : "scale-100"
              }`}
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-black/40" />

            {/* Slide Text Content */}
            {(title || subtitle) && (
              <div className="absolute inset-0 flex flex-col justify-end pb-28 sm:pb-36 px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto z-20">
                {subtitle && (
                  <span
                    style={{ color: accentColor }}
                    className={`font-mono text-xs sm:text-sm tracking-[0.3em] uppercase mb-4 transition-all duration-700 delay-300 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-6"
                    }`}
                  >
                    0{idx + 1} &mdash; {subtitle}
                  </span>
                )}

                {title && (
                  <h2
                    className={`font-serif text-3xl sm:text-5xl lg:text-7xl uppercase tracking-tight font-light leading-tight max-w-4xl transition-all duration-700 delay-500 ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }`}
                  >
                    {title}
                  </h2>
                )}
              </div>
            )}
          </div>
        );
      })}

      {/* 2. Arrow Controls */}
      {/* {slides.length > 1 && (
        // <div className="absolute inset-y-0 left-4 right-4 sm:left-10 sm:right-10 flex items-center justify-between z-30 pointer-events-none">
        //   <button
        //     onClick={prevSlide}
        //     aria-label="Previous Slide"
        //     className="p-3 sm:p-4 rounded-full border border-white/20 bg-black/40 text-white hover:bg-[#d4c5b9] hover:text-[#0a0a0a] hover:border-[#d4c5b9] transition-all duration-300 pointer-events-auto backdrop-blur-md"
        //   >
        //     <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        //   </button>

        //   <button
        //     onClick={nextSlide}
        //     aria-label="Next Slide"
        //     className="p-3 sm:p-4 rounded-full border border-white/20 bg-black/40 text-white hover:bg-[#d4c5b9] hover:text-[#0a0a0a] hover:border-[#d4c5b9] transition-all duration-300 pointer-events-auto backdrop-blur-md"
        //   >
        //     <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        //   </button>
        // </div>
      )} */}

      {/* 3. Bottom Controls */}
      {slides.length > 1 && (
        <div className="absolute bottom-8 left-6 right-6 sm:left-12 sm:right-12 z-30 flex items-center justify-between border-t border-white/10 pt-6 max-w-7xl mx-auto">
          {/* <div className="flex items-center gap-4">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              aria-label={isPlaying ? "Pause Carousel" : "Play Carousel"}
              className="text-white/70 hover:text-white transition-colors p-1"
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
            </button>
            <span className="font-mono text-xs text-white/50 tracking-widest">
              0{currentIdx + 1} / 0{slides.length}
            </span>
          </div> */}
          {/* Dots */}
          {/* <div className="flex items-center gap-2 sm:gap-3">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIdx(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className="group py-2 cursor-pointer"
              >
                <div
                  style={{
                    backgroundColor:
                      currentIdx === idx ? accentColor : undefined,
                  }}
                  className={`h-0.5 transition-all duration-500 ${
                    currentIdx === idx
                      ? "w-8 sm:w-12"
                      : "w-4 sm:w-6 bg-white/30 group-hover:bg-white/60"
                  }`}
                />
              </button>
            ))}
          </div> */}
        </div>
      )}
    </div>
  );
};

FullPageCarousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        url: PropTypes.string,
        image: PropTypes.string,
        title: PropTypes.string,
        subtitle: PropTypes.string,
      }),
    ]),
  ).isRequired,
  autoPlayInterval: PropTypes.number,
  accentColor: PropTypes.string,
  className: PropTypes.string,
};

export default FullPageCarousel;

import React, {
  useState,
  useEffect,
  useRef,
  useMemo,
  useCallback,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AUTOPLAY_DELAY = 2000;

export default function HeroCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Normalize images to always have url and alt
  const slides = useMemo(() => {
    if (!images || images.length === 0) return [];
    return images.map((item, idx) => {
      if (typeof item === "string") {
        return {
          url: item,
          alt: `DigitalWings Showcase Slide ${idx + 1}`,
        };
      }
      return {
        url: item.url || item.src,
        alt: item.alt || `DigitalWings Showcase Slide ${idx + 1}`,
      };
    });
  }, [images]);

  const totalSlides = slides.length;

  // Next / Previous slide actions
  const nextSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    if (totalSlides <= 1) return;
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
  }, []);

  // Preload all carousel images into browser cache to prevent blank flashes
  useEffect(() => {
    if (!slides || slides.length === 0) return;
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.url;
    });
  }, [slides]);

  // Autoplay Timer
  useEffect(() => {
    if (isPaused || totalSlides <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_DELAY);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides, currentIndex]);

  // Touch gesture state
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const touchEndY = useRef(0);

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    touchEndY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    const deltaX = touchStartX.current - touchEndX.current;
    const deltaY = Math.abs(touchStartY.current - touchEndY.current);

    if (Math.abs(deltaX) > 40 && Math.abs(deltaX) > deltaY) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  // Mouse drag state
  const isMouseDown = useRef(false);
  const mouseStartX = useRef(0);

  const handleMouseDown = (e) => {
    if (e.button !== 0) return;
    isMouseDown.current = true;
    mouseStartX.current = e.clientX;
    setIsPaused(true);
  };

  const handleMouseUp = (e) => {
    if (!isMouseDown.current) return;
    isMouseDown.current = false;
    setIsPaused(false);
    const deltaX = mouseStartX.current - e.clientX;
    if (Math.abs(deltaX) > 40) {
      if (deltaX > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  };

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    if (isMouseDown.current) {
      isMouseDown.current = false;
    }
    setIsPaused(false);
  };

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      prevSlide();
    } else if (e.key === "ArrowRight") {
      nextSlide();
    }
  };

  if (!slides || slides.length === 0) {
    return null;
  }

  return (
    <div
      className="w-full max-w-md lg:max-w-lg flex flex-col items-center select-none"
      role="region"
      aria-roledescription="carousel"
      aria-label="DigitalWings Showcase Carousel"
      onKeyDown={handleKeyDown}
      tabIndex="0"
    >
      {/* Main Carousel Frame */}
      <div
        className="relative group overflow-hidden rounded-none shadow-sm hover:shadow-md transition-shadow w-full aspect-square border border-navy-medium/10 dark:border-white/10 bg-slate-900 cursor-grab active:cursor-grabbing"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Render all slides for smooth crossfade transitions */}
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <div
              key={idx}
              className={`absolute inset-0 w-full h-full transition-all duration-350 ease-out motion-reduce:transition-none ${
                isActive
                  ? "opacity-100 scale-100 z-10 pointer-events-auto"
                  : "opacity-0 scale-[1.03] z-0 pointer-events-none"
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`Slide ${idx + 1} of ${totalSlides}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover pointer-events-none"
                loading={idx === 0 ? "eager" : "lazy"}
                draggable="false"
              />
            </div>
          );
        })}

        {/* Subtle ice-blue bottom line indicator */}
        <div className="absolute bottom-0 left-0 w-full h-[4px] bg-brand-blue z-20 pointer-events-none"></div>

        {/* Arrow Navigation Controls */}
        {totalSlides > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-navy-light/90 hover:bg-white dark:hover:bg-navy-light text-navy-medium dark:text-slate-100 hover:text-brand-blue dark:hover:text-brand-blue flex items-center justify-center shadow-md backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30 outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/80 dark:bg-navy-light/90 hover:bg-white dark:hover:bg-navy-light text-navy-medium dark:text-slate-100 hover:text-brand-blue dark:hover:text-brand-blue flex items-center justify-center shadow-md backdrop-blur-sm transition-all duration-200 opacity-0 group-hover:opacity-100 focus:opacity-100 z-30 outline-none focus:ring-2 focus:ring-brand-blue"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </>
        )}
      </div>

      {/* Dot Indicators */}
      {totalSlides > 1 && (
        <div
          className="mt-4 flex items-center justify-center gap-2 z-20"
          role="tablist"
          aria-label="Carousel Slides"
        >
          {slides.map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={idx}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Go to slide ${idx + 1}`}
                onClick={() => goToSlide(idx)}
                className={`h-2 transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-blue ${
                  isActive
                    ? "w-6 bg-brand-blue"
                    : "w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

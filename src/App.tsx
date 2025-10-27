import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import Slide1 from './components/slides/Slide1';
import Slide2 from './components/slides/Slide2';
import Slide3 from './components/slides/Slide3';
import Slide4 from './components/slides/Slide4';
import Slide5 from './components/slides/Slide5';
import Slide6 from './components/slides/Slide6';
import Slide7 from './components/slides/Slide7';
import Slide8 from './components/slides/Slide8';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 8;
  const isScrollingRef = useRef(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollToSlide = useCallback((slideIndex: number) => {
    if (slideIndex < 0 || slideIndex >= totalSlides || !scrollContainerRef.current) return;
    
    isScrollingRef.current = true;
    const container = scrollContainerRef.current;
    const targetScroll = slideIndex * container.clientHeight;
    
    container.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });
    setCurrentSlide(slideIndex);
    
    // Reset scrolling flag after animation
    setTimeout(() => {
      isScrollingRef.current = false;
    }, 1000);
  }, [totalSlides]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (isScrollingRef.current) return;
      
      const scrollPosition = container.scrollTop;
      const containerHeight = container.clientHeight;
      const newSlide = Math.round(scrollPosition / containerHeight);
      const clampedSlide = Math.max(0, Math.min(newSlide, totalSlides - 1));
      
      if (clampedSlide !== currentSlide) {
        setCurrentSlide(clampedSlide);
      }
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [currentSlide, totalSlides]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToSlide(currentSlide + 1);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToSlide(currentSlide - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, scrollToSlide]);

  return (
    <div className="relative">
      {/* Slide Navigation */}
      <div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center">
        {/* Slide counter */}
        <motion.div
          className="text-yellow-400 text-sm mb-4 text-center"
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <span className="font-bold">{currentSlide + 1}</span>
          <span className="text-gray-500"> / {totalSlides}</span>
        </motion.div>
        
        {/* Dots container with progress bar */}
        <div className="relative flex flex-col gap-3">
          {/* Animated progress line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 w-0.5 h-full bg-gray-700 rounded-full">
            <motion.div
              className="w-full bg-yellow-400 rounded-full origin-top"
              initial={{ height: 0 }}
              animate={{ 
                height: `${(currentSlide / (totalSlides - 1)) * 100}%` 
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>
          
          {/* Dots */}
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => scrollToSlide(index)}
                className={`relative z-10 w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? 'bg-yellow-400 scale-125 shadow-lg shadow-yellow-400/50'
                    : currentSlide > index
                    ? 'bg-yellow-400/60'
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
              {/* Ring indicator for current slide */}
              {currentSlide === index && (
                <motion.div
                  className="absolute -left-1 -top-1 w-5 h-5 border-2 border-yellow-400 rounded-full"
                  layoutId="activeSlide"
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 30 
                  }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator (only on first slide) */}
      {currentSlide === 0 && (
        <motion.div
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center gap-2 text-yellow-400"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <span className="text-sm hidden md:block">Scroll or use arrow keys to explore</span>
          <span className="text-sm md:hidden">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={24} />
          </motion.div>
        </motion.div>
      )}

      {/* Keyboard navigation hint */}
      <motion.div
        className="fixed bottom-4 left-4 z-40 text-gray-500 text-xs hidden md:flex flex-col gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div className="flex items-center gap-2">
          <kbd className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-yellow-400">↑</kbd>
          <kbd className="px-2 py-1 bg-gray-800 border border-gray-700 rounded text-yellow-400">↓</kbd>
          <span>Navigate</span>
        </div>
        <div className="text-xs">
          <span className="text-gray-600">Slide: </span>
          <motion.span 
            key={currentSlide}
            className="text-yellow-400 font-bold"
            initial={{ scale: 1.5 }}
            animate={{ scale: 1 }}
          >
            {currentSlide + 1}
          </motion.span>
        </div>
      </motion.div>

      {/* Slides Container */}
      <div 
        ref={scrollContainerRef}
        className="snap-y snap-mandatory h-screen overflow-y-scroll"
      >
        <div className="snap-start h-screen">
          <Slide1 />
        </div>
        <div className="snap-start h-screen">
          <Slide2 />
        </div>
        <div className="snap-start h-screen">
          <Slide3 />
        </div>
        <div className="snap-start h-screen">
          <Slide4 />
        </div>
        <div className="snap-start h-screen">
          <Slide5 />
        </div>
        <div className="snap-start h-screen">
          <Slide6 />
        </div>
        <div className="snap-start h-screen">
          <Slide7 />
        </div>
        <div className="snap-start h-screen">
          <Slide8 />
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect, useRef } from 'react';
import { HERO_SLIDES } from '../../data/landingData';
import type { HeroSlide } from '../../types';

const HeroSection: React.FC = () => {
  const [current,   setCurrent]   = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (idx: number) => {
    if (animating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 400);
  };

  const next = () => goTo((current + 1) % HERO_SLIDES.length);
  const prev = () => goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const slide: HeroSlide = HERO_SLIDES[current];

  return (
    <section id="hero" className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background images */}
      {HERO_SLIDES.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <img
            src={s.image}
            alt={s.title}
            className="w-full h-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Overlay gradient */}
      <div className="absolute inset-0 z-10"
           style={{ background: 'linear-gradient(135deg, rgba(26,35,126,0.78) 0%, rgba(13,13,26,0.55) 60%, rgba(201,168,76,0.20) 100%)' }} />

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
        <div className={`transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
          {/* Badge */}
          <span className="gs-badge mb-6 text-sm animate-fade-in">
            ✦ {slide.badge}
          </span>

          {/* Title */}
          <h1 className="text-white font-black mb-4 max-w-4xl mx-auto animate-fade-up"
              style={{ fontFamily: 'Playfair Display, serif', textShadow: '0 2px 20px rgba(0,0,0,0.4)' }}>
            {slide.title}
          </h1>

          {/* Subtitle */}
          <p className="text-white/80 text-base md:text-lg max-w-2xl mx-auto mb-8 animate-fade-up delay-200">
            {slide.subtitle}
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <a href={slide.ctaLink}
               onClick={(e) => {
                 if (slide.ctaLink.startsWith('#')) {
                   e.preventDefault();
                   document.querySelector(slide.ctaLink)?.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
               id={`hero-cta-${slide.id}`}
               className="btn-gold font-bold text-base px-8 py-4">
              {slide.cta}
            </a>
            <a href="#about"
               onClick={(e) => { e.preventDefault(); document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' }); }}
               className="btn-outline text-white border-white/60 hover:bg-white/20 hover:text-white font-semibold">
              Who We Are
            </a>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {HERO_SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            id={`hero-dot-${i}`}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-400
              ${i === current
                ? 'w-8 h-2.5 bg-gold-400'
                : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'}`}
          />
        ))}
      </div>

      {/* Arrow controls */}
      <button onClick={prev} id="hero-prev"
              aria-label="Previous slide"
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30
                         w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm
                         flex items-center justify-center text-white text-xl
                         transition-all duration-300 hover:scale-110">
        ‹
      </button>
      <button onClick={next} id="hero-next"
              aria-label="Next slide"
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30
                         w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 backdrop-blur-sm
                         flex items-center justify-center text-white text-xl
                         transition-all duration-300 hover:scale-110">
        ›
      </button>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 z-30 hidden md:flex flex-col items-center gap-1 text-white/60">
        <span className="text-xs tracking-[0.2em] uppercase rotate-90 mb-2">Scroll Down</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;

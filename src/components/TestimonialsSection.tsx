import React, { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/cheatSheetsData';

export const TestimonialsSection: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const getMaxIndex = () => {
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      return Math.max(0, TESTIMONIALS.length - 2);
    }
    return TESTIMONIALS.length - 1;
  };

  const scrollToIndex = (index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const maxIndex = getMaxIndex();
    const clamped = index < 0 ? maxIndex : index > maxIndex ? 0 : index;
    const targetCard = track.children[clamped] as HTMLElement | undefined;
    if (targetCard) {
      track.scrollTo({
        left: targetCard.offsetLeft,
        behavior: 'smooth',
      });
    }
    setActiveIndex(clamped);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    const firstCard = track.children[0] as HTMLElement;
    const stepWidth = firstCard.offsetWidth + 20;
    if (stepWidth > 0) {
      const idx = Math.round(track.scrollLeft / stepWidth);
      const maxIndex = getMaxIndex();
      setActiveIndex(Math.min(Math.max(0, idx), maxIndex));
    }
  };

  return (
    <section className="w-full overflow-x-hidden bg-[#161616] text-white py-14 sm:py-20 border-b border-stone-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
            Fotógrafos que están aprendiendo{' '}
            <span className="text-[#df5615]">con más confianza.</span>
          </h2>
        </div>

        {/* Horizontal Carousel Wrapper */}
        <div className="relative">
          {/* Desktop Side Arrows */}
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="Testimonio anterior"
            className="hidden lg:flex absolute -left-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-stone-900/95 hover:bg-[#df5615] text-white border border-stone-700 hover:border-[#df5615] shadow-xl items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="Siguiente testimonio"
            className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-stone-900/95 hover:bg-[#df5615] text-white border border-stone-700 hover:border-[#df5615] shadow-xl items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Side-by-Side Horizontal Scroll Track */}
          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="relative flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {TESTIMONIALS.map((t) => (
              <div
                key={t.id}
                className="w-full md:w-[calc(50%-0.625rem)] shrink-0 snap-start flex flex-col justify-between bg-[#1f1f1f] rounded-2xl p-5 sm:p-6 border border-stone-800 shadow-lg"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-3 text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed italic mb-5">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-800/80">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    loading="lazy"
                    decoding="async"
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#df5615] shrink-0"
                  />
                  <div className="min-w-0">
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      {t.name}
                    </h3>
                    <p className="text-xs text-stone-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrow Controls & Pagination Dots (Mobile + Desktop) */}
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex - 1)}
            aria-label="Testimonio anterior"
            className="lg:hidden w-10 h-10 rounded-full bg-[#1f1f1f] hover:bg-[#df5615] text-white border border-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => scrollToIndex(idx)}
                aria-label={`Ver testimonio ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  activeIndex === idx
                    ? 'w-7 bg-[#df5615]'
                    : 'w-2.5 bg-stone-700 hover:bg-stone-500'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={() => scrollToIndex(activeIndex + 1)}
            aria-label="Siguiente testimonio"
            className="lg:hidden w-10 h-10 rounded-full bg-[#1f1f1f] hover:bg-[#df5615] text-white border border-stone-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/cheatSheetsData';

export const TestimonialsSection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);

  const prev = () => {
    setStartIndex((curr) => (curr > 0 ? curr - 1 : TESTIMONIALS.length - 2));
  };

  const next = () => {
    setStartIndex((curr) => (curr + 2 < TESTIMONIALS.length ? curr + 1 : 0));
  };

  const visibleTestimonials = [
    TESTIMONIALS[startIndex % TESTIMONIALS.length],
    TESTIMONIALS[(startIndex + 1) % TESTIMONIALS.length],
  ];

  return (
    <section className="w-full bg-[#161616] text-white py-16 sm:py-24 border-b border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            Únete a los{' '}
            <span className="text-[#df5615]">Millones de Fotógrafos</span>{' '}
            que han mejorado su técnica con nuestras Guías Rápidas.
          </h2>
        </div>

        {/* Testimonials Slider Area with Navigation Arrows */}
        <div className="relative flex items-center justify-center">
          {/* Left Arrow */}
          <button
            onClick={prev}
            className="absolute -left-3 sm:-left-6 z-10 w-10 h-10 rounded-full bg-stone-800/80 hover:bg-[#df5615] text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-stone-700 shadow-lg"
            aria-label="Testimonio anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl px-4 sm:px-8">
            {visibleTestimonials.map((t) => (
              <div
                key={t.id}
                className="flex flex-col justify-between bg-[#1f1f1f] rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-xl transition-all hover:border-stone-700"
              >
                <div>
                  {/* Stars */}
                  <div className="flex items-center gap-1 mb-4 text-amber-400">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-stone-300 text-sm sm:text-base leading-relaxed italic mb-6">
                    "{t.quote}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-stone-800/80">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-[#df5615]"
                  />
                  <div>
                    <h3 className="font-bold text-white text-sm sm:text-base">
                      — {t.name}
                    </h3>
                    <p className="text-xs text-stone-400">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={next}
            className="absolute -right-3 sm:-right-6 z-10 w-10 h-10 rounded-full bg-stone-800/80 hover:bg-[#df5615] text-stone-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-stone-700 shadow-lg"
            aria-label="Testimonio siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

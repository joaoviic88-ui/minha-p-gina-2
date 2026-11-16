import React from 'react';
import { Star } from 'lucide-react';
import { TESTIMONIALS } from '../data/cheatSheetsData';

export const TestimonialsSection: React.FC = () => {
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

        {/* Compact 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="flex flex-col justify-between bg-[#1f1f1f] rounded-2xl p-5 sm:p-6 border border-stone-800 shadow-lg"
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
    </section>
  );
};

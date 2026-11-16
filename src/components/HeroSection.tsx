import React from 'react';
import { ArrowRight, CheckCircle2, BookOpen, Zap, Award } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full overflow-x-hidden flex items-center bg-stone-900">
      {/* Background with warm golden hour photographer image */}
      <div
        className="absolute inset-0 bg-cover bg-center md:bg-[center_top]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=1400&q=75')`,
        }}
      >
        {/* Warm photographic sunset gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/55 md:from-amber-950/85 md:via-stone-950/75 md:to-stone-950/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-black/40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-10 sm:py-14 lg:py-20 z-10 text-white w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Headline, Subheadline, 3 Indicators, CTA */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 min-w-0">
            {/* Main Headline */}
            <h1 className="text-2xl sm:text-4xl lg:text-[2.75rem] font-black text-white tracking-tight leading-[1.16] drop-shadow-md">
              Domina los ajustes de tu cámara y{' '}
              <span className="text-amber-400">fotografía con confianza</span>, sin depender del modo automático.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-stone-200 leading-relaxed font-normal max-w-2xl">
              Descubre una colección de 125 guías visuales de fotografía que te ayudarán a comprender la apertura, velocidad de obturación, ISO, iluminación, composición y mucho más.
            </p>

            {/* 3 Indicators below subtitle */}
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-1 text-sm font-semibold text-stone-100">
              <li className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 backdrop-blur-xs">
                <BookOpen className="w-4 h-4 text-amber-400 shrink-0" />
                <span>125 guías visuales.</span>
              </li>
              <li className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 backdrop-blur-xs">
                <Zap className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Acceso digital inmediato.</span>
              </li>
              <li className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-xl px-3.5 py-2.5 backdrop-blur-xs">
                <Award className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Ideal para principiantes.</span>
              </li>
            </ul>

            {/* Primary CTA Button */}
            <div className="pt-2 w-full sm:w-auto">
              <button
                onClick={onCtaClick}
                className="w-full sm:w-auto min-h-[56px] bg-gradient-to-r from-[#df5615] to-[#c7450a] hover:from-[#e96222] hover:to-[#df5615] active:scale-[0.99] text-white px-7 sm:px-9 py-4 rounded-xl font-black text-base sm:text-lg tracking-wide shadow-xl transition-colors flex items-center justify-center gap-2.5 cursor-pointer border border-amber-300/40"
              >
                <span>VER PLANES Y OFERTAS</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </button>
            </div>
          </div>

          {/* Right Column: High-Quality Visual Mockup of the Photography Guides */}
          <div className="lg:col-span-5 min-w-0">
            <div className="relative w-full max-w-md mx-auto">
              {/* Visual 3-sheet layered product mockup */}
              <div className="relative flex items-center justify-center py-2 sm:py-4">
                {/* Left tilted guide */}
                <div className="w-[34%] -mr-6 sm:-mr-8 transform -rotate-6 rounded-xl overflow-hidden shadow-2xl border border-stone-300/80 bg-white z-10">
                  <img
                    src="/assets/aistudio/4_ccec4ea4.png"
                    alt="Guía rápida de fotografía: Auroras Boreales"
                    className="w-full h-auto block"
                    loading="eager"
                    decoding="async"
                  />
                </div>

                {/* Center main guide */}
                <div className="w-[46%] rounded-xl sm:rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)] border-2 border-amber-400 bg-white z-20">
                  <img
                    src="/assets/aistudio/7_c1bb04b7.png"
                    alt="Guía rápida de fotografía: La Vía Láctea"
                    className="w-full h-auto block"
                    loading="eager"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>

                {/* Right tilted guide */}
                <div className="w-[34%] -ml-6 sm:-ml-8 transform rotate-6 rounded-xl overflow-hidden shadow-2xl border border-stone-300/80 bg-white z-10">
                  <img
                    src="/assets/aistudio/5_d7927831.png"
                    alt="Guía rápida de fotografía: Relámpagos"
                    className="w-full h-auto block"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Clean product caption badge */}
              <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm text-stone-200 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Formato PDF visual para móvil, tablet o impresión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

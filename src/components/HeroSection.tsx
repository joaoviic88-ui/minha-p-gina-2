import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShoppingBag } from 'lucide-react';

interface HeroSectionProps {
  onCtaClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onCtaClick }) => {
  return (
    <section className="relative w-full min-h-[640px] md:min-h-[720px] flex items-center overflow-hidden bg-stone-900">
      {/* Background with warm golden hour photographer image */}
      <div 
        className="absolute inset-0 bg-cover bg-center md:bg-[center_top]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        {/* Warm photographic sunset gradient overlay matching the original landing page */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 md:from-amber-950/80 md:via-amber-950/45 md:to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-black/40" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-16 md:py-24 z-10 text-white w-full">
        <div className="max-w-2xl lg:max-w-3xl">
          {/* Eyebrow */}
          <p className="text-amber-300 font-semibold text-sm sm:text-base tracking-wide uppercase mb-3 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 inline" />
            Deja de adivinar los ajustes de tu cámara — empieza a clavar cada toma.
          </p>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-6 drop-shadow-md">
            Especial Online: <br className="hidden sm:inline" />
            <span className="text-white">La Colección Completa de </span>
            <span className="text-amber-400 underline decoration-amber-500/60 decoration-wavy decoration-2">Guías Rápidas</span> de Fotografía
          </h1>

          {/* Bullets with orange styling */}
          <div className="space-y-3.5 mb-8 text-base sm:text-lg text-stone-100 font-medium">
            <div className="flex items-start gap-3">
              <span className="text-amber-400 font-black text-xl leading-none select-none">→</span>
              <p>
                ¡Nuestro <span className="bg-amber-400 text-stone-950 px-2 py-0.5 rounded font-black text-sm tracking-wide uppercase inline-block shadow-xs">paquete #1</span> de Guías Rápidas (Cheat Sheets)!
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-amber-400 font-black text-xl leading-none select-none">→</span>
              <p>
                <strong className="text-white font-extrabold underline decoration-amber-400/50">Confiado</strong> por fotógrafos de todo el mundo.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-amber-400 font-black text-xl leading-none select-none">→</span>
              <p>
                <strong className="text-white font-extrabold underline decoration-amber-400/50">Varios ejemplares</strong> de guías rápidas entregadas.
              </p>
            </div>

            <div className="flex items-start gap-3">
              <span className="text-amber-400 font-black text-xl leading-none select-none">→</span>
              <p>
                <strong>Descarga en cualquier dispositivo o imprímelas.</strong>{' '}
                <span className="bg-red-600/90 text-white px-2 py-0.5 rounded font-bold text-sm inline-block shadow-xs">
                  ¡85% de descuento
                </span>{' '}
                sobre el precio habitual hoy!
              </p>
            </div>
          </div>

          {/* Quick CTA button */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
            <button
              onClick={onCtaClick}
              className="group bg-gradient-to-r from-[#df5615] to-[#c7450a] hover:from-[#e96222] hover:to-[#df5615] text-white px-8 py-4 rounded-xl font-extrabold text-lg sm:text-xl shadow-xl hover:shadow-orange-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 cursor-pointer border border-amber-300/30"
            >
              <ShoppingBag className="w-6 h-6 text-amber-200" />
              <span>Conseguir la Oferta Flash por Solo $10</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <div className="flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-stone-300">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Descarga inmediata en PDF • Garantía de 30 días</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

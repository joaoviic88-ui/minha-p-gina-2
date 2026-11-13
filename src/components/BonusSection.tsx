import React from 'react';
import { Gift, Sparkles } from 'lucide-react';

export const BonusSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#141414] text-white py-16 sm:py-24 overflow-hidden border-y border-stone-800">
      {/* Background camera lens bokeh overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1600&q=80')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/90 via-stone-900/90 to-stone-950/90" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Title Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-amber-400/30">
              <Gift className="w-3.5 h-3.5" />
              <span>Incluido sin costo adicional</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
              Bono Gratis Hoy: <br />
              <span className="text-[#df5615]">
                3 Guías Rápidas de Fundamentos de Cámara
              </span>
            </h2>

            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Valoradas en $27 por separado, hoy las recibes incluidas de forma totalmente gratuita al adquirir tu colección de guías rápidas.
            </p>
          </div>

          {/* Right Bonus Cards Column (Matches cards 1 & 2 in screenshot) */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5">
            {/* Bonus 1 */}
            <div className="bg-white text-stone-900 rounded-xl p-5 sm:p-6 shadow-xl flex items-start gap-4 sm:gap-5 border-l-4 border-[#df5615] transform transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#df5615] text-white font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-md">
                1
              </div>
              <div className="space-y-1.5">
                <h3 className="font-black text-base sm:text-lg text-stone-900 leading-snug">
                  Guía Rápida: Cómo Interpretar el Histograma
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Cómo identificar imágenes subexpuestas o sobreexpuestas, detectar áreas quemadas (clipping), y leer las siluetas del histograma para realizar ajustes de exposición perfectos.
                </p>
              </div>
            </div>

            {/* Bonus 2 */}
            <div className="bg-white text-stone-900 rounded-xl p-5 sm:p-6 shadow-xl flex items-start gap-4 sm:gap-5 border-l-4 border-[#df5615] transform transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#df5615] text-white font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-md">
                2
              </div>
              <div className="space-y-1.5">
                <h3 className="font-black text-base sm:text-lg text-stone-900 leading-snug">
                  Guía Rápida: Distancia Focal y Perspectiva
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Comprende cómo influye la distancia focal en el encuadre, la compresión de planos y la profundidad de campo; además de cuándo usar gran angular vs. teleobjetivo para lograr máximo impacto visual.
                </p>
              </div>
            </div>

            {/* Bonus 3 */}
            <div className="bg-white text-stone-900 rounded-xl p-5 sm:p-6 shadow-xl flex items-start gap-4 sm:gap-5 border-l-4 border-amber-500 transform transition-transform hover:-translate-y-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amber-500 text-white font-black text-lg sm:text-xl flex items-center justify-center shrink-0 shadow-md">
                3
              </div>
              <div className="space-y-1.5">
                <h3 className="font-black text-base sm:text-lg text-stone-900 leading-snug">
                  Guía Rápida: Matriz de Modos de Medición y Enfoque
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                  Referencia rápida para saber al instante si utilizar medición puntual o matricial, y AF continuo o punto único según la velocidad y el contraste de tu escena.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

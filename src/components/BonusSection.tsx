import React, { useState } from 'react';
import { Gift, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

export const BonusSection: React.FC = () => {
  const [openBonuses, setOpenBonuses] = useState<Record<string, boolean>>({});

  const toggleBonus = (num: string) => {
    setOpenBonuses((prev) => ({
      ...prev,
      [num]: !prev[num],
    }));
  };

  const bonuses = [
    {
      num: '1',
      title: 'Guía Rápida: Cómo Interpretar el Histograma',
      description:
        'Comprende la lectura de luces, tonos medios y sombras directamente en la pantalla de tu cámara.',
      benefit:
        'Identifica áreas quemadas o subexpuestas al instante y consigue exposiciones equilibradas desde la toma.',
    },
    {
      num: '2',
      title: 'Guía Rápida: Distancia Focal y Perspectiva',
      description:
        'Visualiza cómo cambia el encuadre, la compresión de planos y la profundidad de campo según el lente utilizado.',
      benefit:
        'Sabe exactamente cuándo elegir gran angular o teleobjetivo para lograr mayor impacto visual en cada escena.',
    },
    {
      num: '3',
      title: 'Guía Rápida: Matriz de Modos de Medición y Enfoque',
      description:
        'Referencia visual para elegir entre medición puntual o matricial y enfoque AF continuo o de punto único.',
      benefit:
        'Ajusta tu cámara en segundos ante escenas rápidas o contrastes exigentes sin perder nitidez en el sujeto.',
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-white text-stone-900 py-14 sm:py-18 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-[#df5615] px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-orange-200 mb-3">
            <Gift className="w-3.5 h-3.5 shrink-0" />
            <span>Incluidos en Fotografía Sin Adivinar</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight">
            Además, recibe <span className="text-[#df5615]">3 bonos exclusivos</span> con tu acceso.
          </h2>
        </div>

        {/* 3 Compact Bonus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-start">
          {bonuses.map((bonus) => {
            const isOpen = Boolean(openBonuses[bonus.num]);
            return (
              <div
                key={bonus.num}
                className="bg-[#faf8f5] rounded-2xl p-5 sm:p-6 border border-stone-200 shadow-xs flex flex-col justify-between gap-4 border-t-4 border-t-[#df5615]"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="w-8 h-8 rounded-full bg-[#df5615] text-white font-black text-sm flex items-center justify-center shrink-0">
                      {bonus.num}
                    </span>
                    <span className="text-xs font-black uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                      Bono Exclusivo
                    </span>
                  </div>

                  <h3 className="font-black text-base sm:text-lg text-stone-900 leading-snug">
                    {bonus.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed">
                    {bonus.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-stone-200/80 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => toggleBonus(bonus.num)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-2 px-3.5 py-2.5 rounded-xl bg-white hover:bg-orange-50/70 border border-stone-200 hover:border-[#df5615]/50 text-left transition-colors cursor-pointer shadow-xs"
                  >
                    <span className="flex items-center gap-2 text-xs sm:text-sm font-bold text-stone-900">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Ver beneficio práctico</span>
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-[#df5615] shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#df5615] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="bg-white rounded-xl p-3 border border-stone-200/90 text-xs sm:text-sm text-stone-700 leading-relaxed">
                      {bonus.benefit}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

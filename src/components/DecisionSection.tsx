import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

interface DecisionSectionProps {
  onBuyClick: () => void;
}

export const DecisionSection: React.FC<DecisionSectionProps> = ({ onBuyClick }) => {
  return (
    <section className="w-full overflow-x-hidden bg-[#fbf9f6] py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-stone-900 tracking-tight leading-tight text-center mb-10 sm:mb-14">
          ¡Es hora de decidir! <br className="hidden sm:inline" />
          <span className="text-[#df5615]">Básicamente tienes 2 opciones:</span>
        </h2>

        {/* 2 Options Text */}
        <div className="space-y-6 text-stone-700 text-sm sm:text-base leading-relaxed">
          {/* Option 1 */}
          <div className="bg-white p-5 sm:p-6 rounded-2xl border border-stone-200 shadow-xs">
            <p>
              <strong className="text-amber-700 font-extrabold uppercase text-xs sm:text-sm tracking-wider mr-2 bg-amber-100 px-2.5 py-1 rounded">
                Opción 1:
              </strong>
              Continuar por tu cuenta, recopilando retazos y fragmentos de consejos fotográficos dispersos por todo internet y foros desactualizados. Te costará meses o años de frustración frente a tomas borrosas o subexpuestas, y es probable que te encuentres con callejones sin salida en los momentos irrepetibles. Pero bueno, ¡quizá pienses que eso forma parte de la curva de aprendizaje!
            </p>
          </div>

          {/* Option 2 */}
          <div className="bg-amber-50/70 p-5 sm:p-6 rounded-2xl border-2 border-amber-300 shadow-md">
            <p>
              <strong className="text-[#df5615] font-extrabold uppercase text-xs sm:text-sm tracking-wider mr-2 bg-orange-100 px-2.5 py-1 rounded">
                Opción 2:
              </strong>
              Acelerar de inmediato tu progreso con nuestra cuidada colección de Guías Rápidas de Fotografía. Diseñadas por fotógrafos profesionales para fotógrafos que aman capturar la realidad, estas guías te marcan un camino recto a través del ruido informativo: fórmulas exactas, ajustes comprobados paso a paso y trucos de expertos reunidos en un único archivo siempre disponible. Sin más dudas ni oportunidades perdidas: solo instrucciones directas y concisas para elevar tus tomas a un nivel profesional hoy mismo.
            </p>
          </div>
        </div>

        {/* Reassurance text */}
        <p className="text-center text-sm sm:text-base font-semibold text-stone-800 my-8 italic">
          Te encantan las Guías Rápidas o no pagas nada por ellas. Así de simple.
        </p>

        {/* Bottom Rust-Orange Button matching screenshot */}
        <div className="text-center">
          <button
            onClick={onBuyClick}
            className="inline-flex items-center justify-center gap-3 bg-[#b9501a] hover:bg-[#a34413] text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black text-lg sm:text-xl shadow-xl hover:shadow-orange-900/25 transition-all transform hover:-translate-y-0.5 cursor-pointer border border-amber-300/30"
          >
            <Shield className="w-5 h-5 text-amber-300" />
            <span>Consigue tus Guías Rápidas, Sin Riesgo</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

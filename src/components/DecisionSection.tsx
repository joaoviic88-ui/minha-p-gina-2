import React from 'react';
import { ArrowRight, Lock, Zap, ShieldCheck } from 'lucide-react';

interface DecisionSectionProps {
  onBuyClick: () => void;
}

export const DecisionSection: React.FC<DecisionSectionProps> = ({ onBuyClick }) => {
  return (
    <section className="w-full overflow-x-hidden bg-stone-900 text-white py-14 sm:py-20 border-b border-stone-800">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
          Es hora de fotografiar{' '}
          <span className="text-amber-400">con más confianza.</span>
        </h2>

        <p className="text-stone-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Deja de improvisar y comienza a comprender mejor los ajustes de tu cámara con una colección de guías prácticas y visuales.
        </p>

        <div className="pt-2">
          <button
            onClick={onBuyClick}
            className="w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#df5615] to-[#c8480d] hover:from-[#eb601e] hover:to-[#df5615] text-white px-7 sm:px-10 py-4 rounded-2xl font-black text-base sm:text-lg tracking-wide shadow-xl transition-colors cursor-pointer border border-amber-300/40"
          >
            <span>VER PLANES Y ELEGIR MI COLECCIÓN</span>
            <ArrowRight className="w-5 h-5 shrink-0" />
          </button>
        </div>

        {/* Concise Security & Digital Access Indicators */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-stone-300">
          <span className="flex items-center gap-1.5">
            <Lock className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Compra segura</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Acceso digital inmediato</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Garantía de 30 días</span>
          </span>
        </div>
      </div>
    </section>
  );
};

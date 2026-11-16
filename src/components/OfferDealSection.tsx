import React from 'react';

export const OfferDealSection: React.FC = () => {
  return (
    <section className="w-full overflow-x-hidden bg-white py-14 sm:py-18 border-b border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        {/* Existing 30-Day Guarantee Seal */}
        <div className="mb-6 flex justify-center">
          <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-2 shadow-xl flex items-center justify-center border-4 border-amber-300 ring-4 ring-blue-900/20">
            <div className="w-full h-full rounded-full border-2 border-dashed border-amber-200/80 flex flex-col items-center justify-center text-white text-center p-1">
              <span className="text-[9px] font-black tracking-widest uppercase text-amber-300">
                MONEY BACK
              </span>
              <span className="text-2xl sm:text-3xl font-black leading-none my-0.5 text-white drop-shadow">
                30
              </span>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-amber-200 leading-none">
                DAY
              </span>
              <span className="text-[8px] font-bold tracking-widest uppercase text-white/90">
                GUARANTEE
              </span>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight mb-4">
          Compra con tranquilidad.
        </h2>

        {/* Guarantee Copy */}
        <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Tu compra está protegida por nuestra garantía de 30 días. Consulta las condiciones de garantía y solicita asistencia si lo necesitas.
        </p>
      </div>
    </section>
  );
};

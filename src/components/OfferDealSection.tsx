import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface OfferDealSectionProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export const OfferDealSection: React.FC<OfferDealSectionProps> = ({ hours, minutes, seconds }) => {
  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <section className="w-full bg-[#fbf9f6] py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight mb-8">
          La oferta actual <br className="sm:hidden" />
          <span className="text-[#df5615]">para la venta flash:</span>
        </h2>

        {/* Persuasive copy paragraphs */}
        <div className="space-y-5 text-stone-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl mx-auto text-left sm:text-center">
          <p>
            Nuestro equipo de fotógrafos profesionales, redactores técnicos, diseñador gráfico y maquetador ha trabajado sin descanso durante meses para traerte la colección definitiva de Guías Rápidas de Fotografía. Se han dedicado incontables horas a investigar, sintetizar, diseñar y perfeccionar cada ficha para ofrecer la información más valiosa y comprensible para fotógrafos de todos los niveles.
          </p>
          <p>
            Fue un esfuerzo colosal lograr que las guías no solo fueran ricas en técnica, sino también visualmente intuitivas y atractivas. El trabajo duro y la dedicación han dado como resultado un recurso único que estamos seguros elevará la calidad de tus tomas de por vida.
          </p>
          <p className="font-semibold text-stone-900">
            Las guías se venden habitualmente a 1 $ por ficha, lo que sumaría más de 125 $ por la colección completa. Pero exclusivamente durante esta <span className="text-[#df5615] underline decoration-[#df5615]/40 font-extrabold">venta flash online</span>, puedes conseguirlas todas por <span className="text-emerald-700 font-extrabold text-xl">solo 20 $</span>.
          </p>
        </div>

        {/* 30-Day Money-Back Guarantee Seal (Classic blue badge from screenshot) */}
        <div className="my-12 flex flex-col items-center">
          <div className="relative group cursor-default">
            {/* Blue Guarantee Rosette Graphic */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-full bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-950 p-2 shadow-2xl flex items-center justify-center border-4 border-amber-300 ring-4 ring-blue-900/40">
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

          <p className="mt-5 text-xs sm:text-sm text-stone-600 max-w-2xl mx-auto italic leading-relaxed">
            Nuestras Guías Rápidas también incluyen una <strong>garantía de devolución de dinero de 30 días</strong>. Si no estás completamente satisfecho con tu compra, simplemente contáctanos dentro de los 30 días posteriores y te devolveremos el 100% de tu dinero. Sin preguntas ni condiciones.
          </p>
        </div>

        {/* Flash Sale Countdown Box (Matches the exact framed box from the screenshot) */}
        <div className="inline-block bg-white border border-stone-300 rounded-2xl shadow-lg p-5 sm:p-7 max-w-md w-full">
          <h3 className="text-base sm:text-lg font-black text-stone-900 mb-3 tracking-wide">
            Venta flash: <span className="text-[#df5615] font-extrabold">¡quedan pocas horas!</span>
          </h3>

          <div className="flex items-center justify-center gap-2 sm:gap-4 font-mono">
            {/* Hours */}
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-stone-900 tracking-wider">
                {pad(hours)}
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">
                Horas
              </span>
            </div>

            <span className="text-2xl sm:text-3xl font-black text-stone-400 -mt-4">:</span>

            {/* Minutes */}
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-stone-900 tracking-wider">
                {pad(minutes)}
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">
                Minutos
              </span>
            </div>

            <span className="text-2xl sm:text-3xl font-black text-stone-400 -mt-4">:</span>

            {/* Seconds */}
            <div className="flex flex-col items-center">
              <div className="text-3xl sm:text-4xl font-black text-[#df5615] tracking-wider">
                {pad(seconds)}
              </div>
              <span className="text-[10px] sm:text-xs font-semibold text-stone-500 uppercase tracking-wider mt-1">
                Segundos
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

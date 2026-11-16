import React from 'react';
import { AlertCircle, Sliders, Timer, Sparkles } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const problems = [
    {
      icon: <AlertCircle className="w-5 h-5 text-[#df5615] shrink-0" />,
      text: 'No saber qué ISO utilizar en diferentes condiciones de luz.',
    },
    {
      icon: <Timer className="w-5 h-5 text-[#df5615] shrink-0" />,
      text: 'Tener dificultades para elegir la velocidad de obturación adecuada.',
    },
    {
      icon: <Sliders className="w-5 h-5 text-[#df5615] shrink-0" />,
      text: 'No comprender cómo combinar apertura, ISO y velocidad.',
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#fcfaf7] py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Main Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 leading-tight mb-6 sm:mb-8">
          Deja de adivinar los ajustes de tu cámara.{' '}
          <span className="text-[#df5615] block sm:inline">
            Aprende a utilizarlos con confianza.
          </span>
        </h2>

        {/* Intro Text */}
        <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          <p>
            ¿Te ha pasado que quieres capturar una fotografía increíble, pero no sabes qué configuración utilizar?
          </p>
          <p>
            Comprender los ajustes de tu cámara puede marcar una gran diferencia en tus fotografías.
          </p>
          <p>
            Con nuestras guías visuales, podrás consultar explicaciones prácticas y aprender a utilizar los principales recursos de tu cámara de forma más sencilla.
          </p>
        </div>

        {/* 3 Common Problems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 text-left mb-10">
          {problems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white border border-stone-200 rounded-2xl p-5 shadow-xs flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-50 border border-orange-200/70 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <p className="text-sm sm:text-base font-semibold text-stone-800 leading-snug">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Phrase */}
        <div className="inline-flex items-center justify-center gap-2.5 text-sm sm:text-base text-stone-900 font-bold bg-amber-50 border border-amber-200/80 px-5 py-3.5 rounded-xl max-w-full">
          <Sparkles className="w-5 h-5 text-[#df5615] shrink-0" />
          <span>Aprende paso a paso y deja de depender de la improvisación.</span>
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { Layers, MailCheck, Camera } from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      num: '1',
      icon: <Layers className="w-6 h-6 text-[#df5615]" />,
      title: 'Elige tu colección',
      description: 'Selecciona el plan que mejor se adapte a tus necesidades.',
    },
    {
      num: '2',
      icon: <MailCheck className="w-6 h-6 text-[#df5615]" />,
      title: 'Recibe tu acceso',
      description: 'Accede a los materiales digitales después de completar tu compra.',
    },
    {
      num: '3',
      icon: <Camera className="w-6 h-6 text-[#df5615]" />,
      title: 'Aprende y practica',
      description: 'Consulta las guías y aplica los conocimientos en tus fotografías.',
    },
  ];

  return (
    <section className="w-full overflow-x-hidden bg-[#faf8f5] py-14 sm:py-18 border-b border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight leading-tight">
            Empieza a utilizar tus guías{' '}
            <span className="text-[#df5615]">en pocos pasos.</span>
          </h2>
        </div>

        {/* 3 Steps: Vertical on mobile, Horizontal on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl p-6 border border-stone-200 shadow-xs flex flex-col items-center text-center gap-3"
            >
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 border border-orange-200 flex items-center justify-center">
                  {step.icon}
                </div>
                <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-stone-900 text-white text-xs font-black flex items-center justify-center">
                  {step.num}
                </span>
              </div>

              <h3 className="text-lg font-extrabold text-stone-900">
                {step.title}
              </h3>

              <p className="text-sm text-stone-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Play, Pause, Volume2, Maximize2, Sparkles } from 'lucide-react';

export const ValueProposition: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full bg-[#fcfaf7] py-16 sm:py-20 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-stone-900 text-center max-w-4xl mx-auto leading-tight mb-12 sm:mb-16">
          Deja de adivinar los ajustes de tu cámara.{' '}
          <span className="text-[#df5615] block sm:inline">
            Empieza a fotografiar con confianza.
          </span>
        </h2>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-5 text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
            <p>
              ¿Alguna vez has tenido tu cámara en las manos sin saber qué configuración utilizar para conseguir la foto que imaginas?
            </p>
            <p>
              El diafragma, la velocidad de obturación, el ISO, el enfoque y tantos otros ajustes pueden parecer complicados cuando estás empezando en el mundo de la fotografía.
            </p>
            <p>
              Y lo peor es tener que probar una y otra vez sin entender realmente qué necesitas cambiar para conseguir el resultado que buscas.
            </p>
            <p className="font-extrabold text-stone-900 text-lg sm:text-xl">
              Por eso creamos FOTOGRAFÍA SIN ADIVINAR.
            </p>
            <p>
              Una colección completa de guías prácticas y visuales que transforma conceptos técnicos en explicaciones sencillas, para que puedas consultar, comprender y aplicar cada ajuste directamente en tu cámara.
            </p>
            <p>
              Imprime tus guías, tenlas siempre a mano y descubre cómo tomar decisiones más seguras en cada fotografía.
            </p>

            <div className="pt-2 flex items-center gap-3 text-sm sm:text-base text-stone-900 font-bold bg-amber-50 border border-amber-200/80 p-3.5 rounded-lg">
              <Sparkles className="w-5 h-5 text-[#df5615] shrink-0" />
              <span>Menos dudas. Menos prueba y error. Más confianza detrás de la cámara.</span>
            </div>
          </div>

          {/* Right Video / Visual Column */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-stone-900 border-4 border-stone-800 group">
              {/* Media Preview: Photographers watching & capturing Northern Lights */}
              <div className="relative aspect-video w-full overflow-hidden bg-black flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1579033461380-adb47c3eb938?auto=format&fit=crop&w=1200&q=80"
                  alt="Fotógrafos capturando la aurora boreal"
                  className={`w-full h-full object-cover transition-transform duration-700 ${isPlaying ? 'scale-105 filter brightness-110' : 'group-hover:scale-102'}`}
                />
                
                {/* Visual Graphic Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                {/* Subtle Sheet Badge Overlay in the corner */}
                <div className="absolute top-4 left-4 bg-black/75 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>Demostración de Uso en Terreno</span>
                </div>

                {/* Big Center Play Button if paused */}
                {!isPlaying && (
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#df5615]/90 hover:bg-[#df5615] text-white flex items-center justify-center shadow-2xl hover:scale-110 transition-all cursor-pointer backdrop-blur-xs border-2 border-white/40"
                    aria-label="Reproducir video"
                  >
                    <Play className="w-7 h-7 fill-white translate-x-0.5" />
                  </button>
                )}
              </div>

              {/* Realistic Video Player Controls Bar */}
              <div className="bg-stone-950 px-4 py-2.5 flex items-center justify-between text-stone-300 text-xs sm:text-sm select-none border-t border-stone-800">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="text-stone-300 hover:text-white transition-colors cursor-pointer"
                    aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                  </button>
                  <span className="font-mono text-xs text-stone-400">
                    {isPlaying ? '0:24 / 0:55' : '0:00 / 0:55'}
                  </span>
                </div>

                {/* Mock timeline scrubber */}
                <div className="flex-1 mx-4 h-1.5 bg-stone-700 rounded-full overflow-hidden relative cursor-pointer">
                  <div 
                    className="h-full bg-[#df5615] transition-all duration-300"
                    style={{ width: isPlaying ? '43%' : '0%' }}
                  />
                </div>

                <div className="flex items-center gap-3">
                  <Volume2 className="w-4 h-4 text-stone-400 hover:text-white cursor-pointer" />
                  <Maximize2 className="w-4 h-4 text-stone-400 hover:text-white cursor-pointer" />
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-stone-500 mt-2 italic">
              Mira cómo consultar tus guías en menos de 5 segundos en mitad de una sesión fotográfica real.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Download, Printer, Smartphone, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export interface RealGuideItem {
  id: string;
  num: string;
  title: string;
  category: string;
  sheetNumber: string;
  imageSrc: string;
  summary: string;
  quickSettings: {
    iso: string;
    aperture: string;
    shutter: string;
  };
}

export const REAL_GUIDES_PREVIEW: RealGuideItem[] = [
  {
    id: 'auroras',
    num: '01',
    title: 'AURORAS BOREALES',
    category: 'EDICIÓN AVENTURA',
    sheetNumber: 'Hoja #1 de 125',
    imageSrc: '/assets/aistudio/4_ccec4ea4.png',
    summary: 'Ajustes para capturar luces verdes y violetas polares con máxima definición, cuidando la temperatura de color y evitando que la aurora se desdibuje.',
    quickSettings: {
      iso: 'ISO 1600–3200',
      aperture: 'f/1.4–f/2.8',
      shutter: '5–15 s'
    }
  },
  {
    id: 'relampagos',
    num: '02',
    title: 'RELÁMPAGOS',
    category: 'EDICIÓN AVENTURA',
    sheetNumber: 'Hoja #2 de 125',
    imageSrc: '/assets/aistudio/5_d7927831.png',
    summary: 'Captura descargas eléctricas nocturnas mediante exposición larga y modo Bulb sin depender de los reflejos, protegiendo tu equipo y encuadre.',
    quickSettings: {
      iso: 'ISO 100–400',
      aperture: 'f/5.6–f/8',
      shutter: '10–30 s o Bulb'
    }
  },
  {
    id: 'vialactea',
    num: '03',
    title: 'LA VÍA LÁCTEA',
    category: 'EDICIÓN AVENTURA',
    sheetNumber: 'Hoja #3 de 125',
    imageSrc: '/assets/aistudio/7_c1bb04b7.png',
    summary: 'Fotografía el núcleo galáctico con máxima nitidez y sin trazos indeseados de estrellas aplicando la Regla de los 500 y apertura máxima.',
    quickSettings: {
      iso: 'ISO 3200–6400',
      aperture: 'f/1.4–f/2.8',
      shutter: '15–25 s'
    }
  }
];

interface PrintAndTakeSectionProps {
  onOpenPreview?: (index: number) => void;
}

export const PrintAndTakeSection: React.FC<PrintAndTakeSectionProps> = ({ onOpenPreview }) => {
  const [activeSheetIndex, setActiveSheetIndex] = useState(0);
  const currentSheet = REAL_GUIDES_PREVIEW[activeSheetIndex];

  const prevSheet = () => {
    setActiveSheetIndex((prev) => (prev > 0 ? prev - 1 : REAL_GUIDES_PREVIEW.length - 1));
  };

  const nextSheet = () => {
    setActiveSheetIndex((prev) => (prev < REAL_GUIDES_PREVIEW.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className="w-full overflow-x-hidden bg-[#fbf9f6] py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 min-w-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Imprímelas y <br />
              <span className="text-[#df5615]">llévalas contigo</span>
            </h2>

            <div className="space-y-4 text-stone-700 text-base sm:text-lg leading-relaxed font-normal">
              <p>
                Nuestras guías rápidas de fotografía están disponibles en formato digital (descarga instantánea en archivo PDF), lo que significa que puedes acceder a ellas desde cualquier dispositivo: ya sea tu teléfono móvil, tableta o portátil. Y como son digitales, puedes imprimirlas cómodamente si prefieres tener una copia física plastificada.
              </p>
              <p>
                Esto las convierte en el compañero perfecto para cualquier aventura fotográfica. Puedes llevarlas contigo dondequiera que vayas y consultarlas en segundos siempre que necesites un recordatorio rápido o un consejo técnico sobre el terreno.
              </p>
              <p>
                Las numerosas ayudas visuales, tablas de valores e ilustraciones ayudan a simplificar conceptos complejos y proporcionan una comprensión clara y concisa de los diferentes ajustes y técnicas de cámara.
              </p>
            </div>

            {/* Decorative orange underline */}
            <div className="h-1.5 w-32 bg-gradient-to-r from-[#df5615] to-amber-400 rounded-full" />

            <div className="grid grid-cols-3 gap-3 pt-4 text-center">
              <div className="p-3 bg-white rounded-xl shadow-xs border border-stone-200">
                <Smartphone className="w-5 h-5 text-[#df5615] mx-auto mb-1.5" />
                <span className="text-xs font-bold text-stone-800 block">En tu Móvil</span>
                <span className="text-[10px] text-stone-500">Siempre a mano</span>
              </div>
              <div className="p-3 bg-white rounded-xl shadow-xs border border-stone-200">
                <Printer className="w-5 h-5 text-[#df5615] mx-auto mb-1.5" />
                <span className="text-xs font-bold text-stone-800 block">Imprimibles</span>
                <span className="text-[10px] text-stone-500">Formato A4 o Fichas</span>
              </div>
              <div className="p-3 bg-white rounded-xl shadow-xs border border-stone-200">
                <Download className="w-5 h-5 text-[#df5615] mx-auto mb-1.5" />
                <span className="text-xs font-bold text-stone-800 block">PDF Vectorial</span>
                <span className="text-[10px] text-stone-500">Nitidez sin límites</span>
              </div>
            </div>
          </div>

          {/* Right Sheet Preview Card - Displaying the 3 Authentic Real Guides */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-stone-300 p-4 sm:p-6 relative">
              {/* Sheet Top Brand Header */}
              <div className="border-b-2 border-stone-800 pb-3 mb-3 flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-black tracking-widest text-[#df5615] uppercase block">
                    {currentSheet.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
                    {currentSheet.title}
                  </h3>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-black text-stone-400 uppercase tracking-widest block">
                    GUÍAS RÁPIDAS
                  </span>
                  <span className="text-[9px] bg-stone-100 text-stone-700 px-2.5 py-0.5 rounded font-mono font-bold">
                    {currentSheet.sheetNumber}
                  </span>
                </div>
              </div>

              {/* Sub description */}
              <p className="text-xs text-stone-600 mb-3 italic leading-snug">
                {currentSheet.summary}
              </p>

              {/* Real Sheet High-Resolution Image Preview */}
              <div 
                onClick={() => onOpenPreview && onOpenPreview(activeSheetIndex)}
                className="relative rounded-xl overflow-hidden shadow-lg border border-stone-300 cursor-pointer group bg-stone-100"
              >
                <img
                  src={currentSheet.imageSrc}
                  alt={currentSheet.title}
                  className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
                />

                {/* Hover overlay hint */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white text-stone-900 text-xs font-bold px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5">
                    <ZoomIn className="w-4 h-4 text-[#df5615]" />
                    <span>Ver ficha en tamaño completo</span>
                  </span>
                </div>
              </div>

              {/* Quick Settings Pill Bar */}
              <div className="grid grid-cols-3 gap-2 mt-3 pt-3 border-t border-stone-200 text-center text-xs">
                <div className="bg-stone-50 py-1.5 px-2 rounded-lg border border-stone-200">
                  <span className="text-[9px] text-stone-500 uppercase font-bold block">ISO</span>
                  <span className="font-extrabold text-stone-800 text-[11px]">{currentSheet.quickSettings.iso}</span>
                </div>
                <div className="bg-stone-50 py-1.5 px-2 rounded-lg border border-stone-200">
                  <span className="text-[9px] text-stone-500 uppercase font-bold block">Apertura</span>
                  <span className="font-extrabold text-stone-800 text-[11px]">{currentSheet.quickSettings.aperture}</span>
                </div>
                <div className="bg-stone-50 py-1.5 px-2 rounded-lg border border-stone-200">
                  <span className="text-[9px] text-stone-500 uppercase font-bold block">Obturador</span>
                  <span className="font-extrabold text-stone-800 text-[11px]">{currentSheet.quickSettings.shutter}</span>
                </div>
              </div>

              {/* Interactive Carousel Pagination Controls (Dots & Navigation) */}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-stone-200 text-stone-500">
                <button
                  onClick={prevSheet}
                  className="p-1 hover:text-[#df5615] transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
                  aria-label="Ficha anterior"
                >
                  <ChevronLeft className="w-5 h-5" />
                  <span className="hidden sm:inline">Anterior</span>
                </button>

                <div className="flex items-center gap-2">
                  {REAL_GUIDES_PREVIEW.map((sheet, dotIdx) => (
                    <button
                      key={sheet.id}
                      onClick={() => setActiveSheetIndex(dotIdx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        activeSheetIndex === dotIdx
                          ? 'w-7 bg-[#df5615]'
                          : 'w-2.5 bg-stone-300 hover:bg-stone-400'
                      }`}
                      aria-label={`Ver ${sheet.title}`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextSheet}
                  className="p-1 hover:text-[#df5615] transition-colors cursor-pointer flex items-center gap-1 text-xs font-bold"
                  aria-label="Ficha siguiente"
                >
                  <span className="hidden sm:inline">Siguiente</span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

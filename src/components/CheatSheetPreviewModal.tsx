import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Shield, ShoppingCart, ZoomIn } from 'lucide-react';

export const REAL_CHEAT_SHEETS = [
  {
    id: '01',
    num: '01',
    title: 'Auroras boreales',
    src: '/assets/aistudio/4_ccec4ea4.png',
    desc: 'Luces verdes y violetas cerca de los polos. Ajustes para ISO 1600-3200, f/1.4-f/2.8 y 5-15s.'
  },
  {
    id: '02',
    num: '02',
    title: 'Relámpagos',
    src: '/assets/aistudio/5_d7927831.png',
    desc: 'Descargas eléctricas con larga exposición nocturna sin depender de reflejos. Modo Bulb y f/5.6-f/8.'
  },
  {
    id: '03',
    num: '03',
    title: 'La Vía Láctea',
    src: '/assets/aistudio/7_c1bb04b7.png',
    desc: 'Banda galáctica en cielos oscuros. ISO 3200-6400, f/1.4-f/2.8, 15-25s y la regla de los 500.'
  },
  {
    id: '04',
    num: '04',
    title: 'Rastros estelares',
    src: '/assets/aistudio/6_514c27e5.png',
    desc: 'Líneas de luz del movimiento aparente de estrellas. Apilado de 60 a 200 fotos de 30s.'
  }
];

interface CheatSheetPreviewModalProps {
  isOpen: boolean;
  initialIndex?: number;
  onClose: () => void;
  onGetDeal: () => void;
}

export const CheatSheetPreviewModal: React.FC<CheatSheetPreviewModalProps> = ({
  isOpen,
  initialIndex = 2,
  onClose,
  onGetDeal
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(initialIndex);
    }
  }, [isOpen, initialIndex]);

  if (!isOpen) return null;

  const currentSheet = REAL_CHEAT_SHEETS[currentIndex] || REAL_CHEAT_SHEETS[0];

  const prev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : REAL_CHEAT_SHEETS.length - 1));
  };

  const next = () => {
    setCurrentIndex((prev) => (prev < REAL_CHEAT_SHEETS.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/90 backdrop-blur-md animate-fadeIn">
      <div className="bg-stone-950 rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden border border-stone-800 text-stone-100 relative max-h-[94vh] flex flex-col">
        {/* Header */}
        <div className="bg-stone-900 text-white p-4 sm:p-5 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-full bg-[#df5615] text-white flex items-center justify-center text-xs font-black">
              {currentSheet.num}
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-black leading-tight text-white">
                Ficha Técnica: {currentSheet.title}
              </h3>
              <p className="text-[11px] text-stone-400">
                Muestra real {currentIndex + 1} de {REAL_CHEAT_SHEETS.length} (de 125 fichas incluidas)
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sheet Image Area */}
        <div className="overflow-y-auto p-4 sm:p-6 flex-1 flex flex-col items-center justify-center bg-stone-900/60">
          <div className="relative max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden border border-stone-700 group">
            <img
              src={currentSheet.src}
              alt={currentSheet.title}
              className="w-full h-auto object-contain block"
            />

            {/* Subtle Zoom Hint */}
            <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[11px] px-2.5 py-1 rounded-full flex items-center gap-1.5 opacity-90">
              <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
              <span>Alta Definición Vectorial</span>
            </div>
          </div>

          {/* Selector dots & Arrows */}
          <div className="flex items-center justify-between w-full max-w-md mt-4 text-stone-300">
            <button
              onClick={prev}
              className="flex items-center gap-1 text-xs font-bold bg-stone-800 hover:bg-[#df5615] hover:text-white px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Anterior</span>
            </button>

            <div className="flex items-center gap-1.5">
              {REAL_CHEAT_SHEETS.map((sheet, idx) => (
                <button
                  key={sheet.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`transition-all rounded-full cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 h-2 bg-[#df5615]'
                      : 'w-2 h-2 bg-stone-700 hover:bg-stone-500'
                  }`}
                  aria-label={`Ver ${sheet.title}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="flex items-center gap-1 text-xs font-bold bg-stone-800 hover:bg-[#df5615] hover:text-white px-3 py-1.5 rounded-lg transition-colors cursor-pointer"
            >
              <span>Siguiente</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Action Footer */}
        <div className="bg-stone-900 p-4 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-xs text-stone-300">
            <Shield className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Colección de 125 fichas en PDF + Garantía 30 Días</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onGetDeal();
            }}
            className="w-full sm:w-auto bg-[#df5615] hover:bg-[#c8480d] text-white px-6 py-2.5 rounded-xl font-black text-sm flex items-center justify-center gap-2 shadow-lg cursor-pointer transition-all"
          >
            <ShoppingCart className="w-4 h-4" />
            <span>Obtener las 125 Guías por Solo $7</span>
          </button>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { X, Camera, Aperture, Gauge, Clock, Layers, Sparkles, Sliders } from 'lucide-react';
import { PhotoSample } from '../types';

interface PhotoLightboxModalProps {
  photo: PhotoSample | null;
  onClose: () => void;
  onGetDeal: () => void;
}

export const PhotoLightboxModal: React.FC<PhotoLightboxModalProps> = ({ photo, onClose, onGetDeal }) => {
  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="bg-stone-900 rounded-3xl shadow-2xl max-w-3xl w-full overflow-hidden border border-stone-800 text-white relative max-h-[92vh] flex flex-col">
        {/* Modal Top Bar */}
        <div className="p-4 sm:p-5 flex items-center justify-between border-b border-stone-800 bg-stone-950/80 shrink-0">
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
            <Camera className="w-4 h-4" />
            <span>Ficha Técnica de Disparo</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Area */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6">
          {/* Photo Preview */}
          <div className="relative rounded-2xl overflow-hidden aspect-video bg-black shadow-inner border border-stone-800">
            <img
              src={photo.imageUrl}
              alt={photo.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4">
              <h3 className="text-xl sm:text-2xl font-black text-white">{photo.title}</h3>
              <p className="text-sm text-stone-300">{photo.subtitle}</p>
            </div>
          </div>

          {/* Camera Settings Grid (Cheat Sheet Breakdown) */}
          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-stone-400 mb-3 flex items-center gap-1.5">
              <Sliders className="w-4 h-4 text-[#df5615]" />
              Ajustes Recomendados en la Guía
            </h4>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-stone-200">
              <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                <span className="text-[10px] text-stone-400 uppercase font-bold block mb-1 flex items-center gap-1">
                  <Aperture className="w-3 h-3 text-amber-400" />
                  Apertura
                </span>
                <span className="font-mono text-base font-black text-amber-300">
                  {photo.settings.aperture}
                </span>
              </div>

              <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                <span className="text-[10px] text-stone-400 uppercase font-bold block mb-1 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-amber-400" />
                  Obturador
                </span>
                <span className="font-mono text-base font-black text-amber-300">
                  {photo.settings.shutterSpeed}
                </span>
              </div>

              <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                <span className="text-[10px] text-stone-400 uppercase font-bold block mb-1 flex items-center gap-1">
                  <Gauge className="w-3 h-3 text-amber-400" />
                  Sensibilidad
                </span>
                <span className="font-mono text-base font-black text-amber-300">
                  ISO {photo.settings.iso}
                </span>
              </div>

              <div className="bg-stone-800/80 p-3 rounded-xl border border-stone-700">
                <span className="text-[10px] text-stone-400 uppercase font-bold block mb-1 flex items-center gap-1">
                  <Layers className="w-3 h-3 text-amber-400" />
                  Lente / Focal
                </span>
                <span className="font-mono text-base font-black text-amber-300">
                  {photo.settings.focalLength}
                </span>
              </div>
            </div>
          </div>

          {/* Pro tip box */}
          <div className="bg-amber-950/40 border border-amber-600/40 rounded-xl p-4 text-stone-300 text-xs sm:text-sm">
            <span className="font-black text-amber-300 uppercase tracking-wide text-xs block mb-1 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Consejo Pro de la Guía:
            </span>
            <p className="leading-relaxed">{photo.settings.proTip}</p>
            {photo.settings.filter && (
              <p className="mt-2 text-stone-400">
                <strong className="text-stone-300">Accesorio recomendado:</strong> {photo.settings.filter}
              </p>
            )}
          </div>

          {/* Call to action inside modal */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-stone-800">
            <div className="text-xs text-stone-400 text-center sm:text-left">
              Esta es 1 de las 125 situaciones cubiertas paso a paso en la colección completa.
            </div>

            <button
              onClick={() => {
                onClose();
                onGetDeal();
              }}
              className="bg-[#df5615] hover:bg-[#c8480d] text-white px-6 py-3 rounded-xl font-black text-sm tracking-wide shadow-lg cursor-pointer transition-all w-full sm:w-auto"
            >
              Obtener las 125 Guías por Solo $20
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

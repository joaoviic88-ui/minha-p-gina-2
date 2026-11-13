import React, { useState } from 'react';
import { Check, Eye, Sparkles, Camera } from 'lucide-react';
import {
  ADVENTURE_TOPICS_SPANISH,
  CAMERA_FUNDAMENTALS_TOPICS_SPANISH,
  COMPOSITION_TOPICS_SPANISH,
  LIGHTING_TOPICS_SPANISH,
  SAMPLE_PHOTOS
} from '../data/cheatSheetsData';
import { PhotoSample } from '../types';

interface CheatSheetsShowcaseProps {
  onPhotoClick: (photo: PhotoSample) => void;
  onPreviewSheet: (index?: number) => void;
}

type TabKey = 'adventure' | 'camera' | 'composition' | 'lighting';

export const CheatSheetsShowcase: React.FC<CheatSheetsShowcaseProps> = ({ onPhotoClick, onPreviewSheet }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('adventure');

  const tabs = [
    { id: 'adventure' as TabKey, label: '42 Guías de Fotografía de Aventura', count: 42 },
    { id: 'camera' as TabKey, label: '22 Guías de Fundamentos de Cámara', count: 22 },
    { id: 'composition' as TabKey, label: '22 Guías de Composición Crítica', count: 22 },
    { id: 'lighting' as TabKey, label: '43 Guías de Iluminación Fotográfica', count: 43 },
  ];

  const getActiveTopics = () => {
    switch (activeTab) {
      case 'adventure':
        return ADVENTURE_TOPICS_SPANISH;
      case 'camera':
        return CAMERA_FUNDAMENTALS_TOPICS_SPANISH;
      case 'composition':
        return COMPOSITION_TOPICS_SPANISH;
      case 'lighting':
        return LIGHTING_TOPICS_SPANISH;
    }
  };

  const getTabDescription = () => {
    switch (activeTab) {
      case 'adventure':
        return 'Para las situaciones fotográficas más desafiantes que puedas encontrar en tus viajes y expediciones, tales como...';
      case 'camera':
        return 'Domina los controles y botones esenciales de tu equipo para disparar en manual con total soltura, tales como...';
      case 'composition':
        return 'Entrena tu ojo para encontrar encuadres potentes, guiar la mirada del espectador y crear impacto visual, tales como...';
      case 'lighting':
        return 'Aprende a esculpir con luz natural, modificadores y flashes para obtener tomas nítidas en cualquier condición, tales como...';
    }
  };

  return (
    <section id="temas-cubiertos" className="w-full bg-[#fbf9f6] py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight mb-4">
            125 Guías Rápidas <br className="hidden sm:inline" />
            <span className="text-[#df5615]">¡Para Dominar los Temas Clave!</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg">
            Todo lo que necesitas saber antes de presionar el obturador, condensado en fichas visuales de alta precisión técnica.
          </p>
        </div>

        {/* Real Cheat Sheets Fan Visual Showcase */}
        <div className="relative max-w-4xl mx-auto mb-16 text-center">
          <div className="relative inline-block cursor-pointer group" onClick={() => onPreviewSheet(2)}>
            {/* Visual Fan with the 5 Authentic Product Images */}
            <div className="relative z-10 flex items-center justify-center -space-x-8 sm:-space-x-12 md:-space-x-16 py-6 px-2 overflow-hidden">
              {/* Card 1: 01 Auroras boreales */}
              <div 
                onClick={(e) => { e.stopPropagation(); onPreviewSheet(0); }}
                className="w-32 sm:w-48 md:w-56 bg-white rounded-xl shadow-xl overflow-hidden border border-stone-300 transform -rotate-12 hover:-rotate-4 hover:scale-105 hover:z-40 transition-all duration-300 shrink-0 cursor-pointer"
                title="Ver ficha: 01 Auroras boreales"
              >
                <img 
                  src="/assets/aistudio/4_ccec4ea4.png" 
                  alt="Guía 01 Auroras boreales" 
                  className="w-full h-auto block select-none pointer-events-none"
                  loading="eager"
                />
              </div>

              {/* Card 2: 02 Relámpagos */}
              <div 
                onClick={(e) => { e.stopPropagation(); onPreviewSheet(1); }}
                className="w-36 sm:w-52 md:w-60 bg-white rounded-xl shadow-2xl overflow-hidden border border-stone-300 transform -rotate-6 hover:-rotate-2 hover:scale-105 hover:z-40 transition-all duration-300 shrink-0 z-20 cursor-pointer"
                title="Ver ficha: 02 Relámpagos"
              >
                <img 
                  src="/assets/aistudio/5_d7927831.png" 
                  alt="Guía 02 Relámpagos" 
                  className="w-full h-auto block select-none pointer-events-none"
                  loading="eager"
                />
              </div>

              {/* Card 3: 03 La Vía Láctea (Centerpiece) */}
              <div 
                onClick={(e) => { e.stopPropagation(); onPreviewSheet(2); }}
                className="w-40 sm:w-56 md:w-64 bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-amber-400 transform scale-105 hover:scale-110 hover:z-40 transition-all duration-300 shrink-0 z-30 ring-4 ring-amber-400/30 cursor-pointer"
                title="Ver ficha: 03 La Vía Láctea"
              >
                <img 
                  src="/assets/aistudio/7_c1bb04b7.png" 
                  alt="Guía 03 La Vía Láctea" 
                  className="w-full h-auto block select-none pointer-events-none"
                  loading="eager"
                />
              </div>

              {/* Card 4: 04 Rastros estelares */}
              <div 
                onClick={(e) => { e.stopPropagation(); onPreviewSheet(3); }}
                className="w-36 sm:w-52 md:w-60 bg-white rounded-xl shadow-2xl overflow-hidden border border-stone-300 transform rotate-6 hover:rotate-2 hover:scale-105 hover:z-40 transition-all duration-300 shrink-0 z-20 cursor-pointer"
                title="Ver ficha: 04 Rastros estelares"
              >
                <img 
                  src="/assets/aistudio/6_514c27e5.png" 
                  alt="Guía 04 Rastros estelares" 
                  className="w-full h-auto block select-none pointer-events-none"
                  loading="eager"
                />
              </div>

              {/* Card 5: 05 Largas exposiciones diurnas */}
              <div 
                onClick={(e) => { e.stopPropagation(); onPreviewSheet(4); }}
                className="w-32 sm:w-48 md:w-56 bg-white rounded-xl shadow-xl overflow-hidden border border-stone-300 transform rotate-12 hover:rotate-4 hover:scale-105 hover:z-40 transition-all duration-300 shrink-0 cursor-pointer"
                title="Ver ficha: 05 Largas exposiciones diurnas"
              >
                <img 
                  src="/assets/aistudio/8_b31d448f.png" 
                  alt="Guía 05 Largas exposiciones diurnas" 
                  className="w-full h-auto block select-none pointer-events-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Click to expand pill */}
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-[#df5615] bg-white px-5 py-2.5 rounded-full shadow-md border border-amber-200 hover:bg-amber-50 transition-colors">
              <Eye className="w-4 h-4" />
              <span>Haz clic en cualquier ficha para verla en tamaño completo</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-6 py-3 rounded-lg font-bold text-xs sm:text-sm md:text-base transition-all cursor-pointer shadow-sm ${
                  isActive
                    ? 'bg-[#df5615] text-white shadow-md ring-2 ring-[#df5615]/30'
                    : 'bg-stone-200/80 hover:bg-stone-300/80 text-stone-700 hover:text-stone-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Active Tab Header & Subhead */}
        <div className="mb-8 text-center max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-stone-900">
            {activeTab === 'adventure' && (
              <>
                42 Guías de Fotografía de <span className="text-[#df5615]">Aventura</span>
              </>
            )}
            {activeTab === 'camera' && (
              <>
                22 Guías de <span className="text-[#df5615]">Fundamentos de Cámara</span>
              </>
            )}
            {activeTab === 'composition' && (
              <>
                22 Guías de <span className="text-[#df5615]">Composición Crítica</span>
              </>
            )}
            {activeTab === 'lighting' && (
              <>
                43 Guías de <span className="text-[#df5615]">Iluminación Fotográfica</span>
              </>
            )}
          </h3>
          <p className="text-stone-600 text-sm sm:text-base mt-2">
            {getTabDescription()}
          </p>
        </div>

        {/* Tab Content Box: Left Image & Right 4-column Checklist */}
        <div className="bg-white rounded-2xl shadow-lg border border-stone-200/90 p-6 sm:p-8 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Image Feature (matches screenshot: Northern Lights) */}
            <div className="lg:col-span-4 rounded-xl overflow-hidden shadow-md group relative">
              <img
                src={
                  activeTab === 'adventure'
                    ? 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=80'
                    : activeTab === 'camera'
                    ? 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80'
                    : activeTab === 'composition'
                    ? 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80'
                    : 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80'
                }
                alt="Fotografía temática"
                className="w-full h-72 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                  {activeTab === 'adventure' ? 'Aventura & Viajes' : activeTab === 'camera' ? 'Control Técnico' : activeTab === 'composition' ? 'Mirada Creativa' : 'Control de Luz'}
                </span>
                <span className="text-sm font-semibold">
                  Instrucciones precisas para cada escena
                </span>
              </div>
            </div>

            {/* Right Checklist Columns (Matches screenshot format) */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2.5 text-xs sm:text-sm text-stone-700">
                {getActiveTopics().map((topic, idx) => (
                  <div key={idx} className="flex items-center gap-2 py-1 px-1.5 rounded hover:bg-stone-50 transition-colors">
                    <span className="w-4 h-4 rounded-full bg-amber-100 text-[#df5615] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 stroke-[3]" />
                    </span>
                    <span className="font-medium text-stone-800 leading-snug">{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 9 Sample Photographic Situations Grid (from screenshot) */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-stone-900">
                Ejemplos Reales de Situaciones Cubiertas
              </h4>
              <p className="text-xs sm:text-sm text-stone-500">
                Haz clic en cualquier fotografía para ver los ajustes recomendados de cámara (apertura, obturación, ISO y lente)
              </p>
            </div>
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#df5615] bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
              <Sparkles className="w-3.5 h-3.5" />
              9 Escenas Demostrativas
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {SAMPLE_PHOTOS.map((photo) => (
              <div
                key={photo.id}
                onClick={() => onPhotoClick(photo)}
                className="group relative rounded-xl overflow-hidden shadow-md bg-stone-900 cursor-pointer border border-stone-200 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={photo.imageUrl}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Gradient and information bar */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-3.5 text-white">
                  <div className="flex items-center justify-between">
                    <h5 className="font-bold text-sm tracking-wide group-hover:text-amber-300 transition-colors">
                      {photo.title}
                    </h5>
                    <span className="text-[10px] bg-white/25 backdrop-blur-xs px-2 py-0.5 rounded font-mono font-semibold">
                      {photo.settings.aperture} • {photo.settings.shutterSpeed}
                    </span>
                  </div>
                  <p className="text-xs text-stone-300 truncate mt-0.5">{photo.subtitle}</p>
                  
                  {/* Hover hint */}
                  <div className="mt-2 text-[11px] text-amber-300 font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Camera className="w-3 h-3" />
                    <span>Ver ficha técnica completa →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

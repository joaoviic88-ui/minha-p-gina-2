import React, { useState } from 'react';
import { Check, ZoomIn, ChevronDown, ChevronUp, Compass, Sliders, Frame, Sun } from 'lucide-react';
import {
  ADVENTURE_TOPICS_SPANISH,
  CAMERA_FUNDAMENTALS_TOPICS_SPANISH,
  COMPOSITION_TOPICS_SPANISH,
  LIGHTING_TOPICS_SPANISH
} from '../data/cheatSheetsData';
import { REAL_CHEAT_SHEETS } from './CheatSheetPreviewModal';

interface CheatSheetsShowcaseProps {
  onPreviewSheet: (index?: number) => void;
}

type TabKey = 'adventure' | 'camera' | 'composition' | 'lighting';

export const CheatSheetsShowcase: React.FC<CheatSheetsShowcaseProps> = ({ onPreviewSheet }) => {
  const [activeTab, setActiveTab] = useState<TabKey>('adventure');
  const [showAllTopics, setShowAllTopics] = useState(false);

  const categories: {
    id: TabKey;
    count: number;
    shortTitle: string;
    fullTitle: string;
    subtitle: string;
    tag: string;
    imageUrl: string;
    icon: React.ReactNode;
    topics: string[];
  }[] = [
    {
      id: 'adventure',
      count: 42,
      shortTitle: 'Fotografía de Aventura',
      fullTitle: '42 Guías de Fotografía de Aventura',
      subtitle: 'Ajustes precisos para paisajes, nocturnas, clima extremo y viajes inolvidables.',
      tag: 'Aventura & Viajes',
      imageUrl: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?auto=format&fit=crop&w=800&q=75',
      icon: <Compass className="w-4 h-4" />,
      topics: ADVENTURE_TOPICS_SPANISH,
    },
    {
      id: 'lighting',
      count: 43,
      shortTitle: 'Iluminación Fotográfica',
      fullTitle: '43 Guías de Iluminación Fotográfica',
      subtitle: 'Domina luz natural, hora dorada, flash de mano, modificadores y esquemas de estudio.',
      tag: 'Control de Luz',
      imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=75',
      icon: <Sun className="w-4 h-4" />,
      topics: LIGHTING_TOPICS_SPANISH,
    },
    {
      id: 'composition',
      count: 22,
      shortTitle: 'Composición Crítica',
      fullTitle: '22 Guías de Composición Crítica',
      subtitle: 'Entrena tu ojo con reglas visuales, líneas guía, simetría, color y equilibrio.',
      tag: 'Mirada Creativa',
      imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=75',
      icon: <Frame className="w-4 h-4" />,
      topics: COMPOSITION_TOPICS_SPANISH,
    },
    {
      id: 'camera',
      count: 22,
      shortTitle: 'Fundamentos de Cámara',
      fullTitle: '22 Guías de Fundamentos de Cámara',
      subtitle: 'Domina apertura, velocidad, ISO, enfoque, medición e histograma sin modo automático.',
      tag: 'Control Técnico',
      imageUrl: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=75',
      icon: <Sliders className="w-4 h-4" />,
      topics: CAMERA_FUNDAMENTALS_TOPICS_SPANISH,
    },
  ];

  const activeCategory = categories.find((c) => c.id === activeTab) || categories[0];
  const visibleTopics = showAllTopics ? activeCategory.topics : activeCategory.topics.slice(0, 6);

  return (
    <section id="temas-cubiertos" className="w-full overflow-x-hidden bg-[#fbf9f6] py-14 sm:py-22 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-block text-xs font-black uppercase tracking-widest text-[#df5615] bg-orange-100/80 px-3.5 py-1 rounded-full border border-orange-200 mb-3">
            Colección de 125 Guías Visuales
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-[2.65rem] font-black text-stone-900 tracking-tight leading-tight mb-4">
            Todo lo que necesitas para comprender mejor tu cámara,{' '}
            <span className="text-[#df5615]">en un solo lugar.</span>
          </h2>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Explora una colección de guías rápidas diseñadas para consultar, aprender y poner en práctica.
          </p>
        </div>

        {/* 1. VISUAL CATEGORIES OVERVIEW (4 Interactive Category Cards) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  setShowAllTopics(false);
                }}
                className={`text-left rounded-2xl p-4 sm:p-5 border transition-all cursor-pointer flex flex-col justify-between ${
                  isActive
                    ? 'bg-stone-900 text-white border-[#df5615] ring-2 ring-[#df5615]/30 shadow-lg'
                    : 'bg-white text-stone-900 border-stone-200 hover:border-stone-300 shadow-xs'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <span
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isActive ? 'bg-[#df5615] text-white' : 'bg-orange-50 text-[#df5615]'
                    }`}
                  >
                    {cat.icon}
                  </span>
                  <span
                    className={`text-xs font-black uppercase px-2.5 py-0.5 rounded-full ${
                      isActive
                        ? 'bg-amber-400 text-stone-950'
                        : 'bg-stone-100 text-stone-700'
                    }`}
                  >
                    {cat.count} Guías
                  </span>
                </div>
                <h3 className="font-extrabold text-sm sm:text-base leading-snug">
                  {cat.shortTitle}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Active Visual Category Detail Card */}
        <div className="bg-white rounded-2xl shadow-md border border-stone-200 p-5 sm:p-8 mb-14 sm:mb-18">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            {/* Thematic Category Photo */}
            <div className="lg:col-span-5 rounded-xl overflow-hidden shadow-md relative">
              <img
                src={activeCategory.imageUrl}
                alt={activeCategory.fullTitle}
                loading="lazy"
                decoding="async"
                className="w-full h-56 sm:h-72 object-cover block"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                <span className="text-xs uppercase tracking-wider text-amber-300 font-bold">
                  {activeCategory.tag}
                </span>
                <span className="text-sm sm:text-base font-bold">
                  {activeCategory.fullTitle}
                </span>
              </div>
            </div>

            {/* Representative Topics (Concise by default, expandable without hiding collection content) */}
            <div className="lg:col-span-7 space-y-4 min-w-0">
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900">
                  {activeCategory.fullTitle}
                </h3>
                <p className="text-stone-600 text-sm sm:text-base mt-1.5 leading-relaxed">
                  {activeCategory.subtitle}
                </p>
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-stone-500 block mb-2.5">
                  {showAllTopics ? 'Todos los temas incluidos:' : 'Ejemplos destacados de esta categoría:'}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
                  {visibleTopics.map((topic, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 py-1.5 px-2.5 rounded-lg bg-stone-50 border border-stone-200/70"
                    >
                      <span className="w-4 h-4 rounded-full bg-amber-100 text-[#df5615] flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span className="font-medium text-stone-800 leading-snug">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              {activeCategory.topics.length > 6 && (
                <button
                  onClick={() => setShowAllTopics(!showAllTopics)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#df5615] hover:text-[#b9430c] transition-colors cursor-pointer pt-1"
                >
                  <span>
                    {showAllTopics
                      ? 'Mostrar solo ejemplos destacados'
                      : `Ver los ${activeCategory.topics.length} temas de ${activeCategory.shortTitle}`}
                  </span>
                  {showAllTopics ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              )}
            </div>
          </div>
        </div>

        {/* 2. REAL PRODUCT SAMPLES WITH ENLARGED VIEW (4 SHEETS) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-3xl font-black text-stone-900 tracking-tight">
              Ejemplos reales de nuestras guías
            </h3>
            <p className="text-stone-600 text-sm sm:text-base mt-1.5">
              Toca cualquier ficha para abrirla en tamaño completo y comprobar su claridad visual.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
            {REAL_CHEAT_SHEETS.map((sheet, idx) => (
              <button
                key={sheet.id}
                type="button"
                onClick={() => onPreviewSheet(idx)}
                className="group text-left bg-white rounded-2xl border border-stone-200 shadow-sm hover:shadow-xl hover:border-[#df5615] transition-all overflow-hidden flex flex-col cursor-pointer"
              >
                <div className="relative w-full aspect-[3/4] bg-stone-100 overflow-hidden">
                  <img
                    src={sheet.src}
                    alt={`Guía ${sheet.num}: ${sheet.title}`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top block group-hover:scale-[1.03] transition-transform duration-300"
                  />
                  <div className="absolute bottom-2.5 right-2.5 bg-stone-900/85 text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-md">
                    <ZoomIn className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ampliar</span>
                  </div>
                </div>
                <div className="p-3 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-black text-[#df5615] uppercase tracking-wider">
                      Ficha #{sheet.num}
                    </span>
                    <h4 className="font-extrabold text-stone-900 text-sm sm:text-base leading-snug mt-0.5">
                      {sheet.title}
                    </h4>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

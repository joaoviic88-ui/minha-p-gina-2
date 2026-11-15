import React from 'react';
import { Info, Sparkles, ChevronDown } from 'lucide-react';

interface PanoramicBannerProps {
  onScrollToTopics: () => void;
  onOpenDetails: () => void;
}

export const PanoramicBanner: React.FC<PanoramicBannerProps> = ({ onScrollToTopics, onOpenDetails }) => {
  return (
    <section className="relative w-full h-[280px] sm:h-[340px] md:h-[400px] flex items-center justify-center overflow-hidden bg-black">
      {/* Background panoramic starry night image with mountain ridge */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-black/40 to-stone-950/80" />
      </div>

      {/* Center Action Button with glow */}
      <div className="relative z-10 w-full max-w-full flex flex-col items-center gap-3 px-4 text-center">
        <button
          onClick={onOpenDetails}
          className="group max-w-full inline-flex items-center justify-center gap-2 sm:gap-2.5 bg-[#df5615] hover:bg-[#eb6120] text-white px-5 sm:px-9 py-3 sm:py-4 rounded-full font-extrabold text-sm sm:text-lg shadow-[0_0_30px_rgba(223,86,21,0.5)] hover:shadow-[0_0_40px_rgba(223,86,21,0.8)] transition-all transform hover:scale-105 cursor-pointer border border-amber-300/40"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-200 shrink-0 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Captura las Situaciones Más Difíciles</span>
          <span className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center text-xs ml-1 shrink-0">
            <Info className="w-3.5 h-3.5" />
          </span>
        </button>

        <button
          onClick={onScrollToTopics}
          className="text-stone-300 hover:text-white text-xs sm:text-sm font-medium flex items-center gap-1 transition-colors cursor-pointer bg-black/40 px-3 py-1 rounded-full backdrop-blur-xs"
        >
          <span>Ver las 125 situaciones cubiertas</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>
    </section>
  );
};

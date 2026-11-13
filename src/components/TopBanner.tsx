import React from 'react';
import { Clock } from 'lucide-react';

interface TopBannerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export const TopBanner: React.FC<TopBannerProps> = ({ hours, minutes, seconds }) => {
  const pad = (n: number) => n.toString().padStart(2, '0');

  return (
    <aside aria-label="Aviso de oferta especial" className="w-full bg-[#df5615] text-white py-2.5 px-3 sm:px-6 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
        <div className="flex items-center gap-2 font-bold text-sm sm:text-base tracking-wide uppercase">
          <Clock className="w-5 h-5 animate-pulse text-amber-200 shrink-0" />
          <span>¡ÚLTIMA OPORTUNIDAD... La venta flash termina hoy!</span>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold">
          <div className="flex items-center bg-black/25 backdrop-blur-xs px-2 sm:px-2.5 py-1 rounded border border-white/20">
            <span className="font-mono text-base sm:text-lg font-extrabold mr-1 tracking-wider">{pad(hours)}</span>
            <span className="text-[11px] sm:text-xs uppercase opacity-90">Horas</span>
          </div>
          <span className="font-bold text-amber-200">:</span>
          <div className="flex items-center bg-black/25 backdrop-blur-xs px-2 sm:px-2.5 py-1 rounded border border-white/20">
            <span className="font-mono text-base sm:text-lg font-extrabold mr-1 tracking-wider">{pad(minutes)}</span>
            <span className="text-[11px] sm:text-xs uppercase opacity-90">Minutos</span>
          </div>
          <span className="font-bold text-amber-200">:</span>
          <div className="flex items-center bg-black/25 backdrop-blur-xs px-2 sm:px-2.5 py-1 rounded border border-white/20">
            <span className="font-mono text-base sm:text-lg font-extrabold mr-1 tracking-wider">{pad(seconds)}</span>
            <span className="text-[11px] sm:text-xs uppercase opacity-90">Segundos</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

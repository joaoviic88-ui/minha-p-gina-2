import React from 'react';
import { Camera, Aperture, ThumbsUp, Heart } from 'lucide-react';

export const SocialProofBar: React.FC = () => {
  return (
    <section className="w-full bg-[#181818] text-white py-8 border-y border-stone-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Logos Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 pb-6 border-b border-stone-800/80">
          <div className="text-stone-400 font-extrabold text-xs sm:text-sm tracking-widest uppercase shrink-0">
            DESTACADO EN:
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16 opacity-85 hover:opacity-100 transition-opacity">
            {/* Logo 1: Outdoor Photography Guide */}
            <div className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors">
              <div className="p-1.5 rounded bg-stone-800 border border-stone-700">
                <Camera className="w-5 h-5 text-amber-400" />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-black text-sm tracking-wider uppercase leading-none">OUTDOOR</span>
                <span className="text-[10px] text-stone-400 font-semibold tracking-widest uppercase">PHOTOGRAPHY GUIDE</span>
              </div>
            </div>

            {/* Logo 2: Sony Addict */}
            <div className="flex items-center gap-2 text-stone-300 hover:text-white transition-colors">
              <span className="w-3 h-3 rounded-full bg-[#df5615] shrink-0" />
              <div className="flex items-baseline gap-1">
                <span className="font-bold text-amber-500 text-lg tracking-tight">sony</span>
                <span className="font-light text-stone-200 text-lg tracking-tight">addict</span>
              </div>
            </div>

            {/* Logo 3: DPInsiders */}
            <div className="flex items-center gap-2.5 text-stone-300 hover:text-white transition-colors">
              <Aperture className="w-6 h-6 text-[#df5615]" />
              <div className="flex flex-col text-left">
                <span className="text-[10px] text-stone-400 tracking-wider uppercase leading-none font-medium">Digital Photography</span>
                <span className="font-black text-sm tracking-wide text-white">DPInsiders</span>
              </div>
            </div>
          </div>
        </div>

        {/* Facebook Social Proof & Quote row */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          {/* Facebook Badge */}
          <div className="inline-flex items-center gap-3 bg-stone-900 border border-stone-700/80 px-4 py-2 rounded-xl shadow-inner">
            <div className="w-8 h-8 rounded-full bg-[#1877f2] flex items-center justify-center text-white font-bold text-lg">
              f
            </div>
            <div className="flex flex-col text-left">
              <span className="font-extrabold text-sm text-white flex items-center gap-1.5">
                164.5K Me Gusta en Facebook
                <span className="inline-flex items-center -space-x-1 ml-1">
                  <span className="w-4 h-4 rounded-full bg-blue-500 text-white flex items-center justify-center text-[9px]">
                    <ThumbsUp className="w-2.5 h-2.5" />
                  </span>
                  <span className="w-4 h-4 rounded-full bg-rose-500 text-white flex items-center justify-center text-[9px]">
                    <Heart className="w-2.5 h-2.5" />
                  </span>
                </span>
              </span>
              <span className="text-[11px] text-stone-400">Comunidad activa de fotógrafos apasionados</span>
            </div>
          </div>

          {/* Social Proof Quote snippet */}
          <div className="text-stone-300 text-sm md:text-base italic max-w-xl">
            "...para concentrarte en lo verdaderamente importante: <span className="text-amber-300 font-medium not-italic">capturar fotos asombrosas</span> sin perder tiempo dudando frente al menú de tu cámara."
          </div>
        </div>
      </div>
    </section>
  );
};

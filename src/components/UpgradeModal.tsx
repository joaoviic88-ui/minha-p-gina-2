import React, { useEffect } from 'react';
import { X, Check, Gift, Sparkles, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { CHECKOUT_URLS } from '../config/checkoutUrls';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({
  isOpen,
  onClose,
}) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="upgrade-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto animate-fadeIn"
    >
      <div className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border-2 border-amber-400 overflow-hidden my-auto max-h-[95vh] flex flex-col">
        {/* Top Attention Ribbon */}
        <div className="bg-gradient-to-r from-amber-500 via-[#df5615] to-amber-600 text-white px-4 py-2.5 text-center flex items-center justify-between shrink-0">
          <div className="w-6" /> {/* spacer for balance */}
          <div className="flex items-center gap-1.5 font-black text-xs sm:text-sm tracking-wider uppercase">
            <Sparkles className="w-4 h-4 fill-amber-200 text-amber-200" />
            <span>¡OFERTA ESPECIAL PARA TI!</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar oferta"
            className="w-7 h-7 rounded-full bg-black/20 hover:bg-black/40 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-4 sm:p-7 overflow-y-auto space-y-4 sm:space-y-5 text-stone-900">
          {/* Main Headline & Subtitle */}
          <div className="text-center space-y-2">
            <h2
              id="upgrade-modal-title"
              className="text-xl sm:text-3xl font-black text-stone-900 tracking-tight leading-tight"
            >
              ¡ESPERA! Por solo <span className="text-[#df5615] underline decoration-amber-400 decoration-wavy decoration-2">$5 más</span>, llévate la colección COMPLETA.
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed max-w-lg mx-auto">
              Estás a un paso de conseguir 85 guías de fotografía. Pero tenemos una oportunidad especial para ti: por solo $5 adicionales, puedes llevarte los 125 guías completos y 3 bonos exclusivos.
            </p>
          </div>

          {/* Pricing Highlight Box */}
          <div className="bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100/60 border-2 border-[#df5615] rounded-2xl p-4 sm:p-5 text-center shadow-md relative overflow-hidden">
            <div className="absolute -right-8 -top-8 w-24 h-24 bg-amber-300/30 rounded-full blur-xl pointer-events-none" />

            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap">
              <div className="text-stone-500 text-sm">
                <span className="block text-xs uppercase font-bold tracking-wider text-stone-400">Precio habitual</span>
                <span className="text-xl sm:text-2xl font-bold line-through text-stone-400">$20</span>
              </div>

              <div className="h-8 w-px bg-stone-300" />

              <div>
                <span className="block text-xs uppercase font-black tracking-wider text-[#df5615]">Tu precio especial</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-[#df5615]">$15</span>
                  <span className="text-xs font-bold text-stone-600 uppercase">único</span>
                </div>
              </div>
            </div>

            {/* Impact callout */}
            <div className="mt-3 inline-flex items-center gap-1.5 bg-[#df5615] text-white text-xs sm:text-sm font-black px-3.5 py-1 rounded-full shadow-sm">
              <Zap className="w-3.5 h-3.5 fill-current" />
              <span>¡Ahorras $5 respecto al precio habitual del Plan Completo!</span>
            </div>
          </div>

          {/* Deliverables Section */}
          <div className="space-y-3.5">
            <h3 className="text-xs sm:text-sm font-black uppercase tracking-wider text-stone-800 text-center">
              ESTO ES TODO LO QUE RECIBIRÁS:
            </h3>

            {/* 125 Guides grid */}
            <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200">
              <div className="font-bold text-xs uppercase text-stone-600 mb-2.5">
                Colección completa de 125 guías:
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-800">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>42 Guías de Fotografía de Aventura</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>43 Guías de Iluminación Fotográfica</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>22 Guías de Composición Crítica</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 stroke-[3]" />
                  </span>
                  <span>22 Guías de Fundamentos de Cámara</span>
                </li>
              </ul>
            </div>

            {/* 3 Exclusive Bonuses */}
            <div className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-4 shadow-xs">
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                  <Gift className="w-4 h-4 text-[#df5615] shrink-0" />
                  <span>🎁 Y ADEMÁS, 3 BONOS EXCLUSIVOS GRATIS:</span>
                </span>
                <span className="text-xs font-black uppercase bg-emerald-600 text-white px-2 py-0.5 rounded shrink-0">
                  GRATIS
                </span>
              </div>
              <ol className="space-y-1.5 text-xs sm:text-sm text-stone-800 font-semibold list-decimal list-inside pl-1">
                <li>Guía Rápida: Cómo Interpretar el Histograma</li>
                <li>Guía Rápida: Distancia Focal y Perspectiva</li>
                <li>Guía Rápida: Matriz de Modos de Medición y Enfoque</li>
              </ol>
            </div>

            {/* Additional benefits */}
            <div className="flex items-center justify-center gap-3 sm:gap-5 text-stone-600 text-xs flex-wrap pt-1">
              <span className="flex items-center gap-1 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                Acceso de por vida
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                Materiales 100% digitales
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 font-medium">
                <Check className="w-3.5 h-3.5 text-emerald-600 stroke-[3]" />
                Acceso inmediato después de la compra
              </span>
            </div>
          </div>

          {/* Action Links */}
          <div className="pt-2 space-y-3">
            {/* Primary Upgrade CTA ($15) */}
            <a
              href={CHECKOUT_URLS.UPSELL_CHECKOUT_URL}
              className="w-full min-h-[54px] bg-[#df5615] hover:bg-[#c8480d] text-white py-4 px-5 sm:px-6 rounded-2xl font-black text-sm sm:text-lg tracking-wide shadow-xl transition-colors cursor-pointer flex items-center justify-center gap-2 border-2 border-amber-300 ring-4 ring-orange-500/20 no-underline"
            >
              <span>¡SÍ! QUIERO LOS 125 GUÍAS POR SOLO $15</span>
              <ArrowRight className="w-5 h-5 stroke-[2.5] shrink-0" />
            </a>

            {/* Secondary Decline Option ($10) */}
            <a
              href={CHECKOUT_URLS.BASIC_CHECKOUT_URL}
              className="block w-full text-stone-500 hover:text-stone-800 text-xs sm:text-sm font-semibold py-2.5 px-4 transition-colors cursor-pointer text-center underline underline-offset-4 decoration-stone-300 hover:decoration-stone-600"
            >
              No, gracias. Prefiero continuar con el Plan Básico de $10.
            </a>
          </div>

          {/* Guarantee Note */}
          <div className="flex items-center justify-center gap-1.5 text-xs text-stone-500 pt-1 border-t border-stone-100">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Garantía total de devolución de 30 días incluida en ambas opciones</span>
          </div>
        </div>
      </div>
    </div>
  );
};

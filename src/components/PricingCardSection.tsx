import React from 'react';
import { Check, Sparkles, Gift, ShieldCheck, ArrowRight, Star } from 'lucide-react';

interface PricingCardSectionProps {
  onSelectPlan: (plan: 'basic' | 'complete') => void;
}

export const PricingCardSection: React.FC<PricingCardSectionProps> = ({ onSelectPlan }) => {
  return (
    <section className="relative w-full py-16 sm:py-24 overflow-hidden bg-stone-900 flex flex-col items-center justify-center">
      {/* Background highway light trails & twilight mountains matching the landing page theme */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=2000&q=85')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-black/75 to-stone-950/90" />
      </div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-amber-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Elige la Opción Ideal para Ti</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Oferta Especial: <span className="text-[#df5615]">Elige Tu Plan</span>
          </h2>
          <p className="text-stone-300 text-sm sm:text-base mt-2">
            Descarga inmediata en PDF de alta resolución, acceso de por vida y garantía incondicional de 30 días.
          </p>
        </div>

        {/* Pricing Cards Grid: 2 Cards (Desktop side-by-side, Mobile stacked) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* ========================================================= */}
          {/* CARD 1: PLAN BÁSICO (US$ 10)                              */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 flex flex-col justify-between border border-stone-200 transition-all hover:shadow-2xl relative">
            <div>
              {/* Header Info */}
              <div className="border-b border-stone-100 pb-5 mb-5">
                <span className="text-xs font-black uppercase tracking-widest text-stone-500 block mb-1">
                  PLAN BÁSICO
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight">
                  85 GUÍAS RÁPIDAS DE FOTOGRAFÍA
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  El contenido esencial para mejorar tus conocimientos fotográficos y aprender nuevas técnicas.
                </p>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
                    $10
                  </span>
                  <span className="text-xs font-bold uppercase text-stone-500">
                    Pago único
                  </span>
                </div>
              </div>

              {/* Materiales incluidos (85 guías) */}
              <div className="mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-stone-900 block mb-3">
                  Materiales incluidos (85 guías):
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="font-semibold text-stone-800">
                      42 Guías de Fotografía de Aventura
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-stone-100 text-stone-800 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                    </span>
                    <span className="font-semibold text-stone-800">
                      43 Guías de Iluminación Fotográfica
                    </span>
                  </li>
                </ul>
              </div>

              {/* Beneficios con iconos de confirmación */}
              <div className="border-t border-stone-100 pt-5 mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-stone-500 block mb-3">
                  Beneficios del Plan:
                </span>
                <ul className="space-y-2.5 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Acceso de por vida</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Materiales 100% digitales</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Acceso inmediato después de la compra</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onSelectPlan('basic')}
                className="w-full bg-stone-900 hover:bg-stone-800 text-white py-4 px-6 rounded-2xl font-black text-base sm:text-lg tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-2 border border-stone-700"
              >
                <span>QUIERO EL PLAN BÁSICO</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* CARD 2: PLAN COMPLETO (US$ 20) — DESTAQUE PRINCIPAL       */}
          {/* ========================================================= */}
          <div className="bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(223,86,21,0.35)] p-6 sm:p-8 flex flex-col justify-between border-3 border-[#df5615] relative transition-all hover:scale-[1.01] ring-4 ring-orange-500/15">
            {/* Etiqueta Visual: MÁS VENDIDO */}
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-gradient-to-r from-[#df5615] to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-amber-200">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span>MÁS VENDIDO</span>
              </span>
            </div>

            <div>
              {/* Header Info */}
              <div className="border-b border-stone-100 pb-5 mb-5 pt-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest text-[#df5615] block mb-1">
                    PLAN COMPLETO
                  </span>
                  <span className="text-[11px] font-black bg-orange-100 text-[#df5615] px-2 py-0.5 rounded uppercase">
                    Mejor Valor
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-stone-900 tracking-tight leading-tight">
                  125 GUÍAS RÁPIDAS DE FOTOGRAFÍA <span className="text-[#df5615]">+ 3 BONOS EXCLUSIVOS</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                  La colección definitiva para fotógrafos que quieren dominar diferentes aspectos de la fotografía, desde la iluminación y la composición hasta el manejo de la cámara.
                </p>

                {/* Price */}
                <div className="mt-5 flex items-baseline gap-2">
                  <span className="text-4xl sm:text-5xl font-black text-stone-900 tracking-tight">
                    $20
                  </span>
                  <span className="text-xs font-extrabold uppercase text-[#df5615] bg-orange-50 px-2 py-0.5 rounded border border-orange-200">
                    Solo $10 más
                  </span>
                  <span className="text-xs font-bold uppercase text-stone-500 ml-auto">
                    Pago único
                  </span>
                </div>
              </div>

              {/* Lista dos 125 guias incluidos */}
              <div className="mb-5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-stone-900 block mb-3">
                  Colección completa (125 guías):
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-stone-800">
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-[#df5615] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-bold text-stone-900">
                      42 Guías de Fotografía de Aventura
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-[#df5615] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-bold text-stone-900">
                      43 Guías de Iluminación Fotográfica
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-[#df5615] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-bold text-stone-900">
                      22 Guías de Composición Crítica
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-orange-100 text-[#df5615] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-bold text-stone-900">
                      22 Guías de Fundamentos de Cámara
                    </span>
                  </li>
                </ul>
              </div>

              {/* Subsección visualmente diferenciada: 🎁 3 BONOS EXCLUSIVOS INCLUIDOS */}
              <div className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 mb-5 shadow-xs">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-900 flex items-center gap-1.5">
                    <Gift className="w-4 h-4 text-[#df5615]" />
                    <span>🎁 3 BONOS EXCLUSIVOS INCLUIDOS</span>
                  </span>
                  <span className="text-[10px] font-black uppercase bg-emerald-600 text-white px-2 py-0.5 rounded">
                    GRATIS HOY
                  </span>
                </div>
                <p className="text-[11px] text-amber-800 font-medium mb-3">
                  Incluidos gratuitamente al adquirir el Plan Completo:
                </p>
                <ol className="space-y-1.5 text-xs text-stone-800 font-semibold list-decimal list-inside">
                  <li>Guía Rápida: Cómo Interpretar el Histograma</li>
                  <li>Guía Rápida: Distancia Focal y Perspectiva</li>
                  <li>Guía Rápida: Matriz de Modos de Medición y Enfoque</li>
                </ol>
              </div>

              {/* Beneficios con iconos de confirmación */}
              <div className="border-t border-stone-100 pt-4 mb-6">
                <span className="text-xs font-extrabold uppercase tracking-wider text-stone-500 block mb-3">
                  Todos los beneficios incluidos:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-stone-700">
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Acceso de por vida</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Materiales 100% digitales</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Acceso inmediato después de la compra</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>Colección completa de 125 guías</span>
                  </li>
                  <li className="flex items-center gap-2 sm:col-span-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span className="font-semibold text-stone-900">3 bonos exclusivos incluidos</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-2">
              <button
                onClick={() => onSelectPlan('complete')}
                className="w-full bg-[#df5615] hover:bg-[#c8480d] text-white py-4 sm:py-5 px-6 rounded-2xl font-black text-base sm:text-xl tracking-wide shadow-xl hover:shadow-orange-500/30 transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 border border-amber-300/40"
              >
                <span>QUIERO LA COLECCIÓN COMPLETA</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Guarantee Banner at bottom of section */}
        <div className="mt-12 max-w-xl mx-auto text-center flex flex-col items-center gap-1.5 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm sm:text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span>Garantía de Devolución de 30 Días</span>
          </div>
          <p className="text-stone-400 italic">
            Te encantan las Guías Rápidas o no pagas nada por ellas. Tan simple como eso.
          </p>
        </div>
      </div>
    </section>
  );
};

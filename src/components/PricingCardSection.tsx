import React from 'react';
import { Check, Sparkles, Gift, ShieldCheck, ArrowRight, Tag } from 'lucide-react';
import { CHECKOUT_URLS } from '../config/checkoutUrls';

export const PricingCardSection: React.FC = () => {
  return (
    <section className="relative w-full py-14 sm:py-22 overflow-x-hidden bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 flex flex-col items-center justify-center border-y border-stone-800">
      <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="inline-flex items-center gap-2 bg-amber-500/15 text-amber-300 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider border border-amber-400/30 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Oferta Especial Online</span>
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-[2.65rem] font-black text-white tracking-tight leading-tight">
            Llévate <span className="text-[#df5615]">FOTOGRAFÍA SIN ADIVINAR</span> y domina tu cámara hoy mismo.
          </h2>
          <p className="text-stone-300 text-base sm:text-lg mt-3 leading-relaxed">
            Accede a la colección completa de 125 guías visuales y los 3 bonos exclusivos con precio promocional.
          </p>
        </div>

        {/* Single Centered Offer Card */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(223,86,21,0.45)] p-6 sm:p-8 flex flex-col justify-between border-2 border-[#df5615] relative ring-4 ring-orange-500/20">
            {/* Top Tag */}
            <div className="absolute -top-4 inset-x-0 flex justify-center">
              <span className="bg-gradient-to-r from-[#df5615] to-amber-500 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-5 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-amber-200">
                <Tag className="w-3.5 h-3.5 shrink-0" />
                <span>PRECIO PROMOCIONAL HOY</span>
              </span>
            </div>

            <div>
              {/* Header Info */}
              <div className="border-b border-stone-100 pb-5 mb-5 pt-2">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-black uppercase tracking-widest text-[#df5615]">
                    FOTOGRAFÍA SIN ADIVINAR
                  </span>
                  <span className="text-xs font-black bg-orange-100 text-[#df5615] px-2.5 py-0.5 rounded-full uppercase">
                    Colección Completa
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight leading-snug">
                  125 GUÍAS RÁPIDAS DE FOTOGRAFÍA{' '}
                  <span className="text-[#df5615]">+ 3 BONOS EXCLUSIVOS</span>
                </h3>
                <p className="text-sm text-stone-600 mt-2 leading-relaxed">
                  La colección definitiva para fotógrafos que quieren dominar diferentes aspectos de la fotografía, desde la iluminación y la composición hasta el manejo de la cámara.
                </p>

                {/* Promotional Pricing Block */}
                <div className="mt-5 bg-stone-50 border border-stone-200 rounded-2xl p-4 sm:p-5">
                  <div className="inline-flex items-center gap-1.5 bg-orange-100 text-[#df5615] text-xs font-black px-3 py-1 rounded-full mb-3">
                    <span>Antes: $20 → Ahora: $7</span>
                  </div>

                  <div className="flex flex-wrap items-end justify-between gap-4">
                    <div>
                      <span className="block text-xs font-bold uppercase tracking-wider text-stone-500">
                        Precio anterior
                      </span>
                      <span className="text-xl sm:text-2xl font-bold text-red-500/85 line-through decoration-red-500 decoration-2">
                        $20
                      </span>
                    </div>

                    <div className="text-left sm:text-right">
                      <span className="block text-xs font-black uppercase tracking-wider text-stone-700 mb-0.5">
                        Precio promocional
                      </span>
                      <div className="flex items-baseline gap-2.5 sm:justify-end">
                        <span className="text-6xl sm:text-7xl font-black text-[#df5615] tracking-tight leading-none">
                          $7
                        </span>
                        <span className="text-xs font-extrabold uppercase text-stone-600">
                          Pago único
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lista das 125 guias incluídas */}
              <div className="mb-5">
                <span className="text-xs font-extrabold uppercase tracking-wider text-stone-900 block mb-3">
                  Colección completa (125 guías):
                </span>
                <ul className="space-y-2 text-sm text-stone-800">
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

              {/* Subseção visualmente diferenciada: 🎁 3 BONOS EXCLUSIVOS INCLUIDOS */}
              <div className="bg-amber-50/90 border-2 border-amber-300 rounded-2xl p-4 sm:p-5 mb-5 shadow-xs">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-black uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                    <Gift className="w-4 h-4 text-[#df5615] shrink-0" />
                    <span>🎁 3 BONOS EXCLUSIVOS INCLUIDOS</span>
                  </span>
                  <span className="text-xs font-black uppercase bg-emerald-600 text-white px-2 py-0.5 rounded shrink-0">
                    GRATIS HOY
                  </span>
                </div>
                <p className="text-xs text-amber-900 font-medium mb-2.5">
                  Incluidos gratuitamente al adquirir Fotografía Sin Adivinar:
                </p>
                <ol className="space-y-1.5 text-xs sm:text-sm text-stone-800 font-semibold list-decimal list-inside">
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
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-stone-700">
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
                    <span>Acceso inmediato</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </span>
                    <span>125 guías completas</span>
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

            {/* CTA Link */}
            <div className="pt-2">
              <a
                href={CHECKOUT_URLS.MAIN_CHECKOUT_URL}
                className="animate-cta-pulse w-full min-h-[56px] bg-gradient-to-r from-[#df5615] to-[#c8480d] hover:from-[#eb601e] hover:to-[#df5615] text-white py-4 px-6 rounded-2xl font-black text-base sm:text-lg tracking-wide shadow-xl transition-colors cursor-pointer flex items-center justify-center gap-2 border border-amber-300/40 no-underline"
              >
                <span>QUIERO FOTOGRAFÍA SIN ADIVINAR POR $7</span>
                <ArrowRight className="w-5 h-5 shrink-0" />
              </a>
            </div>
          </div>
        </div>

        {/* Guarantee Banner at bottom of section */}
        <div className="mt-10 sm:mt-12 max-w-xl mx-auto text-center flex flex-col items-center gap-1.5 text-xs sm:text-sm text-stone-300">
          <div className="flex items-center gap-2 text-amber-300 font-extrabold text-sm sm:text-base">
            <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
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

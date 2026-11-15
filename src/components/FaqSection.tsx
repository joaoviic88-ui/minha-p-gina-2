import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/cheatSheetsData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full overflow-x-clip bg-[#fbf9f6] py-16 sm:py-24 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left Title Column */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-stone-900 tracking-tight leading-tight">
              Preguntas <br />
              <span className="text-[#df5615]">Frecuentes</span>
            </h2>
            <p className="text-stone-600 text-sm sm:text-base mt-4 leading-relaxed">
              ¿Tienes alguna duda sobre la colección, el formato o la garantía? Aquí resolvemos las preguntas más habituales de nuestros clientes.
            </p>
          </div>

          {/* Right Accordion List */}
          <div className="lg:col-span-8 divide-y divide-stone-300/80 border-y border-stone-300/80">
            {FAQS.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-4 sm:py-5">
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between gap-4 text-left font-bold text-base sm:text-lg text-stone-900 hover:text-[#df5615] transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-700 transition-transform">
                      {isOpen ? <Minus className="w-5 h-5 text-[#df5615]" /> : <Plus className="w-5 h-5" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-3 text-stone-600 text-sm sm:text-base leading-relaxed pr-4 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

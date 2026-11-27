import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/cheatSheetsData';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full overflow-x-clip bg-[#fbf9f6] py-14 sm:py-20 border-b border-stone-200">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-stone-900 tracking-tight">
            Preguntas frecuentes.
          </h2>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-stone-300/80 border-y border-stone-300/80 bg-white rounded-2xl px-4 sm:px-6 shadow-xs border-x">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-4 sm:py-5">
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between gap-4 text-left font-bold text-sm sm:text-lg text-stone-900 hover:text-[#df5615] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <span className="w-8 h-8 rounded-full bg-stone-100 flex items-center justify-center shrink-0 text-stone-700">
                    {isOpen ? <Minus className="w-4 h-4 text-[#df5615]" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="mt-2.5 text-stone-600 text-sm sm:text-base leading-relaxed pr-2">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

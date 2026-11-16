import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { ValueProposition } from './components/ValueProposition';
import { CheatSheetsShowcase } from './components/CheatSheetsShowcase';
import { PricingCardSection } from './components/PricingCardSection';
import { BonusSection } from './components/BonusSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OfferDealSection } from './components/OfferDealSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { DecisionSection } from './components/DecisionSection';
import { Footer } from './components/Footer';
import { UpgradeModal } from './components/UpgradeModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { CheatSheetPreviewModal } from './components/CheatSheetPreviewModal';
import { PolicyModal } from './components/PolicyModal';
import { PhotoSample } from './types';
import { navigateToCheckout } from './config/checkoutUrls';
import { ShoppingCart } from 'lucide-react';

export default function App() {
  // Synchronized countdown timer initialized to 3h 15m 51s matching the print
  const [totalSeconds, setTotalSeconds] = useState(3 * 3600 + 15 * 60 + 51);

  // Modals state
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [activePhoto, setActivePhoto] = useState<PhotoSample | null>(null);
  const [isCheatSheetPreviewOpen, setIsCheatSheetPreviewOpen] = useState(false);
  const [previewSheetIndex, setPreviewSheetIndex] = useState(2);
  const [activePolicy, setActivePolicy] = useState<'privacy' | 'terms' | 'refund' | 'contact' | null>(null);
  const [showStickyBar, setShowStickyBar] = useState(false);

  // Timer tick
  useEffect(() => {
    const timer = setInterval(() => {
      setTotalSeconds((prev) => (prev > 0 ? prev - 1 : 4 * 3600));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Show sticky bar on scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  const scrollToPricing = () => {
    const pricingEl = document.getElementById('seccion-oferta');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPlan = (plan: 'basic' | 'complete') => {
    if (plan === 'basic') {
      // Exclusively trigger the $15 upgrade popup when clicking Plan Básico
      setIsUpgradeOpen(true);
    } else {
      // Plan Completo ($20) goes directly to complete checkout
      navigateToCheckout('COMPLETE_CHECKOUT_URL', scrollToPricing);
    }
  };

  const handleAcceptUpgrade = () => {
    setIsUpgradeOpen(false);
    // User accepts the $15 upgrade offer
    navigateToCheckout('UPSELL_CHECKOUT_URL', scrollToPricing);
  };

  const handleDeclineUpgrade = () => {
    setIsUpgradeOpen(false);
    // User declines and proceeds with the $10 Plan Básico
    navigateToCheckout('BASIC_CHECKOUT_URL', scrollToPricing);
  };

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-clip bg-[#faf8f5] text-stone-900 font-sans antialiased selection:bg-[#df5615] selection:text-white">
      {/* Sticky Top Flash Sale Announcement Bar */}
      <TopBanner hours={hours} minutes={minutes} seconds={seconds} />

      <main>
        {/* SEÇÃO 1 — Hero / Primeira Dobra */}
        <HeroSection onCtaClick={() => scrollToPricing()} />

        {/* SEÇÃO 2 — O Problema e a Solução */}
        <ValueProposition />

        {/* SEÇÃO 3 — Conheça a Coleção */}
        <CheatSheetsShowcase
          onPhotoClick={(photo) => setActivePhoto(photo)}
          onPreviewSheet={(idx) => {
            setPreviewSheetIndex(idx ?? 2);
            setIsCheatSheetPreviewOpen(true);
          }}
        />

        {/* SEÇÃO 4 — Planos e Preços */}
        <div id="seccion-oferta">
          <PricingCardSection onSelectPlan={handleSelectPlan} />
        </div>

        {/* SEÇÃO 5 — Os 3 Bônus Exclusivos */}
        <BonusSection />

        {/* SEÇÃO 6 — Como Funciona */}
        <HowItWorksSection />

        {/* SEÇÃO 7 — Garantia */}
        <OfferDealSection />

        {/* SEÇÃO 8 — Depoimentos */}
        <TestimonialsSection />

        {/* SEÇÃO 9 — Perguntas Frequentes */}
        <FaqSection />

        {/* SEÇÃO 10 — CTA Final */}
        <DecisionSection onBuyClick={() => scrollToPricing()} />
      </main>

      {/* 14. Footer with Legal Links & Copyright */}
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* Sticky Bottom Quick-Buy Bar (Mobile & Tablet) */}
      {showStickyBar && (
        <aside aria-label="Barra de compra rápida" className="fixed bottom-0 left-0 right-0 w-full max-w-full bg-stone-900/95 backdrop-blur-md text-white py-3 px-3 sm:px-4 z-40 border-t border-stone-800 shadow-2xl flex items-center justify-between sm:justify-center gap-2 sm:gap-4 transition-transform animate-fadeIn">
          <div className="flex items-center gap-1.5 sm:gap-2 min-w-0 shrink-0">
            <span className="text-xs text-stone-400 line-through hidden sm:inline">$125</span>
            <span className="text-base sm:text-lg font-black text-amber-400 whitespace-nowrap">Desde $10</span>
            <span className="text-[10px] sm:text-[11px] bg-[#df5615] text-white px-1.5 sm:px-2 py-0.5 rounded font-black uppercase shrink-0">
              OFERTA
            </span>
          </div>

          <button
            onClick={() => scrollToPricing()}
            className="bg-[#df5615] hover:bg-[#c8480d] text-white px-3.5 sm:px-5 py-2 rounded-xl font-black text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2 shadow-lg cursor-pointer transition-all shrink-0 whitespace-nowrap"
          >
            <ShoppingCart className="w-4 h-4 stroke-[2.5] shrink-0" />
            <span>Ver Planes y Precios</span>
          </button>
        </aside>
      )}

      {/* Interactive Modals */}
      <UpgradeModal
        isOpen={isUpgradeOpen}
        onAcceptUpgrade={handleAcceptUpgrade}
        onDeclineUpgrade={handleDeclineUpgrade}
        onClose={() => setIsUpgradeOpen(false)}
      />

      <PhotoLightboxModal
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
        onGetDeal={() => {
          setTimeout(() => scrollToPricing(), 60);
        }}
      />

      <CheatSheetPreviewModal
        isOpen={isCheatSheetPreviewOpen}
        initialIndex={previewSheetIndex}
        onClose={() => setIsCheatSheetPreviewOpen(false)}
        onGetDeal={() => {
          setTimeout(() => scrollToPricing(), 60);
        }}
      />

      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}

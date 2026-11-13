import React, { useState, useEffect } from 'react';
import { TopBanner } from './components/TopBanner';
import { HeroSection } from './components/HeroSection';
import { ValueProposition } from './components/ValueProposition';
import { PanoramicBanner } from './components/PanoramicBanner';
import { CheatSheetsShowcase } from './components/CheatSheetsShowcase';
import { PrintAndTakeSection } from './components/PrintAndTakeSection';
import { BonusSection } from './components/BonusSection';
import { FaqSection } from './components/FaqSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { OfferDealSection } from './components/OfferDealSection';
import { PricingCardSection } from './components/PricingCardSection';
import { DecisionSection } from './components/DecisionSection';
import { Footer } from './components/Footer';
import { CheckoutModal } from './components/CheckoutModal';
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
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [isUpgradeOpen, setIsUpgradeOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<'basic' | 'complete' | 'upgrade'>('complete');
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

  const handleSelectPlan = (plan: 'basic' | 'complete') => {
    if (plan === 'basic') {
      // Prompt requirement: exclusively trigger the $15 upgrade popup when clicking Plan Básico
      setIsUpgradeOpen(true);
    } else {
      // Plan Completo ($20) goes directly to complete checkout
      navigateToCheckout('COMPLETE_CHECKOUT_URL', () => {
        setSelectedPlan('complete');
        setIsCheckoutOpen(true);
      });
    }
  };

  const handleAcceptUpgrade = () => {
    setIsUpgradeOpen(false);
    // User accepts the $15 upgrade offer
    navigateToCheckout('UPSELL_CHECKOUT_URL', () => {
      setSelectedPlan('upgrade');
      setIsCheckoutOpen(true);
    });
  };

  const handleDeclineUpgrade = () => {
    setIsUpgradeOpen(false);
    // User declines and proceeds with the $10 Plan Básico
    navigateToCheckout('BASIC_CHECKOUT_URL', () => {
      setSelectedPlan('basic');
      setIsCheckoutOpen(true);
    });
  };

  const scrollToPricing = () => {
    const pricingEl = document.getElementById('seccion-oferta');
    if (pricingEl) {
      pricingEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setSelectedPlan('complete');
      setIsCheckoutOpen(true);
    }
  };

  const scrollToTopics = () => {
    const topicsEl = document.getElementById('temas-cubiertos');
    if (topicsEl) {
      topicsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8f5] text-stone-900 font-sans antialiased selection:bg-[#df5615] selection:text-white">
      {/* 1. Sticky Top Flash Sale Announcement Bar */}
      <TopBanner hours={hours} minutes={minutes} seconds={seconds} />

      <main>
        {/* 2. Hero Section with Photographer background & 4 bullets */}
        <HeroSection onCtaClick={() => scrollToPricing()} />

        {/* 3. Value Proposition: Print one out whenever you need it + Video preview */}
        <ValueProposition />

        {/* 5. Panoramic Starry Night Banner with center button */}
        <PanoramicBanner
          onScrollToTopics={scrollToTopics}
          onOpenDetails={() => setIsCheatSheetPreviewOpen(true)}
        />

        {/* 6. 125 Cheat Sheets Showcase with 4 tabs & 9 photographic scenario cards */}
        <CheatSheetsShowcase
          onPhotoClick={(photo) => setActivePhoto(photo)}
          onPreviewSheet={(idx) => {
            setPreviewSheetIndex(idx ?? 2);
            setIsCheatSheetPreviewOpen(true);
          }}
        />

        {/* 7. Print them out and take them with you + The 3 Real Cheat Sheets Preview */}
        <PrintAndTakeSection
          onOpenPreview={(idx) => {
            setPreviewSheetIndex(idx);
            setIsCheatSheetPreviewOpen(true);
          }}
        />

        {/* 8. Free Bonus Today: 3 Camera Fundamentals Cheat Sheets */}
        <BonusSection />

        {/* 9. Frequently Asked Questions (FAQ Accordions) */}
        <FaqSection />

        {/* 10. Social Proof Testimonials Carousel (Ken Jones & Eddie Miller) */}
        <TestimonialsSection />

        {/* 11. The current deal for the flash sale + 90-Day Money Back Rosette + Countdown */}
        <OfferDealSection hours={hours} minutes={minutes} seconds={seconds} />

        {/* 12. Main Pricing Section: PLAN BÁSICO (US$ 10) vs PLAN COMPLETO (US$ 19) */}
        <div id="seccion-oferta">
          <PricingCardSection
            onSelectPlan={handleSelectPlan}
          />
        </div>

        {/* 13. Decision Time: Option 1 vs Option 2 */}
        <DecisionSection onBuyClick={() => scrollToPricing()} />
      </main>

      {/* 14. Footer with Legal Links & Copyright */}
      <Footer onOpenPolicy={(type) => setActivePolicy(type)} />

      {/* Sticky Bottom Quick-Buy Bar (Mobile & Tablet) */}
      {showStickyBar && (
        <aside aria-label="Barra de compra rápida" className="fixed bottom-0 inset-x-0 bg-stone-900/95 backdrop-blur-md text-white py-3 px-4 z-40 border-t border-stone-800 shadow-2xl flex items-center justify-between sm:justify-center gap-4 transition-transform animate-fadeIn">
          <div className="flex items-center gap-2">
            <span className="text-xs text-stone-400 line-through hidden sm:inline">$125</span>
            <span className="text-lg font-black text-amber-400">Desde $10</span>
            <span className="text-[11px] bg-[#df5615] text-white px-2 py-0.5 rounded font-black uppercase">
              OFERTA
            </span>
          </div>

          <button
            onClick={() => scrollToPricing()}
            className="bg-[#df5615] hover:bg-[#c8480d] text-white px-5 py-2 rounded-xl font-black text-sm flex items-center gap-2 shadow-lg cursor-pointer transition-all"
          >
            <ShoppingCart className="w-4 h-4 stroke-[2.5]" />
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

      <CheckoutModal
        isOpen={isCheckoutOpen}
        plan={selectedPlan}
        onClose={() => setIsCheckoutOpen(false)}
      />

      <PhotoLightboxModal
        photo={activePhoto}
        onClose={() => setActivePhoto(null)}
        onGetDeal={() => setIsCheckoutOpen(true)}
      />

      <CheatSheetPreviewModal
        isOpen={isCheatSheetPreviewOpen}
        initialIndex={previewSheetIndex}
        onClose={() => setIsCheatSheetPreviewOpen(false)}
        onGetDeal={() => setIsCheckoutOpen(true)}
      />

      <PolicyModal
        type={activePolicy}
        onClose={() => setActivePolicy(null)}
      />
    </div>
  );
}

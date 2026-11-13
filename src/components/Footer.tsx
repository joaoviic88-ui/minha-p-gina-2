import React from 'react';

interface FooterProps {
  onOpenPolicy: (type: 'privacy' | 'terms' | 'refund' | 'contact') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPolicy }) => {
  return (
    <footer className="w-full bg-[#fbf9f6] text-stone-600 py-10 border-t border-stone-200 text-xs sm:text-sm">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
        {/* Navigation Links */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-medium text-stone-700">
          <button
            onClick={() => onOpenPolicy('privacy')}
            className="hover:text-[#df5615] transition-colors cursor-pointer underline underline-offset-4 decoration-stone-300 hover:decoration-[#df5615]"
          >
            Política de Privacidad
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={() => onOpenPolicy('terms')}
            className="hover:text-[#df5615] transition-colors cursor-pointer underline underline-offset-4 decoration-stone-300 hover:decoration-[#df5615]"
          >
            Términos y Condiciones
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={() => onOpenPolicy('refund')}
            className="hover:text-[#df5615] transition-colors cursor-pointer underline underline-offset-4 decoration-stone-300 hover:decoration-[#df5615]"
          >
            Política de Reembolso
          </button>
          <span className="text-stone-300">|</span>
          <button
            onClick={() => onOpenPolicy('contact')}
            className="hover:text-[#df5615] transition-colors cursor-pointer underline underline-offset-4 decoration-stone-300 hover:decoration-[#df5615]"
          >
            Contacto
          </button>
        </div>

        {/* Copyright notice */}
        <p className="text-stone-500 text-xs font-normal">
          © Copyright 2026 Guías Rápidas de Fotografía. Todos los derechos reservados.
        </p>

        <p className="text-[11px] text-stone-400 max-w-xl mx-auto leading-relaxed">
          Los nombres y marcas comerciales de cámaras como Canon, Nikon, Sony y Fujifilm pertenecen a sus respectivos fabricantes y se mencionan únicamente con fines educativos y de compatibilidad técnica.
        </p>
      </div>
    </footer>
  );
};

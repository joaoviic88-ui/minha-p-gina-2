import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Lock, Download, Sparkles, CreditCard } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  plan?: 'basic' | 'complete' | 'upgrade';
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, plan = 'complete', onClose }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'paypal' | 'applepay'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const isBasic = plan === 'basic';
  const isUpgrade = plan === 'upgrade';
  const priceAmount = isBasic ? 10 : isUpgrade ? 15 : 20;
  const planTitle = isBasic
    ? 'Plan Básico — 85 Guías Rápidas'
    : isUpgrade
    ? 'Oferta Especial Upgrade — 125 Guías + 3 Bonos'
    : 'Plan Completo — 125 Guías + 3 Bonos';
  const planSubtitle = isBasic 
    ? '42 Guías de Aventura + 43 Guías de Iluminación'
    : isUpgrade
    ? 'Colección Completa de 125 Guías + 3 Bonos Exclusivos (Precio Promocional $15)'
    : 'Colección Completa de 125 Guías + 3 Bonos Exclusivos';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden border border-stone-200 relative max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 sm:p-6 relative flex items-center justify-between border-b border-stone-800 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Acceso Digital Inmediato</span>
            </div>
            <h3 className="text-lg sm:text-xl font-black">
              {isSuccess ? '¡Compra Completada con Éxito!' : `Finalizar Pedido: ${planTitle}`}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSuccess ? (
            /* Success State */
            <div className="text-center py-4 space-y-5 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div className="space-y-2">
                <h4 className="text-xl font-black text-stone-900">
                  ¡Bienvenido a la Colección de Guías Rápidas!
                </h4>
                <p className="text-stone-600 text-sm">
                  Hemos enviado una copia con tu recibo y tus enlaces permanentes a{' '}
                  <strong className="text-stone-900">{email || 'tu correo'}</strong>.
                </p>
              </div>

              {/* Instant Download Action Card */}
              <div className="bg-amber-50 border-2 border-amber-300 rounded-2xl p-5 text-left space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-sm text-stone-900">
                    {isBasic ? 'Paquete 85 Fichas (Plan Básico)' : 'Paquete Completo 125 Fichas + 3 Bonos'}
                  </span>
                  <span className="text-xs bg-emerald-600 text-white px-2 py-0.5 rounded font-bold">
                    PDF Listo
                  </span>
                </div>
                <p className="text-xs text-stone-600">
                  Formato PDF vectorial de ultra alta resolución. Apto para imprimir en A4/Carta o visualizar en smartphone y tablet.
                </p>
                <button
                  onClick={() => alert(`¡Descarga iniciada! Tu paquete de ${isBasic ? '85' : '125'} Guías Rápidas en PDF se está guardando en tu dispositivo.`)}
                  className="w-full bg-[#df5615] hover:bg-[#c8480d] text-white py-3 px-4 rounded-xl font-black text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer"
                >
                  <Download className="w-5 h-5" />
                  <span>Descargar Ahora el PDF Completo</span>
                </button>
              </div>

              <div className="pt-2">
                <button
                  onClick={onClose}
                  className="text-stone-500 hover:text-stone-800 text-sm font-semibold underline cursor-pointer"
                >
                  Volver a la página
                </button>
              </div>
            </div>
          ) : (
            /* Checkout Form */
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Summary pill */}
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-sm">
                    {planTitle}
                  </h4>
                  <p className="text-xs text-stone-500">
                    {planSubtitle} • Acceso digital de por vida
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-xl font-black text-[#df5615]">${priceAmount}</span>
                </div>
              </div>

              {/* Name & Email inputs */}
              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Tu Nombre Completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ej. Carlos Mendoza"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#df5615] text-stone-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-1">
                    Correo Electrónico (para recibir los enlaces de descarga)
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="tu@correo.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 focus:outline-none focus:ring-2 focus:ring-[#df5615] text-stone-900 text-sm"
                  />
                </div>
              </div>

              {/* Payment selector */}
              <div>
                <label className="block text-xs font-bold text-stone-700 uppercase tracking-wider mb-2">
                  Método de Pago Seguro
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-[#df5615] bg-orange-50 text-[#df5615]'
                        : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>Tarjeta</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('paypal')}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'paypal'
                        ? 'border-[#df5615] bg-orange-50 text-[#df5615]'
                        : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span className="font-serif italic font-bold">PayPal</span>
                    <span>PayPal</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('applepay')}
                    className={`p-2.5 rounded-xl border text-xs font-bold flex flex-col items-center justify-center gap-1 cursor-pointer transition-all ${
                      paymentMethod === 'applepay'
                        ? 'border-[#df5615] bg-orange-50 text-[#df5615]'
                        : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    <span>⚡ Pay</span>
                    <span>Apple/Google</span>
                  </button>
                </div>
              </div>

              {/* Card Inputs Simulation */}
              {paymentMethod === 'card' && (
                <div className="space-y-2 bg-stone-50 p-3 rounded-xl border border-stone-200 text-xs">
                  <input
                    type="text"
                    placeholder="Número de Tarjeta (ej. 4242 •••• •••• 4242)"
                    defaultValue="4242 •••• •••• 4242"
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-800"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="MM/AA"
                      defaultValue="12/28"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-800"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      defaultValue="789"
                      className="w-full px-3 py-2 rounded-lg border border-stone-300 bg-white text-stone-800"
                    />
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#df5615] hover:bg-[#c8480d] disabled:opacity-60 text-white py-4 px-6 rounded-2xl font-black text-lg shadow-xl hover:shadow-orange-500/25 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                {isProcessing ? (
                  <span className="flex items-center gap-2">
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Procesando pago seguro...</span>
                  </span>
                ) : (
                  <>
                    <Lock className="w-5 h-5 text-amber-200" />
                    <span>Pagar ${priceAmount} y Obtener Acceso Inmediato</span>
                  </>
                )}
              </button>

              {/* Reassurance footer */}
              <div className="flex items-center justify-center gap-4 text-[11px] text-stone-500 pt-1">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Garantía 30 Días
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-stone-500" />
                  Encriptación SSL 256-Bit
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { X, Shield, Mail, FileText, RefreshCw } from 'lucide-react';

interface PolicyModalProps {
  type: 'privacy' | 'terms' | 'refund' | 'contact' | null;
  onClose: () => void;
}

export const PolicyModal: React.FC<PolicyModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Política de Privacidad',
          icon: <Shield className="w-5 h-5 text-amber-500" />,
          body: (
            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                Nos comprometemos a proteger la privacidad y seguridad de todos nuestros usuarios y clientes. Esta política explica cómo tratamos la información personal recopilada a través de este sitio.
              </p>
              <h4 className="font-bold text-stone-900 text-base">Información que recopilamos</h4>
              <p>
                Únicamente solicitamos tu nombre y dirección de correo electrónico al momento de realizar la compra para enviarte el enlace de descarga de las guías y tu comprobante fiscal. Toda transacción monetaria se procesa mediante pasarelas de pago cifradas y conformes a PCI-DSS (Stripe, PayPal, Apple Pay). Nunca almacenamos los datos completos de tu tarjeta de crédito o débito en nuestros servidores.
              </p>
              <h4 className="font-bold text-stone-900 text-base">Uso de tus datos</h4>
              <p>
                Tu correo electrónico solo se utiliza para entregarte tus productos digitales comprados, enviarte actualizaciones técnicas de las guías si las hubiera y responder a tus consultas de soporte. No vendemos, alquilamos ni compartimos tu información personal con terceros para fines publicitarios.
              </p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Términos y Condiciones del Servicio',
          icon: <FileText className="w-5 h-5 text-amber-500" />,
          body: (
            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                Al acceder o comprar la Colección Completa de Guías Rápidas de Fotografía, aceptas los siguientes términos de licencia y uso.
              </p>
              <h4 className="font-bold text-stone-900 text-base">Licencia de Uso Personal</h4>
              <p>
                La compra de la colección te otorga una licencia personal, no exclusiva y de por vida para descargar, guardar e imprimir las fichas en tantos dispositivos personales como utilices (smartphone, tableta, ordenador personal o copias impresas en papel).
              </p>
              <h4 className="font-bold text-stone-900 text-base">Restricciones de Distribución</h4>
              <p>
                Queda terminantemente prohibida la reventa, redistribución comercial, subida a repositorios públicos de internet o compartición masiva de los archivos PDF sin consentimiento previo por escrito.
              </p>
            </div>
          )
        };
      case 'refund':
        return {
          title: 'Política de Reembolso Total de 30 Días',
          icon: <RefreshCw className="w-5 h-5 text-amber-500" />,
          body: (
            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                Queremos que adquieras la Colección de Guías Rápidas con absoluta tranquilidad y cero riesgo.
              </p>
              <div className="bg-amber-50 border border-amber-300 p-4 rounded-xl">
                <h4 className="font-bold text-stone-900 text-base mb-1">Garantía Incondicional de 30 Días</h4>
                <p>
                  Si en un plazo de 30 días a partir de la fecha de tu compra consideras que las guías no han cumplido tus expectativas o no te han resultado útiles en tus sesiones fotográficas, tienes derecho a solicitar un reembolso completo del 100% de tu dinero.
                </p>
              </div>
              <p>
                Para solicitar tu reembolso, basta con enviar un mensaje a soporte indicando el correo electrónico con el que realizaste la compra. Tu dinero será devuelto a tu método de pago original en un plazo de 1 a 3 días hábiles, sin preguntas ni trabas.
              </p>
            </div>
          )
        };
      case 'contact':
        return {
          title: 'Contacto y Soporte',
          icon: <Mail className="w-5 h-5 text-amber-500" />,
          body: (
            <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
              <p>
                ¿Tienes alguna pregunta antes o después de tu compra? Nuestro equipo de atención al cliente está a tu disposición para ayudarte.
              </p>
              <div className="bg-stone-50 border border-stone-200 p-4 rounded-xl space-y-2">
                <div>
                  <span className="text-xs font-bold uppercase text-stone-500 block">Correo de Asistencia Técnica:</span>
                  <a href="mailto:soporte@guiasrapidas.com" className="text-base font-bold text-[#df5615] hover:underline">
                    soporte@guiasrapidas.com
                  </a>
                </div>
                <div>
                  <span className="text-xs font-bold uppercase text-stone-500 block">Horario de Atención:</span>
                  <p className="text-stone-800 font-medium">Lunes a Viernes de 9:00 a 19:00 (Tiempo de respuesta promedio: menos de 4 horas)</p>
                </div>
              </div>
            </div>
          )
        };
    }
  };

  const { title, icon, body } = getContent();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-fadeIn">
      <div className="bg-white rounded-3xl shadow-2xl max-w-xl w-full overflow-hidden border border-stone-200 text-stone-900 relative max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="bg-stone-900 text-white p-5 flex items-center justify-between border-b border-stone-800 shrink-0">
          <div className="flex items-center gap-2 font-bold text-lg">
            {icon}
            <span>{title}</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">{body}</div>

        {/* Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 text-right shrink-0">
          <button
            onClick={onClose}
            className="bg-stone-900 hover:bg-stone-800 text-white px-5 py-2 rounded-xl text-sm font-bold cursor-pointer transition-colors"
          >
            Entendido
          </button>
        </div>
      </div>
    </div>
  );
};

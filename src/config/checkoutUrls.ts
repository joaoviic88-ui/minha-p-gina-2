/**
 * CONFIGURACIÓN DE ENLACES DE CHECKOUT
 * 
 * Introduce aquí las URLs de checkout de tu plataforma de pago (Hotmart, Stripe, Kiwify, PayPal, etc.).
 * Si se dejan vacías (''), la aplicación abrirá el modal de checkout integrado para pruebas.
 */
export const CHECKOUT_URLS = {
  // Enlace para el Plan Básico de $10 (85 guías)
  BASIC_CHECKOUT_URL: 'https://pay.hotmart.com/Y108429839B?off=hudeagrn&checkoutMode=10',

  // Enlace para el Plan Completo habitual de $20 (125 guías + 3 bonos)
  COMPLETE_CHECKOUT_URL: 'https://pay.hotmart.com/Y108429839B?off=9uspiqa3&checkoutMode=10',

  // Enlace exclusivo para la oferta de Upgrade a $15 (125 guías + 3 bonos por solo $5 más)
  UPSELL_CHECKOUT_URL: 'https://pay.hotmart.com/Y108429839B?off=i3l4jiy8&checkoutMode=10',
};

/**
 * Función auxiliar para redirigir a la URL de checkout configurada
 * o ejecutar el callback del modal si no hay enlace externo configurado.
 */
export function navigateToCheckout(
  urlKey: keyof typeof CHECKOUT_URLS,
  fallbackAction: () => void
) {
  const targetUrl = CHECKOUT_URLS[urlKey];
  if (targetUrl && targetUrl.trim().length > 0) {
    window.location.href = targetUrl.trim();
  } else {
    fallbackAction();
  }
}

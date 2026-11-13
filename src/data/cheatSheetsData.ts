import { PhotoSample, Testimonial, FaqItem } from '../types';

export const ADVENTURE_TOPICS_SPANISH = [
  'Auroras Boreales',
  'Relámpagos y Tormentas',
  'La Vía Láctea',
  'Trazas de Estrellas (Star Trails)',
  'Larga Exposición Diurna',
  'Cascadas y Saltos de Agua',
  'Festivales y Exhibiciones Aéreas',
  'Horas Doradas y Atardeceres',
  'Vida Silvestre y Fauna',
  'Fotografía Lunar',
  'Checklist de Equipaje para Viaje',
  'Pintura con Luz (Light Painting)',
  'Lluvias de Meteoros',
  'Cometas y Eventos Celestes',
  'Fases del Amanecer',
  'Eclipses Lunares',
  'Eclipses Solares',
  'Fases del Atardecer',
  'Aves en Pleno Vuelo',
  'Manhattanhenge',
  'Chicagohenge',
  'Escenas Nevadas y de Invierno',
  'Paisajes de Montaña',
  'Escenas de Muy Poca Luz',
  'Fotografía Callejera y Urbana',
  'Disparar desde la Cadera',
  'Flores y Macro en la Naturaleza',
  'Retratos de Viaje Auténticos',
  'Vistas Urbanas y Rascacielos',
  'Alto Rango Dinámico (HDR)',
  'Estelas de Tráfico y Carreteras',
  'Apilamiento de Enfoque (Focus Stacking)',
  'Timelapse y Secuencias',
  'Paisajes Marinos y Costas',
  'Panorámicas de Múltiples Tomas',
  'Siluetas al Contraluz',
  'Trucos con Móvil y Smartphones',
  'Blanco y Negro Dramático',
  'Fuegos Artificiales y Pirotecnia',
  'Fotografía Infrarroja',
  'Cascada de Fuego de Yosemite',
  '¡Y muchas más situaciones!'
];

export const CAMERA_FUNDAMENTALS_TOPICS_SPANISH = [
  'El Triángulo de Exposición',
  'Velocidad de Obturación en Acción',
  'Apertura del Diafragma y Bokeh',
  'Gestión del Ruido ISO',
  'Cómo Leer el Histograma',
  'Modos de Medición de Luz (Puntual, Evaluativa)',
  'Balance de Blancos y Temperatura Kelvin',
  'Modos de Enfoque Automático (AF-S, AF-C, Seguimiento)',
  'Modos de Ráfaga y Disparo Continuo',
  'RAW vs JPEG: Cuándo Usar Cada Uno',
  'Profundidad de Campo: Control Total',
  'Tamaños de Sensor (Full Frame vs APS-C vs Micro 4/3)',
  'La Regla de Reciprocidad de Velocidad',
  'Compensación de Exposición (+/- EV)',
  'Bloqueo de Exposición y Enfoque (AE-L / AF-L)',
  'Calibración y Nitidez Máxima del Objetivo',
  'Modo Manual: Cómo Perderle el Miedo',
  'Modo Prioridad a la Apertura (A/Av)',
  'Modo Prioridad al Obturador (S/Tv)',
  'Configuración de Botones Personalizados',
  'Limpieza y Mantenimiento del Sensor',
  'Guía Rápida de Errores de Exposición Comunes'
];

export const COMPOSITION_TOPICS_SPANISH = [
  'La Regla de los Tercios Efectiva',
  'Líneas Guía y Puntos de Fuga',
  'Proporción Áurea y Espiral de Fibonacci',
  'Marcos Naturales (Framing)',
  'Simetría y Reflexión en Agua',
  'Espacio Negativo y Minimalismo',
  'Perspectiva y Ángulos de Toma Inusuales',
  'Interés en el Primer Plano',
  'Teoría del Color y Rueda Cromática',
  'Equilibrio Visual: Formal e Informal',
  'Yuxtaposición y Contraste de Elementos',
  'Patrones Repetitivos y Texturas',
  'Ritmo Visual y Ruptura del Patrón',
  'Líneas Diagonales para Dinamismo',
  'Composición en Triángulo',
  'La Mirada del Sujeto y Dirección',
  'Escala Humana en Grandes Paisajes',
  'Encuadre Vertical vs Horizontal',
  'Recorte Consciente vs Encuadre en Cámara',
  'Composición en Blanco y Negro',
  'Romper las Reglas con Intención Artística',
  'Flujo Visual y Recorrido del Ojo'
];

export const LIGHTING_TOPICS_SPANISH = [
  'Comprender la Luz Natural a lo Largo del Día',
  'Magia de la Hora Dorada',
  'Secretos de la Hora Azul',
  'Fundamentos del Flash de Mano (Speedlight)',
  'Flash Rebotado en Techos y Paredes',
  'Luz Dura vs Luz Suave: Cómo Controlarlas',
  'Uso de Modificadores: Softboxes y Paraguas',
  'Iluminación de Contorno (Rim Light)',
  'Iluminación Estilo Rembrandt',
  'Iluminación Dividida (Split Lighting)',
  'Iluminación en Mariposa (Paramount/Beauty)',
  'Clave Alta (High Key) y Luminosidad',
  'Clave Baja (Low Key) y Claroscuro',
  'Reflectores: Blanco, Plateado, Dorado y Negro',
  'Difusores Portátiles bajo el Sol Directo',
  'Sincronización a Alta Velocidad (HSS)',
  'Flash Fuera de Cámara (Off-Camera Flash)',
  'Geles de Color y Corrección de Temperatura',
  'Esquemas de Iluminación con 1 Sola Luz',
  'Esquemas de Iluminación con 2 y 3 Luces',
  'Retratos Nocturnos con Luz Ambiental y Flash',
  'Fotografía de Producto: Iluminación de Cristal',
  'Iluminación para Comida y Bodegones',
  'Dominio de Sombras y Gradientes Suaves'
];

export const SAMPLE_PHOTOS: PhotoSample[] = [
  {
    id: 'campfire',
    title: 'Reunión al Atardecer en Playa',
    subtitle: 'Grupo alrededor de hoguera en la costa',
    imageUrl: 'https://images.unsplash.com/photo-1510312305653-8ed496efae75?auto=format&fit=crop&w=800&q=80',
    settings: {
      aperture: 'f/2.8',
      shutterSpeed: '1/60s',
      iso: '800',
      focalLength: '35mm',
      tripod: false,
      proTip: 'Aprovecha la luz cálida de la llama como fuente principal y compensa -0.7 EV para preservar el brillo.'
    }
  },
  {
    id: 'neon-city',
    title: 'Calle Nocturna con Neones',
    subtitle: 'Atmósfera urbana cinematográfica bajo lluvia',
    imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80',
    settings: {
      aperture: 'f/1.8',
      shutterSpeed: '1/125s',
      iso: '1600',
      focalLength: '50mm',
      tripod: false,
      proTip: 'Enfoca los reflejos en los charcos para una composición de doble capa con alto contraste.'
    }
  },
  {
    id: 'waterfall-sunset',
    title: 'Cascada Majestuosa al Atardecer',
    subtitle: 'Efecto seda y resplandor dorado',
    imageUrl: 'https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80',
    settings: {
      aperture: 'f/11',
      shutterSpeed: '1.5s',
      iso: '100',
      focalLength: '24mm',
      tripod: true,
      filter: 'Filtro ND 6 pasos',
      proTip: 'Usa disparador remoto o temporizador de 2 segundos para evitar la trepidación al pulsar el botón.'
    }
  },
  {
    id: 'solar-eclipse',
    title: 'Eclipse Solar Total',
    subtitle: 'Anillo de diamante y corona solar',
    imageUrl: 'https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80',
    settings: {
      aperture: 'f/8',
      shutterSpeed: '1/1000s (parcial) - 1/8s (totalidad)',
      iso: '200',
      focalLength: '400mm - 600mm',
      tripod: true,
      filter: 'Filtro Solar Certificado (retirar solo en totalidad)',
      proTip: 'Programa un horquillado (bracketing) de 5 exposiciones consecutivas para captar todos los detalles de la corona.'
    }
  },
  {
    id: 'lightning-city',
    title: 'Relámpago sobre el Horizonte Urbano',
    subtitle: 'Impacto eléctrico ramificado sobre la ciudad',
    imageUrl: 'https://images.unsplash.com/photo-1511289081-d06dda19034d?auto=format&fit=crop&w=800&q=80',
    settings: {
      aperture: 'f/8 a f/11',
      shutterSpeed: '15s - 25s (Modo Bulb)',
      iso: '100',
      focalLength: '28mm',
      tripod: true,
      proTip: 'Enfoca manualmente al infinito durante el día o en las luces de un edificio lejano antes de que empiece la tormenta.'
    }
  },
  {
    id: 'lunar-eclipse',
    title: 'Fases del Eclipse Lunar',
    subtitle: 'Secuencia completa de Luna de Sangre',
    imageUrl: 'https://images.unsplash.com/photo-1532693322450-2cb5c511067d?auto=format&fit=crop&w=800&q=80',
    settings: {
      aperture: 'f/5.6',
      shutterSpeed: '1/2s (fase roja)',
      iso: '1600',
      focalLength: '300mm - 500mm',
      tripod: true,
      proTip: 'Cuando la luna entra en la sombra terrestre pierde hasta 10 pasos de luz; eleva el ISO y mantén el obturador bajo 1s.'
    }
  },
  {
    id: 'sea-arch',
    title: 'Arco de Piedra en la Costa',
    subtitle: 'Paisaje marino en marea baja al crepúsculo',
    imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80',
    settings: {
      aperture: 'f/11',
      shutterSpeed: '4s',
      iso: '100',
      focalLength: '16mm',
      tripod: true,
      filter: 'Polarizador Circular + ND Graduado',
      proTip: 'Tiempo de exposición entre 1 y 4 segundos conserva las texturas de la espuma marina en retroceso.'
    }
  },
  {
    id: 'traffic-streaks',
    title: 'Estelas de Luces en Autopista',
    subtitle: 'Larga exposición de tráfico y curvas',
    imageUrl: 'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=800&q=80',
    settings: {
      aperture: 'f/13',
      shutterSpeed: '20s',
      iso: '100',
      focalLength: '35mm',
      tripod: true,
      proTip: 'Espera a la hora azul: el cielo azul profundo crea un contraste cromático espectacular con las luces rojas y blancas.'
    }
  },
  {
    id: 'wildflowers',
    title: 'Flores Silvestres en la Montaña',
    subtitle: 'Macro y enfoque suave en pradera alpina',
    imageUrl: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=800&q=80',
    settings: {
      aperture: 'f/2.8',
      shutterSpeed: '1/500s',
      iso: '200',
      focalLength: '100mm Macro',
      tripod: false,
      proTip: 'Ponte a la misma altura que los pétalos y busca un fondo sombreado para que las flores resalten con luz tamizada.'
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Andrés Martínez',
    role: 'Fotógrafo aficionado — 8 meses de experiencia.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    quote: 'Antes me costaba mucho entender cuándo debía cambiar el ISO, la apertura o la velocidad de obturación. Estas guías me ayudaron a comprender mejor los ajustes de mi cámara y a dejar de fotografiar a prueba y error. Ahora salgo a tomar fotos con mucha más confianza.',
    stars: 5
  },
  {
    id: '2',
    name: 'Sofía Ramírez',
    role: 'Fotógrafa de viajes — 3 años de experiencia.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    quote: 'Me encanta tener toda la información organizada y explicada de forma visual. Antes perdía mucho tiempo buscando tutoriales cada vez que tenía dudas sobre la configuración de mi cámara. Ahora puedo consultar las guías rápidamente y concentrarme en disfrutar de la fotografía.',
    stars: 5
  },
  {
    id: '3',
    name: 'Sebastián González',
    role: 'Fotógrafo de paisajes — 7 años de experiencia.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    quote: 'Después de varios años fotografiando, todavía hay situaciones en las que necesito recordar ciertos ajustes técnicos. Estas guías son una excelente referencia para consultar rápidamente diferentes configuraciones. Son prácticas, claras y muy fáciles de utilizar.',
    stars: 5
  },
  {
    id: '4',
    name: 'Camila Fernández',
    role: 'Fotógrafa profesional — 12 años de experiencia.',
    avatar: '/assets/camila_portrait.jpg',
    quote: 'Lo que más valoro es la claridad de la información. Tener conceptos técnicos resumidos en materiales visuales facilita muchísimo las consultas, incluso cuando ya tienes experiencia con la cámara. Es un recurso muy práctico para tener siempre a mano.',
    stars: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cómo se entregan las Guías Rápidas?',
    answer: 'La entrega es inmediata y 100% digital. Justo tras completar tu pedido recibirás un correo electrónico con tu enlace de acceso instantáneo para descargar el paquete completo en formato PDF de alta resolución. Además, tendrás acceso de por vida y podrás descargarlas de nuevo cuando quieras desde cualquier dispositivo.'
  },
  {
    id: 'faq-2',
    question: '¿En qué formato de archivo vienen las Guías Rápidas?',
    answer: 'Vienen en formato PDF estándar de calidad profesional vectorial y ultra nítido. Son compatibles con cualquier lector de PDF en computadoras Windows, Mac, iPad, iPhone, dispositivos Android y tablets. Además, están optimizadas para imprimirse perfectamente en hojas A4 o Carta si prefieres llevarlas en papel en tu mochila.'
  },
  {
    id: 'faq-3',
    question: '¿Cuál es el mejor tamaño de impresión?',
    answer: 'Están diseñadas en proporción estándar internacional para imprimirse nítidamente tanto en tamaño Carta (8.5 x 11 pulgadas) como en A4 (210 x 297 mm). También puedes imprimirlas en tamaño de bolsillo A5 o como fichas plastificadas para guardarlas en los compartimentos de tu bolsa fotográfica.'
  },
  {
    id: 'faq-4',
    question: '¿Quiénes crearon estas guías?',
    answer: 'Somos un equipo de fotógrafos profesionales y educadores apasionados por la técnica y la enseñanza práctica. Durante años hemos ayudado a millones de fotógrafos en más de 180 países a dominar su cámara y aprender nuevas técnicas a través de tutoriales claros, prácticos y libres de tecnicismos innecesarios.'
  },
  {
    id: 'faq-5',
    question: '¿Funcionarán estas guías para mi cámara?',
    answer: '¡Sí, con total seguridad! Los principios fundamentales de la fotografía —apertura del diafragma, velocidad de obturación, sensibilidad ISO, distancia focal, rango dinámico y enfoque— son universales para cualquier marca y modelo de cámara: Canon, Nikon, Sony, Fujifilm, Olympus, Panasonic Lumix, Leica, Pentax e incluso para teléfonos móviles con controles manuales (Pro RAW).'
  },
  {
    id: 'faq-6',
    question: '¿Servirán para mi nivel de experiencia?',
    answer: 'Absolutamente. Si eres principiante, te darán la confianza para abandonar el modo automático desde el primer día con configuraciones probadas paso a paso. Y si eres un fotógrafo intermedio o avanzado, te servirán como una guía de referencia rápida infalible para situaciones técnicas complejas como eclipses, auroras boreales, pintura con luz, astrofotografía y apilamiento de enfoque.'
  },
  {
    id: 'faq-7',
    question: '¿Hay alguna garantía de devolución de dinero?',
    answer: 'Sí, cuentas con una garantía incondicional de reembolso del 100% durante 30 días completos. Si por cualquier motivo sientes que estas guías no han mejorado tus fotos o no son exactamente lo que esperabas, simplemente escríbenos a soporte dentro de los 30 días y te devolveremos cada céntimo sin preguntas ni complicaciones.'
  }
];

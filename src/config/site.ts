/**
 * Datos centrales del sitio. Todo lo marcado [CONFIRMAR] está pendiente de
 * validación con el cliente (ver README.md → "Datos pendientes").
 */
export const SITE = {
  /** [CONFIRMAR] Nombre comercial final. "Sprint Colonia" es el nombre de trabajo. */
  name: 'Sprint Colonia',

  /** [CONFIRMAR] Dominio definitivo. Se usa para canonical, Open Graph y sitemap. */
  url: 'https://sprintcolonia.com.ar',

  metaTitle: 'Sprint Colonia | Colonia de Verano en Núñez, CABA',
  metaDescription:
    'Sprint Colonia: 42 años cuidando el verano de tus hijos en Núñez. Predio exclusivo y seguro, 3 piletas, servicio médico y transporte puerta a puerta.',

  /**
   * [CONFIRMAR] WhatsApp público, formato internacional sin "+" ni espacios
   * (ej: 5491112345678). Mientras esté vacío, los botones abren WhatsApp con
   * el mensaje listo pero sin destinatario.
   */
  whatsappNumber: '',
  whatsappMessage: 'Hola, quiero más info sobre Sprint Colonia',

  /** [CONFIRMAR] Dirección exacta del predio. `street: null` muestra el placeholder. */
  address: {
    street: null as string | null,
    locality: 'Núñez',
    region: 'CABA',
    country: 'AR',
  },
  /** Centro del mapa embebido hasta tener la dirección exacta. */
  mapQuery: 'Núñez, Buenos Aires, Argentina',

  /** Cuentas históricas de la marca — [CONFIRMAR] que sigan activas. */
  social: {
    instagram: 'https://www.instagram.com/coloniasprint/',
    facebook: 'https://www.facebook.com/sprintcolonia',
  },

  /**
   * Video del predio. Completar UNO de los dos:
   * - youtubeId: ID del video en YouTube (se carga recién al hacer clic).
   * - file: ruta a un .mp4 dentro de /public (ej: '/video/predio.mp4').
   */
  video: {
    youtubeId: '',
    file: '',
  },

  /**
   * Video corto de fondo para el hero (5–10 s, sin audio, < 2 MB).
   * Ej: '/video/hero.mp4'. Vacío = se usa solo la foto.
   */
  heroVideo: '/video/hero.mp4',
} as const;

/** Link de WhatsApp con mensaje precargado. */
export function waLink(message: string = SITE.whatsappMessage): string {
  const text = encodeURIComponent(message);
  return SITE.whatsappNumber
    ? `https://wa.me/${SITE.whatsappNumber}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

export const NAV_LINKS = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#propuesta', label: 'Propuesta' },
  { href: '#actividades', label: 'Actividades' },
  { href: '#horarios', label: 'Horarios y Packs' },
  { href: '#testimonios', label: 'Testimonios' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
];

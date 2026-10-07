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
    'Sprint Colonia: 42 años compartiendo aventuras, juegos y amigos en Núñez. Predio exclusivo, seguro y con mucho verde, 3 piletas, servicio médico y transporte puerta a puerta.',

  /**
   * WhatsApp principal (línea A), formato internacional sin "+" ni espacios.
   * Es el destino de todos los botones de WhatsApp del sitio.
   */
  whatsappNumber: '5491144700114',
  whatsappDisplay: '11-4470-0114',
  /** WhatsApp secundario (línea B). Se muestra en Contacto y en el footer. */
  whatsappAlt: { number: '5491163652222', display: '11-6365-2222' },
  /** Teléfono fijo. */
  phone: { number: '+541147817675', display: '11-4781-7675' },
  email: 'coloniasprint@gmail.com',
  whatsappMessage: 'Hola, quiero más info sobre Sprint Colonia',

  /** Dirección del predio. `street: null` muestra el placeholder. */
  address: {
    street: 'Club Centro Naval, Colectora Cantilo 2001' as string | null,
    locality: 'Núñez',
    region: 'CABA',
    country: 'AR',
  },
  /** Coordenadas del predio para el mapa embebido. */
  mapQuery: '-34.53659912,-58.45577896',
  /** Link a Google Maps (botón "Cómo llegar"). */
  mapsUrl: 'https://maps.google.com/maps/search/Centro%20Naval%20Sede%20Nunez/@-34.53659912,-58.45577896,17z?hl=es',

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
  heroVideo: '',
} as const;

/** Link de WhatsApp con mensaje precargado (por defecto, a la línea A). */
export function waLink(message: string = SITE.whatsappMessage, number: string = SITE.whatsappNumber): string {
  const text = encodeURIComponent(message);
  return number ? `https://wa.me/${number}?text=${text}` : `https://wa.me/?text=${text}`;
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

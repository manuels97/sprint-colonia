# Sprint Colonia — sitio web

Landing one-pager de **Sprint Colonia**, la colonia de verano del grupo Sprint, en el Club Centro Naval (Colectora Cantilo 2001, Núñez). Está hecha en Astro con salida estática, cero frameworks de UI y JS mínimo.

## Cómo correrlo

Requiere Node.js 22.12 o superior.

```bash
npm install
npm run dev       # http://localhost:4321
```

| Comando           | Qué hace                                        |
| ----------------- | ----------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con recarga en vivo      |
| `npm run build`   | Genera el sitio estático optimizado en `dist/`  |
| `npm run preview` | Sirve `dist/` para probar el build de producción |

> El build descarga las fuentes de Google Fonts una vez, así que necesita conexión a internet.

---

## Datos del negocio

Casi todo se cambia en un solo archivo: [`src/config/site.ts`](src/config/site.ts).

| Dato | Dónde se cambia | Valor actual |
|------|-----------------|--------------|
| Nombre | `SITE.name` | Sprint Colonia |
| Dominio | `SITE.url`, `astro.config.mjs` (`site`) y `public/robots.txt` | `https://sprintcolonia.com.ar` (afecta canonical, Open Graph y sitemap) |
| Dirección y mapa | `SITE.address`, `mapQuery`, `mapsUrl` | Club Centro Naval, Colectora Cantilo 2001, Núñez, CABA |
| WhatsApp, teléfono y mail | `SITE.whatsappNumber`, `whatsappAlt`, `phone`, `email` | WhatsApp 11-4470-0114 (destino de los botones) y 11-6365-2222, fijo 11-4781-7675, coloniasprint@gmail.com |
| Redes | `SITE.social` | Instagram @coloniasprint, Facebook /sprintcolonia |
| Logo | `src/assets/logo.png` | 134×85. Si aparece una versión más grande o en SVG, reemplazar el archivo |
| Actividades | `src/components/Actividades.astro` | |
| Colegios y empresas con descuento | `src/components/Contacto.astro` | Listado "Colonia 2027" |
| Horarios | `Horarios.astro`, `Propuesta.astro`, `PorQue.astro` | Completo 9:30–17:30, mañana 9:30–13:30, tarde 13:30–17:30, pre-hora desde las 8:30 |
| Precios de packs | `src/components/Horarios.astro` | "Consultar" (se responden por WhatsApp) |
| Video del predio | `SITE.video` / `SITE.heroVideo` | Sin video por ahora; ver la sección "Video" |

### Contenido

- **Fotos**: fotos reales del predio, en 720–800 px de ancho, así que en pantallas grandes el hero se ve algo suave. Si hay originales más grandes, reemplazarlos con el mismo nombre en `src/assets/images/` y Astro los reoptimiza solo.
- **Por qué nos eligen** (`src/components/PorQue.astro`): armada solo con datos reales de la colonia. Si más adelante hay reseñas de familias, con su autorización, se pueden sumar ahí.
- **Imagen para compartir** (`public/og-image.jpg`, 1200×630): es la que se ve al compartir el link por WhatsApp. Se generó a partir de `chicos-pileta.png`. Los favicons salen de `logo.png`.

---

## Video

Ninguno de los dos bloques de video bloquea el resto del sitio:

- **Video del predio (sección "Nuestro predio")**: hay un *facade* liviano (imagen + botón play) que carga el video recién al hacer clic. Completar **uno** de los dos campos:
  - `SITE.video.youtubeId`: el ID de YouTube. Se embebe con `youtube-nocookie.com`.
  - `SITE.video.file`: un `.mp4` dentro de `public/`, por ejemplo `'/video/predio.mp4'`.
- **Video de fondo del hero (opcional)**: `SITE.heroVideo = '/video/hero.mp4'`. Tiene que ser corto (5 a 10 s), sin audio y comprimido (menos de 2 MB). La foto queda como póster.
- **Videos "Momentos"** (`public/video/momentos/`): están recomprimidos para la web (H.264, 720 px de alto, CRF 30, audio AAC 64 kbps, `+faststart`). Pasaron de 12 MB a 4,5 MB en total. Los originales quedan en `media-originales/`, que está en `.gitignore` y no se publica. Para sumar un clip nuevo:

  ```bash
  ffmpeg -i original.mp4 -vf "scale=-2:720,fps=30" -c:v libx264 -preset slow -crf 30 \
    -maxrate 900k -bufsize 1800k -pix_fmt yuv420p -c:a aac -b:a 64k -movflags +faststart wspN.mp4
  ```

---

## Estructura

```
src/
├── assets/
│   ├── images/          fotos reales del predio (Astro genera WebP + srcset)
│   └── logo.png         logo oficial de Sprint Colonia
├── components/          un componente por sección
│   ├── Navbar.astro     sticky + menú hamburguesa mobile
│   ├── Hero.astro       H1 SEO + CTAs + franja de confianza
│   ├── Nosotros.astro
│   ├── Propuesta.astro  grid de los 13 puntos de venta
│   ├── Galeria.astro    "Nuestro predio" + facade de video
│   ├── Actividades.astro
│   ├── Horarios.astro   turnos, pre-hora y packs
│   ├── Servicios.astro  transporte + servicio médico
│   ├── PorQue.astro     "Por qué nos eligen"
│   ├── Ubicacion.astro  dirección + mapa embebido
│   ├── Contacto.astro   WhatsApp, requisitos y formulario
│   ├── Footer.astro
│   ├── WhatsAppFloat.astro
│   ├── Icon.astro       set único de íconos de línea
│   └── Logo.astro
├── config/site.ts       datos del negocio en un solo lugar
├── layouts/Layout.astro <head> SEO, Open Graph, JSON-LD, animaciones de scroll
├── pages/index.astro    arma todas las secciones
├── pages/404.astro      página de error (noindex)
└── styles/global.css    paleta (custom properties), base y utilidades
public/
├── robots.txt
├── og-image.jpg
├── site.webmanifest
├── video/momentos/      clips comprimidos + pósters
└── favicon.ico, favicon-32.png, favicon-192.png, apple-touch-icon.png
```

---

## Decisiones técnicas

- **Astro 6 en lugar de Astro 7.** Astro 7 incluye un binario nativo nuevo (`satteri`) que **Windows Smart App Control bloquea** en esta máquina, y por eso `npm run dev` fallaba. Astro 6.4 ofrece las mismas APIs que usa el proyecto (`<Image>`, `<Picture>`, Fonts API, sitemap). Ver también "Seguridad de dependencias".
- **Formulario sin backend.** Al enviar, se valida y se abre WhatsApp con todos los datos en un mensaje armado, porque WhatsApp es el canal real de conversión. Si más adelante se quieren recibir los datos por mail, se puede usar Netlify Forms o un servicio tipo Formspree.
- **Islands sin framework.** El menú mobile, el formulario y el facade de video son `<script>` chicos de Astro, sin React ni Vue. El carrusel de testimonios en mobile usa `scroll-snap` (solo CSS).
- **Fuentes.** Bebas Neue y Nunito de Google Fonts, descargadas en el build con el Fonts API de Astro y servidas desde el propio dominio. Llevan `font-display: swap`, preload y un fallback con métricas ajustadas, así no se mueve el layout al cargar. Rindió más que el `<link>` a Google Fonts con preconnect: el LCP mobile bajó de 2.7 s a 1.7 s.
- **CSS inline.** Al ser una sola página, todo el CSS va dentro del HTML y no hay requests que bloqueen el render.
- **Animaciones.** Fade-up y slide sutiles con `IntersectionObserver` y CSS, igual que en el sitio del gimnasio. Respetan `prefers-reduced-motion`, y sin JS todo el contenido queda visible.
- **Paleta.** Celeste, verde y amarillo como protagonistas. El rojo Sprint aparece solo como acento (logo, servicio médico). Los colores de texto y botones se ajustaron para cumplir el contraste WCAG AA.

## Resultados (Lighthouse mobile, build de producción)

| Performance | Accessibility | Best Practices | SEO |
|:-:|:-:|:-:|:-:|
| 98 | 100 | 100 | 100 |

LCP 1.7 s · CLS 0 · TBT 20 ms. Medido con `astro preview` en local y throttling mobile por defecto.

SEO incluido: un solo H1 con nombre + "colonia de verano" + "Núñez"; meta description de 149 caracteres; JSON-LD `SportsActivityLocation` (sin reseñas falsas); Open Graph y Twitter Card completos; canonical; `sitemap-index.xml` (vía `@astrojs/sitemap`) y `robots.txt`; alt en todas las imágenes de contenido (las decorativas llevan `alt=""`).

## Seguridad de dependencias

`package.json` fuerza (`overrides`) versiones parcheadas de `sharp` (0.35.5) y `esbuild` (0.28.x). `npm audit` sigue marcando avisos sobre **Astro 6**, que se corrigen en Astro ≥ 7.2.8. En este proyecto el riesgo práctico es bajo:

- El aviso crítico es de RCE al optimizar imágenes AVIF **maliciosas**. Acá solo se procesan imágenes propias, en build.
- Los avisos de XSS afectan a View Transitions, atributos dinámicos y SSR. Este sitio es estático y no renderiza contenido de usuarios.

Igual, **antes de producción conviene subir a Astro 7.3+**, haciendo el build en una máquina o CI donde Smart App Control no bloquee el binario (por ejemplo, Netlify). Los cambios necesarios son mínimos: actualizar la versión en `package.json`, quitar `overrides` y volver a buildear.

## Deploy

Netlify, con deploy automático desde `main`. `netlify.toml` ya define el build (`npm run build` → `dist`), cabeceras de seguridad y caché de 1 año para `/_astro/*` (los archivos llevan hash). Si se reemplaza un video de `public/video/`, cambiarle el nombre, porque se cachea 30 días.

Después del primer deploy:

1. En Netlify, cargar `sprintcolonia.com.ar` como dominio principal y `www` como alias (Netlify redirige solo y emite el certificado HTTPS).
2. Dar de alta el sitio en [Google Search Console](https://search.google.com/search-console), verificar el dominio y enviar `https://sprintcolonia.com.ar/sitemap-index.xml`.
3. Crear o reclamar el perfil de [Google Business Profile](https://business.google.com) con la misma dirección, teléfono y link al sitio. Para una colonia de barrio es lo que más pesa en las búsquedas locales ("colonia de verano Núñez").
4. Probar los datos estructurados en [Rich Results Test](https://search.google.com/test/rich-results) y la vista previa al compartir por WhatsApp.

## Créditos

Las fotos y el logo son propios de Sprint Colonia.

Los íconos están basados en [Lucide](https://lucide.dev) (ISC) y el glifo de WhatsApp viene de [Simple Icons](https://simpleicons.org) (CC0).

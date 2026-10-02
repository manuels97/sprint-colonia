# PROMPT — Sitio Web Sprint Colonia

Pegá todo esto en Claude Code (abrí esta carpeta en VS Code, abrí la terminal de Claude Code ahí, y pasale este archivo). Está listo para generar el proyecto completo de punta a punta: scaffolding de Astro incluido, no hace falta correr nada manualmente antes.

---

## ANTES DE EMPEZAR — datos a confirmar con el cliente

Hay 3 cosas marcadas como `[CONFIRMAR]` en este documento que Claude Code debe dejar como placeholder visible hasta que el cliente las confirme — no inventarlas:

1. **Dirección exacta del predio.** El cliente dice "Núñez, a un paso de todo". El sitio anterior de esta misma marca (sprintgroup.com.ar/colonia, hoy desactualizado) decía "Club Atlético Platense, Zufrategui 2021, Vicente López". Puede que se hayan mudado, o que "Núñez" sea una forma coloquial de ubicarse cerca del límite con Vicente López. **No asumir ubicación — dejar placeholder.**
2. **Teléfono/WhatsApp público del sitio.** El número que pasó el cliente (+54 9 11 4470-0114) es de quien escribió el mensaje — confirmar si es el número público para el botón de WhatsApp o si hay otro.
3. **Nombre comercial exacto.** Todo indica que es "Sprint Colonia" (Instagram histórico: @coloniasprint, Facebook: sprintcolonia, mismo grupo que Sprint Gym) — usarlo como nombre de trabajo pero confirmar con el cliente antes de producción final.

## OBJETIVO

Construir el sitio web de Sprint Colonia: una landing de una sola página (one-pager), informativa, con secciones, imágenes y espacio para un video del predio. Es la demo para mostrarle al cliente y conseguir su aprobación. Tiene que verse profesional, cálida y confiable — y ser la más óptima posible en performance y SEO, porque así lo pidió explícitamente el desarrollador a cargo.

## CONTEXTO DE MARCA

Sprint Colonia es la colonia de verano del mismo grupo que **Sprint Gym** (ya tiene sitio propio, carpeta hermana `SprintGimansio/` en este mismo Desktop). Sprint Gym usa modo oscuro, rojo `#dc2626` como acento, y Bebas Neue para titulares. Para la colonia el público es distinto (padres decidiendo por sus hijos, no deportistas) así que el tono visual **tiene que ser claro, cálido y amigable para chicos** — pero mantené el rojo de marca y Bebas Neue en el logo/wordmark como hilo conductor entre ambos sitios Sprint. El logo actual (`SprintGimansio/assets/logosprint.png`) es wordmark blanco + marca roja, pensado para fondo oscuro — **no sirve tal cual sobre fondo claro**, usar una versión solo del ícono rojo o pedir al cliente una variante para fondo claro.

## IDENTIDAD DEL CLIENTE

**Marca:** Sprint Colonia
**Descripción en una línea:** 42 años cuidando el verano de los chicos en un predio propio y seguro, en Núñez.
**Cliente objetivo:** Padres y madres de CABA/zona norte (Belgrano, Núñez, Vicente López, Olivos) buscando una colonia de verano confiable para sus hijos.
**Diferencial:** 42 años de trayectoria (líder del rubro en colonias privadas), predio **exclusivo** que no comparte con otras colonias ni con socios de ningún club — a diferencia de la mayoría de la competencia.

### Puntos de venta — en orden de prioridad del cliente (son el corazón del contenido)

1. Cercanía — Núñez, a un paso de todo.
2. Mucho verde — predio amplio al aire libre.
3. Seguridad — predio exclusivo y controlado (mensaje insignia de todo el sitio).
4. Servicio médico permanente.
5. Grupos reducidos.
6. 3 piletas para distintas edades.
7. Guardavidas.
8. Transporte puerta a puerta y por paradas fijas.
9. Turno completo.
10. Turno mañana / turno tarde.
11. Servicio de pre-hora.
12. Servicio de almuerzo y merienda.
13. Packs semanales, quincenales, mensuales y de temporada.

## VISUALES

**Modo:** Claro (fondo blanco/crema — a diferencia del gym, acá la claridad transmite confianza y es apropiada para el público familiar).

**Colores:**
```css
--color-sky:        #2E9CCA;  /* azul agua/pileta — confianza */
--color-sky-dark:    #1C6E96; /* header/footer/hover */
--color-grass:        #5AA85C; /* verde natural — "mucho verde" */
--color-sun:           #FFB627; /* amarillo sol — calidez, acentos */
--color-sprint-red:    #dc2626; /* rojo de marca Sprint — logo, algún CTA puntual */
--color-cream:         #FFFBF2; /* fondo general, cálido, no blanco frío */
--color-night:          #1B2A33; /* textos oscuros, footer */
--color-text-muted:     #5C6B70;
```
No uses el rojo como color dominante de fondo (eso es lenguaje del gym); acá es un acento de marca puntual (logo, algún detalle), el protagonista visual es el celeste/verde/amarillo.

**Tipografías (Google Fonts):**
- Titulares: **Bebas Neue** (coherencia con Sprint Gym) — pero en tamaños más moderados que el gym, sin sensación agresiva.
- Cuerpo: **Nunito** o **Inter** (pesos 400, 600, 700) — cálida y muy legible en mobile.

**Estilo general:**
- Formas redondeadas (cards, botones, fotos con `border-radius` generoso).
- Fotografía real de chicos al aire libre, pileta, verde — luz natural, nunca stock de oficina.
- Un solo estilo de ícono consistente en todo el sitio (line icons con relleno de color).
- Espacio en blanco/crema generoso — sensación de orden y calma = seguridad.
- Animaciones sutiles al hacer scroll (fade-up + slide), nada distractivo.
- Mobile-first.

## SECCIONES A INCLUIR (en este orden)

### 1. NAVBAR (sticky)
- Logo Sprint Colonia a la izquierda.
- Links ancla: Inicio · Nosotros · Propuesta · Actividades · Horarios y Packs · Testimonios · Ubicación · Contacto.
- CTA destacado (botón, color sun o sprint-red): "Quiero más info" → WhatsApp.
- Mobile: menú hamburguesa.

### 2. HERO
- Fondo: foto o video corto del predio (chicos en pileta/verde) con overlay suave para legibilidad — sin saturar, tiene que "atrapar sin pasarse".
- Título (Bebas Neue, grande):
  ```
  42 AÑOS CUIDANDO EL VERANO DE TUS HIJOS
  ```
- Subtítulo: "Un predio propio, seguro y a un paso de tu casa, en Núñez [CONFIRMAR]."
- 2 CTAs: Primario "Quiero más información" (WhatsApp) · Secundario (outline) "Conocé la colonia" (baja a Propuesta).
- **SEO:** este texto es el H1, debe incluir nombre + "colonia de verano" + "Núñez".

### 3. NOSOTROS
Texto base (adaptar, no copiar literal — es contenido propio de la marca a actualizar):
> "42 años de experiencia en la organización, planificación y dirección de colonias de vacaciones. Ofrecemos un predio propio, amplio, seguro y con mucho verde, pensado para que tus hijos jueguen, creen y aprendan con total tranquilidad. Contamos con seguridad, servicio médico y guardavidas de forma permanente, y un equipo de profesores especializados en cada área — con el compromiso de generar un espacio donde los chicos puedan jugar, crear y aprender en plenitud."

Sub-bloques cortos:
- **Misión:** educar en el tiempo libre, inculcar valores a través del deporte, el juego y la recreación.
- **Valores:** seguridad, responsabilidad, compromiso, espíritu de equipo.
- Badges: "42 años", "Predio propio y exclusivo", "Equipo de profesores especializados".

### 4. PROPUESTA (grid de los 13 puntos)
Título: "Por qué elegir Sprint Colonia"
Grid de cards (ícono + título corto + 1 línea de descripción) con los 13 puntos de la sección anterior. Esta es la sección más importante del sitio.

### 5. INSTALACIONES / GALERÍA
Título: "Nuestro predio"
Fotos (o video corto, loop, sin audio) de las 3 piletas, espacios verdes, zona de juegos. Si hay video, usarlo como fondo del bloque o como clip embebido liviano.

### 6. ACTIVIDADES
Título: "Todo lo que hacen en Sprint Colonia"
Grid con las mismas categorías históricas de la marca (confirmar vigencia con cliente):
- **Deportes:** natación, fútbol, rugby, hockey, softbol.
- **Talleres:** plástica, dibujo, pintura, teatro, música.
- **Otras actividades:** tela, gimnasia artística, yoga.
- **Vida en la naturaleza:** fogones y trekking.

### 7. TURNOS, HORARIOS Y PACKS
Título: "Elegí el turno que mejor se adapta a tu familia"
- Turno mañana / turno tarde / turno completo.
- Servicio de pre-hora.
- Servicio de almuerzo y merienda incluido en turno completo.
- Cards de packs: semanal, quincenal, mensual, temporada — precio "Consultar" en la demo.
- CTA: "Consultar disponibilidad" → WhatsApp.

### 8. TRANSPORTE Y SERVICIO MÉDICO
Dos cards grandes, mismo peso visual que Nosotros (son argumentos de seguridad):
- **Transporte:** servicio puerta a puerta y por paradas fijas, unidades habilitadas con choferes profesionales. A contratar en el momento de inscripción.
- **Servicio médico:** personal médico disponible durante toda la franja horaria, guardavidas permanentes en las piletas, ambulancia de urgencias para traslados.

### 9. TESTIMONIOS
Título: "Lo que dicen las familias"
3–5 cards placeholder (nombre + "mamá/papá de..." + texto). Sin testimonios reales todavía — usar placeholders realistas, no genéricos.

### 10. UBICACIÓN
Título: "Dónde estamos"
Dirección: `[CONFIRMAR — ver nota al inicio del documento]`
Mapa embebido (iframe genérico de Google Maps centrado en Núñez/Vicente López hasta tener la dirección exacta).
Texto reforzando cercanía: "a minutos de Belgrano, Núñez, Vicente López y Olivos."

### 11. INSCRIPCIÓN / CONTACTO
- Formulario corto: Nombre completo / Teléfono / Email / Edad del chico o chica / Turno de interés / Mensaje.
- CTA principal: WhatsApp directo (`[CONFIRMAR número]`) — es el canal real de conversión en este rubro, priorizarlo visualmente sobre el formulario.
- Requisitos de inscripción (texto breve, puede ir en acordeón o como lista corta): DNI, apto médico, seña del 30% al inscribirse (efectivo, débito o crédito). Si hay colegios/empresas con convenio, agregar esa lista (a confirmar con cliente si sigue vigente).

### 12. FOOTER
- Logo (versión para fondo claro — ver nota de identidad de marca).
- Datos de contacto, redes sociales (Instagram, Facebook).
- Copyright "© 2026 Sprint Colonia. Todos los derechos reservados."
- Aviso de que fotos y precios son ilustrativos en la demo.

### 13. BOTÓN WHATSAPP FLOTANTE
- Posición fija, esquina inferior derecha.
- Círculo verde WhatsApp (`#25D366`).
- Link: `https://wa.me/[CONFIRMAR]?text=Hola%2C%20quiero%20m%C3%A1s%20info%20sobre%20Sprint%20Colonia`
- Animación sutil tipo "pulse" cada pocos segundos.

## STACK Y REGLAS TÉCNICAS

- **Astro** (output estático/SSG). Scaffoldear el proyecto desde cero en esta misma carpeta con `npm create astro@latest`.
- Cero JS por defecto; hidratar solo lo necesario como islands (menú mobile, formulario, slider de testimonios si lo hay) — `client:visible` para lo que está debajo del fold.
- **Imágenes:** usar el componente `<Image />` de `astro:assets` para servir WebP/AVIF con `srcset` automático. La imagen del hero (LCP) con `loading="eager"` + `fetchpriority="high"`; el resto con `loading="lazy"`.
- **Video:** si es de fondo en el hero, corto (5–10s), comprimido, sin audio, `muted autoplay playsinline loop`, con `poster`. Si hay un video más largo del predio, usar un facade liviano (thumbnail + botón play) que recién carga el embed al hacer clic.
- **Fuentes:** Bebas Neue + Nunito/Inter vía Google Fonts, `font-display: swap`, preconnect.
- **CSS:** custom properties para toda la paleta de arriba, mobile-first, sin librerías de animación pesadas (resolver con `IntersectionObserver` + CSS, como ya se hizo en el sitio del gimnasio).
- **SEO:** meta title "Sprint Colonia | Colonia de Verano en Núñez, CABA", meta description ≤160 caracteres mencionando 42 años + seguridad + predio exclusivo, JSON-LD `LocalBusiness`/`SportsActivityLocation`, Open Graph completo (clave porque las familias comparten el link por WhatsApp), `sitemap.xml` y `robots.txt` (integraciones oficiales de Astro), alt text en todas las imágenes, un solo H1.
- **Accesibilidad:** aria-label en botones de íconos, contraste suficiente, HTML semántico (`<header>`, `<nav>`, `<section>`, `<footer>`).
- **Objetivo Lighthouse:** Performance 90+, Accessibility 90+, Best Practices 95+, SEO 100. Core Web Vitals: LCP < 2.5s, CLS < 0.1, INP < 200ms.

## SALIDA ESPERADA

Proyecto Astro completo y funcional en esta carpeta:
```
/
├── src/
│   ├── components/      — un componente por sección (Hero, Propuesta, Nosotros, etc.)
│   ├── layouts/          — Layout.astro con el <head> SEO
│   ├── pages/
│   │   └── index.astro   — ensambla todas las secciones
│   └── styles/           — variables CSS (paleta de arriba)
├── public/
│   ├── robots.txt
│   └── (favicon, og-image placeholder)
├── astro.config.mjs
├── package.json
└── README.md             — cómo correr el proyecto (npm install / npm run dev)
```
Tiene que levantar con `npm install && npm run dev` sin pasos manuales adicionales.

## IMPORTANTE

- No inventar la dirección, el teléfono público ni el nombre comercial final — dejarlos como placeholders visibles (`[CONFIRMAR]`) donde corresponda, y listarlos aparte en el README para que el desarrollador se los pida al cliente.
- Imágenes de stock (Unsplash/Pexels) de chicos al aire libre, pileta, verde — luz natural, diversidad, nunca posados ni corporativos — hasta tener fotos reales del predio.
- Precios de packs: "Consultar" o rango ilustrativo, no inventar cifras.
- El video es opcional para esta primera demo si no hay material propio — no bloquear el resto del sitio por eso, dejar el bloque listo para reemplazar el placeholder.
- Las animaciones tienen que ser sutiles, no distraer.
- La demo tiene que sentirse profesional, cálida y segura — no genérica ni "clipart infantil".

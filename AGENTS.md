## Proyecto

Sitio one-pager de Sprint Colonia (Astro 6, salida estática). Brief original en `PROMPT.md`; datos pendientes y decisiones en `README.md`.

- Datos del negocio (WhatsApp, dirección, dominio, redes, video): `src/config/site.ts`.
- Un componente por sección en `src/components/`; paleta y utilidades en `src/styles/global.css`.
- Mantener Astro en 6.x en esta máquina: Astro 7 trae un binario nativo (`satteri`) que Windows Smart App Control bloquea.

## Desarrollo

```
npm run dev      # http://localhost:4321
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Documentación

- https://docs.astro.build
- Imágenes: https://docs.astro.build/en/guides/images/
- Fonts API: https://docs.astro.build/en/guides/fonts/

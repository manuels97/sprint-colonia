// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // [CONFIRMAR] dominio definitivo (debe coincidir con SITE.url en src/config/site.ts y con public/robots.txt)
  site: 'https://sprintcolonia.com.ar',
  output: 'static',
  integrations: [sitemap()],
  build: {
    // One-pager: todo el CSS inline en el HTML → cero requests bloqueantes de render
    inlineStylesheets: 'always',
  },
  // Google Fonts descargadas en el build y servidas desde el mismo dominio
  // (sin conexiones a terceros, con preload y fallback ajustado para evitar CLS).
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Bebas Neue',
      cssVariable: '--font-bebas',
      weights: [400],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['Impact', 'Arial Narrow', 'sans-serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Nunito',
      cssVariable: '--font-nunito',
      weights: [400, 600, 700, 800],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],
});

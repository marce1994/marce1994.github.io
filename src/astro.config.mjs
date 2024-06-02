import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://marce1994.github.io',
  base: 'docs',
  integrations: [tailwind()]
});
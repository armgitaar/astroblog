// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
renderers: ['@astrojs/renderer-preact'],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
});

// @ts-check
//export default /** @type {import('astro').AstroUserConfig} */ ({
	// Enable the Preact renderer to support Preact JSX components.
	//renderers: ['@astrojs/renderer-preact'],
//});

import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import mdx from '@astrojs/mdx';

// Netlify adapter enables SSR/on-demand rendering if you ever need it.
// For a purely static site, Astro can still deploy fine to Netlify.
// Keeping the adapter here future-proofs the project.
export default defineConfig({
  output: 'static',
  adapter: netlify(),
  integrations: [mdx()],
});

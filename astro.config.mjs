import { defineConfig } from 'astro/config'

// Project site on GitHub Pages: https://adhil72.github.io/gitvault-website/
// Remove `base` when a custom domain is attached.
export default defineConfig({
  site: 'https://adhil72.github.io',
  base: '/gitvault-website',
  trailingSlash: 'always',
})

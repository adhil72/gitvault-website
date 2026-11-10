# Gitvault website

Marketing site and docs for [Gitvault](https://github.com/adhil72/gitvault). Static Astro site deployed to GitHub Pages.

```bash
pnpm install
pnpm dev       # http://localhost:4321/gitvault-website/
pnpm build     # static output in dist/
pnpm check     # type check
```

## Configuration

- `src/config.ts` holds repository, release and contact links. Release downloads and the app updater need the release assets to live in a **public** repository.
- Contact form: set the repository variable `PUBLIC_CONTACT_ENDPOINT` to a form service URL that accepts a JSON POST. Without it the form opens a prefilled GitHub issue (never for the Security topic, which goes to the private advisory form).
- Custom domain: remove `base` in `astro.config.mjs` and update `site`.

Design source: the "Website" page of the Gitvault Figma file.

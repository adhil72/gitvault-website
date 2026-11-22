# GitVault Website

Marketing site and docs for [GitVault](https://github.com/adhil72/gitvault) (v2 — pure Rust CLI powered by `git` and `gh`). Static Astro site deployed to GitHub Pages.

```bash
pnpm install
pnpm dev       # http://localhost:4321/gitvault-website/
pnpm build     # static output in dist/
pnpm check     # type check
```

## Configuration

- `src/config.ts` holds repository, release, install script, and contact links.
- Contact form: set the repository variable `PUBLIC_CONTACT_ENDPOINT` to a form service URL that accepts a multipart form POST. Without it the form opens a prefilled GitHub issue (never for the Security topic, which goes to the private advisory form).
- Custom domain: remove `base` in `astro.config.mjs` and update `site`.

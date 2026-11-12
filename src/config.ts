// Single place for links that change between environments.
export const site = {
  name: 'GitVault',
  // The desktop app's latest release (see CHANGELOG.md in the source repository).
  version: '0.6.1',
  repoUrl: 'https://github.com/adhil72/gitvault',
  // Releases are published in this public repo; the names below never change between versions.
  releasesUrl: 'https://github.com/adhil72/gitvault-website/releases/latest/download',
  releasesPage: 'https://github.com/adhil72/gitvault-website/releases',
  npmUrl: 'https://www.npmjs.com/package/@adhil28/gitvault',
  issuesUrl: 'https://github.com/adhil72/gitvault/issues/new',
  discussionsUrl: 'https://github.com/adhil72/gitvault/discussions',
  securityUrl: 'https://github.com/adhil72/gitvault/security/advisories/new',
  // Dropgram form endpoint for the contact form. PUBLIC_CONTACT_ENDPOINT overrides it; set it to an empty value to fall back to a prefilled GitHub issue.
  contactEndpoint: (import.meta.env.PUBLIC_CONTACT_ENDPOINT as string | undefined) ?? 'https://dropgram.anokhagecw.workers.dev/f/fk_q4otLd4xQV9ajJoqcBCaGw',
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
export const href = (path: string) => `${base}${path}`

export const nav = [
  { label: 'Docs', path: '/docs/' },
  { label: 'Security', path: '/security/' },
  { label: 'Changelog', path: '/changelog/' },
  { label: 'Contact', path: '/contact/' },
]

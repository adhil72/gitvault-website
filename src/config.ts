// Single place for links that change between environments.
export const site = {
  name: 'Gitvault',
  version: '0.1.3',
  repoUrl: 'https://github.com/adhil72/gitvault',
  // Releases are published in this public repo; the names below never change between versions.
  releasesUrl: 'https://github.com/adhil72/gitvault-website/releases/latest/download',
  issuesUrl: 'https://github.com/adhil72/gitvault/issues/new',
  discussionsUrl: 'https://github.com/adhil72/gitvault/discussions',
  securityUrl: 'https://github.com/adhil72/gitvault/security/advisories/new',
  // Optional form endpoint (e.g. a form service). Without it the contact form opens a prefilled GitHub issue.
  contactEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT as string | undefined,
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
export const href = (path: string) => `${base}${path}`

export const nav = [
  { label: 'How it works', path: '/#autoload' },
  { label: 'Docs', path: '/docs/' },
  { label: 'Security', path: '/security/' },
  { label: 'Changelog', path: '/changelog/' },
  { label: 'Contact', path: '/contact/' },
]

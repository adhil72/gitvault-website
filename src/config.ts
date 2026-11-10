// Single place for links that change between environments.
export const site = {
  name: 'Gitvault',
  version: '0.1.0',
  repoUrl: 'https://github.com/adhil72/gitvault',
  issuesUrl: 'https://github.com/adhil72/gitvault/issues/new',
  discussionsUrl: 'https://github.com/adhil72/gitvault/discussions',
  securityUrl: 'https://github.com/adhil72/gitvault/security/advisories/new',
  // Optional form endpoint (e.g. a form service). Without it the contact form opens a prefilled GitHub issue.
  contactEndpoint: import.meta.env.PUBLIC_CONTACT_ENDPOINT as string | undefined,
}

const base = import.meta.env.BASE_URL.replace(/\/$/, '')
export const href = (path: string) => `${base}${path}`

export const nav = [
  { label: 'Features', path: '/#features' },
  { label: 'Docs', path: '/docs/' },
  { label: 'Security', path: '/security/' },
  { label: 'Changelog', path: '/changelog/' },
  { label: 'Contact', path: '/contact/' },
]

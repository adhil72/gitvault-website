import { existsSync, readFileSync } from 'node:fs'

import { href, site } from './config'

interface Manifest {
  version: string
  files: { name: string; sha256: string }[]
}

// release.json is written by the gitvault release workflow into public/releases/.
const manifestPath = new URL('../public/releases/release.json', import.meta.url)
const manifest: Manifest | null = existsSync(manifestPath)
  ? (JSON.parse(readFileSync(manifestPath, 'utf8')) as Manifest)
  : null

export const releaseVersion = manifest?.version ?? site.version

/** Link to the latest installer ending in `suffix`, or undefined before the first release. */
export function downloadUrl(suffix: string): string | undefined {
  const file = manifest?.files.find((f) => f.name.endsWith(suffix))
  return file ? href(`/releases/${file.name}`) : undefined
}

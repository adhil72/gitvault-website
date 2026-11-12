// Mirrors CHANGELOG.md in the source repository, newest first, written for users.
export type Release = { version: string; date: string; title: string; groups: [string, string[]][] }

export const releases: Release[] = [
  { version: '1.0.0', date: '2026-11-12', title: 'GitVault 1.0', groups: [
    ['Changed', ['First stable release: GitVault is now 1.0.0', 'The sign-in screen shows the installed app version instead of a fixed number']],
  ] },
  { version: '0.6.1', date: '2026-11-12', title: 'Install and update with apt', groups: [
    ['Added', ['Ubuntu and Debian users can install and update GitVault with apt, from a GPG-signed repository published with every release', 'A security policy explains how to report a vulnerability privately']],
  ] },
  { version: '0.6.0', date: '2026-11-12', title: 'Vite plugin', groups: [
    ['Added', ['@adhil28/gitvault/vite loads a GitVault environment before Vite reads its env, so Vite projects need no .env file. Only VITE_ variables reach browser code']],
  ] },
  { version: '0.5.0', date: '2026-11-12', title: 'The CLI comes with the desktop app', groups: [
    ['Added', ['The Windows and Ubuntu installers include the gitvault command and put it on PATH', 'A Connect button with copyable steps to load a vault into a Node.js app', 'Switching vault or GitHub account asks for confirmation first']],
  ] },
  { version: '0.4.1', date: '2026-11-12', title: 'Node library polish', groups: [
    ['Changed', ['The Node library ships a license, type definitions for @adhil28/gitvault/config and a homepage link', 'Its tests run against the real CLI on every pull request']],
  ] },
  { version: '0.4.0', date: '2026-11-11', title: 'Collaborators', groups: [
    ['Added', ['Invite GitHub users to a vault repository, read-only or able to change secrets, then list or remove them. In the app under Settings, and as gitvault collaborator']],
  ] },
  { version: '0.3.0', date: '2026-11-11', title: 'A visual refresh', groups: [
    ['Added', ['A collapsible sidebar (Ctrl or Cmd + B) that folds down to an icon rail', 'Settings grouped into labelled sections, with icons on each tab', 'Gentle motion that switches off when your system asks for reduced motion']],
    ['Changed', ['Whole vault cards are clickable', 'A redesigned unlock dialog and a calmer sidebar', 'A darker, more consistent dark theme']],
    ['Security', ['Vault and secret ids are validated when read from disk, so a crafted repository cannot point file paths outside the vault']],
  ] },
  { version: '0.2.2', date: '2026-11-11', title: 'Updates for Linux', groups: [
    ['Fixed', ['Ubuntu installs now get update notices, like Windows']],
  ] },
  { version: '0.2.1', date: '2026-11-11', title: 'Pick the account for a new vault', groups: [
    ['Added', ['Choose which GitHub CLI account owns a vault when you create it']],
    ['Changed', ['A new vault opens as soon as setup finishes']],
  ] },
  { version: '0.2.0', date: '2026-11-11', title: 'Vaults open locked', groups: [
    ['Added', ['The app opens on your list of vaults, without decrypting anything', 'Switch GitHub CLI accounts from the account menu', 'The master password is asked for only when an action needs it']],
  ] },
  { version: '0.1.3', date: '2026-11-11', title: 'Release build fix', groups: [
    ['Fixed', ['The Node library builds again under pnpm 12']],
  ] },
  { version: '0.1.2', date: '2026-11-11', title: 'A TypeScript library', groups: [
    ['Changed', ['The Node.js library is written in TypeScript, ships types, and supports import and require']],
  ] },
  { version: '0.1.1', date: '2026-11-10', title: 'Updates and checksums', groups: [
    ['Added', ['The Windows app checks for signed updates and installs them from Settings', 'Every release ships SHA256SUMS next to the installers']],
  ] },
  { version: '0.1.0', date: '2026-11-10', title: 'First public release', groups: [
    ['Vaults and secrets', ['Encrypted vaults stored in a private GitHub repository', 'Secrets with environments, tags, favorites and expiry reminders', 'Argon2id, AES-256-GCM and a one-time recovery key']],
    ['History and sync', ['Every change is a git commit, with history and restore for any secret', 'Side-by-side conflict resolution when two devices edit the same secret', 'An audit log of reveals and changes']],
    ['Desktop and CLI', ['Desktop app for Windows and Ubuntu, with a password, passphrase and PIN generator', 'The gitvault CLI runs commands with secrets injected, imports and exports .env files, and never prints values', 'An MCP server so AI tools can use secrets without seeing them']],
  ] },
]

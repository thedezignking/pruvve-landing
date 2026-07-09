# Changelog

All notable changes to the Pruvve project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- _Nothing yet — track upcoming work here before release._

---

## [0.1.0] — 2026-07-09

### Added

**Project scaffold**

- Next.js 15 App Router with TypeScript and Turbopack dev server
- Tailwind CSS v4 with shadcn/ui-compatible design tokens in `styles/globals.css`
- Framer Motion via `lib/motion.ts` re-exports
- shadcn/ui configuration (`components.json`) with Button, Card, and Input primitives
- Lucide React as the icon library

**Folder structure**

- `app/` — root layout and empty landing page shell
- `components/ui/` — shadcn primitives
- `components/layout/` — Container, Header, Footer
- `components/sections/` — Section base wrapper
- `hooks/` — `useMediaQuery`, `useBreakpoint`, `useIsMobile`, `useMounted`
- `lib/` — `utils`, `constants`, `breakpoints`, `motion`
- `public/images/`, `public/icons/`, `public/fonts/` — asset directories

**Documentation**

- `README.md` — project overview and setup
- `CLAUDE.md` — AI assistant instructions
- `docs/implementation.md` — workflow, standards, definition of done
- `docs/design-system.md` — design token placeholders
- `docs/project-rules.md` — development rules
- `docs/checklist.md` — production launch checklist
- `docs/architecture.md` — system architecture and rendering model
- `docs/components.md` — component catalog
- `docs/changelog.md` — this file

---

## Version History

| Version | Date | Summary |
|---------|------|---------|
| 0.1.0 | 2026-07-09 | Initial project scaffold |

---

## How to Update

When making notable changes:

1. Add entries under `[Unreleased]` during development
2. Move entries to a new version section on release
3. Use categories: `Added`, `Changed`, `Deprecated`, `Removed`, `Fixed`, `Security`
4. Link to relevant PRs or issues when applicable

**Example:**

```markdown
## [Unreleased]

### Added
- Hero section with scroll-triggered animation ([#12](https://github.com/.../pull/12))

### Fixed
- Mobile nav focus trap on open ([#15](https://github.com/.../pull/15))
```

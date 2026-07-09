# Changelog

All notable changes to the Pruvve project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

- Features and trust section (`components/sections/features-trust-section.tsx`) implemented from the Figma: trust row with "Loved & trusted by 150,000 shoppers" heading, 3 store rating badges (Google Play, App Store, Trustpilot) with star ratings and dividers; features content with section heading and 4 feature cards in a 2×2 grid (576×511 cards with exported Figma images cropped to the visual area, real HTML text below); responsive single-column mobile, 2-column grid at md+
- Hero section (`components/sections/hero-section.tsx`) implemented from the Figma Hero frame: gradient card, nav, display headline with brand accent, CTA, phone mockup with floating category/product cards; exact desktop geometry with mobile-first responsive behavior
- Figma nav implemented in `components/layout/header.tsx` (logo, anchor links, Download App pill); links collapse below `md`
- Button `xl` and `2xl` pill sizes (CVA variants) matching the Figma nav and hero CTA buttons
- `navLinks` constant in `lib/constants.ts`; hero image assets exported from Figma into `public/images/pruvve-images/hero/`
- Mobile hamburger menu (`components/layout/mobile-nav.tsx`, client island) with accessible toggle, Escape-to-close, and in-menu Download App button

### Changed

- Synced design update from Figma: feature-card headings moved from 28/20 to Medium 24/32 — added `Web/Card Title` text style in Figma (applied to all 4 cards, bodies bound to `Web/Body`) and `text-card-title` token in `globals.css`
- Nav top padding updated to 12px (Figma change); nav→headline gap adjusted to 140px at desktop to keep the headline at y=208

### Fixed

- Nav no longer overflows the hero card on tablet (was causing a horizontal scrollbar): logo, links, and buttons scale down below `lg` and return to exact Figma sizes at `lg`
- Nav → headline spacing now steps 64/80/120px (mobile/tablet/desktop) instead of a cramped 40px below desktop
- Hamburger upgraded to a standard firm control: 44px touch target, 24px icon, 2.25 stroke
- Header logo now uses the brand wordmark asset (`pruvve-logo.png`) at 20px/24px heights instead of rendered text
- Hero card now fills the viewport width on large screens instead of capping at 1436px
- Cropped the baked gradient background out of `card-product.png`; corners and shadow now come from CSS tokens so the card sits cleanly over the phone
- Ported the Figma design tokens into `styles/globals.css` — brand + neutral primitives, semantic text/background/stroke/status tokens, a `Web/*` type scale (`text-display`…`text-label`), named spacing/radius scales, and elevation shadows — with shadcn semantic tokens re-pointed to Pruvve values
- Populated `docs/design-system.md` with real values (colors, typography, spacing, radius, shadows, component specs) replacing the placeholder tables
- Skip-to-content link in the root layout, targeting `#main-content` for keyboard and screen-reader users
- Global `prefers-reduced-motion` fallback in `styles/globals.css` that disables smooth scrolling and neutralizes CSS animations/transitions
- `engines.node >= 20` in `package.json` to match the Node version documented in the README

### Changed

- Normalized all `public/images/pruvve-images/` asset and folder names to kebab-case (removed spaces and uppercase) so paths are safe on case-sensitive deploy targets

### Removed

- `jsconfig.json` — redundant with `tsconfig.json` in a TypeScript project and a source of tooling ambiguity

### Fixed

- Map Geist Mono to `--font-mono` instead of `--font-display`, so headings no longer render in a monospace face; `--font-display` falls back to the sans stack until a display font is set from Figma
- `Section` now composes `<Container>` instead of duplicating its max-width and padding classes, giving a single source of truth for container geometry
- Remove stray `pruvve/` entry from `.gitignore` that could silently ignore a folder of that name

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

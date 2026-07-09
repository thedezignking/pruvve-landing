# Pruvve — Architecture

This document describes the system architecture, rendering model, and key design decisions for the Pruvve landing page.

For workflow and coding standards, see [implementation.md](./implementation.md).  
For component APIs, see [components.md](./components.md).

---

## Overview

Pruvve is a static-first marketing site built on Next.js 15 App Router. There is no backend, database, or authenticated user state. The architecture optimizes for:

- Fast initial load (Server Components, static generation)
- Pixel-perfect UI from Figma
- Accessible, responsive layouts
- Maintainable component composition

```
┌─────────────────────────────────────────────────────────┐
│                      Browser                            │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Hydrated client islands (motion, media queries)  │  │
│  └───────────────────────────────────────────────────┘  │
│  ┌───────────────────────────────────────────────────┐  │
│  │  Static HTML + CSS (Server Components)            │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
                          ▲
                          │ CDN (Vercel)
                          │
┌─────────────────────────────────────────────────────────┐
│                   Next.js 15 App Router                 │
│  app/layout.tsx  →  app/page.tsx  →  sections/*       │
└─────────────────────────────────────────────────────────┘
```

---

## Rendering Strategy

### Server Components (default)

All components are Server Components unless they require:

- React hooks (`useState`, `useEffect`, etc.)
- Browser APIs (`window`, `matchMedia`)
- Framer Motion animations
- Event handlers that mutate client state

**Server-rendered by default:**

- `app/layout.tsx` — fonts, metadata, global shell
- `app/page.tsx` — page composition
- `components/layout/*` — Header, Footer, Container
- `components/sections/*` — unless they contain motion/interactivity

### Client Components (`"use client"`)

Use sparingly. Mark only the smallest subtree that needs client behavior.

**Currently client-side:**

- `hooks/use-media-query.ts`
- `hooks/use-mounted.ts`

**Pattern:** Extract a client sub-component inside a section rather than making the entire section client-side.

```tsx
// components/sections/hero.tsx (Server Component)
import { HeroContent } from "./hero-content";

export function HeroSection() {
  return (
    <section id="hero">
      <HeroContent /> {/* "use client" — motion only */}
    </section>
  );
}
```

### Static Generation

The landing page is statically generated at build time (`○ Static` in `next build` output). No dynamic routes or server-side data fetching at request time unless added later.

---

## Layer Architecture

```
┌──────────────────────────────────────────────┐
│  app/              Routing & metadata        │
├──────────────────────────────────────────────┤
│  components/sections/   Page blocks          │
├──────────────────────────────────────────────┤
│  components/layout/     Site shells          │
├──────────────────────────────────────────────┤
│  components/ui/         Design system primitives │
├──────────────────────────────────────────────┤
│  lib/ + hooks/          Utilities & client logic │
├──────────────────────────────────────────────┤
│  styles/            Global tokens & base CSS │
└──────────────────────────────────────────────┘
```

### Dependency Rules

| Layer | Can import from | Cannot import from |
|-------|-----------------|-------------------|
| `app/` | sections, layout, lib | — |
| `sections/` | layout, ui, lib, hooks | app |
| `layout/` | ui, lib | sections |
| `ui/` | lib | layout, sections |
| `lib/` | — (pure utilities) | components |
| `hooks/` | lib | sections, layout |

**Rule:** Lower layers never import from higher layers. `ui/` must not know about `sections/`.

---

## Styling Architecture

### Tailwind CSS v4

- Configured via `@import "tailwindcss"` in `styles/globals.css`
- Design tokens defined as CSS custom properties in `:root`
- Tailwind theme extended via `@theme inline` block
- shadcn/ui semantic tokens (`--primary`, `--background`, etc.) map to Tailwind utilities

### Token Flow

```
Figma → docs/design-system.md → styles/globals.css → Tailwind utilities → components
```

Never bypass this chain with hardcoded values in components.

### Class Merging

All conditional classes use `cn()` from `@/lib/utils`:

```tsx
import { cn } from "@/lib/utils";

<div className={cn("base-classes", isActive && "active-classes", className)} />
```

---

## Animation Architecture

Framer Motion is the animation layer. All imports go through `@/lib/motion` — not directly from `framer-motion`.

### Principles

1. **Respect `prefers-reduced-motion`** — gate with `useReducedMotion()`
2. **CSS first** — hover/focus transitions via Tailwind
3. **Motion for orchestration** — scroll reveals, stagger, layout shifts
4. **Transform + opacity only** — avoid layout-triggering properties

### Recommended Pattern

```tsx
"use client";

import { motion, useReducedMotion } from "@/lib/motion";

export function AnimatedBlock() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? false : { opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    />
  );
}
```

Shared variants live in `lib/motion.ts` as they are defined.

---

## Data & State

### Current State

There is no global state manager. The landing page is stateless aside from:

- Client UI state (mobile nav open/closed, form inputs)
- Media query hooks for responsive behavior

### Site Configuration

Static config lives in `lib/constants.ts`:

```ts
export const siteConfig = {
  name: "Pruvve",
  description: "...",
  url: "https://pruvve.com",
  links: { ... },
};
```

Navigation links, social URLs, and copy constants belong here — not inline in components.

### Future Considerations

If the project grows to include:

| Need | Recommended approach |
|------|---------------------|
| Contact form | Server Action or API route |
| CMS content | Contentlayer, Sanity, or MDX |
| Analytics | `next/script` with deferred loading |
| A/B testing | Vercel Flags or similar |

Document any additions in this file and [changelog.md](./changelog.md).

---

## Asset Architecture

### Images

- Stored in `public/images/`
- Rendered via `next/image` with explicit `width`, `height`, and `sizes`
- Formats: AVIF and WebP (configured in `next.config.ts`)

### Icons

- UI icons: Lucide React (tree-shaken named imports)
- Brand/static icons: `public/icons/` as SVG

### Fonts

- Loaded via `next/font/google` in `app/layout.tsx`
- CSS variables: `--font-sans`, `--font-display`
- Self-hosted fonts go in `public/fonts/` if required

---

## SEO & Metadata

Metadata is declared in `app/layout.tsx` using the Next.js Metadata API:

- Title template: `%s | Pruvve`
- Open Graph defaults
- `metadataBase` for absolute URL resolution
- Viewport and theme-color configuration

Page-specific metadata can override via exports in individual route files.

---

## Performance Budget

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| First Load JS (landing) | < 150 kB |
| LCP | < 2.5s |
| CLS | < 0.1 |

### Strategies

- Server Components minimize client JS
- Code-split client islands within sections
- Lazy-load below-the-fold images
- Preload hero assets
- No third-party scripts unless deferred

---

## Accessibility Architecture

Accessibility is structural, not additive:

- Semantic HTML landmarks (`<header>`, `<main>`, `<footer>`, `<nav>`, `<section>`)
- Single `<h1>` per page with logical heading hierarchy
- Focus management via native tab order and visible `:focus-visible`
- Motion gated by `prefers-reduced-motion`
- Color contrast enforced via design tokens

See [checklist.md](./checklist.md) for the full audit list.

---

## Deployment Architecture

**Recommended:** Vercel

```
Git push → Vercel build (next build) → Static assets to CDN → Edge delivery
```

Environment variables (if added later) are configured in the hosting platform — never committed to the repository.

---

## File Naming & Colocation

| Type | Location | Naming |
|------|----------|--------|
| Page route | `app/` | `page.tsx`, `layout.tsx` |
| Section | `components/sections/` | `hero-section.tsx` |
| Section sub-components | Same folder or colocated | `hero-content.tsx` |
| Layout | `components/layout/` | `header.tsx` |
| UI primitive | `components/ui/` | `button.tsx` (shadcn convention) |
| Hook | `hooks/` | `use-media-query.ts` |
| Utility | `lib/` | `utils.ts`, `constants.ts` |

---

## Related Documents

| Document | Focus |
|----------|-------|
| [implementation.md](./implementation.md) | Workflow, standards, DoD |
| [components.md](./components.md) | Component catalog and APIs |
| [design-system.md](./design-system.md) | Visual tokens |
| [project-rules.md](./project-rules.md) | Development rules |
| [checklist.md](./checklist.md) | Launch checklist |
| [changelog.md](./changelog.md) | Version history |

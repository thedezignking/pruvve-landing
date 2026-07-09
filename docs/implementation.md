# Pruvve — Implementation Guide

## Project Overview

Pruvve is a production-ready marketing landing page built for pixel-perfect implementation from Figma designs. The project prioritizes accessibility, performance, and maintainable architecture over quick hacks.

This document defines how the project is structured, how we work, and what "done" means for every deliverable.

---

## Goals

- **Pixel-perfect fidelity** — Match Figma designs at every breakpoint
- **Production-ready architecture** — Scalable folder structure, typed APIs, reusable primitives
- **Clean, scalable code** — Small files, clear naming, composition over duplication
- **Mobile-first responsive design** — Design and build from smallest viewport up
- **Accessibility-first** — WCAG 2.2 AA as the baseline
- **High Lighthouse scores** — Performance, Accessibility, Best Practices, SEO ≥ 90

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion |
| UI Primitives | shadcn/ui (Radix + CVA) |
| Icons | Lucide React |
| Fonts | next/font (Google Fonts or self-hosted) |
| Deployment | Vercel (recommended) |

---

## Folder Structure

```
pruvve/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Landing page entry
│   └── favicon.ico
├── components/
│   ├── ui/                 # shadcn/ui primitives
│   ├── layout/             # Header, Footer, Container
│   └── sections/           # Hero, Features, CTA, etc.
├── hooks/                  # useMediaQuery, useMounted, etc.
├── lib/
│   ├── utils.ts            # cn() and shared helpers
│   ├── constants.ts        # Site config, nav links
│   ├── breakpoints.ts      # Responsive breakpoint tokens
│   └── motion.ts           # Framer Motion re-exports & variants
├── styles/
│   └── globals.css         # Tailwind imports, CSS variables, base styles
├── public/
│   ├── images/
│   ├── icons/
│   └── fonts/
└── docs/                   # Project documentation
```

### Folder Responsibilities

| Folder | Purpose |
|--------|---------|
| `app/` | Routing, layouts, page-level metadata only — no business UI |
| `components/ui/` | Generic, reusable UI primitives from shadcn/ui |
| `components/layout/` | Site-wide layout shells (header, footer, container) |
| `components/sections/` | Composed landing page sections — one file per Figma frame |
| `lib/` | Pure utilities with no React dependencies (except motion re-exports) |
| `hooks/` | Client-side React hooks |
| `styles/` | Global CSS, design tokens, Tailwind theme extensions |

---

## Development Workflow

1. **Review Figma** — Confirm breakpoints, spacing, typography, and interaction states
2. **Update design tokens** — Add values to `docs/design-system.md` and `styles/globals.css`
3. **Build primitives** — Extend or add shadcn/ui components if needed
4. **Compose sections** — Build one section at a time in `components/sections/`
5. **Assemble page** — Import sections into `app/page.tsx`
6. **Test responsively** — Mobile → tablet → desktop
7. **Run checklist** — See `docs/checklist.md` before marking complete

### Local Commands

```bash
npm run dev        # Start dev server (Turbopack)
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript strict check
```

---

## Coding Standards

### TypeScript

- Enable strict mode — no `any` unless documented with a comment
- Prefer `interface` for component props, `type` for unions and utilities
- Export prop types when components are reused across sections

### React & Next.js

- Default to **Server Components** — add `"use client"` only when needed (hooks, motion, interactivity)
- Keep `app/page.tsx` thin — compose from section components
- Use `next/image` for all raster images; `next/font` for typography
- Colocate section-specific sub-components inside the section file or a sibling folder

### Styling

- Use Tailwind utility classes — avoid inline styles
- Use `cn()` from `@/lib/utils` for conditional class merging
- Reference design tokens via CSS variables — never hardcode hex values in components
- Follow mobile-first: base styles for mobile, `md:` / `lg:` for larger viewports

### Imports

- Use `@/` path alias for all internal imports
- Order: React/Next → third-party → `@/` internal → relative → types

---

## Component Architecture

### Layer Model

```
Page (app/page.tsx)
  └── Section (components/sections/hero.tsx)
        └── Layout (components/layout/container.tsx)
              └── UI Primitives (components/ui/button.tsx)
```

### Section Component Template

Each landing section should:

- Accept an optional `className` prop
- Use semantic HTML (`<section>`, `<h2>`, `<article>`, etc.)
- Include an `id` for anchor navigation
- Wrap content in `<Container>` or `<Section>`
- Keep animation logic in client sub-components when needed

### shadcn/ui

- Add components via CLI: `npx shadcn@latest add [name]`
- Customize variants in the component file — do not fork unnecessarily
- Extend with CVA variants rather than creating duplicate components

---

## Responsive Breakpoints

| Token | Min Width | Target Devices |
|-------|-----------|----------------|
| `sm` | 640px | Large phones, landscape |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

Breakpoints are defined in `lib/breakpoints.ts` and match Tailwind defaults.

**Rule:** Always implement mobile layout first, then enhance with `sm:`, `md:`, `lg:` modifiers.

---

## Accessibility Requirements

- **WCAG 2.2 Level AA** minimum
- Semantic HTML — correct heading hierarchy (one `<h1>` per page)
- All interactive elements keyboard-accessible with visible `:focus-visible` states
- Images require meaningful `alt` text; decorative images use `alt=""`
- Color contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text
- Respect `prefers-reduced-motion` — disable or simplify animations
- ARIA labels only when native semantics are insufficient
- Skip link to `#main-content` on the landing page
- Form inputs must have associated `<label>` elements

---

## Animation Guidelines

- Import motion utilities from `@/lib/motion`
- Use `useReducedMotion()` to gate animations for accessibility
- Prefer CSS transitions for simple hover/focus states
- Use Framer Motion for scroll reveals, staggered entrances, and layout animations
- Keep durations between **200ms–600ms**; use `ease-out` for entrances
- Avoid animating `width`, `height`, or `top`/`left` — use `transform` and `opacity`
- Define reusable variants in section files or `lib/motion.ts`

---

## Performance Requirements

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| LCP | < 2.5s |
| CLS | < 0.1 |
| INP | < 200ms |
| Total JS (initial) | Minimize — code-split sections where possible |

### Practices

- Server Components by default
- `next/image` with explicit `width`/`height` and appropriate `sizes`
- Lazy-load below-the-fold images and heavy client components
- Self-host fonts via `next/font`
- No unused dependencies
- Preload hero assets

---

## Naming Conventions

| Entity | Convention | Example |
|--------|------------|---------|
| Components | PascalCase | `HeroSection`, `FeatureCard` |
| Files (components) | kebab-case | `hero-section.tsx` |
| Hooks | camelCase with `use` prefix | `useMediaQuery` |
| Utilities | camelCase | `cn`, `formatDate` |
| Constants | camelCase or SCREAMING_SNAKE | `siteConfig`, `API_URL` |
| CSS variables | kebab-case | `--color-primary` |
| Section IDs | kebab-case | `id="hero"`, `id="features"` |

---

## Git Workflow

### Branch Naming

```
feature/hero-section
fix/mobile-nav-overflow
chore/update-dependencies
```

### Commit Messages

Use conventional commits:

```
feat: add hero section with scroll animation
fix: correct heading hierarchy in features section
chore: add shadcn card component
docs: update design system colors from Figma
```

### Pull Request Checklist

- [ ] Builds without errors (`npm run build`)
- [ ] Passes lint and typecheck
- [ ] Responsive at all breakpoints
- [ ] Accessibility spot-check completed
- [ ] No hardcoded design values

---

## Definition of Done

A section or feature is **done** when:

1. Matches Figma design at `sm`, `md`, `lg`, and `xl` breakpoints
2. Passes `npm run build`, `npm run lint`, and `npm run typecheck`
3. Keyboard navigable with visible focus states
4. Respects `prefers-reduced-motion`
5. Uses design tokens — no magic numbers or hardcoded colors
6. Images optimized with `next/image`
7. No console errors or warnings in development
8. Reviewed against `docs/checklist.md` items relevant to the change
9. Code is reviewed and merged to the main branch

---

## Next Steps

1. Populate `docs/design-system.md` with Figma tokens
2. Build landing page sections one at a time
3. Run full production checklist before launch

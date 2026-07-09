# [CLAUDE.md](http://CLAUDE.md)

Instructions for AI assistants working on the **Pruvve** landing page project.

## Project Summary

Pruvve is a production-ready marketing landing page. The goal is pixel-perfect implementation from Figma with high Lighthouse scores, WCAG 2.2 AA accessibility, and mobile-first responsive design.

**Do not build features unless explicitly requested.** This is a scaffolded project — follow the user's instructions for each task.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript (strict)
- Tailwind CSS v4
- Framer Motion
- shadcn/ui
- Lucide React

## Commands

```bash
npm run dev        # Dev server (Turbopack) — http://localhost:3000
npm run build      # Production build
npm run lint       # ESLint
npm run typecheck  # TypeScript check
```

Add shadcn components:

```bash
npx shadcn@latest add [component-name]
```



## Folder Structure

```
app/                    # Routes, layouts, metadata — keep thin
components/
  ui/                   # shadcn/ui primitives (Button, Card, Input, …)
  layout/               # Header, Footer, Container
  sections/             # Landing page sections (Hero, Features, CTA, …)
hooks/                  # Client hooks (useMediaQuery, useMounted)
lib/                    # utils, constants, breakpoints, motion
styles/globals.css      # Tailwind + CSS design tokens
public/images|icons|fonts/
docs/                   # Project documentation
```



## Architecture

Compose pages top-down:

```
app/page.tsx → components/sections/* → components/layout/* → components/ui/*
```

- **Server Components by default** — add `"use client"` only for hooks, motion, or interactivity
- **One section component per Figma frame** in `components/sections/`
- **Import motion from** `@/lib/motion`, not directly from `framer-motion`
- **Use** `cn()` **from** `@/lib/utils` for conditional classes
- **Use** `@/` **path alias** for all internal imports



## Non-Negotiable Rules

Read `docs/project-rules.md` for full details. Key points:

1. **Never hardcode repeated values** — use design tokens from `styles/globals.css`
2. **Build reusable components** — extract before duplicating JSX
3. **Prefer composition over duplication** — CVA variants, not clone components
4. **Semantic HTML** — correct elements, one `<h1>`, no skipped heading levels
5. **Accessibility first** — keyboard nav, focus states, alt text, `prefers-reduced-motion`
6. **Mobile-first** — base styles for mobile, enhance with `sm:` / `md:` / `lg:`
7. **Consistent spacing** — Tailwind scale, no magic numbers
8. **Clean naming** — kebab-case files, PascalCase components, `use` prefix for hooks
9. **Keep files small** — target ≤ 200 lines; split if larger
10. Match figma exactly



## Design Tokens

Figma values go in `docs/design-system.md` and are mapped to CSS variables in `styles/globals.css`. Do not hardcode colors, spacing, or typography in components until tokens are populated.

## Responsive Breakpoints


| Token | Min Width |
| ----- | --------- |
| `sm`  | 640px     |
| `md`  | 768px     |
| `lg`  | 1024px    |
| `xl`  | 1280px    |
| `2xl` | 1536px    |


Defined in `lib/breakpoints.ts`.

## Animation

- Gate animations with `useReducedMotion()` from `@/lib/motion`
- Prefer CSS for simple hover/focus; Framer Motion for scroll reveals and stagger
- Animate `transform` and `opacity` only — not width/height/top/left
- Durations: 200ms–600ms



## Definition of Done

A task is complete when:

1. Matches Figma at all breakpoints
2. `npm run build`, `npm run lint`, and `npm run typecheck` pass
3. Keyboard accessible with visible focus states
4. Respects `prefers-reduced-motion`
5. Uses design tokens — no hardcoded values
6. Images use `next/image` with proper `sizes`
7. Relevant items from `docs/checklist.md` are satisfied



## Documentation Reference


| File                     | Purpose                                       |
| ------------------------ | --------------------------------------------- |
| `docs/implementation.md` | Architecture, workflow, coding standards, DoD |
| `docs/architecture.md`   | System design, rendering strategy, layer rules  |
| `docs/components.md`     | Component catalog and APIs                    |
| `docs/design-system.md`  | Colors, typography, spacing, component specs  |
| `docs/project-rules.md`  | Development rules                             |
| `docs/checklist.md`      | Production launch checklist                   |
| `docs/changelog.md`      | Version history                               |




## Git

- Do not commit unless the user explicitly asks
- Use conventional commits: `feat:`, `fix:`, `chore:`, `docs:`
- Branch naming: `feature/hero-section`, `fix/mobile-nav`



## Before Writing Code

1. Read the relevant section of `docs/implementation.md`
2. Check `docs/design-system.md` for available tokens
3. Follow `docs/project-rules.md`
4. Match existing patterns in neighboring files
5. Keep changes scoped to what was requested


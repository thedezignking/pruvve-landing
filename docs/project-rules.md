# Pruvve — Project Rules

These rules are non-negotiable for all contributors and AI-assisted development sessions. They exist to keep the codebase consistent, accessible, and maintainable as the landing page grows.

---

## 1. Never Hardcode Repeated Values

- Colors, spacing, font sizes, shadows, and radii must come from design tokens
- Define tokens in `styles/globals.css` and document them in `docs/design-system.md`
- If a value appears more than once, extract it to a token or constant
- Magic numbers (e.g., `margin-top: 37px`) are not allowed without justification in a comment

**Bad:** `className="text-[#1a1a2e] mt-[37px]"`  
**Good:** `className="text-foreground mt-8"`

---

## 2. Always Build Reusable Components

- Before copying JSX, ask: "Will this appear elsewhere?"
- Extract shared UI into `components/ui/`
- Extract shared layout patterns into `components/layout/`
- Section-specific components stay in `components/sections/` but sub-elements can be extracted when reused

---

## 3. Prefer Composition Over Duplication

- Compose small primitives into larger sections — do not clone entire sections
- Use props and variants (CVA) to handle visual differences — not separate components
- Pass `className` through to allow layout-level overrides via `cn()`
- Favor children and slots over prop drilling for flexible layouts

---

## 4. Semantic HTML

- Use the correct element for the job: `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`
- One `<h1>` per page; heading levels must not skip (`h1 → h3` is invalid)
- Lists use `<ul>`/`<ol>` with `<li>` — not divs styled as lists
- Buttons perform actions; links navigate — never use `<div onClick>`
- Tables are for tabular data only

---

## 5. Accessibility First

- Accessibility is built in from the start — not added at the end
- Every interactive element must be keyboard-operable
- Focus states must be visible (`:focus-visible`)
- Images need appropriate `alt` text
- Animations must respect `prefers-reduced-motion`
- Run manual keyboard and screen reader checks for every new section
- Target WCAG 2.2 Level AA minimum

---

## 6. Mobile-First Development

- Write base styles for the smallest viewport
- Add breakpoint modifiers (`sm:`, `md:`, `lg:`) to enhance — not override broken desktop layouts
- Test on a real mobile viewport (375px) before moving to desktop
- Touch targets must be at least 44×44px
- Avoid horizontal scroll at any breakpoint

---

## 7. Consistent Spacing

- Use Tailwind spacing scale — no arbitrary values unless matching a Figma spec documented in the design system
- Section vertical rhythm must be consistent across the page
- Internal component spacing follows the same scale as layout spacing
- Align to the grid defined in Figma

---

## 8. Clean Naming Conventions

- **Files:** kebab-case (`hero-section.tsx`)
- **Components:** PascalCase (`HeroSection`)
- **Hooks:** camelCase with `use` prefix (`useMediaQuery`)
- **Constants:** descriptive and grouped in `lib/constants.ts`
- Names must describe purpose, not appearance (`SubmitButton` not `BlueButton`)
- Avoid abbreviations unless universally understood (`CTA` is fine; `BtnWrp` is not)

---

## 9. Keep Files Small and Maintainable

- Target **≤ 200 lines** per component file
- If a file exceeds 250 lines, split into sub-components or a folder
- One default export per section file; named exports for sub-components
- No dead code, commented-out blocks, or unused imports
- Colocate tests with components when tests are added

---

## Quick Reference

| Situation | Action |
|-----------|--------|
| Need a color | Add to design system → CSS variable → Tailwind |
| Need a new UI pattern | Check shadcn/ui first → extend if exists → create if not |
| Need animation | Check `prefers-reduced-motion` → use `@/lib/motion` |
| Need responsive layout | Mobile base → `md:` → `lg:` |
| Unsure about semantics | Choose the most specific HTML element |
| Copy-pasting JSX | Stop — extract a component instead |

---

## Enforcement

- ESLint and TypeScript must pass before merge
- Code reviews check against this document
- AI-assisted development sessions must read this file before writing code

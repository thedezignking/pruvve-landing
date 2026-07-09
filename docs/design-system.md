# Pruvve — Design System

> **Status:** Placeholder — populate values from Figma before development begins.

This document is the single source of truth for visual design tokens. All values must be reflected in `styles/globals.css` as CSS custom properties and consumed via Tailwind utilities in components.

**Rule:** Never hardcode colors, spacing, or typography in component files. Always reference tokens.

---

## Colors

<!-- Replace placeholders with Figma values -->

### Brand

| Token | Value | Usage |
|-------|-------|-------|
| `--color-brand-primary` | `_TBD_` | Primary brand color, CTAs |
| `--color-brand-secondary` | `_TBD_` | Secondary accents |
| `--color-brand-accent` | `_TBD_` | Highlights, badges |

### Neutrals

| Token | Value | Usage |
|-------|-------|-------|
| `--color-neutral-50` | `_TBD_` | Lightest background |
| `--color-neutral-100` | `_TBD_` | Subtle backgrounds |
| `--color-neutral-200` | `_TBD_` | Borders, dividers |
| `--color-neutral-500` | `_TBD_` | Muted text |
| `--color-neutral-900` | `_TBD_` | Primary text |
| `--color-neutral-950` | `_TBD_` | Headings, emphasis |

### Semantic

| Token | Value | Usage |
|-------|-------|-------|
| `--color-success` | `_TBD_` | Success states |
| `--color-warning` | `_TBD_` | Warning states |
| `--color-error` | `_TBD_` | Error states |
| `--color-info` | `_TBD_` | Informational states |

### Background & Surface

| Token | Value | Usage |
|-------|-------|-------|
| `--background` | `_TBD_` | Page background |
| `--foreground` | `_TBD_` | Default text color |
| `--card` | `_TBD_` | Card surfaces |
| `--muted` | `_TBD_` | Muted backgrounds |

---

## Typography

### Font Families

| Token | Font | Usage |
|-------|------|-------|
| `--font-sans` | `_TBD_` | Body text, UI |
| `--font-display` | `_TBD_` | Headings, hero text |
| `--font-mono` | `_TBD_` | Code, technical labels |

### Type Scale

| Name | Size | Line Height | Weight | Usage |
|------|------|-------------|--------|-------|
| `display-xl` | `_TBD_` | `_TBD_` | `_TBD_` | Hero headline |
| `display-lg` | `_TBD_` | `_TBD_` | `_TBD_` | Section headlines |
| `heading-lg` | `_TBD_` | `_TBD_` | `_TBD_` | H2 |
| `heading-md` | `_TBD_` | `_TBD_` | `_TBD_` | H3 |
| `heading-sm` | `_TBD_` | `_TBD_` | `_TBD_` | H4 |
| `body-lg` | `_TBD_` | `_TBD_` | `_TBD_` | Lead paragraphs |
| `body-md` | `_TBD_` | `_TBD_` | `_TBD_` | Default body |
| `body-sm` | `_TBD_` | `_TBD_` | `_TBD_` | Captions, labels |
| `label` | `_TBD_` | `_TBD_` | `_TBD_` | Form labels, badges |

### Letter Spacing

| Token | Value | Usage |
|-------|-------|-------|
| `--tracking-tight` | `_TBD_` | Headlines |
| `--tracking-normal` | `_TBD_` | Body |
| `--tracking-wide` | `_TBD_` | Labels, uppercase text |

---

## Spacing

Base unit: `_TBD_` (recommended: 4px)

| Token | Value | Usage |
|-------|-------|-------|
| `--space-1` | `_TBD_` | 4px — tight gaps |
| `--space-2` | `_TBD_` | 8px — icon gaps |
| `--space-3` | `_TBD_` | 12px — compact padding |
| `--space-4` | `_TBD_` | 16px — default padding |
| `--space-6` | `_TBD_` | 24px — component padding |
| `--space-8` | `_TBD_` | 32px — section gaps |
| `--space-12` | `_TBD_` | 48px — large gaps |
| `--space-16` | `_TBD_` | 64px — section padding (mobile) |
| `--space-24` | `_TBD_` | 96px — section padding (desktop) |

### Section Spacing

| Breakpoint | Vertical Padding |
|------------|-----------------|
| Mobile | `_TBD_` |
| Tablet | `_TBD_` |
| Desktop | `_TBD_` |

---

## Radius

| Token | Value | Usage |
|-------|-------|-------|
| `--radius-sm` | `_TBD_` | Badges, tags |
| `--radius-md` | `_TBD_` | Buttons, inputs |
| `--radius-lg` | `_TBD_` | Cards |
| `--radius-xl` | `_TBD_` | Modals, large cards |
| `--radius-full` | `9999px` | Pills, avatars |

---

## Shadows

| Token | Value | Usage |
|-------|-------|-------|
| `--shadow-sm` | `_TBD_` | Subtle elevation |
| `--shadow-md` | `_TBD_` | Cards, dropdowns |
| `--shadow-lg` | `_TBD_` | Modals, popovers |
| `--shadow-xl` | `_TBD_` | Hero elements, featured cards |

---

## Buttons

### Variants

| Variant | Background | Text | Border | Usage |
|---------|------------|------|--------|-------|
| Primary | `_TBD_` | `_TBD_` | — | Main CTAs |
| Secondary | `_TBD_` | `_TBD_` | `_TBD_` | Secondary actions |
| Outline | transparent | `_TBD_` | `_TBD_` | Tertiary actions |
| Ghost | transparent | `_TBD_` | — | Nav links, subtle actions |
| Destructive | `_TBD_` | `_TBD_` | — | Delete, cancel |

### Sizes

| Size | Height | Padding X | Font Size |
|------|--------|-----------|-----------|
| `sm` | `_TBD_` | `_TBD_` | `_TBD_` |
| `md` | `_TBD_` | `_TBD_` | `_TBD_` |
| `lg` | `_TBD_` | `_TBD_` | `_TBD_` |

### States

Document hover, focus, active, and disabled styles for each variant from Figma.

---

## Inputs

| Property | Value |
|----------|-------|
| Height | `_TBD_` |
| Border | `_TBD_` |
| Border (focus) | `_TBD_` |
| Border (error) | `_TBD_` |
| Background | `_TBD_` |
| Placeholder color | `_TBD_` |
| Label font | `_TBD_` |
| Helper text font | `_TBD_` |
| Border radius | `_TBD_` |

---

## Cards

| Property | Value |
|----------|-------|
| Background | `_TBD_` |
| Border | `_TBD_` |
| Border radius | `_TBD_` |
| Shadow | `_TBD_` |
| Padding | `_TBD_` |
| Gap (internal) | `_TBD_` |

---

## Icons

- **Library:** Lucide React
- **Default size:** `_TBD_` (recommended: 20px / `size-5`)
- **Stroke width:** `_TBD_` (Lucide default: 2)

### Size Scale

| Token | Size | Usage |
|-------|------|-------|
| `icon-sm` | `_TBD_` | Inline, badges |
| `icon-md` | `_TBD_` | Buttons, nav |
| `icon-lg` | `_TBD_` | Feature icons |
| `icon-xl` | `_TBD_` | Hero decorative |

### Guidelines

- Use semantic icons — avoid decorative-only icons without `aria-hidden="true"`
- Interactive icons must have accessible labels
- Match icon stroke to adjacent text weight

---

## Sync Checklist

When Figma tokens are finalized:

- [ ] Update this document with all values
- [ ] Map tokens to CSS variables in `styles/globals.css`
- [ ] Extend Tailwind `@theme` if custom utilities are needed
- [ ] Update shadcn/ui component variants to match
- [ ] Verify contrast ratios meet WCAG AA

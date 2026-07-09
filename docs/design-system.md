# Pruvve — Design System

> **Status:** Populated from Figma (`Pruvve — Gadget Marketplace`, file `g1Xffog35iBhLxnNDvMol7`).
> Tokens are implemented in `styles/globals.css`. **Never hardcode colors, spacing, typography, or radii in components — reference these tokens.**

The Figma file defines three variable collections — **Primitive**, **Semantics**, **Spacing** — plus a **Radius** collection and `Web/*` text/effect styles. This document mirrors them. In code, primitives and semantics are CSS variables in `:root`; scales are exposed as Tailwind utilities via `@theme`.

---

## Colors

### Brand (olive green)

| Token | Hex | CSS var | Usage |
|-------|-----|---------|-------|
| brand-50 | `#f3f6e6` | `--brand-50` | Faintest brand tint |
| brand-100 | `#dbe3b1` | `--brand-100` | |
| brand-200 | `#cad58b` | `--brand-200` | Primary faint |
| brand-300 | `#b1c255` | `--brand-300` | |
| brand-400 | `#a2b635` | `--brand-400` | |
| brand-500 | `#8ba402` | `--brand-500` | Accent |
| brand-600 | `#7e9502` | `--brand-600` | **Primary base** — links, highlights, accents |
| brand-700 | `#637401` | `--brand-700` | Primary dark / hover |
| brand-800 | `#4c5a01` | `--brand-800` | |
| brand-900 | `#3a4501` | `--brand-900` | |

Utilities: `bg-brand-600`, `text-brand-600`, `bg-brand` (= brand-600).

### Neutrals

| Token | Hex | | Token | Hex |
|-------|-----|-|-------|-----|
| N0 | `#ffffff` | | N90 | `#9d9e98` |
| N10 | `#fbfbfb` | | N100 | `#91928b` |
| N20 | `#f7f7f6` | | N200 | `#85867f` |
| N30 | `#f2f2ef` | | N300 | `#787a72` |
| N40 | `#e4e5e3` | | N400 | `#6e7067` |
| N45 | `#d5d5d5` | | N500 | `#62635a` |
| N50 | `#cccdca` | | N600 | `#585950` |
| N60 | `#c0c0bd` | | N700 | `#494b41` |
| N70 | `#b6b6b2` | | N800 | `#3d3f34` |
| N80 | `#a9aaa5` | | N900 | `#333529` |

> `N45 (#d5d5d5)` was added during migration for a widely-used border gray that sat off-scale.

### Semantic — Text

| Token | CSS var | Value | Usage |
|-------|---------|-------|-------|
| text-strong | `--text-strong` | N900 `#333529` | Headings, body, primary button bg |
| text-subtext | `--text-subtext` | N300 `#787a72` | Secondary text |
| text-soft | `--text-soft` | N100 `#91928b` | Tertiary/meta |
| text-disabled | `--text-disabled` | N70 `#b6b6b2` | Disabled |
| text-inverse | `--text-inverse` | N0 `#ffffff` | Text on dark/brand |
| text-accent | `--text-accent` | brand-600 `#7e9502` | Emphasis words, links |

### Semantic — Background

| Token | CSS var | Value |
|-------|---------|-------|
| default | `--bg-default` | N0 `#ffffff` |
| surface | `--bg-surface` | N20 `#f7f7f6` |
| layer | `--bg-layer` | N30 `#f2f2ef` |
| subtle | `--bg-subtle` | N40 `#e4e5e3` |
| muted | `--bg-muted` | N50 `#cccdca` |
| weak | `--bg-weak` | N800 `#3d3f34` |

### Semantic — Stroke (opacity-based)

| Token | CSS var | Value |
|-------|---------|-------|
| soft | `--stroke-soft` | `rgba(0,0,0,0.05)` |
| mild | `--stroke-mild` | `rgba(0,0,0,0.10)` |
| strong | `--stroke-strong` | `rgba(0,0,0,0.20)` |

### Semantic — Status

| Role | base | dark | faint | mute |
|------|------|------|-------|------|
| Success | `#1cb061` | `#0d512d` | `#98e2bb` | `#dcfce7` |
| Warning | `#e46917` | `#69300b` | `#fdbf95` | `#ffe2cf` |
| Error | `#dc2626` | `#5c1010` | `#ef9b9b` | `#f8d6d6` |
| Info | `#335cff` | `#15276b` | `#a1b4ff` | `#ebefff` |

Utilities: `text-success`, `bg-error`, etc. (base). Full 50–900 ramps exist in Figma primitives if finer steps are needed.

### shadcn ↔ Pruvve mapping (in `globals.css`)

| shadcn token | Maps to | Note |
|--------------|---------|------|
| `--primary` | text-strong `#333529` | Primary **action button** is dark, not green |
| `--primary-foreground` | text-inverse `#ffffff` | |
| `--secondary` | bg-surface `#f7f7f6` | |
| `--muted` / `--muted-foreground` | bg-layer / text-subtext | |
| `--accent` / `--accent-foreground` | primary-mute / primary-dark | Brand-tinted hovers |
| `--destructive` | error-base `#dc2626` | |
| `--border` / `--input` | bg-subtle `#e4e5e3` | |
| `--ring` | brand-600 `#7e9502` | Brand-green focus ring |

---

## Typography

### Font Families

| Token | Font | Note |
|-------|------|------|
| `--font-sans` | **SF Pro** (design) / **Geist** (web) | SF Pro is Apple-system-only; Geist is the web substitute in `app/layout.tsx`. Consider Inter for closer metrics. |
| `--font-display` | → sans | No separate display face; falls back to sans |
| `--font-mono` | Geist Mono | Code/technical labels |

> **Open decision:** the design is authored in SF Pro. Confirm the production web font (keep Geist, or switch to Inter) before pixel-comparing against Figma.

### Type Scale (`Web/*` text styles → Tailwind `text-*`)

| Utility | Weight | Size | Line-height | Tracking | Usage |
|---------|--------|------|-------------|----------|-------|
| `text-display` | Medium | 74px | 114% | -1% | Hero headline |
| `text-h1` | Medium | 54px | 120% | -1% | Section hero |
| `text-h2` | Bold | 32px | 120% | -1% | H2 |
| `text-h3` | Medium | 28px | 32px | 0% | H3 |
| `text-h4` | Medium | 20px | 28px | 0% | H4 |
| `text-card-title` | Medium | 24px | 32px | 0% | Feature/content card headings (`Web/Card Title` in Figma) |
| `text-body-lg` | Regular | 20px | 150% | 2% | Lead paragraphs |
| `text-body` | Regular | 16px | 150% | 2% | Default body |
| `text-body-sm` | Regular | 14px | 150% | 2% | Captions |
| `text-label` | Semibold | 16px | 24px | 0% | Buttons, labels |

Weights aren't carried by the `text-*` utility — pair with `font-medium` / `font-semibold` / `font-bold` as noted above.

---

## Spacing

Figma `Spacing` collection → Tailwind named spacing (`p-l`, `gap-2xl`, …). Base unit 4px.

| Token | Value | Utility |
|-------|-------|---------|
| XXS | 2px | `*-xxs` |
| XS | 4px | `*-xs` |
| S | 8px | `*-s` |
| M | 12px | `*-m` |
| L | 16px | `*-l` |
| XL | 20px | `*-xl` |
| 2XL | 24px | `*-2xl` |
| 3XL | 28px | `*-3xl` |
| 4XL | 32px | `*-4xl` |
| 5XL | 36px | `*-5xl` |
| 6XL | 40px | `*-6xl` |
| 7XL | 48px | `*-7xl` |

Section-level paddings on the landing page (e.g. 84/98/150) are layout-specific and intentionally not tokenized.

---

## Radius

Figma `Radius` collection → Tailwind `rounded-*`.

| Token | Value | Utility | Usage |
|-------|-------|---------|-------|
| sm | 12px | `rounded-sm` | Badges, tags |
| md | 16px | `rounded-md` | Inputs |
| lg | 20px | `rounded-lg` | Buttons |
| xl | 24px | `rounded-xl` | Cards |
| 2xl | 32px | `rounded-2xl` | Large cards |
| 3xl | 48px | `rounded-3xl` | Feature panels |
| full | 999px | `rounded-full` | Pills, avatars |

---

## Shadows

Figma effect styles → Tailwind `shadow-*`.

| Token | Value | Usage |
|-------|-------|-------|
| card | `0 10px 35px rgba(0,0,0,.08)` | Cards |
| small | `0 4px 33px rgba(0,0,0,.12)` | Subtle floating elements |
| image | `0 10px 82px rgba(0,0,0,.14)` | Product/mockup images |
| ambient | `0 19px 78px rgba(0,0,0,.12)` | Large soft ambient |
| elevated | `0 12px 87px rgba(0,0,0,.16)` | Highest elevation |

---

## Buttons

Primary action button (from the "Download App" component):

| Property | Value |
|----------|-------|
| Background | text-strong `#333529` (`bg-primary`) |
| Text | white `#ffffff` (`text-primary-foreground`) |
| Radius | full pill (`rounded-full`) |
| Label style | `text-label` (Semibold 16 / 24) |

The brand green (`bg-brand-600`) is used for accents, links, and emphasis — not the primary button.

---

## Inputs

| Property | Value |
|----------|-------|
| Border | bg-subtle `#e4e5e3` (`border-input`) |
| Background | default `#ffffff` |
| Placeholder | text-subtext `#787a72` |
| Focus ring | brand-600 `#7e9502` (`ring-ring`) |
| Radius | md `16px` |

---

## Cards

| Property | Value |
|----------|-------|
| Background | default `#ffffff` (surface `#f7f7f6` for muted cards) |
| Border | bg-subtle `#e4e5e3` |
| Radius | xl `24px` |
| Shadow | `shadow-card` |

---

## Icons

- **Library:** Lucide React (UI); brand/store icons as SVG in `public/icons/`.
- **Default size:** 20px (`size-5`); feature/decorative larger.
- Interactive icons need accessible labels; decorative icons use `aria-hidden="true"`.

---

## Components (from Figma)

Reusable components defined in the Figma file, to mirror in `components/`:
**Nav bar, Button, Store Rating Badge, Feature Card, Testimonial Card, CTA, Footer.**

---

## Landing page sections (source frames)

Hero · Features and trust · How it works · Testimonials · CTA · Footer.

---

## Sync notes

- Values ported from Figma on 2026-07-09. If Figma tokens change, update `styles/globals.css` and this file together.
- Verify contrast (text-subtext/soft on light backgrounds) meets WCAG 2.2 AA before launch.
- Resolve the SF Pro → web-font decision noted under Typography.

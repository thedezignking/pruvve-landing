# Pruvve — Component Catalog

Reference for all components in the project. Update this document whenever a component is added, modified, or removed.

For architecture and composition patterns, see [architecture.md](./architecture.md).  
For visual specs, see [design-system.md](./design-system.md).

---

## Conventions

- All components accept an optional `className` prop merged via `cn()`
- Server Components by default — `"use client"` only when documented
- Import path alias: `@/components/...`
- Icons from `lucide-react` using named imports

---

## UI Primitives (`components/ui/`)

shadcn/ui components. Add new primitives via:

```bash
npx shadcn@latest add [component-name]
```

### Button

**File:** `components/ui/button.tsx`  
**Type:** Server Component (no `"use client"`)

Primary interactive element for actions and CTAs.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "destructive" \| "outline" \| "secondary" \| "ghost" \| "link"` | `"default"` | Visual style |
| `size` | `"default" \| "sm" \| "lg" \| "icon"` | `"default"` | Size preset |
| `asChild` | `boolean` | `false` | Render as child element via Radix Slot |
| `className` | `string` | — | Additional classes |
| `...props` | `ButtonHTMLAttributes` | — | Native button attributes |

**Usage:**

```tsx
import { Button } from "@/components/ui/button";

<Button>Get Started</Button>
<Button variant="outline" size="lg">Learn More</Button>
<Button variant="ghost" size="icon" aria-label="Open menu">
  <MenuIcon />
</Button>
```

---

### Card

**File:** `components/ui/card.tsx`  
**Type:** Server Component

Container for grouped content — features, testimonials, pricing tiers.

**Exports:** `Card`, `CardHeader`, `CardTitle`, `CardDescription`, `CardContent`, `CardFooter`

**Usage:**

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Feature Title</CardTitle>
    <CardDescription>Short description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Feature details...</p>
  </CardContent>
</Card>
```

---

### Input

**File:** `components/ui/input.tsx`  
**Type:** Server Component

Text input for forms (newsletter, contact).

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `"text"` | HTML input type |
| `className` | `string` | — | Additional classes |
| `...props` | `InputHTMLAttributes` | — | Native input attributes |

**Usage:**

```tsx
import { Input } from "@/components/ui/input";

<label htmlFor="email" className="sr-only">Email</label>
<Input id="email" type="email" placeholder="you@example.com" />
```

**Accessibility:** Always pair with a visible or screen-reader `<label>`.

---

## Layout (`components/layout/`)

Site-wide structural components.

### Container

**File:** `components/layout/container.tsx`  
**Type:** Server Component

Centers content with responsive horizontal padding and max-width.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `ElementType` | `"div"` | HTML element to render |
| `size` | `"default" \| "narrow" \| "wide"` | `"default"` | Max-width preset |
| `className` | `string` | — | Additional classes |

**Size map:**

| Size | Max Width |
|------|-----------|
| `default` | `max-w-7xl` (1280px) |
| `narrow` | `max-w-4xl` (896px) |
| `wide` | `max-w-[90rem]` (1440px) |

**Usage:**

```tsx
import { Container } from "@/components/layout/container";

<Container>
  <h1>Page content</h1>
</Container>

<Container as="nav" size="wide" aria-label="Main navigation">
  ...
</Container>
```

---

### Header

**File:** `components/layout/header.tsx`  
**Type:** Server Component

Sticky site header with logo/brand link.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional classes |

**Usage:**

```tsx
import { Header } from "@/components/layout/header";

<Header />
```

**Status:** Scaffold — navigation links and mobile menu to be added from Figma.

---

### Footer

**File:** `components/layout/footer.tsx`  
**Type:** Server Component

Site footer with copyright.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | — | Additional classes |

**Usage:**

```tsx
import { Footer } from "@/components/layout/footer";

<Footer />
```

**Status:** Scaffold — footer links and social icons to be added from Figma.

---

## Sections (`components/sections/`)

Landing page blocks — one component per major Figma frame.

### Section

**File:** `components/sections/section.tsx`  
**Type:** Server Component

Base wrapper for page sections with consistent vertical padding and inner container.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `as` | `ElementType` | `"section"` | HTML element to render |
| `id` | `string` | — | Anchor ID for navigation |
| `className` | `string` | — | Section-level classes |
| `containerClassName` | `string` | — | Inner container classes |

**Usage:**

```tsx
import { Section } from "@/components/sections/section";

<Section id="features">
  <h2>Features</h2>
  {/* section content */}
</Section>
```

---

## Planned Sections

These will be created during development. Remove from "Planned" and document above when implemented.

| Component | File | Figma Frame | Status |
|-----------|------|-------------|--------|
| HeroSection | `hero-section.tsx` | Hero | **Implemented** — gradient card with nav (Header), display headline, CTA, phone mockup + floating cards. Button gained `xl`/`2xl` pill sizes for its buttons; Header now renders the Figma nav (links collapse below `md`). |
| FeaturesSection | `features-section.tsx` | Features | Planned |
| TestimonialsSection | `testimonials-section.tsx` | Testimonials | Planned |
| CTASection | `cta-section.tsx` | CTA | Planned |
| FAQSection | `faq-section.tsx` | FAQ | Planned |

---

## Hooks (`hooks/`)

### useMediaQuery

**File:** `hooks/use-media-query.ts`  
**Type:** Client hook

Subscribes to a CSS media query and returns a boolean.

```tsx
"use client";
import { useMediaQuery } from "@/hooks/use-media-query";

const isLarge = useMediaQuery("(min-width: 1024px)");
```

### useBreakpoint

**File:** `hooks/use-media-query.ts`  
**Type:** Client hook

Shorthand for Tailwind breakpoints.

```tsx
import { useBreakpoint } from "@/hooks/use-media-query";

const isDesktop = useBreakpoint("lg");
```

### useIsMobile

**File:** `hooks/use-media-query.ts`  
**Type:** Client hook

Returns `true` when viewport is below `md` (768px).

```tsx
import { useIsMobile } from "@/hooks/use-media-query";

const isMobile = useIsMobile();
```

### useMounted

**File:** `hooks/use-mounted.ts`  
**Type:** Client hook

Returns `true` after hydration. Use to avoid SSR/client mismatch for client-only UI.

```tsx
import { useMounted } from "@/hooks/use-mounted";

const mounted = useMounted();
if (!mounted) return null;
```

---

## Utilities (`lib/`)

Not components, but commonly used alongside them.

| Export | File | Purpose |
|--------|------|---------|
| `cn()` | `lib/utils.ts` | Merge Tailwind classes |
| `siteConfig` | `lib/constants.ts` | Site name, URL, links |
| `breakpoints` | `lib/breakpoints.ts` | Responsive breakpoint values |
| `motion`, `useReducedMotion`, etc. | `lib/motion.ts` | Framer Motion re-exports |

---

## Adding a New Component

1. Determine the layer: `ui/`, `layout/`, or `sections/`
2. Follow naming conventions (see [implementation.md](./implementation.md))
3. Use Server Components unless client behavior is required
4. Accept `className` and spread remaining HTML attributes
5. Document the component in this file
6. Add an entry to [changelog.md](./changelog.md)

### Section Component Template

```tsx
import { Section } from "@/components/sections/section";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  className?: string;
}

export function HeroSection({ className }: HeroSectionProps) {
  return (
    <Section id="hero" className={cn(className)}>
      {/* content */}
    </Section>
  );
}
```

---

## Related Documents

| Document | Focus |
|----------|-------|
| [architecture.md](./architecture.md) | System design and rendering |
| [design-system.md](./design-system.md) | Visual tokens and specs |
| [project-rules.md](./project-rules.md) | Development rules |
| [implementation.md](./implementation.md) | Workflow and standards |

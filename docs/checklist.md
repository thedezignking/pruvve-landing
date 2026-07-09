# Pruvve — Production Launch Checklist

Complete every section before deploying to production. Mark items as done and note any exceptions with justification.

**Target launch date:** _TBD_  
**Reviewed by:** _TBD_  
**Last updated:** _TBD_

---

## Responsiveness

- [ ] Layout verified at **375px** (iPhone SE / small mobile)
- [ ] Layout verified at **390px** (iPhone 14 / standard mobile)
- [ ] Layout verified at **768px** (iPad portrait / tablet)
- [ ] Layout verified at **1024px** (iPad landscape / small laptop)
- [ ] Layout verified at **1280px** (standard desktop)
- [ ] Layout verified at **1440px+** (large desktop)
- [ ] No horizontal overflow at any breakpoint
- [ ] Typography scales correctly across breakpoints
- [ ] Images use correct `sizes` attribute for responsive loading
- [ ] Navigation works on mobile (hamburger/drawer if applicable)
- [ ] Touch targets ≥ 44×44px on mobile
- [ ] Spacing matches Figma at all breakpoints

---

## Accessibility

- [ ] Page passes **axe DevTools** or **WAVE** scan with zero critical issues
- [ ] Keyboard navigation works for all interactive elements
- [ ] Focus order is logical and focus indicators are visible
- [ ] Color contrast meets **WCAG 2.2 AA** (4.5:1 body, 3:1 large text)
- [ ] All images have appropriate `alt` text
- [ ] Heading hierarchy is correct (single `h1`, no skipped levels)
- [ ] Form inputs have associated labels
- [ ] `lang="en"` set on `<html>`
- [ ] Skip-to-content link present and functional
- [ ] Animations respect `prefers-reduced-motion`
- [ ] ARIA used only where native semantics are insufficient
- [ ] Screen reader spot-check completed (VoiceOver / NVDA)

---

## Performance

- [ ] Production build completes without errors (`npm run build`)
- [ ] **Lighthouse Performance** score ≥ 90
- [ ] **LCP** (Largest Contentful Paint) < 2.5s
- [ ] **CLS** (Cumulative Layout Shift) < 0.1
- [ ] **INP** (Interaction to Next Paint) < 200ms
- [ ] Hero image preloaded or prioritized
- [ ] All images served via `next/image` with WebP/AVIF
- [ ] Fonts loaded via `next/font` with `display: swap`
- [ ] No render-blocking third-party scripts
- [ ] Client JS bundle reviewed — no unnecessary `"use client"` components
- [ ] Below-the-fold content lazy-loaded where appropriate

---

## SEO

- [ ] Unique, descriptive `<title>` tag
- [ ] Meta description set (150–160 characters)
- [ ] Open Graph tags configured (`og:title`, `og:description`, `og:image`)
- [ ] Twitter Card tags configured
- [ ] Canonical URL set
- [ ] `robots.txt` configured
- [ ] `sitemap.xml` generated
- [ ] Semantic HTML structure (headings, landmarks)
- [ ] All internal links use Next.js `<Link>`
- [ ] Favicon and app icons present in `public/icons/`
- [ ] Structured data (JSON-LD) added if applicable

---

## Cross-Browser Testing

- [ ] **Chrome** (latest) — desktop & mobile
- [ ] **Firefox** (latest) — desktop
- [ ] **Safari** (latest) — desktop & iOS
- [ ] **Edge** (latest) — desktop
- [ ] CSS features have acceptable fallbacks
- [ ] Fonts render correctly across browsers
- [ ] Animations work or degrade gracefully

---

## Asset Optimization

- [ ] All images compressed and appropriately sized
- [ ] SVGs optimized (SVGO or equivalent)
- [ ] No unused assets in `public/`
- [ ] Fonts subset to required character sets
- [ ] Videos (if any) compressed and lazy-loaded
- [ ] Icons use Lucide React tree-shaking (named imports only)
- [ ] `favicon.ico` and PWA icons generated

---

## Lighthouse Audit

Run Lighthouse in Chrome DevTools (Incognito, throttled) against the production build or staging URL.

| Category | Target | Actual | Pass |
|----------|--------|--------|------|
| Performance | ≥ 90 | | [ ] |
| Accessibility | ≥ 90 | | [ ] |
| Best Practices | ≥ 90 | | [ ] |
| SEO | ≥ 90 | | [ ] |

### Core Web Vitals

| Metric | Target | Actual | Pass |
|--------|--------|--------|------|
| LCP | < 2.5s | | [ ] |
| INP | < 200ms | | [ ] |
| CLS | < 0.1 | | [ ] |

---

## Pre-Deploy Final Checks

- [ ] Environment variables configured on hosting platform
- [ ] Analytics / tracking scripts installed (if required)
- [ ] Error monitoring configured (if required)
- [ ] 404 page styled and functional
- [ ] SSL / HTTPS enforced
- [ ] DNS configured and propagated
- [ ] Staging URL reviewed and approved
- [ ] Rollback plan documented

---

## Sign-Off

| Role | Name | Date | Approved |
|------|------|------|----------|
| Developer | | | [ ] |
| Designer | | | [ ] |
| Stakeholder | | | [ ] |

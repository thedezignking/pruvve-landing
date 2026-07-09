# Pruvve

Production-ready landing page built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animation:** Framer Motion
- **UI Components:** shadcn/ui
- **Icons:** Lucide React

## Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

### Lint & Type Check

```bash
npm run lint
npm run typecheck
```

## Project Structure

```
app/                    # Next.js App Router pages and layouts
components/
  ui/                   # shadcn/ui primitives (Button, Card, Input, etc.)
  layout/               # Header, Footer, Container
  sections/             # Landing page section components
lib/                    # Utilities, constants, motion helpers
hooks/                  # Custom React hooks
styles/                 # Global CSS and design tokens
public/
  images/               # Optimized image assets
  icons/                # SVG icons and favicons
  fonts/                # Self-hosted font files
docs/                   # Project documentation
```

## Documentation

| Document | Description |
|----------|-------------|
| [docs/implementation.md](./docs/implementation.md) | Architecture, workflow, and coding standards |
| [docs/architecture.md](./docs/architecture.md) | System design, rendering model, and decisions |
| [docs/components.md](./docs/components.md) | Component catalog and usage reference |
| [docs/design-system.md](./docs/design-system.md) | Design tokens and component specs |
| [docs/project-rules.md](./docs/project-rules.md) | Development rules and conventions |
| [docs/checklist.md](./docs/checklist.md) | Production launch checklist |
| [docs/changelog.md](./docs/changelog.md) | Version history and release notes |

## Adding shadcn/ui Components

```bash
npx shadcn@latest add [component-name]
```

Configuration is in `components.json`.

## License

Private — All rights reserved.

# Contributing to ArtUI

Thanks for your interest in contributing! ArtUI is an art-focused React UI component library for personal websites, photography showcases, and gallery projects.

## Development Setup

```bash
# Clone and install
git clone https://github.com/YOUR_USERNAME/art-ui.git
cd art-ui
npm install

# Start dev server
npm run dev

# Build library
npm run build
```

## Project Structure

```
art-ui/
├── src/
│   ├── components/     # 108 components, one per directory
│   ├── hooks/          # React hooks (useMediaQuery, useScrollPosition)
│   ├── styles/         # Design tokens (variables.css, global.css)
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Theme utilities
│   └── index.ts        # Unified barrel export
├── component-reuse-workflow.md  # Component catalog for AI agents
├── vite.config.ts      # Vite library mode config
└── package.json
```

## Component Guidelines

1. **Directory**: `src/components/<ComponentName>/<ComponentName>.tsx` + `.module.css`
2. **No emoji icons**: Use pure CSS shapes or inline SVG for all icons
3. **CSS Modules**: All styles scoped via `*.module.css`
4. **Export in index.ts**: Every component must be re-exported from `src/index.ts`
5. **TypeScript**: All props must be typed with an exported interface

## Adding a New Component

```bash
# 1. Create component directory
mkdir -p src/components/MyComponent

# 2. Create files
touch src/components/MyComponent/MyComponent.tsx
touch src/components/MyComponent/MyComponent.module.css

# 3. Add export to src/index.ts
# export { MyComponent } from './components/MyComponent/MyComponent';

# 4. Build and verify
npm run build
```

## Design Tokens

Reference CSS custom properties defined in `src/styles/variables.css`:

| Token | Usage |
|-------|-------|
| `--art-color-accent` | Primary accent color (`#8b5e3c`) |
| `--art-color-surface` | Card/surface background |
| `--art-color-text` | Primary text color |
| `--art-color-text-secondary` | Secondary text |
| `--art-color-border` | Border color |
| `--art-font-display` | Display/serif font stack |
| `--art-font-body` | Body/sans-serif font stack |

## Pull Request Process

1. Ensure `npm run build` passes
2. Update `CHANGELOG.md` with your changes
3. If adding a component, update `component-reuse-workflow.md`
4. Request review from maintainers

## Questions?

Open an issue with the `question` label.

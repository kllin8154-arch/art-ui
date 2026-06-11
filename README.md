<p align="center">
  <h1 align="center">ArtUI</h1>
  <p align="center">An art-focused React UI component library for portfolios, photography showcases, galleries, and creative projects.</p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/art-ui"><img src="https://img.shields.io/npm/v/art-ui" alt="npm"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/art-ui" alt="license"></a>
  <a href="https://www.npmjs.com/package/art-ui"><img src="https://img.shields.io/npm/dm/art-ui" alt="downloads"></a>
  <img src="https://img.shields.io/badge/components-108-b87351" alt="components">
  <img src="https://img.shields.io/badge/react-%3E%3D17-61dafb" alt="react">
</p>

---

## Why ArtUI?

Most UI libraries optimize for dashboards and enterprise apps. ArtUI is built for **visual storytelling** — personal websites, photography portfolios, art galleries, and creative projects where aesthetics come first.

- **108 components** organized in 13 categories
- **Light/Dark theme** with warm earth-toned design tokens
- **CSS-only icons** — zero emoji, pure SVG and CSS shapes
- **No runtime dependencies** — only `react` and `react-dom` as peer
- **TypeScript** — fully typed with exported interfaces
- **CSS Modules** — scoped styles, no conflicts
- **Art-focused** — serif display fonts, parchment tones, vinyl-record players

## Installation

```bash
npm install art-ui
```

## Quick Start

```tsx
import { ThemeProvider, Hero, Gallery, Typography } from 'art-ui';
import 'art-ui/dist/style.css';

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <Hero
        image="/hero.jpg"
        title="My Photography"
        subtitle="Light & Shadow"
        height="100vh"
      />
      <Typography variant="display" as="h2">
        Featured Works
      </Typography>
      <Gallery
        images={[
          { src: '/photo1.jpg', alt: 'Sunset over mountains' },
          { src: '/photo2.jpg', alt: 'Urban architecture' },
          { src: '/photo3.jpg', alt: 'Portrait in natural light' },
        ]}
        columns={3}
        gap={12}
      />
    </ThemeProvider>
  );
}
```

## Component Categories

| Category | Components |
|----------|-----------|
| **Foundation** | ThemeProvider, Typography, Button, Card, Divider, AspectRatio, Backdrop, Avatar |
| **Layout** | Hero, Footer, Navigation, Sidebar, MenuTree, VerticalNav, Dock |
| **Gallery** | Gallery, Lightbox, Masonry, Carousel, ImageCompare, ImageHover, KenBurns, LazyImage, Parallax, GridOverlay, Watermark, ExifDisplay, StickyHeader |
| **Typography FX** | GradientText, GlitchText, Typewriter, SplitText, Marquee, Truncate, Spotlight, StaggerList, MagneticButton, Counter |
| **Forms** | Input, Textarea, Select, Checkbox, Radio, Switch, NumberInput, PasswordInput, OtpInput, SearchInput, FormField, ColorPicker, DatePicker |
| **Navigation** | Breadcrumb, Tabs, TabBar, Pagination, Segmented, Stepper, ScrollToTop |
| **Overlay** | Modal, Drawer, Popover, DropdownMenu, ContextMenu, Tooltip, Toast, Notification, FullscreenToggle |
| **Data Display** | Table, Timeline, StatCard, StatList, Tag, Chip, ProgressBar, Rating, PricingCard, Testimonial |
| **Media** | AudioPlayer (vinyl disc), CodeBlock, Markdown, Confetti (Canvas), Map, QrCode, ColorPalette |
| **Interaction** | TiltCard, DragSlider, ScrollReveal, SwipeDetector, InfiniteScroll, Dropzone, Skeleton, EmptyState |
| **Effects** | Particles, CursorGlow, FloatingAction, Share, Countdown, CopyToClipboard |
| **Privacy** | CookieConsent, Onboarding (spotlight), SocialLogin (Simple Icons SVG), CommandPalette |

## Hooks

```tsx
import { useMediaQuery, useBreakpoint, useScrollPosition, useParallax, useInView } from 'art-ui';

// Responsive breakpoint detection
const isMobile = useBreakpoint() === 'sm';

// Scroll-aware parallax
const { scrollY } = useScrollPosition();
const offset = useParallax(0.5); // 0.5x scroll speed

// Intersection observer
const { ref, inView } = useInView({ threshold: 0.3 });
```

## Design Tokens

All visual properties are exposed as CSS custom properties:

```css
/* Available for override */
--art-color-accent: #8b5e3c;       /* Warm brown accent */
--art-color-surface: #ffffff;       /* Card background */
--art-color-bg: #faf8f5;           /* Page background */
--art-color-text: #1a1a1a;         /* Primary text */
--art-font-display: 'Georgia', 'Noto Serif SC', serif;
--art-font-body: 'Inter', 'PingFang SC', sans-serif;
--art-radius-md: 8px;
--art-radius-xl: 16px;
```

## AI Agent Integration

This library includes `component-reuse-workflow.md` — a structured catalog enabling AI coding agents (Claude, Cursor, Copilot) to discover and reuse components without scanning all 108 source files.

## Browser Support

All modern browsers (Chrome, Firefox, Safari, Edge). IE not supported.

## License

MIT © ArtUI Contributors

## Related

- [component-reuse-workflow.md](./component-reuse-workflow.md) — Agent-readable component catalog
- [CONTRIBUTING.md](./CONTRIBUTING.md) — Contribution guide
- [CHANGELOG.md](./CHANGELOG.md) — Release history

# ArtUI Component Reuse Workflow

> **Agent-readable component quick index** — locate components without scanning all source files.
> Total: **108** | Path: `src/components/<Name>/<Name>.tsx`
> Import: `import { Name } from 'art-ui'`

---

## 1. Foundation (8)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 1 | **ThemeProvider** | Theme context injection, light/dark mode | `theme`, `children` |
| 2 | **Typography** | Text component with display/body/signature/handwriting/decorative variants | `variant`, `as`, `children` |
| 3 | **Button** | Art-style button with multiple variants | `variant`, `size`, `disabled` |
| 4 | **Card** | Basic card container with hover shadow | `hover`, `padding`, `children` |
| 5 | **Divider** | Divider line with optional text | `children`, `orientation` |
| 6 | **AspectRatio** | Fixed aspect ratio container | `ratio`, `children` |
| 7 | **Backdrop** | Fullscreen semi-transparent overlay | `open`, `onClick`, `zIndex` |
| 8 | **Avatar** | Avatar component | `src`, `alt`, `size`, `fallback` |

## 2. Layout (10)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 9 | **Hero** | Full-width hero banner with parallax title | `image`, `title`, `subtitle`, `height` |
| 10 | **Footer** | Multi-column footer with links | `columns`, `copyright`, `links` |
| 11 | **Navigation** | Top navbar, supports scroll transparency | `items`, `logo`, `transparent` |
| 12 | **Sidebar** | Collapsible sidebar | `open`, `onToggle`, `children` |
| 13 | **SidebarItem** | Sidebar menu item | `icon`, `label`, `href`, `active` |
| 14 | **SidebarGroup** | Sidebar group | `title`, `children` |
| 15 | **SidebarDivider** | Sidebar divider | — |
| 16 | **MenuTree** | Tree menu | `items`, `defaultExpanded` |
| 17 | **VerticalNav** | Vertical navigation | `items`, `activeKey` |
| 18 | **Dock** | macOS-style bottom dock bar | `items`, `magnification` |

## 3. Gallery & Images (13)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 19 | **Gallery** | Image grid gallery | `images`, `columns`, `gap` |
| 20 | **Lightbox** | Image lightbox viewer | `images`, `index`, `open`, `onClose` |
| 21 | **Masonry** | JS balanced-column masonry layout | `items`, `columns`, `renderItem` |
| 22 | **Carousel** | Image carousel | `images`, `autoplay`, `interval` |
| 23 | **ImageCompare** | Before/after comparison slider | `before`, `after`, `orientation` |
| 24 | **ImageHover** | Image hover effects | `src`, `overlay`, `effect` |
| 25 | **KenBurns** | Slow zoom & pan Ken Burns effect | `src`, `duration`, `scale` |
| 26 | **LazyImage** | Lazy-loaded image | `src`, `placeholder`, `threshold` |
| 27 | **Parallax** | Parallax scroll container | `speed`, `children` |
| 28 | **GridOverlay** | Grid line overlay | `show`, `size`, `color` |
| 29 | **Watermark** | Tiled watermark overlay | `text`, `opacity`, `rotate` |
| 30 | **ExifDisplay** | EXIF metadata display (aperture/shutter/ISO) | `data: ExifData` |
| 31 | **StickyHeader** | Sticky header on scroll | `children`, `offset` |

## 4. Typography Effects (10)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 32 | **GradientText** | Gradient-colored text | `gradient`, `children` |
| 33 | **GlitchText** | JS-driven random glitch/tear effect | `text`, `intensity`, `interval` |
| 34 | **Typewriter** | Typewriter-style character output | `texts`, `speed`, `loop` |
| 35 | **SplitText** | Text split by character/line with animation | `text`, `animation`, `delay` |
| 36 | **Marquee** | Horizontal scrolling marquee | `text`, `speed`, `gap` |
| 37 | **Truncate** | Multi-line text truncation with expand | `lines`, `children` |
| 38 | **Spotlight** | Mouse-following spotlight text effect | `text`, `color` |
| 39 | **StaggerList** | Staggered children entrance animation | `children`, `delay`, `direction` |
| 40 | **MagneticButton** | Mouse magnetic-attraction button | `children`, `strength` |
| 41 | **Counter** | Animated number count-up (serif font) | `from`, `to`, `duration` |

## 5. Forms (13)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 42 | **Input** | Text input | `value`, `onChange`, `placeholder` |
| 43 | **Textarea** | Multi-line textarea | `value`, `onChange`, `rows` |
| 44 | **Select** | Dropdown select | `options`, `value`, `onChange` |
| 45 | **Checkbox** | Checkbox | `checked`, `onChange`, `label` |
| 46 | **Radio** | Radio group | `name`, `options`, `value` |
| 47 | **Switch** | Toggle switch | `checked`, `onChange` |
| 48 | **NumberInput** | Number input with stepper buttons | `value`, `min`, `max`, `step` |
| 49 | **PasswordInput** | Password input with show/hide toggle | `value`, `onChange` |
| 50 | **OtpInput** | 6-digit OTP input with auto-advance | `length`, `onComplete` |
| 51 | **SearchInput** | Search input with SVG icon | `value`, `onChange`, `onSearch` |
| 52 | **FormField** | Form field wrapper (label + error) | `label`, `error`, `children` |
| 53 | **ColorPicker** | Color picker | `value`, `onChange` |
| 54 | **DatePicker** | Custom calendar panel | `value`, `onChange` |

## 6. Navigation (7)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 55 | **Breadcrumb** | Breadcrumb navigation | `items`, `separator` |
| 56 | **Tabs** | Tab switching | `tabs`, `activeKey`, `onChange` |
| 57 | **TabBar** | Bottom tab bar (mobile) | `items`, `activeKey` |
| 58 | **Pagination** | Paginator | `current`, `total`, `onChange` |
| 59 | **Segmented** | Segmented control | `options`, `value`, `onChange` |
| 60 | **Stepper** | Step indicator | `steps`, `current` |
| 61 | **ScrollToTop** | Back-to-top floating button | `threshold`, `smooth` |

## 7. Overlay (9)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 62 | **Modal** | Dialog modal | `open`, `onClose`, `title`, `children` |
| 63 | **Drawer** | Side drawer panel | `open`, `onClose`, `placement`, `children` |
| 64 | **Popover** | Popover bubble | `content`, `trigger`, `placement` |
| 65 | **DropdownMenu** | Dropdown menu | `items`, `trigger` |
| 66 | **ContextMenu** | Right-click context menu | `items`, `children` |
| 67 | **Tooltip** | Text tooltip | `content`, `children`, `placement` |
| 68 | **Toast** | Global toast (Provider pattern) | `ToastProvider`, `useToast` |
| 69 | **Notification** | Notification push (Provider pattern) | `NotificationProvider`, `useNotification` |
| 70 | **FullscreenToggle** | Fullscreen toggle button | `targetRef` |

## 8. Data Display (10)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 71 | **Table** | Data table | `columns`, `data`, `sortable` |
| 72 | **Timeline** | Timeline | `items` |
| 73 | **StatCard** | Statistic card | `label`, `value`, `icon`, `trend` |
| 74 | **StatList** | Statistic card list | `items` |
| 75 | **Tag** | Tag | `children`, `color`, `closable` |
| 76 | **Chip** | Chip component | `label`, `avatar`, `onDelete` |
| 77 | **ProgressBar** | Progress bar | `value`, `max`, `label` |
| 78 | **Rating** | SVG star rating | `value`, `max`, `onChange` |
| 79 | **PricingCard** | Pricing plan comparison card | `plans`, `currency`, `onSelect` |
| 80 | **Testimonial** | Testimonial quote card | `quote`, `author`, `role`, `stars` |

## 9. Media (7)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 81 | **AudioPlayer** | Vinyl disc player (pure CSS disc + SVG icons) | `src`, `title`, `artist`, `coverColor` |
| 82 | **CodeBlock** | Code block with copy button | `code`, `language` |
| 83 | **Markdown** | Markdown HTML renderer with styling | `content` |
| 84 | **Confetti** | Canvas particle celebration (rect/circle/ribbon) | `active`, `count`, `colors`, `duration` |
| 85 | **Map** | OpenStreetMap embed with marker | `lat`, `lng`, `zoom` |
| 86 | **QrCode** | QR code generator | `value`, `size` |
| 87 | **ColorPalette** | Color palette display | `colors`, `onSelect` |

## 10. Interaction & Animation (8)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 88 | **TiltCard** | 3D tilt card with `perspective(1000px)` glare | `children`, `maxTilt`, `glare` |
| 89 | **DragSlider** | Drag to compare slider | `before`, `after` |
| 90 | **ScrollReveal** | Scroll-into-view reveal animation | `children`, `direction`, `delay` |
| 91 | **SwipeDetector** | Swipe gesture detector | `onSwipeLeft`, `onSwipeRight` |
| 92 | **InfiniteScroll** | Infinite scroll loader | `onLoadMore`, `hasMore`, `loader` |
| 93 | **Dropzone** | Drag-and-drop file upload zone | `onDrop`, `accept`, `multiple` |
| 94 | **Skeleton** | Skeleton loading placeholder | `width`, `height`, `variant` |
| 95 | **EmptyState** | Empty state placeholder | `icon`, `title`, `description`, `action` |

## 11. Effects (6)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 96 | **Particles** | Canvas particle background | `count`, `color`, `speed` |
| 97 | **CursorGlow** | Mouse cursor glow follow | `color`, `size`, `blur` |
| 98 | **FloatingAction** | Floating action button (FAB) | `icon`, `onClick`, `position` |
| 99 | **Share** | Social share button group | `url`, `title`, `platforms` |
| 100 | **Countdown** | Countdown timer | `to`, `format`, `onEnd` |
| 101 | **CopyToClipboard** | Click-to-copy text | `text`, `children`, `onCopied` |

## 12. Privacy & Onboarding (4)

| # | Component | Description | Key Props |
|---|-----------|-------------|-----------|
| 102 | **CookieConsent** | GDPR cookie consent banner | `onAccept`, `onDecline` |
| 103 | **Onboarding** | Element-following spotlight guide (getBoundingClientRect) | `steps`, `active`, `onFinish` |
| 104 | **SocialLogin** | Social login buttons (Simple Icons SVG paths) | `providers`, `iconOnly` |
| 105 | **CommandPalette** | Command palette with search icon | `commands`, `open`, `onClose` |

---

## Hooks (5)

| Hook | Description | Returns |
|------|-------------|---------|
| `useMediaQuery` | Responsive media query | `matches: boolean` |
| `useBreakpoint` | Preset breakpoint detection | `breakpoint: string` |
| `useScrollPosition` | Scroll position tracking | `scrollY`, `direction` |
| `useParallax` | Parallax offset calculation | `offset` |
| `useInView` | Element visibility in viewport detection | `ref`, `inView` |

---

## Agent Workflow

```
1. Look up needed component in the table above → note the name
2. import { Name } from 'art-ui'
3. For detailed props: read first 50 lines of src/components/<Name>/<Name>.tsx
4. Design tokens are in src/styles/variables.css — never redefine them
```

## Design Token Quick Reference

| Token | Value |
|-------|-------|
| `--art-color-accent` | `#8b5e3c` (light) / `#c4946c` (dark) |
| `--art-font-display` | Georgia → Playfair Display → Noto Serif SC |
| `--art-font-body` | Segoe UI → Inter → PingFang SC |
| `--art-radius-md` | `8px` |
| `--shadow-sm` / `--shadow-md` | `0 2px 8px` / `0 4px 16px` |

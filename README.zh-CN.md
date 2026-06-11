<p align="center">
  <h1 align="center">ArtUI</h1>
  <p align="center">面向艺术场景的 React UI 组件库 —— 个人网站、摄影作品展示、画廊、创意项目</p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/art-ui"><img src="https://img.shields.io/npm/v/art-ui" alt="npm"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/npm/l/art-ui" alt="license"></a>
  <a href="https://www.npmjs.com/package/art-ui"><img src="https://img.shields.io/npm/dm/art-ui" alt="downloads"></a>
  <img src="https://img.shields.io/badge/components-108-b87351" alt="components">
  <img src="https://img.shields.io/badge/react-%3E%3D17-61dafb" alt="react">
</p>

<p align="center">
  <a href="./README.md">English</a> | <strong>中文</strong>
</p>

---

## 为什么选择 ArtUI？

大多数 UI 库为仪表盘和企业应用优化。ArtUI 专为**视觉叙事**而生 —— 个人网站、摄影作品集、艺术画廊、创意项目，这里美学优先。

- **108 个组件**，13 个分类
- **浅色/深色主题**，暖色调大地色设计令牌
- **零 Emoji 图标** —— 纯 CSS 形状 + 内联 SVG
- **零运行时依赖** —— 仅 `react` 和 `react-dom` 作为 peer
- **TypeScript** —— 完整类型定义，导出 Props 接口
- **CSS Modules** —— 样式隔离，无冲突
- **艺术基因** —— 衬线标题字体、羊皮纸质感、黑胶唱片播放器

## 安装

```bash
npm install art-ui
```

## 快速开始

```tsx
import { ThemeProvider, Hero, Gallery, Typography } from 'art-ui';
import 'art-ui/dist/style.css';

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <Hero
        image="/hero.jpg"
        title="我的摄影"
        subtitle="光与影的艺术"
        height="100vh"
      />
      <Typography variant="display" as="h2">
        精选作品
      </Typography>
      <Gallery
        images={[
          { src: '/photo1.jpg', alt: '群山落日' },
          { src: '/photo2.jpg', alt: '城市建筑' },
          { src: '/photo3.jpg', alt: '自然光人像' },
        ]}
        columns={3}
        gap={12}
      />
    </ThemeProvider>
  );
}
```

## 组件分类

| 分类 | 组件 |
|------|------|
| **基础** | ThemeProvider, Typography, Button, Card, Divider, AspectRatio, Backdrop, Avatar |
| **布局** | Hero, Footer, Navigation, Sidebar, MenuTree, VerticalNav, Dock |
| **画廊** | Gallery, Lightbox, Masonry, Carousel, ImageCompare, ImageHover, KenBurns, LazyImage, Parallax, GridOverlay, Watermark, ExifDisplay, StickyHeader |
| **文字特效** | GradientText, GlitchText, Typewriter, SplitText, Marquee, Truncate, Spotlight, StaggerList, MagneticButton, Counter |
| **表单** | Input, Textarea, Select, Checkbox, Radio, Switch, NumberInput, PasswordInput, OtpInput, SearchInput, FormField, ColorPicker, DatePicker |
| **导航** | Breadcrumb, Tabs, TabBar, Pagination, Segmented, Stepper, ScrollToTop |
| **弹层** | Modal, Drawer, Popover, DropdownMenu, ContextMenu, Tooltip, Toast, Notification, FullscreenToggle |
| **数据展示** | Table, Timeline, StatCard, StatList, Tag, Chip, ProgressBar, Rating, PricingCard, Testimonial |
| **媒体** | AudioPlayer（黑胶唱片）, CodeBlock, Markdown, Confetti（Canvas 粒子）, Map, QrCode, ColorPalette |
| **交互** | TiltCard, DragSlider, ScrollReveal, SwipeDetector, InfiniteScroll, Dropzone, Skeleton, EmptyState |
| **特效** | Particles, CursorGlow, FloatingAction, Share, Countdown, CopyToClipboard |
| **隐私** | CookieConsent, Onboarding（聚光灯引导）, SocialLogin（Simple Icons SVG）, CommandPalette |

## Hooks

```tsx
import { useMediaQuery, useBreakpoint, useScrollPosition, useParallax, useInView } from 'art-ui';

// 响应式断点检测
const isMobile = useBreakpoint() === 'sm';

// 滚动位置跟踪 + 视差
const { scrollY } = useScrollPosition();
const offset = useParallax(0.5); // 0.5 倍滚动速度

// 元素可见性检测
const { ref, inView } = useInView({ threshold: 0.3 });
```

## 设计令牌

所有视觉属性通过 CSS 自定义属性暴露，可自由覆盖：

```css
--art-color-accent: #8b5e3c;       /* 暖棕色主色 */
--art-color-surface: #ffffff;       /* 卡片背景 */
--art-color-bg: #faf8f5;           /* 页面背景 */
--art-color-text: #1a1a1a;         /* 主文字色 */
--art-font-display: 'Georgia', 'Noto Serif SC', serif;
--art-font-body: 'Inter', 'PingFang SC', sans-serif;
--art-radius-md: 8px;
--art-radius-xl: 16px;
```

## AI Agent 集成

本库包含 `component-reuse-workflow.md` 和 `component-reuse-workflow.zh-CN.md` —— 结构化组件目录，AI 编码助手（Claude、Cursor、Copilot）无需遍历 108 个源码文件即可快速发现和复用组件。

## 浏览器支持

所有现代浏览器（Chrome、Firefox、Safari、Edge）。不支持 IE。

## 开源协议

MIT © ArtUI Contributors

## 相关文档

- [component-reuse-workflow.zh-CN.md](./component-reuse-workflow.zh-CN.md) — AI Agent 组件索引（中文）
- [component-reuse-workflow.md](./component-reuse-workflow.md) — AI Agent 组件索引（英文）
- [CONTRIBUTING.md](./CONTRIBUTING.md) — 贡献指南
- [CHANGELOG.md](./CHANGELOG.md) — 更新日志

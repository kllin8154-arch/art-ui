# ArtUI Component Reuse Workflow

> **Agent 可复用组件快速索引** — 无需遍历所有源码即可定位所需组件。
> 组件总数：**108** | 路径前缀：`src/components/<Name>/<Name>.tsx`
> 导入方式：`import { Name } from 'art-ui'`

---

## 一、基础 / Foundation（8）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 1 | **ThemeProvider** | 主题上下文注入，支持浅/深色切换 | `theme`, `children` |
| 2 | **Typography** | 排版组件，含 display/body/signature/handwriting/decorative 变体 | `variant`, `as`, `children` |
| 3 | **Button** | 艺术风格按钮，支持多种变体 | `variant`, `size`, `disabled` |
| 4 | **Card** | 基础卡片容器，带悬停阴影 | `hover`, `padding`, `children` |
| 5 | **Divider** | 分割线，带可选文字 | `children`, `orientation` |
| 6 | **AspectRatio** | 固定宽高比容器 | `ratio`, `children` |
| 7 | **Backdrop** | 全屏半透明遮罩层 | `open`, `onClick`, `zIndex` |
| 8 | **Avatar** | 头像组件 | `src`, `alt`, `size`, `fallback` |

---

## 二、布局 / Layout（10）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 9 | **Hero** | 首屏大图横幅，支持视差标题 | `image`, `title`, `subtitle`, `height` |
| 10 | **Footer** | 页脚，多栏链接布局 | `columns`, `copyright`, `links` |
| 11 | **Navigation** | 顶部导航栏，支持滚动透明变化 | `items`, `logo`, `transparent` |
| 12 | **Sidebar** | 可折叠侧边栏 | `open`, `onToggle`, `children` |
| 13 | **SidebarItem** | 侧边栏菜单项 | `icon`, `label`, `href`, `active` |
| 14 | **SidebarGroup** | 侧边栏分组 | `title`, `children` |
| 15 | **SidebarDivider** | 侧边栏分割线 | — |
| 16 | **MenuTree** | 树形菜单 | `items`, `defaultExpanded` |
| 17 | **VerticalNav** | 垂直导航 | `items`, `activeKey` |
| 18 | **Dock** | macOS 风格底部 Dock 栏 | `items`, `magnification` |

---

## 三、画廊 & 图片 / Gallery（13）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 19 | **Gallery** | 图片网格画廊 | `images`, `columns`, `gap` |
| 20 | **Lightbox** | 图片灯箱查看器 | `images`, `index`, `open`, `onClose` |
| 21 | **Masonry** | JS 均衡列分配的瀑布流布局 | `items`, `columns`, `renderItem` |
| 22 | **Carousel** | 轮播图 | `images`, `autoplay`, `interval` |
| 23 | **ImageCompare** | 前后对比滑块 | `before`, `after`, `orientation` |
| 24 | **ImageHover** | 图片悬停效果 | `src`, `overlay`, `effect` |
| 25 | **KenBurns** | Ken Burns 慢速缩放平移效果 | `src`, `duration`, `scale` |
| 26 | **LazyImage** | 懒加载图片 | `src`, `placeholder`, `threshold` |
| 27 | **Parallax** | 视差滚动容器 | `speed`, `children` |
| 28 | **GridOverlay** | 网格线叠加层 | `show`, `size`, `color` |
| 29 | **Watermark** | 平铺水印覆盖 | `text`, `opacity`, `rotate` |
| 30 | **ExifDisplay** | EXIF 信息展示（光圈/快门/ISO 等） | `data: ExifData` |
| 31 | **StickyHeader** | 滚动时粘性吸顶 Header | `children`, `offset` |

---

## 四、文字特效 / Typography Effects（10）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 32 | **GradientText** | 渐变色文字 | `gradient`, `children` |
| 33 | **GlitchText** | JS 随机驱动 glitch 故障效果 | `text`, `intensity`, `interval` |
| 34 | **Typewriter** | 打字机逐字输出 | `texts`, `speed`, `loop` |
| 35 | **SplitText** | 文字逐字/逐行拆分动画 | `text`, `animation`, `delay` |
| 36 | **Marquee** | 横向滚动跑马灯 | `text`, `speed`, `gap` |
| 37 | **Truncate** | 多行文字截断 + 展开 | `lines`, `children` |
| 38 | **Spotlight** | 鼠标跟随聚光灯文字效果 | `text`, `color` |
| 39 | **StaggerList** | 子元素逐个延迟入场 | `children`, `delay`, `direction` |
| 40 | **MagneticButton** | 鼠标磁吸跟随按钮 | `children`, `strength` |
| 41 | **Counter** | 数字滚动动画（衬线体无 tabular-nums） | `from`, `to`, `duration` |

---

## 五、表单 / Forms（13）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 42 | **Input** | 文本输入框 | `value`, `onChange`, `placeholder` |
| 43 | **Textarea** | 多行文本域 | `value`, `onChange`, `rows` |
| 44 | **Select** | 下拉选择器 | `options`, `value`, `onChange` |
| 45 | **Checkbox** | 复选框 | `checked`, `onChange`, `label` |
| 46 | **Radio** | 单选框组 | `name`, `options`, `value` |
| 47 | **Switch** | 开关切换 | `checked`, `onChange` |
| 48 | **NumberInput** | 数字输入 + 步进按钮 | `value`, `min`, `max`, `step` |
| 49 | **PasswordInput** | 密码输入 + 显示/隐藏切换 | `value`, `onChange` |
| 50 | **OtpInput** | 6 位验证码输入 + 自动跳转 | `length`, `onComplete` |
| 51 | **SearchInput** | 搜索输入框（🔍 → 简洁 SVG 图标） | `value`, `onChange`, `onSearch` |
| 52 | **FormField** | 表单字段容器（label + error） | `label`, `error`, `children` |
| 53 | **ColorPicker** | 颜色选择器 | `value`, `onChange` |
| 54 | **DatePicker** | 自定义日历面板 | `value`, `onChange` |

---

## 六、导航 / Navigation（7）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 55 | **Breadcrumb** | 面包屑导航 | `items`, `separator` |
| 56 | **Tabs** | 标签页切换 | `tabs`, `activeKey`, `onChange` |
| 57 | **TabBar** | 底部标签栏（移动端） | `items`, `activeKey` |
| 58 | **Pagination** | 分页器 | `current`, `total`, `onChange` |
| 59 | **Segmented** | 分段选择器 | `options`, `value`, `onChange` |
| 60 | **Stepper** | 步骤条 | `steps`, `current` |
| 61 | **ScrollToTop** | 回到顶部浮动按钮 | `threshold`, `smooth` |

---

## 七、弹层 & 浮层 / Overlay（9）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 62 | **Modal** | 对话框模态框 | `open`, `onClose`, `title`, `children` |
| 63 | **Drawer** | 侧边抽屉面板 | `open`, `onClose`, `placement`, `children` |
| 64 | **Popover** | 气泡弹出框 | `content`, `trigger`, `placement` |
| 65 | **DropdownMenu** | 下拉菜单 | `items`, `trigger` |
| 66 | **ContextMenu** | 右键菜单 | `items`, `children` |
| 67 | **Tooltip** | 文字提示气泡 | `content`, `children`, `placement` |
| 68 | **Toast** | 全局消息提示（Provider 模式） | `ToastProvider`, `useToast` |
| 69 | **Notification** | 通知推送（Provider 模式） | `NotificationProvider`, `useNotification` |
| 70 | **FullscreenToggle** | 全屏切换按钮 | `targetRef` |

---

## 八、数据展示 / Data Display（10）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 71 | **Table** | 数据表格 | `columns`, `data`, `sortable` |
| 72 | **Timeline** | 时间线 | `items` |
| 73 | **StatCard** | 统计数值卡片 | `label`, `value`, `icon`, `trend` |
| 74 | **StatList** | 统计卡片列表 | `items` |
| 75 | **Tag** | 标签 | `children`, `color`, `closable` |
| 76 | **Chip** | 芯片组件 | `label`, `avatar`, `onDelete` |
| 77 | **ProgressBar** | 进度条 | `value`, `max`, `label` |
| 78 | **Rating** | SVG 五角星评分 | `value`, `max`, `onChange` |
| 79 | **PricingCard** | 定价方案对比卡片 | `plans`, `currency`, `onSelect` |
| 80 | **Testimonial** | 评价引用卡片 | `quote`, `author`, `role`, `stars` |

---

## 九、媒体 / Media（7）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 81 | **AudioPlayer** | 黑胶唱片风格播放器（纯 CSS 唱片 + SVG 图标） | `src`, `title`, `artist`, `coverColor` |
| 82 | **CodeBlock** | 代码块 + 一键复制 | `code`, `language` |
| 83 | **Markdown** | Markdown HTML 渲染 + 美化样式 | `content` |
| 84 | **Confetti** | Canvas 粒子庆祝动画（矩形/圆形/飘带） | `active`, `count`, `colors`, `duration` |
| 85 | **Map** | OpenStreetMap 嵌入地图 + 标记 | `lat`, `lng`, `zoom` |
| 86 | **QrCode** | 二维码生成 | `value`, `size` |
| 87 | **ColorPalette** | 调色板展示 | `colors`, `onSelect` |

---

## 十、交互 & 动画 / Interaction（8）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 88 | **TiltCard** | 3D 倾斜卡片 + `perspective(1000px)` 光泽 | `children`, `maxTilt`, `glare` |
| 89 | **DragSlider** | 拖拽滑块对比 | `before`, `after` |
| 90 | **ScrollReveal** | 滚动进入视口渐显动画 | `children`, `direction`, `delay` |
| 91 | **SwipeDetector** | 滑动手势检测 | `onSwipeLeft`, `onSwipeRight` |
| 92 | **InfiniteScroll** | 滚动无限加载 | `onLoadMore`, `hasMore`, `loader` |
| 93 | **Dropzone** | 拖拽文件上传区 | `onDrop`, `accept`, `multiple` |
| 94 | **Skeleton** | 骨架屏加载占位 | `width`, `height`, `variant` |
| 95 | **EmptyState** | 空状态占位 | `icon`, `title`, `description`, `action` |

---

## 十一、特效 / Effects（6）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 96 | **Particles** | Canvas 粒子背景 | `count`, `color`, `speed` |
| 97 | **CursorGlow** | 鼠标光标光晕跟随 | `color`, `size`, `blur` |
| 98 | **FloatingAction** | 浮动操作按钮（FAB） | `icon`, `onClick`, `position` |
| 99 | **Share** | 社交分享按钮组 | `url`, `title`, `platforms` |
| 100 | **Countdown** | 倒计时 | `to`, `format`, `onEnd` |
| 101 | **CopyToClipboard** | 点击复制文字 | `text`, `children`, `onCopied` |

---

## 十二、隐私 & 引导 / Privacy & Onboarding（4）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 102 | **CookieConsent** | GDPR Cookie 同意横幅 | `onAccept`, `onDecline` |
| 103 | **Onboarding** | 元素跟随聚光灯引导（getBoundingClientRect 定位） | `steps`, `active`, `onFinish` |
| 104 | **SocialLogin** | 社交登录按钮组（Simple Icons SVG path） | `providers`, `iconOnly` |
| 105 | **CommandPalette** | 命令面板（🔍 搜索图标） | `commands`, `open`, `onClose` |

---

## 十三、Data / 数据（3）

| # | 组件 | 简介 | 关键 Props |
|---|------|------|-----------|
| 106 | **Select (Dropdown)** | 已在 Forms | — |
| 107 | **LoadingSpinner** | 加载旋转动画 | `size`, `color` |
| 108 | **ScrollToTop** | 已在 Navigation | — |

---

## Hooks（3）

| Hook | 简介 | 返回 |
|------|------|------|
| `useMediaQuery` | 响应式媒体查询 | `matches: boolean` |
| `useBreakpoint` | 预设断点判断 | `breakpoint: string` |
| `useScrollPosition` | 滚动位置跟踪 | `scrollY`, `direction` |
| `useParallax` | 视差偏移计算 | `offset` |
| `useInView` | 元素是否在视口内 | `ref`, `inView` |

---

## Agent 使用工作流

```
1. 查上表定位所需组件 → 记下组件名
2. import { Name } from 'art-ui'
3. 如需查看具体 Props: 读 src/components/<Name>/<Name>.tsx 前 50 行
4. 样式变量来自 src/styles/variables.css，无需重复定义
```

### 设计系统速查

| 令牌 | 值 |
|------|-----|
| `--art-color-accent` | `#8b5e3c`（浅）/ `#c4946c`（深） |
| `--art-font-display` | Georgia → Playfair Display → Noto Serif SC |
| `--art-font-body` | Segoe UI → Inter → PingFang SC |
| `--art-radius-md` | `8px` |
| `--shadow-sm` / `--shadow-md` | `0 2px 8px` / `0 4px 16px` |

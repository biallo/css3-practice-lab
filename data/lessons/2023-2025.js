export const lessons2023To2025 = [
  {
    year: "2023",
    title: "2023 - 容器查询",
    description: "Container Queries 让组件根据自己的容器尺寸响应，而不是只看视口宽度。",
    summary: "使用 container-type 和 @container 构建真正可复用的响应式组件。",
    exampleHtml: `<article class="course-card">
  <div class="cover">CSS</div>
  <div>
    <h2>容器查询</h2>
    <p>组件根据容器宽度改变布局。</p>
  </div>
</article>`,
    exampleCss: `.course-card {
  container-type: inline-size;
  display: grid;
  gap: 14px;
  width: min(100%, 420px);
  padding: 16px;
  border: 1px solid #dce3ed;
  border-radius: 14px;
  background: #ffffff;
}

.cover {
  display: grid;
  min-height: 100px;
  place-items: center;
  border-radius: 10px;
  background: #edf8f7;
  font-weight: 900;
}

@container (min-width: 360px) {
  .course-card {
    grid-template-columns: 120px 1fr;
  }
}
`,
    exercise: [
      "把容器断点改成 300px，观察布局更早切换",
      "在窄容器中隐藏描述文本",
      "把这个卡片放入不同宽度容器，观察它独立响应"
    ]
  },
  {
    year: "2023",
    title: "2023 - Subgrid 子网格",
    description: "Subgrid 让嵌套元素继承父网格轨道，解决卡片内部对齐难题。",
    summary: "使用 grid-template-rows: subgrid 或 columns: subgrid 让多个卡片的内容行对齐。",
    exampleHtml: `<section class="pricing-grid">
  <article>
    <h2>Basic</h2>
    <p>适合入门练习。</p>
    <strong>$9</strong>
  </article>
  <article>
    <h2>Pro</h2>
    <p>包含更多示例和复盘。</p>
    <strong>$19</strong>
  </article>
</section>`,
    exampleCss: `.pricing-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-rows: auto auto auto;
  gap: 14px;
}

.pricing-grid article {
  display: grid;
  grid-row: span 3;
  grid-template-rows: subgrid;
  gap: 8px;
  padding: 16px;
  border-radius: 12px;
  background: #edf8f7;
}

.pricing-grid h2,
.pricing-grid p {
  margin: 0;
}
`,
    exercise: [
      "给第二张卡片增加更长描述，观察价格行仍然对齐",
      "移除 subgrid，比较两个卡片内部行的对齐差异",
      "把行 subgrid 改成列 subgrid 的思路，设计一个嵌套列表"
    ]
  },
  {
    year: "2023",
    title: "2023 - CSS 嵌套",
    description: "CSS Nesting 让相关选择器可以就近组织，减少重复前缀。",
    summary: "使用嵌套规则和 & 符号组织组件状态、伪类和子元素样式。",
    exampleHtml: `<article class="nest-card">
  <h2>Nested CSS</h2>
  <a href="#">查看示例</a>
</article>`,
    exampleCss: `.nest-card {
  padding: 20px;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #dce3ed;

  & h2 {
    margin: 0 0 10px;
  }

  & a {
    color: #1b7f79;
    font-weight: 800;
  }

  &:hover {
    background: #edf8f7;
  }
}
`,
    exercise: [
      "把 a 的 hover 状态写成嵌套规则",
      "使用 &.featured 创建一个特色卡片状态",
      "把一组重复 .card 前缀的选择器改成嵌套结构"
    ]
  },
  {
    year: "2023",
    title: "2023 - 现代颜色函数",
    description: "CSS Color 4/5 带来 oklch、color-mix 和更贴近感知的颜色控制。",
    summary: "使用 oklch 表达颜色，用 color-mix 生成状态色和浅色背景。",
    exampleHtml: `<div class="color-sample">
  <span>OKLCH</span>
</div>`,
    exampleCss: `.color-sample {
  --brand: oklch(52% 0.12 190);
  display: grid;
  width: 220px;
  height: 120px;
  place-items: center;
  border: 1px solid color-mix(in oklch, var(--brand), white 35%);
  border-radius: 16px;
  background: color-mix(in oklch, var(--brand), white 80%);
  color: var(--brand);
  font-weight: 900;
}
`,
    exercise: [
      "调整 oklch 的 hue 值，观察颜色家族变化",
      "使用 color-mix 生成 hover 背景色",
      "把传统 hex 品牌色逐步改造成变量 + color-mix"
    ]
  },
  {
    year: "2023",
    title: "2023 - 动态视口单位与安全区域",
    description: "svh、lvh、dvh 和 env() 解决移动端地址栏、底部手势区导致的全屏布局问题。",
    summary: "使用动态视口单位和 safe-area inset 构建更可靠的移动端全屏面板和底部工具栏。",
    exampleHtml: `<section class="mobile-shell">
  <main>练习内容</main>
  <nav>底部操作</nav>
</section>`,
    exampleCss: `.mobile-shell {
  display: grid;
  grid-template-rows: 1fr auto;
  min-height: 100dvh;
  background: #edf8f7;
}

.mobile-shell main {
  padding: 20px;
}

.mobile-shell nav {
  padding:
    12px
    max(16px, env(safe-area-inset-right))
    max(12px, env(safe-area-inset-bottom))
    max(16px, env(safe-area-inset-left));
  background: #133f5c;
  color: #ffffff;
  font-weight: 900;
}
`,
    exercise: [
      "把 100dvh 改成 100vh，比较移动浏览器地址栏变化时的差异",
      "尝试 100svh 和 100lvh，理解最小与最大视口高度",
      "为固定底部按钮增加 safe-area-inset-bottom 内边距"
    ]
  },
  {
    year: "2023",
    title: "2023 - :user-valid 与表单验证状态",
    description: ":user-valid 和 :user-invalid 只在用户交互后展示验证状态，比页面一加载就报错更友好。",
    summary: "使用用户验证伪类、错误提示和 :has() 构建少打扰但清晰的表单反馈。",
    exampleHtml: `<form class="validate-form">
  <label>
    邮箱
    <input type="email" required placeholder="name@example.com">
  </label>
  <p>请输入有效邮箱。</p>
</form>`,
    exampleCss: `.validate-form {
  display: grid;
  gap: 8px;
  width: min(100%, 340px);
}

.validate-form label {
  display: grid;
  gap: 6px;
  font-weight: 800;
}

.validate-form input {
  min-height: 44px;
  border: 1px solid #cfd8e3;
  border-radius: 8px;
  padding: 10px 12px;
  font: inherit;
}

.validate-form input:user-invalid {
  border-color: #b9472f;
}

.validate-form input:user-valid {
  border-color: #1b7f79;
}

.validate-form p {
  display: none;
  margin: 0;
  color: #b9472f;
}

.validate-form:has(input:user-invalid) p {
  display: block;
}
`,
    exercise: [
      "把 :user-invalid 改成 :invalid，比较页面初始状态差异",
      "为有效状态增加成功提示，但避免过度打扰",
      "使用 :has(input:user-invalid) 改变整个字段组边框"
    ]
  },
  {
    year: "2024",
    title: "2024 - @scope 局部作用域",
    description: "@scope 让一组样式限制在某个 DOM 范围内，减少组件间样式泄漏。",
    summary: "使用 @scope (.component) { ... } 管理局部样式和邻近覆盖。",
    exampleHtml: `<section class="scope-demo">
  <p>这个段落在作用域内。</p>
</section>
<p>这个段落在作用域外。</p>`,
    exampleCss: `p {
  color: #667085;
}

@scope (.scope-demo) {
  p {
    padding: 14px;
    border-radius: 10px;
    background: #edf8f7;
    color: #153f3c;
    font-weight: 800;
  }
}
`,
    exercise: [
      "把作用域根从 .scope-demo 改成 body，观察影响范围扩大",
      "在作用域外增加 p 样式，确认作用域内规则如何覆盖",
      "为一个局部组件写一组不会影响页面其他区域的样式"
    ]
  },
  {
    year: "2024",
    title: "2024 - text-wrap 与现代排版控制",
    description: "text-wrap: balance / pretty 让标题和段落换行更接近设计预期。",
    summary: "使用 text-wrap、hyphens、overflow-wrap 和 line-height 改善多行文本可读性。",
    exampleHtml: `<article class="type-card">
  <h2>现代 CSS 排版可以减少尴尬换行</h2>
  <p>合理的行高、换行策略和宽度限制能显著提升阅读体验。</p>
</article>`,
    exampleCss: `.type-card {
  max-inline-size: 420px;
  padding: 20px;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #dce3ed;
}

.type-card h2 {
  margin: 0 0 10px;
  text-wrap: balance;
  line-height: 1.15;
}

.type-card p {
  margin: 0;
  line-height: 1.7;
  text-wrap: pretty;
  color: #667085;
}
`,
    exercise: [
      "移除 text-wrap: balance，比较标题换行差异",
      "给长英文单词添加 overflow-wrap: anywhere",
      "把 line-height 改成无单位值，并观察段落阅读感"
    ]
  },
  {
    year: "2024",
    title: "2024 - Scroll-driven Animations 滚动驱动动画",
    description: "滚动驱动动画让动画进度跟随滚动位置，而不是固定时间，适合阅读进度、视差和入场效果。",
    summary: "使用 animation-timeline、scroll() 和 view() 把动画绑定到滚动容器或元素进入视口的过程。",
    exampleHtml: `<article class="scroll-story">
  <div class="progress"></div>
  <section>滚动阅读内容</section>
</article>`,
    exampleCss: `.scroll-story {
  max-height: 240px;
  overflow: auto;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.scroll-story .progress {
  position: sticky;
  top: 0;
  height: 6px;
  transform-origin: left;
  background: #1b7f79;
  animation: grow linear both;
  animation-timeline: scroll();
}

.scroll-story section {
  min-height: 520px;
  padding: 22px;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
`,
    exercise: [
      "把进度条改成垂直方向增长",
      "使用 animation-timeline: view() 为卡片进入视口添加淡入效果",
      "为 prefers-reduced-motion 用户关闭滚动驱动动画"
    ]
  },
  {
    year: "2024",
    title: "2024 - @property 与可动画变量",
    description: "@property 让自定义属性拥有类型、初始值和继承行为，从而可以参与平滑动画。",
    summary: "使用 @property 注册颜色、长度或数字变量，让主题色和组件状态可以被浏览器正确插值。",
    exampleHtml: `<button class="property-button">
  Hover me
</button>`,
    exampleCss: `@property --shine {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}

.property-button {
  --shine: 18%;
  padding: 14px 22px;
  border: 0;
  border-radius: 8px;
  background: linear-gradient(135deg, #133f5c, #1b7f79 var(--shine), #1f2937);
  color: #ffffff;
  font-weight: 900;
  transition: --shine 320ms ease;
}

.property-button:hover {
  --shine: 85%;
}
`,
    exercise: [
      "把 --shine 的 syntax 改成 <number>，观察百分比写法是否仍然合适",
      "注册一个 <color> 类型的变量，并用它驱动按钮背景变化",
      "移除 @property，比较自定义属性动画是否还能平滑过渡"
    ]
  },
  {
    year: "2024",
    title: "2024 - @starting-style 与离散过渡",
    description: "@starting-style 和 transition-behavior 让新插入元素、弹层和 display 切换拥有自然进出场。",
    summary: "用 @starting-style 定义首次渲染起点，用 allow-discrete 处理 display 这类离散属性。",
    exampleHtml: `<div class="enter-card">
  <strong>新消息</strong>
  <p>元素首次出现时也能拥有过渡动画。</p>
</div>`,
    exampleCss: `.enter-card {
  width: min(100%, 340px);
  padding: 18px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 240ms ease,
    transform 240ms ease,
    display 240ms allow-discrete;
}

@starting-style {
  .enter-card {
    opacity: 0;
    transform: translateY(16px);
  }
}

.enter-card p {
  margin: 8px 0 0;
  color: #667085;
}
`,
    exercise: [
      "把 translateY 改成 scale，做一个缩放入场效果",
      "给卡片增加退出状态，并使用 transition-behavior: allow-discrete",
      "思考弹窗、toast 和菜单分别适合怎样的 starting style"
    ]
  },
  {
    year: "2024",
    title: "2024 - light-dark 与主题系统",
    description: "light-dark() 配合 color-scheme 可以让颜色 token 同时响应浅色和深色模式。",
    summary: "使用语义变量、color-scheme 和 light-dark() 构建可维护的主题颜色体系。",
    exampleHtml: `<article class="theme-card">
  <h2>主题卡片</h2>
  <p>同一套变量适配浅色和深色环境。</p>
</article>`,
    exampleCss: `:root {
  color-scheme: light dark;
  --surface: light-dark(#ffffff, #111827);
  --text: light-dark(#1f2937, #f9fafb);
  --muted: light-dark(#667085, #a7b0c0);
  --border: light-dark(#dce3ed, #344054);
}

.theme-card {
  max-inline-size: 360px;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text);
}

.theme-card p {
  margin: 8px 0 0;
  color: var(--muted);
}
`,
    exercise: [
      "为按钮增加 --accent 语义色，并同时设置浅色和深色值",
      "移除 color-scheme，观察表单控件和滚动条的默认主题变化",
      "把直接写死的颜色替换成 surface、text、muted 这类语义变量"
    ]
  },
  {
    year: "2024",
    title: "2024 - backdrop-filter 与背景模糊",
    description: "backdrop-filter 可以处理元素背后的像素，常用于半透明导航、浮层和毛玻璃效果。",
    summary: "使用 backdrop-filter、透明背景和 @supports 回退，做出可读且性能克制的背景模糊界面。",
    exampleHtml: `<section class="glass-stage">
  <div class="glass-panel">Glass Panel</div>
</section>`,
    exampleCss: `.glass-stage {
  display: grid;
  min-height: 180px;
  place-items: center;
  border-radius: 12px;
  background:
    linear-gradient(135deg, rgba(19, 63, 92, 0.9), rgba(27, 127, 121, 0.75)),
    radial-gradient(circle at 20% 20%, #ffffff, transparent 30%);
}

.glass-panel {
  padding: 18px 24px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.72);
  color: #153f3c;
  font-weight: 900;
}

@supports (backdrop-filter: blur(12px)) {
  .glass-panel {
    background: rgba(255, 255, 255, 0.42);
    backdrop-filter: blur(12px) saturate(1.25);
  }
}
`,
    exercise: [
      "调低透明度，观察文字可读性如何变化",
      "使用 @supports not 为不支持 backdrop-filter 的浏览器提供纯色背景",
      "比较 filter 和 backdrop-filter 分别处理的是哪一层像素"
    ]
  },
  {
    year: "2025",
    title: "2025 - Anchor Positioning 锚点定位",
    description: "Anchor Positioning 让弹层、提示气泡和浮动控件可以相对锚点元素定位。",
    summary: "使用 anchor-name、position-anchor 和 position-area 表达触发器与弹层的关系。",
    exampleHtml: `<div class="anchor-demo">
  <button class="anchor-button">按钮</button>
  <div class="tooltip">提示内容</div>
</div>`,
    exampleCss: `.anchor-demo {
  position: relative;
  min-height: 150px;
}

.anchor-button {
  anchor-name: --trigger;
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 800;
}

.tooltip {
  position: absolute;
  position-anchor: --trigger;
  position-area: bottom center;
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #edf8f7;
  color: #153f3c;
}
`,
    exercise: [
      "把 position-area 改成 top center，观察提示层位置",
      "为 tooltip 添加最大宽度和阴影，让它更像真实弹层",
      "思考这个能力能替代哪些手写 JS 定位逻辑"
    ]
  },
  {
    year: "2025",
    title: "2025 - Popover、Top Layer 与弹层样式",
    description: "Popover API 让菜单、提示和轻量弹层进入浏览器管理的 top layer，减少手写层级逻辑。",
    summary: "使用 popover、:popover-open 和 ::backdrop 组合出可访问的原生弹层体验。",
    exampleHtml: `<button popovertarget="menu" class="menu-button">打开菜单</button>
<div id="menu" popover class="popover-menu">
  <button>编辑</button>
  <button>复制</button>
</div>`,
    exampleCss: `.menu-button {
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 800;
}

.popover-menu {
  min-width: 180px;
  padding: 10px;
  border: 1px solid #dce3ed;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
}

.popover-menu:popover-open {
  display: grid;
  gap: 6px;
}

.popover-menu button {
  padding: 10px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  text-align: left;
}

.popover-menu button:hover {
  background: #edf8f7;
}
`,
    exercise: [
      "给弹层增加 ::backdrop 背景，比较菜单和模态层的差异",
      "把 popover 菜单和 Anchor Positioning 组合，让菜单靠近按钮",
      "为 :popover-open 增加入场动画，并注意离散属性过渡"
    ]
  },
  {
    year: "2025",
    title: "2025 - View Transitions 视图过渡",
    description: "View Transitions 让页面或组件状态切换可以共享一套浏览器级转场机制。",
    summary: "使用 view-transition-name 标记关键元素，配合伪元素控制新旧视图的动画节奏。",
    exampleHtml: `<article class="view-card">
  <div class="view-cover">CSS</div>
  <h2>视图过渡</h2>
</article>`,
    exampleCss: `.view-card {
  width: min(100%, 340px);
  padding: 16px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.view-cover {
  display: grid;
  aspect-ratio: 16 / 9;
  place-items: center;
  border-radius: 8px;
  background: #edf8f7;
  color: #153f3c;
  font-weight: 900;
  view-transition-name: course-cover;
}

::view-transition-old(course-cover),
::view-transition-new(course-cover) {
  animation-duration: 360ms;
  animation-timing-function: ease;
}
`,
    exercise: [
      "给标题也添加 view-transition-name，并比较多个元素同时过渡的效果",
      "调整 ::view-transition-new 的动画时长，让新视图更慢出现",
      "思考列表到详情页的共享元素过渡应该标记哪些节点"
    ]
  },
  {
    year: "2025",
    title: "2025 - content-visibility 与渲染性能",
    description: "content-visibility 可以跳过屏幕外内容的渲染工作，让长页面和列表更轻快。",
    summary: "使用 content-visibility、contain-intrinsic-size 和 contain 控制浏览器渲染成本。",
    exampleHtml: `<section class="long-list">
  <article>第一段内容</article>
  <article>第二段内容</article>
  <article>第三段内容</article>
</section>`,
    exampleCss: `.long-list {
  display: grid;
  gap: 14px;
}

.long-list article {
  content-visibility: auto;
  contain-intrinsic-size: 120px;
  contain: layout paint style;
  padding: 22px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}
`,
    exercise: [
      "把 contain-intrinsic-size 改得过小，观察滚动高度估算的影响",
      "在长列表中只给屏幕外重内容使用 content-visibility",
      "比较 contain: layout paint style 和不设置 contain 的行为差异"
    ]
  }
];

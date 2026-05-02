export const lessons2023 = [
  {
    year: "2023",
    title: "2023 - 容器查询",
    description: "Container Queries 让组件根据自己的容器尺寸响应，而不是只看视口宽度。",
    summary: "使用 container-type 和 @container 构建真正可复用的响应式组件。",
    coreExplanation: [
      "容器查询让组件根据自身容器尺寸变化，而不是只看视口宽度，因此同一个组件放在侧栏和主栏都能自适应。",
      "要查询某个容器，先在容器上设置 container-type。常见值 inline-size 表示查询行内方向尺寸。",
      "@container 中的断点应该根据组件内容决定，而不是照搬页面级媒体查询断点。"
    ],
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
    coreExplanation: [
      "subgrid 让子网格沿某个轴继承父网格轨道，解决多张卡片内部标题、说明、按钮难以对齐的问题。",
      "父网格定义轨道，子元素 grid-row: span 3 后内部 grid-template-rows: subgrid，就能共享那几行。",
      "subgrid 适合对齐内容结构，不适合为了所有间距都完全一致而过度嵌套。"
    ],
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
    coreExplanation: [
      "CSS 嵌套把相关选择器放在同一个规则块里，减少重复写组件前缀。",
      "& 表示当前选择器本身，适合写 &:hover、&.active 这类状态。",
      "嵌套不要太深。超过两三层通常说明选择器依赖结构过强，会增加维护难度。"
    ],
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
    coreExplanation: [
      "oklch 用更接近人眼感知的方式表达颜色，调亮度和饱和度时比传统 HSL 更稳定。",
      "color-mix() 可以在指定颜色空间中混合两个颜色，适合从品牌色生成 hover、边框和浅色背景。",
      "现代颜色函数适合配合 CSS 变量使用，让主题系统可以通过少量 token 推导出多个状态色。"
    ],
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
    coreExplanation: [
      "svh、lvh、dvh 分别表示小视口、大视口和动态视口高度，用来解决移动端地址栏展开收起导致的 100vh 问题。",
      "env(safe-area-inset-*) 读取设备安全区域，避免底部按钮或顶部内容被刘海、圆角和手势区域遮挡。",
      "移动端全屏布局通常用 min-height: 100dvh，再给固定底部区域加 safe-area padding。"
    ],
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
    coreExplanation: [
      ":invalid 会在页面加载时立即匹配空的必填字段，可能过早显示错误。",
      ":user-invalid 和 :user-valid 更关注用户交互后的状态，适合减少一打开页面就满屏红色提示的问题。",
      "表单反馈要同时包含边框、文字提示和焦点状态，不能只靠颜色表达错误。"
    ],
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
  }
];

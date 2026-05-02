export const lessons2024 = [
  {
    year: "2024",
    title: "2024 - @scope 局部作用域",
    description: "@scope 让一组样式限制在某个 DOM 范围内，减少组件间样式泄漏。",
    summary: "使用 @scope (.component) { ... } 管理局部样式和邻近覆盖。",
    coreExplanation: [
      "@scope 把一组选择器限制在指定根元素范围内，减少样式泄漏到组件外部。",
      "作用域不会自动改变 HTML 结构，也不是 Shadow DOM。它只是改变选择器匹配范围和邻近覆盖关系。",
      "适合局部主题、文章内容样式和嵌入组件，但仍需要清楚的类名和层级组织。"
    ],
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
    coreExplanation: [
      "text-wrap: balance 会尽量平衡多行标题长度，减少最后一行只有一两个字的情况。",
      "text-wrap: pretty 更偏向正文可读性，尝试避免孤行和尴尬断行。",
      "排版控制要和 max-inline-size、line-height、overflow-wrap 一起看，单个属性不能解决所有换行问题。"
    ],
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
    coreExplanation: [
      "普通动画按时间推进，滚动驱动动画按滚动进度推进，因此用户滚到哪里动画就走到哪里。",
      "animation-timeline: scroll() 绑定滚动容器，view() 绑定元素进入和离开视口的过程。",
      "它很适合阅读进度和轻量入场，但不应让核心内容依赖动画才能被理解。"
    ],
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
    coreExplanation: [
      "@property 注册自定义属性的类型、初始值和继承行为，让浏览器知道它如何插值。",
      "未注册的自定义属性通常只能离散变化，注册为 <length>、<percentage>、<color> 后才能平滑过渡。",
      "注册的 syntax 必须和实际值匹配，否则声明会失效。百分比、长度和数字不能随意混用。"
    ],
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
    coreExplanation: [
      "@starting-style 定义元素首次进入渲染树时的起始样式，解决新插入元素没有旧值可过渡的问题。",
      "display、overlay 等离散属性不能像颜色一样连续插值，需要 transition-behavior: allow-discrete 参与。",
      "弹窗、popover、toast 和列表新增项都适合用它做进入动画，同时要控制退出状态。"
    ],
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
    coreExplanation: [
      "light-dark(浅色值, 深色值) 会根据当前 color-scheme 选择对应颜色。",
      "它适合写语义 token，例如 surface、text、border，而不是在每个组件中直接判断主题。",
      "color-scheme 声明环境能力，light-dark 提供具体值，两者配合才能形成更完整的原生主题方案。"
    ],
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
    coreExplanation: [
      "filter 处理元素自身像素，backdrop-filter 处理元素背后的像素，这是两者最重要的区别。",
      "要看到背景模糊，元素背景通常需要半透明；如果背景完全不透明，背后的像素被挡住就看不到效果。",
      "backdrop-filter 可能有性能成本，也可能不被某些环境支持，所以适合用 @supports 提供纯色回退。"
    ],
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
  }
];

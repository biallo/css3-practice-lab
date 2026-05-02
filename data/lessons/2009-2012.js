export const lessons2009To2012 = [
  {
    year: "2009",
    title: "2009 - 选择器与优先级",
    description: "从 CSS3 选择器开始，掌握类、属性、伪类和优先级的组合方式。",
    summary: "理解选择器匹配、权重计算和覆盖顺序，是后续组织大型 CSS 的基础。",
    exampleHtml: `<main id="app">
  <button class="btn primary" data-state="active">保存设置</button>
</main>`,
    exampleCss: `.btn {
  padding: 12px 20px;
  border: 1px solid #cfd8e3;
  border-radius: 8px;
  background: #ffffff;
  color: #344054;
}

.btn.primary {
  background: #133f5c;
  color: #ffffff;
}

#app .btn[data-state="active"] {
  border-color: #1b7f79;
  box-shadow: 0 0 0 4px rgba(27, 127, 121, 0.18);
}
`,
    exercise: [
      "判断 .btn、.btn.primary、#app .btn[data-state='active'] 哪个规则最终生效",
      "为按钮添加 :hover 状态，并保持 active 状态的边框不被覆盖",
      "把一个过度依赖 ID 的选择器改写成更容易复用的类选择器"
    ]
  },
  {
    year: "2009",
    title: "2009 - 圆角、阴影与现代盒子",
    description: "border-radius、box-shadow 和 box-sizing 让组件样式从图片切图走向纯 CSS。",
    summary: "用圆角、阴影和 border-box 构建稳定的卡片、按钮与提示框。",
    exampleHtml: `<article class="notice-card">
  <strong>课程提示</strong>
  <p>纯 CSS 就能完成卡片的圆角、边框和浮起效果。</p>
</article>`,
    exampleCss: `.notice-card {
  box-sizing: border-box;
  width: min(100%, 360px);
  padding: 20px;
  border: 1px solid #dce3ed;
  border-radius: 18px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
}

.notice-card p {
  margin: 8px 0 0;
  color: #667085;
}
`,
    exercise: [
      "把卡片圆角改成更克制的 8px，并观察整体气质变化",
      "添加一个轻微的内阴影，比较 inset 与普通阴影的视觉差别",
      "把 width 与 padding 组合在一起，观察 border-box 对尺寸计算的影响"
    ]
  },
  {
    year: "2010",
    title: "2010 - 背景、多背景与渐变",
    description: "CSS3 背景模块让渐变、叠加背景和背景裁切成为常规 UI 手段。",
    summary: "掌握 linear-gradient、background-size、background-position 和多背景叠加。",
    exampleHtml: `<section class="hero-tile">
  <h2>Gradient Layer</h2>
</section>`,
    exampleCss: `.hero-tile {
  width: min(100%, 420px);
  padding: 42px 24px;
  border-radius: 18px;
  color: #ffffff;
  text-align: center;
  background:
    radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.35), transparent 28%),
    linear-gradient(135deg, #133f5c, #1b7f79);
}

.hero-tile h2 {
  margin: 0;
}
`,
    exercise: [
      "把渐变方向改为 90deg，观察颜色流向变化",
      "增加第二层 radial-gradient，制造一个高光效果",
      "尝试 background-size: cover 与 contain，观察背景铺放差异"
    ]
  },
  {
    year: "2011",
    title: "2011 - 媒体查询与响应式布局",
    description: "Media Queries 让样式可以根据屏幕宽度、方向和用户偏好进行响应。",
    summary: "使用 max-width、min-width 和 prefers-reduced-motion 建立移动优先的响应式规则。",
    exampleHtml: `<div class="responsive-grid">
  <div>导航</div>
  <div>内容</div>
  <div>工具</div>
</div>`,
    exampleCss: `.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.responsive-grid > div {
  padding: 18px;
  border-radius: 12px;
  background: #edf8f7;
}

@media (min-width: 640px) {
  .responsive-grid {
    grid-template-columns: 160px 1fr 120px;
  }
}
`,
    exercise: [
      "把断点从 640px 改为 800px，观察布局切换时机",
      "增加一个在小屏隐藏工具栏的规则",
      "使用 prefers-reduced-motion 关闭后续动画效果"
    ]
  },
  {
    year: "2011",
    title: "2011 - @media print 打印样式",
    description: "打印样式让网页在纸张、PDF 和发票场景中保持清晰，避免导航、背景和交互控件干扰内容。",
    summary: "使用 @media print、@page、break-inside 和 print-color-adjust 控制打印布局与分页。",
    exampleHtml: `<article class="print-report">
  <h2>课程报告</h2>
  <p>这段内容适合打印或导出为 PDF。</p>
  <button>页面按钮</button>
</article>`,
    exampleCss: `.print-report {
  max-width: 520px;
  padding: 20px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

@media print {
  @page {
    margin: 18mm;
  }

  .print-report {
    border: 0;
    padding: 0;
    print-color-adjust: exact;
    break-inside: avoid;
  }

  .print-report button {
    display: none;
  }
}
`,
    exercise: [
      "隐藏导航、按钮和阴影，只保留正文内容",
      "为长卡片添加 break-inside: avoid，减少分页切断",
      "设置 @page margin，观察 PDF 边距变化"
    ]
  },
  {
    year: "2012",
    title: "2012 - Flexbox 一维布局",
    description: "Flexbox 解决一行或一列中的对齐、分布、伸缩和换行问题。",
    summary: "通过主轴、侧轴、gap、flex 和 align-items 构建常见导航、工具栏和卡片行。",
    exampleHtml: `<nav class="toolbar">
  <a>课程</a>
  <a>练习</a>
  <a>复盘</a>
</nav>`,
    exampleCss: `.toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.toolbar a {
  padding: 10px 14px;
  border-radius: 999px;
  background: #edf8f7;
  color: #153f3c;
  font-weight: 800;
}
`,
    exercise: [
      "把 justify-content 改成 space-between，观察项目分布变化",
      "让第三个项目占据剩余空间，并保持文字居中",
      "开启 flex-wrap 后增加更多项目，观察换行行为"
    ]
  },
  {
    year: "2012",
    title: "2012 - 过渡与变换",
    description: "transition 与 transform 让 hover、focus 和状态切换拥有轻量动效。",
    summary: "使用 transform 做位移、缩放和旋转，再用 transition 控制变化节奏。",
    exampleHtml: `<button class="motion-button">悬停查看</button>`,
    exampleCss: `.motion-button {
  min-height: 44px;
  padding: 12px 20px;
  border: 0;
  border-radius: 999px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.motion-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 16px 30px rgba(19, 63, 92, 0.24);
}
`,
    exercise: [
      "把 hover 位移从 -3px 改成 -1px，比较反馈强度",
      "增加 focus-visible 状态，让键盘用户也有清晰反馈",
      "使用 rotate 或 scale 做一个更明显但不过度的交互动效"
    ]
  },
  {
    year: "2012",
    title: "2012 - 3D Transform 与 perspective",
    description: "3D transform 让元素拥有空间旋转、透视和翻转效果，适合卡片背面、封面展示和轻量空间层次。",
    summary: "使用 perspective、transform-style、rotateY 和 backface-visibility 构建可控的 3D 交互。",
    exampleHtml: `<div class="flip-card">
  <div class="flip-inner">
    <div class="front">Front</div>
    <div class="back">Back</div>
  </div>
</div>`,
    exampleCss: `.flip-card {
  width: 220px;
  height: 140px;
  perspective: 800px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 420ms ease;
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 12px;
  backface-visibility: hidden;
  font-weight: 900;
}

.front {
  background: #edf8f7;
  color: #153f3c;
}

.back {
  background: #133f5c;
  color: #ffffff;
  transform: rotateY(180deg);
}
`,
    exercise: [
      "把 rotateY 改成 rotateX，观察翻转方向",
      "调整 perspective 数值，比较透视强弱",
      "为 prefers-reduced-motion 用户禁用翻转动画"
    ]
  },
  {
    year: "2012",
    title: "2012 - 关键帧动画",
    description: "@keyframes 和 animation 让 CSS 可以表达循环、阶段性和独立运行的动画。",
    summary: "理解关键帧、时长、循环次数、方向和缓动函数之间的配合。",
    exampleHtml: `<div class="pulse-badge">CSS</div>`,
    exampleCss: `.pulse-badge {
  display: grid;
  width: 96px;
  height: 96px;
  place-items: center;
  border-radius: 50%;
  background: #1b7f79;
  color: #ffffff;
  font-weight: 900;
  animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}
`,
    exercise: [
      "把动画改成 3 秒一次，观察节奏变化",
      "为 50% 关键帧增加 box-shadow，做出呼吸发光效果",
      "加入 prefers-reduced-motion，让用户偏好减少动画时禁用循环"
    ]
  },
  {
    year: "2012",
    title: "2012 - 层叠上下文与 z-index",
    description: "z-index 只有在正确的层叠上下文中才会按预期工作，transform、opacity 和 position 都可能创建新的上下文。",
    summary: "理解 stacking context、定位元素和 isolation，解决弹层、遮罩、阴影被盖住的问题。",
    exampleHtml: `<div class="stack-stage">
  <article class="stack-card">Card</article>
  <div class="stack-popover">Popover</div>
</div>`,
    exampleCss: `.stack-stage {
  position: relative;
  isolation: isolate;
  min-height: 160px;
  padding: 24px;
  border-radius: 12px;
  background: #edf8f7;
}

.stack-card {
  position: relative;
  z-index: 1;
  width: 180px;
  padding: 28px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.14);
}

.stack-popover {
  position: absolute;
  z-index: 2;
  inset: 64px auto auto 120px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 900;
}
`,
    exercise: [
      "把 .stack-card 的 z-index 调高到 3，观察它是否盖住弹层",
      "给父元素添加 opacity: 0.99，思考它为什么会影响层叠关系",
      "使用 isolation: isolate 为组件创建独立的层叠边界"
    ]
  }
];

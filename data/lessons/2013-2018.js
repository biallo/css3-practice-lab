export const lessons2013To2018 = [
  {
    year: "2013",
    title: "2013 - 滤镜与混合模式",
    description: "filter 与 mix-blend-mode 让图像处理和图层混合进入 CSS。",
    summary: "使用 blur、grayscale、drop-shadow 和 blend mode 做视觉状态与图层效果。",
    exampleHtml: `<div class="filter-card">
  <span>Filter</span>
</div>`,
    exampleCss: `.filter-card {
  display: grid;
  width: 220px;
  height: 140px;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, #133f5c, #b9472f);
  color: #ffffff;
  font-weight: 900;
  filter: drop-shadow(0 16px 28px rgba(19, 63, 92, 0.24));
}

.filter-card:hover {
  filter: grayscale(1) drop-shadow(0 16px 28px rgba(19, 63, 92, 0.18));
}
`,
    exercise: [
      "把 hover 的 grayscale 改成 blur，观察可读性变化",
      "增加 saturate 或 contrast，做一个强调状态",
      "使用 drop-shadow 替代 box-shadow，观察它如何跟随透明形状"
    ]
  },
  {
    year: "2013",
    title: "2013 - pointer-events 与交互穿透",
    description: "pointer-events 可以控制元素是否响应鼠标和触摸事件，常用于覆盖层、装饰层和禁用状态。",
    summary: "使用 pointer-events: none 让装饰元素不拦截点击，或配合状态类管理交互区域。",
    exampleHtml: `<div class="media-link">
  <a href="#">打开课程</a>
  <span class="shine"></span>
</div>`,
    exampleCss: `.media-link {
  position: relative;
  display: inline-grid;
  padding: 18px 26px;
  border-radius: 12px;
  background: #133f5c;
}

.media-link a {
  position: relative;
  z-index: 1;
  color: #ffffff;
  font-weight: 900;
  text-decoration: none;
}

.media-link .shine {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.35));
  pointer-events: none;
}
`,
    exercise: [
      "移除 pointer-events: none，观察装饰层是否影响链接点击",
      "给禁用按钮设置 pointer-events: none，并补充视觉禁用状态",
      "思考哪些覆盖层应该接收点击，哪些只应该作为视觉装饰"
    ]
  },
  {
    year: "2014",
    title: "2014 - 伪元素与 CSS Counters",
    description: "::before、::after 和 counter() 可以生成装饰、编号和步骤标记，而不污染 HTML 结构。",
    summary: "使用伪元素创建视觉层，用 CSS 计数器自动编号列表、章节和流程步骤。",
    exampleHtml: `<ol class="counter-list">
  <li>阅读知识点</li>
  <li>修改示例代码</li>
  <li>完成练习复盘</li>
</ol>`,
    exampleCss: `.counter-list {
  counter-reset: lesson;
  display: grid;
  gap: 12px;
  padding: 0;
  list-style: none;
}

.counter-list li {
  counter-increment: lesson;
  position: relative;
  padding: 14px 14px 14px 54px;
  border: 1px solid #dce3ed;
  border-radius: 10px;
  background: #ffffff;
}

.counter-list li::before {
  content: counter(lesson);
  position: absolute;
  inset: 10px auto auto 12px;
  display: grid;
  width: 28px;
  height: 28px;
  place-items: center;
  border-radius: 50%;
  background: #1b7f79;
  color: #ffffff;
  font-weight: 900;
}
`,
    exercise: [
      "把编号格式改成 01、02、03",
      "使用 ::after 为当前步骤增加一个小标签",
      "思考哪些内容适合用伪元素生成，哪些必须保留在 HTML 中"
    ]
  },
  {
    year: "2014",
    title: "2014 - CSS 自定义属性",
    description: "Custom Properties 让变量成为浏览器原生能力，可以参与继承和运行时主题切换。",
    summary: "用 --token 定义颜色、间距和圆角，再通过 var() 在组件中复用。",
    exampleHtml: `<article class="theme-card">
  <h2>Design Token</h2>
  <p>变量让主题更容易维护。</p>
</article>`,
    exampleCss: `:root {
  --card-bg: #edf8f7;
  --card-text: #153f3c;
  --card-radius: 18px;
}

.theme-card {
  padding: 22px;
  border-radius: var(--card-radius);
  background: var(--card-bg);
  color: var(--card-text);
}

.theme-card h2,
.theme-card p {
  margin: 0;
}
`,
    exercise: [
      "新增 --space 变量，并把它用于卡片 padding",
      "创建 .theme-card.dark 覆盖颜色变量，完成暗色卡片",
      "把重复出现的颜色值改写成变量"
    ]
  },
  {
    year: "2014",
    title: "2014 - 视口单位与全屏区域",
    description: "vw、vh、vmin 和 vmax 让元素可以根据视口尺寸计算，适合全屏区块和响应式比例。",
    summary: "使用视口单位控制首屏高度、横向宽度和流体字号，并理解它与百分比的差异。",
    exampleHtml: `<section class="viewport-panel">
  <h2>Viewport Units</h2>
  <p>尺寸直接参考浏览器视口。</p>
</section>`,
    exampleCss: `.viewport-panel {
  min-height: 60vh;
  width: min(100%, 82vw);
  padding: 8vmin;
  border-radius: 16px;
  background: #edf8f7;
  color: #153f3c;
}

.viewport-panel h2 {
  margin: 0 0 10px;
  font-size: clamp(1.6rem, 6vw, 3rem);
}

.viewport-panel p {
  margin: 0;
}
`,
    exercise: [
      "把 min-height 改成 100vh，观察首屏占用",
      "分别尝试 vw、vh、vmin、vmax 控制 padding",
      "使用 max-width 限制 82vw 在大屏上过宽的问题"
    ]
  },
  {
    year: "2015",
    title: "2015 - calc 与现代长度单位",
    description: "calc()、视口单位和 clamp() 让尺寸可以在固定值和弹性值之间组合。",
    summary: "使用 calc、min、max、clamp、vw 和 rem 写出更稳定的响应式尺寸。",
    exampleHtml: `<div class="fluid-panel">
  <h2>Fluid Size</h2>
  <p>宽度和字体随容器变化，但仍有上下限。</p>
</div>`,
    exampleCss: `.fluid-panel {
  width: min(100%, calc(320px + 12vw));
  padding: clamp(16px, 4vw, 32px);
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #dce3ed;
}

.fluid-panel h2 {
  margin: 0 0 8px;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
}

.fluid-panel p {
  margin: 0;
  color: #667085;
}
`,
    exercise: [
      "把 padding 的最小值改成 12px，观察小屏间距",
      "使用 max() 保证按钮至少 44px 高",
      "用 clamp() 给标题设置一个不会过大也不会过小的字号"
    ]
  },
  {
    year: "2015",
    title: "2015 - min、max 与 clamp 响应式尺寸",
    description: "min()、max() 和 clamp() 可以把响应式规则写进单个属性，减少断点数量。",
    summary: "用 clamp 设置流体字号和间距，用 min/max 约束宽度、高度与触控目标尺寸。",
    exampleHtml: `<article class="fluid-type">
  <h2>流体标题</h2>
  <p>字号、间距和宽度都在合理范围内自动变化。</p>
</article>`,
    exampleCss: `.fluid-type {
  width: min(100%, 48rem);
  padding: clamp(16px, 5vw, 40px);
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.fluid-type h2 {
  margin: 0 0 max(8px, 1.5vw);
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.1;
}

.fluid-type p {
  margin: 0;
  color: #667085;
}
`,
    exercise: [
      "把标题最大字号从 3rem 改成 2.4rem，观察桌面效果",
      "使用 max(44px, 2.75rem) 保证按钮触控高度",
      "把一个媒体查询控制的字号改写成 clamp()"
    ]
  },
  {
    year: "2015",
    title: "2015 - @supports 与渐进增强",
    description: "@supports 可以检测浏览器是否支持某个 CSS 特性，让新能力以增强方式加入页面。",
    summary: "使用 @supports 包裹新语法，先提供稳定基础样式，再为支持的浏览器启用现代布局和效果。",
    exampleHtml: `<article class="support-card">
  <h2>渐进增强</h2>
  <p>基础样式先可用，新能力再增强。</p>
</article>`,
    exampleCss: `.support-card {
  max-width: 360px;
  padding: 18px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

@supports (display: grid) {
  .support-card {
    display: grid;
    gap: 8px;
  }
}

@supports selector(:has(*)) {
  .support-card:has(h2) {
    border-color: #1b7f79;
  }
}
`,
    exercise: [
      "为不支持某个新特性的浏览器保留基础布局",
      "使用 @supports not (...) 写一个回退样式",
      "用 @supports selector(:has(*)) 包裹一段 :has() 规则"
    ]
  },
  {
    year: "2015",
    title: "2015 - CSS 回退关键字与重置",
    description: "initial、inherit、unset、revert 和 revert-layer 可以精确控制属性回到哪个来源或层级。",
    summary: "理解 CSS 全局关键字，用 revert-layer 配合级联层写出更可控的重置和组件覆盖。",
    exampleHtml: `<section class="reset-demo">
  <button class="reset-button">默认按钮</button>
  <button class="reset-button plain">重置按钮</button>
</section>`,
    exampleCss: `@layer base, components;

@layer base {
  button {
    font: inherit;
  }
}

@layer components {
  .reset-button {
    padding: 12px 18px;
    border: 0;
    border-radius: 8px;
    background: #133f5c;
    color: #ffffff;
    font-weight: 900;
  }

  .reset-button.plain {
    background: revert-layer;
    color: inherit;
    border: 1px solid #cfd8e3;
  }
}
`,
    exercise: [
      "分别尝试 initial、inherit、unset 和 revert 的差异",
      "把 plain 按钮的 color 改成 revert-layer，观察层级回退",
      "为一个组件写只重置当前层样式的规则"
    ]
  },
  {
    year: "2016",
    title: "2016 - object-fit 与媒体裁切",
    description: "object-fit 让图片和视频像背景图一样裁切，同时保留语义化媒体元素。",
    summary: "使用 object-fit: cover、object-position 和 aspect-ratio 构建稳定的封面、头像和缩略图。",
    exampleHtml: `<figure class="cover-card">
  <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" alt="桌面上的代码编辑器">
  <figcaption>课程封面</figcaption>
</figure>`,
    exampleCss: `.cover-card {
  width: min(100%, 360px);
  margin: 0;
}

.cover-card img {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
}

.cover-card figcaption {
  margin-top: 10px;
  color: #667085;
}
`,
    exercise: [
      "把 object-fit 改成 contain，比较留白和裁切差异",
      "调整 object-position 到 left top，观察焦点位置",
      "用同样方法制作一个正方形头像裁切"
    ]
  },
  {
    year: "2016",
    title: "2016 - CSS Mask 与 clip-path 裁切",
    description: "clip-path 和 mask 让元素可以被裁成多边形、圆形或渐隐形状，减少额外图片素材。",
    summary: "使用 clip-path 做几何裁切，用 mask-image 做透明渐隐和复杂视觉边界。",
    exampleHtml: `<div class="cutout-card">
  <span>CSS Shape</span>
</div>`,
    exampleCss: `.cutout-card {
  display: grid;
  width: 260px;
  height: 150px;
  place-items: center;
  clip-path: polygon(0 0, 100% 0, 88% 100%, 0 86%);
  background: linear-gradient(135deg, #133f5c, #1b7f79);
  color: #ffffff;
  font-weight: 900;
}

.cutout-card:hover {
  clip-path: circle(42% at 50% 50%);
}
`,
    exercise: [
      "把 polygon 改成 inset()，做一个斜角减少的版本",
      "使用 circle() 或 ellipse() 制作圆形裁切",
      "为裁切变化添加 transition，观察哪些形状能平滑过渡"
    ]
  },
  {
    year: "2017",
    title: "2017 - Grid 二维布局",
    description: "CSS Grid 让行列、区域和复杂页面结构成为 CSS 原生能力。",
    summary: "使用 grid-template-columns、minmax、repeat、gap 和 grid-column 组织二维布局。",
    exampleHtml: `<section class="dashboard">
  <div class="wide">统计</div>
  <div>课程</div>
  <div>练习</div>
</section>`,
    exampleCss: `.dashboard {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.dashboard > div {
  padding: 20px;
  border-radius: 12px;
  background: #edf8f7;
}

.dashboard .wide {
  grid-column: 1 / -1;
  background: #133f5c;
  color: #ffffff;
}
`,
    exercise: [
      "把网格改成三列，并让统计卡片仍然跨满整行",
      "使用 minmax(180px, 1fr) 创建自适应卡片网格",
      "尝试 grid-template-areas 重写这个布局"
    ]
  },
  {
    year: "2017",
    title: "2017 - Intrinsic Sizing 内在尺寸",
    description: "min-content、max-content 和 fit-content 让元素尺寸由内容自身决定，适合标签、菜单和自适应卡片。",
    summary: "使用内在尺寸关键字控制收缩、扩展和最大可用宽度，减少魔法数字和多余断点。",
    exampleHtml: `<div class="intrinsic-row">
  <span>CSS</span>
  <strong>Intrinsic sizing keeps content readable</strong>
</div>`,
    exampleCss: `.intrinsic-row {
  display: grid;
  grid-template-columns: max-content minmax(min-content, 1fr);
  gap: 12px;
  width: min(100%, 420px);
  padding: 16px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.intrinsic-row span {
  inline-size: fit-content;
  padding: 8px 10px;
  border-radius: 999px;
  background: #edf8f7;
  color: #153f3c;
  font-weight: 900;
}

.intrinsic-row strong {
  min-inline-size: 0;
}
`,
    exercise: [
      "把 max-content 改成 min-content，观察第一列如何收缩",
      "使用 fit-content(220px) 限制一个提示框宽度",
      "给长文本增加 overflow-wrap，配合 min-content 观察折行"
    ]
  },
  {
    year: "2017",
    title: "2017 - position: sticky 粘性定位",
    description: "sticky 让元素在普通文档流和固定定位之间切换，常用于分组标题、侧边目录和工具栏。",
    summary: "使用 position: sticky 配合 top、滚动容器和背景层级创建稳定的粘性区域。",
    exampleHtml: `<section class="sticky-list">
  <h2>本章目录</h2>
  <p>选择器</p>
  <p>布局</p>
  <p>动画</p>
</section>`,
    exampleCss: `.sticky-list {
  max-height: 220px;
  overflow: auto;
  border: 1px solid #dce3ed;
  border-radius: 12px;
}

.sticky-list h2 {
  position: sticky;
  top: 0;
  margin: 0;
  padding: 12px 14px;
  background: #133f5c;
  color: #ffffff;
}

.sticky-list p {
  margin: 0;
  padding: 18px 14px;
  border-top: 1px solid #dce3ed;
}
`,
    exercise: [
      "把 top 改成 12px，观察粘住的位置变化",
      "移除滚动容器的 overflow，比较 sticky 参考哪个滚动区域",
      "为多个分组标题创建连续的 sticky 效果"
    ]
  },
  {
    year: "2018",
    title: "2018 - 逻辑属性与书写模式",
    description: "Logical Properties 让间距、尺寸和边框跟随书写方向，而不是固定 left/right/top/bottom。",
    summary: "使用 margin-inline、padding-block、inline-size 和 border-inline-start 写国际化友好的样式。",
    exampleHtml: `<article class="logical-note">
  <strong>逻辑属性</strong>
  <p>这类写法更适合多语言和不同书写方向。</p>
</article>`,
    exampleCss: `.logical-note {
  inline-size: min(100%, 360px);
  padding-block: 18px;
  padding-inline: 20px;
  border-inline-start: 5px solid #1b7f79;
  border-radius: 8px;
  background: #ffffff;
}

.logical-note p {
  margin-block: 8px 0;
  color: #667085;
}
`,
    exercise: [
      "把 padding-left/right 改写成 padding-inline",
      "使用 margin-block 控制段落上下间距",
      "尝试 direction: rtl，观察 border-inline-start 的位置变化"
    ]
  },
  {
    year: "2018",
    title: "2018 - 滚动行为与滚动边距",
    description: "scroll-behavior、scroll-padding 和 overscroll-behavior 让页面滚动更可控，尤其适合锚点导航。",
    summary: "使用平滑滚动、滚动内边距和滚动链控制，减少固定导航遮挡和滚动穿透问题。",
    exampleHtml: `<main class="scroll-page">
  <nav><a href="#part-a">跳到 A</a></nav>
  <section id="part-a">章节 A</section>
</main>`,
    exampleCss: `.scroll-page {
  scroll-behavior: smooth;
  scroll-padding-top: 72px;
  overscroll-behavior: contain;
}

.scroll-page nav {
  position: sticky;
  top: 0;
  padding: 12px;
  background: #ffffff;
  border-bottom: 1px solid #dce3ed;
}

.scroll-page section {
  min-height: 220px;
  padding: 24px;
  background: #edf8f7;
}
`,
    exercise: [
      "移除 scroll-padding-top，观察锚点是否被粘性导航遮挡",
      "把 overscroll-behavior 改成 auto，比较边界滚动传递",
      "为多个章节增加 scroll-margin-top，处理单个目标的偏移"
    ]
  },
  {
    year: "2018",
    title: "2018 - prefers-reduced-motion 动画可访问性",
    description: "prefers-reduced-motion 让页面尊重用户减少动画的系统偏好，降低眩晕和干扰。",
    summary: "使用媒体查询为动画、滚动和转场提供更温和或关闭的替代样式。",
    exampleHtml: `<button class="motion-button">
  保存设置
</button>`,
    exampleCss: `.motion-button {
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #1b7f79;
  color: #ffffff;
  font-weight: 900;
  transition: transform 240ms ease;
}

.motion-button:hover {
  transform: translateY(-3px) scale(1.03);
}

@media (prefers-reduced-motion: reduce) {
  .motion-button {
    transition: none;
  }

  .motion-button:hover {
    transform: none;
  }
}
`,
    exercise: [
      "把动画改成透明度变化，并为 reduced motion 提供静态状态",
      "为页面的 scroll-behavior 在 reduced motion 下改成 auto",
      "检查一个现有动画，判断它是否需要减少动态版本"
    ]
  },
  {
    year: "2018",
    title: "2018 - Web Fonts 与可变字体",
    description: "@font-face、font-display 和 font-variation-settings 决定字体如何加载、回退和表达不同字重字宽。",
    summary: "使用 font-display 控制字体加载体验，用可变字体轴减少文件数量并提升排版弹性。",
    exampleHtml: `<article class="font-card">
  <h2>Variable Fonts</h2>
  <p>字体加载也会影响性能和阅读体验。</p>
</article>`,
    exampleCss: `@font-face {
  font-family: "Course Sans";
  src: local("Inter");
  font-display: swap;
}

.font-card {
  max-width: 380px;
  padding: 20px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
  font-family: "Course Sans", system-ui, sans-serif;
}

.font-card h2 {
  margin: 0 0 8px;
  font-variation-settings: "wght" 760;
}

.font-card p {
  margin: 0;
  color: #667085;
}
`,
    exercise: [
      "把 font-display 改成 optional，比较字体加载策略含义",
      "为标题设置不同 font-weight，观察可变字体的连续变化",
      "设计一组 system-ui 回退字体，减少字体加载失败的视觉跳动"
    ]
  }
];

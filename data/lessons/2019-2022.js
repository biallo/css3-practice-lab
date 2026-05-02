export const lessons2019To2022 = [
  {
    year: "2019",
    title: "2019 - Scroll Snap 滚动吸附",
    description: "Scroll Snap 用 CSS 控制滚动停靠点，常用于横向卡片、轮播和章节阅读。",
    summary: "通过 scroll-snap-type、scroll-snap-align 和 overflow 构建可控的滚动体验。",
    exampleHtml: `<div class="snap-row">
  <section>01</section>
  <section>02</section>
  <section>03</section>
</div>`,
    exampleCss: `.snap-row {
  display: flex;
  gap: 14px;
  width: min(100%, 420px);
  overflow-x: auto;
  scroll-snap-type: x mandatory;
}

.snap-row section {
  display: grid;
  flex: 0 0 220px;
  height: 120px;
  place-items: center;
  border-radius: 14px;
  background: #edf8f7;
  color: #153f3c;
  scroll-snap-align: start;
  font-weight: 900;
}
`,
    exercise: [
      "把 scroll-snap-align 改成 center，观察停靠位置",
      "把 mandatory 改成 proximity，比较滚动手感",
      "让每个卡片宽度改为 80%，观察移动端效果"
    ]
  },
  {
    year: "2020",
    title: "2020 - aspect-ratio 固定比例",
    description: "aspect-ratio 让图片、视频和卡片占位可以稳定保持比例，减少布局跳动。",
    summary: "使用 aspect-ratio 配合 width、object-fit 和 grid 构建稳定媒体区域。",
    exampleHtml: `<figure class="ratio-card">
  <div class="media">16 / 9</div>
  <figcaption>稳定比例区域</figcaption>
</figure>`,
    exampleCss: `.ratio-card {
  width: min(100%, 360px);
  margin: 0;
}

.ratio-card .media {
  display: grid;
  aspect-ratio: 16 / 9;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #133f5c, #1b7f79);
  color: #ffffff;
  font-weight: 900;
}

.ratio-card figcaption {
  margin-top: 10px;
  color: #667085;
}
`,
    exercise: [
      "把比例改成 1 / 1，观察卡片变成正方形",
      "创建 4 / 3 的图片占位区域",
      "结合 object-fit: cover 处理真实图片裁切"
    ]
  },
  {
    year: "2020",
    title: "2020 - :focus-visible 与可访问性状态",
    description: ":focus-visible 可以区分键盘焦点和鼠标点击，让焦点环既清晰又不过度打扰。",
    summary: "使用 :focus-visible、:focus-within 和 outline 构建键盘友好的交互反馈。",
    exampleHtml: `<form class="focus-form">
  <label>
    邮箱
    <input type="email" placeholder="name@example.com">
  </label>
  <button>订阅</button>
</form>`,
    exampleCss: `.focus-form {
  display: grid;
  gap: 12px;
  width: min(100%, 340px);
}

.focus-form label {
  display: grid;
  gap: 6px;
  color: #344054;
  font-weight: 800;
}

.focus-form input,
.focus-form button {
  min-height: 44px;
  border: 1px solid #cfd8e3;
  border-radius: 8px;
  padding: 10px 12px;
  font: inherit;
}

.focus-form:focus-within {
  color: #153f3c;
}

.focus-form input:focus-visible,
.focus-form button:focus-visible {
  outline: 4px solid rgba(27, 127, 121, 0.24);
  outline-offset: 2px;
}
`,
    exercise: [
      "把 :focus-visible 改成 :focus，比较鼠标点击时的差异",
      "为错误输入增加 :invalid 与 :focus-visible 的组合样式",
      "检查按钮、链接、输入框是否都有清楚的键盘焦点"
    ]
  },
  {
    year: "2020",
    title: "2020 - Box Alignment 对齐简写",
    description: "Box Alignment 统一了 Grid、Flex 和块布局中的对齐能力，让居中和分布写法更一致。",
    summary: "使用 place-items、place-content、justify-content 和 align-items 快速表达主轴与交叉轴对齐。",
    exampleHtml: `<div class="align-stage">
  <button>Center</button>
</div>`,
    exampleCss: `.align-stage {
  display: grid;
  width: min(100%, 320px);
  min-height: 180px;
  place-items: center;
  border: 1px dashed #9aa8bb;
  border-radius: 12px;
  background: #f8fafc;
}

.align-stage button {
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 900;
}
`,
    exercise: [
      "把 place-items 拆成 align-items 和 justify-items",
      "改用 display: flex，并使用 justify-content 与 align-items 居中",
      "尝试 place-content: center，观察它和 place-items 的差异"
    ]
  },
  {
    year: "2020",
    title: "2020 - forced-colors 与高对比度适配",
    description: "forced-colors 和 prefers-contrast 帮助页面适配系统高对比度、强制颜色和辅助阅读环境。",
    summary: "使用系统颜色、可见边框和媒体查询，让按钮、卡片和焦点状态在辅助模式下依然清楚。",
    exampleHtml: `<button class="contrast-button">
  继续练习
</button>`,
    exampleCss: `.contrast-button {
  min-height: 44px;
  padding: 12px 18px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 900;
}

.contrast-button:focus-visible {
  outline: 3px solid #1b7f79;
  outline-offset: 3px;
}

@media (forced-colors: active) {
  .contrast-button {
    border-color: ButtonText;
    background: ButtonFace;
    color: ButtonText;
  }

  .contrast-button:focus-visible {
    outline-color: Highlight;
  }
}
`,
    exercise: [
      "把透明边框改成可见边框，比较普通模式和强制颜色模式",
      "使用 Canvas、CanvasText、ButtonFace 等系统颜色",
      "检查仅靠背景色区分状态的组件是否还足够清楚"
    ]
  },
  {
    year: "2021",
    title: "2021 - Flex gap 与布局间距统一",
    description: "gap 从 Grid 扩展到 Flex 后，列表、按钮组和工具栏间距更容易维护。",
    summary: "使用 gap 替代 margin hack，让布局间距由容器统一控制。",
    exampleHtml: `<div class="action-row">
  <button>保存</button>
  <button>预览</button>
  <button>发布</button>
</div>`,
    exampleCss: `.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
}

.action-row button {
  min-height: 44px;
  border: 1px solid #cfd8e3;
  border-radius: 8px;
  padding: 10px 14px;
  background: #ffffff;
  color: #344054;
  font-weight: 800;
}
`,
    exercise: [
      "把行间距和列间距设置成不同值",
      "移除按钮上的 margin，改由容器 gap 控制",
      "让按钮组换行后仍保持一致间距"
    ]
  },
  {
    year: "2021",
    title: "2021 - accent-color 与原生表单美化",
    description: "accent-color 可以用一行 CSS 改变复选框、单选框和滑块等原生控件的强调色。",
    summary: "使用 accent-color 保留浏览器原生可访问性，同时让表单控件贴近品牌色。",
    exampleHtml: `<fieldset class="accent-form">
  <label><input type="checkbox" checked> 接收练习提醒</label>
  <label><input type="radio" name="level" checked> 入门</label>
  <input type="range" value="70">
</fieldset>`,
    exampleCss: `.accent-form {
  display: grid;
  gap: 12px;
  width: min(100%, 320px);
  padding: 16px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  accent-color: #1b7f79;
}

.accent-form label {
  display: flex;
  gap: 10px;
  align-items: center;
  color: #344054;
  font-weight: 800;
}
`,
    exercise: [
      "把 accent-color 改成品牌色变量",
      "比较 accent-color 和完全自定义 checkbox 的维护成本",
      "为不同 fieldset 设置不同 accent-color，观察控件继承"
    ]
  },
  {
    year: "2021",
    title: "2021 - scrollbar-gutter 与滚动条稳定",
    description: "scrollbar-gutter 可以提前为滚动条预留空间，减少内容高度变化时的横向跳动。",
    summary: "使用 scrollbar-gutter、scrollbar-color 和 overflow 让滚动区域更稳定也更易读。",
    exampleHtml: `<div class="stable-scroll">
  <p>内容可能变长，也可能刚好不需要滚动条。</p>
  <p>预留滚动条空间可以减少布局晃动。</p>
</div>`,
    exampleCss: `.stable-scroll {
  max-height: 150px;
  overflow: auto;
  scrollbar-gutter: stable;
  scrollbar-color: #9aa8bb transparent;
  padding: 16px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.stable-scroll p {
  margin: 0 0 18px;
  color: #344054;
}
`,
    exercise: [
      "移除 scrollbar-gutter，比较滚动条出现时内容宽度是否变化",
      "尝试 scrollbar-gutter: stable both-edges",
      "给一个侧边栏列表添加稳定滚动条空间"
    ]
  },
  {
    year: "2022",
    title: "2022 - 级联层 @layer",
    description: "Cascade Layers 给 CSS 来源和优先级增加显式分层，减少大型项目中的权重战争。",
    summary: "使用 @layer 定义 reset、base、components、utilities 的覆盖顺序。",
    exampleHtml: `<button class="btn utility">Layer Button</button>`,
    exampleCss: `@layer base, components, utilities;

@layer base {
  button {
    border: 0;
    font: inherit;
  }
}

@layer components {
  .btn {
    padding: 12px 18px;
    border-radius: 8px;
    background: #133f5c;
    color: #ffffff;
  }
}

@layer utilities {
  .utility {
    background: #1b7f79;
  }
}
`,
    exercise: [
      "调换 components 与 utilities 的声明顺序，观察按钮颜色变化",
      "新增 theme 层，并把颜色变量放进去",
      "把一个高权重选择器改成低权重但层级更高的规则"
    ]
  },
  {
    year: "2022",
    title: "2022 - color-scheme 基础主题适配",
    description: "color-scheme 告诉浏览器页面支持哪些主题，让表单、滚动条和默认控件自动匹配浅色或深色环境。",
    summary: "使用 color-scheme 配合语义颜色变量，为后续深色模式和 light-dark() 打基础。",
    exampleHtml: `<section class="scheme-panel">
  <label>
    搜索
    <input placeholder="CSS feature">
  </label>
</section>`,
    exampleCss: `.scheme-panel {
  color-scheme: light dark;
  --surface: #ffffff;
  --text: #1f2937;
  padding: 18px;
  border-radius: 12px;
  background: var(--surface);
  color: var(--text);
}

.scheme-panel input {
  width: 100%;
  min-height: 44px;
  margin-top: 8px;
  border: 1px solid #cfd8e3;
  border-radius: 8px;
  padding: 10px 12px;
  font: inherit;
}
`,
    exercise: [
      "在深色主题类中覆盖 --surface 和 --text",
      "移除 color-scheme，观察输入框默认外观差异",
      "把颜色变量改成语义命名，例如 --surface、--text、--border"
    ]
  },
  {
    year: "2022",
    title: "2022 - :is、:where 与现代选择器",
    description: ":is()、:where() 和增强版 :not() 可以压缩重复选择器，并更精细地控制权重。",
    summary: "使用 :is() 分组选项，用 :where() 写低权重基础样式，用 :not() 排除特殊状态。",
    exampleHtml: `<article class="selector-card">
  <h2>现代选择器</h2>
  <p>更少重复，更好维护。</p>
  <a href="#">继续学习</a>
</article>`,
    exampleCss: `.selector-card :where(h2, p) {
  margin: 0;
}

.selector-card :is(h2, a) {
  color: #153f3c;
}

.selector-card a:not(.disabled) {
  display: inline-block;
  margin-top: 12px;
  font-weight: 900;
}

.selector-card {
  width: min(100%, 360px);
  padding: 18px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #edf8f7;
}
`,
    exercise: [
      "把重复的 h2、p margin 规则改成 :where()",
      "比较 :is(h2, p) 和 :where(h2, p) 的权重差异",
      "使用 :not([aria-disabled='true']) 排除禁用链接"
    ]
  },
  {
    year: "2022",
    title: "2022 - :has() 关系选择器",
    description: ":has() 让父元素可以根据子元素状态改变样式，常被称为 CSS 的父选择器能力。",
    summary: "使用 :has() 根据内部 checkbox、input、img 或错误状态调整外层组件。",
    exampleHtml: `<label class="task-card">
  <input type="checkbox" checked />
  <span>完成本课练习</span>
</label>`,
    exampleCss: `.task-card {
  display: flex;
  gap: 10px;
  align-items: center;
  width: min(100%, 320px);
  padding: 16px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.task-card:has(input:checked) {
  border-color: #1b7f79;
  background: #edf8f7;
  color: #153f3c;
}
`,
    exercise: [
      "取消 checked，观察外层卡片样式如何变化",
      "使用 :has(input:focus-visible) 给卡片添加聚焦边框",
      "创建 .field:has(input:invalid) 的错误输入状态"
    ]
  },
  {
    year: "2022",
    title: "2022 - CSS 架构与命名组织",
    description: "随着样式规模变大，命名、分层、组件边界和 design tokens 会比单个属性更影响可维护性。",
    summary: "结合 BEM 风格命名、语义 token、@layer 和工具类，组织可扩展的组件样式。",
    exampleHtml: `<article class="course-card course-card--featured">
  <h2 class="course-card__title">CSS 架构</h2>
  <p class="course-card__meta">组件、状态和工具类分工清楚。</p>
</article>`,
    exampleCss: `@layer tokens, components, utilities;

@layer tokens {
  :root {
    --color-surface: #ffffff;
    --color-accent: #1b7f79;
    --space-card: 18px;
  }
}

@layer components {
  .course-card {
    padding: var(--space-card);
    border: 1px solid #dce3ed;
    border-radius: 12px;
    background: var(--color-surface);
  }

  .course-card--featured {
    border-color: var(--color-accent);
  }

  .course-card__title {
    margin: 0 0 8px;
  }
}

@layer utilities {
  .u-muted {
    color: #667085;
  }
}
`,
    exercise: [
      "把组件状态写成 --featured 修饰类，而不是额外嵌套选择器",
      "把重复颜色和间距提取成 token 变量",
      "判断一个规则应该放进 tokens、components 还是 utilities 层"
    ]
  }
];

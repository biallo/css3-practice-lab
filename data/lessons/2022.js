export const lessons2022 = [
  {
    year: "2022",
    title: "2022 - 级联层 @layer",
    description: "Cascade Layers 给 CSS 来源和优先级增加显式分层，减少大型项目中的权重战争。",
    summary: "使用 @layer 定义 reset、base、components、utilities 的覆盖顺序。",
    coreExplanation: [
      "@layer 把样式分层，层的顺序会参与级联判断。后声明优先级更高的层可以覆盖前面的层。",
      "在同一来源和重要性下，层级顺序会先于选择器权重发挥作用，因此低权重工具类也能稳定覆盖组件层。",
      "常见分层是 reset、base、components、utilities，让大型样式表减少权重竞赛。"
    ],
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
    coreExplanation: [
      "color-scheme 告诉浏览器页面支持浅色、深色或两者，浏览器会据此调整原生控件、表单和滚动条。",
      "它不是完整主题系统，只是声明能力。实际的背景、文字、边框仍需要你用变量或媒体查询定义。",
      "先建立语义色变量，再在深色模式中覆盖变量，比在每个组件里重复写颜色更可维护。"
    ],
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
    coreExplanation: [
      ":is() 可以把多个选择器分组，权重取参数中最高的那个。",
      ":where() 也能分组，但自身权重永远是 0，适合写基础样式和低权重默认值。",
      "增强版 :not() 可以接复杂选择器，适合排除禁用、当前项或特定状态。"
    ],
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
    coreExplanation: [
      ":has() 让父元素根据内部是否存在某个匹配项来改变样式，例如表单字段含有 invalid input 时高亮外层。",
      "它不是简单的父选择器，而是关系选择器，可以表达后代、相邻和状态条件。",
      ":has() 很强大但要克制，避免用过宽的选择器在大范围 DOM 上做复杂匹配。"
    ],
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
    coreExplanation: [
      "CSS 架构的目标是让样式来源清楚：哪些是 token，哪些是组件，哪些是一次性工具类。",
      "BEM 一类命名把块、元素、修饰状态写在类名里，能减少选择器依赖 DOM 层级。",
      "@layer 可以把架构意图交给浏览器级联系统执行，而不是靠不断提高选择器权重维持覆盖关系。"
    ],
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

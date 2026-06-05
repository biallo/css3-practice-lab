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
    valueReference: [
      {
        "name": "@layer 语法",
        "values": [
      "@layer base, components, utilities：声明层顺序。",
      "@layer components { ... }：把规则放入指定层。",
      "@import url(...) layer(name)：把导入样式放入层。"
        ]
      },
      {
        "name": "层级规则",
        "values": [
      "未分层样式通常比普通分层样式优先。",
      "同层内仍比较权重和书写顺序。",
      "后声明的层在普通声明中优先级更高。"
        ]
      }
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
    ],
    exerciseSolutions: [
      "调换 @layer 声明顺序，如 @layer base, utilities, components;，components 层会比 utilities 更晚、更优先。",
      "新增 @layer theme，并把 :root 颜色变量放进去；组件层通过 var() 使用这些变量。",
      "把高权重选择器改成普通类选择器，并放入更高优先级的 layer，减少 specificity 竞赛。"
    ]
  },
  {
    year: "2022",
    title: "2022 - color-scheme 基础主题适配",
    description: "color-scheme 告诉浏览器页面支持哪些主题，让表单、滚动条和默认控件自动匹配浅色或深色环境。",
    summary: "使用 color-scheme 声明页面支持的主题，让原生控件、滚动条和浏览器默认 UI 匹配当前环境。",
    coreExplanation: [
      "color-scheme 告诉浏览器页面支持浅色、深色或两者，浏览器会据此调整原生控件、表单和滚动条。",
      "它不是完整主题系统，只是声明能力。实际的背景、文字和边框仍需要你提供合适的基础颜色。",
      "适合先用在包含表单、滚动区域或浏览器默认控件的页面上，避免控件在深色环境里仍保持突兀的浅色外观。"
    ],
    valueReference: [
      {
        "name": "color-scheme",
        "values": [
      "normal：不声明特殊主题支持。",
      "light：支持浅色控件。",
      "dark：支持深色控件。",
      "light dark：同时支持浅色和深色。"
        ]
      },
      {
        "name": "相关能力",
        "values": [
      "prefers-color-scheme：读取用户主题偏好。",
      "原生表单控件：输入框、选择框、按钮等会参考 color-scheme。",
      "滚动条和默认画布：浏览器可能根据声明调整默认外观。"
        ]
      }
    ],
    exampleHtml: `<section class="scheme-panel">
  <label>
    搜索
    <input placeholder="CSS feature">
  </label>
</section>`,
    exampleCss: `.scheme-panel {
  color-scheme: light dark;
  padding: 18px;
  border-radius: 12px;
  background: Canvas;
  color: CanvasText;
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
      "把 color-scheme 改成 dark，观察输入框默认外观",
      "移除 color-scheme，观察输入框默认外观差异",
      "把 background 和 color 改成系统颜色 Canvas 与 CanvasText"
    ],
    exerciseSolutions: [
      "把 color-scheme: light dark 改成 dark 后，浏览器会按深色能力渲染支持的原生控件。",
      "移除 color-scheme 后，输入框、滚动条等原生控件可能仍按浏览器默认浅色渲染。",
      "写 background: Canvas; color: CanvasText; 可以让面板使用当前系统画布和文字颜色。"
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
    valueReference: [
      {
        "name": "选择器函数",
        "values": [
      ":is(a, button)：匹配参数中任意选择器，权重取最高参数。",
      ":where(...)：匹配逻辑同 :is，但权重为 0。",
      ":not(...)：排除匹配参数的元素。"
        ]
      },
      {
        "name": "使用建议",
        "values": [
      ":is：减少重复选择器。",
      ":where：写低权重默认样式。",
      ":not：排除状态或属性，例如 :not([disabled])。"
        ]
      }
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
    ],
    exerciseSolutions: [
      "把 .selector-card h2, .selector-card p { margin: 0; } 改成 .selector-card :where(h2, p) { margin: 0; }。",
      ":is(h2, p) 的权重取 h2/p 中最高者，:where(h2, p) 权重为 0，更容易被组件样式覆盖。",
      "可写 .selector-card a:not([aria-disabled='true']) { ... }，只给非禁用链接添加交互样式。"
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
    valueReference: [
      {
        "name": ":has() 用法",
        "values": [
      ".card:has(img)：包含图片的卡片。",
      "label:has(input:checked)：内部输入被选中的标签。",
      ".field:has(input:invalid)：内部输入无效的字段组。",
      "article:has(> h2)：直接子元素包含 h2 的 article。"
        ]
      },
      {
        "name": "关系组合",
        "values": [
      "空格：后代关系。",
      ">：直接子元素。",
      "+：相邻兄弟。",
      "~：后续兄弟。"
        ]
      }
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
    ],
    exerciseSolutions: [
      "移除 input 上的 checked 后，.task-card:has(input:checked) 不再匹配，外层高亮会消失。",
      "新增 .task-card:has(input:focus-visible) { outline: 3px solid rgba(27,127,121,.25); }，聚焦内部输入时高亮外层。",
      "创建 .field:has(input:invalid) { border-color: #b9472f; }，内部输入无效时字段组显示错误边框。"
    ]
  },
  {
    year: "2022",
    title: "2022 - CSS 架构与命名组织",
    description: "随着样式规模变大，命名、分层、组件边界和 design tokens 会比单个属性更影响可维护性。",
    summary: "结合 BEM 风格命名、语义 token、组件边界和工具类，组织可扩展的组件样式。",
    coreExplanation: [
      "CSS 架构的目标是让样式来源清楚：哪些是 token，哪些是组件，哪些是一次性工具类。",
      "BEM 一类命名把块、元素、修饰状态写在类名里，能减少选择器依赖 DOM 层级。",
      "组件样式应尽量依赖自身类名和语义变量，而不是依赖页面位置或深层 DOM 结构。"
    ],
    valueReference: [
      {
        "name": "样式职责",
        "values": [
      "tokens：颜色、间距、圆角等设计变量。",
      "components：组件样式。",
      "utilities：单用途工具类和少量覆盖。",
      "state：组件状态或变体，例如 selected、featured。"
        ]
      },
      {
        "name": "命名",
        "values": [
      "block：独立组件，例如 course-card。",
      "element：组件内部元素，例如 course-card__title。",
      "modifier：状态或变体，例如 course-card--featured。"
        ]
      }
    ],
    exampleHtml: `<article class="course-card course-card--featured">
  <h2 class="course-card__title">CSS 架构</h2>
  <p class="course-card__meta">组件、状态和工具类分工清楚。</p>
</article>`,
    exampleCss: `:root {
  --color-surface: #ffffff;
  --color-accent: #1b7f79;
  --space-card: 18px;
}

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

.course-card__meta {
  margin: 0;
  color: #667085;
}
`,
    exercise: [
      "把组件状态写成 --featured 修饰类，而不是额外嵌套选择器",
      "把重复颜色和间距提取成 token 变量",
      "把依赖结构的选择器改成组件自身的 element 类"
    ],
    exerciseSolutions: [
      "组件变体用 .course-card--featured 这类修饰类表达，而不是依赖 .sidebar .course-card h2 之类结构选择器。",
      "把重复的颜色和间距提取到 :root 或专门的 tokens 变量区，例如 --color-accent、--space-card。",
      "把 .course-card h2 或 .course-card p 改成 .course-card__title、.course-card__meta，组件内部结构变化时样式更稳定。"
    ]
  }
];

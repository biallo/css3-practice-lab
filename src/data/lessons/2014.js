export const lessons2014 = [
  {
    year: "2014",
    title: "2014 - 伪元素与 CSS Counters",
    description: "::before、::after 和 counter() 可以生成装饰、编号和步骤标记，而不污染 HTML 结构。",
    summary: "使用伪元素创建视觉层，用 CSS 计数器自动编号列表、章节和流程步骤。",
    coreExplanation: [
      "::before 和 ::after 会生成元素内部的第一个或最后一个虚拟子元素，常用于装饰、图标和辅助标记。",
      "counter-reset 创建计数器，counter-increment 递增，counter() 输出当前值，适合步骤、章节和有规律编号。",
      "伪元素生成的内容不应承载关键信息。屏幕阅读器和复制文本时可能不会按你期望处理它。"
    ],
    valueReference: [
      {
        "name": "伪元素",
        "values": [
      "::before：生成第一个虚拟子元素。",
      "::after：生成最后一个虚拟子元素。",
      "content：伪元素必须设置 content 才会生成。"
        ]
      },
      {
        "name": "计数器",
        "values": [
      "counter-reset：创建或重置计数器。",
      "counter-increment：递增计数器。",
      "counter()：输出计数器当前值。",
      "counters()：输出嵌套计数器。"
        ]
      }
    ],
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
    ],
    exerciseSolutions: [
      "把 content: counter(lesson); 改成 content: counter(lesson, decimal-leading-zero);，编号会显示为 01、02、03。",
      "给当前项加类后写 .counter-list li.current::after { content: '当前'; margin-left: 8px; }，即可生成小标签。",
      "装饰、编号、非关键信息适合伪元素；用户必须读取、复制或被辅助技术识别的内容应写在 HTML 中。"
    ]
  },
  {
    year: "2014",
    title: "2014 - CSS 自定义属性",
    description: "Custom Properties 让变量成为浏览器原生能力，可以参与继承和运行时主题切换。",
    summary: "用 --token 定义颜色、间距和圆角，再通过 var() 在组件中复用。",
    coreExplanation: [
      "自定义属性以 -- 开头，通过 var() 使用。它们会继承，所以适合主题色、间距、圆角等设计 token。",
      "变量的值在使用处计算，这意味着可以在组件或状态类中覆盖变量，让内部所有引用自动变化。",
      "变量不是预处理器替换，浏览器会在运行时解析，因此可以配合媒体查询、容器查询和 JavaScript 动态修改。"
    ],
    valueReference: [
      {
        "name": "变量语法",
        "values": [
      "--name: value：定义自定义属性。",
      "var(--name)：读取变量。",
      "var(--name, fallback)：变量无效或不存在时使用 fallback。"
        ]
      },
      {
        "name": "继承与覆盖",
        "values": [
      ":root：常用于全局 token。",
      "组件根元素：适合定义局部默认值。",
      "状态类或主题类：适合覆盖变量实现主题切换。"
        ]
      }
    ],
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
    ],
    exerciseSolutions: [
      "在 :root 中加 --space: 22px;，再把 .theme-card 的 padding 改成 padding: var(--space);。",
      "新增 .theme-card.dark { --card-bg: #153f3c; --card-text: #ffffff; }，同一组件会因变量覆盖变成暗色。",
      "把重复色值如 #edf8f7 提取为 --card-bg 或 --surface，再用 var(--surface) 复用。"
    ]
  },
  {
    year: "2014",
    title: "2014 - 视口单位与全屏区域",
    description: "vw、vh、vmin 和 vmax 让元素可以根据视口尺寸计算，适合全屏区块和响应式比例。",
    summary: "使用视口单位控制首屏高度、横向宽度和流体字号，并理解它与百分比的差异。",
    coreExplanation: [
      "vw 和 vh 参考视口宽高，vmin 取较小边，vmax 取较大边。它们不依赖父元素尺寸。",
      "视口单位适合全屏面板和流体空间，但纯 vw 字号在超宽屏可能过大，通常要配合 clamp() 设上下限。",
      "移动端浏览器地址栏会影响可见高度，传统 100vh 可能不稳定，后续可以用 svh、lvh、dvh 改进。"
    ],
    valueReference: [
      {
        "name": "视口单位",
        "values": [
      "vw：视口宽度的 1%。",
      "vh：视口高度的 1%。",
      "vmin：视口较短边的 1%。",
      "vmax：视口较长边的 1%。"
        ]
      },
      {
        "name": "使用注意",
        "values": [
      "适合全屏区域、流体间距和视口相关字号。",
      "移动端 100vh 可能受地址栏影响。",
      "大屏字号应配合 clamp() 设置上下限。"
        ]
      }
    ],
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
    ],
    exerciseSolutions: [
      "把 min-height: 60vh 改成 100vh，面板最小高度会等于整个视口高度。",
      "分别把 padding 改成 8vw、8vh、8vmin、8vmax；它们会分别跟随视口宽、高、短边、长边变化。",
      "保留 width: min(100%, 82vw) 的同时加 max-width: 960px，可避免大屏上内容过宽。"
    ]
  }
];

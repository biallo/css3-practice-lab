export const lessons2009 = [
  {
    year: "2009",
    title: "2009 - 选择器与优先级",
    description: "从 CSS3 选择器开始，掌握类、属性、伪类和优先级的组合方式。",
    summary: "理解选择器匹配、权重计算和覆盖顺序，是后续组织大型 CSS 的基础。",
    coreExplanation: [
      "选择器权重按四列比较：内联样式、ID、类/属性/伪类、类型/伪元素。比较时从左到右看，前一列更高就直接胜出，不会把后一列数量相加抵消。",
      "#app .btn[data-state='active'] 的权重是 0-1-2-0：1 个 ID、1 个类、1 个属性。.btn.primary 是 0-0-2-0，所以前者因为 ID 列更高而胜出。",
      "同权重时看覆盖顺序：后写的规则覆盖先写的规则。不同权重时，权重高的规则覆盖权重低的规则，即使它写在更前面。",
      "完整覆盖顺序还会受来源、!important 和 @layer 影响。日常组件里先避免 ID 和 !important，优先用类、状态类和清晰的书写顺序组织样式。"
    ],
    valueReference: [
      {
        "name": "选择器权重",
        "values": [
      "内联样式：可理解为 1-0-0-0，通常比普通选择器更高。",
      "ID：每个 ID 计入 0-1-0-0，例如 #app。",
      "类、属性、伪类：每个计入 0-0-1-0，例如 .btn、[data-state]、:hover。",
      "类型选择器、伪元素：每个计入 0-0-0-1，例如 button、::before。"
        ]
      },
      {
        "name": "覆盖顺序",
        "values": [
      "先比较来源和重要性，例如普通样式、!important、用户样式。",
      "再比较 @layer 层级，后声明的高优先级层可以覆盖低层。",
      "再比较选择器权重。",
      "权重相同才比较书写顺序，后写覆盖先写。"
        ]
      }
    ],
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
    ],
    exerciseSolutions: [
      "最终生效的是 #app .btn[data-state='active'] 中和同属性相关的声明，因为它包含 1 个 ID，权重高于 .btn.primary。background 仍来自 .btn.primary，因为 ID 规则没有设置 background。",
      "可以新增 .btn:hover { background: #edf8f7; }，但不要在 hover 里覆盖 border-color；如果必须写边框，需再写 #app .btn[data-state='active']:hover 保持 active 边框。",
      "把 #app .btn[data-state='active'] 改成 .btn.is-active 或 .btn[data-state='active']，用状态类/属性表达状态，减少 ID 依赖。"
    ]
  },
  {
    year: "2009",
    title: "2009 - 圆角、阴影与现代盒子",
    description: "border-radius、box-shadow 和 box-sizing 让组件样式从图片切图走向纯 CSS。",
    summary: "用圆角、阴影和 border-box 构建稳定的卡片、按钮与提示框。",
    coreExplanation: [
      "border-radius 改变边框和背景的裁切形状，box-shadow 在元素外侧或内侧绘制阴影，不会占用布局空间。",
      "box-sizing: border-box 让 width 包含 padding 和 border，组件尺寸更容易预测，尤其适合卡片、输入框和按钮。",
      "阴影越大、越模糊，视觉越轻但渲染成本也可能更高。真实界面里通常用克制的阴影层级表达悬浮关系。"
    ],
    valueReference: [
      {
        "name": "box-sizing",
        "values": [
      "content-box：width/height 只包含内容区，padding 和 border 会额外增加总尺寸。",
      "border-box：width/height 包含内容、padding 和 border，组件尺寸更稳定。"
        ]
      },
      {
        "name": "box-shadow",
        "values": [
      "offset-x offset-y blur color：常见外阴影写法。",
      "spread：在 blur 前后可选，用来扩张或收缩阴影面积。",
      "inset：把阴影放到元素内部。",
      "多个阴影：用逗号分隔，可叠加多层光影。"
        ]
      }
    ],
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
    ],
    exerciseSolutions: [
      "把 .notice-card 的 border-radius 从 18px 改成 8px；圆角更小后卡片会更克制、更工具化。",
      "添加类似 box-shadow: inset 0 1px 2px rgba(15, 23, 42, 0.08);；inset 阴影画在盒子内部，普通阴影画在外部。",
      "保留 box-sizing: border-box 后，width 会包含 padding 和 border；如果改成 content-box，总宽度会变成 width + padding + border。"
    ]
  }
];

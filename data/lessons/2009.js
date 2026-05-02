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
    coreExplanation: [
      "border-radius 改变边框和背景的裁切形状，box-shadow 在元素外侧或内侧绘制阴影，不会占用布局空间。",
      "box-sizing: border-box 让 width 包含 padding 和 border，组件尺寸更容易预测，尤其适合卡片、输入框和按钮。",
      "阴影越大、越模糊，视觉越轻但渲染成本也可能更高。真实界面里通常用克制的阴影层级表达悬浮关系。"
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
    ]
  }
];

export const lessons2010 = [
  {
    year: "2010",
    title: "2010 - 背景、多背景与渐变",
    description: "CSS3 背景模块让渐变、叠加背景和背景裁切成为常规 UI 手段。",
    summary: "掌握 linear-gradient、background-size、background-position 和多背景叠加。",
    coreExplanation: [
      "background 可以叠多层，最前面的背景写在最上面，最后一层通常是纯色或主渐变作为兜底。",
      "linear-gradient 和 radial-gradient 本质上是图片值，所以可以和 background-size、position、repeat 一起使用。",
      "多背景适合做高光、纹理和状态层，但内容可读性要优先，文字区域不要被强对比背景干扰。"
    ],
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
  }
];

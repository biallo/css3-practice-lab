export const lessons2019 = [
  {
    year: "2019",
    title: "2019 - Scroll Snap 滚动吸附",
    description: "Scroll Snap 用 CSS 控制滚动停靠点，常用于横向卡片、轮播和章节阅读。",
    summary: "通过 scroll-snap-type、scroll-snap-align 和 overflow 构建可控的滚动体验。",
    coreExplanation: [
      "scroll-snap-type 设置滚动容器在哪个轴上吸附，mandatory 更强制，proximity 更宽松。",
      "scroll-snap-align 设置每个子项如何对齐到吸附位置，例如 start、center 或 end。",
      "它适合横向卡片和章节阅读，但不应让用户难以停在想看的位置。内容优先时 proximity 往往更温和。"
    ],
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
  }
];

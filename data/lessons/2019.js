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
    valueReference: [
      {
        "name": "scroll-snap-type",
        "values": [
      "none：不启用吸附。",
      "x / y / both：指定吸附轴。",
      "mandatory：强制吸附到停靠点。",
      "proximity：接近停靠点时才吸附。"
        ]
      },
      {
        "name": "子项属性",
        "values": [
      "scroll-snap-align: start：起点对齐。",
      "center：中心对齐。",
      "end：终点对齐。",
      "scroll-snap-stop: always：尽量阻止一次滚过多个停靠点。"
        ]
      }
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
    ],
    exerciseSolutions: [
      "把 scroll-snap-align: start 改成 center，卡片停靠时会居中对齐滚动容器。",
      "把 scroll-snap-type: x mandatory 改成 x proximity，滚动只会在接近停靠点时吸附，手感更宽松。",
      "把 .snap-row section 的 flex-basis 改成 80%，移动端每张卡片会占据大部分视口宽度。"
    ]
  }
];

export const lessons2017 = [
  {
    year: "2017",
    title: "2017 - Grid 二维布局",
    description: "CSS Grid 让行列、区域和复杂页面结构成为 CSS 原生能力。",
    summary: "使用 grid-template-columns、minmax、repeat、gap 和 grid-column 组织二维布局。",
    coreExplanation: [
      "Grid 同时管理行和列，适合页面结构、仪表盘和卡片矩阵。Flexbox 更适合一维分布。",
      "fr 分配剩余空间，minmax() 给轨道设置范围，repeat() 减少重复轨道声明。",
      "grid-column: 1 / -1 表示从第一条网格线跨到最后一条，常用于让某个区域横跨整行。"
    ],
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
    coreExplanation: [
      "min-content 是内容能缩到的最小宽度，max-content 是内容不换行时需要的宽度。",
      "fit-content 会在可用空间、内容最大尺寸和限制值之间取一个平衡，适合提示框和标签宽度。",
      "内在尺寸能让内容自己参与布局决策，但长单词和不可断文本仍需要 overflow-wrap 等策略配合。"
    ],
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
    coreExplanation: [
      "sticky 元素先按普通文档流布局，滚动到指定 top、bottom 等阈值后才像 fixed 一样粘住。",
      "它参考最近的滚动容器。如果祖先设置了 overflow，sticky 的行为会受这个容器影响。",
      "sticky 元素通常需要背景色和合适的 z-index，否则滚动内容可能从它下面透出来。"
    ],
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
  }
];

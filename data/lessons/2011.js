export const lessons2011 = [
  {
    year: "2011",
    title: "2011 - 媒体查询与响应式布局",
    description: "Media Queries 让样式可以根据屏幕宽度、方向和用户偏好进行响应。",
    summary: "使用 max-width、min-width 和 prefers-reduced-motion 建立移动优先的响应式规则。",
    coreExplanation: [
      "媒体查询是在条件满足时才应用的一组样式。移动优先通常先写小屏基础样式，再用 min-width 为大屏增强。",
      "断点不一定等于设备尺寸，更应该根据内容什么时候变挤来决定。布局断点、字体和间距可以分别调整。",
      "媒体查询也能响应用户偏好，例如 prefers-reduced-motion，用来减少动画而不是只处理屏幕宽度。"
    ],
    exampleHtml: `<div class="responsive-grid">
  <div>导航</div>
  <div>内容</div>
  <div>工具</div>
</div>`,
    exampleCss: `.responsive-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
}

.responsive-grid > div {
  padding: 18px;
  border-radius: 12px;
  background: #edf8f7;
}

@media (min-width: 640px) {
  .responsive-grid {
    grid-template-columns: 160px 1fr 120px;
  }
}
`,
    exercise: [
      "把断点从 640px 改为 800px，观察布局切换时机",
      "增加一个在小屏隐藏工具栏的规则",
      "使用 prefers-reduced-motion 关闭后续动画效果"
    ]
  },
  {
    year: "2011",
    title: "2011 - @media print 打印样式",
    description: "打印样式让网页在纸张、PDF 和发票场景中保持清晰，避免导航、背景和交互控件干扰内容。",
    summary: "使用 @media print、@page、break-inside 和 print-color-adjust 控制打印布局与分页。",
    coreExplanation: [
      "打印环境和屏幕环境不同，交互按钮、导航、阴影和固定定位常常会干扰纸张阅读，需要在 @media print 中隐藏或重置。",
      "@page 控制纸张页边距，break-inside: avoid 可以尽量避免卡片、表格行或代码块被分页切断。",
      "print-color-adjust: exact 可以请求浏览器保留颜色，但打印仍受浏览器和用户设置影响，所以内容结构要先保证清楚。"
    ],
    exampleHtml: `<article class="print-report">
  <h2>课程报告</h2>
  <p>这段内容适合打印或导出为 PDF。</p>
  <button>页面按钮</button>
</article>`,
    exampleCss: `.print-report {
  max-width: 520px;
  padding: 20px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

@media print {
  @page {
    margin: 18mm;
  }

  .print-report {
    border: 0;
    padding: 0;
    print-color-adjust: exact;
    break-inside: avoid;
  }

  .print-report button {
    display: none;
  }
}
`,
    exercise: [
      "隐藏导航、按钮和阴影，只保留正文内容",
      "为长卡片添加 break-inside: avoid，减少分页切断",
      "设置 @page margin，观察 PDF 边距变化"
    ]
  }
];

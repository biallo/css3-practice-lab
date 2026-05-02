export const lessons2025 = [
  {
    year: "2025",
    title: "2025 - Anchor Positioning 锚点定位",
    description: "Anchor Positioning 让弹层、提示气泡和浮动控件可以相对锚点元素定位。",
    summary: "使用 anchor-name、position-anchor 和 position-area 表达触发器与弹层的关系。",
    coreExplanation: [
      "Anchor Positioning 把浮层和触发器建立关系，让浏览器根据锚点位置放置 tooltip、菜单或气泡。",
      "anchor-name 给触发器命名，position-anchor 指定浮层参考哪个锚点，position-area 描述放在锚点哪一侧。",
      "它减少了手写 JS 测量和定位，但仍要考虑溢出、可访问性和不支持浏览器的回退方案。"
    ],
    exampleHtml: `<div class="anchor-demo">
  <button class="anchor-button">按钮</button>
  <div class="tooltip">提示内容</div>
</div>`,
    exampleCss: `.anchor-demo {
  position: relative;
  min-height: 150px;
}

.anchor-button {
  anchor-name: --trigger;
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 800;
}

.tooltip {
  position: absolute;
  position-anchor: --trigger;
  position-area: bottom center;
  margin-top: 10px;
  padding: 10px 12px;
  border-radius: 8px;
  background: #edf8f7;
  color: #153f3c;
}
`,
    exercise: [
      "把 position-area 改成 top center，观察提示层位置",
      "为 tooltip 添加最大宽度和阴影，让它更像真实弹层",
      "思考这个能力能替代哪些手写 JS 定位逻辑"
    ]
  },
  {
    year: "2025",
    title: "2025 - Popover、Top Layer 与弹层样式",
    description: "Popover API 让菜单、提示和轻量弹层进入浏览器管理的 top layer，减少手写层级逻辑。",
    summary: "使用 popover、:popover-open 和 ::backdrop 组合出可访问的原生弹层体验。",
    coreExplanation: [
      "popover 属性让元素进入浏览器管理的 top layer，避免普通 z-index 层级里弹层被盖住。",
      "popovertarget 可以用按钮声明式打开弹层，:popover-open 用于设置打开状态样式。",
      "Popover 适合轻量弹层和菜单。真正需要阻止背景交互的模态场景要仔细处理焦点、关闭和语义。"
    ],
    exampleHtml: `<button popovertarget="menu" class="menu-button">打开菜单</button>
<div id="menu" popover class="popover-menu">
  <button>编辑</button>
  <button>复制</button>
</div>`,
    exampleCss: `.menu-button {
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 800;
}

.popover-menu {
  min-width: 180px;
  padding: 10px;
  border: 1px solid #dce3ed;
  border-radius: 10px;
  background: #ffffff;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.18);
}

.popover-menu:popover-open {
  display: grid;
  gap: 6px;
}

.popover-menu button {
  padding: 10px;
  border: 0;
  border-radius: 6px;
  background: transparent;
  text-align: left;
}

.popover-menu button:hover {
  background: #edf8f7;
}
`,
    exercise: [
      "给弹层增加 ::backdrop 背景，比较菜单和模态层的差异",
      "把 popover 菜单和 Anchor Positioning 组合，让菜单靠近按钮",
      "为 :popover-open 增加入场动画，并注意离散属性过渡"
    ]
  },
  {
    year: "2025",
    title: "2025 - View Transitions 视图过渡",
    description: "View Transitions 让页面或组件状态切换可以共享一套浏览器级转场机制。",
    summary: "使用 view-transition-name 标记关键元素，配合伪元素控制新旧视图的动画节奏。",
    coreExplanation: [
      "View Transitions 会捕获旧视图和新视图的快照，然后用伪元素控制它们之间的动画。",
      "view-transition-name 用来标记共享元素，让浏览器知道哪个旧元素要和哪个新元素连接。",
      "它适合页面切换和状态切换，但要保证没有动画时内容切换仍然清楚可用。"
    ],
    exampleHtml: `<article class="view-card">
  <div class="view-cover">CSS</div>
  <h2>视图过渡</h2>
</article>`,
    exampleCss: `.view-card {
  width: min(100%, 340px);
  padding: 16px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.view-cover {
  display: grid;
  aspect-ratio: 16 / 9;
  place-items: center;
  border-radius: 8px;
  background: #edf8f7;
  color: #153f3c;
  font-weight: 900;
  view-transition-name: course-cover;
}

::view-transition-old(course-cover),
::view-transition-new(course-cover) {
  animation-duration: 360ms;
  animation-timing-function: ease;
}
`,
    exercise: [
      "给标题也添加 view-transition-name，并比较多个元素同时过渡的效果",
      "调整 ::view-transition-new 的动画时长，让新视图更慢出现",
      "思考列表到详情页的共享元素过渡应该标记哪些节点"
    ]
  },
  {
    year: "2025",
    title: "2025 - content-visibility 与渲染性能",
    description: "content-visibility 可以跳过屏幕外内容的渲染工作，让长页面和列表更轻快。",
    summary: "使用 content-visibility、contain-intrinsic-size 和 contain 控制浏览器渲染成本。",
    coreExplanation: [
      "content-visibility: auto 允许浏览器跳过屏幕外内容的布局和绘制，等接近视口时再处理。",
      "contain-intrinsic-size 给被跳过内容一个估算尺寸，避免滚动条高度大幅跳动。",
      "它适合长列表、长文章和折叠面板，但不应滥用于需要立即测量尺寸或参与布局计算的内容。"
    ],
    exampleHtml: `<section class="long-list">
  <article>第一段内容</article>
  <article>第二段内容</article>
  <article>第三段内容</article>
</section>`,
    exampleCss: `.long-list {
  display: grid;
  gap: 14px;
}

.long-list article {
  content-visibility: auto;
  contain-intrinsic-size: 120px;
  contain: layout paint style;
  padding: 22px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}
`,
    exercise: [
      "把 contain-intrinsic-size 改得过小，观察滚动高度估算的影响",
      "在长列表中只给屏幕外重内容使用 content-visibility",
      "比较 contain: layout paint style 和不设置 contain 的行为差异"
    ]
  }
];

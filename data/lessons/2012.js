export const lessons2012 = [
  {
    year: "2012",
    title: "2012 - Flexbox 一维布局",
    description: "Flexbox 解决一行或一列中的对齐、分布、伸缩和换行问题。",
    summary: "通过主轴、侧轴、gap、flex 和 align-items 构建常见导航、工具栏和卡片行。",
    coreExplanation: [
      "Flexbox 先确定主轴，再沿主轴分配空间，沿交叉轴对齐项目。row 时主轴是水平，column 时主轴是垂直。",
      "justify-content 处理主轴上的剩余空间，align-items 处理交叉轴对齐，gap 由容器统一管理项目间距。",
      "flex: 1 表示项目可以增长并分享剩余空间，但仍会受 min-width、内容长度和 flex-basis 影响。"
    ],
    exampleHtml: `<nav class="toolbar">
  <a>课程</a>
  <a>练习</a>
  <a>复盘</a>
</nav>`,
    exampleCss: `.toolbar {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
}

.toolbar a {
  padding: 10px 14px;
  border-radius: 999px;
  background: #edf8f7;
  color: #153f3c;
  font-weight: 800;
}
`,
    exercise: [
      "把 justify-content 改成 space-between，观察项目分布变化",
      "让第三个项目占据剩余空间，并保持文字居中",
      "开启 flex-wrap 后增加更多项目，观察换行行为"
    ]
  },
  {
    year: "2012",
    title: "2012 - 过渡与变换",
    description: "transition 与 transform 让 hover、focus 和状态切换拥有轻量动效。",
    summary: "使用 transform 做位移、缩放和旋转，再用 transition 控制变化节奏。",
    coreExplanation: [
      "transition 只负责属性从旧值到新值的过渡，必须有状态变化触发，例如 hover、focus 或类名切换。",
      "transform 不影响普通文档流，适合做移动、缩放和旋转反馈。它通常比改 top/left 更适合动画。",
      "交互动效要短而明确，按钮反馈通常 150 到 250 毫秒就足够，同时要给键盘 focus 状态同等反馈。"
    ],
    exampleHtml: `<button class="motion-button">悬停查看</button>`,
    exampleCss: `.motion-button {
  min-height: 44px;
  padding: 12px 20px;
  border: 0;
  border-radius: 999px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 800;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.motion-button:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 16px 30px rgba(19, 63, 92, 0.24);
}
`,
    exercise: [
      "把 hover 位移从 -3px 改成 -1px，比较反馈强度",
      "增加 focus-visible 状态，让键盘用户也有清晰反馈",
      "使用 rotate 或 scale 做一个更明显但不过度的交互动效"
    ]
  },
  {
    year: "2012",
    title: "2012 - 3D Transform 与 perspective",
    description: "3D transform 让元素拥有空间旋转、透视和翻转效果，适合卡片背面、封面展示和轻量空间层次。",
    summary: "使用 perspective、transform-style、rotateY 和 backface-visibility 构建可控的 3D 交互。",
    coreExplanation: [
      "perspective 决定观察距离，数值越小透视越强。它通常设置在父元素上，让子元素在 3D 空间中变化。",
      "transform-style: preserve-3d 允许子元素保留 3D 层次，backface-visibility: hidden 可以隐藏翻转后的背面。",
      "3D 效果很容易造成眩晕，真实项目里应提供 reduced motion 版本，并避免关键内容只能通过翻转看到。"
    ],
    exampleHtml: `<div class="flip-card">
  <div class="flip-inner">
    <div class="front">Front</div>
    <div class="back">Back</div>
  </div>
</div>`,
    exampleCss: `.flip-card {
  width: 220px;
  height: 140px;
  perspective: 800px;
}

.flip-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: transform 420ms ease;
}

.flip-card:hover .flip-inner {
  transform: rotateY(180deg);
}

.front,
.back {
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  border-radius: 12px;
  backface-visibility: hidden;
  font-weight: 900;
}

.front {
  background: #edf8f7;
  color: #153f3c;
}

.back {
  background: #133f5c;
  color: #ffffff;
  transform: rotateY(180deg);
}
`,
    exercise: [
      "把 rotateY 改成 rotateX，观察翻转方向",
      "调整 perspective 数值，比较透视强弱",
      "为 prefers-reduced-motion 用户禁用翻转动画"
    ]
  },
  {
    year: "2012",
    title: "2012 - 关键帧动画",
    description: "@keyframes 和 animation 让 CSS 可以表达循环、阶段性和独立运行的动画。",
    summary: "理解关键帧、时长、循环次数、方向和缓动函数之间的配合。",
    coreExplanation: [
      "@keyframes 描述动画过程，animation 把过程应用到元素上，并控制时长、次数、方向和缓动。",
      "关键帧中的百分比表示时间进度，不是属性数值。0% 和 100% 常用于定义起点和终点。",
      "循环动画会持续消耗注意力和性能，适合加载、提示等短期场景，并要照顾 prefers-reduced-motion。"
    ],
    exampleHtml: `<div class="pulse-badge">CSS</div>`,
    exampleCss: `.pulse-badge {
  display: grid;
  width: 96px;
  height: 96px;
  place-items: center;
  border-radius: 50%;
  background: #1b7f79;
  color: #ffffff;
  font-weight: 900;
  animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.08);
  }
}
`,
    exercise: [
      "把动画改成 3 秒一次，观察节奏变化",
      "为 50% 关键帧增加 box-shadow，做出呼吸发光效果",
      "加入 prefers-reduced-motion，让用户偏好减少动画时禁用循环"
    ]
  },
  {
    year: "2012",
    title: "2012 - 层叠上下文与 z-index",
    description: "z-index 只有在正确的层叠上下文中才会按预期工作，transform、opacity 和 position 都可能创建新的上下文。",
    summary: "理解 stacking context、定位元素和 isolation，解决弹层、遮罩、阴影被盖住的问题。",
    coreExplanation: [
      "z-index 只在同一个层叠上下文中比较。position 配合 z-index、transform、opacity、filter、isolation 等都可能创建新的层叠上下文。",
      "子元素的 z-index 再高，也不能跳出父层叠上下文去压过父级外部更高层的元素。",
      "isolation: isolate 可以主动为组件建立边界，避免内部 z-index 和页面其他区域互相干扰。"
    ],
    exampleHtml: `<div class="stack-stage">
  <article class="stack-card">Card</article>
  <div class="stack-popover">Popover</div>
</div>`,
    exampleCss: `.stack-stage {
  position: relative;
  isolation: isolate;
  min-height: 160px;
  padding: 24px;
  border-radius: 12px;
  background: #edf8f7;
}

.stack-card {
  position: relative;
  z-index: 1;
  width: 180px;
  padding: 28px;
  border-radius: 12px;
  background: #ffffff;
  box-shadow: 0 16px 32px rgba(15, 23, 42, 0.14);
}

.stack-popover {
  position: absolute;
  z-index: 2;
  inset: 64px auto auto 120px;
  padding: 12px 16px;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 900;
}
`,
    exercise: [
      "把 .stack-card 的 z-index 调高到 3，观察它是否盖住弹层",
      "给父元素添加 opacity: 0.99，思考它为什么会影响层叠关系",
      "使用 isolation: isolate 为组件创建独立的层叠边界"
    ]
  }
];

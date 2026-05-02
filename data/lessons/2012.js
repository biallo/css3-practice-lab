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
    valueReference: [
      {
        "name": "容器属性",
        "values": [
      "display: flex：建立弹性容器。",
      "flex-direction：主轴方向，row、row-reverse、column、column-reverse。",
      "justify-content：主轴剩余空间分配。",
      "align-items：交叉轴对齐。",
      "flex-wrap：是否允许换行。"
        ]
      },
      {
        "name": "项目属性",
        "values": [
      "flex-grow：项目如何分配剩余空间。",
      "flex-shrink：空间不足时如何收缩。",
      "flex-basis：参与分配前的基础尺寸。",
      "align-self：单个项目覆盖容器的 align-items。"
        ]
      }
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
    ],
    exerciseSolutions: [
      "把 .toolbar 的 justify-content: center 改成 space-between；项目会贴近容器两端并平分剩余空间。",
      "给第三个项目设置 .toolbar a:nth-child(3) { flex: 1; text-align: center; }，它会占据剩余空间且文字居中。",
      "保留 flex-wrap: wrap 后增加更多 a 元素；空间不足时会换到下一行，gap 会继续控制行列间距。"
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
    valueReference: [
      {
        "name": "transition",
        "values": [
      "transition-property：参与过渡的属性。",
      "transition-duration：过渡持续时间。",
      "transition-timing-function：速度曲线，例如 ease、linear、cubic-bezier()。",
      "transition-delay：延迟开始时间。"
        ]
      },
      {
        "name": "transform 函数",
        "values": [
      "translate()：位移，不影响文档流。",
      "scale()：缩放。",
      "rotate()：旋转。",
      "skew()：倾斜。",
      "transform-origin：变换原点。"
        ]
      }
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
    ],
    exerciseSolutions: [
      "把 .motion-button:hover 里的 translateY(-3px) 改成 translateY(-1px)，悬停反馈会更轻。",
      "添加 .motion-button:focus-visible { outline: 3px solid rgba(27,127,121,.35); outline-offset: 3px; }，键盘聚焦时会有清晰焦点环。",
      "例如改成 transform: translateY(-2px) rotate(-1deg) scale(1.03);，动效更明显但幅度仍保持克制。"
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
    valueReference: [
      {
        "name": "3D 变换函数",
        "values": [
      "rotateX()：围绕 X 轴旋转。",
      "rotateY()：围绕 Y 轴旋转。",
      "rotateZ()：围绕 Z 轴旋转，接近普通 rotate()。",
      "translateZ()：沿 Z 轴前后移动。"
        ]
      },
      {
        "name": "3D 辅助属性",
        "values": [
      "perspective：透视距离，通常设置在父元素。",
      "transform-style: preserve-3d：保留子元素 3D 层次。",
      "backface-visibility: hidden：隐藏元素背面。"
        ]
      }
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
    ],
    exerciseSolutions: [
      "把 hover 的 rotateY(180deg) 和背面的 rotateY(180deg) 都改成 rotateX(180deg)，卡片会改为上下翻转。",
      "把 perspective 调小如 400px 会增强透视，调大如 1200px 会让 3D 效果更平缓。",
      "添加 @media (prefers-reduced-motion: reduce) { .flip-inner { transition: none; transform: none !important; } } 禁用翻转。"
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
    valueReference: [
      {
        "name": "animation 简写组成",
        "values": [
      "animation-name：关键帧名称。",
      "animation-duration：动画时长。",
      "animation-timing-function：速度曲线。",
      "animation-iteration-count：播放次数，例如 1、infinite。",
      "animation-direction：播放方向，例如 normal、reverse、alternate。"
        ]
      },
      {
        "name": "@keyframes",
        "values": [
      "from/to：等价于 0% 和 100%。",
      "百分比关键帧：描述动画在某个时间进度的样式。",
      "多个属性可以在同一关键帧中一起变化。"
        ]
      }
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
    ],
    exerciseSolutions: [
      "把 animation 中的 1.6s 改成 3s，pulse 循环会变慢，节奏更舒缓。",
      "在 50% 关键帧加入 box-shadow: 0 0 0 12px rgba(27,127,121,.16);，缩放到峰值时会出现发光扩散。",
      "添加 @media (prefers-reduced-motion: reduce) { .pulse-badge { animation: none; } }，减少动态偏好的用户不会看到循环动画。"
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
    valueReference: [
      {
        "name": "创建层叠上下文的常见条件",
        "values": [
      "position 非 static 且 z-index 不是 auto。",
      "opacity 小于 1。",
      "transform、filter、perspective 不为 none。",
      "isolation: isolate。",
      "fixed 或 sticky 定位元素。"
        ]
      },
      {
        "name": "z-index",
        "values": [
      "auto：使用默认层级，不创建新的显式层级。",
      "整数：数值越大越靠上，但只在同一层叠上下文内比较。",
      "负值：可能压到背景层附近，使用时要谨慎。"
        ]
      }
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
    ],
    exerciseSolutions: [
      "把 .stack-card 的 z-index 改成 3 后，在同一 .stack-stage 层叠上下文里它会盖过 z-index: 2 的弹层。",
      "给 .stack-stage 添加 opacity: 0.99 会创建新的层叠上下文，内部层级只在这个上下文里比较，不能和外部元素直接混排。",
      "保留 isolation: isolate 可以让组件内部 z-index 竞争不影响外部页面，是弹层/卡片组件常用边界。"
    ]
  }
];

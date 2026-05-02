export const lessons2018 = [
  {
    year: "2018",
    title: "2018 - 逻辑属性与书写模式",
    description: "Logical Properties 让间距、尺寸和边框跟随书写方向，而不是固定 left/right/top/bottom。",
    summary: "使用 margin-inline、padding-block、inline-size 和 border-inline-start 写国际化友好的样式。",
    coreExplanation: [
      "逻辑属性使用 inline 和 block 方向，而不是固定 left、right、top、bottom。",
      "在横排中文或英文中 inline 通常是水平，block 通常是垂直；在竖排或 RTL 语言中方向会变化。",
      "用 margin-inline、padding-block、border-inline-start 能让组件更容易适配多语言和不同书写模式。"
    ],
    valueReference: [
      {
        "name": "逻辑尺寸与间距",
        "values": [
      "inline-size：行内方向尺寸，横排时类似 width。",
      "block-size：块方向尺寸，横排时类似 height。",
      "margin-inline / padding-inline：行内方向两侧间距。",
      "margin-block / padding-block：块方向两侧间距。"
        ]
      },
      {
        "name": "逻辑边框",
        "values": [
      "border-inline-start：行内起始侧边框。",
      "border-inline-end：行内结束侧边框。",
      "border-block-start：块起始侧边框。",
      "border-block-end：块结束侧边框。"
        ]
      }
    ],
    exampleHtml: `<article class="logical-note">
  <strong>逻辑属性</strong>
  <p>这类写法更适合多语言和不同书写方向。</p>
</article>`,
    exampleCss: `.logical-note {
  inline-size: min(100%, 360px);
  padding-block: 18px;
  padding-inline: 20px;
  border-inline-start: 5px solid #1b7f79;
  border-radius: 8px;
  background: #ffffff;
}

.logical-note p {
  margin-block: 8px 0;
  color: #667085;
}
`,
    exercise: [
      "把 padding-left/right 改写成 padding-inline",
      "使用 margin-block 控制段落上下间距",
      "尝试 direction: rtl，观察 border-inline-start 的位置变化"
    ],
    exerciseSolutions: [
      "把 padding-left/right 改成 padding-inline，左右间距会变成行内方向间距，更适合 RTL 或竖排。",
      "用 margin-block: 8px 0; 控制段落块方向的前后间距，替代 margin-top/bottom。",
      "给容器设置 direction: rtl 后，border-inline-start 会从左侧变到右侧，体现逻辑方向。"
    ]
  },
  {
    year: "2018",
    title: "2018 - 滚动行为与滚动边距",
    description: "scroll-behavior、scroll-padding 和 overscroll-behavior 让页面滚动更可控，尤其适合锚点导航。",
    summary: "使用平滑滚动、滚动内边距和滚动链控制，减少固定导航遮挡和滚动穿透问题。",
    coreExplanation: [
      "scroll-behavior: smooth 让程序触发的滚动更平滑，但要在 reduced motion 下考虑关闭。",
      "scroll-padding 设置滚动容器的对齐内边距，常用于避免锚点被 sticky header 挡住。",
      "overscroll-behavior 控制滚动到边界时是否继续传递给父滚动区域，可减少弹窗内滚动穿透。"
    ],
    valueReference: [
      {
        "name": "滚动属性",
        "values": [
      "scroll-behavior: auto：立即跳转。",
      "scroll-behavior: smooth：平滑滚动。",
      "scroll-padding：设置滚动容器对齐内边距。",
      "scroll-margin：设置目标元素滚动外边距。"
        ]
      },
      {
        "name": "overscroll-behavior",
        "values": [
      "auto：默认滚动链传递。",
      "contain：阻止滚动链传递到父容器。",
      "none：还会禁止部分边界反馈行为。"
        ]
      }
    ],
    exampleHtml: `<main class="scroll-page">
  <nav><a href="#part-a">跳到 A</a></nav>
  <section id="part-a">章节 A</section>
</main>`,
    exampleCss: `.scroll-page {
  scroll-behavior: smooth;
  scroll-padding-top: 72px;
  overscroll-behavior: contain;
}

.scroll-page nav {
  position: sticky;
  top: 0;
  padding: 12px;
  background: #ffffff;
  border-bottom: 1px solid #dce3ed;
}

.scroll-page section {
  min-height: 220px;
  padding: 24px;
  background: #edf8f7;
}
`,
    exercise: [
      "移除 scroll-padding-top，观察锚点是否被粘性导航遮挡",
      "把 overscroll-behavior 改成 auto，比较边界滚动传递",
      "为多个章节增加 scroll-margin-top，处理单个目标的偏移"
    ],
    exerciseSolutions: [
      "移除 scroll-padding-top 后，通过锚点跳转时目标可能被 sticky 导航遮住。",
      "把 overscroll-behavior: contain 改成 auto，滚到边界后滚动可能继续传递给外层页面。",
      "给每个章节写 scroll-margin-top: 72px;，单个锚点目标会在滚动定位时额外留出顶部距离。"
    ]
  },
  {
    year: "2018",
    title: "2018 - prefers-reduced-motion 动画可访问性",
    description: "prefers-reduced-motion 让页面尊重用户减少动画的系统偏好，降低眩晕和干扰。",
    summary: "使用媒体查询为动画、滚动和转场提供更温和或关闭的替代样式。",
    coreExplanation: [
      "prefers-reduced-motion 读取用户系统偏好，表示用户希望减少非必要动态效果。",
      "减少动画不一定等于移除所有反馈，可以把大幅位移、缩放、视差改成颜色或透明度变化。",
      "循环、自动播放和滚动绑定动画尤其需要提供 reduced motion 版本。"
    ],
    valueReference: [
      {
        "name": "媒体查询值",
        "values": [
      "no-preference：用户没有要求减少动画。",
      "reduce：用户希望减少动画。"
        ]
      },
      {
        "name": "适合减少的效果",
        "values": [
      "大幅位移和缩放。",
      "视差滚动。",
      "循环动画。",
      "自动播放或闪烁效果。"
        ]
      }
    ],
    exampleHtml: `<button class="motion-button">
  保存设置
</button>`,
    exampleCss: `.motion-button {
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #1b7f79;
  color: #ffffff;
  font-weight: 900;
  transition: transform 240ms ease;
}

.motion-button:hover {
  transform: translateY(-3px) scale(1.03);
}

@media (prefers-reduced-motion: reduce) {
  .motion-button {
    transition: none;
  }

  .motion-button:hover {
    transform: none;
  }
}
`,
    exercise: [
      "把动画改成透明度变化，并为 reduced motion 提供静态状态",
      "为页面的 scroll-behavior 在 reduced motion 下改成 auto",
      "检查一个现有动画，判断它是否需要减少动态版本"
    ],
    exerciseSolutions: [
      "把 hover 的 transform 改成 opacity 或 background-color 变化，并在 reduce 下保持静态样式。",
      "在 @media (prefers-reduced-motion: reduce) 中写 html { scroll-behavior: auto; }，关闭平滑滚动。",
      "检查是否有循环、视差、大位移或自动播放动画；这些通常需要减少动态版本。"
    ]
  },
  {
    year: "2018",
    title: "2018 - Web Fonts 与可变字体",
    description: "@font-face、font-display 和 font-variation-settings 决定字体如何加载、回退和表达不同字重字宽。",
    summary: "使用 font-display 控制字体加载体验，用可变字体轴减少文件数量并提升排版弹性。",
    coreExplanation: [
      "@font-face 告诉浏览器字体文件来源，font-display 决定字体加载期间先显示什么以及是否替换。",
      "font-display: swap 会先显示回退字体，字体加载后替换，能减少空白文本但可能带来字形跳动。",
      "可变字体把多个字重、字宽或光学尺寸放进一个文件，通过 font-weight 或 font-variation-settings 调整。"
    ],
    valueReference: [
      {
        "name": "font-display",
        "values": [
      "auto：浏览器默认策略。",
      "block：短暂隐藏文字等待字体。",
      "swap：先显示回退字体，加载后替换。",
      "fallback：短等待，超时后使用回退。",
      "optional：网络不佳时可能放弃下载。"
        ]
      },
      {
        "name": "可变字体轴",
        "values": [
      "wght：字重。",
      "wdth：字宽。",
      "slnt：倾斜。",
      "opsz：光学尺寸。"
        ]
      }
    ],
    exampleHtml: `<article class="font-card">
  <h2>Variable Fonts</h2>
  <p>字体加载也会影响性能和阅读体验。</p>
</article>`,
    exampleCss: `@font-face {
  font-family: "Course Sans";
  src: local("Inter");
  font-display: swap;
}

.font-card {
  max-width: 380px;
  padding: 20px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
  font-family: "Course Sans", system-ui, sans-serif;
}

.font-card h2 {
  margin: 0 0 8px;
  font-variation-settings: "wght" 760;
}

.font-card p {
  margin: 0;
  color: #667085;
}
`,
    exercise: [
      "把 font-display 改成 optional，比较字体加载策略含义",
      "为标题设置不同 font-weight，观察可变字体的连续变化",
      "设计一组 system-ui 回退字体，减少字体加载失败的视觉跳动"
    ],
    exerciseSolutions: [
      "把 font-display: swap 改成 optional，网络慢时浏览器可能直接使用回退字体，不再替换。",
      "给标题尝试 font-weight: 400、700、900 或 font-variation-settings: 'wght' 760，观察粗细连续变化。",
      "使用 font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; 可减少字体失败时的突兀跳动。"
    ]
  }
];

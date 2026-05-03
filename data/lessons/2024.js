export const lessons2024 = [
  {
    year: "2024",
    title: "2024 - @scope 局部作用域",
    description: "@scope 让一组样式限制在某个 DOM 范围内，减少组件间样式泄漏。",
    summary: "使用 @scope (.component) { ... } 管理局部样式和邻近覆盖。",
    coreExplanation: [
      "@scope 把一组选择器限制在指定根元素范围内，减少样式泄漏到组件外部。",
      "作用域不会自动改变 HTML 结构，也不是 Shadow DOM。它只是改变选择器匹配范围和邻近覆盖关系。",
      "适合局部主题、文章内容样式和嵌入组件，但仍需要清楚的类名和层级组织。"
    ],
    valueReference: [
      {
        "name": "@scope",
        "values": [
      "@scope (.root) { ... }：规则只作用于 root 范围。",
      "@scope (.root) to (.limit) { ... }：到 limit 边界停止。",
      ":scope：表示当前作用域根。"
        ]
      },
      {
        "name": "适用场景",
        "values": [
      "文章内容局部排版。",
      "嵌入组件样式隔离。",
      "局部主题覆盖。"
        ]
      }
    ],
    exampleHtml: `<section class="scope-demo">
  <p>这个段落在作用域内。</p>
</section>
<p>这个段落在作用域外。</p>`,
    exampleCss: `p {
  color: #667085;
}

@scope (.scope-demo) {
  p {
    padding: 14px;
    border-radius: 10px;
    background: #edf8f7;
    color: #153f3c;
    font-weight: 800;
  }
}
`,
    exercise: [
      "把作用域根从 .scope-demo 改成 body，观察影响范围扩大",
      "在作用域外增加 p 样式，确认作用域内规则如何覆盖",
      "为一个局部组件写一组不会影响页面其他区域的样式"
    ],
    exerciseSolutions: [
      "把 @scope (.scope-demo) 改成 @scope (body)，作用范围会扩大到整个页面中的匹配 p。",
      "在作用域外写 p { color: ... }，再观察 @scope 内的 p 规则如何只影响 .scope-demo 内部。",
      "为组件写 @scope (.my-widget) { ... }，内部选择器可以简短，但不会影响组件外同名元素。"
    ]
  },
  {
    year: "2024",
    title: "2024 - text-wrap 与现代排版控制",
    description: "text-wrap: balance / pretty 让标题和段落换行更接近设计预期。",
    summary: "使用 text-wrap、hyphens、overflow-wrap 和 line-height 改善多行文本可读性。",
    coreExplanation: [
      "text-wrap: balance 会尽量平衡多行标题长度，减少最后一行只有一两个字的情况。",
      "text-wrap: pretty 更偏向正文可读性，尝试避免孤行和尴尬断行。",
      "排版控制要和 max-inline-size、line-height、overflow-wrap 一起看，单个属性不能解决所有换行问题。"
    ],
    valueReference: [
      {
        "name": "text-wrap",
        "values": [
      "wrap：正常换行。",
      "nowrap：不换行。",
      "balance：平衡多行文本，常用于标题。",
      "pretty：优化正文换行，减少尴尬断行。",
      "stable：编辑时尽量保持已排版行稳定。"
        ]
      },
      {
        "name": "相关属性",
        "values": [
      "overflow-wrap: anywhere：必要时任意断行。",
      "word-break：控制词内断行策略。",
      "hyphens: auto：允许自动连字符断词。"
        ]
      }
    ],
    exampleHtml: `<article class="type-card">
  <h2>现代 CSS 排版可以减少尴尬换行</h2>
  <p>合理的行高、换行策略和宽度限制能显著提升阅读体验。</p>
</article>`,
    exampleCss: `.type-card {
  max-inline-size: 420px;
  padding: 20px;
  border-radius: 14px;
  background: #ffffff;
  border: 1px solid #dce3ed;
}

.type-card h2 {
  margin: 0 0 10px;
  text-wrap: balance;
  line-height: 1.15;
}

.type-card p {
  margin: 0;
  line-height: 1.7;
  text-wrap: pretty;
  color: #667085;
}
`,
    exercise: [
      "移除 text-wrap: balance，比较标题换行差异",
      "给长英文单词添加 overflow-wrap: anywhere",
      "把 line-height 改成无单位值，并观察段落阅读感"
    ],
    exerciseSolutions: [
      "移除 text-wrap: balance 后，标题会按普通算法换行，可能出现最后一行很短。",
      "给长英文文本写 overflow-wrap: anywhere;，超长单词会在必要时断开，避免撑破容器。",
      "把 line-height 改成 1.5 或 1.7 这类无单位值；它会随字体大小缩放，比固定 px 更稳。"
    ]
  },
  {
    year: "2024",
    title: "2024 - Scroll-driven Animations 滚动驱动动画",
    description: "滚动驱动动画让动画进度跟随滚动位置，而不是固定时间，适合阅读进度、视差和入场效果。",
    summary: "使用 animation-timeline、scroll() 和 view() 把动画绑定到滚动容器或元素进入视口的过程。",
    coreExplanation: [
      "普通动画按时间推进，滚动驱动动画按滚动进度推进，因此用户滚到哪里动画就走到哪里。",
      "animation-timeline: scroll() 绑定滚动容器，view() 绑定元素进入和离开视口的过程。",
      "它很适合阅读进度和轻量入场，但不应让核心内容依赖动画才能被理解。"
    ],
    valueReference: [
      {
        "name": "时间线",
        "values": [
      "animation-timeline: scroll()：绑定滚动容器滚动进度。",
      "animation-timeline: view()：绑定元素进入视口过程。",
      "scroll-timeline-name：命名滚动时间线。",
      "view-timeline-name：命名视图时间线。"
        ]
      },
      {
        "name": "范围控制",
        "values": [
      "animation-range-start：动画开始范围。",
      "animation-range-end：动画结束范围。",
      "entry / cover / exit：视图时间线常见阶段关键字。"
        ]
      }
    ],
    exampleHtml: `<article class="scroll-story">
  <div class="progress"></div>
  <section>滚动阅读内容</section>
</article>`,
    exampleCss: `.scroll-story {
  max-height: 240px;
  overflow: auto;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.scroll-story .progress {
  position: sticky;
  top: 0;
  height: 6px;
  transform-origin: left;
  background: #1b7f79;
  animation: grow linear both;
  animation-timeline: scroll();
}

.scroll-story section {
  min-height: 520px;
  padding: 22px;
}

@keyframes grow {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
  }
}
`,
    exercise: [
      "把进度条改成垂直方向增长",
      "使用 animation-timeline: view() 为卡片进入视口添加淡入效果",
      "为 prefers-reduced-motion 用户关闭滚动驱动动画"
    ],
    exerciseSolutions: [
      "把进度条改成 width: 6px; height: auto; transform-origin: bottom; 并使用 scaleY，进度会垂直增长。",
      "为卡片写 animation: fade-in both; animation-timeline: view();，进入视口时透明度随滚动变化。",
      "在 @media (prefers-reduced-motion: reduce) 中把 animation: none; animation-timeline: auto; 关闭滚动动画。"
    ]
  },
  {
    year: "2024",
    title: "2024 - @property 与可动画变量",
    description: "@property 让自定义属性拥有类型、初始值和继承行为，从而可以参与平滑动画。",
    summary: "使用 @property 注册颜色、长度或数字变量，让主题色和组件状态可以被浏览器正确插值。",
    coreExplanation: [
      "@property 注册自定义属性的类型、初始值和继承行为，让浏览器知道它如何插值。",
      "未注册的自定义属性通常只能离散变化，注册为 <length>、<percentage>、<color> 后才能平滑过渡。",
      "注册的 syntax 必须和实际值匹配，否则声明会失效。百分比、长度和数字不能随意混用。"
    ],
    valueReference: [
      {
        "name": "@property 字段",
        "values": [
      "syntax：声明变量类型，例如 <length>、<percentage>、<color>、<number>。",
      "inherits：是否继承。",
      "initial-value：初始值，必须符合 syntax。"
        ]
      },
      {
        "name": "可注册类型",
        "values": [
      "<color>：颜色，可平滑插值。",
      "<length>：长度。",
      "<percentage>：百分比。",
      "<number>：数字。",
      "*：任意值，但不能提供类型化插值。"
        ]
      }
    ],
    exampleHtml: `<button class="property-button">
  Hover me
</button>`,
    exampleCss: `@property --shine {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 0%;
}

.property-button {
  --shine: 18%;
  padding: 14px 22px;
  border: 0;
  border-radius: 8px;
  background: linear-gradient(135deg, #133f5c, #1b7f79 var(--shine), #1f2937);
  color: #ffffff;
  font-weight: 900;
  transition: --shine 320ms ease;
}

.property-button:hover {
  --shine: 85%;
}
`,
    exercise: [
      "把 --shine 的 syntax 改成 <number>，观察百分比写法是否仍然合适",
      "注册一个 <color> 类型的变量，并用它驱动按钮背景变化",
      "移除 @property，比较自定义属性动画是否还能平滑过渡"
    ],
    exerciseSolutions: [
      "把 syntax 改成 <number> 后，--shine: 18% 不再匹配类型；应改成数字值，或保持 <percentage>。",
      "注册 @property --button-bg { syntax: '<color>'; inherits: false; initial-value: #133f5c; }，再 transition: --button-bg。",
      "移除 @property 后，浏览器不知道自定义属性类型，--shine 往往会离散跳变而不是平滑插值。"
    ]
  },
  {
    year: "2024",
    title: "2024 - @starting-style 与离散过渡",
    description: "@starting-style 和 transition-behavior 让新插入元素、弹层和 display 切换拥有自然进出场。",
    summary: "用 @starting-style 定义首次渲染起点，用 allow-discrete 处理 display 这类离散属性。",
    coreExplanation: [
      "@starting-style 定义元素首次进入渲染树时的起始样式，解决新插入元素没有旧值可过渡的问题。",
      "display、overlay 等离散属性不能像颜色一样连续插值，需要 transition-behavior: allow-discrete 参与。",
      "弹窗、popover、toast 和列表新增项都适合用它做进入动画，同时要控制退出状态。"
    ],
    valueReference: [
      {
        "name": "进入过渡",
        "values": [
      "@starting-style：定义元素首次渲染的起点样式。",
      "transition-behavior: allow-discrete：允许离散属性参与过渡。",
      "display：常见离散属性。",
      "overlay：top layer 相关离散属性。"
        ]
      },
      {
        "name": "常见状态",
        "values": [
      "opacity：透明度连续过渡。",
      "transform：位移、缩放连续过渡。",
      "display：需要 allow-discrete。",
      ":popover-open：popover 打开状态。"
        ]
      }
    ],
    exampleHtml: `<section class="enter-demo">
  <button type="button">新增消息</button>
  <div class="enter-list" aria-live="polite"></div>
</section>`,
    exampleCss: `.enter-demo {
  display: grid;
  gap: 12px;
  width: min(100%, 340px);
}

.enter-demo button {
  min-height: 40px;
  border: 0;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font: inherit;
  font-weight: 800;
}

.enter-list {
  display: grid;
  gap: 10px;
}

.enter-card {
  width: min(100%, 340px);
  padding: 18px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 240ms ease,
    transform 240ms ease,
    display 240ms allow-discrete;
}

@starting-style {
  .enter-card {
    opacity: 0;
    transform: translateY(16px);
  }
}

.enter-card p {
  margin: 8px 0 0;
  color: #667085;
}
`,
    exampleJs: `const list = document.querySelector(".enter-list");
const button = document.querySelector(".enter-demo button");
let count = 0;

function addMessage() {
  count += 1;
  const card = document.createElement("div");
  card.className = "enter-card";
  card.innerHTML = \`
    <strong>新消息 \${count}</strong>
    <p>元素插入渲染树时会从 @starting-style 过渡到正常状态。</p>
  \`;

  list.prepend(card);

  if (list.children.length > 2) {
    list.lastElementChild.remove();
  }
}

button.addEventListener("click", addMessage);
`,
    exercise: [
      "把 translateY 改成 scale，做一个缩放入场效果",
      "给卡片增加退出状态，并使用 transition-behavior: allow-discrete",
      "思考弹窗、toast 和菜单分别适合怎样的 starting style"
    ],
    exerciseSolutions: [
      "把 @starting-style 中的 transform 改成 scale(.96)，正常状态保持 scale(1)，元素会缩放入场。",
      "定义退出状态如 .enter-card.is-exiting { opacity: 0; transform: translateY(12px); display: none; }，并保留 allow-discrete。",
      "弹窗适合 opacity + scale，toast 适合 translateY + opacity，菜单适合轻微 scale/clip，幅度都应克制。"
    ]
  },
  {
    year: "2024",
    title: "2024 - light-dark 与主题系统",
    description: "light-dark() 配合 color-scheme 可以让颜色 token 同时响应浅色和深色模式。",
    summary: "使用语义变量、color-scheme 和 light-dark() 构建可维护的主题颜色体系。",
    coreExplanation: [
      "light-dark(浅色值, 深色值) 会根据当前 color-scheme 选择对应颜色。",
      "它适合写语义 token，例如 surface、text、border，而不是在每个组件中直接判断主题。",
      "color-scheme 声明环境能力，light-dark 提供具体值，两者配合才能形成更完整的原生主题方案。"
    ],
    valueReference: [
      {
        "name": "主题函数",
        "values": [
      "light-dark(light, dark)：根据当前 color-scheme 选择值。",
      "color-scheme: light dark：声明支持浅色和深色。",
      "prefers-color-scheme：读取系统主题偏好。"
        ]
      },
      {
        "name": "语义 token",
        "values": [
      "--surface：背景面。",
      "--text：主要文字。",
      "--muted：次要文字。",
      "--border：边框。",
      "--accent：强调色。"
        ]
      }
    ],
    exampleHtml: `<article class="theme-card">
  <h2>主题卡片</h2>
  <p>同一套变量适配浅色和深色环境。</p>
</article>`,
    exampleCss: `:root {
  color-scheme: light dark;
  --surface: light-dark(#ffffff, #111827);
  --text: light-dark(#1f2937, #f9fafb);
  --muted: light-dark(#667085, #a7b0c0);
  --border: light-dark(#dce3ed, #344054);
}

.theme-card {
  max-inline-size: 360px;
  padding: 20px;
  border: 1px solid var(--border);
  border-radius: 12px;
  background: var(--surface);
  color: var(--text);
}

.theme-card p {
  margin: 8px 0 0;
  color: var(--muted);
}
`,
    exercise: [
      "为按钮增加 --accent 语义色，并同时设置浅色和深色值",
      "移除 color-scheme，观察表单控件和滚动条的默认主题变化",
      "把直接写死的颜色替换成 surface、text、muted 这类语义变量"
    ],
    exerciseSolutions: [
      "新增 --accent: light-dark(#1b7f79, #51d6ce);，按钮背景和边框都引用 var(--accent)。",
      "移除 color-scheme 后，light-dark 的上下文和原生控件主题可能不再按预期配合。",
      "把 #ffffff、#1f2937、#667085 改成 --surface、--text、--muted 这类语义变量。"
    ]
  },
  {
    year: "2024",
    title: "2024 - backdrop-filter 与背景模糊",
    description: "backdrop-filter 可以处理元素背后的像素，常用于半透明导航、浮层和毛玻璃效果。",
    summary: "使用 backdrop-filter、透明背景和 @supports 回退，做出可读且性能克制的背景模糊界面。",
    coreExplanation: [
      "filter 处理元素自身像素，backdrop-filter 处理元素背后的像素，这是两者最重要的区别。",
      "要看到背景模糊，元素背景通常需要半透明；如果背景完全不透明，背后的像素被挡住就看不到效果。",
      "backdrop-filter 可能有性能成本，也可能不被某些环境支持，所以适合用 @supports 提供纯色回退。"
    ],
    valueReference: [
      {
        "name": "backdrop-filter 函数",
        "values": [
      "blur()：模糊背后像素。",
      "saturate()：增强或降低饱和度。",
      "brightness()：调整亮度。",
      "contrast()：调整对比度。"
        ]
      },
      {
        "name": "生效条件",
        "values": [
      "元素背景需要半透明。",
      "背后必须有可见内容。",
      "可用 @supports 提供不支持时的纯色回退。"
        ]
      }
    ],
    exampleHtml: `<section class="glass-stage">
  <div class="glass-panel">Glass Panel</div>
</section>`,
    exampleCss: `.glass-stage {
  display: grid;
  min-height: 180px;
  place-items: center;
  border-radius: 12px;
  background:
    linear-gradient(135deg, rgba(19, 63, 92, 0.9), rgba(27, 127, 121, 0.75)),
    radial-gradient(circle at 20% 20%, #ffffff, transparent 30%);
}

.glass-panel {
  padding: 18px 24px;
  border: 1px solid rgba(255, 255, 255, 0.45);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.72);
  color: #153f3c;
  font-weight: 900;
}

@supports (backdrop-filter: blur(12px)) {
  .glass-panel {
    background: rgba(255, 255, 255, 0.42);
    backdrop-filter: blur(12px) saturate(1.25);
  }
}
`,
    exercise: [
      "调低透明度，观察文字可读性如何变化",
      "使用 @supports not 为不支持 backdrop-filter 的浏览器提供纯色背景",
      "比较 filter 和 backdrop-filter 分别处理的是哪一层像素"
    ],
    exerciseSolutions: [
      "把 .glass-panel 的 rgba alpha 调低如 0.28，背景更透但文字可读性可能下降，需要补边框或提高文字对比。",
      "添加 @supports not (backdrop-filter: blur(12px)) { .glass-panel { background: #ffffff; } } 作为回退。",
      "filter 处理元素自身；backdrop-filter 处理元素背后的内容，所以需要半透明背景才能看见。"
    ]
  }
];

export const lessons = [
  {
    id: 1,
    title: "选择器与优先级",
    description: "掌握 CSS 选择器、组合规则和优先级，是写出稳定样式的基础。",
    summary: "了解类型选择器、类选择器、ID 选择器、属性选择器以及 !important 和继承的优先级规则。",
    exampleHtml: `<div class=\"card primary\">CSS3 Practice</div>`,
    exampleCss: `.card {
  padding: 18px 24px;
  border-radius: 18px;
  border: 1px solid #c7d2fe;
  background: #eef2ff;
}

.card.primary {
  background: #4f46e5;
  color: #f8fafc;
}

#main .card {
  border-color: #818cf8;
}

.card.primary {
  border-width: 2px;
}
`,
    exercise: [
      "判断下面哪个选择器优先级最高：.box, #app, div.box, body div#app .box",
      "使用类选择器和伪类样式一个按钮的悬停状态",
      "观察同一个元素上 .btn 和 .btn.primary 规则的覆盖结果"
    ]
  },
  {
    id: 2,
    title: "Flexbox 布局",
    description: "使用 Flexbox 实现水平和垂直居中、等间距排列、弹性伸缩布局。",
    summary: "通过 flex 容器与 flex 项目标识主轴、侧轴、换行和对齐方式，构建常见响应式布局。",
    exampleHtml: `<div class=\"layout\">\n  <div class=\"item\">1</div>\n  <div class=\"item\">2</div>\n  <div class=\"item\">3</div>\n</div>`,
    exampleCss: `.layout {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.item {
  flex: 1;
  min-width: 100px;
  padding: 18px;
  border-radius: 16px;
  background: #eef2ff;
  text-align: center;
}
`,
    exercise: [
      "让子元素在父容器中横向居中并等间距排列",
      "切换 align-items: stretch 与 align-items: center，观察侧轴对齐变化",
      "制作一个 3 列布局，宽度不足时自动换行"
    ]
  },
  {
    id: 3,
    title: "Grid 网格布局",
    description: "掌握 Grid 的二维布局能力，精确控制行列尺寸与区域排列。",
    summary: "使用 grid-template-columns、grid-template-rows、grid-gap 和 grid-area，完成复杂组件布局。",
    exampleHtml: `<div class=\"grid\">\n  <div>导航</div>\n  <div>内容</div>\n  <div>侧边栏</div>\n  <div>页脚</div>\n</div>`,
    exampleCss: `.grid {
  display: grid;
  grid-template-columns: 200px minmax(0, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 18px;
}

.grid > div {
  padding: 20px;
  border-radius: 18px;
  background: #eef2ff;
}

.grid > div:nth-child(2) {
  grid-row: 1 / span 2;
}
`,
    exercise: [
      "使用 Grid 创建一个固定侧边栏 + 自适应内容区布局",
      "把 1fr 1fr 1fr 改写为 repeat(3, 1fr)",
      "设计一个具有两列、三行网格的卡片展示区"
    ]
  },
  {
    id: 4,
    title: "背景与渐变",
    description: "了解如何使用背景图片、渐变、定位与重复控制视觉效果。",
    summary: "掌握 linear-gradient、radial-gradient、background-size、background-position 和 background-clip。",
    exampleHtml: `<div class=\"hero\">\n  <h2>CSS 渐变背景</h2>\n</div>`,
    exampleCss: `.hero {
  padding: 40px 24px;
  border-radius: 24px;
  background: linear-gradient(135deg, #4338ca, #a78bfa);
  color: #f8fafc;
  text-align: center;
}
`,
    exercise: [
      "把背景色换成斜向渐变，从蓝色过渡到紫色",
      "分别尝试 background-size: cover 与 contain，观察图像铺放变化",
      "让背景图像只显示在元素的 padding 区域"
    ]
  },
  {
    id: 5,
    title: "阴影与边框",
    description: "使用 box-shadow、text-shadow、border-radius 和 outline 丰富组件表现。",
    summary: "掌握不同阴影参数、内外阴影与多重边框效果。",
    exampleHtml: `<div class=\"card\">\n  <p>阴影与边框示例</p>\n</div>`,
    exampleCss: `.card {
  padding: 24px;
  border-radius: 24px;
  background: #ffffff;
  border: 1px solid rgba(99, 102, 241, 0.18);
  box-shadow: 0 24px 60px rgba(15, 23, 42, 0.1);
}
`,
    exercise: [
      "写出一个轻浮动卡片的 box-shadow 语句",
      "为文本添加柔和的发光效果",
      "为可聚焦元素添加 outline，并保持布局不被挤动"
    ]
  },
  {
    id: 6,
    title: "Transition 与 Animation",
    description: "通过过渡和关键帧动画提升交互反馈与页面活力。",
    summary: "区分 transition 和 animation，掌握属性变化、时序函数、延迟与循环。",
    exampleHtml: `<button class=\"btn\">悬停我</button>`,
    exampleCss: `.btn {
  padding: 14px 26px;
  border: none;
  border-radius: 999px;
  background: #4f46e5;
  color: #fff;
  cursor: pointer;
  transition: transform 0.28s ease, box-shadow 0.28s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(79, 70, 229, 0.24);
}
`,
    exercise: [
      "为按钮增加 0.2s 的背景色渐变过渡效果",
      "使用 @keyframes 创建一个从小到大的缩放动画",
      "写一个无限循环的呼吸效果动画"
    ]
  },
  {
    id: 7,
    title: "媒体查询与响应式",
    description: "使用 media query 适配不同屏幕尺寸，构建移动优先布局。",
    summary: "掌握 min-width、max-width、prefers-reduced-motion 等条件语句。",
    exampleHtml: `<div class=\"responsive\">\n  <div>区域 A</div>\n  <div>区域 B</div>\n</div>`,
    exampleCss: `.responsive {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

@media (max-width: 720px) {
  .responsive {
    grid-template-columns: 1fr;
  }
}
`,
    exercise: [
      "写一个在 720px 以下切换为单列布局的媒体查询",
      "把样式改成移动优先写法，再用 min-width 增强桌面布局",
      "使用 prefers-reduced-motion 为减少动画偏好的用户关闭动画"
    ]
  },
  {
    id: 8,
    title: "自定义属性与变量",
    description: "用 CSS 变量构建可复用主题、响应式间距和样式系统。",
    summary: "理解 :root、变量继承以及在 calc() 中组合变量的写法。",
    exampleHtml: `<div class=\"theme-card\">\n  <p>主题变量示例</p>\n</div>`,
    exampleCss: `:root {
  --surface: #eef2ff;
  --accent: #4f46e5;
  --radius: 22px;
}

.theme-card {
  padding: 24px;
  border-radius: var(--radius);
  background: var(--surface);
  color: var(--accent);
}
`,
    exercise: [
      "把变量 --radius 用于多个元素的圆角设置",
      "在主题类名中覆盖颜色变量，完成一次主题切换",
      "把一个重复颜色值改写成 CSS 变量并复用"
    ]
  },
  {
    id: 9,
    title: "过滤器与混合模式",
    description: "使用 filter 与 mix-blend-mode 为图片和图层添加高级视觉效果。",
    summary: "掌握模糊、饱和度、灰度、亮度等图像处理，以及图层混合模式。",
    exampleHtml: `<div class=\"filter-box\">\n  滤镜效果\n</div>`,
    exampleCss: `.filter-box {
  padding: 36px;
  text-align: center;
  border-radius: 24px;
  background: #4338ca;
  color: #fff;
  filter: drop-shadow(0 18px 30px rgba(79, 70, 229, 0.25));
}
`,
    exercise: [
      "为卡片添加灰度滤镜，并悬停恢复颜色",
      "分别尝试 mix-blend-mode 和 opacity，观察图层叠加效果",
      "写出一个模糊背景效果的 filter 组合"
    ]
  },
  {
    id: 10,
    title: "排版与文本样式",
    description: "掌握字体、行高、字距、文本溢出与文字装饰。",
    summary: "实现可读性强的排版风格，并避免常见的文本折行问题。",
    exampleHtml: `<div class=\"typography\">\n  <h2>标题</h2>\n  <p>稳定排版是界面设计的核心。合理的字体、行高与间距可以显著提升可读性。</p>\n</div>`,
    exampleCss: `.typography h2 {
  margin: 0 0 12px;
  font-size: 2rem;
}

.typography p {
  margin: 0;
  line-height: 1.75;
  letter-spacing: 0.02em;
}
`,
    exercise: [
      "把固定像素 line-height 改成无单位值，并观察多行文本间距",
      "实现一个溢出时显示省略号的文本样式",
      "使用 text-transform: uppercase 处理标签或短标题文本"
    ]
  }
];

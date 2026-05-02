export const lessons2020 = [
  {
    year: "2020",
    title: "2020 - aspect-ratio 固定比例",
    description: "aspect-ratio 让图片、视频和卡片占位可以稳定保持比例，减少布局跳动。",
    summary: "使用 aspect-ratio 配合 width、object-fit 和 grid 构建稳定媒体区域。",
    coreExplanation: [
      "aspect-ratio 给元素一个首选宽高比，浏览器可以在内容加载前预留稳定空间。",
      "它和 width、height、min/max 尺寸一起计算。如果同时给定明确宽高，比例可能不再参与决定尺寸。",
      "图片和视频区域配合 object-fit 使用，可以减少加载时布局跳动。"
    ],
    exampleHtml: `<figure class="ratio-card">
  <div class="media">16 / 9</div>
  <figcaption>稳定比例区域</figcaption>
</figure>`,
    exampleCss: `.ratio-card {
  width: min(100%, 360px);
  margin: 0;
}

.ratio-card .media {
  display: grid;
  aspect-ratio: 16 / 9;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, #133f5c, #1b7f79);
  color: #ffffff;
  font-weight: 900;
}

.ratio-card figcaption {
  margin-top: 10px;
  color: #667085;
}
`,
    exercise: [
      "把比例改成 1 / 1，观察卡片变成正方形",
      "创建 4 / 3 的图片占位区域",
      "结合 object-fit: cover 处理真实图片裁切"
    ]
  },
  {
    year: "2020",
    title: "2020 - :focus-visible 与可访问性状态",
    description: ":focus-visible 可以区分键盘焦点和鼠标点击，让焦点环既清晰又不过度打扰。",
    summary: "使用 :focus-visible、:focus-within 和 outline 构建键盘友好的交互反馈。",
    coreExplanation: [
      ":focus-visible 只在浏览器判断需要明显焦点提示时匹配，通常是键盘导航场景。",
      ":focus-within 匹配内部有焦点的容器，适合把整个表单组或卡片高亮。",
      "不要用 outline: none 直接删除焦点。可以自定义样式，但必须保留清楚可见的键盘焦点。"
    ],
    exampleHtml: `<form class="focus-form">
  <label>
    邮箱
    <input type="email" placeholder="name@example.com">
  </label>
  <button>订阅</button>
</form>`,
    exampleCss: `.focus-form {
  display: grid;
  gap: 12px;
  width: min(100%, 340px);
}

.focus-form label {
  display: grid;
  gap: 6px;
  color: #344054;
  font-weight: 800;
}

.focus-form input,
.focus-form button {
  min-height: 44px;
  border: 1px solid #cfd8e3;
  border-radius: 8px;
  padding: 10px 12px;
  font: inherit;
}

.focus-form:focus-within {
  color: #153f3c;
}

.focus-form input:focus-visible,
.focus-form button:focus-visible {
  outline: 4px solid rgba(27, 127, 121, 0.24);
  outline-offset: 2px;
}
`,
    exercise: [
      "把 :focus-visible 改成 :focus，比较鼠标点击时的差异",
      "为错误输入增加 :invalid 与 :focus-visible 的组合样式",
      "检查按钮、链接、输入框是否都有清楚的键盘焦点"
    ]
  },
  {
    year: "2020",
    title: "2020 - Box Alignment 对齐简写",
    description: "Box Alignment 统一了 Grid、Flex 和块布局中的对齐能力，让居中和分布写法更一致。",
    summary: "使用 place-items、place-content、justify-content 和 align-items 快速表达主轴与交叉轴对齐。",
    coreExplanation: [
      "Box Alignment 把 Grid、Flex 等布局中的对齐概念统一起来，减少不同布局模型之间的心智切换。",
      "place-items 是 align-items 和 justify-items 的简写，常用于 Grid 中快速居中项目。",
      "Flexbox 中 justify-content 沿主轴工作，align-items 沿交叉轴工作，轴向会随 flex-direction 改变。"
    ],
    exampleHtml: `<div class="align-stage">
  <button>Center</button>
</div>`,
    exampleCss: `.align-stage {
  display: grid;
  width: min(100%, 320px);
  min-height: 180px;
  place-items: center;
  border: 1px dashed #9aa8bb;
  border-radius: 12px;
  background: #f8fafc;
}

.align-stage button {
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 900;
}
`,
    exercise: [
      "把 place-items 拆成 align-items 和 justify-items",
      "改用 display: flex，并使用 justify-content 与 align-items 居中",
      "尝试 place-content: center，观察它和 place-items 的差异"
    ]
  },
  {
    year: "2020",
    title: "2020 - forced-colors 与高对比度适配",
    description: "forced-colors 和 prefers-contrast 帮助页面适配系统高对比度、强制颜色和辅助阅读环境。",
    summary: "使用系统颜色、可见边框和媒体查询，让按钮、卡片和焦点状态在辅助模式下依然清楚。",
    coreExplanation: [
      "forced-colors: active 表示系统正在强制使用有限调色板，浏览器可能替换你写的背景和文字颜色。",
      "系统颜色如 ButtonText、ButtonFace、CanvasText 会映射到用户当前主题，比固定色值更可靠。",
      "状态不能只靠颜色差异表达。边框、轮廓、文字和图标形状都能帮助高对比度模式下识别状态。"
    ],
    exampleHtml: `<button class="contrast-button">
  继续练习
</button>`,
    exampleCss: `.contrast-button {
  min-height: 44px;
  padding: 12px 18px;
  border: 2px solid transparent;
  border-radius: 8px;
  background: #133f5c;
  color: #ffffff;
  font-weight: 900;
}

.contrast-button:focus-visible {
  outline: 3px solid #1b7f79;
  outline-offset: 3px;
}

@media (forced-colors: active) {
  .contrast-button {
    border-color: ButtonText;
    background: ButtonFace;
    color: ButtonText;
  }

  .contrast-button:focus-visible {
    outline-color: Highlight;
  }
}
`,
    exercise: [
      "把透明边框改成可见边框，比较普通模式和强制颜色模式",
      "使用 Canvas、CanvasText、ButtonFace 等系统颜色",
      "检查仅靠背景色区分状态的组件是否还足够清楚"
    ]
  }
];

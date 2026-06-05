export const lessons2013 = [
  {
    year: "2013",
    title: "2013 - 滤镜与混合模式",
    description: "filter 与 mix-blend-mode 让图像处理和图层混合进入 CSS。",
    summary: "使用 blur、grayscale、drop-shadow 和 blend mode 做视觉状态与图层效果。",
    coreExplanation: [
      "filter 处理元素最终绘制出的像素，常用于模糊、灰度、阴影和对比度变化。",
      "mix-blend-mode 决定元素像素如何和背后的像素混合，效果强但容易受背景变化影响。",
      "滤镜和混合可能增加合成成本，也可能降低文字可读性，最好用于图片、装饰层或明确的状态反馈。"
    ],
    valueReference: [
      {
        "name": "filter 函数",
        "values": [
      "blur()：模糊。",
      "grayscale()：灰度。",
      "brightness()：亮度。",
      "contrast()：对比度。",
      "saturate()：饱和度。",
      "drop-shadow()：按透明轮廓投影。"
        ]
      },
      {
        "name": "mix-blend-mode",
        "values": [
      "normal：正常绘制。",
      "multiply：正片叠底，通常变暗。",
      "screen：滤色，通常变亮。",
      "overlay：叠加，对比更强。",
      "difference：差值，常用于特殊视觉效果。"
        ]
      }
    ],
    exampleHtml: `<div class="filter-card">
  <span>Filter</span>
</div>`,
    exampleCss: `.filter-card {
  display: grid;
  width: 220px;
  height: 140px;
  place-items: center;
  border-radius: 18px;
  background: linear-gradient(135deg, #133f5c, #b9472f);
  color: #ffffff;
  font-weight: 900;
  filter: drop-shadow(0 16px 28px rgba(19, 63, 92, 0.24));
}

.filter-card:hover {
  filter: grayscale(1) drop-shadow(0 16px 28px rgba(19, 63, 92, 0.18));
}
`,
    exercise: [
      "把 hover 的 grayscale 改成 blur，观察可读性变化",
      "增加 saturate 或 contrast，做一个强调状态",
      "使用 drop-shadow 替代 box-shadow，观察它如何跟随透明形状"
    ],
    exerciseSolutions: [
      "把 hover 中的 grayscale(1) 改成 blur(3px)，元素会变模糊，文字可读性会下降。",
      "例如写 filter: saturate(1.35) contrast(1.08) drop-shadow(...);，颜色会更鲜明、对比更强。",
      "drop-shadow 会按照元素透明轮廓投影；box-shadow 只按矩形盒子投影，透明形状不会被跟随。"
    ]
  },
  {
    year: "2013",
    title: "2013 - pointer-events 与交互穿透",
    description: "pointer-events 可以控制元素是否响应鼠标和触摸事件，常用于覆盖层、装饰层和禁用状态。",
    summary: "使用 pointer-events: none 让装饰元素不拦截点击，或配合状态类管理交互区域。",
    coreExplanation: [
      "pointer-events: none 会让元素不响应鼠标或触摸命中，事件会落到它后面的元素上。",
      "它适合装饰层、光效层和纯视觉覆盖层，但不应该作为唯一的禁用逻辑，因为键盘和语义状态还需要 disabled 或 aria-disabled。",
      "需要点击遮罩关闭弹窗时，遮罩就不应该穿透；需要遮罩只是视觉高光时，才适合 pointer-events: none。"
    ],
    valueReference: [
      {
        "name": "pointer-events",
        "values": [
      "auto：正常响应指针事件。",
      "none：不作为鼠标或触摸命中目标，事件会穿透到后面元素。"
        ]
      },
      {
        "name": "常见搭配",
        "values": [
      "装饰层：通常用 pointer-events: none。",
      "遮罩层：通常保留 auto，用来接收点击关闭。",
      "禁用控件：还需要 disabled 或 aria-disabled，不能只靠 pointer-events。"
        ]
      }
    ],
    exampleHtml: `<div class="media-link">
  <a href="#">打开课程</a>
  <span class="shine"></span>
</div>`,
    exampleCss: `.media-link {
  position: relative;
  display: inline-grid;
  padding: 18px 26px;
  border-radius: 12px;
  background: #133f5c;
}

.media-link a {
  position: relative;
  z-index: 1;
  color: #ffffff;
  font-weight: 900;
  text-decoration: none;
}

.media-link .shine {
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.35));
  pointer-events: none;
}
`,
    exercise: [
      "移除 pointer-events: none，观察装饰层是否影响链接点击",
      "给禁用按钮设置 pointer-events: none，并补充视觉禁用状态",
      "思考哪些覆盖层应该接收点击，哪些只应该作为视觉装饰"
    ],
    exerciseSolutions: [
      "移除 .shine 的 pointer-events: none 后，装饰层可能挡住下面的链接点击，尤其当它覆盖整个按钮区域时。",
      "禁用状态可以写 .button.is-disabled { pointer-events: none; opacity: .5; cursor: not-allowed; }，真实表单按钮还应使用 disabled。",
      "需要接收关闭点击的遮罩用 pointer-events: auto；只负责视觉高光、纹理、光效的覆盖层用 none。"
    ]
  }
];

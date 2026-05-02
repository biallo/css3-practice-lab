export const lessons2015 = [
  {
    year: "2015",
    title: "2015 - calc 与现代长度单位",
    description: "calc()、视口单位和 clamp() 让尺寸可以在固定值和弹性值之间组合。",
    summary: "使用 calc、min、max、clamp、vw 和 rem 写出更稳定的响应式尺寸。",
    coreExplanation: [
      "calc() 可以混合不同单位，例如百分比减固定间距。计算发生在浏览器布局阶段。",
      "rem 参考根字号，vw 参考视口宽度，百分比通常参考包含块。理解参考对象才能预测最终尺寸。",
      "calc() 解决的是组合计算，min()、max()、clamp() 解决的是范围约束，它们经常一起使用。"
    ],
    valueReference: [
      {
        "name": "calc()",
        "values": [
      "可以混合 px、%、rem、vw 等单位。",
      "运算符 + 和 - 两边需要空格。",
      "常用于宽度减固定间距、流体尺寸和布局补偿。"
        ]
      },
      {
        "name": "常见长度单位",
        "values": [
      "px：固定像素。",
      "rem：根元素字号倍数。",
      "%：通常相对包含块或上下文。",
      "vw/vh：相对视口宽高。",
      "ch：大约等于字符 0 的宽度。"
        ]
      }
    ],
    exampleHtml: `<div class="fluid-panel">
  <h2>Fluid Size</h2>
  <p>宽度和字体随容器变化，但仍有上下限。</p>
</div>`,
    exampleCss: `.fluid-panel {
  width: min(100%, calc(320px + 12vw));
  padding: clamp(16px, 4vw, 32px);
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid #dce3ed;
}

.fluid-panel h2 {
  margin: 0 0 8px;
  font-size: clamp(1.4rem, 3vw, 2.2rem);
}

.fluid-panel p {
  margin: 0;
  color: #667085;
}
`,
    exercise: [
      "把 padding 的最小值改成 12px，观察小屏间距",
      "使用 max() 保证按钮至少 44px 高",
      "用 clamp() 给标题设置一个不会过大也不会过小的字号"
    ],
    exerciseSolutions: [
      "把 padding: clamp(16px, 4vw, 32px) 改成 clamp(12px, 4vw, 32px)，小屏最小内边距会降到 12px。",
      "给按钮写 min-height: max(44px, 2.75rem);，能保证触控高度不低于 44px。",
      "例如 font-size: clamp(1.25rem, 3vw, 2rem);，标题会随视口变化但不会超过上下限。"
    ]
  },
  {
    year: "2015",
    title: "2015 - min、max 与 clamp 响应式尺寸",
    description: "min()、max() 和 clamp() 可以把响应式规则写进单个属性，减少断点数量。",
    summary: "用 clamp 设置流体字号和间距，用 min/max 约束宽度、高度与触控目标尺寸。",
    coreExplanation: [
      "min() 取较小值，max() 取较大值，clamp(最小值, 理想值, 最大值) 把尺寸限制在一个区间内。",
      "clamp() 特别适合流体字号和间距：中间值随视口变化，但不会小到不可读，也不会大到失控。",
      "这些函数不是媒体查询替代品。它们适合连续变化，媒体查询适合布局结构发生明显切换。"
    ],
    valueReference: [
      {
        "name": "数学函数",
        "values": [
      "min(a, b)：取较小值。",
      "max(a, b)：取较大值。",
      "clamp(min, preferred, max)：把理想值限制在最小和最大之间。"
        ]
      },
      {
        "name": "典型用法",
        "values": [
      "font-size: clamp(1rem, 2vw, 2rem)：流体字号。",
      "width: min(100%, 60rem)：不超过容器也不超过最大宽度。",
      "min-height: max(44px, 2.75rem)：保证触控目标。"
        ]
      }
    ],
    exampleHtml: `<article class="fluid-type">
  <h2>流体标题</h2>
  <p>字号、间距和宽度都在合理范围内自动变化。</p>
</article>`,
    exampleCss: `.fluid-type {
  width: min(100%, 48rem);
  padding: clamp(16px, 5vw, 40px);
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.fluid-type h2 {
  margin: 0 0 max(8px, 1.5vw);
  font-size: clamp(1.5rem, 4vw, 3rem);
  line-height: 1.1;
}

.fluid-type p {
  margin: 0;
  color: #667085;
}
`,
    exercise: [
      "把标题最大字号从 3rem 改成 2.4rem，观察桌面效果",
      "使用 max(44px, 2.75rem) 保证按钮触控高度",
      "把一个媒体查询控制的字号改写成 clamp()"
    ],
    exerciseSolutions: [
      "把 .fluid-type h2 的 clamp 最大值从 3rem 改成 2.4rem，大屏标题会停止在更小尺寸。",
      "给按钮或交互元素设置 min-height: max(44px, 2.75rem)，确保不同字号下仍满足触控尺寸。",
      "把 @media 中分段字号改成 font-size: clamp(1.25rem, 3vw, 2rem);，让字号连续变化。"
    ]
  },
  {
    year: "2015",
    title: "2015 - @supports 与渐进增强",
    description: "@supports 可以检测浏览器是否支持某个 CSS 特性，让新能力以增强方式加入页面。",
    summary: "使用 @supports 包裹新语法，先提供稳定基础样式，再为支持的浏览器启用现代布局和效果。",
    coreExplanation: [
      "@supports 会检测浏览器是否理解某个属性值或选择器语法，支持时才应用内部规则。",
      "渐进增强的顺序是先写所有浏览器都能用的基础样式，再用 @supports 打开新特性增强体验。",
      "@supports selector(:has(*)) 这类写法适合保护新选择器，避免旧浏览器因为不理解选择器而丢弃整段规则。"
    ],
    valueReference: [
      {
        "name": "@supports",
        "values": [
      "@supports (property: value)：支持某属性值时应用。",
      "@supports not (...)：不支持时应用回退。",
      "@supports selector(:has(*))：检测选择器支持。"
        ]
      },
      {
        "name": "组合逻辑",
        "values": [
      "and：多个条件都满足。",
      "or：任一条件满足。",
      "not：条件取反。",
      "括号：明确组合优先级。"
        ]
      }
    ],
    exampleHtml: `<article class="support-card">
  <h2>渐进增强</h2>
  <p>基础样式先可用，新能力再增强。</p>
</article>`,
    exampleCss: `.support-card {
  max-width: 360px;
  padding: 18px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

@supports (display: grid) {
  .support-card {
    display: grid;
    gap: 8px;
  }
}

@supports selector(:has(*)) {
  .support-card:has(h2) {
    border-color: #1b7f79;
  }
}
`,
    exercise: [
      "为不支持某个新特性的浏览器保留基础布局",
      "使用 @supports not (...) 写一个回退样式",
      "用 @supports selector(:has(*)) 包裹一段 :has() 规则"
    ],
    exerciseSolutions: [
      "先在 @supports 外写基础布局，如 display: block；再在 @supports (display: grid) 中升级为 grid。",
      "例如 @supports not (display: grid) { .support-card { display: block; } }，为不支持 Grid 的环境提供回退。",
      "把 :has 规则包进 @supports selector(:has(*)) { .support-card:has(h2) { ... } }，旧浏览器会跳过这段增强。"
    ]
  },
  {
    year: "2015",
    title: "2015 - CSS 回退关键字与重置",
    description: "initial、inherit、unset、revert 和 revert-layer 可以精确控制属性回到哪个来源或层级。",
    summary: "理解 CSS 全局关键字，用 revert-layer 配合级联层写出更可控的重置和组件覆盖。",
    coreExplanation: [
      "initial 回到属性初始值，inherit 强制继承父元素，unset 对可继承属性等于 inherit，对不可继承属性等于 initial。",
      "revert 会回到浏览器或用户样式表中的结果，常用于恢复原生控件或链接默认表现。",
      "revert-layer 只回退当前级联层中的声明，适合和 @layer 一起使用，撤销组件层覆盖但保留基础层规则。"
    ],
    valueReference: [
      {
        "name": "全局关键字",
        "values": [
      "initial：回到属性规范定义的初始值。",
      "inherit：强制继承父元素计算值。",
      "unset：可继承属性等于 inherit，不可继承属性等于 initial。",
      "revert：回到浏览器或用户样式的结果。",
      "revert-layer：只回退当前 @layer。"
        ]
      },
      {
        "name": "使用场景",
        "values": [
      "inherit：让表单控件继承字体。",
      "revert：恢复链接、按钮等原生表现。",
      "revert-layer：撤销组件层覆盖但保留基础层。"
        ]
      }
    ],
    exampleHtml: `<section class="reset-demo">
  <button class="reset-button">默认按钮</button>
  <button class="reset-button plain">重置按钮</button>
</section>`,
    exampleCss: `@layer base, components;

@layer base {
  button {
    font: inherit;
  }
}

@layer components {
  .reset-button {
    padding: 12px 18px;
    border: 0;
    border-radius: 8px;
    background: #133f5c;
    color: #ffffff;
    font-weight: 900;
  }

  .reset-button.plain {
    background: revert-layer;
    color: inherit;
    border: 1px solid #cfd8e3;
  }
}
`,
    exercise: [
      "分别尝试 initial、inherit、unset 和 revert 的差异",
      "把 plain 按钮的 color 改成 revert-layer，观察层级回退",
      "为一个组件写只重置当前层样式的规则"
    ],
    exerciseSolutions: [
      "分别把某个属性设为 initial、inherit、unset、revert；观察它是回初始值、继承父级、按继承性重置，还是回浏览器默认。",
      "把 .reset-button.plain 的 color 改成 revert-layer，它会撤销当前 components 层对 color 的覆盖。",
      "在组件层里写 .component.is-plain { background: revert-layer; color: revert-layer; }，只回退当前层的组件外观。"
    ]
  }
];

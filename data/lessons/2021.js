export const lessons2021 = [
  {
    year: "2021",
    title: "2021 - Flex gap 与布局间距统一",
    description: "gap 从 Grid 扩展到 Flex 后，列表、按钮组和工具栏间距更容易维护。",
    summary: "使用 gap 替代 margin hack，让布局间距由容器统一控制。",
    coreExplanation: [
      "gap 由容器控制项目之间的间距，不会像 margin 那样把首尾项目也推出额外空间。",
      "Flex gap 支持换行后的行距和列距统一管理，适合按钮组、标签组和工具栏。",
      "当组件间距属于布局关系时优先放在父容器 gap 中；当间距属于元素自身外部关系时再考虑 margin。"
    ],
    exampleHtml: `<div class="action-row">
  <button>保存</button>
  <button>预览</button>
  <button>发布</button>
</div>`,
    exampleCss: `.action-row {
  display: flex;
  flex-wrap: wrap;
  gap: 10px 14px;
}

.action-row button {
  min-height: 44px;
  border: 1px solid #cfd8e3;
  border-radius: 8px;
  padding: 10px 14px;
  background: #ffffff;
  color: #344054;
  font-weight: 800;
}
`,
    exercise: [
      "把行间距和列间距设置成不同值",
      "移除按钮上的 margin，改由容器 gap 控制",
      "让按钮组换行后仍保持一致间距"
    ]
  },
  {
    year: "2021",
    title: "2021 - accent-color 与原生表单美化",
    description: "accent-color 可以用一行 CSS 改变复选框、单选框和滑块等原生控件的强调色。",
    summary: "使用 accent-color 保留浏览器原生可访问性，同时让表单控件贴近品牌色。",
    coreExplanation: [
      "accent-color 改变复选框、单选框、range 等原生控件的强调色，同时保留浏览器可访问性和交互行为。",
      "它继承自父元素，所以可以在 fieldset 或表单容器上统一设置。",
      "完全自定义控件成本更高，需要处理键盘、焦点、状态和辅助技术语义；accent-color 是低成本优先方案。"
    ],
    exampleHtml: `<fieldset class="accent-form">
  <label><input type="checkbox" checked> 接收练习提醒</label>
  <label><input type="radio" name="level" checked> 入门</label>
  <input type="range" value="70">
</fieldset>`,
    exampleCss: `.accent-form {
  display: grid;
  gap: 12px;
  width: min(100%, 320px);
  padding: 16px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  accent-color: #1b7f79;
}

.accent-form label {
  display: flex;
  gap: 10px;
  align-items: center;
  color: #344054;
  font-weight: 800;
}
`,
    exercise: [
      "把 accent-color 改成品牌色变量",
      "比较 accent-color 和完全自定义 checkbox 的维护成本",
      "为不同 fieldset 设置不同 accent-color，观察控件继承"
    ]
  },
  {
    year: "2021",
    title: "2021 - scrollbar-gutter 与滚动条稳定",
    description: "scrollbar-gutter 可以提前为滚动条预留空间，减少内容高度变化时的横向跳动。",
    summary: "使用 scrollbar-gutter、scrollbar-color 和 overflow 让滚动区域更稳定也更易读。",
    coreExplanation: [
      "scrollbar-gutter: stable 会为滚动条预留空间，避免内容从不滚动变成可滚动时横向跳动。",
      "scrollbar-color 可以调整滚动条颜色，但不同浏览器支持和表现不完全一致。",
      "稳定滚动条空间适合侧边栏、代码块和固定宽度面板。全页面使用时要注意视觉留白。"
    ],
    exampleHtml: `<div class="stable-scroll">
  <p>内容可能变长，也可能刚好不需要滚动条。</p>
  <p>预留滚动条空间可以减少布局晃动。</p>
</div>`,
    exampleCss: `.stable-scroll {
  max-height: 150px;
  overflow: auto;
  scrollbar-gutter: stable;
  scrollbar-color: #9aa8bb transparent;
  padding: 16px;
  border: 1px solid #dce3ed;
  border-radius: 12px;
  background: #ffffff;
}

.stable-scroll p {
  margin: 0 0 18px;
  color: #344054;
}
`,
    exercise: [
      "移除 scrollbar-gutter，比较滚动条出现时内容宽度是否变化",
      "尝试 scrollbar-gutter: stable both-edges",
      "给一个侧边栏列表添加稳定滚动条空间"
    ]
  }
];

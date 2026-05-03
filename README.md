# CSS3 Practice Lab

一个面向现代 CSS 学习的课程练习项目，覆盖从 CSS3 基础到近年浏览器平台能力的核心知识点。

## 在线预览

[https://biallo.github.io/css3-practice-lab/](https://biallo.github.io/css3-practice-lab/)

## 课程范围

课程内容包括选择器与优先级、盒模型、背景与渐变、媒体查询、Flexbox、Grid、动画、层叠上下文、自定义属性、容器查询、Subgrid、现代颜色函数、Popover、View Transitions、Anchor Positioning、content-visibility 等。

课程数据按单年拆分在 `data/lessons/` 中：

```text
data/
  lessons.js
  lessons/
    2009.js
    2010.js
    ...
    2025.js
    index.js
```

`data/lessons/index.js` 汇总各年份课程，`data/lessons.js` 为课程补充连续 `id`。

## 运行

```bash
npm install
npm run dev
```

## 构建

```bash
npm run build
```

## 维护课程

新增课程时，在对应年份文件中添加课程对象，并确认包含这些字段：

- `year`
- `title`
- `description`
- `summary`
- `coreExplanation`
- `exampleHtml`
- `exampleCss`
- `exampleJs`（可选，需要交互脚本的示例才添加）
- `exercise`
- `exerciseSolutions`

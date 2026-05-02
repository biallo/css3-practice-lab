export function createExampleDocument(lesson) {
  return createPreviewDocument(lesson.exampleHtml, lesson.exampleCss);
}

export function renderPracticePreview(lesson, css, preview) {
  preview.srcdoc = createPreviewDocument(lesson.exampleHtml, css);
}

export function createPreviewDocument(html, css) {
  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <style>
    * {
      box-sizing: border-box;
    }

    html,
    body {
      margin: 0;
      min-height: 100%;
    }

    body {
      display: grid;
      min-height: 160px;
      place-items: center;
      padding: 24px;
      background: linear-gradient(180deg, #ffffff 0%, #edf8f7 100%);
      color: #344054;
      font-family: Inter, "Helvetica Neue", Arial, sans-serif;
    }

${css}
  </style>
</head>
<body>
  ${html}
</body>
</html>`;
}

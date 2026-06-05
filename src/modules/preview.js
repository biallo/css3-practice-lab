export function createExampleDocument(lesson) {
  return createPreviewDocument(lesson.exampleHtml, lesson.exampleCss, lesson.exampleJs);
}

export function renderPracticePreview(lesson, css, preview) {
  preview.srcdoc = createPreviewDocument(lesson.exampleHtml, css, lesson.exampleJs);
}

export function createPreviewDocument(html, css, js = "") {
  const script = js ? `<script>\n${js.replaceAll("</script", "<\\/script")}\n</script>` : "";

  return `<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8" />
  <base href="about:srcdoc">
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
  ${script}
</body>
</html>`;
}

import { lessons } from "./data/lessons.js";

const lessonList = document.getElementById("lessonList");
const mobileLessonSelect = document.getElementById("mobileLessonSelect");
const lessonTitle = document.getElementById("lessonTitle");
const lessonMeta = document.getElementById("lessonMeta");
const lessonContent = document.getElementById("lessonContent");
const progressBar = document.getElementById("progressBar");
const progressValue = document.getElementById("progressValue");
const tabButtons = Array.from(document.querySelectorAll(".study-tab"));

const completedStorageKey = "css3-practice-completed-lessons";
const selectedLessonStorageKey = "css3-practice-selected-lesson";
const practiceDraftsStorageKey = "css3-practice-drafts";
const completedLessons = new Set(loadCompletedLessons());
const practiceDrafts = loadPracticeDrafts();
let selectedLessonId = loadSelectedLessonId();
let activeTab = "explain";

function renderLessonCards() {
  lessonList.innerHTML = "";
  lessons.forEach((lesson) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "lesson-card";
    card.innerHTML = `
      <span class="lesson-number">${lesson.id}</span>
      <div class="lesson-copy">
        <h3>${lesson.title}</h3>
        <div class="lesson-details">
          <p>${lesson.description}</p>
          <span class="lesson-status">${completedLessons.has(lesson.id) ? "已完成" : "未完成"}</span>
        </div>
      </div>
    `;
    card.addEventListener("click", () => selectLesson(lesson.id));
    card.dataset.lessonId = lesson.id;
    lessonList.appendChild(card);
  });
}

function renderMobileLessonOptions() {
  mobileLessonSelect.innerHTML = `
    <option value="" disabled ${selectedLessonId === null ? "selected" : ""}>请选择课程</option>
    ${lessons
      .map((lesson) => {
        const selected = lesson.id === selectedLessonId ? "selected" : "";
        const status = completedLessons.has(lesson.id) ? " - 已完成" : "";
        return `<option value="${lesson.id}" ${selected}>${lesson.id}. ${lesson.title}${status}</option>`;
      })
      .join("")}
  `;
}

function selectLesson(id, options = {}) {
  const { scrollOnMobile = true } = options;
  const lesson = lessons.find((item) => item.id === id);
  if (!lesson) return;

  selectedLessonId = lesson.id;
  activeTab = "explain";
  saveSelectedLessonId();

  const active = lessonList.querySelector(".lesson-card.active");
  if (active) {
    active.classList.remove("active");
    active.removeAttribute("aria-current");
  }
  const card = lessonList.querySelector(`[data-lesson-id='${id}']`);
  if (card) {
    card.classList.add("active");
    card.setAttribute("aria-current", "true");
    scrollLessonCardIntoView(card);
  }
  mobileLessonSelect.value = String(lesson.id);

  lessonTitle.textContent = `${lesson.id}. ${lesson.title}`;
  lessonMeta.textContent = lesson.summary;
  renderTabs();
  renderLessonContent(lesson);

  if (scrollOnMobile && window.matchMedia("(max-width: 720px)").matches) {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.querySelector(".lesson-detail-panel").scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start"
    });
  }
}

function renderTabs() {
  tabButtons.forEach((button) => {
    const isActive = button.dataset.tab === activeTab;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderLessonContent(lesson = getSelectedLesson()) {
  if (activeTab === "practice") {
    renderPracticeTab(lesson);
    return;
  }

  if (activeTab === "review") {
    renderReviewTab(lesson);
    return;
  }

  renderExplainTab(lesson);
}

function renderExplainTab(lesson) {
  lessonContent.innerHTML = `
    <section class="lesson-section">
      <h3>核心讲解</h3>
      <p>${lesson.summary}</p>
    </section>
    <section class="lesson-section">
      <h3>参考示例</h3>
      <div class="example-frame">
        <iframe id="examplePreview" class="example-preview" title="${lesson.title} 示例预览" sandbox></iframe>
      </div>
      <pre class="code-block"><code>${escapeHtml(lesson.exampleHtml)}</code></pre>
      <pre class="code-block"><code>${escapeHtml(lesson.exampleCss)}</code></pre>
    </section>
  `;

  document.getElementById("examplePreview").srcdoc = createExampleDocument(lesson);
}

function renderPracticeTab(lesson) {
  lessonContent.innerHTML = `
    <section class="lesson-section exercise-card">
      <h3>练习题</h3>
      <ul>
        ${lesson.exercise.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      <div class="practice-workspace">
        <label class="practice-editor-wrap">
          <span>练习 CSS</span>
          <textarea id="practiceEditor" spellcheck="false">${escapeHtml(getPracticeDraft(lesson))}</textarea>
        </label>
        <div class="practice-preview-wrap">
          <span>效果演示</span>
          <iframe id="practicePreview" class="practice-preview" title="${lesson.title} 练习效果" sandbox></iframe>
        </div>
      </div>
      <div class="button-row">
        <button type="button" id="resetPracticeButton" class="secondary-button">重置练习</button>
      </div>
    </section>
  `;

  const practiceEditor = document.getElementById("practiceEditor");
  const practicePreview = document.getElementById("practicePreview");
  const resetPracticeButton = document.getElementById("resetPracticeButton");
  renderPracticePreview(lesson, practiceEditor.value, practicePreview);

  practiceEditor.addEventListener("input", () => {
    practiceDrafts[lesson.id] = practiceEditor.value;
    savePracticeDrafts();
    renderPracticePreview(lesson, practiceEditor.value, practicePreview);
  });
  practiceEditor.addEventListener("keydown", handleEditorTabKey);

  resetPracticeButton.addEventListener("click", () => {
    practiceEditor.value = createPracticeStarter(lesson);
    practiceDrafts[lesson.id] = practiceEditor.value;
    savePracticeDrafts();
    renderPracticePreview(lesson, practiceEditor.value, practicePreview);
  });
}

function renderReviewTab(lesson) {
  lessonContent.innerHTML = `
    <section class="lesson-section review-card">
      <h3>本课复盘</h3>
      <p>${lesson.summary}</p>
      <ul class="review-list">
        <li>已经阅读核心讲解，并能把本课概念和页面效果联系起来。</li>
        <li>已经观察参考示例，理解 HTML 结构和 CSS 规则的配合方式。</li>
        ${lesson.exercise.map((item) => `<li>${item}</li>`).join("")}
      </ul>
      ${renderCompleteButton(lesson)}
    </section>
  `;

  document.getElementById("completeButton").addEventListener("click", () => {
    completedLessons.add(lesson.id);
    saveCompletedLessons();
    updateProgress();
    renderLessonCards();
    renderMobileLessonOptions();
    selectLesson(lesson.id);
  });
}

function renderCompleteButton(lesson) {
  return `
    <button
      type="button"
      id="completeButton"
      class="complete-button ${completedLessons.has(lesson.id) ? "completed" : ""}"
      ${completedLessons.has(lesson.id) ? "disabled" : ""}
    >
      ${completedLessons.has(lesson.id) ? "已完成" : "标记为已完成"}
    </button>
  `;
}

mobileLessonSelect.addEventListener("change", (event) => {
  selectLesson(Number(event.target.value));
});

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTab = button.dataset.tab;
    renderTabs();
    renderLessonContent();
  });
});

function updateProgress() {
  const completed = completedLessons.size;
  const total = lessons.length;
  const percent = Math.round((completed / total) * 100);
  progressBar.style.width = `${percent}%`;
  progressValue.textContent = `${completed} / ${total} 已完成`;
}

function loadCompletedLessons() {
  const saved = localStorage.getItem(completedStorageKey);
  if (!saved) return [];

  try {
    const lessonIds = JSON.parse(saved);
    if (!Array.isArray(lessonIds)) return [];
    return lessonIds.filter((id) => Number.isInteger(id));
  } catch {
    return [];
  }
}

function saveCompletedLessons() {
  localStorage.setItem(completedStorageKey, JSON.stringify([...completedLessons]));
}

function loadPracticeDrafts() {
  const saved = localStorage.getItem(practiceDraftsStorageKey);
  if (!saved) return {};

  try {
    const drafts = JSON.parse(saved);
    return drafts && typeof drafts === "object" && !Array.isArray(drafts) ? drafts : {};
  } catch {
    return {};
  }
}

function savePracticeDrafts() {
  localStorage.setItem(practiceDraftsStorageKey, JSON.stringify(practiceDrafts));
}

function loadSelectedLessonId() {
  const saved = Number(localStorage.getItem(selectedLessonStorageKey));
  return lessons.some((lesson) => lesson.id === saved) ? saved : lessons[0].id;
}

function saveSelectedLessonId() {
  localStorage.setItem(selectedLessonStorageKey, String(selectedLessonId));
}

function getSelectedLesson() {
  return lessons.find((lesson) => lesson.id === selectedLessonId) ?? lessons[0];
}

function handleEditorTabKey(event) {
  if (event.key !== "Tab") return;

  event.preventDefault();

  const editor = event.currentTarget;
  if (event.shiftKey) {
    unindentSelection(editor);
  } else {
    indentSelection(editor);
  }

  editor.dispatchEvent(new Event("input", { bubbles: true }));
}

function indentSelection(editor) {
  const indent = "  ";
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const value = editor.value;

  if (start === end) {
    editor.setRangeText(indent, start, end, "end");
    return;
  }

  const lineStart = value.lastIndexOf("\n", start - 1) + 1;
  const selectedText = value.slice(lineStart, end);
  const indentedText = selectedText.replace(/^/gm, indent);
  editor.setRangeText(indentedText, lineStart, end, "select");
  editor.selectionStart = lineStart;
  editor.selectionEnd = lineStart + indentedText.length;
}

function unindentSelection(editor) {
  const start = editor.selectionStart;
  const end = editor.selectionEnd;
  const value = editor.value;
  const lineStart = value.lastIndexOf("\n", start - 1) + 1;
  const selectedText = value.slice(lineStart, end);
  const unindentedText = selectedText.replace(/^( {1,2}|\t)/gm, "");
  const removedBeforeStart = selectedText
    .slice(0, start - lineStart)
    .split("\n")
    .reduce((count, line) => count + (line.startsWith("  ") ? 2 : line.startsWith(" ") || line.startsWith("\t") ? 1 : 0), 0);

  editor.setRangeText(unindentedText, lineStart, end, "select");
  editor.selectionStart = Math.max(lineStart, start - removedBeforeStart);
  editor.selectionEnd = lineStart + unindentedText.length;
}

function createExampleDocument(lesson) {
  return createPreviewDocument(lesson.exampleHtml, lesson.exampleCss);
}

function getPracticeDraft(lesson) {
  return practiceDrafts[lesson.id] ?? createPracticeStarter(lesson);
}

function createPracticeStarter(lesson) {
  return `/* 练习目标：
${lesson.exercise.map((item) => `- ${item}`).join("\n")}
*/

${lesson.exampleCss}`;
}

function renderPracticePreview(lesson, css, preview) {
  preview.srcdoc = createPreviewDocument(lesson.exampleHtml, css);
}

function createPreviewDocument(html, css) {
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

function scrollLessonCardIntoView(card) {
  if (window.matchMedia("(max-width: 980px)").matches) return;

  requestAnimationFrame(() => {
    const listRect = lessonList.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const isAbove = cardRect.top < listRect.top;
    const isBelow = cardRect.bottom > listRect.bottom;

    if (!isAbove && !isBelow) return;

    const centeredOffset = cardRect.top - listRect.top - (lessonList.clientHeight - card.offsetHeight) / 2;
    lessonList.scrollTop += centeredOffset;
  });
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

renderLessonCards();
renderMobileLessonOptions();
updateProgress();
selectLesson(selectedLessonId, { scrollOnMobile: false });

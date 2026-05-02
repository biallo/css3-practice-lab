import { lessons } from "../data/lessons.js";
import { handleEditorTabKey } from "./editor.js";
import { createExampleDocument, renderPracticePreview } from "./preview.js";
import {
  loadCompletedLessons,
  loadPracticeDrafts,
  loadSelectedLessonId,
  saveCompletedLessons,
  savePracticeDrafts,
  saveSelectedLessonId
} from "./storage.js";
import { escapeHtml, scrollLessonCardIntoView } from "./utils.js";

const lessonList = document.getElementById("lessonList");
const mobileLessonSelect = document.getElementById("mobileLessonSelect");
const lessonTitle = document.getElementById("lessonTitle");
const lessonContent = document.getElementById("lessonContent");
const progressBar = document.getElementById("progressBar");
const progressValue = document.getElementById("progressValue");
const tabButtons = Array.from(document.querySelectorAll(".study-tab"));

const completedLessons = new Set(loadCompletedLessons());
const practiceDrafts = loadPracticeDrafts();
let selectedLessonId = loadSelectedLessonId(lessons);
let activeTab = "explain";

export function initApp() {
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

  renderLessonCards();
  renderMobileLessonOptions();
  updateProgress();
  selectLesson(selectedLessonId, { scrollOnMobile: false });
}

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
    if (lesson.id === selectedLessonId) {
      card.classList.add("active");
      card.setAttribute("aria-current", "true");
    }
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
  saveSelectedLessonId(selectedLessonId);

  const active = lessonList.querySelector(".lesson-card.active");
  if (active) {
    active.classList.remove("active");
    active.removeAttribute("aria-current");
  }
  const card = lessonList.querySelector(`[data-lesson-id='${id}']`);
  if (card) {
    card.classList.add("active");
    card.setAttribute("aria-current", "true");
    scrollLessonCardIntoView(card, lessonList);
  }
  mobileLessonSelect.value = String(lesson.id);

  lessonTitle.textContent = `${lesson.id}. ${lesson.title}`;
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
      ${renderCoreExplanation(lesson)}
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

function renderCoreExplanation(lesson) {
  const points = Array.isArray(lesson.coreExplanation) && lesson.coreExplanation.length > 0
    ? lesson.coreExplanation
    : [lesson.summary];

  return `
    <p class="lesson-summary">${escapeHtml(lesson.summary)}</p>
    <ul class="core-explanation">
      ${points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
    </ul>
    ${renderValueReference(lesson)}
  `;
}

function renderValueReference(lesson) {
  if (!Array.isArray(lesson.valueReference) || lesson.valueReference.length === 0) {
    return "";
  }

  return `
    <div class="value-reference">
      <h4>常用取值 / 关键语法</h4>
      <dl>
        ${lesson.valueReference
          .map((group) => `
            <div class="value-reference-group">
              <dt>${escapeHtml(group.name)}</dt>
              <dd>
                <ul>
                  ${group.values.map((value) => `<li>${escapeHtml(value)}</li>`).join("")}
                </ul>
              </dd>
            </div>
          `)
          .join("")}
      </dl>
    </div>
  `;
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
        <button type="button" id="toggleSolutionButton" class="secondary-button" aria-expanded="false">查看答案</button>
        <button type="button" id="resetPracticeButton" class="secondary-button">重置练习</button>
      </div>
      <div id="solutionPanel" class="solution-panel" hidden>
        <div class="solution-header">
          <h4>练习答案</h4>
          <button type="button" id="applySolutionButton" class="secondary-button">应用参考 CSS</button>
        </div>
        ${renderExerciseSolutions(lesson)}
        <h5 class="solution-code-title">参考 CSS</h5>
        <pre class="code-block"><code>${escapeHtml(getSolutionCss(lesson))}</code></pre>
      </div>
    </section>
  `;

  const practiceEditor = document.getElementById("practiceEditor");
  const practicePreview = document.getElementById("practicePreview");
  const toggleSolutionButton = document.getElementById("toggleSolutionButton");
  const solutionPanel = document.getElementById("solutionPanel");
  const applySolutionButton = document.getElementById("applySolutionButton");
  const resetPracticeButton = document.getElementById("resetPracticeButton");
  renderPracticePreview(lesson, practiceEditor.value, practicePreview);

  practiceEditor.addEventListener("input", () => {
    practiceDrafts[lesson.id] = practiceEditor.value;
    savePracticeDrafts(practiceDrafts);
    renderPracticePreview(lesson, practiceEditor.value, practicePreview);
  });
  practiceEditor.addEventListener("keydown", handleEditorTabKey);

  toggleSolutionButton.addEventListener("click", () => {
    const isOpen = !solutionPanel.hidden;
    solutionPanel.hidden = isOpen;
    toggleSolutionButton.setAttribute("aria-expanded", String(!isOpen));
    toggleSolutionButton.textContent = isOpen ? "查看答案" : "隐藏答案";
  });

  applySolutionButton.addEventListener("click", () => {
    setPracticeEditorValue(lesson, practiceEditor, practicePreview, getSolutionCss(lesson));
    practiceEditor.focus();
  });

  resetPracticeButton.addEventListener("click", () => {
    setPracticeEditorValue(lesson, practiceEditor, practicePreview, createPracticeStarter(lesson), {
      scrollToTop: true
    });
    practiceEditor.focus();
  });
}

function renderExerciseSolutions(lesson) {
  const solutions = getExerciseSolutions(lesson);

  return `
    <ol class="exercise-solutions">
      ${solutions
        .map((solution, index) => `
          <li>
            <strong>${escapeHtml(lesson.exercise[index] ?? `练习 ${index + 1}`)}</strong>
            <p>${escapeHtml(solution)}</p>
          </li>
        `)
        .join("")}
    </ol>
  `;
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
    saveCompletedLessons(completedLessons);
    updateProgress();
    renderLessonCards();
    renderMobileLessonOptions();
    renderReviewTab(lesson);
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

function updateProgress() {
  const completed = completedLessons.size;
  const total = lessons.length;
  const percent = Math.round((completed / total) * 100);
  progressBar.style.width = `${percent}%`;
  progressValue.textContent = `${completed} / ${total} 已完成`;
}

function getSelectedLesson() {
  return lessons.find((lesson) => lesson.id === selectedLessonId) ?? lessons[0];
}

function getPracticeDraft(lesson) {
  return practiceDrafts[lesson.id] ?? createPracticeStarter(lesson);
}

function createPracticeStarter(lesson) {
  return `/* 练习目标：
${lesson.exercise.map((item) => `- ${item}`).join("\n")}
*/

/* 从这里开始编写你的 CSS */
`;
}

function getSolutionCss(lesson) {
  return lesson.solutionCss ?? lesson.exampleCss;
}

function getExerciseSolutions(lesson) {
  if (Array.isArray(lesson.exerciseSolutions) && lesson.exerciseSolutions.length === lesson.exercise.length) {
    return lesson.exerciseSolutions;
  }

  return lesson.exercise.map((item) => `参考做法：围绕“${item}”修改左侧 CSS，再对照预览观察变化。`);
}

function setPracticeEditorValue(lesson, editor, preview, value, options = {}) {
  const { scrollToTop = false } = options;
  editor.value = value;
  practiceDrafts[lesson.id] = value;
  savePracticeDrafts(practiceDrafts);
  renderPracticePreview(lesson, value, preview);

  if (scrollToTop) {
    editor.scrollTop = 0;
    editor.setSelectionRange(0, 0);
  }
}

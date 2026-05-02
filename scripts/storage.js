export const completedStorageKey = "css3-practice-completed-lessons";
export const selectedLessonStorageKey = "css3-practice-selected-lesson";
export const practiceDraftsStorageKey = "css3-practice-drafts";

export function loadCompletedLessons() {
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

export function saveCompletedLessons(completedLessons) {
  localStorage.setItem(completedStorageKey, JSON.stringify([...completedLessons]));
}

export function loadPracticeDrafts() {
  const saved = localStorage.getItem(practiceDraftsStorageKey);
  if (!saved) return {};

  try {
    const drafts = JSON.parse(saved);
    return drafts && typeof drafts === "object" && !Array.isArray(drafts) ? drafts : {};
  } catch {
    return {};
  }
}

export function savePracticeDrafts(practiceDrafts) {
  localStorage.setItem(practiceDraftsStorageKey, JSON.stringify(practiceDrafts));
}

export function loadSelectedLessonId(lessons) {
  const saved = Number(localStorage.getItem(selectedLessonStorageKey));
  return lessons.some((lesson) => lesson.id === saved) ? saved : lessons[0].id;
}

export function saveSelectedLessonId(selectedLessonId) {
  localStorage.setItem(selectedLessonStorageKey, String(selectedLessonId));
}

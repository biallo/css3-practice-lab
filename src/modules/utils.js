export function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export function scrollLessonCardIntoView(card, lessonList) {
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

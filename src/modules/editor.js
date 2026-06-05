export function handleEditorTabKey(event) {
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

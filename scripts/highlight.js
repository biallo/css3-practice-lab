import { escapeHtml } from "./utils.js";

export function renderCodeBlock(code, language) {
  return `
    <pre class="code-block language-${language}"><code>${highlightCode(code, language)}</code></pre>
  `;
}

export function setupEditableCodeEditor(editor, initialValue, language = "css") {
  let value = initialValue;

  const setValue = (nextValue, selectionStart = null, selectionEnd = selectionStart) => {
    value = nextValue;
    editor.innerHTML = highlightCode(value || " ", language);
    if (selectionStart !== null) {
      restoreSelection(editor, selectionStart, selectionEnd);
    }
  };

  const syncFromDom = () => {
    const selection = getSelectionOffsets(editor);
    value = getEditableText(editor);
    setValue(value, selection.start, selection.end);
  };

  const replaceSelection = (replacement) => {
    const selection = getSelectionOffsets(editor);
    const nextValue = value.slice(0, selection.start) + replacement + value.slice(selection.end);
    const nextOffset = selection.start + replacement.length;
    setValue(nextValue, nextOffset);
    editor.dispatchEvent(new Event("input", { bubbles: true }));
  };

  editor.addEventListener("input", syncFromDom);
  editor.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    event.preventDefault();
    if (event.shiftKey) {
      unindentEditableSelection(editor, value, setValue);
    } else {
      indentEditableSelection(editor, value, setValue);
    }
    editor.dispatchEvent(new Event("input", { bubbles: true }));
  });
  editor.addEventListener("paste", (event) => {
    event.preventDefault();
    replaceSelection(event.clipboardData.getData("text/plain"));
  });

  setValue(initialValue);

  return {
    getValue: () => value,
    setValue
  };
}

export function highlightCode(code, language = "css") {
  if (language === "html") return highlightHtml(code);
  if (language === "js") return highlightJs(code);
  return highlightCss(code);
}

function highlightCss(code) {
  const tokenPattern =
    /(\/\*[\s\S]*?\*\/)|("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(@[\w-]+)|(--[\w-]+)|(!important\b)|(#(?:[0-9a-f]{3,8})\b)|(#[\w-]+)|(\.[\w-]+)|(\[[^\]]+\])|(:{1,2}[\w-]+)|(\b-?\d*\.?\d+(?:[a-z%]+)?\b)|(\b[a-z-]+(?=\s*:))|(\b[a-z-]+(?=\())|(\b(?:auto|none|block|inline|inline-block|flex|grid|relative|absolute|fixed|sticky|hidden|visible|center|start|end|space-between|space-around|space-evenly|solid|dashed|ease|linear|infinite|alternate|both|forwards|backwards|cover|contain|repeat|no-repeat|pointer|default|border-box|content-box|light|dark)\b)|([{}()[\],;:>+~=])/gi;

  return highlightByPattern(code, tokenPattern, (match) => {
    if (match[1]) return wrapToken(match[0], "comment");
    if (match[2]) return wrapToken(match[0], "string");
    if (match[3]) return wrapToken(match[0], "atrule");
    if (match[4]) return wrapToken(match[0], "variable");
    if (match[5]) return wrapToken(match[0], "important");
    if (match[6]) return wrapToken(match[0], "color");
    if (match[7] || match[8] || match[9] || match[10]) return wrapToken(match[0], "selector");
    if (match[11]) return wrapToken(match[0], "number");
    if (match[12]) return wrapToken(match[0], "property");
    if (match[13]) return wrapToken(match[0], "function");
    if (match[14]) return wrapToken(match[0], "keyword");
    return wrapToken(match[0], "punctuation");
  });
}

function highlightHtml(code) {
  const tagPattern = /<!--[\s\S]*?-->|<\/?[A-Za-z][\w:-]*(?:\s+[^\s=>/]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s"'=>`]+))?)*\s*\/?>/g;

  return highlightByPattern(code, tagPattern, (match) => highlightHtmlTag(match[0]));
}

function highlightHtmlTag(tag) {
  if (tag.startsWith("<!--")) {
    return wrapToken(tag, "comment");
  }

  const partPattern =
    /(<\/?)([A-Za-z][\w:-]*)|(\s+)([A-Za-z_:][\w:.-]*)(?=\s*=)|(\s+)([A-Za-z_:][\w:.-]*)(?=\s|\/?>)|(=)("[^"]*"|'[^']*'|[^\s"'=>`]+)|(\/?>)/g;

  return highlightByPattern(tag, partPattern, (match) => {
    if (match[1]) return `${escapeHtml(match[1])}${wrapToken(match[2], "tag")}`;
    if (match[3]) return `${escapeHtml(match[3])}${wrapToken(match[4], "attr")}`;
    if (match[5]) return `${escapeHtml(match[5])}${wrapToken(match[6], "attr")}`;
    if (match[7]) return `${escapeHtml(match[7])}${wrapToken(match[8], "string")}`;
    return wrapToken(match[0], "punctuation");
  });
}

function highlightJs(code) {
  const tokenPattern =
    /(\/\/.*|\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^`\\])*`|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')|(\b(?:const|let|var|function|return|if|else|for|of|new|class|true|false|null|undefined|async|await)\b)|(\b\d+(?:\.\d+)?\b)|(\b[A-Za-z_$][\w$]*(?=\())|([{}()[\],.;:+\-*/%=<>!&|?])/g;

  return highlightByPattern(code, tokenPattern, (match) => {
    if (match[1]) return wrapToken(match[0], "comment");
    if (match[2]) return wrapToken(match[0], "string");
    if (match[3]) return wrapToken(match[0], "keyword");
    if (match[4]) return wrapToken(match[0], "number");
    if (match[5]) return wrapToken(match[0], "function");
    return wrapToken(match[0], "punctuation");
  });
}

function highlightByPattern(code, pattern, renderMatch) {
  let html = "";
  let lastIndex = 0;

  for (const match of code.matchAll(pattern)) {
    html += escapeHtml(code.slice(lastIndex, match.index));
    html += renderMatch(match);
    lastIndex = match.index + match[0].length;
  }

  html += escapeHtml(code.slice(lastIndex));
  return html;
}

function wrapToken(value, type) {
  const color = getTokenColor(type);
  const style = `color: ${color} !important; -webkit-text-fill-color: ${color} !important;`;
  return `<span class="syntax-${type}" style="${style}">${escapeHtml(value)}</span>`;
}

function getTokenColor(type) {
  const colors = {
    attr: "#8dd6a5",
    atrule: "#c7a8ff",
    color: "#ff9da4",
    comment: "#8996a9",
    function: "#82e6d9",
    important: "#c7a8ff",
    keyword: "#c7a8ff",
    number: "#ff9da4",
    property: "#8dd6a5",
    punctuation: "#b9c6d8",
    selector: "#78d6ff",
    string: "#ffd479",
    tag: "#78d6ff",
    variable: "#ff9da4"
  };

  return colors[type] ?? "#edf4ff";
}

function indentEditableSelection(editor, value, setValue) {
  const indent = "  ";
  const selection = getSelectionOffsets(editor);

  if (selection.start === selection.end) {
    const nextValue = value.slice(0, selection.start) + indent + value.slice(selection.end);
    setValue(nextValue, selection.start + indent.length);
    return;
  }

  const lineStart = value.lastIndexOf("\n", selection.start - 1) + 1;
  const selectedText = value.slice(lineStart, selection.end);
  const indentedText = selectedText.replace(/^/gm, indent);
  setValue(value.slice(0, lineStart) + indentedText + value.slice(selection.end), lineStart, lineStart + indentedText.length);
}

function unindentEditableSelection(editor, value, setValue) {
  const selection = getSelectionOffsets(editor);
  const lineStart = value.lastIndexOf("\n", selection.start - 1) + 1;
  const selectedText = value.slice(lineStart, selection.end);
  const unindentedText = selectedText.replace(/^( {1,2}|\t)/gm, "");
  const removedBeforeStart = selectedText
    .slice(0, selection.start - lineStart)
    .split("\n")
    .reduce((count, line) => count + (line.startsWith("  ") ? 2 : line.startsWith(" ") || line.startsWith("\t") ? 1 : 0), 0);

  setValue(
    value.slice(0, lineStart) + unindentedText + value.slice(selection.end),
    Math.max(lineStart, selection.start - removedBeforeStart),
    lineStart + unindentedText.length
  );
}

function getEditableText(editor) {
  return editor.innerText.replace(/\u00a0/g, " ");
}

function getSelectionOffsets(root) {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return { start: 0, end: 0 };
  }

  const range = selection.getRangeAt(0);
  if (!root.contains(range.startContainer) || !root.contains(range.endContainer)) {
    return { start: 0, end: 0 };
  }

  return {
    start: getOffsetForBoundary(root, range.startContainer, range.startOffset),
    end: getOffsetForBoundary(root, range.endContainer, range.endOffset)
  };
}

function getOffsetForBoundary(root, container, offset) {
  const range = document.createRange();
  range.selectNodeContents(root);
  range.setEnd(container, offset);
  return range.toString().length;
}

function restoreSelection(root, start, end = start) {
  const selection = window.getSelection();
  if (!selection) return;

  const range = document.createRange();
  const startPosition = getTextNodePosition(root, start);
  const endPosition = getTextNodePosition(root, end);
  range.setStart(startPosition.node, startPosition.offset);
  range.setEnd(endPosition.node, endPosition.offset);
  selection.removeAllRanges();
  selection.addRange(range);
}

function getTextNodePosition(root, offset) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let remaining = offset;
  let lastTextNode = null;

  while (walker.nextNode()) {
    const node = walker.currentNode;
    lastTextNode = node;
    if (remaining <= node.nodeValue.length) {
      return { node, offset: remaining };
    }
    remaining -= node.nodeValue.length;
  }

  if (lastTextNode) {
    return { node: lastTextNode, offset: lastTextNode.nodeValue.length };
  }

  return { node: root, offset: 0 };
}

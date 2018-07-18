import hljs from 'highlight.js';

function highlightCodeBlock(rawCode) {
  return hljs.highlightAuto(rawCode).value;
}

export { highlightCodeBlock };

import Prism from 'prismjs';

function highlightHtml(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['html']) : '';
}

export { highlightHtml };

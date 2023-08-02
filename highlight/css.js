import Prism from 'prismjs';
function highlightCss(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['css']) : '';
}
export { highlightCss };
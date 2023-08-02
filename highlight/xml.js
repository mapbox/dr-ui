import Prism from 'prismjs';
function highlightXml(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['markup']) : '';
}
export { highlightXml };
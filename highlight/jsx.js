import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';
function highlightJsx(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['jsx']) : '';
}
export { highlightJsx };
import Prism from 'prismjs';
import 'prismjs/components/prism-swift';
function highlightSwift(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['swift']) : '';
}
export { highlightSwift };
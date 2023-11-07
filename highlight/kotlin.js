import Prism from 'prismjs';
import 'prismjs/components/prism-kotlin';
function highlightKotlin(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['kotlin']) : '';
}
export { highlightKotlin };
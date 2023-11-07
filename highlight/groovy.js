import Prism from 'prismjs';
import 'prismjs/components/prism-groovy';
function highlightGroovy(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['groovy']) : '';
}
export { highlightGroovy };
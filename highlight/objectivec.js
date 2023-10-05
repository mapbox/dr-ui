import Prism from 'prismjs';
import 'prismjs/components/prism-c';
import 'prismjs/components/prism-objectivec';
function highlightObjectivec(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['objectivec']) : '';
}
export { highlightObjectivec };
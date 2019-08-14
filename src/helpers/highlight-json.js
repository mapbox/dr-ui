import Prism from 'prismjs';
import 'prismjs/components/prism-json';

function highlightJson(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['json']) : '';
}

export { highlightJson };

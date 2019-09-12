import Prism from 'prismjs';
import 'prismjs/components/prism-java';

function highlightJava(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['java']) : '';
}

export { highlightJava };

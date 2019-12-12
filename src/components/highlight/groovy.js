import Prism from 'prismjs';

function highlightGroovy(rawCode) {
  return rawCode ? Prism.highlight(rawCode, Prism.languages['groovy']) : '';
}

export { highlightGroovy };

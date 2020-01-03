import CodeSnippet from '../code-snippet';
import { highlightHtml } from '../../highlight/html';

const testCases = {};
const noRenderCases = {};

testCases.everything = {
  component: CodeSnippet,
  description: 'A CodeSnippet with every feature (edit buttons, title)',
  props: {
    code: `<h1>hi</h1>`,
    highlighter: () => highlightHtml,
    filename: 'index.html',
    edit: {
      html: '<h1>gurd murn!</h1>',
      css: 'h1 {color: red}',
      js: "console.log('hurn')",
      resources: {
        js: [],
        css: []
      },
      frontMatter: {
        title: 'My Code',
        description: 'cool code by mapbox',
        pathname: '/site'
      }
    }
  }
};

testCases.noEdit = {
  component: CodeSnippet,
  description: 'CodeSnippet without edit buttons',
  props: {
    code: `<h1>hi</h1>`,
    highlighter: () => highlightHtml,
    filename: 'index.html'
  }
};

testCases.noTitle = {
  component: CodeSnippet,
  description: 'CodeSnippet without title',
  props: {
    code: `<h1>hi</h1>`,
    highlighter: () => highlightHtml
  }
};

export { testCases, noRenderCases };

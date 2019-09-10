import CodeSnippetTitle from '../code-snippet-title';

const testCases = {};

testCases.basic = {
  component: CodeSnippetTitle,
  description: 'Basic',
  props: {
    filename: 'MainActivity.java'
  }
};

testCases.withLink = {
  component: CodeSnippetTitle,
  description: 'With a link',
  props: {
    filename: 'MainActivity.java',
    link: 'https://github.com/mapbox/'
  }
};

export { testCases };

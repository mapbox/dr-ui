/*
CodeSnippet with every feature
*/
import React from 'react';
import CodeSnippet from '../code-snippet';
import { highlightHtml } from '../../highlight/html';

export default class Everything extends React.Component {
  render() {
    return (
      <CodeSnippet
        code={`<h1>Hello world!</h1>`}
        highlighter={highlightHtml}
        filename="index.html"
        edit={{
          html: '<h1>Hello world!</h1>',
          css: 'h1 {color: red}',
          js: "console.log('hello!')",
          resources: {
            js: [],
            css: []
          },
          frontMatter: {
            title: 'My Code',
            description: 'cool code by mapbox',
            pathname: '/dr-ui'
          }
        }}
      />
    );
  }
}

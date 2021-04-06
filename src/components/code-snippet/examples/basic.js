/*
Basic.
*/
import React from 'react';
import CodeSnippet from '../code-snippet';
import { highlightHtml } from '../../highlight/html';

export default class Basic extends React.Component {
  render() {
    return (
      <CodeSnippet code={`<h1>Hello world!</h1>`} highlighter={highlightHtml} />
    );
  }
}

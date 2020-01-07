/*
Basic.
*/
import React from 'react';
import CodeSnippet from '../code-snippet';
import { highlightHtml } from '../../highlight/html';

export default class Example extends React.Component {
  render() {
    return <CodeSnippet highlighter={() => highlightHtml} code="<h1>hi</h1>" />;
  }
}

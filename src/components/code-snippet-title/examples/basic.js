/*
Basic.
*/
import React from 'react';
import CodeSnippetTitle from '../code-snippet-title';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <CodeSnippetTitle
        filename="MainActivity.java"
        link="https://github.com/mapbox/"
      />
    );
  }
}

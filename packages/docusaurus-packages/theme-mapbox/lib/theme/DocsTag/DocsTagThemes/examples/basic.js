/*
Themes are accessible through other components such as Note and Tag.
*/
import React from 'react';
import Note from '@theme/Note';
import DocsTag from '@theme/DocsTag';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <div>
        <Note theme="new">New note.</Note>
        <DocsTag theme="new" />
        <DocsTag theme="new" small={true} />
        <DocsTag theme="new" icon={true} />
        <DocsTag theme="new" small={true} icon={true} />
      </div>
    );
  }
}

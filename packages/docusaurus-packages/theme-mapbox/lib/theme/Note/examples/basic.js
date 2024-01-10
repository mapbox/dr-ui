/*
Basic.
*/
import React from 'react';
import Note from '../note';

export default class Basic extends React.PureComponent {
  render() {
    return (
      <Note>
        <p>Here is a little thing to note.</p>
      </Note>
    );
  }
}

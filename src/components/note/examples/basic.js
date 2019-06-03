/*
Basic.
*/
import React from 'react';
import Note from '../note';
import BookImage from '../../book-image/book-image';

export default class Example extends React.Component {
  render() {
    return (
      <Note imageComponent={<BookImage size="60" />}>
        Here is a little thing to note.
      </Note>
    );
  }
}

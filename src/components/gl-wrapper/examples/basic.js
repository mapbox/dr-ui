/*
Basic.
*/
import React from 'react';
import GLWrapper from '../gl-wrapper';

export default class Basic extends React.Component {
  render() {
    return (
      <GLWrapper>
        <iframe
          src="https://giphy.com/embed/JIX9t2j0ZTN9S"
          width="480"
          height="480"
          frameBorder="0"
          allowFullScreen
        />
      </GLWrapper>
    );
  }
}

import GLWrapper from '../gl-wrapper';
import React from 'react';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: GLWrapper,
  description: 'Basic',
  props: {
    map: (
      <iframe
        src="https://giphy.com/embed/JIX9t2j0ZTN9S"
        width="480"
        height="480"
        frameBorder="0"
        allowFullScreen
      />
    )
  }
};

export { testCases, noRenderCases };

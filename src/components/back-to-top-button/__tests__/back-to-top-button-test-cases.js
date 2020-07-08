import React from 'react';
import BackToTopButton from '../back-to-top-button';
import Basic from '../examples/basic';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  description: 'Just the button',
  element: <Basic />
};

testCases.tall = {
  description: 'Gave this button some breathing room',
  element: (
    <div style={{ marginTop: '1000px' }}>
      <BackToTopButton />
    </div>
  )
};

export { testCases, noRenderCases };

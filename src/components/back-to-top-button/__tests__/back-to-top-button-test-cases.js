import React from 'react';
import BackToTopButton from '../back-to-top-button';

const testCases = {};
const noRenderCases = {};

testCases.basic = {
  component: BackToTopButton,
  description: 'Just the button',
  props: {}
};

testCases.tall = {
  description: 'Gave this button some breathing room',
  element: (
    <div style={{ marginTop: '1000px' }}>
      <BackToTopButton />
    </div>
  )
};

noRenderCases.basic = {
  component: BackToTopButton,
  description: 'Just the button',
  props: {}
};

export { testCases, noRenderCases };

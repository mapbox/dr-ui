import React from 'react';
import ErrorBoundary from '../error-boundary';

const testCases = {};

const BadFunction = () => {};

testCases.basic = {
  description: 'Basic',
  component: ErrorBoundary,
  props: {
    children: 'My cool website'
  }
};

testCases.oops = {
  description: 'Trigger error',
  component: ErrorBoundary,
  props: {
    children: (
      <div>
        My cool website <BadFunction />
      </div>
    )
  }
};

export { testCases };

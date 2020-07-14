import React from 'react';
import Basic from '../examples/basic';
import ErrorBoundary from '../error-boundary';

const testCases = {};

testCases.basic = {
  description: 'Basic',
  element: <Basic />
};

const BadFunction = () => {};

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

testCases.oopsCustom = {
  description: 'Trigger error with custom title and note contents',
  component: ErrorBoundary,
  props: {
    errorNoteTitle: 'Well this is embarassing',
    errorNote: (
      <p>This feature is having trouble loading, please try again later.</p>
    ),
    children: (
      <div>
        My cool website <BadFunction />
      </div>
    )
  }
};

export { testCases };

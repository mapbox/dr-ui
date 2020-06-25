/*
Trigger an error
*/
import React from 'react';
import ErrorBoundary from '../error-boundary';

export default class Basic extends React.Component {
  render() {
    const BadFunction = () => {};

    return (
      <ErrorBoundary>
        <div>
          This content will trigger and error <BadFunction />
        </div>
      </ErrorBoundary>
    );
  }
}

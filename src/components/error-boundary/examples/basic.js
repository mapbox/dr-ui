/*
Basic.
*/
import React from 'react';
import ErrorBoundary from '../error-boundary';

export default class Basic extends React.Component {
  render() {
    return (
      <ErrorBoundary>This content does not trigger an error.</ErrorBoundary>
    );
  }
}
